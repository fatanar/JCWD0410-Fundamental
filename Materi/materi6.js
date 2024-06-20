//fornt end akan banyak menerima data array of object

//cara membuat object
//cara1
const user = {};

//cara
const user2 = new Object();

//Properti & Method
const user3 = {
  name: "david", //propertis
  greet() {
    //method
    console.log("Hello");
  },
};

console.log(user3.greet("budi"));

//Add & Delete property
const person = {
  name: "joko",
  age: 20,
};
console.log(person);

//Add
person.hobby = "coding";
console.log(person);

//Delete property
delete person.age;
console.log(person);

//Accessing Value
console.log(person.name);
console.log(person["name"]);

//Optional Chaining
const user4 = {};
console.log(user.address);
//console.log(user.address.street); "akan muncul error"
console.log(user.address?.street);

//Accessing key
const person2 = {
  name: "aceng",
  age: 90,
};
//untuk akses semua key
console.log(Object.keys(person2));

//untuk akeses semua value
console.log(Object.values(person2));

//FOR IN
const person3 = {
  name: "aceng",
  age: 90,
};

for (const key in person3) {
  console.log(key);
  console.log(person3[key]);
}

//Destructing Assignment -> mengeluarkan properti dalam object menjadi sebuah variable

//destruct object
const person4 = {
  name: "aceng",
  age: 90,
};
console.log(person4.name);
console.log(person4.age);

const { name, age } = person4;
console.log(name);
console.log(age);

//destruct array
const array = [10, 20];
console.log(array[0]);
console.log(array[1]);

const [a, b] = [10, 20];
console.log(a);
console.log(b);

//SPREAD OPERATOR -> digunakan untuk copy isi object / menggabungkan object
const object = { name: "jacky", password: "Admin123" };
const object2 = { email: "email@gmail.com", name: "budi" };
const result = { ...object, ...object2 };
console.log(result);

const hasil = { ...result, password: "Halo123" };
console.log(hasil);

//THIS KEYWORD -> mengakses properti lain di dalam sebuah object
const person5 = {
  firsname: "mamang",
  lastname: "racing",
  greet() {
    console.log(`Hello ${this.firstname}`);
  },
};
person5.greet();

//CLASS -> template untuk membuat sebuah object
//class declaration
//class haru menggunakan kapital diawal kata

class User {
  greeting() {
    console.log("Hello World");
  }
}

//class expression
const User2 = class {
  greeting() {
    console.log("Hello world");
  }
};

//CREATE AN OBJECT FROM CLASS
//setelah kalian membuat const selanjutnya jgn lupa kalian ambil nama class yg ingin dipakai
const orang = new User();   
orang.greeting();

const orang2 = new User();
orang2.greeting();

//CONSTRUCTOR -> menginisialisasi object yang di buat di dalam class
class Person{
    constructor(name) {
        this.name = name;
        this.greeting();
    }
    greeting(){
        console.log(`Hello ${this.name}`);
    }
}

const orang3 = new Person("aceng");
console.log(orang3.name);

//ACCESS MODIFER -> Public dan private

class Person2 {
    #email;
    constructor(name, email){
        this.name = name; //public
        this.#email = email; //private
    }
    showEmail(){
        //this.#email bisa diakses karena showEmail 1 class dengan #email
        console.log(this.#email);
    }
}

const orang4 = new Person2("budi","budi@mail.com")

//public
console.log(orang4.name); 

//private
console.log(orang4.email);
orang4.showEmail();

//GETTER AND SETTER
//get -> baca data
//set -> set value di dalam object

const orang5 = {
    firstname: "mang",
    lastname: "ujuang",

    get fullName(){
        return `${this.firstname} ${this.lastname}`
    },
    set fullName(value){
        const split = value.split(" ")
        this.firstname = split[0]
        this.lastname = split[1]
    },
    fullName2(value){
        const split = value.split(" ")
        this.firstname = split[0]
        this.lastname = split[1]
        return `${this.firstname} ${this.lastname}`
    }
}

console.log(orang5);

//menggunakan getter
console.log(orang5.fullName); 

//menggunakan setter
orang5.fullName = "Alice Cooper"

console.log(orang5.fullName);

//menggunakan function biasa 
console.log(orang5.fullName2("Aceng Yudi"));

//ENCAPCULATION
//konsep di OOP untuk ngebundle data dalam 1 unit. contohnya adlaah class dan object

//INHERITANCE -> pewarisan dari parent class ke child class. jadi property dan method
// dari class parent bisa dimiliki sama child class

//contoh INHERITANCE
class Product{
    constructor(name,price) {
        this.ProductName = name;
        this.price       = price;
    }
    readprice(){
        console.log(this.price);
    }
}

class Book extends Product {
    constructor(name,price,author) {
        super(name,price)
        this.author = author;
    }
}

const barang = new Book("cara menjadi jago programmer", 2000, "Aceng")

console.log(barang.price); 

//INSTANCE OF -> mengecek apakah sebuah object
class Animal {}
class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit();
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);
