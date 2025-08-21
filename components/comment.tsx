'use client';

import { useRef } from 'react';
import { useTheme } from 'next-themes';
import { useComments } from '@/hooks/comment/use-comments';
import { CommentLoading, CommentError } from './comment-status-info';

const Comment = () => {
  const giscusRef = useRef<HTMLDivElement>(null);
  const { isLoading, isError } = useComments(giscusRef);

  return (
    <div className="relative border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 w-full  min-w-[254px] max-w-[622px] min-h-[311px] max-h-[348px] transition-all duration-500 ease-out  ">
      <div ref={giscusRef} className="h-full pb-20" />
      {isLoading && (
        <div className="absolute inset-0 bg-white dark:bg-neutral-950 flex items-center justify-center z-10">
          <CommentLoading className="my-[16px] px-[4px] w-full" />
        </div>
      )}
      {isError && (
        <div className="absolute inset-0 bg-white dark:bg-neutral-950 flex items-center justify-center z-10">
          <CommentError className="my-[16px] px-[4px] w-full" />
        </div>
      )}
    </div>
  );
};

export default Comment;
