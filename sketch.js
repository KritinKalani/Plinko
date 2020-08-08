const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Engine = Matter.Engine;
const World = Matter.World;

var divisionHeight = 300;

var division = [];
var plinko = [];
var particles = []; 

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //plinko = new Plinko(300,200);

  ground = new Ground();

  Engine.run(engine);

  for(var p = 25; p < 480; p = p+60){
    plinko.push(new Plinko(p,75));
  }

  for(var p = 10; p < 480; p = p+60){
    plinko.push(new Plinko(p,130));
  }

  for(var p = 25; p < 480; p = p+60){
    plinko.push(new Plinko(p,185));
  }

  for(var p = 10; p < 480; p = p+60){
    plinko.push(new Plinko(p,240));
  }

  for(var p = 25; p < 480; p = p+60){
    plinko.push(new Plinko(p,295));
  }

  for(var p = 10; p < 480; p = p+60){
    plinko.push(new Plinko(p,350));
  }

  for(var d = 10; d < 480; d = d +75){
    division.push(new Division(d,height-divisionHeight/2,10,divisionHeight));
  }

  /* for(var k = 25; k < 480; k++){
    particle.push(new Particle(k,20,10));
  } */
}

function draw() {
  background(0);  

  console.log(width/2);

  if(frameCount % 30 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),0,10));
  }

  for(var i = 0; i < division.length; i++){
    division[i].display();
  }

  for(var i = 0; i < plinko.length; i++){
    plinko[i].display();
  }

  for(var i = 0; i < plinko.length; i++){
    plinko[i].display();
  }

  for(var i = 0; i < plinko.length; i++){
    plinko[i].display();
  }

  for(var i = 0; i < plinko.length; i++){
    plinko[i].display();
  }

  for(var i = 0; i < plinko.length; i++){
    plinko[i].display();
  }

  for(var i = 0; i < plinko.length; i++){
    plinko[i].display();
  }
  for(var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  //division.display();
//plinko.display();
  ground.display();
  //particle.display();

  //particleDisplay();
  drawSprites();
}

//function particleDisplay(){
  /* if(frameCount % 90 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),200,10));
  }
} */

