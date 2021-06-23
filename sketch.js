const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var ground;
var dustbin;
var rect1,rect2,rect3;

var paperball;
function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;

ground=new Ground();
dustbin=new Dustbin(1100,305,140,160);
paperball=new Paperball();

	Engine.run(engine);

	rect1=new Rect(1027,305,10,160);
	rect2=new Rect(1172,305,10,160);
	rect3=new Rect(1100,390,160,10);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(225);


 
ground.display();
dustbin.display();
paperball.display();
rect1.display();
rect2.display();
rect3.display();


drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:1400,y:-700})
	
}
}


