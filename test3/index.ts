// object
let obj:object
obj = {};
obj = [];
obj = function test(){};

// {}用来指定对象中可包含哪些属性
// {key:value,key:value}
let obj1:{name:string};
obj1={};

let obj2: {
  name: string,
  age?: number
}
obj2 = {name: '', age:20,sex:''}
// [propName:string]: any -> any表示任意类型的属性，也可以为其它类型，但要保持所有prop类型一致，否则就只能用any
let obj3: {name: string, [propName:string]:string}
obj3 = {
  name: 'fs',
  sex: 'sss'
}

let obj4: {
  name: number,
  [propName:string]: number
}
obj4 = {
  name: 10,
  age: 10
}


// 定义函数结构的类型声明
// 语法：(param1:类型, param2:类型2....) => 返回值
let func:Function
let func1:(a:number,b:number) => string;
func1 = function(n1,n2):number{
  return n1+n2
}
func1 = function(n1:string,n2:string):string {
  return n1+n2
}

// 数组
// 类型[]
// Array<类型>
let arr:string[];
arr = ['a','b','c']
let arr1:Array<string>;
arr1 = [1,2,3]

// 元组tuple: 固定长度的数组
let temp: [string,string]
temp = ['a','b'];
let temp1: [number,string,number]
temp1 = [1,'a',2,4]

// 枚举
// enum { A, B}

let k:'a' | 'b' = 'c';

enum Gender {
  male = 0,
  female = 1
}
// let eu: {name: string, gender: 'male'|'female'}
// let eu: {name: string, gender: 0 | 1}
let eu: {name: string, gender:Gender};
eu = {
  name: 'kkk',
  gender: Gender.male
}


// & |
let j: string | number;
let l: string & number;
let z: {name: string} & {age: number} 
z = {name: 'a',age: 18,sex:''}

// 类型别名
type myType = string;
type myType1 = 1|2|3|4|5;
let k: 1|2|3|4|5;
let l: 1|2|3|4|5;
let j:myType1















