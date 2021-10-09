
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var wall1, wall2;

function setup() {
  createCanvas(500,500);

  ball = createSprite(480,250,20,20);
  wall1 = createSprite(200,250,10,400);
  wall2 =  createSprite(300,250,20,400);

  wall1.velocityY = 10; 
  wall2.velocityY = -10;

  if(keyPressed(SPACE))
  {
    ball.velocity = 10;
  }

  if(ball.isTouching(wall1) || ball.isTouching(wall2))
  {
    ball.visible = false;
  }

  Engine = Engine.create();
  World = Engine.world;
  
}


function draw() 
{
  displaySprites();
  background(51);
  createEdgesSprite;
  Engine.update(Engine);
  
}

//I didn't get a lot of time to finish this, but here is what I have so far