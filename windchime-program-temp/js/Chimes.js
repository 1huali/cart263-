class Chimes{
    //change to Chime

            constructor(stringChime,el,x,y){
                
                //needs to be in vector, not a unidimensional parameter
                this.pos = new p5.Vector(x,y);
                this.vel = 0;
                this.acc = 0;
                this.topSpeed = 8;
       
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
        
        update(resetAcc,wind){
        
        //variation of the force regarding lenght of string
            let force = this.gravity * Math.sin(this.angle);
            
            this.angleAcc = (-1 * force);à
            //relative to mass
            this.angleAcc += (wind.x/100);            
            this.angleVel += this.angleAcc;
            this.angle += this.angleVel;
// console.log(wind.x);          
            this.angleVel *= 0.99;
        
            this.pos.x = this.stringLength * Math.sin (this.angle);
            this.pos.y = this.stringLength * Math.cos (this.angle);
            this.pos.add(this.initialPos);


            if (this.angleAcc > this.topSpeed){
                            force = 0;
                        }

        }

        show(){
            this.stringChime.style.left= `${this.pos.x}px`;
            this.stringChime.style.top = `${this.pos.y-100}px`;
        
            this.element.style.left = `${this.pos.x}px`;
            this.element.style.top = `${this.pos.y}px`;
        }
        
        
        } //end of class