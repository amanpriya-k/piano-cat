import Piano from './piano';


class Level {
  
  constructor({ number, notes, timeouts, instructions }, ctx, ctx2) {
    this.number = number;
    this.notes = notes;
    this.timeouts = timeouts;
    this.instructions = instructions;
    this.ctx = ctx;
    this.ctx2 = ctx2;
    this.lettersPressed = [];

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

    document.addEventListener('keypress', (e) => {
      this.piano.handleKeyDown(e.key, ctx, ctx2, "green")
    }); 
  }

  newLevel({ number, notes, timeouts, instructions }) {
    // debugger
    this.startBtnEl.disabled = true;
    this.demoBtnEl.disabled = true;
    this.number = number;
    this.notes = notes;
    this.timeouts = timeouts;
    this.instructions = instructions;
    this.lettersPressed = [];
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
    // debugger
    console.log('listening')
    if (this.number === 0) {
      this.startBtnEl.disabled = false;
      return;
    }
    this.lettersPressed = [];
    this.messageEl.innerHTML = `level ${this.number} - your turn!`

    document.addEventListener('keypress', (e) => 
    {
      e.stopPropagation();
      e.preventDefault(); 
      if (this.lettersPressed.length != this.notes.length) {

          debugger
          this.lettersPressed.push(e.key);
          let color;

          if (this.notes[this.lettersPressed.length - 1] != e.key) {
            debugger
            color = 'red';
            this.messageEl.innerHTML = "uh oh - start over!"
            this.messageEl.classList.remove('good');
            this.messageEl.classList.add('bad');
            this.lettersPressed = [];
          } else {
            color = 'green';
            this.messageEl.innerHTML = "nice!"
            this.messageEl.classList.remove('bad');
            this.messageEl.classList.add('good');
          }

          this.piano.handleKeyDown(e.key, this.ctx, this.ctx2, color);
      } 

      if (this.lettersPressed.length === this.notes.length) {
        this.startBtnEl.disabled = false;
        this.messageEl.innerHTML = "great job! click \'next\' to go to the next level.";
        this.messageEl.classList.add('good');
        return true;
      }
      return true;
    }
    ); 
  }

  play() {
    debugger
    this.displayInstructions();
    this.demoBtnEl.innerHTML = "play it again";
    this.demoBtnEl.disabled = true;
    this.demoBtnEl.addEventListener('click', this.demoSounds);

    window.setTimeout(this.demoSounds, 2000);

    let waitTime = 3000 + (this.notes.length * 1000);
    window.setTimeout(this.startListening, waitTime);

    return true;
  }

}

export default Level;