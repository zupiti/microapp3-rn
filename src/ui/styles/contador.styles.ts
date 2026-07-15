import {StyleSheet} from 'react-native';
import {colors, spacing} from 'shared-rn';

export const contadorStyles = StyleSheet.create({
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
