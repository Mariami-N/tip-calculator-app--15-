let container = document.querySelector(".container");
let box = document.querySelector(".box");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let person = document.querySelector("input");
let zero = document.querySelector("label");

person.value=" ";

person.addEventListener("input", function (){
  if (person.value === 0){
    zero.classList.toggle("zero2")
    person.classList.toggle("person2")
  }
    });

