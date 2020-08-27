function sumIntervals(intervals){
  const intervalMap = intervals.reduce(function (acc, e) {
    for (let i = acc.length - 1; i >= 0; i--) {
      let o = acc[i];

      if((o[1] < e[0] && e[1] > o[0]) || (o[1] > e[0] && e[1] < o[0])) {
        continue;
      }

      e[0] = (e[0] < o[0]) ? e[0] : o[0];
      e[1] = (e[1] < o[1]) ? o[1] : e[1];
      acc.splice(i, 1);
    }

    acc.push(e);
    return acc;
  }, []);
  
  return intervalMap.map(e => e[1] - e[0]).reduce((a, b) => a + b, 0);
}

console.log(sumIntervals([
  [1,5],
  [1,5]
]));
console.log('---------------------');
console.log(sumIntervals([
  [1,2],
  [6, 10],
  [11, 15]
]));
console.log('---------------------');
console.log(sumIntervals([
  [1,4],
  [7, 10],
  [3, 5]
]));
console.log('---------------------');
console.log(sumIntervals([
  [1,5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11]
]));
console.log('---------------------');