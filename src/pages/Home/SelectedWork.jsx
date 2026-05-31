import { useState } from 'react';
import projectPlaceholder from '../../assets/project-placeholder.svg';
import './SelectedWork.css';

const PROJECTS = [
  {
    id: 'expense-widget',
    year: '2024 — 2026',
    discipline: 'full-stack',
    duration: 'solo engineer',
    role: 'paycom',
    title: 'Embeddable Expense Widget',
    summary:
      'Solo-engineered a fully-featured expense module that drops into any client surface — submission, approval workflows, batch actions, advanced filtering, receipt verification, and Google Maps trip data. Cuts the round-trip back to the core application that used to interrupt every expense task.',
    metric: '1M+ employees · single surface',
    stack: ['react', 'typescript', 'php', 'c#', 'datastar', 'google maps'],
  },
  {
    id: 'expense-automation',
    year: '2024',
    discipline: 'backend · automation',
    duration: 'architect',
    role: 'paycom',
    title: 'Expense Automation Engine',
    summary:
      'End-to-end submission and conditional approval system. Receipts get scanned via Veryfi, parsed into structured expense data, and routed through manager-defined rule sets — auto-approving compliant items for the next paycheck. Replaced hours of manual review at high-volume enterprise clients.',
    metric: '2M+ employees · manual review eliminated',
    stack: ['php mvc', 'react', 'typescript', 'veryfi api'],
  },
];

function ProjectCard({ p }) {
  return (
    <article className="project-card">
      <div className="project-shot">
        <img src={projectPlaceholder} alt="" />
      </div>
      <div className="project-body">
        <div className="eyebrow">{p.year} · {p.discipline} · {p.duration} · {p.role}</div>
        <h3 className="project-title">{p.title}</h3>
        <p className="project-summary">{p.summary}</p>
        <div className="project-meta-row">
          <div className="project-stack">
            {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
          </div>
          <div className="project-metric">
            <span className="eyebrow">scope</span>
            <span className="metric-val">{p.metric}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">selected work</div>
          <h2 className="section-title">Two things I built for millions.</h2>
          <p className="section-sub">
            Both shipped inside Paycom's Expense module. Full work history on the{' '}
            <a href="/resume" className="link-quiet">resume</a>.
          </p>
        </div>
        <div className="project-list">
          {PROJECTS.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
