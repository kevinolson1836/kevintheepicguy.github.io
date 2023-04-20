
let drawHighschoolFirstRan = 1;

function drawChairs(){
    let chair1 = playerSprite.colliding(chairSprite)
    let chair2 = playerSprite.colliding(chairSprite2)
    let chair3 = playerSprite.colliding(chairSprite3)
    let chalkBoard = playerSprite.colliding(chalkBoardSprite)

    let chairCeiling1 = playerSprite.colliding(ceilingSprite)
    let chairCeiling2 = playerSprite.colliding(ceilingSprite)
    let chairCeiling3 = playerSprite.colliding(ceilingSprite)
    let chalkBoardCeiling = playerSprite.colliding(ceilingSprite)

    
    if(chair1){
        // chairSprite.vel.y = chair1*3
        chairSprite.vel.x +=chair1+randomIntFromInterval(1,20);
        chairSprite.vel.y -=chair1+randomIntFromInterval(9,20);
    }

    if(chair2){
        chairSprite2.vel.x +=chair2+randomIntFromInterval(1,20);
        chairSprite2.vel.y -=chair2+randomIntFromInterval(9,20);
    }

    if(chair3){
        chairSprite.vel.x +=chair3+randomIntFromInterval(1,20);
        chairSprite3.vel.y -=chair3+randomIntFromInterval(9,20);
    }
    if(chalkBoard){
        chalkBoardSprite.vel.x +=chalkBoard+randomIntFromInterval(1,20);
        chalkBoardSprite.vel.y -=chalkBoard+randomIntFromInterval(9,20);
    }

    if(chairCeiling1){
        chairSprite.vel.x =0;
        chairSprite.vel.y =0;
    }
    if(chairCeiling2){
        chairSprite2.vel.x =0;
        chairSprite2.vel.y =0;
    }
    if(chairCeiling3){
        chairSprite3.vel.x =0;
        chairSprite3.vel.y =0;
    }
    if(chalkBoardCeiling){
        chalkBoardSprite.vel.x =0;
        chalkBoardSprite.vel.y =0;
    }


}

function drawHighschool(){
    
    if(drawHighschoolFirstRan){
        drawHighschoolFirstRan = 0;
        playerSprite.rotation = 0;
        chairSprite = new Sprite(width/3,0, 48,48);
        chairSprite2 = new Sprite(chairSprite.x*2,0, 48,48);
        chairSprite3 = new Sprite(chairSprite.x*3/2,0, 48,48);
        chalkBoardSprite = new Sprite(width-200,0, 48,48);
        
        chairSprite.y = height - (grassSprite.h + dirtSprite.h+2) - (chairSprite.h);
        chairSprite2.y = height - (grassSprite.h + dirtSprite.h+2) - (chairSprite2.h);
        chairSprite3.y = height - (grassSprite.h + dirtSprite.h+2) - (chairSprite3.h);
        chalkBoardSprite.y = height - (grassSprite.h + dirtSprite.h+10) - (chalkBoardSprite.h);

        chairSprite.scale = 2;
        chairSprite2.scale = 2;
        chairSprite3.scale = 2;
        chalkBoardSprite.scale = 3;
        
        chairSprite.img = "/assets/dist/img/spriteSheet/chair.png";
        chairSprite2.img = "/assets/dist/img/spriteSheet/chair.png";
        chairSprite3.img = "/assets/dist/img/spriteSheet/chair.png";
        chalkBoardSprite.img = "/assets/dist/img/spriteSheet/chalkboard.png";
        
        chairSprite.collider = "dynamic";
        chairSprite2.collider = "dynamic";
        chairSprite3.collider = "dynamic";
        chairSprite.collider = "dynamic";
        // chairSprite.debug = 1;
    }

    background(caveColor);
    
    drawGround("/assets/dist/img/spriteSheet/classroomTileTop.png", 
                "/assets/dist/img/spriteSheet/classroomTileTop1.png",
                "/assets/dist/img/spriteSheet/classroomTileTop2.png",
                "/assets/dist/img/spriteSheet/classroomTileBottom.png",
                "/assets/dist/img/spriteSheet/classroomTileBottom1.png",
                "/assets/dist/img/spriteSheet/classroomTileBottom2.png",
                "/assets/dist/img/spriteSheet/classroomTileBottom3.png"
    ); // makes the ground 
    drawCeiling();

   
   
   
    let textStr = "You, the player, find yourself stumbling into a dark and mysterious cave. As you make your way deeper, you notice strange chairs and an old chalkboard covered in cryptic code. But there's something odd about this cave - the physics seem off….\n\nSuddenly, you hear a voice in your head - the voice of the game maker. It tells you that you've been chosen to take part in a unique adventure, one that will take you on a journey of discovery.\n\nAs you begin to explore the cave, you realize that this is not just any adventure game - it's a self-aware game that's mirroring the game maker‘s own journey of learning how to program."
    textSize(height/30);
    drawTextOnScreen(textStr, width/2 - (width/6),200, width/1.5, height/2, 1)

    drawChairs();

}
