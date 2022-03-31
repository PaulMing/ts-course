## webpack中使用ts
> 本质：loader中添加处理ts的相关loader即可，ts配置文件依旧是tsconfig.json
> npm i typescript ts-loader -S
> npm i -D @babel/core @babel/preset-env babel-loader core-js;//其能编译处理'语法糖'层面的改动，并不能处理新语法[例如promise]，因此兼容低版本浏览器依旧需要借助babel[babel默认也是不处理新语法的，但可添加预设，预设提供polyfill底层模拟实现新语法，例如经常使用的core-js，其会提供部分js执行环境，老版本浏览器不兼容的js可在该环境下运行来实现兼容]
