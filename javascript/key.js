class Key {

  constructor(xpos, ypos, note, color) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.note = note;
    this.color = color;
    this.onKeyDown = this.onKeyDown.bind(this);
    this.draw = this.draw.bind(this);
  };

  onKeyDown(ctx) {
    const keyImg = new Image();
    keyImg.src = "./assets/images/spritesheet.png";

    keyImg.onload = () => {
      if (this.color === "white") {
        debugger
        ctx.drawImage(keyImg, 100, 0, 70, 300, this.xpos, this.ypos, 50, 200);
      }
      else {
        ctx.drawImage(keyImg, 440, 0, 50, 300, this.xpos, this.ypos, 35, 200);
      }
    }
    window.setTimeout( () => this.draw(ctx), 500 );
  }

  draw(ctx) {
    debugger
    const keyImg = new Image();
    keyImg.src = "./assets/images/spritesheet.png";

    keyImg.onload = () => {
      if (this.color === "white") {
        ctx.clearRect(this.xpos, this.ypos, 50, 200);
        debugger
        ctx.drawImage(keyImg, 0, 0, 70, 300, this.xpos, this.ypos, 50, 200);
      } 
      else {
        ctx.clearRect(this.xpos, this.ypos, 23, 200);
        ctx.drawImage(keyImg, 380, 0, 50, 300, this.xpos, this.ypos, 35, 200);
      }
    }
  };

}

export default Key;