import Key from './key';

class Piano {

  constructor() {
    this.keys = {};
    this.addKeys();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(key, ctx) {
    switch (key) {
      case "s":
        this.keys.c.onKeyDown(ctx);
        break;
      case "e":
        this.keys.cS.onKeyDown(ctx);
        break;
      case "f":
        this.keys.d.onKeyDown(ctx);
        break;
      case "t":
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
    this.keys.c = new Key(0, 0, "c", "white");
    this.keys.cS = new Key(50, 0, "csharp", "black")
    this.keys.d = new Key(73, 0, "d", "white")
    this.keys.dS = new Key(123, 0, "dsharp", "black")
    this.keys.e = new Key(146, 0, "e", "white")
    this.keys.f = new Key(196, 0, "f", "white")
    this.keys.fS = new Key(246, 0, "fsharp", "black")
    this.keys.g = new Key(269, 0, "g", "white")
    this.keys.gS = new Key(319, 0, "gsharp", "black")
    this.keys.a = new Key(342, 0, "a", "white")
    this.keys.aS = new Key(392, 0, "asharp", "black")
    this.keys.b = new Key(415, 0, "b", "white")
  }

  draw(ctx) {
    Object.values(this.keys).forEach((key) => {
      key.draw(ctx);
    });
  }

}

export default Piano;