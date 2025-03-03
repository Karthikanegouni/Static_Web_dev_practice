const container = document.getElementById("colorPickerContainer");
let choice = document.getElementById("selectedColorHexCode");
function btn1(){
    const updatedColor = "#e0e0e0";
    container.style.backgroundColor=updatedColor;
    choice.textContent=updatedColor;
}

function btn2(){
    const updatedColor = "#6fcf97";
    container.style.backgroundColor=updatedColor;
    choice.textContent=updatedColor;
}
function btn3(){
        const updatedColor ="#56ccf2";
    container.style.backgroundColor=updatedColor;
    choice.textContent=updatedColor;
}
function btn4(){
    const updatedColor ="#bb6bd9";
    container.style.backgroundColor=updatedColor;
    choice.textContent=updatedColor;
}
