class Food{

    constructor(){
        this.image = loadImage("Milk.png");
    }
    display(){
        
    }      

getFoodStock(){
    var foodRef = database.ref('food');
    foodRef.on("value",(data)=>{food = data.val();})
}
updateFoodStock(count){
    database.ref('/').update({
        food: count
      });
}
deductFood(){
    food-=1
    database.ref('/').update();
}
};