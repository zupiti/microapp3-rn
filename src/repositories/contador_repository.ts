import {ContadorService} from '../services/contador_service';
import type {ContadorSessao} from '../entities';

/**
 * Data layer (`repositories/`).
 * Orchestrates services and normalizes for hooks.
 */
export class ContadorRepository {
  static normalizarContador(resposta: unknown): ContadorSessao {
    if (
      resposta &&
      typeof resposta === 'object' &&
      'valor' in (resposta as Record<string, unknown>)
    ) {
      return resposta as ContadorSessao;
    }
    const payload = (resposta ?? {}) as {data?: ContadorSessao};
    if (payload.data && typeof payload.data.valor === 'number') {
      return payload.data;
    }
    return {valor: 0, atualizadoEm: new Date().toISOString()};
  }

  static extractApiErrorMessage(error: unknown): string {
    if (typeof error === 'string' && error.trim().length > 0) {
      return error.trim();
    }
    if (error instanceof Error) {
      return error.message;
    }
    return 'Não foi possível concluir a operação.';
  }

  static async buscarContador(): Promise<ContadorSessao> {
    const payload = await ContadorService.getContadorPayload();
    return ContadorRepository.normalizarContador(payload);
  }

  static async salvarValor(valor: number): Promise<ContadorSessao> {
    return ContadorService.postContadorValor(valor);
  }
}
