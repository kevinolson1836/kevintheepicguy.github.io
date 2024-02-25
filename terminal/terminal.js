const terminal = document.getElementById('terminal');
var count = 0;
var intervalID = null;
var timeout = 0;
var arrowCount = 0;
var charCount = 0;

var currentDir = "~/Kevin";
const validDirs = ["","~/Kevin","~/Kevin/","~/Kevin/Education","~/Kevin/Education/","~/Kevin/Projects","~/Kevin/Projects/","~/Kevin/Work-Experience","~/Kevin/Work-Experience/","~/Kevin/About-Me","~/Kevin/About-Me/"];

var scrollTimeout = 0;

var rawChars = "";
var output 

// display: grid; grid-template-columns: auto ; grid-gap: 10px;

var entryPromt = `<p style=" display: grid; grid-template-columns: auto ; grid-gap: 10px; margin-bottom: 0px; display: block; font-size: 30px; text-align: center;"><b>Welcome to KeviPrompt!</b></p><br><p style="display: grid; grid-template-columns: auto ; grid-gap: 10px; margin-top: 0px; display: block; text-align: center;">This is a very basic implementation of a Linux like command line.<br><br>I built this for a fun way for you to explore my accomplishments and achievements!<br><br> Please take a look around and explore what I have built!<br><br> Valid commands are:<br><br><br> 'cd' allows you to change directories.<br><br>'ls' lists files in current directory.<br><br>'cat' displays the text in the file.<br><br><br><br>Contact me at:<br><br>Email: <a style="color: white;" href="mailto:kevin.olson1836@gmail.com">kevin.olson1836@gmail.com</a></p>`
var prompt = `<p class=grey>User</p><p class=dark-grey>@</p><p>kevin-Olson</p><p class="blue">:</p><p class="light-blue">${currentDir} </p><p> `;



function updatePrompt(){
    prompt = `<p class=grey>User</p><p class=dark-grey>@</p><p>kevin-Olson</p><p class="blue">:</p><p class="light-blue">${currentDir} </p><p> `;
}

// scroll to bottom
scrollInterval = setInterval(function(){
    if (scrollTimeout > 1){

    } else {
        scrollToBottom()
    }
    scrollTimeout += 1;
}, 1);



function intervalManager(input) {
    if(input === 1){

        intervalID = setInterval(function () {
            count+=1
            var temp = terminal.innerHTML
            
            if (count%2 == 0){
                temp = temp.replace("_", " ");
            } else {
                temp = temp.replace(" ", "_");
            }

            terminal.innerHTML = temp;  

        }, 500);
        
    

    }else{
        clearInterval(intervalID);
        
        var temp2 = terminal.innerHTML;
        while (temp2.indexOf(" ") > -1){
            temp2 = temp2.replace(" ", "");
        } 

        while (temp2.indexOf("_") > -1){
            temp2 = temp2.replace("_", "");
        } 
            terminal.innerHTML = temp2;
    }
}

function initTerminal(){
    terminal.innerHTML = entryPromt;
    terminal.innerHTML += prompt;
    intervalManager(1);
    terminal.focus();
}


function addCharAt(str,index,char) {

    // strip the underline and bold
    if (str.indexOf("<u><strong>") > -1){
        str = str.replace("<u><strong>", "");
        index -= 12;
    } 

    if (str.indexOf("</strong></u>") > -1){
        str = str.replace("</strong></u>", "");
        index -= 12;
    } 



    if (index >= 0 && index < str.length) {

        // Wrap the character at the specified index with <u> tags for underline
            str = str.substring(0, index+1) + "<u><strong>"+ char + "</strong></u>" + str.substring(index + 1);
    }
    return str;
}





// ******************************************************************* COMMAND PROCESSING LOGIC ***********************************************************************************

