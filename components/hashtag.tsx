import type { Post } from '@/content/posts';
import { classMerge } from '@/lib/class-merge';

type HashtagProps = Pick<Post, 'hashtag' | 'slug'> & { className?: string };

export function Hashtag({ hashtag, slug, className = '' }: HashtagProps) {
  return (
    <div className={classMerge('flex flex-wrap gap-x-2 mb-3', className)}>
      {hashtag.map((hashtag, index) => (
        <span
          key={`${slug}-${hashtag}-${index}`}
          className="inline-block px-2 py-1 text-[0.8125rem] font-medium leading-[1.231] tracking-[-0.003em] bg-blue-50 text-blue-600 
                         dark:bg-blue-900/20 dark:text-blue-400 rounded-md 
                         group-hover:bg-blue-100 group-active:bg-blue-200 
                         dark:group-hover:bg-blue-900/30 dark:group-active:bg-blue-900/40"
        >
          #{hashtag}
        </span>
      ))}
    </div>
  );
}
