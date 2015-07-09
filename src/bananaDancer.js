var bananaDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="bananaDancer"></span>');
  makeDancer.prototype.setPosition.apply(this, [top, left])
};

bananaDancer.prototype = Object.create(makeDancer.prototype);
bananaDancer.prototype.constructor = bananaDancer;

// bananaDancer.prototype.step = function(){

//   makeDancer.prototype.step.apply(this, arguments);  
//   this.$node.toggle();
// };