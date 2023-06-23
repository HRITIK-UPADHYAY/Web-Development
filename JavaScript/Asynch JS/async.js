// console.log("1");

// setTimeout(() => {
//     console.log("3");
//     setTimeout(() => {
//         console.log("2");
//     }, 200)
// }, 300)

// setTimeout(() => {
//     console.log("4");
// }, 550)

// console.log(5);

// ***************** 

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// })

// console.log(3);
// console.log(3);
// console.log(3);
// console.log(3);
// console.log(3);
// console.log(3);
// console.log(3);
// console.log(3);


// ***************** 

// function f() {
//     console.log(2);
// }

// console.log(1);

// queueMicrotask(f)  // to store the function into microTask Queue.

// console.log(3);

// ***************** 

// function f() {
//         console.log(2);
//     }
    
// console.log(1);

// setTimeout(() => {
//     console.log(7);
// }, 0);
    
// queueMicrotask(f);

// console.log(3);
// output --> 1, 3, 2, 7

// *****************

// setTimeout(() => {
//     console.log(1);
//     queueMicrotask(() => {
//         console.log(2);
//     })
// })

// queueMicrotask(() => {
//     console.log(4);
//     setTimeout(() => {
//         console.log(3);
//     })
// })
//output --> 4, 1, 2, 3

// *****************

const button = document.getElementsByTagName("button")[0];
console.log(1);
button.addEventListener("click", () => {
    console.log(2);
})
console.log(3);