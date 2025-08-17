import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { classMerge } from '@/lib/class-merge';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme: theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={classMerge(
        'p-2 rounded-md lg:hover:bg-gray-100 lg:dark:hover:bg-gray-800',
        className
      )}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
