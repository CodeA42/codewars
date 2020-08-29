String.prototype.customSplit = function customSplit(splitRule) {
  if(!(typeof this === 'string' || this instanceof String)) {
    throw new Error('Not a string');
  }
  if(!(typeof splitRule === 'string' || splitRule instanceof String)) {
    throw new Error('Split rule not valid')
  }
  
  let arr = [];
  let matches = this.getAllIndexes(splitRule);
  for (let i = 0; i <= matches.length; i++) {
    let cutStart = (i - 1 in matches) ? matches[i - 1] + splitRule.length: 0;
    let cutEnd = (i in matches) ? matches[i]: this.length;
    let toPush = this.customSubStr(cutStart, cutEnd);
    arr.push(toPush)
  }

  if(splitRule === '') {
    arr.pop();
    arr.shift();
  }
  return arr;
}

String.prototype.getAllIndexes = function getAllIndexes(searchRule) {
  let matches = [];
  let searchLength = searchRule.length;
  for (let i = 0; i <= this.length - searchLength; i++) {
    let testCase = this.customSubStr(i, i + searchLength);
    if(testCase === searchRule) {
      matches.push(i); 
    }
  }

  return matches;
}

String.prototype.customSubStr = function customSubStr(start, end) {
  if(isNaN(start)) {
    throw new Error(`Value ${start} not a number`);
  }

  if(end === undefined) {
    end = this.length;
  } else if(isNaN(end)) {
    throw new Error(`Value ${end} not a number`);
  }

  if(start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let subStr = '';
  for (let i = start; i < end; i++) {
    subStr += this[i];
  }
  return subStr;
}

let someRandomString = 'Hello, World!'
console.log(someRandomString.customSplit(''));
console.log(someRandomString.split(''));
