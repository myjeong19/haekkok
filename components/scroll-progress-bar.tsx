'use client';

import { useEffect, useState, useRef } from 'react';

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateProgress = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = window.scrollY;
          const progress = (scrolled / scrollHeight) * 100;
          setProgress(progress);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gray-200/30 dark:bg-gray-700/30 backdrop-blur-sm z-50 max-w-2xl rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 transition-all duration-150 ease-out shadow-lg"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
