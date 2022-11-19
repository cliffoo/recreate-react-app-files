import type { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import EslintWebpackPlugin from "eslint-webpack-plugin";

const extensions = [".ts", ".tsx", ".js", ".jsx"];

const config: Configuration = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.tsx",
  resolve: { extensions },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new EslintWebpackPlugin({ extensions }),
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ]
};

export default config;
