/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20]; // sum => 70
let n2 = [30, 20, 10]; // sum => 60

/*
n1.length => 3
n1.length => 4
n1.min => 10
n1.max => 30
n1[n2.length] => 20
[...n1, ...n2].length => 7
*/

console.log(Math.max(...n1)*[...n1, ...n2].length); // 210


