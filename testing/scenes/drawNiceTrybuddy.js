
// draws the niceTryBuddy Scene
function drawNiceTrybuddy(){
    
    // possible responses
    let responsses = [
        "The text-based adventure game had grown tired of players who always took the easy route. As the player tried to cheat their way through a particularly difficult puzzle, the game responded with a snarky comment: 'Nice try, but you can't outsmart me that easily.'",
        "The text-based adventure game is not as dumb as you think it is. you better not keep this up or else there will be dire consequences to come latter on.",
        "Oh, I see you've decided to go off the beaten path in the text-based adventure. How original. It's not like thousands of other players haven't already tried that.",
        "Oh look, the player thinks they're smarter than the game. How adorable. I'm sure you'll be the first one to figure out this impossible puzzle by ignoring all the clues.",
        "Congratulations on not following the rules in the text-based adventure. You're a real trailblazer. Maybe you can write a book about it and sell it to all the other players who think they're being unique.",
        "You're breaking all the rules in the text-based adventure? I'm sure the game is quaking in fear at your innovative approach. Keep up the good work.",
        "Ah, I see you're not content to follow the path laid out for you in the text-based adventure. You must be one of those people who always has to be different.",
        "Congratulations on ignoring all the helpful tips and hints in the text-based adventure. At least you can figure out how to move, unlike some others.",
        "So you're not following the rules in the text-based adventure. That's great, because rules are for losers. Who needs structure and logic when you have pure unbridled chaos?"
    ]

    // picks a new response
    if (genNewRepsonse){
        niceTryTxt = responsses[Math.floor(Math.random()*responsses.length)];
        genNewRepsonse = 0;
    }

    drawGround(); // draw the ground
    
    // draws text on screen 
    textSize(width/32);
    textAlign(CENTER);
    text(niceTryTxt, 40,50,width-(width*0.1),height/2)
};
