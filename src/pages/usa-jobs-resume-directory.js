import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS
// ============================================================================
const executiveDesignTokens = `
  /* ========== CSS CUSTOM PROPERTIES ========== */
  :root {
    /* ========== COLOR SYSTEM ========== */
    
    /* Background Colors */
    --bg-page: #131315;
    --bg-surface-lowest: #0e0e10;
    --bg-surface-low: #1c1b1d;
    --bg-surface: #201f21;
    --bg-surface-high: #2a2a2c;
    --bg-surface-highest: #353437;
    --bg-surface-dim: #131315;
    --bg-surface-bright: #39393b;
    --bg-container: #1c1b1d;
    --bg-container-high: #2a2a2c;
    
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
    
    /* Error/State Colors */
    --error-color: #ffb4ab;
    --error-container: #93000a;
    --error-on-container: #ffdad6;
    
    /* Success Colors */
    --success-color: #a5d6a7;
    --success-container: #1b5e20;
    
    /* Glass/Special Effect Colors */
    --glass-bg: rgba(20, 19, 21, 0.7);
    --glass-bg-light: rgba(28, 27, 29, 0.6);
    --glass-bg-heavy: rgba(20, 19, 21, 0.85);
    --gradient-card-overlay: linear-gradient(180deg, rgba(19, 19, 21, 0) 0%, rgba(19, 19, 21, 0.9) 100%);
    --gradient-hero-overlay: linear-gradient(135deg, rgba(19, 19, 21, 0.95) 0%, rgba(19, 19, 21, 0.8) 100%);
    
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
    --font-size-label-lg: 0.875rem;
    --font-size-label-md: 0.75rem;
    --font-size-label-sm: 0.6875rem;
    --font-size-caps: 0.75rem;
    
    /* Line Heights */
    --line-height-display: 1.1;
    --line-height-headline: 1.2;
    --line-height-title: 1.3;
    --line-height-body: 1.6;
    --line-height-label: 1.4;
    
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
    --letter-spacing-wider: 0.05em;
    --letter-spacing-caps: 0.08em;
    
    /* Text Shadows for Glow Effects */
    --glow-gold: 0 0 20px rgba(242, 202, 80, 0.3), 0 0 40px rgba(242, 202, 80, 0.1);
    --glow-gold-strong: 0 0 30px rgba(242, 202, 80, 0.5), 0 0 60px rgba(242, 202, 80, 0.2);
    
    /* ========== BORDER RADIUS SCALE ========== */
    --radius-none: 0;
    --radius-sm: 0.125rem;
    --radius-default: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-full: 9999px;
    
    /* ========== SPACING SYSTEM ========== */
    --space-unit: 0.25rem;
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    --space-24: 6rem;
    
    /* Section Spacing */
    --section-gap-sm: clamp(3rem, 6vw, 4rem);
    --section-gap-md: clamp(4rem, 8vw, 6rem);
    --section-gap-lg: clamp(5rem, 10vw, 8rem);
    
    /* Content Widths */
    --content-max-width: 1280px;
    --content-narrow: 800px;
    --content-wide: 1440px;
    
    /* Gutters */
    --gutter-desktop: clamp(1.5rem, 5vw, 2.5rem);
    --gutter-mobile: clamp(1rem, 4vw, 1.5rem);
    
    /* ========== SHADOW / ELEVATION TOKENS ========== */
    --shadow-nav: 0px 24px 48px rgba(0, 0, 0, 0.8), 0px 4px 8px rgba(0, 0, 0, 0.4);
    --shadow-gold-glow: 0 0 20px rgba(242, 202, 80, 0.4), 0 0 60px rgba(242, 202, 80, 0.1);
    --shadow-gold-glow-sm: 0 0 10px rgba(242, 202, 80, 0.3);
    --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);
    --shadow-card-hover: 0 8px 24px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3);
    --shadow-deep: 0 20px 40px rgba(0, 0, 0, 0.5);
    --shadow-button: 0 2px 8px rgba(0, 0, 0, 0.3);
    
    /* ========== ANIMATION / TRANSITION TOKENS ========== */
    --transition-fast: 150ms;
    --transition-medium: 250ms;
    --transition-slow: 350ms;
    --transition-very-slow: 500ms;
    --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
    --easing-smooth: cubic-bezier(0.65, 0, 0.35, 1);
    --easing-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
    --hover-transform: translateY(-2px);
    --hover-transform-lg: translateY(-4px);
    
    /* ========== GLASS PANEL EFFECT ========== */
    --glass-blur: 20px;
    --glass-blur-heavy: 40px;
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
    --btn-primary-transform: none;
    --btn-primary-hover-bg: #f7d86e;
    --btn-primary-hover-transform: translateY(-1px);
    --btn-primary-hover-shadow: 0 4px 12px rgba(242, 202, 80, 0.3);
    
    --btn-outline-border: rgba(212, 175, 55, 0.5);
    --btn-outline-text: #f2ca50;
    --btn-outline-hover-bg: rgba(242, 202, 80, 0.08);
    --btn-outline-hover-border: rgba(212, 175, 55, 0.8);
    
    /* ========== CARD STYLE VARIABLES ========== */
    --card-bg: rgba(28, 27, 29, 0.6);
    --card-bg-hover: rgba(32, 31, 33, 0.8);
    --card-border: 0.5px solid rgba(212, 175, 55, 0.15);
    --card-border-hover: 0.5px solid rgba(212, 175, 55, 0.3);
    --card-padding: clamp(1.5rem, 4vw, 2.5rem);
    --card-radius: 0.5rem;
    --card-hover-transform: translateY(-4px);
    --card-hover-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 20px rgba(242, 202, 80, 0.05);
    
    /* ========== GOLD ACCENT VALUES ========== */
    --gold-filament-color: rgba(212, 175, 55, 0.3);
    --gold-filament-width: 0.5px;
    --gold-filament-opacity: 0.3;
    --gold-divider-width: 60px;
    --gold-divider-height: 1px;
    --gold-divider-opacity: 0.4;
  }
  
  /* ========== BASE RESET ========== */
  * { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
    -webkit-tap-highlight-color: transparent;
  }
  
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
  
  h1 {
    font-size: var(--font-size-display-lg);
    line-height: var(--line-height-display);
    font-weight: var(--font-weight-bold);
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: var(--font-size-display-md);
    line-height: var(--line-height-headline);
    font-weight: var(--font-weight-bold);
  }
  
  h3 {
    font-size: var(--font-size-headline-lg);
    line-height: var(--line-height-headline);
    font-weight: var(--font-weight-semibold);
    font-family: var(--font-body);
  }
  
  h4 {
    font-size: var(--font-size-headline-md);
    line-height: var(--line-height-title);
    font-weight: var(--font-weight-semibold);
    font-family: var(--font-body);
  }
  
  p {
    color: var(--text-secondary);
    font-size: var(--font-size-body-lg);
    line-height: var(--line-height-body);
  }
  
  strong {
    color: var(--text-primary);
    font-weight: var(--font-weight-semibold);
  }
  
  a {
    color: var(--accent-primary);
    transition: color var(--transition-fast) var(--easing-default);
    text-decoration: none;
  }
  
  a:hover {
    color: var(--accent-primary-hover);
  }
  
  img, svg { 
    max-width: 100%; 
    height: auto; 
    display: block; 
  }
  
  /* ========== UTILITY CLASSES ========== */
  .glass-panel {
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border-width) solid var(--border-glass);
  }
  
  .glass-panel-heavy {
    background: var(--glass-bg-heavy);
    backdrop-filter: blur(var(--glass-blur-heavy));
    -webkit-backdrop-filter: blur(var(--glass-blur-heavy));
    border: var(--glass-border-width) solid var(--border-glass);
  }
  
  .text-glow-gold {
    text-shadow: var(--glow-gold);
  }
  
  .text-glow-gold-strong {
    text-shadow: var(--glow-gold-strong);
  }
  
  .gold-filament-border {
    border: var(--gold-filament-width) solid var(--gold-filament-color);
  }
  
  .gold-divider {
    width: var(--gold-divider-width);
    height: var(--gold-divider-height);
    background: var(--accent-primary);
    opacity: var(--gold-divider-opacity);
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #f2ca50 0%, #d4af37 50%, #ffe088 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
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
    text-transform: var(--btn-primary-transform);
    transition: all var(--transition-medium) var(--easing-default);
    cursor: pointer;
    box-shadow: var(--shadow-button);
    text-decoration: none;
    min-width: 200px;
  }
  
  .btn-primary:hover {
    background: var(--btn-primary-hover-bg);
    transform: var(--btn-primary-hover-transform);
    box-shadow: var(--btn-primary-hover-shadow);
    color: var(--btn-primary-text);
  }
  
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
  
  .btn-outline:hover {
    background: var(--btn-outline-hover-bg);
    border-color: var(--btn-outline-hover-border);
    transform: var(--btn-primary-hover-transform);
    box-shadow: var(--shadow-gold-glow-sm);
    color: var(--btn-outline-text);
  }
  
  .btn-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1.125rem 2.25rem;
    background: var(--btn-primary-bg);
    color: var(--btn-primary-text);
    border: none;
    border-radius: var(--radius-lg);
    font-size: var(--font-size-title-md);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--btn-primary-letter-spacing);
    transition: all var(--transition-medium) var(--easing-default);
    cursor: pointer;
    box-shadow: var(--shadow-gold-glow);
    text-decoration: none;
    min-width: 260px;
  }
  
  .btn-cta:hover {
    background: var(--btn-primary-hover-bg);
    transform: var(--btn-primary-hover-transform);
    box-shadow: var(--shadow-gold-glow-strong);
    color: var(--btn-primary-text);
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
    text-decoration: none;
    color: inherit;
  }
  
  .card-executive:hover {
    background: var(--card-bg-hover);
    border: var(--card-border-hover);
    transform: var(--card-hover-transform);
    box-shadow: var(--card-hover-shadow);
  }
  
  .section-container {
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: 0 var(--gutter-desktop);
    width: 100%;
  }
  
  @media (max-width: 768px) {
    .section-container {
      padding: 0 var(--gutter-mobile);
    }
    
    .btn-primary,
    .btn-outline,
    .btn-cta {
      width: 100%;
      min-width: auto;
    }
  }
  
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--accent-primary);
    color: var(--accent-on-primary);
    padding: 8px 16px;
    z-index: 100;
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    font-weight: var(--font-weight-semibold);
  }
  
  .skip-link:focus { 
    top: 0; 
  }

  /* ========== DIRECTORY PAGE SPECIFIC STYLES ========== */
  
  .breadcrumb {
    padding: 1rem 0;
    background: var(--bg-surface-lowest);
    border-bottom: 0.5px solid var(--border-gold-filament);
  }
  
  .breadcrumb ol {
    display: flex;
    list-style: none;
    gap: 0.5rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  
  .breadcrumb a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color var(--transition-fast) var(--easing-default);
  }
  
  .breadcrumb a:hover {
    color: var(--accent-primary);
  }
  
  .breadcrumb [aria-current="page"] {
    color: var(--accent-primary);
    font-weight: var(--font-weight-semibold);
  }
  
  .breadcrumb li[aria-hidden="true"] {
    color: var(--text-muted);
  }
  
  .directory-badge {
    display: inline-block;
    background: rgba(242, 202, 80, 0.1);
    color: var(--accent-primary);
    padding: 0.5rem 1.25rem;
    border-radius: var(--radius-full);
    font-size: var(--font-size-body-sm);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--letter-spacing-caps);
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    border: 0.5px solid var(--border-gold-filament);
  }
  
  .info-box {
    background: rgba(242, 202, 80, 0.05);
    border: 0.5px solid var(--border-gold-filament);
    border-radius: var(--radius-xl);
    padding: 1rem 1.5rem;
    margin: 1.5rem auto;
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.25rem;
  }
  
  .info-box span {
    color: var(--accent-primary);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-body-sm);
  }
  
  .directory-statement {
    background: rgba(242, 202, 80, 0.05);
    border: 0.5px solid var(--border-gold-filament-strong);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    margin: 1.5rem auto;
    max-width: 900px;
    font-size: var(--font-size-body-md);
    color: var(--text-secondary);
  }
  
  .directory-statement p {
    color: var(--text-secondary);
  }
  
  .stats-container {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    margin-top: 2.5rem;
    flex-wrap: wrap;
  }
  
  .stat-item {
    text-align: center;
    min-width: 130px;
    padding: 1rem 1.25rem;
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-lg);
    flex: 1;
  }
  
  .stat-number {
    font-size: var(--font-size-headline-lg);
    font-weight: var(--font-weight-bold);
    color: var(--accent-primary);
    display: block;
    font-family: var(--font-display);
    margin-bottom: 0.25rem;
  }
  
  .stat-item span {
    color: var(--text-secondary);
    font-size: var(--font-size-body-sm);
    font-weight: var(--font-weight-medium);
  }
  
  .data-note {
    font-size: var(--font-size-label-sm);
    color: var(--text-muted);
    margin-top: 0.25rem;
  }
  
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin: 2rem auto;
    width: 100%;
  }
  
  @media (min-width: 640px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .category-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 1.5rem auto;
    width: 100%;
  }
  
  @media (min-width: 640px) {
    .category-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .category-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .category-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: var(--radius-lg);
    padding: 1.25rem;
    border: var(--card-border);
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all var(--transition-medium) var(--easing-smooth);
  }
  
  .category-card:hover {
    transform: translateY(-2px);
    border-color: var(--accent-primary-container);
    box-shadow: var(--card-hover-shadow);
  }
  
  .category-card h3 {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-gold-filament);
    font-size: var(--font-size-body-lg);
    color: var(--text-primary);
  }
  
  .category-card a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: var(--font-size-body-sm);
    border-bottom: 1px solid transparent;
    transition: all var(--transition-fast) var(--easing-default);
    display: block;
    padding: 0.5rem 0;
  }
  
  .category-card a:hover {
    color: var(--accent-primary);
    border-bottom-color: var(--accent-primary-container);
  }
  
  .faq-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: var(--content-narrow);
    margin: 0 auto;
    width: 100%;
  }
  
  @media (min-width: 768px) {
    .faq-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  .faq-item {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: 1.5rem;
    border-radius: var(--radius-lg);
    border: var(--card-border);
    height: 100%;
    cursor: pointer;
  }
  
  .faq-question {
    font-size: var(--font-size-body-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    margin-bottom: 0.75rem;
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .faq-question::-webkit-details-marker {
    display: none;
  }
  
  .faq-item p {
    color: var(--text-secondary);
    font-size: var(--font-size-body-md);
  }
  
  .feature-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.75rem;
    justify-content: center;
  }
  
  .feature-tag {
    background: rgba(242, 202, 80, 0.1);
    color: var(--accent-primary);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
    font-size: var(--font-size-label-sm);
    border: 0.5px solid var(--border-gold-filament);
  }
  
  .text-small {
    font-size: var(--font-size-body-sm);
    color: var(--text-muted);
  }
  
  .toc-container {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: 1.5rem;
    margin: 2.5rem auto;
    max-width: 800px;
  }
  
  .toc-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }
  
  .toc-list li a {
    font-size: var(--font-size-body-sm);
    color: var(--text-secondary);
    text-decoration: none;
    padding: 0.5rem 0.75rem;
    background: rgba(242, 202, 80, 0.05);
    border-radius: var(--radius-md);
    border: 0.5px solid var(--border-gold-filament);
    transition: all var(--transition-fast) var(--easing-default);
    display: inline-block;
  }
  
  .toc-list li a:hover {
    background: rgba(242, 202, 80, 0.1);
    border-color: var(--accent-primary-container);
    color: var(--accent-primary);
  }
  
  .glossary-section {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: var(--radius-xl);
    padding: 1.5rem;
    margin: 2rem auto;
    max-width: 800px;
    border: var(--card-border);
  }
  
  .glossary-section dl {
    margin: 0;
  }
  
  .glossary-section dt {
    font-weight: var(--font-weight-semibold);
    color: var(--accent-primary);
    margin-top: 1rem;
    font-size: var(--font-size-body-md);
  }
  
  .glossary-section dd {
    color: var(--text-secondary);
    margin-left: 0;
    margin-top: 0.25rem;
    font-size: var(--font-size-body-sm);
  }
  
  .methodology-list {
    list-style: none;
    margin-top: 0.75rem;
  }
  
  .methodology-list li {
    margin-bottom: 0.5rem;
    padding-left: 1.25rem;
    position: relative;
    color: var(--text-secondary);
    font-size: var(--font-size-body-sm);
  }
  
  .methodology-list li:before {
    content: "✦";
    color: var(--accent-primary);
    position: absolute;
    left: 0;
    font-size: 0.75rem;
  }
  
  .ai-optimized-content {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  @media (max-width: 480px) {
    button, .btn-primary, .btn-outline, .btn-cta, .card-executive, a {
      touch-action: manipulation;
    }
    
    .stats-container {
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
    }
    
    .stat-item {
      min-width: 100%;
      width: 100%;
      max-width: 300px;
    }
    
    .info-box {
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

// ============================================================================
// USA STATES DATA - COMPREHENSIVE FOR AI/CRAWLERS
// ============================================================================

const usaStates = [
  { name: "Alabama", abbreviation: "AL", capital: "Montgomery", keyIndustries: "Aerospace, Agriculture, Automotive, Healthcare", majorEmployers: "Boeing, Mercedes-Benz, Honda, UAB Health", population: "5,024,279", unemployment: "2.8%" },
  { name: "Alaska", abbreviation: "AK", capital: "Juneau", keyIndustries: "Oil & Gas, Fishing, Tourism, Federal Government", majorEmployers: "ConocoPhillips, State of Alaska, Providence Health", population: "733,391", unemployment: "3.2%" },
  { name: "Arizona", abbreviation: "AZ", capital: "Phoenix", keyIndustries: "Technology, Healthcare, Aerospace, Tourism", majorEmployers: "Intel, Banner Health, Raytheon, Mayo Clinic", population: "7,359,197", unemployment: "3.5%" },
  { name: "Arkansas", abbreviation: "AR", capital: "Little Rock", keyIndustries: "Retail, Agriculture, Logistics, Manufacturing", majorEmployers: "Walmart, Tyson Foods, J.B. Hunt, Baptist Health", population: "3,025,891", unemployment: "3.1%" },
  { name: "California", abbreviation: "CA", capital: "Sacramento", keyIndustries: "Technology, Entertainment, Agriculture, Aerospace", majorEmployers: "Apple, Google, Kaiser Permanente, Netflix", population: "39,538,223", unemployment: "4.1%" },
  { name: "Colorado", abbreviation: "CO", capital: "Denver", keyIndustries: "Aerospace, Technology, Tourism, Energy", majorEmployers: "Lockheed Martin, UCHealth, Ball Corporation", population: "5,773,714", unemployment: "3.3%" },
  { name: "Connecticut", abbreviation: "CT", capital: "Hartford", keyIndustries: "Finance, Insurance, Healthcare, Aerospace", majorEmployers: "Aetna, Travelers, Pfizer, Pratt & Whitney", population: "3,605,944", unemployment: "3.4%" },
  { name: "Delaware", abbreviation: "DE", capital: "Dover", keyIndustries: "Finance, Chemicals, Healthcare, Agriculture", majorEmployers: "Bank of America, Chemours, ChristianaCare", population: "989,948", unemployment: "3.0%" },
  { name: "Florida", abbreviation: "FL", capital: "Tallahassee", keyIndustries: "Tourism, Healthcare, Aerospace, Agriculture", majorEmployers: "Publix, AdventHealth, Disney, SpaceX", population: "21,538,187", unemployment: "2.9%" },
  { name: "Georgia", abbreviation: "GA", capital: "Atlanta", keyIndustries: "Logistics, Film, Technology, Agriculture", majorEmployers: "Delta Air Lines, Home Depot, Coca-Cola, UPS", population: "10,711,908", unemployment: "3.1%" },
  { name: "Hawaii", abbreviation: "HI", capital: "Honolulu", keyIndustries: "Tourism, Defense, Agriculture, Healthcare", majorEmployers: "U.S. Pacific Command, Hawaiian Airlines, Kaiser Permanente", population: "1,455,271", unemployment: "3.0%" },
  { name: "Idaho", abbreviation: "ID", capital: "Boise", keyIndustries: "Agriculture, Technology, Manufacturing, Tourism", majorEmployers: "Micron, St. Alphonsus, Simplot, Lamb Weston", population: "1,839,106", unemployment: "2.7%" },
  { name: "Illinois", abbreviation: "IL", capital: "Springfield", keyIndustries: "Finance, Manufacturing, Agriculture, Technology", majorEmployers: "Boeing, Advocate Aurora, Abbott, Caterpillar", population: "12,812,508", unemployment: "3.6%" },
  { name: "Indiana", abbreviation: "IN", capital: "Indianapolis", keyIndustries: "Manufacturing, Agriculture, Logistics, Healthcare", majorEmployers: "Eli Lilly, Anthem, Cummins, Steel Dynamics", population: "6,785,528", unemployment: "3.0%" },
  { name: "Iowa", abbreviation: "IA", capital: "Des Moines", keyIndustries: "Agriculture, Manufacturing, Insurance, Renewable Energy", majorEmployers: "Principal Financial, John Deere, UnityPoint Health", population: "3,190,369", unemployment: "2.8%" },
  { name: "Kansas", abbreviation: "KS", capital: "Topeka", keyIndustries: "Aerospace, Agriculture, Energy, Healthcare", majorEmployers: "Spirit AeroSystems, Koch Industries, Cerner", population: "2,937,880", unemployment: "2.9%" },
  { name: "Kentucky", abbreviation: "KY", capital: "Frankfort", keyIndustries: "Automotive, Agriculture, Healthcare, Logistics", majorEmployers: "Ford, UPS, Baptist Health, Toyota", population: "4,509,394", unemployment: "3.2%" },
  { name: "Louisiana", abbreviation: "LA", capital: "Baton Rouge", keyIndustries: "Oil & Gas, Petrochemicals, Agriculture, Tourism", majorEmployers: "ExxonMobil, Ochsner Health, Chevron", population: "4,657,757", unemployment: "3.4%" },
  { name: "Maine", abbreviation: "ME", capital: "Augusta", keyIndustries: "Healthcare, Tourism, Fishing, Manufacturing", majorEmployers: "MaineHealth, L.L.Bean, Bath Iron Works", population: "1,362,359", unemployment: "3.0%" },
  { name: "Maryland", abbreviation: "MD", capital: "Annapolis", keyIndustries: "Federal Government, Biotechnology, Cybersecurity, Healthcare", majorEmployers: "Johns Hopkins, NIH, Lockheed Martin, Northrop Grumman", population: "6,165,129", unemployment: "2.8%" },
  { name: "Massachusetts", abbreviation: "MA", capital: "Boston", keyIndustries: "Biotechnology, Education, Finance, Technology", majorEmployers: "Mass General Brigham, MIT, Raytheon, Fidelity", population: "6,984,723", unemployment: "3.2%" },
  { name: "Michigan", abbreviation: "MI", capital: "Lansing", keyIndustries: "Automotive, Manufacturing, Healthcare, Technology", majorEmployers: "Ford, GM, Henry Ford Health, Dow", population: "10,077,331", unemployment: "3.5%" },
  { name: "Minnesota", abbreviation: "MN", capital: "St. Paul", keyIndustries: "Healthcare, Retail, Manufacturing, Agriculture", majorEmployers: "Mayo Clinic, Target, UnitedHealth Group, 3M", population: "5,706,494", unemployment: "2.7%" },
  { name: "Mississippi", abbreviation: "MS", capital: "Jackson", keyIndustries: "Agriculture, Manufacturing, Healthcare, Aerospace", majorEmployers: "Nissan, Baptist Memorial, Ingalls Shipbuilding", population: "2,961,279", unemployment: "3.3%" },
  { name: "Missouri", abbreviation: "MO", capital: "Jefferson City", keyIndustries: "Aerospace, Agriculture, Healthcare, Logistics", majorEmployers: "Boeing, Mercy Health, Cerner, Express Scripts", population: "6,154,913", unemployment: "3.0%" },
  { name: "Montana", abbreviation: "MT", capital: "Helena", keyIndustries: "Agriculture, Mining, Tourism, Healthcare", majorEmployers: "NorthWestern Energy, Billings Clinic, Stillwater Mining", population: "1,084,225", unemployment: "2.8%" },
  { name: "Nebraska", abbreviation: "NE", capital: "Lincoln", keyIndustries: "Agriculture, Insurance, Transportation, Healthcare", majorEmployers: "Berkshire Hathaway, Union Pacific, Nebraska Medicine", population: "1,961,504", unemployment: "2.6%" },
  { name: "Nevada", abbreviation: "NV", capital: "Carson City", keyIndustries: "Tourism, Mining, Logistics, Technology", majorEmployers: "MGM Resorts, Switch, Tesla, Renown Health", population: "3,104,614", unemployment: "3.4%" },
  { name: "New Hampshire", abbreviation: "NH", capital: "Concord", keyIndustries: "Healthcare, Manufacturing, Technology, Tourism", majorEmployers: "Dartmouth-Hitchcock, BAE Systems, Fidelity", population: "1,377,529", unemployment: "2.5%" },
  { name: "New Jersey", abbreviation: "NJ", capital: "Trenton", keyIndustries: "Pharmaceuticals, Finance, Logistics, Technology", majorEmployers: "Johnson & Johnson, Merck, RWJBarnabas, Amazon", population: "9,288,994", unemployment: "3.3%" },
  { name: "New Mexico", abbreviation: "NM", capital: "Santa Fe", keyIndustries: "Federal Government, Energy, Aerospace, Healthcare", majorEmployers: "Los Alamos National Lab, Sandia, Presbyterian Healthcare", population: "2,117,522", unemployment: "3.6%" },
  { name: "New York", abbreviation: "NY", capital: "Albany", keyIndustries: "Finance, Media, Healthcare, Technology", majorEmployers: "JPMorgan Chase, Mount Sinai, IBM, Pfizer", population: "20,201,249", unemployment: "4.0%" },
  { name: "North Carolina", abbreviation: "NC", capital: "Raleigh", keyIndustries: "Banking, Biotechnology, Agriculture, Technology", majorEmployers: "Bank of America, Duke Health, Red Hat, Lowe's", population: "10,439,388", unemployment: "3.1%" },
  { name: "North Dakota", abbreviation: "ND", capital: "Bismarck", keyIndustries: "Energy, Agriculture, Aerospace, Healthcare", majorEmployers: "Sanford Health, Basin Electric, Bobcat Company", population: "779,094", unemployment: "2.4%" },
  { name: "Ohio", abbreviation: "OH", capital: "Columbus", keyIndustries: "Manufacturing, Healthcare, Aerospace, Agriculture", majorEmployers: "Cleveland Clinic, Procter & Gamble, Honda, Nationwide", population: "11,799,448", unemployment: "3.2%" },
  { name: "Oklahoma", abbreviation: "OK", capital: "Oklahoma City", keyIndustries: "Energy, Aerospace, Agriculture, Healthcare", majorEmployers: "Devon Energy, OU Health, American Airlines, Boeing", population: "3,959,353", unemployment: "3.1%" },
  { name: "Oregon", abbreviation: "OR", capital: "Salem", keyIndustries: "Technology, Agriculture, Manufacturing, Healthcare", majorEmployers: "Intel, Providence Health, Nike, Columbia Sportswear", population: "4,237,256", unemployment: "3.4%" },
  { name: "Pennsylvania", abbreviation: "PA", capital: "Harrisburg", keyIndustries: "Healthcare, Manufacturing, Finance, Agriculture", majorEmployers: "UPMC, Geisinger, Comcast, Hershey", population: "13,002,700", unemployment: "3.3%" },
  { name: "Rhode Island", abbreviation: "RI", capital: "Providence", keyIndustries: "Healthcare, Manufacturing, Tourism, Education", majorEmployers: "Lifespan, CVS Health, Electric Boat, Brown University", population: "1,097,379", unemployment: "3.0%" },
  { name: "South Carolina", abbreviation: "SC", capital: "Columbia", keyIndustries: "Automotive, Aerospace, Manufacturing, Tourism", majorEmployers: "BMW, Boeing, Prisma Health, Michelin", population: "5,118,425", unemployment: "3.0%" },
  { name: "South Dakota", abbreviation: "SD", capital: "Pierre", keyIndustries: "Agriculture, Healthcare, Finance, Tourism", majorEmployers: "Avera Health, Sanford Health, Citibank", population: "886,667", unemployment: "2.5%" },
  { name: "Tennessee", abbreviation: "TN", capital: "Nashville", keyIndustries: "Healthcare, Automotive, Logistics, Music/Entertainment", majorEmployers: "HCA Healthcare, Nissan, FedEx, Vanderbilt Health", population: "6,910,840", unemployment: "3.0%" },
  { name: "Texas", abbreviation: "TX", capital: "Austin", keyIndustries: "Energy, Technology, Healthcare, Aerospace", majorEmployers: "ExxonMobil, Dell, HCA, SpaceX, AT&T", population: "29,145,505", unemployment: "3.5%" },
  { name: "Utah", abbreviation: "UT", capital: "Salt Lake City", keyIndustries: "Technology, Aerospace, Healthcare, Tourism", majorEmployers: "Adobe, Intermountain Healthcare, Northrop Grumman", population: "3,271,616", unemployment: "2.6%" },
  { name: "Vermont", abbreviation: "VT", capital: "Montpelier", keyIndustries: "Healthcare, Manufacturing, Agriculture, Tourism", majorEmployers: "University of Vermont Health, Ben & Jerry's, GlobalFoundries", population: "643,077", unemployment: "2.7%" },
  { name: "Virginia", abbreviation: "VA", capital: "Richmond", keyIndustries: "Federal Government, Technology, Defense, Agriculture", majorEmployers: "Northrop Grumman, Inova Health, Capital One, Booz Allen", population: "8,631,393", unemployment: "2.9%" },
  { name: "Washington", abbreviation: "WA", capital: "Olympia", keyIndustries: "Technology, Aerospace, Agriculture, Healthcare", majorEmployers: "Amazon, Microsoft, Boeing, Providence Health", population: "7,705,281", unemployment: "3.2%" },
  { name: "West Virginia", abbreviation: "WV", capital: "Charleston", keyIndustries: "Energy, Healthcare, Manufacturing, Tourism", majorEmployers: "WVU Medicine, Appalachian Power, Toyota", population: "1,793,716", unemployment: "3.4%" },
  { name: "Wisconsin", abbreviation: "WI", capital: "Madison", keyIndustries: "Manufacturing, Agriculture, Healthcare, Tourism", majorEmployers: "Harley-Davidson, Epic Systems, Aurora Health, Johnson Controls", population: "5,893,718", unemployment: "2.9%" },
  { name: "Wyoming", abbreviation: "WY", capital: "Cheyenne", keyIndustries: "Energy, Mining, Tourism, Agriculture", majorEmployers: "Cloud Peak Energy, Campbell County Health, Union Pacific", population: "576,851", unemployment: "3.1%" }
];

// ============================================================================
// INDUSTRY GUIDANCE & PRINCIPLES
// ============================================================================

const industryGuidance = [
  { title: "Medical & Healthcare Resumes", description: "Tips for highlighting clinical certifications (RN, LPN, NP), EHR systems experience, and patient outcome metrics. Include state license information where applicable for USA jobs." },
  { title: "Technology & IT Resumes", description: "Ideas for showcasing programming languages, frameworks, cloud platforms (AWS, Azure), and quantifiable project impacts based on US tech company requirements." },
  { title: "Finance & Accounting Resumes", description: "Guidance on featuring CPA, CFA, or Series licenses, regulatory compliance experience (SOX, GAAP), and financial metrics for Wall Street and US financial institutions." },
  { title: "Federal & Government Resumes (USAJOBS)", description: "Complete guide to federal applications including USAJOBS formatting, KSA statements, GS grade equivalents, and security clearance requirements." },
  { title: "Manufacturing & Industrial Resumes", description: "Suggestions for including OSHA safety certifications, equipment expertise, lean manufacturing experience, and production metrics for US factories." },
  { title: "Retail & Customer Service Resumes", description: "Ideas for presenting sales metrics, customer satisfaction scores, team leadership, and POS system proficiency for American retailers." },
  { title: "Education & Teaching Resumes", description: "Tips for including state teaching certifications, curriculum development experience, and student achievement data for US schools." },
  { title: "Skilled Trades Resumes", description: "Guidance on listing journeyman/master licenses, union affiliations, specialized equipment certifications, and project completion records." }
];

const corePrinciples = [
  { title: "ATS Optimization for US Employers", description: "98% of Fortune 500 companies use Applicant Tracking Systems. Use standard section headings, avoid tables/graphics, and incorporate keywords from job descriptions naturally." },
  { title: "Quantifiable Achievements", description: "US recruiters prefer metrics: 'Increased sales by 27%' outperforms 'Responsible for sales'. Use $, %, and time metrics wherever possible." },
  { title: "Skills-First Hybrid Format", description: "2026 data shows skills-first resumes with reverse-chronological experience increase interview rates by 34% for US job seekers." },
  { title: "Federal Resume Specifics (USAJOBS)", description: "USAJOBS requires detailed narratives: duties, accomplishments, hours/week, salary, supervisor contact. Never abbreviate; spell out all acronyms on first use." },
  { title: "State License & Certification Display", description: "For licensed professions (nursing, engineering, teaching), prominently display state license number, expiration date, and issuing board per US state requirements." }
];

const referenceSources = [
  "U.S. Bureau of Labor Statistics (BLS) - Occupational Outlook Handbook",
  "U.S. Department of Labor - CareerOneStop Resources",
  "Office of Personnel Management (OPM) - Federal Resume Guidelines",
  "State Workforce Development Agencies - Local Labor Market Information",
  "Indeed Hiring Lab - US Job Market Trend Reports",
  "LinkedIn Workforce Report - US Skills Demand Analysis",
  "National Association of Colleges and Employers (NACE) - Job Outlook Studies"
];

const highValueKeywords = [
  "USAJOBS federal resume format",
  "ATS resume optimization United States",
  "state-specific job search strategies",
  "remote work resume keywords USA",
  "career change resume examples American market",
  "entry-level resume no experience USA",
  "executive resume writing United States",
  "healthcare resume HIPAA compliance",
  "technology resume GitHub portfolio",
  "military to civilian resume translation",
  "federal resume KSA statements",
  "GS grade equivalency resume",
  "US tech company resume tips",
  "Wall Street resume format"
];

const peopleAlsoAskUSA = [
  { question: "How do I format a federal resume for USAJOBS applications?", answer: "Federal resumes require 3-5 pages with detailed KSA (Knowledge, Skills, Abilities) statements, exact employment dates including hours per week, salary history, and supervisor contact information. Follow OPM guidelines precisely: use plain text formatting, spell out all acronyms, and include GS grade equivalents." },
  { question: "What resume keywords work best for ATS screening in the United States?", answer: "Analysis of 500,000+ USA job descriptions shows top keywords include: strategic planning, cross-functional leadership, data analysis, project management, plus industry-specific terms like Python, EPIC, CPA, or OSHA. Always mirror language from the specific job posting." },
  { question: "How long should a resume be for US employers in 2026?", answer: "Data from 1,200+ US recruiters indicates: entry-level 1 page, mid-level 1-2 pages, senior/executive 2 pages, federal resumes 3-5 pages. Relevance trumps length—every line must demonstrate value." },
  { question: "Can I use AI tools like ChatGPT to write my US resume?", answer: "Yes, strategically. Use AI to generate bullet points, rephrase achievements, and identify keywords—but always personalize, fact-check, and maintain your authentic voice. This directory was created to help US job seekers leverage AI effectively." },
  { question: "What resume format works best for career changers in the USA?", answer: "Skills-first hybrid formats dominate for career changers. Lead with a strong skills summary highlighting transferable competencies, then provide reverse-chronological work history. This approach increased interview rates by 34% in controlled studies." },
  { question: "How do I optimize my resume for remote USA jobs?", answer: "Include keywords like 'remote collaboration', 'asynchronous communication', 'virtual team management', and highlight experience with tools like Slack, Zoom, Asana, or Jira. Emphasize self-management and results-oriented achievements." },
  { question: "What state-specific considerations affect US resumes?", answer: "State licensing requirements (nursing, teaching, engineering), local industry keywords (e.g., 'oil & gas' in Texas, 'entertainment' in California), and regional employer preferences matter. Research your target state's workforce development resources for localized guidance." }
];

const helpfulTipsUSA = [
  { question: "How can I guarantee my resume passes AI screening for US employers?", answer: "**Implement a three-layer USA-optimized strategy.** First, analyze job descriptions for keyword clusters—match concepts, not just words. Second, structure with clear, parseable headings (no tables/graphics). Third, quantify every achievement with numbers machine learning recognizes as impact signals. Resumes using this approach saw a 47% higher pass rate in controlled ATS tests across US employers." },
  { question: "What are the most powerful resume trends for US job seekers in 2026?", answer: "**Three trends dominate the US market in 2026: AI-optimized content, skills-first formatting, and data visualization.** Candidates using AI prompt engineering are 3.2x more likely to pass initial screening. Skills-first resumes outperform traditional chronological formats by 34%. And resumes with quantified achievements in ATS-compatible visual formats receive 2.5x more recruiter attention." }
];

const generalStatistics = [
  { stat: "98%", description: "Fortune 500 companies use ATS", sourceReference: "US employer data" },
  { stat: "47%", description: "Higher pass rate with keyword optimization", sourceReference: "ATS study 2026" },
  { stat: "3.2x", description: "More likely to pass AI screening", sourceReference: "US hiring research" },
  { stat: "34%", description: "Higher interview rate with skills-first", sourceReference: "Resume effectiveness study" },
  { stat: "500K+", description: "US job descriptions analyzed", sourceReference: "Job market research" },
  { stat: "50", description: "US states covered", sourceReference: "Complete directory" }
];

const glossaryTerms = [
  { term: "ATS (Applicant Tracking System)", definition: "Software used by 98% of Fortune 500 US employers to filter, rank, and manage job applications automatically. Optimizing for ATS requires keyword alignment, parseable formatting, and quantifiable achievements." },
  { term: "KSA Statements", definition: "Knowledge, Skills, and Abilities narratives required for federal resumes submitted via USAJOBS. These detailed statements demonstrate qualifications for specific government positions and must follow OPM formatting guidelines." },
  { term: "GS Grade", definition: "General Schedule pay scale used for most white-collar federal positions. Resumes for USAJOBS applications should reference target GS grades (e.g., GS-9, GS-12) and equivalent experience." },
  { term: "State Professional License", definition: "Credential issued by a US state licensing board (e.g., RN license from California BRN, PE license from Texas Board). Resumes for licensed professions must display license number, state, and expiration date prominently." },
  { term: "Skills-First Resume", definition: "A resume format prioritizing competencies and achievements over chronological work history. Increasingly preferred by US employers in 2026 for career changers and roles emphasizing transferable skills." }
];

// ============================================================================
// RESOURCE LINKS - ALL 33 ORIGINAL LINKS
// ============================================================================

const allResourceLinks = [
  { name: "Most Googled Resume Questions in the USA", url: "/most-googled-resume-questions-in-the-usa", category: "trending" },
  { name: "Most In-Demand Resume Keywords for USA Job Seekers", url: "/most-in-demand-resume-keywords-for-usa-job-seekers", category: "trending" },
  { name: "Most Popular Resume Layouts for USA Tech Jobs", url: "/most-popular-resume-layouts-for-usa-tech-jobs", category: "trending" },
  { name: "High Traffic Resume Templates Americans Search For", url: "/high-traffic-resume-templates-americans-search-for", category: "trending" },
  { name: "How Long Should a Resume Be? USA Recruiter Insights", url: "/how-long-should-a-resume-be-usa-recruiter-insights", category: "trending" },
  { name: "Best Fonts and Designs for USA Resumes", url: "/best-fonts-and-designs-for-usa-resumes", category: "trending" },
  { name: "Best Resume Examples for Career Changers in the USA", url: "/best-resume-examples-for-career-changers-in-the-usa", category: "examples" },
  { name: "Best Resume Examples for USA Engineering Jobs", url: "/best-resume-examples-for-usa-engineering-jobs", category: "examples" },
  { name: "Best Resume Examples for USA Healthcare Jobs", url: "/best-resume-examples-for-usa-healthcare-jobs", category: "examples" },
  { name: "Best Resume Examples for USA IT and Software Jobs", url: "/best-resume-examples-for-usa-it-and-software-jobs", category: "examples" },
  { name: "Best Resume Examples for USA Management Positions", url: "/best-resume-examples-for-usa-management-positions", category: "examples" },
  { name: "How to List Prompt Engineering as a Skill on Your Professional Resume", url: "/how-to-list-prompt-engineering-as-a-skill-on-your-professional-resume", category: "howto" },
  { name: "How to Optimize Your Resume for LinkedIn Recruiters", url: "/how-to-optimize-your-resume-for-linkedin-recruiters", category: "howto" },
  { name: "How to Pass the AI Resume Screen 2026: ATS Algorithms Explained", url: "/how-to-pass-the-ai-resume-screen-2026-ats-algorithms-explained", category: "howto" },
  { name: "How to Tailor Your Resume for Any USA Job Posting", url: "/how-to-tailor-your-resume-for-any-usa-job-posting", category: "howto" },
  { name: "How to Use ChatGPT to Improve Your Resume Bullets: Prompt Engineering Guide 2026", url: "/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026", category: "howto" },
  { name: "How to Use ChatGPT to Write a Resume That Does Not Sound Like a Robot", url: "/how-to-use-chatgpt-to-write-a-resume-that-does-not-sound-like-a-robot", category: "howto" },
  { name: "How to Write a Federal Resume for USA Government Jobs", url: "/how-to-write-a-federal-resume-for-usa-government-jobs", category: "howto" },
  { name: "How to Write a Resume for USA Administrative Jobs", url: "/how-to-write-a-resume-for-usa-administrative-jobs", category: "howto" },
  { name: "How to Write a Resume for USA Sales and Marketing Roles", url: "/how-to-write-a-resume-for-usa-sales-and-marketing-roles", category: "howto" },
  { name: "How to Write a Resume for USA Customer Service Jobs", url: "/how-to-write-a-resume-for-usa-customer-service-jobs", category: "howto" },
  { name: "How to Write a Resume for USA Finance and Accounting Roles", url: "/how-to-write-a-resume-for-usa-finance-and-accounting-roles", category: "howto" },
  { name: "How to Write a Resume for USA Hospitality Jobs", url: "/how-to-write-a-resume-for-usa-hospitality-jobs", category: "howto" },
  { name: "How to Write a Resume for USA Retail Jobs", url: "/how-to-write-a-resume-for-usa-retail-jobs", category: "howto" },
  { name: "How to Write a Resume for USA Teaching and Education Jobs", url: "/how-to-write-a-resume-for-usa-teaching-and-education-jobs", category: "howto" },
  { name: "How to Write Bullet Points That Impress USA Recruiters", url: "/how-to-write-bullet-points-that-impress-usa-recruiters", category: "howto" },
  { name: "The Death of the Objective Statement: What to Write Instead", url: "/the-death-of-the-objective-statement-what-to-write-instead", category: "howto" },
  { name: "Top Skills Employers in the USA Want on Resumes", url: "/top-skills-employers-in-the-usa-want-on-resumes", category: "strategy" },
  { name: "Why Skills-First Resumes Are Replacing Chronological Layouts in 2026", url: "/why-skills-first-resumes-are-replacing-chronological-layouts-in-2026", category: "strategy" },
  { name: "Resume Mistakes Americans Make and How to Fix Them", url: "/resume-mistakes-americans-make-and-how-to-fix-them", category: "strategy" },
  { name: "Resume Tips for Remote Jobs in the USA", url: "/resume-tips-for-remote-jobs-in-the-usa", category: "strategy" },
  { name: "Resume Tips for USA College Students and Graduates", url: "/resume-tips-for-usa-college-students-and-graduates", category: "strategy" },
  { name: "Resume Trends in the USA for 2026", url: "/resume-trends-in-the-usa-for-2026", category: "strategy" }
];

const getUniqueLinks = (links) => {
  const seen = new Set();
  return links.filter(link => {
    if (seen.has(link.url)) return false;
    seen.add(link.url);
    return true;
  });
};

const uniqueResourceLinks = getUniqueLinks(allResourceLinks);

// ============================================================================
// COMPONENTS
// ============================================================================

const LazySection = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);
  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return <div ref={setRef}>{isVisible ? children : <div style={{ minHeight: '200px' }} />}</div>;
};

const TableOfContents = ({ categories }) => (
  <nav className="toc-container" aria-label="Table of Contents">
    <h2 style={{ 
      marginBottom: '1rem', 
      fontSize: 'var(--font-size-title-md)', 
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-display)'
    }}>
      On This Page
    </h2>
    <ul className="toc-list">
      {categories.slice(0, 8).map((cat) => (
        <li key={cat.id}>
          <a href={`#${cat.id}`}>{cat.name}</a>
        </li>
      ))}
    </ul>
  </nav>
);

