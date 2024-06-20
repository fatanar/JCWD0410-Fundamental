//ARRAY==========================

//cara 1
//let arr = [];

//CONTOH
let arr = ["A", "B", "C", "D"];
console.log(arr);

let arr3 = [1, 2, 3, 4];
console.log(arr3);

//cara2
//let arr2 = new Array();

//CONTOH
let arr2 = new Array("A", "B", "C", "D");
console.log(arr2);

let arr4 = new Array(1, 2, 3, 4);
console.log(arr4);

//array of object
const student = [
  { name: "budi", email: "budi@gmail.com" },
  { name: "siti", email: "siti@gmail.com" },
  { name: "joko", email: "joko@gmail.com" },
];

//FOR OF LOOP
const fruits = ["apel", "pisang", "ceri"];

for (const fruit of fruits) {
  console.log(fruit);
}

//FOR OF UNTUK STRING
const text = "Hello World";

for (const char of text) {
  console.log(char);
}

//MINI EXERCISE
//HITUNG JUMLAH SEMUA BILANGAN dalam array menggunakan  for of
//ex input = [1,2,3,4,5,6] -> 21
let sum = 0;
const arr5 = [1, 2, 3, 4, 5, 6];
for (const hasil of arr5) {
  sum += hasil;
}
console.log(sum);

//FUNCTION
//ada 2 cara untuk mendefine sebuah function : func declaration & function expression

// FUNCTION DECLARATION
function square(number, number2) {
  //parameter
  return number * number * number2;
}

const result = square(2, 4); //argument
console.log(result);

//FUNCTION EXPRESSION
const square1 = function (number) {
  return number * number;
};

const result1 = square1(2);
console.log(result1);
console.log(square1(2));

//FUNCTION SCOPE
//variable yang di define didalam function hanya bisa di akses di funtion tersebut

//variable hello tidak bisa di akses di luar function
function greeting() {
  const hello = "hello";
  return hello;
  //variable hello bisa di akses di dalam function
}

// PARAMETER & ARGUMENT
//argument => value yang dimasukan saat pemanggilan function
//parameter => variable yang mewakili value dari argument di parantheses function

function greeting(name) {
  const hai = "hello";
  return hai + " " + name;
}
const result2 = greeting("budi"); //argument
console.log(result2);

//DEFAULT PARAMETER
function multiply(a, b = 5) {
  console.log(a);
  console.log(b);
  return a * b;
}
console.log(multiply(10));

//REST PARAMETER =============================
//Mewakili sisa argument ke dalam 1 variable parameter

function myFunc(a, b, ...manyMoreArgs) {
  // ...... (tanda titik2) merupakan rest parameter
  console.log(a);
  console.log(manyMoreArgs);
}
myFunc(1, 2, 3, 4, 5, 6, 7, 8);

//NESTED FUNCTION ============================
//Fungsi yang berada di dalam fungsi (inner function)

function getMessage(firstname) {
  function sayHello() {
    return "hello " + firstname + ",";
  }
  function welcomeMessage() {
    return "welcome to purwadhika";
  }
  return sayHello() + " " + welcomeMessage();
}
const result3 = getMessage("Budi");
console.log(result3);

//CLOSURE =====================================
//inner function selalubb mempunyai akses ke variable dan parameter dari outer function
//bahkan setelah function tersebut di return

function greeting(name) {
  const defaultMessage = "hello";

  return function () {
    return defaultMessage + " " + name;
  };
}
const result4 = greeting("Budi");
console.log(result4());

//CURRYING ==================================
//Mentransformasikan function yangv memiliki parameter f(a,b,c)menjadi
//function yang memiliki beberapa parentheses sebanyak jalan parameternya f(a)(b)(c)

//contoh non currying
function tambah(a, b, c) {
  return a + b + c;
}

//contoh currying
function tambahCurrying(a) {
  return function (a) {
    return function (c) {
      return a + b + c;
    };
  };
}

//Recursive
//fungsi yang memanggil dirinya sendiri

