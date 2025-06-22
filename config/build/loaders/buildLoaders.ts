import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = () => {
    const babelLoader = {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        },
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    const styleAndCssLoader = {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
    };

    const fileLoader = {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    };

    return [babelLoader, tsLoader, fileLoader, styleAndCssLoader];
};
