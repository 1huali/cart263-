class Play extends Phaser.Scene{
constructor (){
super({
    key: `play`
});
}

create(){
//a text
    let style ={
        fontFamily: `sans-serif`,
        fontSize: `40px`,
        color: `#ffffff`
    };
let gameDescription = `think of a number...wrong`;
this.add.text(100,100, gameDescription, style);
    console.log(`play the created scene`);

//the walls
    this.wall = this.add.sprite(200, 200, `wall`);
    this.wall.setTint(0xdd3333);

    this.avatar = this.add.sprite(200, 200, `avatar`);
    // NOTE: Here we create an animation we will play when the avatar is
    // moving in our game. As discussed, we create it using the animation
    // system of Phaser 3, which is available via this.anims. We use its
    // .create() method, passing in a configuration object.
    // EXAMPLE: https://phaser.io/examples/v3/view/loader/sprite-sheet/load-sprite-sheet
    let movingAnimationConfig = {
        key: `moving`,
        frames: this.anims.generateFrameNumbers(`avatar`, {
          start: 0,
          end: 13
        }),
        frameRate: 30,
        repeat: -1
      };
      this.anims.create(movingAnimationConfig);
  
      // NOTE: Configuring an idle animation
      let idleAnimationConfig = {
        // NOTE: We need to use a different animation key of course
        key: `idle`,
        frames: this.anims.generateFrameNumbers(`avatar`, {
          // NOTE: We're only going to use frame 0, so it's starts and ends there
          start: 0,
          end: 0
        }),
        // NOTE: No need to specify a frame rate for something that doesn't technically animate!
        // NOTE: We'll repeat 0 times!
        repeat: 0
      };
      this.anims.create(idleAnimationConfig);
      // NOTE: It makes sense for the avatar to start out "idle"
      this.avatar.play(`idle`);

}

update(){

console.log(`Play the updated scene`);
}

}