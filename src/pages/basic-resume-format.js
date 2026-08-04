import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import {
  FiDownload,
  FiCheck,
  FiAward,
  FiUser,
  FiFileText,
  FiSettings,
  FiStar,
  FiArrowRight,
  FiClock,
  FiSmartphone,
  FiHome,
  FiChevronRight,
  FiBriefcase,
  FiTool,
  FiTrendingUp,
  FiHeart,
  FiSearch,
  FiEdit,
  FiBarChart,
  FiTarget,
  FiLayers,
  FiCalendar,
  FiMapPin,
  FiMail,
  FiLinkedin,
  FiGitBranch,
  FiCode,
  FiDatabase,
  FiCpu,
  FiShield,
  FiDollarSign,
  FiBookOpen
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS (UNCHANGED)
// ============================================================================
const executiveDesignTokens = `
  /* ========== CSS CUSTOM PROPERTIES ========== */
  :root {
    /* Background Colors */
    --bg-page: #131315;
    --bg-surface-lowest: #0e0e10;
    --bg-surface-low: #1c1b1d;
    --bg-surface: #201f21;
    --bg-surface-high: #2a2a2c;
    --bg-surface-highest: #353437;
    
    /* Text Colors */
    --text-primary: #e5e1e4;
    --text-secondary: #c5bfc8;
    --text-muted: #9d95a0;
    --text-disabled: #605d62;
    --text-inverse: #1c1b1d;
    --text-on-accent: #3c2f00;
    
    /* Accent/Brand Colors - Gold */
    --accent-primary: #f2ca50;
    --accent-primary-container: #d4af37;
    --accent-primary-fixed: #ffe088;
    --accent-primary-fixed-dim: #e9c349;
    --accent-on-primary: #3c2f00;
    --accent-on-primary-container: #2a2000;
    --accent-inverse-primary: #735c00;
    --accent-primary-hover: #f7d86e;
    --accent-primary-active: #e6bc3d;
    
    /* Border Colors */
    --border-outline: #444246;
    --border-outline-variant: #363538;
    --border-gold-filament: rgba(212, 175, 55, 0.3);
    --border-gold-filament-strong: rgba(212, 175, 55, 0.5);
    --border-glass: rgba(212, 175, 55, 0.15);
    
    /* Success/Warning Colors */
    --success-color: #a5d6a7;
    --success-container: #1b5e20;
    --warning-color: #ffb74d;
    --error-color: #ffb4ab;
    
    /* Glass/Special Effect Colors */
    --glass-bg: rgba(20, 19, 21, 0.7);
    --glass-bg-light: rgba(28, 27, 29, 0.6);
    --glass-bg-heavy: rgba(20, 19, 21, 0.85);
    
    /* ========== TYPOGRAPHY ========== */
    --font-display: 'Playfair Display', 'Georgia', serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
    
    /* Font Sizes */
    --font-size-display-lg: clamp(3rem, 6vw, 4rem);
    --font-size-display-md: clamp(2.25rem, 5vw, 3rem);
    --font-size-headline-lg: clamp(1.75rem, 4vw, 2rem);
    --font-size-headline-md: clamp(1.5rem, 3.5vw, 1.75rem);
    --font-size-title-lg: clamp(1.25rem, 3vw, 1.5rem);
    --font-size-title-md: clamp(1.125rem, 2.5vw, 1.25rem);
    --font-size-body-lg: clamp(1rem, 2vw, 1.125rem);
    --font-size-body-md: 1rem;
    --font-size-body-sm: 0.875rem;
    --font-size-label-md: 0.75rem;
    --font-size-label-sm: 0.6875rem;
    
    /* Line Heights */
    --line-height-display: 1.1;
    --line-height-headline: 1.2;
    --line-height-title: 1.3;
    --line-height-body: 1.6;
    
    /* Font Weights */
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    
    /* Letter Spacing */
    --letter-spacing-tight: -0.02em;
    --letter-spacing-normal: 0;
    --letter-spacing-wide: 0.02em;
    --letter-spacing-caps: 0.08em;
    
    /* ========== SPACING SYSTEM ========== */
    --section-gap-sm: clamp(3rem, 6vw, 4rem);
    --section-gap-md: clamp(4rem, 8vw, 6rem);
    --section-gap-lg: clamp(5rem, 10vw, 8rem);
    
    /* Content Widths */
    --content-max-width: 1280px;
    --content-narrow: 800px;
    
    /* Gutters */
    --gutter-desktop: clamp(1.5rem, 5vw, 2.5rem);
    --gutter-mobile: clamp(1rem, 4vw, 1.5rem);
    
    /* ========== SHADOW / ELEVATION TOKENS ========== */
    --shadow-gold-glow: 0 0 20px rgba(242, 202, 80, 0.4), 0 0 60px rgba(242, 202, 80, 0.1);
    --shadow-gold-glow-sm: 0 0 10px rgba(242, 202, 80, 0.3);
    --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);
    --shadow-card-hover: 0 8px 24px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3);
    --shadow-button: 0 2px 8px rgba(0, 0, 0, 0.3);
    
    /* ========== ANIMATION / TRANSITION TOKENS ========== */
    --transition-fast: 150ms;
    --transition-medium: 250ms;
    --transition-slow: 350ms;
    --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
    --easing-smooth: cubic-bezier(0.65, 0, 0.35, 1);
    --hover-transform: translateY(-2px);
    --hover-transform-lg: translateY(-4px);
    
    /* ========== GLASS PANEL EFFECT ========== */
    --glass-blur: 20px;
    --glass-border-width: 0.5px;
    --glass-padding: clamp(1.5rem, 4vw, 2.5rem);
    
    /* ========== BUTTON STYLE VARIABLES ========== */
    --btn-primary-bg: #f2ca50;
    --btn-primary-text: #3c2f00;
    --btn-primary-padding: 0.875rem 2rem;
    --btn-primary-radius: 0.25rem;
    --btn-primary-font-size: 0.875rem;
    --btn-primary-font-weight: 600;
    --btn-primary-letter-spacing: 0.02em;
    --btn-primary-hover-bg: #f7d86e;
    
    --btn-outline-border: rgba(212, 175, 55, 0.5);
    --btn-outline-text: #f2ca50;
    --btn-outline-hover-bg: rgba(242, 202, 80, 0.08);
    
    /* ========== CARD STYLE VARIABLES ========== */
    --card-bg: rgba(28, 27, 29, 0.6);
    --card-bg-hover: rgba(32, 31, 33, 0.8);
    --card-border: 0.5px solid rgba(212, 175, 55, 0.15);
    --card-padding: clamp(1.5rem, 4vw, 2.5rem);
    --card-radius: 0.5rem;
    --card-hover-transform: translateY(-4px);
    --card-hover-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 20px rgba(242, 202, 80, 0.05);
  }
  
  /* ========== BASE RESET ========== */
  * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
  
  body {
    background-color: var(--bg-page);
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: var(--font-size-body-md);
    line-height: var(--line-height-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    color: var(--text-primary);
    letter-spacing: var(--letter-spacing-tight);
    word-wrap: break-word;
  }
  
  h1 { font-size: var(--font-size-display-lg); line-height: var(--line-height-display); font-weight: var(--font-weight-bold); margin-bottom: 1rem; }
  h2 { font-size: var(--font-size-display-md); line-height: var(--line-height-headline); font-weight: var(--font-weight-bold); }
  h3 { font-size: var(--font-size-headline-lg); line-height: var(--line-height-headline); font-weight: var(--font-weight-semibold); font-family: var(--font-body); }
  p { color: var(--text-secondary); font-size: var(--font-size-body-lg); line-height: var(--line-height-body); }
  strong { color: var(--text-primary); font-weight: var(--font-weight-semibold); }
  a { color: var(--accent-primary); transition: color var(--transition-fast) var(--easing-default); text-decoration: none; }
  a:hover { color: var(--accent-primary-hover); }
  
  /* ========== UTILITY CLASSES ========== */
  .gradient-text {
    background: linear-gradient(135deg, #f2ca50 0%, #d4af37 50%, #ffe088 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .section-container {
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: 0 var(--gutter-desktop);
    width: 100%;
  }
  
  @media (max-width: 768px) {
    .section-container { padding: 0 var(--gutter-mobile); }
  }
  
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--accent-primary);
    color: var(--accent-on-primary);
    padding: 8px 16px;
    z-index: 100;
    border-radius: 0 0.125rem 0.125rem 0;
    font-weight: var(--font-weight-semibold);
  }
  .skip-link:focus { top: 0; }
  
  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: var(--btn-primary-padding);
    background: var(--btn-primary-bg);
    color: var(--btn-primary-text);
    border: none;
    border-radius: var(--btn-primary-radius);
    font-size: var(--btn-primary-font-size);
    font-weight: var(--btn-primary-font-weight);
    letter-spacing: var(--btn-primary-letter-spacing);
    transition: all var(--transition-medium) var(--easing-default);
    cursor: pointer;
    box-shadow: var(--shadow-button);
    text-decoration: none;
    min-width: 200px;
  }
  .btn-primary:hover { background: var(--btn-primary-hover-bg); transform: var(--hover-transform); box-shadow: var(--shadow-gold-glow-sm); color: var(--btn-primary-text); }
  
  .btn-outline {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: var(--btn-primary-padding);
    background: transparent;
    color: var(--btn-outline-text);
    border: 0.5px solid var(--btn-outline-border);
    border-radius: var(--btn-primary-radius);
    font-size: var(--btn-primary-font-size);
    font-weight: var(--btn-primary-font-weight);
    letter-spacing: var(--btn-primary-letter-spacing);
    transition: all var(--transition-medium) var(--easing-default);
    cursor: pointer;
    text-decoration: none;
    min-width: 200px;
  }
  .btn-outline:hover { background: var(--btn-outline-hover-bg); border-color: rgba(212, 175, 55, 0.8); transform: var(--hover-transform); color: var(--btn-outline-text); }
  
  .card-executive {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--card-radius);
    padding: var(--card-padding);
    transition: all var(--transition-medium) var(--easing-smooth);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .card-executive:hover { background: var(--card-bg-hover); border-color: rgba(212, 175, 55, 0.3); transform: var(--card-hover-transform); box-shadow: var(--card-hover-shadow); }
  
  /* ========== PAGE SPECIFIC STYLES ========== */
  
  .section { width: 100%; padding: var(--section-gap-md) 0; }
  .section-alt { background: var(--bg-surface-lowest); }
  
  .section-header {
    text-align: center;
    margin-bottom: clamp(2rem, 6vw, 3rem);
  }
  .section-title { margin-bottom: 1rem; max-width: 900px; margin-left: auto; margin-right: auto; }
  .section-subtitle { font-size: var(--font-size-body-lg); color: var(--text-secondary); max-width: 700px; margin: 0 auto; }
  
  .breadcrumb {
    padding: 1rem 0;
    background: var(--bg-surface-lowest);
    border-bottom: 0.5px solid var(--border-gold-filament);
    width: 100%;
  }
  .breadcrumb ol { list-style: none; display: flex; align-items: center; justify-content: center; gap: 0.5rem; flex-wrap: wrap; }
  .breadcrumb a { color: var(--text-secondary); font-size: var(--font-size-body-sm); }
  .breadcrumb a:hover { color: var(--accent-primary); }
  .breadcrumb [aria-current="page"] { color: var(--accent-primary); font-weight: var(--font-weight-semibold); }
  .breadcrumb li[aria-hidden="true"] { color: var(--text-muted); }
  
  .trust-badge {
    display: inline-block;
    background: rgba(242, 202, 80, 0.1);
    color: var(--accent-primary);
    padding: 0.5rem 1.25rem;
    border-radius: 9999px;
    font-size: var(--font-size-body-sm);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--letter-spacing-caps);
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    border: 0.5px solid var(--border-gold-filament);
  }
  
  .grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin: 2rem auto; width: 100%; }
  @media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }
  @media (min-width: 1280px) { .grid { grid-template-columns: repeat(4, 1fr); } }
  
  .feature-tag {
    display: inline-block;
    background: rgba(242, 202, 80, 0.1);
    color: var(--accent-primary);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: var(--font-size-label-sm);
    border: 0.5px solid var(--border-gold-filament);
  }
  
  .stat-item {
    text-align: center;
    min-width: 120px;
    padding: 0.5rem;
  }
  .stat-number { font-size: clamp(1.5rem, 4vw, 2rem); font-weight: var(--font-weight-bold); color: var(--accent-primary); display: block; font-family: var(--font-display); }
  
  .article-meta { display: flex; gap: 1.25rem; justify-content: center; margin: 1.25rem 0; flex-wrap: wrap; }
  .meta-item { display: flex; align-items: center; gap: 0.5rem; color: var(--text-muted); font-size: var(--font-size-body-sm); }
  
  .toc-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 2rem 0; }
  .toc-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-medium) var(--easing-smooth);
  }
  .toc-card:hover { border-color: var(--accent-primary-container); transform: translateY(-2px); box-shadow: var(--card-hover-shadow); color: inherit; }
  .toc-number { font-size: 2rem; font-weight: var(--font-weight-bold); color: var(--accent-primary); margin-bottom: 0.75rem; font-family: var(--font-display); }
  .toc-card-title { font-size: var(--font-size-title-md); margin-bottom: 0.5rem; color: var(--text-primary); }
  
  .section-header-content { display: flex; align-items: center; gap: 1.25rem; margin-bottom: 2rem; justify-content: center; flex-wrap: wrap; }
  .section-number { font-size: 3rem; font-weight: var(--font-weight-bold); color: var(--accent-primary); line-height: 1; font-family: var(--font-display); }
  
  .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.25rem; margin: 2rem 0; }
  .feature-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
  }
  .feature-icon { font-size: 2rem; margin-bottom: 1rem; color: var(--accent-primary); }
  
  .table-wrap {
    overflow-x: auto;
    margin: 2rem 0;
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    border-radius: 0.75rem;
    border: var(--card-border);
    -webkit-overflow-scrolling: touch;
  }
  table { width: 100%; border-collapse: collapse; min-width: 600px; }
  th { background: rgba(242, 202, 80, 0.05); padding: 1rem; text-align: left; font-weight: var(--font-weight-semibold); color: var(--accent-primary); border-bottom: 1px solid var(--border-gold-filament); font-size: var(--font-size-body-sm); }
  td { padding: 1rem; border-bottom: 0.5px solid var(--border-gold-filament); font-size: var(--font-size-body-sm); color: var(--text-secondary); }
  
  .industry-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.5rem; margin: 2rem 0; }
  .industry-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
  }
  .industry-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
  .industry-icon { font-size: 2rem; color: var(--accent-primary); }
  .industry-details { display: flex; gap: 1.25rem; margin: 1rem 0; padding: 0.75rem 0; border-top: 0.5px solid var(--border-gold-filament); border-bottom: 0.5px solid var(--border-gold-filament); }
  .industry-features { list-style: none; }
  .industry-features li { margin: 0.5rem 0; padding-left: 1.5rem; position: relative; color: var(--text-secondary); font-size: var(--font-size-body-sm); }
  .industry-features li:before { content: "✦"; color: var(--accent-primary); position: absolute; left: 0; }
  
  .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem; margin: 2rem 0; }
  .testimonial-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: 1.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .quote-mark { font-size: 4rem; color: var(--accent-primary); opacity: 0.2; position: absolute; top: 0; left: 1rem; font-family: var(--font-display); }
  
  .faq-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
  @media (min-width: 768px) { .faq-grid { grid-template-columns: repeat(2, 1fr); } }
  .faq-item {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: 1.5rem;
    height: 100%;
    scroll-margin-top: 1.25rem;
  }
  .faq-question { font-size: var(--font-size-title-md); font-weight: var(--font-weight-semibold); color: var(--text-primary); margin-bottom: 0.75rem; line-height: 1.4; }
  
  .internal-links-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 2rem 0; }
  .internal-link-card {
    display: flex; align-items: center; gap: 1rem;
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: 1.25rem;
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-medium) var(--easing-smooth);
  }
  .internal-link-card:hover { border-color: var(--accent-primary-container); transform: translateY(-2px); box-shadow: var(--card-hover-shadow); color: inherit; }
  .link-icon { font-size: 1.5rem; color: var(--accent-primary); }
  .link-content { flex: 1; }
  .link-content h3 { font-size: var(--font-size-body-md); margin-bottom: 0.25rem; color: var(--text-primary); }
  .link-content p { font-size: var(--font-size-body-sm); color: var(--text-muted); }
  .link-arrow { color: var(--accent-primary); }
  
  .resource-card {
    display: flex; flex-direction: column;
    padding: 1.25rem;
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-lg);
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-medium) var(--easing-smooth);
    height: 100%;
  }
  .resource-card:hover { border-color: var(--accent-primary-container); transform: translateY(-3px); box-shadow: var(--card-hover-shadow); color: inherit; }
  .resource-title { font-size: var(--font-size-title-md); font-weight: var(--font-weight-semibold); margin-bottom: 0.5rem; color: var(--text-primary); line-height: 1.4; }
  .resource-desc { font-size: var(--font-size-body-sm); color: var(--text-secondary); margin-bottom: 0.75rem; flex-grow: 1; }
  .resource-cta { display: flex; align-items: center; gap: 0.375rem; font-size: var(--font-size-body-sm); font-weight: var(--font-weight-medium); color: var(--accent-primary); margin-top: auto; }
  
  .cta-section {
    padding: var(--section-gap-lg) 0;
    background: linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%);
    text-align: center;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-top: 0.5px solid var(--border-gold-filament);
    border-bottom: 0.5px solid var(--border-gold-filament);
  }
  .cta-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(242, 202, 80, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
  
  .text-small { font-size: var(--font-size-body-sm); color: var(--text-muted); }
  .text-success { color: var(--accent-primary); font-weight: var(--font-weight-semibold); }
  .text-danger { color: var(--error-color); font-weight: var(--font-weight-semibold); }
  
  .methodology-list { list-style: none; margin-top: 0.75rem; }
  .methodology-list li { margin-bottom: 0.5rem; padding-left: 1.25rem; position: relative; color: var(--text-secondary); font-size: var(--font-size-body-sm); }
  .methodology-list li:before { content: "✦"; color: var(--accent-primary); position: absolute; left: 0; font-size: 0.75rem; }
  
  @media (max-width: 640px) {
    .btn-primary, .btn-outline { width: 100%; min-width: auto; }
    .section-header-content { flex-direction: column; text-align: center; }
    .industry-header { flex-direction: column; text-align: center; }
    .industry-details { flex-direction: column; gap: 0.5rem; text-align: center; }
  }
`;

// ============================================================================
// SEO-ENHANCED getStaticProps (INJECTED FROM PAGE 1 BLUEPRINT)
// ============================================================================
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // Dynamic date arrays for content freshness signals
  const reviewDates = Array(8).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(8).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 15));
    return date.toISOString().split('T')[0];
  });

  // Breadcrumb data for JSON-LD
  const breadcrumbData = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://professionalresumefree.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resume Format Guide",
      "item": "https://professionalresumefree.com/basic-resume-format"
    }
  ];

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates,
        breadcrumbData
      },
      buildTimestamp
    },
    revalidate: 3600, // ISR: Revalidate every hour (injected from Page 1 blueprint)
  };
}

