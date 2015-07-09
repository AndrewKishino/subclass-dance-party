var burritoDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="burritoDancer"></span>');
  makeDancer.prototype.setPosition.apply(this, [top, left])
};

burritoDancer.prototype = Object.create(makeDancer.prototype);
burritoDancer.prototype.constructor = burritoDancer;

// burritoDancer.prototype.step = function(){

//   makeDancer.prototype.step.apply(this, arguments);  
//   this.$node.toggle();
// };