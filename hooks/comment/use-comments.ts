import { useEffect, RefObject, useState } from 'react';

import { useTheme } from 'next-themes';

export function useComments(utterancesRef: RefObject<HTMLDivElement | null>) {
  const { resolvedTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!utterancesRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.setAttribute('repo', 'myjeong19/haekkok');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', resolvedTheme === 'dark' ? 'github-dark' : 'github-light');
    script.setAttribute('label', 'comment');

    utterancesRef.current.appendChild(script);

    script.onload = () => {
      setIsLoading(false);
      setIsError(false);
    };

    script.onerror = () => {
      setIsLoading(false);
      setIsError(true);
    };

    return () => {
      if (utterancesRef.current) {
        utterancesRef.current.innerHTML = '';
      }
    };
  }, [resolvedTheme]);

  useEffect(() => {
    if (window.utterances && resolvedTheme) {
      const theme = resolvedTheme === 'dark' ? 'github-dark' : 'github-light';
      window.utterances.setTheme(theme);
    }
  }, [resolvedTheme]);

  return { isLoading, isError };
}
