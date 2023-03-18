const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry:path.resolve(__dirname, 'src/index.tsx'),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, `dist`),
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
  ]
};

module.exports = config;