function processCommand(str){


    // display a grid with the valid dirs
    if(str.indexOf("ls") > -1){

        if (currentDir === "~/Kevin"){
                    return(`
                    <div class="grid">
                        <div class="row">
                            <div class="cell dark-blue">Education</div>
                            <div class="cell dark-blue">Projects</div>
                        </div>
                        <div class="row">
                            <div class="cell ">README.TXT</div>
                            <div class="cell dark-blue">About-Me</div>
                            
                        </div>
                        <div class="row">
                            <div class="cell dark-blue">Work-Experience</div>
                        </div>
                    </div>
                    `);
        }





        if (currentDir === "~/Kevin/Education"){
                    return(`
                    <div class="grid">
                        <div class="row">
                            <div class="cell dark-blue">Education</div>
                            <div class="cell dark-blue">Projects</div>
                        </div>
                        <div class="row">
                            <div class="cell ">README.TXT</div>
                            <div class="cell dark-blue">About-Me</div>
                            
                        </div>
                        <div class="row">
                            <div class="cell dark-blue">Work-Experience</div>
                        </div>
                    </div>
                    `);
        }






        if (currentDir === "~/Kevin/Projects"){
                    return(`
                    <div class="grid">
                        <div class="row">
                            <div class="cell dark-blue">Education</div>
                            <div class="cell dark-blue">Projects</div>
                        </div>
                        <div class="row">
                            <div class="cell ">README.TXT</div>
                            <div class="cell dark-blue">About-Me</div>
                            
                        </div>
                        <div class="row">
                            <div class="cell dark-blue">Work-Experience</div>
                        </div>
                    </div>
                    `);
        }





        if (currentDir === "~/Kevin/Work-Experience"){
                    return(`
                    <div class="grid">
                        <div class="row">
                            <div class="cell dark-blue">Education</div>
                            <div class="cell dark-blue">Projects</div>
                        </div>
                        <div class="row">
                            <div class="cell ">README.TXT</div>
                            <div class="cell dark-blue">About-Me</div>
                            
                        </div>
                        <div class="row">
                            <div class="cell dark-blue">Work-Experience</div>
                        </div>
                    </div>
                    `);
        }





        if (currentDir === "~/Kevin/About-Me"){
                    return(`
                    <div class="grid">
                        <div class="row">
                            <div class="cell">Accomplishments.txt</div>
                            <div class="cell">Certifications.txt</div>
                        </div>
    
                        <div class="row">
                            <div class="cell">Current-Role.txt</div>
                            <div class="cell">Goals.txt</div>
                        </div>
                                
                        <div class="row">
                                <div class="cell">Skills.txt</div>
                        </div>

                    </div>
                    `);
        }




    }





    else if(str.indexOf("help") > -1){
            // cat the readme file
            return("this is somewhat of a Linux like command line interrupter I built. there are a few <i>'commands'</i> such as 'ls' 'cat' 'help (displays this)' and 'cd'\n\n this 'file system' is my resume feel free to go exploring around! ");
    }

    else if(str.startsWith("cat ")){

        if(str.indexOf("README.txt") > -1){
            // cat the readme file
            return("this is the readme section! fill this bad boy out!");
        }

        if(str.indexOf("instructions.txt") > -1){
            // cat the readme file
            return("this is somewhat of a Linux like command line interrupter I built. there are a few <i>'commands'</i> such as 'ls' 'cat' 'help (displays this)' and 'cd'\n\n\n this 'file system' is my resume feel free to go exploring around! ");
        }

    } else if(str.startsWith("cd ")){
        var dir = str.substring(3,str.length);
        if (validDirs.includes(currentDir + "/"+dir)){
            console.log("valid dir")
            currentDir += "/"+dir;
            updatePrompt();
            return("");
        }else{
            console.log("noit valid dir")
        }
    }

    else{
        // command not defined or no case to catch it
        return (`${str}: Command not found. Try running 'help' for help. `);
    }
}




// RETURNS A VALID HTML STRING WITH THE UNDERLINE AND BOLDED CHAR AT GIVEN INDEX 
function underlineCharAtIndex(html, index) {
    if (index >= 0 && index < html.length) {
        // Wrap the character at the specified index with <u> tags for underline
        html = html.substring(0, index) + '<u><strong>' + html.charAt(index) + '</strong></u>' + html.substring(index + 1);
    }
    return html;
}






// ******************************************************************* VALID CHAR'S LOGIC ***********************************************************************************

