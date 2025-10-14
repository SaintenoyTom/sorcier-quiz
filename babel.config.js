module.exports = function(api) {
  api.cache(true);
  const presets = ['babel-preset-expo'];
  const plugins = [];

  // Désactive le plugin reanimated pour les tests
  if (process.env.JEST_WORKER_ID) {
    return { presets, plugins };
  }

  plugins.push('react-native-reanimated/plugin');
  return { presets, plugins };
};
