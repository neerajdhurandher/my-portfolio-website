import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

import './project-new.scss';
import CaseStudyCard from './CaseStudyCard';
import CaseStudyCTA from './CaseStudyCTA';
import { CASE_STUDIES } from '../../data/caseStudies';

// ── Component ────────────────────────────────────────────────────────────────
const ProjectNew = () => (
  <section className="project-new" id="projects">
    <Container>

      {/* Header */}
      <Fade direction="up" triggerOnce duration={600}>
        <div className="project-new__header">
          <div className="project-new__badge">
            <span className="project-new__badge-dot" />
            <span className="project-new__badge-text">Technical Deep Dives</span>
          </div>

          <h2 className="project-new__title">
            Engineering{' '}
            <span className="project-new__title--accent">Showcase</span>
          </h2>

          <p className="project-new__subtitle">
            Behind every project is a challenge worth solving. Here&apos;s how
            I think through problems and build solutions that last.
          </p>
        </div>
      </Fade>

      {/* Case study cards — top 3 only */}
      <div className="project-new__studies">
        {CASE_STUDIES.slice(0, 3).map((study) => (
          <CaseStudyCard key={study.id} data={study} />
        ))}
      </div>

      {/* View all projects CTA */}
      <Fade direction="up" triggerOnce duration={600}>
        <div className="project-new__view-all">
          <p className="project-new__view-all-hint">
            Showing 3 of {CASE_STUDIES.length} projects
          </p>
          <Link to="/projects" className="project-new__view-all-btn">
            View All Projects →
          </Link>
        </div>
      </Fade>

      {/* Contact CTA */}
      <CaseStudyCTA />

    </Container>
  </section>
);

export default ProjectNew;
