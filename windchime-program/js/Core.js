class Core extends Chimes{

    constructor(el,x,y){

        super (el,x,y);

        this.topSpeed = 10;
        this.mass = 3;
        // this.r = 0;

    }

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
        if(this.pos.x > 500){
            this.pos.x =500;
            this.vel.x *=-1;
        }
        if(this.pos.y > 500){
            this.pos.y =500;
            this.vel.y *=-1;
        }
        if(this.pos.y < 0){
            this.pos.y =0;
            this.vel.y *=+1;
        }
    }



} //end of class