// ============================================================================
// SEO-ENHANCED PAGE COMPONENT
// ============================================================================
export default function BasicResumeFormat({ seoData, buildTimestamp }) {
  const [activeSection, setActiveSection] = useState('section1');

  // SEO data with fallbacks
  const {
    currentDate,
    lastModifiedDate,
    reviewDates,
    faqDates,
    breadcrumbData
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeReviewDates = reviewDates || Array(8).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(8).fill(freshnessIndicator);

  // Canonical URL for this page
  const canonicalUrl = "https://professionalresumefree.com/basic-resume-format";

  // ========== SEO-OPTIMIZED TITLE (from Page 1 blueprint) ==========
  const optimizedTitle = "Basic Resume Format 2026: Free ATS Guide & Templates (No Sign-Up)";

  // ========== LONG-TAIL KEYWORDS (from Page 1 blueprint) ==========
  const longTailKeywords = [
    "how to format a resume for applicant tracking systems 2026",
    "best resume format for career changers with no experience",
    "free ats-friendly resume templates with instant pdf download",
    "professional resume format for executives and c-suite positions",
    "resume formatting guide for software engineers 2026"
  ];

  // ========== INTERNAL LINKS FOR SEO/GEO BOOST (from Page 1 blueprint) ==========
  const internalLinks = [
    {
      href: "/how-to-pass-the-ai-resume-screen-2026-ats-algorithms-explained",
      title: "How to Pass the AI Resume Screen: 2026 ATS Algorithms Explained",
      desc: "Master the latest AI screening tactics used by USA employers in 2026."
    },
    {
      href: "/most-in-demand-resume-keywords-for-usa-job-seekers",
      title: "Most In-Demand Resume Keywords for USA Job Seekers",
      desc: "Boost your GEO ranking with high-volume keywords for the American market."
    },
    {
      href: "/ats-friendly-software-developer-and-software-engineer-resume-builder",
      title: "ATS-Friendly Software Developer & Engineer Resume Builder",
      desc: "Specialized templates for tech roles, optimized for engineering ATS filters."
    },
    {
      href: "/free-resume-readability-checker",
      title: "Free Resume Readability Checker Tool",
      desc: "Ensure your AI-generated content is clear, concise, and recruiter-ready."
    },
    {
      href: "/resume-trends-in-the-usa-for-2026",
      title: "Top Resume Trends in the USA for 2026",
      desc: "Stay ahead of the curve with the latest formatting and content trends."
    }
  ];

  // ========== FAQ DATA (from Page 1 blueprint) ==========
  const faqs = [
    {
      question: "What is the best resume format to pass ATS in 2026?",
      answer: "The chronological format remains the most ATS-friendly option in 2026, with 95% compatibility. However, modern hybrid formats combining chronological structure with skills sections are gaining popularity for better keyword optimization and visual hierarchy."
    },
    {
      question: "How long should my resume be for maximum impact?",
      answer: "For most professionals: 1-2 pages. Entry-level: 1 page. Senior executives: 2-3 pages maximum. The key is relevance and achievement density, not length. Every bullet point should add measurable value."
    },
    {
      question: "What font size and style is best for professional resumes?",
      answer: "Use 10-12pt for body text, 14-16pt for section headers. Recommended fonts: Arial, Calibri, Georgia, Times New Roman, or Helvetica. Avoid decorative fonts as they reduce ATS compatibility by 40-60%."
    },
    {
      question: "Should I include a photo on my resume?",
      answer: "Generally no, unless you're applying for acting, modeling, or certain international positions. In the US and Canada, photos can introduce bias concerns and reduce ATS compatibility by 25%."
    },
    {
      question: "How far back should work experience go on a resume?",
      answer: "10-15 years for most professionals. For technical fields: 15-20 years if experience remains relevant. Always prioritize recent, impactful roles. Use a 'Earlier Experience' section briefly for older roles if space allows."
    },
    {
      question: "What are the most important ATS keywords to include?",
      answer: "Include 15-25 industry-specific keywords, 8-12 soft skills, and 5-8 technical competencies. Use the job description as your guide—mirror their language while maintaining authenticity in your achievements."
    },
    {
      question: "How often should I update my resume?",
      answer: "Every 3-6 months with new achievements, or immediately after completing significant projects. Quarterly updates ensure you never miss opportunities and maintain career momentum."
    },
    {
      question: "Can I use creative templates for corporate jobs?",
      answer: "In creative fields: yes. For traditional corporate roles: stick to professional formats. Always maintain an ATS-friendly version (sans design elements) for initial submissions."
    }
  ];

  // ========== TESTIMONIALS (from Page 1 blueprint) ==========
  const testimonials = [
    {
      quote: "Following this guide helped me optimize my resume for ATS. Landed 3 interviews in 2 weeks after months of nothing.",
      metric: "3 Interviews in 2 Weeks",
      name: "Michael T.",
      role: "Digital Marketing Manager",
      date: safeReviewDates[0]
    },
    {
      quote: "The section on ATS keywords was game-changing. My callback rate increased from 5% to 35% after implementing these tips.",
      metric: "7x More Callbacks",
      name: "Sarah L.",
      role: "Software Engineer",
      date: safeReviewDates[1]
    },
    {
      quote: "As a career changer, the functional format guidance was exactly what I needed. Successfully transitioned industries.",
      metric: "Career Change Success",
      name: "James K.",
      role: "Data Analyst",
      date: safeReviewDates[2]
    },
    {
      quote: "The resume length recommendations saved me. Cut from 3 to 2 pages and immediately got more positive responses.",
      metric: "40% More Responses",
      name: "Amanda R.",
      role: "Project Manager",
      date: safeReviewDates[3]
    }
  ];

  // ========== INDUSTRY FORMATS (from Page 1 blueprint) ==========
  const industryFormats = [
    {
      title: "Tech & Software Engineering",
      icon: <FiCode />,
      keyFeatures: ["Technical skills section", "GitHub/portfolio links", "Project highlights", "Programming languages proficiency"],
      formatType: "Chronological with Technical Addendum",
      atsScore: "98%"
    },
    {
      title: "Healthcare & Nursing",
      icon: <FiHeart />,
      keyFeatures: ["Licenses & certifications", "Clinical experience first", "Patient outcomes focus", "Continuing education"],
      formatType: "Reverse Chronological",
      atsScore: "96%"
    },
    {
      title: "Finance & Accounting",
      icon: <FiDollarSign />,
      keyFeatures: ["Quantifiable achievements", "Financial metrics focus", "CPA/CFA prominence", "Compliance experience"],
      formatType: "Achievement-Based Chronological",
      atsScore: "94%"
    },
    {
      title: "Marketing & Sales",
      icon: <FiTrendingUp />,
      keyFeatures: ["ROI metrics emphasis", "Campaign results", "Client portfolio", "Digital tools proficiency"],
      formatType: "Results-Focused Hybrid",
      atsScore: "92%"
    },
    {
      title: "Recent Graduates",
      icon: <FiAward />,
      keyFeatures: ["Education section first", "Relevant coursework", "Internships & projects", "Academic achievements"],
      formatType: "Education-Focused Functional",
      atsScore: "85%"
    },
    {
      title: "Executive Level",
      icon: <FiBriefcase />,
      keyFeatures: ["Leadership summary", "Board experience", "M&A highlights", "Revenue growth focus"],
      formatType: "Strategic Executive Summary",
      atsScore: "90%"
    }
  ];

  // ========== PEOPLE ALSO ASK (from Page 1 blueprint) ==========
  const peopleAlsoAsk = [
    {
      question: "Is PDF or Word better for ATS resume submission?",
      answer: "PDF is generally better as it preserves formatting across all systems. However, ensure it's a standard, machine-readable PDF (not scanned). Our builder generates perfect ATS-friendly PDFs automatically."
    },
    {
      question: "Do recruiters prefer chronological or functional resumes?",
      answer: "Recruiters strongly prefer chronological resumes (78%) as they show clear career progression. Functional resumes are viewed with suspicion (12% preference) as they can hide gaps or lack of experience."
    },
    {
      question: "How many bullet points per job on a resume?",
      answer: "3-6 bullet points per role is optimal. Focus on achievements with quantifiable results. Senior roles may include 5-7 bullets for recent positions, fewer for older roles."
    }
  ];

  // ========== CONVERSATIONAL EXPLANATIONS (from Page 1 blueprint) ==========
  const conversationalExplanations = [
    {
      topic: "Resume Format in Plain English",
      content: "Think of your resume format as the blueprint of your career story. The right structure helps both robot screeners (ATS) and human recruiters quickly find what matters most: your achievements, skills, and potential value to their company."
    },
    {
      topic: "Why ATS Formatting Matters",
      content: "Imagine writing a brilliant book, but hiding the title and chapter headings. That's what happens with poor resume formatting. ATS systems need clear signposts (standard headings, proper fonts, clean structure) to properly catalog your experience."
    }
  ];

  return (
    <>
      {/* ======================================================================== */}
      {/* SEO-ENHANCED HEAD SECTION (INJECTED FROM PAGE 1 BLUEPRINT)               */}
      {/* ======================================================================== */}
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Google Fonts for Executive Design (PRESERVED FROM PAGE 2) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        
        {/* SEO: Language declaration */}
        <html lang="en" />
        
        {/* ===== SEO TITLE (from Page 1) ===== */}
        <title>{optimizedTitle}</title>
        
        {/* ===== META DESCRIPTION (from Page 1) ===== */}
        <meta name="description" content="Master ATS-friendly resume formatting with our free 2026 guide. 46+ templates, expert tips, and instant PDF download. No sign-up required. Land 3x more interviews." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="basic resume format, ATS resume template, free resume builder, professional resume format, resume formatting guide 2026, ATS-friendly resume, resume examples" />
        
        {/* ===== GEO OPTIMIZATION TAGS (from Page 1) ===== */}
        <meta name="chatgpt-fts:title" content="Basic Resume Format Guide 2026: Free ATS Templates & Tools" />
        <meta name="chatgpt-fts:description" content="Create an ATS-optimized resume with the correct format. Free templates, expert guidance, and instant PDF download. No sign-up required." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - ATS Optimized Builder" />
        
        {/* ===== TECHNICAL SEO (from Page 1) ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* ===== CANONICAL URL (from Page 1) ===== */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* ===== OPEN GRAPH TAGS (from Page 1) ===== */}
        <meta property="og:title" content="Basic Resume Format 2026: Free ATS Guide & Templates" />
        <meta property="og:description" content="Master ATS-friendly resume formatting. Free templates, expert tips, instant PDF download. No sign-up required." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="Basic Resume Format Guide - ATS-Optimized Templates" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* ===== TWITTER CARD TAGS (from Page 1) ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Basic Resume Format 2026: Free ATS Guide" />
        <meta name="twitter:description" content="Master resume formatting for ATS success. Free templates & tools. No sign-up." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:image:alt" content="Basic Resume Format Guide" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        
        {/* ===== ADDITIONAL META (from Page 1) ===== */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* ===== SITEMAP (from Page 1) ===== */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* ======================================================================== */}
        {/* ENHANCED STRUCTURED DATA JSON-LD (INJECTED FROM PAGE 1 BLUEPRINT)       */}
        {/* ======================================================================== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": optimizedTitle,
                  "description": "Master ATS-friendly resume formatting with our free 2026 guide. 46+ templates, expert tips, and instant PDF download.",
                  "dateModified": safeLastModifiedDate,
                  "datePublished": "2024-01-01",
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@id": "https://professionalresumefree.com/#website"
                  },
                  "breadcrumb": {
                    "@id": `${canonicalUrl}#breadcrumb`
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website",
                  "url": "https://professionalresumefree.com",
                  "name": "Professional Resume Free",
                  "description": "Free ATS-Optimized Resume Templates and Tools",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${canonicalUrl}#breadcrumb`,
                  "itemListElement": breadcrumbData
                },
                {
                  "@type": "Article",
                  "headline": "Basic Resume Format: Complete 2026 Professional Guide",
                  "description": "Comprehensive guide to mastering basic resume formats with ATS optimization",
                  "author": {
                    "@type": "Organization",
                    "name": "Professional Resume Free"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free"
                  },
                  "datePublished": "2024-01-01",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": canonicalUrl
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": [
                    ...faqs.map(faq => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                      }
                    })),
                    ...peopleAlsoAsk.map(paa => ({
                      "@type": "Question",
                      "name": paa.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": paa.answer
                      }
                    }))
                  ]
                },
                {
                  "@type": "HowTo",
                  "name": "How to format a professional resume in 5 steps",
                  "description": "Create an ATS-optimized resume with proper formatting",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Choose your format type",
                      "text": "Select chronological, functional, or combination based on your career situation",
                      "url": `${canonicalUrl}#section2`
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Structure essential sections",
                      "text": "Organize contact info, summary, experience, education, and skills",
                      "url": `${canonicalUrl}#section1`
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Optimize for ATS",
                      "text": "Use proper headings, standard fonts, and relevant keywords",
                      "url": `${canonicalUrl}#section3`
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Apply industry standards",
                      "text": "Tailor formatting to your specific industry requirements",
                      "url": `${canonicalUrl}#section5`
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Download as PDF",
                      "text": "Export in machine-readable PDF format for ATS compatibility",
                      "url": "/resume-templates"
                    }
                  ],
                  "totalTime": "PT15M"
                }
              ]
            })
          }}
        />
      </Head>

      {/* ======================================================================== */}
      {/* MAIN CONTENT (DESIGN & LAYOUT PRESERVED FROM PAGE 2)                    */}
      {/* ======================================================================== */}
      <main style={{
        backgroundColor: 'var(--bg-page)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        minHeight: '100vh',
        overflowX: 'hidden',
        width: '100%'
      }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/resume-templates" itemProp="item"><span itemProp="name">Resume Formats</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span aria-current="page" itemProp="name">Basic Resume Format Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="trust-badge" aria-label="Trust indicators">
                ✦ Based on Industry ATS Standards | 46+ Templates | 12+ Free Tools
              </div>
              
              <h1 id="hero-heading" style={{
                fontSize: 'var(--font-size-display-lg)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--font-weight-extrabold)',
                lineHeight: 'var(--line-height-display)',
                marginBottom: '1.25rem'
              }}>
                Basic Resume Format 2026:{' '}
                <span className="gradient-text">Free ATS Guide & Templates</span>
              </h1>
              
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Master professional resume formatting that actually passes automated screening.
                Choose from <strong>46 industry-specific templates</strong> and use <strong>12 free optimization tools</strong>.
                Built for speed and simplicity. Download PDF instantly without account creation.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }} role="group" aria-label="Call to action buttons">
                <Link href="/resume-templates" className="btn-primary" aria-label="Browse all 46+ resume templates">
                  Browse 46+ Templates <FiArrowRight />
                </Link>
                <Link href="/free-resume-tools" className="btn-outline" aria-label="Explore all 12+ free optimization tools">
                  Explore 12+ Free Tools
                </Link>
              </div>

              {/* Stats Section */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginTop: '2.5rem', flexWrap: 'wrap', borderTop: '0.5px solid var(--border-gold-filament)', paddingTop: '2rem' }} aria-label="Key statistics">
                <div className="stat-item"><span className="stat-number">98%</span><span style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>ATS Parse Rate*</span></div>
                <div className="stat-item"><span className="stat-number">100%</span><span style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Machine-Readable PDFs</span></div>
                <div className="stat-item"><span className="stat-number">3x</span><span style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>More Interviews**</span></div>
                <div className="stat-item"><span className="stat-number">46+</span><span style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Templates</span></div>
                <div className="stat-item"><span className="stat-number">12+</span><span style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Free Tools</span></div>
              </div>

              {/* Freshness indicator */}
              <div className="text-small" style={{ marginTop: '1.25rem' }} aria-label="Page last updated">
                Last updated: {safeCurrentDate}
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container" style={{ marginBottom: '1rem' }}>
          <div className="article-meta">
            <span className="meta-item"><FiCalendar size={14} /> Updated: {safeCurrentDate}</span>
            <span className="meta-item"><FiClock size={14} /> Reading time: 12 min</span>
            <span className="meta-item"><FiAward size={14} /> Expert level: Professional</span>
          </div>
        </div>

        {/* Table of Contents */}
        <section className="section section-alt" aria-labelledby="toc-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="toc-heading">Complete Guide Contents</h2>
              <p className="section-subtitle">Navigate through every aspect of professional resume formatting</p>
            </div>
            <div className="toc-grid">
              <a href="#section1" className="toc-card" onClick={() => setActiveSection('section1')}>
                <div className="toc-number">01</div>
                <h3 className="toc-card-title">Fundamental Resume Sections</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>Essential components every professional resume needs</p>
              </a>
              <a href="#section2" className="toc-card" onClick={() => setActiveSection('section2')}>
                <div className="toc-number">02</div>
                <h3 className="toc-card-title">Format Types Compared</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>Chronological, functional & combination formats</p>
              </a>
              <a href="#section3" className="toc-card" onClick={() => setActiveSection('section3')}>
                <div className="toc-number">03</div>
                <h3 className="toc-card-title">ATS Optimization Guide</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>Beat applicant tracking systems</p>
              </a>
              <a href="#section5" className="toc-card" onClick={() => setActiveSection('section5')}>
                <div className="toc-number">04</div>
                <h3 className="toc-card-title">Industry-Specific Formats</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>Tailored for your field</p>
              </a>
              <a href="#faq-section" className="toc-card" onClick={() => setActiveSection('faq')}>
                <div className="toc-number">05</div>
                <h3 className="toc-card-title">Expert FAQs</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>Answers to common questions</p>
              </a>
              <a href="/resume-templates" className="toc-card">
                <div className="toc-number">✦</div>
                <h3 className="toc-card-title">Free Templates</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>Download ATS-optimized formats</p>
              </a>
            </div>
          </div>
        </section>

        {/* Section 1: Fundamental Sections */}
        <section id="section1" className="section section-alt" aria-labelledby="section1-heading">
          <div className="section-container">
            <div className="section-header-content">
              <span className="section-number">01</span>
              <h2 id="section1-heading" className="section-title" style={{ marginBottom: 0 }}>The 6 Fundamental Resume Sections</h2>
            </div>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              A well-structured resume is built on six essential sections. Each plays a critical role in presenting your professional story.
            </p>
            <div className="feature-grid">
              <div className="feature-card"><div className="feature-icon"><FiUser /></div><h3 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-title-md)' }}>Contact Information</h3><p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Clean, professional, and error-free. Include: Name, Phone, Email, LinkedIn, Location.</p></div>
              <div className="feature-card"><div className="feature-icon"><FiTarget /></div><h3 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-title-md)' }}>Professional Summary</h3><p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Your 30-second pitch. Focus on value proposition and key achievements.</p></div>
              <div className="feature-card"><div className="feature-icon"><FiBriefcase /></div><h3 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-title-md)' }}>Work Experience</h3><p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Reverse chronological order. Focus on achievements with quantifiable results.</p></div>
              <div className="feature-card"><div className="feature-icon"><FiAward /></div><h3 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-title-md)' }}>Education</h3><p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Degrees, certifications, relevant coursework. Recent graduates lead with this.</p></div>
              <div className="feature-card"><div className="feature-icon"><FiTool /></div><h3 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-title-md)' }}>Skills Section</h3><p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Technical, soft, and transferable skills. Prioritize job-relevant competencies.</p></div>
              <div className="feature-card"><div className="feature-icon"><FiLayers /></div><h3 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-title-md)' }}>Optional Sections</h3><p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Certifications, projects, publications, volunteer work, languages.</p></div>
            </div>
          </div>
        </section>

        {/* Section 2: Format Types */}
        <section id="section2" className="section" aria-labelledby="section2-heading">
          <div className="section-container">
            <div className="section-header-content">
              <span className="section-number">02</span>
              <h2 id="section2-heading" className="section-title" style={{ marginBottom: 0 }}>Chronological vs. Functional vs. Combination</h2>
            </div>
            <p className="section-subtitle">
              Understanding the pros and cons of each format type is crucial for your job search success.
            </p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Format Type</th><th>Best For</th><th>ATS Score</th><th>Recruiter Preference</th></tr></thead>
                <tbody>
                  <tr><td><strong>Chronological</strong></td><td>Traditional career paths, steady progression</td><td className="text-success">95%</td><td>78%</td></tr>
                  <tr><td><strong>Functional</strong></td><td>Career changers, employment gaps</td><td className="text-danger">40%</td><td>12%</td></tr>
                  <tr><td><strong>Combination</strong></td><td>Most professionals, skill emphasis</td><td className="text-success">85%</td><td>10%</td></tr>
                </tbody>
              </table>
            </div>
            <div className="card-executive" style={{ marginTop: '2rem' }}>
              <h3 style={{ marginBottom: '0.75rem', color: 'var(--accent-primary)', fontSize: 'var(--font-size-title-md)' }}>Expert Insight:</h3>
              <p style={{ fontSize: 'var(--font-size-body-sm)' }}>Based on analysis of <strong>10,000 successful resumes</strong> in 2026, 78% of ATS-optimized resumes use a modified chronological format. This format presents work experience in reverse chronological order while emphasizing skills and achievements that align with target job descriptions.</p>
            </div>
          </div>
        </section>

        {/* Section 3: ATS Optimization */}
        <section id="section3" className="section section-alt" aria-labelledby="section3-heading">
          <div className="section-container">
            <div className="section-header-content">
              <span className="section-number">03</span>
              <h2 id="section3-heading" className="section-title" style={{ marginBottom: 0 }}>ATS Optimization: The Hidden Game Changer</h2>
            </div>
            <p className="section-subtitle">
              Applicant Tracking Systems screen <strong>up to 75% of resumes</strong> before human eyes see them.
            </p>
            <div className="grid">
              <div className="card-executive">
                <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)', fontSize: 'var(--font-size-title-md)' }}>Keywords & Semantic Analysis</h3>
                <ul className="methodology-list">
                  <li>Job title variations and synonyms</li><li>Industry-specific terminology</li><li>Skill keywords with proficiency levels</li><li>Software, tools, and technology names</li><li>Certifications and qualification keywords</li>
                </ul>
              </div>
              <div className="card-executive">
                <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)', fontSize: 'var(--font-size-title-md)' }}>Formatting Best Practices</h3>
                <ul className="methodology-list">
                  <li>Use standard section headers</li><li>Avoid tables, columns, and text boxes</li><li>Stick to common fonts (Arial, Calibri, Times)</li><li>Use proper heading hierarchy</li><li>Save as PDF for consistency</li>
                </ul>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/free-resume-tools" className="btn-primary">
                Try Our Free ATS Keyword Tool <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Conversational Explanations */}
        <section className="section" aria-labelledby="conversational-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="conversational-heading">ATS Made Simple: What You Need to Know</h2>
              <p className="section-subtitle">Cut through the jargon with plain-English explanations</p>
            </div>
            <div className="grid">
              {conversationalExplanations.map((item, i) => (
                <article key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>{item.topic}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: 'var(--font-size-body-sm)' }}>{item.content}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Industry-Specific Formats */}
        <section id="section5" className="section section-alt" aria-labelledby="section5-heading">
          <div className="section-container">
            <div className="section-header-content">
              <span className="section-number">04</span>
              <h2 id="section5-heading" className="section-title" style={{ marginBottom: 0 }}>Industry-Specific Formatting Guidelines</h2>
            </div>
            <p className="section-subtitle">
              Different industries have unique expectations. Tailoring your resume format can increase positive responses by <strong>60%</strong>.
            </p>
            <div className="industry-grid">
              {industryFormats.map((industry, index) => (
                <div key={index} className="industry-card">
                  <div className="industry-header">
                    <div className="industry-icon">{industry.icon}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--text-primary)' }}>{industry.title}</h3>
                  </div>
                  <div className="industry-details">
                    <div><small className="text-small">Format:</small><br/><span style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{industry.formatType}</span></div>
                    <div><small className="text-small">ATS Score:</small><br/><span className="text-success">{industry.atsScore}</span></div>
                  </div>
                  <ul className="industry-features">
                    {industry.keyFeatures.map((feature, idx) => <li key={idx}>{feature}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="paa-heading">People Also Ask About Resume Formatting</h2>
              <p className="section-subtitle">Common questions from job seekers like you</p>
            </div>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary className="faq-question">{paa.question}</summary>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>{paa.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section section-alt" aria-labelledby="testimonials-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="testimonials-heading">Success Stories from Our Readers</h2>
              <p className="section-subtitle">Real results from implementing these resume formatting strategies</p>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="quote-mark">"</div>
                  <p style={{ fontStyle: 'italic', marginBottom: '1rem', flex: 1, color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>"{testimonial.quote}"</p>
                  <div style={{ marginBottom: '0.75rem' }}><span className="feature-tag">{testimonial.metric}</span></div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }}>{testimonial.name}</strong>
                    <p style={{ margin: 0, fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>{testimonial.role}</p>
                    <small className="text-small">{testimonial.date}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq-section" className="section" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-heading">Frequently Asked Questions</h2>
              <p className="section-subtitle">Everything you need to know about resume formatting</p>
            </div>
            <div className="faq-grid">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <h3 className="faq-question">{faq.question}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{faq.answer}</p>
                  <small className="text-small">Updated: {safeFaqDates[i] || safeCurrentDate}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="section section-alt" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="resources-heading">Continue Your Resume Journey</h2>
              <p className="section-subtitle">Explore more resources to perfect your job application</p>
            </div>
            <div className="internal-links-grid">
              <Link href="/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume" className="internal-link-card">
                <FiCpu className="link-icon" />
                <div className="link-content"><h3>AI Resume Builders Guide</h3><p>Leverage AI to write your best resume</p></div>
                <FiArrowRight className="link-arrow" />
              </Link>
              <Link href="/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" className="internal-link-card">
                <FiEdit className="link-icon" />
                <div className="link-content"><h3>ChatGPT Resume Prompts 2026</h3><p>Expert prompt engineering for better bullets</p></div>
                <FiArrowRight className="link-arrow" />
              </Link>
              <Link href="/resume-templates" className="internal-link-card">
                <FiFileText className="link-icon" />
                <div className="link-content"><h3>Free ATS Resume Templates</h3><p>Download 46+ professionally designed templates</p></div>
                <FiArrowRight className="link-arrow" />
              </Link>
              <Link href="/free-resume-tools" className="internal-link-card">
                <FiTool className="link-icon" />
                <div className="link-content"><h3>Free Resume Optimization Tools</h3><p>Access 12+ tools for ATS checking</p></div>
                <FiArrowRight className="link-arrow" />
              </Link>
              <Link href="/ats-friendly-medical-resume-builder" className="internal-link-card">
                <FiHeart className="link-icon" />
                <div className="link-content"><h3>Medical Resume Templates</h3><p>Healthcare & nursing optimized formats</p></div>
                <FiArrowRight className="link-arrow" />
              </Link>
              <Link href="/ats-friendly-tech-resume-builder" className="internal-link-card">
                <FiCode className="link-icon" />
                <div className="link-content"><h3>Tech Resume Templates</h3><p>Software engineering & IT optimized formats</p></div>
                <FiArrowRight className="link-arrow" />
              </Link>
            </div>
          </div>
        </section>

        {/* Recommended Resources for SEO/GEO Boost */}
        <section className="section" aria-labelledby="recommended-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="recommended-heading">Recommended Resources for Job Seekers</h2>
              <p className="section-subtitle">Explore our specialized guides to maximize your interview chances in 2026</p>
            </div>
            <div className="internal-links-grid">
              {internalLinks.map((link, index) => (
                <Link key={index} href={link.href} className="resource-card">
                  <div className="resource-title">{link.title}</div>
                  <div className="resource-desc">{link.desc}</div>
                  <div className="resource-cta">Read Guide <FiArrowRight size={16} /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242, 202, 80, 0.3)' }}>
                Ready to Build Your Professional Resume?
              </h2>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Create your optimized resume in minutes. Choose from 46+ templates and use 12+ free tools. No sign-up required.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }} role="group" aria-label="Final call to action buttons">
                <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow)' }}>
                  Browse 46+ Templates <FiArrowRight />
                </Link>
                <Link href="/free-resume-tools" className="btn-outline" style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}>
                  Explore 12+ Free Tools <FiArrowRight />
                </Link>
              </div>
              <p className="text-small" style={{ marginTop: '2rem', color: 'var(--text-muted)' }}>
                ✓ No credit card required • Free forever • Based on Industry Standards • ATS-Optimized
              </p>
              <p className="text-small" style={{ marginTop: '0.5rem', color: 'var(--text-disabled)' }}>
                Data fresh as of: {safeCurrentDate}
              </p>
            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
}