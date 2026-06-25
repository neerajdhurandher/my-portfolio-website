import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const CaseStudyCard = ({ data }) => {
  const {
    title,
    section1Label,
    section1Text,
    section2Label,
    section2Text,
    stats,
    techTags,
    links,
    gradientClass,
    image,
    reverse,
  } = data;

  return (
    <div className="case-study-card">
      <Row className="case-study-card__row align-items-start g-5">

        {/* ── Image panel ──────────────────────────────────── */}
        <Col
          md={6}
          className={`case-study-card__image-col${reverse ? ' order-md-2' : ''}`}
        >
          <Fade
            direction={reverse ? 'right' : 'left'}
            triggerOnce
            duration={700}
          >
            <div className="case-study-card__image-wrapper">
              <div className={`case-study-card__image-placeholder ${!image ? gradientClass : ''}`}>
                {image && (
                  <img
                    src={image}
                    alt={title}
                    className="case-study-card__image"
                  />
                )}
                <div className="case-study-card__tech-chips">
                  {techTags.map((tag) => (
                    <span key={tag} className="case-study-card__chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        </Col>

        {/* ── Content panel ────────────────────────────────── */}
        <Col
          md={6}
          className={reverse ? 'order-md-1' : ''}
        >
          <Fade
            direction={reverse ? 'left' : 'right'}
            triggerOnce
            duration={700}
            delay={120}
          >
            <div className="case-study-card__content">

              {/* Title */}
              <div className="case-study-card__title-block">
                <h3 className="case-study-card__title">{title}</h3>
                <div className="case-study-card__title-accent" />
              </div>

              {/* Text sections */}
              <div className="case-study-card__sections">
                <div>
                  <h4 className="case-study-card__section-label">{section1Label}</h4>
                  <p className="case-study-card__section-text">{section1Text}</p>
                </div>
                <div>
                  <h4 className="case-study-card__section-label">{section2Label}</h4>
                  <p className="case-study-card__section-text">{section2Text}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="case-study-card__stats">
                {stats.map((stat) => (
                  <div key={stat.label} className="case-study-card__stat-box">
                    <div className="case-study-card__stat-value">{stat.value}</div>
                    <div className="case-study-card__stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Action links */}
              <div className="case-study-card__links">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target='_blank'
                    className={`case-study-card__link case-study-card__link--${link.primary ? 'primary' : 'secondary'}`}
                  >
                    {link.label}
                    {link.primary && (
                      <span className="case-study-card__link-arrow">→</span>
                    )}
                  </a>
                ))}
              </div>

            </div>
          </Fade>
        </Col>

      </Row>
    </div>
  );
};

export default CaseStudyCard;
