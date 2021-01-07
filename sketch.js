var ground;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(650,650);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,640,900,10);
	
	for(var i = 0; i<=width; i = i +80){
        divisions.push(new Division(i, height-divisionHeight/2, 10,divisionHeight));
	  }
	  
	  for (var r =40; r <=width; r=r+50){
		plinkos.push(new Plinko(r,75));
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 // for(var i = 0; i< divisions.length; i = i ++){
//	 divisions[i].display();
 // }
  


  ground.display();
  

  drawSprites();


 
}



