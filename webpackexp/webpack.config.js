/**
 * Created by yangz on 2015/12/10.
 */
module.exports = {
  entry: "./webpackexp/entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};