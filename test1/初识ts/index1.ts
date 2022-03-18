let a = 20;


function sum(a: number, b?: number) {
  return a + b;
}
sum(123,'456');
sum(123,456,789)
sum(123)