import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  // Efek perubahan latar belakang navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Deteksi active section berdasarkan scroll
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks, setActiveSection]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(7, 5, 13, 0.88)'
          : 'rgba(7, 5, 13, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(168, 85, 247, 0.25)'
          : '1px solid rgba(168, 85, 247, 0.08)',
        boxShadow: isScrolled
          ? '0 10px 30px -10px rgba(147, 51, 234, 0.2)'
          : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '75px',
        }}
      >
        {/* LOGO BRAND */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, '#home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            fontSize: '1.35rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #9333ea 0%, #7e22ce 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(168, 85, 247, 0.6)',
            }}
          >
            <Sparkles size={20} color="#ffffff" />
          </div>
          <span style={{ color: '#ffffff' }}>
            {personalData.shortName || 'Portfolio'}
            <span style={{ color: '#c084fc' }}>.dev</span>
          </span>
        </a>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: isActive ? '#c084fc' : '#94a3b8',
                  position: 'relative',
                  padding: '0.4rem 0',
                  transition: 'all 0.2s ease',
                  textShadow: isActive ? '0 0 12px rgba(168, 85, 247, 0.8)' : 'none',
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, #a855f7, #c084fc)',
                      borderRadius: '2px',
                      boxShadow: '0 0 8px #a855f7',
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA BUTTON */}
        <div style={{ display: 'none' }} className="desktop-cta">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="btn btn-primary btn-sm"
            style={{ borderRadius: '9999px', padding: '0.55rem 1.25rem' }}
          >
            <Send size={15} />
            <span>Hubungi Saya</span>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            background: 'rgba(28, 18, 52, 0.7)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            color: '#c084fc',
            cursor: 'pointer',
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(9, 6, 19, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(168, 85, 247, 0.3)',
            padding: '1.25rem 1.5rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
          }}
          className="mobile-menu-container"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                style={{
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: isActive ? '#c084fc' : '#cbd5e1',
                  padding: '0.7rem 1rem',
                  borderRadius: '10px',
                  background: isActive ? 'rgba(168, 85, 247, 0.15)' : 'transparent',
                  border: isActive ? '1px solid rgba(168, 85, 247, 0.3)' : '1px solid transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#a855f7',
                      boxShadow: '0 0 8px #a855f7',
                    }}
                  />
                )}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="btn btn-primary"
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            <Send size={16} />
            <span>Hubungi Saya</span>
          </a>
        </div>
      )}

      {/* Responsive Inline CSS for Navbar */}
      <style>{`
        @media (min-width: 820px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-menu-container {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;

