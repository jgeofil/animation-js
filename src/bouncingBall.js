import { animate, easings } from './index.js';

const canvas = document.getElementById('canvas');

if (!canvas) {
  console.warn('Canvas element with id "canvas" not found.');
} else {
  const ctx = canvas.getContext('2d');

  function bounce(direction = 1) {
    animate({
      from: direction === 1 ? 0 : canvas.height - 30,
      to: direction === 1 ? canvas.height - 30 : 0,
      duration: 800,
      easing: easings.easeInOutQuad,
      onUpdate(y) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(50, y + 15, 15, 0, Math.PI * 2);
        ctx.fill();
      },
      onComplete() {
        bounce(direction * -1);
      }
    });
  }

  bounce();
}

