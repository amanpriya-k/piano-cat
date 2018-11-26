import 'styles/reset.scss'
import 'styles/index.scss';

import '../assets/images/catty-t.png';
import '../assets/images/catty.png';
import '../assets/images/gradient.png';
import '../assets/images/keyhelper.png';
import '../assets/images/key_labels.png';
import '../assets/images/piano-cat.png';
import '../assets/images/spritesheet.png';
import '../assets/images/spritesheet1.png';
import '../assets/images/text-box.png';
import '../assets/images/Wiretap.jpg';

import Level from './level';

const LEVELS = [
  { number: 0,
      demo: [],
      notes: [],
      timeouts: [],
      instructions: "How To Play: There are 6 levels of the game! <br> I will play the notes for you, and you can play them back to me to go to the next level! Go ahead and try the piano out - remember, refer to the keyboard diagram to connect the notes to your keyboard."
  },
  { number: 1, 
       demo: [ 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ], 
       notes: [ 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ], 
       timeouts: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000],
       instructions: "Welcome! In this first level, you will be playing a simple major scale on the piano. <br> Watch the keys light up and play, and then using your keyboard, play <br> 'C D E F G A B'."
  },
  { number: 2,
       demo: [ 's', 'f', 'h', 's', 'f', 'h'],
       notes: [ 's', 'f', 'h'],
       timeouts: [1000, 2000, 3000, 4000, 4000, 4000],
    instructions: 'Great job! In this level, you will learn to play a C major chord. Play <br> \'C E G \''
  },
  { number: 3,
       demo: ['d', 'y', 'j', 'd', 'y', 'j'],
       notes: [ 'd', 'y', 'j'],
       timeouts: [1000, 2000, 3000, 4000, 4000, 4000],
       instructions: "Awesome! Now I'll show you a D chord. Play the notes <br> 'D F# A."
  },
  { number: 4,
       demo: ['s', 's', 'h', 'h', 'j', 'j', 'h', 'g', 'g', 'f', 'f', 'd', 'd', 's'],
       notes: ['s', 's', 'h', 'h', 'j', 'j', 'h', 'g', 'g', 'f', 'f', 'd', 'd', 's'],
       timeouts: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8500, 9500, 10500, 11500, 12500, 13500, 14500],
       instructions: "Nice job! Let's try and play a simple song now. Play the notes <br> 'C C G G A A G' <br> 'F F E E D D C'."
  },
  { number: 5,
       demo: [ 'j', 'h', 'g', 'h', 'j', 'j', 'j', 'h', 'h', 'h', 'j', 'l', 'l', 
               'j', 'h', 'g', 'h', 'j', 'j', 'j', 'j', 'h', 'h', 'j', 'h', 'g'],
       notes: ['j', 'h', 'g', 'h', 'j', 'j', 'j', 'h', 'h', 'h', 'j', 'l', 'l',
               'j', 'h', 'g', 'h', 'j', 'j', 'j', 'j', 'h', 'h', 'j', 'h', 'g'],
       timeouts: [1000, 1750, 2500, 3250, 4000, 4750, 5500,    6500, 7250, 8000,   9000, 9750, 10500,
                  11500, 12250, 13000, 13750,    14500, 15250, 16000, 16750,    17500, 18250,   19000, 19750, 20500 ],
    instructions: "Here's another song! This one's a little harder - follow after me: <br> 'A G F G A A A' <br> 'G G G - A C C' <br> 'A G F G A A A A' <br> 'G G A G F' "
  },
  { number: 6,
    demo: ['f', 'f', 'g', 'h', 'h', 'g', 'f', 'd', 's', 's', 'd', 'f', 'f',      'd', 'd',
           'f', 'f', 'g', 'h', 'h', 'g', 'f', 'd', 's', 's', 'd', 'f', 'd',      's', 's'],
    notes: ['f', 'f', 'g', 'h', 'h', 'g', 'f', 'd', 's', 's', 'd', 'f', 'f', 'd', 'd',
            'f', 'f', 'g', 'h', 'h', 'g', 'f', 'd', 's', 's', 'd', 'f', 'd', 's', 's'],
       timeouts: [1000, 1750, 2500, 3250, 4000, 4750, 5500, 6250, 7000, 7750, 8500, 9250, 10000,    11000, 11500,
                  12500, 13250, 14000, 14750, 15500, 16250, 17000, 17750, 18500, 19250, 20000, 20750, 21500,    22500, 23000],
       instructions: "This one's a little harder! You've got this! <br> 'E E F G G F E D' <br> 'C C D E E - D D' <br> 'E E F G G F E D' <br> 'C C D E D - C C' "
  },
  { number: 7,
    demo: ['l', 'k', 'l', 'k', 'l', 'h', 'i', 'u', 'g',
            's', 'g', 'u', 'h', 'g', 'h', 's',   
             'f', 'h', 'u', 'h', 'g'     ],
    notes: ['l', 'k', 'l', 'k', 'l', 'h', 'i', 'u', 'g',
            's', 'g', 'u', 'h', 'g', 'h', 's',
            'f', 'h', 'u', 'h', 'g'],
       timeouts: [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 
                  6000, 6500, 7000, 7500, 8000, 8500, 9000,
                  10000, 10500, 11000, 11500, 12000 ],
       instructions: "Ready for the last song? You can do it! <br> 'C B C B C G A# G# F' <br> 'C F G# G F G C' <br> 'E G G# G F' "
  },
  { number: 8,
       demo: [],
       notes: [],
    timeouts: [],
    instructions: "Yay! You completed all the levels! Thanks for playing - check out my other work through the links above! /ᐠ｡ꞈ｡ᐟ\\ "
  }
]
window.LEVELS = LEVELS;

const CURRENT_LEVEL = 0;
window.CURRENT_LEVEL = CURRENT_LEVEL;

window.LAST_LEVEL = window.LEVELS.length;

document.addEventListener("DOMContentLoaded", () => {
  console.log('webpack is working! !!!');

  const canvasEl = document.getElementById('canvas');
  const canvasEl2 = document.getElementById('canvas2');
  const canvasEl3 = document.getElementById('canvas3');
  const ctx = canvasEl.getContext('2d');
  const ctx2 = canvasEl2.getContext('2d');
  const startBtnEl = document.getElementById('start-btn');
  const demoBtnEl = document.getElementById('demo-btn');
  demoBtnEl.classList.add('hidden');
  
  const level = new Level(LEVELS[0], ctx, ctx2);
  
  startBtnEl.addEventListener('click', () => {
      if (window.CURRENT_LEVEL != 0) startBtnEl.disabled = true;
      nextBtn(level);
    }  
  );
});

const nextBtn = function(level) {
  if (window.CURRENT_LEVEL === window.LAST_LEVEL) {
    window.CURRENT_LEVEL = 0;
    level.newLevel(window.LEVELS[0]);
    level.play();
    return;
  }
  if (window.CURRENT_LEVEL === 0) {
    level.play();
  } else {
    document.getElementById('demo-btn').classList.remove('hidden');
    level.newLevel(window.LEVELS[window.CURRENT_LEVEL])
    level.play();
  }
  window.CURRENT_LEVEL += 1;
}