import { notFound } from 'next/navigation';
import feeds from '@/content/feeds';
import { SITE } from 'app/constants';
import NotionRenderer from 'components/notion-renderer';
import Comment from 'components/comment';

export async function generateStaticParams() {
  return feeds.map(feed => ({ slug: feed.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const feed = feeds.find(feed => feed.slug === slug);
  if (!feed) {
    return;
  }
  const { title, date: publishedTime, description, image } = feed;
  const ogImage = image ? image : `${SITE.URL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE.URL}/feeds/${feed.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${SITE.URL}/feeds/${feed.slug}`,
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
        headline: feed.title,
        datePublished: feed.date,
        dateModified: feed.date,
        description: feed.description,
        image: feed.image
          ? `${SITE.URL}${feed.image}`
          : `/og?title=${encodeURIComponent(feed.title)}`,
        url: `${SITE.URL}/feeds/${feed.slug}`,
        author: {
          '@type': 'Person',
          name: 'HEAKKOK JEONG',
        },
      }),
    },
  };
}

export default async function Feed({ params }) {
  const { slug } = await params;
  let feed = feeds.find(feed => feed.slug === slug);
  if (!feed) {
    notFound();
  }

  return (
    <section>
      <NotionRenderer feed={feed} />
      <Comment />
    </section>
  );
}
