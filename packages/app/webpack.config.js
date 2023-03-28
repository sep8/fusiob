const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isProduction = process.env.NODE_ENV == "production";
const isTSCheck = !!process.env.TSCHECK;

const config = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, `dist`)
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
  plugins: [],
};

if (isProduction) {
  config.mode = "production";
} else {
  config.mode = "development";
  config.devtool = "inline-source-map";
  if (isTSCheck) {
    config.plugins.push(
      new ForkTsCheckerWebpackPlugin({
        async: false,
        typescript: {
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
        },
      })
    );
  } else {
    config.plugins.push(new HtmlWebpackPlugin({ template: "./index.html" }))
  }
}

module.exports = config;
