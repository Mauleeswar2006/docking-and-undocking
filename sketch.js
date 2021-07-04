var iss,spaceCraft;
var hasdocked=false;
var iss_Img,spaceCraft_Img,spaceCraft1_Img,spaceCraft2_Img,spaceCraft3_Img;
var PLAY=0;
var End;
var gameState=PLAY;

function preload(){
  iss_Img=loadImage("iss.png");
  spaceCraft_Img=loadImage("spacecraft1.png");
  spaceCraft1_Img=loadImage("spacecraft2.png");
  spaceCraft2_Img=loadImage("spacecraft3.png");
  spaceCraft3_Img=loadImage("spacecraft4.png");
  background_Img=loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 200, 50, 50);
  iss.addImage("Img",iss_Img);
  iss.setCollider("circle",-65,35,3);
  iss.debug=true
  spaceCraft=createSprite(380,300,40,30);
  spaceCraft.addImage("Img",spaceCraft_Img);
  spaceCraft.scale=0.15;
  spaceCraft.setCollider("circle",0,-200,5);
  spaceCraft.debug=true;
}

function draw() {
  background(background_Img);  
  if(gameState===PLAY){
  if(!hasdocked){
    if(keyWentDown(LEFT_ARROW)){
      spaceCraft.addImage("Img",spaceCraft2_Img);
      spaceCraft.velocityX=-5;
    }
    if(keyWentDown(RIGHT_ARROW)){
      spaceCraft.addImage("Img",spaceCraft3_Img);
      spaceCraft.velocityX=5;
    }
    if(keyWentDown(UP_ARROW)){
      spaceCraft.velocityY=-5;
    }
    if(keyWentDown(DOWN_ARROW)){
      spaceCraft.addImage("Img",spaceCraft1_Img);
    }
    if(keyWentUp(LEFT_ARROW)){
      spaceCraft.addImage("Img",spaceCraft_Img);
      spaceCraft.velocityX=0
    }
    if(keyWentUp(RIGHT_ARROW)){
      spaceCraft.addImage("Img",spaceCraft_Img);
      spaceCraft.velocityX=0;
    }
    if(keyWentUp(UP_ARROW)){
      spaceCraft.velocityY=0
    }
    if(keyWentUp(DOWN_ARROW)){
      spaceCraft.addImage("Img",spaceCraft_Img);
    }
 
  if(spaceCraft.isTouching(iss)){
    gameState=End
  }
}
  }
if (gameState===End){
  hasdocked=true;
  fill("yellow");
  textSize(30);
  text("Docking Completed",300,370);
  spaceCraft.velocityX=0;
  spaceCraft.velocityY=0;
}
  drawSprites();
}
