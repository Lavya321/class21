var wall,car1,car2,car3;

function setup() {
  createCanvas(1200,800);
  wall = createSprite(600, 150, 50, 400);
  wall.shapeColor = "green";
  wall.debug = true;
 // movingRect = createSprite(400, 800,80,30);
 // movingRect.shapeColor = "green";
 // movingRect.debug = true;

  //movingRect.velocityY = -5;
 // wall.velocityY = +5;

 car1=createSprite(10,100,10,10);
 car2=createSprite(10,200,10,10);
 car3=createSprite(10,300,10,10);
 car1.velocityX=3;
 car2.velocityX=4;
 car3.velocityX=5;
}

function draw() {
  background(0,0,0);  
if(isTouching(car1,wall) ){
  car1.shapeColor="yellow";
  
}
if(isTouching(car2,wall) ){
  car2.shapeColor="purple";
  
}
if(bounce(car3,wall) ){
  car3.shapeColor="red";

  
}
 // bounce();
  drawSprites();
}
