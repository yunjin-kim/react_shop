const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  name: 'word-relay-setting',
  mode: 'development', //실서비스 production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    app: ['./client'],
  },//입력

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties',
      ],
      }
    },{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }],
  },
  plugins:[
    new MiniCssExtractPlugin({filename: 'App.css'})
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },//출력
  devServer: {
    publicPath: '/dist/',
    hot: true,
    port: 3001,
  },
};