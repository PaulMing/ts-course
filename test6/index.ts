

class Animal {
  // 属性
  home:string = 'a'
  distance:number = 200
  name:string
  age:number
  constructor(name:string,age:number) {
    this.name = name;
    this.age = age;
  }
  // 方法
  health() {}


  // 静态/类属性
  static add() {}
  static delete() {}
}

const an = new Animal('a',20);
console.log(an)
