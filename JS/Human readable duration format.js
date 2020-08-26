function formatDuration (seconds) {
  const time = {
    year: Math.floor(seconds / 60 / 60 / 24 / 365),
    day: Math.floor(seconds / 60 / 60 / 24) % 365,
    hour: Math.floor(seconds / 60 / 60) % 24,
    minute: Math.floor(seconds / 60) % 60,
    second: seconds % 60
  }

  const timeArr = Object.keys(time).map(e => [e, time[e]]);
  const filterZeros = timeArr.filter(e => e[1] > 0);
  if(filterZeros == 0) {
    return 'now';
  }
  const pluralize = filterZeros.map(function (e) {
    const s = (e[1] > 1) ? 's' : ''; 
    return `${e[1]} ${e[0] + s}`
  });
  const punctuation = pluralize.map(function (e, i, arr) {
    let lineEding = '';
    if(arr.length - i === 2) {
      lineEding = ' and '
    }
    if(arr.length - i > 2) {
      lineEding = ', '
    }
    return e + lineEding;
  });
  const final = punctuation.join('');
  
  return final;
}

// Tests
console.log(formatDuration(0));
console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(3662));
console.log(formatDuration(86401));
console.log(formatDuration(30879001));
console.log(formatDuration(31536001));