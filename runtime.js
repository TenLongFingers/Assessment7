const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given
// array?

// Try it with first function
perf.start(); // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

console.log("Results for the extraLargeArray");
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

//The doublerAppend function has a big difference in runtime depending on the size of the array. DoublerAppend is mucher slower than doublerInsert when the array is bigger,
//but once it passes the medium sized array, it doublerAppend is much faster than doublerInsert.
//doublerInsert isn't as heavily affected by the size difference. This means doublerAppend scales logarithmically, and doublerInsert does not.
//doublerInsert is better because it will scale basically the same no matter what.
//I did the extra credit. Functions are faster when they deal with the smallest inputs. In this case,
//doublerAppend has to loop over THE ENTIRE array before adding something new. That's why it's slower when the array is bigger.
//doublerInsert doesn't handle the whole array, it only adds things to the beginning. That's why the size of the array has no effect.
