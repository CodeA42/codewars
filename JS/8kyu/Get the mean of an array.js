function getAverage(marks){
  let markTotal = marks.reduce((acc, e) => acc + e);
  let average = Math.floor(markTotal / marks.length);
  return average;
}

console.log(getAverage([2,2,2,2]))
console.log(getAverage([1,1,1,1,1,1,1,2]))