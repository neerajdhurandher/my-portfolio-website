import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

// When `href` is provided the button navigates to that URL (used on pages
// where react-scroll has no targets to scroll to).
const CaseStudyCTA = ({ href }) => (
  <Fade direction="up" triggerOnce duration={700}>
    <div className="case-study-cta">
      <div className="case-study-cta__glow" />
      <h2 className="case-study-cta__title">
        Ready to solve the next complex challenge?
      </h2>
      <p className="case-study-cta__subtitle">
        I&apos;m looking for partners who value precision engineering and
        architectural integrity.
      </p>
      {href ? (
        href.startsWith('/#') ? (
          <RouterLink
            to={{ pathname: '/', hash: href.substring(1) }}
            className="case-study-cta__btn"
          >
            Start a Conversation
          </RouterLink>
        ) : (
          <a href={href} className="case-study-cta__btn">
            Start a Conversation
          </a>
        )
      ) : (
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="case-study-cta__btn"
        >
          Start a Conversation
        </Link>
      )}
    </div>
  </Fade>
);

export default CaseStudyCTA;
