let todoItemsContainer = document.getElementById("todoItemsContainer"); // Get the container for todo items.
let todoList = [ // Define the initial list of todo items.
  {
    text: "Sample Item", 
    uniqueId:1
  },
];

let todoCount = todoList.length; 



function onTodoChanged(checkBoxId,labelId){
    let checkbox= document.getElementById(checkBoxId);
    let label = document.getElementById(labelId);
    // if(checkbox.checked){
    //   label.classList.add("checked");
    // }
    // else{
    //   label.classList.remove("checked");
    // }
    label.classList.toggle("checked");
}

function deleteitem(todoItemId){
  let todoitem = document.getElementById(todoItemId);
  todoItemsContainer.removeChild(todoitem);

}

function createAndAppendTodo(todo) { 
  let checkBoxId = "checkbox"+todo.uniqueId;
  let labelId = "label"+todo.uniqueId;
  let todoId="Item"+todo.uniqueId;

  let todoElement = document.createElement("li"); // Create a list item for the todo.
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row"); // Add styling classes.
  todoElement.id=todoId;
  todoItemsContainer.appendChild(todoElement); // Add the list item to the container.

  let inputElement = document.createElement("input"); // Create a checkbox input.
  inputElement.type = "checkbox"; // Set the input type.
  inputElement.id = checkBoxId; // Set the input ID.
  inputElement.classList.add("checkbox-input"); // Add styling classes.
  todoElement.appendChild(inputElement); // Add the checkbox to the list item.

  inputElement.onclick = function(){
    onTodoChanged(checkBoxId,labelId);
  };


  let labelContainer = document.createElement("div"); // Create a container for the label and delete icon.
  labelContainer.classList.add("label-container", "d-flex", "flex-row"); // Add styling classes.
  todoElement.appendChild(labelContainer); // Add the container to the list item.

  let labelElement = document.createElement("label"); // Create a label for the todo text.
  labelElement.id=labelId;
  labelElement.setAttribute("for", checkBoxId); // Associate the label with the checkbox.
  labelElement.classList.add("checkbox-label"); // Add styling classes.
  labelElement.textContent = todo.text; // Set the label text.
  labelContainer.appendChild(labelElement); // Add the label to the container.

  let deleteIconContainer = document.createElement("div"); // Create a container for the delete icon.
  deleteIconContainer.classList.add("delete-icon-container"); // Add styling classes.
  labelContainer.appendChild(deleteIconContainer); // Add the container to the label container.

  let deleteIcon = document.createElement("i"); // Create the delete icon.
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon"); // Add styling and icon classes.
  deleteIconContainer.appendChild(deleteIcon); // Add the icon to the container.

  deleteIcon.onclick = function(){
    deleteitem(todoId);
  }
}


for (let todo of todoList) { // Loop through the todo list.
  createAndAppendTodo(todo); // Create and add each todo item.
}


function onAddTodo(){
  let userInput = document.getElementById("todoUserInput");
  let userInputValue = userInput.value.trim();
  if(! userInputValue==""){

  todoCount=todoCount+1;
  let newTodo = {
     text: userInputValue,
     uniqueId: todoCount
  }
  createAndAppendTodo(newTodo);
  userInput.value="";
}
else{
  alert("Enter something to save");
}


}


let addTodoButton = document.getElementById("addTodoButton");
 addTodoButton.onclick = function(){
  onAddTodo();
 }


 let date = document.getElementById("dateInput");
 date.onchange=function(){
  console.log(date.value);
 }