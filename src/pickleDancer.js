var pickleDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="pickleDancer"></span>');
  makeDancer.prototype.setPosition.apply(this, [top, left])
};

pickleDancer.prototype = Object.create(makeDancer.prototype);
pickleDancer.prototype.constructor = pickleDancer;

pickleDancer.prototype.step = function(){
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