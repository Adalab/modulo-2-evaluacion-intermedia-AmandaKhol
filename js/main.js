"use strict";

const buttonElement = document.querySelector(".js-button");
const inputElement = document.querySelector(".js-input");
const clueElement = document.querySelector(".js-clue");
const tryElement = document.querySelector(".js-try");

let tryCount = 0;
const maxNumber = 100;
const minNumber = 1;

//Aditional functions
function getRandomNumber(minNumber, maxNumber) {
  const result =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  console.log(`Mi número aleatorio es: ${result}`);
  return result;
}

function increaseAndPrintCount() {
  tryCount += 1;
  tryElement.innerHTML = tryCount;
}

// Random number generation
const solutionNumber = getRandomNumber(minNumber, maxNumber);

//Button handle
function handleBtn() {
  const response = inputElement.value;
  const responseInt = parseInt(response);
  const responseIntToString = responseInt + "";

  //Check errors in input data: not letters or void value
  if (
    isNaN(responseInt) ||
    responseIntToString !== response ||
    response === ""
  ) {
    clueElement.innerHTML = `Pista: Escribe un número entre ${minNumber} y ${maxNumber}`;
    console.log("not a number");
    return;
  }
  //Check number include in game range
  if (responseInt > maxNumber || responseInt < minNumber) {
    clueElement.innerHTML = `Pista: El número debe estar entre  ${minNumber} y ${maxNumber}`;
    console.log(`El número debe estar entre ${minNumber} y ${maxNumber}`);
    return;
  }

  if (responseInt === solutionNumber) {
    clueElement.innerHTML = `¡¡Has ganado campeona!`;
    increaseAndPrintCount();
    console.log(`¡¡Has ganado campeona!`);
  } else if (responseInt < solutionNumber) {
    clueElement.innerHTML = `Pista: Demasiado bajo`;
    increaseAndPrintCount();
    console.log(`Demasiado bajo`);
  } else {
    clueElement.innerHTML = `Pista: Demasiado alto`;
    increaseAndPrintCount();
    console.log("Demasiado alto");
  }
}

buttonElement.addEventListener("click", handleBtn);
