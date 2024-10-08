// TODO: mouse hover effect

function overlapRect(x, y, h, w, c) {
  let betweenX = (mouseX >= x && mouseX <= x + w);
  let betweenY = (mouseY >= y && mouseY <= y + h);
  if (betweenX && betweenY) {
    fill("deeppink");
  } else {
    fill(255);
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  strokeWeight(5);
}

function draw() {
  rect(100, 50, 400, 200);
  // if (mouseX >= 100 && mouseX <= 500 && mouseY >= 50 && mouseY <= 250) {
  //   let rr = random(255);
  //   let rg = random(255);
  //   let rb = random(255);
  //   fill(rr, rg, rb);
  //   stroke(rr, rb, rb);
  //   ellipse(300, 150, 100);}

  push();
  let rx = 100;
  let ry = 50;
  let rw = 400;
  let rh = 200;

overlapRect (rx, ry, rw, rh, "deeppink:");
overlapRect (600, 50, 100, 100, "dodgerblue")

  if (betweenX && betweenY) {
    fill("deeppink");
  } else {
    fill(255);
  }

  rect(rx, ry, rw, rh);

  pop();

  push()
  let cx = 200;
  let cy = 500;
  let cr = 150;

  let distMouse = dist(mouseX, mouseY, cx, cy);

  if (distMouse < cr) {
    fill("deeppink");
  } else {
    fill(255);
  }

  ellipse(cx, cy, 2 * cr);
  pop()
}
