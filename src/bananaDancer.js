var bananaDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="bananaDancer"></span>');
  makeDancer.prototype.setPosition.apply(this, [top, left])
};

bananaDancer.prototype = Object.create(makeDancer.prototype);
bananaDancer.prototype.constructor = bananaDancer;

bananaDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.apply(this, arguments);  
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node[0].style.left = $("body").width() * Math.random() + 'px';
  this.$node[0].style.top = $("body").height() * Math.random() + 'px';
};

// bananaDancer.prototype.step = function(){

//   makeDancer.prototype.step.apply(this, arguments);  
//   this.$node.toggle();
// };