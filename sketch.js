let x = 100;
let y = 100;

function setup() {
  createCanvas(1600, 1600);
  stroke(255, 0, 0);
  fill(255, 0, 0);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    stroke (255, 0, 0);
    fill (255, 0, 0);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    stroke(0, 226, 255);
    fill(0, 225, 255);
  }

  if (keyIsDown(UP_ARROW)) {
    stroke(255, 255, 0);
    fill(255, 255, 0);
  }

  if (keyIsDown(DOWN_ARROW)) {
    stroke(1, 255, 0);
    fill(1, 255, 0);
  }

  //clear();
  ellipse(mouseX, mouseY, 50, 50);
  
}

function mouseClicked () {
    stroke(255);
    fill(255);
  }
