class Chimes{

    constructor(el,x,y){
        this.pos = new p5.Vector(x,y);
        this.vel = new p5.Vector(0,0);
        this.acc = new p5.Vector(0,0);
        this.topSpeed = 10;

        this.initialPos = new p5.Vector(x,y);

        this.element = el;
        this.mass = 1;
        this.r = 0;

    }




//calculate acc, add acc to vel, limit vel is necessary and apply to pos
    update(){

        this.vel.add(this.acc);
        this.vel.limit(this.topSpeed);
        this.pos.add(this.vel);
        this.element.style.left = `${this.pos.x}px`;
        this.element.style.top = `${this.pos.y}px`;
        this.acc.mult(0);

    }





    applyForce(force){

        let f = p5.Vector.div(force,this.mass);
        this.acc.add(f);    

    }





    //element remains in the canvas
    checkEdges(){

        //canvas size
        //top-down
        if(this.pos.x > 500){
            this.pos.x =500;
            this.vel.x *=-1;
        }

        //left-right
        if(this.pos.y > 500){
            this.pos.y =500;
            this.vel.y *=-1;
        }
        //DOESNT WORK
        if(this.pos.y < 0){
            this.pos.y =0;
            this.vel.y *=-1;
                        console.log(this.pos)
        }

        //   //chime zone
        //   if(this.pos.x > 500){
        //     this.pos.x =500;
        //     this.vel.x *=-1;
        // }
        // if(this.pos.y > 500){
        //     this.pos.y =500;
        //     this.vel.y *=-1;
        // }

    }



    
} //end of class