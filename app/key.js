class Key {

  constructor(xpos, ypos, note, name, color, key) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.note = note;
    this.name = name;
    this.color = color;
    this.key = key;
    
    this.audio = new Audio();
    this.audio.src = `https://raw.githubusercontent.com/amanpriya-k/piano-cat/master/assets/sounds/${this.note}.wav`;

    this.onKeyDown = this.onKeyDown.bind(this);
    this.draw = this.draw.bind(this);
  };


  onKeyDown(ctx, ctx2, newColor) {
    if (!this.audio) return;
    this.audio.currentTime = 0;
    this.audio.play();

    console.log('hey')
    let image1 = new Image();
    image1.src = "https://i.postimg.cc/sD4XSKwr/spritesheet.png";

    
    const letter = document.getElementById('letter-shower');
    letter.innerHTML = this.name;
    
    image1.onload = () => {
      if (this.color === "white") {
        if (newColor == "green") {
          ctx.drawImage(image1, 100, 0, 70, 300, this.xpos, this.ypos, 50, 200);
        } else {
          ctx.drawImage(image1, 200, 0, 70, 300, this.xpos, this.ypos, 50, 200);
        }
      }
      else {
        if (newColor == "green") {
          ctx2.drawImage(image1, 440, 0, 50, 300, this.xpos, this.ypos+2, 50, 140);
        } else {
          ctx2.drawImage(image1, 503, 0, 50, 300, this.xpos, this.ypos+2, 50, 140);
        }
      }
    }
    window.setTimeout(() => {
      this.draw(ctx, ctx2);
      letter.innerHTML = '';
    }, 200);
  }




  draw(ctx, ctx2) {

    let image1 = new Image();
    image1.src = "https://i.postimg.cc/sD4XSKwr/spritesheet.png";

    image1.onload = () => {
      if (this.color === "white") {
        ctx.drawImage(image1, 0, 0, 70, 300, this.xpos, this.ypos, 50, 200);
      }
      else {
        ctx2.drawImage(image1, 380, 0, 50, 300, this.xpos, this.ypos+2, 50, 140);
      }
    }
  };

}

export default Key;