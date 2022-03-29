(function(){
  // type type1 = {
  //   name: string,
  //   age: number
  // }
  // type type1 = {
  //   name: string,
  //   age: number
  // }

  // 同名的接口其会合并
  interface myInterface {
    name:string,
    age:number
  }
  interface myInterface {
    sex:string
  }

  const obj:myInterface = {
    name: '',
    age: 20,
    sex: ''
  }

  /*
    接口可以在定义类的时候去限制类的结构
    接口中的所有属性都不能有实际的值，所有方法都是抽象方法
    -> 只定义对象的结构，而不考虑实际值
    -> 就是强约束，编译后就没了
  */
 interface myInter {
   name: string;
   sayHello(): void
 }

 // 类可实现多个接口，实现接口就是使类满足接口的要求
 class Myclass implements myInter {
   name: string;
   sayHello(): void {
     throw new Error("Method not implemented.");
   }
 }




})()