'use client';

import Link from 'next/link';
import type { Feed } from '@/content/feeds';
import { setDateFormat } from '@/lib';
import { Hashtag } from './hashtag';

interface FeedCardProps {
  feed: Feed;
}

export function FeedCard({ feed }: FeedCardProps) {
  return (
    <Link
      className="relative group block mb-16 transition-all px-8 py-5 duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/40 dark:hover:shadow-neutral-800/40 hover:bg-white/60 dark:hover:bg-neutral-700/60 "
      href={`/feeds/${feed.slug}`}
    >
      <div className="absolute inset-0  bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-pink-200/20 dark:from-blue-700/20 dark:via-purple-700/20 dark:to-pink-700/20  group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

      <div className="relative space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-500 dark:text-blue-300 leading-tight tracking-tight ">
          {feed.title}
        </h3>

        <p className="text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 font-medium">
          {feed.description}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap gap-2">
            <Hashtag hashtag={feed.hashtag} slug={feed.slug} className="text-sm m-0" />
          </div>
          <time className="text-sm text-neutral-400 dark:text-neutral-500 font-normal">
            {setDateFormat(feed.date)}
          </time>
        </div>
      </div>
    </Link>
  );
}
