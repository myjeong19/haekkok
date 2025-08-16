import { useTheme } from 'next-themes';
import { useCallback } from 'react';

export function useCommentsTheme() {
  const { resolvedTheme } = useTheme();

  const getTheme = useCallback(() => {
    return resolvedTheme === 'dark' ? 'github-dark' : 'github-light';
  }, [resolvedTheme]);

  const setTheme = useCallback((theme: string) => {
    if (window.utterances) {
      try {
        window.utterances.setTheme(theme);
        return true;
      } catch (error) {
        return false;
      }
    }
    return false;
  }, []);

  return { getTheme, setTheme };
}
