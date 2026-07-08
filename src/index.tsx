import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Microfront2Card} from 'microfront2-rn';
import {AppBar, PrimaryButton, colors, spacing} from 'shared-rn';

export type Microapp3ScreenProps = {
  title?: string;
};

export function Microapp3Screen({
  title = 'Microapp 3',
}: Microapp3ScreenProps): React.JSX.Element {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <AppBar title={title} subtitle="microapp3-rn" />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Botões</Text>
        <Text style={styles.counter}>Contador: {counter}</Text>
        <View style={styles.buttonsRow}>
          <View style={styles.buttonSlot}>
            <PrimaryButton label="Incrementar" onPress={() => setCounter(c => c + 1)} />
          </View>
          <View style={styles.buttonSlot}>
            <PrimaryButton
              label="Decrementar"
              variant="outline"
              onPress={() => setCounter(c => c - 1)}
            />
          </View>
        </View>
        <PrimaryButton label="Resetar" variant="outline" onPress={() => setCounter(0)} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Microfronts</Text>
        <Microfront2Card title="MF2 via Microapp3" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    marginVertical: spacing.xs,
  },
  section: {
    padding: spacing.md,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  counter: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: spacing.sm,
  },
  buttonsRow: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  buttonSlot: {
    flex: 1,
    marginRight: spacing.sm,
  },
});
