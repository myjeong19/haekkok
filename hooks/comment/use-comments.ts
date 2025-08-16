import { useCallback, useEffect, useState } from 'react';
import { useCommentsScript } from './use-comments-script';
import { useCommentsDOM } from './use-comments-dom';
import { useCommentsTheme } from './use-comments.theme';

export function useComments() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { scriptRef, isMountedRef, createScript, cleanup } = useCommentsScript();
  const { utterancesRef, appendScript, removeScript, clearContainer } = useCommentsDOM();
  const { getTheme, setTheme } = useCommentsTheme();

  const loadUtterances = useCallback(
    async (theme: string) => {
      if (!isMountedRef.current) return;

      try {
        if (scriptRef.current) {
          removeScript(scriptRef.current);
          scriptRef.current = null;
        }

        const script = createScript(theme);
        if (!script) {
          setIsLoading(false);
          setIsError(true);
          return;
        }

        script.onerror = () => {
          setIsLoading(false);
          setIsError(true);
        };

        script.onload = () => {
          setIsLoading(false);
          setIsError(false);
        };

        if (appendScript(script)) {
          scriptRef.current = script;
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    },
    [isMountedRef, scriptRef, createScript, appendScript, removeScript]
  );

  useEffect(() => {
    if (!utterancesRef.current || !getTheme() || !isMountedRef.current) return;
    loadUtterances(getTheme());
  }, [getTheme, loadUtterances]);

  useEffect(() => {
    if (!getTheme() || !isMountedRef.current) return;

    try {
      const theme = getTheme();
      if (!setTheme(theme)) {
        loadUtterances(theme);
      }
    } catch (error) {
      setIsError(true);
    }
  }, [getTheme, setTheme, loadUtterances]);

  useEffect(() => {
    return () => {
      cleanup();
      clearContainer();
    };
  }, [cleanup, clearContainer]);

  return { utterancesRef, isLoading, isError };
}
