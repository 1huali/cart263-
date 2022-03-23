class Chimes{

    constructor(el, x,y){
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.topSpeed = 10;

        this.element = el;
        this.mass = m;
        this.r = createVector(0,0);

    }

    update(){
        this.vel.add(this.acc);
        this.vel.limit(this.topSpeed);
        this.pos.add(this.vel);
        this.el.style.left = `${this.location.x}px`;
        this.el.style.top = `${this.location.y}px`;
        this.acc.mult(0);
    }



} //end of class