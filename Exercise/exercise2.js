//no1
const celcius = 60;
fahrenheit = (9 / 5) * celcius + 32;
console.log(fahrenheit);

//no2
const angka = 1;
if (angka % 2 === 0) {
  console.log("the number is even");
} else {
  console.log("the number is odd");
}
//no2 versi ternary
const angkas =23;
if (angka % 2 === 0) {
  console.log("genap");
}else{
  console.log("ganjil");
}
console.log(angka % 2 === 0 ? "genap" : "ganjil");

//no3
let number = 7;
let isprime = number == 1 ? false : true; //bcoz 1 is not prime

for (let i = 2; i < number; i++) {
  number % i == 0 ? (isprime *= false) : (isprime *= true);
}

console.log(`${number} is ${isprime ? "prime" : "not prime"} number`);

//4 
//versiadvance
/*const Number = 5;
let sum = 0;
let message = "";
for (let i = 1; i <= Number; i++){
  sum += i;
  if (i===Number){
    message += i + "";
  }else{
    message += i + " + ";
  }
}
console.log(message + " = " + sum); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)
*/

//versi Advance 2
const Number = 5;
let sum = 0;
let message = "";
for (let i = 1; i <= Number; i++){
  sum += i;

  message += i + (i=== Number ? "" : "+");
}
console.log(message + "=" + sum);

//4 
//versi rumus
const angke = 6;
const result = (angke * (angke +1)/2)
console.log(result);

//5
let nomor = 6;
let k = 6;
let faktorial = [1];
for (let i = 1; i <= k; i++) {
  faktorial.push(i * faktorial[i - 1]);
}
console.log("faktorial dari", nomor, "adalah", faktorial);

//5
//version lecture
const num = 6
let res = 1
for(let i = num; i >= 1; i--){
  res *= i;
  message += i + (i === 1 ? "" : "x");
}
console.log(message + "=" + res);

//6
let n = 15;
let deret = [0, 1,1]; //sesuai dengan series 0,1,1,2,3,5,.....
for (let i = 3; i <= n; i++) {
  deret.push(deret[ i - 2] + deret[i - 1]);
}
console.log(deret);

//version lecture
const p = 15;
let a = 0;
let b = 1;
for(let i = 0; i < p; i++){
  let next = a + b;
  a = b;
  b = next;
}
console.log(a);