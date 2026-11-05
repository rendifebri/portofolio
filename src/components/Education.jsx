import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  BookOpen, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* HEADER */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={15} />
            <span>Riwayat Pendidikan</span>
          </div>
          <h2 className="section-title">
            Latar Belakang <span className="text-gradient">Akademik & Edukasi</span>
          </h2>
          <p className="section-subtitle">
            Fondasi teori dan praktik komputasi yang membentuk pola pikir logis serta kedisiplinan pemecahan masalah software engineering.
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* VERTICAL GLOWING TIMELINE LINE */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '20px',
              width: '2px',
              background: 'linear-gradient(to bottom, #9333ea 0%, #a855f7 50%, #581c87 100%)',
              boxShadow: '0 0 10px rgba(168, 85, 247, 0.6)',
            }}
            className="timeline-vertical-line"
          />

          {/* TIMELINE ITEMS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {educationData.map((edu, index) => (
              <div
                key={edu.id || index}
                style={{
                  position: 'relative',
                  paddingLeft: '55px',
                }}
                className="timeline-item"
              >
                {/* TIMELINE NODE / ICON */}
                <div
                  style={{
                    position: 'absolute',
                    left: '5px',
                    top: '0',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#090514',
                    border: '2px solid #a855f7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 16px rgba(168, 85, 247, 0.8), inset 0 0 8px rgba(168, 85, 247, 0.4)',
                    zIndex: 2,
                  }}
                  className="timeline-node"
                >
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#c084fc',
                    }}
                  />
                </div>

                {/* EDUCATION CARD */}
                <div
                  className="glass-card"
                  style={{
                    padding: '1.8rem 2rem',
                    position: 'relative',
                  }}
                >
                  {/* TOP ROW: INSTITUTION & PERIOD */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.8rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: '#c084fc',
                          marginBottom: '0.3rem',
                        }}
                      >
                        {edu.status}
                      </span>
                      <h3
                        style={{
                          fontSize: '1.35rem',
                          fontWeight: 700,
                          color: '#f8fafc',
                        }}
                      >
                        {edu.institution}
                      </h3>
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '9999px',
                        background: 'rgba(168, 85, 247, 0.12)',
                        border: '1px solid rgba(168, 85, 247, 0.3)',
                        color: '#c084fc',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                      }}
                    >
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* DEGREE / JURUSAN */}
                  <div
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: '#e2e8f0',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <BookOpen size={17} color="#a855f7" />
                    <span>{edu.degree}</span>
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#94a3b8',
                      lineHeight: 1.65,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {edu.description}
                  </p>

                  {/* HIGHLIGHTS */}
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.45rem',
                        paddingTop: '0.85rem',
                        borderTop: '1px solid rgba(168, 85, 247, 0.15)',
                      }}
                    >
                      {edu.highlights.map((h, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            fontSize: '0.87rem',
                            color: '#cbd5e1',
                          }}
                        >
                          <CheckCircle2 size={15} color="#c084fc" style={{ flexShrink: 0 }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 600px) {
          .timeline-vertical-line {
            left: 12px !important;
          }
          .timeline-item {
            padding-left: 36px !important;
          }
          .timeline-node {
            left: 0 !important;
            width: 26px !important;
            height: 26px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;

