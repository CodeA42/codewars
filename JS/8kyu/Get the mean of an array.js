function getAverage(marks){
  let markTotal = marks.reduce((acc, e) => acc + e);
  let average = Math.floor(markTotal / marks.length);
  return average;
}