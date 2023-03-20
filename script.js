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

//Add commas per each 3 characters

// const input = document.querySelector("#inputBar");

// input.addEventListener("input", (event) => {
//   const currentVal = input.value;
//   if (currentVal.length > 3) {
//     const newVal = currentVal.toLocaleString("en-US");
//     input.value = newVal;
//     console.log(newVal);
//   }
// });

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

const buttonPercent = document.querySelector("#buttonPercent");
//Note to self: Works initially for ints, but doesn't cut off like how app does
let count = 2;
buttonPercent.addEventListener("click", (event) => {
  const inputBar = document.getElementById("inputBar");
  const currentVal = Number(inputBar.value);
  const percentVal = currentVal / 100;
  inputBar.value = percentVal.toFixed(count);
  count = count < 10 ? count + 2 : (count = 0);
});

//Add decimal
const buttonDecimal = document.querySelector("#button__Decimal");

buttonDecimal.addEventListener("click", (event) => {
  const inputBar = document.getElementById("inputBar");
  const newVal = inputBar.value + ".";
  inputBar.value = newVal;
});

//Variables for operations
let operations = null;
let currentVal = 0;

//Use division

const buttonDivide = document.querySelector("#button__Divide");

buttonDivide.addEventListener("click", (event) => {
  operations = "divide";
  currentVal = Number(inputBar.value);
  inputBar.value = "";
});

//Use multiplication
const buttonMultiply = document.querySelector("#button__Multiply");

buttonMultiply.addEventListener("click", (event) => {
  operations = "multiply";
  currentVal = Number(inputBar.value);
  inputBar.value = "";
});

//Use substraction
const buttonSubstract = document.querySelector("#button__Subtract");

buttonSubstract.addEventListener("click", (event) => {
  operations = "subtract";
  currentVal = Number(inputBar.value);
  inputBar.value = "";
});

//Use addition
const buttonAddition = document.querySelector("#button__Addition");

buttonAddition.addEventListener("click", (event) => {
  operations = "addition";
  currentVal = Number(inputBar.value);
  inputBar.value = "";
});

//Do calcs with equal
const buttonCalculate = document.querySelector("#button__Calculate");

buttonCalculate.addEventListener("click", (event) => {
  const newVal = Number(inputBar.value);
  let calc = 0;
  if (operations == "divide" && newVal !== 0) {
    calc = currentVal / newVal;
  } else if (operations == "divide" && newVal == 0) {
    calc = "Error";
  } else if (operations == "multiply") {
    calc = currentVal * newVal;
  } else if (operations == "subtract") {
    calc = currentVal - newVal;
  } else if (operations == "addition") {
    calc = currentVal + newVal;
  }
  inputBar.value = calc.toLocaleString();
});
