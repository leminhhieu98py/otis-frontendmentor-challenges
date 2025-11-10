import commonConfig from './webpack.common.config.js';
import { merge } from 'webpack-merge';

const devConfig = {
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    port: 7979,
  },
};

export default merge(commonConfig, devConfig);
