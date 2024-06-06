console.log("Hello World"); // cara memunculkan tulisan 
/*cara memunculkan 
tulisan pada 
terminal*/

//FIXME:message
//TODO:message
//NOTE:message

//Variable > storage / penampungan data

//variable declaration > var,let,const

var person = "Budi";
console.log(person);

let person1 = "Budi1";
person1 = "Budi2";
//dapat mereplace variable "person1"
console.log(person1);

const person3 = "Joko";
//tidak dapat mereplace variable "person3"
console.log(person3);

//variable naming
//must contain only letters =,digits,or symbol "$" and "_"
//tidak boleh menaruh karakter digit diawal
//case sensitive 

//DATA TYPES
//Primitive data types: string,number,boolean,null,undifend
//non primitive data types: object dan array

//Primitive data types
//string adalah "",''
//number adalah angka 
//boolean adalah true dan false (tanpa petik)
//null adalah value masih kosong dan akan diisi
//undifined adalah variable tidak ada isinya/kosong

//non primitive
// array adalah [] 
//object adlah {} (harus mengisi value dan key contoh Name (value):Budi (Key))

//immutable

let count1 = 4
let count2 = count1;

count2 = 10;

console.log(count1);
console.log(count2);

//mutable
let person7 = {name:"Budi"};
let person8 = person7;
person8.hobby = "nonton";
person8.age = 8;
console.log(person7);
console.log(person8);

//string build in method

const nama = "SiTi";
const nama2 = "Metal";
console.log(nama.toLocaleLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("i","o"));
console.log(nama.replaceAll("i","0"));
console.log(nama.split(" "));
console.log(nama.split(""));
console.log(nama.split("i"));
console.log(nama.concat(nama2));
console.log(nama.slice(0, 3));

//TEMPLATE LITERALS > template string

const nama3 = `jack`;
const message = "welcome";

console.log(message + " "+ nama3);
//tanda petik dua diantara + itu untuk memberikan space
console.log(`${message} ${nama3}`);
console.log(message+nama3);

//Number build in method
const angka = 10;
const angka2 = "20";
const angka3 = "30a";

console.log(angka.toString());
//jika tidak menggunakan string saat .toString akan ada tandak petik

console.log(Number(angka2));
console.log(Number(angka3));
//jika menggunakan Number maka yg awal string akan hilang
//dan akan mengubah tulisan nan jika ada salah ketik 

console.log(parseInt(angka2));
console.log(parseInt(angka3));

//TYPE CONVERSION
//string conversion
console.log(String(123));

//numeric conversion
const num = "3" * 1;

const num2 = 1+1;

const num3 = 1+"2";

console.log(num);
console.log(num2)
console.log(num3)
//kekurangan java script adalah ketika selain + itu akan menghasilkan angka akan tetapi jika + akan string 

//boolean conversion
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean("false"));

//DATE
const now = new Date();

console.log(now);
//akan memunculkan tanggal dan jam ,jam nya sesuai dengan UTC

//get method
console.log(now.getFullYear());
console.log(now.getMonth()+1)
console.log(now.getDate())

//set method
now.setDate(30);

console.log(now);
//dapat menyeting sendiri terkait tanggal,hari,jam,tahun

//BASIC OPERATOR
/*
+ (pertambahan)
- (perkurangan)
/ (pembagian)
* (perkalian)
% (sisah bagi,berfungsi untuk menentukan nilai ganjil atau genap)
**(pangkat)
*/

console.log(1 + 1);
console.log(2 - 1);
console.log(2 * 4);
console.log(3 / 1);
console.log(1 + 1);
console.log(7 % 3);
console.log(3 ** 3);


//modify in place
let n = 4;
n = n+2 
console.log(n);
//cara panjang

let n1 = 4;
n1 +=2
console.log(n1);
//cara cepat

//INCERMENT & DECREMENT
let counter = 2;
counter++;
console.log(counter);
//INCREMENT Penambahan 1

let counters = 2;
counters--;
console.log(counters);
//DECREMENT Pengurangan 1

//POSTFIX & PREFIX
let jumlah = 2;
console.log(++jumlah);
//prefix angka akan muncul ditambah dulu

let nilai = 2;
console.log(nilai++);
console.log(nilai);
//postfix angka akan muncul setelah nya jd di sembunyikan dulu

//comprassion operator
console.log