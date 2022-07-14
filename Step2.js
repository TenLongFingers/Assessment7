const perf = require("execution-time")();

//1) sum zero
const addToZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(-i)) {
      return true;
    }
    return false;
  }
};
//I think it'll be fairly slow, but the good thing about this code is that it stops as soon as it hits a true statement, so that should help.
//i kinda wanna test it though:
function getFalseSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}
function getTrueSizedArray(size) {
  let array = [];
  for (let i = -100; i < size; i++) {
    array.push(i);
  }
  return array;
}

let falseNumArray = getFalseSizedArray(100);
let trueNumArray = getTrueSizedArray(100);

// Try it with first function
perf.start(); // Starts timer
addToZero(falseNumArray);
let resultsTrue = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
addToZero(trueNumArray);
let resultsFalse = perf.stop();

console.log("Results for add zero function");
console.log("true", resultsTrue.preciseWords);
console.log("false", resultsFalse.preciseWords);

//ding dong I was wrong
