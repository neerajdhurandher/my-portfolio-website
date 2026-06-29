import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

/**
 * On the homepage (`/`):
 *   - react-scroll handles smooth in-page scrolling
 *   - navigate() updates the URL hash so the address bar reflects the section
 *
 * On any other route:
 *   - React Router Link navigates SPA-style to { pathname: '/', hash: '#to' }
 *   - ScrollToTop then scrolls to the target section
 */
const NavScrollLink = ({ to, children, onClick, className }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname !== '/') {
    return (
      <RouterLink
        to={{ pathname: '/', hash: `#${to}` }}
        className={className}
        onClick={onClick}
      >
        {children}
      </RouterLink>
    );
  }

  // On the homepage: let react-scroll scroll smoothly AND update the URL hash.
  const handleClick = () => {
    navigate({ pathname: '/', hash: `#${to}` }, { replace: true });
    if (onClick) onClick();
  };

  return (
    <Link
      activeClass="active-link"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default NavScrollLink;
