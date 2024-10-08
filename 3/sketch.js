// TODO: animation across the screen
//       wrap around
//       bounce

let x;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  x = 0;
  // for (let x = 0; x < width; x += 3) {
  //   ellipse(x, height / 2, 100);
}

function draw() {
  //draw stuff
  //putting background here gets rid of the snail trail
  background(20);
  // ellipse(x, height / 2, 100);

  // ellipse (x % width, height / 2, 100)
  let xpos = 10 * frameCount;
  ellipse(xpos % width, height / 2, 100);

  //update some parameters
  // x = x + 3;

  // //check if need to reset x
  // if (x > width+50){
  //   x = 0;}

}
