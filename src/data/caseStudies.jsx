import React from 'react';

import yaariBanner   from '../assets/project_new/yaari_banner.png';
import chromeNewTab  from '../assets/project_new/new_tab_banner.png';
import autoFill      from '../assets/project_new/autofill_banner.png';
import expenseTracker from '../assets/project_new/expense_tracker_banner.png';
import issueTracker  from '../assets/project_new/issue_tracking_tool_banner.png';
import dailyTracker  from '../assets/project_new/daily_tracker_banner.png';
import imageDateModifier from '../assets/project_new/image_date_modifier_banner.png';
import udemyClone   from '../assets/project_new/udemy_backend_api_banner.png';
import keepMeAvailable from '../assets/project_new/keep_me_available_banner.png';

// ── Case study data ──────────────────────────────────────────────────────────
export const CASE_STUDIES = [
  // ── 1 ── Yaari ────────────────────────────────────────────────────────────
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
      { label: 'Source Code',   href: 'https://github.com/neerajdhurandher/Yaari',   primary: false },
    ],
    gradientClass: 'gradient--nexus',
    image: yaariBanner,
    reverse: false,
  },

  // ── 2 ── Chrome New Tab ────────────────────────────────────────────────────
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
      { value: 'Live',  label: 'Chrome Web Store' },
      { value: 'v1.3',  label: 'Latest Release' },
    ],
    techTags: ['JavaScript', 'CSS', 'Chrome APIs'],
    links: [
      { label: 'Install Extension', href: 'https://chromewebstore.google.com/detail/neeraj-new-tab/gdopmhkjbdoceejomgdgecljcmhdiphf', primary: true },
      { label: 'Source Code',       href: 'https://github.com/neerajdhurandher/chrome-new-tab',                                         primary: false },
    ],
    gradientClass: 'gradient--aether',
    image: chromeNewTab,
    reverse: true,
  },

  // ── 3 ── AutoFill ──────────────────────────────────────────────────────────
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
      { value: '10+',  label: 'Job Portals' },
    ],
    techTags: ['JavaScript', 'Chrome APIs', 'AES-256'],
    links: [
      { label: 'Install Extension', href: 'https://chromewebstore.google.com/detail/auto-fill-job-application/dodpiialjmdclpanblnhneiclbienkkb', primary: true },
      { label: 'Source Code',       href: 'https://github.com/neerajdhurandher/Auto-Fill-Extension',                                              primary: false },
    ],
    gradientClass: 'gradient--void',
    image: autoFill,
    reverse: false,
  },

  // ── 4 ── Expense Tracker Android ──────────────────────────────────────────
  {
    id: 4,
    title: 'Expense Tracker: Smart Android App',
    section1Label: 'The Problem',
    section1Text:
      'Every time you make a payment, your bank sends an SMS. But manually noting down every transaction is a chore most people skip — until they wonder where their money went at the end of the month. I wanted tracking to be effortless, not a discipline.',
    section2Label: 'Under the Hood',
    section2Text: (
      <>
        Built in <strong>Kotlin with Jetpack Compose</strong> and a clean{' '}
        <strong>MVVM architecture</strong>, the app listens for incoming bank
        SMS messages via a <code>BroadcastReceiver</code>. A custom{' '}
        <strong>SmsParser</strong> extracts the merchant, amount, and date.
        A <strong>CategoryClassifier</strong> auto-tags each transaction
        (Food, Travel, Bills, etc.). A heads-up notification fires
        instantly — tap <em>Save</em>, <em>Edit</em>, or <em>Skip</em> without
        even opening the app. All data lives locally in a{' '}
        <strong>Room (SQLite)</strong> database. The analytics screen renders
        an animated <strong>donut chart</strong> breaking down spend by
        category or payment source. Budget management and custom categories
        complete the picture.
      </>
    ),
    stats: [
      { value: 'MVVM',   label: 'Architecture' },
      { value: 'Auto',   label: 'SMS Parsing' },
    ],
    techTags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'NoSQL'],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/neerajdhurandher/expense-tracker-android', primary: true },
    ],
    gradientClass: 'gradient--forge',
    image: expenseTracker,
    reverse: true,
  },

  // ── 5 ── Issue Tracking Tool ───────────────────────────────────────────────
  {
    id: 5,
    title: 'Issue Tracker: Django REST Backend',
    section1Label: 'The Goal',
    section1Text:
      'To deeply understand Django REST Framework, I built a full JIRA-like project management backend from scratch — not just CRUD, but the complete domain model of how engineering teams actually track work: projects, sprints, issues, comments, and watchers.',
    section2Label: 'Under the Hood',
    section2Text: (
      <>
        Built with <strong>Python and Django REST Framework</strong>, the API
        is split into two apps. The <strong>User app</strong> handles
        registration, login, JWT authentication, and profile management. The{' '}
        <strong>Project app</strong> manages the full hierarchy:{' '}
        Projects → Sprints → Issues → Comments, plus Watchers and Labels per
        issue — each resource with its own serializers, views, and URL
        routing. A <strong>Postman collection</strong> ships with the repo for
        full API testing. Live on <strong>Vercel</strong>.
      </>
    ),
    stats: [
      { value: 'REST',  label: 'API Architecture' },
      { value: '6+',    label: 'Resource Types' },
    ],
    techTags: ['Python', 'Django', 'REST Framework', 'SQLite', 'JWT'],
    links: [
      { label: 'Live API',    href: 'https://issue-tracking-tool-three.vercel.app/', primary: true },
      { label: 'Source Code', href: 'https://github.com/neerajdhurandher/issue_tracking_tool', primary: false },
    ],
    gradientClass: 'gradient--prism',
    image: issueTracker,
    reverse: false,
  },

  // ── 6 ── Daily Tracker ────────────────────────────────────────────────────
  {
    id: 6,
    title: 'Daily Tracker: Task Management App',
    section1Label: 'The Itch',
    section1Text:
      'I wanted a minimal, no-friction task manager — something I’d actually open every day. Most existing tools are over-engineered. So I built exactly what I needed: a clean web app to log, edit, and complete daily tasks without any noise.',
    section2Label: 'How It’s Built',
    section2Text: (
      <>
        Built with <strong>Next.js and React</strong>, the app supports
        creating, editing, and deleting tasks with timestamps. The UI is
        clean and fast — <strong>Google sign-in enabled</strong> for authentication. A{' '}
        <strong>GitHub Actions CI/CD pipeline</strong> auto-deploys every
        push to <strong>GitHub Pages</strong>, keeping the release workflow
        tight and fully automated.
      </>
    ),
    stats: [
      { value: 'Next.js', label: 'Framework' },
      { value: 'CI/CD',   label: 'Auto Deploy' },
    ],
    techTags: ['Next.js', 'React', 'JavaScript'],
    links: [
      { label: 'Live App',    href: 'https://neerajdhurandher.github.io/daily-tracker/', primary: true },
      { label: 'Source Code', href: 'https://github.com/neerajdhurandher/daily-tracker',  primary: false },
    ],
    gradientClass: 'gradient--flow',
    image: dailyTracker,
    reverse: true,
  },

  // ── 7 ── Image Date Modifier Extension ────────────────────────────────────
  {
    id: 7,
    title: 'Image Date Modifier: Chrome Extension',
    section1Label: 'The Problem',
    section1Text:
      'When you upload old photos to Google Photos, they often appear with the upload date instead of the original capture date — silently breaking your timeline. Fixing this manually is a click-heavy process you have to repeat for every single photo.',
    section2Label: 'How It Works',
    section2Text: (
      <>
        A <strong>Manifest V3 Chrome extension</strong> that injects directly
        into Google Photos pages. A floating popup appears at the bottom-right
        of the screen, letting you read the current file metadata and update
        the photo or video date — right on the page, without navigating away.
        Built with <strong>vanilla JavaScript</strong> and a lightweight{' '}
        <strong>content script</strong>, with zero external dependencies.
      </>
    ),
    stats: [
      { value: 'MV3',    label: 'Manifest Version' },
      { value: 'Inline', label: 'Google Photos UI' },
    ],
    techTags: ['JavaScript', 'Chrome Extension', 'MV3', 'DOM Automation'],
    links: [
      { label: 'Source Code', href: 'https://github.com/neerajdhurandher/image-date-modifier-extension', primary: true },
    ],
    gradientClass: 'gradient--lens',
    image: imageDateModifier,
    reverse: false,
  },

  // ── 8 ── Udemy Clone Backend ──────────────────────────────────────────────
  {
    id: 8,
    title: 'Udemy Clone: Spring Boot REST API',
    section1Label: 'The Goal',
    section1Text:
      'To master backend development with Java and Spring Boot, I built the complete REST API behind an online learning platform — modelling how real ed-tech systems work: tutors create courses, students enroll, and everyone leaves reviews.',
    section2Label: 'Under the Hood',
    section2Text: (
      <>
        Built with <strong>Java and Spring Boot</strong>, backed by a{' '}
        <strong>MySQL</strong> database via Spring Data JPA. The API exposes
        full <strong>CRUD endpoints</strong> for User/Tutor accounts, Courses,
        Reviews, and Skills — supporting account creation, course publishing,{' '}
        <strong>enrollment</strong>, ratings &amp; reviews, and skill tagging.
        Every endpoint is fully documented and testable through an integrated{' '}
        <strong>Swagger UI</strong>. The whole service is deployed live to the
        cloud via an <strong>Azure App Service</strong> CI/CD workflow.
      </>
    ),
    stats: [
      { value: 'REST',    label: 'API Endpoints' },
      { value: 'Swagger', label: 'Live API Docs' },
    ],
    techTags: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'Swagger'],
    links: [
      { label: 'Source Code', href: 'https://github.com/neerajdhurandher/udemy-backend-spring-boot/tree/live_deployed', primary: true },
    ],
    gradientClass: 'gradient--core',
    image: udemyClone,
    reverse: true,
  },

  // ── 9 ── Keep Me Available ────────────────────────────────────────────────
  {
    id: 9,
    title: 'Keep Me Available: Screen Sleep Preventer',
    section1Label: 'The Problem',
    section1Text:
      'During long video calls, presentations, or monitoring dashboards, your screen locks itself — forcing you to repeatedly nudge the mouse. Adjusting power settings every time is tedious and easy to forget to undo. I needed a browser-based, zero-setup fix.',
    section2Label: 'How It Works',
    section2Text: (
      <>
        Built with <strong>Next.js and TypeScript</strong>, the app uses the
        browser&apos;s native{' '}
        <strong>Wake Lock API</strong> to prevent the screen from sleeping for
        a chosen duration. You pick a time — preset buttons (1h, 3h, 8h) or
        custom — hit Start, and the app keeps the screen active. For browsers
        without Wake Lock support, it falls back to automated{' '}
        <strong>click simulation</strong>. A{' '}
        <strong>GitHub Actions pipeline</strong> auto-deploys to{' '}
        <strong>GitHub Pages</strong> on every push.
      </>
    ),
    stats: [
      { value: 'Wake Lock', label: 'Browser API' },
      { value: 'Desktop & Mobile', label: 'Supported Platforms' },
    ],
    techTags: ['Next.js', 'TypeScript', 'Wake Lock API'],
    links: [
      { label: 'Live App',    href: 'https://neerajdhurandher.github.io/keep-me-available/', primary: true },
      { label: 'Source Code', href: 'https://github.com/neerajdhurandher/keep-me-available',  primary: false },
    ],
    gradientClass: 'gradient--pulse',
    image: keepMeAvailable,
    reverse: false,
  },

];
