function formatDuration (seconds) {
  const time = {
    second: seconds % 60,
    minute: Math.floor(seconds / 60) % 60,
    hour: Math.floor(seconds / 60 / 60) % 24,
    day: Math.floor(seconds / 60 / 60 / 24) % 365,
    year: Math.floor(seconds / 60 / 60 / 24 / 365)
  }

  const timeArr = Object.keys(time).map(e => [e, time[e]]);
  const displayData = timeArr.filter(e => e[1] > 0);
  const displayTime = displayData.map(function (e) {
    let s = (e[1] > 1) ? 's' : ''; 
    return `${e[1]} ${e[0] + s}`
  });
  console.log(displayTime);

  // return properTime.forEach((e, i) => e);
  return seconds;
}

console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(3662));
console.log(formatDuration(86401));
console.log(formatDuration(30879001));
console.log(formatDuration(31536001));