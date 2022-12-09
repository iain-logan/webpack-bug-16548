import { webpack, MultiStats, Configuration } from "webpack";

const webpackConfig: Configuration = {
  target: "web",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: { onlyCompileBundledFiles: true }
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  },
  output: {
    path: outputDirectory
  }
};
