import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { buildLoaders } from "./loaders/buildLoaders";
export const buildWebpackConfig = (): webpack.Configuration => {
  return {
    mode: "production",
    entry: "./src/main.tsx",
    output: {
      path: path.resolve(__dirname, "..", "..", "dist"),
      filename: "bundle.[contenthash].js",
      clean: true,
    },
    module: {
      rules: buildLoaders(),
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
    devServer: {
      port: 5000,
    },
  };
};
