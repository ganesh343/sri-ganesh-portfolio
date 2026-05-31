import { useState } from 'react';
import './Contact.css';

const EMAIL = 'sriganeshganta03@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); } catch (_) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-grid">
        <div>
          <div className="eyebrow">contact</div>
          <h2 className="section-title">Best way to reach me is email.</h2>
          <p className="section-sub">
            Hiring, freelance, or just hello — anything in the inbox. I usually reply within a day.
          </p>
        </div>
        <div className="contact-actions">
          <div className="email-row">
            <span className="email-val">{EMAIL}</span>
            <button className="btn btn-secondary" onClick={copy}>
              {copied ? 'Copied' : 'Copy'}
              {!copied && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
          </div>
          <div className="contact-socials">
            <a href="https://github.com/ganesh343" target="_blank" rel="noreferrer" className="link-quiet">GitHub →</a>
            <a href="https://linkedin.com/in/sri-ganesh-ganta" target="_blank" rel="noreferrer" className="link-quiet">LinkedIn →</a>
            <a href="tel:8329294902" className="link-quiet">832 · 929 · 4902 →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
