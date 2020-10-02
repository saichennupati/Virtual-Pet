//Create variables here
var dog; 
var foodStock;
var database;
var foodS

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  doghappyImg = loadImage("images/dogImg1.png");
}

function setup() {

  database = firebase.database();
  
	createCanvas(500, 500);
  dog=createSprite(250,250,20,20);
  dog.addImage(dogImg)
  dog.scale=(0.2)
  
  foodStock=database.ref('Food')
  foodStock.on("value",readStock); 
}


function draw() {  

background(46, 139, 87);


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(doghappyImg)
}

fill("black")
text(foodS,250,100)

text("press to feed the dog",130, 100)



  drawSprites();
  //add styles here

}

function readStock(data){
foodS=data.val();
  
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  
  database.ref('/').update({
    Food:x

    
  })
}