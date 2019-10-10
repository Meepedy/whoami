'use strict';

var app = app || {};

(function(module){
  module.displayCharacter = function(char) {
    document.getElementById('hair').innerText = `${char.hairColor}, ${char.hairStyle}`;
    document.getElementById('eyes').innerText = `${char.eyeColor}`;
    document.getElementById('faceShape').innerText = `${char.faceShape}`;
    document.getElementById('height').innerText = `${formatHeight(char.height)}`;
    document.getElementById('weight').innerText = `${char.weight}lbs`;
    document.getElementById('race').innerText = `${char.race.name}`;
    document.getElementById('gender').innerText = `${char.gender}`;
    document.getElementById('feature').innerText = `${char.feature}`;
    document.getElementById('orientation').innerText = `${char.orientation}`;
    document.getElementById('attitude').innerText = `${char.attitude}`;
    document.getElementById('trait1').innerText = `- ${char.traits[0]}`;
    document.getElementById('trait2').innerText =`- ${char.traits[1]}`;
    document.getElementById('background').innerText = `${char.background}`;
    document.getElementById('hobby').innerText = `${char.hobby}`;
    document.getElementById('motivation').innerText = `${char.motivation}`;
  };

  function formatHeight(height) {
    let feet = Math.floor(height / 12.0);
    let inches = Math.floor(height % 12.0);

    return `${feet}' ${inches}"`;
  }
    
  module.main = function() {
    let character = new app.Character();
    
    module.displayCharacter(character);
  };
})(app);
