/**
Da Vinci
Wawa Li

Mulan poem
*/

"use strict";
// let state = `title`;
let song;
let daggerSound;
changingPage();
let currentPageNumber=0;


// doesnt get the song
song = document.getElementById("song");
daggerSound = document.getElementById("sound1");
openPoem();

// dagger sounds when hover over some random letters
$(`.hover`).on(`mouseover`, function(event){
    daggerSound.play();
    });

    $(`.buttons`).on(`click`, function(event){
        daggerSound.play();
        });

 // I wanted the poem to change back to black every page but meanwhile
    // $(`#poem`).on(`mouseover`, function(event){
    //     $(this).addClass(`read`,5000);
    // });

function openPoem(){
 $(`#part0`).on(`click`, function(event){
     console.log(song.duration);
// source : https://stackoverflow.com/questions/9437228/html5-check-if-audio-is-playing
if (song.duration > 0 && !song.paused) {
} else {
    // song.play();
}
            });
    

}

function changingPage(){
    let poemSections = $(`.poemSection`);
    //parts are made into html array
    for (let i=0;i < poemSections.length; i++){
        // tells which part we are on atm
    let currentPart = poemSections[i].id

    // I wanted the poem to change back to black every page but meanwhile
    // $(`#poem`).on(`mouseover`, function(event){
    // //     $(this).addClass(`read`,5000);
    // $(`#part${i}`).css(`color`,`pink`);
    // });

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
            $(`poem`).removeClass(`read`);
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
        //currentPageNumber = parseInt(nextPart);
        $(`#poem`).on(`click`, function(event){
            $(`#poem`).removeClass(`read`);
            // $(`#poem`).css("color", "black");
        });
    })
}

// $( "button" ).click( function( event ) {
//     event.goBack;
//   } );

//   function goBack(){
//       if (state=== `part2`){
//           state= 3;
//       } else if (state=== `part3`){
//           state =2;
//       } else if (state===)

//       }
//   }
// previous / next button
// $(`#buttons`).button({`<`: value1, `>`: value2 });

  
// $(`#solved-dialog`).dialog({
//     autoOpen : false,
//     buttons: {
//         "lol" : function (){
//             $(this).dialog(`close`);
//         }
//     }
// });



// $(`#answer`).droppable({
// drop: function (event,ui){
//     let letter = ui.draggable.text();
//     $(this).append(letter);
//     ui.draggable.draggable(`disable`);
//     ui.draggable.removeClass(`found`);
// if ($(this).text() === `Theremin`){
//     $(`#solved-dialog`).dialog(`open`)
// }
// }
// });

