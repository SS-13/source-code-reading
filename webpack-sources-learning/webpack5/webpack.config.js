const path = require("path");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  cache: {
    type: "filesystem",
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "./dist"),
    proxy: {
      "/api": "http://localhost:3000",
    },
    inline: true,
    hot: true,
    quiet: true,
    port: 8082,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/i,
        type: "asset",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ProgressBarPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["You application is running here http://localhost:3000"],
        notes: [
          "Some additionnal notes to be displayed unpon successful compilation",
        ],
      },
      onErrors: function (severity, errors) {
        // You can listen to errors transformed and prioritized by the plugin
        // severity can be 'error' or 'warning'
      },
      // should the console be cleared between each compilation?
      // default is true
      clearConsole: true,

      // add formatters and transformers (see below)
      additionalFormatters: [],
      additionalTransformers: [],
    }),
  ],
  experiments: {
    // top level await
    topLevelAwait: true,

    // importAwait: true,
    // importAsync: true,
  },
  optimization: {
    moduleIds: "natural",
    chunkIds: "named",
  },
});
