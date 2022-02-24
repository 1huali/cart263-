/**
Haiku generator
Wawa Li

Haiku generator from html
*/

"use strict";

let fiveSyllableLines= [
  `0, to be a tree`,
  `the cat does not know`,
  `We are all forests`,
  `You have done your best`,
  `They are all gone now`
];

let sevenSyllableLines= [
  `Say the things left unsaid`,
  `Never believe the wind's lies`,
  `The autumn stretches its legs`,
  `Nothing can satisfy you`,
  `They will not come back again`
]

let printLine1 = document.getElementById('line-1');
let printLine2 = document.getElementById('line-2');
let printLine3 = document.getElementById('line-3');


let line1= random(fiveSyllableLines);
let line2= random(sevenSyllableLines);
let line3=random(fiveSyllableLines);

printLine1.innerText = line1;
printLine2.innerText = line2;
printLine3.innerText = line3;

function displayHaiku(){
}


function random(array){
  let index = Math.floor(Math.random() * array.length);
  return array [index];
}
