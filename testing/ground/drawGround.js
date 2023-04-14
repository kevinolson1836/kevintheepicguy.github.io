
// draws the ground
function drawGround(){

    // dirt sprite
    dirtSprite.color = groundBrown;
    dirtSprite.h = groundHeight;
    dirtSprite.w = width;
    dirtSprite.y = height-(dirtSprite.h/2);
    dirtSprite.x = width/2;
    dirtSprite.collider = 'kinematic';
    // dirtSprite.debug = 1

    // grass sprite
    grassSprite.color = groundGreen;
    grassSprite.h = groundHeight;
    grassSprite.w = width*2;
    grassSprite.y = height-(dirtSprite.h*1.5 );
    grassSprite.x = width/2
    grassSprite.collider = 'kinematic';
    // grassSprite.debug = 1;    
}