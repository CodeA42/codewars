function test(arr = []) {
  return arr.map(e => e.map(k => k + 'a'))
}
let someArr = [
  ['a',2],
  ['b',2],
  ['c',2]
];
console.log(test(someArr))
let a = 4;