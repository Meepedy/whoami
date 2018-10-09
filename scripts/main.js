'use strict';

function displayCharacter(char) {
    console.log(`Hair: ${char.hairColor}, ${char.hairStyle}`);
    console.log(`Eyes: ${char.eyeColor}`);
    console.log(`Face Shape: ${char.faceShape}`);
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