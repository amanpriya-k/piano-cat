import 'styles/reset.scss'
import 'styles/index.scss';

import Piano from './piano';
import Level from './level';

const LEVELS = [
  { number: 1, 
       notes: [ 's', 'f', 'g', 'h', 'j', 'k', 'l' ], 
       instructions: "Welcome! In this first level, you will be playing a simple major scale on the piano. Watch the keys light up and play, and then using your keyboard, play the same notes."},
  { number: 2,
       notes: [ 's', 'g', 'j'],
       instructions: 'Great job! In this level, you will learn to play a C major chord.'
  }
]

document.addEventListener("DOMContentLoaded", () => {
  console.log('webpack is working!');

  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');

  const instructionsEl = document.getElementById('instructions-el');

  const level = new Level(LEVELS[0], ctx, instructionsEl);
});