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

  micInput();

  let windchimeBox = document.getElementById(`windchimeBox`);
  let clicks = 0;
  let windForce;

  //to control the mic event
  let timeoutWind = false;

  let stringChimeArray = [];
  let chimesArray = [];
  let userForce = 0;

  let forceInstructionText = document.getElementById("forceInstruction");
  let currentForceInstructionText = `You can implement the wind by clicking on the chime.`;
  let angleVelLevelText = document.getElementById(`sensitivityLevel`)
  let currentAngleVelText = ``;
  let angleVelSlider = document.getElementById(`angleVelSlider`);
  let angleVelLevel = 0;
  angleVelSlider.max = 1.2 * 100;
  angleVelSlider.min = 0.1 * 100;
  angleVelSlider.steps = 1;


  //el is the getElementbyId thing visual
  let userModeSwitch = document.getElementById(`triggerButton`);

  //buttons
  let toggle = true;
  let currentForceModeTextZone = document.getElementById(`currentForceMode`);
  let forceMode = `mouse input`;

  //variable data
  let forceLevelTextZone = document.getElementById(`forceLevelBox`);
  let currentForceLevelText = ``;

  //changing chime appearence
  let chimeLookArray = [];
  let currentLookIndex = 0;
  let currentLook = "chimeLook1";
  chimeLookArray.push("chimeLook1");
  chimeLookArray.push("chimeLook2");
  chimeLookArray.push("chimeLook3");
  chimeLookArray.push("chimeLook4");

  // let changeChimesFormButton = document.getElementById(`formButton`);

  //implementation of look variations 
  //   (chime elements)
  let changeLookButton = document.getElementById('lookButton');
  let chimeFormArray = [];
  let chimeFormIndex = 0;
  //change to chimeLook wtv
  let currentChimeForm = `ch!me`
  chimeFormArray.push(`✿`);
  chimeFormArray.push(`❀`);
  chimeFormArray.push(`♡`);
  chimeFormArray.push(`✧`);

//   (plate look)
let changePlateLookButton = document.getElementById(`plateButton`);
let currentPlateLook = `-------------------------------------------top-plate--------------------------------------------------`;
let plateLookArray=[];
let plateLookIndex= 0;
plateLookArray.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━༺✧༻━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
plateLookArray.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━⭑*•̩̩͙♩⊱••••✿••••̩̩͙⊰•♪*⭑━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)



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


  //window resizing - responsive design
  let windowRatio5th = window.innerWidth / 5;
  let windowRatio12th = window.innerWidth / 12;

  let stringUnit = window.innerHeight / 20;
  let topY = window.innerHeight / 5;
  //


  let chime0 = new Chimes(stringchime0, document.getElementById(`chime0`), window.innerWidth / 2, topY + stringUnit * 2, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 0, stringUnit * 2);
  let chime1 = new Chimes(stringchime1, document.getElementById(`chime1`), window.innerWidth / 2 - windowRatio5th, topY + stringUnit * 4, document.getElementById(`dustSound`), document.getElementById(`dustSound`), currentLook, currentChimeForm, 1000, stringUnit * 4);
  let chime2 = new Chimes(stringchime2, document.getElementById(`chime2`), window.innerWidth / 2 + windowRatio12th, topY + stringUnit * 2.5, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 500, stringUnit * 2.5);
  let chime3 = new Chimes(stringchime3, document.getElementById(`chime3`), window.innerWidth / 2 - windowRatio12th, topY + stringUnit * 2.5, document.getElementById(`dustSound`), document.getElementById(`dustSound`), currentLook, currentChimeForm, 500, stringUnit * 2.5);
  let chime4 = new Chimes(stringchime4, document.getElementById(`chime4`), window.innerWidth / 2 + windowRatio5th, topY + stringUnit * 4, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit * 4);

  // ceration of chimesArray
  chimesArray.push(chime0);
  chimesArray.push(chime1);
  chimesArray.push(chime2);
  chimesArray.push(chime3);
  chimesArray.push(chime4);

  console.log(currentPlateLook)
  let topPlate = new suspendorBase(stringBase, document.getElementById(`plate`), 0, topY,currentPlateLook);

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
let soundModeText = document.getElementById(`currentSound`);

  let dustSound = document.getElementById(`dustSound`);
  let dustSound2 = document.getElementById(`dustSound2`);
  let bambooSound = document.getElementById(`bambooSound`);
  let bambooSound2 = document.getElementById(`bambooSound2`);

  selfSoundArray.push(dustSound);
  impactSoundArray.push(dustSound2);
  selfSoundArray.push(bambooSound);
  impactSoundArray.push(bambooSound2);
  let currentSoundModeIndex = 0;
