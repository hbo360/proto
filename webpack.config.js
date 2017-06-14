var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'app.bundle.js'
  },
  plugins : [
    new HtmlWebpackPlugin({
      title: 'globant-iot',
      minify: {
        collapseWhitespace: true
      },
      template: __dirname + '/src/templates/tmpl-index.html'
  })]
};
