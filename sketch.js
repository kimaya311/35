//Create variables here
var dog,happyDog,database,foodS,foodStock;

var feed,addFood;
var food;
var foodStock;
var lastFed;
function preload()
{
  //load images here
dog_image = loadImage("dogImg.png");
happyDog  = loadImage("dogImg1.png");
}
          
function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,40,40);
  dog.scale =0.2;
  dog.addImage("dog",dog_image);
  dog.addImage("doggy",happyDog);
  database = firebase.database();
  foodStock =database.ref('food');
  foodStock.on("value",readStock);

food =new Food();
  feed = createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}

function draw() {  
background(46,139,87);
food.display();
fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
lastFed=data.val();
});
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}

function addFoods(){
foodS++;
database.ref('/').update({
});
}

function feedDog(){
  dog.addImage(happyDog);

  food.updateFoodStock(food.getFoodStock()-10);
  database.ref('/').update({
    Food: food.getFoodStock(),
    FeedTime: hour()

  })
}