//

//mute sound feature
let muteButton = document.getElementById(`muteButton`);
let mute= false;





  window.requestAnimationFrame(animate)
  //new properties adapted to diff events and contexts.


  window.addEventListener("mousemove", function (event) {


    mx = event.clientX;


  });

  window.addEventListener("mousedown", function (event) {


    let windchimeBox = document.getElementById(`windchimeBox`)
      .getBoundingClientRect();
    // console.log(windchimeBox);
    let dataBox = document.getElementById(`dataBox`).getBoundingClientRect();
  let yPos = dataBox.height+dataBox.y;
if (event.clientY > yPos){

      //switch for user input
      if (toggle === true) {
        clicks += 1;
        let windisActive = false;

        //windForce set here :
        windForce = clicks * 0.3;
        //
        if (windForce > 0.7) {
          windForce = 0;
          clicks = 0;
        }

        let newWindForce = new p5.Vector(.9, 0);

        for (let i = 0; i < chimesArray.length; i++) {
          mx = event.clientX;
          let chimeX = chimesArray[i].pos.x;
          let difference = mx - chimeX;
          // console.log(difference);

          if (difference > 0) {
            wind = new p5.Vector(-windForce, 0);
            // console.log(wind)
            chimesArray[i].windX = wind.x;
            chimesArray[i].applyForce(newWindForce);


            if (i === 0) {
              topPlate.applyForce(newWindForce);
              //sabine set
              windisActive = true;
            }


          } else if (difference < 0) {
            wind = new p5.Vector(windForce, 0);
            chimesArray[i].windX = wind.x;
            chimesArray[i].applyForce(newWindForce);

            if (i === 0) {
              topPlate.applyForce(newWindForce);
              //sabine set
              windisActive = true;
            }
          }

        } //end for loop

        //drag force applying on the entirety of the chimes
        if (windisActive === true) {
          setTimeout(function () {
            startDrag = true;
          }, 2000);
        }


      } //end if toggle


    }
  });



  angleVelSlider.addEventListener("change", function (event) {
    angleVelLevel = this.value;
    slider();
    print();
  }); //end of mousedown

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

//can change the background color 
  // changeChimesFormButton.addEventListener("click", function (event) {


  //   for (let i = 0; i < chimesArray.length; i++) {
  //     chimesArray[i].element.classList.remove(chimeLookArray[currentLookIndex]);
  //   };
  //   currentLookIndex++;

  //   if (currentLookIndex === chimeLookArray.length) {
  //     currentLookIndex = 0;
  //   }

  //   for (let i = 0; i < chimesArray.length; i++) {
  //     chimesArray[i].element.classList.add(chimeLookArray[currentLookIndex]);

  //     //for text element
  //     if (currentLookIndex === 3) {
  //       chimesArray[i].element.innerHTML = "";
  //     } else {
  //       chimesArray[i].element.innerHTML = chimesArray[i].chimeText;
  //     }

  //   }


  // });

  changeSoundButton.addEventListener("click", function (event) {
    currentSoundModeIndex++;

    if (currentSoundModeIndex === selfSoundArray.length) {
      currentSoundModeIndex = 0;
    }

    for (let i = 0; i < chimesArray.length; i++) {
      chimesArray[i].selfSound = selfSoundArray[currentSoundModeIndex];
      chimesArray[i].impactSound = impactSoundArray[currentSoundModeIndex];
    }
currentSelfSoundMode = selfSoundArray[currentSoundModeIndex].id;

print();

  });

  changeLookButton.addEventListener("click", function (event) {

    chimeFormIndex++;
    if (chimeFormIndex === chimeFormArray.length) {
      chimeFormIndex = 0;
    }

    for (let j = 0; j < chimesArray.length; j++) {
      chimesArray[j].setChimeLook(chimeFormArray[chimeFormIndex]);
    };

    print();

  });

muteButton.addEventListener("click", function (event){
  mute = !mute;
 
  if (mute === true) {
    // document.getElementById(`dustSound`).volume=0;

for (let i=0;i < chimesArray.length; i++){
chimesArray[i].selfSound.pause();
chimesArray[i].impactSound.pause();
} 
  }
}); //end mute button



changePlateLookButton.addEventListener("click", function (event) {
console.log(`im here@!!!!!`)
  plateLookIndex++;

  if (plateLookIndex === plateLookArray.length){
    plateLookIndex =0;
  };

// for (let i=0;i< plateLookArray.length; i++){
  topPlate.currentLook = plateLookArray[plateLookIndex];
// };
topPlate.element.innerHTML= topPlate.currentLook;

});//end change border button

