

function hideDiv(divID){
    setTimeout(function(){
        var mainDiv = document.getElementById(divID);
        var h1Div = document.getElementById(divID).children[0];
        var hideDiv = document.getElementById(divID).children[1];
        var leftSideContent = hideDiv.children[0].children[1];
        var rightSideContent = hideDiv.children[1].children[1];

        $(leftSideContent).animate({ //be sure to change the class of your element to "header"
            paddingLeft:'0%',
        },0);

        $(rightSideContent).animate({ //be sure to change the class of your element to "header"
            paddingLeft:'15%',
        },0);

        $(rightSideContent).fadeTo(0, 0.7);
        $(leftSideContent).fadeTo(0, 0.7);

        hideDiv.style.display = "none";
        h1Div.style.marginLeft = "0px";
        h1Div.style.fontWeight = "";
        mainDiv.style.backgroundColor = "#e2e8df";
        // leftSideContent.style.paddingLeft = "0%";
        // rightSideContent.style.paddingLeft = "0%";
    }, 50);
}


function showDiv(divID){
    var mainDiv = document.getElementById(divID);
    var h1Div = document.getElementById(divID).children[0];
    var hideDiv = document.getElementById(divID).children[1];
    var leftSideContent = hideDiv.children[0].children[1];
    var rightSideContent = hideDiv.children[1].children[1];
    

    $(leftSideContent).animate({ //be sure to change the class of your element to "header"
        paddingLeft:'15%',
    });

    $(rightSideContent).animate({ //be sure to change the class of your element to "header"
        paddingLeft:'5%',
    });

    $(rightSideContent).fadeTo(500, 1);
    $(leftSideContent).fadeTo(500, 1);

    // leftSideContent.style.paddingLeft = "15%";
    rightSideContent.style.paddingLeft = "5%";
    hideDiv.style.display = "block";
    h1Div.style.marginLeft = "100px";
    h1Div.style.fontWeight = "bold";
    mainDiv.style.backgroundColor = "#cfd9ca";
    console.log(rightSideContent);
}
