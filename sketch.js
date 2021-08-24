const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var stones = []



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  base = new Base(width/2, height/2 + 300, width, 20)
	rightSide = new Base(width-10, 600, 20, height )
	leftSide = new Base(10, 600, 20, height)
  bridge = new Bridge(15, { x: width / 2 - 400, y: height / 2 });
  jointPoint = new Base(width - 600, height / 2 + 10, 40, 20, "#8d6e63", true);
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  

}

function draw() {
  background(51);
  base.show()
  rightSide.show()
  leftSide.show()
  bridge.show()
  for(var i = 0; i<=7; i++){
    var x =  random(width/2-400, width/2-10)
    var y = height/2
    var stone = new Stone(x, y)
    stones.push(stone)
    stones[i].display() 
  }
  Engine.update(engine);

}
