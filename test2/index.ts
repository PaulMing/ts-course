// number string boolean undefined null object array 

// 字面量
let num:10;
num = 10;
// 联合类型 可使用｜连接多个类型 -> 类型就是ts类型
let sex: 'male'|'female';
sex = 'male';
let val: number | string = true;

// any: 任意类型，设置为any后相当于对该变量关闭了ts的类型检测，不建议使用any类型
let d: any;
let e;//若仅声明不赋值，ts解析器自动判断变量的类型为any，隐时的any，若是定义其就是类型
d: 10;
d: 'aaa';
d: true;

let f:string = d;//any可赋给其它任何类型/变量

let g: unknown;//表示未知类型的值，实际就是一个类型安全的any -> unknown类型的变量，不能直接赋值给其它变量，会抱编译错误，解决方案：类型判断、类型断言
let a1:string = 'hello'
g = 'aaa';
a1 = g;

if(typeof g === 'string') {
  a1 = g;
}

// 类型断言：可用来告诉解析器变量的实际类型
// 语法： 变量 as 类型、<类型>变量
a1 = g as string;
a1 = <string>g;





function func():number{
  return '';
}

function func():number|string{
  return '';
}
function func():void{
  return '';
}
function func():void{
  return;
}
function func():void{
  return undefined
}
function func():void{
  return null
}
// 不写，其会进行类型推断
// void: 表示函数没有返回值，不写、undefined、null


// never表示永远不会返回结果
function fn():never {
  throw new Error('报错了')
}











