import posts from 'content/posts';

export const baseUrl = 'https://haekkok.com';

export default async function sitemap() {
  let blogs = posts.map(post => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  let routes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/posts', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/about', priority: 0.6, changeFrequency: 'monthly' as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency,
    priority,
  }));

  return [...routes, ...blogs];
}
