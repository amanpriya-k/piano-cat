import Main from './main';
// const Main = require('./main');

document.addEventListener("DOMContentLoaded", () => {
  console.log('webpack is working!');

  const root = document.getElementById('root');
  root.innerHTML = 'from entry file';

  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d'); 
  const main = new Main();
  main.draw(ctx);

  document.addEventListener('keydown', 
      (e) => main.onKeyDown(e, ctx))
});
