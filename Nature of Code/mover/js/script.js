/**
Vector study
Wawa Li
// What is a Vector
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/nature-of-code/1.1-what-is-a-vector.html
// https://editor.p5js.org/codingtrain/sketches/JmEToUfk
*/
let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(200, 200);
}

function draw() {
  background(0);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }

  let gravity = createVector(0, 0.2);
  mover.applyForce(gravity);

  mover.update();
  mover.edges();
  mover.show();
}