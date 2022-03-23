/**
A wind chime
Wawa Li

Program incarnating a wind chime : initial state, disturbed state. Input disturbances, interval disturbance, voice responsive disturbance?
*/
window.onload = function (){

"use strict";

    //el is the getElementbyId thing visual
let chime1 = new Chimes (document.getElementById(`chime1`),200,200);
// let core = new Core(document.getElementById(`chime0`),300,100);

//only use Vector from p5 librairies
let wind = new p5.Vector(0,0);
let windButton;

//animation called thru html
window.requestAnimationFrame(animate)
//new properties adapted to diff events and contexts

windButton = document.getElementById(`triggerButton`)

window.addEventListener("click", function(){
    
    wind = new p5.Vector(0.05,0);

    chime1.vel = new p5.Vector(0,0);
    chime1.pos  = new p5.Vector(200,200);

    core.vel = new p5.Vector(0,0);
    core.pos  = new p5.Vector(200,200);
   

    })

function animate (){
    //applications of the properties adapted to diff events and contexts
 
    //a vertical vectorial movement
     let gravity = new p5.Vector(0, .009);
      
    //  chime1.applyForce(wind);
     chime1.applyForce(gravity);
     chime1.update();
     chime1.checkEdges();
 
     window.requestAnimationFrame(animate)
     }
    }
