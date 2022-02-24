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

//activates and associates the clicks to an event
printLine1.addEventListener('click', lineClicked);
 printLine2.addEventListener('click', lineClicked);
printLine3.addEventListener('click', lineClicked);

// function that generates a random line in five or seven lines depending on the verse
function setNewLine(element){
  if (element === printLine1 || element === printLine3){
    element.innerText = random(fiveSyllableLines);
  }
  else if(element === printLine2){
    element.innerText = random(sevenSyllableLines);
  }
}

//line is set when user clicks on the line
function lineClicked(event){
// setNewLine(event.target);
fadeOut(event.target, 1);
}

//adds fade-in and fade-out transition effect
//i dont understand what happened here
function fadeOut(element,opacity){
    opacity -= 0.01;
    element.style[`opacity`] = opacity;
    if (opacity > 0){
       requestAnimationFrame (function (){
          fadeOut(element, opacity);
          });
  }
}


    element.target.style[`opacity`] = opacity;
    if (opacity > 0){
       requestAnimationFrame (function (){
          fadeOut(element, opacity);
          });

  }
}

function random(array){
  let index = Math.floor(Math.random() * array.length);
  return array [index];
}
