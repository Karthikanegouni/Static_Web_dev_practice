let container = document.getElementById("playArea");



let randomSize = ()=>{
    let size = Math.ceil(Math.random() * 100) + 40;
    return size;
}

function clearPlayArea() {
    container.innerHTML = "";
  }
  

function addColor(color) {
  let dot = document.createElement("div");
  dot.classList.add("color-dot");
  dot.style.backgroundColor=color;
  let size = randomSize();
  dot.style.width=size+"px";
  dot.style.height=size+"px";


  let fontSize = size * 0.2; 
  dot.style.fontSize = fontSize + "px";
  
  dot.textContent="Happy Holi"
  if(color=="yellow"){
    dot.style.color="black";
  }
  container.appendChild(dot);

//   setTimeout(clearPlayArea,10000);
}

