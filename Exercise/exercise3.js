//no 1
const input = 9;
const limit = 10;

for (let i = 1; i <= limit; i++) {
  console.log(`${input} x ${i} = ${input * i}`);
}

//no 2
//cara pertama
const kata = "madam";
const isPalindrome = kata === kata.split("").reverse().join("");
console.log(isPalindrome);

//cara kedua
const k = "madam";
let reverse = "";

for (let i = kata.length - 1; i >= 0; i--) {
  reverse += kata[i];
}

console.log(kata === reverse ? "palindrome" : "not palindrome");

//no3
// Nilai centimeter yang ingin dikonversi
const centimeter = 100000;

// Faktor konversi dari centimeter ke kilometer
const centimeterPerKilometer = 100000;

// Menghitung nilai kilometer
const kilometer = centimeter / centimeterPerKilometer;

// Menampilkan hasil konversi
console.log(`${centimeter} centimeter sama dengan ${kilometer} kilometer`);

//no4
let num = new Number(1000);
const money = {
  style: "currency",
  currency: "IDR",
};
let text = num.toLocaleString("id-ID", money);
console.log(text);

//no 4 lecture
/*const harga = 10000;
const res = new Intl.NumberFormat("Id=ID", {
  
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
})

console.log(res);*/

//no5
const words = "Hello World Hello";
const search = "ell";
const result = words.replace(search, "");
console.log(result);

//no6
const inputString = "hello world"
const word = inputString.split("");
for(let i = 0; i < word.length; i++){
  word[i] = word [i][0].toUpperCase() + word [i].slice(1);
}
console.log(word [0]);
console.log(word [0].slice[1]);
console.log(word.join(""));

//7
const kt = "hello";
const reverseString = kt.split("").reverse().join("");
console.log(reverseString);

//tanpa build in method
const str = "hello"


//8
// Fungsi untuk mengubah huruf besar menjadi huruf kecil dan sebaliknya
const masukan = "Hallo World";
let swappedString = "";

for(let i = 0; i < masukan.length; i++){
  const char = masukan[i]

  if(char === char.toUpperCase()){
    swappedString += char.toLowerCase();
  }else{
    swappedString += char.toUpperCase();
  }
}

console.log(swappedString);

//9
const num1 = 10;
const num2 = 27;
let largest;

if(num1>num2){
  largest = num1;
}else{
  largest = num2;
}
console.log(largest);

//10
const no1 = 42;
const no2 = 27;
const no3 = 18;

const smallest = Math.min(no1,no2,no3);
const largests = Math.max(no1,no2,no3);
const middle = no1 + no2 + no3 - smallest - largests;
console.log(`${smallest}, ${middle}, ${largests}`);

//11
const inPut = "hello";
let type;



//12
const InPuTsTrIngs = "An apple a day keeps the doctor away".toLowerCase;
const replaceWord = "a";
let modifiedString = "";

for(let i = 0; i < InPuTsTrIngs.length; i++){
  if (InPuTsTrIngs[i]=== replaceWord) {
    modifiedString += "*";
  }else{
    modifiedString += InPuTsTrIngs [i];
  }
}

console.log(modifiedString);