module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["relay", "react-native-paper/babel"],
      },
    },
  };
};
