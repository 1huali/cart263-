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
  // let impactSound = document.getElementById(`impactSound0`);
  console.log(`sound loaded`)
  // let impact = false;

  let toggle = true;
  console.log("Toggle true")
  let currentForceModeTextZone = document.getElementById(`currentForceMode`);
  let forceMode = `mouse input`;
  printForceMode();


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

  let chime1 = new Chimes(stringchime1, document.getElementById(`chime1`), window.outerWidth / 2 - 200, 400, document.getElementById(`impactSound1`));
  let chime0 = new Chimes(stringchime0, document.getElementById(`chime0`), window.outerWidth / 2, 200, document.getElementById(`impactSound0`));
  let chime2 = new Chimes(stringchime2, document.getElementById(`chime2`), window.outerWidth / 2 + 100, 250, document.getElementById(`impactSound2`));
  let chime3 = new Chimes(stringchime3, document.getElementById(`chime3`), window.outerWidth / 2 - 100, 250, document.getElementById(`impactSound3`));
  let chime4 = new Chimes(stringchime4, document.getElementById(`chime4`), window.outerWidth / 2 + 200, 400, document.getElementById(`impactSound4`));

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

  window.addEventListener("mousemove", function (event){
        mx = event.clientX;
      });

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

        // 
        if (difference > 0) {
          wind = new p5.Vector(-windForce, 0);
          // console.log(wind)
          chimesArray[i].windX = wind.x;
          this.setTimeout(function () {
            startDrag = true;
          }, 2000);

        //
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
    
    //for (let i=0; i < 1; i++){
      if (chimesArray[0].angleVel > 0){
           topPlate.applyForce(wind);
          //  console.log(wind);
        topPlate.update(true);
     
       //console.log("test");
      }
   // }

    for (let i = 0; i < chimesArray.length; i++) {
      chimesArray[i].show();
      chimesArray[i].update(true);
    }

    topPlate.show();
    // topPlate.update(true);
    // topPlate.applyForce(wind);
   
    // topPlate.applyForce(gravity);
    topPlate.checkEdges();
    // topPlate.drag(c);



              //1. threshold ; 2. avec mx et userForce comme windX ; afficher userForce et donner un lvl 

    //mode button
    if (toggle === false) {


      windForce = userForce;
      // userForce/10;


//user input force becomes the wind
      for (let i = 0; i < chimesArray.length; i++) {


      //userForce applied to wind X position
        wind = new p5.Vector(userForce, 0);
          chimesArray[i].windX = wind.x;
          // console.log(wind.x)


        //sets the wind effect relative for each chime to the mouse position (rather than global pos)
        let chimeX = chimesArray[i].pos.x;
        let difference = mx - chimeX;
        // console.log(difference);

        if (difference > 0) {
          wind = new p5.Vector(-windForce, 0);
          // console.log(wind)
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
            console.log(userForce)


            requestAnimationFrame(callBackLoop);
          }
        })

      .catch(function (err) {
        /* handle the error */
        console.log("NO SOUND DETECTED");
      });
  }

  function bang(){


    for (let i = 0; i < chimesArray.length; i++) {
    // chimesArray[i].impact= false;
if (chimesArray[i].isColliding === true){
  if (chimesArray[i].impactSound.paused){
    console.log(`DONE`);
    chimesArray[i].isColliding = false;
  }
  // console.log(`bang`)
}
    }

    
    // for one to chime by itself ; isMoving = false/true same as isColliding



    for (let i = 0; i < chimesArray.length; i++) {
    // for (let j =0;j < chimesArray.length-1;j++) {
          for (let j =0;j < chimesArray.length;j++) {
      let chimeX = chimesArray[i].pos.x;
      // console.log(chimeX);
      // how to get an other X position of chime?
      if (chimesArray[i] !== chimesArray[j]){
        let otherChimeX = (chimesArray[j].pos.x);
        // let difference = Math.abs(otherChimeX - chimeX);
      //  let difference = p5.dist(chimesArray[j].pos.x,chimesArray[j].pos.y,chimesArray[i].pos.x,chimesArray[i].pos.y);

       let difference = Math.sqrt( Math.pow((chimesArray[j].pos.x-chimesArray[i].pos.x), 2) + Math.pow((chimesArray[j].pos.y-chimesArray[i].pos.y), 2) );

      //  let difference = dist(chimesArray[j].pos.x,chimesArray[j].pos.y);

      //  console.log(difference);

        if (difference < 100) {
          chimesArray[i].impact= true;
          chimesArray[j].impact= true;
          
          if (chimesArray[j].isColliding === false){
            chimesArray[j].isChiming();
            chimesArray[j].isColliding = true;
          }

          if (chimesArray[i].isColliding === false){
            chimesArray[i].isChiming();
            chimesArray[i].isColliding = true;
          }



        }
      }
           
      // think they sometimes choose the same chime
      // console.log(i);
      //       console.log(j);

      // let difference = otherChimeX - chimeX;
      // if (difference > 0) {
      //   impact= true;
      //   console.log(impact);

        // impactSound.play();
    // } else{
    //   impact= false;
    // }
  }
}
}

} //end window on load