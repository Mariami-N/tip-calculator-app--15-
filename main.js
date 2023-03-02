let container = document.querySelector(".container");
let box = document.querySelector(".box");
let first = document.querySelector(".first");
let bill = document.querySelector(".bill");
let second = document.querySelector(".second");
let person = document.querySelector(".person");
let zero = document.querySelector(".zero");
let custom = document.querySelector(".custom");
let percent5 = document.querySelector(".percent5");
let percent10 = document.querySelector(".percent10");
let percent15 = document.querySelector(".percent15");             
let percent25 = document.querySelector(".percent25");             
let percent50 = document.querySelector(".percent50"); 

let tipamount = document.querySelector(".tipamount");
tipamount.innerHTML = `$ ${0.00}`;
let totalperson = document.querySelector(".totalperson");
totalperson.innerHTML = `$ ${0.00}`;


person.addEventListener("input", function () {
   person = document.querySelector(".person")
   zero = document.querySelector("p");
  if (person.value == "0") {
      zero.style.display ="block";
      person.style.border = "1px solid red";
  }else{
      zero.style.display = "none";
      person.style.border = "none";
  }
});


    
    
