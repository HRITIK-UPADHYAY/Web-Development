// error handling.

// let user = {};

// try{
//     console.log("before error");
//     console.log(user.fullName.firstName);
//     console.log("after error");
// }
// catch (error){
//     console.log("catch block", error.message);
//     try{
//         console.log(b);
//     }
//     catch(error){
//         console.log("b is 2");
//     }
// }
// finally {
//     console.log("always get executed");
// }

// console.log("crucial code");

// ******************** //

// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(a);
//     })
// })

// console.log(prom);
// prom.catch((error) => {
//     console.log("error occured", error);
// })

// ******************** //

// let prom = new Promise(() => {
//     throw new Error("some error");
// })

// console.log(prom);

// ******************** //

// let prom = new Promise((resolve, reject) => {
//    try {
//     console.log(a);
//     resolve("a is available");
//    }
//    catch(error){
//     reject("a is not available");
//    }
// })

// prom.then((data) => {
//     console.log(data, 'inside then');
// })

// prom.catch((data) => {
//     console.log(data, 'inside catch');
// })

// ******************** //

let prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("HRITIK");
  }, 2000);
});

prom.then((data) => {
    console.log(data, "Inside successcallback");
  })
  .then(() => {
    console.log("X is resolved");
  })
  .then(() => {
    console.log("yis resolved");
  })
  .catch(() => {
    console.log("catch is called");
  })
  .finally(() => {
    console.log("finally");
  });

// prom.then(() => {
//     console.log("success");
// })

// prom.catch(() => {
//     console.log("error");
// })

// prom.finally(() => {
//     console.log("finally");
// })
