(function(){
  /*
    abstract类：
      不能用来创建类，其它和类都一样，主要就是定义基类，可被继承但不能被创建
    
    抽象方法：没有方法体，仅能定义在抽象类中，子类继承后必须重写
       abstract say():void;
  
  */
  abstract class Animal {
    name:string;
    constructor(name:string) {
      this.name = name;
    }
    sayHello() {
      console.log('animal sayhello')
    }
  }

  class Dog extends Animal {
    age:number=20;
    constructor(name) {
      super(name)
    }
    sayHello(): void {
      console.log('dog sayhello');
      super.sayHello();
    }
  }

  const dog = new Dog('a');
  console.log(dog)





}())