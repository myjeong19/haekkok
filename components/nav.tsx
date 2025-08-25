'use client';
import Link from 'next/link';
import ThemeToggle from './theme';
import { usePathname } from 'next/navigation';

import feeds from '@/content/feeds';
import { ScrollProgressBar } from '@/components/scroll-progress-bar';
import { classMerge } from '@/lib/class-merge';
import { useScrolled } from '@/hooks/comment/use-scrolled';

export const navItems = {
  '/': {
    name: 'Feeds',
  },
  '/about': {
    name: 'About',
  },
};

export function Navbar() {
  const pathname = usePathname();
  const feed = feeds.find(feed => `/feeds/${feed.slug}` === pathname);
  const { showHeader, showFixedNav, getCurrentPageTitle } = useScrolled();

  return (
    <>
      {pathname === `/feeds/${feed?.slug}` && showHeader && (
        <header className="w-full md:max-w-2xl max-w-4xl fixed left-1/2 transform -translate-x-1/2 top-0 right-0 z-50 h-20 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto h-full px-2 py-3 flex justify-between items-center">
            <div className="flex flex-row space-x-0">
              <h1 className="text-base md:text-lg font-medium text-neutral-900 dark:text-neutral-100 truncate py-1 pl-2 m-1 w-[250px] md:w-full">
                {getCurrentPageTitle()}
              </h1>
            </div>
            <ThemeToggle />
          </div>
        </header>
      )}

      {pathname === `/feeds/${feed?.slug}` && showFixedNav && (
        <nav className="w-full md:max-w-2xl max-w-4xl fixed left-1/2 transform -translate-x-1/2 top-0 right-0 z-50 h-20 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto h-full px-2 py-3 flex justify-between items-center">
            <div className="flex flex-row space-x-0">
              {Object.entries(navItems).map(([path, { name }]) => (
                <Link
                  key={path}
                  href={path}
                  className={classMerge(
                    'transition-all text-neutral-600 hover:text-neutral-900 active:text-black dark:text-neutral-300 dark:hover:text-neutral-100 dark:active:text-white flex align-middle relative py-1 pl-2 m-1 font-medium hover:font-bold',
                    (pathname === path || (pathname.includes('feeds') && path === '/')) &&
                      'font-bold text-black dark:text-neutral-100 dark:hover:text-neutral-100'
                  )}
                >
                  {name}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </nav>
      )}

      {(showFixedNav || showHeader) && <ScrollProgressBar />}

      <aside className="mb-16 tracking-tight ">
        <div className="lg:sticky lg:top-20">
          <nav
            className="flex flex-row items-start relative px-0 pb-0 fade scroll-pr-6 md:relative justify-between"
            id="nav"
          >
            <div className="flex flex-row space-x-0">
              {Object.entries(navItems).map(([path, { name }]) => (
                <Link
                  key={path}
                  href={path}
                  className={classMerge(
                    'transition-all text-neutral-600 hover:text-neutral-900 active:text-black dark:text-neutral-300 dark:hover:text-neutral-100 dark:active:text-white flex align-middle relative py-1 px-2 m-1 font-medium hover:font-bold',
                    (pathname === path || (pathname.includes('feeds') && path === '/')) &&
                      'font-bold text-black dark:text-neutral-100 dark:hover:text-neutral-100'
                  )}
                >
                  {name}
                </Link>
              ))}
            </div>
            <div className="md:ml-auto">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
