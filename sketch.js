var ground;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=250;

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

	ground = new Ground(400,645,900,10);
	
	for(var i = 0; i<=width; i = i +120){
        divisions.push(new Division(i, height-divisionHeight/2, 5,divisionHeight));
	  }
	  
	for (var r =25; r <=width; r=r+50){
		plinkos.push(new Plinko(r,75));
	}

	for (var r =10; r <=width-10 ; r=r+50){
		plinkos.push(new Plinko(r,175));
	}

	for (var r =20; r <=width-10 ; r=r+50){
		plinkos.push(new Plinko(r,275));
	}

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  for(var i = 0; i< divisions.length; i++){
  	 divisions[i].display();
   }

   for(var r=0; r<plinkos.length; r++){
	   plinkos[r].display();
   }

   if(frameCount%60===0){
	particles.push(new Particle(random(width/2-10,width/2+10),10,10));
   }
   
   for(var k=0; k<particles.length; k++){
	particles[k].display();
} 
  


  ground.display();
  

  drawSprites();


 
}



