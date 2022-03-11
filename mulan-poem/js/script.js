/**
Da Vinci
Wawa Li

Mulan poem
*/

"use strict";
let song;
let daggerSound;
changingPage();
let currentPageNumber=0;


song = document.getElementById("song");
daggerSound = document.getElementById("sound1");
openPoem();

// $(`title`).style.cursor = "crosshair"; 

$(`#context-dialog`).dialog({
    // autoOpen : false,
    buttons: {
        "ok" : function (){
            $(this).dialog(`close`);
        }
    }
});


// dagger sounds when hover over some random letters
$(`.hover`).on(`mouseover`, function(event){
    daggerSound.play();
    });

    $(`.buttons`).on(`click`, function(event){
        daggerSound.play();
        });

 // I wanted the poem to change back to black every page but meanwhile
    $(`#poem`).on(`mouseover`, function(event){
        $(this).addClass(`read`,10000);
    });

function openPoem(){
 $(`#part0`).on(`click`, function(event){
     console.log(song.duration);
// source : https://stackoverflow.com/questions/9437228/html5-check-if-audio-is-playing
if (song.duration > 0 && !song.paused) {
} else {
    song.play();
}
            });
}

function changingPage(){
    let poemSections = $(`.poemSection`);
    //parts are made into html array
    for (let i=0;i < poemSections.length; i++){
        // tells which part we are on atm
    let currentPart = poemSections[i].id

    // tells which is the upcoming part
    let nextPart = poemSections[i].getAttribute("nextSection");
   console.log(currentPart);

    // switch to next page when user clicks on the displayed part (nextPart displays)
$(`#${currentPart}`).on(`click`, function(event){
        $(`#poem`).children().hide();
        $(`#part${nextPart}`).show(`blind`);
        // console.log(nextPart)
        currentPageNumber = parseInt(nextPart);
        $(`#poem`).on(`click`, function(event){
            // $(`poem`).removeClass(`read`);
        });
});
    }


// next button
    $("#next").on('click',function(event){
        console.log(currentPageNumber);
        $(`#poem`).children().hide();
        $(`#part${currentPageNumber+1}`).show(`blind`);
        currentPageNumber =currentPageNumber+1;
        //console.log(nextPart)
        $(`#poem`).on(`click`, function(event){
        });
    })
// previous button
    $("#prev").on('click',function(event){
        console.log(currentPageNumber);
        $(`#poem`).children().hide();
        $(`#part${currentPageNumber-1}`).show(`blind`);
        currentPageNumber =currentPageNumber+1;
        //console.log(nextPart)
        $(`#poem`).on(`click`, function(event){
        });
    })
}

