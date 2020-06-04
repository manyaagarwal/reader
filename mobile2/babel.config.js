module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [["relay", { artifactDirectory: "./src/__generated__" }]],
  env: {
    production: {
      plugins: ["react-native-paper/babel"],
    },
  },
};
