// // Synchronous
// console.log("task 1");
// console.log("task 2");
// console.log("task 3");

// // Asynchronous
// console.log("task 1");
// setTimeout(() => console.log("task 2"), 3000);
// console.log("task 3");

// // Promise
// const tryPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;
//     if (success) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   }, 2000);
// });

// tryPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally done");
//   });

// const fetchData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       return response.json();
//     })
//     .then((users) => {
//       console.log(users);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       console.log("finally done");
//     });
// };

// fetchData();

// ASYNC AWAIT
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("berhasil");
//     }, 2000);
//   });
// };

// async function getDataa() {}

// const getData = async () => {
//   const result = await fetchData();
//   console.log(result);
//   return result;
// };

// getData();

// const fetchData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       return response.json();
//     })
//     .then((users) => {
//       console.log(users);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       console.log("finally done");
//     });
// };

// const fetchData = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("finally done");
//   }
// };

// fetchData();

// JSON

const user = {
    name: "budi",
    age: 39,
  };
  
  console.log(user);
  
  const userJSON = JSON.stringify(user); // translate object biasa ke json
  console.log(userJSON);
  
  const parseJSON = JSON.parse(userJSON); // translate json ke object biasa
  console.log(parseJSON);
  
  const myFunction = () => {
    return "ini adalah function";
  };
  
  const data = "ini adalah data";
  
  module.exports = { myFunction, data }; // export data supaya bisa digunakan di file lain