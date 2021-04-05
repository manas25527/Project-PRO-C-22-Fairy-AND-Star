//creating variable for fairy sprite, star sprite, background Image, star Body, star Image and fairyImg.
var starImg, bgImg, fairyAni, Music;
var star, starBody;
var fairy, fairyBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//Loding the Music, fairy's Animation And Images.
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyAni = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	Music = loadSound("sound/JoyMusic.mp3");
}

function setup()
{
	createCanvas(800, 750);

	Music.play();

	fairy = createSprite(175,550);
	fairy.addAnimation("fairy_flying_ANI",fairyAni);
	fairy.scale = 0.3;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
}


function draw()
{
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 490 && starBody.position.y > 490)
  {
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed()
{

	if (keyCode === DOWN_ARROW)
	{
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyCode === RIGHT_ARROW)
	{
		fairy.x = fairy.x + 10;
	}

	if(keyCode === LEFT_ARROW)
	{
		fairy.x = fairy.x - 10;
	}
	
}
