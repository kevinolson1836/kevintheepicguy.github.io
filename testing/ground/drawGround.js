let drawGroundFirstRan = 1;
let drawCeilingFirstRan = 1;


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

// top layer
let altImg1 = randomIntFromInterval(1,8);
let altImg2 = randomIntFromInterval(12,25);


// second layer
let altImg3 = randomIntFromInterval(2,20);
let altImg4 = randomIntFromInterval(20,35);
let altImg5 = randomIntFromInterval(4,16);


let randomRotation = randomIntFromInterval(1,1);

// draws the ground
function drawGround(topLayerImg, topLayerAltImg, topLayerAltImg2, secondLayerMainImg, secondLayerAltImg1, secondLayerAltImg2, secondLayerAltImg3){
    if(drawGroundFirstRan){
        drawGroundFirstRan = 0;
        grassVisualSprite = new Sprite();
    }


    // "/assets/dist/img/spriteSheet/grassTile.png"
    grassVisualSprite.img = topLayerImg;
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
    
    
    
    firstLayerSpriteCount =0;
    //draw the ground sprite. width+spritewidth to draw one extra one to fill the gap at the end of screen 
    for (let i = 0; i < width+grassVisualSprite.w; i+= grassVisualSprite.w) {
        grassVisualSprite.x =i;
         // draws the first type of small rock
         if (firstLayerSpriteCount == altImg1){
            grassVisualSprite.img = topLayerAltImg;
            grassVisualSprite.draw()
            grassVisualSprite.img = topLayerImg;
        } else if (firstLayerSpriteCount == altImg2){
            grassVisualSprite.img = topLayerAltImg2;
            grassVisualSprite.draw()
            grassVisualSprite.img = topLayerImg;
        } else {
            grassVisualSprite.draw()
        }
        firstLayerSpriteCount++;
    }
    
    
    // dirt sprite
    // "/assets/dist/img/spriteSheet/dirtTile.png"
    dirtSprite.img = secondLayerMainImg;
    dirtSprite.scale =3;
    dirtSprite.w = 48;
    dirtSprite.h = 48;
    dirtSprite.y = height-groundHeight;
    dirtSprite.collider = 'kinematic';
    // dirtSprite.debug = 1
    
    //draw the ground sprite. width+spritewidth to draw one extra one to fill the gap at the end of screen 
    for(let x = 1; x < 3; x++ ){
        let secondLayerSpriteCount =0;
        dirtSprite.y = height - groundHeight + (grassSprite.h*x);
        for (let i = 0; i < width+dirtSprite.w; i+= dirtSprite.w) {
            dirtSprite.x =i;
            secondLayerSpriteCount++;
            
            // draws the first type of small rock
            if (secondLayerSpriteCount == altImg3){
                dirtSprite.img = secondLayerAltImg1;
                dirtSprite.draw()
                dirtSprite.img = secondLayerMainImg;
            } 
            
            // draws the second type of small rock
            else if (secondLayerSpriteCount == altImg4){
                dirtSprite.img = secondLayerAltImg2;
                dirtSprite.draw()
                dirtSprite.img = secondLayerMainImg;
            }

            // draws the big rock
            else if(secondLayerSpriteCount == altImg5) {
                dirtSprite.img = secondLayerAltImg3;
                dirtSprite.draw()
                dirtSprite.img = secondLayerMainImg;
            } 
            
            // draw normal dirt tile
            else {
                dirtSprite.draw()
            }
            
        }
        //   console.log(dirtSpriteCount);
    }
    
}

let caveCeilingCount =0;


function drawCeiling(){

    if(drawCeilingFirstRan){
        drawCeilingFirstRan = 0;
        ceilingSprite = new Sprite();
    }

    // ceiling sprite
    ceilingSprite.img = "/assets/dist/img/spriteSheet/ceilingTile.png";
    ceilingSprite.scale =3;
    ceilingSprite.w = 48;
    ceilingSprite.h = 48;
    ceilingSprite.y = 0;
    ceilingSprite.x = 0;
    ceilingSprite.collider = 'kinematic';
    // dirtSprite.debug = 1

   
        caveCeilingCount =0;
    

    //loop until number of cells that fit verticals +1 (adding one because divide by 0 is infinity) 
    for(let y=1; y < Math.floor((height/48)/2)+1; y+=1){
        ceilingSprite.y = (y-1)*48;
    
        //loop until number of cells that fit horizontally divied by vertical cell id
        for(let x =0; x < ((width/48)/y) +1; x+=1){
            ceilingSprite.x = x*48;
            if(0 == caveCeilingCount%18){
                ceilingSprite.img = "/assets/dist/img/spriteSheet/ceilingTile2.png";
                ceilingSprite.draw();
                ceilingSprite.img = "/assets/dist/img/spriteSheet/ceilingTile.png";
            }
            else if(0 == caveCeilingCount%14){
                ceilingSprite.img = "/assets/dist/img/spriteSheet/ceilingTile3.png";
                ceilingSprite.draw();
                ceilingSprite.img = "/assets/dist/img/spriteSheet/ceilingTile.png";
            }
            else if(0 == caveCeilingCount%21){
                ceilingSprite.img = "/assets/dist/img/spriteSheet/ceilingTile4.png";
                ceilingSprite.draw();
                ceilingSprite.img = "/assets/dist/img/spriteSheet/ceilingTile.png";
            } else {
                ceilingSprite.draw();
                ceilingSprite.img = "/assets/dist/img/spriteSheet/ceilingTile.png";
            }

            if(caveCeilingCount%randomRotation == 0){
                ceilingSprite.rotation += 90;
            }
            // console.log(Math.floor(altImg4*5.4));
            caveCeilingCount++;
        }
        
    }



}