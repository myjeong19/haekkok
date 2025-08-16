import { notFound } from 'next/navigation';
import { baseUrl } from 'app/sitemap';
import posts from 'content/posts';
import NotionRenderer from 'components/notion-renderer';
import Comment from 'components/comment';
import { ScrollProgressBar } from '@/components/scroll-progress-bar';

export async function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find(post => post.slug === slug);
  if (!post) {
    return;
  }
  const { title, date: publishedTime, description, image } = post;
  const ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/posts/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/posts/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        datePublished: post.date,
        dateModified: post.date,
        description: post.description,
        image: post.image
          ? `${baseUrl}${post.image}`
          : `/og?title=${encodeURIComponent(post.title)}`,
        url: `${baseUrl}/posts/${post.slug}`,
        author: {
          '@type': 'Person',
          name: 'HEAKKOK JEONG',
        },
      }),
    },
  };
}

export default async function Blog({ params }) {
  const { slug } = await params;
  let post = posts.find(post => post.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <section>
      <ScrollProgressBar />
      <NotionRenderer post={post} />
      <Comment />
    </section>
  );
}
