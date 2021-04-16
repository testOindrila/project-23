var helicopterIMG, helicopterSprite;
var packageSprite,packageIMG;
var packageBody,ground;
var line1 , line2 , line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() 
{
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
    
	line1 = createSprite(width/2 , height-50 , 200 , 20);
	line1.shapeColor = "red";

	line2 = createSprite(510 , 610 , 20 , 100);
	line2.shapeColor = "red";

	line3 = createSprite(310 , 610 , 20 , 100);
	line3.shapeColor = "red"; 

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw()
{
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite.collide(line1);
  packageSprite.collide(line2);
  packageSprite.collide(line3);

  keyPressed();
  drawSprites();
}


function keyPressed()
{
	if(keyCode === DOWN_ARROW)
	{
		Matter.Body.setStatic(packageBody,false);
	}
	if(keyCode === LEFT_ARROW)
	{
		helicopterSprite.x = helicopterSprite.x-20;
		Matter.Body.translate(packageBody,{x:-20,y:0});
	}
	if(keyCode === RIGHT_ARROW)
	{
		helicopterSprite.x = helicopterSprite.x+20;
		Matter.Body.translate(packageBody,{x:-20,y:0});
	}
}
