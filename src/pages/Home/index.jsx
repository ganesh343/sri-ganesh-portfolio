import { useState, useEffect } from 'react';
import Hero from './Hero';
import SelectedWork from './SelectedWork';
import AboutStrip from './AboutStrip';
import ResumeStrip from './ResumeStrip';
import Contact from './Contact';

const SECTIONS = ['work', 'about', 'resume', 'contact'];

export default function Home() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
  };

  return (
    <main style={{ paddingTop: '56px' }}>
      <Hero onCta={scrollTo} />
      <SelectedWork />
      <AboutStrip />
      <ResumeStrip />
      <Contact />
    </main>
  );
}
