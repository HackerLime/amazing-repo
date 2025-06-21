import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths } from './config/build/types/types';

export default () => {
    const buildPaths: BuildPaths = {
        output: path.resolve(__dirname, 'dist'),
        entry: path.resolve(__dirname, 'src', 'main.tsx'),
        hmtl: path.resolve(__dirname, 'public', 'index.html'),
    };

    const config: webpack.Configuration = buildWebpackConfig({ buildPaths });
    return config;
};
