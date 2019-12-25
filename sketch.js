var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;

function setup() {
  createCanvas(1200,1200);
  sun = createSprite(500,500,90,90);
  sun.setColor = "orange";
  sun.setCollider("circle");
  sprite.debug = true;

  mercury = createSprite(610,500,40,20);
  mercury.setColor = "grey";

  venus = createSprite(670,500,50,25);
  venus = createSprite = "yellow";

  earth = createSprite(740,500,50,25);
  earth.setColor = "teal";
  
  mars = createSprite(810,500,55,30);
  mars.setColor = "red";

  jupiter = createSprite(905,500,70,40);
  jupiter.setColor = "white";

  saturn = createSprite(995,500,65,35);
  saturn.setColor = "mustard";

  uranus = createSprite(1080,500,60,30);
  uranus.setColor = "lightblue";

  neptune = createSprite(1160,500,60,30);
  neptune.setColor = "darkblue";
}

function draw() {
  background(0); 
  move();
  incinerate(); 
  drawSprites();
}