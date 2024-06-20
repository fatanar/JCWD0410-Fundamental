//1
function segitiga(height) {
  for (let i = 1; i <= height; i++){
    let row = "";
    for(let j =1; j <= i; j++){
      row += j + " ";
    }
    console.log(row);
  }
}
segitiga(5);
//2
function segitiga2(height) {                 // buat function untuk mencari tinggi
  let currentNumber = 1;

  for (let i = 1; i <= height; i++){
    let row = "";

    for(let j = 1; j <= i; j++){
      row += (currentNumber < 10 ? "0" : "") + currentNumber + " ";
      currentNumber++;
    }
    console.log(row);
  }
}
segitiga2(5);
//3
function fb(numberfb) {
  let temp = [];
  for (i = 1; i <= numberfb; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          temp.push("fizzbuzz");
      } else if (i % 5 === 0) {
          temp.push("buzz")
      } else if (i % 3 === 0) {
          temp.push("fizz")
      } else {
          temp.push(i);
      }
  }
  return temp;
}
let resultfb = fb(15);
console.log(resultfb);

//no 4
/*● Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))2
● Parameters : weight & height
● Return values :
○ < 18.5 return “less weight”
○ 18.5 - 24.9 return “ideal”
○ 25.0 - 29.9 return “overweight”
○ 30.0 - 39.9 return “very overweight”
○ > 39.9 return “obesity”*/

function hitungBMI(weight, height) {
  height = height / 100;
  let BMI = weight / (height * height);
  let category;
  if (BMI < 18.5) {
    category = "less wight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    category = "ideal";
  } else if (BMI >= 25.0 && BMI <= 29.9) {
    category = "overweight";
  } else if (BMI >= 30.0 && BMI <= 39.9) {
    category = "very over weight";
  } else {
    category = "obesity";
  }
  return `BMI Anda adalah ${BMI.toFixed(2)}, termasuk dalam kategori "${category}".`;
}

let weight = 70;
let height = 175;
let result = hitungBMI(weight, height);
console.log(result);

//5
const numbers = [1,2,3,4,5,6,7,8,9,10]
const genap = numbers.filter(item => item %2 === 0);
console.log(genap);

//no 5  menggunakan function build in method
/*function removeOddNumbers(arr) {
  return arr.filter((number) => number % 2 === 0);
}
const array = [1,2,3,4,5,6,,7,8];
console.log(removeOddNumbers(array));
*/

//no 5 tanpa build in method
function removeOddNumbers(arr) {
  const temp = [];
  for (let i = 0; i < arr.length; i++){
    if(arr [i] % 2 === 0){
      temp.push(arr[i])
    }
  }
  return temp;
}

const array = [1,2,3,4,5,6,7,8]
console.log(removeOddNumbers(array));
//6
// write a function to split a string and convert it into an array of words
let text = "Hello world"
const Array = text.split(" ")
console.log(Array)

//6 build in method

function splitString (input) {
  return input.split(" ");
}

console.log(splitString("Hello world"));