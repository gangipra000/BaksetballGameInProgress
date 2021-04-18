var movingBasketball, movingBasketballImg;
var basketballHoop,basketballHoopImg;
var star, starImg;
var crowd,crowdImg;
var spike,spikeImg;
var flotingFloor,floatingFloorImg;
var brickwall, brickwallImg;

function preload(){
  movingBasketballImg = loadImage("moving basketball.gif");
  basketballHoopImg = loadImage("basketball hoop.png");
  starImg = loadImage("star.gif");
  crowdImg = loadImage("cheering background.gif");
  spikeImg = loadImage("spike obstacle.png");
  floatingFloorImage = loadImage("floating floor.png");
  brickwallImg = loadImage("brick wall.jpg");
}

function setup(){
  createCanvas(displayWidth-20,displayHeight-30);
  crowd = createSprite(displayWidth/4,displayHeight/4);
  crowd.addImage(crowdImg);
  crowd.scale = 1.3;

  brickwall = createSprite(displayWidth,displayHeight-100);
  brickwall.addImage(brickwallImg);
}

function draw(){
  background("white");

drawSprites();
}