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

  // setTimeout(() => {
  //   $(`#theprisoner`).draggable(`disable`)
  // }, 5000);