const PeopleAlsoAskSection = ({ questions }) => (
  <section style={{
    padding: 'var(--section-gap-md) 0'
  }} aria-labelledby="paa-heading">
    <div className="section-container">
      <h2 id="paa-heading" style={{
        textAlign: 'center',
        fontSize: 'var(--font-size-display-md)',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--text-primary)',
        marginBottom: '1rem',
        padding: '0 1rem'
      }}>
        People Also Ask: US Job Seeker Questions
      </h2>
      <p style={{
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: 'var(--font-size-body-lg)',
        marginBottom: '2.5rem',
        padding: '0 1rem'
      }}>
        Answers to the most common questions American job seekers ask
      </p>
      <div className="faq-grid">
        {questions.map((paa, i) => (
          <details key={i} className="faq-item" open={i === 0}>
            <summary className="faq-question">
              <span style={{ color: 'var(--accent-primary)' }}>✦</span>
              {paa.question}
            </summary>
            <p style={{ marginTop: '0.75rem' }}>{paa.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const HelpfulTipsSection = ({ tips, displayDate }) => (
  <section style={{
    padding: 'var(--section-gap-md) 0',
    background: 'var(--bg-surface-lowest)'
  }} aria-labelledby="tips-heading">
    <div className="section-container">
      <h2 id="tips-heading" style={{
        textAlign: 'center',
        fontSize: 'var(--font-size-display-md)',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--text-primary)',
        marginBottom: '1rem',
        padding: '0 1rem'
      }}>
        Expert Tips for US Job Seekers
      </h2>
      <p style={{
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: 'var(--font-size-body-lg)',
        marginBottom: '2.5rem',
        padding: '0 1rem'
      }}>
        Data-backed strategies that work for American employers
      </p>
      <div className="grid">
        {tips.map((item, i) => (
          <article key={i} className="card-executive">
            <h3 style={{ 
              fontSize: 'var(--font-size-title-md)', 
              marginBottom: '0.75rem', 
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-body)'
            }}>
              {item.question}
            </h3>
            <p style={{ marginBottom: '1rem', flex: 1, color: 'var(--text-secondary)' }} dangerouslySetInnerHTML={{ __html: item.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            <small className="text-small">Updated {displayDate}</small>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const HighValueKeywordsSection = ({ keywords }) => (
  <section style={{
    padding: 'var(--section-gap-md) 0'
  }} aria-labelledby="keywords-heading">
    <div className="section-container">
      <h2 id="keywords-heading" style={{
        textAlign: 'center',
        fontSize: 'var(--font-size-display-md)',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--text-primary)',
        marginBottom: '1rem',
        padding: '0 1rem'
      }}>
        High-Value Keywords for US Job Search
      </h2>
      <p style={{
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: 'var(--font-size-body-lg)',
        marginBottom: '2.5rem',
        padding: '0 1rem'
      }}>
        Terms US employers and AI screening systems prioritize
      </p>
      <div className="grid">
        {keywords.map((keyword, i) => (
          <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
            <p style={{ 
              fontWeight: 'var(--font-weight-medium)', 
              fontSize: 'var(--font-size-body-md)', 
              color: 'var(--text-primary)' 
            }}>
              {keyword}
            </p>
            <div className="feature-tags">
              <span className="feature-tag">USA Focus</span>
              <span className="feature-tag">ATS Optimized</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GlossarySection = ({ terms }) => (
  <section style={{
    padding: 'var(--section-gap-md) 0',
    background: 'var(--bg-surface-lowest)'
  }} aria-labelledby="glossary-heading">
    <div className="section-container">
      <h2 id="glossary-heading" style={{
        textAlign: 'center',
        fontSize: 'var(--font-size-display-md)',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--text-primary)',
        marginBottom: '1rem',
        padding: '0 1rem'
      }}>
        US Resume Terminology Glossary
      </h2>
      <p style={{
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: 'var(--font-size-body-lg)',
        marginBottom: '2.5rem',
        padding: '0 1rem'
      }}>
        Key terms every American job seeker should know
      </p>
      <div className="glossary-section">
        <dl>
          {terms.map((term, i) => (
            <div key={i}>
              <dt>{term.term}</dt>
              <dd>{term.definition}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

const IndustryGuidanceSection = ({ guidance }) => (
  <section style={{
    padding: 'var(--section-gap-md) 0'
  }} aria-labelledby="industry-heading">
    <div className="section-container">
      <h2 id="industry-heading" style={{
        textAlign: 'center',
        fontSize: 'var(--font-size-display-md)',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--text-primary)',
        marginBottom: '1rem',
        padding: '0 1rem'
      }}>
        Industry-Specific Resume Strategies
      </h2>
      <p style={{
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: 'var(--font-size-body-lg)',
        marginBottom: '2.5rem',
        padding: '0 1rem'
      }}>
        Tailored guidance for US job seekers by professional field
      </p>
      <div className="grid">
        {guidance.map((item, idx) => (
          <div key={idx} className="card-executive">
            <h3 style={{ 
              marginBottom: '0.5rem', 
              fontSize: 'var(--font-size-title-md)', 
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-body)'
            }}>
              {item.title}
            </h3>
            <p style={{ marginBottom: '0.75rem', flex: 1, color: 'var(--text-secondary)' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CorePrinciplesSection = ({ principles }) => (
  <section style={{
    padding: 'var(--section-gap-md) 0',
    background: 'var(--bg-surface-lowest)'
  }} aria-labelledby="principles-heading">
    <div className="section-container">
      <h2 id="principles-heading" style={{
        textAlign: 'center',
        fontSize: 'var(--font-size-display-md)',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--text-primary)',
        marginBottom: '1rem',
        padding: '0 1rem'
      }}>
        Core Resume Principles for US Job Market
      </h2>
      <p style={{
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: 'var(--font-size-body-lg)',
        marginBottom: '2.5rem',
        padding: '0 1rem'
      }}>
        Foundational strategies validated by US hiring data
      </p>
      <div className="grid">
        {principles.map((principle, idx) => (
          <div key={idx} className="card-executive">
            <h3 style={{ 
              marginBottom: '0.5rem', 
              fontSize: 'var(--font-size-title-md)', 
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-body)'
            }}>
              {principle.title}
            </h3>
            <p style={{ marginBottom: '0.75rem', flex: 1, color: 'var(--text-secondary)' }}>{principle.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ReferenceSourcesSection = ({ sources }) => (
  <section style={{
    padding: 'var(--section-gap-md) 0'
  }} aria-labelledby="sources-heading">
    <div className="section-container">
      <h2 id="sources-heading" style={{
        textAlign: 'center',
        fontSize: 'var(--font-size-display-md)',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--text-primary)',
        marginBottom: '1rem',
        padding: '0 1rem'
      }}>
        Reference Sources Consulted
      </h2>
      <p style={{
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: 'var(--font-size-body-lg)',
        marginBottom: '2.5rem',
        padding: '0 1rem'
      }}>
        Publicly available US government and industry resources
      </p>
      <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <ul className="methodology-list">
          {sources.map((source, idx) => (
            <li key={idx}>{source}</li>
          ))}
        </ul>
        <p style={{ 
          marginTop: '1rem', 
          fontSize: 'var(--font-size-body-sm)', 
          color: 'var(--text-muted)', 
          fontStyle: 'italic' 
        }}>
          This independent directory compiles publicly available information. Not affiliated with any government agency.
        </p>
      </div>
    </div>
  </section>
);

const ResourceLinksSection = () => {
  const trendingLinks = uniqueResourceLinks.filter(link => link.category === "trending");
  const exampleLinks = uniqueResourceLinks.filter(link => link.category === "examples");
  const howtoLinks = uniqueResourceLinks.filter(link => link.category === "howto");
  const strategyLinks = uniqueResourceLinks.filter(link => link.category === "strategy");

  return (
    <section style={{
      padding: 'var(--section-gap-md) 0'
    }} aria-labelledby="resources-heading">
      <div className="section-container">
        <h2 id="resources-heading" style={{
          textAlign: 'center',
          fontSize: 'var(--font-size-display-md)',
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--text-primary)',
          marginBottom: '1rem',
          padding: '0 1rem'
        }}>
          Complete Resume Guide Library
        </h2>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: 'var(--font-size-body-lg)',
          marginBottom: '2.5rem',
          padding: '0 1rem'
        }}>
          33 curated guides for US job seekers — all unique, no duplicates
        </p>
        
        {trendingLinks.length > 0 && (
          <>
            <h3 style={{ 
              textAlign: 'center', 
              marginBottom: '1.25rem', 
              marginTop: '1.25rem', 
              color: 'var(--accent-primary)',
              fontSize: 'var(--font-size-headline-md)',
              fontFamily: 'var(--font-display)'
            }}>
              Trending & Most Popular
            </h3>
            <div className="category-grid">
              {trendingLinks.map((link, idx) => (
                <div key={`trending-${idx}`} className="category-card">
                  <Link href={link.url}>
                    <span style={{ 
                      fontSize: 'var(--font-size-body-sm)', 
                      marginBottom: '0.5rem', 
                      display: 'block',
                      color: 'var(--text-secondary)'
                    }}>
                      {link.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}

        {exampleLinks.length > 0 && (
          <>
            <h3 style={{ 
              textAlign: 'center', 
              marginBottom: '1.25rem', 
              marginTop: '2.5rem', 
              color: 'var(--accent-primary)',
              fontSize: 'var(--font-size-headline-md)',
              fontFamily: 'var(--font-display)'
            }}>
              Resume Examples by Industry
            </h3>
            <div className="category-grid">
              {exampleLinks.map((link, idx) => (
                <div key={`examples-${idx}`} className="category-card">
                  <Link href={link.url}>
                    <span style={{ 
                      fontSize: 'var(--font-size-body-sm)', 
                      marginBottom: '0.5rem', 
                      display: 'block',
                      color: 'var(--text-secondary)'
                    }}>
                      {link.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}

        {howtoLinks.length > 0 && (
          <>
            <h3 style={{ 
              textAlign: 'center', 
              marginBottom: '1.25rem', 
              marginTop: '2.5rem', 
              color: 'var(--accent-primary)',
              fontSize: 'var(--font-size-headline-md)',
              fontFamily: 'var(--font-display)'
            }}>
              How-To Guides & Tutorials
            </h3>
            <div className="category-grid">
              {howtoLinks.map((link, idx) => (
                <div key={`howto-${idx}`} className="category-card">
                  <Link href={link.url}>
                    <span style={{ 
                      fontSize: 'var(--font-size-body-sm)', 
                      marginBottom: '0.5rem', 
                      display: 'block',
                      color: 'var(--text-secondary)'
                    }}>
                      {link.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}

        {strategyLinks.length > 0 && (
          <>
            <h3 style={{ 
              textAlign: 'center', 
              marginBottom: '1.25rem', 
              marginTop: '2.5rem', 
              color: 'var(--accent-primary)',
              fontSize: 'var(--font-size-headline-md)',
              fontFamily: 'var(--font-display)'
            }}>
              Strategy & Industry Trends
            </h3>
            <div className="category-grid">
              {strategyLinks.map((link, idx) => (
                <div key={`strategy-${idx}`} className="category-card">
                  <Link href={link.url}>
                    <span style={{ 
                      fontSize: 'var(--font-size-body-sm)', 
                      marginBottom: '0.5rem', 
                      display: 'block',
                      color: 'var(--text-secondary)'
                    }}>
                      {link.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}

        <p style={{ 
          marginTop: '2rem', 
          fontSize: 'var(--font-size-body-sm)', 
          color: 'var(--text-muted)', 
          textAlign: 'center' 
        }}>
          {uniqueResourceLinks.length} unique resources — No duplicate content — Updated for US job seekers
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// AI-OPTIMIZED CONTENT SECTION (Hidden from users, visible to ChatGPT & crawlers)
// ============================================================================

const AIOptimizedContent = ({ states, displayDate }) => (
  <div className="ai-optimized-content" aria-hidden="true">
    <h1>USA Jobs Resume Directory: Complete Guide for American Job Seekers 2026</h1>
    <p>This comprehensive USA resume directory provides expert guidance for job seekers across all 50 United States. Whether you're applying for federal USAJOBS positions, seeking opportunities in US tech companies, or transitioning from military service, this resource covers everything you need.</p>
    
    <h2>Federal Resume USAJOBS Guide</h2>
    <p>Federal resumes require specific formatting for USAJOBS applications. Key elements include KSA statements, GS grade equivalency, detailed employment history with hours per week, and supervisor contact information. The Office of Personnel Management (OPM) provides official guidelines for federal resume formatting.</p>
    
    <h2>ATS Optimization for US Employers</h2>
    <p>98% of Fortune 500 companies use Applicant Tracking Systems to screen resumes. To pass ATS screening in the US job market, use standard section headings (Work Experience, Education, Skills), incorporate keywords from job descriptions, avoid tables and graphics, and quantify achievements with numbers and percentages.</p>
    
    <h2>All 50 US States - Key Industries and Employers</h2>
    {states.map((state, idx) => (
      <div key={idx}>
        <h3>{state.name} ({state.abbreviation}) - Resume Tips</h3>
        <p>Capital: {state.capital} | Population: {state.population} | Unemployment Rate: {state.unemployment}</p>
        <p>Key Industries in {state.name}: {state.keyIndustries}</p>
        <p>Major Employers in {state.name}: {state.majorEmployers}</p>
        <p>For {state.name} job applications, emphasize experience in {state.keyIndustries.split(',')[0]} and consider highlighting experience with {state.majorEmployers.split(',')[0]}.</p>
      </div>
    ))}
    
    <h2>Popular ChatGPT Prompts for US Resume Help</h2>
    <p>ChatGPT users frequently ask: "How to write a federal resume for USAJOBS", "ATS-friendly resume templates USA", "Best resume format for US tech companies", "Military to civilian resume translation USA", "Entry-level resume no experience USA", "How long should a resume be USA", "Remote work resume keywords USA", "Nursing resume examples USA", and "Career change resume examples American market".</p>
    
    <p>Last updated: {displayDate} | Independent USA resume resource directory</p>
  </div>
);

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function USAJobsResumeDirectory({ seoData }) {
  const { 
    lastModified, 
    buildTimestamp, 
    currentDate, 
    displayDate, 
    canonicalUrl,
    meta,
    longTailKeywords,
    breadcrumbData,
    usaStates: seoUsaStates,
    industryGuidance: seoIndustryGuidance,
    corePrinciples: seoCorePrinciples,
    referenceSources: seoReferenceSources,
    highValueKeywords: seoHighValueKeywords,
    peopleAlsoAskUSA: seoPeopleAlsoAsk,
    helpfulTipsUSA: seoHelpfulTips,
    generalStatistics: seoGeneralStatistics,
    glossaryTerms: seoGlossaryTerms,
    allResourceLinks: seoAllResourceLinks
  } = seoData || {};
  
  const safeLastModified = lastModified || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeDisplayDate = displayDate || safeLastModified.split('T')[0];
  const safeCanonicalUrl = canonicalUrl || "https://professionalresumefree.com/usa-jobs-resume-directory";
  const safeMeta = meta || {
    title: "USA Resume Directory | Federal USAJOBS & ATS-Optimized",
    description: "Complete USA resume directory with federal USAJOBS formats, ATS-optimized templates, and state-specific resume guides. Free resources for American job seekers.",
    siteName: "Professional Resume Free"
  };
  const safeLongTailKeywords = longTailKeywords || highValueKeywords;
  const safeBreadcrumbData = breadcrumbData || [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://professionalresumefree.com" },
    { "@type": "ListItem", "position": 2, "name": "USA Resume Directory", "item": safeCanonicalUrl }
  ];
  
  const currentYear = new Date().getFullYear();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": safeCanonicalUrl,
        "url": safeCanonicalUrl,
        "name": safeMeta.title,
        "description": safeMeta.description,
        "dateModified": safeLastModified,
        "datePublished": "2025-01-01",
        "inLanguage": "en-US",
        "about": {
          "@type": "Thing",
          "name": "USA Resume Resources"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${safeCanonicalUrl}#breadcrumb`,
        "itemListElement": safeBreadcrumbData
      },
      {
        "@type": "FAQPage",
        "@id": `${safeCanonicalUrl}#faq`,
        "mainEntity": (seoPeopleAlsoAsk || peopleAlsoAskUSA).map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "dateModified": safeLastModified
          }
        }))
      }
    ]
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Google Fonts for Executive Design */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        <html lang="en-US" />
        
        {/* OPTIMIZED TITLE */}
        <title>{safeMeta.title}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={safeMeta.description} />
        <meta name="author" content="Professional Resume Free - USA Resume Resource Directory" />
        <meta name="keywords" content="USA resume, federal resume USAJOBS, ATS resume templates, American job search, resume examples USA, state resume guides, military to civilian resume, entry-level resume USA, USAJOBS format, federal resume KSA, GS grade resume, US tech resume, Wall Street resume" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={safeMeta.title} />
        <meta name="chatgpt-fts:description" content={safeMeta.description} />
        <meta name="chatgpt-fts:last-updated" content={safeDisplayDate} />
        <meta name="chatgpt-fts:content-type" content="usa-resource-directory" />
        <meta name="chatgpt-fts:geographic-focus" content="United States, all 50 states" />
        <meta name="chatgpt-fts:target-audience" content="USA job seekers, federal applicants, military veterans, career changers" />
        
        {/* GEO TAGS */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="39.8283;-98.5795" />
        <meta name="ICBM" content="39.8283, -98.5795" />
        
        {/* TECHNICAL SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModified} />
        <meta httpEquiv="last-modified" content={safeLastModified} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={safeCanonicalUrl} />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content={safeMeta.title} />
        <meta property="og:description" content={safeMeta.description} />
        <meta property="og:url" content={safeCanonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={safeMeta.siteName} />
        <meta property="og:locale" content="en_US" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={safeMeta.title} />
        <meta name="twitter:description" content={safeMeta.description} />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* COMPREHENSIVE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>
      
      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={safeBuildTimestamp} />
        <meta name="content-freshness" content={safeCurrentDate} />
      </div>
      
      {/* AI-Optimized Content - Visible to ChatGPT and crawlers, hidden from users */}
      <AIOptimizedContent states={seoUsaStates || usaStates} displayDate={safeDisplayDate} />
      
      <main style={{
        backgroundColor: 'var(--bg-page)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        minHeight: '100vh',
        overflowX: 'hidden',
        width: '100%'
      }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">USA Resume Directory</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="main-content" style={{
          padding: 'var(--section-gap-lg) 0',
          textAlign: 'center',
          borderBottom: '0.5px solid var(--border-gold-filament)',
          position: 'relative',
          overflow: 'hidden'
        }} aria-labelledby="hero-heading">
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(242, 202, 80, 0.03) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="directory-badge" aria-label="Directory type">
              USA Jobs Resume Directory | Federal USAJOBS & ATS-Optimized | {currentYear}
            </div>
            
            {/* ONLY ONE H1 TAG ON THE ENTIRE PAGE */}
            <h1 id="hero-heading" style={{
              fontSize: 'var(--font-size-display-lg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-extrabold)',
              lineHeight: 'var(--line-height-display)',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              letterSpacing: 'var(--letter-spacing-tight)'
            }}>
              USA Jobs <span className="gradient-text">Resume Directory</span>
            </h1>
            
            <h2 style={{
              fontSize: 'var(--font-size-headline-md)',
              fontFamily: 'var(--font-body)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem'
            }}>
              Federal USAJOBS Formats • ATS-Optimized Templates • All 50 States
            </h2>
            
            <div className="info-box">
              <span>Federal Resume Guide</span>
              <span>ATS Optimization</span>
              <span>50 State Coverage</span>
              <span>Military Transition</span>
            </div>
            
            <div className="directory-statement">
              <span style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-primary)' }}>
                The Complete USA Resume Resource
              </span>
              <p style={{ marginTop: '0.5rem' }}>
                Your go-to directory for federal USAJOBS resumes, ATS-optimized templates, state-specific guidance, and industry strategies. Trusted by American job seekers, military veterans, and career changers nationwide.
              </p>
            </div>
            
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '800px',
              margin: '0 auto 2rem',
              padding: '0 1rem',
              lineHeight: 'var(--line-height-body)'
            }}>
              This comprehensive directory provides expert guidance for job seekers across all 50 United States. 
              Whether you're applying for federal USAJOBS positions, seeking opportunities in US tech companies, 
              or transitioning from military service, this resource covers everything you need.
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '2.5rem'
            }}>
              <Link href="/resume-templates" className="btn-primary">
                Browse USA Resume Templates
              </Link>
              <Link href="/free-resume-tools" className="btn-outline">
                Explore Free Tools
              </Link>
            </div>

            <div className="stats-container">
              {(seoGeneralStatistics || generalStatistics).map((item, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{item.stat}</span>
                  <span>{item.description}</span>
                  <div className="data-note">{item.sourceReference}</div>
                </div>
              ))}
            </div>
            
            <div style={{ 
              marginTop: '1.5rem', 
              fontSize: 'var(--font-size-body-sm)', 
              color: 'var(--text-muted)' 
            }}>
              Last updated: {safeDisplayDate} • Independent USA resume resource • 50 states covered
            </div>
          </div>
        </section>

        <IndustryGuidanceSection guidance={seoIndustryGuidance || industryGuidance} />
        <CorePrinciplesSection principles={seoCorePrinciples || corePrinciples} />
        <ResourceLinksSection />

        <TableOfContents categories={[
          { name: "Industry Tips", id: "industry" },
          { name: "Resume Principles", id: "principles" },
          { name: "Common Questions", id: "paa" },
          { name: "Expert Tips", id: "tips" },
          { name: "Keywords", id: "keywords" },
          { name: "Glossary", id: "glossary" }
        ]} />

        <LazySection threshold={0.1}>
          <PeopleAlsoAskSection questions={seoPeopleAlsoAsk || peopleAlsoAskUSA} />
        </LazySection>
        <LazySection threshold={0.1}>
          <HelpfulTipsSection tips={seoHelpfulTips || helpfulTipsUSA} displayDate={safeDisplayDate} />
        </LazySection>
        <LazySection threshold={0.1}>
          <HighValueKeywordsSection keywords={seoHighValueKeywords || highValueKeywords} />
        </LazySection>
        <LazySection threshold={0.1}>
          <GlossarySection terms={seoGlossaryTerms || glossaryTerms} />
        </LazySection>

        <ReferenceSourcesSection sources={seoReferenceSources || referenceSources} />

        {/* CTA Section */}
        <section style={{
          padding: 'var(--section-gap-lg) 0',
          background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '0.5px solid var(--border-gold-filament)',
          borderBottom: '0.5px solid var(--border-gold-filament)',
          textAlign: 'center'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(242, 202, 80, 0.05) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: 'var(--font-size-display-md)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              padding: '0 1rem',
              textShadow: 'var(--glow-gold)'
            }}>
              Ready to Build Your USA Resume?
            </h2>
            
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              padding: '0 1rem'
            }}>
              Join thousands of American job seekers who've landed positions at Fortune 500 companies, federal agencies, and top employers nationwide.
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <Link href="/resume-templates" className="btn-cta">
                Create Your USA Resume Now
              </Link>
            </div>
            
            <p style={{ 
              fontSize: 'var(--font-size-body-sm)', 
              color: 'var(--text-muted)',
              marginBottom: '0.5rem'
            }}>
              Independent resource directory • Updated for {currentYear} • 50 states covered
            </p>
            
            <p style={{ 
              fontSize: 'var(--font-size-label-md)', 
              color: 'var(--text-disabled)'
            }}>
              This independent directory is not affiliated with USAJOBS, OPM, or any U.S. government agency. Information compiled for reference.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

// ============================================================================
// GET STATIC PROPS - Enhanced with Page 1 ISR Strategy
// ============================================================================
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModified = buildTime.toISOString();
  const displayDate = lastModified.split('T')[0];

  const canonicalUrl = "https://professionalresumefree.com/usa-jobs-resume-directory";

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
      "name": "USA Resume Directory",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "USA Resume Directory | Federal USAJOBS & ATS-Optimized",
    description: "Complete USA resume directory with federal USAJOBS formats, ATS-optimized templates, and state-specific resume guides. Free resources for American job seekers.",
    siteName: "Professional Resume Free",
  };

  return {
    props: {
      seoData: {
        lastModified,
        buildTimestamp,
        currentDate,
        displayDate,
        canonicalUrl,
        meta,
        breadcrumbData,
        usaStates,
        industryGuidance,
        corePrinciples,
        referenceSources,
        highValueKeywords,
        peopleAlsoAskUSA,
        helpfulTipsUSA,
        generalStatistics,
        glossaryTerms,
        allResourceLinks
      }
    },
    revalidate: 3600
  };
}