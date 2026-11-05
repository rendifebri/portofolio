import React from 'react';
import { 
  Sparkles, 
  ArrowUp, 
  Mail, 
  MessageSquare,
  Heart
} from 'lucide-react';
import { 
  GithubIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  WhatsAppIcon 
} from './SocialIcons';
import { personalData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        background: 'rgba(5, 3, 10, 0.95)',
        borderTop: '1px solid rgba(168, 85, 247, 0.2)',
        paddingTop: '4rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(168, 85, 247, 0.12)',
          }}
          className="footer-grid"
        >
          {/* BRAND COLUMN */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '1.4rem',
                fontWeight: 800,
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #9333ea, #7e22ce)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)',
                }}
              >
                <Sparkles size={18} color="#ffffff" />
              </div>
              <span style={{ color: '#ffffff' }}>
                {personalData.name}
              </span>
            </div>

            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                maxWidth: '380px',
                marginBottom: '1.5rem',
              }}
            >
              Portofolio web modern dengan arsitektur React JS + Vite bertenaga. Berorientasi pada antarmuka elegan, performa responsif, dan kode berkualitas.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              {personalData.socials?.github && (
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="footer-social-link"
                >
                  <GithubIcon size={18} />
                </a>
              )}

              {personalData.socials?.linkedin && (
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="footer-social-link"
                >
                  <LinkedinIcon size={18} />
                </a>
              )}

              {personalData.socials?.instagram && (
                <a
                  href={personalData.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="footer-social-link"
                >
                  <InstagramIcon size={18} />
                </a>
              )}

              {personalData.socials?.whatsapp && (
                <a
                  href={personalData.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="footer-social-link"
                >
                  <WhatsAppIcon size={18} />
                </a>
              )}

              {personalData.socials?.email && (
                <a
                  href={personalData.socials.email}
                  aria-label="Email"
                  className="footer-social-link"
                >
                  <Mail size={18} />
                </a>
              )}
            </div>
          </div>

          {/* QUICK NAVIGATION LINKS */}
          <div>
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#f8fafc',
                marginBottom: '1.2rem',
                letterSpacing: '0.02em',
              }}
            >
              Tautan Navigasi
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease',
                    width: 'fit-content',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#c084fc')}
                  onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT INFO QUICK */}
          <div>
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#f8fafc',
                marginBottom: '1.2rem',
                letterSpacing: '0.02em',
              }}
            >
              Hubungi Langsung
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
              {personalData.location}
            </p>
            <p style={{ fontSize: '0.88rem', color: '#c084fc', marginBottom: '0.5rem', fontWeight: 600 }}>
              {personalData.email}
            </p>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
              {personalData.phone}
            </p>

            {/* BACK TO TOP BUTTON */}
            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              style={{
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <ArrowUp size={15} color="#c084fc" />
              <span>Kembali Ke Atas</span>
            </button>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#64748b',
          }}
        >
          <div>
            © {new Date().getFullYear()} <span style={{ color: '#c084fc' }}>{personalData.name}</span>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Dibuat dengan</span>
            <Heart size={14} color="#ec4899" fill="#ec4899" />
            <span>menggunakan React JS & Vite</span>
          </div>
        </div>

      </div>

      <style>{`
        .footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(23, 15, 43, 0.6);
          border: 1px solid rgba(168, 85, 247, 0.25);
          color: #94a3b8;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .footer-social-link:hover {
          color: #ffffff;
          background: rgba(168, 85, 247, 0.25);
          border-color: #a855f7;
          transform: translateY(-2px);
          box-shadow: 0 0 12px rgba(168, 85, 247, 0.4);
        }

        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

