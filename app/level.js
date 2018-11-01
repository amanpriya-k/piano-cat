import Piano from './piano';

class Level {
  
  constructor({ number, notes, instructions }, ctx, instructionsEl, startBtnEl) {
    this.number = number;
    this.notes = notes;
    this.instructions = instructions;
    this.instructionsEl = instructionsEl;
    this.ctx = ctx;
    this.startBtnEl = startBtnEl;
    this.play = this.play.bind(this);
    this.demoSounds = this.demoSounds.bind(this);
    this.displayInstructions = this.displayInstructions.bind(this);

    this.piano = new Piano();
    this.piano.draw(ctx);

    document.addEventListener('keydown', (e) => {
      this.piano.handleKeyDown(e.key, ctx)
    }); 
  }

  displayInstructions() {
    this.instructionsEl.innerHTML = this.instructions;
    this.startBtnEl.innerHTML = `level ${this.number + 1}`;
  }

  demoSounds() {
    this.notes.forEach(
      (note, idx) => {
        let timeout = (idx + 1) * 1000;
        window.setTimeout(() => this.piano.handleKeyDown(note, this.ctx), timeout)
      }
    );
  }

  play() {
    this.displayInstructions();
    window.setTimeout(this.demoSounds, 4000);
  }

}

export default Level;