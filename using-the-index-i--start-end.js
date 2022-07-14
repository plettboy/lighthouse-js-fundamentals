function range(start, end, step) {
  var arr = [];
  if (start < end && step >= 0) {
    for (var i = 0; i <= end; i += step); {
    arr.push[i];
  }
  return arr;
} else {
  return [];
}
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
