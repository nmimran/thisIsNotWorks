
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground,Trash,dustbinObj;

function setup() {
	createCanvas(1200, 350);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,300,1200,20);
	Trash = new Paper(200,450,70);
	
	dustbinObj=new dustbin(900,275);

	Engine.run(engine);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	
}
function draw() {
  rectMode(CENTER);
  background('black');
  ground.display();
  Trash.display();
  dustbinObj.display();

  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  
		Matter.Body.applyForce(Trash.body,Trash.body.position,{x:30,y:-30});

	}
} 
