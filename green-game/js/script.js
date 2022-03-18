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

//when clicked, money becomes a gain
$(`.liquidity`).on(`click`, function(event){
    $(this).addClass(`gain`);
    $(this).removeClass(`untouched`);
    bank +=1;
    console.log(bank);
});

// +1 everytime user clicks

// function plusOne(){
//     setTimeout(function() {
//         // hideSecret = true;
//         $(`.revealed`).
//       }, 3000)
// }

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
