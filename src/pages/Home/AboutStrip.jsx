import avatar from '../../assets/avatar.png';
import './AboutStrip.css';

export default function AboutStrip() {
  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        <div className="about-photo">
          <img src={avatar} alt="Sri Ganesh Ganta" />
        </div>
        <div className="about-copy">
          <div className="eyebrow">about</div>
          <h2 className="section-title">The short version.</h2>
          <p>
            I like full-stack work that crosses systems. Most of mine has lived at the boundary
            between PHP MVC backends and React + TypeScript frontends — finding the spots where a
            cleaner abstraction on one side makes the other side simpler to live with.
          </p>
          <p>
            Comfortable leading. I led 12 engineers on a global translation rollout that shipped
            across 50+ countries in three months, and led an 8-person effort to upgrade jQuery 1.x
            to 3.7.0 across the Expense module — closing critical security vulnerabilities along the way.
          </p>
          <p>
            Took the long route into the field: A.S. from Houston Community College, then B.S. in
            Computer Science from the University of Houston. Spent the first year writing a frontend
            and a multi-threaded C++ parser at INFODAT; the three after that on Paycom's Expense module.
          </p>
          <a href="/about" className="link-quiet">Full bio →</a>
        </div>
      </div>
    </section>
  );
}
