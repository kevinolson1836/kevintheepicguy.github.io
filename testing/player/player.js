

function drawPlayer(){

    // scales the player a bit if screen is too small
    if (width <= 1500){
        playerSprite.scale = 0.7;
    } else {
        playerSprite.scale = 0.9;
    }

    // stop falling if player touching ground
    if (playerSprite.collided(grassSprite) > 1) {
        playerSprite.vel.y = -0;
	}


    // set idle animation
    if(playerSprite.vel.x == 0){
        if (playerDirection == "right"){
            playerSprite.ani = 'Idle forwards';
        } else {
            playerSprite.ani = 'Idle backwards';
        }
    }

    // debug square
    // playerSprite.debug = 1;
}


// updates the location of the player
function updatePlayerLocation(){

    // if the player is allowed to move
    if(canMoveAgain){
        
        // player is jumping. Don't allow multiple jumps before hitting  the ground
        if (kb.pressing("up") || kb.pressing("space") || kb.pressing("W") ) {
            if (canJump == 1){
                playerSprite.vel.y = -jumpHeight;
                canJump = 0;
            }
            
            // player must touch the ground before they can jump again
            if (playerSprite.colliding(grassSprite) > 1) {
                canJump = 1;
            }
        }
    
        // move left
        if (kb.pressing("left") || kb.pressing("A")) {
            playerSprite.vel.x = -moveSpeed;
            playerSprite.ani = 'backwards';
            playerDirection = "left";
            
        }
    
        // move right
        if (kb.pressing("right") || kb.pressing("D")) {
            playerSprite.vel.x = +moveSpeed;
            playerSprite.ani = 'forward';
            playerDirection = "right";
        }
    }
}



// reset the player to the defined place. 
function resetPlayerLocation(){
    if (playerDirection == "right"){

        // player has gone right on screen, start player on right side of screen
        playerX = clientWidth * 0.1;
        playerSprite.x = playerX;
        playerY = clientHeight * 0.7;
        playerSprite.y = playerY;
        playerSprite.vel.x = 0;
        canMoveAgain = 0;
    } else{

        // player has gone left on screen, start player on right side of screen
        playerSprite.x = width -(clientWidth * 0.1);
        playerY = clientHeight * 0.7;
        playerSprite.y = playerY;
        playerSprite.vel.x = 0;
        canMoveAgain = 0;
    }
}
