module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: [
          ["relay", { schema: "data/schema.json" }],
          "react-native-paper/babel",
        ],
      },
    },
  };
};
