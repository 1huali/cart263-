/**
The prisoner, jQuery exercice
Wawa Li

This is a template. You must fill in the title,
author, and this description to match your project!
*/

$(`#prisoner`).effects({
  effect: `shake`,
  duration: 2000,
  times: 15,
  distance: 7
});

// think jQuery doesnt work
$(`#prisoner`).draggable({
    containment: `#prison`,
    start: function(event,ui){
      $(this).css(`text-decoration`,`underline`);
      $(this).animate({
        `color`: `#4444ff`
      },750);
    },
      stop: function(event,ui){
        $(this).css(`text-decoration`,`none`);
        $(this).animate({
          `color`: `#black`
        },750);
      }
  });

$(`escape-tunnel`).droppable({
  drop: function(event,ui){
    console.log(`dropped successful`);
    $(`#prisoner`).remove();
  }
})