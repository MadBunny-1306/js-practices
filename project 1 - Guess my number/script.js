"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".number").textContent = 13;


document.querySelector(".guess").value = 23; //bc .guess is input, so we can change its value
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //it's better to store value in variable in code, than to have it only on DOM
//this score variable could be called state variable, bc it's a part of so-called aplication state(all data relevant to the aplication)
document.querySelector(".number").textContent = secretNumber;

//Event here is "click", and we need to specify the reaction to the click event. We are doing that by defining a function which is called the event handler.
//.addEventListener - 1st arguments is event. 2nd argument is event handler function

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
