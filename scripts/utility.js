'use strict';

var app = app || {};
(function(module){
  module.randomItem = function(array) {
    let randomIndex = Math.floor(Math.random() * Math.floor(array.length));
    return array[randomIndex];
  };
  module.calcWeight = function(heightInInches, bmi) {
    return Math.floor(Math.pow(heightInInches, 2)*bmi/703);
  };
})(app);
