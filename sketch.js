
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var dust1,dust2,dust3;

function preload()
{
	
}

function setup() {
	createCanvas(1370, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,310,40);
	ground1 = new Ground(width/2,370,1370,10)
	dust3 = new Dustbin(1200,355,150,15)
	dust1 = new Dustbin(1280,280,15,150)
	dust2 = new Dustbin(1120,280,15,150)

	Engine.run(engine);
  
}


function draw() {
 
  background("black");
  keyPressed();
  paper1.display();
  ground1.display();
  dust1.display();
	dust2.display();
  dust3.display();
  drawSprites();
 
}
	function keyPressed(){
		if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:3.5,y:-3.5})
		}



	}


