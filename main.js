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
let totalperson = document.querySelector(".totalperson");



person.addEventListener("input", function () {
   person = document.querySelector(".person");
   zero = document.querySelector("p");
  if (person.value == "0") {
      zero.style.display ="block";
      person.style.border = "1px solid red";
  }else{
      zero.style.display = "none";
      person.style.border = "none";
  }
});
    percent5 = document.querySelector(".percent5");
    percent5.addEventListener('click',function () { 
     bill = document.querySelector(".bill").value;
     person = document.querySelector(".person").value;
     tipamount = document.querySelector(".tipamount");
     
    if(bill && person){
       amount = (bill * 0.05) / person;
        tipamount.innerHTML = amount;
    } console.log(amount)
});


percent10 = document.querySelector(".percent10");
percent10.addEventListener('click',function () { 
     bill = document.querySelector(".bill").value;
     person = document.querySelector(".person").value;
     tipamount = document.querySelector(".tipamount");
     
    if(bill && person){
        amount = (bill * 0.10) / person;
        tipamount.innerHTML = amount;
    } console.log(amount)
});

percent15 = document.querySelector(".percent15");
percent15.addEventListener('click',function () { 
     bill = document.querySelector(".bill").value;
     person = document.querySelector(".person").value;
     tipamount = document.querySelector(".tipamount");
     
    if(bill && person){
        amount = (bill * 0.15) / person;
        tipamount.innerHTML = amount;
    } console.log(amount)
});
    

percent25 = document.querySelector(".percent25");
percent25.addEventListener('click',function () { 
     bill = document.querySelector(".bill").value;
     person = document.querySelector(".person").value;
     tipamount = document.querySelector(".tipamount");
     
    if(bill && person){
        amount = (bill * 0.25) / person;
        tipamount.innerHTML = amount;
    } console.log(amount)
});


percent50 = document.querySelector(".percent50");
percent50.addEventListener('click',function () { 
     bill = document.querySelector(".bill").value;
     person = document.querySelector(".person").value;
     tipamount = document.querySelector(".tipamount");
     
    if(bill && person){
        amount = (bill * 0.50) / person;
        tipamount.innerHTML = amount;
    } console.log(amount)
});
