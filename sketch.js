const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundSnow
var snowflakes = []

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  
  backgroundSnow = loadImage("snow1.jpg")
  

}

function draw() {
  //background(255,255,255); 
  background(backgroundSnow)
  Engine.update(engine);

 for (var p = 0; p < snowflakes.length; p++) {
  snowflakes[p].display();
 }

  if(frameCount%20===0) {
     snowflakes.push(new Snow(random(20, 780), 0, 50, 50))
  }
  

  drawSprites();
}