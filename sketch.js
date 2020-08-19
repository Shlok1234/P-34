var dog, happyDog, normalDog, database, foodS, foodStock;

function preload()
{
  happyDog = loadImage("images/dogImg1.png");
  normalDog = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  var dog = createSprite(250,250,30,30);
}

function draw() {  
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)){
    foodStock = foodStock - 1;
    dog.addImage(happyDog);
  }
  dog.addImge(normalDog);
  drawSprites();
  //add styles here

}



