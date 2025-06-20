import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Для файлов .ts и .tsx
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Для файлов .css
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Для изображений
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
      // Добавьте другие лоадеры по мере необходимости
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.[contenthash].html",
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 5000,
  },
};

export default config;
