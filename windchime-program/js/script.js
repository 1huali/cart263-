/***
 * A wind chime study
Wawa Li


Program incarnating a wind chime : initial state, disturbed state. Input disturbances, interval disturbance, voice responsive disturbance?
Eventually think of an impact consequence (visual noise? audio sound?)

*/
window.onload = function (){

"use strict";

    //el is the getElementbyId thing visual
    let stringchime0 = document.getElementById(`string0`);
    let stringchime1 = document.getElementById(`string1`);

let chime1 = new Chimes (stringchime1, document.getElementById(`chime1`),500,200);
let chime0 = new Core (stringchime0, document.getElementById(`chime0`), window.outerWidth/2,400);


let startDrag= false;
let mx =0;
let my =0;
let userWind =0;

//only use Vector from p5 librairies
let wind = new p5.Vector(0,0);
let repelWindForce = 0.01;
let windButton;


// window.addEventListener("mousemove", function(event){
//     // console.log("move");
//      mx = event.clientX;
//      my = event.clientY;

//      userWind = (mx,my)
//  })



window.requestAnimationFrame(animate)
//new properties adapted to diff events and contexts.
//eventually : implement different events

window.addEventListener("mousedown", function(event){
//click implementing wind. still flimsy needs raffinment.

     mx = event.clientX;

if (mx > window.innerWidth/2){
    wind = new p5.Vector(-0.2,0);
this.setTimeout(function(){
startDrag = true;
},2000);
} else if (mx < window.innerWidth/2){
    wind = new p5.Vector(0.2,0);
this.setTimeout(function(){
startDrag = true;
},2000);
};

    });


// window.addEventListener("mouseup", function(){
// //Q: why is it attracted to left side?


chime1.drag(repelWindForce);
console.log(repelWindForce);
// // chime0.drag(repelWindForce);


// });



function animate (){
//applications of the properties adapted to diff events and contexts
//eventually : implement different type of forces


    //a vertical vectorial movement
     let gravity = new p5.Vector(0, 0.009);

     chime1.applyForce(wind);
     chime1.applyForce(gravity);
     chime1.update(true);
     chime1.checkEdges();
     if (startDrag===true){
         chime1.drag(repelWindForce)
        }

    //  chime1.userMotionTrigger(userWind);

    chime0.update();
    chime0.show();
    // chime0.drag(repelWindForce)


     window.requestAnimationFrame(animate)
    }


    }
