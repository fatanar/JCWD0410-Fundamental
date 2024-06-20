//no1
//Write a function to get the lowest, highest and average value in the array (with and without sort function).
//a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

const arr = [12, 5, 23, 18, 4, 45, 32];
function maximal(num) {
  return Math.max.apply(0, num);
}
function minimal(num) {
  num.sort(function (a, b) {
    return a - b;
  });
  return num[0];
}
function ratarata(num) {
  const jumlah1 = arr.reduce((a, b) => a + b);
  const ratarata = jumlah1 / arr.length;
  return ratarata;
}
console.log(
  `Maximal Value: ${maximal(arr)}` +
    ` Minimum Value: ${minimal(arr)}` +
    ` nilai rata rata: ${ratarata(arr)}`
);

//no1 lecture
function sortfunction(arr) {
  arr.sort((a, b) => a - b);
  const lowest = arr[0];
  const highest = arr[arr.length - 1];
  const sum = arr.reduce((a, b) => a + b);
  const avg = sum / arr.length;

  return { lowest, highest, avg };
}
console.log(sortfunction([12, 5, 23, 18, 4, 45, 32]));
//no2
/*Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”*/
function concatenateWords(words) {
  if (!Array.isArray(words) || words.length === 0) {
    return "";
  }

  const lastWord = words.pop();
  const concatenatedWords = words.join(", ");

  return `${concatenatedWords}, and ${lastWord}`;
}

const wordArray = ["apple", "banana", "cherry", "date"];
const result = concatenateWords(wordArray);
console.log(result);

//no2 lecture
function concatwords(words) {
  if (words.length === 1) {
    return words[0];
  } else {
    const kataterakhir = words.pop();

    return words.join(", ") + "and" + kataterakhir;
  }
}
console.log(concatwords(["apple", "banana", " cherry ", "  date"]));
//3
//Write a function to split a string and convert it into an array of words
//a. Example : “Hello World” → [“Hello”, “World”]

function splitString(input) {
  return input.split(" ");
}

console.log(splitString("Hello world"));
//4
/*Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.*/

const arr2 = [1, 2, 3];
const arr3 = [3, 2, 1];
results = [];
for (let i = 0; i < arr2.length; i++) {
  results.push(arr2[i] + arr3[i]);
}
console.log(results);

//4 lecture
function addArrays(arr1, arr2) {
  const result2 = [];
  const maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    const sum2 = (arr1[i] || 0) + (arr2[i] || 0);
    result2.push(sum2);
  }
  return result2;
}
const array4 = [1, 2, 3];
const array5 = [3, 2, 1];
console.log(addArrays(array4, array5));

//5
/*Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
*/
function tidaksama(array, num) {
  if (array.includes(num)) {
    return array;
  } else {
    return [...array, num];
  }
}
console.log(tidaksama([1, 2, 3, 4], 5));

//6
/*Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const genap = numbers.filter((item) => item % 2 === 0);
console.log(genap);

//7
/*Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements).
a. Example :
maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
The function will return [5, 10, 24, 3, 6]*/
function insertIntegers(maxSize, ...integers) {
  const result = []; // Inisialisasi larik kosong

  for (const num of integers) {
    //Iterasi melalui setiap bilangan bulat yang diberikan
    if (result.length < maxSize) {
      // Jika ukuran larik belum mencapai maksimum, tambahkan bilangan bulat ke dalam larik
      result.push(num);
    }
  }

  return result;
}

const maxSize = 5;
const givenIntegers = [5, 10, 24, 3, 6, 7, 8];
const output = insertIntegers(maxSize, ...givenIntegers);
console.log(output);

//7 lecture

function limitData(maxSize, ...integers) {
  const array6 = [];
  integers.forEach((number) => {
    if (array6.length === maxSize) return;
    array6.push(number);
  });
  return array6;
}
const maxSize2 = 3;
console.log(limitData(maxSize2, 7, 10, 24, 3, 6, 7, 8));

//8
/*Write a function that will combine 2 given array into one array
a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
*/

array1 = [1, 2, 3];
array2 = [4, 5, 6];
for (let i = 0; i < array2.length; i++) {
  array1.push(array2[i]);
}
console.log(array1);

