class Core extends Chimes{

    constructor(el,x,y){
        this.pos = new p5.Vector(x,y);
        this.vel = new p5.Vector(0,0);
        this.acc = new p5.Vector(0,0);
        this.topSpeed = 10;

        this.element = el;
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
        this.acc.add(force);
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
    }



} //end of class