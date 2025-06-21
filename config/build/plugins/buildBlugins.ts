import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildWebpackConfigProps } from '../types/types';

export const buildPlugins = ({ buildPaths }: BuildWebpackConfigProps) => {
    return [
        new HtmlWebpackPlugin({
            template: buildPaths.hmtl,
        }),
        new webpack.ProgressPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ];
};
