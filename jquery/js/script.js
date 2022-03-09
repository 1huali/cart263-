/**
The prisoner, jQuery exercice
Wawa Li

This is a template. You must fill in the title,
author, and this description to match your project!
*/

// think jQuery doesnt work
$(`#prisoner`).draggable({
    containment: `#prison`,
    start: function(event,ui){
      $(this).css(`text-decoration`,`underline`);
    },
      stop: function(event,ui){
        $(this).css(`text-decoration`,`none`);
      }
  });

$(`escape-tunnel`).droppable({
  drop: function(event,ui){
    console.log(`dropped successful`);
    $(`#prisoner`).remove();
  }
})