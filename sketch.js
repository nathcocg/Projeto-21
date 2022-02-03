const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	var ballOp = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	 
	ball = Bodies.circle(100,50,10,ballOp);
	World.add(world,ball);

	groundObj = new Ground(400,300,800,15);
	leftSide = new Ground(570,262,8,60);
	rightSide = new Ground(700,262,8,60);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  fill("white");
  ellipse(ball.position.x,ball.position.y,30);
  
  drawSprites();
 
}

function keyPressed (){
	if (keyCode===UP_ARROW){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:1});

	}
}



