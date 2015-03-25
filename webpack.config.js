'use strict';

var path = require('path'),
    webpack = require("webpack");

module.exports = {
  devtool: '#inline-source-map',
  resolve: {
        root: [path.join(__dirname, "bower_components")]
  },
  plugins: [
      new webpack.ResolverPlugin(
        [new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])],
        ["normal", "loader"]
      ),
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "windows.jQuery": "jquery",
          _: "underscore",
          angular: 'exports?global.angular!angular',
      })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded" },
      { test: /\.gif$/, loader: 'url?limit=150000&mimetype=image/gif' },
      { test: /\.png$/, loader: 'url?limit=150000&mimetype=image/png' },
      { test: /\.jpg$/, loader: 'file' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.svg$/, loader: 'url?mimetype=image/svg+xml' },
      { test: /\.woff2?$/, loader: 'url?mimetype=application/font-woff' },
      { test: /\.eot$/, loader: 'url?mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url?mimetype=application/font-woff' },
      { test: /\Modernizr.js$/, loader: 'imports?this=>global' },
    ]
  },
  entry: {
        all: "./app/assets/javascript/default",
  },
  output: {
    path: __dirname + '/dist/assets/javascript/',
    filename: "[name].bundle.js",
    publicPath: '/assets/javascript/',
    chunkFilename: "[id].bundle.js"
  },
  debug: true,
  watch: true,
  watchDelay: 300,
}