print();



  function animate() {
    //applications of the properties adapted to diff events and contexts




    //a vertical vectorial force
    let gravity = new p5.Vector(0, 0.009);

//activation of constructor's functions
    for (let i = 0; i < chimesArray.length; i++) {
      chimesArray[i].updateVectors(true);

      chimesArray[i].show();
      chimesArray[i].update(true);
      chimesArray[i].checkEdges();
    }

    topPlate.update(true);
    topPlate.show();
    topPlate.checkEdges();



    //activation of the "mode" button (user force mode)
    if (toggle === false) {

      //maps userforce to mic input data
      windForce = userForce;

      let windisActive = false;
      let newWindForce = new p5.Vector(.9, 0);
      //

      //user input force becomes the wind
      for (let i = 0; i < chimesArray.length; i++) {

        let chimeX = chimesArray[i].pos.x;
        let difference = mx - chimeX;

        if (difference > 0) {
          wind = new p5.Vector(-windForce, 0);
          chimesArray[i].windX = wind.x;
          chimesArray[i].applyForce(newWindForce);


          if (i === 0) {
            topPlate.applyForce(newWindForce);
            windisActive = true;
          }


        } else if (difference < 0) {
          wind = new p5.Vector(windForce, 0);
          chimesArray[i].windX = wind.x;

          if (timeoutWind === false) {
            chimesArray[i].applyForce(newWindForce);

          }


          if (i === 0 && timeoutWind === false) {
            topPlate.applyForce(newWindForce);
            windisActive = true;
          }

        } //diff

      } //end of for loop

      if (windisActive === true && timeoutWind === false) {

        setTimeout(function () {
          startDrag = true;
        }, 2000);


        setTimeout(function () {
          timeoutWind = false;
          console.log("time out wind");
        }, 5000);

        timeoutWind = true;

      }
    } //end of if Toggle

    bang();



    window.requestAnimationFrame(animate)
  }

  //change to print instruction?
  function print() {



    currentForceModeTextZone.innerHTML = forceMode;
    angleVelLevelText.innerHTML = angleVelLevel;
    soundModeText.innerHTML = currentSelfSoundMode;
    console.log(currentSelfSoundMode)
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
            userForce = (sum / frequencyData.length) / 100;
            // console.log(userForce)


            requestAnimationFrame(callBackLoop);
          }
        })

      .catch(function (err) {
        /* handle the error */
        console.log("NO SOUND DETECTED");
      });
 
 
 
    }



  function slider() {



    for (let i = 0; i < chimesArray.length; i++) {
      chimesArray[i].currentAngleVel = angleVelLevel;
    }
  
  
  
  }



  //sound of chimes triggered by movement or collision of 2 chimes obj
  function bang() {


//activation of selfSound by movement (calculated w velocity)
if (mute === false){

for (let i = 0; i < chimesArray.length; i++) {
      if (chimesArray[i].angleVel > Math.abs(0.003)) {
        chimesArray[i].isChiming();
      }
    }

//activation of impactSound by detection of collision between 2 chimes 
    for (let i = 0; i < chimesArray.length; i++) {
      // chimesArray[i].impact= false;
      if (chimesArray[i].isColliding === true) {
        if (chimesArray[i].impactSound.paused) {
          // console.log(`DONE`);
          chimesArray[i].isColliding = false;
        }
      }
    }

    // calculating collision thru difference
    for (let i = 0; i < chimesArray.length; i++) {
      for (let j = 0; j < chimesArray.length; j++) {
        let chimeX = chimesArray[i].pos.x;
        if (chimesArray[i] !== chimesArray[j]) {
          let otherChimeX = (chimesArray[j].pos.x);
          let difference = Math.sqrt(Math.pow((chimesArray[j].pos.x - chimesArray[i].pos.x), 2) + Math.pow((chimesArray[j].pos.y - chimesArray[i].pos.y), 2));

    //determines if there is collision or not between 2 chimes objs
          if (difference < 100) {
            chimesArray[i].impact = true;
            chimesArray[j].impact = true;

            if (chimesArray[j].isColliding === false) {
              chimesArray[j].inCollision();
              chimesArray[j].isColliding = true;
            }

            if (chimesArray[i].isColliding === false) {
              chimesArray[i].inCollision();
              chimesArray[i].isColliding = true;
            }



          }
        }
      }
    }
  }
} 

} //end window on load