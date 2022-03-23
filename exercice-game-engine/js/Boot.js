class Boot extends Phaser.Scene{
    constructor (){
    super({
        key: `boot`
    });
    }
    
    preload(){
this.load.image(`wall`,`assets/images/wall.png`);
this.load.spritesheet(`avatar`, `assets/images/avatar.png`, {
    // Our animation uses 32x32 pixel frames
    frameWidth: 32,
    frameHeight: 32,
    // Our animation has 4 frames, so the final frame number is 3, counting from 0
    endFrame: 13
  });

    }

    create(){
        let style ={
            fontFamily: `sans-serif`,
            fontSize: `40px`,
            color: `#ffffff`
        };
    let loadingString = `loading...99%`;
    this.add.text(100,100, loadingString, style);
        console.log(`play the created scene`);

        this.load.on(`complete`, () => {
            // Switch to the Play scene
            this.scene.start(`play`);
    }
    
    update(){
    
    console.log(`Play the updated scene`);
    }
    
    }
    //this is the loading scene. when the load is completed, will swittch to `play`.