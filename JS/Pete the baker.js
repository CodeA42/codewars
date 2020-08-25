function cakes(recipe, available) {
  return Math.min(...Object.keys(recipe).map(e => [e, recipe[e]]).map(e => Math.trunc(((available[e[0]]) ? available[e[0]] : 0) / e[1])));
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));