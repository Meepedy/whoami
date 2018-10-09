'use strict';

var app = app || {}

(function(module) {
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
        for (trait in char.psychologicalTraits) {
            console.log(`- ${trait}`);
        }
        console.log(`Hobby: ${char.hobby}`);
        console.log(`Motivation: ${char.motivation}`);
    }

    function formatHeight(height) {
        let feet = Math.floor(height / 12.0);
        let inches = Math.floor(height % 12.0);

        return `${feet}' ${inches}"`;
    }
    
    module.main = function() {
        let character = new Character();
    
        displayCharacter(character);
    }
})(app);
