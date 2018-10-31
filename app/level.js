import Piano from './piano';

class Level {
  
  constructor({ number, notes, instructions }, ctx, instructionsEl) {
    this.number = number;
    this.notes = notes;
    this.instructions = instructions;
    this.instructionsEl = instructionsEl;
    this.ctx = ctx;
    this.demoSounds = this.demoSounds.bind(this);

    this.piano = new Piano();
    this.piano.draw(ctx);

    document.addEventListener('keydown', (e) => {
      this.piano.handleKeyDown(e.key, ctx)
    });

    this.displayInstructions();
    window.setTimeout( this.demoSounds, 2000);
  }

  displayInstructions() {
    this.instructionsEl.innerHTML = this.instructions;
  }

  demoSounds() {
    console.log(this.notes)
    this.notes.forEach(
      (note, idx) => {
        console.log(note);
        window.setTimeout(
          this.piano.handleKeyDown(note, this.ctx), 500*idx
        )
      }
    );
  }

  play() {

  }

}

export default Level;