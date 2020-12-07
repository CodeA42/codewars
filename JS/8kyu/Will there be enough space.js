function enough(cap, on, wait) {
  let availableSpace = cap - on;
  let howManyCanFit = availableSpace - wait;
  return (howManyCanFit < 0) ? Math.abs(howManyCanFit) : 0;
}

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));