import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

import '../components/project-new/project-new.scss';
import CaseStudyCard from '../components/project-new/CaseStudyCard';
import CaseStudyCTA from '../components/project-new/CaseStudyCTA';
import { CASE_STUDIES } from '../data/caseStudies';

const ProjectsPage = () => (
  <section className="project-new" id="projects">
    <Container>

      {/* Header */}
      <Fade direction="up" triggerOnce duration={600}>
        <div className="project-new__header">
          <div className="project-new__badge">
            <span className="project-new__badge-dot" />
            <span className="project-new__badge-text">All Projects</span>
          </div>

          <h2 className="project-new__title">
            Complete{' '}
            <span className="project-new__title--accent">Portfolio</span>
          </h2>

          <p className="project-new__subtitle">
            Every project here represents a real problem solved with deliberate
            engineering decisions. Here are showcasing {CASE_STUDIES.length} projects and many more.
          </p>
        </div>
      </Fade>

      {/* All case study cards */}
      <div className="project-new__studies">
        {CASE_STUDIES.map((study) => (
          <CaseStudyCard key={study.id} data={study} />
        ))}
      </div>

      {/* CTA — links back to the homepage contact section */}
      <CaseStudyCTA href="/#contact" />

    </Container>
  </section>
);

export default ProjectsPage;
