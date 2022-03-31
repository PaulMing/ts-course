// 类型别名 -> 主要用于提取些公共类型项
// 语法：type name = {}
type options = {
  label:string,
  value:string,
  disabled?:boolean
}
const selectOptions:options = {
  label: '',
  value: ''
}
type myType = 1|2|3|4|5;
let t1: 1|2|3|4|5;
let t2: 1|2|3|4|5;
let t3:myType

// 枚举 -> 简洁简化代码，常用于容易枚举的值，例如性别、星期
// 语法：enum name{A,B,C}
let user1:{name:string,gender:'male'|'female'} = {name:'',gender:'male'}
let user2:{name:string,gender:0|1}
enum Gender{
  male = 0,
  female = 1
}
let user3:{name:string,gender:Gender};
user3 = {
  name: '',
  gender: Gender.male
}

// 接口：-> 可用于限制某个对象或限制类的结构，主要用于强约束类结构，接口中所有属性都不能有实际的值，所有方法均为抽象方法，仅用于描述 => 仅存在于编译期，编译后的js中并不会存在
// 语法：interface name {}
interface myInterface {
  name:string;
  age:number;
  say():void;
  play(params:string):void
}
// 类可实现多个接口
class MyClass implements myInterface {
  name:string;
  age:number;
  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }
  say():void {}
  play(params:string):void {}
}
/*
  类型别名与接口的区别：
    类型别名：主要是提取公共类型项，同名会报错
    接口：虽然也可以约束对象结构，但主要用于强约束类结构，同名会合并
*/ 
// type type1 = {
//   name: string,
//   age: number
// }
// type type1 = {
//   name: string,
//   age: number
// }
interface myInterface1 {
  name:string,
  age:number
}
interface myInterface1 {
  sex:string
}
const usr:myInterface1 = {
  name: '',
  age: 20,
  sex: ''
}

// 泛型 -> 类型不确定的情况，实际可以使用any，但any会丢失类型检查的能力，所以不推荐使用any，泛型诞生了
// 语法：使用<标识符>
function func(a:any):any {
  return ''
}
function fn<T>(a:T):T {
  return a
}
fn(10);//类型推断
fn<string>('a');

function fn1<T,K>(a:T, b:K):T {
  return a;
}
fn1<number,string>(100,'a')

interface Inter {
  length:number
}
function fn2<T extends Inter>(a:T):number {
  return a.length
}
fn2('hello')
fn2(123)

class Myclass<T> {
  name: T;
  constructor(name:T) {
    this.name = name;
  }
}
const com = new Myclass<string>('aaa')