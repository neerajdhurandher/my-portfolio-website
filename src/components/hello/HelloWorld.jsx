import React, { useEffect } from 'react';

const TAILWIND_THEME = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'surface-container-lowest': '#0b0e15',
        'surface-dim': '#10131a',
        'inverse-surface': '#e1e2ec',
        'outline-variant': '#424754',
        surface: '#10131a',
        'on-background': '#e1e2ec',
        'on-tertiary': '#1000a9',
        'error-container': '#93000a',
        'on-tertiary-fixed': '#07006c',
        background: '#10131a',
        'surface-bright': '#363941',
        'inverse-on-surface': '#2e3038',
        'surface-container': '#1d2027',
        'on-primary-fixed-variant': '#004395',
        'surface-container-high': '#272a31',
        'on-error-container': '#ffdad6',
        'tertiary-fixed': '#e1e0ff',
        tertiary: '#c0c1ff',
        'on-secondary-fixed': '#002113',
        'surface-container-low': '#191b23',
        'on-secondary-container': '#00311f',
        'secondary-fixed': '#6ffbbe',
        'surface-variant': '#32353c',
        'inverse-primary': '#005ac2',
        'on-surface': '#e1e2ec',
        'on-error': '#690005',
        'on-tertiary-container': '#0d0096',
        'on-primary-container': '#00285d',
        'secondary-container': '#00a572',
        'primary-container': '#4d8eff',
        'on-secondary-fixed-variant': '#005236',
        'tertiary-fixed-dim': '#c0c1ff',
        'primary-fixed-dim': '#adc6ff',
        'surface-container-highest': '#32353c',
        'on-primary-fixed': '#001a42',
        'on-tertiary-fixed-variant': '#2f2ebe',
        'tertiary-container': '#8083ff',
        'surface-tint': '#adc6ff',
        outline: '#8c909f',
        'primary-fixed': '#d8e2ff',
        'on-secondary': '#003824',
        'on-primary': '#002e6a',
        'on-surface-variant': '#c2c6d6',
        'secondary-fixed-dim': '#4edea3',
        secondary: '#4edea3',
        primary: '#adc6ff',
        error: '#ffb4ab',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      spacing: {
        'margin-mobile': '16px',
        'section-gap': '96px',
        'margin-desktop': '48px',
        'container-max': '1280px',
        'component-gap': '16px',
        gutter: '24px',
      },
      fontFamily: {
        'code-md': ['Geist'],
        'headline-lg': ['Inter'],
        'body-md': ['Inter'],
        'label-sm': ['Geist'],
        'body-lg': ['Inter'],
        'headline-xl': ['Inter'],
        'headline-xl-mobile': ['Inter'],
        'headline-md': ['Inter'],
      },
      fontSize: {
        'code-md': ['14px', { lineHeight: '20px', fontWeight: '450' }],
        'headline-lg': ['36px', { lineHeight: '44px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'headline-xl': ['60px', { lineHeight: '72px', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-xl-mobile': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
      },
    },
  },
};

const CUSTOM_STYLES = `
  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }
  .glass-card {
    background: rgba(30, 41, 59, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .glow-border {
    position: absolute;
    inset: -1px;
    background: linear-gradient(to bottom right, #adc6ff, #4edea3);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: inherit;
  }
  .glass-card:hover .glow-border {
    opacity: 1;
  }
  .tech-chip {
    background: rgba(173, 198, 255, 0.1);
    border: 1px solid rgba(173, 198, 255, 0.2);
  }
  @keyframes pulse-slow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  .animate-pulse-slow {
    animation: pulse-slow 3s infinite ease-in-out;
  }
  .sticky-column {
    position: sticky;
    top: 100px;
  }
`;

