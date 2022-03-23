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


}

update(){

console.log(`Play the updated scene`);
}

}