import Main from './main';

document.addEventListener("DOMContentLoaded", () => {
  console.log('webpack is working!');

  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d'); 
  const main = new Main();
  main.draw(ctx);

  document.addEventListener('keydown', 
      (e) => main.onKeyDown(e, ctx))
});
