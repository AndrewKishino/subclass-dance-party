var pickleDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="pickleDancer"></span>');
  makeDancer.prototype.setPosition.apply(this, [top, left])
};

pickleDancer.prototype = Object.create(makeDancer.prototype);
pickleDancer.prototype.constructor = pickleDancer;

// bananaDancer.prototype.step = function(){

//   makeDancer.prototype.step.apply(this, arguments);  
//   this.$node.toggle();
// };