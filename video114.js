/*
 ==> add taks when add task button is clicked
 ==> save task in local storage
 ==> append task to tasks div
 ==> delete task from local storage when delete button is clicked
 ==> delete task from tasks div

Functions needed
 - create task element
 - save task in local storage
 - append task to tasks div

*/


// select elements that we need:

let inputField = document.querySelector(".input");
let addButton = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

function createTask(text){
    let taskDiv = document.createElement("div");
    let deleteButton = document.createElement("button");
    let Mytxt = document.createTextNode(text);
    let del = document.createTextNode("delete");
    taskDiv.appendChild(Mytxt);
    deleteButton.appendChild(del);
    taskDiv.appendChild(deleteButton);
    return taskDiv;
}
console.log(createTask("LMAO"));
// window.onload = function() {
    
//     tasksDiv.appendChild(myTask);
// }

console.log(inputField.value);