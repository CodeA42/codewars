let isSquare = function(n){
  let sqrtNumber = Math.sqrt(n);
  let sqrtIsInteger = Number.isInteger(sqrtNumber);
  return sqrtIsInteger;
}

let a = [-1,-2,0,5,25,55,100,1000,10000,7];

a.forEach(e => {
  console.log(isSquare(e));
});