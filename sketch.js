const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ground, monster, hero;

function preload() {
//preload the images here
   bg = loadImage("images/GamingBackground.png");

}

function setup() {
  var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
  // create sprites here
   ground = new GROUND(500, 600, 2000, 20);
   hero = new HERO(400, 400, 500, 200);
   monster = new MONSTER(1200, 400, 200, 200);
   b1 = new box(1000,100,70,70);
    b2 = new box(1000,100,70,70);
    b3 = new box(1000,100,70,70);
    b4 = new box(1000,100,70,70);
    b5 = new box(900,100,70,70);
    b6 = new box(900,100,70,70);
    b7 = new box(800,100,70,70);
    b8 = new box(800,100,70,70);
    b9 = new box(800,100,70,70);
    b10 = new box(800,100,70,70);
    b11 = new box(800,100,70,70);
    b12 = new box(700,100,70,70);
    b13 = new box(700,100,70,70);
    b14 = new box(700,100,70,70);

  


}

function draw() {
  background(bg);
  Engine.update(engine);
  
   ground.display();
   hero.display();
   monster.display();
   b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}
