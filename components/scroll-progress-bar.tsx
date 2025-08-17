'use client';

import { useEffect, useState } from 'react';

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gray-200 z-50 max-w-2xl">
      <div
        className="h-full bg-blue-500 dark:bg-blue-300 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
