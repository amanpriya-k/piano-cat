import Key from './key';

class Piano {

  constructor() {
    this.keys = {};
    this.addKeys();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(key, ctx, ctx2, color) {
    switch (key) {
      case "s":
        this.keys.c.onKeyDown(ctx, ctx2, color);
        break;
      case "e":
        this.keys.cS.onKeyDown(ctx, ctx2, color);
        break;
      case "d":
        this.keys.d.onKeyDown(ctx, ctx2, color);
        break;
      case "r":
        this.keys.dS.onKeyDown(ctx, ctx2, color);
        break;
      case "f":
        this.keys.e.onKeyDown(ctx, ctx2, color);
        break;
      case "g":
        this.keys.f.onKeyDown(ctx, ctx2, color);
        break;
      case "y":
        this.keys.fS.onKeyDown(ctx, ctx2, color);
        break;
      case "h":
        this.keys.g.onKeyDown(ctx, ctx2, color);
        break;
      case "u":
        this.keys.gS.onKeyDown(ctx, ctx2, color);
        break;
      case "j":
        this.keys.a.onKeyDown(ctx, ctx2, color);
        break;
      case "i":
        this.keys.aS.onKeyDown(ctx, ctx2, color);
        break;
      case "k":
        this.keys.b.onKeyDown(ctx, ctx2, color);
        break;
      case "l":
        this.keys.hiC.onKeyDown(ctx, ctx2, color);
        break;
    }
  }

  addKeys() {
    this.keys.c = new Key(0, 0, "c", "C", "white", "s");
    this.keys.cS = new Key(33, 0, "csharp", "C#", "black", "e");
    this.keys.d = new Key(50, 0, "d", "D", "white", "d");
    this.keys.dS = new Key(83, 0, "dsharp", "D#", "black", "r");
    this.keys.e = new Key(100, 0, "e", "E", "white", "f");
    this.keys.f = new Key(150, 0, "f", "F", "white", "g");
    this.keys.fS = new Key(184, 0, "fsharp", "F#", "black", "y");
    this.keys.g = new Key(200, 0, "g", "G", "white", "h");
    this.keys.gS = new Key(232, 0, "gsharp", "G#", "black", "u");
    this.keys.a = new Key(250, 0, "a", "A", "white", "j")
    this.keys.aS = new Key(283, 0, "asharp", "A#", "black", "i");
    this.keys.b = new Key(300, 0, "b", "B", "white", "k");
    this.keys.hiC = new Key(350, 0, "hiC", "C", "white", "l");
  }

  draw(ctx, ctx2) {
    Object.values(this.keys).forEach((key) => {
      key.draw(ctx, ctx2);
    });
  }

}

export default Piano;