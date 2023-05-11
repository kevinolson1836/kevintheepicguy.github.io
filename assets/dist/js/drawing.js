
let clearbtn;
let strokeBlue;
let strokeRed;
let strokeGreen;
let strokeBlack;


let parentDiv = "collapseExampleMain";

let drawingClassifier;
let modelLoaded = false;
let classifyBtn;
let loopClassify = false;
let loopClassifybtn;
let myCanvas;
let canvasWidth = 560;
let canvasHeight = 560;
let btnWidth = canvasWidth/7;

function setup() {

  var width = screen.width  

  if(width > 600){
    myCanvas = createCanvas(canvasWidth,canvasHeight);
    myCanvas.parent(parentDiv);
    background(200);
  } else{
    // console.log("screen to small for drawing");
    throw new Error("screen to small for drawing");
  }


  

  // Blue stroke
  strokeBlue = createButton('Blue');
  strokeBlue.parent(parentDiv);
  strokeBlue.style(`margin-left: 30px; margin-right: 20px; background-color: blue; color: white; border-radius: 20px; width: ${btnWidth}px`);
  strokeBlue.mousePressed(function (){
    stroke(0,0,255);
  })

  // Red stroke
  strokeRed = createButton('Red');
  strokeRed.parent(parentDiv);
  strokeRed.style(`margin-right: 20px; background-color: red; color: white; border-radius: 20px;; width: ${btnWidth}px`);
  strokeRed.mousePressed(function (){
    stroke(255,0,0);
  })

  // Green stroke
  strokeGreen = createButton('Green');
  strokeGreen.parent(parentDiv);
  strokeGreen.style(`margin-right: 20px; background-color: green; color: white; border-radius: 20px;; width: ${btnWidth}px`);

  strokeGreen.mousePressed(function (){
    stroke(0,255,0);
  })

  // Black stroke
  strokeBlack = createButton('Black');
  strokeBlack.parent(parentDiv);
  strokeBlack.style(`margin-right: 20px; background-color: black; color: white; border-radius: 20px;; width: ${btnWidth}px`);
  strokeBlack.mousePressed(function (){
    stroke(0,0,0);
  })

  // White stroke
  strokeWhite = createButton('White');
  strokeWhite.parent(parentDiv);
  strokeWhite.style(`margin-right: 20px; background-color: white; color: black; border-radius: 20px;; width: ${btnWidth}px; margin: auto`);
  strokeWhite.mousePressed(function (){
    stroke(255,255,255);
  })

  // clear screeen
  clearbtn = createButton('Clear');
  clearbtn.parent(parentDiv);
  clearbtn.style(`background-color: red;color: white; width: ${btnWidth}px; display: block;margin: auto; margin-top: 10px; padding-left: 10px; width: 560px; font-size: 20px`);
  clearbtn.mousePressed(function (){
    background(200);
  })

  drawingClassifier = ml5.imageClassifier('DoodleNet', modelReady);

  // classifyBtn = createButton("Classify!");
  // classifyBtn.style("margin-left: 50px; background-color: green;");
  // classifyBtn.parent(parentDiv);
  // classifyBtn.mousePressed(classifyDrawing);

  // loopClassifybtn = createButton("keep classifying");
  // loopClassifybtn.style("margin-left: 50px; background-color: red;");
  // loopClassifybtn.parent(parentDiv);
  // // loopClassifybtn.mousePressed(function(){
  //   if(loopClassify === true){
  //     loopClassify = false;
  //     loopClassifybtn.style("margin-left: 50px; background-color: red;");
  //   } else {
  //     loopClassify = true;
  //     loopClassifybtn.style("margin-left: 50px; background-color: green;");
  //   }
  // });

}

function classifyDrawing(){ 
  if (modelLoaded){
    drawingClassifier.classify(myCanvas, gotResults);
  }
}

function modelReady(){
  console.log("model loaded :)");
  modelLoaded = true;
}

function gotResults(error, results){
  if(error){
    console.log("error!")
    console.log(error)
  }
  // console.log(results);
  if (results[0].label === "rain"){
    var finalResults = results[1].label;
    var finalResultsConfidence = nf(100*results[1].confidence, 0, 2);
  } else {
    var finalResults = results[0].label;
    var finalResultsConfidence = nf(100*results[0].confidence, 0, 2);
  }

  var header = "I think you made:";
  var answer = finalResults;
  document.getElementById("header").innerHTML = header;
  document.getElementById("answer").innerHTML = answer;
  document.getElementById("percent").innerHTML = finalResultsConfidence + "%";
  
  
}

function draw() {
  if (loopClassify === true){
    classifyDrawing();
  }
  if (mouseIsPressed){
    strokeWeight(20);
    line(mouseX,mouseY,pmouseX,pmouseY);
    loopClassify = true;
   }
}

