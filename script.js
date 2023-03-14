//Numpad
const button1 = document.getElementById("button1");

button1.addEventListener("click", function (event) {
  const inputBar = document.getElementById("inputBar");
  const currentNumber = inputBar.value;
  const newValue = currentNumber + "1";
  inputBar.value = newValue;
});
