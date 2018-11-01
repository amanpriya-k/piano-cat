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
  
  constructor({ number, notes, instructions }, ctx) {
    this.number = number;
    this.notes = notes;
    this.instructions = instructions;
    this.ctx = ctx;
    this.instructionsEl = document.getElementById('instructions-el');
    this.startBtnEl = document.getElementById('start-btn');
    this.messageEl = document.getElementById('message-box');

    this.play = this.play.bind(this);
    this.demoSounds = this.demoSounds.bind(this);
    this.displayInstructions = this.displayInstructions.bind(this);
    this.startListening = this.startListening.bind(this);

    this.piano = new Piano();
    this.piano.draw(ctx);

    document.addEventListener('keydown', (e) => {
      this.piano.handleKeyDown(e.key, ctx, "green")
    }); 
  }

  displayInstructions() {
    this.messageEl.innerHTML = `level ${this.number} - watch this!`
    this.instructionsEl.innerHTML = this.instructions;
  }

  demoSounds() {
    this.notes.forEach(
      (note, idx) => {
        let timeout = (idx + 1) * 1000;
        console.log(timeout);
        window.setTimeout(() => this.piano.handleKeyDown(note, this.ctx, "green"), timeout)
      }
    );
  }

  setButton() {
    this.startBtnEl.innerHTML = `next`;

    this.startBtnEl.disabled = true;
    this.startBtnEl.classList.remove('start-btn');
    this.startBtnEl.classList.add('start-btn-disabled');

    let nextLevel = new Level(LEVELS[this.number], this.ctx);
    debugger
    this.startBtnEl.addEventListener(
      'click', nextLevel.play
    )
  }

  startListening() {
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

      this.piano.handleKeyDown(e.key, this.ctx, color);
      if (lettersPressed.length === this.notes.length) {
        this.startBtnEl.disabled = false;
        this.startBtnEl.classList.add('start-btn');
        this.startBtnEl.classList.remove('start-btn-disabled');
        this.messageEl.innerHTML = "great job! click \'next\' to go to the next level.";
        this.messageEl.classList.add('good');
      }
    }); 
  }

  play() {
    this.displayInstructions();
    this.setButton();
    window.setTimeout(this.demoSounds, 4000);
    const waitTime = 5000 + (this.notes.length * 1000);
    window.setTimeout(this.startListening, waitTime);
  }

}

export default Level;