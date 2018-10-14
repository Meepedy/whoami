'use strict';

var data = data || {};

(function(module){

  module.hairColors = [
    'black',
    'brown',
    'auburn',
    'blonde',
    'red',
    'jet black',
    'dark brown',
    'light brown',
    'white',
    'grey',
    'silver'
  ];

  module.hairStyles = [
    'bald',
    'short-cropped',
    'shoulder-length',
    'long',
    'spiky',
    'wavy',
    'cornrows',
    'bobbed',
    'ponytail',
    'topknot',
    'waist-length',
    'buns',
    'braid',
    'mullet',
    'pigtails'
  ];

  module.eyeColors = [
    'amber',
    'blue',
    'brown',
    'hazel',
    'green',
    'emerald',
    'silver',
    'heterochromia'
  ];

  module.faceShapes = [
    'oval',
    'thin',
    'round',
    'chiseled',
    'square',
    'heart',
    'triangle'
  ];

  module.races = [
    {
      name: 'human',
      minHeight: {
        'male' : 5*12,
        'female': 4*12+7,
        'none': 4*12+7
      },
      maxHeight: {
        'male': 6*12+6,
        'female': 6*12+1,
        'none': 6*12+6
      },
      minBmi: 18,
      maxBmi: 30
    },
    {
      name: 'elf',
      minHeight: {
        'male' : 5*12+3,
        'female': 4*12+11,
        'none': 4*12+11
      },
      maxHeight: {
        'male': 6*12+1,
        'female': 5*12+9,
        'none': 6*12+1
      },
      minBmi: 16,
      maxBmi: 25
    },
    {
      name: 'dwarf',
      minHeight: {
        'male' : 3*12+11,
        'female': 3*12+9,
        'none': 3*12+9
      },
      maxHeight: {
        'male': 4*12+5,
        'female': 4*12+3,
        'none': 4*12+5
      },
      minBmi: 18,
      maxBmi: 30
    },
    {
      name: 'goblin',
      minHeight: {
        'male' : 2*12+9,
        'female': 2*12+7,
        'none': 2*12+7
      },
      maxHeight: {
        'male': 3*12+3,
        'female': 3*12+1,
        'none': 3*12+3
      },
      minBmi: 16,
      maxBmi: 25
    },
    {
      name: 'orc',
      minHeight: {
        'male' : 6*12+8,
        'female': 6*12+2,
        'none': 6*12+2
      },
      maxHeight: {
        'male': 8*12+6,
        'female': 8*12,
        'none': 8*12+6
      },
      minBmi: 25,
      maxBmi: 41
    }
  ];

  module.genders = [
    'male',
    'female',
    'none'
  ];

  module.orientations = [
    'straight',
    'gay',
    'bi'
  ];

  module.attitudes = [
    'confident',
    'contempuous',
    'devious',
    'proud',
    'optimistic',
    'pessimistic',
    'encouraging',
    'fair',
    'just',
    'religious',
    'humble'
  ];

  module.hobbies = [
    'whittling',
    'carving',
    'darts',
    'tournaments',
    'fishing',
    'hunting',
    'painting',
    'pottery',
    'needlecraft',
    'archery',
    'knucklebones',
    'chess',
    'performance',
    'stargazing',
    'gambling',
    'reading'
  ];

  module.traits = [
    'arrogant',
    'anxious',
    'envious',
    'stable',
    'brave',
    'trusting',
    'meticulous',
    'fierce',
    'unkempt',
    'adventurous',
    'charismatic',
    'good-natured',
    'passionate',
    'loyal'
  ];

  module.motivations = [
    'money',
    'power',
    'fame',
    'family',
    'friends',
    'revenge',
    'curiousity',
    'honour',
    'idealism',
    'independence',
    'acceptance',
    'freedom'
  ];

})(data);
