export const buildLoaders = () => {
  const babelLoader = {
    test: /\.(js|ts)x?$/, // Match .js, .jsx, .ts, .tsx files
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      // No need to specify options here if using babel.config.json
      // Babel will automatically pick up your babel.config.json
    },
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const styleAndCssLoader = {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  };

  const fileLoader = {
    test: /\.(png|jpg|gif|svg)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  };

  return [babelLoader, tsLoader, fileLoader, styleAndCssLoader];
};
