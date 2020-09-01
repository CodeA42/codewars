class HashTable {
  constructor(params = {}) {
    const {
      collection = [],
      hashFunc = HashTable.hash,
      size = 41
    } = params;
    this.collection = collection;
    this.hashFunc = hashFunc;
    this.size = size;
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
        this.collection[index].push([key, value]);
      }
    }
    return this;
  }

  search(key) {
    let index = this.hashFunc(key, this.size);

    let result = null;
    let e = this.collection[index];

    if(e === undefined) {
      return false;
    }
    for (let i = 0; i < e.length; i++) {
      if (e[i][0] === key) {
        result = e[i][1];
      }
    }
    if(!result) {
      result = false;
    }

    return result;
  }

  print() {
    console.log(this.collection);
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

let ageTable = new HashTable;
// ageTable.add('sasho','15');
ageTable.add('pesho','12');
ageTable.add('dragan','50');
ageTable.add('petkan','7');
ageTable.print();
console.log(ageTable.search('sasho'));

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
