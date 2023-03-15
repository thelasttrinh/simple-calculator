//Numpad globals
const button0 = document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");

//Button 0-9

button0.addEventListener("click", (event) => {
  document.getElementById("inputBar").value += 0;
});

button1.addEventListener("click", (event) => {
  const inputBar = document.getElementById("inputBar");
  const currentNumber = inputBar.value;
  const newValue = currentNumber + "1";
  inputBar.value = newValue;
});

button2.addEventListener("click", (event) => {
  const inputBar = document.getElementById("inputBar");
  const currentNumber = inputBar.value;
  const newValue = currentNumber + "2";
  inputBar.value = newValue;
});

button3.addEventListener("click", (event) => {
  const inputBar = document.getElementById("inputBar");
  const currentNumber = inputBar.value;
  const newValue = currentNumber + "3";
  inputBar.value = newValue;
});

button4.addEventListener("click", (event) => {
  const inputBar = document.getElementById("inputBar");
  const currentNumber = inputBar.value;
  const newValue = currentNumber + "4";
  inputBar.value = newValue;
});

button5.addEventListener("click", (event) => {
  const inputBar = document.getElementById("inputBar");
  const currentNumber = inputBar.value;
  const newValue = currentNumber + "5";
  inputBar.value = newValue;
});

button6.addEventListener("click", (event) => {
  const inputBar = document.getElementById("inputBar");
  const currentNumber = inputBar.value;
  const newValue = currentNumber + "6";
  inputBar.value = newValue;
});

button7.addEventListener("click", (event) => {
  const inputBar = document.getElementById("inputBar");
  const currentNumber = inputBar.value;
  const newValue = currentNumber + "7";
  inputBar.value = newValue;
});

button8.addEventListener("click", (event) => {
  const inputBar = document.getElementById("inputBar");
  const currentNumber = inputBar.value;
  const newValue = currentNumber + "8";
  inputBar.value = newValue;
});

button9.addEventListener("click", (event) => {
  const inputBar = document.getElementById("inputBar");
  const currentNumber = inputBar.value;
  const newValue = currentNumber + "9";
  inputBar.value = newValue;
});

//Clear
const clearButton = document.getElementById("buttonClear");

clearButton.addEventListener("click", (event) => {
  const inputBar = document.getElementById("inputBar");
  const empty = "";
  inputBar.value = empty;
});

//Switch positive to negative, vice versa

const positiveNegative = document.getElementById("buttonPlusMinus");

positiveNegative.addEventListener("click", (event) => {
  const inputBar = document.getElementById("inputBar");
  const value = Number(inputBar.value);
  const negativeValue = -value;
  inputBar.value = negativeValue;
});

//Convert to percent

const buttonPercent = document.getElementById("buttonPercent");
//Note to self: Works initially for ints, but doesn't cut off like how app does

buttonPercent.addEventListener("click", (event) => {
  const inputBar = document.getElementById("inputBar");
  const currentVal = Number(inputBar.value);
  const percentVal = parseFloat(currentVal / 100);
  inputBar.value = percentVal;
});
