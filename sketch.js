
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	;
var dustbinImage;
var world;
var paperball;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperball = new Paper(200,450,70)
	
	

	Engine.run(engine);
  
}


function draw() { 
	rectMode(CENTER); 
	background(230); 
	groundObject.display(); 
	dustbinObj.display();
	 paperball.display();
	  drawSprites();
	 } 
	 function keyPressed() {
		  if (keyCode === UP_ARROW) {
			   Matter.Body.applyForce(paperball.body,paperball.body.position,{x:130,y:-145}); 
			} 
		}

