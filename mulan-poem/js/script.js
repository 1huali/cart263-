/**
Da Vinci
Wawa Li

Mulan poem
*/

"use strict";
// let state = `title`;
let song;
let daggerSound;
changingState();
let currentPageNumber=0;


// doesnt get the song
song = document.getElementById("song");
daggerSound = document.getElementById("sound1");
openPoem();

// dagger sounds when hover over some random letters
$(`.hover`).on(`mouseover`, function(event){
    daggerSound.play();
    });


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

function changingState(){
    let poemSections = $(`.poemSection`);
    console.log(poemSections);
    //parts are made into html array
    for (let i=0;i < poemSections.length; i++){
        // tells which part we are on atm
    let currentPart = poemSections[i].id

    // I wanted the poem to change back to black every page but yeah
    $(`#poem`).on(`mouseover`, function(event){
        $(`#part${i}`).addClass(`read`,5000);
    });

    // tells which is the upcoming part
    let nextPart = poemSections[i].getAttribute("nextSection");
   // console.log(currentPart);

    // switch to next page when user clicks on the displayed part (nextPart displays)
$(`#${currentPart}`).on(`click`, function(event){
        $(`#poem`).children().hide();
        $(`#part${nextPart}`).show(`blind`);
        // console.log(nextPart)
        currentPageNumber = parseInt(nextPart);
        $(`#poem`).on(`click`, function(event){
            $(`poem`).removeClass(`read`,500);
        });
});
    }

    $("#next").on('click',function(event){
        console.log(currentPageNumber);
        $(`#poem`).children().hide();
        $(`#part${currentPageNumber+1}`).show(`blind`);
        currentPageNumber =currentPageNumber+1;
        //console.log(nextPart)
        //currentPageNumber = parseInt(nextPart);
        $(`#poem`).on(`click`, function(event){
            $(`#poem`).removeClass(`read`,500);
        });

    })



// else if (state === `part2`){
//     $(`#poem`).children().hide();
//     $(`#part2`).show(`blind`);
//     console.log(`poem p.2`)
//     $(`#part2`).on(`click`, function(event){
//         state = `part3`
//         changingState();
//         });
// }

// else if (state === `part3`){
//     $(`#poem`).children().hide();
//     $(`#partThree-poem`).show(`blind`);
//     console.log(`poem p.3`)
//     $(`#partThree-poem`).on(`click`, function(event){
//         state = `part4`
//         changingState();
//         });
// }

// else if (state === `part4`){
//     $(`#poem`).children().hide();
//     $(`#partFour-poem`).show(`blind`);
//     console.log(`poem p.4`)
//     $(`#partFour-poem`).on(`click`, function(event){
//         state = `part5`
//         changingState();
//         });
// }
// else if (state === `part5`){
//     $(`#poem`).children().hide();
//     $(`#partFive-poem`).show(`blind`);
//     console.log(`poem p.5`)
//     $(`#partFive-poem`).on(`click`, function(event){
//         state = `part6`
//         changingState();
//         });
// }
// else if (state === `part6`){
//     $(`#poem`).children().hide();
//     $(`#partSix-poem`).show(`blind`);
//     console.log(`poem p.6`)
//     $(`#partSix-poem`).on(`click`, function(event){
//         state = `part7`
//         changingState();
//         });
// }
// else if (state === `part7`){
//     $(`#poem`).children().hide();
//     $(`#partSeven-poem`).show(`blind`);
//     console.log(`poem p.7`)
//     $(`#partSeven-poem`).on(`click`, function(event){
//         state = `part8`
//         changingState();
//         });
// }
// else if (state === `part8`){
//     $(`#poem`).children().hide();
//     $(`#partEight-poem`).show(`blind`);
//     console.log(`poem p.8`)
//     $(`#partEight-poem`).on(`click`, function(event){
//         state = `part9`
//         changingState();
//         });
// }
// else if (state === `part9`){
//     $(`#poem`).children().hide();
//     $(`#partNine-poem`).show(`blind`);
//     console.log(`poem p.9`)
//     $(`#partNine-poem`).on(`click`, function(event){
//         state = `part10`
//         changingState();
//         });
// }
// else if (state === `part10`){
//     $(`#poem`).children().hide();
//     $(`#partTen-poem`).show(`blind`);
//     console.log(`poem p.10`)
//     $(`#partTen-poem`).on(`click`, function(event){
//         state = `part11`
//         changingState();
//         });
// }
// else if (state === `part11`){
//     $(`#poem`).children().hide();
//     $(`#partEleven-poem`).show(`blind`);
//     console.log(`poem p.11`)
//     $(`#partEleven-poem`).on(`click`, function(event){
//         state = `part12`
//         changingState();
//         });
// }
// else if (state === `part12`){
//     $(`#poem`).children().hide();
//     $(`#partTwelve-poem`).show(`blind`);
//     console.log(`poem p.12`)
//     $(`#partTwelve-poem`).on(`click`, function(event){
//         state = `part13`
//         changingState();
//         });
// }

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

