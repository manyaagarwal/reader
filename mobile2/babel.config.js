module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  // plugins: [["relay", { artifactDirectory: "./src/__generated__" }]],
  plugins: ["relay"],
  env: {
    production: {
      plugins: ["react-native-paper/babel"],
    },
  },
};
