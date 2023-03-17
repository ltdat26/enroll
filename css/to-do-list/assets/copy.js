//Selector
//Create button variable
const todoBtn = document.getElementById("todo__btn");
//Create undone variable
const undoneList = document.querySelector(".todo__undone ul");
//Create done variable
const doneList = document.querySelector(".todo__done ul");
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

  console.log("Created '" + listItem.innerText + "'");
  bindUndoneItems(listItem, doneItem);
}

//bind elements to undone list
const bindUndoneItems = function(listItem, click) {
  console.log("Adding to undone list...");

  //Create checkbox variable
  const checkBox = listItem.querySelector("input[type=checkbox]");

  //Checkbox click event listener
  checkBox.onchange = click;

  console.log("Added '" + listItem.innerText + "' to UNDONE list");
}

//Move item to done list
const doneItem = function() {
  console.log("Moving item...");

  //Grab the parent element of the button
  const listItem = this.parentNode;

  //Move text from input to label
  const input = listItem.querySelector("input[type=text]");
  const label = listItem.querySelector("label");
  label.innerText = input.value;
  //Remove input from list item
  input.remove();

  //Select the checkbox from the completed checkbox and remove it
  const checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();

  //Place it inside the completed list
  doneList.appendChild(listItem);

  console.log("Moved '" + listItem.innerText + "' to DONE list");

}

//Delete item function
const deleteItem = function() {
  console.log("Deleting task...");
  //Grab the parent element of the button
  const listItem = this.parentNode;
  //Grab the parent element of the list item
  const list = listItem.parentNode;
  //Remove the list item from the list
  list.removeChild(listItem);
}


//Event Listener
todoBtn.addEventListener("click", addTask);