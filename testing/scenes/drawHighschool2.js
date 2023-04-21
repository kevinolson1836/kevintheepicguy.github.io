
let drawHighschool2FirstRan = 1;


async function squareTurtleSequence() {
    let moveDistX = chalkBoardSprite.w/3
    let moveDistY = chalkBoardSprite.h/3
	await turtle.moveTo(chalkBoardSprite.x-moveDistX,chalkBoardSprite.y,5);
	await turtle.rotateTo(chalkBoardSprite.x-moveDistX,chalkBoardSprite.y-moveDistY,3);

    await turtle.moveTo(chalkBoardSprite.x-moveDistX,chalkBoardSprite.y-moveDistY,5);
	await turtle.rotateTo(chalkBoardSprite.x+moveDistX,chalkBoardSprite.y-moveDistY,3);
    
    await turtle.moveTo(chalkBoardSprite.x+moveDistX,chalkBoardSprite.y-moveDistY,5);
	await turtle.rotateTo(chalkBoardSprite.x+moveDistX,chalkBoardSprite.y,3);
    
    await turtle.moveTo(chalkBoardSprite.x+moveDistX,chalkBoardSprite.y,5);
	await turtle.rotateTo(chalkBoardSprite.x-moveDistX,chalkBoardSprite.y,3);

	squareTurtleSequence();
}



function drawChalkboard(){
   

}

function drawHighschool2(){
    
    if(drawHighschool2FirstRan){
        drawHighschool2FirstRan = 0;
        playerSprite.rotation = 0;
      
        chalkBoardSprite.visible = 1;
        chalkBoardSprite.collider = "none";
        chalkBoardSprite.scale = 8;
        chalkBoardSprite.vel.x = 0;
        chalkBoardSprite.vel.y = 0;
        chalkBoardSprite.rotation = 0;
        chalkBoardSprite.rotationSpeed = 0;
        chalkBoardSprite.x = (width/2) + (chalkBoardSprite.w/4);
        chalkBoardSprite.y = height - (grassSprite.h + dirtSprite.h+10) - (chalkBoardSprite.h/2);
        // chalkBoardSprite.debug=1;
        chalkBoardSprite.img = "/assets/dist/img/spriteSheet/chalkBoardNoCode.png"
        
        turtle = new Turtle(30);
        turtle.x = chalkBoardSprite.x - (chalkBoardSprite.w/3);
        turtle.y = chalkBoardSprite.y;
        turtle.collider = "k";
        turtle.color = "red";
        // turtle.rotateTo(chalkBoardSprite.x-chalkBoardSprite.w/3,chalkBoardSprite.y,3);

        squareTurtleSequence();
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
    drawCeilingCave2();

   
   
   
    let textStr = "In this next room you see that the same chalkboard from the last room is here again, but the crptic code is gone and replaced with something called a Turtle...\n\nYou also cant help to notcie that the chalkboard looks like it was just scaled up and looks blurry, however the game maker would never be that lazy, that was on purpose *wink* *wink*"
    textSize(height/30);
    drawTextOnScreen(textStr, width/2 - (width/6),200, width/1.5, height/2, 1)

    drawChalkboard();

}
