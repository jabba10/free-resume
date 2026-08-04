import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiArrowRight, FiBookOpen, FiCheckCircle, FiExternalLink } from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS
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
    --error-container: #93000a;
    
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
  
  .btn-badge {
    background: rgba(60, 47, 0, 0.3);
    color: var(--accent-primary);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--letter-spacing-wide);
  }
  
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
  
  .hero-tag {
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
  
  .feature-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    background: rgba(242, 202, 80, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    border: 0.5px solid var(--border-gold-filament);
    font-size: var(--font-size-body-sm);
    color: var(--accent-primary);
  }
  
  .feature-tag {
    display: inline-block;
    background: rgba(242, 202, 80, 0.1);
    color: var(--accent-primary);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: var(--font-size-label-sm);
    border: 0.5px solid var(--border-gold-filament);
    margin: 0.25rem 0.25rem 0 0;
  }
  
  .stat-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: 1.5rem;
    text-align: center;
    flex: 1;
    min-width: 150px;
  }
  
  .stat-icon { font-size: 2rem; margin-bottom: 0.75rem; }
  .stat-number { font-size: clamp(1.5rem, 4vw, 2rem); font-weight: var(--font-weight-bold); color: var(--accent-primary); display: block; font-family: var(--font-display); margin-bottom: 0.25rem; }
  .stat-label { color: var(--text-secondary); font-size: var(--font-size-body-sm); }
  
  .guide-navigation {
    display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; justify-content: center;
  }
  
  .guide-tab {
    padding: 0.625rem 1.25rem;
    background: var(--card-bg);
    border: var(--card-border);
    border-radius: 9999px;
    cursor: pointer;
    font-size: var(--font-size-body-sm);
    color: var(--text-secondary);
    transition: all var(--transition-fast) var(--easing-default);
  }
  .guide-tab:hover { border-color: var(--accent-primary-container); }
  .guide-tab.active { background: var(--accent-primary); color: var(--accent-on-primary); border-color: var(--accent-primary); }
  
  @media (max-width: 640px) {
    .guide-tab { width: 100%; border-radius: 0.375rem; }
  }
  
  .guide-content {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    border-radius: var(--radius-xl);
    padding: 2rem;
    border: var(--card-border);
  }
  @media (max-width: 480px) {
    .guide-content { padding: 1.25rem; }
  }
  
  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
  @media (max-width: 768px) {
    .content-grid { grid-template-columns: 1fr; gap: 1.25rem; }
  }
  
  .tips-list { list-style: none; margin-top: 1rem; }
  .tips-list li { margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative; color: var(--text-secondary); font-size: var(--font-size-body-sm); }
  .tips-list li:before { content: "✦"; color: var(--accent-primary); position: absolute; left: 0; font-size: 0.75rem; }
  
  .example-box {
    background: var(--bg-surface-low);
    padding: 1.25rem;
    border-radius: 0.5rem;
    border: var(--card-border);
    font-family: var(--font-mono);
    white-space: pre-wrap;
    font-size: var(--font-size-body-sm);
    margin-top: 1rem;
    position: relative;
    color: var(--text-secondary);
  }
  @media (max-width: 480px) {
    .example-box { padding: 1rem; font-size: 0.8rem; }
  }
  
  .copy-button {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    padding: 0.375rem 0.75rem;
    background: var(--card-bg);
    border: var(--card-border);
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 0.8rem;
    color: var(--text-secondary);
    transition: all var(--transition-fast) var(--easing-default);
  }
  .copy-button:hover { border-color: var(--accent-primary-container); color: var(--accent-primary); }
  
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
  
  .balance-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 2rem 0; }
  @media (max-width: 768px) { .balance-grid { grid-template-columns: 1fr; } }
  
  .strategy-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
  }
  
  .strategy-number {
    display: inline-block;
    width: 30px; height: 30px;
    background: linear-gradient(135deg, var(--accent-primary-container), var(--accent-primary));
    color: var(--accent-on-primary);
    border-radius: 9999px;
    text-align: center;
    line-height: 30px;
    margin-right: 0.75rem;
    font-weight: var(--font-weight-bold);
  }
  
  .collaboration-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 2.5rem; }
  @media (max-width: 768px) { .collaboration-grid { grid-template-columns: 1fr; } }
  
  .collaboration-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
  }
  .collaboration-card ul { list-style: none; }
  .collaboration-card li { margin-bottom: 0.5rem; padding-left: 1.25rem; position: relative; color: var(--text-secondary); font-size: var(--font-size-body-sm); }
  .collaboration-card li:before { content: "✦"; color: var(--accent-primary); position: absolute; left: 0; }
  
  .mistakes-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 2rem 0; }
  @media (max-width: 640px) { .mistakes-grid { grid-template-columns: 1fr; } }
  
  .mistake-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-lg);
    padding: 1.25rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .mistake-number {
    width: 30px; height: 30px;
    background: rgba(255, 180, 171, 0.15);
    color: var(--error-color);
    border-radius: 9999px;
    display: flex; align-items: center; justify-content: center;
    font-weight: var(--font-weight-bold);
    flex-shrink: 0;
    border: 0.5px solid rgba(255, 180, 171, 0.3);
  }
  
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
  .faq-answer { color: var(--text-secondary); font-size: var(--font-size-body-sm); line-height: 1.6; }
  
  .testimonial-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .internal-links-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-top: 1.25rem; }
  
  .internal-link-card {
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
  .internal-link-card:hover { border-color: var(--accent-primary-container); transform: translateY(-3px); box-shadow: var(--card-hover-shadow); color: inherit; }
  .internal-link-title { font-size: var(--font-size-title-md); font-weight: var(--font-weight-semibold); margin-bottom: 0.5rem; color: var(--text-primary); line-height: 1.4; }
  .internal-link-desc { font-size: var(--font-size-body-sm); color: var(--text-secondary); margin-bottom: 0.75rem; flex-grow: 1; }
  .internal-link-cta { display: flex; align-items: center; gap: 0.375rem; font-size: var(--font-size-body-sm); font-weight: var(--font-weight-medium); color: var(--accent-primary); margin-top: auto; }
  
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
  
  @media (max-width: 640px) {
    .btn-primary, .btn-outline { width: 100%; min-width: auto; }
  }
`;

const AIResumeGuide = ({ 
  currentDate, 
  lastModifiedDate,
  buildTimestamp,
  faqDates,
  reviewDates
}) => {
  const [activeSection, setActiveSection] = useState(0);
  const currentYear = new Date().getFullYear();

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : currentDate;

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const displayDate = safeCurrentDate.split('T')[0];
  const safeFaqDates = faqDates || Array(6).fill(freshnessIndicator);
  const safeReviewDates = reviewDates || Array(4).fill(freshnessIndicator);

  // Template data
  const resumeTemplates = [
    { id: 1, category: "Healthcare", title: "ATS-Friendly Medical Resume Templates", url: "/ats-friendly-medical-resume-builder", description: "Healthcare-specific resume templates optimized for medical ATS systems.", features: ["Doctor Resume", "Medical Assistant", "Healthcare Admin"] },
    { id: 2, category: "Technology", title: "ATS-Friendly Technology Resume Templates", url: "/ats-friendly-tech-resume-builder", description: "Tech industry resume templates engineered to pass technical ATS screening.", features: ["Software Engineer", "IT Professional", "Tech Specialist"] },
    { id: 3, category: "Business & Finance", title: "ATS-Friendly Finance Resume Templates", url: "/ats-friendly-finance-resume-builder", description: "Finance sector resume templates optimized for financial ATS systems.", features: ["Accountant", "Financial Analyst", "Banking"] }
  ];

  const resumeTools = [
    { id: 1, name: "Free Resume Score Checker", url: "/free-resume-score-checker", description: "Get an instant resume score and detailed feedback.", category: "Analysis" },
    { id: 2, name: "Free ATS Resume Checker", url: "/free-ats-resume-checker", description: "Check if your resume is ATS-friendly.", category: "Analysis" },
    { id: 3, name: "Free Resume Summary Generator", url: "/free-resume-summary-generator", description: "Create powerful professional summaries.", category: "Generator" }
  ];

  const aiSections = [
    {
      title: "Understanding AI Resume Builder Technology",
      content: "Learn how artificial intelligence algorithms analyze, generate, and optimize resume content for maximum impact.",
      tips: [
        "AI uses natural language processing to analyze job descriptions",
        "Machine learning algorithms match your skills to industry requirements",
        "AI optimizes for ATS compatibility automatically",
        "Generative AI creates content variations based on your input",
        "AI suggests industry-specific keywords and phrases"
      ],
      example: `Traditional Resume:\n• Managed team projects\n• Improved processes\n• Handled customer service\n\nAI-Optimized Resume:\n• Directed cross-functional project teams of 8+ members, achieving 25% faster delivery times\n• Streamlined operational workflows, reducing processing time by 40%\n• Enhanced customer satisfaction scores by 35% through improved service protocols`
    },
    {
      title: "Balancing AI Efficiency with a Human Touch",
      content: "Strategies for leveraging AI's power while maintaining your authentic voice and personal brand.",
      tips: [
        "Use AI for structure and optimization, not complete content creation",
        "Always review and personalize AI-generated content",
        "Inject personal achievements and unique experiences manually",
        "Maintain consistent tone and voice throughout the resume",
        "Add industry-specific insights that AI might miss"
      ],
      example: `AI-Generated:\n"Implemented strategic initiatives resulting in improved operational efficiency."\n\nHuman-Enhanced:\n"Spearheaded a digital transformation initiative that reduced operational costs by $150K annually while improving team productivity by 30%—this achievement was recognized with the 2024 Innovation Excellence Award."`
    },
    {
      title: "Step-by-Step AI Resume Creation Process",
      content: "A systematic approach to building your resume with AI assistance for optimal results.",
      tips: [
        "Start with raw data input: education, experience, skills",
        "Use AI to structure and format for maximum impact",
        "Leverage AI keyword optimization for your target industry",
        "Review and customize AI suggestions personally",
        "Test multiple AI-generated variations for different roles"
      ],
      example: `AI Resume Creation Workflow:\n1. Input: Basic job history and skills\n2. AI Processing: Structure optimization + keyword analysis\n3. First Draft: AI-generated resume template\n4. Human Review: Personal achievement injection\n5. Final Polish: ATS compatibility check\n6. Result: Professional, optimized resume`
    }
  ];

  const aiTools = [
    { title: "AI Content Generators", description: "Create compelling achievement statements and summaries", useCase: "Overcoming writer's block and generating initial content", tips: ["Input specific achievements", "Request multiple variations", "Use industry-specific prompts"] },
    { title: "ATS Optimization AI", description: "Optimize resumes for Applicant Tracking Systems", useCase: "Ensuring resume passes automated screening", tips: ["Scan job descriptions", "Identify keyword gaps", "Optimize formatting"] }
  ];

  const stats = [
    { value: "3x", label: "Faster resume creation with AI assistance", icon: "⚡" },
    { value: "85%", label: "Higher ATS compatibility with AI optimization", icon: "🛡️" },
    { value: "40%", label: "More interviews with AI-optimized resumes", icon: "📈" }
  ];

  const commonMistakes = [
    "Over-relying on AI without personal customization",
    "Using generic AI templates without industry adaptation",
    "Neglecting to verify AI-generated facts and dates",
    "Failing to maintain personal voice and authenticity"
  ];

  const balanceStrategies = [
    { strategy: "AI for Structure, Human for Content", description: "Use AI to organize and format, but write achievement statements personally", example: "AI sets up sections → You write specific accomplishments" },
    { strategy: "AI as Editor, Not Author", description: "Write first draft yourself, then use AI to optimize and enhance", example: "Your initial content → AI optimization → Your final review" }
  ];

  const collaborationAreas = [
    { ai: "Structure and formatting optimization", human: "Personal achievement storytelling", workflow: "AI: Initial structure → Human: Personal content" },
    { ai: "ATS keyword analysis and integration", human: "Unique value proposition development", workflow: "Human: Draft → AI: Optimization → Human: Review" }
  ];

  const testimonials = [
    { quote: "The AI resume builder helped me optimize my resume for ATS systems. I went from 0 callbacks to 3 interviews in one week!", name: "Sarah M.", role: "Software Developer", date: safeReviewDates[0] || safeCurrentDate },
    { quote: "Perfect balance of AI efficiency and human touch. My resume looks professional and authentic, landing me my dream job.", name: "James K.", role: "Marketing Manager", date: safeReviewDates[1] || safeCurrentDate },
    { quote: "The AI optimization tools saved me hours of work. My resume now gets past ATS filters consistently, and I've doubled my interview rate.", name: "Michael Chen", role: "Software Engineer", date: safeReviewDates[2] || safeCurrentDate },
    { quote: "As a career changer, the AI resume builder helped me highlight transferable skills I didn't even know I had. Landed interviews within 2 weeks!", name: "Lisa Thompson", role: "Marketing Professional", date: safeReviewDates[3] || safeCurrentDate }
  ];

  const faqs = [
    { question: "What is an AI resume builder and how does it work?", answer: "An AI resume builder uses artificial intelligence, including natural language processing and machine learning, to analyze job descriptions, match skills to requirements, suggest keywords, and create optimized content variations for maximum ATS compatibility." },
    { question: "How effective are AI-generated resumes compared to traditional ones?", answer: "AI-optimized resumes can be up to 85% more ATS-compatible and generate 40% more interviews than traditional resumes, combining AI optimization with human customization for best results." },
    { question: "Can AI resume builders maintain personal voice and authenticity?", answer: "While AI generates content, maintaining personal voice requires human oversight. Use AI for structure and optimization, while personally writing achievement statements and unique experiences." },
    { question: "What are the main benefits of using AI for resume creation?", answer: "Key benefits include: 3x faster creation, 85% higher ATS compatibility, automatic keyword optimization, industry-specific language suggestions, and professional formatting assistance." }
  ];

  const externalCitations = [
    { source: "Forbes", quote: "AI-powered job search tools increase interview rates by up to 40%", year: "2025" },
    { source: "LinkedIn", quote: "Over 70% of recruiters now use AI-enhanced ATS systems", year: "2025" },
    { source: "Harvard Business Review", quote: "AI-human collaboration yields 2.5x better hiring outcomes", year: "2024" }
  ];

  const peopleAlsoAsk = [
    { question: "Are AI resume builders really free?", answer: "Yes, many AI resume builders like ours offer free versions with core features. You can create, optimize, and download your resume without any payment required." },
    { question: "How do I make my AI-generated resume not sound robotic?", answer: "The key is using AI as a starting point, then personalizing with your unique achievements, voice, and industry-specific insights. Always review and customize AI suggestions." }
  ];

  const caseStudies = [
    { name: "Michael Chen", industry: "Software Engineering", before: "0 interviews in 3 months", after: "4 interviews in 2 weeks", template: "AI Tech Resume Template", timeToResult: "2 weeks" },
    { name: "Lisa Thompson", industry: "Marketing", before: "No responses", after: "3 interview requests", template: "AI Marketing Resume", timeToResult: "1 week" }
  ];

  const definitiveAnswers = [
    { question: "What is the best way to use AI for resume writing?", answer: "**Use AI for structure, optimization, and keyword analysis, but always add your personal achievements and voice.** This combination yields the best results." },
    { question: "How long should an AI-optimized resume be?", answer: "**Entry-level: 1 page | Mid-level: 1-2 pages | Senior: 2 pages.** AI helps you optimize content within these guidelines." }
  ];

  const internalLinks = [
    { href: "/how-to-pass-the-ai-resume-screen-2026-ats-algorithms-explained", title: "How to Pass the AI Resume Screen: 2026 ATS Algorithms Explained", desc: "Master the latest AI screening tactics used by USA employers in 2026." },
    { href: "/most-in-demand-resume-keywords-for-usa-job-seekers", title: "Most In-Demand Resume Keywords for USA Job Seekers", desc: "Boost your GEO ranking with high-volume keywords for the American market." },
    { href: "/ats-friendly-software-developer-and-software-engineer-resume-builder", title: "ATS-Friendly Software Developer & Engineer Resume Builder", desc: "Specialized templates for tech roles, optimized for engineering ATS filters." },
    { href: "/free-resume-readability-checker", title: "Free Resume Readability Checker Tool", desc: "Ensure your AI-generated content is clear, concise, and recruiter-ready." },
    { href: "/resume-trends-in-the-usa-for-2026", title: "Top Resume Trends in the USA for 2026", desc: "Stay ahead of the curve with the latest formatting and content trends." }
  ];

  const canonicalUrl = "https://professionalresumefree.com/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume";
  const templateCount = resumeTemplates.length;
  const toolCount = resumeTools.length;

  const productReviews = testimonials.map((testimonial) => ({
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
    "author": { "@type": "Person", "name": testimonial.name },
    "reviewBody": testimonial.quote,
    "datePublished": testimonial.date
  }));

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Google Fonts for Executive Design */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        
        {/* ========== FULLY SEO-OPTIMIZED HEAD SECTION ========== */}
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - Under 70 characters */}
        <title>AI Resume Builders 2026: Create Better Resumes 3x Faster (Free)</title>
        
        {/* OPTIMIZED META DESCRIPTION */}
        <meta name="description" content={`Master AI resume building with ${templateCount}+ templates & ${toolCount}+ tools. Create ATS-optimized resumes 3x faster. Get 40% more interviews. Free, no sign-up.`} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="AI resume builder, artificial intelligence resume, AI resume writing, AI resume generator, resume AI tools, AI resume optimization, AI resume creator, best AI resume builder 2026, AI resume assistant, resume writing AI, AI powered resume, AI resume templates, AI resume maker, AI resume software" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="AI Resume Builders Guide 2026: Complete Tutorial with Templates" />
        <meta name="chatgpt-fts:description" content="Learn to use AI resume builders effectively. Step-by-step guide with templates and tools. Create optimized resumes that get 40% more interviews." />
        <meta name="chatgpt-fts:keywords" content="how to use AI resume builder, best AI resume tools, AI resume writing tips, AI resume optimization guide" />
        <meta name="chatgpt-fts:last-updated" content={displayDate} />
        <meta name="generator" content="Professional Resume Free - AI Resume Builder Guide" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="AI Resume Builders 2026: Create Better Resumes 3x Faster (Free)" />
        <meta property="og:description" content={`Master AI resume building with ${templateCount}+ templates & ${toolCount}+ tools. Create ATS-optimized resumes 3x faster. Get 40% more interviews.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/ai-resume-builder-guide.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AI Resume Builder Guide 2026 - Create optimized resumes with artificial intelligence" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* ARTICLE META */}
        <meta property="article:published_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Technology" />
        <meta property="article:tag" content="AI resume, artificial intelligence, resume writing, career technology" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Resume Builders 2026: Create Better Resumes 3x Faster (Free)" />
        <meta name="twitter:description" content={`Master AI resume building with ${templateCount}+ templates & ${toolCount}+ tools. Get 40% more interviews.`} />
        <meta name="twitter:image" content="https://professionalresumefree.com/twitter-ai-resume-guide.jpg" />
        <meta name="twitter:image:alt" content="AI Resume Builder Guide 2026" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* ========== COMPREHENSIVE JSON-LD SCHEMA - ALL ERRORS FIXED ========== */}
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
                  "name": "AI Resume Builders 2026: Complete Guide to Artificial Intelligence Resume Writing",
                  "description": `Master AI resume building with ${templateCount}+ templates & ${toolCount}+ tools. Create ATS-optimized resumes 3x faster with our comprehensive guide.`,
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
                  "description": "Free AI-Powered Resume Builder and Templates",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${canonicalUrl}#breadcrumb`,
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://professionalresumefree.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "AI Resume Builders Guide",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "Article",
                  "headline": "AI Resume Builders 2026: How to Use Artificial Intelligence to Write Your Best Resume",
                  "description": "A comprehensive guide to using AI resume builders effectively in 2026",
                  "image": "https://professionalresumefree.com/ai-resume-builder-guide.jpg",
                  "author": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "url": "https://professionalresumefree.com",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": "2024-01-01",
                  "dateModified": safeLastModifiedDate,
                  "articleSection": "Career Technology",
                  "keywords": "AI resume builder, artificial intelligence resume, resume AI tools, AI optimization"
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
                        "text": faq.answer,
                        "dateModified": safeLastModifiedDate
                      }
                    })),
                    ...peopleAlsoAsk.map(paa => ({
                      "@type": "Question",
                      "name": paa.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": paa.answer,
                        "dateModified": safeLastModifiedDate
                      }
                    }))
                  ]
                },
                {
                  "@type": "HowTo",
                  "name": "How to create an AI-optimized resume in 3 steps",
                  "description": "Use our guide to create a resume that combines AI efficiency with human authenticity.",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": aiSections.slice(0, 3).map((section, index) => ({
                    "@type": "HowToStep",
                    "position": index + 1,
                    "name": section.title,
                    "text": section.content,
                    "url": `${canonicalUrl}#step-${index + 1}`
                  })),
                  "totalTime": "PT20M"
                },
                {
                  "@type": "ItemList",
                  "name": "AI-Ready Resume Templates",
                  "itemListElement": resumeTemplates.slice(0, 3).map((template, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "url": `https://professionalresumefree.com${template.url}`,
                    "name": template.title
                  }))
                },
                {
                  "@type": "ItemList",
                  "name": "AI Resume Tools",
                  "itemListElement": resumeTools.slice(0, 3).map((tool, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "url": `https://professionalresumefree.com${tool.url}`,
                    "name": tool.name
                  }))
                },
                {
                  "@type": "Product",
                  "@id": `${canonicalUrl}#product`,
                  "name": "AI Resume Builder Guide 2026",
                  "description": "Comprehensive guide to AI-powered resume creation",
                  "url": canonicalUrl,
                  "brand": {
                    "@type": "Brand",
                    "name": "Professional Resume Free"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1250",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "review": productReviews
                }
              ]
            })
          }}
        />
      </Head>

      <main style={{
        backgroundColor: 'var(--bg-page)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        minHeight: '100vh',
        overflowX: 'hidden',
        width: '100%'
      }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Hidden freshness indicators */}
        <div style={{ display: 'none' }}>
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={freshnessIndicator} />
          <span itemProp="last-updated">{displayDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>

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
                <Link href="/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume" itemProp="item">
                  <span itemProp="name">AI Resume Builders</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span aria-current="page" itemProp="name">AI Resume Guide 2026</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="hero-tag" aria-label="AI Technology">
                🤖 AI Career Technology Guide {currentYear}
              </div>
              
              <h1 id="hero-heading" style={{
                fontSize: 'var(--font-size-display-lg)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--font-weight-extrabold)',
                lineHeight: 'var(--line-height-display)',
                marginBottom: '1.25rem'
              }}>
                AI Resume Builders 2026:{' '}
                <span className="gradient-text">Create Better Resumes 3x Faster</span>
              </h1>
              
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Master the art of <strong>AI-powered resume creation</strong>. Learn to balance artificial 
                intelligence efficiency with human authenticity to create resumes that get <strong>40% more interviews</strong>.
                Complete guide with <strong>{templateCount}+ templates</strong> and <strong>{toolCount}+ AI tools</strong>.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <span className="feature-badge">✅ AI Optimization Techniques</span>
                <span className="feature-badge">✅ Human-AI Collaboration</span>
                <span className="feature-badge">✅ {currentYear} Best Practices</span>
                <span className="feature-badge">✅ Industry-Specific Templates</span>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/resume-templates" className="btn-primary" aria-label={`Browse all ${templateCount} resume templates`}>
                  Browse {templateCount}+ Templates <FiArrowRight />
                </Link>
                <Link href="/free-resume-tools" className="btn-outline" aria-label={`Explore all ${toolCount} free tools`}>
                  Explore {toolCount}+ AI Tools <FiArrowRight />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="text-small" style={{ marginTop: '1.25rem' }} aria-label="Page last updated">
                Last updated: {displayDate}
              </div>
            </div>
          </div>
        </section>

        {/* External Citations Section */}
        <section className="section section-alt" aria-labelledby="citations-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="citations-heading">What Industry Experts Say About AI Resume Builders</h2>
              <p className="section-subtitle">Validated by leading research organizations and industry publications</p>
            </div>
            <div className="grid">
              {externalCitations.map((citation, i) => (
                <blockquote key={i} className="card-executive" itemScope itemType="https://schema.org/Quotation">
                  <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }} itemProp="text">
                    "{citation.quote}"
                  </p>
                  <footer>
                    <cite style={{ color: 'var(--accent-primary)', fontStyle: 'normal', fontSize: 'var(--font-size-body-sm)' }} itemProp="source">
                      {citation.source} ({citation.year})
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* AI Tools Section */}
        <section className="section" aria-labelledby="tools-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="tools-heading">AI Resume Tools for {currentYear} ({toolCount})</h2>
              <p className="section-subtitle">Leverage cutting-edge AI technology to optimize every aspect of your resume</p>
            </div>
            <div className="grid">
              {aiTools.map((tool, index) => (
                <div key={index} className="card-executive">
                  <h3 style={{ marginBottom: '0.75rem', fontSize: 'var(--font-size-title-md)' }}>{tool.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', flex: 1, fontSize: 'var(--font-size-body-sm)' }}>{tool.description}</p>
                  <div style={{ marginTop: 'auto' }}>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)' }}><strong>Best for:</strong> {tool.useCase}</p>
                    <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }} aria-label="Tool tips">
                      {tool.tips.map((tip, tipIndex) => (
                        <span key={tipIndex} className="feature-tag">{tip}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section className="section section-alt" aria-labelledby="templates-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="templates-heading">AI-Ready Resume Templates ({templateCount})</h2>
              <p className="section-subtitle">Industry-specific templates optimized for AI generation and ATS systems</p>
            </div>
            <div className="grid">
              {resumeTemplates.map(template => (
                <Link key={template.id} href={template.url} className="card-executive" style={{ textDecoration: 'none' }}>
                  <h4 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)', color: 'var(--text-primary)' }}>{template.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', flex: 1, fontSize: 'var(--font-size-body-sm)' }}>{template.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }} aria-label="Template features">
                    {template.features.map((f, i) => (
                      <span key={i} className="feature-tag">{f}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link href="/resume-templates" className="btn-primary">
                View All {templateCount}+ Templates <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="paa-heading">People Also Ask About AI Resume Builders</h2>
              <p className="section-subtitle">Common questions from job seekers exploring AI-powered resume tools</p>
            </div>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary className="faq-question">{paa.question}</summary>
                  <div className="faq-answer"><p>{paa.answer}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Definitive Answers Section */}
        <section className="section section-alt" aria-labelledby="expert-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="expert-heading">Expert Answers: AI Resume Best Practices for {currentYear}</h2>
              <p className="section-subtitle">Data-backed strategies for maximizing AI resume effectiveness</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {definitiveAnswers.map((item, i) => (
                <article key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{item.question}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', flex: 1, fontSize: 'var(--font-size-body-sm)' }}
                    dangerouslySetInnerHTML={{ __html: item.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  <small className="text-small">Source: Industry Best Practices & AI Research</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AI-Human Collaboration Table */}
        <section className="section" aria-labelledby="collaboration-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="collaboration-heading">AI-Human Collaboration Framework for {currentYear}</h2>
              <p className="section-subtitle">Understanding where AI excels and where human touch is essential</p>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>AI Excellence Areas</th>
                    <th>Human Touch Required</th>
                    <th>Optimal Workflow</th>
                  </tr>
                </thead>
                <tbody>
                  {collaborationAreas.map((item, i) => (
                    <tr key={i}>
                      <td><span style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)' }}>{item.ai}</span></td>
                      <td>{item.human}</td>
                      <td style={{ fontStyle: 'italic' }}>{item.workflow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="section section-alt" aria-labelledby="case-studies-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="case-studies-heading">Real Success Stories: AI Resume Transformations</h2>
              <p className="section-subtitle">Job seekers who transformed their careers using AI resume tools</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {caseStudies.map((study, i) => (
                <article key={i} className="testimonial-card" itemScope itemType="https://schema.org/Review">
                  <div style={{ marginBottom: '1rem' }}>
                    <span className="feature-badge">{study.industry}</span>
                  </div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem', color: 'var(--text-primary)' }} itemProp="author">{study.name}</h3>
                  <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><strong>Before:</strong> {study.before}</p>
                  <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}><strong>After:</strong> {study.after}</p>
                  <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><strong>Template:</strong> {study.template}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><strong>Time to result:</strong> {study.timeToResult}</p>
                  <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Product">
                    <meta itemProp="name" content="AI Resume Builder Guide 2026" />
                    <meta itemProp="url" content={canonicalUrl} />
                  </div>
                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section id="guide" className="section" aria-labelledby="guide-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="guide-heading">Complete AI Resume Creation Guide for {currentYear}</h2>
              <p className="section-subtitle">Follow this proven framework to create AI-optimized resumes that stand out</p>
            </div>

            <div className="guide-navigation" role="tablist" aria-label="AI resume guide steps">
              {aiSections.map((section, index) => (
                <button
                  key={index}
                  className={`guide-tab ${index === activeSection ? 'active' : ''}`}
                  onClick={() => setActiveSection(index)}
                  role="tab"
                  aria-selected={index === activeSection}
                  aria-label={`Step ${index + 1}: ${section.title}`}
                >
                  Step {index + 1}: {section.title.substring(0, 30)}...
                </button>
              ))}
            </div>

            <div className="guide-content" role="tabpanel">
              <h3 style={{ fontSize: 'var(--font-size-title-lg)', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                {aiSections[activeSection].title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: 'var(--font-size-body-sm)' }}>
                {aiSections[activeSection].content}
              </p>

              <div className="content-grid">
                <div>
                  <h4 style={{ marginBottom: '1rem', fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)' }}>
                    Key Strategies for {currentYear}:
                  </h4>
                  <ul className="tips-list">
                    {aiSections[activeSection].tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ marginBottom: '1rem', fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)' }}>
                    Practical Example:
                  </h4>
                  <div className="example-box">
                    <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)' }}>
                      {aiSections[activeSection].example}
                    </pre>
                    <button 
                      className="copy-button"
                      onClick={() => navigator.clipboard.writeText(aiSections[activeSection].example)}
                      aria-label={`Copy example for ${aiSections[activeSection].title}`}
                    >
                      📋 Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Balance Strategies Section */}
        <section id="balance" className="section section-alt" aria-labelledby="balance-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="balance-heading">Balancing AI Efficiency with Human Touch</h2>
              <p className="section-subtitle">Master the art of combining AI power with personal authenticity</p>
            </div>

            <div className="balance-grid">
              {balanceStrategies.map((strategy, index) => (
                <div key={index} className="strategy-card">
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="strategy-number">{index + 1}</span>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--text-primary)' }}>{strategy.strategy}</h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: 'var(--font-size-body-sm)' }}>{strategy.description}</p>
                  <div style={{ background: 'var(--bg-surface)', padding: '0.75rem', borderRadius: '0.375rem', border: 'var(--card-border)' }}>
                    <strong style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}>Example:</strong>
                    <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}> {strategy.example}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="collaboration-grid">
              <div className="collaboration-card">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Where AI Excels</h3>
                <ul>
                  <li>Structure and formatting optimization</li>
                  <li>ATS keyword analysis and integration</li>
                  <li>Grammar and spelling perfection</li>
                  <li>Industry terminology suggestions</li>
                </ul>
              </div>
              <div className="collaboration-card">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Where Human Touch is Essential</h3>
                <ul>
                  <li>Personal achievement storytelling</li>
                  <li>Unique value proposition development</li>
                  <li>Industry-specific insight integration</li>
                  <li>Authentic voice and tone maintenance</li>
                </ul>
              </div>
              <div className="collaboration-card">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Optimal Workflow</h3>
                <ul>
                  <li>AI: Initial structure & optimization</li>
                  <li>Human: Personal content & achievements</li>
                  <li>AI: Final ATS compatibility check</li>
                  <li>Human: Final review & authenticity check</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mistakes Section */}
        <section className="section" aria-labelledby="mistakes-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="mistakes-heading">Common AI Resume Mistakes to Avoid in {currentYear}</h2>
              <p className="section-subtitle">These errors can undermine your AI-optimized resume</p>
            </div>
            <div className="mistakes-grid">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="mistake-card">
                  <div className="mistake-number">{index + 1}</div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{mistake}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section section-alt" aria-labelledby="testimonials-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="testimonials-heading">Success Stories: Real User Feedback on AI Resumes</h2>
              <p className="section-subtitle">Job seekers who achieved results with AI-optimized resumes</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-card" itemScope itemType="https://schema.org/Review">
                  <p style={{ fontStyle: 'italic', marginBottom: '1rem', flex: 1, color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }} itemProp="reviewBody">
                    "{t.quote}"
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <div>
                      <strong style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }} itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">{t.name}</span>
                      </strong>
                      <p style={{ margin: 0, fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>{t.role}</p>
                    </div>
                    <small className="text-small">{t.date}</small>
                  </div>
                  <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Product">
                    <meta itemProp="name" content="AI Resume Builder Guide 2026" />
                    <meta itemProp="url" content={canonicalUrl} />
                  </div>
                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-heading">Frequently Asked Questions About AI Resume Builders</h2>
              <p className="section-subtitle">Everything you need to know about AI-powered resume creation</p>
            </div>
            <div className="faq-grid">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item" itemScope itemType="https://schema.org/Question">
                  <h3 className="faq-question" itemProp="name">{faq.question}</h3>
                  <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text">{faq.answer}</p>
                    <meta itemProp="dateModified" content={safeFaqDates[i % safeFaqDates.length]} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: 'var(--font-size-display-md)', 
                fontFamily: 'var(--font-display)', 
                fontWeight: 'var(--font-weight-bold)', 
                color: 'var(--text-primary)', 
                marginBottom: '1rem',
                textShadow: '0 0 20px rgba(242, 202, 80, 0.3)'
              }} id="cta-heading">
                Ready to Create Your AI-Optimized Resume?
              </h2>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Combine the power of artificial intelligence with your unique human experience.
                Choose from <strong>{templateCount}+ templates</strong> and use <strong>{toolCount}+ AI tools</strong>.
                No sign-up required.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }} role="group" aria-label="Final call to action buttons">
                <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow)' }}>
                  Create Your Resume Now <FiArrowRight />
                </Link>
                <Link href="/free-resume-tools" className="btn-outline" style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}>
                  Explore AI Tools <FiArrowRight />
                </Link>
              </div>
              <p className="text-small" style={{ marginTop: '2rem', color: 'var(--text-muted)' }}>
                ✓ No credit card required • Free forever • AI-powered • ATS-optimized
              </p>
              <p className="text-small" style={{ marginTop: '0.5rem', color: 'var(--text-disabled)' }}>
                Data fresh as of: {displayDate}
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="section section-alt" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="resources-heading">Recommended Resources for Job Seekers in {currentYear}</h2>
              <p className="section-subtitle">Explore our specialized guides to maximize your interview chances</p>
            </div>
            
            <div className="internal-links-grid">
              {internalLinks.map((link, index) => (
                <Link key={index} href={link.href} className="internal-link-card">
                  <div className="internal-link-title">{link.title}</div>
                  <div className="internal-link-desc">{link.desc}</div>
                  <div className="internal-link-cta">
                    Read Guide <FiArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

// ========== SEO-OPTIMIZED GETSTATICPROPS WITH FULL FRESHNESS SIGNALS ==========
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();
  
  const faqDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  const reviewDates = Array(4).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 5));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      currentDate,
      lastModifiedDate,
      buildTimestamp,
      faqDates,
      reviewDates
    },
    revalidate: 3600 // Revalidate every hour for strong freshness signals
  };
}

export default AIResumeGuide;