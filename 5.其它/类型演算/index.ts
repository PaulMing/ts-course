/*
  类型演算：根据已知信息计算出新的类型
    关键字：typeof、keyof、in
    预定义的类型演算：TS已经定义好的，实际底层就是依赖'typeof、keyof、in'关键字配合实现
      Partial<T> //将类型T中的成员变为可选
      Required<T> //将类型T中的成员变为必填
      Readonly<T> //将类型T中的成员变为只读
      Exclude<T,U> //将T中剔除可以赋值给U的类型
      Extract<T,U> //提取T中可以赋值为U的类型
      NonNullable<T> //从T中剔除null和undefined
      ReturnType<T> //获取函数返回值类型
      InstanceType<T> //获取构造函数类型的实例类型
*/

/*
  typeof关键字：
    1.书写在类型约束的位置上表示获取某个数据的类型
    2.作用于类时表示'得到的类型是该类的构造函数'
*/
let a:string = 'a';
let b:typeof a = 'b';//b和a类型保持一致

class User{}
function createUser(con:typeof User):User {
  return new con();
}
// 参数直接使用con:User不行，con被约束为了对象，而这个函数需要的是'构造函数'
// function createUser(con:User):User {
//   return new con();
// }
const u = createUser(User);

/*
  keyof关键字：
    -> 可作用于类、接口、类型别名，用于获取其它类型中所有成员名组成的联合类型
*/
interface User {
  name:string,
  sex:string,
  age:number
}
// 参数prop:keyof User 等同于 prop:'name'|'sex'|'age' -> keyof灵活性更高，其可自动获取，不用手动配置
function outputUserProp(obj:User, prop:keyof User){
  console.log(obj[prop])
}
const ur:User = {
  name: '',
  sex: '',
  age: 18
}
outputUserProp(ur,'name')

/*
  in关键字：
    -> 其往往和keyof联用，限制某个索引类型的取值范围
*/
type obj = {
  // 索引器
  [p in keyof User]: User[p];//表示从User里面取类型,等同于[p:'name'|'sex'|'age']: string
}
type newObj<T> = {
  readonly [p in keyof T]?: T[p]
}

// Required<T> //将类型T中的成员变为必填
interface A {
  name?:string
  age?:number
}
let ra:Required<A>;
ra = {
  name: '',
  age: 18
}
// Exclude<T,U> //将T中剔除可以赋值给U的类型
let ura:Exclude<'a'|'b'|'c'|'d'|'e','b'|'c'>