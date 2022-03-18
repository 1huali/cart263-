/**
Raving redactionist
Wawa Li

Webpage of text with some passages “redacted” (covered in black bars). Over time the redactions will disappear, 
revealing the shocking secret text beneath them. The user is in charge of keeping the information secret, 
so they click the secret text to restore the redaction
*/

"use strict";
let bank=0;
// gain/point counter

//when clicked, money becomes a +1 in bank and .gain class
$(`.liquidity`).on(`click`, function(event){
    $(this).addClass(`gain`);
    $(this).removeClass(`untouched`);
    bank +=1;
    plusOneSign();
    console.log("+1!!")
    console.log(bank);
});

// Q: how to display DOESNT WORK
function displayBank (){
        $(`.liquidity`).click(function() {
          $(`#moneyGain`).text($(bank));
        });
    // $(`#moneyGain`).text(`blind`);
}

// +1 text replaces the flying dollar icon for 1 second when user clicks (gratification feature) 
//DOESNT WORK
function plusOneSign(){
    setTimeout(function() {
$(`.revealed`).text("+1");
$(`img`).text("+1");
        }, 600);
      };


// money reveals and hide randomly
setInterval (revelation, 500);
setInterval (hide, 200);

function revelation(){
    $(`.hidden`).each(function(){
        let number = Math.random();
        // console.log(number);
        if (number < 0.2){
        $(this).removeClass(`hidden`);
        $(this).addClass(`revealed`);
            // console.log(`removes class`)
            // console.log(`add new class`)
}
    });
}

function hide(){
    $(`.revealed`).each(function(){
        let number = Math.random();
        // console.log(number);
        if (number < 0.2){
        $(this).removeClass(`revealed`);
        $(this).addClass(`hidden`);
            // console.log(`removes class`)
            // console.log(`add new class`)
}
    });
}
