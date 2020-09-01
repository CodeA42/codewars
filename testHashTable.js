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