const HelloWorld = () => {
  useEffect(() => {
    document.title = 'Case Studies | DevPortfolio';
    document.documentElement.classList.add('dark');

    // Google Fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Geist:wght@400;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';
    document.head.appendChild(fontLink);

    // Custom styles
    const styleEl = document.createElement('style');
    styleEl.textContent = CUSTOM_STYLES;
    document.head.appendChild(styleEl);

    // Tailwind CDN — configure after load
    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com?plugins=forms,container-queries';
    tailwindScript.onload = () => {
      if (window.tailwind) {
        window.tailwind.config = TAILWIND_THEME;
      }
      // Card mouse-tracking micro-interaction
      document.querySelectorAll('.glass-card').forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
          card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
      });
    };
    document.head.appendChild(tailwindScript);

    return () => {
      document.documentElement.classList.remove('dark');
      [fontLink, styleEl, tailwindScript].forEach((el) => {
        if (document.head.contains(el)) document.head.removeChild(el);
      });
    };
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-primary/30">

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-16">
          <div className="font-headline-md text-headline-md font-bold text-on-surface">
            DevPortfolio
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="font-headline-md text-headline-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Home</a>
            <a className="font-headline-md text-headline-md text-primary border-b-2 border-primary transition-colors duration-300" href="#">Case Studies</a>
            <a className="font-headline-md text-headline-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Experience</a>
            <a className="font-headline-md text-headline-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">terminal</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

        {/* Header Section */}
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4 bg-surface-container px-4 py-2 rounded-full border border-white/5">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-slow"></div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Engineering Deep Dives</span>
          </div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-6">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Case Studies
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Immersive explorations into complex system architectures, distributed computing challenges, and high-performance engineering solutions.
          </p>
        </header>

        {/* Case Study Sections */}
        <div className="space-y-32">

          {/* Case Study 1: Nexus */}
          <section className="group relative flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2 w-full lg:sticky lg:top-32">
              <div className="relative rounded-2xl overflow-hidden glass-card p-2">
                <div className="glow-border"></div>
                <img
                  className="w-full aspect-[4/3] object-cover rounded-xl opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  alt="Nexus dashboard visualization"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCROw82j-T-FxMPJG05g6rxlgcVaPCz3biAKcnQI65zP3MnA1j0m0NNTgAUfD3ksbsGkIHgUaPDwJxyj-zCZDhye3k61Ilguh6IXSNcD5kdrpM5F1XLBzTY3PifxzA06y-KgsA5MCdIqJOomq65toeIN4jYlMh3s4CSy5tQQaXEN3t8wyQryaVKPp0kbtS4w5YQJkhl3PRD9TWH2Ip98ELLBu8m_EloqNLrZ9l33FLmwG3C7QLYoFoXstJDvVNSHo3z0XDR08zkEaM"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 flex gap-3">
                  <span className="tech-chip font-code-md text-code-md text-primary px-3 py-1 rounded-full backdrop-blur-md">Go</span>
                  <span className="tech-chip font-code-md text-code-md text-primary px-3 py-1 rounded-full backdrop-blur-md">gRPC</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full space-y-8 py-4">
              <div className="space-y-4">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Nexus: Distributed Ledger Architecture</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">The Challenge</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Designing a globally distributed ledger system that remains consistent under heavy network partitioning while maintaining sub-50ms transaction latency. Traditional consensus models failed to scale with the increasing node density of the target environment.
                  </p>
                </div>
                <div>
                  <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">Technical Deep Dive</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    We implemented a custom extension of the <strong>Raft Consensus Algorithm</strong> optimized for high-bandwidth telemetry. By introducing tiered leadership and parallel log replication, we achieved a throughput of 120,000 TPS across three continents. The system uses gRPC for low-latency node-to-node communication and leverages Kubernetes for dynamic cluster scaling.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-surface-container border border-white/5">
                    <div className="text-primary font-headline-md mb-1">120k+</div>
                    <div className="text-label-sm text-on-surface-variant uppercase">TPS Handled</div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container border border-white/5">
                    <div className="text-secondary font-headline-md mb-1">&lt;45ms</div>
                    <div className="text-label-sm text-on-surface-variant uppercase">Global Latency</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <a className="flex items-center gap-2 text-primary font-headline-md hover:translate-x-2 transition-transform" href="#">
                  Full Case Study <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a className="flex items-center gap-2 text-on-surface-variant font-headline-md hover:text-on-surface transition-colors" href="#">
                  <span className="material-symbols-outlined">code</span> Source
                </a>
              </div>
            </div>
          </section>

          {/* Case Study 2: Aether */}
          <section className="group relative flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/2 w-full lg:sticky lg:top-32">
              <div className="relative rounded-2xl overflow-hidden glass-card p-2">
                <div className="glow-border"></div>
                <img
                  className="w-full aspect-[4/3] object-cover rounded-xl opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  alt="Aether analytics visualization"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1rekynyxmhxFa29tKv4SriRSz8mW_k4yBuU9F3zkGgBmAy0AMJsHyozvHQt6J7On8zi31C8DDL82yPBkVMUagw2uuBPi6m8JvuY-rn2KWZgkzJZVDSONgc5IzCI30PTqNryK_QsWkQVbnwz6bnvdDZUBiMN6pM5ngNdMstFeJIna3qDFFXo4uI0GntdRh-SUe4ZLjS7dL8ELH1YQV--AJb8zIzXlAeDKjD7OX-6Jo7eCEzi-DtRUFjo-gcPIjzM29Z8Eg2rPU5gA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 flex gap-3">
                  <span className="tech-chip font-code-md text-code-md text-primary px-3 py-1 rounded-full backdrop-blur-md">Rust</span>
                  <span className="tech-chip font-code-md text-code-md text-primary px-3 py-1 rounded-full backdrop-blur-md">Wasm</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full space-y-8 py-4">
              <div className="space-y-4">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Aether: Edge-Native Telemetry</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">The Strategy</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Move data processing from the cloud to the client. Modern web browsers are powerful enough to handle massive data sets if the right execution engine is used. We aimed to eliminate server round-trips for real-time visualization.
                  </p>
                </div>
                <div>
                  <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">Implementation</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    We built a processing engine in <strong>Rust</strong>, compiled to <strong>WebAssembly</strong>. This allowed for near-native memory management and SIMD optimizations directly in the browser. The UI, built with React and Tailwind, communicates with the Wasm module via shared memory buffers, bypassing the slow JSON serialization bottleneck common in standard web apps.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-surface-container border border-white/5">
                    <div className="text-primary font-headline-md mb-1">85%</div>
                    <div className="text-label-sm text-on-surface-variant uppercase">Latency Reduction</div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container border border-white/5">
                    <div className="text-secondary font-headline-md mb-1">Zero</div>
                    <div className="text-label-sm text-on-surface-variant uppercase">Server Load</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <a className="flex items-center gap-2 text-primary font-headline-md hover:translate-x-2 transition-transform" href="#">
                  View Analysis <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a className="flex items-center gap-2 text-on-surface-variant font-headline-md hover:text-on-surface transition-colors" href="#">
                  <span className="material-symbols-outlined">hub</span> Demo
                </a>
              </div>
            </div>
          </section>

          {/* Case Study 3: Void Arch */}
          <section className="group relative flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2 w-full lg:sticky lg:top-32">
              <div className="relative rounded-2xl overflow-hidden glass-card p-2">
                <div className="glow-border"></div>
                <img
                  className="w-full aspect-[4/3] object-cover rounded-xl opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  alt="Void Arch infrastructure map"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUzVPPj90CPpt-GhFDtgrwaDlULsuVqCEwn73FKHrVJuaEYR2nDRIon3lkycwOkRWsH0u-pVmd8PmVACaq5cFfD-kjIhQyTb7AoAc4uksmeC5ZCcjAh9suKjzGP1Nvaif9bg_Uj7FMzr1UdhQ4kzEIL7KGl6fqrMvvTcUu6YOVFX5AlZW_m4bweE-mbNsg2XZzsTj8WtL4OutCAS9OBeIRlO5jfss5Fg8jPjLxUMvO1cLJaumk3ciqLs_XPaenZM5eIACOVzH5QAg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 flex gap-3">
                  <span className="tech-chip font-code-md text-code-md text-primary px-3 py-1 rounded-full backdrop-blur-md">Terraform</span>
                  <span className="tech-chip font-code-md text-code-md text-primary px-3 py-1 rounded-full backdrop-blur-md">AWS</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full space-y-8 py-4">
              <div className="space-y-4">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Void Arch: Immutable Infrastructure</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">The Objective</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Automate the deployment of multi-region edge environments with a strict "no-human-access" policy. Any change to production must be code-defined, peer-reviewed, and automatically verified.
                  </p>
                </div>
                <div>
                  <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">System Design</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Developed a set of <strong>Custom Terraform Providers</strong> that interface with proprietary edge hardware APIs. We utilized a GitOps workflow where state is managed through automated CI/CD pipelines. The architecture features cross-region replication and automated health-checks that trigger self-healing protocols without manual intervention.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-surface-container border border-white/5">
                    <div className="text-primary font-headline-md mb-1">99.999%</div>
                    <div className="text-label-sm text-on-surface-variant uppercase">Uptime Achieved</div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container border border-white/5">
                    <div className="text-secondary font-headline-md mb-1">12 Min</div>
                    <div className="text-label-sm text-on-surface-variant uppercase">Disaster Recovery</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <a className="flex items-center gap-2 text-primary font-headline-md hover:translate-x-2 transition-transform" href="#">
                  Read Documentation <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a className="flex items-center gap-2 text-on-surface-variant font-headline-md hover:text-on-surface transition-colors" href="#">
                  <span className="material-symbols-outlined">terminal</span> CLI Tool
                </a>
              </div>
            </div>
          </section>

        </div>

        {/* CTA Section */}
        <section className="mt-section-gap p-12 rounded-2xl bg-surface-container-high border border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none"></div>
          <h2 className="font-headline-lg text-headline-lg mb-4 relative">Ready to solve the next complex challenge?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto relative">
            I'm looking for partners who value precision engineering and architectural integrity.
          </p>
          <button className="bg-primary text-on-primary px-10 py-5 rounded-lg font-headline-md text-headline-md shadow-xl shadow-primary/20 hover:-translate-y-1 hover:brightness-110 transition-all relative">
            Start a Conversation
          </button>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-16 bg-surface-container-lowest border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-gutter">
          <div className="font-code-md text-code-md text-on-surface font-bold">
            DevPortfolio // Orion
          </div>
          <div className="font-label-sm text-label-sm text-on-surface-variant text-center md:text-left">
            &copy; 2024 Engineering excellence through rigorous design.
          </div>
          <div className="flex gap-8">
            <a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">GitHub</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">LinkedIn</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Whitepapers</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HelloWorld;
