class Core extends Chimes{
//pendulum trajectory

    constructor(stringChime,el,x,y){

        super (el,x,y);

        this.pos = new p5.Vector(0,0);
        this.vel = 0;
        this.acc = 0;
        this.topSpeed = 10;

        this.initialPos = new p5.Vector(x,y);
        console.log(this.initialPos);

        this.angle = Math.PI/4;
        this.angleVel = 0;
        this.angleAcc = 0.001;

        this.element = el;
        this.stringLength = 100;
        this.stringChime = stringChime;
        this.mass = 1;
        this.radius = 90;

        this.gravity= 0.01;

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

pendulum(){


    this.angleVel += this.angleAcc;
    this.angle += this.angleVel;

    this.pos.x = this.stringLength * Math.sin (this.angle);
    this.pos.y = this.stringLength * Math.cos (this.angle);
    this.pos.add(this.initialPos);

    

    this.stringChime.style.left= `${this.pos.x}px`;
    this.stringChime.style.top = `${this.pos.y-100}px`;

    this.element.style.left = `${this.pos.x}px`;
    this.element.style.top = `${this.pos.y}px`;

    let force = this.gravity * Math.sin(this.angle);
    this.angleAcc = (-1 * force);
    this.angleVel += this.angleAcc;
    this.angle += this.angleVel;

    this.angleVel *= 0.99;
}

} //end of class