//8 lecture

function combinearray(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(combinearray([1, 2, 3], [3, 2, 1]));
//9
/*Write a function to find duplicate values in an array
a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]*/
function findDuplicateValues(arr) {
  const seen = new Set();
  const duplicate = [];
  for (const value of arr) {
    if (seen.has(value) && !duplicate.includes(value)) {
      duplicate.push(value);
    } else {
      seen.add(value);
    }

    return duplicate;
  }
}

console.log(findDuplicateValues([1, 2, 2, 2, 3, 3, 4, 5, 5]));
//10
/*Write a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]*/

function selisihLarik(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  // Hitung selisih: elemen-elemen yang ada di arr1 tapi tidak ada di arr2
  const selisih1 = [...set1].filter((item) => !set2.has(item));

  // Hitung selisih: elemen-elemen yang ada di arr2 tapi tidak ada di arr1
  const selisih2 = [...set2].filter((item) => !set1.has(item));

  // Gabungkan kedua selisih
  const hasil = [...selisih1, ...selisih2];

  return hasil;
}

const larik1 = [1, 2, 3, 4, 5];
const larik2 = [3, 4, 5, 6, 7];
const selisih = selisihLarik(larik1, larik2);
console.log(`Selisih antara larik1 dan larik2: ${selisih}`);

//10 lecture
function findDifference(arr1, arr2) {
  const difference = [];

  for (const item of arr1) {
    if (!arr2.includes(item) && !difference.includes(item)) {
      difference.push(item);
    }
  }
  for (const item of arr2) {
    if (!arr1.includes(item) && !difference.includes(item)) {
      difference.push(item);
    }
  }
  return difference;
}
console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
//11
function fillterprimitive(arr) {
  return arr.filter((item) => {
    return (
      typeof item === "number" ||
      typeof item === "string" ||
      typeof item === "boolean" ||
      item === null ||
      typeof item === "undefined"
    );
  });
}

console.log(fillterprimitive([1, [], undefined, {}, "string", {}, [], null]));
//12
/*Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2*/
const array3 = [5, 3, 1, 7, 2, 6];
function secondnumber(num) {
  num.sort(function (a, b) {
    return a - b;
  });
  return num[1];
}

console.log(`terkecil kedua adalah ${secondnumber(array3)}`);

//12 lecture
function secondsmallest(arr) {
  if (arr.length < 2) {
    return "minimum array length harus 2";
  }
  arr.sort((a, b) => a - b);

  return arr[1];
}
console.log(secondsmallest([5, 3, 1, 7, 2, 6]));

//13
/*Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3*/
function sumNumberDataType(arr) {
  let temp = 0;
  arr.forEach((value) => {
    if (typeof value === temp) {
      temp += value;
    }
  });
  return temp;
}
console.log(sumNumberDataType(["3", 1, "string", null, false, undifined, 2]));
//14
/*Write a function from the below array of number that will return sum of duplicate values. let
arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
a. The function will return 40*/

function sumDuplicatevalues(arr) {
  const duplicateValues = arr.filter((value, index, self) => {
    return self.indexOf(value) !== index;
  });
  let result10 = 0;

  for (const item of arr) {
    if (duplicateValues.includes(item)) {
      result10 += item;
    }
  }
  return result10;
}

console.log(sumDuplicatevalues([10, 20, 40, 10, 50, 30, 10, 60, 10, 20]));

//15
/*Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
between rock, paper, or scissor.
a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'*/

function playRockPaperScissor(playerChoice) {
  const choices = ["rock", "paper", "scissor"];
  const computerChoice = choices[Math.floor(Math.random() * 2.9)];

if (!choices.includes(playerChoice)) {
  return "wrong input";
}

if (playerChoice === computerChoice) {
  return {result:"draw",computerChoice,playerChoice};
}
if (
  (playerChoice === "rock" && computerChoice === "scissor") ||
  (playerChoice === "scissor" && computerChoice === "paper") ||
  (playerChoice === "paper" && computerChoice === "rock")
) {
  return {result:"win",computerChoice,playerChoice};
}
    return {result: "lose", computerChoice,playerChoice};
}
console.log(playRockPaperScissor("rock"));