"use strict";

const buttonElement = document.querySelector(".js-button");
const inputElement = document.querySelector(".js-input");
const clueElement = document.querySelector(".js-clue");
const tryElement = document.querySelector(".js-try");

let tryCount = 0;
const maxNumber = 100;

function getRandomNumber(tryNumber) {
  return Math.ceil(Math.random() * tryNumber);
}

const solutionNumber = getRandomNumber(maxNumber);
console.log(`Mi número aleatorio es: ${solutionNumber}`);

function handleBtn() {
  const response = inputElement.value;
  const responseInt = parseInt(response);
  const responseIntToString = responseInt + "";

  //Check errors in input data
  if (isNaN(response) || responseIntToString !== response) {
    console.log("not a number");
    return;
  }
  if (response > maxNumber) {
    console.log(`El número debe estar entre 1 y ${maxNumber}`);
  }

  if (response === solutionNumber) {
    console.log(`¡¡Has ganado campeona!`);
  } else if (response < solutionNumber) {
    console.log(`Demasiado bajo`);
  } else if (response > solutionNumber) {
    console.log("Demasiado alto");
  } else {
    console.log("you must debug");
  }
}

buttonElement.addEventListener("click", handleBtn);
