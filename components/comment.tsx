'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';

const Utterances = () => {
  const utterancesRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

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

    return () => {
      if (utterancesRef.current) {
        utterancesRef.current.innerHTML = '';
      }
    };
  }, [resolvedTheme]);

  return <div ref={utterancesRef} />;
};

export default Utterances;
