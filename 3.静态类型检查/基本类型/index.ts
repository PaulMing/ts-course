// number
let num:number = 20;

// string
let str:string = 'hello';

// boolean
let bol:boolean = true;

// undefined/null -> 类型本身用处不多，默认情况下它们是所有类型的子类型[可直接赋给其它类型变量]
let und:undefined = undefined;
let nul:null = null;

// 对象 -> 直接写成object意义不大，很多类型都可归属于object，应该写具体的数据对象
const obj:object;
obj = {};
obj = [];
obj = () => {};
const obj1:{name:string,age:number};
obj1 = { 
  name: '',
  age: 18
}
// 多属性
// [propName:string]: any -> any表示任意类型的属性，也可以为其它类型，但要保持所有属性值类型一致，否则就只能用any
let obj2: {name:string, [propName:string]:string}
obj2 = {
  name: '',
  sex: ''
}
let obj3: {
  uid:number,
  [propName:string]:number
}
obj3 = {
  uid: 10,
  age: 18
}

// 数组 -> 类型[]或者Array<类型>
const arr:number[];
arr = [1,2,3];
const arr1:Array<string>;
arr1 = ['a','b','c']

// 元组tuple: 固定长度的数组
const tup:[string,string] = ['tup1','tup2'];
const tup1:[number,number,string];
tup1 = [1,2,'tup']

// 函数
// 语法：(param1:类型1, param2:类型2, ....) => 返回值
const func:Function;
const func1:(a:number,b:number) => string;
func1 = function(a:number,b:number):string {
  return '' + a + b;
}
// 函数参数、返回值
function sum(a:number, b?:number):number {
  return a + b;
}
sum(123,456)

// void -> 仅用于函数返回值：表示函数没有返回值，函数内部省略不写/undefined/null都对应该类型 -> 函数中不写返回值类型，默认也是void,类型推断
function func2():void{
  return null
}
// never表示永远不会返回结果
function func():never {
  throw new Error('报错了')
}

// 字面量
let val:10=10;
let tag:'add'='add';

// any -> 任意类型[等同于对该变量关闭了ts的类型检测]，any类型变量可赋值给其它任何类型变量
let a;//若仅声明不赋值，ts解析器自动判断变量的类型为any，隐式的any
let b:any = 100;
let c:any = '';
let d:string = a;

// unknown -> 未知类型的值[实际就是一个类型安全的any]，不能直接赋值给其它变量，编译报错，解决方案：类型判断、类型断言[类型断言实际就是告诉编译器假设这是个xx值，更像是提供一种类型选择，避免编译出错]
let e:unknown;
e='hello'
let st:string='world';
st = e;
// 类型判断
if(typeof e === 'string') {
  st = e;
}
// 类型断言：用来告诉解析器变量的实际类型
// 语法：变量 as 类型、<类型>变量
st = e as string;
st = <string>e

// 联合类型 -> 可使用|连接多个类型，表示多个类型选择其中一个
let sex:'male'|'female' = 'male';
let value:number|string = 101;
// &、｜ -> &表示且的关系、｜表示或的关系
let val1:number|string = 100;
let val2:{name:string} & {age:number} = {
  name: 'a',
  age: 18
}

// 类型推断：ts具备类型推断能力，例如变量定义过程中可以不写类型，其会根据值来推断类型
let infer = 'hello';//类型推断infer就是string类型
// infer = 200;