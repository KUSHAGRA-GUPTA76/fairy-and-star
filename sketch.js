var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var gameState = 1


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	fairyHand = createSprite(130,520,10,10)
	fairyHand.visible = false

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.velocityY=1

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 50, {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  if(gameState===1){
if(keyDown(LEFT_ARROW)){
	fairy.x=fairy.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
	  fairy.x=fairy.x+10;
  }
}else{

}

  if(star.isTouching(fairyHand)){
   	star.velocityY=0
	gameState=2
	fairyVoice.play();
  }

  fairyHand.x=fairy.x+130
  fairyHand.y=fairy.y

  drawSprites();

}

function keyPressed() {
/*	if(keyDown(LEFT_ARROW)){
      fairy.x=fairy.x-10;
    }
    else if(keyDown(RIGHT_ARROW)){
		fairy.x=fairy.x+10;
    }*/

}
