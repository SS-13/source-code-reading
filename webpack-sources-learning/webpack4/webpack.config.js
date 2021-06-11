const path = require("path");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    port: 9000,
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
  },
  optimization: {
    moduleIds: "named",
    chunkIds: "named",
  },
};
