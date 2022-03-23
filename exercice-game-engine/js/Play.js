class Play extends Phaser.Scene{
constructor (){
super({
    key: `play`
});
}

create(){
    let style ={
        fontFamily: `sans-serif`,
        fontSize: `40px`,
        color: `#ffffff`
    };
let gameDescription = `think of a number...wrong`;
this.add.text(100,100, gameDescription, style);
    console.log(`play the created scene`);

    this.wall = this.add.sprite(200, 200, `wall`);
    this.wall.setTint(0xdd3333);

}

update(){

console.log(`Play the updated scene`);
}

}