var shipImg,ship,seaImage,sea;
function preload() {
  
 shipImg=loadAnimation("ship-1.png", "ship-2.png") 
 seaImage=loadImage("sea.png") 

}
function setup() {
  createCanvas(400,400);
  
  sea=createSprite(400,200);
  sea.addImage(seaImage)
  sea.scale=0.2

  ship=createSprite(70,180,20,20)
  ship.addAnimation("ship",shipImg)
ship.scale=0.25

}

function draw() {
  
  background(0)
  sea.velocityX=-2;
 
if (sea.x < 0) {
  sea.x = sea.width / 8;
}

drawSprites() 
  
}  