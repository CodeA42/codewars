function formatDuration (seconds) {
  let time = {
    seconds: seconds % 60,
    minutes: Math.floor(seconds / 60) % 60,
    hours: Math.floor(seconds / 60 / 60) % 24,
    days: Math.floor(seconds / 60 / 60 / 24) % 365,
    years: Math.floor(seconds / 60 / 60 / 24 / 365)
  }

  console.log(time);
  let properTime = Object.keys(time).map(e => [e, time[e]]).filter(e => e[1] > 0);
  console.log(temp);
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