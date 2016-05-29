var Webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    'babel-polyfill',
    './src',
  ],
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
  },
  plugins: [
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['stage-0', 'react', 'es2015'],
        },
      },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass?sourceMap',
        ],
      },
      {
        test: /\.json?$/,
        exclude: /node_modules/,
        loader: 'json-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /node_modules/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
    plugins: [new Webpack.HotModuleReplacementPlugin()],
  },
};
