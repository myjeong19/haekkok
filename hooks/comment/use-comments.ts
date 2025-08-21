import { useEffect, RefObject, useState } from 'react';
import { useTheme } from 'next-themes';
import { GISUS } from '@/app/constants';

declare global {
  interface Window {
    giscus: {
      setTheme: (theme: string) => void;
    };
  }
}

export function useComments(giscusRef: RefObject<HTMLDivElement | null>) {
  const { resolvedTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!giscusRef.current) return;
    setIsLoading(true);

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.setAttribute('data-repo', 'myjeong19/haekkok');
    script.setAttribute('data-repo-id', GISUS.REPO_ID);
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', GISUS.CATEGORY_ID);
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', resolvedTheme === 'dark' ? 'dark' : 'light');
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('id', 'giscus-script');

    giscusRef.current.appendChild(script);

    script.onload = () => {
      setIsLoading(false);
      setIsError(false);
    };

    script.onerror = () => {
      setIsLoading(false);
      setIsError(true);
    };

    return () => {
      if (giscusRef.current) {
        giscusRef.current.innerHTML = '';
      }
    };
  }, [resolvedTheme]);

  useEffect(() => {
    if (window.giscus && resolvedTheme) {
      const theme = resolvedTheme === 'dark' ? 'dark' : 'light';
      window.giscus.setTheme(theme);
    }
  }, [resolvedTheme]);

  return { isLoading, isError };
}
