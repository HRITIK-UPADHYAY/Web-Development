// promise => class/ constructor function.

// class CustomPromise {
//     constructor(x) {
//         x(this.resolve, this.reject);
//     }

//     resolve(){
//         console.log("Resolve");
//     }

//     reject(){
//         console.log("Reject");
//     }
// }

// const executor = (a, b) => {
//     console.log(typeof a, typeof b);
//     console.log("Inside executor");
// }

// let p1 = new CustomPromise(executor);

// const executor = (resolve, reject) => {
//     resolve();
//     console.log("Inside Executor");
// }

// let p1 = new Promise(executor);
// console.log(p1);

/*
Every Promise object will have 3 States.
1. pending.
2. fullfilled.
3. rejected.
*/

// let prom1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 3000)
// });

// function successCallback() {
//     console.log("Inside resolve listener");
// }

// prom1.then(successCallback);

// console.log(prom1);

//  ****************  //

//   let prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve({name: "HRITIK"});
//         let data = [
//             {
//                 name: "laptop",
//                 price: 200,
//                 available: true
//             },
//             {
//                 name: "phone",
//                 price: 300,
//                 available: false
//             }
//         ];
//         reject(data);
//     }, 3000);
//   });

//   prom.then((data) => {
//     console.log(data);
//     console.log("Success Listener");
//   })

//   prom.catch((data) => {
//     console.log("error callback");
//     console.log(data);
//   })

  //executor method will decide to pass some data into resolve or reject.


  function makeNetworkCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const responseData = [
                "mumbai",
                "noida",
                "delhi",
                "haldwani"
            ];
            resolve(responseData);
        }, 2000)
    })
  }

  //write the code to make the network call and display the received cities data in the UI.
const container = document.getElementById("cities-container");

function appendDataOntoUi(citiesList){
   citiesList.forEach(city => {
      const p = document.createElement("p");
      p.innerText = city;
      container.appendChild(p);
   });
}

let prom = makeNetworkCall();

prom.then((data) => {
    appendDataOntoUi(data);
})