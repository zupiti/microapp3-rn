import React from 'react';
import {View} from 'react-native';
import {AppBar} from 'shared-rn';
import {useContador} from '../../hooks/use-contador';
import {PainelContador} from '../components/painel-contador';
import {MicrofrontsSecao} from '../components/microfronts-secao';
import {contadorStyles as styles} from '../styles/contador.styles';

export type Microapp3ScreenProps = {
  title?: string;
};

/**
 * Thin screen: hooks + components only. No data useEffect here.
 */
export function Microapp3Screen({
  title = 'Microapp 3',
}: Microapp3ScreenProps): React.JSX.Element {
  const contador = useContador();
  return (
    <View style={styles.container}>
      <AppBar title={title} subtitle="microapp3-rn" />
      <PainelContador
        rotulo={contador.rotulo}
        isLoading={contador.isLoading}
        isSaving={contador.isSaving}
        onIncrementar={() => {
          contador.incrementar().catch(() => undefined);
        }}
        onDecrementar={() => {
          contador.decrementar().catch(() => undefined);
        }}
        onResetar={() => {
          contador.resetar().catch(() => undefined);
        }}
      />
      <MicrofrontsSecao />
    </View>
  );
}
