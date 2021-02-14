let x = 100;
let y = 100;

function setup() {
  createCanvas(1500, 1500);
  stroke(0);
  fill(0);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    stroke (0);
    fill (0);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    stroke(0, 226, 255);
    fill(0, 225, 255);
  }

  if (keyIsDown(UP_ARROW)) {
    stroke(255, 0, 179);
    fill(255, 0, 179);
  }

  if (keyIsDown(DOWN_ARROW)) {
    stroke(255, 0, 63);
    fill(255, 0, 63);
  }

  //clear();
  ellipse(mouseX, mouseY, 50, 50);
  
}

function mouseClicked () {
    stroke(255);
    fill(255);
  }
