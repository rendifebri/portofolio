import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MessageSquare, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { GithubIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman pesan
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset notifikasi setelah 6 detik
      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    }, 1200);
  };

  // Direct WhatsApp Message generator
  const sendViaWhatsApp = () => {
    const text = `Halo ${personalData.name}, saya ingin berdiskusi mengenai proyek web.`;
    const cleanPhone = personalData.phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* HEADER */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={15} />
            <span>Kontak & Kolaborasi</span>
          </div>
          <h2 className="section-title">
            Mari Terhubung & <span className="text-gradient">Mulai Berdiskusi</span>
          </h2>
          <p className="section-subtitle">
            Punya ide proyek menarik, tawaran kerja, atau sekadar ingin berdiskusi seputar web development? Silakan kirimkan pesan di bawah ini.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* INFORMASI KONTAK & MEDIA SOSIAL */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#f8fafc',
                  marginBottom: '0.6rem',
                }}
              >
                Informasi Kontak
              </h3>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                }}
              >
                Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau kesempatan untuk menjadi bagian dari visi Anda.
              </p>
            </div>

            {/* CHANNEL CARDS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              {/* EMAIL */}
              <a
                href={personalData.socials?.email || `mailto:${personalData.email}`}
                className="glass-card"
                style={{
                  padding: '1.1rem 1.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(168, 85, 247, 0.15)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={22} color="#c084fc" />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Email Resmi
                  </div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 600, color: '#f8fafc', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {personalData.email}
                  </div>
                </div>
              </a>

              {/* WHATSAPP */}
              <div
                onClick={sendViaWhatsApp}
                className="glass-card"
                style={{
                  padding: '1.1rem 1.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(168, 85, 247, 0.15)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MessageSquare size={22} color="#c084fc" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    WhatsApp Chat
                  </div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 600, color: '#f8fafc' }}>
                    {personalData.phone}
                  </div>
                </div>
              </div>

              {/* INSTAGRAM */}
              <a
                href={personalData.socials?.instagram}
                target="_blank"
                rel="noreferrer"
                className="glass-card"
                style={{
                  padding: '1.1rem 1.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(168, 85, 247, 0.15)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <InstagramIcon size={22} color="#c084fc" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Instagram
                  </div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 600, color: '#f8fafc' }}>
                    @rendifebri38
                  </div>
                </div>
              </a>

              {/* GITHUB */}
              <a
                href={personalData.socials?.github}
                target="_blank"
                rel="noreferrer"
                className="glass-card"
                style={{
                  padding: '1.1rem 1.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(168, 85, 247, 0.15)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <GithubIcon size={22} color="#c084fc" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    GitHub Repository
                  </div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 600, color: '#f8fafc' }}>
                    github.com/rendifebri
                  </div>
                </div>
              </a>

              {/* LOKASI */}
              <div
                className="glass-card"
                style={{
                  padding: '1.1rem 1.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(168, 85, 247, 0.15)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={22} color="#c084fc" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Lokasi Domisili
                  </div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 600, color: '#f8fafc' }}>
                    {personalData.location}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* FORM KIRIM PESAN */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem 2.2rem',
              position: 'relative',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#f8fafc',
                marginBottom: '0.4rem',
              }}
            >
              Kirim Pesan Langsung
            </h3>
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-muted)',
                marginBottom: '1.75rem',
              }}
            >
              Isi formulir di bawah ini dan saya akan merespons secepat mungkin dalam waktu 1x24 jam.
            </p>

            {/* NOTIFIKASI SUKSES */}
            {submitted && (
              <div
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid rgba(34, 197, 94, 0.4)',
                  color: '#4ade80',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  marginBottom: '1.5rem',
                  animation: 'fadeIn 0.3s ease',
                }}
              >
                <CheckCircle2 size={20} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                  Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* FORM NAMA */}
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: '#e2e8f0',
                    marginBottom: '0.5rem',
                  }}
                >
                  Nama Lengkap <span style={{ color: '#c084fc' }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>

              {/* FORM EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: '#e2e8f0',
                    marginBottom: '0.5rem',
                  }}
                >
                  Alamat Email <span style={{ color: '#c084fc' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>

              {/* FORM SUBJEK / TOPIK */}
              <div>
                <label
                  htmlFor="subject"
                  style={{
                    display: 'block',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: '#e2e8f0',
                    marginBottom: '0.5rem',
                  }}
                >
                  Topik / Subjek Pesan
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Contoh: Diskusi Pembuatan Website Toko Online"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>

              {/* FORM PESAN */}
              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: '#e2e8f0',
                    marginBottom: '0.5rem',
                  }}
                >
                  Isi Pesan <span style={{ color: '#c084fc' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Tuliskan pesan, rincian proyek, atau pertanyaan Anda di sini..."
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              {/* TOMBOL KIRIM */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  fontSize: '1rem',
                  marginTop: '0.5rem',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                {isSubmitting ? (
                  <span>Mengirim Pesan...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Kirim Pesan Sekarang</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>

      <style>{`
        .contact-input {
          width: 100%;
          padding: 0.85rem 1.1rem;
          background: rgba(14, 9, 27, 0.75);
          border: 1px solid rgba(168, 85, 247, 0.25);
          border-radius: 12px;
          color: #f8fafc;
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .contact-input:focus {
          border-color: #a855f7;
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.4);
          background: rgba(20, 12, 38, 0.9);
        }

        .contact-input::placeholder {
          color: #64748b;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;

