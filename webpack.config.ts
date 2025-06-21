import webpack from "webpack";
import "webpack-dev-server";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (params: any) => {
  console.log(params);
  const config: webpack.Configuration = buildWebpackConfig();
  return config;
};
