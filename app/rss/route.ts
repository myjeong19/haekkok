import { SITE } from 'app/constants';
import feeds from '@/content/feeds';

export async function GET() {
  const itemsXml = feeds
    .sort((a, b) => {
      const diff = new Date(b.date).getTime() - new Date(a.date).getTime();
      if (diff !== 0) return diff;
      return a.slug.localeCompare(b.slug);
    })
    .map(
      feed =>
        `<item>
          <title>${feed.title}</title>
          <link>${SITE.URL}/feeds/${feed.slug}</link>
          <description>${feed.description}</description>
          <pubDate>${new Date(feed.date).toUTCString()}</pubDate>
        </item>`
    )
    .join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${SITE.URL}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
