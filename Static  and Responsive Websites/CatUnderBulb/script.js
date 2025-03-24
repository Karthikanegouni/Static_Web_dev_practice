function switchOff() {
  document.getElementById("bulbImage").src = "https://shorturl.at/tBmMW";
  document.getElementById("catImage").src = "https://tinyurl.com/nn48ak5y";

  document.getElementById("onSwitch").style.backgroundColor = "#22c55e";
  document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";

  const status = document.getElementById("switchStatus");
  status.textContent = "Switched Off";
  status.style.color = "#e12d39";

  const switchboard = document.getElementById("switchBoard");
  switchboard.style.background = "linear-gradient(black,grey)";
}

function switchOn() {
  document.getElementById("bulbImage").src = "https://shorturl.at/nGqFW";
  document.getElementById("catImage").src = "https://shorturl.at/zyZqd";

  document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
  document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";

  const status = document.getElementById("switchStatus");
  status.textContent = "Switched On";
  status.style.color = "#22c55e";

  const switchboard = document.getElementById("switchBoard");
  switchboard.style.background = "linear-gradient(grey,black)";
}
