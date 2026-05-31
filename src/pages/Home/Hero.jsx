import './Hero.css';

export default function Hero({ onCta }) {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="eyebrow">full-stack software engineer · dallas, tx</div>
        <h1 className="hero-headline">
          I ship full-stack features<br />used by millions.
        </h1>
        <p className="lede hero-lede">
          Three years building enterprise-scale expense tooling for 2M+ employees — React,
          TypeScript, PHP, and C#. Frontend roots, full-stack reach. Currently open to what's next.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => onCta('work')}>
            View selected work
          </button>
          <button className="btn btn-ghost" onClick={() => onCta('contact')}>
            Get in touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
