const FALLBACK_TIMEOUT_MS = 6000;

const frame = document.getElementById('frame');
const fallback = document.getElementById('fallback');

let loaded = false;

frame.addEventListener('load', () => {
  loaded = true;
});

setTimeout(() => {
  if (!loaded) showFallback();
}, FALLBACK_TIMEOUT_MS);

function showFallback() {
  frame.style.display = 'none';
  fallback.classList.add('show');
}
