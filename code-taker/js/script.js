/**
Da Vinci
Wawa Li

jQuery exercice
*/

"use strict";


$(`#solved-dialog`).dialog({
    autoOpen : false,
    buttons: {
        "lol" : function (){
            $(this).dialog(`close`);
        }
    }
});

$(`.secret`).on(`mouseover`, function(event){
$(this).addClass(`found`,500);
$(this).draggable({
    helper : 'clone'
});
});

$(`#answer`).droppable({
drop: function (event,ui){
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);
if ($(this).text() === `Theremin`){
    $(`#solved-dialog`).dialog(`open`)
}
}
});

