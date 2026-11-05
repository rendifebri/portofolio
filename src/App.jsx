import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="portfolio-wrapper">
      {/* AMBIENT BACKGROUND GLOW LIGHTS */}
      <div className="ambient-glow">
        <div className="ambient-orb-1" />
        <div className="ambient-orb-2" />
        <div className="ambient-orb-3" />
      </div>

      {/* GRID TEXTURE OVERLAY */}
      <div className="grid-overlay" />

      {/* MAIN WEBSITE NAVIGATION */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* MAIN CONTENT SECTIONS */}
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;

