
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, ballObject,groundObject	
var world;


function setup() {
	createCanvas(1300, 670);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj = new dustbin(1200,650);
	ballObject = new ball(200,450,30);
	groundObject = new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  ballObject.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:46,y:-47});
    
  	}
}





