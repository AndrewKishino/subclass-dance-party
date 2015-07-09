$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".removeDancerButton").on("click", function(event){
    $('.dancer').remove();
    $('.bananaDancer').remove();
    $('.pickleDancer').remove();
    $('.burritoDancer').remove();
    window.dancers = [];
  });



  $(".addBananaDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var bananaDancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(bananaDancer.$node);
    window.dancers.push(bananaDancer);
  });



  $(".addPickleDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var pickleDancer = new dancerMakerFunction(
      $(".perspective").height() * Math.random(),
      $(".perspective").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(pickleDancer.$node);
    window.dancers.push(pickleDancer);
  });


  $(".addBurritoDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var burritoDancer = new dancerMakerFunction(
      $(".perspective").height() * Math.random(),
      $(".perspective").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(burritoDancer.$node);
    window.dancers.push(burritoDancer);
  });


  $(".lineUp").on("click", function(event){
     var height = $("body").height();
     var width = ($("body").width())*.90;

     var spacing = width/window.dancers.length;
     var lastDancerPos = 0;


     for(var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node[0].style.top = height/2.5 + 'px';
      window.dancers[i].$node[0].style.left = lastDancerPos + 'px';
      lastDancerPos += spacing;
     }
     var id = window.setTimeout(function() {}, 0);
     while (id--) {
      window.clearTimeout(id);
     }
  });

  $(".danceOn").on("click", function(event){
    var dance = window.dancers;
    for(var i = 0; i < dance.length; i++){
      dance[i].step();
    }
  });

  $( "body" ).on("mouseenter", ".bananaDancer" ,function() {
    $(this).toggleClass('rotate');
  });
  $( "body" ).on("mouseleave", ".bananaDancer" ,function() {
    $(this).toggleClass('rotate');
  });


  $( "body" ).on("mouseenter", ".pickleDancer" ,function() {
    $(this).toggleClass('flip');
  });
  $( "body" ).on("mouseleave", ".pickleDancer" ,function() {
    $(this).toggleClass('flip');
  });


  $( "body" ).on("mouseenter", ".burritoDancer" ,function() {
    $(this).toggleClass('rotate');
  });
  $( "body" ).on("mouseleave", ".burritoDancer" ,function() {
    $(this).toggleClass('rotate');
  });
});

