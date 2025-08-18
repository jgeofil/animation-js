// Simple animation helper for numeric interpolation

/**
 * Interpolates a numeric value over time.
 *
 * @param {Object} options - Animation options
 * @param {number} [options.from=0] - Starting value
 * @param {number} [options.to=1] - Ending value
 * @param {number} [options.duration=1000] - Duration in milliseconds
 * @param {(value:number) => void} options.onUpdate - Callback invoked on each frame
 * @param {boolean} [options.loop=false] - Whether to repeat the animation
 * @param {(t:number) => number} [options.easing=easings.linear] - Easing function
 * @param {() => void} [options.onComplete] - Callback invoked when the animation completes
 */
export function animate({
  from = 0,
  to = 1,
  duration = 1000,
  onUpdate,
  loop = false,
  easing = easings.linear,
  onComplete
}) {
  let start;
  function frame(now) {
    if (start === undefined) start = now;
    const progress = Math.min((now - start) / duration, 1);
    const value = from + (to - from) * easing(progress);
    onUpdate(value);
    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      if (onComplete) onComplete();
      if (loop) {
        start = undefined;
        requestAnimationFrame(frame);
      }
    }
  }
  requestAnimationFrame(frame);
}

// Common easing functions
export const easings = {
  linear: t => t,
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
};

