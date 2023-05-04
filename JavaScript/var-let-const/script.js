// whenever a js code is executed, an execution context is created. 
// Hoisting : Hoisting in JS is the behaviour where function and variable can be used
// even before they are declared.

// var: reinitialize and redeclare the variable 
// variables created using var keyword are present inside global memory space. 
console.log(a);  //undefine value.
var a = 10;
console.log(a)
var a = 20;
console.log(a);

console.log(add(4, 5))

function add(a, b){
    return a + b;
}

// let: reinitialize the variable but not redeclare the variable. 
// variable created using let keyword are present in another memory space rather than global space.
// let is hoisted, but in this case variable is present in Temporal Dead Zone. Since the variable 
// are in TDZ, that's why they are not accessible.

// Temporal Dead Zone(TDZ): it is period of time during which let and const decleration cannot be accessd.
// TDZ start when code execution enters the block which contains the let and const decleration and it continues until the decleration executed.

// console.log(b);
let b = 10;
console.log(b);
b = 20;
console.log(b);

// const: cannot reinitialise it nor redeclare it 
// present in another memory space rather than globalThis. 
// const is also hoisted but, is in TDZ.  
console.log(pi);
const pi = 3.14;
console.log(pi);
