function firstNonRepeatingLetter(s) {
  let acc = [];
  s.split('').forEach(function(e) {
    let k = e.toLowerCase();
    (typeof acc[k] === 'undefined') ? acc[k] = {first: e, count: 1} : ++acc[k].count;
  });
  for (const key in acc) {
    if (acc.hasOwnProperty(key)) {
      const element = acc[key];
      if(element.count === 1) {
        return element.first;
      }
    }
  }
  return "";
}

console.log(firstNonRepeatingLetter('sTress'));
console.log(firstNonRepeatingLetter('DD'));
console.log(firstNonRepeatingLetter('asdASDsG#AC'));