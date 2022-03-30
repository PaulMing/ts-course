(function(){
  function func(a:any):any {
    return 
  }

  /*
    泛型：类型不确定
  */
 function fn<T>(a:T):T {
   return a
 }
 fn(10);//类型推断
 fn<string>('hello')


 function fn1<T,K>(a:T, b:K):T {
   return a;
 }
 fn1<number,string>(100,'a')


 interface Inter {
   length: number;
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



}())