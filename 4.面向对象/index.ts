// 类及继承
class Animal {
  name:string;
  _age:number;
  type:string = '';
  constructor(name:string,age:number) {
    this.name = name;
    this._age = age;
  }
  // 语法糖
  // constructor(
  //   public name:string,
  //   public age:number
  // ) {
  //   this.name = name;
  //   this.age = age;
  // }

  sayHello():void {
    console.log('say')
  }

  // 访问器：实例属性添加getter/setter，读写该属性时会自动执行相关函数 => 实际就是属性的封装
  get age() {
    return this._age;
  }
  set age(age:number) {
    if (typeof(age) !== 'number') {
      throw new Error('age attribute error')
    }
    if (age > 160) {
      age = 100;
    } 
    if (age <= 0) {
      age = 0;
    } 
    this._age = age
  }

  // 静态属性/方法
  static attribute:any[] = [];
  static func():boolean{
    return false
  }

  /*
    修饰符：
      readonly: 只读修饰符
      访问权限修饰符：
        public: 公开 -> 默认值
        private: 私有，只有类中可访问
        protected: 受保护，仅允许类以及子类访问
  */
}
class Cat extends Animal {
  type:string = 'cat'//属性重写
  study():void {
    super.sayHello();
    console.log('eat')
  }

  catRun():void {
    console.log('')
  }
}
// 里氏替换原则：子类创建的对象可用'父类'做类型约束，约束后的对象仅能调用'父类'中的成员
const cat:Animal = new Cat();//里氏替换原则
cat.sayHello();//cat仅能调用Animal类中的方法，因为其使用了'父类'约束类型

/*
  抽象类：
    -> 仅表示抽象概念，主要用于提取子类共有成员，而不是创建对象，就是基类
    -> 不能用于创建对象

  抽象成员：
    -> 父类中知道某些成员必须存在，但并不清楚成员具体功能，因此需要强约束，继承该类的子类必须实现该成员，主要是抽象方法[抽象方法没有方法体]
    -> 抽象成员必须写在抽象类中
*/
abstract class Animals {
  abstract type:string
  abstract say():void
}
class Dog extends Animals {
  type:string = 'dog'
  say():void {
    console.log('wangwangwang~')
  }
}

// 接口
interface myInterface {
  name:string;
  age:number;
  say():void;
  play(params:string):void
}
// 类可实现多个接口
class inClass implements myInterface {
  name:string;
  age:number;
  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }
  say():void {}
  play(params:string):void {}
}