/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(zero,++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

let leng = my.length;

console.log(my.slice(-(--leng),-(--counter)).reverse()); // ["Elham", "Mazero"]

console.log(my[--counter].substring(zero,counter)+my[++zero].substring(++zero)); // "Elzero"

console.log(my[--zero][counter*counter] + my[++counter][--zero]); // "rO"
