'use client';

import Link from 'next/link';
import posts from '../content/posts';
import { PostCard } from './post-card';
import { PostListItem } from './post-list-item';

export function BlogPosts() {
  return (
    <div className="space-y-8">
      <PostCard key={posts[0].title + posts[0].slug} post={posts[0]} />

      <div className="space-y-6">
        <h2 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-6  tracking-wider">
          Earlier posts
        </h2>

        <div className="border-t border-neutral-200 dark:border-neutral-700"></div>

        {posts.slice(1).map(post => (
          <PostListItem key={post.title + post.slug} post={post} />
        ))}

        {posts.length < 2 && (
          <div className="flex flex-col justify-center items-center text-sm py-10 text-gray-400 italic dark:text-neutral-400 mb-6  tracking-wider">
            <div>
              <p>더 많은 이야기를 준비하고 있어요</p>

              <div className="flex gap-2">
                <Link href="https://github.com/myjeong19">Github</Link>
                <Link href="https://www.linkedin.com/in/minyeong-jeong-a93a01271/">Linkedin</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
