'use strict';

const buttonElement = document.querySelector('.js-button');
const inputElement = document.querySelector('.js-input');
const clueElement = document.querySelector('.js-clue');
const tryElement = document.querySelector('.js-try');
const form = document.querySelector('.form');

let tryCount = 0;
const maxNumber = 100;
const minNumber = 1;

//ADITIONAL FUNCTIONS
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

function renderFeedback(responseInt) {
  if (responseInt === solutionNumber) {
    messageToClue(`¡¡Has ganado campeona!`);
    increaseAndPrintCount();
  } else if (responseInt < solutionNumber) {
    messageToClue(`Pista: Demasiado bajo`);
    increaseAndPrintCount();
  } else {
    messageToClue(`Pista: Demasiado alto`);
    increaseAndPrintCount();
  }
}

function messageToClue(message) {
  clueElement.innerHTML = message;
}

function handleForm(ev) {
  ev.preventDefault();
}

//Button handle
function handleBtn() {
  const response = inputElement.value;
  const responseInt = parseInt(response);
  const responseIntToString = responseInt + '';

  //Check errors in input data: avoid letters or void value
  if (
    isNaN(responseInt) ||
    responseIntToString !== response ||
    response === ''
  ) {
    messageToClue(`Pista: Escribe un número entre ${minNumber} y ${maxNumber}`);
    return;
  }
  //Check number include in game range
  if (responseInt > maxNumber || responseInt < minNumber) {
    messageToClue(
      `Pista: El número debe estar entre  ${minNumber} y ${maxNumber}`
    );
    return;
  }
  renderFeedback(responseInt);
}

buttonElement.addEventListener('click', handleBtn);
form.addEventListener('submit', handleForm);
