import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { 
  FiHome, FiFileText, FiArrowLeft, FiAlertTriangle,
  FiBookOpen, FiTool, FiCheckCircle, FiHelpCircle,
  FiChevronRight, FiZap
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS (Shared)
// ============================================================================
const executiveDesignTokens = `
  :root {
    --bg-page: #131315; --bg-surface-lowest: #0e0e10; --bg-surface-low: #1c1b1d;
    --bg-surface: #201f21; --bg-surface-high: #2a2a2c;
    --text-primary: #e5e1e4; --text-secondary: #c5bfc8; --text-muted: #9d95a0;
    --accent-primary: #f2ca50; --accent-primary-container: #d4af37;
    --accent-on-primary: #3c2f00; --accent-primary-hover: #f7d86e;
    --border-gold-filament: rgba(212,175,55,0.3); --border-gold-filament-strong: rgba(212,175,55,0.5);
    --font-display: 'Playfair Display','Georgia',serif;
    --font-body: 'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    --font-size-display-lg: clamp(3rem,6vw,4rem); --font-size-display-md: clamp(2.25rem,5vw,3rem);
    --font-size-headline-lg: clamp(1.75rem,4vw,2rem); --font-size-title-md: clamp(1.125rem,2.5vw,1.25rem);
    --font-size-body-lg: clamp(1rem,2vw,1.125rem); --font-size-body-sm: 0.875rem;
    --section-gap-md: clamp(4rem,8vw,6rem);
    --content-max-width: 1280px; --gutter-desktop: clamp(1.5rem,5vw,2.5rem);
    --shadow-card: 0 4px 12px rgba(0,0,0,0.3); --shadow-card-hover: 0 8px 24px rgba(0,0,0,0.4),0 0 20px rgba(242,202,80,0.05);
    --transition-medium: 250ms; --easing-smooth: cubic-bezier(0.65,0,0.35,1);
    --glass-blur: 20px;
    --btn-primary-bg: #f2ca50; --btn-primary-text: #3c2f00; --btn-primary-padding: 0.875rem 2rem;
    --card-bg: rgba(28,27,29,0.6); --card-border: 0.5px solid rgba(212,175,55,0.15);
    --card-padding: clamp(1.5rem,4vw,2.5rem);
  }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { background-color:var(--bg-page); color:var(--text-primary); font-family:var(--font-body); line-height:1.6; -webkit-font-smoothing:antialiased; overflow-x:hidden; }
  h1,h2,h3 { font-family:var(--font-display); color:var(--text-primary); letter-spacing:-0.02em; }
  a { color:var(--accent-primary); transition:color var(--transition-medium); text-decoration:none; }
  a:hover { color:var(--accent-primary-hover); }
  .gradient-text { background:linear-gradient(135deg,#f2ca50 0%,#d4af37 50%,#ffe088 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .section-container { max-width:var(--content-max-width); margin:0 auto; padding:0 var(--gutter-desktop); width:100%; }
  
  /* Button Styles */
  .btn-primary { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:var(--btn-primary-bg); color:var(--btn-primary-text); border:none; border-radius:0.25rem; font-size:0.875rem; font-weight:600; transition:all var(--transition-medium); cursor:pointer; text-decoration:none; }
  .btn-primary:hover { background:var(--accent-primary-hover); transform:translateY(-2px); box-shadow:0 0 10px rgba(242,202,80,0.3); }
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--accent-primary); border:0.5px solid rgba(212,175,55,0.5); border-radius:0.25rem; font-size:0.875rem; font-weight:600; transition:all var(--transition-medium); cursor:pointer; text-decoration:none; }
  .btn-outline:hover { background:rgba(242,202,80,0.08); border-color:rgba(212,175,55,0.8); transform:translateY(-2px); }

  /* Card Styles */
  .card-executive { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); -webkit-backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); transition:all var(--transition-medium) var(--easing-smooth); height:100%; display:flex; flex-direction:column; }
  .card-executive:hover { background:rgba(32,31,33,0.8); border-color:rgba(212,175,55,0.3); transform:translateY(-4px); box-shadow:var(--shadow-card-hover); }

  /* Grid System */
  .grid-3 { display:grid; grid-template-columns:1fr; gap:1.5rem; margin:2rem auto; width:100%; }
  @media (min-width:768px) { .grid-3 { grid-template-columns:repeat(3,1fr); } }
  
  /* Animations */
  @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
  @keyframes pulse-gold { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 15px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
`;

// ============================================================================
// CONTENT DATA
// ============================================================================
const POPULAR_DESTINATIONS = [
  { href: "/resume-templates", title: "Resume Templates", desc: "Start building your professional resume instantly.", icon: FiFileText },
  { href: "/free-resume-tools", title: "Free Resume Tools", desc: "Access our suite of AI-powered career tools.", icon: FiTool },
  { href: "/how-to-write-a-resume", title: "Writing Guide", desc: "Expert tips to craft a winning resume.", icon: FiBookOpen },
];

const TROUBLESHOOTING_STEPS = [
  { title: "Check the URL", desc: "Ensure there are no typos in the web address. URLs are case-sensitive." },
  { title: "Use the Search Bar", desc: "Try searching for the content you were looking for using our site search." },
  { title: "Go Back Home", desc: "Return to our homepage to navigate from our main menu structure." },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function Custom404() {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
        <title>Page Not Found | Professional Resume Builder</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage to create beautiful, ATS-optimized resumes." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Hero Section: The 404 Error */}
        <section style={{ padding: 'var(--section-gap-md) 0 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          {/* Background Glow Effect */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(242,202,80,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
          
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', marginBottom: '1.5rem', border: '1px solid rgba(242,202,80,0.3)', animation: 'pulse-gold 3s infinite' }}>
              <FiAlertTriangle size={40} color="var(--accent-primary)" />
            </div>
            
            <h1 style={{ fontSize: 'var(--font-size-display-lg)', lineHeight: 1.1, marginBottom: '1rem' }}>
              <span className="gradient-text">404</span>
            </h1>
            <h2 style={{ fontSize: 'var(--font-size-headline-lg)', fontWeight: 600, marginBottom: '1rem' }}>
              Page Not Found
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
              It seems you've ventured off the map. The page you're looking for might have been moved, deleted, or never existed. But don't worry—your career journey doesn't have to stop here.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" className="btn-primary">
                <FiHome size={18} /> Return Home
              </Link>
              <button onClick={() => window.history.back()} className="btn-outline">
                <FiArrowLeft size={18} /> Go Back
              </button>
            </div>
          </div>
        </section>

        {/* Troubleshooting Section: Keeping them engaged */}
        <section style={{ padding: '2rem 0 4rem' }}>
          <div className="section-container">
            <div style={{ background: 'var(--bg-surface-low)', border: '1px solid var(--border-gold-filament)', borderRadius: '0.5rem', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <FiHelpCircle size={24} color="var(--accent-primary)" />
                <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Quick Troubleshooting Guide</h3>
              </div>
              <div className="grid-3" style={{ marginTop: 0, gap: '1rem' }}>
                {TROUBLESHOOTING_STEPS.map((step, i) => (
                  <div key={i} style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.25rem' }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{step.title}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations: Redirecting traffic */}
        <section style={{ padding: '2rem 0 var(--section-gap-md)', borderTop: '0.5px solid var(--border-gold-filament)' }}>
          <div className="section-container">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: 'var(--font-size-headline-lg)', marginBottom: '0.5rem' }}>Popular Destinations</h3>
              <p style={{ color: 'var(--text-secondary)' }}>While you're here, explore our most valuable resources.</p>
            </div>
            
            <div className="grid-3">
              {POPULAR_DESTINATIONS.map((dest, i) => (
                <Link href={dest.href} key={i} className="card-executive" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <dest.icon size={20} color="var(--accent-primary)" />
                    </div>
                    <FiChevronRight size={16} color="var(--text-muted)" />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{dest.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{dest.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SEO / Value Prop Section: "Extremely Documented" feel */}
        <section style={{ padding: '4rem 0', background: 'var(--bg-surface-lowest)' }}>
          <div className="section-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(242,202,80,0.1)', color: 'var(--accent-primary)', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600, marginBottom: '1rem', border: '1px solid rgba(242,202,80,0.2)' }}>
                  DID YOU KNOW?
                </div>
                <h3 style={{ fontSize: 'var(--font-size-headline-lg)', marginBottom: '1rem' }}>
                  Why Professional Resumes Matter
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                  In today's competitive job market, <strong>75% of resumes are rejected by ATS (Applicant Tracking Systems)</strong> before a human ever sees them. Our platform is designed specifically to bypass these filters, ensuring your qualifications get the attention they deserve.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    "ATS-Friendly Formatting Guaranteed",
                    "Industry-Specific Keyword Optimization",
                    "Privacy-First: No Data Storage Required"
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                      <FiCheckCircle size={16} color="var(--accent-primary)" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div style={{ background: 'linear-gradient(135deg, rgba(242,202,80,0.05) 0%, rgba(28,27,29,0.6) 100%)', border: '1px solid var(--border-gold-filament)', borderRadius: '0.5rem', padding: '2rem', textAlign: 'center' }}>
                <FiZap size={48} color="var(--accent-primary)" style={{ marginBottom: '1rem', animation: 'float 3s ease-in-out infinite' }} />
                <h4 style={{ marginBottom: '1rem' }}>Ready to Build?</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Create a professional, download-ready resume in less than 15 minutes. No sign-up required.
                </p>
                <Link href="/resume-templates" className="btn-primary" style={{ width: '100%' }}>
                  Start Building Now
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}