// 枚举
// enum { A, B}

let k:'a' | 'b' = 'c';

enum Gender {
  male = 0,
  female = 1
}
// let eu: {name: string, gender: 'male'|'female'}
// let eu: {name: string, gender: 0 | 1}
let eu: {name: string, gender:Gender};
eu = {
  name: 'kkk',
  gender: Gender.male
}

// 类型别名
type myType = string;
type myType1 = 1|2|3|4|5;
let k: 1|2|3|4|5;
let l: 1|2|3|4|5;
let j:myType1