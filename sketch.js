var car,wall;

var speed,weight;

function setup() {
  createCanvas(1200,400);

  car = createSprite(50,200,50,50);

  wall = createSprite(1100,200,60,height/2);
  
  speed=random(30,55);
  weight=random(400,1100)
}

function draw() {
  background(0);  

  if(car.x-wall.x<wall.width/2+car.width/2 && wall.x-car.x<car.width/2+wall.width/2){
    car.collide(wall);
  }

  car.velocityX=speed;

  drawSprites();
}

