/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(...userData){
    let name, age, statement;
    for(let i=0; i<userData.length; i++){
        typeof userData[i] === 'string'
        ? name = userData[i]
        : typeof userData[i] === 'boolean' && userData[i] === true
        ? statement = ''
        : typeof userData[i] === 'boolean' && userData[i] === false
        ? statement = 'Not'
        : typeof userData[i] === 'number'
        ? age = userData[i]
        : console.log("Unknown");
    }
    document.write(`Hello ${name}, Your Age Is ${age}, You Are ${statement} Available For Hire<br> <br>`);
}

showDetails("nour", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(27, "lmao", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 52, "saad"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "yooo", 12); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
