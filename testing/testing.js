const DEBUG = 0;

const groundBrown = "#5c2202";
const groundGreen = "#008013";
const skyColor = '#1ec7fa';

const offset = 50;

const moveSpeed = 4;
const drawNewScreenPercent = 0.05

const parentDiv = "main";

// -1 to remove the scroll bar
const clientHeight = document.getElementById("body").clientHeight-1;
const clientWidth = document.getElementById("body").clientWidth-1;

let playerX;
let playerY;

let scenesIndex = 0;

let niceTrybuddy = 0;
let genNewRepsonse = 1;

let caveImgScale = 1.5;
let playerImgScale = 11.5;

var introTxt = "This self aware text-based adventure game prompted the player to make a decision:\n\n should they continue forward into the dangerous cave system or turn around and hightail it out of here?\n\n The player chose to take their chances and go forward.\n\n Step 1) figure out how to move.\n Step 2) Adventure!" 

const scenes = [
    "intro",
    "highschool",
    "indianaState",
    "covid",
    "illinoisState",
    "nowWhat"
];

function setup() {

    var width = screen.width;
    var height = screen.height;  

    resetPlayerLocation();

    caveImg = loadImage('/assets/dist/img/cave2.png'); // Load the image
    // playerImg = loadImage('/assets/dist/img/player.png');

    shapeShifterAni = loadAnimation(
		'/assets/dist/img/playerImgs/forward11.png',
		'/assets/dist/img/playerImgs/forward22.png',
		'/assets/dist/img/playerImgs/forward33.png',
		'/assets/dist/img/playerImgs/forward44.png',
		'/assets/dist/img/playerImgs/forward55.png',

	);

	shapeShifterAni.frameDelay = 6;


    //draw canvas if not on a mobile device
    if(width > 600){
        // makes the main canvas and sets background color
        var myCanvas = createCanvas(clientWidth,clientHeight);
        myCanvas.parent(parentDiv);
        background(skyColor);
    } else{
        // screen to small
        alert("screen is too small for now. sorry");
    }
}







// the main loop
function draw() {
    
    // clear the backgound to redraw everything
    background(skyColor);
    
    // if a key is pressed, update the players location then draw again
    if (keyIsPressed === true) { 
        updatePlayerLocation();
    }
    drawPlayer();
    
    if(scenesIndex === 0){
        
        // if the player did not go forward on first screen
        if(niceTrybuddy){
            drawNiceTrybuddy();
        } else {
            drawIntro();
        }
    } 
    
    else if (scenesIndex === 1){
        drawHighschool();
    } 
    
    else if (scenesIndex === 2){
        drawIndianaState();
    } 
    
    else if (scenesIndex === 3){
        drawCovid();
    } 
    
    else if (scenesIndex === 4){
        drawIllinoisState();
    } 
    
    else if (scenesIndex === 5){
        drawNowWhat();
    }
    
    // player at the farthest right, draw next screen in list 
    if (playerX > (width - (width * drawNewScreenPercent)) ){
        scenesIndex +=1;
        resetPlayerLocation();
    }
    
    // player at the farthest left, draw previous screen in list 
    if (playerX < (width * (drawNewScreenPercent/5))){
        scenesIndex -=1;
        resetPlayerLocation();
    }
    
    // dont let the scenesIndex go below 0
    if (scenesIndex < 0){
        scenesIndex = 0;
        niceTrybuddy = 1;
        genNewRepsonse = 1;
    }

    // dont let the scenesindex go above the length of the array
    if (scenesIndex > scenes.length-1){
        scenesIndex = scenes.length-1
    }

    animation(shapeShifterAni, playerX, playerY);


    if (DEBUG){
        console.log("playerX: " + playerX + "    " + "playerY: " + playerY);
        console.log("scense array length: ", scenes.length-1)
        console.log("scenesIndex: ", scenesIndex);
        }
    }







function drawGround(){
    
    //removes black border on rect 
    noStroke();    

    // draws dirt
    fill(groundBrown);
    rect(width, height, -width, -50);

    // draws grass
    fill(groundGreen);
    rect(width, height-offset, -width, -50);
}



function drawPlayer(){
        rect(playerX, playerY, 50, 50);
        // image(playerImg, 50, 50, playerImg.width * playerImgScale, playerImg.height * playerImgScale);
        
}



function updatePlayerLocation(){
    // move up
    if (kb.pressing("up")) {
        playerY -= moveSpeed;
    }

    // // move down
    if (kb.pressing("down")) {
        playerY += moveSpeed;
    }
    
    // move left
    if (kb.pressing("left")) {
        playerX -= moveSpeed;
    }

    // move right
    if (kb.pressing("right")) {
        playerX += moveSpeed;
    }
}



function resetPlayerLocation(){
    playerX = clientWidth * 0.2;
    playerY = clientHeight * 0.8;
}



function drawIntro(){
    drawGround();
    textSize(height/20);
    textAlign(CENTER);
    text(introTxt, 40,50,width-(width*0.1),height/1.2)
    image(caveImg, width-(caveImg.width*(caveImgScale-0.4)), height-(caveImg.height *(caveImgScale*1.66)) , caveImg.width * caveImgScale, caveImg.height * caveImgScale);

};

function drawNiceTrybuddy(){
    drawGround();
    let responsses = [
        "The text-based adventure game had grown tired of players who always took the easy route. As the player tried to cheat their way through a particularly difficult puzzle, the game responded with a snarky comment: 'Nice try, but you can't outsmart me that easily.'",
        "The text-based adventure game is not as dumb as you think it is. you better not keep this up or else there will be dire consequences to come latter on.",
        "Oh, I see you've decided to go off the beaten path in the text-based adventure. How original. It's not like thousands of other players haven't already tried that.",
        "Oh look, the player thinks they're smarter than the game. How adorable. I'm sure you'll be the first one to figure out this impossible puzzle by ignoring all the clues.",
        "Congratulations on not following the rules in the text-based adventure. You're a real trailblazer. Maybe you can write a book about it and sell it to all the other players who think they're being unique.",
        "You're breaking all the rules in the text-based adventure? I'm sure the game is quaking in fear at your innovative approach. Keep up the good work.",
        "Ah, I see you're not content to follow the path laid out for you in the text-based adventure. You must be one of those people who always has to be different.",
        "Congratulations on ignoring all the helpful tips and hints in the text-based adventure. At least you can figure out how to move, unlike some others.",
        "So you're not following the rules in the text-based adventure. That's great, because rules are for losers. Who needs structure and logic when you have pure unbridled chaos?"
    ]
    if (genNewRepsonse){
        introTxt = responsses[Math.floor(Math.random()*responsses.length)];
        genNewRepsonse = 0;
    }
    textSize(width/32);
    textAlign(CENTER);
    text(introTxt, 40,50,width-(width*0.1),height/2)
    image(caveImg, width-(caveImg.width*(caveImgScale-0.4)), height-(caveImg.height *(caveImgScale*1.66)) , caveImg.width * caveImgScale, caveImg.height * caveImgScale);


};


function drawHighschool(){

}


function drawIndianaState(){

}


function drawCovid(){

}


function drawIllinoisState(){

}

function drawNowWhat(){

}

