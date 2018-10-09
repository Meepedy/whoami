'use strict';

var app = app || {};
(function(module){
    module.randomItem = function(array) {
        let randomIndex = Math.floor(Math.random() * Math.floor(array.length));
        return array[randomIndex];
    }
})(app);
