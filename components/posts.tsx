'use client';
import { useState } from 'react';

import Link from 'next/link';
import posts from '../content/posts';
import { setDateFormat } from '@/lib';

export function BlogPosts() {
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-4 tracking-tighter">Posts</h2>
      {posts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map(post => (
          <BlogPostsItem key={post.title + post.slug} post={post} />
        ))}
    </div>
  );
}

type BlogPostsItemProps = {
  title: string;
  description: string;
  date: string;
  hashtag: string[];
  slug: string;
};

export function BlogPostsItem({ post }: { post: BlogPostsItemProps }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      className="flex flex-col space-y-1 mb-4 py-5"
      href={`/posts/${post.slug}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
        <h3
          className={`
          tracking-tighter font-semibold text-3xl mb-2 transition-all delay-150  
          ${isHover && 'text-blue-500 dark:text-blue-300'}
          `}
        >
          {post.title}
        </h3>

        <div className="flex flex-wrap gap-x-2">
          {post.hashtag.map((hashtag, index) => (
            <p
              key={`${post.slug}-${hashtag}-${index}`}
              className="tabular-nums text-sm font-black text-neutral-400 dark:text-neutral-600"
            >
              #{hashtag}
            </p>
          ))}
        </div>

        <p className="mb-2 text-neutral-500 dark:text-neutral-300">{post.description}</p>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">{setDateFormat(post.date)}</p>
      </div>
    </Link>
  );
}
