class Key {

  constructor(xpos, ypos, note, color) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.note = note;
    this.color = color;
    
    this.audio = new Audio();
    this.audio.src = `../assets/sounds/${this.note}.wav`;
    this.image = new Image();
    this.image.src = "../assets/images/spritesheet.png";
    this.onKeyDown = this.onKeyDown.bind(this);
    this.draw = this.draw.bind(this);
  };


  onKeyDown(ctx) {
    if (!this.audio) return;
    this.audio.currentTime = 0;
    this.audio.play();

    this.image = new Image();
    this.image.src = "../assets/images/spritesheet.png";
    
    
    this.image.onload = () => {
      if (this.color === "white") {
        ctx.drawImage(this.image, 100, 0, 70, 300, this.xpos, this.ypos, 50, 200);
      }
      else {
        ctx.drawImage(this.image, 440, 0, 50, 300, this.xpos, this.ypos, 35, 200);
      }
    }
    window.setTimeout(() => this.draw(ctx), 200 );
  }




  draw(ctx) {
    this.image = new Image();
    this.image.src = "../assets/images/spritesheet.png";

    this.image.onload = () => {
      if (this.color === "white") {
        ctx.clearRect(this.xpos, this.ypos, 50, 200);
        ctx.drawImage(this.image, 0, 0, 70, 300, this.xpos, this.ypos, 50, 200);
      }
      else {
        ctx.clearRect(this.xpos, this.ypos, 23, 200);
        ctx.drawImage(this.image, 380, 0, 50, 300, this.xpos, this.ypos, 35, 200);
      }
    }
  };

}

export default Key;