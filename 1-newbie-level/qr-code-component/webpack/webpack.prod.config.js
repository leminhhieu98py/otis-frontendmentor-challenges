import commonConfig from './webpack.common.config.js';
import { merge } from 'webpack-merge';

const prodConfig = {
  mode: 'production',
  output: {
    ...commonConfig.output,
    filename: 'main.[contenthash].js',
  },
};

export default merge(commonConfig, prodConfig);
