const isEven = function (num) {
return num % 2 === 0;
}
//this code leaves you with determine if a number is divisible by two, hence even;
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

//This is is the easier way below;

const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));
