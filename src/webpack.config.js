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
  output: {
    path: path.join(__dirname, "dist"),
  }, //출력
};
