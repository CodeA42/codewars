class HashTable {
  constructor(initialValue, additionalParams) {
    if(initialValue) {
      this.initialValue = initialValue;
    }
    this.hashFunc = additionalParams.hashFunc || HashTable.hash;
    this.size =  additionalParams.size || 41;
  }

  add(key, value) {
    let index = this.hashFunc(key, this.size);
  }

  search() {

  }

  static hash(string, size) {
    let hash = 0, i, chr;
    for(i = 0; i < string.length; i++) {
      chr = string.charCodeAt(i);
      hash = ((hash << 5 ) - hash) + chr;
      hash |= 0;
    }
    return Math.abs(hash % size);
  }
}


function randomStrings(entries, entriesSize) {
  let arr = [];
  for (let i = 0; i < entries; i++) {
    let word = '';
    for (let j = 0; j < entriesSize; j++) {
      word += String.fromCharCode(97 + getRandomInt(26));
    }
    arr.push(word);
  }
  return arr;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

randomStrings(100, 10).forEach(e => console.log(HashTable.hash(e, 41) + ' -> ' + e));