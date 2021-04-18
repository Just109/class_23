var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	leftBody = Bodies.rectangle(200,620,30,100,{isStatic:true});
	World.add(world, leftBody);
	rightBody = Bodies.rectangle(550,620,30,100,{isStatic:true});
	World.add(world, rightBody);
	bottomBody = Bodies.rectangle(385,650,350,50,{isStatic:true});
	World.add(world, bottomBody);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width,10,{isStatic:true} );
 	World.add(world, ground);
	 packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	 World.add(world, packageBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  background(0);
  fill("red");
  rect(leftBody.position.x,leftBody.position.y,30,100);
  rect(rightBody.position.x,rightBody.position.y,30,100);
  rect(bottomBody.position.x,bottomBody.position.y,350,20);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody,false) 

    
  }
}