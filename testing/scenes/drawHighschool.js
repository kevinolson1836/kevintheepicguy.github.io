
let drawHighschoolFirstRan = 1;



function drawHighschool(){

    if(drawHighschoolFirstRan){
        drawHighschoolFirstRan = 0;
        playerSprite.rotation = 0;
        // testSprite = new Sprite();
        // testSprite.debug =1;
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

}
