const stoplight = document.getElementById("stopLight");
const readylight = document.getElementById("readyLight");
const golight = document.getElementById("goLight");
const lightOff= "#4b5069";
const btnColor = "#1f1d41";
const stopbtn = document.getElementById("stopButton");
const readybtn = document.getElementById("readyButton");
const gobtn = document.getElementById("goButton");

function stop(){
    const lightOn = "#cf1124";
    stoplight.style.backgroundColor=lightOn;
    readylight.style.backgroundColor=lightOff;
    golight.style.backgroundColor=lightOff;
    stopbtn.style.backgroundColor=lightOn;
    readybtn.style.backgroundColor=btnColor;
    gobtn.style.backgroundColor=btnColor;
}
function ready(){
    const lightOn = "#f7c948";
    stoplight.style.backgroundColor=lightOff;
    readylight.style.backgroundColor=lightOn;
    golight.style.backgroundColor=lightOff;
    stopbtn.style.backgroundColor=btnColor;
    readybtn.style.backgroundColor=lightOn;
    gobtn.style.backgroundColor=btnColor;
}
function go(){
    const lightOn = "#199473";
    stoplight.style.backgroundColor=lightOff;
    readylight.style.backgroundColor=lightOff;
    golight.style.backgroundColor=lightOn;
    stopbtn.style.backgroundColor=btnColor;
    readybtn.style.backgroundColor=btnColor;
    gobtn.style.backgroundColor=lightOn;
}