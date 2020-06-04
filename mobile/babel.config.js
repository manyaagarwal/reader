module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: [
          ["relay", { artifactDirectory: "./src/__generated__" }],
          "react-native-paper/babel",
        ],
      },
    },
  };
};
