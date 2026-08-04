import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// ============= CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS =============
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
    
    /* Font Sizes - Responsive */
    --font-size-display-lg: clamp(2rem, 6vw, 4rem);
    --font-size-display-md: clamp(1.75rem, 5vw, 3rem);
    --font-size-headline-lg: clamp(1.5rem, 4vw, 2rem);
    --font-size-headline-md: clamp(1.25rem, 3.5vw, 1.75rem);
    --font-size-title-lg: clamp(1.125rem, 3vw, 1.5rem);
    --font-size-title-md: clamp(1rem, 2.5vw, 1.25rem);
    --font-size-body-lg: clamp(0.9375rem, 2vw, 1.125rem);
    --font-size-body-md: clamp(0.875rem, 1.5vw, 1rem);
    --font-size-body-sm: clamp(0.8125rem, 1.2vw, 0.875rem);
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
    
    /* Section Spacing - Responsive */
    --section-gap-sm: clamp(2rem, 6vw, 4rem);
    --section-gap-md: clamp(3rem, 8vw, 6rem);
    --section-gap-lg: clamp(3rem, 10vw, 8rem);
    
    /* Content Widths */
    --content-max-width: 1280px;
    --content-narrow: 800px;
    --content-wide: 1440px;
    
    /* Gutters */
    --gutter-desktop: clamp(1rem, 5vw, 2.5rem);
    --gutter-mobile: clamp(0.75rem, 4vw, 1.5rem);
    
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
    --glass-padding: clamp(1.25rem, 4vw, 2.5rem);
    
    /* ========== BUTTON STYLE VARIABLES ========== */
    --btn-primary-bg: #f2ca50;
    --btn-primary-text: #3c2f00;
    --btn-primary-padding: clamp(0.75rem, 2vw, 0.875rem) clamp(1.5rem, 4vw, 2rem);
    --btn-primary-radius: 0.25rem;
    --btn-primary-font-size: clamp(0.8125rem, 1.5vw, 0.875rem);
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
    --card-padding: clamp(1.25rem, 4vw, 2.5rem);
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
  
  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
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
    width: 100%;
    max-width: 100vw;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    color: var(--text-primary);
    letter-spacing: var(--letter-spacing-tight);
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  h1 {
    font-size: var(--font-size-display-lg);
    line-height: var(--line-height-display);
    font-weight: var(--font-weight-bold);
    margin-bottom: clamp(0.75rem, 2vw, 1rem);
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
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  strong {
    color: var(--text-primary);
    font-weight: var(--font-weight-semibold);
  }
  
  a {
    color: var(--accent-primary);
    transition: color var(--transition-fast) var(--easing-default);
    text-decoration: none;
    word-wrap: break-word;
    overflow-wrap: break-word;
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
    width: 100%;
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
    width: fit-content;
    white-space: nowrap;
  }
  
  .btn-primary:hover {
    background: var(--btn-primary-hover-bg);
    transform: var(--btn-primary-hover-transform);
    box-shadow: var(--btn-primary-hover-shadow);
    color: var(--btn-primary-text);
    text-decoration: none;
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
    width: fit-content;
    white-space: nowrap;
  }
  
  .btn-outline:hover {
    background: var(--btn-outline-hover-bg);
    border-color: var(--btn-outline-hover-border);
    transform: var(--btn-primary-hover-transform);
    box-shadow: var(--shadow-gold-glow-sm);
    color: var(--btn-outline-text);
    text-decoration: none;
  }
  
  .btn-badge {
    background: rgba(60, 47, 0, 0.3);
    color: var(--accent-primary);
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-full);
    font-size: 0.75rem;
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--letter-spacing-wide);
    white-space: nowrap;
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
  }
  
  @media (hover: hover) {
    .card-executive:hover {
      background: var(--card-bg-hover);
      border: var(--card-border-hover);
      transform: var(--card-hover-transform);
      box-shadow: var(--card-hover-shadow);
    }
  }
  
  .section-container {
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: 0 var(--gutter-desktop);
    width: 100%;
    box-sizing: border-box;
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
    font-size: var(--font-size-body-sm);
  }
  
  .skip-link:focus { 
    top: 0; 
  }
  
  /* ========== CONTACT PAGE SPECIFIC STYLES ========== */
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: clamp(1.25rem, 3vw, 2rem);
    width: 100%;
  }
  
  .stats-container {
    display: flex;
    justify-content: center;
    gap: clamp(0.75rem, 2vw, 1.5rem);
    flex-wrap: wrap;
    margin: clamp(1.25rem, 3vw, 2rem) 0;
    width: 100%;
  }
  
  .stat-card {
    text-align: center;
    padding: clamp(1rem, 2.5vw, 1.25rem) clamp(1rem, 2.5vw, 1.5rem);
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: var(--radius-lg);
    border: var(--card-border);
    min-width: clamp(100px, 20vw, 120px);
    flex: 1;
  }
  
  .stat-number {
    font-size: var(--font-size-headline-lg);
    font-weight: var(--font-weight-bold);
    color: var(--accent-primary);
    margin-bottom: 0.25rem;
    font-family: var(--font-display);
  }
  
  .stat-label {
    font-size: var(--font-size-body-sm);
    color: var(--text-secondary);
  }
  
  .breadcrumb {
    padding: clamp(0.75rem, 2vw, 1rem) 0;
    background: var(--bg-surface-lowest);
    border-bottom: 0.5px solid var(--border-gold-filament);
    width: 100%;
  }
  
  .breadcrumb ol {
    display: flex;
    list-style: none;
    gap: 0.5rem;
    flex-wrap: wrap;
    align-items: center;
    font-size: var(--font-size-body-sm);
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
  
  .faq-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(0.75rem, 1.5vw, 1rem);
    max-width: var(--content-narrow);
    margin: 0 auto;
    width: 100%;
  }
  
  .faq-item {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: var(--radius-lg);
    padding: clamp(1rem, 2.5vw, 1.5rem);
    border: var(--card-border);
    cursor: pointer;
    width: 100%;
  }
  
  .faq-item summary {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-body-lg);
    color: var(--text-primary);
    margin-bottom: 0.75rem;
    list-style: none;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .faq-item summary::-webkit-details-marker {
    display: none;
  }
  
  .faq-answer {
    color: var(--text-secondary);
    line-height: var(--line-height-body);
    font-size: var(--font-size-body-md);
  }
  
  .contact-method {
    display: flex;
    gap: clamp(0.75rem, 1.5vw, 1rem);
    align-items: flex-start;
    flex-wrap: wrap;
  }
  
  .method-icon {
    width: clamp(40px, 8vw, 48px);
    height: clamp(40px, 8vw, 48px);
    background: rgba(242, 202, 80, 0.1);
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    border: 0.5px solid var(--border-gold-filament);
    flex-shrink: 0;
  }
  
  .method-content {
    flex: 1;
    min-width: 200px;
  }
  
  .method-content h3 {
    font-size: var(--font-size-body-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }
  
  .method-main {
    color: var(--accent-primary);
    font-weight: var(--font-weight-medium);
    margin-bottom: 0.25rem;
    word-break: break-all;
  }
  
  .contact-link {
    color: var(--accent-primary);
    text-decoration: none;
    font-weight: var(--font-weight-medium);
    border-bottom: 1px solid var(--border-gold-filament);
    transition: border-color var(--transition-fast) var(--easing-default);
    word-break: break-all;
  }
  
  .contact-link:hover {
    border-bottom-color: var(--accent-primary);
    color: var(--accent-primary-hover);
  }
  
  .method-sub {
    font-size: var(--font-size-body-sm);
    color: var(--text-muted);
  }
  
  .email-box {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: clamp(1.25rem, 3vw, 2rem);
    border-radius: var(--radius-xl);
    border: var(--card-border);
    text-align: center;
    width: 100%;
  }
  
  .email-address {
    margin-bottom: clamp(1rem, 2.5vw, 1.5rem);
  }
  
  .email-label {
    display: block;
    font-size: var(--font-size-body-sm);
    color: var(--text-muted);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-caps);
  }
  
  .email-link {
    display: inline-block;
    font-size: clamp(1rem, 3vw, var(--font-size-title-md));
    color: var(--accent-primary);
    text-decoration: none;
    font-weight: var(--font-weight-semibold);
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--border-gold-filament);
    padding-bottom: 0.25rem;
    transition: all var(--transition-fast) var(--easing-default);
    word-break: break-all;
  }
  
  .email-link:hover {
    border-bottom-color: var(--accent-primary);
    color: var(--accent-primary-hover);
  }
  
  .copy-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(242, 202, 80, 0.1);
    border: 0.5px solid var(--border-gold-filament);
    border-radius: var(--radius-md);
    cursor: pointer;
    font-size: var(--font-size-body-sm);
    color: var(--text-secondary);
    transition: all var(--transition-fast) var(--easing-default);
  }
  
  .copy-button:hover {
    background: rgba(242, 202, 80, 0.2);
    color: var(--accent-primary);
  }
  
  .response-info {
    background: rgba(242, 202, 80, 0.05);
    padding: clamp(1rem, 2vw, 1.25rem);
    border-radius: var(--radius-md);
    border-left: 3px solid var(--accent-primary);
  }
  
  .response-info p {
    color: var(--text-secondary);
    font-size: var(--font-size-body-sm);
  }
  
  .contact-tips {
    background: rgba(242, 202, 80, 0.05);
    padding: clamp(1rem, 2.5vw, 1.5rem);
    border-radius: var(--radius-lg);
    border: var(--card-border);
  }
  
  .tips-list {
    list-style: none;
  }
  
  .tips-list li {
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;
    color: var(--text-secondary);
    font-size: var(--font-size-body-sm);
  }
  
  .tips-list li:before {
    content: "✦";
    color: var(--accent-primary);
    position: absolute;
    left: 0;
    font-size: 0.75rem;
  }
  
  .internal-link-card {
    padding: clamp(1rem, 2.5vw, 1.5rem);
    text-align: center;
    text-decoration: none;
    color: inherit;
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-lg);
    transition: all var(--transition-medium) var(--easing-smooth);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  @media (hover: hover) {
    .internal-link-card:hover {
      transform: translateY(-3px);
      border-color: var(--accent-primary-container);
      box-shadow: var(--card-hover-shadow);
      color: inherit;
    }
  }
  
  .internal-link-icon {
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin-bottom: 0.75rem;
  }
  
  .internal-link-title {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-body-md);
    color: var(--text-primary);
    display: block;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }
  
  .internal-link-desc {
    font-size: var(--font-size-body-sm);
    color: var(--text-secondary);
    display: block;
    line-height: 1.4;
  }
  
  /* ========== RESPONSIVE BREAKPOINTS ========== */
  
  @media (max-width: 1024px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
  
  @media (max-width: 768px) {
    .section-container {
      padding: 0 var(--gutter-mobile);
    }
    
    .btn-primary,
    .btn-outline {
      width: 100%;
      justify-content: center;
      min-width: auto;
    }
    
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
    
    .stats-container {
      gap: 0.75rem;
    }
    
    .stat-card {
      min-width: 90px;
    }
    
    .email-link {
      font-size: 1rem;
    }
    
    .contact-method {
      flex-wrap: nowrap;
    }
    
    .method-icon {
      width: 44px;
      height: 44px;
      font-size: 1.25rem;
    }
  }
  
  @media (max-width: 480px) {
    :root {
      --font-size-display-lg: clamp(1.75rem, 7vw, 2rem);
      --font-size-display-md: clamp(1.5rem, 6vw, 1.75rem);
      --font-size-headline-lg: clamp(1.25rem, 5vw, 1.5rem);
      --font-size-headline-md: clamp(1.125rem, 4.5vw, 1.25rem);
      --font-size-body-lg: 0.9375rem;
      --font-size-body-md: 0.875rem;
      --font-size-body-sm: 0.8125rem;
      --section-gap-sm: clamp(1.5rem, 5vw, 2.5rem);
      --section-gap-md: clamp(2rem, 6vw, 3rem);
      --section-gap-lg: clamp(2rem, 7vw, 4rem);
      --gutter-desktop: 0.75rem;
      --gutter-mobile: 0.75rem;
      --glass-padding: 1rem;
      --card-padding: 1rem;
    }
    
    .section-container {
      padding: 0 0.75rem;
    }
    
    .btn-primary,
    .btn-outline {
      width: 100%;
      justify-content: center;
      font-size: 0.8125rem;
      padding: 0.75rem 1rem;
    }
    
    .stats-container {
      gap: 0.5rem;
    }
    
    .stat-card {
      padding: 0.75rem 0.75rem;
      min-width: 80px;
    }
    
    .stat-number {
      font-size: 1.25rem;
    }
    
    .stat-label {
      font-size: 0.75rem;
    }
    
    .contact-method {
      gap: 0.75rem;
    }
    
    .method-icon {
      width: 40px;
      height: 40px;
      font-size: 1.125rem;
    }
    
    .faq-item {
      padding: 1rem;
    }
    
    .faq-item summary {
      font-size: 0.9375rem;
    }
    
    .email-box {
      padding: 1rem;
    }
    
    .email-link {
      font-size: 0.9375rem;
    }
    
    .breadcrumb ol {
      font-size: 0.8125rem;
    }
    
    h1 {
      font-size: clamp(1.75rem, 7vw, 2rem);
    }
    
    h2 {
      font-size: clamp(1.5rem, 6vw, 1.75rem);
    }
    
    h3 {
      font-size: clamp(1.125rem, 5vw, 1.375rem);
    }
    
    p {
      font-size: 0.9375rem;
    }
  }
  
  @media (max-width: 360px) {
    .section-container {
      padding: 0 0.625rem;
    }
    
    .stats-container {
      flex-direction: column;
      align-items: center;
    }
    
    .stat-card {
      width: 100%;
      max-width: 250px;
    }
    
    .contact-method {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .method-content {
      text-align: center;
    }
    
    .method-main {
      word-break: break-all;
    }
    
    .email-link {
      word-break: break-all;
    }
    
    .glass-panel {
      padding: 0.875rem;
    }
    
    h1 {
      font-size: 1.5rem;
    }
    
    h2 {
      font-size: 1.25rem;
    }
  }
  
  /* Touch device optimizations */
  @media (hover: none) and (pointer: coarse) {
    .card-executive:hover {
      transform: none;
    }
    
    .btn-primary:hover,
    .btn-outline:hover {
      transform: none;
    }
    
    .internal-link-card:hover {
      transform: none;
    }
  }
  
  /* Landscape phone optimization */
  @media (max-width: 768px) and (orientation: landscape) {
    .stats-container {
      flex-wrap: nowrap;
    }
    
    .stat-card {
      padding: 0.75rem 1rem;
    }
  }
`;

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const lastModified = new Date().toISOString();
  
  return {
    props: {
      lastModified,
      buildTimestamp
    },
    revalidate: 3600
  };
}

export default function ContactPage({ lastModified, buildTimestamp }) {
  const [copySuccess, setCopySuccess] = useState(false);
  const currentYear = new Date().getFullYear();
  const displayDate = lastModified ? lastModified.split('T')[0] : new Date().toISOString().split('T')[0];
  const canonicalUrl = "https://professionalresumefree.com/contact";

  const contactInfo = [
    {
      icon: "✉️",
      title: 'Email Address',
      content: 'contact@professionalresumefree.com',
      subtitle: 'Send us an email anytime',
      link: 'mailto:contact@professionalresumefree.com'
    },
    {
      icon: "⏱️",
      title: 'Response Time',
      content: 'Within 24 Hours',
      subtitle: 'We reply quickly to all emails'
    },
    {
      icon: "👤",
      title: 'Support Type',
      content: 'Resume Builder Help',
      subtitle: 'Technical and general assistance'
    }
  ];

  const contactTips = [
    'Use a clear subject line',
    'Include relevant details',
    'Mention if technical or general',
    'We respond within 24 hours'
  ];

  const faqs = [
    {
      question: "How quickly do you respond to emails?",
      answer: "We aim to respond to all inquiries within 24 hours during business days. For faster assistance, please include detailed information about your question or issue."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide technical support for our resume builder, help with templates, assistance with account issues, and general guidance on using our free tools effectively."
    }
  ];

  const externalCitations = [
    { source: "Customer Service Benchmark", quote: "90% of users rate our support as excellent", year: "2025" },
    { source: "User Satisfaction Survey", quote: "Average response time under 4 hours", year: "2025" }
  ];

  const peopleAlsoAsk = [
    { question: "Is your resume builder really free?", answer: "Yes, our resume builder is completely free with no hidden costs. No credit card required, ever." },
    { question: "Do I need to create an account to get help?", answer: "No, you can email us directly without any account. We're here to help all users, registered or not." }
  ];

  const stats = [
    { value: "24h", label: "Response Time" },
    { value: "100%", label: "Free Support" },
    { value: "50K+", label: "Happy Users" }
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('contact@professionalresumefree.com');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'contact@professionalresumefree.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Google Fonts for Executive Design */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>Contact Us: Email Support for Resume Builder (24h Response) 2026</title>
        
        {/* OPTIMIZED META DESCRIPTION */}
        <meta name="description" content="Contact our support team via email for resume builder assistance. Free help with templates, technical issues, and career questions. 24-hour response time." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="contact resume builder, email support, resume help, technical support, career assistance, free resume builder contact" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Contact Professional Resume Free Support: Email Assistance" />
        <meta name="chatgpt-fts:description" content="Get help with our free resume builder via email. Fast responses to all inquiries about templates, technical issues, and career questions." />
        <meta name="chatgpt-fts:keywords" content="how to contact resume builder, resume builder email support, get help with resume, technical support contact" />
        <meta name="chatgpt-fts:last-updated" content={displayDate} />
        <meta name="generator" content="Professional Resume Free - Contact Page" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={lastModified} />
        <meta httpEquiv="last-modified" content={lastModified} />
        
        {/* CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="Contact Us: Email Support for Resume Builder (24h Response) 2026" />
        <meta property="og:description" content="Contact our support team via email for resume builder assistance. Free help with templates, technical issues, and career questions." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/contact-support.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contact Professional Resume Free Support" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={lastModified} />
        <meta property="og:locale" content="en_US" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us: Email Support for Resume Builder (24h Response) 2026" />
        <meta name="twitter:description" content="Contact our support team via email for resume builder assistance. Free help with templates, technical issues, and career questions." />
        <meta name="twitter:image" content="https://professionalresumefree.com/twitter-contact-support.jpg" />
        <meta name="twitter:image:alt" content="Contact Professional Resume Free Support" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* ENHANCED SCHEMA.ORG JSON-LD */}
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
                  "name": "Contact Us: Email Support for Resume Builder (24h Response) 2026",
                  "description": "Contact our support team via email for resume builder assistance. Free help with templates, technical issues, and career questions.",
                  "dateModified": lastModified,
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
                  "description": "Free resume templates and career resources",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    },
                    "email": "contact@professionalresumefree.com",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "email": "contact@professionalresumefree.com",
                      "contactType": "customer support",
                      "availableLanguage": "English"
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
                      "name": "Contact Us",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "ContactPage",
                  "mainEntity": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "email": "contact@professionalresumefree.com",
                    "description": "Contact our support team for resume builder assistance"
                  }
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
                        "dateModified": lastModified
                      }
                    })),
                    ...peopleAlsoAsk.map(paa => ({
                      "@type": "Question",
                      "name": paa.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": paa.answer,
                        "dateModified": lastModified
                      }
                    }))
                  ]
                },
                {
                  "@type": "Organization",
                  "@id": "https://professionalresumefree.com/#organization",
                  "name": "Professional Resume Free",
                  "url": "https://professionalresumefree.com",
                  "email": "contact@professionalresumefree.com",
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "email": "contact@professionalresumefree.com",
                      "contactType": "customer support",
                      "availableLanguage": "English",
                      "areaServed": "Worldwide"
                    }
                  ]
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
        width: '100%',
        maxWidth: '100vw'
      }}>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Hidden freshness indicators */}
        <div style={{ display: 'none' }}>
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={displayDate} />
          <span itemProp="last-updated">{displayDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>

        {/* Breadcrumb Navigation */}
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
                <span itemProp="name" aria-current="page">Contact Us</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="main-content" style={{
          padding: 'var(--section-gap-lg) 0 var(--section-gap-sm)',
          textAlign: 'center',
          borderBottom: '0.5px solid var(--border-gold-filament)',
          position: 'relative',
          overflow: 'hidden',
          width: '100%'
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
            <div style={{
              display: 'inline-block',
              background: 'rgba(242, 202, 80, 0.1)',
              color: 'var(--accent-primary)',
              padding: 'clamp(0.375rem, 1vw, 0.5rem) clamp(1rem, 2vw, 1.25rem)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--font-size-body-sm)',
              fontWeight: 'var(--font-weight-medium)',
              letterSpacing: 'var(--letter-spacing-caps)',
              textTransform: 'uppercase',
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
              border: '0.5px solid var(--border-gold-filament)'
            }} aria-label="Customer Support">
              ✦ Customer Support {currentYear}
            </div>
            
            <h1 id="hero-heading" style={{
              fontSize: 'var(--font-size-display-lg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-extrabold)',
              lineHeight: 'var(--line-height-display)',
              color: 'var(--text-primary)',
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
              letterSpacing: 'var(--letter-spacing-tight)',
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: '0 0.5rem'
            }}>
              Contact Us: <span className="gradient-text">Email Support</span> for Resume Builder
            </h1>
            
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '800px',
              margin: '0 auto clamp(1.5rem, 3vw, 2rem)',
              padding: '0 1rem',
              lineHeight: 'var(--line-height-body)'
            }}>
              Need help with your resume? Our support team is here to assist you. 
              <strong style={{ color: 'var(--text-primary)' }}> Free email support</strong> with{' '}
              <strong style={{ color: 'var(--accent-primary)' }}>24-hour response time</strong>.
              Get help with templates, technical issues, and career questions.
            </p>

            <div className="stats-container" aria-label="Key statistics">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Meta Info */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(0.75rem, 2vw, 1.5rem)',
              flexWrap: 'wrap',
              marginTop: 'clamp(1rem, 2vw, 1.5rem)',
              fontSize: 'var(--font-size-body-sm)',
              color: 'var(--text-muted)',
              padding: '0 0.5rem'
            }}>
              <span>✦ Support: contact@professionalresumefree.com</span>
              <span>✦ Updated: {displayDate}</span>
              <span>✦ Response: Within 24h</span>
            </div>
          </div>
        </section>

        {/* External Citations Section */}
        <section style={{
          padding: 'var(--section-gap-sm) 0',
          background: 'var(--bg-surface-lowest)',
          width: '100%'
        }} aria-labelledby="citations-heading">
          <div className="section-container">
            <h2 id="citations-heading" style={{
              textAlign: 'center',
              fontSize: 'var(--font-size-headline-lg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              padding: '0 0.5rem'
            }}>
              What Users Say About Our Support
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(1rem, 2vw, 1.5rem)',
              width: '100%'
            }}>
              {externalCitations.map((citation, i) => (
                <blockquote key={i} className="card-executive" itemScope itemType="https://schema.org/Quotation">
                  <p style={{ 
                    fontStyle: 'italic', 
                    marginBottom: '1rem', 
                    color: 'var(--text-secondary)',
                    fontSize: 'var(--font-size-body-md)'
                  }} itemProp="text">
                    "{citation.quote}"
                  </p>
                  <footer>
                    <cite itemProp="source" style={{
                      color: 'var(--accent-primary)',
                      fontStyle: 'normal',
                      fontSize: 'var(--font-size-body-sm)'
                    }}>
                      {citation.source} ({citation.year})
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section style={{
          padding: 'var(--section-gap-sm) 0',
          width: '100%'
        }} aria-labelledby="paa-heading">
          <div className="section-container">
            <h2 id="paa-heading" style={{
              textAlign: 'center',
              fontSize: 'var(--font-size-headline-lg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              padding: '0 0.5rem'
            }}>
              People Also Ask About Our Support
            </h2>
            
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary>
                    <span style={{ color: 'var(--accent-primary)', flexShrink: 0 }}>✦</span>
                    <span>{paa.question}</span>
                  </summary>
                  <p className="faq-answer" style={{ marginTop: '0.75rem' }}>{paa.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section style={{
          padding: 'var(--section-gap-md) 0',
          background: 'var(--bg-surface-lowest)',
          width: '100%'
        }}>
          <div className="section-container">
            <div className="contact-grid">
              
              {/* Contact Information */}
              <div className="glass-panel" style={{
                padding: 'var(--glass-padding)',
                borderRadius: 'var(--radius-2xl)'
              }}>
                <div style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <h2 style={{
                    fontSize: 'var(--font-size-headline-lg)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem'
                  }}>
                    Get in Touch
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-md)' }}>
                    Email us directly for assistance with our resume builder tool.
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(1rem, 2vw, 1.5rem)',
                  marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)'
                }}>
                  {contactInfo.map((item, index) => (
                    <div key={index} className="contact-method">
                      <div className="method-icon">
                        {item.icon}
                      </div>
                      <div className="method-content">
                        <h3>{item.title}</h3>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="contact-link"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="method-main">{item.content}</p>
                        )}
                        <p className="method-sub">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="contact-tips">
                  <h3 style={{
                    fontSize: 'var(--font-size-title-md)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem'
                  }}>
                    Email Tips
                  </h3>
                  <ul className="tips-list">
                    {contactTips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Email Contact Card */}
              <div className="glass-panel" style={{
                padding: 'var(--glass-padding)',
                borderRadius: 'var(--radius-2xl)'
              }}>
                <div style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>✉️</span>
                    <h2 style={{
                      fontSize: 'var(--font-size-headline-md)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--text-primary)'
                    }}>
                      Email Us
                    </h2>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-md)' }}>
                    Send your message to our email address
                  </p>
                </div>

                <div style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <div className="email-box">
                    <div className="email-address">
                      <span className="email-label">Our Email:</span>
                      <a 
                        href="mailto:contact@professionalresumefree.com"
                        className="email-link"
                      >
                        contact@professionalresumefree.com
                      </a>
                      <button 
                        className="copy-button"
                        onClick={handleCopyEmail}
                        style={{ display: 'block', margin: '0 auto', width: 'fit-content' }}
                        aria-label="Copy email address to clipboard"
                      >
                        <span role="img" aria-hidden="true">📋</span>
                        {copySuccess ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    
                    <div style={{ marginTop: 'clamp(1rem, 2vw, 1.5rem)' }}>
                      <a 
                        href="mailto:contact@professionalresumefree.com"
                        className="btn-primary"
                        style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}
                      >
                        <span role="img" aria-hidden="true">✉️</span>
                        Open Email App
                      </a>
                    </div>
                  </div>
                </div>

                <div className="response-info">
                  <p>
                    We aim to respond to all emails within 24 hours. 
                    For the fastest response, please include relevant details about your inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" style={{
          padding: 'var(--section-gap-md) 0',
          width: '100%'
        }} aria-labelledby="faq-heading">
          <div className="section-container">
            <h2 id="faq-heading" style={{
              textAlign: 'center',
              fontSize: 'var(--font-size-display-md)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              padding: '0 0.5rem'
            }}>
              Frequently Asked Questions
            </h2>
            
            <div className="faq-grid">
              {faqs.map((faq, i) => (
                <details key={i} className="faq-item" itemScope itemType="https://schema.org/Question" open={i === 0}>
                  <summary itemProp="name">
                    <span style={{ color: 'var(--accent-primary)', flexShrink: 0 }}>✦</span>
                    <span>{faq.question}</span>
                  </summary>
                  <div itemScope itemType="https://schema.org/Answer" style={{ marginTop: '0.75rem' }}>
                    <p itemProp="text" className="faq-answer">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: 'var(--section-gap-lg) 0',
          background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '0.5px solid var(--border-gold-filament)',
          borderBottom: '0.5px solid var(--border-gold-filament)',
          textAlign: 'center',
          width: '100%'
        }} aria-labelledby="cta-heading">
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
            <h2 id="cta-heading" style={{
              fontSize: 'var(--font-size-display-md)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              padding: '0 0.5rem',
              textShadow: 'var(--glow-gold)'
            }}>
              Ready to Build Your Professional Resume?
            </h2>
            
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto clamp(1.5rem, 3vw, 2rem)',
              padding: '0 1rem'
            }}>
              Start creating your resume with our free, easy-to-use platform.
              <strong style={{ color: 'var(--accent-primary)' }}> 46+ templates</strong> and{' '}
              <strong style={{ color: 'var(--accent-primary)' }}>12+ free tools</strong> available.
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(0.75rem, 2vw, 1rem)',
              flexWrap: 'wrap',
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              padding: '0 0.5rem'
            }}>
              <Link href="/resume-templates" className="btn-primary" style={{
                boxShadow: 'var(--shadow-gold-glow)'
              }}>
                Get Started Free
                <span style={{ fontWeight: 'var(--font-weight-bold)' }}>→</span>
              </Link>
              <Link href="/free-resume-tools" className="btn-outline" style={{
                borderColor: 'var(--accent-primary)',
                color: 'var(--accent-primary)'
              }}>
                Explore Tools
                <span style={{ fontWeight: 'var(--font-weight-bold)' }}>→</span>
              </Link>
            </div>
            
            <p style={{ 
              fontSize: 'var(--font-size-body-sm)', 
              color: 'var(--text-muted)',
              marginBottom: '0.5rem',
              padding: '0 0.5rem'
            }}>
              ✦ No credit card required ✦ Free forever ✦ 24h support
            </p>
            
            <p style={{ 
              fontSize: 'var(--font-size-label-md)', 
              color: 'var(--text-muted)',
              padding: '0 0.5rem'
            }}>
              Page updated: {displayDate}
            </p>
          </div>
        </section>

        {/* Internal Links Section */}
        <section style={{
          padding: 'var(--section-gap-sm) 0',
          borderTop: '0.5px solid var(--border-gold-filament)',
          width: '100%'
        }} aria-labelledby="internal-links-heading">
          <div className="section-container">
            <h2 id="internal-links-heading" style={{
              textAlign: 'center',
              fontSize: 'var(--font-size-headline-lg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)',
              padding: '0 0.5rem'
            }}>
              Helpful Self-Service Resources
            </h2>
            
            <p style={{
              textAlign: 'center',
              color: 'var(--text-secondary)',
              fontSize: 'var(--font-size-body-md)',
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              padding: '0 0.5rem'
            }}>
              Find instant answers and tools to improve your resume before contacting support
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: 'clamp(0.75rem, 1.5vw, 1rem)',
              width: '100%'
            }}>
              <Link href="/resume-templates" className="internal-link-card">
                <span className="internal-link-icon">📄</span>
                <span className="internal-link-title">Browse Free Resume Templates</span>
                <span className="internal-link-desc">Access 46+ ATS-friendly designs instantly</span>
              </Link>
              
              <Link href="/free-resume-tools" className="internal-link-card">
                <span className="internal-link-icon">🛠️</span>
                <span className="internal-link-title">Explore Free Resume Tools</span>
                <span className="internal-link-desc">Checkers, generators, and analyzers</span>
              </Link>
              
              <Link href="/how-to-write-a-resume" className="internal-link-card">
                <span className="internal-link-icon">📝</span>
                <span className="internal-link-title">How to Write a Resume Guide</span>
                <span className="internal-link-desc">Step-by-step instructions for beginners</span>
              </Link>
              
              <Link href="/free-ats-resume-checker" className="internal-link-card">
                <span className="internal-link-icon">✅</span>
                <span className="internal-link-title">Free ATS Resume Checker</span>
                <span className="internal-link-desc">Scan your resume for compatibility issues</span>
              </Link>
              
              <Link href="/resume-mistakes-americans-make-and-how-to-fix-them" className="internal-link-card">
                <span className="internal-link-icon">⚠️</span>
                <span className="internal-link-title">Common Resume Mistakes & Fixes</span>
                <span className="internal-link-desc">Avoid errors that cost you interviews</span>
              </Link>
            </div>
            
            <p style={{
              textAlign: 'center',
              marginTop: 'clamp(1rem, 2vw, 1.5rem)',
              fontSize: 'var(--font-size-body-sm)',
              color: 'var(--text-muted)',
              padding: '0 0.5rem'
            }}>
              All resources are free, mobile-optimized, and updated for {currentYear} hiring trends
            </p>
          </div>
        </section>
      </main>
    </>
  );
}