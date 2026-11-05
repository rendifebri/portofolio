import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Sparkles,
  Search
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('Semua');

  const categories = ['Semua', 'Frontend', 'Backend', 'Fullstack', 'IoT'];

  const filteredProjects = filter === 'Semua' 
    ? projectsData 
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="container">

        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={15} />
            <span>Portofolio Proyek</span>
          </div>
          <h2 className="section-title">
            Proyek Pilihan & <span className="text-gradient">Karya Nyata</span>
          </h2>
          <p className="section-subtitle">
            Kumpulan aplikasi web, landing page interaktif, dan backend sistem yang dirancang dengan performa tinggi, desain estetik, dan kode yang bersih.
          </p>
        </div>

        {/* FILTER BUTTONS */}
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
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.55rem 1.4rem',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: filter === cat
                  ? '1px solid #a855f7'
                  : '1px solid rgba(168, 85, 247, 0.2)',
                background: filter === cat
                  ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.4) 0%, rgba(88, 28, 135, 0.3) 100%)'
                  : 'rgba(20, 13, 38, 0.5)',
                color: filter === cat ? '#ffffff' : '#94a3b8',
                boxShadow: filter === cat
                  ? '0 0 15px rgba(168, 85, 247, 0.4)'
                  : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card project-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {/* GAMBAR PROYEK */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '210px',
                  overflow: 'hidden',
                  background: '#090514',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  className="project-img"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';
                  }}
                />

                {/* OVERLAY PURPLE GRADIENT */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10, 6, 19, 0.95) 0%, rgba(10, 6, 19, 0.2) 60%, transparent 100%)',
                  }}
                />

                {/* CATEGORY BADGE */}
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '9999px',
                    background: 'rgba(15, 9, 29, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(168, 85, 247, 0.4)',
                    color: '#c084fc',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                  }}
                >
                  {project.category}
                </span>

                {project.featured && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      background: 'linear-gradient(135deg, #9333ea, #7e22ce)',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      boxShadow: '0 0 12px rgba(168, 85, 247, 0.5)',
                    }}
                  >
                    <Sparkles size={12} />
                    <span>Featured</span>
                  </span>
                )}
              </div>

              {/* DETAIL KONTEN PROYEK */}
              <div
                style={{
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#f8fafc',
                      marginBottom: '0.65rem',
                      lineHeight: 1.35,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#94a3b8',
                      lineHeight: 1.6,
                      marginBottom: '1.2rem',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* TEKNOLOGI YANG DIGUNAKAN */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.75rem',
                          padding: '0.25rem 0.7rem',
                          borderRadius: '8px',
                          background: 'rgba(168, 85, 247, 0.12)',
                          border: '1px solid rgba(168, 85, 247, 0.25)',
                          color: '#e2e8f0',
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TOMBOL DEMO & GITHUB */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    paddingTop: '0.8rem',
                    borderTop: '1px solid rgba(168, 85, 247, 0.15)',
                  }}
                >
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{
                      flex: 1,
                      textDecoration: 'none',
                    }}
                  >
                    <ExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{
                      flex: 1,
                      textDecoration: 'none',
                    }}
                  >
                    <GithubIcon size={15} color="#c084fc" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .project-card:hover .project-img {
          transform: scale(1.06);
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

