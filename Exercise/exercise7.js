//1
/*Create a function to check if two objects are equal
● Example
○ Input : { a: 2 } & { a: 1 }
○ Output: false
● Example
○ Input : { a: “Hello” } & { a: 1 }
○ Output: false
● Example
○ Input : { a: 1 } & { a: 1 }
○ Output: true*/
function isEqual(obj1, obj2) {

  if (obj1 === obj2) return true;     // Cek jika kedua objek adalah objek yang sama

  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return false;   // Cek jika salah satu bukan objek atau null
  const keys1 = Object.keys(obj1);        //  kunci dari kedua objek
  const keys2 = Object.keys(obj2);        //  kunci dari kedua objek


  if (keys1.length !== keys2.length) return false;    // jika jumlah kunci berbeda

  for (let key of keys1) {
      if (!keys2.includes(key) || !isEqual(obj1[key], obj2[key])) return false;   // periksa properti yang berisi objek
  }
  return true;
}

const obj1 = { a: 2 };
const obj2 = { a: 1 };

console.log(isEqual(obj1, obj2));
//2
/*● Create a function to get the intersection of two objects
● Example
○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
○ Output: { a: 1 }*/
function perpotongan(obj1, obj2) {
  const intersection = {};
  for (const key in obj1) {
    if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      intersection[key] = obj1[key];
    }
  }
  return intersection;
}

const objek1 = {
  a: 1,
  b: 2,
};
const objek2 = {
  a: 1,
  b: 3,
};

const hasil = perpotongan(objek1, objek2);
console.log(hasil);
//3

/*Create a function to merge two array of student data and remove duplicate data
● Student data : name & email
● Example :
Array1 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ }
]
Array2 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]
● Result :

ArrayResult → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]*/

const Array1 = [
  {
    name: "student1",
    email: "student1@mail.com",
  },
  {
    name: "student2",
    email: "student2@mail.com",
  },
];

const Array2 = [
  {
    name: "student1",
    email: "student1@mail.com",
  },
  {
    name: "student3",
    email: "student3@mail.com",
  },
];
function mergeStudent(array1, array2) {
  //menggabungkan kedua objek
  const gabung = [...array1, ...array2];

  //menghapus data duplikat berdasarkan nama dan email
  const uniqueArray = gabung.reduce((acc, student) => {
    const existingStudent = acc.find(
      (s) => s.name === student.name && s.email === student.email
    );
    if (!existingStudent) {
      acc.push(student);
    }
    return acc;
  }, []);
  return uniqueArray;
}

const mergedresult = mergeStudent(Array1, Array2);
console.log(mergedresult);

//no4
const originArray = [
  {
    name: "David",
    age: 20,
  },
];
const invertedArray = invertObjectArray(originArray);

function invertObjectArray(objact) {
  const invertedarr = [];

  for (const subject of objact) {
    const invertedObj = {};

    for (const key in subject) {
      invertedObj[subject[key]] = key;
    }

    invertedarr.push(invertedObj);
  }

  return invertedarr;
}

console.log(invertedArray);

//5
const nomor = 6;
function factorial(i) {
  if (i === 1) {
    return 1;
  } else {
    return i * factorial(i - 1);
  }
}
const result1 = factorial(nomor);
console.log(`${nomor}! =  ${result1}`);
