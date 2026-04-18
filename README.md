# Panel de Chat

Chrome extension that opens [chat.mistral.ai](https://chat.mistral.ai) in Chrome's side panel.

## Install (unpacked)

1. Clone this repo.
2. Visit `chrome://extensions` in Chrome.
3. Enable "Developer mode" (toggle, top right).
4. Click "Load unpacked" and select the cloned folder.
5. Pin the extension from the puzzle icon in the toolbar.

Click the toolbar icon to toggle the side panel.

## How it works

`background.js` sets the toolbar action to open the side panel on click. `sidepanel.html` hosts an iframe pointing at `https://chat.mistral.ai/`. A declarativeNetRequest ruleset (`rules.json`) removes `X-Frame-Options` and `Content-Security-Policy` response headers for requests to `chat.mistral.ai`, so the page renders inside the iframe.

If the iframe fails to load within a few seconds, the panel shows a fallback with a link that opens Le Chat in a new tab.

## Permissions

- `sidePanel` for the side panel API
- `declarativeNetRequest` for the static header ruleset
- `host_permissions` on `https://chat.mistral.ai/*` so header modification rules apply

## Files

- `manifest.json` MV3 manifest
- `background.js` service worker, sets panel behavior
- `sidepanel.html` / `sidepanel.css` / `sidepanel.js` panel UI
- `rules.json` declarativeNetRequest rules
- `icons/` toolbar icons (16, 32, 48, 128)

## Development

No build step. Edit source files, then click the reload icon on the extension card at `chrome://extensions`.

## License

MIT. See `LICENSE`.
