/**
A wind chime
Wawa Li

Program incarnating a wind chime : initial state, disturbed state. Input disturbances, interval disturbance, voice responsive disturbance?
*/
window.onload = function (){

"use strict";

    //el is the getElementbyId thing visual
let chime1 = new Chimes (document.getElementById(`chime1`),500,200);
let core = new Core(document.getElementById(`chime0`),300,100);

let mx =0;
let my =0;

//only use Vector from p5 librairies
let wind = new p5.Vector(0,0);
// let repelWindForce
let dragC = 1;
let windButton;

// window.addEventListener("mousemove", function(event){
//     // console.log("move");
//      mx = event.clientX;
//      my = event.clientY;

//  })



//animation called thru html
window.requestAnimationFrame(animate)
//new properties adapted to diff events and contexts

window.addEventListener("mouseup", function(){
//click implementing wind


    
    wind = new p5.Vector(-0.05,0);
    console.log("test down");




    });


window.addEventListener("mousedown", function(){

chime1.drag(dragC);

});

function animate (){
    //applications of the properties adapted to diff events and contexts




    //a vertical vectorial movement
     let gravity = new p5.Vector(0, .009);
      
     chime1.applyForce(wind);
     chime1.applyForce(gravity);
    //  chime1.drag();
     chime1.update();
     chime1.checkEdges();
 
     window.requestAnimationFrame(animate)
     }



    }
