
let thisRanAlready = 1;
function drawTextOnScreen(textStr, x,y, redrawText){

    // console.log("hi th" + "ere");
    if (redrawText && thisRanAlready){
        textIndex=0;
        thisRanAlready = 0;
    }
        
        tempText = '';
        for (let i =0; i < textIndex && i < textStr.length; i++){
            tempText += textStr[i];
        }
    textIndex++;
    if (textIndex > introTxt.length){
        // stopTextLoop = 1;
    }
    // text(text, x,y,width-(width*0.1),height/1.2);
    text(tempText, 40,50,width-(width*0.1),height/1.2);
}