function countDown(fromNumber) {
  console.log(fromNumber);
  let nextNumber = fromNumber - 2;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(10);

//ARROW FUNCTION
//shortcut untuk menuliskan function expression

//contoh function expression
const square2 = function (number) {
  return number * number;
};

//contoh arrow function
const square3 = (number) => {
  return number * number;
};

//contoh arrow function jika 1 line
const square4 = (number) => number * number;

//ARRAY BULD IN METHOD ==================
//JOIN -> menggabungkan value yang ada dalam array ke dalam bentuk string
let words = ["hello", "world"];
console.log(words.join(" "));

//POP -> menghilangkan isi value yang paling akhir dalam array
const words2 = ["hello", "world", "hello"];
words2.pop();
console.log(words2);

//PUSH -> menambahkan value kedalam array di paling akhir
const words3 = ["hello", "world"];
words3.push("purwadhika");
console.log(words3);

//SHIFT -> menghilangkan value paling depan di dalam array
const words4 = ["test", "hello", "world"];
words4.shift();
console.log(words4);

//UNSHIFT -> menambahkan value ke urutan paling depan array
const words5 = ["test", "hello", "world"];
words5.unshift("jogja");
console.log(words5);

//CONCAT -> menggabungkan 2 array menjadi 1 array
const arr6 = ["hello"];
const arr7 = ["world"];
console.log(arr6.concat(arr7));
console.log(arr7.concat(arr6));

//SPLICE -> untuk menghapus, mengganti, atau menambahkan value pada sebuah array
//rumusnya -> splice(startIndex,brpYgMauDiDelete,item,item,....)

const months = ["jan", "march", "april", "june"];

months.splice(1, 0, "feb");
console.log(months);

months.splice(4, 1);
console.log(months);

months.splice(3, 1, "may");
console.log(months);

//SLICE -> me return new array dengan value yang sudah kita tentukan
//index start dan index end nya dari sebuah array tersebut
//rumus: slice(startIndex,endIndex)

const fruit = ["banana", "orange", "lemon", "apple", "manggo"];
console.log(fruit.slice(1, 4));
console.log(fruit.slice(-4, -1));

//INDEXOF ->mencari index dari value yang kita cari
//kalau misalkan tidak ditemakan bakalan mereturn -1
const fruits2 = ["banana", "orang", "lemon", "apple", "manggo"];
console.log(fruits2.indexOf("lemon"));

//SORT -> mengurutkan isi array berupa string atau number
//versi string
const fruits3 = ["banana", "orang", "lemon", "apple", "manggo"];
fruits3.sort();
console.log(fruits3);

//versi number tanpa compare function
const points = [3, 5, 2, 6, 8, 1];
points.sort();
console.log(points);

//versi number dengan compare function
const point2 = [34, 5, 200, 16, 8, 10];
point2.sort((a, b) => a - b); //asc
//point2.sort((a,b) => b-a) //desc
console.log(point2);

//REVERSE -> membalikan urutan element dalam array
const fruits4 = ["banana", "orang", "lemon", "apple", "manggo"];
fruits4.reverse();
console.log(fruits4);

//FOREACH -> melakukan looping pada array tidak mereturn apapun
const fruits5 = ["banana", "orang", "lemon", "apple", "manggo"];
fruits5.forEach((value, index) => {
  console.log(value);
});

//MAP -> melakukan looping sama kaya foreach tapi mereturn array baru
const fruits6 = ["banana", "orang", "lemon", "apple", "manggo"];
const result5 = fruits6.map((fruit, idx) => {
  return fruit;
});

console.log(result5);

//FILTER -> melakukan looping sama dengan map dan menghasilkan array baru
//berdasarkan kondisi pada return function yang dimasukan ke filter parantheses

const ages = [32,30,21,12,40];
const result6 = ages.filter((age,index)=>{
return age > 20;
});

console.log(result6);

//FIND -> mencari value yang ditemukan pertama kali di dalam array
const ages1 = [3,10,20,19];

const result7 = ages1.find((age)=> age > 18);
console.log(result7);

//FINDINDEX -> mirip dengan FIND tapi yang dihasilkan adalah indexnya
const ages2 = [3,10,20,19]
const result8 = ages2.findIndex((age) => age > 18);

console.log(result8);

//REDUSCE -> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array
const number3 = [175,50,25]
const result9 = number3.reduce((a,b)=> a+b)

console.log(result9);

//INCLUDES -> mengecek value pada array ada apa tidak,hasil return nya adalah boolean

const fruit3 = ["banana","orange","apple"];
console.log(fruit3.includes("apple"));