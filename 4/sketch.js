// TODO: time with map() and mod

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(20);
  // map time between 0 and 2000 milliseconds to the size of a circle
  //period
  let p = 1000;
  let counter = millis() % p;
  // print(counter)
  // my diameter
  let md = map(counter, 0, p, 20, 300);
  //my red
  let mr = map(counter, 0, p, 100, 255);
  fill(mr, 20, 200);

  ellipse(width / 2, height / 2, md);

  // ellipse(width / 2, height / 2, 20);
}
