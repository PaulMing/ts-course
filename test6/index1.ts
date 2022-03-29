(function(){

  class Animal {
    name:string;
    age:number;

    constructor(name:string,age:number) {
      this.name = name;
      this.age = age;
    }

    say() {
      console.log('say~')
    }

  }

  // 继承：子类将拥有父类所有的属性和方法，类似于copy
  class Dog extends Animal {
    say() {
      console.log('dog say~')
    }
  }

  class Cat extends Animal {
    say() {
      console.log('cat say~')
    }
  }

  const dog = new Dog('',6);
  



})()