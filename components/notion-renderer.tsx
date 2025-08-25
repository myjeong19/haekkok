'use client';
import { Notion } from '@notionpresso/react';
import type { Feed } from '@/content/feeds';
import { setDateFormat } from '@/lib';
import { Hashtag } from './hashtag';

export default function NotionRenderer({ feed }: { feed: Feed }) {
  return (
    <Notion>
      <Notion.Cover src={feed.image} />
      <Notion.Body>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/4 via-transparent to-neutral-100/4 dark:from-blue-950/20 dark:via-purple-950/15 dark:to-pink-950/20  z-0"></div>

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(100,100,100,0.03),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.08),transparent_50%)]  z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(150,150,150,0.02),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.06),transparent_50%)]  z-0"></div>

          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-neutral-50/2 to-transparent dark:via-white/[0.02]  z-0"></div>

          <header className="relative mb-12 px-6 py-8 bg-gradient-to-br from-white/15 via-white/8 to-neutral-50/3 dark:from-neutral-950/40 dark:via-neutral-900/30 dark:to-neutral-800/25 backdrop-blur-xl shadow-inner shadow-white/20 dark:shadow-neutral-800/20 overflow-hidden z-10">
            <div className="pb-6">
              <h1 className="text-2xl md:text-4xl font-bold text-blue-500 dark:text-blue-300 leading-tight tracking-tight">
                {feed.title}
              </h1>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-md leading-relaxed text-neutral-800 dark:text-neutral-200 font-medium">
                    {feed.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Hashtag hashtag={feed.hashtag} slug={feed.slug} className="text-sm" />
                  <time className="block mt-2 text-sm text-neutral-400 dark:text-neutral-500 font-normal">
                    {setDateFormat(feed.date)}
                  </time>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-blue-400/60 to-blue-600/40 rounded-full blur-[0.5px]"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-neutral-400/40 to-neutral-500/30 rounded-full blur-[0.5px]"></div>
            <div className="absolute top-1/2 left-2 w-1 h-1 bg-white/30 rounded-full blur-[0.5px]"></div>
            <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-blue-300/30 rounded-full blur-[0.5px]"></div>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent dark:from-white/[0.05] "></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20  blur-xl opacity-30"></div>
          </header>
        </div>

        <Notion.Blocks blocks={feed.content.blocks} />
      </Notion.Body>
    </Notion>
  );
}