terminal.addEventListener('keypress', function (event) {
    scrollTimeout = 0;

    var input = String.fromCharCode(event.keyCode); 

    // if number or letter or quote or double quote was pressed
    if (/[a-zA-Z0-9-_ .'"]/.test(input)) {
            charCount +=1;
            // delay the blinking for smooth looking typing
            clearTimeout(timeout);
            timeout = window.setTimeout( 
                                            function() {
                                                terminal.innerHTML += "_";
                                            }, 250);

            intervalManager(0) // stop the blinking
            event.preventDefault();
            const input = event.key
            if (arrowCount >= 0){
                terminal.innerHTML += input;
            } else {
                terminal.innerHTML = addCharAt(terminal.innerHTML, terminal.innerHTML.length + arrowCount, input)
            }
            intervalManager(1) // start the blinking

            // i have no idea why this needs to be stripped out, there is probably a better way but this works i guess
            terminal.innerHTML = terminal.innerHTML.replace('<div><p class="grey"><br></p></div>', "");
            terminal.innerHTML = terminal.innerHTML.replace('<div><p class="grey"></p></div>', "");

    }






// ******************************************************************* ENTER KEY LOGIC ***********************************************************************************

    else if (event.keyCode === 13){ //enter key pressed
    intervalManager(0) // stop the blinking of the underscore
    // i have no idea why this needs to be stripped out, there is probably a better way but this works i guess
    terminal.innerHTML = terminal.innerHTML.replace('<div><p class="grey"><br></p></div>', "");

    // todo: command processing here

    if (terminal.innerHTML.indexOf("<u><strong>") > -1){
        terminal.innerHTML = terminal.innerHTML.replace("<u><strong>", "");
    } 

    if (terminal.innerHTML.indexOf("</strong></u>") > -1){
        terminal.innerHTML = terminal.innerHTML.replace("</strong></u>", "");
    } 

    rawChars = terminal.innerHTML.substring(terminal.innerHTML.length - charCount, terminal.innerHTML.length);

    output = processCommand(rawChars);

    terminal.innerHTML += `<br><br><div style='display=block;'>${output}</div><br>` + prompt.substring(0, prompt.length-1);

    arrowCount = 0; //reset the counter of left/right arrows
    charCount = 0; // reset the charCount counter

    // scrollToBottom();
    intervalManager(1) // start the blinking of the underscore

    }else{

            // i have no idea why this needs to be stripped out, there is probably a better way but this works i guess
            terminal.innerHTML = terminal.innerHTML.replace(`<div><p class="grey">${event.key}<br></p></div>`, "");
            terminal.innerHTML = terminal.innerHTML.replace('<div><p class="grey"><br></p></div>', "");
            terminal.innerHTML = terminal.innerHTML.replace(event.key, "");
            terminal.innerHTML = terminal.innerHTML.replace(event.key, "");
            terminal.innerHTML = terminal.innerHTML.replace(event.key, "");
            terminal.innerHTML = terminal.innerHTML.replace(event.key, "");
        }

            // i have no idea why this needs to be stripped out, there is probably a better way but this works i guess
            terminal.innerHTML = terminal.innerHTML.replace('<div><p class="grey"><br></p></div>', "");
            terminal.innerHTML = terminal.innerHTML.replace('<div><p class="grey"><br></p></div>', "");
            terminal.innerHTML = terminal.innerHTML.replace('<div><p class="grey"></p></div>', "");
            
            setTimeout(scrollToBottom(), 5000);

});





// ******************************************************************* BACKSAPCE LOGIC ***********************************************************************************
// do some funky stuff for backsapce key
terminal.addEventListener('keydown', function(event) {
    const key = event.key; // const {key} = event; ES6+
    if (key === "Backspace") {
        // delay the blinking for smooth looking typing
        clearTimeout(timeout);
        timeout = window.setTimeout( 
                                                function() {
                                                    terminal.innerHTML += "_";
                                                }, 250);
        intervalManager(0) // stop the blinking of the underscore
        charCount -=1;
        temp = terminal.innerHTML;

        //remove last two chars. then add the underscore back for the blinking animation
        temp = temp.slice(0, temp.length - 1) + "_"; 
        terminal.innerHTML = temp

        
        intervalManager(1) // start the blinking of the underscore
        
    }





// ******************************************************************* LEFT ARROW LOGIC ***********************************************************************************
    if (key === "ArrowLeft") {
        intervalManager(0) // stop the blinking of the underscore
        if(charCount > 0 && charCount + arrowCount > 0){
            arrowCount -= 1;
        }
        var temp = terminal.innerHTML;

        if (temp.indexOf("<u><strong>") > -1){
            temp = temp.replace("<u><strong>", "");
        } 

        if (temp.indexOf("</strong></u>") > -1){
            temp = temp.replace("</strong></u>", "");
        } 

        var newstr = underlineCharAtIndex(temp, temp.length + arrowCount)
        terminal.innerHTML = newstr;

        intervalManager(1) // start the blinking of the underscore
    }





// ******************************************************************* RIGHT ARROW LOGIC ***********************************************************************************
    if (key === "ArrowRight") {
        intervalManager(0) // stop the blinking of the underscore

        
        var temp = terminal.innerHTML;
        
        // dont let the cusor go past where its supposed to be 
        if(arrowCount < charCount && arrowCount < 0){
            arrowCount += 1;
        }

        // strip out starting extra tags
        if (temp.indexOf("<u><strong>") > -1){
            temp = temp.replace("<u><strong>", "");
        } 

        // strip out extra ending tags
        if (temp.indexOf("</strong></u>") > -1){
            temp = temp.replace("</strong></u>", "");
        } 

        // adds underline and bolds the char where the cursor is at
        var newstr = underlineCharAtIndex(temp, temp.length + arrowCount)
        terminal.innerHTML = newstr;

        // adds the underscore back if at end of line
        if (arrowCount == 0){
            terminal.innerHTML += "_";
        }

        intervalManager(1) // start the blinking of the underscore
    }
});





// ******************************************************************* CONSTANT LOOPING LOGIC ***********************************************************************************

// always be strip out the weird part it adds to the top of the div idk why 
var stripping_interval = setInterval(function(){
            terminal.innerHTML = terminal.innerHTML.replace('<div><p class="grey"><br></p></div>', "");
            terminal.innerHTML = terminal.innerHTML.replace('<div><p class="grey"></p></div>', "");
},0)







// ******************************************************************* AUTO SCROLLING LOGIC ***********************************************************************************

function scrollToBottom(){
    terminal.scrollTo(0, 9999999999999999999);
    window.scrollTo(0, document.body.scrollHeight);
}
