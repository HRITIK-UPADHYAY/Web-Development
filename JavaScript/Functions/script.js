// function decleration
// function function_name(parameters){
//     //body
// }

//function calling
// function_name(arguments)

// function add(a, b){
//     console.log(a + b);
// }

// add(5, 4);

// function expression 
// syntax -> var variable_name = function(parameters){ //code }
// and the function should be called by variable_name.

// var multiply = function(a, b){
//     console.log(a * b);
// }
 
// multiply(3, 7)   // function invocation 
// console.log(multiply);

// // return statement 
// function add(a, b){
//     return a + b;
// }

// var sum = add(5, 4);
// console.log("sum : " +  sum);

// var a = prompt("a :")
// var b = prompt("b :")
// var multiply = function(a, b){
//     console.log("multiply :" + a * b)
// }

// multiply(a, b)
// console.log(multiply)

// var a = prompt("number: ")
// // function evenOrOdd(n){
// //     if(n%2 == 0) console.log("even")
// //     else console.log("odd");
// // }
// // evenOrOdd(a)
// var evenOrOdd = function(n){
//     if(n%2 == 0) return true;
//     else return false;
// }

// console.log(evenOrOdd(a));


//arrow function
// syntax -> var variable_name = (parameters) => { //code } 
// variable_name(arguments)
// var num = prompt("number :")
// var evenOrOdd = (num) => {
//         if(n%2 == 0) return true;
//         else return false;
// }
// console.log(evenOrOdd(num));

var sum = (a, b) => { return a+b}
console.log(sum(10, 13));

// function expression 
// hoisting doesn't work with function expression
console.log(sum(2,4));
var sum = (a, b) => a + b;
console.log(sum(2,3));