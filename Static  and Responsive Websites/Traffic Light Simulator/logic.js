const stoplight = document.getElementById("stopLight");
const readylight = document.getElementById("readyLight");
const golight = document.getElementById("goLight");
const stopbtn = document.getElementById("stopButton");
const readybtn = document.getElementById("readyButton");
const gobtn = document.getElementById("goButton");

function lightsOff() {
  const lightOff = "#4b5069";
  readylight.style.backgroundColor = lightOff;
  golight.style.backgroundColor = lightOff;
  stoplight.style.backgroundColor = lightOff;
}

function btnReset() {
  const btnColor = "#1f1d41";
  stopbtn.style.backgroundColor = btnColor;
  readybtn.style.backgroundColor = btnColor;
  gobtn.style.backgroundColor = btnColor;
}

function stop() {
  const lightOn = "#cf1124";
  lightsOff();
  btnReset();
  stoplight.style.backgroundColor = lightOn;
  stopbtn.style.backgroundColor = lightOn;
}

function ready() {
  const lightOn = "#f7c948";
  btnReset();
  lightsOff();
  readylight.style.backgroundColor = lightOn;
  readybtn.style.backgroundColor = lightOn;
}
function go() {
  const lightOn = "#199473";
  btnReset();
  lightsOff();
  golight.style.backgroundColor = lightOn;
  gobtn.style.backgroundColor = lightOn;
}
