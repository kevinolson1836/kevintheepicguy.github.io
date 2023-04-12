const DEBUG = 0;

const groundBrown = "#5c2202";
const groundGreen = "#008013";
const skyColor = '#1ec7fa';

const offset = 50;

const drawNewScreenPercent = 0.05

const parentDiv = "main";

// -1 to remove the scroll bar
const clientHeight = document.getElementById("body").clientHeight;
const clientWidth = document.getElementById("body").clientWidth;

let playerX;
let playerY;

let scenesIndex = 0;

let niceTrybuddy = 0;
let genNewRepsonse = 1;

let caveImgScale = 1.5;
let playerImgScale = 11.5;

let dirtSprite;
let grassSprite;
let playerSprite;

let canJump = 1;
let jumpHeight = 6;
const moveSpeed = 4;
let playerDirection = "right";

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
    
    dirtSprite = new Sprite();
    grassSprite = new Sprite();
    playerSprite = new Sprite(100,400);

    resetPlayerLocation();

    loadCaveImg();

    world.gravity.y = 10;

    playerForwardAinimationFrames = loadAnimation(
		'/assets/dist/img/playerImgs/forward11.png',
		'/assets/dist/img/playerImgs/forward22.png',
		'/assets/dist/img/playerImgs/forward33.png',
		'/assets/dist/img/playerImgs/forward44.png',
		'/assets/dist/img/playerImgs/forward55.png',

	);

    playerBackwardAinimationFrames = loadAnimation(
		'/assets/dist/img/playerImgs/backwards11.png',
		'/assets/dist/img/playerImgs/backwards22.png',
		'/assets/dist/img/playerImgs/backwards33.png',
		'/assets/dist/img/playerImgs/backwards44.png',
		'/assets/dist/img/playerImgs/backwards55.png',

	);

    playerBackwardIdleAinimationFrames = loadAnimation(
		'/assets/dist/img/playerImgs/idlebackwards.png',
	);

    playerForwardIdleAinimationFrames = loadAnimation(
		'/assets/dist/img/playerImgs/idleForward.png',
	);

	playerForwardAinimationFrames.frameDelay = 6;
    playerSprite.addAni("forward",playerForwardAinimationFrames);
    playerSprite.addAni("backwards",playerBackwardAinimationFrames);
    playerSprite.addAni("Idle backwards",playerBackwardIdleAinimationFrames);
    playerSprite.addAni("Idle forwards",playerForwardIdleAinimationFrames);

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
    
    // draw the correct scene
    switch (scenesIndex){
        case 0:
            if(niceTrybuddy){
                drawNiceTrybuddy();
            } else {
                drawIntro(dirtSprite, grassSprite);
            }

        case 1:
            drawHighschool();
        
        case 2: 
            drawIndianaState();

        case 3: 
            drawIllinoisState();

        case 4: 
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



    if (DEBUG){
        console.log("playerX: " + playerX + "    " + "playerY: " + playerY);
        console.log("scense array length: ", scenes.length-1)
        console.log("scenesIndex: ", scenesIndex);
        }
    }


