'use client';

import Link from 'next/link';
import posts from '../content/posts';
import { setDateFormat } from '@/lib';

export function BlogPosts() {
  return (
    <div>
      <div>
        <h2 className="font-semibold text-sm tracking-tighter text-gray-500 mb-4">Recent posts</h2>
        <BlogPostsItem key={posts[0].title + posts[0].slug} post={posts[0]} />
      </div>

      <hr />
      <div className="mt-5">
        {posts.length > 1 && (
          <h2 className="font-semibold text-sm text-gray-500 tracking-tighter mb-4">Older posts</h2>
        )}
        {posts
          .filter(post => post.title !== posts[0].title)
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
  return (
    <Link
      className="group flex flex-col space-y-1 mb-4 py-5 px-3 -mx-3 transition-all duration-200 
                 hover:bg-neutral-100 active:bg-neutral-200 rounded-lg
                 dark:hover:bg-neutral-800 dark:active:bg-neutral-700"
      href={`/posts/${post.slug}`}
    >
      <div className="w-full flex flex-col space-x-0 md:space-x-2">
        <h3
          className="
          tracking-tighter font-semibold text-2xl mb-2 transition-all delay-100 
          group-hover:text-blue-500 group-active:text-blue-600 
          dark:group-hover:text-blue-300 dark:group-active:text-blue-200
          "
        >
          {post.title}
        </h3>

        <div className="flex flex-wrap gap-x-2 mb-3">
          {post.hashtag.map((hashtag, index) => (
            <span
              key={`${post.slug}-${hashtag}-${index}`}
              className="inline-block px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 
                         dark:bg-blue-900/20 dark:text-blue-400 rounded-md transition-colors
                         group-hover:bg-blue-100 group-active:bg-blue-200 
                         dark:group-hover:bg-blue-900/30 dark:group-active:bg-blue-900/40"
            >
              #{hashtag}
            </span>
          ))}
        </div>

        <p className="mb-3 text-neutral-700 dark:text-neutral-200 leading-relaxed">
          {post.description}
        </p>
        <p className="text-neutral-400 dark:text-neutral-500 text-xs font-medium tracking-wide">
          {setDateFormat(post.date)}
        </p>
      </div>
    </Link>
  );
}
