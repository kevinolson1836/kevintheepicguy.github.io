
var introTxt = "This self aware text-based adventure game prompted the player to make a decision:\n\n should they continue forward into the dangerous cave system or turn around and hightail it out of here?\n\n The player chose to take their chances and go forward." 
let FIRST_RAN = 1
let stopTextLoop = 0;
let tempText = '';
let textIndex=0;

// function drawTextOnScreen(textStr, x,y){
//     // console.log("hi th" + "ere");
//     if (stopTextLoop == 0){
        
//         tempText = '';
//         for (let i =0; i < textIndex; i++){
//             tempText += textStr[i];
//         }
//     }
//     textIndex++;
//     if (textIndex > introTxt.length){
//         stopTextLoop = 1;
//     }
//     // text(text, x,y,width-(width*0.1),height/1.2);
//     text(tempText, 40,50,width-(width*0.1),height/1.2);
// }


// removes introScene stuff  
function cleanUpIntro(){
    caveSprite.visible  = 0;
    caveSprite.collider = 'none';
    thisRanAlready = 1;

}

// draws drawCaveSprite
function drawCaveSprite(){
    caveSprite.img = "/assets/dist/img/cave2.png";
    caveSprite.collider = 'static';
    caveSprite.x = width;
    caveSprite.y = height - (grassSprite.h + dirtSprite.h) - (caveSprite.h/2);
    caveSprite.scale = playerSprite.scale*2.3; 
    caveSprite.debug =1;
    caveSprite.visible  = 1;
}

// if player goes into cave or goes left update the sceneIndex and cleanup current scene
function checkForSceneChange(){
    
    // player goes right
    if (playerSprite.collides (caveSprite)) {
        scenesIndex+=1;
        resetPlayerLocation(); 
        cleanUpIntro();
        canMoveAgain = 0;
        playerSprite.rotation = 0;
        playerDirection = "right";
	}

    // player goes left
    if (playerSprite.collides (leftCollider)) {
        scenesIndex-=1;
        resetPlayerLocation(); 
        cleanUpIntro();
        canMoveAgain = 0;
        playerDirection = "left";
	}
}


// main function to call to draw the scene
function drawIntro(){
    background(skyColor);
    drawGround("/assets/dist/img/spriteSheet/grassTile.png",
                "/assets/dist/img/spriteSheet/grassTile.png", 
                "/assets/dist/img/spriteSheet/grassTile.png", 
                "/assets/dist/img/spriteSheet/dirtTile.png",
                "/assets/dist/img/spriteSheet/dirtTileWithRock.png",
                "/assets/dist/img/spriteSheet/dirtTileWithRock3.png",
                "/assets/dist/img/spriteSheet/dirtTileWithBigRock.png"
    ); // makes the ground 
    drawCaveSprite(); //makes the cave 
    drawLeftCollider(); //make the scene changer collider
    drawRightCollider(); //make the scene changer collider
    
    // draws text on screen 
    textSize(height/20);
    // textAlign(CENTER);
    drawTextOnScreen(introTxt,40,50, 1);
    
    
    // check if player is on the ground and if the scene needs to be updated
    checkGroundColid();
    checkForSceneChange();
};

