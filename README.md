# piano-cat

## Overview
 piano-cat is a piano playing tutorial game. This game is meant to make learning to play simple songs on piano a fun interactive experience. 
 
 The game links up keys on the keyboard to the keys on a piano visual on the screen. For each level, there are notes displayed on a staff and the keys light up, and the user needs to press the corresponding keys in order to pass the level. As the user passes more levels, the music gets more complicated, eventually teaching them to play a simple song.

 Users will be able to choose different songs to learn and the difficulty of the tutorial. 

 ## Functionality

- Users can press keys that play the corresponding keys on the virtual piano
- When users press the correct keys they signify it was correct by turning green, or red if the user played an incorrect key
- At the end of a level, a user can restart the level or move on to the next one- they cannot skip levels
- The levels get incrementally harder and the final level is the user playing a short piece of a song
- Players can choose a normal mode or a timed mode where they have limited time for each level

## MVPs
- [ ] The keyboard keys are linked to the virtual piano keys, they play the appropriate note and change color when they are played.
- [ ] The instructions are shown on one side of the screen and the corresponding keys that should be played are signified. 
- [ ] When they are correctly played, the user automatically completes the level, and has the option to move to the next level.
- [ ] The user has the option to select the difficulty & speed of the tutorials, and there are different songs you can learn to play

Bonus: 
- [ ] Users can record and playback the song at the last level
 
## Technologies

- Vanilla JavaScript for game logic
- HTML5 Canvas for rendering
- Webpack to bundle various scripts into a single source

## Timeline

Day 1 - 10/29/18  
  - [ ] Setup webpack, entry file, and project skeleton
  - [ ] Review canvas and plan how to design virtual piano
  - [ ] Set up divs that correspond to piano keys and connect to keyboard
  - [ ] Render keys

Day 2 - 10/30/18  
  - [ ] Animate keys so they light up according to whether the correct key was played or not
  - [ ] Style layout of site, set up the player screen and instructions screen html elements
  - [ ] Create outline for switching to different game levels

Day 3 - 10/31/18  
  - [ ] Hard code in a basic set of levels
  - [ ] Display corresponding instructions and keys for a level
  - [ ] Set up level functionality, so users playing the correct keys completes a level

Day 4 - 11/01/18  
  - [ ] Users completing a level automatically loads the next level
  - [ ] Users incorrectly playing the keys restarts the level
  - [ ] Hardcode another set of levels for another song

Day 5 - 11/02/18  
  - [ ] Improve styling
  - [ ] Add interesting visuals for completing levels
  - [ ] Add Github and Linkedin links
