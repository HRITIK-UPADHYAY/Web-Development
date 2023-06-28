// window.navigator.geolocation.getCurrentPosition((position) => {
//     console.log("success", {position});
// }, (error) => {
//     console.log(error);
//     document.write("please allow the location");
// })

// ************************** //

// function getLocation() {
//     return new Promise((resolve, reject) => {
//         let succesCallback = (position) => {
//             resolve(position);
//         }

//         let errorCallback = (error) => {
//             reject(error);
//         }

//         navigator.geolocation.getCurrentPosition(succesCallback, errorCallback);
//     })
// }

// let locationPromise = getLocation();

// locationPromise.then((position) => {
//   let lat =  position.coords.latitude;
//   let long = position.coords.longitude;

//   return `Latitude: ${lat} and Longitude: ${long}`;
// }) .then((data) => {
//     let p = document.createElement("p");
//     p.innerText = data;
//     document.body.appendChild(p);
// }).catch((error) => {
//     console.log(error);
//     document.write("failed to fetch location");
// })

// function somePromise1() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("HRITIK");
//         }, 3000)
//     })
// }

// function somePromise2(name) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(name + " " + "UPADHYAY");
//         }, 3000)
//     })
// }

// async function solve() {
//     let name = await somePromise1();
//     console.log(name);
//     let fullName = await somePromise2(name);
//     console.log(fullName);
// }

// solve();

// ****************** //

// somePromise1().then((data) => {
//    return somePromise2(data);
// }).then((data) => {
//     console.log(data);
// })


// **************** //

// => JSON Methods <= //
/*
 login => username, password
*/

// let obj = {
//     a: 10,
//     b: 20
// }

//change the object into string.
 //1. -> way => // console.log(String(obj));

//  //2. -> way => 
// const parsedString = JSON.stringify(obj);
// console.log(parsedString);

// let str = `{"name": "HRITIK", "age": 21}`;
// let parsedObject = JSON.parse(str);
// console.log(parsedObject.name);

// ************************** //
//Static method in Promises.

// class Test {
//     method1(){
//         console.log("method1");
//     }

//     static method2(){
//         console.log("method2");
//     }
// }

// let t = new Test();
// t.method1();
// Test.method2();

// function resolve(obj){
//     if(obj instanceof Promise) return obj;

//     return new Promise(resolve => {
//         resolve(obj);
//     })
// }

// let x = new Promise(() => {})
// let y = resolve(x);
// console.log(y);

// ************************** //

// let prom = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("HRITIK");
//     }, 2000);
// })
// let x = Promise.resolve(prom);
// console.log(x);
// console.log(x === prom);

// ************************** //

// let x = new Promise(() => {})
// let y = Promise.reject(x);
// console.log(y);

// ************************** //

// let a = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("a");
//     }, 3000)
// })

// let b = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("b");
//     }, 2000)
// })

// let c = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("c");
//     }, 1000)
// })

// let x = Promise.all([a, b, c]);
// setTimeout(() => {
//     console.log(x);
// }, 4000);

// ************************** //

// let a = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("a");
//     }, 3000)
// })

// let b = new Promise((resolve, reject )=> {
//     setTimeout(() => {
//         reject("b");
//     }, 2000)
// })

// let c = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("c");
//     }, 1000)
// })

// let x = Promise.all([a, b, c]);
// setTimeout(() => {
//     console.log(x);
// }, 4000)

// ************************** //

// let a = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("a");
//     }, 2000)
// })

// let b = new Promise((resolve, reject )=> {
//     setTimeout(() => {
//         reject("b");
//     }, 2000)
// })

// let c = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("c");
//     }, 1000)
// })


// let x = Promise.any([a, b, c]);
// setTimeout(() => {
//     console.log(x);
// }, 3000)

// x.catch(data => {
//     console.log(data);
// })

// ************************** //

// let a = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("a");
//     }, 2000)
// })

// let b = new Promise((resolve, reject )=> {
//     setTimeout(() => {
//         resolve("b");
//     }, 1000)
// })

// let c = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("c");
//     }, 1000)
// })

// let x = Promise.race([a, b, c]);
// setTimeout(() => {
//     console.log(x);
// }, 2000)

// ************************** //

// async function callme(){
//     let a = await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log("3", a);

//     let b = await new Promise(resolve => setTimeout(resolve, 2000))
//     console.log("4", b);
    
//     return 10;
// }

// console.log(1);
// let x = callme();

let user = { 
    firstname: "John",
    lastname: 'Doe',
    getFullName: function(){
         return () => {
            console. log (`The full name of the user is ${this.firstname} ${this. lastname}` );
         }
    }
}

user.getFullName()();
