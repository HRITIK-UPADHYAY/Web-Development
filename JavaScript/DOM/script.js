// const parentElement = document.getElementById("parent");
// // console.log(parentElement);

// const divElements = document.getElementsByTagName("div");
//  console.log(divElements);

//  console.log(divElements[3]);
//  divElements[3].innerText = "Something ELse";

// function change() {
//   const targetElement = divElements[0];

  //    targetElement.style.color = targetElement.style.color === "red" ? "black" : "red";

  //    const computedStyle = window.getComputedStyle(targetElement);
  //    console.log(computedStyle.fontSize);

  // targetElement.style.color = "blue";

  // => children method.
  // console.log(targetElement.children);

  // let firstChildren = targetElement.children[0];
  // console.log(firstChildren);

  // const testElement = firstChildren.children[0];
  // // console.log(testElement);
  // testElement.style.color = "red";
// }

// => getElementsByClassName method.
// let elements = document.getElementsByClassName("test");
// console.log(elements);

// => querySelector method is a CSS selector.
// it figures oout the first div element which is the first children in its parent.
// let element = document.querySelector("div:first-child");

// console.log(element);

// => querySelectorAll method is a CSS selector.
// which select all the element which is used the css selector.
// let elements = document.querySelectorAll("div:first-child");
// console.log(elements);

// console.log(elements[0].children[0] === elements[1]);

// => .parentNode propert is use to find the parent of the node.
// const elements = document.querySelector(".abc.test");
// console.log(elements.parentNode);

// => .nextElementSibling property is use to find the next sibling of the give node.
// const parent = document.querySelector("#parent");
// console.log(parent.nextElementSibling);
// console.log(parent.previousElementSibling); //to find the previous sibling of the given node.

// console.log(parent.nextSibling); //it include the line break as a sibling.
// console.log(parent.previousSibling); //it also include the line break as a sibling.

// let element = document.getElementById("parent");

// console.log(element.children); //it gives the children of given parent.
// console.log(element.childrentNode); //it include the line break as a children of given parent.

// ++=> Creation of a  Node(HTML Element).
// class HTMLCOllection{
//     constructor(){

//     }
//     many method...
// }
// function createElement(){
//     return new HTMLCollection();
// }

// const boldElement = document.createElement("b")
// console.log(boldElement);

// boldElement.innerText = "HRITIK";

// attach above reference as a child for body Element.
// const bodyElement = document.body; //fectch the body element.
// bodyElement.append(boldElement); //append the bold element as a child.

// const div = document.createElement("div");
// div.innerText = "Something";
// div.style.color = "red";
// bodyElement.append(div);

// function addBold() {
//   const root = document.getElementById("root");
//   const bold = document.createElement("b");
//   bold.innerText = "HRITIK";
//   bold.style.border = "2px solid red";
//   bold.style.padding = "10px";

//   const para = document.createElement("p");
//   para.innerText = "Something";
//   para.style.border = "2px solid red";
//   para.style.padding = "10px";


// //   root.append(bold, para);
//   root.appendChild(bold);
// }


/*
    <div class="modal">
        <div class="modal-body">
            <input type="text">
            <input type="text">
            <input type="text">
            <button onclick="closeModal()"> Submit </button>
        </div>
    </div>
 */

// function openModal(){
//     const modal = document.createElement("div");
//     modal.className = "modal";

//     const modalBody = document.createElement("div");
//     modalBody.className = "modal-body";

//     const input1 = document.createElement("input");
//     input1.className = "text";

//     const input2 = document.createElement("input");
//     input2.className = "text";

//     const input3 = document.createElement("input");
//     input3.className = "text";

//     const submitButtom = document.createElement("button");
//     submitButtom.innerText = "Submit";
//     submitButtom.onclick = closeModal()

//     modalBody.append(input1, input2, input3, submitButtom);
//     modal.appendChild(modalBody);

//     document.body.append(modal);

//     // modal.style.display = "flex";
// }

// function closeModal(){
//     const modal = document.getElementsByClassName("modal")[0];
//     modal.style.display = "none";
// }

function callme(){
  alert("You Clicked the button");
}

const button = document.getElementById("btn");
//=> addEventListener(eventType, callBack)
// button.addEventListener("click", callme);
// button.addEventListener("click", () => {
//   console.log("Second Clink Event");
// })

// button.addEventListener("mouseover", () => {
//   console.log("You hovered on the button");
// })

// button.addEventListener("mouseleave", () => {
//   console.log("You hoverd");
// })

const input = document.getElementsByTagName("input")[0];
// input.addEventListener("focus", () => {
//   console.log("You Focused on the input");
// })

// input.addEventListener("blur", () => {
//   console.log("You UnFocused on the input");
// })

// input.addEventListener("change", (obj) => {
//   console.log(obj);
// })

// keypressing event
// input.addEventListener("keyup", () => {
//   console.log(event.target.value);
// })

let users = [
  "vipul",
  "aman",
  "HR",
  "Aravind"
]

function search(searchString){
  users.filter()
}




