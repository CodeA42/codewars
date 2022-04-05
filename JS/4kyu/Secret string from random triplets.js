function recoverSecret(triplets = []) {
  let charMap = {};
  let finalWord = '';
  do {
    fillCharMap();
    let char = findNextChar();
    finalWord += char;
    flush(char);

    function fillCharMap() {
      triplets.forEach(e => loopTriplets(e))
      function loopTriplets(triplet) {
        triplet.forEach((e, i) => addToCharMap(e, i))
  
        function addToCharMap(e, i) {
          if(!charMap.hasOwnProperty(e)) {
            charMap[e] = -1;
          }
          if(charMap[e] < i) {
            charMap[e] = i;
          }
        }
      }
    }
    
    function findNextChar() {
      return Object.entries(charMap).filter(e => e[1] == 0)[0][0];
    }

    function flush(char) {
      flushChar();
      flushEmptyTriplets();
      flushCharMap();

      function flushChar() {
        triplets = triplets.map(triplet => triplet.filter(e => e !== char))
      }

      function flushEmptyTriplets() {
        triplets = triplets.filter(e => e.length > 0)
      }

      function flushCharMap() {
        charMap = {};
      }
    }
  } while(triplets.length)
  return finalWord;
}

let triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
];

console.log(recoverSecret(triplets1))
