import 'styles/reset.scss'
import 'styles/index.scss';

import Level from './level';

const LEVELS = [
  { number: 0,
      notes: [],
      instructions: "How To Play: There are 5 levels of the game! In each level you will learn a basic piano skill. I will play the notes for you, and you can play them back to me to go to the next level!"
  },
  { number: 1, 
       notes: [ 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ], 
       instructions: "Welcome! In this first level, you will be playing a simple major scale on the piano. Watch the keys light up and play, and then using your keyboard, play the same notes."
  },
  { number: 2,
       notes: [ 's', 'f', 'h'],
       instructions: 'Great job! In this level, you will learn to play a C major chord.'
  }
]
window.LEVELS = LEVELS;

const CURRENT_LEVEL = 0;
window.CURRENT_LEVEL = CURRENT_LEVEL;

// const HOW_TO_PLAY = "How To Play: There are 5 levels of the game! In each level you will learn a basic piano skill. I will play the notes for you, and you can play them back to me to go to the next level!";

document.addEventListener("DOMContentLoaded", () => {
  console.log('webpack is working!');

  const canvasEl = document.getElementById('canvas');
  const canvasEl2 = document.getElementById('canvas2');
  const ctx = canvasEl.getContext('2d');
  const ctx2 = canvasEl2.getContext('2d');

  const startBtnEl = document.getElementById('start-btn');
  const demoBtnEl = document.getElementById('demo-btn');
  demoBtnEl.classList.add('hidden');

  const level = new Level(LEVELS[0], ctx, ctx2);

  // global variable of 'levels'
  // global variable of current level
  // function attached to next btn that 

  // demoBtnEl.addEventListener('click', () => {
  //   document.getElementById('instructions-el').innerHTML = HOW_TO_PLAY;
  // })

  startBtnEl.addEventListener('click', () => {
      nextBtn(level);
    }  
  );

});

const nextBtn = function(level) {
  debugger
  if (window.CURRENT_LEVEL === 0) {
    level.play();
  } else {
    document.getElementById('demo-btn').classList.remove('hidden');
    level.newLevel(window.LEVELS[window.CURRENT_LEVEL])
    level.play();
  }
  window.CURRENT_LEVEL += 1;
}