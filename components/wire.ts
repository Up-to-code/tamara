// Post-hydration pass: swap YouTube/Embedly iframes (hydrated by Webflow
// after load) for click-to-load facades so a blocked embed never renders
// as a dead frame.

type El = HTMLElement;

const EMBED_SRC = /youtube(?:-nocookie)?\.com|embedly\.com/i;
const YT_ID = /youtube\.com\/(?:embed|watch\?v=)[%\/=]*([\w-]{6,})/i;

function facadeFor(frame: HTMLIFrameElement): El | null {
  const src = frame.src || '';
  if (!EMBED_SRC.test(src)) return null;
  const id = (src.match(YT_ID) || [])[1] || '';
  const host = frame.parentElement as El | null;

  const wrap = document.createElement('div');
  wrap.className = 'tl-yt ' + frame.className;
  const rect = frame.getBoundingClientRect();
  wrap.style.aspectRatio = '16 / 9';
  if (rect.width > 0) {
    wrap.style.width = `${rect.width}px`;
    wrap.style.height = `${rect.height}px`;
  }
  if (id) {
    const thumb = document.createElement('img');
    thumb.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    thumb.alt = frame.title || 'Video thumbnail';
    thumb.loading = 'lazy';
    thumb.addEventListener('error', () => thumb.remove());
    wrap.appendChild(thumb);
  }
  const play = document.createElement('button');
  play.className = 'tl-yt-play';
  play.setAttribute('aria-label', 'Play video');
  play.addEventListener('click', () => {
    const player = document.createElement('iframe');
    try {
      const u = new URL(src, location.href);
      u.searchParams.set('autoplay', '1');
      u.searchParams.set('rel', '0');
      player.src = u.toString();
    } catch {
      player.src = src;
    }
    player.title = frame.title || 'Embedded video';
    player.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    player.allowFullscreen = true;
    wrap.innerHTML = '';
    wrap.appendChild(player);
  });
  wrap.appendChild(play);
  if (host) host.dataset.tlFaced = 'true';
  return wrap;
}

export function wireEmbeds(root: El) {
  const swap = () => {
    root.querySelectorAll('iframe').forEach((node) => {
      const frame = node as HTMLIFrameElement;
      if (frame.dataset.tlDone) return;
      frame.dataset.tlDone = 'true';
      // wait until webflow sizes it (0x0 placeholders are pre-hydration)
      const rect = frame.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) {
        delete frame.dataset.tlDone;
        return;
      }
      const facade = facadeFor(frame);
      if (facade) frame.replaceWith(facade);
    });
  };
  swap();
  const timers = [800, 2500, 6000].map((ms) => window.setTimeout(swap, ms));
  const io = new MutationObserver(swap);
  io.observe(root, { childList: true, subtree: true });
  return () => {
    timers.forEach((t) => window.clearTimeout(t));
    io.disconnect();
  };
}
