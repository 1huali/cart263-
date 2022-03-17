/**
Raving redactionist
Wawa Li

Webpage of text with some passages “redacted” (covered in black bars). Over time the redactions will disappear, 
revealing the shocking secret text beneath them. The user is in charge of keeping the information secret, 
so they click the secret text to restore the redaction
*/

"use strict";

$(`.topSecret`).on(`click`, function(event){
    $(this).addClass(`redacted`);
    $(this).removeClass(`revealed`);
});

setInterval (revelation, 1000);
function revelation(){
    $(`.redacted`).each(function(){
        let number = Math.random();
        console.log(number);
        if (number < 0.2){
        $(this).removeClass(`redacted`);
        console.log(this);
        $(this).addClass(`revealed`);
            console.log(`removes class`)
            console.log(`add new class`)
}
    });
}
