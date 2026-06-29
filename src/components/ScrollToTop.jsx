import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Handles scroll on route changes:
 *
 * - Pathname changed, no hash  → scroll to top instantly
 * - Pathname changed, has hash → wait for React to render then scroll to section
 * - Only hash changed (same pathname) → do nothing; react-scroll handles it
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    const prevPathname = prevPathnameRef.current;
    prevPathnameRef.current = pathname;

    // Same page — only the hash changed; react-scroll is already scrolling.
    if (prevPathname === pathname) return;

    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 80);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
