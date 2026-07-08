const path = require('path');
const {getDefaultConfig} = require('@react-native/metro-config');
const {withMetroConfig} = require('react-native-monorepo-config');

/**
 * Standalone example: resolves microapp3-rn (and its microfront deps) via
 * the Yarn Workspaces shell root, without depending on microapp-main-app-rn.
 * @type {import('@react-native/metro-config').MetroConfig}
 */
module.exports = withMetroConfig(getDefaultConfig(__dirname), {
  root: path.resolve(__dirname, '../..'),
  dirname: __dirname,
});
