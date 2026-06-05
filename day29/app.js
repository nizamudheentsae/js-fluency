
// Q1 - Remove Even Numbers

const numbers1 = [1, 2, 3, 4, 5, 6];

const oddNumbers = numbers1.filter(function (number) {
  return number % 2 !== 0;
});

console.log("Q1:", oddNumbers);


// Q2 - Find Largest Number

const numbers2 = [10, 45, 7, 99, 22];

const largestNumber = Math.max(...numbers2);

console.log("Q2:", largestNumber);


// Q3 - Reverse String

const userName = "NIZAM";

const reversedName = userName
  .split("")
  .reverse()
  .join("");

console.log("Q3:", reversedName);


// Q4 - Count Vowels

const word = "javascript";

const vowels = ["a", "e", "i", "o", "u"];

let count = 0;

word.split("").forEach(function (letter) {
  if (vowels.includes(letter)) {
    count++;
  }
});

console.log("Q4:", count);


// Q5 - Remove Duplicates

const numbers3 = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = [...new Set(numbers3)];

console.log("Q5:", uniqueNumbers);