
let drawHighschool2FirstRan = 1;

let returnedFromNextRoom = 0;

async function squareTurtleSequence() {
    if (turtle.visible == 1){
        chalkBoardSprite.visible = 1;
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
}

async function randomTurtleSequence(){
    if (turtle.visible == 1){
        chalkBoardSprite.visible = 1;
        await turtle.moveTo(randomIntFromInterval(100,width-100), randomIntFromInterval(100,height-100), randomIntFromInterval(1,10));
        await turtle.rotateTo(randomIntFromInterval(100,width-100), randomIntFromInterval(100,height-100), randomIntFromInterval(1,10));
        
        randomTurtleSequence();
    }
}



function drawChalkboard(){
   

}

function drawHighschool2(){
    
    if(drawHighschool2FirstRan){
        drawHighschool2FirstRan = 0;
        playerSprite.rotation = 0;
      
        chalkBoardSprite = new Sprite();
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

        if (returnedFromNextRoom){
            randomTurtleSequence();
        }else{
            squareTurtleSequence();
        }
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

    let textStr = "";
    if (returnedFromNextRoom){
        textSize(height/30);
        textStr = "Ahhh I see you wanted to come back and see more of the fancy turtle eh?\n\n Well you broke the story line and the Turtle in the process. The Game Maker in his earily days of programing was never good at catching the edge cases.\n\n Great job Adventure, now I got to go in and fix the little fella."
        // chalkBoardSprite.collider = "dynamic";
    } else{
        textSize(height/40);
        textStr = "As you enter the next room, you notice the same chalkboard from the previous room. However, the cryptic code has been replaced by a shape that you remember fondly - a Turtle! You remember this as your very first introduction to programming in high school and when you fell in love with programming.\n\nYou also can't help but notice that the chalkboard looks blurry and as if it was just scaled up from a previously used asset. Nevertheless, you know that the game maker would never be that lazy and reuse the same asset twice *wink* *wink*.\n\nThe Adventure is feeling nostalgic and wanting to reminisce about old memories of programming, so the Adventure moves on to the next room."
    }

    drawTextOnScreen(textStr, width/2 - (width/6),200, width/1.5, height/2, 1)

    drawChalkboard();

}



function cleanupHighschool_scene2(){
    chalkBoardSprite.visible = 0;
    chalkBoardSprite.collider = "dynamic";
    
    turtle.visible = 0;
    turtle.collider =  "none";

    drawHighschool2FirstRan =1;
    returnedFromNextRoom = 1;
    

}