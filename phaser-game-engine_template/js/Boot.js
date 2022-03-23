class Boot extends Phaser.Scene{
    constructor (){
    super({
        key: `boot`
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

        //calls scene management
        this.scene.start
    }
    
    update(){
    
    console.log(`Play the updated scene`);
    }
    
    }