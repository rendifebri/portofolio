import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  FileCode, 
  Layers, 
  Server, 
  Cpu, 
  Database, 
  HardDrive,
  CheckCircle,
  Sparkles,
  Wifi,
  Bot
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map string icon ke icon Lucide
const getSkillIcon = (iconName) => {
  switch (iconName) {
    case 'Code':
      return <Code2 size={24} color="#c084fc" />;
    case 'Palette':
      return <Palette size={24} color="#c084fc" />;
    case 'FileCode':
      return <FileCode size={24} color="#c084fc" />;
    case 'Layers':
      return <Layers size={24} color="#c084fc" />;
    case 'Server':
      return <Server size={24} color="#c084fc" />;
    case 'Cpu':
      return <Cpu size={24} color="#c084fc" />;
    case 'Database':
      return <Database size={24} color="#c084fc" />;
    case 'HardDrive':
      return <HardDrive size={24} color="#c084fc" />;
    case 'Wifi':
      return <Wifi size={24} color="#c084fc" />;
    case 'Bot':
      return <Bot size={24} color="#c084fc" />;
    default:
      return <Code2 size={24} color="#c084fc" />;
  }
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Frontend', 'Backend', 'Database', 'IoT & Robotik'];

  const filteredSkills = activeCategory === 'Semua'
    ? skillsData
    : skillsData.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* HEADER */}
        <div className="section-header">
          <div className="section-badge">
            <Code2 size={15} />
            <span>Keahlian & Teknologi</span>
          </div>
          <h2 className="section-title">
            Keahlian Teknis & <span className="text-gradient">Tools Andalan</span>
          </h2>
          <p className="section-subtitle">
            Fondasi teknologi yang saya gunakan secara konsisten dalam merancang arsitektur sistem, membangun UI interaktif, dan mengelola basis data.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: activeCategory === cat
                  ? '1px solid #a855f7'
                  : '1px solid rgba(168, 85, 247, 0.2)',
                background: activeCategory === cat
                  ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.4) 0%, rgba(88, 28, 135, 0.3) 100%)'
                  : 'rgba(20, 13, 38, 0.5)',
                color: activeCategory === cat ? '#ffffff' : '#94a3b8',
                boxShadow: activeCategory === cat
                  ? '0 0 15px rgba(168, 85, 247, 0.4)'
                  : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SKILLS GRID WITH PROGRESS BARS & CARDS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '1.75rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem',
              }}
            >
              <div>
                {/* ICON & TITLE & CATEGORY TAG */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'rgba(168, 85, 247, 0.15)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)',
                    }}
                  >
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      background: 'rgba(168, 85, 247, 0.1)',
                      border: '1px solid rgba(168, 85, 247, 0.25)',
                      color: '#c084fc',
                      fontWeight: 600,
                    }}
                  >
                    {skill.category}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#f8fafc',
                    marginBottom: '0.4rem',
                  }}
                >
                  {skill.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.86rem',
                    color: '#94a3b8',
                    lineHeight: 1.5,
                  }}
                >
                  {skill.description}
                </p>
              </div>

              {/* PROGRESS BAR WITH GLOW */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ color: '#94a3b8' }}>Profisiensi</span>
                  <span style={{ color: '#c084fc' }}>{skill.percentage}%</span>
                </div>

                {/* TRACK */}
                <div
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.07)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  {/* FILL */}
                  <div
                    style={{
                      width: `${skill.percentage}%`,
                      height: '100%',
                      borderRadius: '9999px',
                      background: 'linear-gradient(90deg, #7e22ce 0%, #a855f7 60%, #c084fc 100%)',
                      boxShadow: '0 0 12px rgba(168, 85, 247, 0.7)',
                      transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM HIGHLIGHT BANNER */}
        <div
          className="glass-card"
          style={{
            marginTop: '3.5rem',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            background: 'linear-gradient(135deg, rgba(28, 17, 54, 0.8) 0%, rgba(13, 8, 25, 0.9) 100%)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
          }}
          className="skills-highlight"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #9333ea, #581c87)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
                flexShrink: 0,
              }}
            >
              <Sparkles size={26} color="#ffffff" />
            </div>
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc' }}>
                Fullstack Web Development & Komputasi IoT
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                Mengintegrasikan antarmuka web modern yang responsif dengan sistem backend, basis data, serta sistem mikrokontroler IoT secara andal.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="btn btn-secondary btn-sm"
            style={{ flexShrink: 0, borderRadius: '9999px' }}
          >
            Lihat Implementasi Proyek
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-highlight {
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
          }
          .skills-highlight > div {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;

