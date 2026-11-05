import React from 'react';
import { 
  User, 
  MapPin, 
  Mail, 
  GraduationCap, 
  Briefcase, 
  Compass, 
  CheckCircle2,
  Sparkles,
  Code2,
  Layers,
  Terminal
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="section-badge">
            <User size={15} />
            <span>Tentang Diri Saya</span>
          </div>
          <h2 className="section-title">
            Mengenal Lebih Dekat <span className="text-gradient">Tentang Saya</span>
          </h2>
          <p className="section-subtitle">
            Kombinasi antara minat mendalam dalam pemrograman, dedikasi terhadap kode berkualitas, dan rasa ingin tahu yang tak henti terhadap teknologi baru.
          </p>
        </div>

        {/* MAIN ABOUT GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '3rem',
            alignItems: 'start',
            marginBottom: '4rem',
          }}
          className="about-grid"
        >
          {/* IMAGE / ILLUSTRATION */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                padding: '4px',
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.6) 0%, rgba(88, 28, 135, 0.2) 60%, rgba(192, 132, 252, 0.5) 100%)',
                boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.7), 0 0 25px rgba(168, 85, 247, 0.25)',
              }}
            >
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: '#0d091a',
                  position: 'relative',
                }}
              >
                <img
                  src={personalData.aboutImageUrl || personalData.avatarUrl}
                  alt={personalData.name}
                  style={{
                    width: '100%',
                    height: '420px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                
                {/* Overlay card inside image */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    background: 'rgba(14, 9, 27, 0.88)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '14px',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(168, 85, 247, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Terminal size={22} color="#c084fc" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                      Clean Code & Modern Stack
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                      Web Development, IoT & Sistem Komputer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BIODATA & DESKRIPSI DETAIL */}
          <div>
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                marginTop: 0,
                marginBottom: '1rem',
                color: '#f8fafc',
                lineHeight: 1.25,
              }}
            >
              Halo, Saya <span className="text-gradient-purple">{personalData.name}</span>
            </h3>

            <p
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.8,
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                whiteSpace: 'pre-line',
              }}
            >
              {personalData.aboutBio}
            </p>

            {/* QUICK INFO PILLS */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'rgba(21, 14, 40, 0.6)',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                }}
              >
                <MapPin size={18} color="#c084fc" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Lokasi</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                    {personalData.location}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'rgba(21, 14, 40, 0.6)',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                }}
              >
                <Mail size={18} color="#c084fc" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Email</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                    {personalData.email}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'rgba(21, 14, 40, 0.6)',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                }}
              >
                <GraduationCap size={18} color="#c084fc" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Pendidikan</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                    Sistem Komputer
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'rgba(21, 14, 40, 0.6)',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                }}
              >
                <Briefcase size={18} color="#c084fc" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Status</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                    Open to Work / Freelance
                  </div>
                </div>
              </div>
            </div>

            {/* STATS COUNTER CARDS */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
              }}
              className="stats-grid"
            >
              {personalData.stats?.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.1rem 0.8rem',
                    textAlign: 'center',
                    background: 'rgba(20, 13, 38, 0.7)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: '#c084fc',
                      textShadow: '0 0 15px rgba(168, 85, 247, 0.6)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.2 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TUJUAN DAN MINAT (GOALS & INTERESTS) */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3
              style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#f8fafc',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <Compass size={24} color="#c084fc" />
              <span>Tujuan & Minat Pengembangan</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.4rem' }}>
              Prinsip dan arah yang saya pegang teguh dalam setiap baris kode yang ditulis
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {personalData.goalsAndInterests?.map((item, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(168, 85, 247, 0.15)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Sparkles size={20} color="#c084fc" />
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;

