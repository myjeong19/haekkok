import { useCallback, useRef } from 'react';

export function useCommentsScript() {
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const isMountedRef = useRef(true);

  const createScript = useCallback((theme: string) => {
    if (!isMountedRef.current) return null;

    try {
      const script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.async = true;
      script.crossOrigin = 'anonymous';

      script.setAttribute('repo', 'myjeong19/haekkok');
      script.setAttribute('issue-term', 'pathname');
      script.setAttribute('theme', theme);
      script.setAttribute('label', 'comment');

      return script;
    } catch (error) {
      return null;
    }
  }, []);

  const cleanup = useCallback(() => {
    isMountedRef.current = false;
    scriptRef.current = null;
  }, []);

  return { scriptRef, isMountedRef, createScript, cleanup };
}
