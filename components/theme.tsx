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
      className={`theme-toggle ${theme === 'dark' ? 'dark-mode' : 'light-mode '} ${className}`}
    >
      <div className="sun-circle min-w-[32px] min-h-[32px] pr-2 pl-2">
        <div className="crescent"></div>
      </div>
    </button>
  );
};

export default ThemeToggle;
