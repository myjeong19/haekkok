import { useCallback, useRef } from 'react';

export function useCommentsDOM() {
  const utterancesRef = useRef<HTMLDivElement>(null);

  const appendScript = useCallback((script: HTMLScriptElement) => {
    if (!utterancesRef.current) return false;

    utterancesRef.current.appendChild(script);
    return true;
  }, []);

  const removeScript = useCallback((script: HTMLScriptElement) => {
    if (!utterancesRef.current || !utterancesRef.current.contains(script)) return false;

    utterancesRef.current.removeChild(script);
    return true;
  }, []);

  const clearContainer = useCallback(() => {
    if (!utterancesRef.current) return;
    utterancesRef.current.innerHTML = '';
  }, []);

  return { utterancesRef, appendScript, removeScript, clearContainer };
}
