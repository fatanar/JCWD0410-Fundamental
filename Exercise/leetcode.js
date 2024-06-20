// To lower case
/**
 * @param {string} s
 * @return {string}
 */
const toLowerCase = function (s) {
  return s.toLocaleLowerCase();
};

const kata = toLowerCase("FATAN");

console.log(kata);

//length of last world
function lengthOfLastWord(s) {
  let length = 0;
  let isWord = false;

  // Loop dari akhir string
  for (let i = s.length - 1; i >= 0; i--) {
    // Jika karakter bukan spasi, mulai menghitung/menambah panjang kata
    if (s[i] !== " ") {
      isWord = true;
      length++;
    } else if (isWord) {
      // Jika sudah menemukan spasi setelah kata, berhenti looping
      break;
    }
  }

  return length;
}

// Contoh penggunaan:
const input = "Hallo Dunia";
const output = lengthOfLastWord(input);
console.log(output); // Output: 5

//valid anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  } else {
    const kataS = s.split("").sort().join("");
    const kataT = t.split("").sort().join("");

    if (kataS === kataT) {
      return true;
    } else {
      return false;
    }
  }
};

const s = "silent";
const t = "listen";
console.log(isAnagram(s, t));

//pow(x,n) "medium level" "perpangkatan"
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  return Math.pow(x, n);
};
const hasil = myPow(2, 3);

console.log(hasil);

//Sqrt(x) akar kuadrat dikembalikan
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};
const a = mySqrt(2);
console.log(a);

//fizz buzz
/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  let temp = [];
  let answer = [];
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (output === "") output = i.toString();
    answer.push(output);
  }
  return answer;
};
const resultfb = fizzBuzz(3);
console.log(resultfb);

//power of two

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  if (n % 2 !== 0) return false;
  return isPowerOfTwo(n / 2);
};

const angka = isPowerOfTwo(3);
console.log(angka);

//Reverse String
function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    // Swap characters at left and right indices
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    // Move pointers closer to the center
    left++;
    right--;
  }
}

//reverse interger "Medium"
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x < 0) return -1 * reverse(-x);
  const solution = (x + "").split("").reverse().join("");
  return solution > 2 ** 31 - 1 ? 0 : solution;
};

const hasil2 = reverse(121);
console.log(hasil2);

//permutation "medium"
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const permute = function (nums, arr = [], res = []) {
  if (nums.length === 0) res.push([...arr]);

  for (let i = 0; i < nums.length; i++) {
    let rest = nums.filter((n, index) => index !== i);
    arr.push(nums[i]);
    permute(rest, arr, res);
    arr.pop();
  }
  return res;
};

//add binary
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry === 1) {
    carry += i >= 0 ? parseInt(a[i--], 10) : 0;
    carry += j >= 0 ? parseInt(b[j--], 10) : 0;
    result = (carry % 2) + result;
    carry = Math.floor(carry / 2);
  }

  return result;
}

//fibonacci number
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

//climbing stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let arr = [1, 1];
  for (let p = 2; p <= n; p++) {
    arr[p] = arr[p - 1] + arr[p - 2];
  }
  return arr[n];
};

//valid palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  // Convert to lowercase and remove non-alphanumeric characters
  const cleanedString = s
    .toLowerCase()
    .replace("abcdefghijklmnopqrstuvwxyz0123456789");

  // Check if the cleaned string is a palindrome
  let left = 0;
  let right = cleanedString.length - 1;

  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Examples
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
console.log(isPalindrome(" ")); // Output: true

//excel sheet column number
/**
 * @param {string} columnTitle
 * @return {number}
 */
/*const titleToNumber = function(columnTitle) {
  let number = 0;
  let length = columnTitle.length;
  for (let i = 0; i < length; i++) {
    number *= 26;
    number += columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
  }
  return number;
}*/

/*// Example usage:
console.log(titleToNumber("A")); // Output: 1
console.log(titleToNumber("B")); // Output: 2
console.log(titleToNumber("AA")); // Output: 27
console.log(titleToNumber("AB")); // Output: 28*/

//excel sheet column title
/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
  //membuat variable kosong
  let abjad = "";
  //di loopoing terlebih dahulu
  while (columnNumber > 0) {

    //angka 26 ada jumlah banyak nya abjad
    let reminder = (columnNumber - 1) % 26;
    abjad = String.fromCharCode(65 + reminder) + abjad;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }
  return abjad;
};

console.log(convertToTitle(2));