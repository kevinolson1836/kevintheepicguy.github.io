var shouldFadeIn = 0;

var isBigger = 0;
var shrinkTimeout;

var height = 0;
var width = 0;
var increaseSize = 1.2;

// function checkIfVis(element){
//     // if box is visable and have only triggered once 
//     if ($('#boxxxxx').visible( true ) && shouldFadeIn == 0){
//         console.log("is vis");
//         shouldFadeIn = 1;
//         clearTimeout(checkIfVis );

//         // slide the element in (in mili seconds)
//         $("#boxxxxx").animate({marginLeft: "20%"}, 3000);

//     }
//     setTimeout(checkIfVis, 500);
// }

function setProjectVars(){
    height = $(document.getElementById("firstProjectLink")).height();
    width = $(document.getElementById("firstProjectLink")).width();
}


$(document).ready(function(){
    // checkIfVis()
    setProjectVars();
});


function growElement(element){
    $(element).css({
                        'transform': '      scale(' + increaseSize + ',' + increaseSize + ')',
                       
                        'padding': '0',
                        'z-index': '1000',
                        'box-shadow': 'px 0px 6px 3px inset;'
                   });
    $(element).find("div").first().css({ 'background-color': '#e8f1e1'});
    $(element).find("div").first().css('box-shadow', '10px 10px 5px #888');

    
};



function shrinkElement(element){
    $(element).css({
                        'transform': 'scale(1,1)',
                        'border': 'none',
                        'padding': '5',
                        'z-index': '0',
                        'box-shadow': '0px 0px 2px 3px rgba(182, 190, 177,0.2) inset;'
                    });
    $(element).find("div").first().css({ 'background-color': 'white'});
}
