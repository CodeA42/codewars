Array.prototype.customJoin =function customJoin(joinString) {
  if(typeof joinString === 'undefined' || joinString instanceof String) {
    throw new Error('Inalid join');
  }
}

let testArr = [1, 2, 3, 4, 5];