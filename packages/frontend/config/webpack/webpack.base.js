const path = require("path");
const webpack = require("webpack");

module.exports = (options) => ({
  mode: options.mode,

  entry: options.entry,

  output: Object.assign(
    {
      path: path.resolve(process.cwd(), `dist`),
    },
    options.output
  ),

  optimization: options.optimization,

  plugins: options.plugins.concat([
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ]),

  devtool: options.devtool,
  performance: options.performance || {},
  devServer: options.devServer,

  module: {
    rules: options.module.rules.concat([
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(ansi-regex)\/).*/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/env",
                {
                  targets: [">1%"],
                },
              ],
              "@babel/react",
            ],
            plugins: ["@babel/proposal-class-properties", "@babel/syntax-dynamic-import"],
          },
        },
      },
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.(html)$/,
        loader: "string-replace-loader",
        options: {
          search: "&&API_URL&&",
          replace: process.env.API_BASE_URL,
          flags: "g",
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images",
            },
          },
        ],
        // loader: require.resolve("url-loader"),
        // options: {
        //   name: "[name].[ext]",
        //   limit: 10000,
        //   outputpath: "assets/images",
        // },
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/files",
            },
          },
        ],
      },
    ]),
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css"],
    modules: [
      path.resolve(process.cwd(), "../../node_modules"),
      path.resolve(process.cwd(), "node_modules"),
      path.resolve(process.cwd(), "src"),
    ],
  },
});
