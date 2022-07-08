var bg,bgImg;
var player, shooterImg, shooter_shooting;
var heart1,heart2,heart3;
var heart_1,heart_2,heart_3;
 var zombie , zombie_1;



function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
   heart_1 = loadImage("assets/heart_1.png")
   heart_2 = loadImage("assets/heart_2.png")
   heart_3 = loadImage("assets/heart_3.png")
   
  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   heart1 = createSprite(displayWidth -100, 50,1,1);
heart1.visiable = false;
heart1.addImage("heart_1",heart_1);
heart1.scale = 0.2;


heart2 = createSprite(displayWidth- 80,50,1,1);
heart2.visiable = false;
heart2.addImage("heart_2",heart_2);
heart2.scale = 0.2;

heart3 = createSprite(displayWidth - 60,50,1,1);
heart3.visiable= false;
heart3.addImage("heart_3",heart_3);
heart3.scale = 0.2;

zombieGroup = new(Group);




}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-20
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+20
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

spawnzombie();

drawSprites();

}


function  spawnzombie(){
  if(frameCount % 60 === 0) {
var zombie = createSprite(500,150,10,10);
   zombie.y  = Math.round(ramdom(80,150));
    zombie.addImage( zombie_1);
    zombie.scale = 0.5;
   zombie.velocityX = -5;

    

    zombieGroup.add(zombie);
  }
}