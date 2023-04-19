
let drawHighschoolFirstRan = 1;

function drawChairs(){
    let chair1 = playerSprite.colliding(chairSprite)
    let chair2 = playerSprite.colliding(chairSprite2)
    let chair3 = playerSprite.colliding(chairSprite3)
    if(chair1){
        // chairSprite.vel.y = chair1*3
        chairSprite.vel.x +=chair1+randomIntFromInterval(1,4);
        chairSprite.vel.y -=chair1+randomIntFromInterval(1,4);
        console.log(chair1);
    }

    if(chair2){
        chairSprite2.vel.x +=chair2+randomIntFromInterval(1,4);
        chairSprite2.vel.y -=chair2+randomIntFromInterval(1,4);
    }

    if(chair3){
        chairSprite.vel.x +=chair3+randomIntFromInterval(1,4);
        chairSprite3.vel.y -=chair3+randomIntFromInterval(1,4);
    }

}

function drawHighschool(){
    
    if(drawHighschoolFirstRan){
        drawHighschoolFirstRan = 0;
        playerSprite.rotation = 0;
        chairSprite = new Sprite(width/3,0, 48,48);
        chairSprite2 = new Sprite(chairSprite.x*2,0, 48,48);
        chairSprite3 = new Sprite(chairSprite.x*3/2,0, 48,48);
        
        chairSprite.y = height - (grassSprite.h + dirtSprite.h+2) - (chairSprite.h);
        chairSprite2.y = height - (grassSprite.h + dirtSprite.h+2) - (chairSprite2.h);
        chairSprite3.y = height - (grassSprite.h + dirtSprite.h+2) - (chairSprite3.h);

        chairSprite.scale = 2;
        chairSprite2.scale = 2;
        chairSprite3.scale = 2;
        
        chairSprite.img = "/assets/dist/img/spriteSheet/chair.png";
        chairSprite2.img = "/assets/dist/img/spriteSheet/chair.png";
        chairSprite3.img = "/assets/dist/img/spriteSheet/chair.png";
        
        // chairSprite.collider = "static";
        // chairSprite2.collider = "static";
        // chairSprite3.collider = "static";
        // chairSprite.debug =1;    dddddddddddddddddddddddddddddddddddddddddddddddddddddd
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

    drawChairs();

}
