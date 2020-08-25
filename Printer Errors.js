function printerError(s, start = 97, end = 109) {
  let err = 0;
  let stringArr = s.split('');
  stringArr.forEach(e => {
    let c = e.charCodeAt(0);
    if(c < start || c > end) ++err;
  });
  return `${err}/${stringArr.length}`;
}

let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
s="aaaxbbbbyyhwawiwjjjwwm"
console.log(printerError(s));