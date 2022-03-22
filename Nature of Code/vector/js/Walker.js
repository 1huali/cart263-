class Walker {
    constructor(x, y) {
      this.pos = createVector(x, y);
      //adding velocity vector
      this.vel = createVector(1,-1);
    }
  
    update() {
    //   this.pos.x = this.pos.x + random(-1, 1);
    //   this.pos.y = this.pos.y + random(-1, 1);

    //replacing velocity vector as a direction
          this.pos.add(this.vel);
    } 
  
    show() {
      stroke(255);
      strokeWeight(2);
      fill(255,100);

    //   diff form
      ellipse(this.pos.x,this.pos.y,32);
    //   point(this.pos.x, this.pos.y);
    }
  }


