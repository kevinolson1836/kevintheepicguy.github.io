

function hideDiv(divID){
    setTimeout(function(){
        var mainDiv = document.getElementById(divID);
        var h1Div = document.getElementById(divID).children[0];
        var hideDiv = document.getElementById(divID).children[1];
        hideDiv.style.display = "none";
        h1Div.style.marginLeft = "0px";
        mainDiv.style.backgroundColor = "#e2e8df";
    }, 50);
}


function showDiv(divID){
    var mainDiv = document.getElementById(divID);
    var h1Div = document.getElementById(divID).children[0];
    var hideDiv = document.getElementById(divID).children[1];
    hideDiv.style.display = "block";
    h1Div.style.marginLeft = "100px";
    mainDiv.style.backgroundColor = "#cfd9ca";

}