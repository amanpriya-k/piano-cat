![alt text](https://github.com/amanpriya-k/piano-cat/blob/master/homepage.png)
# Piano Cat
---

[Play with Piano Cat now](https://amanpriya-k.github.io/piano-cat/)

Piano cat is a piano playing tutorial game. This game makes learning to play simple songs on piano a fun interactive experience.

The game links up keys on the keyboard to the keys on a piano visual on the screen. For each level, there are notes displayed on a staff and the keys light up, and the user needs to press the corresponding keys in order to pass the level. As the user passes more levels, the music gets more complicated, eventually teaching the user to play simple songs.

The project was built in 10 days, and more features will be added over time.

---

## Features

- Users can play the virtual piano which covers 12 notes which are linked up to corresponding keys on the keyboard
- Users will learn levels by watching the piano play a demo of the level's song, which they can replay as they need
- Users can pass levels by playing back the song correctly, which allows them to move on to the next level

---

## Technologies

 - Vanilla JavaScript for game logic
 - HTML5 Canvas for rendering
 - Webpack to bundle various scripts into a single source

---


### Piano

The piano was built using a Piano class, which creates the 12 keys which are instances of the Key class. The piano has a function, 'handleKeyDown', which is meant to be called by a keydown event listener, which takes the key pressed and calls the keyDown function of the correct corresponding key. 

```javascript
// piano handleKeyDown function routes keys
handleKeyDown(key, ctx, ctx2, color) {
    switch (key) {
      case "s":
        this.keys.c.onKeyDown(ctx, ctx2, color);
        break;
      case "e":
        this.keys.cS.onKeyDown(ctx, ctx2, color);
        break;
        ...
}

// keys onKeyDown function plays the audio of the note, and draws the key in green or red whether it was 'correct'. 
// it redraws the key to be white after .2 seconds
  onKeyDown(ctx, ctx2, newColor) {
    if (!this.audio) return;
    this.audio.currentTime = 0;
    this.audio.play();

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

```
![alt text](http://g.recordit.co/F6usz9Tdd4.gif)

### Levels

The game currently has 7 levels. The level class handles the displaying the instructions and changing the buttons. A 'next' function tracks the current level on a global variable, and accordingly switches to the next level, and is attached to an event handler on the next button. The 'next' button is disabled when a level starts until that level is successfully completed, which is determined by the following function. Each level has a property called notes, and the listener waits for the user to input the correct notes in the same order - if they play a wrong note, it asks them to start over.

``` javascript
  // lettersPressed starts out as an empty array, and this is a part of the function that is attached to the keydown event
  // this part determines whether the letter pressed corresponds to the note at the same length in 'this.notes' which holds the correct order
  if (lettersPressed.length != this.notes.length) {
          lettersPressed.push(e.key);
          let color;

          if (this.notes[lettersPressed.length - 1] != e.key) {
            color = 'red';
            this.messageEl.innerHTML = "uh oh - start over!"
            this.messageEl.classList.remove('good');
            this.messageEl.classList.add('bad');
            lettersPressed = [];
          } else {
            color = 'green';
            this.messageEl.innerHTML = "nice!"
            this.messageEl.classList.remove('bad');
            this.messageEl.classList.add('good');
          }

          this.piano.handleKeyDown(e.key, this.ctx, this.ctx2, color);
  }     
```
---

## Future plans

Some features I would like to add in the future are
  - the ability for users to play timed levels
  - users to have different games with different levels, each game corresponding to a song
  - for users to save their progress, and log back in to continue playing
