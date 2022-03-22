const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    // 指定webpack打包时要使用的模块
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new htmlwebpackplugin({
            title: '自定义title'
        })
    ],
    resolve: {
        extensions: ['.ts','.js']
    }
}
