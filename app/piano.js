import Key from './key';

class Piano {

  constructor() {
    this.keys = {};
    this.addKeys();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(key, ctx, color) {
    switch (key) {
      case "s":
        this.keys.c.onKeyDown(ctx, color);
        break;
      case "e":
        this.keys.cS.onKeyDown(ctx, color);
        break;
      case "d":
        this.keys.d.onKeyDown(ctx, color);
        break;
      case "r":
        this.keys.dS.onKeyDown(ctx, color);
        break;
      case "f":
        this.keys.e.onKeyDown(ctx, color);
        break;
      case "g":
        this.keys.f.onKeyDown(ctx, color);
        break;
      case "y":
        this.keys.fS.onKeyDown(ctx, color);
        break;
      case "h":
        this.keys.g.onKeyDown(ctx, color);
        break;
      case "u":
        this.keys.gS.onKeyDown(ctx, color);
        break;
      case "j":
        this.keys.a.onKeyDown(ctx, color);
        break;
      case "i":
        this.keys.aS.onKeyDown(ctx, color);
        break;
      case "k":
        this.keys.b.onKeyDown(ctx, color);
        break;
      case "l":
        this.keys.hiC.onKeyDown(ctx, color);
        break;
    }
  }

  addKeys() {
    this.keys.c = new Key(0, 0, "c", "C", "white", "s");
    this.keys.cS = new Key(50, 0, "csharp", "C#", "black", "e");
    this.keys.d = new Key(73, 0, "d", "D", "white", "d");
    this.keys.dS = new Key(123, 0, "dsharp", "D#", "black", "r");
    this.keys.e = new Key(146, 0, "e", "E", "white", "f");
    this.keys.f = new Key(196, 0, "f", "F", "white", "g");
    this.keys.fS = new Key(246, 0, "fsharp", "F#", "black", "y");
    this.keys.g = new Key(269, 0, "g", "G", "white", "h");
    this.keys.gS = new Key(319, 0, "gsharp", "G#", "black", "u");
    this.keys.a = new Key(342, 0, "a", "A", "white", "j")
    this.keys.aS = new Key(392, 0, "asharp", "A#", "black", "i");
    this.keys.b = new Key(415, 0, "b", "B", "white", "k");
    this.keys.hiC = new Key(465, 0, "hic", "C", "white", "l");
  }

  draw(ctx) {
    Object.values(this.keys).forEach((key) => {
      key.draw(ctx);
    });
  }

}

export default Piano;