export type BuildPaths = {
  output: string;
  entry: string;
  hmtl: string;
};

export type BuildWebpackConfigProps = {
  buildPaths?: BuildPaths;
};
