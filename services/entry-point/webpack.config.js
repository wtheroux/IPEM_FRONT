const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
const isProduction = false;

module.exports = {
  entry: './src/index.js',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
      {
        test: /\.bundle\.ts$/,
        use: {
          loader: 'bundle-loader',
          options: {
            name: '[name]',
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
                // Add other module options here if needed
              },
              sourceMap: true, // Add this if you want source maps
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@entry-point': path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        'remote-modules-employee-info': isProduction
          ? ''
          : 'remoteModulesEmployeeInfo@http://localhost:3003/remoteEntry.js',
        'remote-modules-employee-time-off': isProduction
          ? ''
          : 'remoteModulesEmployeeTimeOff@http://localhost:3002/remoteEntry.js',
        'remote-modules-employee-vacation': isProduction
          ? ''
          : 'remoteModulesEmployeeVacation@http://localhost:3001/remoteEntry.js'
      },
      shared: {
        'react': {
          singleton: true,
          requiredVersion: deps['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        'react-redux': {
          singleton: true,
          requiredVersion: deps['react-redux'],
        },
        'ipem-shared': {
          singleton: true,
          requiredVersion: deps['ipem-shared']
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
};