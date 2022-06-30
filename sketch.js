var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var track, car1, car2, car3, car4, car1Img, car2Img, car3Img, car4Img;
var cars=[]
var resetImg

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  track=loadImage("./assets/PISTA.png");
  car1Img=loadImage("./assets/car1.png");
  car2Img=loadImage("./assets/car2.png");
  car3Img=loadImage("./assets/car3.png");
  car4Img=loadImage("./assets/car4.png");
  resetImg=loadImage("./assets/reset.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if(playerCount==2){

    game.update(1);

  }
  if(gameState==1){

    game.play();


  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
