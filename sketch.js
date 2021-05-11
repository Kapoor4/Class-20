var fixed, moving;
var moving2, moving3;

function setup() {
  createCanvas(800,400);

  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor = "blue";

  moving = createSprite(500, 200, 50, 20);
  moving.shapeColor = "blue";

  moving2 = createSprite(300, 250, 50, 50);
  moving2.velocityX = 2;
  moving2.shapeColor = "red";

  moving3 = createSprite(500, 250, 50, 50);
  moving3.velocityX = -2;
  moving3.shapeColor = "white";

}

function draw() {
  background(0); 

  moving.x = mouseX;
  moving.y = mouseY
  
  if(moving.x-fixed.x < fixed.width/2+moving.width/2 && fixed.x-moving.x < fixed.width/2+moving.width/2
    && moving.y-fixed.y < fixed.height/2+moving.height/2 && fixed.y-moving.y < fixed.height/2+moving.height/2
    ){
    moving.shapeColor = "purple";
    fixed.shapeColor = "purple";
  }

  else{
   
    fixed.shapeColor = "blue";
    moving.shapeColor = "blue";
  }

  if(moving2.x-moving3.x < moving3.width/2+moving2.width/2 && moving3.x-moving2.x < moving3.width/2+moving2.width/2){
   
    moving2.velocityX = moving2.velocityX*(-1);
    moving3.velocityX = moving3.velocityX*(-1);
  }


  drawSprites();
}