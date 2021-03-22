const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", //실서비스에서 producion으로 변경
  devtool: "eval", //빠르게 하겠다
  resolve: {
    extenstions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client"],
  }, //입력
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, //출력
};
