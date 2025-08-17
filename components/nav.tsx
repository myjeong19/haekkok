'use client';
import Link from 'next/link';
import ThemeToggle from './theme';
import { usePathname } from 'next/navigation';
import { classMerge } from '@/lib/class-merge';

const navItems = {
  '/': {
    name: 'Feed',
  },
  '/about': {
    name: 'About',
  },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={classMerge(
                    'transition-all text-neutral-600 hover:text-neutral-900 active:text-black dark:text-neutral-300 dark:hover:text-neutral-100 dark:active:text-white flex align-middle relative py-1 px-2 m-1 font-medium hover:font-bold',
                    pathname === path &&
                      'font-bold text-black dark:text-neutral-100 dark:hover:text-neutral-100'
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
}
