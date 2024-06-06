//iF STATEMENT
const age = 18;
if (age >= 17) {
  console.log("anda bisa buat ktp");
}
/*kondisi if hanya dapat menampilkan 
yang terdapat di kurung kurawal dan
yang ada di dalam kurung wajib bernilai boolean*/

//ELSE STATEMENT
//backup plan dari if statement
const umur = 15;
if (umur >= 17) {
  console.log("anda bisa buat ktp");
} else {
  console.log("tidak bisa bikin ktp");
}
//else statement adalah pemberentian terakhir

//ELSE IF STATEMENT
//dapat menambahkan kondisi lagi karena pakai else if
const input = "";
const grade = input.toLowerCase();
if (grade == "a") {
  console.log("nilai bagus");
} else if (grade == "b") {
  console.log("nilai lumayan");
} else if (grade == "c") {
  console.log("nilai buruk");
} else {
  console.log("nilai tidak diketahui");
}

//SWITCH CASE
//akan membandingan case2 yang ingin dicari,dan hanya 1 nilai saja untuk perbandingan
const day = "selasa";

switch (day) {
  case "senin":
    console.log("hari senin");
    break;
  case "selasa":
    console.log("hari selasa");
    break;
  case "rabu":
    console.log("hari rabu");
    break;
}

//LOGICAL OPERATOR
// && -> dan (akan membuat semua variable true)
// || -> atau
// ! -> not

//OR
const car = "mercy";
if (car == "bmw" || car == "mercy") {
  console.log("mobil jerman");
} else {
  console.log("mobil jepang");
}

//AND
const ages = 19;
const punyaSIM = true;

if (ages >= 18 && punyaSIM) {
  console.log("boleh bawa kendaraan");
} else {
  console.log("belum boleh bawa kendaraan");
}

//NOT -> membalikan nilai boolean
const isSunny = true;
const isRaining = !isSunny;

console.log(isSunny);
console.log(isRaining);

//Ternary Operator
//shortcut untuk if else condition
const str = "javascript";
if (str === "javascript") {
} else {
}
console.log(str === "javascript" ? "javascript" : "not javascript");
/*jika menggunakan ternary tidak perlu memasukan console log di dalam if and else
akan tetapi tidak akan bisa ketika banyak kondisi*/

const strs = "typescript";
if (strs === "javascript") {
} else if (strs === "typescript") {
} else {
}
console.log(
  strs === "javascript"
    ? "javascript"
    : strs === "typescript"
    ? "typescript"
    : "not found"
);

//LOOP STATEMENT -> perulangan
//rangkaian instruksi yang dilakukan berulang kali hingga kondisinta tidak terpenuhi
//type loop : for loop, while loop, do while loop

//for loop -> mempunyai 3 statement
//statement 1 : menganalisis variable dari looping itu sendiri
//statement 2 : mendefine kondisi dari looping tersebut
//statement 3 : kodeyang di eksekusi di akhir setiap iterasi

//syntax
//for(statement1;statement2;statement3){

//}

//for loop
for (let i = 0; i < 3; i++) {
  console.log("hello world");
}
//akan melooping sesuai dengan dimulainya i dan i lebih kecil

//while loop
let i = 0;

while (i < 5) {
  console.log("Hello World");
  i++;
}
//akan melooping terus menerus mangkanya harus dikasih kondisi false
//akan melakukan pengecekan terlebih dahulu kalau false tidak akan di cek

// DO WHILE LOOP
let count = 2;

do {
  console.log("ini iterasi ke : " + count);
  count++;
} while (count <= 5);
//kondisi nya akan do terlebih dahulu baru di cek kalau false akan tetap lanjut

//BREAK
//berfungsi untuk menghentikan loop

let sum = 0;
while (true) {
  console.log("sum =" + sum);
  if (sum >= 5) break;
  sum += 1;
}

//continue
//melakukan skip pada looping tertentu

for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log("i =" + i);
}
