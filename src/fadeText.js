import { animate, easings } from './index.js';

const text = document.getElementById('text');

if (!text) {
  console.warn('Element with id "text" not found.');
} else {
  animate({
    from: 0,
    to: 1,
    duration: 2000,
    loop: true,
    easing: easings.easeInOutQuad,
    onUpdate(v) {
      text.style.opacity = String(v);
    }
  });
}

