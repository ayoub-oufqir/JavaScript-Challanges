/*
=================> Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

//result of line 1: 11+20+80-11  ==> 101
console.log( ++a + +b++ + +c++ - +a++ );
//result of line 2: 11-20+80+11+12 ==> 94
console.log(++a + -b + +c++ - -a++ + +a);
//result of line 3: 79 + 20  + 9  * 20 - 21*9 + 8 - 1 ==> 97
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
=================> Challenge 2
*/

let d="-100";
let e="20";
let f=30;
let g=true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e);   // 2000
console.log(-d + ++g * ++e + ++f);   // 173