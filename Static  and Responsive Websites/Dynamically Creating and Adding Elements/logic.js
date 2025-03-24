//creating The Container
let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);

//Add Grocery List Heading
let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Grocery List";
bgContainerEl.appendChild(headingEl);

// Create a Unorder list
let groceryList = document.createElement("ul");
groceryList.classList.add("list-container");
bgContainerEl.appendChild(groceryList);

//adding Items to the list using for of Loop
let groceryItems = ["milk", "Peanut Butter", "Choco Chips", "Tomato Sauce"];

for (let items of groceryItems) {
  let listItem = document.createElement("li");
  listItem.textContent = items;
  groceryList.appendChild(listItem);
}

//Adding the check Box and Label for it
let checkBoxEl = document.createElement("input");
checkBoxEl.type = "checkbox";
checkBoxEl.id = "deliveryMode";
bgContainerEl.appendChild(checkBoxEl);

//Adding Label Element
let labelEl = document.createElement("label");
labelEl.setAttribute("for", "deliveryMode");
labelEl.classList.add("delivery-text");
labelEl.textContent = "Need Home Delivery";
bgContainerEl.appendChild(labelEl);

bgContainerEl.appendChild(document.createElement("br"));
//Adding Button
let ButtonEle = document.createElement("button");
ButtonEle.classList.add("btn", "btn-primary");
ButtonEle.textContent = "Proceed to Pay";
bgContainerEl.appendChild(ButtonEle);
