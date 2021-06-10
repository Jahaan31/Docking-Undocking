var iss 
var spacecraft 
var hasDocked = false;

function preload(){
  ISS = loadImage("Docking-undocking/iss.png")
  bg = loadImage("Docking-undocking/spacebg.jpg")
  spacecraft1 = loadImage("Docking-undocking/spacecraft1.png")
  spacecraft2 = loadImage("Docking-undocking/spacecraft2.png")
  spacecraft3 = loadImage("Docking-undocking/spacecraft3.png")
  spacecraft4 = loadImage("Docking-undocking/spacecraft4.png")
}

function setup() {
  createCanvas(1000,600);
  iss = createSprite(500, 250, 50, 50);
  iss.addImage(ISS) 
  iss.scale = 0.7

  spacecraft = createSprite(500, 500, 50, 50);
  spacecraft.addImage(spacecraft1) 
  spacecraft.scale = 0.3
}

function draw() {
  background(bg); 
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + (random(-1,1));
    if(keyDown("LEFT")){
      spacecraft.addImage(spacecraft3) 
      spacecraft.x = spacecraft.x - 5 
    }
    if(keyDown("RIGHT")){
      spacecraft.addImage(spacecraft4) 
      spacecraft.x = spacecraft.x + 5 
    }
    if(keyDown("DOWN")){
      spacecraft.addImage(spacecraft2) 
    }
    if(keyDown("UP")){
      spacecraft.y = spacecraft.y - 5 
    }
    }

    if(spacecraft.y <= iss.y+120 && spacecraft.x <= iss.x - 30 ){
      hasDocked = true
      fill("white")
      textSize(30)
      text("Docking Successful", 100, 100)
      spacecraft.velocityX = 0
      spacecraft.velocityY = 0
    }

    console.log("spacecraft: "+spacecraft.x + ", "+spacecraft.y)
    console.log("iss: "+iss.x + ", "+iss.y)

  drawSprites();
}
//s.y>430 && s.y<450