/***  
 * A wind chime study
Wawa Li


Program incarnating a wind chime : initial state, disturbed state. Input disturbances, interval disturbance, voice responsive disturbance?
Eventually think of an impact consequence (visual noise? audio sound?)

*/
window.onload = function (){

"use strict";

// let clicks=0;

let stringChimeArray=[];
let chimesArray=[];

    //el is the getElementbyId thing visual
    let stringchime0 = document.getElementById(`string0`);
    //howdo I change the lenght of core lenght?
    let stringchime1 = document.getElementById(`string1`);
    let stringchime2 = document.getElementById(`string2`)
    let stringchime3 = document.getElementById(`string3`)
    let stringchime4 = document.getElementById(`string4`)

    //maybe dont need this
    stringChimeArray.push(stringchime0);
    stringChimeArray.push(stringchime1);
    stringChimeArray.push(stringchime2);
    stringChimeArray.push(stringchime3);
    console.log(stringChimeArray);


let chime1 = new Chimes (stringchime1, document.getElementById(`chime1`),window.outerWidth/2-400,400);
let chime0 = new Chimes (stringchime0, document.getElementById(`chime0`), window.outerWidth/2,200);
let chime2 = new Chimes (stringchime2, document.getElementById(`chime2`), window.outerWidth/2+200,250);
let chime3 = new Chimes (stringchime3, document.getElementById(`chime3`), window.outerWidth/2-200,250);
let chime4 = new Chimes (stringchime4, document.getElementById(`chime4`), window.outerWidth/2+400,400);

chimesArray.push(chime0);
chimesArray.push(chime1);
chimesArray.push(chime2);
chimesArray.push(chime3);
console.log(chimesArray);

let startDrag= false;
let mx =0;
let my =0;
let userWind =0;

//only use Vector from p5 librairies
let wind = new p5.Vector(0,0);
let repelWindForce = 0.01;
let windButton;


window.requestAnimationFrame(animate)
//new properties adapted to diff events and contexts. 
//eventually : implement different events

window.addEventListener("mousedown", function(event){
//click implementing wind. still flimsy needs raffinment.

     mx = event.clientX;
if (mx > window.innerWidth/2){
    wind = new p5.Vector(-0.2,0);
    console.log(wind)
this.setTimeout(function(){
startDrag = true;
},2000);
} else if (mx < window.innerWidth/2){
    wind = new p5.Vector(0.2,0);
this.setTimeout(function(){
startDrag = true;
},2000);
};

// need to change relative to the position of the windchime
// if (mx > chimes0.pos.x){
//     wind = new p5.Vector(-0.2,0);
//     console.log(wind)
// this.setTimeout(function(){
// startDrag = true;
// },2000);
// } else if (mx < chimes0.pos.x){
//     wind = new p5.Vector(0.2,0);
// this.setTimeout(function(){
// startDrag = true;
// },2000);
// };

// additional clicks to set additonal force?
// clicks +=1;
// if clicks > 5 {
//     wind = new p5.Vector(0,0);
//     clicks = 0;
// }


    });


function animate (){
//applications of the properties adapted to diff events and contexts


    //a vertical vectorial movement
     let gravity = new p5.Vector(0, 0.009);

    chime0.show();
    chime1.show();
    chime2.show();
    chime3.show();
        chime4.show(); 

        chime0.update(true,wind);
        chime1.update(true,wind);
        chime2.update(true,wind);
        chime3.update(true,wind);
        chime4.update(true,wind);



//marche PO
for (let i=0; i < chimesArray.lenght; i++){
    chime[i].show();
    console.log(`chimes show!`)
}    
     window.requestAnimationFrame(animate)
    }



    } //end window on load