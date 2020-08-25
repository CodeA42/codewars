function add(a, b) {
  let aArr = a.split('');
  let bArr = b.split('');
  let result = '';
  let c = 0;
  while(aArr.length > 0 || bArr.length > 0) {
    let number = (Number(aArr[aArr.length - 1]) || 0) + (Number(bArr[bArr.length - 1]) || 0) + c;
    c = Math.trunc(number / 10);
    result = (number % 10) + result;
    aArr.pop();
    bArr.pop();
  }
  if(c === 1) {
    result = 1 + result;
  }
  return result;
}

console.log(add('63829983432984289347293874', '90938498237058927340892374089'));