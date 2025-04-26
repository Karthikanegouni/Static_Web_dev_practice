let greetings = {
    ugadi: `Wishing you joy, prosperity, and new beginnings this Ugadi! May this year bring happiness, success, and good health. 🎉`,
    ramadan: `May this holy month bring you peace, happiness, and countless blessings. Stay blessed with love, health, and prosperity! 🌙✨`
};

let greetingForm = document.getElementById("greetingForm");
let userName = document.getElementById("name");
let selectedFestival = document.getElementById("festival");
let userCustomMsg = document.getElementById("customMessage");

let greetingCard = document.getElementById("greeting-card");
let cardTitle = document.getElementById("card-title");
let cardMessage = document.getElementById("card-message");
let customMessage = document.getElementById("custom-message");

let history = document.getElementById("history");
let historyList = document.getElementById("history-list");

let userInputs = {
    name: "",
    festival: "",
    customMessage: ""
};

userName.addEventListener('change', function(event) {
    userInputs.name = event.target.value;
});
selectedFestival.addEventListener("change", function(event) {
    userInputs.festival = event.target.value;
});
userCustomMsg.addEventListener("change", function(event) {
    userInputs.customMessage = event.target.value;
});

let HistoryObj = [];
let lastCard = null;

function saveGreeting(card) {
    if (card) {
        HistoryObj.push(card);
    }
    if (HistoryObj.length > 3) {
        HistoryObj = HistoryObj.slice(-3);
    }
    localStorage.setItem("cardHistory", JSON.stringify(HistoryObj));
    updateHistory();
}

function updateHistory() {
    historyList.innerHTML = "";
    let HistArr = JSON.parse(localStorage.getItem("cardHistory")) || [];
    
    if (HistArr.length > 3) {
        HistArr = HistArr.slice(-3);
        localStorage.setItem("cardHistory", JSON.stringify(HistArr));
    }

    for (let item of HistArr) {
        let text = item.join(" - ");
        let Histitem = document.createElement("li");
        Histitem.textContent = text;
        historyList.appendChild(Histitem);
    }
    if(HistArr===null||HistArr.length===0){
        history.style.display="none";
    }
    else{
        history.style.display="block";
    }
}

greetingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (lastCard) {
        saveGreeting(lastCard);
    }

    cardTitle.textContent = "Happy " + userInputs.festival + ", " + userInputs.name + "!";
    if (userInputs.festival === "ugadi") {
        greetingCard.classList.remove("ramadan-card");
        cardMessage.textContent = greetings.ugadi;
        greetingCard.classList.add("ugadi-card");
    } else if (userInputs.festival === "ramadan") {
        greetingCard.classList.remove("ugadi-card");
        cardMessage.textContent = greetings.ramadan;
        greetingCard.classList.add("ramadan-card");
    }

    customMessage.textContent = userInputs.customMessage;
    greetingCard.style.display = "block";

    lastCard = [
        cardTitle.textContent,
        cardMessage.textContent,
        customMessage.textContent
    ];
});

updateHistory();

document.getElementById("download-btn").addEventListener("click", function (event) {
    event.preventDefault();

    let card = document.getElementById("greeting-card");

    if (card.style.display === "none") {
        alert("Please generate a greeting card before downloading.");
        return;
    }

    // Temporarily set a fixed size to avoid capturing unwanted space
    card.style.width = "600px"; // Adjust this as needed
    card.style.height = "auto";
    card.style.padding = "25px"; // Ensures content fits well

    setTimeout(() => {
        domtoimage.toPng(card, {
            quality: 1,
            bgcolor: "white",  // Ensures no transparent pixels
            width: card.offsetWidth, 
            height: card.offsetHeight,
            style: {
                transform: "scale(0.8)", // Avoids weird scaling issues
                margin: "0", // Removes unnecessary spaces
                padding: "10px"
            }
        })
        .then(function (dataUrl) {
            let link = document.createElement("a");
            link.href = dataUrl;
            link.download = "greeting_card.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error("Error capturing image:", error));
    }, 1000);
});
