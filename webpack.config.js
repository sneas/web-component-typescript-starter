const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
    mode: 'production',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
}

const demoConfig = {
    plugins: [new HtmlWebpackPlugin(
        {template: './public/index.html'}
    )],
    output: {
        path: path.resolve(__dirname, 'demo')
    }
}

const devConfig = {
    mode: 'development',
    devtool: 'source-map'
}

const prodConfig = {
}

module.exports = env => {
    switch(true) {
        case env.development:
            return merge(commonConfig, demoConfig, devConfig);
        case env.demo:
            return merge(commonConfig, demoConfig);
        case env.production:
            return merge(commonConfig, prodConfig);
        default:
            throw new Error('No matching configuration was found!');
    }
}
