class HashTable {
  constructor(params) {
    this.collection = [];
    this.hashFunc = params.hashFunc || HashTable.hash;
    this.size = params.size || 41;
  }

  add(key, value) {
    let index = this.hashFunc(key, this.size);
    let done = false;
    if (this.collection[index] === undefined || this.collection[index].length == 0) {
      this.collection[index] = [[key, value]];
      done = true;
    }
    if (!done) {
      for (let i = 0; i < this.collection[index].length; i++) {
        let e = this.collection[index][i];
        if ([0] === key) {
          e[1] = value;
          done = true;
        }
      }
      if (!done) {
        this.collectionp[index].push([key, value]);
      }
    }
    return this;
  }

  search(key) {
    let index = this.hashFunc(key, this.size);

    let result = null;
    let e = this.collection[index];
    for (let i = 0; i < e.length; i++) {
      if (e[0] === key) {
        result = e[1];
      }
    }
    return !!result;
  }

  static hash(string, range) {
    let hash = 0,
      i,
      chr;
    for (i = 0; i < string.length; i++) {
      chr = string.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return Math.abs(hash % range);
  }
}



// testing
// function randomStrings(entries, entriesSize) {
//   let arr = [];
//   for (let i = 0; i < entries; i++) {
//     let word = "";
//     for (let j = 0; j < entriesSize; j++) {
//       word += String.fromCharCode(97 + getRandomInt(26));
//     }
//     arr.push(word);
//   }
//   return arr;
// }

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// randomStrings(100, 10).forEach((e) =>
//   console.log(HashTable.hash(e, 41) + " -> " + e)
// );
