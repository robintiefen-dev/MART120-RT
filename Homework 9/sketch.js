function setup()
{
    createCanvas(400,500);
}
function draw()
{   
    background(220);
    
    //arms
    stroke(0);
    strokeWeight(1);
    fill(255, 205, 170);
    quad(105, 380, 140, 390, 135, 450, 110, 450);

    stroke(0);
    strokeWeight(1);
    fill(255, 205, 170);
    quad(260, 390, 295, 380, 290, 450, 265, 450);

    //torso
    stroke(0);
    strokeWeight(1);
    fill('maroon');
    rect(140, 340, 120, 100, 15);
    quad(140, 345, 115, 350, 105, 380, 140, 390);
    quad(260, 345, 285, 350, 295, 380, 260, 390);

    //neck
    stroke(0);
    strokeWeight(1);
    fill(255, 205, 170);
    rect(180, 280, 40, 60);


    //tshirt neckline
    noFill();
    stroke(0);
    fill(255, 205, 170);
    strokeWeight(2);
    arc(200, 340, 40, 20, 0, PI);

    //tshirt neckline
    noFill();
    stroke(0);
    fill(255, 205, 170);
    strokeWeight(2);
    arc(200, 340, 40, 20, 0, PI);

    //triangletree
    fill('brown');
    stroke(0);
    strokeWeight(1);
    rect(195, 405, 10, 15);
    fill('green');
    stroke(0);
    strokeWeight(1);
    triangle(200, 380, 180, 410, 220, 410);
    triangle(200, 365, 190, 385, 210, 385);
    
    //hair
    stroke(0);
    strokeWeight(1);
    fill(255, 215, 80);
    ellipse(105, 240, 45, 220);
    ellipse(295, 240, 45, 220);
    ellipse(200, 145, 210, 130);
    
    //ears
    stroke(0);
    strokeWeight(1);
    fill(255, 205, 170);
    ellipse(100, 200, 20, 40);
    ellipse(300, 200, 20, 40);

    //face
    stroke(0);
    strokeWeight(1);
    fill(255, 205, 170);
    circle(200, 200, 200);

    //blonde bangs
    stroke(0);
    strokeWeight(1);
    fill(255, 215, 80);
    arc(200, 100, 150, 100, 0, PI, CHORD);
        
    //eyebrows
    stroke(0);
    strokeWeight(3);
    noFill();
    arc(175, 160, 30, 12, PI, TWO_PI);
    arc(225, 160, 30, 12, PI, TWO_PI);

    //eyes
    fill('white');
    circle(175, 175, 20);
    circle(225, 175, 20);

    //pupils
    strokeWeight(10);
    stroke('blue');
    point(175, 175);
    point(225, 175);

    //nose
    stroke(0);
    strokeWeight(2);
    line(200, 190, 195, 225);
    line(195, 225, 210, 225);

    //lips
    noFill();
    stroke('red');
    strokeWeight(6);
    arc(200, 240, 50, 30, 0, PI);

   //portrait text
   fill(0);
   noStroke();
   textSize(24);
   textAlign(CENTER);
   text("Robin's Self Portrait", 200, 40);

    //signature
    fill(0);
    noStroke();
    textSize(16);
    textAlign(RIGHT);
    text("Robin Tiefenthaler", 390, 480);

}
