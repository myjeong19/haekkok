'use client';

import { useRef } from 'react';

import { classMerge } from '@/lib/class-merge';
import { useComments } from '@/hooks/comment/use-comments';
import { CommentLoading, CommentError } from './comment-status-info';

declare global {
  interface Window {
    utterances?: {
      setTheme: (theme: string) => void;
    };
  }
}

const Utterances = () => {
  const utterancesRef = useRef<HTMLDivElement>(null);

  const { isLoading, isError } = useComments(utterancesRef);

  return (
    <>
      <div className=" rounded-xl p-5 border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 w-full h-full min-w-[254px] max-w-[622px] min-h-[311px] max-h-[348px] transition-all duration-500 ease-out">
        <div
          className={classMerge(
            'transition-all duration-500 ease-out transform',
            isLoading || isError ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          )}
          ref={utterancesRef}
        />
        {isLoading && <CommentLoading className=" h-full my-[16px] px-[4px]" />}
        {isError && <CommentError className=" h-full my-[16px] px-[4px]" />}
      </div>
    </>
  );
};

export default Utterances;
