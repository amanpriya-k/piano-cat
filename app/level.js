import Piano from './piano';

const LEVELS = [
  {
    number: 1,
    notes: ['s', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    instructions: "Welcome! In this first level, you will be playing a simple major scale on the piano. Watch the keys light up and play, and then using your keyboard, play the same notes."
  },
  {
    number: 2,
    notes: ['s', 'f', 'h'],
    instructions: 'Great job! In this level, you will learn to play a C major chord.'
  }
]

class Level {
  
  constructor({ number, notes, instructions }, ctx, ctx2) {
    this.number = number;
    this.notes = notes;
    this.instructions = instructions;
    this.ctx = ctx;
    this.ctx2 = ctx2;
    this.instructionsEl = document.getElementById('instructions-el');
    this.startBtnEl = document.getElementById('start-btn');
    this.demoBtnEl = document.getElementById('demo-btn');
    this.messageEl = document.getElementById('message-box');

    this.startBtnEl.innerHTML = `next`;
    if (this.number != 0) this.startBtnEl.disabled = true;

    this.play = this.play.bind(this);
    this.demoSounds = this.demoSounds.bind(this);
    this.displayInstructions = this.displayInstructions.bind(this);
    this.startListening = this.startListening.bind(this);

    this.piano = new Piano();
    this.piano.draw(ctx, ctx2);

    document.addEventListener('keydown', (e) => {
      this.piano.handleKeyDown(e.key, ctx, ctx2, "green")
    }); 
  }

  newLevel({ number, notes, instructions }) {
    debugger
    this.startBtnEl.disabled = true;
    this.demoBtnEl.disabled = true;
    this.number = number;
    this.notes = notes;
    this.instructions = instructions;
  }

  displayInstructions() {
    this.instructionsEl.innerHTML = this.instructions;
    if (this.number === 0) {
      this.messageEl.innerHTML = `try out the piano or click next to start!`
      return;
    }
    this.messageEl.innerHTML = `level ${this.number}`
  }

  demoSounds() {
    this.notes.forEach(
      (note, idx) => {
        let timeout = (idx + 1) * 1000;
        console.log(timeout);
        window.setTimeout(() => this.piano.handleKeyDown(note, this.ctx, this.ctx2, "green"), timeout)
      }
    );
    if (this.number != 0) {
      this.demoBtnEl.disabled = false;
    }
  }

  startListening() {
    if (this.number === 0) {
      this.startBtnEl.disabled = false;
      return;
    }
    this.messageEl.innerHTML = `level ${this.number} - your turn!`
    let lettersPressed = [];
    document.addEventListener('keydown', (e) => {
      lettersPressed.push(e.key);
      let color;
      if (this.notes[lettersPressed.length - 1] === e.key) {
        color = 'green';
        this.messageEl.innerHTML = "nice!"
        this.messageEl.classList.add('good');
      } else {
        color = 'red';
        this.messageEl.innerHTML = "uh oh - start over!"
        this.messageEl.classList.add('bad');
        lettersPressed = [];
      }

      this.piano.handleKeyDown(e.key, this.ctx, this.ctx2, color);
      if (lettersPressed.length === this.notes.length) {
        this.startBtnEl.disabled = false;
        this.messageEl.innerHTML = "great job! click \'next\' to go to the next level.";
        this.messageEl.classList.add('good');
      }
    }); 
  }

  play() {
    this.displayInstructions();
    this.demoBtnEl.innerHTML = "play it again";
    this.demoBtnEl.disabled = true;
    this.demoBtnEl.addEventListener('click', this.demoSounds);
    window.setTimeout(this.demoSounds, 1000);
    const waitTime = 2000 + (this.notes.length * 1000);
    window.setTimeout(this.startListening, waitTime);
  }

}

export default Level;