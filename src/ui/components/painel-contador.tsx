import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {PrimaryButton, colors} from 'shared-rn';
import {contadorStyles as styles} from '../styles/contador.styles';

type PainelContadorProps = {
  rotulo: string;
  isLoading: boolean;
  isSaving: boolean;
  onIncrementar: () => void;
  onDecrementar: () => void;
  onResetar: () => void;
};

/**
 * Presentational counter controls — actions come from the hook via screen.
 */
export function PainelContador({
  rotulo,
  isLoading,
  isSaving,
  onIncrementar,
  onDecrementar,
  onResetar,
}: PainelContadorProps): React.JSX.Element {
  if (isLoading) {
    return (
      <View style={styles.section}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }
return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Botões</Text>
      <Text style={styles.counter}>
        {isSaving ? `${rotulo}…` : rotulo}
      </Text>
      <View style={styles.buttonsRow}>
        <View style={styles.buttonSlot}>
          <PrimaryButton
            label="Incrementar"
            onPress={() => {
              if (!isSaving) {
                onIncrementar();
              }
            }}
          />
        </View>
        <View style={styles.buttonSlot}>
          <PrimaryButton
            label="Decrementar"
            variant="outline"
            onPress={() => {
              if (!isSaving) {
                onDecrementar();
              }
            }}
          />
        </View>
      </View>
      <PrimaryButton
        label="Resetar"
        variant="outline"
        onPress={() => {
          if (!isSaving) {
            onResetar();
          }
        }}
      />
    </View>
  );
}
