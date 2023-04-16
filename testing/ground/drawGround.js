let drawGroundFirstRan =1;


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

// first type of small rock
let smallRockTileID1 = randomIntFromInterval(1,10);
let smallRockTileID2 = randomIntFromInterval(10,20);

// second type of small rock
let smallRockTileID4 = randomIntFromInterval(2,10);
let smallRockTileID5 = randomIntFromInterval(10,25);

// big rocks
let bigRockTileID1 = randomIntFromInterval(4,16);
let bigRockTileID2 = randomIntFromInterval(18,25);


// draws the ground
function drawGround(){
    if(drawGroundFirstRan){
        drawGroundFirstRan = 0;
        grassVisualSprite = new Sprite();
    }


    
    grassVisualSprite.img = "/assets/dist/img/spriteSheet/grassTile.png";
    grassVisualSprite.scale =3;
    grassVisualSprite.w = 48;
    grassVisualSprite.h = 48;
    grassVisualSprite.y = height-groundHeight;
    grassVisualSprite.collider = 'static';
    // grassVisualSprite.debug = 1;
    
    // grass sprite for collition
    grassSprite.w = width;
    grassSprite.x = width/2;
    grassSprite.h = 48;
    grassSprite.y = height-groundHeight;
    grassSprite.collider = 'kinematic';
    grassSprite.visible = 0; 
    // grassSprite.debug = 1;    
    
    
    
    //draw the ground sprite. width+spritewidth to draw one extra one to fill the gap at the end of screen 
    for (let i = 0; i < width+grassVisualSprite.w; i+= grassVisualSprite.w) {
        grassVisualSprite.x =i;
        grassVisualSprite.draw()
    }
    
    
    // dirt sprite
    dirtSprite.img = "/assets/dist/img/spriteSheet/dirtTile.png";
    dirtSprite.scale =3;
    dirtSprite.w = 48;
    dirtSprite.h = 48;
    dirtSprite.y = height-groundHeight;
    dirtSprite.collider = 'static';
    // dirtSprite.debug = 1
    
    //draw the ground sprite. width+spritewidth to draw one extra one to fill the gap at the end of screen 
    for(let x = 1; x < 3; x++ ){
        let dirtSpriteCount =0;
        dirtSprite.y = height - groundHeight + (grassSprite.h*x);
        for (let i = 0; i < width+dirtSprite.w; i+= dirtSprite.w) {
            dirtSprite.x =i;
            dirtSpriteCount++;
            
            // draws the first type of small rock
            if (dirtSpriteCount == smallRockTileID1 || dirtSpriteCount == smallRockTileID2 ){
                dirtSprite.img = "/assets/dist/img/spriteSheet/dirtTileWithRock.png";
                dirtSprite.draw()
                dirtSprite.img = "/assets/dist/img/spriteSheet/dirtTile.png";
            } 
            
            // draws the second type of small rock
            else if (dirtSpriteCount == smallRockTileID4 || dirtSpriteCount == smallRockTileID5){
                dirtSprite.img = "/assets/dist/img/spriteSheet/dirtTileWithRock3.png";
                dirtSprite.draw()
                dirtSprite.img = "/assets/dist/img/spriteSheet/dirtTile.png";
            }

            // draws the big rock
            else if(dirtSpriteCount == bigRockTileID1 ||dirtSpriteCount == bigRockTileID2 ) {
                dirtSprite.img = "/assets/dist/img/spriteSheet/dirtTileWithBigRock.png";
                dirtSprite.draw()
                dirtSprite.img = "/assets/dist/img/spriteSheet/dirtTile.png";
                console.log(bigRockTileID2);
            } 
            
            // draw normal dirt tile
            else {
                dirtSprite.draw()
            }
            
        }
    //   console.log(dirtSpriteCount);
  }

}