import feeds from '@/content/feeds';
import type { MetadataRoute } from 'next';
import { SITE } from './constants/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const feedEntries = feeds.map(feed => ({
    url: `${SITE.URL}/feeds/${feed.slug}`,
    lastModified: new Date(feed.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const staticRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/about', priority: 0.6, changeFrequency: 'monthly' as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${SITE.URL}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  return [...staticRoutes, ...feedEntries];
}
