import webpack from "webpack";
import { buildLoaders } from "./loaders/buildLoaders";
import { buildPlugins } from "./plugins/buildBlugins";
import { BuildWebpackConfigProps } from "./types/types";
export const buildWebpackConfig = ({
  buildPaths,
}: BuildWebpackConfigProps): webpack.Configuration => {
  return {
    mode: "development",
    entry: buildPaths.entry,
    devServer: {
      port: 5000,
    },
    module: {
      rules: buildLoaders(),
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: buildPlugins({ buildPaths }),
    output: {
      path: buildPaths.output,
      filename: "bundle.[contenthash].js",
      clean: true,
    },
  };
};
