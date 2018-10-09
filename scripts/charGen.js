'use strict';

var app = app || {};
var data = data || {};

(function(module){
  module.Character = function() {
    this.hairColor = app.randomItem(data.hairColors);
    this.hairStyle = app.randomItem(data.hairStyles);
    this.eyeColor = app.randomItem(data.eyeColors);
    this.faceShape = app.randomItem(data.faceShapes);
    this.height = Math.floor(Math.random() * 80);
    this.weight = Math.floor(Math.random() * 300);
    this.race = app.randomItem(data.races);
    this.gender = app.randomItem(data.genders);
    this.orientation = app.randomItem(data.orientations);
    this.attitude = app.randomItem(data.attitudes);
    this.hobby = app.randomItem(data.hobbies);
    this.traits = [app.randomItem(data.traits), app.randomItem(data.traits)];
    this.motivation = app.randomItem(data.motivations);
  };
})(app);
