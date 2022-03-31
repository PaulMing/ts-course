// 全局声明
declare var console:{
  log(message?:any):void
}

// 命名空间 -> 实际就是模块化
declare namespace console {
  function log(message?: any):void
  function error(message?: any):void
}

// 声明模块
declare module 'lodash' {
  export function chunk<T>(array:T[],size:number):T[][]
}

// 三斜线指令：声明文件中引用其它声明文件
/// <reference path="./index.d.ts" />