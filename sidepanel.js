const FALLBACK_TIMEOUT_MS = 6000;
const LOOP_THRESHOLD = 4;
const LOOP_WINDOW_MS = 4000;

const frame = document.getElementById('frame');
const fallback = document.getElementById('fallback');

let fallbackTimer = setTimeout(showFallback, FALLBACK_TIMEOUT_MS);
let loadCount = 0;
let firstLoadAt = 0;

frame.addEventListener('load', () => {
  const now = Date.now();
  if (loadCount === 0) {
    clearTimeout(fallbackTimer);
    firstLoadAt = now;
  }
  loadCount++;
  if (loadCount >= LOOP_THRESHOLD && (now - firstLoadAt) <= LOOP_WINDOW_MS) {
    showFallback();
  }
});

function showFallback() {
  frame.style.display = 'none';
  fallback.classList.add('show');
}
