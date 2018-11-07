'use strict';

var app = app || {};
var data = data || {};

(function(module){
  module.Character = function() {
    this.hairColor = app.randomItem(data.hairColors);
    this.hairStyle = app.randomItem(data.hairStyles);
    this.eyeColor = app.randomItem(data.eyeColors);
    this.faceShape = app.randomItem(data.faceShapes);
    this.race = app.randomItem(data.races);
    this.gender = app.randomItem(data.genders);
    this.feature = app.randomItem(data.features);
    this.height =
      Math.floor(
        Math.random()
          * (this.race.maxHeight[this.gender]-this.race.minHeight[this.gender])
          + this.race.minHeight[this.gender]
      );
    this.weight =
      app.calcWeight(
        this.height,
        Math.floor(Math.random() * (this.race.maxBmi - this.race.minBmi) + this.race.minBmi)
      );
    this.orientation = app.randomItem(data.orientations);
    this.attitude = app.randomItem(data.attitudes);
    this.background = app.randomItem(data.backgrounds);
    this.hobby = app.randomItem(data.hobbies);
    this.traits = [app.randomItem(data.traits), app.randomItem(data.traits)];
    this.motivation = app.randomItem(data.motivations);
  };
})(app);
