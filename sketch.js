//variabili per generazione Gocce e incremento scala
let scaleIncrease = 1.0;
var allMyGocce = [];
var amountOfGocce = 100;
var Gocce;



function preload(){
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(6);
  angleMode(DEGREES);



//istanza creazione Gocce in posizioni e con diametro random
  for(var i = 0; i < amountOfGocce; i++) {
    var tempx = random()*windowWidth;
    var tempy = random()*windowHeight;
    var tempr = random()*10 + 10;//diametro Gocce

    var tempGoccia = new Goccia(tempx, tempy, tempr);
    allMyGocce.push(tempGoccia);
  }

}

function draw() {
  background("black");

  for(var i = 0; i < allMyGocce.length; i++) {
    var tempGoccia = allMyGocce[i];
    tempGoccia.expand();
    tempGoccia.display();
    tempGoccia.color = color(random()*100, random()*50, 255);
  }

}

//creazione oggetto Gocce in espansione
function Goccia (_x, _y, _diameter) {
  this.size = _diameter;
  this.x = _x;
  this.y = _y;
  noStroke();
  this.color = "white";

  var sizeIncrease = 2;

  this.expand = function() {
    if (frameCount <= 250 ) {
      this.size += sizeIncrease;
    }
    else {
      this.size -= sizeIncrease;
    }
    if (frameCount == 500) {
      frameCount = 0;
    }
  }

  this.display = function() {
    push();
    fill(this.color);
    for (var i = 0; i < 3; i++) {
      ellipse(this.x, this.y, this.size + i*2 + 1*2,);
    }
    pop();
  }
}
