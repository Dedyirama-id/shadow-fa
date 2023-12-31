const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const options = {};

module.exports = {
  entry: {
    main: './index.js',
    fa: './style.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main-[contenthash].js',
    assetModuleFilename: 'img/[name]-[hash]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
    }),
    new WebpackManifestPlugin(options),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        style: {
          name: 'style',
          test: /style\.s?css$/,
          chunks: 'all',
          enforce: true,
        },
        editor: {
          name: 'editor',
          test: /editor\.s?css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  }
};
