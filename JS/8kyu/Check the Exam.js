function checkExam(arr1, arr2) {
  let result = arr1.reduce((acc,e,i) => acc + ((arr1[i] === arr2[i]) ? 4 : (arr2[i].length) ? -1 : 0), 0);
  return result < 0 ? 0 : result;
}


console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]));