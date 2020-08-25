function solution(number){
  const Symbols = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  };
  
  let digits = [...number.toString()].map(Number);

  return digits.map(function (number, i) {
    let position = Number(1 + '0'.repeat(digits.length - i - 1))
    let one = Symbols[1 * position];
    let five = Symbols[5 * position];
    let ten = Symbols[10 * position]

    if(number < 4 || number < 9 && number !== 4) {
      return ((number < 5) ? '' : five) + one.repeat((number < 5) ? number : number - 5);
    } else if (number === 4 || number === 9) {
      return one + ((number === 4) ? five : ten);
    }
  }).join('');
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
console.log(solution(7));
console.log(solution(8));
console.log(solution(9));
console.log(solution(10));
console.log(solution(11));
console.log(solution(19));
console.log(solution(22));
console.log(solution(15));
console.log(solution(1000));
console.log(solution(1001));
console.log(solution(1990));
console.log(solution(2007));
console.log(solution(2008));
console.log(solution(1666));