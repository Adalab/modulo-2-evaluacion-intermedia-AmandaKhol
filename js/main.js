"use strict";

const updateElement = document.querySelector(".js-update");
const selectElement = document.querySelector(".js-select");
const faceElement = document.querySelector(".js-face");

function handleUpdateBtn() {
  const selectValue = selectElement.value;
  faceElement.innerHTML = selectValue;
  const randomNumber = Math.ceil(Math.random() * 100);
  if (randomNumber % 2 === 0) {
    containerElement.classList.add("background-color-alt");
  } else {
    containerElement.classList.remove("background-color-alt");
  }
}

updateElement.addEventListener("click", handleUpdateBtn);
