const HappyPack = require("happypack");
const os = require("os");
//开辟一个线程池
const happyThreadPoll = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    // use: 'happypack/loader?id=babel',
    new HappyPack({
      id: "babel",
      threadPool: happyThreadPoll,
      loaders: [
        {
          loader: "babel-loader",
        },
      ],
    }),
  ],
};
