import 'styles/reset.scss'
import 'styles/index.scss';

// require('../assets/images');
// require('../assets/sounds');

import '../assets/images/catty-t.png';
import '../assets/images/catty.png';
import '../assets/images/gradient.png';
import '../assets/images/keyhelper.png';
import '../assets/images/piano-cat.png';
import '../assets/images/spritesheet.png';
import '../assets/images/spritesheet1.png';
import '../assets/images/text-box.png';
import '../assets/images/Wiretap.jpg';

import '../assets/sounds/a.wav';
import '../assets/sounds/asharp.wav';
import '../assets/sounds/b.wav';
import '../assets/sounds/c.wav';
import '../assets/sounds/csharp.wav';
import '../assets/sounds/d.wav';
import '../assets/sounds/dsharp.wav';
import '../assets/sounds/e.wav';
import '../assets/sounds/f.wav';
import '../assets/sounds/fsharp.wav';
import '../assets/sounds/g.wav';
import '../assets/sounds/gsharp.wav';
import '../assets/sounds/hiC.wav';

import Level from './level';

const LEVELS = [
  { number: 0,
      demo: [],
      notes: [],
      timeouts: [],
      instructions: "How To Play: There are 5 levels of the game! In each level you will learn a basic piano skill. I will play the notes for you, and you can play them back to me to go to the next level!"
  },
  { number: 1, 
       demo: [ 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ], 
       notes: [ 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ], 
       timeouts: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000],
       instructions: "Welcome! In this first level, you will be playing a simple major scale on the piano. Watch the keys light up and play, and then using your keyboard, play <br> 'C D E F G A B'."
  },
  { number: 3,
       demo: [ 's', 'f', 'h', 's', 'f', 'h'],
       notes: [ 's', 'f', 'h'],
       timeouts: [1000, 2000, 3000, 4000, 4000, 4000],
    instructions: 'Great job! In this level, you will learn to play a C major chord. Play <br> \'C E G \''
  },
  { number: 4,
       demo: ['d', 'y', 'j', 'd', 'y', 'j'],
       notes: [ 'd', 'y', 'j'],
       timeouts: [1000, 2000, 3000, 4000, 4000, 4000],
       instructions: "Awesome! Now I'll show you a D chord. Play the notes <br> 'D F# A."
  },
  { number: 5,
       demo: ['l', 'k', 'j', 'h', 'g'],
       notes: [ 'd', 'y', 'j'],
       timeouts: [1000, 1750, 2500, 3250, 2550],
       instructions: "You're ready to start playing a song! Follow after me: <br> 'C B A G F'"
  }
]
window.LEVELS = LEVELS;

const CURRENT_LEVEL = 0;
window.CURRENT_LEVEL = CURRENT_LEVEL;

document.addEventListener("DOMContentLoaded", () => {
  console.log('webpack is working! 1');

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
      if (window.CURRENT_LEVEL != 0) startBtnEl.disabled = true;
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