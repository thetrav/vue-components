// this webpack supports the final web application, both as a development server, 
// but also the bundling that produces a packaged and minified file for production.

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const compiler = require('@vue/compiler-sfc')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  devServer: {
    host: "0.0.0.0",
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new VueLoaderPlugin({
      compiler: compiler
    })
  ]
}
