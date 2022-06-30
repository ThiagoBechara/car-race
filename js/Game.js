class Game {
  constructor() {

    this.resetTitle=createElement("h2");
    this.resetButton=createButton("");

    this.leadeboardTitle = createElement("h2");

    this.leader1 = createElement("h2")
    this.leader2 = createElement("h2")
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) { 
    database.ref("/").update({ 
      gameState: state });
     }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    car1 = createSprite(width / 2 - 50, height - 50);
    car1.addImage("car1", car1Img);
    car1.scale = 1;
    car2 = createSprite(width / 2 + 100, height - 50);
    car2.addImage("car2", car2Img);
    car2.scale = 1;
    cars = [car1, car2];
  }
handleElements(){

form.hide();
form.titleImg.position(40,50);
form.titleImg.class("gameTitleAfterEffect");

this.resetTitle.html("reiniciar jogo")
this.resetTitle.class("resetText")
this.resetTitle.position(width/2+200,40)

this.resetButton.class("resetButton")
this.resetButton.position(width/2+230,100)

this.leadeboardTitle.html("Placar")
this.leadeboardTitle.class("resetText")
this.leadeboardTitle.position(width/3-60,80)

//this.leader1.html("Jogador1:" + player)
this.leader1.class("leadersText")
this.leader1.position(width/3-80,100)

//this.leader2.html("Jogador2:" + player)
this.leader2.class("leadersText")
this.leader2.position(width/3-80,250)


}
handlePlayerControls(){

if (keyIsDown (UP_ARROW)){

player.positionY+=10;
player.update();

}
if (keyIsDown (DOWN_ARROW)){

  player.positionY-=10;
  player.update();
  
  }
if (keyIsDown (RIGHT_ARROW)){

  player.positionX+=10;
  player.update();
  
  }
if (keyIsDown (LEFT_ARROW)){

    player.positionX-=10;
    player.update();
    
    }

}
play() { 
  this.handleElements();  
  Player.getPlayerInfo();
  if (allPlayers !== undefined) {
  image(track, 0, -height * 5, width, height * 6);
  var index=0;
  for (var plr in allPlayers){

  index=index+1;
  var x = allPlayers[plr].positionX
  var y = height-allPlayers[plr].positionY
  cars[index - 1].position.x = x; 
  cars[index - 1].position.y = y;
  camera.position.y = cars[index - 1].position.y;

  }
  this.handlePlayerControls();
  drawSprites(); 
}
 }

 showLeaderboard(){

var leader1, leader2;
var players=Object.values(allPlayers);
if((players[0].rank === 0 && players[1].rank === 0) || players[0].rank === 1){

  leader1 =
  players[0].rank +
  "    " +
  players[0].name +
  "    " +
  players[0].score;

leader2 =
  players[1].rank +
  "    " +
  players[1].name +
  "    " +
  players[1].score;

}

if(players[1].rank === 1){

  leader1 =
  players[1].rank +
  "    " +
  players[1].name +
  "    " +
  players[1].score;

leader2 =
  players[0].rank +
  "    " +
  players[0].name +
  "    " +
  players[0].score;

}

this.leader1.html(leader1);
this.leadeer2.html(leader2);

 }

}
