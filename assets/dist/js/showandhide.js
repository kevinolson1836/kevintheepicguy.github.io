

function hideDiv(divID){
    var hideDiv = document.getElementById(divID).children[1];
    hideDiv.style.display = "none";
    console.log(hideDiv);
}


function showDiv(divID){
    var mainDiv = document.getElementById(divID);
    var hideDiv = document.getElementById(divID).children[1];
    hideDiv.style.display = "block";
    console.log(hideDiv);
}