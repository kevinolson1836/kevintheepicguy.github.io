const DEBUG = 0;

const groundBrown = "#5c2202";
const groundGreen = "#008013";
const skyColor = '#1ec7fa';


const parentDiv = "main";

// size for the canvas
const clientHeight = document.getElementById("body").clientHeight;
const clientWidth = document.getElementById("body").clientWidth;

// the Index of what scene to draw
let scenesIndex = 0;

// should draw niceTryBuddy and generate a new response on screen
let niceTrybuddy = 0;
let genNewRepsonse = 1;

// sprites defined here
let dirtSprite;
let grassSprite;
let playerSprite;
let caveSprite;

let grassVisualSprite;

// height of the ground
const groundHeight = 75;
// let tempText = '';
let canJump = 1;
let canMoveAgain = 1;
const jumpHeight = 6;
const moveSpeed = 8;
let playerDirection = "right";

let leftCollider;
let rightCollider;
const sideColliderWidth = 10;

const scenes = [
    "intro",
    "highschool",
    "indianaState",
    "covid",
    "illinoisState",
    "nowWhat"
];

// gets called on initial loading and only once 
function setup() {

    var width = screen.width;
    var height = screen.height;  
    
    // assign sprites 
    dirtSprite = new Sprite();
    grassSprite = new Sprite();
    caveSprite = new Sprite(0,100,25,100);
    playerSprite = new Sprite(100,100, 130,110);
    leftCollider = new Sprite();
    rightCollider = new Sprite();

    // place the player in the correct spot
    resetPlayerLocation();
    
    caveBackground = loadImage('/assets/dist/img/cavebackgrond/cavebackground.png');


    // sets world gravity
    world.gravity.y = 10;

    
    // loads animation frames
    playerForwardAinimationFrames = loadAnimation(
		'/assets/dist/img/playerImgs/forward11.png',
		'/assets/dist/img/playerImgs/forward22.png',
		'/assets/dist/img/playerImgs/forward33.png',
		'/assets/dist/img/playerImgs/forward44.png',
		'/assets/dist/img/playerImgs/forward55.png',

	);


    // loads animation frames
    playerBackwardAinimationFrames = loadAnimation(
		'/assets/dist/img/playerImgs/backwards11.png',
		'/assets/dist/img/playerImgs/backwards22.png',
		'/assets/dist/img/playerImgs/backwards33.png',
		'/assets/dist/img/playerImgs/backwards44.png',
		'/assets/dist/img/playerImgs/backwards55.png',

	);


    // loads animation frames
    playerBackwardIdleAinimationFrames = loadAnimation(
		'/assets/dist/img/playerImgs/idlebackwards.png',
	);


    // loads animation frames
    playerForwardIdleAinimationFrames = loadAnimation(
		'/assets/dist/img/playerImgs/idleForward.png',
	);

    //adds the animations to the player and sets the delay
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
        alert("Screen is too small for now try again on desktop or with a bigger display. Sorry :(");
    }
}



// lets player move again after a scene change after they touch the grass or dirt
function checkGroundColid(){
    if (playerSprite.colliding(grassSprite)>2 || playerSprite.colliding(dirtSprite) >2) {
        canMoveAgain = 1;
    }
}




// the main loop. try's to call it 60 times a second
function draw() {
    
    
    // if a key is pressed, update the players location then draw again
    if (keyIsPressed === true) { 
        updatePlayerLocation();
    }
    drawPlayer();

    // will reset the players ability to move to True if touching grass or the dirt
    checkGroundColid();

    // press q to face forward. mainly debugging purposes 
    if(kb.pressing("q")){
        resetPlayerLocation();
        playerSprite.rotation = 0;
        console.log("rotted to 0");
    }

    // draw the correct scene
    switch (scenesIndex){
        // initial screen
        case 0:
            // if player goes backwards, draw the niceTryBuddy scene else main into
            if(niceTrybuddy){
                drawNiceTrybuddy();
            } else {
                drawIntro(dirtSprite, grassSprite);
            }
            
            // must break out of the case to not call every other case
            break;

        // draws the highschool scene 
        case 1:
            drawHighschool();

           // must break out of the case to not call every other case
           break;

          
        // draws the drawIndianaState scene 
        case 2: 
            drawIndianaState();
            console.log("dddd");

              // must break out of the case to not call every other case
              break;


        // draws drawIllinoisState scene
        case 3: 
            drawIllinoisState();
              // must break out of the case to not call every other case
            break;


        //draws nowWhat scene
        case 4: 
            drawNowWhat();
            // must break out of the case to not call every other case
            break;

    }
    
    // checks if player touches edge of the screen to draw the next/previous scene
    checkCollitionWithLeftCollider();
    checkCollitionWithRightCollider();
    
    // dont let the scenesIndex go below 0
    if (scenesIndex < 0){
        scenesIndex = 0;
        niceTrybuddy = 1;
        genNewRepsonse = 1;
    }

    // don't let the scenesIndex go above the length of the array
    if (scenesIndex > scenes.length-1){
        scenesIndex = scenes.length-1
    }
}


