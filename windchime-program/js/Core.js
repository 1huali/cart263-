class Core extends Chimes{
//pendulum trajectory class. eventually, will classify regarding motion
//https://thecodingtrain.com/CodingChallenges/159-simple-pendulum-simulation.html

    constructor(stringChime,el,x,y){

        super (el,x,y);

        this.pos = new p5.Vector(0,0);
        this.vel = 0;
        this.acc = 0;
        this.topSpeed = 8;

        this.initialPos = new p5.Vector(x,y);

        this.angle = Math.PI/4;
        this.angleVel = 0;
        this.angleAcc = 0.001;

        this.element = el;
        this.stringLength = 100;
        this.stringChime = stringChime;
        this.mass = 1;
        this.r = 90;

        this.gravity= 0.01;

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

update(){


    this.angleVel += this.angleAcc;
    this.angle += this.angleVel;

    this.pos.x = this.stringLength * Math.sin (this.angle);
    this.pos.y = this.stringLength * Math.cos (this.angle);
    this.pos.add(this.initialPos);

    let force = this.gravity * Math.sin(this.angle);
    this.angleAcc = (-1 * force);
    this.angleVel += this.angleAcc;
    this.angle += this.angleVel;

    this.angleVel *= 0.99;
}

show(){
    this.stringChime.style.left= `${this.pos.x}px`;
    this.stringChime.style.top = `${this.pos.y-100}px`;

    this.element.style.left = `${this.pos.x}px`;
    this.element.style.top = `${this.pos.y}px`;
}
// Doesn't work here but needs an air resistance force
// drag(c){
//     //direction of drag
//     let drag = this.vel.copy();
//     drag.normalize();
//     drag.mult(-1);
//     //magnitude
//     let speedSq = this.vel.magSq();
//     drag.setMag(c*speedSq);

//     this.applyForce(drag);
// }


} //end of class