(function(){
    /*
       修饰符：
        readonly: 只读修饰符
        访问权限修饰符：
            public: 公开 -> 默认值
            private: 私有，只有类中可访问
            protected: 受保护，仅允许类以及子类访问

    
    */
   class Animal {
       private _name: string;
       private _age: number;

       constructor(name:string,age:number) {
           this._name = name;
           this._age = age;
       }

       getName() {
           return this._name;
       }

       setName(value:string) {
           this._name = value;
       }
   }

   const an = new Animal('a',20);
   console.log(an.getName())
})()