/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let numberOfAdmins = 0;
document.write(`<div>We Have X Admins</div>`);
if (myAdmins.includes("Stop")){
  numberOfAdmins = myAdmins.indexOf("Stop");
  document.write(`<div>We Have ${numberOfAdmins} Admins</div>`);
}
let i = 0;
let empCounter=1;
for (; i < myAdmins.length; i++){

  if (myAdmins[i] === "Stop"){
    break
  }

  document.write(`<div>`);
  document.write(`<hr>`);
  document.write(`<div>the admin for Team ${i+1} is ${myAdmins[i]}</div>`);
  document.write(`<h3> Team members:</h3>`);
  
  for (let j = 0; j < myEmployees.length; j++){
    if(myAdmins[i][0] === myEmployees[j][0]){
      document.write(`<div>= ${empCounter} ${myEmployees[j]} </div>`);
      empCounter++;
    }
  }

  empCounter =1;
  document.write(`</div>`);
  
}

