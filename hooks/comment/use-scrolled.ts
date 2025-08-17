import { navItems } from '@/components/nav';
import posts from '@/content/posts';
import { usePathname } from 'next/navigation';

import { useCallback, useEffect, useRef, useState } from 'react';

export const useScrolled = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showFixedNav, setShowFixedNav] = useState(false);
  const lastScrollYRef = useRef(0);
  const pathname = usePathname();

  const post = posts.find(post => `/posts/${post.slug}` === pathname);

  const getCurrentPageTitle = () => {
    if (post) return post.title;
    const staticPage = navItems[pathname as keyof typeof navItems];
    if (staticPage) return staticPage.name;
    return 'Page Not Found';
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollYRef.current;
    const hasScrolledPastNav = currentScrollY > 80;

    if (hasScrolledPastNav) {
      if (isScrollingDown) {
        setShowHeader(true);
        setShowFixedNav(false);
      } else {
        setShowHeader(false);
        setShowFixedNav(true);
      }
    } else {
      setShowHeader(false);
      setShowFixedNav(false);
    }

    lastScrollYRef.current = currentScrollY;
  }, []);

  useEffect(() => {
    let ticking = false;

    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleScroll]);

  return { showHeader, showFixedNav, getCurrentPageTitle };
};
