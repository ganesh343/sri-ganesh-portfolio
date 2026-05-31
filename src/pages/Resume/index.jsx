import './Resume.css';

const EXPERIENCE = [
  {
    id: 'paycom',
    logo: 'PC',
    company: 'Paycom',
    location: 'Oklahoma City, OK (remote)',
    role: 'Software Developer 4',
    range: '2023 — 2026',
    bullets: [
      'Solo-engineered the embeddable Expense Widget — submission, approval workflows, batch actions, advanced filtering, receipt verification, and Google Maps trip data — used by 1M+ employees.',
      'Architected the Expense Automation Engine: Veryfi receipt scanning → structured data → manager rule evaluation → auto-approval for the next paycheck. Eliminated manual review at high-volume enterprise clients.',
      'Led 12 engineers on a global translation rollout — 50+ countries, shipped in one quarter.',
      'Led 8-person jQuery 1.x → 3.7.0 upgrade across all Expense pages, closing critical security vulnerabilities.',
      'Led a full React redesign of the employee-facing Expense experience.',
      'Shipped an AI-powered conversational search over expense data.',
      'Achieved a 40% load-time reduction on the high-volume expense dashboard.',
    ],
    stack: ['react', 'typescript', 'php mvc', 'c#', 'datastar', 'mysql', 'postgresql'],
  },
  {
    id: 'infodat',
    logo: 'IN',
    company: 'INFODAT INC',
    location: 'Houston, TX',
    role: 'Junior Software Engineer',
    range: '2022 — 2023',
    bullets: [
      'Built the React frontend for a monthly skill-rating system from scratch — boilerplate, component library, custom hooks, and a JWT-authenticated REST layer.',
      'Wrote a multi-threaded C++ parser for large text files, extracting structured data for downstream analysis.',
    ],
    stack: ['react', 'javascript', 'c++', 'rest apis'],
  },
];

const EDUCATION = [
  {
    school: 'University of Houston',
    degree: 'B.S., Computer Science',
    range: '2020 — 2023',
    note: 'GPA 3.7. Transferred from Houston Community College.',
  },
  {
    school: 'Houston Community College',
    degree: 'A.S., Computer Science',
    range: '2018 — 2020',
    note: 'GPA 3.78.',
  },
];

const SKILLS = {
  'Languages': ['TypeScript', 'JavaScript', 'PHP', 'C#', 'C++', 'SQL'],
  'Frontend':  ['React', 'Datastar', 'HTML/CSS'],
  'Backend':   ['PHP MVC', '.NET / C#', 'REST APIs', 'Node.js'],
  'Data':      ['MySQL', 'PostgreSQL'],
  'Tools':     ['Git', 'Veryfi API', 'Google Maps API', 'Vite'],
};

export default function Resume() {
  return (
    <main className="resume-page" style={{ paddingTop: '56px' }}>
      {/* Masthead */}
      <section className="res-masthead">
        <div className="container">
          <div className="eyebrow">résumé</div>
          <h1 className="res-name">Sri Ganesh Ganta</h1>
          <p className="res-role">Full-Stack Software Engineer</p>
          <p className="res-summary section-sub">
            Three years building infrastructure and product features inside Paycom's Expense module.
            PHP MVC, React, TypeScript, C#. Comfortable leading cross-functional teams and shipping to millions.
          </p>
          <div className="res-contactbar">
            <a href="mailto:sriganeshganta03@gmail.com">sriganeshganta03@gmail.com</a>
            <a href="https://github.com/ganesh343" target="_blank" rel="noreferrer">github.com/ganesh343</a>
            <a href="https://linkedin.com/in/sri-ganesh-ganta" target="_blank" rel="noreferrer">linkedin.com/in/sri-ganesh-ganta</a>
            <a href="tel:8329294902">832 · 929 · 4902</a>
            <span className="res-location">Dallas, TX</span>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">experience</div>
          </div>
          <div className="xp-group">
            {EXPERIENCE.map((xp) => (
              <div className="xp" key={xp.id}>
                <div className="xp-meta">
                  <div className="xp-co">
                    <span className="xp-logo">{xp.logo}</span>
                    <span className="xp-company">{xp.company}</span>
                  </div>
                  <span className="xp-loc">{xp.location}</span>
                  <span className="xp-range">{xp.range}</span>
                  <div className="xp-stack">
                    {xp.stack.map((s) => <span key={s} className="chip">{s}</span>)}
                  </div>
                </div>
                <div className="xp-detail">
                  <h3 className="xp-role">{xp.role}</h3>
                  <ul className="xp-bullets">
                    {xp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">skills</div>
          </div>
          <div className="skills-grid">
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div className="skill-group" key={cat}>
                <span className="eyebrow skill-cat">{cat}</span>
                <div className="skill-tags">
                  {items.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">education</div>
          </div>
          <div className="edu-group">
            {EDUCATION.map((e) => (
              <div className="edu-row" key={e.school}>
                <div className="edu-meta">
                  <span className="edu-school">{e.school}</span>
                  <span className="xp-range">{e.range}</span>
                </div>
                <div className="edu-detail">
                  <span className="edu-degree">{e.degree}</span>
                  <span className="edu-note">{e.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
