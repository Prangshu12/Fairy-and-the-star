var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);


  fairy.debug = false; 
  star.debug = false; 
  fairy.setCollider("rectangle",490,-30,60,100);
 star.collide(fairy); 
    keyPressed();
  DropStar();
drawSprites();
}

function keyPressed() {
if(keyDown("D"))
{
fairy.x=fairy.x+5}
if(keyDown("S"))
{
fairy.y=fairy.y+5}
if(keyDown("w"))
{
fairy.y=fairy.y-5;}
if(keyDown("A"))
{
fairy.x=fairy.x-5;}
} 
function DropStar(){
  if(keyDown("D"))
	{star.velocityY=4;}
	if(keyDown("A"))
	{star.velocityY=4;}
	if(keyDown("S"))
	{star.velocityY=4;}
	if(keyDown("W"))
	{star.velocityY=4;}
   if(star.isTouching(fairy)){
	star.velocityY=0;}
}
