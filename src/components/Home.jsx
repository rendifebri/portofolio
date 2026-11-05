import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Send, 
  Mail, 
  Sparkles,
  ArrowRight,
  Code2
} from 'lucide-react';
import { 
  GithubIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  WhatsAppIcon 
} from './SocialIcons';
import { personalData } from '../data/portfolioData';

const Home = () => {
  // Efek pergantian role/profesi dinamis
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = personalData.roles || [personalData.profession];

  useEffect(() => {
    if (roles.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '50px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* SISI KIRI: TEKS & CALL TO ACTION */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* BADGE STATUS */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1.1rem',
                borderRadius: '9999px',
                background: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.35)',
                width: 'fit-content',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)',
              }}
            >
              <span
                style={{
                  position: 'relative',
                  display: 'flex',
                  width: '9px',
                  height: '9px',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: '#a855f7',
                    opacity: 0.75,
                    animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                  }}
                />
                <span
                  style={{
                    position: 'relative',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    backgroundColor: '#c084fc',
                  }}
                />
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#c084fc', letterSpacing: '0.02em' }}>
                Siap Menerima Proyek & Kolaborasi
              </span>
            </div>

            {/* HEADING NAMA & PROFESI */}
            <div>
              <p
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  marginBottom: '0.4rem',
                }}
              >
                Halo semua, saya 👋
              </p>
              
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  marginBottom: '0.8rem',
                }}
              >
                <span className="text-gradient">{personalData.name}</span>
              </h1>

              {/* DYNAMIC ROLE */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                  fontWeight: 700,
                  color: '#e2e8f0',
                  minHeight: '40px',
                }}
              >
                <span style={{ color: '#a855f7' }}>&gt;</span>
                <span className="text-gradient-purple" key={currentRoleIndex}>
                  {roles[currentRoleIndex]}
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '1.3em',
                    backgroundColor: '#a855f7',
                    animation: 'blink 1s step-end infinite',
                  }}
                />
              </div>
            </div>

            {/* DESKRIPSI SINGKAT */}
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                maxWidth: '560px',
              }}
            >
              {personalData.shortBio}
            </p>

            {/* TOMBOL AKSI UTAMA */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                paddingTop: '0.5rem',
              }}
            >
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ padding: '0.85rem 1.8rem' }}
              >
                <span>Hubungi Saya</span>
                <Send size={18} />
              </a>

              <a
                href={personalData.cvUrl || '#'}
                download="CV_Rendi_Febri_Yusrimel.pdf"
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.8rem' }}
              >
                <Download size={18} color="#c084fc" />
                <span>Download CV</span>
              </a>
            </div>

            {/* MEDIA SOSIAL ICONS */}
            <div style={{ paddingTop: '1.2rem' }}>
              <p
                style={{
                  fontSize: '0.82rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--text-dim)',
                  marginBottom: '0.8rem',
                  fontWeight: 600,
                }}
              >
                Terhubung Dengan Saya
              </p>

              <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'center' }}>
                {personalData.socials?.github && (
                  <a
                    href={personalData.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="social-icon-btn"
                  >
                    <GithubIcon size={20} />
                  </a>
                )}

                {personalData.socials?.linkedin && (
                  <a
                    href={personalData.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="social-icon-btn"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                )}

                {personalData.socials?.instagram && (
                  <a
                    href={personalData.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="social-icon-btn"
                  >
                    <InstagramIcon size={20} />
                  </a>
                )}

                {personalData.socials?.whatsapp && (
                  <a
                    href={personalData.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="social-icon-btn"
                  >
                    <WhatsAppIcon size={20} />
                  </a>
                )}

                {personalData.socials?.email && (
                  <a
                    href={personalData.socials.email}
                    aria-label="Email"
                    className="social-icon-btn"
                  >
                    <Mail size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* SISI KANAN: FOTO PROFIL MODERN DENGAN GLOW PURPLE */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* AMBIENT RADIAL LIGHTING BEHIND AVATAR */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '380px',
                height: '380px',
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(88, 28, 135, 0.15) 50%, transparent 75%)',
                filter: 'blur(50px)',
                borderRadius: '50%',
                zIndex: 0,
              }}
            />

            {/* AVATAR CONTAINER */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '320px',
                maxWidth: '100%',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '28px',
                  padding: '6px',
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.8) 0%, rgba(88, 28, 135, 0.3) 50%, rgba(192, 132, 252, 0.7) 100%)',
                  boxShadow: '0 0 35px rgba(168, 85, 247, 0.4), inset 0 0 15px rgba(168, 85, 247, 0.3)',
                }}
              >
                <div
                  style={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: '#0d081b',
                    aspectRatio: '1 / 1.15',
                    position: 'relative',
                  }}
                >
                  <img
                    src={personalData.avatarUrl}
                    alt={personalData.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  
                  {/* Subtle bottom gradient on image */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(11, 7, 23, 0.8) 0%, transparent 40%)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              </div>

              {/* FLOATING BADGE 1 (Tech Stack) */}
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  background: 'rgba(20, 13, 38, 0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(168, 85, 247, 0.4)',
                  borderRadius: '16px',
                  padding: '0.65rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5), 0 0 15px rgba(168, 85, 247, 0.3)',
                  animation: 'floatBadge 4s ease-in-out infinite alternate',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(168, 85, 247, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Code2 size={18} color="#c084fc" />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Keahlian Utama</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc' }}>
                    Web Dev & IoT System
                  </div>
                </div>
              </div>

              {/* FLOATING BADGE 2 (Location / Experience) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  left: '-15px',
                  background: 'rgba(20, 13, 38, 0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(168, 85, 247, 0.4)',
                  borderRadius: '16px',
                  padding: '0.65rem 1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5), 0 0 15px rgba(168, 85, 247, 0.3)',
                  animation: 'floatBadge 4.5s ease-in-out 0.5s infinite alternate-reverse',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(168, 85, 247, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Sparkles size={18} color="#c084fc" />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Lokasi Domisili</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc' }}>
                    {personalData.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STYLES & ANIMATIONS */}
      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        @keyframes floatBadge {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }

        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(23, 15, 43, 0.7);
          border: 1px solid rgba(168, 85, 247, 0.25);
          color: #cbd5e1;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-icon-btn:hover {
          color: #ffffff;
          background: rgba(168, 85, 247, 0.25);
          border-color: #a855f7;
          transform: translateY(-3px);
          box-shadow: 0 0 16px rgba(168, 85, 247, 0.5);
        }

        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3.5rem !important;
          }
          .hero-grid > div:first-child {
            align-items: center;
          }
          .hero-grid p {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
