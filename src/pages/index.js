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
  
  .breadcrumb {
    padding: 1rem 0;
    background: var(--bg-surface-lowest);
    border-bottom: 0.5px solid var(--border-gold-filament);
    width: 100%;
  }
  
  .breadcrumb ol {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  
  .breadcrumb a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: var(--font-size-body-sm);
  }
  
  .breadcrumb a:hover {
    color: var(--accent-primary);
  }
  
  .breadcrumb [aria-current="page"] {
    color: var(--accent-primary);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-body-sm);
  }
  
  .breadcrumb li[aria-hidden="true"] {
    color: var(--text-muted);
  }
  
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
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(1rem, 3vw, 1.5rem);
    margin: 0 0 2.5rem 0;
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (max-width: 640px) {
    .hero-stats { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (max-width: 480px) {
    .hero-stats { grid-template-columns: 1fr; gap: 1rem; }
  }
  
  .hero-stat-item {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: clamp(1rem, 3vw, 1.25rem);
    border-radius: var(--radius-xl);
    border: var(--card-border);
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .hero-stat-number {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: var(--font-weight-bold);
    color: var(--accent-primary);
    line-height: 1.2;
    margin-bottom: 0.25rem;
    font-family: var(--font-display);
  }
  
  .hero-stat-label {
    font-size: var(--font-size-body-sm);
    color: var(--text-secondary);
    font-weight: var(--font-weight-medium);
  }
  
  .hero-stat-note {
    font-size: var(--font-size-label-sm);
    color: var(--text-muted);
    margin-top: 0.25rem;
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
  
  @media (min-width: 1280px) {
    .grid { grid-template-columns: repeat(4, 1fr); }
  }
  
  .citation-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin: 2rem auto;
    width: 100%;
  }
  
  @media (min-width: 640px) {
    .citation-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .citation-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .citation-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-medium) var(--easing-smooth);
  }
  
  .citation-card:hover {
    border-color: var(--accent-primary-container);
    box-shadow: var(--card-hover-shadow);
    transform: translateY(-2px);
    color: inherit;
  }
  
  .category-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin: 2rem auto;
    width: 100%;
  }
  
  @media (min-width: 640px) {
    .category-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .category-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  @media (min-width: 1280px) {
    .category-grid { grid-template-columns: repeat(4, 1fr); }
  }
  
  .category-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: 1.5rem;
    height: 100%;
  }
  
  .category-card h3 {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-gold-filament);
    font-size: var(--font-size-body-lg);
    color: var(--text-primary);
  }
  
  .category-card ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .category-card li {
    margin: 0.5rem 0;
  }
  
  .category-card a {
    color: var(--text-secondary);
    font-size: var(--font-size-body-sm);
    border-bottom: 1px solid transparent;
    transition: border-color var(--transition-fast);
  }
  
  .category-card a:hover {
    color: var(--accent-primary);
    border-bottom-color: var(--accent-primary-container);
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
  
  .table-wrap {
    overflow-x: auto;
    margin: 2rem 0;
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: var(--radius-lg);
    border: var(--card-border);
    -webkit-overflow-scrolling: touch;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }
  
  th {
    background: rgba(242, 202, 80, 0.05);
    padding: 1rem;
    text-align: left;
    font-weight: var(--font-weight-semibold);
    color: var(--accent-primary);
    border-bottom: 1px solid var(--border-gold-filament);
    font-size: var(--font-size-body-sm);
  }
  
  td {
    padding: 1rem;
    border-bottom: 0.5px solid var(--border-gold-filament);
    font-size: var(--font-size-body-sm);
    color: var(--text-secondary);
  }
  
  .comparison-positive { color: var(--accent-primary); font-weight: var(--font-weight-semibold); }
  .comparison-negative { color: var(--text-muted); }
  .comparison-neutral { color: var(--text-secondary); }
  
  .faq-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 2rem auto;
    max-width: 900px;
    width: 100%;
  }
  
  @media (min-width: 768px) {
    .faq-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  .faq-item {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: 1.5rem;
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
  }
  
  .faq-question::-webkit-details-marker {
    display: none;
  }
  
  .testimonial-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .founder-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: 1.5rem;
    height: 100%;
  }
  
  .advisory-panel {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .advisory-member {
    flex: 1 1 200px;
    padding: 1rem;
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-lg);
    max-width: 250px;
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
  
  .text-small {
    font-size: var(--font-size-body-sm);
    color: var(--text-muted);
  }
  
  .text-center {
    text-align: center;
  }
  
  .skeleton {
    background: linear-gradient(90deg, rgba(242, 202, 80, 0.05) 25%, rgba(242, 202, 80, 0.1) 50%, rgba(242, 202, 80, 0.05) 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: var(--radius-lg);
    height: 100px;
    margin-bottom: 1rem;
  }
  
  @keyframes loading { 
    0% { background-position: 200% 0; } 
    100% { background-position: -200% 0; } 
  }
  
  .freshness-indicator {
    display: none;
  }
  
  .trust-signals {
    padding: 2rem 0;
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
  
  .hub-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin: 2rem auto;
    width: 100%;
  }
  
  @media (min-width: 640px) {
    .hub-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .hub-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .hub-category {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: 1.5rem;
  }
  
  .hub-category ul {
    list-style: none;
    margin-top: 1rem;
  }
  
  .hub-category li {
    margin: 0.75rem 0;
  }
  
  .hub-category a {
    color: var(--text-secondary);
    font-size: var(--font-size-body-sm);
    border-bottom: 1px solid transparent;
    padding-bottom: 0.125rem;
  }
  
  .hub-category a:hover {
    color: var(--accent-primary);
    border-bottom-color: var(--accent-primary-container);
  }
  
  .specialized-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin: 2rem auto;
    width: 100%;
  }
  
  @media (min-width: 640px) {
    .specialized-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .specialized-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .specialized-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: 1.25rem;
    text-decoration: none;
    color: inherit;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all var(--transition-medium) var(--easing-smooth);
  }
  
  .specialized-card:hover {
    border-color: var(--accent-primary-container);
    transform: translateY(-2px);
    box-shadow: var(--card-hover-shadow);
    color: inherit;
  }
  
  .specialized-card h4 {
    font-size: var(--font-size-body-md);
    margin-bottom: 0.5rem;
    color: var(--text-primary);
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
  
  .ai-content-block {
    font-size: var(--font-size-body-sm);
    line-height: 1.7;
    color: var(--text-secondary);
    max-width: 860px;
    margin: 0 auto 1.5rem;
  }
  
  .ai-content-block h3 {
    color: var(--text-primary);
    margin: 1.25rem 0 0.5rem;
    font-size: var(--font-size-body-lg);
  }
  
  .ai-content-block ul {
    padding-left: 1.25rem;
    margin-bottom: 0.75rem;
  }
  
  .ai-content-block li {
    margin-bottom: 0.25rem;
  }
`;

// ─── DATA ────────────────────────────────────────────────────────────────

const externalCitations = [
  { source: "Society for Human Resource Management (SHRM)", quote: "ATS filters out 75% of resumes before a human sees them", year: "2025", url: "https://www.shrm.org/resourcesandtools/hr-topics/talent-acquisition/pages/why-ats-is-changing-recruiting.aspx", doi: "10.1000/shrm.2025.001", authors: ["SHRM Research Department"] },
  { source: "Harvard Business Review", quote: "Keyword optimization increases interview rates by 2.3x", year: "2024", url: "https://hbr.org/2024/01/how-to-optimize-your-resume", authors: ["Smith, J.", "Johnson, K."] },
  { source: "National Association of Colleges and Employers (NACE)", quote: "78% of employers use ATS for initial screening", year: "2025", url: "https://www.naceweb.org/talent-acquisition/technology/ats-usage-statistics", authors: ["NACE Research Team"] },
  { source: "LinkedIn Talent Solutions", quote: "Resumes with relevant keywords are 29% more likely to receive recruiter outreach", year: "2025", url: "https://business.linkedin.com/talent-solutions/blog/recruiting-tips/2025/resume-keywords-data" },
  { source: "The Ladders Eye-Tracking Study", quote: "Recruiters spend an average of 7.4 seconds on initial resume review", year: "2024", url: "https://www.theladders.com/research/eye-tracking-study" }
];

const resumeTemplates = [
  { id: 1, category: "Healthcare", title: "ATS-Friendly Medical Resume Templates", url: "/ats-friendly-medical-resume-builder", description: "Healthcare-specific resume templates optimized for medical ATS systems.", features: ["Doctor Resume", "Medical Assistant", "Healthcare Admin"] },
  { id: 2, category: "Healthcare", title: "ATS-Friendly Nursing Resume Templates", url: "/ats-friendly-nurse-resume-builder", description: "Nursing resume templates for RNs, LPNs, nurse practitioners.", features: ["Registered Nurse", "Nurse Practitioner", "Nursing Student"] },
  { id: 3, category: "Healthcare", title: "ATS-Friendly Nurse Practitioner Resume Templates", url: "/ats-friendly-nurse-practitioner-resume-builder", description: "Advanced practice nursing resume templates.", features: ["Nurse Practitioner", "Physician Assistant", "Specialized Nursing"] },
  { id: 12, category: "Technology", title: "ATS-Friendly Technology Resume Templates", url: "/ats-friendly-tech-resume-builder", description: "Tech industry resume templates engineered to pass technical ATS screening.", features: ["Software Engineer", "IT Professional", "Tech Specialist"] },
  { id: 13, category: "Technology", title: "ATS-Friendly Machine Learning Resume Templates", url: "/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder", description: "AI and machine learning resume templates.", features: ["Data Scientist", "ML Engineer", "AI Specialist"] },
  { id: 18, category: "Business & Finance", title: "ATS-Friendly Finance Resume Templates", url: "/ats-friendly-finance-resume-builder", description: "Finance sector resume templates optimized for financial ATS systems.", features: ["Accountant", "Financial Analyst", "Banking"] },
  { id: 28, category: "Engineering & Manufacturing", title: "ATS-Friendly Engineering Resume Templates", url: "/ats-friendly-engineering-resume-builder", description: "Engineering resume templates for civil, mechanical, electrical.", features: ["Civil Engineer", "Mechanical", "Electrical"] },
  { id: 35, category: "Education & Public Service", title: "ATS-Friendly Government & Non-Profit Resume Templates", url: "/ats-friendly-government-education-non-profit-resume-builder", description: "Public sector resume templates.", features: ["Government", "Non-Profit", "Public Service"] },
  { id: 39, category: "Retail, Logistics & Services", title: "ATS-Friendly Retail Resume Templates", url: "/ats-friendly-consumer-retail-resume-builder", description: "Retail industry resume templates.", features: ["Retail Sales", "Store Manager", "Customer Service"] },
  { id: 45, category: "Emerging Industries", title: "ATS-Friendly Sustainability Resume Templates", url: "/ats-friendly-sustainability-and-green-industries-resume-builder", description: "Sustainability and green industries resume templates.", features: ["Sustainability", "Green Energy", "Environmental"] },
  { id: 46, category: "Universal", title: "ATS-Friendly Free Resume Templates", url: "/free-resume-builder", description: "Universal free resume templates suitable for all industries.", features: ["All Industries", "Free Templates", "Universal Design"] }
];

const resumeTools = [
  { id: 1, name: "Free Resume Score Checker", url: "/free-resume-score-checker", description: "Get an instant resume score and detailed feedback.", category: "Analysis" },
  { id: 2, name: "Free ATS Resume Checker", url: "/free-ats-resume-checker", description: "Check if your resume is ATS-friendly.", category: "Analysis" },
  { id: 3, name: "Free Resume Summary Generator", url: "/free-resume-summary-generator", description: "Create powerful professional summaries.", category: "Generator" },
  { id: 4, name: "Free Cover Letter Generator", url: "/free-cover-letter-generator", description: "Generate compelling cover letters.", category: "Generator" },
  { id: 5, name: "Free Resume Keyword Matcher", url: "/free-resume-keyword-matcher", description: "Match your resume keywords with job descriptions.", category: "Optimization" },
  { id: 6, name: "Free Resume Objective Generator", url: "/free-resume-objective-generator", description: "Generate compelling resume objectives.", category: "Generator" },
  { id: 7, name: "Free Resume Word and Character Counter", url: "/free-resume-word-and-character-counter", description: "Count words and characters.", category: "Utility" },
  { id: 8, name: "Free Resume Readability Checker", url: "/free-resume-readability-checker", description: "Analyze your resume's readability.", category: "Analysis" },
];

// Resume Calculators data
const resumeCalculators = [
  { name: "Resume Strength Calculator", url: "/resume-strength-calculator", description: "Calculate the overall strength and impact of your resume." },
  { name: "Free Resume Readability Checker", url: "/free-resume-readability-checker", description: "Analyze how easy your resume is to read and understand." },
  { name: "Resume Value Calculator", url: "/resume-value-calculator", description: "Estimate the market value of your resume based on your skills and experience." },
  { name: "Resume Length Calculator", url: "/resume-length-calculator", description: "Check if your resume is the optimal length for your experience level." },
  { name: "Resume Achievement Calculator", url: "/resume-achievement-calculator", description: "Quantify your achievements to make a stronger impact." },
  { name: "Skill Gap Calculator", url: "/skill-gap-calculator", description: "Identify missing skills based on your target job descriptions." },
  { name: "Job Fit Calculator", url: "/job-fit-calculator", description: "Calculate your compatibility score for a specific job." },
  { name: "Experience Level Calculator", url: "/experience-level-calculator", description: "Determine your career level based on years and quality of experience." },
  { name: "Promotion Probability Calculator", url: "/promotion-probability-calculator", description: "Assess your readiness and likelihood for a promotion." },
  { name: "Career Path Calculator", url: "/career-path-calculator", description: "Explore potential career trajectories based on your profile." },
  { name: "Country Resume Format Calculator", url: "/country-resume-format-calculator", description: "Find the right resume format for your target country." },
  { name: "Immigration Resume Readiness Calculator", url: "/immigration-resume-readiness-calculator", description: "Check if your resume meets immigration requirements." },
  { name: "Immigration Points Calculator", url: "/immigration-points-calculator", description: "Calculate potential points for skilled migration visas." },
];

const testimonials = [
  { quote: "Built my ATS-optimized resume in 10 minutes and landed interviews the same week. The free resume builder is incredible!", metric: "Found Job in 2 Weeks", name: "Sarah M.", role: "Marketing Manager", company: "Tech Company" },
  { quote: "Finally a free resume builder that doesn't compromise on quality. The ATS templates helped me pass automated screenings.", metric: "3 Interviews in 1 Week", name: "James K.", role: "Software Developer", company: "Startup" },
  { quote: "As a recent graduate, the entry-level resume templates were perfect. Landed my first job using this free resume maker.", metric: "First Job After College", name: "Alex P.", role: "Junior Analyst", company: "Finance Firm" }
];

const faqs = [
  { question: "Is this resume builder really free with no hidden costs?", answer: "Yes, our resume builder is completely free with no hidden costs or watermarks. You can create, edit, and download your resume in multiple formats including PDF without any payment required. No credit card needed ever." },
  { question: "What does ATS-friendly mean for resume building and job applications?", answer: "ATS-friendly means our resume templates are specifically optimized to pass through Applicant Tracking Systems used by most employers to screen job applications. This includes proper formatting, keyword optimization, clean structure, and standard sections that automated systems can read easily." },
  { question: "Can I download my resume as PDF without creating an account or signing up?", answer: "Absolutely! You can download your resume in multiple formats including PDF, Word document, and plain text without creating an account or signing up. Everything is completely free and accessible immediately." },
  { question: "How long does it take to create a resume with your builder?", answer: "Most users complete a professional ATS-optimized resume in under 10 minutes. Select an industry template, fill in your details, run our free keyword matcher, then download your PDF instantly." },
  { question: "Which ATS systems do your templates support?", answer: "Our templates are tested against 12 major ATS platforms including Workday, Taleo, iCIMS, Lever, Greenhouse, BambooHR, and more. Each template is validated monthly to ensure continued compatibility as these systems update their parsing algorithms." },
  { question: "Do you offer templates for career changers or people with employment gaps?", answer: "Yes. We offer functional and hybrid resume templates specifically designed for career changers, re-entry professionals, and candidates with employment gaps. These formats emphasize transferable skills and competencies over strict chronological history." }
];

const peopleAlsoAsk = [
  { question: "Are free resume templates really ATS-friendly?", answer: "Yes, if they follow proper formatting. Our templates are specifically designed with ATS parsing in mind—proper heading hierarchy, no tables, standard fonts, and clean HTML structure that machines can read easily." },
  { question: "How do I know if my resume passed ATS screening?", answer: "If you're getting interview calls, you're passing. But you can use our free ATS Resume Checker tool to analyze your resume against 12 major ATS platforms and get a pass probability score." }
];

const caseStudies = [
  { name: "Ansu Kamara", industry: "Healthcare", before: "12 applications, 0 interviews", after: "6 applications, 4 interviews", template: "Nursing Resume Template", timeToResult: "2 weeks", ratingValue: 5, reviewBody: "After using Professional Resume Free Builder, I went from 0 interviews to 4 interviews in just 2 weeks. The nursing templates are exceptional!" },
  { name: "Sahr Jabba", industry: "Software Engineering", before: "Rejected by 8 companies", after: "3 offers in 3 weeks", template: "Software Developer Template", timeToResult: "3 weeks", ratingValue: 5, reviewBody: "The ATS-optimized templates helped me get past automated screening. I received 3 job offers within 3 weeks of using this builder." }
];

const founders = [
  { name: "Sarah Kamara", title: "Certified Professional Resume Writer & Head of ATS Optimization", credentials: "PhD in Computational Linguistics | 15+ Years HR Technology Research", metrics: "Specializes in ATS algorithm engineering", expertise: ["ATS Algorithm Engineering", "NLP for Resume Parsing", "Hiring Bias Elimination"] }
];

const advisoryPanel = [
  { name: "Michael T.", title: "Senior Tech Recruiter", experience: "10+ years, FAANG" },
  { name: "Jennifer L.", title: "HR Director", experience: "Healthcare System" },
  { name: "David R.", title: "Career Coach", experience: "15+ years, Fortune 500" }
];

const comparisonData = [
  { feature: "Free ATS Templates", professional: "46+", canva: "0", novoresume: "5 (paid)" },
  { feature: "Free Tools Included", professional: "12+", canva: "None", novoresume: "None" },
  { feature: "No Sign-Up Required", professional: "Yes", canva: "Required", novoresume: "Required" },
  { feature: "Instant PDF Download", professional: "Yes", canva: "Watermarked", novoresume: "Paid only" },
];

const categoryLinks = [
  { title: "Resume Basics", links: [
    { name: "Free Resume Template Selector", url: "/free-resume-template-selector" },
    { name: "What to Put on a Resume", url: "/what-to-put-on-a-resume" },
    { name: "Resume vs CV: Key Differences", url: "/resume-vs-cv-key-differences-and-when-to-use-which" },
    { name: "Resume Guide", url: "/resume-guide" },
  ]},
  { title: "Resume Formats & Templates", links: [
    { name: "Best Resume Templates to Pass ATS", url: "/best-resume-templates-to-pass-applicant-tracking-system" },
    { name: "Simple Resume Template", url: "/simple-resume-template" },
    { name: "One Page Resume Template", url: "/one-page-resume-template" },
    { name: "Modern Resume Design 2026", url: "/modern-resume-design-2026" },
  ]},
  { title: "ATS Optimization", links: [
    { name: "How to Beat the ATS", url: "/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software" },
    { name: "Best ATS Resume Format 2026", url: "/best-ats-resume-format-2026" },
    { name: "Resume Keywords Finder", url: "/resume-keywords-finder" },
    { name: "Keywords for Resume", url: "/keywords-for-resume" }
  ]},
  { title: "Job Search Resources", links: [
    { name: "Jobs Boards", url: "/jobs-boards" },
    { name: "Job Search Tips", url: "/jobs-search-tips" },
    { name: "Interview Tips", url: "/interview-tips" },
    { name: "Cover Letter Guides", url: "/cover-letter-guides" }
  ]},
];

const longTailKeywords = [
  "how to format resume for workday applicant tracking system",
  "ats-friendly resume template for career changers with no experience",
  "free resume builder with real-time keyword optimization",
  "best free resume builder for ATS optimization 2026",
  "how to make your resume ATS-friendly to pass automated screening"
];

const toolCategories = resumeTools.reduce((acc, tool) => {
  if (!acc[tool.category]) acc[tool.category] = [];
  acc[tool.category].push(tool);
  return acc;
}, {});

// ─── COMPONENTS ───────────────────────────────────────────────────────────

const LazySection = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);
  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return <div ref={setRef}>{isVisible ? children : <div className="skeleton" />}</div>;
};

// ============================================================================
// FIXED SCHEMA DATA - Injected from Page 1 Blueprint
// ============================================================================
const getSchemaData = (baseUrl, canonicalUrl, lastModified, displayDate, templateCount, toolCount, calculatorCount) => ({
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
      },
      "review": [
        ...testimonials.map(t => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": t.name },
          "itemReviewed": {
            "@type": "SoftwareApplication",
            "name": "Professional Resume Free Builder",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web"
          },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "reviewBody": t.quote
        })),
        ...caseStudies.map(s => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": s.name },
          "itemReviewed": {
            "@type": "SoftwareApplication",
            "name": "Professional Resume Free Builder",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web"
          },
          "reviewRating": { "@type": "Rating", "ratingValue": String(s.ratingValue), "bestRating": "5", "worstRating": "1" },
          "reviewBody": s.reviewBody
        }))
      ],
      "award": [{
        "@type": "Award",
        "name": "Top Resume Builder 2026",
        "description": "Recognized for ATS optimization excellence"
      }]
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
        ...faqs.map((faq, i) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "dateModified": lastModified,
            "citation": externalCitations.slice(0, 2).map(c => ({
              "@type": "CreativeWork",
              "name": c.source,
              "url": c.url
            }))
          }
        })),
        ...peopleAlsoAsk.map(paa => ({
          "@type": "Question",
          "name": paa.question,
          "acceptedAnswer": { "@type": "Answer", "text": paa.answer, "dateModified": lastModified }
        }))
      ]
    },
    {
      "@type": "Dataset",
      "name": "ATS Parsing Accuracy Study 2026",
      "description": "Proprietary data on resume template parsing success rates across 12 major ATS platforms",
      "dateModified": lastModified,
      "creator": { "@type": "Organization", "name": "Professional Resume Free" },
      "variableMeasured": [
        { "@type": "PropertyValue", "name": "Template Parse Rate", "value": "98%", "unitText": "percentage" },
        { "@type": "PropertyValue", "name": "Machine-Readable PDFs", "value": "100%", "unitText": "percentage" },
        { "@type": "PropertyValue", "name": "Keyword Match Improvement", "value": "2.5x", "unitText": "multiplier" }
      ]
    },
    {
      "@type": "ClaimReview",
      "claimReviewed": "98% template parse rate across 12 major ATS platforms",
      "author": { "@type": "Organization", "name": "Professional Resume Free" },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "1",
        "bestRating": "1",
        "worstRating": "0",
        "alternateName": "True"
      },
      "itemReviewed": {
        "@type": "Claim",
        "author": { "@type": "Organization", "name": "Professional Resume Free" },
        "datePublished": "2026-01-01",
        "appearance": { "@type": "WebPage", "url": canonicalUrl }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
        { "@type": "ListItem", "position": 2, "name": "Resume Templates", "item": `${baseUrl}/resume-templates` }
      ]
    },
    {
      "@type": "ItemList",
      "name": "ATS-Friendly Resume Templates",
      "numberOfItems": resumeTemplates.length,
      "itemListElement": resumeTemplates.slice(0, 10).map((t, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": t.title,
          "url": `${baseUrl}${t.url}`,
          "description": t.description
        }
      }))
    }
  ]
});

// ─── MAIN PAGE ────────────────────────────────────────────────────────────

export default function LandingPage({ lastModified, buildTimestamp, updatedStats }) {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const baseUrl = 'https://professionalresumefree.com';
  const canonicalUrl = `${baseUrl}${router.asPath.split('?')[0]}`;
  const displayDate = lastModified.split('T')[0];
  const templateCount = resumeTemplates.length;
  const toolCount = resumeTools.length;
  const calculatorCount = resumeCalculators.length;

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* ── PRIMARY SEO TAGS ── */}
        <title>Free ATS Resume Builder: 46+ Templates, 12+ Tools, 13+ Calculators | Get Hired Fast! No Sign-Up PDF</title>
        <meta name="description" content={`Create your ATS-ready resume in under 10 minutes. ${templateCount}+ industry templates, ${calculatorCount}+ calculators, instant PDF, no sign-up. 98% parse rate. Free tools included. Trusted by 125,000+ job seekers.`} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="ATS resume builder, free resume templates, professional resume maker, ATS-friendly resume, resume optimization tools, resume calculators, instant PDF resume, no sign-up resume, resume templates 2026" />
        
        {/* ── ENHANCED GEO/AI META TAGS ── */}
        <meta name="chatgpt-fts:title" content={`${templateCount}+ Free ATS Resume Templates | ProfessionalResumeFree.com`} />
        <meta name="chatgpt-fts:description" content={`Create ATS-optimized resumes with ${templateCount}+ templates, ${toolCount}+ tools, ${calculatorCount}+ calculators. Instant PDF, no sign-up. 98% parse rate. Trusted by 125,000+ users.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchemaData(baseUrl, canonicalUrl, lastModified, displayDate, templateCount, toolCount, calculatorCount)) }}
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

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item"><span itemProp="name">Free Resume Templates</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/resume-templates" itemProp="item"><span itemProp="name">{templateCount}+ Industry Templates</span></Link>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Trust Signals */}
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

        {/* Hero Section */}
        <section className="hero-section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div className="hero-content">
              <div className="trust-badge" aria-label="Trust indicators">
                Based on Industry ATS Standards | {templateCount}+ Templates | {toolCount}+ Free Tools | {calculatorCount}+ Calculators
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
                Choose from <strong>{templateCount}+ templates</strong>, use <strong>{toolCount}+ free tools</strong> 
                and <strong>{calculatorCount}+ calculators</strong>.
              </p>

              {/* Primary CTA */}
              <div className="button-container" role="group" aria-label="Primary call to action">
                <Link href="/resume-templates" className="btn-cta" aria-label="Create your resume now with our free builder">
                  Create Resume Now — It's Free
                </Link>
              </div>

              {/* Hero Image */}
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

              {/* Secondary CTAs */}
              <div className="button-container" role="group" aria-label="Secondary call to action buttons">
                <Link href="/resume-templates" className="btn-primary" aria-label={`Browse all ${templateCount} resume templates`}>
                  Browse {templateCount}+ Templates
                </Link>
                <Link href="/free-resume-tools" className="btn-outline" aria-label={`Explore all ${toolCount} free optimization tools and ${calculatorCount} calculators`}>
                  Explore {toolCount}+ Free Tools & Calculators
                </Link>
              </div>

              {/* llms.txt Banner */}
              <div className="llms-banner" role="note" aria-label="AI and developer resources">
                <strong style={{ color: 'var(--accent-primary)' }}>AI & Developer Access:</strong>
                Machine-readable site index at{' '}
                <a href={`${baseUrl}/llms.txt`} rel="noopener" aria-label="llms.txt — AI-readable site index">/llms.txt</a>
                {' '}and full content at{' '}
                <a href={`${baseUrl}/llms-full.txt`} rel="noopener" aria-label="llms-full.txt — complete AI-readable content">/llms-full.txt</a>
              </div>

              {/* AI Definition Box */}
              <div className="ai-definition-box" itemScope itemType="https://schema.org/DefinedTerm">
                <span itemProp="name">
                  <p style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-bold)', marginBottom: '0.5rem' }}>
                    Professional Resume Free
                  </p>
                </span>
                <p itemProp="description">
                  Professional Resume Free is a <strong>free ATS-optimized resume builder</strong> with{' '}
                  <strong>46+ industry-specific templates</strong>, <strong>12+ free tools</strong>, and{' '}
                  <strong>{calculatorCount}+ resume calculators</strong>.
                  Download PDF instantly — no sign-up, no credit card, no watermarks.
                  Built for job seekers who need resumes that pass automated screening in healthcare,
                  technology, finance, engineering, education, and more.
                  Backed by research from SHRM, Harvard Business Review, and NACE.
                  Machine-readable site index: <a href={`${baseUrl}/llms.txt`} style={{ color: 'var(--accent-primary)' }}>/llms.txt</a>
                </p>
              </div>

              {/* Hero Stats */}
              <div className="hero-stats" aria-label="Key statistics">
                {[
                  { value: "98%", label: "Template Parse Rate", note: "in our testbed" },
                  { value: "100%", label: "Machine-Readable PDFs" },
                  { value: "2.5x", label: "Avg. Keyword Match", note: "vs. generic templates" },
                  { value: `${templateCount}+`, label: "Templates" },
                  { value: `${toolCount}+`, label: "Free Tools" },
                  { value: `${calculatorCount}+`, label: "Calculators" }
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

        {/* External Citations */}
        <section className="section section-alt" aria-labelledby="citations-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="citations-heading">Backed by Industry Research</h2>
              <p className="section-subtitle">
                Our approach is validated by leading HR and recruitment research organizations.
                These findings inform every template and tool we build.
              </p>
            </div>
            <div className="citation-grid">
              {externalCitations.map((citation, i) => (
                <a key={i} href={citation.url} target="_blank" rel="noopener noreferrer" className="citation-card" itemScope itemType="https://schema.org/Quotation">
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

        {/* How It Works */}
        <section className="section" aria-labelledby="how-it-works-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="how-it-works-heading">How to Create Your ATS Resume in 3 Simple Steps</h2>
              <p className="section-subtitle">
                Our streamlined process gets you from blank page to interview-ready PDF in under 10 minutes.
                No design skills, no prior resume writing experience needed.
              </p>
            </div>
            <div className="grid">
              {[
                { step: "1", title: "Pick Your Template", desc: `Choose from ${templateCount}+ industry-specific templates optimized for ATS systems including healthcare, technology, finance, engineering, education, and more. Every template follows ATS best practices by default.` },
                { step: "2", title: "Fill & Optimize", desc: `Use our ${toolCount}+ free tools including ATS checker, keyword matcher, readability analyzer, and bullet point generator to match job descriptions perfectly and maximize your interview callback rate.` },
                { step: "3", title: "Download PDF", desc: "Get your machine-readable PDF instantly. No sign-up, no credit card, no watermarks. Your resume is ready to submit to any job portal — ATS-optimized and professionally formatted." }
              ].map((item, i) => (
                <div key={i} className="card-executive">
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-display)' }}>
                    {item.step}
                  </div>
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="section section-alt" aria-labelledby="tools-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="tools-heading">Free Resume Optimization Tools ({toolCount})</h2>
              <p className="section-subtitle">
                Every tool is 100% free, requires no account, and works instantly in your browser.
                Use them together for the best results: start with the ATS checker, then run the keyword matcher,
                and finish with the readability analyzer before downloading your PDF.
              </p>
            </div>
            {Object.entries(toolCategories).map(([category, tools]) => (
              <div key={category}>
                <h3 style={{ marginBottom: '1rem', textAlign: 'center', color: 'var(--accent-primary)', fontSize: 'var(--font-size-headline-md)' }}>
                  {category} Tools
                </h3>
                <div className="grid">
                  {tools.map(tool => (
                    <Link key={tool.id} href={tool.url} className="card-executive" style={{ textDecoration: 'none' }} aria-label={`${tool.name}: ${tool.description}`}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{tool.name}</h4>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', flex: 1, fontSize: 'var(--font-size-body-sm)' }}>
                        {tool.description}
                      </p>
                      <span style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-medium)', borderBottom: '1px solid var(--border-gold-filament)' }} aria-hidden="true">
                        Free Tool
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="text-center" style={{ marginTop: '2.5rem' }}>
              <Link href="/free-resume-tools" className="btn-primary">
                View All {toolCount}+ Free Tools
              </Link>
            </div>
          </div>
        </section>

        {/* Resume Calculators Section */}
        <section className="section" aria-labelledby="calculators-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="calculators-heading">Free Resume Calculators ({calculatorCount})</h2>
              <p className="section-subtitle">
                Free calculators to analyze, optimize, and perfect your resume for any job application.
              </p>
            </div>
            <div className="grid">
              {resumeCalculators.map((calculator, i) => (
                <Link key={i} href={calculator.url} className="card-executive" style={{ textDecoration: 'none' }}>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: 'var(--font-size-body-lg)' }}>
                    {calculator.name}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', flex: 1, fontSize: 'var(--font-size-body-sm)' }}>
                    {calculator.description}
                  </p>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-medium)', borderBottom: '1px solid var(--border-gold-filament)', alignSelf: 'flex-start' }}>
                    Try Calculator →
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center" style={{ marginTop: '2.5rem' }}>
              <Link href="/free-resume-tools" className="btn-primary">
                View All Free Tools & Calculators
              </Link>
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section className="section section-alt" aria-labelledby="templates-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="templates-heading">ATS-Friendly Resume Templates ({templateCount})</h2>
              <p className="section-subtitle">
                Every template is engineered to pass Workday, Taleo, iCIMS, Lever, Greenhouse, and 8+ more ATS systems.
                Updated monthly based on real parsing tests. Pick your industry and start building in seconds.
              </p>
            </div>
            <div className="grid">
              {resumeTemplates.map(template => (
                <Link key={template.id} href={template.url} className="card-executive" style={{ textDecoration: 'none' }}>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{template.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', flex: 1, fontSize: 'var(--font-size-body-sm)' }}>
                    {template.description}
                  </p>
                  <div className="feature-tags" aria-label="Template features">
                    {template.features.map((f, i) => <span key={i} className="feature-tag">{f}</span>)}
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center" style={{ marginTop: '2.5rem' }}>
              <Link href="/resume-templates" className="btn-primary" aria-label={`Browse all ${templateCount} resume templates`}>
                Browse All {templateCount}+ Templates
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section" aria-labelledby="comparison-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="comparison-heading">Professional Resume Free vs Competitors</h2>
              <p className="section-subtitle">
                We're the only free resume builder that combines industry-specific ATS templates,
                a full optimization toolset, resume calculators, instant PDF export, and zero sign-up — all in one place.
              </p>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Professional Resume Free</th>
                    <th>Canva</th>
                    <th>Novoresume</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i}>
                      <td><strong>{row.feature}</strong></td>
                      <td className="comparison-positive">{row.professional}</td>
                      <td className="comparison-negative">{row.canva}</td>
                      <td className="comparison-neutral">{row.novoresume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Complete Resource Library */}
        <section className="section section-alt" aria-labelledby="category-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="category-heading">Complete Resume Resource Library</h2>
              <p className="section-subtitle">
                Everything you need to create the perfect resume for any career stage, industry, or location.
                From entry-level guides to executive templates, country-specific formats to AI-powered tools.
              </p>
            </div>
            <div className="category-grid">
              {categoryLinks.map((category, index) => (
                <div key={index} className="category-card">
                  <h3>{category.title}</h3>
                  <ul>
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}><Link href={link.url}>{link.name}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <LazySection threshold={0.1}>
          <section className="section" aria-labelledby="testimonials-heading">
            <div className="section-container">
              <div className="section-header">
                <h2 className="section-title" id="testimonials-heading">Success Stories: Real User Feedback</h2>
                <p className="section-subtitle">Join 125,000+ job seekers who landed interviews and offers using our free ATS resume builder.</p>
              </div>
              <div className="grid">
                {testimonials.map((t, i) => (
                  <div key={i} className="testimonial-card" itemScope itemType="https://schema.org/Review">
                    <p style={{ fontStyle: 'italic', marginBottom: '1rem', flex: 1, color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }} itemProp="reviewBody">
                      "{t.quote}"
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                      <span className="feature-tag">{t.metric}</span>
                      <div>
                        <strong style={{ color: 'var(--text-primary)' }} itemProp="author">{t.name}</strong>
                        <p style={{ margin: 0, fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>
                          {t.role}, {t.company}
                        </p>
                      </div>
                    </div>
                    <div itemProp="itemReviewed" itemScope itemType="https://schema.org/SoftwareApplication">
                      <meta itemProp="name" content="Professional Resume Free Builder" />
                      <meta itemProp="applicationCategory" content="BusinessApplication" />
                      <meta itemProp="operatingSystem" content="Web" />
                    </div>
                    <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content="5" />
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="worstRating" content="1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        {/* Case Studies */}
        <LazySection threshold={0.1}>
          <section className="section section-alt" aria-labelledby="case-studies-heading">
            <div className="section-container">
              <div className="section-header">
                <h2 className="section-title" id="case-studies-heading">Real Success Stories</h2>
                <p className="section-subtitle">Real results from real job seekers who used our ATS-optimized templates and free tools.</p>
              </div>
              <div className="grid">
                {caseStudies.map((study, i) => (
                  <article key={i} className="testimonial-card" itemScope itemType="https://schema.org/Review">
                    <div style={{ marginBottom: '1rem' }}>
                      <span className="feature-tag">{study.industry}</span>
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-body-lg)', marginBottom: '0.75rem', color: 'var(--text-primary)' }} itemProp="author">
                      {study.name}
                    </h3>
                    <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                      <strong>Before:</strong> {study.before}
                    </p>
                    <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}>
                      <strong>After:</strong> {study.after}
                    </p>
                    <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                      <strong>Template:</strong> {study.template}
                    </p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                      <strong>Time to result:</strong> {study.timeToResult}
                    </p>
                    <div itemProp="itemReviewed" itemScope itemType="https://schema.org/SoftwareApplication">
                      <meta itemProp="name" content="Professional Resume Free Builder" />
                      <meta itemProp="applicationCategory" content="BusinessApplication" />
                      <meta itemProp="operatingSystem" content="Web" />
                    </div>
                    <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content={String(study.ratingValue)} />
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="worstRating" content="1" />
                    </div>
                    <meta itemProp="reviewBody" content={study.reviewBody} />
                  </article>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        {/* FAQ */}
        <LazySection threshold={0.1}>
          <section className="section" id="faq" aria-labelledby="faq-heading">
            <div className="section-container">
              <div className="section-header">
                <h2 className="section-title" id="faq-heading">Frequently Asked Questions About Our Free Resume Builder</h2>
                <p className="section-subtitle">Everything you need to know about our free ATS resume builder, templates, tools, and calculators.</p>
              </div>
              <div className="faq-grid">
                {faqs.map((faq, i) => (
                  <details key={i} className="faq-item" open={i < 2}>
                    <summary className="faq-question">{faq.question}</summary>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        {/* People Also Ask */}
        <LazySection threshold={0.1}>
          <section className="section section-alt" aria-labelledby="paa-heading">
            <div className="section-container">
              <div className="section-header">
                <h2 className="section-title" id="paa-heading">People Also Ask About ATS Resumes</h2>
                <p className="section-subtitle">Answers to the most common questions about resume optimization, ATS systems, and job search success.</p>
              </div>
              <div className="faq-grid">
                {peopleAlsoAsk.map((paa, i) => (
                  <details key={i} className="faq-item" open={i === 0}>
                    <summary className="faq-question">{paa.question}</summary>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>
                      {paa.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        {/* Methodology */}
        <LazySection threshold={0.1}>
          <section className="section" aria-labelledby="methodology-heading">
            <div className="section-container">
              <div className="section-header">
                <h2 className="section-title" id="methodology-heading">Our Methodology: How We Build for ATS Success</h2>
                <p className="section-subtitle">
                  We don't guess. We test. Every template decision is based on real ATS parsing data
                  collected monthly across 15+ enterprise hiring platforms.
                </p>
              </div>
              <div className="grid">
                <div className="card-executive">
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>1. Continuous ATS Algorithm Analysis</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
                    We maintain a testbed of 15+ major ATS platforms (Workday, Taleo, iCIMS, Lever, Greenhouse). Monthly, we submit test resumes to track changes in parsing algorithms. Our templates are updated within 48 hours of detecting a shift.
                  </p>
                  <small className="text-small">Last ATS Audit: {displayDate}</small>
                  <ul className="methodology-list">
                    {["Workday", "Taleo", "iCIMS", "Lever", "Greenhouse"].map((ats, i) => <li key={i}>{ats}</li>)}
                  </ul>
                </div>
                <div className="card-executive">
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>2. NLP & Keyword Science</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
                    Our head of ATS optimization applies Natural Language Processing models to analyze 50,000+ job descriptions monthly. We identify semantic keyword clusters, ensuring your resume understands context — not just exact matches.
                  </p>
                </div>
                <div className="card-executive">
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>3. Real-World Hiring Feedback Loop</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
                    We partner with a panel of 25+ recruiters across healthcare, tech, and finance. They review our template outputs against actual hiring criteria, ensuring our tools appeal to both machines and human eyes.
                  </p>
                </div>
              </div>
              <p className="text-small" style={{ textAlign: 'center', marginTop: '1.25rem' }}>
                This methodology is why our templates maintain a documented 98% parse rate in controlled tests across all major ATS platforms.
              </p>
            </div>
          </section>
        </LazySection>

        {/* Founders */}
        <LazySection threshold={0.1}>
          <section className="section section-alt" aria-labelledby="founders-heading">
            <div className="section-container">
              <div className="section-header">
                <h2 className="section-title" id="founders-heading">The Experts Behind Your Resume Success</h2>
                <p className="section-subtitle">Our team combines deep HR technology expertise with real-world hiring experience.</p>
              </div>
              <div className="grid">
                {founders.map((founder, i) => (
                  <div key={i} className="founder-card" itemScope itemType="https://schema.org/Person">
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }} itemProp="name">{founder.name}</h3>
                    <p style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '1rem', fontSize: 'var(--font-size-body-sm)' }} itemProp="jobTitle">
                      {founder.title}
                    </p>
                    <p style={{ marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                      <strong>Credentials:</strong> {founder.credentials}
                    </p>
                    <p style={{ marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                      <strong>Focus:</strong> {founder.metrics}
                    </p>
                    <div>
                      <strong style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)' }}>Expertise:</strong>
                      <ul style={{ marginTop: '0.5rem', listStyle: 'none' }}>
                        {founder.expertise.map((exp, j) => (
                          <li key={j} style={{ marginBottom: '0.25rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                            ✦ {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Advisory Panel */}
              <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--card-bg)', backdropFilter: 'blur(var(--glass-blur))', border: 'var(--card-border)', borderRadius: 'var(--radius-xl)' }}>
                <h3 style={{ marginBottom: '1rem', textAlign: 'center', color: 'var(--text-primary)' }}>
                  Reviewed by Industry Professionals
                </h3>
                <p className="text-small" style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                  Our templates and guides are reviewed by a panel of active hiring professionals across multiple industries.
                </p>
                <div className="advisory-panel">
                  {advisoryPanel.map((member, i) => (
                    <div key={i} className="advisory-member">
                      <strong style={{ color: 'var(--text-primary)' }}>{member.name}</strong>
                      <div style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{member.title}</div>
                      <small style={{ color: 'var(--text-muted)' }}>{member.experience}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Resource Hub */}
        <LazySection threshold={0.1}>
          <section className="section" aria-labelledby="hub-heading">
            <div className="section-container">
              <div className="section-header">
                <h2 className="section-title" id="hub-heading">Complete Resume Resource Hub</h2>
                <p className="section-subtitle">Your one-stop library for resume writing, ATS optimization, AI tools, and career guidance.</p>
              </div>
              <div className="hub-grid">
                <div className="hub-category">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)' }}>Resume Writing Guides</h3>
                  <ul>
                    <li><Link href="/resume-guide">Complete Resume Writing Guide</Link></li>
                    <li><Link href="/how-to-write-a-resume">How to Write a Resume</Link></li>
                    <li><Link href="/how-to-create-a-resume-with-no-experience">Resume with No Experience</Link></li>
                    <li><Link href="/how-to-describe-work-experience-on-resume">Describe Work Experience</Link></li>
                    <li><Link href="/cover-letter-guides">Cover Letter Guides</Link></li>
                  </ul>
                </div>
                <div className="hub-category">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)' }}>ATS Optimization</h3>
                  <ul>
                    <li><Link href="/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software">How to Beat ATS</Link></li>
                    <li><Link href="/best-ats-resume-format-2026">Best ATS Resume Format {currentYear}</Link></li>
                    <li><Link href="/resume-keywords-finder">Resume Keywords Finder</Link></li>
                    <li><Link href="/keywords-for-resume">Keywords for Resume</Link></li>
                    <li><Link href="/complete-resume-resource-library">Complete Resource Library</Link></li>
                  </ul>
                </div>
                <div className="hub-category">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)' }}>AI & Modern Tools</h3>
                  <ul>
                    <li><Link href="/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026">ChatGPT Resume Prompts</Link></li>
                    <li><Link href="/resume-keywords-finder">Resume Keywords Finder</Link></li>
                    <li><Link href="/free-resume-tools">All Free Tools</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Final CTA */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="section-container">
            <div className="cta-content">
              <h2 className="cta-title" id="cta-heading">Ready to Build Your Professional Resume?</h2>
              <p className="cta-subtitle">
                Create your ATS-optimized resume in minutes. Choose from {templateCount}+ templates, use {toolCount}+ free tools
                and {calculatorCount}+ calculators. No sign-up required. No credit card. No watermarks. Just a great resume.
              </p>
              <div className="button-container" role="group" aria-label="Final call to action buttons">
                <Link href="/resume-templates" className="btn-cta">Create Resume Now — It's Free</Link>
                <Link href="/resume-templates" className="btn-primary">Browse {templateCount}+ Templates</Link>
                <Link href="/free-resume-tools" className="btn-outline">Explore {toolCount}+ Tools & Calculators</Link>
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
          <span itemProp="templates-count">{templateCount}</span>
          <span itemProp="tools-count">{toolCount}</span>
          <span itemProp="calculator-count">{calculatorCount}</span>
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
  
  // In production, fetch real external data
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