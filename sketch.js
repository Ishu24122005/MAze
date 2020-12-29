var rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10,rect11,rect12,rect13;
var rect14,rect15;
var play=1
var gamestate=play
var end=0
var touch=0
var level2=2
function setup() {
  createCanvas(800,400);
  //length
  ball= createSprite(735,370,5,5);
  rect1= createSprite(735,385,40,10);
  rect2= createSprite(750, 200, 10, 360);
  rect3= createSprite(720,230,10,300);
  rect4= createSprite(663,232,10,320);
  rect5= createSprite(735,15,40,10);
  rect6= createSprite(655, 180, 10,360);
  rect7= createSprite(437,380, 350, 10);
  rect8= createSprite(448, 346,300, 10);
  rect9= createSprite(267, 225,10, 300);
  rect10= createSprite(303, 191, 10, 300);
  rect11=createSprite(240,80,60,10);
  rect12=createSprite(260,46,95,10);
  rect13=createSprite(210,63,10,44);
  rect14=createSprite(735,385,40,10);
  rect15=createSprite(735,385,40,10);
  //rotation
  rect4.rotation=20;
  rect6.rotation=20;
  
  
}

function draw() {
  background(0);  

  if(gamestate===play){
    if(keyDown(UP_ARROW)){
      ball.y=ball.y-3
    }
    if(keyDown(DOWN_ARROW)){
      ball.y=ball.y+3
    }
    if(keyDown(RIGHT_ARROW)){
      ball.x=ball.x+3
    }
    if(keyDown(LEFT_ARROW)){
      ball.x=ball.x-3
    }
    
    /*ball.collide(rect1);
    ball.collide(rect2);
    ball.collide(rect3);
    ball.collide(rect4);
    ball.collide(rect5);
    ball.collide(rect6);
    ball.collide(rect7);
    ball.collide(rect8);
    ball.collide(rect9);
    ball.collide(rect10);
    ball.collide(rect11);
    ball.collide(rect12);
    ball.collide(rect13);*/
    if(ball.isTouching(rect1)||ball.isTouching(rect2)||ball.isTouching(rect3)||ball.isTouching(rect4)||ball.isTouching(rect5)||ball.isTouching(rect6)||ball.isTouching(rect7)||ball.isTouching(rect8)||ball.isTouching(rect9)||ball.isTouching(rect10)||ball.isTouching(rect11)||ball.isTouching(rect12)||ball.isTouching(rect13)||ball.isTouching(rect14)||ball.isTouching(rect15)){
      ball.x=735
      ball.y=370
     touch=touch+1
 console.log(touch)
    }
    

    if(touch===10){
      gamestate=end
    }

  }
  else if(gamestate===end){
    textSize(50)
    text("GAMEOVER",400,200)
  
    gamestate=level2;
  
  }
if(gamestate===level2){
  
  
  rect2.x=750
  rect2.y=200
  rect2.width=10
  rect2.height=360
  
  rect3.x=720
  rect3.y=215
  rect3.width=10
  rect3.height=340

  rect4.x=530
  rect4.y=20
  rect4.width=450
  rect4.height=10
  rect4.rotation=0

  rect5.x=550
  rect5.y=50
  rect5.width=340
  rect5.height=10
  
  rect6.x=546
  rect6.y=187
  rect6.width=10
  rect6.height=425
  rect6.rotation=-50

  rect7.x=480
  rect7.y=167
  rect7.width=6
  rect7.height=450
  rect7.rotation=-50

  rect8.x=707
  rect8.y=350
  rect8.width=10
  rect8.height=60
  
  rect9.x=651
  rect9.y=324
  rect9.width=7
  rect9.height=30

  rect10.x=472
  rect10.y=190
  rect10.width=7
  rect10.height=470
  rect10.rotation=-50

  rect11.x=485
  rect11.y=240
  rect11.width=7
  rect11.height=450
  rect11.rotation=-50

  rect12.x=684
  rect12.y=383
  rect12.width=56
  rect12.height=7

  rect13.x=215
  rect13.y=97
  rect13.width=200
  rect13.height=10

  rect14.x=206
  rect14.y=42
  rect14.width=180
  rect14.height=10

  rect15.x=120
  rect15.y=65
  rect15.width=10
  rect15.height=56


  
  if(keyDown(UP_ARROW)){
    ball.y=ball.y-3
  }
  if(keyDown(DOWN_ARROW)){
    ball.y=ball.y+3
  }
  if(keyDown(RIGHT_ARROW)){
    ball.x=ball.x+3
  }
  if(keyDown(LEFT_ARROW)){
    ball.x=ball.x-3
  
  }
  if(ball.isTouching(rect1)||ball.isTouching(rect2)||ball.isTouching(rect3)||ball.isTouching(rect4)||ball.isTouching(rect5)||ball.isTouching(rect6)||ball.isTouching(rect7)||ball.isTouching(rect8)||ball.isTouching(rect9)||ball.isTouching(rect10)||ball.isTouching(rect11)||ball.isTouching(rect12)||ball.isTouching(rect13)||ball.isTouching(rect14)||ball.isTouching(rect15)){
    ball.x=735
  ball.y=370
  touch=touch+1
  }
  if(touch===10){
    gamestate=end
  }
}

  console.log("gamestate"+gamestate)


  drawSprites();

}