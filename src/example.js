import { animate } from './index.js';

const canvas = document.getElementById('canvas');

if (!canvas) {
  console.warn('Canvas element with id "canvas" not found.');
} else {
  const ctx = canvas.getContext('2d');
  animate({
    from: 0,
    to: canvas.width - 50,
    duration: 2000,
    loop: true,
    onUpdate(x) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'red';
      ctx.fillRect(x, 10, 50, 50);
    }
  });
}

