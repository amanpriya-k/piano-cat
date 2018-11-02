class Key {

  constructor(xpos, ypos, note, name, color, key) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.note = note;
    this.name = name;
    this.color = color;
    this.key = key;
    
    this.audio = new Audio();
    this.audio.src = `../assets/sounds/${this.note}.wav`;

    this.image = new Image();
    this.image.src = "https://github.com/amanpriya-k/piano-cat/blob/master/assets/images/spritesheet.png";
    // this.image.src = "../assets/images/spritesheet.png";

    this.onKeyDown = this.onKeyDown.bind(this);
    this.draw = this.draw.bind(this);
  };


  onKeyDown(ctx, ctx2, newColor) {
    if (!this.audio) return;
    this.audio.currentTime = 0;
    this.audio.play();

    this.image = new Image();
    this.image.src = "../assets/images/spritesheet.png";
    
    const letter = document.getElementById('letter-shower');
    letter.innerHTML = this.name;
    
    this.image.onload = () => {
      if (this.color === "white") {
        if (newColor == "green") {
          ctx.drawImage(this.image, 100, 0, 70, 300, this.xpos, this.ypos, 50, 200);
        } else {
          ctx.drawImage(this.image, 200, 0, 70, 300, this.xpos, this.ypos, 50, 200);
        }
      }
      else {
        if (newColor == "green") {
          ctx2.drawImage(this.image, 440, 0, 50, 300, this.xpos, this.ypos+2, 50, 140);
        } else {
          ctx2.drawImage(this.image, 503, 0, 50, 300, this.xpos, this.ypos+2, 50, 140);
        }
      }
    }
    window.setTimeout(() => {
      this.draw(ctx, ctx2);
      letter.innerHTML = '';
    }, 200);
  }




  draw(ctx, ctx2) {
    this.image = new Image();
    this.image.src = "https://github.com/amanpriya-k/piano-cat/blob/master/assets/images/spritesheet.png";
    // this.image.src = "../assets/images/spritesheet.png";

    this.image.onload = () => {
      if (this.color === "white") {
        // ctx.clearRect(this.xpos, this.ypos, 50, 200);
        ctx.drawImage(this.image, 0, 0, 70, 300, this.xpos, this.ypos, 50, 200);
      }
      else {
        // ctx2.clearRect(this.xpos, this.ypos, 23, 200);
        ctx2.drawImage(this.image, 380, 0, 50, 300, this.xpos, this.ypos+2, 50, 140);
      }
    }
  };

}

export default Key;