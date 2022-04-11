/***
 * A wind chime study
Wawa Li


Program incarnating a wind chime : initial state, disturbed state. Input disturbances, interval disturbance, voice responsive disturbance?
Eventually think of an impact consequence (visual noise? audio sound?)
https://thecodingtrain.com/learning/nature-of-code/2.1-simulating-forces.html
https://thecodingtrain.com/learning/nature-of-code/2.2-mass-acceleration.html
https://thecodingtrain.com/learning/nature-of-code/2.4-drag.html
*/



"use strict";
window.onload = function () {

  // NEW! Start mic input at the beginning only ONCE
  micInput();

  let windchimeBox = document.getElementById(`windchimeBox`);
// console.log(windchimeBox.width);
  let clicks = 0;
  let windForce;

  let stringChimeArray = [];
  let chimesArray = [];
  let userForce = 0;

  let forceInstructionText = document.getElementById("forceInstruction");
  let currentForceInstructionText = `You can implement the wind by clicking on the chime.`;
  let angleVelLevelText = document.getElementById(`sensitivityLevel`)
  let currentAngleVelText = ``;
  let angleVelSlider = document.getElementById(`angleVelSlider`);
let angleVelLevel = 0;
angleVelSlider.max = 1.2 *100;
angleVelSlider.min= 0.1*100 ;
angleVelSlider.steps=1;


  //el is the getElementbyId thing visual
  let userModeSwitch = document.getElementById(`triggerButton`);

//buttons 
  let toggle = true;
  console.log("Toggle true")
  let currentForceModeTextZone = document.getElementById(`currentForceMode`);
  let forceMode = `mouse input`;

  //variable data 
  let forceLevelTextZone = document.getElementById(`forceLevelBox`);
  let currentForceLevelText= ``;

  //changing chime appearence
  let chimeLookArray =[];
  let currentLookIndex=0;
  let currentLook= "chimeLook1";
  chimeLookArray.push("chimeLook1");
  chimeLookArray.push("chimeLook2");
  chimeLookArray.push("chimeLook3");
  chimeLookArray.push("chimeLook4");

  let changeChimesLookButton = document.getElementById(`lookButton`);
  print();


  let stringchime0 = document.getElementById(`string0`);
  //how do I change the lenght of core lenght?
  let stringBase = document.getElementById(`stringBase`);
  let stringchime1 = document.getElementById(`string1`);
  let stringchime2 = document.getElementById(`string2`);
  let stringchime3 = document.getElementById(`string3`);
  let stringchime4 = document.getElementById(`string4`);

  //maybe dont need this
  stringChimeArray.push(stringchime0);
  stringChimeArray.push(stringchime1);
  stringChimeArray.push(stringchime2);
  stringChimeArray.push(stringchime3);
  console.log(stringChimeArray);

  let chime0 = new Chimes(stringchime0, document.getElementById(`chime0`), window.outerWidth / 2, 200,document.getElementById(`dustSound`), document.getElementById(`dustSound2`),currentLook,"CHIME",0);
  let chime1 = new Chimes(stringchime1, document.getElementById(`chime1`), window.outerWidth / 2 - 150, 300,document.getElementById(`dustSound`), document.getElementById(`dustSound`), currentLook,"CHIME",1000);
  let chime2 = new Chimes(stringchime2, document.getElementById(`chime2`), window.outerWidth / 2 + 100, 250,document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook,"CHIME",500);
  let chime3 = new Chimes(stringchime3, document.getElementById(`chime3`), window.outerWidth / 2 - 100, 250,document.getElementById(`dustSound`), document.getElementById(`dustSound`), currentLook,"CHIME",500);
  let chime4 = new Chimes(stringchime4, document.getElementById(`chime4`), window.outerWidth / 2 + 150, 300,document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook,"CHIME",1000);

  chimesArray.push(chime0);
  chimesArray.push(chime1);
  chimesArray.push(chime2);
  chimesArray.push(chime3);
  chimesArray.push(chime4);
  console.log(chimesArray);

  let topPlate = new suspendorBase(stringBase, document.getElementById(`plate`), window.outerWidth / 2, 100);

  let startDrag = false;
  let mx = 0;
  let my = 0;

  //only use Vector from p5 librairies
  let wind = new p5.Vector(0, 0);
  let repelWindForce = 0.01;
  let windButton;

//sound button
let selfSoundArray = [];
let impactSoundArray = [];

let currentSelfSoundMode = `dust`;
let currentImpactSoundMode = `dust`;
let changeSoundButton = document.getElementById(`soundButton`);

let dustSound = document.getElementById(`dustSound`);
let dustSound2 = document.getElementById(`dustSound2`);
let bambooSound = document.getElementById(`bambooSound`);
let bambooSound2 = document.getElementById(`bambooSound2`);

selfSoundArray.push(dustSound);
impactSoundArray.push(dustSound2);
selfSoundArray.push(bambooSound);
impactSoundArray.push(bambooSound2);
let currentSoundModeIndex= 0;




  window.requestAnimationFrame(animate)
  //new properties adapted to diff events and contexts.

  window.addEventListener("mousemove", function (event){


        mx = event.clientX;


      });

  window.addEventListener("mousedown", function (event) {


let windchimeBox = document.getElementById(`windchimeBox`).getBoundingClientRect();
console.log(windchimeBox);
if (event.clientY < (windchimeBox.height-windchimeBox.y)){
  

    //switch for user input
    if (toggle === true) {
      // console.log(`mouse input rn`);
      clicks += 1;
      //windForce set here :
      windForce = clicks * 0.3;
      //
      if (windForce > 0.7) {
        windForce = 0;
        clicks = 0;
      }

      // reaches X position of each chimes
      for (let i = 0; i < chimesArray.length; i++) {
        mx = event.clientX;
        let chimeX = chimesArray[i].pos.x;
        let difference = mx - chimeX;
        // console.log(difference);

        if (difference > 0) {
          wind = new p5.Vector(-windForce, 0);
          // console.log(wind)
          chimesArray[i].windX = wind.x;
          chimesArray[i].applyForce(wind);

          if (i===0){
            topPlate.applyForce(wind);
          };

          this.setTimeout(function () {
            startDrag = true;
          }, 2000);

        //
      } else if (difference < 0) {
          wind = new p5.Vector(windForce, 0);
          chimesArray[i].windX = wind.x;
          chimesArray[i].applyForce(wind);

          if (i===0){
            topPlate.applyForce(wind);
          };

          this.setTimeout(function () {
            startDrag = true;
          }, 2000);
        };

      }
    }

}
  });

  angleVelSlider.addEventListener("change", function (event) {
    angleVelLevel= this.value;
    slider();
print();
  });

  userModeSwitch.addEventListener("click", function (event) {
    // switch state to voiceInput or mouseInput
    toggle = !toggle;
    if (toggle) {
      forceMode = `mouse force input`;
      currentForceInstructionText = `You can implement the wind by clicking on the chimes.`;
      currentAngleVelText = ``;
      currentForceLevelText = `0`;
      print();
    } else {
      forceMode = `mic input`;
      currentForceInstructionText = `You can implement the wind by blowing in your mic.`;
      currentForceLevelText = `0`;
      //value should change with the wind force
      print();
    }


  });

changeChimesLookButton.addEventListener("click", function (event) {


  for (let i=0; i < chimesArray.length; i++){
    chimesArray[i].element.classList.remove(chimeLookArray[currentLookIndex]);
  };
    currentLookIndex++;
    
if (currentLookIndex === chimeLookArray.length){
  currentLookIndex = 0;
}

    for (let i=0; i < chimesArray.length; i++){
  chimesArray[i].element.classList.add(chimeLookArray[currentLookIndex]);

  if (currentLookIndex===3){
    chimesArray[i].element.textContent="";
  } else {
    chimesArray[i].element.textContent=chimesArray[i].chimeText;
  }

    }


});

changeSoundButton.addEventListener("click", function (event) {

  currentSoundModeIndex++;
  
  if (currentSoundModeIndex === selfSoundArray.length){
    currentSoundModeIndex = 0;
  }

   for (let i=0; i < chimesArray.length; i++){
    chimesArray[i].selfSound = selfSoundArray[currentSoundModeIndex];
    chimesArray[i].impactSound = impactSoundArray[currentSoundModeIndex];
  }
  console.log(currentImpactSoundMode);

  

});




  function animate() {
    //applications of the properties adapted to diff events and contexts


    //a vertical vectorial movement
    let gravity = new p5.Vector(0, 0.009);
   

    for (let i = 0; i < chimesArray.length; i++) {
      chimesArray[i].updateVectors(true);

      chimesArray[i].show();
      chimesArray[i].update(true);
      chimesArray[i].checkEdges();
    }

    topPlate.update(true);
    topPlate.show();
    topPlate.checkEdges();



              //1. threshold ; 2. avec mx et userForce comme windX ; afficher userForce et donner un lvl 

    //mode button
    if (toggle === false) {

//maps userforce to mic input data
      windForce = userForce;
//

//user input force becomes the wind
      for (let i = 0; i < chimesArray.length; i++) {


      //userForce applied to wind X position
        wind = new p5.Vector(userForce, 0);
          chimesArray[i].windX = wind.x;
          // console.log(wind.x)


        //sets the wind effect relative for each chime to the mouse position (rather than global pos)
        let chimeX = chimesArray[i].pos.x;
        let difference = mx - chimeX;

        if (difference > 0) {
          wind = new p5.Vector(-windForce, 0);

          chimesArray[i].windX = wind.x;
          setTimeout(function () {
            startDrag = true;
          }, 2000);

        //
      } else if (difference < 0) {
          wind = new p5.Vector(windForce, 0);
          chimesArray[i].windX = wind.x;
          setTimeout(function () {
            startDrag = true;
          }, 2000);
        };

      
        }

    }

bang();
    window.requestAnimationFrame(animate)
  }

  //change to print instruction?
  function print() {

    currentForceModeTextZone.innerHTML = forceMode;
    angleVelLevelText.innerHTML = angleVelLevel;
    console.log(angleVelLevel);
    forceInstructionText.innerHTML = currentForceInstructionText;
    angleVelLevelText.innerHTML = angleVelLevel;
    forceLevelTextZone.innerHTML = windForce;


  }

  function micInput() {
    //https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API and Sabine's help
    //librairy web audio

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioContext = new AudioContext();

    navigator.mediaDevices.getUserMedia({
        audio: true
      })
      .then(
        //stream is what is returned
        (stream) => {
          //returns a MediaStreamAudioSourceNode.
          const microphoneIn = audioContext.createMediaStreamSource(stream);
          const filter = audioContext.createBiquadFilter();
          const analyser = audioContext.createAnalyser();
          // microphone -> filter ->  analyzer->destination
          microphoneIn.connect(filter);
          //use the analyzer object to get some properties ....
          filter.connect(analyser);
          console.log(`micInput`);

          //we do not need a destination (out)
          //analyser.connect(audioContext.destination); is the translation of waves into pixel
          //fast furior transform is the type of analysis to be done on the data (32 is the size)
          analyser.fftSize = 32;
          let frequencyData = new Uint8Array(analyser.frequencyBinCount);

          //call loop ...
          requestAnimationFrame(callBackLoop);

          /****our looping callback function */
          function callBackLoop() {
            analyser.getByteFrequencyData(frequencyData);
            //takes the average of the collection
              //  let average =0;
            let sum = 0;
            for (let i = 0; i < frequencyData.length; i++) {
              sum += frequencyData[i];
            }
            userForce = (sum / frequencyData.length)/100;
            // console.log(userForce)


            requestAnimationFrame(callBackLoop);
          }
        })

      .catch(function (err) {
        /* handle the error */
        console.log("NO SOUND DETECTED");
      });
  }

  function slider(){
for (let i=0;i< chimesArray.length; i++){
  chimesArray[i].currentAngleVel= angleVelLevel;
}
  }

  function bang(){

//self sound activation at movement ??
for (let i = 0; i < chimesArray.length; i++) {
  if (chimesArray[i].angleVel > Math.abs(0.003)){
  chimesArray[i].isChiming();
}
}

    for (let i = 0; i < chimesArray.length; i++) {
    // chimesArray[i].impact= false;
if (chimesArray[i].isColliding === true){
  if (chimesArray[i].impactSound.paused){
    // console.log(`DONE`);
    chimesArray[i].isColliding = false;
  }
}
    }

    
    // sound , for one to chime by itself ; isMoving = false/true same as isColliding



    for (let i = 0; i < chimesArray.length; i++) {
          for (let j =0;j < chimesArray.length;j++) {
      let chimeX = chimesArray[i].pos.x;
      // how to get an other X position of chime?
      if (chimesArray[i] !== chimesArray[j]){
        let otherChimeX = (chimesArray[j].pos.x);
       let difference = Math.sqrt( Math.pow((chimesArray[j].pos.x-chimesArray[i].pos.x), 2) + Math.pow((chimesArray[j].pos.y-chimesArray[i].pos.y), 2) );


        if (difference < 100) {
          chimesArray[i].impact= true;
          chimesArray[j].impact= true;
          
          if (chimesArray[j].isColliding === false){
            chimesArray[j].inCollision();
            chimesArray[j].isColliding = true;
          }

          if (chimesArray[i].isColliding === false){
            chimesArray[i].inCollision();
            chimesArray[i].isColliding = true;
          }



        }
      }
  }
}
}

} //end window on load