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
//I think it'll be fairly slow, because it's o(n^2), but the good thing about this code is that it stops as soon as it hits a true statement, so that should help.
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

//2) Unique Characters
const hasUniqueChars = (str) => {
  for (let i = 0; i < str.length; i++)
    for (let j = i + 1; j < str.length; j++)
      if (str[i] == str[j]) {
        return false;
      }
  return true;
};
console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
//This scales logarithmically so it's not as efficient as is probably should be. it's o(n^2)

//3) Pangram Sentence
let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const isPangram = (str) => {
  return alphabet.every((x) => str.includes(x));
};
console.log(isPangram("pack my box with five dozen liquor jugs"));
console.log(isPangram("javascript is my favorite coding language"));
//I think this is the fastest of my functions because it doesn't have to loop through as much. Once it finds the letter it's looking for, it moves on.

//4) Longest Word
const findLongestWord = (arr) => {
  let testLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > testLength) {
      let testLength = arr[i].length;
      longest = arr[i];
    }
  }
};
findLongestWord(["hi", "hello", "worldwide"]);
console.log(longest);
//For a for loop I think this moves really fast. Because the testLength variable is set to the longest word so far, so it's more precise and efficient than incrementing the testLength one integer at a time.
