"use strict";

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Microfront2Card } from 'microfront2-rn';
import { AppBar, PrimaryButton, colors, spacing } from 'shared-rn';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Microapp3Screen({
  title = 'Microapp 3'
}) {
  const [counter, setCounter] = useState(0);
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [/*#__PURE__*/_jsx(AppBar, {
      title: title,
      subtitle: "microapp3-rn"
    }), /*#__PURE__*/_jsxs(View, {
      style: styles.section,
      children: [/*#__PURE__*/_jsx(Text, {
        style: styles.sectionTitle,
        children: "Bot\xF5es"
      }), /*#__PURE__*/_jsxs(Text, {
        style: styles.counter,
        children: ["Contador: ", counter]
      }), /*#__PURE__*/_jsxs(View, {
        style: styles.buttonsRow,
        children: [/*#__PURE__*/_jsx(View, {
          style: styles.buttonSlot,
          children: /*#__PURE__*/_jsx(PrimaryButton, {
            label: "Incrementar",
            onPress: () => setCounter(c => c + 1)
          })
        }), /*#__PURE__*/_jsx(View, {
          style: styles.buttonSlot,
          children: /*#__PURE__*/_jsx(PrimaryButton, {
            label: "Decrementar",
            variant: "outline",
            onPress: () => setCounter(c => c - 1)
          })
        })]
      }), /*#__PURE__*/_jsx(PrimaryButton, {
        label: "Resetar",
        variant: "outline",
        onPress: () => setCounter(0)
      })]
    }), /*#__PURE__*/_jsxs(View, {
      style: styles.section,
      children: [/*#__PURE__*/_jsx(Text, {
        style: styles.sectionTitle,
        children: "Microfronts"
      }), /*#__PURE__*/_jsx(Microfront2Card, {
        title: "MF2 via Microapp3"
      })]
    })]
  });
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    marginVertical: spacing.xs
  },
  section: {
    padding: spacing.md
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm
  },
  counter: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: spacing.sm
  },
  buttonsRow: {
    flexDirection: 'row',
    marginBottom: spacing.sm
  },
  buttonSlot: {
    flex: 1,
    marginRight: spacing.sm
  }
});
//# sourceMappingURL=index.js.map