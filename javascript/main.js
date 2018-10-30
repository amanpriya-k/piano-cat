import Key from './key';

class Main {

  constructor() {
    this.keys = {};
    this.addKeys();
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e, ctx) {
    switch(e.key) {
      case "s":
        this.keys.c.onKeyDown(ctx);
        break;
      case "e":
        this.keys.cS.onKeyDown(ctx);
        break;
      case "f":
        this.keys.d.onKeyDown(ctx);
        break;
      case "r":
        this.keys.dS.onKeyDown(ctx);
        break;
      case "g":
        this.keys.e.onKeyDown(ctx);
        break;
      case "h":
        this.keys.f.onKeyDown(ctx);
        break;
      case "u":
        this.keys.fS.onKeyDown(ctx);
        break;
      case "j":
        this.keys.g.onKeyDown(ctx);
        break;
      case "i":
        this.keys.gS.onKeyDown(ctx);
        break;
      case "k":
        this.keys.a.onKeyDown(ctx);
        break;
      case "o":
        this.keys.aS.onKeyDown(ctx);
        break;
      case "l":
        this.keys.b.onKeyDown(ctx);
        break;
    }
  }

  addKeys() {
    this.keys.c = new Key(0, 0, "C", "white");
    this.keys.cS = new Key(50, 0, "C#", "black")
    this.keys.d = new Key(73, 0, "D", "white")
    this.keys.dS = new Key(123, 0, "D#", "black")
    this.keys.e = new Key(146, 0, "E", "white")
    this.keys.f = new Key(196, 0, "F", "white")
    this.keys.fS = new Key(246, 0, "F#", "black")
    this.keys.g = new Key(269, 0, "G", "white")
    this.keys.gS = new Key(319, 0, "G#", "black")
    this.keys.a = new Key(342, 0, "A", "white")
    this.keys.aS = new Key(392, 0, "A#", "black")
    this.keys.b = new Key(415, 0, "B", "white")
  }

  draw(ctx) {
    Object.values(this.keys).forEach((key) => {
      key.draw(ctx);
    });
  }

}

export default Main;