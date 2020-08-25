function letterCount(s){
  let resultHash = {};
  let strArr = s.split('');
  strArr.forEach(e => {
    if(!resultHash.hasOwnProperty(e)) {
      resultHash[e] = 0;
    }
    ++resultHash[e];
  });
 return resultHash;
}

let s = 'arithmetics';
console.log(letterCount(s));