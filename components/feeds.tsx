'use client';

import Link from 'next/link';
import feeds from '@/content/feeds';
import { FeedCard } from './feed-card';
import { FeedListItem } from './feed-list-item';

const sortedFeeds = [...feeds].sort((a, b) => {
  const diff = new Date(b.date).getTime() - new Date(a.date).getTime();
  if (diff !== 0) return diff;
  return a.slug.localeCompare(b.slug);
});

const HAS_FEEDS = sortedFeeds.length > 0;
const LATEST_FEED = HAS_FEEDS ? sortedFeeds[0] : null;
const OTHER_FEEDS = HAS_FEEDS ? sortedFeeds.slice(1) : [];
const HAS_OTHER_FEEDS = OTHER_FEEDS.length > 0;

export function Feeds() {
  return (
    <div className="space-y-8">
      {LATEST_FEED && <FeedCard key={LATEST_FEED.title + LATEST_FEED.slug} feed={LATEST_FEED} />}

      <div className="space-y-6">
        <h2 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-6  tracking-wider">
          Earlier feeds
        </h2>

        <div className="border-t border-neutral-200 dark:border-neutral-700"></div>

        {OTHER_FEEDS.map(feed => (
          <FeedListItem key={feed.title + feed.slug} feed={feed} />
        ))}

        {!HAS_OTHER_FEEDS && (
          <div className="flex flex-col justify-center items-center text-sm py-10 text-gray-400 italic dark:text-neutral-400 mb-6  tracking-wider">
            <div>
              <p>더 많은 이야기를 준비하고 있어요</p>

              <div className="flex gap-2">
                <Link href="https://github.com/myjeong19" target="_blank" rel="noopener noreferrer">
                  Github
                </Link>
                <Link
                  href="https://www.linkedin.com/in/minyeong-jeong-a93a01271/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
