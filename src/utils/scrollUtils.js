/**
 * Gentle Smooth Scrolling Utility
 * Uses an easeInOutCubic deceleration curve over ~950ms
 * so users can comfortably read content as the page glides smoothly into view.
 */

export function smoothScrollTo(targetY, duration = 950) {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  if (Math.abs(distance) < 4) return;

  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // easeInOutCubic: gentle acceleration and comfortable long deceleration
    const ease = progress < 0.5 
      ? 4 * progress * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startY + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

export function scrollToElement(elementId, offset = 85, duration = 950) {
  const element = document.getElementById(elementId);
  if (!element) return;
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
  smoothScrollTo(targetPosition, duration);
  window.history.pushState(null, '', `#${elementId}`);
}
