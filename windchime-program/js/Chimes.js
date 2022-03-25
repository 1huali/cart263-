class Chimes{

    constructor(el,x,y){
        this.pos = new p5.Vector(x,y);
        this.vel = new p5.Vector(0,0);
        this.acc = new p5.Vector(0,0);
        this.topSpeed = 10;

        this.initialPos = new p5.Vector(x,y);
        console.log(this.initialPos);
                this.angle = Math.PI/4;


        this.element = el;
        this.stringLength = 100;
        this.mass = 1;
        this.r = 0;

    }




//calculate acc, add acc to vel, limit vel is necessary and apply to pos
    update(resetAcc){

        this.vel.add(this.acc);
        this.vel.limit(this.topSpeed);
        this.pos.add(this.vel);
        // console.log(this.pos);
        this.element.style.left = `${this.pos.x}px`;
        this.element.style.top = `${this.pos.y}px`;
        if (resetAcc === true){
            this.acc.mult(0);
    }
    }





    applyForce(force){

        let f = p5.Vector.div(force,this.mass);
        this.acc.add(f);    

    }

drag(c){
    //direction of drag
    let drag = this.vel.copy();
    drag.normalize();
    drag.mult(-1);

    let speedSq = this.vel.magSq();
    drag.setMag(c*speedSq);

    this.applyForce(drag);
}



// userMotionTrigger(mx,my){
//     //pos = mouse
//     let mouse = new p5.Vector(mx,my);
//     let userForce = p5.Vector.add(mouse,this.vel);
//     this.acc = userForce;
// // console.log(userForce);
// this.applyForce(userForce);

     
// }



    //element remains in the canvas
    checkEdges(){

        //left-right
        if(this.pos.x > this.initialPos.x+400){
            this.pos.x =this.initialPos.x+400;
            this.vel.x *=-0.5;
        }
        else if(this.pos.x < (this.initialPos.x-400)){
            this.pos.x = this.initialPos.x-400;
            this.vel.x*=-0.5;
            console.log("test left boundary");

        }
     //top-bottom
        if(this.pos.y > 200){
            this.pos.y =200;
            // this.vel.y *=-1;
        }
        if(this.pos.y < 0){
            this.pos.y =0;
            // this.vel.y *=-1;
        }


    }
    
} //end of class