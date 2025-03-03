const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function cleardisplay() {
  alert("Clear button clicked!");
  display.value = "";
}

function cal() {
  try {
    display.value = eval(display.value);
  } catch (Error) {
    display.value = "Error";
  }
}
