import { Configuration } from 'webpack';

declare const config: Configuration & {
  output: {
    publicPath: string;
  };
};

export default config;