class Chimes{
    //https://www.youtube.com/watch?v=NBWMtlbbOag

            constructor(stringChime,el,x,y){
                
                //needs to be in vector, not a unidimensional parameter
                this.pos = new p5.Vector(x,y);
                this.vel = 0;
                this.acc = 0;
                this.minSpeed = -0.1;
                this.maxSpeed = 0.1;
                this.windX= 0;

                this.velVec = new p5.Vector(0,0);
                this.accVec = new p5.Vector(0,0);
                
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
                // this.impact= false;

        
            }
        

        
            //element remains in the canvas
            checkEdges(){
                if(this.pos.x > this.initialPos.x+150){
                    this.pos.x =this.initialPos.x+150;
                    this.vel.x *=-1;
                    console.log("test right boundary");
        
                }
        
                else if(this.pos.x < (this.initialPos.x-150)){
                    this.pos.x = this.initialPos.x-150;
                    this.vel.x*=-1;
                    console.log("test left boundary");
        
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
        
        update(resetAcc){
        
        //variation of the force regarding lenght of string
            let force = this.gravity * Math.sin(this.angle);
            
            this.angleAcc = (-1 * force);
            //relative to mass
            this.angleAcc += (this.windX/100);            
            this.angleVel += this.angleAcc;
            // console.log(this.angleAcc);          

            this.angle += this.angleVel;
// console.log(wind.x);          
            this.angleVel *= 0.99;
            this.pos.x = this.stringLength * Math.sin (this.angle);
            this.pos.y = this.stringLength * Math.cos (this.angle);
            this.pos.add(this.initialPos);

// max and min so that they dont flip
            if (this.angleAcc > this.maxSpeed){
                console.log(`max speed reached`);
                this.angleAcc = this.maxSpeed;
                        }
                        if (this.angleAcc < this.minSpeed){
                            this.angleAcc = this.minSpeed;
                                    }

        }

        show(){
            this.stringChime.style.left= `${this.pos.x}px`;
            this.stringChime.style.top = `${this.pos.y-100}px`;
        
            this.element.style.left = `${this.pos.x}px`;
            this.element.style.top = `${this.pos.y}px`;
        }
        
        // bang(){

        // }

        } //end of class