"use strict";

const modal = document.querySelector(".modal"); //selecting element and storing the result of that selection in variable
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
//when we use querySelector that has multiple elements, only the first one will be selected (here that happens with buttons show-modal). So instead we use querySelectorAll

// console.log(btnsOpenModal); //this will show node list, which looks like array...

const openModal = function () {
  modal.classList.remove("hidden"); //we dont use dot here with classes, just name of the class
  //modal.style.display = "block";//this was my solution and it worked
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//... so we can loop through it like this
for (let i = 0; i < btnsOpenModal.length; i++)
  // console.log(btnsOpenModal[i].textContent); //if there's only 1 line of code we don't need {}
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
