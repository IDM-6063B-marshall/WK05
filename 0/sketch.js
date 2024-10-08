// TODO: use mouseX and mouseY

function setup() {
  createCanvas(windowWidth, windowHeight);
    rect(mouseX, mouseY, 100);
    rectMode(CENTER)

}

function mouseClicked(){
  background(random)
}

function draw() {
  background(200, 20, 150);
 let mw = map(mouseX, 0, width/2, 1000, 10);
 rect(width/2, height/2, mw);
}


