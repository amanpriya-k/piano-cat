import Piano from './piano';


class Level {
  
  constructor({ number, demo, notes, timeouts, instructions }, ctx, ctx2) {
    this.number = number;
    this.demo = demo;
    this.notes = notes;
    this.timeouts = timeouts;
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
    this.handleListen = this.handleListen.bind(this);

    this.piano = new Piano();
    this.piano.draw(ctx, ctx2);

    document.addEventListener('keypress', (e) => {
      this.piano.handleKeyDown(e.key, ctx, ctx2, "green")
    }); 
  }

  newLevel({ number, demo, notes, timeouts, instructions }) {
    this.startBtnEl.disabled = true;
    this.demoBtnEl.disabled = true;
    this.number = number;
    this.demo = demo;
    this.notes = notes;
    this.timeouts = timeouts;
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
    this.demo.forEach(
      (note, idx) => {
        let timeout = this.timeouts[idx]
        console.log(timeout);
        window.setTimeout(() => this.piano.handleKeyDown(note, this.ctx, this.ctx2, "green"), timeout)
      }
    );
    if (this.number != 0) {
      this.demoBtnEl.disabled = false;
    }
  }

  startListening() {
    console.log('listening')
    if (this.number === 0) {
      this.startBtnEl.disabled = false;
      return;
    }
    let lettersPressed = [];
    this.messageEl.innerHTML = `level ${this.number} - your turn!`

    document.addEventListener('keypress', (e) => 
      lettersPressed = this.handleListen(e, lettersPressed)
    ); 
  }

  handleListen(e, lettersPressed) {
      e.stopPropagation();
      e.preventDefault();
      if (lettersPressed.length != this.notes.length) {

        lettersPressed.push(e.key);
        let color;

        if (this.notes[lettersPressed.length - 1] != e.key) {
          color = 'red';
          this.messageEl.innerHTML = "uh oh - start over!"
          this.messageEl.classList.remove('good');
          this.messageEl.classList.add('bad');
          lettersPressed = [];
        } else {
          color = 'green';
          this.messageEl.innerHTML = "nice!"
          this.messageEl.classList.remove('bad');
          this.messageEl.classList.add('good');
        }

        this.piano.handleKeyDown(e.key, this.ctx, this.ctx2, color);
      }

      if (lettersPressed.length === this.notes.length) {
        this.startBtnEl.disabled = false;
        this.messageEl.innerHTML = "great job! click \'next\' to go to the next level.";
        this.messageEl.classList.add('good');
        return lettersPressed;
      }
      return lettersPressed;
  }

  play() {
    this.displayInstructions();
    this.demoBtnEl.innerHTML = "play it again";
    this.demoBtnEl.disabled = true;
    this.demoBtnEl.addEventListener('click', this.demoSounds);

    window.setTimeout(this.demoSounds, 1000);

    let waitTime = 2000 + (this.timeouts.slice(-1)[0] * 1000);
    window.setTimeout(this.startListening, waitTime);

    return true;
  }

}

export default Level;