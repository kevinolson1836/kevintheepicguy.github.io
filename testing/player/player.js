

function drawPlayer(){
    // rect(playerX, playerY, 50, 50);
    // animation(playerAinimationFrames, playerX, playerY);
    if (width <= 1500){
        playerSprite.scale = 0.7;
    } else {
        playerSprite.scale = 0.9;
    }
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
    playerSprite.debug = 1;
}


function updatePlayerLocation(){
    // move up
    if (kb.pressing("up") || kb.pressing("space")) {
        if (canJump == 1){
            playerSprite.vel.y = -jumpHeight;
            canJump = 0;
        }
        
        if (playerSprite.colliding(grassSprite) > 1) {
            canJump = 1;
        }
    }

    // move left
    if (kb.pressing("left")) {
        playerSprite.vel.x = -moveSpeed;
        playerSprite.ani = 'backwards';
        playerDirection = "left";
        
    }

    // move right
    if (kb.pressing("right")) {
        playerSprite.vel.x = +moveSpeed;
        playerSprite.ani = 'forward';
        playerDirection = "right";
    }
}




function resetPlayerLocation(){
    playerX = clientWidth * 0.2;
    playerY = clientHeight * 0.8;
}
