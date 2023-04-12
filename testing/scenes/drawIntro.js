
var introTxt = "This self aware text-based adventure game prompted the player to make a decision:\n\n should they continue forward into the dangerous cave system or turn around and hightail it out of here?\n\n The player chose to take their chances and go forward.\n\n Step 1) figure out how to move.\n Step 2) Adventure!" 
let FIRST_RAN = 1

function loadCaveImg(){
    caveImg = loadImage('/assets/dist/img/cave2.png'); // Load the image
}

function drawIntroGround(dirtSprite, grassSprite, caveSprite){

    dirtSprite.color = groundBrown;
    dirtSprite.h = height/14;
    dirtSprite.w = width;
    dirtSprite.y = height-dirtSprite.h/2;
    dirtSprite.x = width/2;
    dirtSprite.collider = 'kinematic';
    // dirtSprite.debug = 1; dddd



    grassSprite.color = groundGreen;
    grassSprite.w = width*2;
    grassSprite.y = height-( dirtSprite.h*1.5);

    grassSprite.x = width/2
    grassSprite.h = height/14;
    grassSprite.collider = 'kinematic';
    // grassSprite.debug = 1;    

    caveSprite.img = "/assets/dist/img/cave2.png";
    caveSprite.collider = 'kinematic';
    caveSprite.x = width;
    caveSprite.y = height-((grassSprite.h*2 + dirtSprite.h+15))
    caveSprite.scale = playerSprite.scale*2.3; 
    caveSprite.debug =1;

    console.log(grassSprite.getBoundingBox)

}

function drawIntro(){
    drawIntroGround(dirtSprite, grassSprite, caveSprite);
    textSize(height/20);
    textAlign(CENTER);
    text(introTxt, 40,50,width-(width*0.1),height/1.2)
    // image(caveImg, width-(caveImg.width*(caveImgScale-0.4)), height-(caveImg.height *(caveImgScale*1.66)) , caveImg.width * caveImgScale, caveImg.height * caveImgScale);
};