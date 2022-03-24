/**
Vector study
Wawa Li
// What is a Vector
// The Nature of Code : friction, drag force (in p5.js)
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/nature-of-code/1.1-what-is-a-vector.html
// https://editor.p5js.org/codingtrain/sketches/JmEToUfk
*/
let movers = [];
let attractor;
let mu = 0.1;
let dragC = 0.2;


function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), 200, random(1, 8));
    attractor = new attractor(200,200,5);
  }
}

function draw() {
  background(0);

  for (let mover of movers) {
    if (mouseIsPressed) {
      let wind = createVector(0.1, 0);
      mover.applyForce(wind);
    }

    let gravity = createVector(0, 0.2);
    let weight = p5.Vector.mult(gravity, mover.mass);

    //drag force halfway thru
    if (mover.pos.y > height / 2) {
      mover.drag(dragC);
    }

    mover.applyForce(weight);
    mover.friction();
    mover.update();
    mover.edges();
    mover.show();

// attractor.attract(mover);
attractor.show();

  }
}