/**
Raving redactionist
Wawa Li

Game where the user tries to catch as much money (by clicking) as it can in 30 seconds. Money is randomized and every money caught is +1$.
A perfect cure for a heartbreak and down to earth reminder.
*/

"use strict";
let state= `intro`;
let song;
let bank=1;

// gain/point counter
$(document).ready(function(){
song = document.getElementById(`song`);
go();

//intro box dialog
function go(){
    bank =1;
    $(`#moneyGain`).text("$"+bank);
//Q: how to center button
$(`#intro-dialog`).dialog({
    modal: true,
    buttons: {
        "green" : function(){
            $(this).dialog(`close`);
            song.play();
            // song.volume(0.5);
            game();
        }
    }
});
}



//game stops
function end(){
    song.pause();
    song.currentTime = 0;
$(`#end-dialog`).dialog({
    modal: true,
    resizable: false,
    buttons: {
        "more" : function(){
            $(this).dialog(`close`);
            go();
        },
        "enough labour" : function (){
            $(this).window(`close`)
        }
    }
        // $(`#score`).text("$"+ bank);
});
}

//triggers a 30 second game
function game(){
    setTimeout(end,30000);
    state= `game`;
// money reveals and hide randomly
setInterval (revelation, 500);
setInterval (hide, 200);
displayBank();
scoreIncrease();
}

//when clicked, money becomes a +1 in bank and adds .gain class
function scoreIncrease(){
let liquidityList = $(`.liquidity`);
for(let i = 0; i< liquidityList.length; i++){
$(liquidityList[i]).on(`click`, function(event){
    $(this).addClass(`gain`);
    $(this).removeClass(`untouched`);
    bank +=1;
    plusOneSign(this);
});
}
}

function displayBank (){
    $(`.liquidity`).click(function() {
      $(`#moneyGain`).text("$"+bank);
    });
}

// +1 text replaces the flying dollar icon for 1 second when user clicks (gratification feature) 
function plusOneSign(imageClicked){
    imageClicked.textContent = "+1";
setTimeout(function() {
imageClicked.textContent = "";
    }, 1000);
  };


function revelation(){
    $(`.hidden`).each(function(){
        let number = Math.random();
        if (number < 0.2){
        $(this).removeClass(`hidden`);
        $(this).addClass(`revealed`);

}
    });
}

function hide(){
    $(`.revealed`).each(function(){
        let number = Math.random();
        if (number < 0.2){
        $(this).removeClass(`revealed`);
        $(this).addClass(`hidden`); 
}
    });
}
});
