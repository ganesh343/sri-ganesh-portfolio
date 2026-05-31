import { useState } from 'react';
import './ResumeStrip.css';

const ROLES = [
  {
    id: 'paycom',
    company: 'Paycom',
    title: 'Software Developer 4',
    range: '2023 — 2026',
    note: 'Three years on the Expense module. Built the embeddable Expense Widget and the automation engine end-to-end. Led the global translation rollout (12 engineers, 50+ countries, 3 months), the jQuery 1.x → 3.7.0 upgrade (8 engineers), and a full React redesign of the employee experience.',
  },
  {
    id: 'infodat',
    company: 'INFODAT INC',
    title: 'Junior Software Engineer',
    range: '2022 — 2023',
    note: 'Built the React frontend for a monthly skill-rating system from scratch — boilerplate, reusable component library, custom hooks, and a JWT-authenticated REST layer. Also wrote a multi-threaded C++ parser for large text files.',
  },
  {
    id: 'uh',
    company: 'University of Houston',
    title: 'B.S. Computer Science',
    range: '2020 — 2023',
    note: 'Graduated May 2023, GPA 3.7. Transferred in from Houston Community College.',
  },
  {
    id: 'hcc',
    company: 'Houston Community College',
    title: 'A.S. Computer Science',
    range: '2018 — 2020',
    note: 'Graduated December 2020, GPA 3.78.',
  },
];

export default function ResumeStrip() {
  const [open, setOpen] = useState(null);

  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">resume</div>
          <h2 className="section-title">Where I've spent the time.</h2>
          <p className="section-sub">
            Click a row for context.{' '}
            <a className="link-quiet" href="/resume">Full resume →</a>
          </p>
        </div>
        <ul className="resume-list">
          {ROLES.map((r) => {
            const isOpen = open === r.id;
            return (
              <li key={r.id} className={`resume-row${isOpen ? ' is-open' : ''}`}>
                <button
                  className="resume-trigger"
                  onClick={() => setOpen(isOpen ? null : r.id)}
                >
                  <span className="resume-company">{r.company}</span>
                  <span className="resume-title-text">{r.title}</span>
                  <span className="resume-range">{r.range}</span>
                </button>
                {isOpen && <div className="resume-note">{r.note}</div>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
