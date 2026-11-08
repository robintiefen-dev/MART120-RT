var x = 50;
var y = 50;
var diameter = 25;
var speed = 5;
var obstacle1X = 200;
var obstacle1Y = 150;

var obstacle2X = 500;
var obstacle2Y = 350;

var obstacle1SpeedX;
var obstacle1SpeedY;

var obstacle2SpeedX;
var obstacle2SpeedY;

var mouseObstacleX = 0;
var mouseObstacleY = 0;
var showMouseObstacle = false;

var exitX = 740;
var exitY = 250;
var exitWidth = 60;
var exitHeight = 100;
var hasWon = false;


function setup()
{
    createCanvas(800,600);
    obstacle1SpeedX = random(-3, 3);
    obstacle1SpeedY = random(-3, 3);

    obstacle2SpeedX = random(-5, 5);
    obstacle2SpeedY = random(-5, 5);
}


function draw(){
    background(0);
    // Stationary Obstacle
    if (showMouseObstacle == true)
    {
        fill(180, 0, 255);
        square(mouseObstacleX, mouseObstacleY, 40);
        
        // Exit drawing
        fill(255, 215, 0);
        rect(exitX, exitY, exitWidth, exitHeight);

        // Exit label
        fill(0);
        textAlign(CENTER, CENTER);
        text("EXIT", exitX + exitWidth / 2, exitY + exitHeight / 2);
    }


// Draw the circle at the current position and size
    fill(24,200,29);
    circle(x, y, diameter);
    // Obstacle 1
    fill(255,0,0);
    triangle(obstacle1X, obstacle1Y, obstacle1X - 25, obstacle1Y + 25, obstacle1X + 25, obstacle1Y + 25);
    // Obstacle 2
    fill(0,100,255);
    ellipse(obstacle2X, obstacle2Y, 80, 40);
    // Move obstacles
    obstacle1X += obstacle1SpeedX;
    obstacle1Y += obstacle1SpeedY;

    obstacle2X += obstacle2SpeedX;
    obstacle2Y += obstacle2SpeedY;
    // Wrap obstacle 1
if (obstacle1X > width) {
    obstacle1X = 0;
}
else if (obstacle1X < 0) {
    obstacle1X = width;
}

if (obstacle1Y > height) {
    obstacle1Y = 0;
}
else if (obstacle1Y < 0) {
    obstacle1Y = height;
}

// Wrap obstacle 2
if (obstacle2X > width) {
    obstacle2X = 0;
}
else if (obstacle2X < 0) {
    obstacle2X = width;
}

if (obstacle2Y > height) {
    obstacle2Y = 0;
}
else if (obstacle2Y < 0) {
    obstacle2Y = height;
}

if (keyIsDown(LEFT_ARROW))
{
    x -= speed;
}
else if (keyIsDown(RIGHT_ARROW))
{
    x += speed;
}
if (keyIsDown(UP_ARROW))
{
    y -= speed;
}
else if (keyIsDown(DOWN_ARROW))
{
    y += speed;
}
    // Did player reach the exit?
    if (showMouseObstacle == true &&
        x >= exitX && x <= exitX + exitWidth &&
        y >= exitY && y <= exitY + exitHeight)
    {
        hasWon = true;
    }
    // Display win message
    if (hasWon == true)
{
    fill(255);
    textSize(40);
    textAlign(CENTER);
    text("YOU WIN!", width / 2, height / 2);
}
else
{
    fill(255);
    textSize(16);
    textAlign(LEFT);
    text("Find the exit!", 20, 30);
}
} // End of draw()

function mousePressed()
{
    if (mouseX >= 0 && mouseX < width &&
        mouseY >= 0 && mouseY < height)
    {
        mouseObstacleX = mouseX;
        mouseObstacleY = mouseY;
        showMouseObstacle = true;
    }
}

