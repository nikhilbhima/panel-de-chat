const FALLBACK_TIMEOUT_MS = 6000;

const frame = document.getElementById('frame');
const fallback = document.getElementById('fallback');

const fallbackTimer = setTimeout(showFallback, FALLBACK_TIMEOUT_MS);

frame.addEventListener('load', () => {
  clearTimeout(fallbackTimer);
});

function showFallback() {
  frame.style.display = 'none';
  fallback.classList.add('show');
}
