// TODO: global state variables
//click count
let cc;
let md;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cc = 0;
  md = 200;
}

function draw() {
  background(20);
  // if (cc > 50) {
  //   fill(200, 100, 200);
  // }
  // ellipse(width / 2, height / 2, 5*cc);

// ellipse (width/2, height / 2, md);


  ellipse(width / 2, height / 2, 5 * cc);
}
function mouseReleased() {
  cc += 5;
  md = map(cc, 0, 10, 200, 10)
  print(cc, md)
}
