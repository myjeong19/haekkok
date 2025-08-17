'use client';

import Link from 'next/link';
import type { Post } from '@/content/posts';
import { setDateFormat } from '@/lib';
import { Hashtag } from './hashtag';

interface PostListItemProps {
  post: Post;
}

export function PostListItem({ post }: PostListItemProps) {
  return (
    <Link
      className="relative group block p-5 bg-white/40 dark:bg-neutral-950 hover:bg-white/60 dark:hover:bg-neutral-700/60   hover:transition-all hover:duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-200/40 dark:hover:shadow-neutral-800/40"
      href={`/posts/${post.slug}`}
    >
      <div className="relative space-y-3 flex justify-between ">
        <div className="flex flex-col  items-center ">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {post.title}
          </h3>
        </div>

        <div className="flex flex-wrap items-center  justify-start">
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 ">
            {post.description}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Hashtag hashtag={post.hashtag} slug={post.slug} className="text-xs m-0" />
            <time className="text-right text-xs text-neutral-400 dark:text-neutral-500 font-normal m-0">
              {setDateFormat(post.date)}
            </time>
          </div>
        </div>
      </div>
    </Link>
  );
}
