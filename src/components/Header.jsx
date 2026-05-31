import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const NAV_ITEMS = [
  { id: 'work',    label: 'Work',    href: '/#work' },
  { id: 'about',   label: 'About',   href: '/about' },
  { id: 'resume',  label: 'Resume',  href: '/resume' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, item) => {
    if (item.href.startsWith('/#')) {
      e.preventDefault();
      const sectionId = item.href.slice(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(sectionId), 80);
      } else {
        scrollToSection(sectionId);
      }
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
  };

  const isActive = (item) => {
    if (item.href.startsWith('/#')) return false;
    return location.pathname === item.href;
  };

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-row">
        <NavLink to="/" className="lockup" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="monogram">SG</span>
          <span className="wordmark">Sri Ganesh Ganta</span>
        </NavLink>
        <nav className="nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-item${isActive(item) ? ' is-active' : ''}`}
              onClick={(e) => handleNav(e, item)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
