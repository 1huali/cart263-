/**
The prisoner, jQuery exercice
Wawa Li

This is a template. You must fill in the title,
author, and this description to match your project!
*/

// modal doesnt work
$(`#escape-tunnel`).hide();

$(`#intro-dialog`).dialog({
  modal: true,
  resizable: false,
  buttons : {
    "Imagination" : function (){
      $(this).dialog(`close`);
    },
    "Escape tunnel" : function(){
      $(this).dialog(`close`);
      $(`#escape-tunnel`).show({
        effect: `blind`
      });
    }
  }
});

$(`#prisoner`).effect({
  effect: `shake`,
  duration: 2000,
  times: 15,
  distance: 7,
  complete: makePrisonerDraggable(),
});


$(`#escape-tunnel`).droppable({
  drop: function(event,ui){
    console.log(`escaped successful`);
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