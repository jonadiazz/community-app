const path = require('path');
const webpack = require('webpack');

const context = path.resolve(__dirname, '../..');

module.exports = {
  context,
  entry: './src/client',
  module: {
    rules: [{
      test: /\.(eot|woff|svg|ttf)$/,
      include: /src\/assets\/fonts/,
      loader: 'file-loader',
      options: {
        outputPath: '/fonts/',
        publicPath: '/fonts/',
      },
    }, {
      test: /\.(jsx?|svg)$/,
      exclude: [
        /node_modules\/(?!appirio-tech.*|topcoder|tc-)/,
        /src\/assets\/fonts/,
      ],
      loader: 'babel-loader',
      /* Babel-loader is configured by .babelrc in the project's root folder. */
    }],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../build'),
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        /* Some isomorphic code relies on this variable to determine, whether
         * it is executed client- or server-side. */
        FRONT_END: true,
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
};