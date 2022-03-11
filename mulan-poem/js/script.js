/**
Da Vinci
Wawa Li

jQuery UI exercice
*/

"use strict";
let state = `part1`;
changingState();


function changingState(){
if (state === `part1`){
    $(`#poem`).children().hide();
    $(`#partOne-poem`).show(`blind`);
    $(`#partOne-poem`).on(`click`, function(event){
        state = `part2`;
        changingState();
        console.log(`poem p.1`)
        console.log(state);
        });
}

else if (state === `part2`){
    $(`#poem`).children().hide();
    $(`#partTwo-poem`).show(`blind`);
    console.log(`poem p.2`)
    $(`#partTwo-poem`).on(`click`, function(event){
        state = `part3`
        changingState();
        });
}

else if (state === `part3`){
    $(`#poem`).children().hide();
    $(`#partThree-poem`).show(`blind`);
    console.log(`poem p.3`)
    $(`#partThree-poem`).on(`click`, function(event){
        state = `part4`
        changingState();
        });
}

else if (state === `part4`){
    $(`#poem`).children().hide();
    $(`#partFour-poem`).show(`blind`);
    console.log(`poem p.4`)
    $(`#partFour-poem`).on(`click`, function(event){
        state = `part5`
        changingState();
        });
}
else if (state === `part5`){
    $(`#poem`).children().hide();
    $(`#partFive-poem`).show(`blind`);
    console.log(`poem p.5`)
    $(`#partFive-poem`).on(`click`, function(event){
        state = `part6`
        changingState();
        });
}
else if (state === `part6`){
    $(`#poem`).children().hide();
    $(`#partSix-poem`).show(`blind`);
    console.log(`poem p.6`)
    $(`#partSix-poem`).on(`click`, function(event){
        state = `part7`
        changingState();
        });
}
else if (state === `part7`){
    $(`#poem`).children().hide();
    $(`#partSeven-poem`).show(`blind`);
    console.log(`poem p.7`)
    $(`#partSeven-poem`).on(`click`, function(event){
        state = `part8`
        changingState();
        });
}
else if (state === `part8`){
    $(`#poem`).children().hide();
    $(`#partEight-poem`).show(`blind`);
    console.log(`poem p.8`)
    $(`#partEight-poem`).on(`click`, function(event){
        state = `part9`
        changingState();
        });
}
else if (state === `part9`){
    $(`#poem`).children().hide();
    $(`#partNine-poem`).show(`blind`);
    console.log(`poem p.9`)
    $(`#partNine-poem`).on(`click`, function(event){
        state = `part10`
        changingState();
        });
}
else if (state === `part10`){
    $(`#poem`).children().hide();
    $(`#partTen-poem`).show(`blind`);
    console.log(`poem p.10`)
    $(`#partTen-poem`).on(`click`, function(event){
        state = `part11`
        changingState();
        });
}
else if (state === `part11`){
    $(`#poem`).children().hide();
    $(`#partEleven-poem`).show(`blind`);
    console.log(`poem p.11`)
    $(`#partEleven-poem`).on(`click`, function(event){
        state = `part12`
        changingState();
        });
}
else if (state === `part12`){
    $(`#poem`).children().hide();
    $(`#partTwelve-poem`).show(`blind`);
    console.log(`poem p.12`)
    $(`#partTwelve-poem`).on(`click`, function(event){
        state = `part13`
        changingState();
        });
}

}

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

