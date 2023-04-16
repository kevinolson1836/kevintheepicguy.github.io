
let drawHighschoolFirstRan = 1;

function drawHighschool(){

    if(drawHighschoolFirstRan){
        drawHighschoolFirstRan = 0;
        playerSprite.rotation = 0;
        testSprite = new Sprite();
        // testSprite.debug =1;
    }

    background(skyColor);
    testSprite.img = "/assets/dist/img/spriteSheet/grassTile.png";
    testSprite.scale =3;
    testSprite.w = 48;
    testSprite.h = 48;
    testSprite.y = height-150;
    testSprite.collider = 'none';
    
    //draw the ground sprite. width+spritewidth to draw one extra one to fill the gap at the end of screen 
    for (let i = 0; i < width+testSprite.w; i+= testSprite.w) {
        testSprite.x =i;
        testSprite.draw()
      }

   
    // grassSpriteList.append(tempSprite);

}
