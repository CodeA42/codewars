let Kata = {};

Kata.getMiddle = function (s) {
  let halfLen = s.length / 2;
  return (s.length % 2 == 0) ? s.substring(halfLen - 1, halfLen + 1) : s.substring(halfLen, halfLen + 1);
}

console.log(Kata.getMiddle('qwert'));