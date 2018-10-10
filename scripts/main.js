'use strict';

var app = app || {};

(function(module){
  module.displayCharacter = function(char) {
    console.log(`Hair: ${char.hairColor}, ${char.hairStyle}`);
    console.log(`Eyes: ${char.eyeColor}`);
    console.log(`Face Shape: ${char.faceShape}`);
    console.log(`Height: ${formatHeight(char.height)}`);
    console.log(`Weight: ${char.weight}lbs`);
    console.log(`Race: ${char.race}`);
    console.log(`Gender: ${char.gender}`);
    console.log(`Orientation: ${char.orientation}`);
    console.log(`Attitude: ${char.attitude}`);
    console.log('Traits: ');
    char.traits.forEach(trait => {
      console.log(`- ${trait}`);
    });
    console.log(`Hobby: ${char.hobby}`);
    console.log(`Motivation: ${char.motivation}`);

    document.getElementById('hair').innerText = `${char.hairColor}, ${char.hairStyle}`;
    document.getElementById('eyes').innerText = `${char.eyeColor}`;
    document.getElementById('faceShape').innerText = `${char.faceShape}`;
    document.getElementById('height').innerText = `${formatHeight(char.height)}`;
    document.getElementById('weight').innerText = `${char.weight}lbs`;
    document.getElementById('race').innerText = `${char.race}`;
    document.getElementById('gender').innerText = `${char.gender}`;
    document.getElementById('orientation').innerText = `${char.orientation}`;
    document.getElementById('attitude').innerText = `${char.attitude}`;
    document.getElementById('trait1').innerText = `- ${char.traits[0]}`;
    document.getElementById('trait2').innerText =`- ${char.traits[1]}`;
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
