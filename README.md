背景

未来发展

能力提供

可选的静态类型检查 + 类型推断
面向对象编程
编译成目标js代码[es3,es5,es6等]、有错误是否可提交[默认是可提交的]


tsconfig.json -> 这里的json可以写注释，其它json并不能写
tsc
tsc -w

tsconfig.json > shell > 默认项


// ts能做的转换仅仅是：语言糖层面的转换，有些新语法并不能实现，babel可以，其是模拟实现
// npm i -D @babel/core @babel/preset-env babel-loader core-js
// core-js提供js环境，老版本浏览器js在该环境下运行来实现好点的兼容性

