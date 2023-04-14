

function drawLeftCollider(){
    leftCollider.w = sideColliderWidth; //const defined in main.js
    leftCollider.x = leftCollider.w/2; // aligns the sprite on the left  side of screen
    leftCollider.h = height; // makes it the total screen size
    leftCollider.y = height/2 //place sprite in vertical center of the screen
    leftCollider.collider = 'static'; // player cant move it, but still can collied with it
    leftCollider.visible = 0; //not visible to player
}



// if player collides with the end of the  screen on the left subtract the sceneIndex to draw the previous one
function checkCollitionWithLeftCollider(){
    if (playerSprite.collides(leftCollider)){
        scenesIndex -=1;
        resetPlayerLocation();
    }
}





// draws the collider on the right. its not visible by default.
function drawRightCollider(){
    rightCollider.w = sideColliderWidth; //const defined in main.js
    
    //edge of the screen. divide by 2 cuz it will place the center of the sprite on the edge
    rightCollider.x = width - (rightCollider.w/2); 
    
    rightCollider.h = height;
    rightCollider.y = height/2 //place sprite in vertical center of the screen
    rightCollider.collider = 'static'; // player cant move it, but still can collied with it
    rightCollider.visible = 0; // not visible to player
}


// if player collides with the end of the  screen on the right
function checkCollitionWithRightCollider(){
    if (playerSprite.collides(rightCollider)){

        // a work around to the bad implementation of the niceTryBuddy scene.
        // else change the scene to the next one in the list
        if (niceTrybuddy){
            niceTrybuddy = 0;
        } else {
            scenesIndex +=1;
        }

        // reset player
        resetPlayerLocation();
    }
}
