/**
The prisoner, jQuery exercice
Wawa Li

This is a template. You must fill in the title,
author, and this description to match your project!
*/

$(`#prisoner`).effect({
  effect: `shake`,
  duration: 2000,
  times: 15,
  distance: 7,
  complete: makePrisonerDraggable(),
});

// think jQuery doesnt work

$(`#escape-tunnel`).droppable({
  drop: function(event,ui){
    console.log(`dropped successful`);
    $(`#prisoner`).remove();
    $(this).hide({
      effect: `blind`,
      duration: 500,
    });
  }
})

function makePrisonerDraggable(){
  $(`#prisoner`).draggable({
    containment: `#prison`,
    start: function(event,ui){
      $(this).css(`text-decoration`,`underline`);
      $(this).animate({
        color: `#4444ff`
      },750);
    },
      stop: function(event,ui){
        $(this).css(`text-decoration`,`none`);
        $(this).animate({
          color: `#black`
        },750);
      }
  });
}