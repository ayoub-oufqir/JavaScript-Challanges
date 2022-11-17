/*

===========================================
== Variables And Concatenation Challenge ==
===========================================

[1] Create 3 Variables [Title, Desctiption, Date]
-- All In One Statement
-- Variable Name Must Be Two Words
-- Title Content Is "Elzero"
-- Description Content Is "Elzero Web School"
-- Date Content Is "25/10"
[2] Create Variable Contains Div And This Div Contains
-- H3 For Title
-- P For Paragraph
-- Span For Time
[3] Add This Card To Page 4 Times
[4] Use Template Literals For Concatenate

Extra
- Use ES6 Repeat

*/

let Title = "Elzero", Description ="Elzero web school", Date2 = "25\\10";

let card = `
<div style="background-color: lightblue;">
    <h3>Hello ${Title}</h3>
    <p>${Description}</p>
    <span>${Date2}</span>
</div>
`;

document.write(card.repeat(4));