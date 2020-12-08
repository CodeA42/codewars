function sumStrings(a,b) {
  a = trimZeros(a);
  b = trimZeros(b);

  let longer = (a.length > b.length) ? a : b;
  let carry = 0;
  let totalSum = [];
  sum();
  return totalSum.join("");
  

  function sum() {
    for(let i = 1; i <= longer.length; i++) {
      let sum = ~~a[a.length - i] + ~~b[b.length - i] + carry;
      carry = 0;
      if(sum >= 10) {
        carry = 1;
        sum = sum - 10;
      }
      totalSum.unshift(sum);
    }

    if(carry > 0) {
      totalSum.unshift(carry);
    }
  }

  function trimZeros(e) {
    let numArr = e.split('');
    for(let i = 0; i < numArr.length; i++) {
      if(numArr[i] === '0') {
        numArr[i] = '';
        continue;
      }
      break;
    }
    return numArr.join('');
  }
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
console.log(sumStrings('00103', '08567'))