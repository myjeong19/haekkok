import { MessageSquareWarningIcon, Loader2 } from 'lucide-react';

interface CommentStatusProps {
  className?: string;
}

export function CommentLoading({ className = '' }: CommentStatusProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-white/80 p-8 backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-900/80 transition-all duration-500 ease-out transform ${className}`}
    >
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="relative">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500 dark:text-blue-400" />
          <div className="absolute inset-0 h-8 w-8 animate-ping rounded-full bg-blue-400/20"></div>
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            댓글을 불러오는 중
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">잠시만 기다려주세요</p>
        </div>

        <div className="flex space-x-1.5">
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400 [animation-delay:-0.3s]"></div>
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400 [animation-delay:-0.15s]"></div>
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400"></div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/[0.02]"></div>
    </div>
  );
}

export function CommentError({ className }: CommentStatusProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-red-200/60 bg-white/80 p-8 backdrop-blur-sm dark:border-red-800/60 dark:bg-neutral-900/80 transition-all duration-500 ease-out transform ${
        className || ''
      }`}
    >
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="relative">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
            <MessageSquareWarningIcon className="h-5 w-5 text-red-500 dark:text-red-400" />
          </div>
          <div className="absolute inset-0 h-8 w-8 animate-ping rounded-full bg-red-400/20"></div>
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            댓글을 불러올 수 없습니다
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            잠시 후 다시 시도해주세요
          </p>
        </div>

        <div className="flex space-x-1.5">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400"></div>
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400 [animation-delay:0.2s]"></div>
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400 [animation-delay:0.4s]"></div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/5 to-transparent dark:via-red-900/[0.02]"></div>
    </div>
  );
}
