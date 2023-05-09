//Selector
//Create button variable
const todoBtn = document.getElementById("todo__btn");
//Create undone variable
const undoneList = document.querySelector(".todo__undone ul");
//Create done variable
const doneList = document.querySelector(".todo__done ul");
//Create deleted list variable
const deletedList = document.querySelector(".todo__deleted ul");
//Create todo text variable
const todoInput = document.getElementById("todo__input");

//Function
function addTask() {
  console.log("Creating new item...");

  //Create li for the item
  const listItem = document.createElement("li");
  //Create checkbox
  const checkBox = document.createElement("input");
  //Create label for text item
  const label = document.createElement("label");
  //Create input text for label
  const input= document.createElement("input");

  //add properties to input
  input.type = "text";
  //add class to input
  input.className = "input"
  //add text to input of label
  input.value = todoInput.value;
  //add properties to checkbox
  checkBox.type = "checkbox";

  //add item to li of list
  label.appendChild(input);
  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  //empty the input
  todoInput.value = "";

  //add li to list
  undoneList.appendChild(listItem);

  console.log("Created '" + input.value + "'");
  bindUndoneItems(listItem, doneItem);
}

//bind elements to undone list
const bindUndoneItems = function(listItem, click) {
  console.log("Adding to undone list...");

  //Create checkbox variable
  const checkBox = listItem.querySelector("input[type=checkbox]");

  //Checkbox click event listener
  checkBox.onchange = click;

  const input = listItem.querySelector("input[type=text]");
  console.log("Added '" + input.value + "' to UNDONE list");
}

//Move item to done list
const doneItem = function() {
  console.log("Moving item...");

  //Grab the parent element of the button
  const listItem = this.parentNode;

  //Create btnDone
  const btnDone = document.createElement("button");

  //Select checkbox, input and label from undone list
  const checkBox = listItem.querySelector("input[type=checkbox]");
  const input = listItem.querySelector("input[type=text]");
  const label = listItem.querySelector("label");

  //Move text from input to btnDone
  btnDone.innerText = input.value;
  btnDone.className = "button";
  btnDone.id = "btnDelete";
  listItem.appendChild(btnDone);

  //Remove from undone list
  checkBox.remove();
  label.remove();
  input.remove();

  //Place it inside the completed list
  doneList.appendChild(listItem);

  //add ham binddelteitem
  bindDeleteItems(listItem, deleteTask);

  console.log("Moved '" + listItem.innerText + "' to DONE list");

}


//bind elements to deleted list
const bindDeleteItems = function(listItem, click) {
  console.log("Moving to deleted list...");

  //Create button variable
  const btnDelete = listItem.querySelector("button");

  //Button click event listener
  btnDelete.onclick = click;

  //Button click event listener
  // btnDelete.addEventListener("click", deleteTask(listItem));

  // const input = listItem.querySelector("input[type=text]");
  // console.log("Added '" + input.value + "' to DELETED list");
}

//Move delete item from done list to deleted list
var deleteTask = function(){
  console.log("Deleting...");

  //Grab the parent element of the button
  const listItem = this.parentNode;

  //Create label
  const label = document.createElement("label");

  //Select Button from Done list
  const btnDone = listItem.querySelector("button");

  //Move text from btnDone to label of deleted list
  label.innerText = btnDone.innerText;
  listItem.appendChild(label);

  //Remove button from Done list
  btnDone.remove();

  //Place it inside the completed list
  deletedList.appendChild(listItem);

  console.log("Moved '" + listItem.innerText + "' to DELETED list");
};


//Event Listener
todoBtn.addEventListener("click", addTask);