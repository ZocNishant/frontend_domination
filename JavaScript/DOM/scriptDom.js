// DOM

// DOM Manipulation

// Accessing ElementInternals:
// document.querySelector()

// Modifying Elements:
// innerHTML, textContent
// const btn = document.querySelector("button");

// btn.innerHTML = "<h1>Pasa</h1>";

// Manipulating Styles and Classes:
// style
// classList

// const hOne = document.querySelector("h1");

// hOne.style.color = "red";
// hOne.style.fontFamily = "cursive";

// const h1 = document.querySelector("h1");
// h1.classList.add("makeIt");

// Creating and Deleting Elements:
// createElement()
// appendChild()
// removeChild()

// const h2 = document.createElement("h2");
// h2.textContent = "Pasa k xa.";

// document.querySelector("body").appendChild(h2);

// const image = document.createElement("img");
// image.src =
//   "https://images.unsplash.com/photo-1720206811364-684e8f8e803f?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// document.querySelector("body").appendChild(image);
// image.style.width = "200px";

// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   document.querySelector("body").removeChild(image);
// });

// Event Handling
// addEventListener()

// Even Object

// document
//   .querySelector("body")
//   .addEventListener("mousemove", function (details) {
//     console.log(details.clientX, details.clientY);
//   });

// ----------------------------- Practice Session -----------------

// 1. Create a HTML page with a button. When the button is clicked, change the text of a paragraph element.

// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   document.querySelector("p").textContent =
//     "lorem pasa k xa kaso xa kna xa ka bata xa xanata xa.";
// });

// 2. Create a page with two images and a button.

// const btn = document.querySelector("button");

// const img1 = document.querySelector(".img1");

// const img2 = document.querySelector(".img2");

// btn.addEventListener("click", function () {
//   const img1Src = img1.src;
//   const img2Src = img2.src;

//   img1.src = img2Src;
//   img2.src = img1Src;
// });

// QUE 3

const inputField = document.querySelector(".input");

const button = document.querySelector("button");

// New Que
