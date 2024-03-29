const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index.js',
  devServer: {
    port: 3002,
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
        issuer: {
          not: [/\.module\.scss$/],
        },
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
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@modules/time-off': path.join(__dirname, './src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new ModuleFederationPlugin({
      name: 'remoteModulesEmployeeTimeOff',
      filename: 'remoteEntry.js',
      exposes: {
        './TimeOff': './src/app',
      },
      shared: {
        'react': {
          requiredVersion: deps['react'],
          singleton: true,
        },
        'react-dom': {
          requiredVersion: deps['react-dom'],
          singleton: true,
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
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
};