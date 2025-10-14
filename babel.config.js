module.exports = function(api) {
  const isTest = api.env && api.env('test');
  if (isTest) {
    api.cache(false);
    return {
      presets: ['babel-preset-expo'],
      plugins: []
    };
  }
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin'
    ]
  };
};
