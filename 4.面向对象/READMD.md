## 面向对象/类

### 原生js中的类
```js
// 类
class Animal {
  // 属性：初始化成员 -> 适合'写死的值'
  tag = '';
  type;//直接这样写也OK，等同于constructor中声明了一个值this.type = undefined;
  // 属性：构造器 -> 适合'外界传参的值'
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  // 原型上的方法
  sayHello() {
    console.log('say')
  }

  // 访问器：实例属性添加getter/setter，读写该属性时会自动执行相关函数 => 实际就是属性的封装
  get age() {
    return this._age;
  }
  set age(age) {
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
  static attribute = '';
  static func(){}

  // 装饰器：实现对类、成员的描述，目前还未被正式纳入ES标准
  // @describe
  // attribute3(){}

  // 访问权限：使用symbol类型进行处理实现外界无法调用，TS提供了修饰符public/private/protected
}
/*
  继承：
    -> 子类默认直接继承父类的实例属性，不会继承原型属性，但是可调用原型属性，类继承的本质依旧是'对象的原型链'
    -> super关键字：
      1.其当作函数使用，表示父类构造函数
      2.其当作对象使用, 表示父类的原型
*/
class Cat extends Animal {
  /*
    constructor函数为空时可省略不写，其默认直接继承父类实例属性，若子类写了constructor函数，那么函数体首行必须手动使用super关键字实现对父类的继承
  */
  constructor(name,age,size) {
    super(name,age);
    this.size = size;
  }
  play() {
    super.sayHello();//调用父类的原型方法
    console.log('cat');
  }
}
```

### ts中的类
> 抽象类、接口
> 参考'index.ts'