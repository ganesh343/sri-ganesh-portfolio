import avatar from '../../assets/avatar.png';
import './About.css';

const STATS = [
  { num: '2M+',   label: 'employees served by systems I shipped' },
  { num: '3+ yrs', label: 'of full-stack engineering experience' },
  { num: '12',    label: 'engineers led on a global rollout' },
  { num: '50+',   label: 'countries reached in one quarter' },
];

const PRINCIPLES = [
  {
    n: '01',
    title: "Remove work, don't add screens",
    body: "The best feature I shipped deleted a step nobody enjoyed. I look for the manual review, the round-trip, the form that exists only because the system was lazy — and I try to make it disappear.",
  },
  {
    n: '02',
    title: 'Live at the boundary',
    body: 'Most interesting bugs and most clean wins are at the seam between backend and frontend. I work both sides on purpose, so the abstraction can be chosen where it actually helps.',
  },
  {
    n: '03',
    title: 'Earn the scale',
    body: 'Two million people is not an abstraction. A 40% slower dashboard is real minutes lost, every day. I treat performance and correctness as features, not cleanup.',
  },
  {
    n: '04',
    title: 'Lead by unblocking',
    body: 'Leading twelve engineers taught me the job is mostly clearing the path — decisions made early, debt named out loud, scope kept honest — so everyone else can move fast.',
  },
];

export default function About() {
  return (
    <main style={{ paddingTop: '56px' }}>
      {/* Intro */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <div className="eyebrow">about</div>
              <h1 className="about-headline">
                I build software that<br />quietly carries millions.
              </h1>
              <p className="lede about-lede">
                I'm a full-stack engineer in Dallas. For three years I've worked on Paycom's
                Expense module — the part of payroll that decides whether a receipt turns into
                money in someone's next paycheck. It's used by more than two million employees,
                and most of them will never think about it. That's the goal.
              </p>
            </div>
            <figure className="about-photo-fig">
              <img src={avatar} alt="Sri Ganesh Ganta" />
              <figcaption>Dallas, TX · 2026</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Bio + stats */}
      <section className="section">
        <div className="container">
          <div className="about-bio-grid">
            <div className="about-stat-rail">
              {STATS.map((s) => (
                <div className="about-stat" key={s.label}>
                  <div className="about-stat-num">{s.num}</div>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="about-bio-copy">
              <p>
                <span className="bio-lead">I took the long route into this.</span> An A.S. from
                Houston Community College first, then a B.S. in Computer Science from the University
                of Houston. My first year out was at INFODAT, where I built a frontend from an empty
                repo and wrote a multi-threaded C++ parser to chew through large text files — the kind
                of work where you learn how things actually run, not just how they're supposed to.
              </p>
              <p>
                The three years since have been at Paycom, almost entirely inside the Expense module.
                I like full-stack work that crosses systems, and Expense is exactly that: a PHP MVC
                backend, a React + TypeScript frontend, a bit of C#, and a constant search for the spot
                where a cleaner abstraction on one side makes the other side simpler to live with.
              </p>
              <p>
                The work I'm proudest of removed work for other people. An automation engine that scans
                a receipt, parses it into structured data, and auto-approves it against a manager's rules —
                so an expense becomes a paycheck line without anyone reviewing it by hand. An embeddable
                widget that put submission, approval, and live data on one surface instead of a
                round-trip back to the core app.
              </p>
              <p>
                I'm comfortable leading. I led twelve engineers on a translation rollout that shipped across
                fifty-plus countries in three months, and an eight-person effort to drag jQuery from 1.x to
                3.7.0 across every Expense page — closing security holes and retiring years of debt.
                Currently open to what's next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">how i work</div>
            <h2 className="section-title">Four things I keep coming back to.</h2>
          </div>
          <div className="about-principles">
            {PRINCIPLES.map((p) => (
              <article className="about-principle" key={p.n}>
                <span className="principle-num">{p.n}</span>
                <h3 className="principle-title">{p.title}</h3>
                <p className="principle-body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
