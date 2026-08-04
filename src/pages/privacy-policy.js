import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { 
  FiShield, FiLock, FiEye, FiUserCheck, FiCheck, FiX,
  FiFileText, FiAlertCircle, FiBookOpen, FiCpu, FiHome,
  FiChevronRight, FiCalendar, FiClock, FiStar, FiAward,
  FiArrowRight, FiTool, FiUsers, FiTarget, FiTrendingUp,
  FiBriefcase, FiCode, FiHeart, FiDollarSign, FiLayers,
  FiGlobe, FiCheckCircle, FiXCircle, FiActivity, FiZap,
  FiInfo, FiSmartphone, FiCopy, FiRefreshCw, FiThumbsUp,
  FiMonitor, FiSun, FiMoon, FiCoffee, FiCompass, FiAnchor,
  FiMail // Added FiMail here
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS
// ============================================================================
const executiveDesignTokens = `
  :root {
    --bg-page: #131315; --bg-surface-lowest: #0e0e10; --bg-surface-low: #1c1b1d;
    --bg-surface: #201f21; --bg-surface-high: #2a2a2c;
    --text-primary: #e5e1e4; --text-secondary: #c5bfc8; --text-muted: #9d95a0;
    --accent-primary: #f2ca50; --accent-primary-container: #d4af37;
    --accent-on-primary: #3c2f00; --accent-primary-hover: #f7d86e;
    --border-gold-filament: rgba(212,175,55,0.3); --border-gold-filament-strong: rgba(212,175,55,0.5);
    --border-glass: rgba(212,175,55,0.15); --error-color: #ffb4ab; --warning-color: #ffb74d;
    --success-color: #4caf50; --info-color: #64b5f6; --purple-accent: #bb86fc;
    --rose-accent: #f8bbd0; --teal-accent: #80cbc4; --amber-accent: #ffd54f;
    --font-display: 'Playfair Display','Georgia',serif;
    --font-body: 'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    --font-size-display-lg: clamp(3rem,6vw,4rem); --font-size-display-md: clamp(2.25rem,5vw,3rem);
    --font-size-headline-lg: clamp(1.75rem,4vw,2rem); --font-size-headline-md: clamp(1.5rem,3.5vw,1.75rem);
    --font-size-title-md: clamp(1.125rem,2.5vw,1.25rem); --font-size-body-lg: clamp(1rem,2vw,1.125rem);
    --font-size-body-md: 1rem; --font-size-body-sm: 0.875rem; --font-size-label-sm: 0.6875rem;
    --line-height-display: 1.1; --line-height-headline: 1.2; --line-height-body: 1.6;
    --font-weight-semibold: 600; --font-weight-bold: 700; --font-weight-extrabold: 800;
    --letter-spacing-tight: -0.02em; --letter-spacing-caps: 0.08em;
    --section-gap-md: clamp(4rem,8vw,6rem); --section-gap-lg: clamp(5rem,10vw,8rem);
    --content-max-width: 1280px; --gutter-desktop: clamp(1.5rem,5vw,2.5rem); --gutter-mobile: clamp(1rem,4vw,1.5rem);
    --shadow-gold-glow-sm: 0 0 10px rgba(242,202,80,0.3);
    --shadow-card: 0 4px 12px rgba(0,0,0,0.3); --shadow-card-hover: 0 8px 24px rgba(0,0,0,0.4),0 0 20px rgba(242,202,80,0.05);
    --transition-fast: 150ms; --transition-medium: 250ms; --easing-smooth: cubic-bezier(0.65,0,0.35,1);
    --glass-blur: 20px; --glass-padding: clamp(1.5rem,4vw,2.5rem);
    --btn-primary-bg: #f2ca50; --btn-primary-text: #3c2f00; --btn-primary-padding: 0.875rem 2rem;
    --btn-outline-border: rgba(212,175,55,0.5); --btn-outline-text: #f2ca50;
    --card-bg: rgba(28,27,29,0.6); --card-border: 0.5px solid rgba(212,175,55,0.15);
    --card-padding: clamp(1.5rem,4vw,2.5rem);
  }
  * { margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color:transparent; }
  body { background-color:var(--bg-page); color:var(--text-primary); font-family:var(--font-body); font-size:var(--font-size-body-md); line-height:var(--line-height-body); -webkit-font-smoothing:antialiased; overflow-x:hidden; }
  h1,h2,h3,h4 { font-family:var(--font-display); color:var(--text-primary); letter-spacing:var(--letter-spacing-tight); word-wrap:break-word; }
  h1 { font-size:var(--font-size-display-lg); line-height:var(--line-height-display); font-weight:var(--font-weight-bold); margin-bottom:1rem; }
  h2 { font-size:var(--font-size-display-md); line-height:var(--line-height-headline); font-weight:var(--font-weight-bold); }
  h3 { font-size:var(--font-size-headline-lg); line-height:var(--line-height-headline); font-weight:var(--font-weight-semibold); font-family:var(--font-body); }
  h4 { font-size:var(--font-size-title-md); line-height:var(--line-height-headline); font-weight:var(--font-weight-semibold); font-family:var(--font-body); }
  p { color:var(--text-secondary); font-size:var(--font-size-body-lg); line-height:var(--line-height-body); }
  strong { color:var(--text-primary); font-weight:var(--font-weight-semibold); }
  a { color:var(--accent-primary); transition:color var(--transition-fast); text-decoration:none; }
  a:hover { color:var(--accent-primary-hover); }
  .gradient-text { background:linear-gradient(135deg,#f2ca50 0%,#d4af37 50%,#ffe088 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .section-container { max-width:var(--content-max-width); margin:0 auto; padding:0 var(--gutter-desktop); width:100%; }
  @media (max-width:768px) { .section-container { padding:0 var(--gutter-mobile); } }
  .skip-link { position:absolute; top:-40px; left:50%; transform:translateX(-50%); background:var(--accent-primary); color:var(--accent-on-primary); padding:8px 16px; z-index:100; border-radius:0 0 0.25rem 0.25rem; font-weight:var(--font-weight-semibold); }
  .skip-link:focus { top:0; }
  .btn-primary { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:var(--btn-primary-bg); color:var(--btn-primary-text); border:none; border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.3); text-decoration:none; min-width:200px; }
  .btn-primary:hover { background:var(--accent-primary-hover); transform:translateY(-2px); box-shadow:var(--shadow-gold-glow-sm); color:var(--btn-primary-text); }
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; text-decoration:none; min-width:200px; }
  .btn-outline:hover { background:rgba(242,202,80,0.08); border-color:rgba(212,175,55,0.8); transform:translateY(-2px); color:var(--btn-outline-text); }
  .card-executive { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); -webkit-backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); transition:all var(--transition-medium) var(--easing-smooth); height:auto; display:flex; flex-direction:column; width:100%; max-width:100%; }
  .card-executive:hover { background:rgba(32,31,33,0.8); border-color:rgba(212,175,55,0.3); transform:translateY(-4px); box-shadow:var(--shadow-card-hover); }
  .section { width:100%; padding:var(--section-gap-md) 0; }
  .section-alt { background:var(--bg-surface-lowest); }
  .section-header { text-align:center; margin-bottom:clamp(2rem,6vw,3rem); }
  .section-title { margin-bottom:1rem; max-width:900px; margin-left:auto; margin-right:auto; }
  .section-subtitle { font-size:var(--font-size-body-lg); color:var(--text-secondary); max-width:700px; margin:0 auto; }
  .breadcrumb-nav { padding:1rem 0; background:var(--bg-surface-lowest); border-bottom:0.5px solid var(--border-gold-filament); width:100%; }
  .breadcrumb-nav ol { list-style:none; display:flex; align-items:center; justify-content:center; gap:0.5rem; flex-wrap:wrap; }
  .breadcrumb-nav a { color:var(--text-secondary); font-size:var(--font-size-body-sm); display:inline-flex; align-items:center; gap:0.25rem; }
  .breadcrumb-nav a:hover { color:var(--accent-primary); }
  .breadcrumb-nav [aria-current="page"] { color:var(--accent-primary); font-weight:var(--font-weight-semibold); }
  .badge { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.5rem 1.25rem; border-radius:9999px; font-size:var(--font-size-body-sm); font-weight:500; letter-spacing:var(--letter-spacing-caps); text-transform:uppercase; margin-bottom:1.5rem; border:0.5px solid var(--border-gold-filament); }
  .grid { display:grid; grid-template-columns:1fr; gap:1.5rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid { grid-template-columns:repeat(3,1fr); } }
  .grid-4 { display:grid; grid-template-columns:1fr; gap:1.5rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid-4 { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid-4 { grid-template-columns:repeat(4,1fr); } }
  .stat-card { text-align:center; padding:1.5rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; }
  .stat-number { font-size:clamp(1.8rem,4vw,2.2rem); font-weight:var(--font-weight-bold); color:var(--accent-primary); display:block; font-family:var(--font-display); }
  .feature-badge { display:inline-flex; align-items:center; gap:0.25rem; background:rgba(242,202,80,0.1); padding:0.25rem 0.75rem; border-radius:9999px; font-size:var(--font-size-body-sm); color:var(--accent-primary); border:0.5px solid var(--border-gold-filament); }
  .feature-tag { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.25rem 0.5rem; border-radius:0.25rem; font-size:var(--font-size-label-sm); border:0.5px solid var(--border-gold-filament); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .insight-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .insight-box-success { background:rgba(76,175,80,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(76,175,80,0.3); }
  .insight-box-teal { background:rgba(128,203,196,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(128,203,196,0.3); }
  .insight-box-purple { background:rgba(187,134,252,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(187,134,252,0.3); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .number-circle { display:inline-flex; align-items:center; justify-content:center; width:2rem; height:2rem; background:linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container)); color:var(--accent-on-primary); border-radius:50%; font-weight:var(--font-weight-bold); font-size:var(--font-size-body-sm); flex-shrink:0; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = {
  FiShield, FiLock, FiEye, FiUserCheck, FiCheck, FiX, FiFileText,
  FiAlertCircle, FiBookOpen, FiCpu, FiHome, FiChevronRight, FiCalendar,
  FiClock, FiStar, FiAward, FiArrowRight, FiTool, FiUsers, FiTarget,
  FiTrendingUp, FiBriefcase, FiCode, FiHeart, FiDollarSign, FiLayers,
  FiGlobe, FiCheckCircle, FiXCircle, FiActivity, FiZap, FiInfo,
  FiSmartphone, FiCopy, FiRefreshCw, FiThumbsUp, FiMonitor, FiSun,
  FiMoon, FiCoffee, FiCompass, FiAnchor, FiMail
};

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const PRIVACY_PRINCIPLES = [
  { icon: "FiLock", title: "Zero Data Storage", description: "We do not store any of your personal information, resume content, or credentials on our servers. Your data exists only in your browser during your active session and is automatically cleared when you close your browser." },
  { icon: "FiShield", title: "Client-Side Processing", description: "All resume creation, editing, and formatting happens entirely within your browser. Your data never leaves your device unless you explicitly choose to download or export your completed resume. We never see your content." },
  { icon: "FiEye", title: "Secure by Architecture", description: "No user accounts, no databases, no tracking mechanisms. Your privacy is built into the fundamental architecture of our platform—not added as an afterthought. This means zero risk of data breaches involving your personal information." },
  { icon: "FiUserCheck", title: "Complete Transparency", description: "We believe in clear, simple privacy practices without hidden clauses or complex legal terminology. What you read in this policy is exactly how our platform operates—no exceptions, no fine print, no surprises." }
];

const PRIVACY_STATS = [
  { icon: "FiX", title: "No Personal Data Stored", description: "Your information stays exclusively on your device at all times" },
  { icon: "FiX", title: "No User Accounts Required", description: "Start building your resume immediately without any sign-up process" },
  { icon: "FiX", title: "No Third-Party Tracking", description: "We respect your browsing privacy—no trackers, no cookies, no analytics" },
  { icon: "FiCheck", title: "Your Resume, Your Control", description: "Complete ownership and control of your data at every stage" }
];

const POLICY_DETAILS = [
  { title: "Information We Collect", content: "We do not collect, store, or process any personal information whatsoever. Your resume data exists only in your browser's temporary memory during your active session and is never transmitted to our servers. We have no databases, no user accounts, and no data storage infrastructure of any kind." },
  { title: "How We Use Your Information", content: "Since we do not collect any personal data, there is simply no usage of your information. All resume processing—including editing, formatting, and PDF generation—happens entirely on your local device through client-side JavaScript. We have no access to your content." },
  { title: "Data Storage & Retention Policy", content: "We maintain a strict zero data retention policy. When you close your browser tab or window, all resume data is automatically and permanently cleared from your browser's memory. We do not maintain databases, server logs containing personal information, or any form of persistent storage for user data." },
  { title: "Third-Party Services & Integrations", content: "We use absolutely minimal third-party services, limited to essential website hosting infrastructure. We do not use analytics platforms, advertising networks, social media trackers, or any service that collects user data. Our hosting provider is configured to minimize server logging." },
  { title: "Your Rights & Control", content: "You have complete, unfettered control over your data at all times. Since we do not store any information, you can use our platform with absolute confidence that your privacy is fully protected. You can create, edit, download, and delete your resume without any data ever leaving your device." },
  { title: "Contact & Questions", content: "If you have any questions about our privacy practices, data handling, or security architecture, we welcome your inquiries. We are committed to complete transparency about our privacy-first approach and are happy to provide technical details about our client-side processing model." }
];

const COMPLIANCE_ITEMS = [
  "No personal data collection—inherently compliant with all privacy regulations",
  "No data processing agreements needed—we process nothing on our servers",
  "No data subject access requests—there is no stored data to access",
  "Zero data breach risk—no databases means nothing to compromise",
  "Privacy by design—built into our architecture from the ground up",
  "GDPR, CCPA, and global privacy regulation compliant by default"
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const PrivacyPolicy = ({ seoData }) => {
  const { currentDate, lastModifiedDate } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const canonicalUrl = "https://professionalresumefree.com/privacy-policy";

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <html lang="en" />
        <title>Privacy Policy: Your Data, Your Control | Professional Resume Free</title>
        <meta name="description" content="We don't store your resume or personal data. Learn how our resume builder protects your privacy with zero data retention, client-side processing, and no user accounts required." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Privacy Policy: Your Data, Your Control" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#131315" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Privacy Policy - Professional Resume Free",
          "description": "Our commitment to your privacy: we do not store any personal data or resume content.",
          "url": canonicalUrl,
          "dateModified": safeLastModifiedDate
        }) }} />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav"><div className="section-container"><ol>
          <li><Link href="/"><FiHome size={14} /> Home</Link></li>
          <li aria-hidden="true"><FiChevronRight size={14} /></li>
          <li><span aria-current="page"><FiShield size={14} /> Privacy Policy</span></li>
        </ol></div></nav>

        {/* Hero Section */}
        <section className="section" id="main-content">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ PRIVACY-FIRST PLATFORM • ZERO DATA STORAGE • NO ACCOUNTS • CLIENT-SIDE PROCESSING</div>
              <h1 style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Your Privacy Is Our <span className="gradient-text">Priority</span>
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                We believe you should own your data completely. That's why <strong>we don't store your resume, personal information, or any content you create.</strong> Everything happens in your browser—your data never leaves your device unless you choose to download it.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Build Your Resume Safely</Link>
                <Link href="/contact" className="btn-outline"><FiMail /> Contact Us</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiShield size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Your Resume Data Never Touches Our Servers—Here's How We Built Privacy Into Our Core</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Unlike most resume builders that require accounts and store your data on their servers, <strong>our platform operates entirely in your browser.</strong> No databases. No user accounts. No server-side processing. When you close your browser, your data is gone—forever. This isn't a feature; it's our fundamental design philosophy.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Our Privacy Principles</h2>
              <p className="section-subtitle">We're committed to a resume builder that respects your data and earns your trust</p>
            </div>
            <div className="grid-4">
              {PRIVACY_PRINCIPLES.map((principle, i) => {
                const IconComponent = ICON_MAP[principle.icon] || FiShield;
                return (
                  <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                    <IconComponent size={32} color="var(--accent-primary)" style={{ marginBottom: '1rem', animation: 'float 3s ease-in-out infinite' }} />
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{principle.title}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{principle.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What We Don't Do */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">What We Don't Do (And Never Will)</h2>
              <p className="section-subtitle">Clear commitments that protect your privacy at every level</p>
            </div>
            <div className="grid-4">
              {PRIVACY_STATS.map((stat, i) => {
                const IconComponent = ICON_MAP[stat.icon] || FiCheck;
                return (
                  <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                    <div style={{ width: '48px', height: '48px', background: stat.icon === 'FiCheck' ? 'rgba(76,175,80,0.1)' : 'rgba(255,180,171,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', border: stat.icon === 'FiCheck' ? '0.5px solid rgba(76,175,80,0.3)' : '0.5px solid rgba(255,180,171,0.3)' }}>
                      <IconComponent size={24} color={stat.icon === 'FiCheck' ? 'var(--success-color)' : 'var(--error-color)'} />
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{stat.title}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{stat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Policy */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Privacy Policy Details</h2>
              <p className="section-subtitle">Clear, transparent information about how we protect your privacy</p>
            </div>
            <div className="grid">
              {POLICY_DETAILS.map((policy, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div className="number-circle">{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{policy.title}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{policy.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">GDPR & Global Privacy Compliance</h2>
              <p className="section-subtitle">Our privacy-first architecture naturally aligns with all major privacy regulations worldwide</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="insight-box-success" style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Our privacy-first approach naturally aligns with major privacy regulations including GDPR, CCPA, and other data protection laws. Since we don't collect or process personal data, you can use our service with confidence knowing your privacy is protected by design—not by compliance paperwork.
                </p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {COMPLIANCE_ITEMS.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                    <FiCheck size={16} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
                <div className="feature-badge" style={{ background: 'rgba(76,175,80,0.1)' }}><FiShield size={14} /> Privacy First</div>
                <div className="feature-badge" style={{ background: 'rgba(76,175,80,0.1)' }}><FiLock size={14} /> GDPR Ready</div>
                <div className="feature-badge" style={{ background: 'rgba(76,175,80,0.1)' }}><FiUserCheck size={14} /> User Control</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Build Your Resume Without Compromising Privacy ✨
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Create a powerful, ATS-friendly resume—without giving up your personal data or creating an account. <strong>100% Free. No Sign-Up Required. Your data stays on your device.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiZap /> Create Your Resume Now</Link>
              <Link href="/contact" className="btn-outline">Ask Questions</Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Explore More Resources</h2>
              <p className="section-subtitle">Discover our free tools and guides designed with the same privacy-first approach</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/resume-templates", text: "Resume Templates", iconName: "FiFileText", desc: "Build privately" },
                { href: "/free-resume-tools", text: "Free Resume Tools", iconName: "FiTool", desc: "No sign-up needed" },
                { href: "/how-to-write-a-resume", text: "Resume Writing Guide", iconName: "FiBookOpen", desc: "Expert guidance" },
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield", desc: "Test compatibility" },
                { href: "/contact", text: "Contact Us", iconName: "FiMail", desc: "Get in touch" },
                { href: "/", text: "Home Page", iconName: "FiHome", desc: "Start building" }
              ].map((link, i) => {
                const IconComponent = ICON_MAP[link.iconName] || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card">
                    <IconComponent size={20} style={{ marginBottom: '0.625rem', color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{link.text}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Privacy-First Platform • Zero Data Storage • Next review: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}</span>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];
  const lastModifiedDate = now.toISOString();
  return { props: { seoData: { currentDate, lastModifiedDate } }, revalidate: 3600 };
}

export default PrivacyPolicy;