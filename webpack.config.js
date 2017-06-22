var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader','sass-loader'],
        publicPath: '/dist'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port:9000,
    stats: 'errors-only'
  },
  plugins : [
    new HtmlWebpackPlugin({
      title: 'globant-iot',
      minify: {
        collapseWhitespace: false //for dev, change to true on prod.
      },
      hash: true,
      template: __dirname + '/src/templates/tmpl-index.html'
  }),
  new ExtractTextPlugin({
    filename: "styles/app.css",
    disable: false,
    allChunks: true
  })
]
};
