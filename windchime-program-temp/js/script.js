/***
 * A wind chime study
Wawa Li


Program incarnating a wind chime : initial state, disturbed state. Input disturbances, interval disturbance, voice responsive disturbance?
Eventually think of an impact consequence (visual noise? audio sound?)

*/



"use strict";
window.onload = function () {

  // NEW! Start mic input at the beginning only ONCE
  micInput();

  let clicks = 0;
  let windForce;

  let stringChimeArray = [];
  let chimesArray = [];
  let userForce = 0;



  //el is the getElementbyId thing visual
  let userModeSwitch = document.getElementById(`triggerButton`);
  let impactSound = document.getElementById(`impactSound`);
  console.log(`sound loaded`)
  let toggle = true;
  console.log("Toggle true")
  let currentForceModeTextZone = document.getElementById(`currentForceMode`);
  let forceMode = `mouse input`;
  printForceMode();

  // attempts to print force mode
  // currentForceModeTextZone = element.innerHTML.${`forceMode`};
  // currentForceModeTextZone.element.write.(`forceMode`);

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

  let chime1 = new Chimes(stringchime1, document.getElementById(`chime1`), window.outerWidth / 2 - 200, 400);
  let chime0 = new Chimes(stringchime0, document.getElementById(`chime0`), window.outerWidth / 2, 200);
  let chime2 = new Chimes(stringchime2, document.getElementById(`chime2`), window.outerWidth / 2 + 100, 250);
  let chime3 = new Chimes(stringchime3, document.getElementById(`chime3`), window.outerWidth / 2 - 100, 250);
  let chime4 = new Chimes(stringchime4, document.getElementById(`chime4`), window.outerWidth / 2 + 200, 400);

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


  window.requestAnimationFrame(animate)
  //new properties adapted to diff events and contexts.

  window.addEventListener("mousedown", function (event) {

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
          this.setTimeout(function () {
            startDrag = true;
          }, 2000);
        } else if (difference < 0) {
          wind = new p5.Vector(windForce, 0);
          chimesArray[i].windX = wind.x;
          this.setTimeout(function () {
            startDrag = true;
          }, 2000);
        };

      }
    }
  });

  userModeSwitch.addEventListener("click", function (event) {
    // switch state to voiceInput or mouseInput
    toggle = !toggle;
    if (toggle) {
      forceMode = `mouse force input`;
      printForceMode();
    } else {
      forceMode = `mic input`;
      printForceMode();
    }
  });

  function animate() {
    //applications of the properties adapted to diff events and contexts


    //a vertical vectorial movement
    let gravity = new p5.Vector(0, 0.009);


    for (let i = 0; i < chimesArray.length; i++) {
      chimesArray[i].show();
      chimesArray[i].update(true);
    }

    //mode button
    if (toggle === false) {
      windForce = userForce;
      userForce/10;
      console.log(userForce);

      for (let i = 0; i < chimesArray.length; i++) {
        wind = new p5.Vector(userForce, 0);
          chimesArray[i].windX = wind.x;
          console.log(this.windX)
      }
      //copy mouseDown userforce thing here // random position

    }

bang();
    window.requestAnimationFrame(animate)
  }

  function printForceMode() {
    currentForceModeTextZone.innerHTML = forceMode;

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
            //    let average =0;
            let sum = 0;
            for (let i = 0; i < frequencyData.length; i++) {
              sum += frequencyData[i];
            }
            userForce = (sum / frequencyData.length) * 0.0001;
            // console.log(userForce);

            requestAnimationFrame(callBackLoop);
          }
        })

      .catch(function (err) {
        /* handle the error */
        console.log("NO SOUND DETECTED");
      });
  }
let impact = false;

  function bang(){

    for (let i = 0; i < chimesArray.length; i++) {
    // for (let j =0;j < chimesArray.length-1;j++) {
          for (let j =0;j < chimesArray.length;j++) {

      let chimeX = chimesArray[i].pos.x;
      // console.log(chimeX);
      // how to get an other X position of chime?
                  // let otherChimeX = (chimesArray[i].pos.x) && != (chimeX);
      let otherChimeX = (chimesArray[j].pos.x);
      chimeX != otherChimeX;

      // think they sometimes choose the same chime
      // console.log(i);
      //       console.log(j);

      let difference = otherChimeX - chimeX;
      if (difference > 0) {
        impact= true;
        console.log(impact);

        // impactSound.play();
    } else{
      impact= false;
    }
  }
}
}

} //end window on load