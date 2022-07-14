function range(start, end, step) {
  var rangeIt = [];

  if(start > end || step <= 0 || start === undefined || end === undefined) {
    return rangeIt;
  }
  for (let i = start; i <= end; i += step) {
    rangeIt.push(i);
  }
  return rangeIt;

}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));