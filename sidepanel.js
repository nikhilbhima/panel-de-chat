const CHAT_URL = 'https://chat.mistral.ai/';
const FALLBACK_TIMEOUT_MS = 6000;

const frame = document.getElementById('frame');
const fallback = document.getElementById('fallback');
const openTabBtn = document.getElementById('open-tab');
const closeBtn = document.getElementById('close');

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

openTabBtn.addEventListener('click', () => {
  chrome.tabs.create({ url: CHAT_URL });
});

closeBtn.addEventListener('click', () => {
  window.close();
});
