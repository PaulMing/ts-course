const path = require('path');
// const htmlwebpackplugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    enviroument: {
      // 不使用箭头函数
      arrowFunction: false
    }
  },
  // 指定webpack打包时要使用的模块
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            //指定加载器
            loader: 'babel-loader',
            //设置babel
            options: {
              //设置预定义的环境
              presets: [
                //指定环境的插件
                "@babel/preset-env",
                //配置信息
                {
                  targets: {
                    "chrome": "64",
                    "ie": "11"
                  },
                  "corejs": "3",
                  // 使用corejs的方式 usage表示按需加载
                  "useBuiltIns": "usage"
                }
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // new htmlwebpackplugin({
    //   title: '自定义title'
    // })
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
}
