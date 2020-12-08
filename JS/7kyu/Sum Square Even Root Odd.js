function sumSquareEvenRootOdd(e = []) {
  let calculatedSingles = e.map(e => squareSquareRoot(e));
  
  function squareSquareRoot(e) {
    return (e % 2 == 0) ? Math.pow(e, 2) : Math.sqrt(e);
  }

  let sum = calculatedSingles.reduce((acc, e) => acc + e)

  return Math.round(sum * 100) / 100;
}

console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))
console.log(sumSquareEvenRootOdd([1,14,9,8,17,21]))