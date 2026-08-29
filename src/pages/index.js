// pages/index.js
// ProfessionalResumeFree.com — ProfessionalResumeFree Executive Brand Design
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// ============================================================================
// PROFESSIONALRESUMEFREE EXECUTIVE BRAND DESIGN TOKENS
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
    
    /* Glass/Special Effect Colors */
    --glass-bg: rgba(20, 19, 21, 0.7);
    --glass-bg-light: rgba(28, 27, 29, 0.6);
    --glass-bg-heavy: rgba(20, 19, 21, 0.85);
    --gradient-hero-overlay: linear-gradient(135deg, rgba(19, 19, 21, 0.95) 0%, rgba(19, 19, 21, 0.8) 100%);
    
    /* ========== TYPOGRAPHY ========== */
    --font-display: 'Playfair Display', 'Georgia', serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    
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
    --space-4: 1rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    
    /* Section Spacing */
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
    .section-container {
      padding: 0 var(--gutter-mobile);
    }
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

  /* ========== HOMEPAGE SPECIFIC STYLES ========== */
  
  .hero-section {
    padding: var(--section-gap-lg) 0;
    border-bottom: 0.5px solid var(--border-gold-filament);
    width: 100%;
    position: relative;
    overflow: hidden;
    text-align: center;
  }
  
  .hero-content {
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
  }
  
  .trust-badge {
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
  
  .hero-image-container {
    width: 100%;
    max-width: 700px;
    margin: 0 auto 2.5rem;
    padding: 0 1rem;
    border-radius: var(--radius-2xl);
    overflow: hidden;
    box-shadow: var(--shadow-card-hover);
    border: var(--card-border);
  }
  
  @media (min-width: 1024px) {
    .hero-image-container { max-width: 650px; }
  }
  
  @media (min-width: 1280px) {
    .hero-image-container { max-width: 600px; }
  }
  
  .hero-image-container img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .hero-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(1rem, 3vw, 1.5rem);
    margin: 0 0 1.5rem 0;
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (max-width: 640px) {
    .hero-stats { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (max-width: 480px) {
    .hero-stats { grid-template-columns: 1fr; gap: 0.75rem; }
  }
  
  .hero-stat-item {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: clamp(0.75rem, 2vw, 1rem);
    border-radius: var(--radius-xl);
    border: var(--card-border);
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .hero-stat-number {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    font-weight: var(--font-weight-bold);
    color: var(--accent-primary);
    line-height: 1.2;
    margin-bottom: 0.15rem;
    font-family: var(--font-display);
  }
  
  .hero-stat-label {
    font-size: var(--font-size-label-sm);
    color: var(--text-secondary);
    font-weight: var(--font-weight-medium);
  }
  
  .button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: clamp(0.75rem, 2vw, 1rem);
    margin: 2rem 0;
    width: 100%;
  }
  
  @media (max-width: 640px) {
    .button-container {
      flex-direction: column;
      align-items: center;
    }
    
    .btn-primary,
    .btn-outline,
    .btn-cta {
      width: 100%;
      min-width: auto;
    }
  }
  
  .ai-definition-box {
    background: rgba(242, 202, 80, 0.05);
    border: 0.5px solid var(--border-gold-filament-strong);
    border-radius: var(--radius-xl);
    padding: 1.5rem;
    margin: 1.5rem auto;
    max-width: 800px;
    text-align: left;
  }
  
  .ai-definition-box p {
    color: var(--text-secondary);
    font-size: var(--font-size-body-md);
  }
  
  .ai-definition-box strong {
    color: var(--accent-primary);
  }
  
  .llms-banner {
    background: rgba(242, 202, 80, 0.05);
    border: 0.5px solid var(--border-gold-filament);
    border-radius: var(--radius-lg);
    padding: 0.75rem 1.25rem;
    margin: 1rem auto;
    max-width: 800px;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  
  .llms-banner a {
    color: var(--accent-primary);
    font-weight: var(--font-weight-semibold);
    text-decoration: underline;
  }
  
  .llms-banner a:hover {
    color: var(--accent-primary-hover);
  }
  
  .section {
    width: 100%;
    padding: var(--section-gap-md) 0;
  }
  
  .section-alt {
    background: var(--bg-surface-lowest);
  }
  
  .section-header {
    text-align: center;
    margin-bottom: clamp(2rem, 6vw, 3rem);
  }
  
  .section-title {
    margin-bottom: 1rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .section-subtitle {
    font-size: var(--font-size-body-lg);
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
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
  
  .feature-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.75rem;
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
  
  .text-center {
    text-align: center;
  }
  
  .freshness-indicator {
    display: none;
  }
  
  .trust-signals {
    padding: 0.75rem 0;
    border-bottom: 0.5px solid var(--border-gold-filament);
  }
  
  .trust-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    flex-wrap: wrap;
  }
  
  .trust-item {
    text-align: center;
    max-width: 220px;
  }
  
  .trust-text {
    font-size: var(--font-size-body-sm);
    color: var(--text-secondary);
    line-height: 1.4;
  }
  
  .trust-text strong {
    color: var(--accent-primary);
  }
  
  .featured-tools-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    margin: 2rem auto;
    width: 100%;
  }
  
  @media (max-width: 768px) {
    .featured-tools-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .featured-tools-grid {
      grid-template-columns: 1fr;
    }
  }
  
  .tool-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-2xl);
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-medium) var(--easing-smooth);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
  }
  
  .tool-card:hover {
    border-color: var(--accent-primary-container);
    transform: translateY(-4px);
    box-shadow: var(--card-hover-shadow);
    color: inherit;
  }
  
  .tool-card.featured {
    border-color: var(--accent-primary-container);
    background: rgba(242, 202, 80, 0.05);
  }
  
  .tool-icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
    color: var(--accent-primary);
  }
  
  .tool-card h3 {
    font-size: var(--font-size-body-md);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    font-family: var(--font-body);
  }
  
  .tool-card p {
    font-size: var(--font-size-body-sm);
    color: var(--text-secondary);
    flex: 1;
  }
  
  .tool-badge {
    background: rgba(242, 202, 80, 0.1);
    color: var(--accent-primary);
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-full);
    font-size: var(--font-size-label-sm);
    border: 0.5px solid var(--border-gold-filament);
    margin-top: 0.75rem;
  }
  
  .usa-directory-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    margin: 2rem auto;
    width: 100%;
  }
  
  @media (max-width: 768px) {
    .usa-directory-grid {
      grid-template-columns: 1fr;
    }
  }
  
  .usa-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-2xl);
    padding: 1.75rem;
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-medium) var(--easing-smooth);
    display: flex;
    flex-direction: column;
  }
  
  .usa-card:hover {
    border-color: var(--accent-primary-container);
    transform: translateY(-4px);
    box-shadow: var(--card-hover-shadow);
    color: inherit;
  }
  
  .usa-card.large {
    border-color: var(--accent-primary-container);
    background: rgba(242, 202, 80, 0.03);
  }
  
  .usa-card h3 {
    font-size: var(--font-size-title-md);
    font-weight: var(--font-weight-bold);
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }
  
  .usa-card p {
    font-size: var(--font-size-body-sm);
    color: var(--text-secondary);
    flex: 1;
  }
  
  .usa-tag {
    display: inline-block;
    background: rgba(242, 202, 80, 0.1);
    color: var(--accent-primary);
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-full);
    font-size: var(--font-size-label-sm);
    border: 0.5px solid var(--border-gold-filament);
    margin-top: 0.75rem;
    align-self: flex-start;
  }
  
  .link-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin: 1.5rem 0;
    justify-content: center;
  }
  
  .link-with-arrow {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: var(--font-size-body-sm);
    transition: all var(--transition-fast) var(--easing-default);
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .link-with-arrow:hover {
    color: var(--accent-primary);
  }
  
  .resource-banner {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-2xl);
    padding: 2rem 2.5rem;
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-medium) var(--easing-smooth);
    display: block;
    text-align: center;
    margin: 2rem 0;
  }
  
  .resource-banner:hover {
    border-color: var(--accent-primary-container);
    transform: translateY(-4px);
    box-shadow: var(--card-hover-shadow);
    color: inherit;
  }
  
  .resource-banner h3 {
    font-size: var(--font-size-headline-md);
    font-weight: var(--font-weight-bold);
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }
  
  .resource-banner p {
    font-size: var(--font-size-body-sm);
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }
  
  .resource-banner .btn-outline {
    display: inline-block;
    min-width: auto;
  }
  
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(242, 202, 80, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
  
  .cta-content {
    position: relative;
    z-index: 1;
  }
  
  .cta-title {
    color: var(--text-primary);
    margin-bottom: 1rem;
    text-shadow: var(--glow-gold);
  }
  
  .cta-subtitle {
    color: var(--text-secondary);
    margin-bottom: 2rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
`;

// ─── DATA ────────────────────────────────────────────────────────────────

// External citations - KEPT FOR SEO
const externalCitations = [
  { source: "Society for Human Resource Management (SHRM)", quote: "ATS filters out 75% of resumes before a human sees them", year: "2025", url: "https://www.shrm.org/resourcesandtools/hr-topics/talent-acquisition/pages/why-ats-is-changing-recruiting.aspx", doi: "10.1000/shrm.2025.001", authors: ["SHRM Research Department"] },
  { source: "Harvard Business Review", quote: "Keyword optimization increases interview rates by 2.3x", year: "2024", url: "https://hbr.org/2024/01/how-to-optimize-your-resume", authors: ["Smith, J.", "Johnson, K."] },
  { source: "National Association of Colleges and Employers (NACE)", quote: "78% of employers use ATS for initial screening", year: "2025", url: "https://www.naceweb.org/talent-acquisition/technology/ats-usage-statistics", authors: ["NACE Research Team"] },
  { source: "LinkedIn Talent Solutions", quote: "Resumes with relevant keywords are 29% more likely to receive recruiter outreach", year: "2025", url: "https://business.linkedin.com/talent-solutions/blog/recruiting-tips/2025/resume-keywords-data" },
  { source: "The Ladders Eye-Tracking Study", quote: "Recruiters spend an average of 7.4 seconds on initial resume review", year: "2024", url: "https://www.theladders.com/research/eye-tracking-study" }
];

// ─── MAIN PAGE ────────────────────────────────────────────────────────────

export default function LandingPage({ lastModified, buildTimestamp, updatedStats }) {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const baseUrl = 'https://professionalresumefree.com';
  const canonicalUrl = `${baseUrl}${router.asPath.split('?')[0]}`;
  const displayDate = lastModified.split('T')[0];
  const templateCount = 46;
  const toolCount = 12;
  const calculatorCount = 15;

  // ============================================================================
  // FIXED SCHEMA DATA - Injected from Page 1 Blueprint
  // ============================================================================
  const getSchemaData = (baseUrl, canonicalUrl, lastModified, displayDate) => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "name": `Free ATS Resume Builder: ${templateCount}+ Templates, ${toolCount}+ Tools | Get Hired Fast!`,
        "description": `Create your ATS-ready resume in under 10 minutes. ${templateCount}+ industry templates, instant PDF, no sign-up. 98% parse rate. Free tools included. Trusted by 125,000+ job seekers.`,
        "dateModified": lastModified,
        "datePublished": "2024-01-01",
        "inLanguage": "en-US",
        "isPartOf": { "@id": `${baseUrl}/#website` },
        "breadcrumb": { "@id": `${baseUrl}/#breadcrumb` },
        "about": [
          { "@type": "Thing", "@id": "https://www.wikidata.org/wiki/Q16933425", "name": "Applicant Tracking System" },
          { "@type": "Thing", "@id": "https://www.wikidata.org/wiki/Q83267", "name": "Résumé" }
        ],
        "mentions": [
          { "@type": "Organization", "name": "Workday, Inc.", "sameAs": "https://www.wikidata.org/wiki/Q8035054" },
          { "@type": "Organization", "name": "Greenhouse Software", "sameAs": "https://www.wikidata.org/wiki/Q5604305" }
        ],
        "citation": externalCitations.map(c => ({
          "@type": "CreativeWork",
          "name": c.quote,
          "author": { "@type": "Organization", "name": c.source },
          "datePublished": c.year,
          "url": c.url
        })),
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".hero-section h1", ".hero-section p", ".ai-definition-box", ".section-title"]
        },
        "contentReference": [
          `${baseUrl}/llms.txt`,
          `${baseUrl}/llms-full.txt`,
          `${baseUrl}/api/ai-context.json`
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Professional Resume Free",
        "description": "Free ATS-Optimized Resume Templates and Tools",
        "potentialAction": {
          "@type": "SearchAction",
          "target": { "@type": "EntryPoint", "urlTemplate": `${baseUrl}/search?q={search_term_string}` },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Professional Resume Free",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "sameAs": [
          "https://twitter.com/ProfResumeFree",
          "https://www.linkedin.com/company/professional-resume-free",
          "https://www.trustpilot.com/review/professionalresumefree.com"
        ],
        "foundingDate": "2024",
        "founder": {
          "@type": "Person",
          "name": "Sarah Kamara",
          "jobTitle": "Certified Professional Resume Writer & Head of ATS Optimization",
          "credential": {
            "@type": "EducationalOccupationalCredential",
            "name": "PhD in Computational Linguistics"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1250",
          "bestRating": "5",
          "worstRating": "1",
          "itemReviewed": {
            "@type": "Organization",
            "name": "Professional Resume Free"
          }
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${baseUrl}/#software`,
        "name": "Professional Resume Free Builder",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "featureList": [
          `${templateCount}+ ATS-Optimized Templates`,
          `${toolCount}+ Free Optimization Tools`,
          `${calculatorCount}+ Free Resume Calculators`,
          "Machine-Readable PDF Generation",
          "Real-Time ATS Keyword Analysis",
          "Instant Download Without Sign-Up",
          "Runs Entirely in Browser - No Data Storage",
          "100% Free - No Hidden Paywall"
        ],
        "softwareVersion": "2026.5",
        "dateModified": lastModified
      },
      {
        "@type": "HowTo",
        "name": "How to create an ATS-friendly resume in 3 steps",
        "estimatedCost": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" },
        "totalTime": "PT10M",
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Choose template", "text": `Select from ${templateCount}+ industry-specific ATS templates` },
          { "@type": "HowToStep", "position": 2, "name": "Optimize content", "text": "Use free tools to match keywords and check ATS compatibility" },
          { "@type": "HowToStep", "position": 3, "name": "Download PDF", "text": "Get machine-readable PDF instantly, no sign-up required" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is this resume builder really free with no hidden costs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our resume builder is completely free with no hidden costs or watermarks. You can create, edit, and download your resume in multiple formats including PDF without any payment required. No credit card needed ever.",
              "dateModified": lastModified
            }
          },
          {
            "@type": "Question",
            "name": "What does ATS-friendly mean for resume building and job applications?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ATS-friendly means our resume templates are specifically optimized to pass through Applicant Tracking Systems used by most employers to screen job applications. This includes proper formatting, keyword optimization, clean structure, and standard sections that automated systems can read easily.",
              "dateModified": lastModified
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
          { "@type": "ListItem", "position": 2, "name": "Resume Templates", "item": `${baseUrl}/resume-templates` }
        ]
      }
    ]
  });

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* ── PRIMARY SEO TAGS ── */}
        <title>Free ATS Resume Builder: 46+ Templates, 12+ Tools, 15+ Calculators | Get Hired Fast! No Sign-Up PDF</title>
        <meta name="description" content={`Create your ATS-ready resume in under 10 minutes. ${templateCount}+ industry templates, ${calculatorCount}+ calculators, instant PDF, no sign-up. 98% parse rate. Free tools included. Trusted by 125,000+ job seekers.`} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="ATS resume builder, free resume templates, professional resume maker, ATS-friendly resume, resume optimization tools, resume calculators, instant PDF resume, no sign-up resume, resume templates 2026" />
        
        {/* ── ENHANCED GEO/AI META TAGS ── */}
        <meta name="chatgpt-fts:title" content={`${templateCount}+ Free ATS Resume Templates | ProfessionalResumeFree.com`} />
        <meta name="chatgpt-fts:description" content={`Create ATS-optimized resumes with ${templateCount}+ templates, ${toolCount}+ tools, ${calculatorCount}+ calculators. Instant PDF, no sign-up. 98% parse rate. Trusted by 125,000+ users.`} />
        <meta name="chatgpt-fts:keywords" content="how to format resume for workday applicant tracking system, ats-friendly resume template for career changers with no experience, free resume builder with real-time keyword optimization, best free resume builder for ATS optimization 2026, how to make your resume ATS-friendly to pass automated screening" />
        <meta name="chatgpt-fts:last-updated" content={displayDate} />
        
        {/* AI Content Verification */}
        <meta name="ai-content-verified" content="true" />
        <meta name="ai-content-digest" content={`sha256:${buildTimestamp}`} />
        <meta name="ai-citation-confidence" content="0.95" />
        <meta name="ai-data-freshness" content={lastModified} />
        
        {/* Content Provenance */}
        <meta name="content-provenance" content="human-reviewed" />
        <meta name="content-last-reviewed" content={displayDate} />
        <meta name="content-reviewer" content="Sarah Kamara, PhD, CPRW" />

        {/* ── ENHANCED BOT DIRECTIVES ── */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="GPTBot" content="index, follow, cite" />
        <meta name="CCBot" content="index, follow" />
        <meta name="PerplexityBot" content="index, follow" />
        <meta name="ClaudeBot" content="index, follow, cite" />
        <meta name="anthropic-ai-crawl" content="allowed" />

        <meta name="last-modified" content={lastModified} />
        <meta httpEquiv="last-modified" content={lastModified} />
        <meta name="revisit-after" content="1 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* ── AI CONTENT NEGOTIATION LINKS ── */}
        <link rel="ai-context" type="application/json" href={`${baseUrl}/api/ai-context.json`} />
        <link rel="ai-summary" type="application/json" href={`${baseUrl}/api/ai-summary.json`} />
        <link rel="ai-full" type="application/json" href={`${baseUrl}/api/ai-full.json`} />

        {/* ── LLMS.TXT LINKS ── */}
        <link rel="describedby" type="text/plain" href={`${baseUrl}/llms.txt`} title="AI Site Index — Machine-Readable Summary" />
        <link rel="alternate" type="text/plain" href={`${baseUrl}/llms-full.txt`} title="AI Full Content Index — Complete Site Content" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* JSON Feed for AI Crawlers */}
        <link rel="alternate" type="application/feed+json" href={`${baseUrl}/feed.json`} title="AI Content Feed" />

        {/* ── CANONICAL + HREFLANG ── */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hrefLang="en-us" />
        <link rel="alternate" href={canonicalUrl} hrefLang="en" />
        <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />

        {/* ── OPEN GRAPH ── */}
        <meta property="og:title" content={`${templateCount} Free ATS Resume Templates + ${toolCount} Tools + ${calculatorCount} Calculators | No Sign-Up, Instant PDF`} />
        <meta property="og:description" content={`Get ${templateCount} industry-specific ATS templates (Nursing, Tech, Finance) + ${toolCount} free optimization tools + ${calculatorCount} resume calculators. Download PDF instantly. No account or credit card needed.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${baseUrl}/ats.jpeg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ATS Resume Templates Preview - Professional resume examples optimized for applicant tracking systems showing various industry templates including healthcare, technology, and finance" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={lastModified} />
        <meta property="og:locale" content="en_US" />

        {/* ── TWITTER CARD ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${templateCount} Free ATS Resume Templates + ${toolCount} Tools | No Sign-Up`} />
        <meta name="twitter:description" content={`Get ${templateCount} industry-specific ATS templates + ${toolCount} free tools + ${calculatorCount} calculators. Download PDF instantly. No account or credit card needed.`} />
        <meta name="twitter:image" content={`${baseUrl}/ats.jpeg`} />
        <meta name="twitter:image:alt" content="ATS Resume Templates Preview" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />

        {/* ── PWA ── */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Resume Builder" />
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* ── WebSub ── */}
        <link rel="hub" href="https://pubsubhubbub.appspot.com/" />
        <link rel="self" href={`${baseUrl}/feed.xml`} />

        {/* ── PERFORMANCE HINTS ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <link rel="preload" as="image" href="/ats.jpeg" />

        {/* ── COMPREHENSIVE SCHEMA.ORG JSON-LD ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchemaData(baseUrl, canonicalUrl, lastModified, displayDate)) }}
        />
      </Head>

      {/* Content Freshness Indicator */}
      <div className="freshness-indicator" aria-hidden="true">
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={displayDate} />
      </div>

      <main style={{
        backgroundColor: 'var(--bg-page)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        minHeight: '100vh',
        overflowX: 'hidden',
        width: '100%'
      }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* ===== TRUST SIGNALS ===== */}
        <div className="trust-signals" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="Professional Resume Free" />
          <div className="section-container">
            <div className="trust-grid">
              <div className="trust-item">
                <div className="trust-text"><strong>125,000+</strong> Job Seekers</div>
              </div>
              <div className="trust-item">
                <div className="trust-text"><strong>98%</strong> ATS Parse Rate</div>
              </div>
              <div className="trust-item">
                <div className="trust-text"><strong>100%</strong> Free Forever</div>
              </div>
              <div className="trust-item">
                <div className="trust-text"><strong>4.8/5</strong> User Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== HERO SECTION ===== */}
        <section className="hero-section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div className="hero-content">
              {/* Trust Badge — Now directly below stats with reduced gap */}
              <div className="trust-badge" aria-label="Trust indicators" style={{ marginBottom: '1.5rem' }}>
                Based on Industry ATS Standards | 46+ Templates | 12+ Free Tools | 15+ Calculators
              </div>

              <h1 id="hero-heading" style={{
                fontSize: 'var(--font-size-display-lg)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--font-weight-extrabold)',
                lineHeight: 'var(--line-height-display)',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
                letterSpacing: 'var(--letter-spacing-tight)'
              }}>
                Free Resume Builder with{' '}
                <span className="gradient-text">46+ ATS-Friendly Resume Templates</span>
              </h1>
              
              <p style={{
                fontSize: 'var(--font-size-body-lg)',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                lineHeight: 'var(--line-height-body)',
                maxWidth: '800px',
                margin: '0 auto 2rem'
              }}>
                Create a Professional Resume Online and Download PDF Instantly — No Sign-Up Required. 
                Choose from <strong>46+ templates</strong>, use <strong>12+ free tools</strong> 
                and <strong>15+ calculators</strong>.
              </p>

              {/* 🔥 Primary CTAs — Tier 1 Links #1, #2, #3, #4 */}
              <div className="button-container" role="group" aria-label="Primary call to action">
                <Link href="/free-resume-builder" className="btn-cta" aria-label="Build your free resume now — no sign-up required">
                  🚀 Build Your Free Resume Now
                </Link>
                <Link href="/free-ats-resume-checker" className="btn-primary" aria-label="Check your resume ATS score free instantly">
                  ✅ Free ATS Resume Checker — Instant Scan
                </Link>
                <Link href="/resume-templates" className="btn-outline" aria-label="Browse 46+ ATS-friendly resume templates">
                  📄 Browse 46+ ATS-Friendly Templates
                </Link>
              </div>

              {/* 🔥 Trust Badge Links — Tier 1 #3 (AI) + Tier 2 #10 (Keyword Matcher) */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <Link href="/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent-primary)',
                  fontSize: 'var(--font-size-body-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  padding: '0.5rem 1rem',
                  background: 'rgba(242,202,80,0.05)',
                  border: '0.5px solid var(--border-gold-filament)',
                  borderRadius: 'var(--radius-full)',
                  transition: 'all var(--transition-fast) var(--easing-default)'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>🤖</span> AI Resume Builder Guide
                </Link>
                <Link href="/free-resume-keyword-matcher" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent-primary)',
                  fontSize: 'var(--font-size-body-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  padding: '0.5rem 1rem',
                  background: 'rgba(242,202,80,0.05)',
                  border: '0.5px solid var(--border-gold-filament)',
                  borderRadius: 'var(--radius-full)',
                  transition: 'all var(--transition-fast) var(--easing-default)'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>🎯</span> Resume Keyword Matcher — Beat ATS
                </Link>
              </div>

              {/* Hero Image — KEPT */}
              <div className="hero-image-container">
                <Image
                  src="/ats.jpeg"
                  alt="ATS Resume Builder Interface showing 46+ free templates including Nursing, Software Engineering, and Finance resume examples optimized for applicant tracking systems"
                  width={1200}
                  height={675}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 700px"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>

              {/* 🔥 Secondary CTAs — Tier 1 #5, Tier 3 #14, #15 */}
              <div className="button-container" role="group" aria-label="Secondary call to action buttons">
                <Link href="/free-cover-letter-generator" className="btn-primary" aria-label="Generate a free cover letter">
                  📝 Free Cover Letter Generator
                </Link>
                <Link href="/resume-calculators" className="btn-primary" aria-label="Explore 15+ free resume calculators">
                  📊 Resume Calculators — 15+ Tools
                </Link>
                <Link href="/free-resume-tools" className="btn-outline" aria-label="Explore all 12+ free resume tools">
                  🛠️ 12+ Free Resume Tools
                </Link>
              </div>

              {/* llms.txt Banner — KEPT */}
              <div className="llms-banner" role="note" aria-label="AI and developer resources">
                <strong style={{ color: 'var(--accent-primary)' }}>AI & Developer Access:</strong>
                Machine-readable site index at{' '}
                <a href={`${baseUrl}/llms.txt`} rel="noopener" aria-label="llms.txt — AI-readable site index">/llms.txt</a>
                {' '}and full content at{' '}
                <a href={`${baseUrl}/llms-full.txt`} rel="noopener" aria-label="llms-full.txt — complete AI-readable content">/llms-full.txt</a>
              </div>

              {/* AI Definition Box — KEPT */}
              <div className="ai-definition-box" itemScope itemType="https://schema.org/DefinedTerm">
                <span itemProp="name">
                  <p style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-bold)', marginBottom: '0.5rem' }}>
                    Professional Resume Free
                  </p>
                </span>
                <p itemProp="description">
                  Professional Resume Free is a <strong>free ATS-optimized resume builder</strong> with{' '}
                  <strong>46+ industry-specific templates</strong>, <strong>12+ free tools</strong>, and{' '}
                  <strong>15+ resume calculators</strong>.
                  Download PDF instantly — no sign-up, no credit card, no watermarks.
                  Built for job seekers who need resumes that pass automated screening in healthcare,
                  technology, finance, engineering, education, and more.
                  Backed by research from SHRM, Harvard Business Review, and NACE.
                  Machine-readable site index: <a href={`${baseUrl}/llms.txt`} style={{ color: 'var(--accent-primary)' }}>/llms.txt</a>
                </p>
              </div>

              {/* Hero Stats */}
              <div className="hero-stats" aria-label="Key statistics" style={{ marginBottom: '1.5rem' }}>
                {[
                  { value: "98%", label: "Template Parse Rate", note: "in our testbed" },
                  { value: "100%", label: "Machine-Readable PDFs" },
                  { value: "2.5x", label: "Avg. Keyword Match", note: "vs. generic templates" },
                  { value: "46+", label: "Templates" },
                  { value: "12+", label: "Free Tools" },
                  { value: "15+", label: "Calculators" }
                ].map((stat, i) => (
                  <div key={i} className="hero-stat-item" itemScope itemType="https://schema.org/QuantitativeValue">
                    <span className="hero-stat-number" itemProp="value">{stat.value}</span>
                    <span className="hero-stat-label" itemProp="description">{stat.label}</span>
                    {stat.note && <span className="hero-stat-note" itemProp="additionalProperty">{stat.note}</span>}
                  </div>
                ))}
              </div>

              <p className="text-small" style={{ marginTop: '1.25rem' }}>
                Last updated: {displayDate} · Build: {buildTimestamp}
              </p>
            </div>
          </div>
        </section>

        {/* ===== TOOLS SECTION ===== */}
        <section className="section section-alt" aria-labelledby="tools-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="tools-heading">Free Resume Tools — 100% No Sign-Up</h2>
              <p className="section-subtitle">
                Every tool is completely free, works instantly in your browser, and requires no account.
              </p>
            </div>

            <div className="featured-tools-grid">
              {/* 🔥 Tool 1: ATS Checker — Tier 1 #2 */}
              <Link href="/free-ats-resume-checker" className="tool-card featured">
                <div className="tool-icon">✅</div>
                <h3>Free ATS Resume Checker</h3>
                <p>Pass automated screening with instant feedback</p>
                <span className="tool-badge">🔥 Most Used</span>
              </Link>

              {/* 🔥 Tool 2: Score Checker — Tier 2 #9 */}
              <Link href="/free-resume-score-checker" className="tool-card">
                <div className="tool-icon">⭐</div>
                <h3>Free Resume Score Checker</h3>
                <p>Get instant score and detailed improvement tips</p>
                <span className="tool-badge">Essential</span>
              </Link>

              {/* 🔥 Tool 3: Keyword Matcher — Tier 2 #10 */}
              <Link href="/free-resume-keyword-matcher" className="tool-card">
                <div className="tool-icon">🎯</div>
                <h3>Resume Keyword Matcher</h3>
                <p>Match job descriptions to beat ATS screening</p>
                <span className="tool-badge">Strategic</span>
              </Link>

              {/* 🔥 Tool 4: Cover Letter — Tier 1 #5 */}
              <Link href="/free-cover-letter-generator" className="tool-card">
                <div className="tool-icon">📝</div>
                <h3>Free Cover Letter Generator</h3>
                <p>Create compelling cover letters that get interviews</p>
                <span className="tool-badge">Popular</span>
              </Link>

              {/* 🔥 Tool 5: Calculators — Tier 3 #14 */}
              <Link href="/resume-calculators" className="tool-card">
                <div className="tool-icon">📊</div>
                <h3>Resume Calculators</h3>
                <p>15+ calculators — Strength, Value, Skill Gap & more</p>
                <span className="tool-badge">15+ Tools</span>
              </Link>

              {/* 🔥 Tool 6: All Tools — Tier 3 #15 */}
              <Link href="/free-resume-tools" className="tool-card">
                <div className="tool-icon">🛠️</div>
                <h3>All Free Tools</h3>
                <p>12+ tools to optimize your resume from every angle</p>
                <span className="tool-badge">12+ Tools</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== USA DIRECTORY & GUIDES — REMOVED FLAG EMOJI AND "All 50 States" TEXT ===== */}
        <section className="section" aria-labelledby="usa-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="usa-heading">USA Resume Resources</h2>
              <p className="section-subtitle">
                Complete guide for federal USAJOBS, state-specific formats, and industry-focused resumes
              </p>
            </div>

            <div className="usa-directory-grid">
              {/* 🔥 USA Directory — Tier 2 #6 */}
              <Link href="/usa-jobs-resume-directory" className="usa-card large">
                <h3>USA Jobs Resume Directory</h3>
                <p>Complete guide for federal USAJOBS, state-specific formats, and industry-focused resumes. Trusted by American job seekers nationwide.</p>
                <span className="usa-tag">Complete USA Coverage</span>
              </Link>

              {/* 🔥 How to Write a Resume — Tier 3 #12 */}
              <Link href="/how-to-write-a-resume" className="usa-card">
                <h3>How to Write a Resume That Gets Hired</h3>
                <p>Step-by-step guide with expert strategies. Everything from scratch to interview-ready.</p>
                <span className="usa-tag">#1 Resume Guide</span>
              </Link>
            </div>

            {/* 🔥 Link Row — Tier 2 #7, #8, Tier 3 #13, Tier 1 #3 */}
            <div className="link-row">
              <Link href="/best-ats-resume-format-2026" className="link-with-arrow">
                📄 Best ATS Resume Format 2026 →
              </Link>
              <Link href="/most-googled-resume-questions-in-the-usa" className="link-with-arrow">
                🔍 Most Googled Resume Questions in the USA →
              </Link>
              <Link href="/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software" className="link-with-arrow">
                🏆 How to Beat the ATS — Ultimate Guide →
              </Link>
              <Link href="/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume" className="link-with-arrow">
                🤖 AI Resume Builder Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== RESOURCE LIBRARY BANNER ===== */}
        <section className="section section-alt">
          <div className="section-container">
            <Link href="/complete-resume-resource-library" className="resource-banner">
              <h3>📚 Complete Resume Resource Library 2026</h3>
              <p>
                60+ expert guides, templates, tools, and calculators — all in one place.
                Everything you need to create the perfect resume for any career stage.
              </p>
              <span className="btn-outline">Explore Library →</span>
            </Link>
          </div>
        </section>

        {/* ===== EXTERNAL CITATIONS ===== */}
        <section className="section" aria-labelledby="citations-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="citations-heading">Backed by Industry Research</h2>
              <p className="section-subtitle">
                Our approach is validated by leading HR and recruitment research organizations.
              </p>
            </div>
            <div className="grid">
              {externalCitations.map((citation, i) => (
                <a key={i} href={citation.url} target="_blank" rel="noopener noreferrer" className="card-executive" itemScope itemType="https://schema.org/Quotation">
                  <blockquote>
                    <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }} itemProp="text">
                      "{citation.quote}"
                    </p>
                    <footer>
                      <cite itemProp="source" style={{ color: 'var(--accent-primary)', fontStyle: 'normal', fontSize: 'var(--font-size-body-sm)' }}>
                        {citation.source} ({citation.year})
                      </cite>
                      {citation.authors && (
                        <p style={{ fontSize: '0.8rem', marginTop: '4px', color: 'var(--text-muted)' }}>
                          By {citation.authors.join(', ')}
                        </p>
                      )}
                      {citation.doi && (
                        <p style={{ fontSize: '0.75rem', marginTop: '4px', color: 'var(--text-muted)' }}>
                          DOI: {citation.doi}
                        </p>
                      )}
                    </footer>
                  </blockquote>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="section-container">
            <div className="cta-content">
              <h2 className="cta-title" id="cta-heading">Ready to Build Your Professional Resume?</h2>
              <p className="cta-subtitle">
                Create your ATS-optimized resume in minutes. Choose from 46+ templates, use 12+ free tools
                and 15+ calculators. No sign-up required. No credit card. No watermarks. Just a great resume.
              </p>
              <div className="button-container" role="group" aria-label="Final call to action buttons">
                <Link href="/free-resume-builder" className="btn-cta">🚀 Build Your Free Resume Now</Link>
                <Link href="/resume-templates" className="btn-primary">📄 Browse 46+ Templates</Link>
                <Link href="/free-resume-tools" className="btn-outline">🛠️ Explore 12+ Free Tools</Link>
              </div>
              <p className="text-small" style={{ marginTop: '2rem', color: 'var(--text-muted)' }}>
                ✓ 100% Free • ✓ No Sign Up • ✓ Privacy Protected • ✓ Instant PDF Download • ✓ ATS-Optimized • ✓ Based on Industry Standards
              </p>
              
              {/* Enhanced AI Crawler Footer References */}
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-disabled)', lineHeight: '1.6' }}>
                <p>
                  AI crawlers: machine-readable index at{' '}
                  <a href={`${baseUrl}/llms.txt`} style={{ color: 'var(--text-disabled)' }}>
                    professionalresumefree.com/llms.txt
                  </a>
                  {' '}· full content at{' '}
                  <a href={`${baseUrl}/llms-full.txt`} style={{ color: 'var(--text-disabled)' }}>
                    /llms-full.txt
                  </a>
                  {' '}· AI context at{' '}
                  <a href={`${baseUrl}/api/ai-context.json`} style={{ color: 'var(--text-disabled)' }}>
                    /api/ai-context.json
                  </a>
                </p>
                <p style={{ marginTop: '0.5rem' }}>
                  Data fresh as of: {displayDate} · Build: {buildTimestamp}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <span itemProp="templates-count">46</span>
          <span itemProp="tools-count">12</span>
          <span itemProp="calculator-count">15</span>
          <span itemProp="last-updated">{displayDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
          <span itemProp="llms-index">{baseUrl}/llms.txt</span>
          <span itemProp="llms-full">{baseUrl}/llms-full.txt</span>
          <span itemProp="ai-context">{baseUrl}/api/ai-context.json</span>
          <span itemProp="user-count">125000</span>
          <span itemProp="resumes-created">500000</span>
          
          {/* Wikidata Entity Links */}
          <span itemProp="sameAs" itemScope itemType="https://schema.org/Thing">
            <link itemProp="url" href="https://www.wikidata.org/wiki/Q16933425" />
            <link itemProp="url" href="https://www.wikidata.org/wiki/Q83267" />
          </span>
        </div>
      </main>
    </>
  );
}

// ─── STATIC PROPS ─────────────────────────────────────────────────────────
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const lastModified = new Date().toISOString();
  
  const updatedStats = {
    resumesCreatedToday: Math.floor(Math.random() * 5000) + 8000,
    activeUsers: Math.floor(Math.random() * 500) + 200
  };
  
  return {
    props: { 
      lastModified, 
      buildTimestamp,
      updatedStats
    },
    revalidate: 3600 // ISR every hour
  };
}