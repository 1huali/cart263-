/**
A wind chime
Wawa Li

Program incarnating a wind chime : initial state, disturbed state. Input disturbances, interval disturbance, voice responsive disturbance?
*/
window.onload = function (){

"use strict";

    //el is the getElementbyId thing visual
let chime1 = document.getElementById(`chime1`);
let chore = document.getElementById(`chime0`);

//only use Vector from p5 librairies
let wind = new p5.Vector(0,0);

//animation called thru html
window.requestAnimationFrame(animate)
//new properties adapted to diff events and contexts

function animate (){
    //applications of the properties adapted to diff events and contexts
 
    //a vertical vectorial movement
     let gravity = new p5.Vector(0, .009);
      
     c1.applyForce(wind);
     c1.applyForce(gravity);
     c1.update();
 
     window.requestAnimationFrame(animate)
     }
    }
