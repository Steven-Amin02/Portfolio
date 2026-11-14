/**
 * Gentle Smooth Scrolling Utility
 * Uses an easeInOutCubic deceleration curve over ~850ms
 * with automatic cancellation on user wheel/touch/keyboard input,
 * overlapping-animation cancellation, and prefers-reduced-motion support.
 */

let activeRafId = null;
let cleanupAbortListeners = null;

function cancelActiveScroll() {
  if (activeRafId !== null) {
    cancelAnimationFrame(activeRafId);
    activeRafId = null;
  }
  if (cleanupAbortListeners) {
    cleanupAbortListeners();
    cleanupAbortListeners = null;
  }
}

export function smoothScrollTo(targetY, duration = 850) {
  cancelActiveScroll();

  const startY = window.scrollY;
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const clampedTargetY = Math.min(Math.max(0, targetY), maxScroll);
  const distance = clampedTargetY - startY;

  if (Math.abs(distance) < 4) return;

  // Respect user's OS reduced-motion preference
  const prefersReducedMotion =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || duration <= 0) {
    window.scrollTo({ top: clampedTargetY, behavior: 'instant' });
    return;
  }

  let startTime = null;

  const onUserInterrupt = (e) => {
    if (e.type === 'keydown') {
      const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
      if (!scrollKeys.includes(e.key)) return;
    }
    cancelActiveScroll();
  };

  window.addEventListener('wheel', onUserInterrupt, { passive: true });
  window.addEventListener('touchstart', onUserInterrupt, { passive: true });
  window.addEventListener('keydown', onUserInterrupt, { passive: true });

  cleanupAbortListeners = () => {
    window.removeEventListener('wheel', onUserInterrupt);
    window.removeEventListener('touchstart', onUserInterrupt);
    window.removeEventListener('keydown', onUserInterrupt);
  };

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // easeInOutCubic: smooth acceleration and gentle deceleration
    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo({
      top: startY + distance * ease,
      behavior: 'instant'
    });

    if (progress < 1) {
      activeRafId = requestAnimationFrame(animation);
    } else {
      cancelActiveScroll();
    }
  }

  activeRafId = requestAnimationFrame(animation);
}

export function scrollToElement(elementId, offset = 85, duration = 850) {
  const element = document.getElementById(elementId);
  if (!element) return;
  const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
  smoothScrollTo(targetPosition, duration);
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', `#${elementId}`);
  }
}
