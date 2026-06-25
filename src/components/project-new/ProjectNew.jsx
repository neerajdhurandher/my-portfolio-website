import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

import './project-new.scss';
import CaseStudyCard from './CaseStudyCard';
import yaariBanner from '../../assets/project_new/yaari_banner.png';
import chromeNewTab from '../../assets/project_new/new_tab_banner.png';
import autoFill from '../../assets/project_new/autofill_banner.png';
import CaseStudyCTA from './CaseStudyCTA';

// ── Case study data ──────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    id: 1,
    title: 'Yaari: Social Media Android App',
    section1Label: 'The Origin',
    section1Text:
      'Built during college while learning Android development, Yaari started as a question — "how does a social media app actually work?" The goal was to go beyond tutorials and ship a fully functional platform with real users, real-time data, and a complete social graph.',
    section2Label: 'Under the Hood',
    section2Text: (
      <>
        Yaari is built natively on the{' '}
        <strong>Android SDK using Java</strong>, backed entirely by{' '}
        <strong>Google Firebase</strong>. Firestore manages the social graph and
        post data, Firebase Auth handles Google Sign-In, Firebase Storage serves
        user-uploaded photos, and Firebase Realtime Database powers live 1-on-1
        chat. The result is a full-featured app — post feed, follow/follower
        system, real-time messaging with image support, and complete profile
        management — all on a serverless, real-time backend.
      </>
    ),
    stats: [
      { value: '100%', label: 'Native Android' },
      { value: 'Real-time', label: 'Firebase Services' },
    ],
    techTags: ['Android', 'Java', 'Kotlin', 'Firebase'],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/neerajdhurandher/Yaari/', primary: true },
      { label: 'Source Code', href: 'https://github.com/neerajdhurandher/Yaari', primary: false },
    ],
    gradientClass: 'gradient--nexus',
    image: yaariBanner,
    reverse: false,
  },
  {
    id: 2,
    title: "Neeraj's New Tab: Chrome Extension",
    section1Label: 'The Problem',
    section1Text:
      'Every time you open a new tab in Chrome, you get a blank page — a wasted moment. I wanted to turn that into a productivity boost: a personal dashboard with search, weather, bookmarks, and inspiration, right where you already are.',
    section2Label: 'How It Works',
    section2Text: (
      <>
        Built with vanilla <strong>JavaScript, HTML, and CSS</strong>, the
        extension hooks into <strong>Chrome&apos;s native APIs</strong> — the
        Search API for multi-engine support (Google, Bing, DuckDuckGo) with
        real-time suggestions, the Storage API to persist bookmarks and
        preferences, and external APIs for live weather and curated quotes.
        Four releases later, it&apos;s a daily-driver for anyone who wants a
        smarter new tab.
      </>
    ),
    stats: [
      { value: 'Live', label: 'Chrome Web Store' },
      { value: 'v1.3', label: 'Latest Release' },
    ],
    techTags: ['JavaScript', 'CSS', 'Chrome APIs'],
    links: [
      { label: 'Install Extension', href: 'https://chromewebstore.google.com/detail/neeraj-new-tab/gdopmhkjbdoceejomgdgecljcmhdiphf', primary: true },
      { label: 'Source Code', href: 'https://github.com/neerajdhurandher/chrome-new-tab', primary: false },
    ],
    gradientClass: 'gradient--aether',
    image: chromeNewTab,
    reverse: true,
  },
  {
    id: 3,
    title: 'AutoFill: Apply Jobs Smartly',
    section1Label: 'The Problem',
    section1Text:
      'Job hunting is exhausting enough without retyping your name, phone, address, and work history on every single portal. I built AutoFill to eliminate that repetitive data entry — set up your profile once, then fill any job application in under 30 seconds.',
    section2Label: 'How It Works',
    section2Text: (
      <>
        Built as a <strong>Manifest V3 Chrome extension</strong> using
        JavaScript, HTML, and CSS, AutoFill uses smart DOM-based field detection
        to intelligently map your stored profile to form inputs on{' '}
        <strong>LinkedIn, Indeed, Glassdoor, Workday</strong>, and more.
        Privacy is a first-class concern — your data is encrypted with{' '}
        <strong>AES-256</strong> and stored exclusively on your own computer via
        the Chrome Storage API. <strong>Nothing is ever uploaded to a server,
        synced to the cloud, or shared with third parties.</strong> No accounts,
        no data leaks, zero risk. A one-click preview shows confidence scores
        for each detected field before anything is filled, keeping you fully in
        control.
      </>
    ),
    stats: [
      { value: '95%+', label: 'Detection Accuracy' },
      { value: '10+', label: 'Job Portals' },
    ],
    techTags: ['JavaScript', 'Chrome APIs', 'AES-256'],
    links: [
      { label: 'Install Extension', href: 'https://chromewebstore.google.com/detail/auto-fill-job-application/dodpiialjmdclpanblnhneiclbienkkb', primary: true },
      { label: 'Source Code', href: 'https://github.com/neerajdhurandher/Auto-Fill-Extension', primary: false },
    ],
    gradientClass: 'gradient--void',
    image: autoFill,
    reverse: false,
  },
];

// ── Component ────────────────────────────────────────────────────────────────
const ProjectNew = () => (
  <section className="project-new" id="project-new">
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

      {/* Case study cards */}
      <div className="project-new__studies">
        {CASE_STUDIES.map((study) => (
          <CaseStudyCard key={study.id} data={study} />
        ))}
      </div>

      {/* CTA */}
      <CaseStudyCTA />

    </Container>
  </section>
);

export default ProjectNew;
