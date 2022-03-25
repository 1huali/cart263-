/**
A wind chime
Wawa Li

Program incarnating a wind chime : initial state, disturbed state. Input disturbances, interval disturbance, voice responsive disturbance?
*/
window.onload = function (){

"use strict";

    //el is the getElementbyId thing visual
    let stringchime0 = document.getElementById(`string0`);
let chime1 = new Chimes (document.getElementById(`chime1`),500,200);

let chime0 = new Core (stringchime0, document.getElementById(`chime0`),700,200);
// let core = new Core(document.getElementById(`chime0`),300,100);



let mx =0;
let my =0;
let userWind =0;

//only use Vector from p5 librairies
let wind = new p5.Vector(0,0);
let repelWindForce = 1;
let windButton;


// window.addEventListener("mousemove", function(event){
//     // console.log("move");
//      mx = event.clientX;
//      my = event.clientY;

//      userWind = (mx,my)
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
//why is it attracted to left side?


chime1.drag(repelWindForce);



});

// window.addEventListener("mouseover", function(){

// }


function animate (){
    //applications of the properties adapted to diff events and contexts




    //a vertical vectorial movement
     let gravity = new p5.Vector(0, .009);
      
    //  chime1.applyForce(wind);
    //  chime1.applyForce(gravity);
     chime1.update(true);
     chime1.checkEdges();
    //  chime1.userMotionTrigger(userWind);
     chime1.update(false);

 chime0.pendulum();

     window.requestAnimationFrame(animate)
     }



    }
