let GetSum = function (a, b) {
  let sum = 0;
  let bigger = Math.max(a,b);
  let smaller = Math.min(a,b);
  for (let current = smaller; current <= bigger; current++) {
    sum += current;
  }
  return sum;
}

console.log(GetSum(5,10));