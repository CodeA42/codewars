function nbYear(p0, percent, aug, p) {
  let season = 0;
  while(p0 < p) {
    p0 = p0 + p0 * (percent / 100) + aug;
    ++season;
  }
  return season;
}

console.log(nbYear(1500, 5, 100, 5000))
console.log(nbYear(1500000, 2.5, 10000, 2000000))
console.log(nbYear(1500000, 0.25, 1000, 2000000))