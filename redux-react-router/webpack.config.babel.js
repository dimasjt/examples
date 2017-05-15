import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';
import WebpackHtmlPlugin from 'html-webpack-plugin';

const webpackConfig = {
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],
  output: {
    path: __dirname + 'dist',
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new WebpackNotifierPlugin(),
    new WebpackHtmlPlugin({
      title: 'Learn Redux',
      template: 'src/index.html',
    }),
  ],
  devServer: {
    contentBase: __dirname + '/dist',
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
};

export default webpackConfig;
