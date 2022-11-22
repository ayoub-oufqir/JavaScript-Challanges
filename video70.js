/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

//Anonymous Function
let names = function (...Frens) {
    return `String [${Frens.join("], [")}] => Done !`;
};
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim", "Said"));

// Arrow function:
let namess = (...Frens) => `String [${Frens.join("], [")}] => Done !`;


console.log(namess("Osama", "Mohamed", "Ali", "Ibrahim", "Said"));


//Challenge 2

//Arrow Function//
let myNaumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + two + +nums;
console.log(calc(10, myNaumbers[0], myNaumbers[1])); //80

//Regular Function//
let calcs = function (one, two, ...nums) {
    return one + two + +nums;
}
console.log(calcs(10, myNaumbers[0], myNaumbers[1])); //80