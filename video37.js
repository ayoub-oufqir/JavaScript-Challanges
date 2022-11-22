/*
  If Condition Challenge
*/
// Q1

let a = '';


a < 10 ? console.log(10) : a >= 10 && a <=40 ? console.log ("10 to 40") : a>40 ? console.log('> 40') : console.log("unknowen");

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

// Q2
if (st.repeat(2).length.toString() === "34"){
    console.log("Good");
}

// W Position May Change
// Q3
if (st[st.indexOf('W')].toLowerCase() === "w"){
    console.log("Good");
}

// Q3
if (st !== "string"){
    console.log("Good");
}

// Q4
if ((typeof st.length) === "number"){
    console.log("Good");
}

// Q5
if ( st.substring(-10,6).repeat(2) === "ElzeroElzero"){
    console.log("Good");
}