import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <div className="footer-left">
          <span className="monogram-sm">SG</span>
          <span className="footer-name">Sri Ganesh Ganta</span>
          <span className="footer-sep">·</span>
          <span className="footer-year">© 2026</span>
        </div>
        <div className="footer-right">
          <a href="https://github.com/ganesh343" target="_blank" rel="noreferrer" className="link-quiet">GitHub</a>
          <a href="https://linkedin.com/in/sri-ganesh-ganta" target="_blank" rel="noreferrer" className="link-quiet">LinkedIn</a>
          <a href="mailto:sriganeshganta03@gmail.com" className="link-quiet">Email</a>
        </div>
      </div>
    </footer>
  );
}
