"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Microapp3Screen = Microapp3Screen;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _microfront2Rn = require("microfront2-rn");
var _sharedRn = require("shared-rn");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function Microapp3Screen({
  title = 'Microapp 3'
}) {
  const [counter, setCounter] = (0, _react.useState)(0);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.container,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_sharedRn.AppBar, {
      title: title,
      subtitle: "microapp3-rn"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.section,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: styles.sectionTitle,
        children: "Bot\xF5es"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Text, {
        style: styles.counter,
        children: ["Contador: ", counter]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.buttonsRow,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: styles.buttonSlot,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_sharedRn.PrimaryButton, {
            label: "Incrementar",
            onPress: () => setCounter(c => c + 1)
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: styles.buttonSlot,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_sharedRn.PrimaryButton, {
            label: "Decrementar",
            variant: "outline",
            onPress: () => setCounter(c => c - 1)
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_sharedRn.PrimaryButton, {
        label: "Resetar",
        variant: "outline",
        onPress: () => setCounter(0)
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.section,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: styles.sectionTitle,
        children: "Microfronts"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_microfront2Rn.Microfront2Card, {
        title: "MF2 via Microapp3"
      })]
    })]
  });
}
const styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: _sharedRn.colors.surface,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: _sharedRn.colors.border,
    marginVertical: _sharedRn.spacing.xs
  },
  section: {
    padding: _sharedRn.spacing.md
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: _sharedRn.colors.text,
    marginBottom: _sharedRn.spacing.sm
  },
  counter: {
    fontSize: 14,
    color: _sharedRn.colors.textMuted,
    marginBottom: _sharedRn.spacing.sm
  },
  buttonsRow: {
    flexDirection: 'row',
    marginBottom: _sharedRn.spacing.sm
  },
  buttonSlot: {
    flex: 1,
    marginRight: _sharedRn.spacing.sm
  }
});
//# sourceMappingURL=index.js.map