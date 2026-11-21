// The Lotus link page (/lotus/?s=123&n=Name&p=/banners/...): messengers read
// the preview card from the page's meta tags without running its script, so
// for a shared series or film the tags are rewritten here to carry its name
// and poster. Anything unexpected falls back to the page as it is.

const POSTER = /^\/banners\/[A-Za-z0-9_/.-]{1,200}\.(jpg|jpeg|png|webp)$/i;

export async function onRequest(context) {
  const res = await context.next();
  try {
    const url = new URL(context.request.url);
    const q = url.searchParams;
    const kind = q.has('s') ? 's' : q.has('m') ? 'm' : null;
    const name = (q.get('n') || '').slice(0, 120).trim();
    if (!kind || !name) return res;
    const path = q.get('p') || '';
    const image = POSTER.test(path) ? 'https://artworks.thetvdb.com' + path : null;
    const title = name + ' · Lotus';
    const tr = (context.request.headers.get('accept-language') || '').toLowerCase().startsWith('tr');
    const description = kind === 's'
      ? (tr ? 'Bu diziyi Lotus\'ta aç, takip et, birlikte konuşun. 🪷' : 'Open this series in Lotus, track it and talk about it. 🪷')
      : (tr ? 'Bu filmi Lotus\'ta aç, listene ekle. 🪷' : 'Open this movie in Lotus and add it to your list. 🪷');
    const set = (value) => ({ element(e) { e.setAttribute('content', value); } });
    let rewriter = new HTMLRewriter()
      .on('meta[property="og:title"]', set(title))
      .on('meta[property="og:description"]', set(description))
      .on('title', { element(e) { e.setInnerContent(title); } });
    if (image) {
      rewriter = rewriter
        .on('meta[property="og:image"]', set(image))
        .on('meta[name="twitter:image"]', set(image))
        .on('meta[name="twitter:card"]', set('summary'))
        .on('meta[property="og:image:width"]', set('680'))
        .on('meta[property="og:image:height"]', set('1000'));
    }
    return rewriter.transform(res);
  } catch (_) {
    return res;
  }
}
