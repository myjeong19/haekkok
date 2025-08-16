'use client';

import { CommentLoading, CommentError } from './comment-status-info';
import { useComments } from '@/hooks/comment/use-comments';

declare global {
  interface Window {
    utterances?: {
      setTheme: (theme: string) => void;
    };
  }
}

const Utterances = () => {
  const { utterancesRef, isLoading, isError } = useComments();

  if (isLoading) {
    return <CommentLoading />;
  }

  if (isError) {
    return <CommentError />;
  }

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
      <div ref={utterancesRef} />
    </div>
  );
};

export default Utterances;
