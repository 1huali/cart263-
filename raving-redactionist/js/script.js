/**
Raving redactionist
Wawa Li

Webpage of text with some passages “redacted” (covered in black bars). Over time the redactions will disappear, 
revealing the shocking secret text beneath them. The user is in charge of keeping the information secret, 
so they click the secret text to restore the redaction
*/

"use strict";

setInterval (revelation,500);

function revelation(){
    $(`.redacted`).each(function(){
        let number = Math.random(0,1);
        console.log(number);
        if (number < 0.2){
        $(this).removeClass(`.redacted`);
        $(this).addClass(`.revealed`);
        }
    });
}