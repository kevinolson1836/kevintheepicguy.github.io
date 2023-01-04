let clearbtn;
let strokeBlue;
let strokeRed;
let strokeGreen;
let strokeBlack;

let parentDiv = "collapseExampleMain";

function setup() {

  
  var myCanvas = createCanvas(512,512);
  myCanvas.parent(parentDiv);
  background(200);

  // clear screeen
  clearbtn = createButton('Clear');
  clearbtn.parent(parentDiv);
  clearbtn.style("margin-right: 50px;");
  clearbtn.mousePressed(function (){
    background(200);
  })

  // Blue stroke
  strokeBlue = createButton('Blue');
  strokeBlue.parent(parentDiv);
  strokeBlue.mousePressed(function (){
    stroke(0,0,255);
  })

  // Red stroke
  strokeRed = createButton('Red');
  strokeRed.parent(parentDiv);
  strokeRed.mousePressed(function (){
    stroke(255,0,0);
  })

  // Green stroke
  strokeGreen = createButton('Green');
  strokeGreen.parent(parentDiv);
  strokeGreen.mousePressed(function (){
    stroke(0,255,0);
  })

  // Black stroke
  strokeBlack = createButton('Black');
  strokeBlack.parent(parentDiv);
  strokeBlack.mousePressed(function (){
    stroke(0,0,0);
  })

  // White stroke
  strokeWhite = createButton('White');
  strokeWhite.parent(parentDiv);
  strokeWhite.mousePressed(function (){
    stroke(255,255,255);
  })

}

function draw() {
  if (mouseIsPressed){
    strokeWeight(10);
    line(mouseX,mouseY,pmouseX,pmouseY);
   }
}

