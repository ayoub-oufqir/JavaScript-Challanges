/*
  Destructuring
  - Challenge
*/

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];


let {title, age, available, skills: [, skill]} = myFriends[chosen-1] ;


console.log(title)
console.log(age)
console.log( available ? "availibale" : "not availiable")
console.log(skill)

