var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports =
{
 entry: './src/main.js',
 output: {
  path: './src',
  filename: 'bundle.js'
 },
 output: { path: __dirname, filename: 'bundle.js' },
 plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:3333' })
  ],
 devServer: {
  inline: true,
  contentBase: './src',
  port: 3333
 },
 module: {
  loaders: [
   {
    test: /.jsx?$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
     presets: [ 'react','es2015']
    }
   }
  ]
 },
 resolve: {
  extensions: ['', '.js', '.jsx']
 }
};
