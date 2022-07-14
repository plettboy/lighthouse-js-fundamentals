// for the loopy project
const n = 200;

// looping from i = 100 to 200
// in each iteration, i is increased by 1
for (var i = 100; i <= n; i++) 

if (i % 3 === 0 && i % 4 === 0) {
  console.log("loopyLighthouse");
} else if (i % 4 === 0) {
  console.log("Lighthouse")
} else if (i % 3 === 0) {
  console.log("Loopy");
} else { console.log(i);
}
