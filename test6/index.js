var Animal = /** @class */ (function () {
    function Animal(name, age) {
        // 属性
        this.home = 'a';
        this.distance = 200;
        this.name = name;
        this.age = age;
    }
    // 方法
    Animal.prototype.health = function () { };
    // 静态
    Animal.add = function () { };
    Animal["delete"] = function () { };
    return Animal;
}());
var an = new Animal('a', 20);
console.log(an);
