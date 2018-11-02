import 'styles/reset.scss'
import 'styles/index.scss';

import Level from './level';

const LEVELS = [
  { number: 0,
      notes: [],
      timeouts: [],
      instructions: "How To Play: There are 5 levels of the game! In each level you will learn a basic piano skill. I will play the notes for you, and you can play them back to me to go to the next level!"
  },
  { number: 1, 
       notes: [ 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ], 
       timeouts: [],
       instructions: "Welcome! In this first level, you will be playing a simple major scale on the piano. Watch the keys light up and play, and then using your keyboard, play 'C D E F G A B'."
  },
  { number: 2, 
       notes: [ 'e', 'r', 'y', 'u', 'i', 'o' ], 
       timeouts: [],
       instructions: "In the second level, you will learn the black keys. Play 'C# D# F# G# A#'."
  },
  { number: 3,
       notes: [ 's', 'f', 'h'],
       timeouts: [],
       instructions: 'Great job! In this level, you will learn to play a C major chord.'
  }
]
window.LEVELS = LEVELS;

const CURRENT_LEVEL = 0;
window.CURRENT_LEVEL = CURRENT_LEVEL;

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
  
  startBtnEl.addEventListener('click', () => {
    // window.THROTTLE = true;
    // if (window.CURRENT_LEVEL >= 1 ) {
    //   const startBtnEl = document.getElementById('start-btn');
    //   startBtnEl.parentNode.removeChild(startBtnEl);
    // }
    // if (!window.THROTTLE || window.CURRENT_LEVEL == 0) {
      nextBtn(level);
    //   if (window.CURRENT_LEVEL != 0) {
    //     window.THROTTLE = true;
    //   }
    // }

    }  
  );
});

const nextBtn = function(level) {
  if (window.CURRENT_LEVEL === 0) {
    level.play();
  } else {
    document.getElementById('demo-btn').classList.remove('hidden');
    level.newLevel(window.LEVELS[window.CURRENT_LEVEL])
    level.play();
  }
  window.CURRENT_LEVEL += 1;
}