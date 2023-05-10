// Intialiaze an Array 
// syntax -> 
// 1. -> let array_name = new Array();
// 2. -> let array_name =  [];

let todo = ["complete office work", "bring grocery", "cook food", 13393, 33, true, {"a": 
"b"}, [1,3,4]];
 
// Accessing an Element in Array. 
// syntax => Array_name[0]. 

console.log(todo[0]);

// print the whole array 
console.log(todo);

// length of the array -> array_name.length 
console.log(todo.length);

// adding an Element in an Array 
todo[3] = "bring notebook";
console.log(todo);

// last Element of an array 
console.log(todo.at(-1));


// push : adds an element to the end of the array.
let fruits = ["apple", "mango"];
fruits.push("grapes", "oranges");
console.log(fruits);

// unshift: adds an Element at the start of the Array. 
fruits.unshift("peers", "strawberry");
console.log(fruits);

// pop: remove the Element from the end of the Array. 
fruits.pop();
console.log(fruits);

// shift: removes elements from begning of the Array. 
fruits.shift();
console.log(fruits);

// shift and unshift are very slow. 
// push and pop are fast. 
