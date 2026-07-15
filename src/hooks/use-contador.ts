import {useCallback, useEffect, useMemo, useState} from 'react';
import {Alert} from 'react-native';
import {ContadorRepository} from '../repositories/contador_repository';
import {
  calcularProximoValor,
  formatarRotuloContador,
} from '../utils/contador_calculo';

interface ContadorState {
  valor: number;
  rotulo: string;
  isLoading: boolean;
  isSaving: boolean;
  incrementar: () => Promise<void>;
  decrementar: () => Promise<void>;
  resetar: () => Promise<void>;
}

/**
 * Owns counter load + mutations. Screens only call the actions.
 */
export function useContador(): ContadorState {
  const [valor, setValor] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const carregar = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    try {
      const sessao = await ContadorRepository.buscarContador();
      setValor(sessao.valor);
    } catch (error) {
      Alert.alert('Erro', ContadorRepository.extractApiErrorMessage(error));
      setValor(0);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const persistir = useCallback(async (proximo: number): Promise<void> => {
    setIsSaving(true);
    try {
      const sessao = await ContadorRepository.salvarValor(proximo);
      setValor(sessao.valor);
    } catch (error) {
      Alert.alert('Erro', ContadorRepository.extractApiErrorMessage(error));
    } finally {
      setIsSaving(false);
    }
  }, []);

  useEffect(() => {
    carregar().catch(() => undefined);
  }, [carregar]);

  const incrementar = useCallback(async (): Promise<void> => {
    await persistir(calcularProximoValor(valor, 1));
  }, [persistir, valor]);

  const decrementar = useCallback(async (): Promise<void> => {
    await persistir(calcularProximoValor(valor, -1));
  }, [persistir, valor]);

  const resetar = useCallback(async (): Promise<void> => {
    await persistir(0);
  }, [persistir]);

  return useMemo(
    () => ({
      valor,
      rotulo: formatarRotuloContador(valor),
      isLoading,
      isSaving,
      incrementar,
      decrementar,
      resetar,
    }),
    [decrementar, incrementar, isLoading, isSaving, resetar, valor],
  );
}
