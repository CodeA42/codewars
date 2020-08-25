function toCamelCase(str){
  return str.split(/[-_]/).map((e, i) => (i === 0)? e : e[0].toUpperCase() + e.slice(1)).join('');
}

console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior")); 