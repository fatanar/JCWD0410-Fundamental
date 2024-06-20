//no 1
/*● Create a function to convert Excel sheet column title to its corresponding column number.
● Example :
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...
● Example :
○ Input : AB
○ Output : 28*/

function titleToNumber(columnTitle) {
  let number = 0;
  let length = columnTitle.length;
  for (let i = 0; i < length; i++) {
    number *= 26;
    number += columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
  }
  return number;
}

// Example usage:
console.log(titleToNumber("A")); // Output: 1
console.log(titleToNumber("B")); // Output: 2
console.log(titleToNumber("AA")); // Output: 27
console.log(titleToNumber("AB")); // Output: 28

//no 2
/*● Given a non-empty array of integers nums, every element appears twice except for one. Find that
single one.
● Example 1:
○ Input: nums = [2,2,1]
○ Output: 1
● Example 2:
○ Input: nums = [4,1,2,1,2]
○ Output: 4
● Example 3:
○ Input: nums = [1]
○ Output: 1*/

const singleNumber = function(nums){
    return nums.reduce((a,b)=> a^b)
}

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));

//no 3
/*● Given two strings s and t, return true if t is an anagram of s, and false otherwise.
● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
● Example 1:
○ Input: s = "anagram", t = "nagaram"
○ Output: true
● Example 2:
○ Input: s = "rat", t = "car"
○ Output: false*/

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

const katapertama = "silent";
const katakedua = "listen";
console.log(isAnagram(katapertama, katakedua));

//no 4
/*You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
steps. In how many distinct ways can you climb to the top?
● Example 1:
○ Input: n = 2
○ Output: 2
○ Explanation: There are two ways to climb to the top.
■ 1. 1 step + 1 step
■ 2. 2 steps

● Example 2:
○ Input: n = 3
○ Output: 3
○ Explanation: There are three ways to climb to the top.
■ 1. 1 step + 1 step + 1 step
■ 2. 1 step + 2 steps
■ 3. 2 steps + 1 step*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let arr = [1,1];
  for(let p = 2; p<= n; p++){
      arr[p]=arr[p-1]+arr[p-2]
  }
  return arr[n];
};

