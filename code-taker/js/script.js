/**
Da Vinci
Wawa Li

jQuery exercice
*/

"use strict";

$(`.secret`).on(`mouseover`, function(event){
$(this).addClass(`found`,500);
$(this).draggable({
    helper : 'clone'
});
$(this).droppable();
});