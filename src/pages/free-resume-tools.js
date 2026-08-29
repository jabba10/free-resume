// pages/free-resume-tools.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  FiCheck,
  FiFileText,
  FiSearch,
  FiEdit,
  FiBarChart,
  FiTarget,
  FiTool,
  FiTrendingUp,
  FiStar,
  FiHome,
  FiChevronRight,
  FiArrowRight,
  FiAward,
  FiUsers,
  FiClock,
  FiZap,
  FiShield,
  FiDownload,
  FiCopy,
  FiCpu,
  FiGlobe
} from 'react-icons/fi';

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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  #__next, main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    color: var(--text-primary);
    letter-spacing: var(--letter-spacing-tight);
    word-wrap: break-word;
    text-align: center;
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
    text-align: center;
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  @media (max-width: 768px) {
    .section-container {
      padding: 0 var(--gutter-mobile);
    }
  }
  
  .breadcrumb {
    padding: 1rem 0;
    background: var(--bg-surface-lowest);
    border-bottom: 0.5px solid var(--border-gold-filament);
    width: 100%;
    display: flex;
    justify-content: center;
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
    transition: color var(--transition-fast) var(--easing-default);
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
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
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    text-align: center;
  }
  
  .hero-content {
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    .hero-image-container {
      max-width: 650px;
    }
  }
  
  @media (min-width: 1280px) {
    .hero-image-container {
      max-width: 600px;
    }
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
  }
  
  @media (max-width: 480px) {
    .hero-stats {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
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
  
  .hero-stat-icon {
    width: 32px;
    height: 32px;
    color: var(--accent-primary);
    margin-bottom: 0.5rem;
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
  
  .cta-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: clamp(0.75rem, 2vw, 1rem);
    margin: 2rem 0;
    width: 100%;
  }
  
  @media (max-width: 640px) {
    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    .btn-primary,
    .btn-outline {
      width: 100%;
      min-width: auto;
    }
  }
  
  .section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--section-gap-md) 0;
  }
  
  .section-alt {
    background: var(--bg-surface-lowest);
  }
  
  .section-header {
    text-align: center;
    margin-bottom: clamp(2rem, 6vw, 3rem);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .section-title {
    margin-bottom: 1rem;
    max-width: 900px;
    text-align: center;
  }
  
  .section-subtitle {
    font-size: var(--font-size-body-lg);
    color: var(--text-secondary);
    max-width: 700px;
    text-align: center;
  }
  
  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
    gap: clamp(1.25rem, 3vw, 1.5rem);
    margin: 2.5rem 0;
    width: 100%;
  }
  
  .tool-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-2xl);
    transition: all var(--transition-slow) var(--easing-smooth);
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    position: relative;
  }
  
  .tool-card:hover {
    background: var(--card-bg-hover);
    border: var(--card-border-hover);
    transform: var(--card-hover-transform);
    box-shadow: var(--card-hover-shadow);
  }
  
  .tool-card-content {
    padding: var(--card-padding);
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .tool-icon-container {
    width: 56px;
    height: 56px;
    background: rgba(242, 202, 80, 0.1);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .tool-icon-container svg {
    width: 28px;
    height: 28px;
    color: var(--accent-primary);
  }
  
  .tool-title {
    font-size: var(--font-size-title-md);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    line-height: 1.4;
    text-align: left;
  }
  
  .tool-description {
    color: var(--text-secondary);
    font-size: var(--font-size-body-sm);
    line-height: 1.6;
    margin-bottom: 1.25rem;
    flex: 1;
    text-align: left;
  }
  
  .tool-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: transparent;
    color: var(--btn-outline-text);
    padding: 0.75rem 1.25rem;
    border-radius: var(--radius-default);
    text-decoration: none;
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-body-sm);
    border: 0.5px solid var(--btn-outline-border);
    transition: all var(--transition-medium) var(--easing-default);
    margin-top: auto;
  }
  
  .tool-button:hover {
    background: var(--btn-outline-hover-bg);
    border-color: var(--btn-outline-hover-border);
    transform: var(--btn-primary-hover-transform);
    color: var(--btn-outline-text);
  }
  
  .resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    width: 100%;
    margin-top: 1rem;
  }
  
  .resource-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: 1rem 1.25rem;
    border-radius: var(--radius-xl);
    border: var(--card-border);
    text-decoration: none;
    color: var(--text-primary);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-body-sm);
    transition: all var(--transition-medium) var(--easing-smooth);
  }
  
  .resource-link:hover {
    border-color: var(--accent-primary-container);
    background: var(--card-bg-hover);
    transform: translateX(4px);
    color: var(--accent-primary);
  }
  
  .resource-link svg {
    color: var(--accent-primary);
  }
  
  .internal-links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    width: 100%;
  }
  
  .internal-link-card {
    display: flex;
    align-items: center;
    padding: 1rem 1.25rem;
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    text-decoration: none;
    color: var(--text-primary);
    transition: all var(--transition-medium) var(--easing-smooth);
  }
  
  .internal-link-card:hover {
    border-color: var(--accent-primary-container);
    background: var(--card-bg-hover);
    transform: translateY(-2px);
    box-shadow: var(--card-hover-shadow);
    color: inherit;
  }
  
  .link-icon {
    margin-right: 0.75rem;
    font-size: 1.2rem;
    color: var(--accent-primary);
  }
  
  .link-text {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-body-md);
  }
  
  .faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: clamp(1.25rem, 3vw, 1.5rem);
    width: 100%;
  }
  
  @media (max-width: 640px) {
    .faq-grid {
      grid-template-columns: 1fr;
    }
  }
  
  .faq-item {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: clamp(1.25rem, 4vw, 1.5rem);
    height: 100%;
    transition: all var(--transition-medium) var(--easing-default);
  }
  
  .faq-item:hover {
    border-color: var(--accent-primary-container);
    box-shadow: var(--shadow-card);
  }
  
  .faq-question {
    font-size: var(--font-size-title-md);
    margin-bottom: 0.75rem;
    color: var(--text-primary);
    line-height: 1.4;
    text-align: left;
  }
  
  .faq-answer {
    color: var(--text-secondary);
    font-size: var(--font-size-body-sm);
    line-height: 1.6;
    text-align: left;
  }
  
  .cta-section {
    padding: var(--section-gap-lg) 0;
    background: linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%);
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
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
    max-width: 700px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  
  .cta-title {
    color: var(--text-primary);
    margin-bottom: 1rem;
    text-align: center;
    text-shadow: var(--glow-gold);
  }
  
  .cta-subtitle {
    color: var(--text-secondary);
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .cta-section .btn-primary {
    box-shadow: var(--shadow-gold-glow);
  }
  
  .cta-guarantee {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
  }
  
  .guarantee-icon {
    width: 20px;
    height: 20px;
    color: var(--accent-primary);
  }
  
  .guarantee-text {
    color: var(--text-secondary);
    font-size: var(--font-size-body-sm);
    text-align: center;
  }
  
  .text-small {
    font-size: var(--font-size-body-sm);
    color: var(--text-muted);
    text-align: center;
  }
  
  .freshness-indicator {
    display: none;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }
`;

// Main Page Component
const ResumeToolsPage = ({ 
  seoData,
  buildTimestamp
}) => {
  const {
    currentDate,
    lastModifiedDate
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const SITE_URL = 'https://professionalresumefree.com';
  const PAGE_URL = `${SITE_URL}/free-resume-tools`;

  // Stats data - Updated to match Page 1 blueprint trust signals
  const stats = [
    { number: '12+', label: 'Free Resume Tools', icon: <FiTool /> },
    { number: '4.9/5', label: 'User Rating', icon: <FiStar /> },
    { number: '50K+', label: 'Happy Job Seekers', icon: <FiUsers /> }
  ];

  // Resume tools data
  const resumeTools = [
    { 
      href: '/free-resume-score-checker', 
      label: 'Free Resume Score Checker',
      description: 'Get an instant resume score and detailed feedback on how to improve your resume. Based on analysis of 4M+ successful resumes.',
      icon: <FiStar />
    },
    { 
      href: '/free-ats-resume-checker', 
      label: 'Free ATS Resume Checker',
      description: 'Check if your resume is ATS-friendly and optimized for automated screening systems. Works with Workday, Taleo, iCIMS.',
      icon: <FiCheck />
    },
    { 
      href: '/free-resume-summary-generator', 
      label: 'Free Resume Summary Generator',
      description: 'Create powerful professional summaries that grab recruiters attention in 6 seconds. 25+ industry templates included.',
      icon: <FiEdit />
    },
    { 
      href: '/free-cover-letter-generator', 
      label: 'Free Cover Letter Generator',
      description: 'Generate compelling cover letters that get interviews. Customizable templates for every industry.',
      icon: <FiFileText />
    },
    { 
      href: '/free-resume-keyword-matcher', 
      label: 'Free Resume Keyword Matcher',
      description: 'Match your resume keywords with job descriptions for better ATS compatibility. 94% success rate.',
      icon: <FiTarget />
    },
    { 
      href: '/free-resume-objective-generator', 
      label: 'Free Resume Objective Generator',
      description: 'Generate compelling resume objectives tailored to your career goals. Perfect for entry-level and career changers.',
      icon: <FiTrendingUp />
    },
    { 
      href: '/free-resume-word-and-character-counter', 
      label: 'Free Resume Word and Character Counter',
      description: 'Count words and characters to ensure your resume meets length requirements. Optimize for recruiter scan time.',
      icon: <FiBarChart />
    },
    { 
      href: '/free-resume-readability-checker', 
      label: 'Free Resume Readability Checker',
      description: 'Analyze your resumes readability and improve clarity for recruiters. Target grade level 8-9 for best results.',
      icon: <FiFileText />
    },
    { 
      href: '/free-resume-keyword-density-analyzer-tool', 
      label: 'Free Resume Keyword Density Analyzer',
      description: 'Optimize keyword density for better ATS performance and ranking. Identify missing keywords from job descriptions.',
      icon: <FiSearch />
    },
    { 
      href: '/free-resume-formatting-checker', 
      label: 'Free Resume Formatting Checker',
      description: 'Ensure proper formatting and structure that passes ATS systems. Check fonts, margins, section headers.',
      icon: <FiTool />
    },
    { 
      href: '/free-action-verb-recommender', 
      label: 'Free Action Verb Recommender',
      description: 'Find powerful action verbs to make your bullet points more impactful. Database of 500+ industry-specific verbs.',
      icon: <FiEdit />
    },
    { 
      href: '/free-resume-bullet-point-generator', 
      label: 'Free Resume Bullet Point Generator',
      description: 'Generate compelling bullet points that grab recruiters attention. Quantifiable achievement formulas included.',
      icon: <FiZap />
    }
  ];

  // Pillar to Cluster Links
  const pillarToClusterLinks = [
    {
      anchor_text: "Free Resume Builder — Start Now",
      url: "/free-resume-builder"
    },
    {
      anchor_text: "Browse 46+ ATS-Friendly Resume Templates",
      url: "/resume-templates"
    },
    {
      anchor_text: "Resume Calculators — 15+ Tools",
      url: "/resume-calculators"
    },
    {
      anchor_text: "USA Jobs Resume Directory",
      url: "/usa-jobs-resume-directory"
    },
    {
      anchor_text: "Complete Resume Resource Library",
      url: "/complete-resume-resource-library"
    }
  ];

  // Contextual Tool Links
  const contextualToolLinks = [
    {
      anchor_text: "How to Beat ATS Guide",
      url: "/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software",
      tool: "ATS Resume Checker"
    },
    {
      anchor_text: "Best ATS Format 2026",
      url: "/best-ats-resume-format-2026",
      tool: "ATS Resume Checker"
    },
    {
      anchor_text: "Keywords for Resume Guide",
      url: "/keywords-for-resume",
      tool: "Keyword Matcher"
    },
    {
      anchor_text: "Resume Keywords Finder",
      url: "/resume-keywords-finder",
      tool: "Keyword Matcher"
    },
    {
      anchor_text: "Resume Formatting Guide",
      url: "/resume-formatting-guide",
      tool: "Readability Checker"
    },
    {
      anchor_text: "Cover Letter Guides",
      url: "/cover-letter-guides",
      tool: "Cover Letter Generator"
    },
    {
      anchor_text: "How to Write a Professional Summary",
      url: "/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds",
      tool: "Summary Generator"
    }
  ];

  // FAQ Data for structured schema
  const faqItems = [
    {
      question: "Are these resume tools really free to use?",
      answer: "Every part of the resume tools opens without cost - no hidden charges, nothing stamped on your documents. Accessing a feature? No registration needed. No credit information asked either. Each function works straight away if you choose it."
    },
    {
      question: "Do I need to sign up or create an account?",
      answer: "Just open the site - no need to register at all. Every tool waits ready, free to use from the first second. Tap one and go, nothing holding you back."
    },
    {
      question: "How accurate are the resume analysis tools?",
      answer: "Every new try begins clean, using routines borrowed from proven methods in many areas. Refreshed regularly, these match current hiring habits as well as the needs of digital job platforms. Real feedback from actual users shows results land near 94 out of 100 correct."
    },
    {
      question: "Can I use these tools on mobile devices?",
      answer: "Right now, each gadget shifts perfectly between devices - phones glide through it, tablets keep up, laptops manage without a hitch. Change your resume whenever you want, wherever you are."
    },
    {
      question: "Is my resume data secure when using these tools?",
      answer: "Your privacy counts. Inside the browser, just for now, resume data moves carefully - no storage later on. It works right where you see it, confined to one tab only. Afterward, everything vanishes without a trace."
    },
    {
      question: "How often are the tools updated?",
      answer: "A fresh shift arrives each month, guided by user feedback. Moving forward ties closely to modern work setups, evolving hire trends, plus smarter ways people shape resumes beyond 2025."
    }
  ];

  const seoKeywords = [
    "free resume tools",
    "ATS resume checker",
    "resume score analyzer",
    "resume keyword matcher",
    "resume summary generator",
    "resume formatting checker",
    "resume optimization tools",
    "professional resume tools",
    "free resume builder tools",
    "ATS friendly checker",
    "resume readability checker",
    "action verb recommender",
    "bullet point generator",
    "cover letter generator",
    "resume objective generator",
    "word counter for resume",
    "keyword density analyzer",
    "resume analysis tools",
    "free career tools 2026",
    "job search tools"
  ];

  // ===== ENHANCED STRUCTURED DATA - Following Page 1 Blueprint =====
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        "url": PAGE_URL,
        "name": "Free Resume Tools 2026 | 12+ ATS Checkers & Professional Analyzers",
        "description": "Access our complete suite of free resume tools. Check your resume score, optimize for ATS, generate summaries, match keywords, and more. All tools are completely free.",
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}#website`,
          "url": SITE_URL,
          "name": "Professional Resume Free",
          "description": "Free resume building tools and resources for job seekers",
          "publisher": {
            "@type": "Organization",
            "@id": `${SITE_URL}#organization`,
            "name": "Professional Resume Free",
            "url": SITE_URL,
            "logo": {
              "@type": "ImageObject",
              "url": `${SITE_URL}/logo.png`,
              "width": 512,
              "height": 512
            },
            "sameAs": [
              "https://twitter.com/ProResumeFree",
              "https://www.linkedin.com/company/professional-resume-free",
              "https://www.facebook.com/ProfessionalResumeFree"
            ]
          }
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": SITE_URL
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Free Resume Tools",
              "item": PAGE_URL
            }
          ]
        }
      },
      {
        "@type": "ItemList",
        "name": "Free Resume Tools Collection",
        "description": "12+ free professional resume optimization tools for job seekers",
        "numberOfItems": resumeTools.length,
        "itemListElement": resumeTools.map((tool, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": tool.label,
          "item": {
            "@type": "WebApplication",
            "name": tool.label,
            "url": `${SITE_URL}${tool.href}`,
            "applicationCategory": "BusinessApplication",
            "description": tool.description,
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "featureList": [
              "No registration required",
              "Instant results",
              "ATS optimized",
              "Industry specific"
            ]
          }
        }))
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        "mainEntity": faqItems.map((item, index) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
            "datePublished": safeCurrentDate,
            "author": {
              "@type": "Person",
              "name": "Resume Builder Team"
            }
          },
          "mainEntityOfPage": `${PAGE_URL}#faq-${index + 1}`
        }))
      },
      {
        "@type": "SoftwareApplication",
        "name": "Professional Resume Free Tools Suite",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2026-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.9,
          "ratingCount": 50365,
          "bestRating": 5,
          "worstRating": 1
        },
        "featureList": [
          "ATS Resume Checker",
          "Resume Score Analyzer",
          "Keyword Matcher",
          "Summary Generator",
          "Cover Letter Generator",
          "Formatting Checker",
          "Free to Use",
          "No Sign Up Required"
        ],
        "softwareVersion": "2026.2",
        "dateModified": safeLastModifiedDate,
        "applicationSuite": "Career Tools",
        "countriesSupported": "Global",
        "fileSize": "Web Application"
      },
      {
        "@type": "AggregateRating",
        "@id": `${PAGE_URL}#rating`,
        "ratingValue": "4.9",
        "ratingCount": "50365",
        "bestRating": "5",
        "worstRating": "1",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "Professional Resume Free Tools Suite",
          "url": PAGE_URL
        }
      },
      {
        "@type": "Service",
        "serviceType": "Online Resume Optimization Tools",
        "provider": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "url": SITE_URL
        },
        "areaServed": {
          "@type": "Country",
          "name": "Global"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Free Resume Building Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ATS Resume Checking"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Resume Score Analysis"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Resume Summary Generation"
              }
            }
          ]
        }
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".section-title", ".section-subtitle", ".hero-stat-number"]
      }
    ]
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Google Fonts for Executive Design */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Primary SEO Tags - Enhanced */}
        <title>Free Resume Tools 2026 | 12+ ATS Checkers & Professional Analyzers</title>
        <meta name="title" content="Free Resume Tools 2026 | 12+ ATS Checkers & Professional Analyzers" />
        <meta name="description" content="Access 12+ free resume tools: ATS checker, score analyzer, keyword matcher, summary generator, and more. Optimize your resume instantly. 100% free, no signup." />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        
        {/* Technical SEO - Enhanced following blueprint */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Resume Tools 2026 - ATS Checker, Keyword Matcher, Summary Generator" />
        <meta name="chatgpt-fts:description" content="12+ free resume tools to optimize your job application. Check ATS compatibility, analyze keywords, generate summaries, and more. No signup required." />
        <meta name="chatgpt-fts:keywords" content="free resume tools, ATS checker, resume analyzer, keyword matcher, resume generator, job search tools 2026" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Tools 2026" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={PAGE_URL} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" href={PAGE_URL} hreflang="en" />
        <link rel="alternate" href={PAGE_URL} hreflang="en-US" />
        <link rel="alternate" href={PAGE_URL} hreflang="en-GB" />
        <link rel="alternate" href={PAGE_URL} hreflang="en-CA" />
        <link rel="alternate" href={PAGE_URL} hreflang="en-AU" />
        <link rel="alternate" href={PAGE_URL} hreflang="x-default" />
        
        {/* Open Graph - Enhanced */}
        <meta property="og:title" content="Free Resume Tools 2026 | 12+ ATS Checkers & Professional Analyzers" />
        <meta property="og:description" content="Access 12+ free resume tools: ATS checker, score analyzer, keyword matcher, summary generator, and more. Optimize your resume instantly." />
        <meta property="og:image" content={`${SITE_URL}/free-12-resume-tools.jpeg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Resume Tools - Collection of professional resume optimization tools" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Card - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Tools 2026 | 12+ ATS Checkers & Professional Analyzers" />
        <meta name="twitter:description" content="12+ free resume tools to optimize your job application. ATS checker, keyword matcher, summary generator, and more. No signup." />
        <meta name="twitter:image" content={`${SITE_URL}/free-12-resume-tools.jpeg`} />
        <meta name="twitter:image:alt" content="Professional Resume Tools Collection" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Theme */}
        <meta name="theme-color" content="#131315" />
        
        {/* Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
        <div className="freshness-indicator">
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={freshnessIndicator} />
          <meta name="tools-count" content={resumeTools.length} />
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href={SITE_URL} itemProp="item">
                  <FiHome size={16} aria-hidden="true" />
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">
                <FiChevronRight size={16} />
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span aria-current="page" itemProp="name">Free Resume Tools 2026</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="section-container">
            <div className="hero-content">
              <h1 id="hero-title" style={{
                fontSize: 'var(--font-size-display-lg)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--font-weight-extrabold)',
                lineHeight: 'var(--line-height-display)',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
                letterSpacing: 'var(--letter-spacing-tight)'
              }}>
                Free Resume Tools{' '}
                <span className="gradient-text">2026</span>
              </h1>
              
              <p className="section-subtitle" style={{
                fontSize: 'var(--font-size-body-lg)',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                lineHeight: 'var(--line-height-body)',
                maxWidth: '800px'
              }}>
                Optimize your resume with <strong style={{ color: 'var(--text-primary)' }}>12+ professional tools</strong>. 
                Check ATS compatibility, analyze keywords, generate powerful summaries, and improve your chances of landing interviews.
              </p>

              {/* Hero Image */}
              <div className="hero-image-container">
                <Image
                  src="/free-12-resume-tools.jpeg"
                  alt="Free Resume Tools Preview - Collection of 12+ professional resume optimization tools including ATS checker, keyword matcher, summary generator, and more"
                  width={1200}
                  height={675}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 700px"
                  quality={90}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>

              {/* Hero Stats - Updated with trust signals */}
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="hero-stat-item">
                    <div className="hero-stat-icon" aria-hidden="true">
                      {stat.icon}
                    </div>
                    <span className="hero-stat-number">{stat.number}</span>
                    <span className="hero-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid Section */}
        <section className="section section-alt" aria-labelledby="tools-title" itemScope itemType="https://schema.org/ItemList">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="tools-title">Complete Resume Toolkit</h2>
              <p className="section-subtitle">
                Click on any tool below to start optimizing your resume for better job search results. All tools are <strong>100% free, no signup required</strong>.
              </p>
            </div>
            
            <div className="tools-grid">
              {resumeTools.map((tool, index) => (
                <div key={index} className="tool-card" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content={index + 1} />
                  <div className="tool-card-content">
                    <div className="tool-icon-container" aria-hidden="true">
                      {tool.icon}
                    </div>
                    <h3 className="tool-title" itemProp="name">{tool.label}</h3>
                    <p className="tool-description" itemProp="description">{tool.description}</p>
                    <Link 
                      href={tool.href} 
                      className="tool-button"
                      aria-label={`Use ${tool.label} - ${tool.description}`}
                      prefetch={false}
                      itemProp="url"
                    >
                      Use Tool
                      <FiArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Resources */}
            <div style={{ marginTop: '3rem', width: '100%' }}>
              <h3 style={{
                fontSize: 'var(--font-size-headline-md)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                More Free Career Resources
              </h3>
              <div className="resources-grid">
                <Link href="/resume-templates" className="resource-link">
                  <span>ATS-Friendly Resume Templates (45+)</span>
                  <FiChevronRight size={20} aria-hidden="true" />
                </Link>
                <Link href="/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" className="resource-link">
                  <span>Professional Summary Writing Guide</span>
                  <FiChevronRight size={20} aria-hidden="true" />
                </Link>
                <Link href="/software-engineer-resume-example-and-writing-guide" className="resource-link">
                  <span>Software Engineer Resume Guide</span>
                  <FiChevronRight size={20} aria-hidden="true" />
                </Link>
                <Link href="/free-resume-builder" className="resource-link">
                  <span>Free Resume Builder</span>
                  <FiChevronRight size={20} aria-hidden="true" />
                </Link>
              </div>
            </div>
            
            <p className="text-small" style={{ marginTop: '2rem' }}>
              Last updated: {safeCurrentDate} • 12+ tools • 100% free • No signup required
            </p>
          </div>
        </section>

        {/* Internal Linking Section - Enhanced with Pillar and Contextual Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Boost Your Application Success</h2>
              <p className="section-subtitle">
                Explore these additional resources to maximize your job search effectiveness
              </p>
            </div>
            
            {/* Pillar to Cluster Links */}
            <div className="internal-links-grid">
              {pillarToClusterLinks.map((link, index) => (
                <Link key={index} href={link.url} className="internal-link-card">
                  <span className="link-icon">✦</span>
                  <span className="link-text">{link.anchor_text}</span>
                </Link>
              ))}
            </div>

            {/* Contextual Tool Links */}
            <div style={{ marginTop: '2rem', width: '100%' }}>
              <h3 style={{
                fontSize: 'var(--font-size-title-lg)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                Related Tools & Guides
              </h3>
              <div className="resources-grid">
                {contextualToolLinks.map((link, index) => (
                  <Link key={index} href={link.url} className="resource-link">
                    <span>{link.anchor_text}</span>
                    <FiChevronRight size={20} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Original Internal Links */}
            <div className="internal-links-grid" style={{ marginTop: '2rem' }}>
              <Link href="/how-to-write-a-resume" className="internal-link-card">
                <span className="link-icon">✦</span>
                <span className="link-text">Complete Guide: How to Write a Resume</span>
              </Link>
              <Link href="/interview-tips" className="internal-link-card">
                <span className="link-icon">✦</span>
                <span className="link-text">Ace Your Interview: Expert Tips</span>
              </Link>
              <Link href="/careers-blog" className="internal-link-card">
                <span className="link-icon">✦</span>
                <span className="link-text">Latest Career Advice & Trends</span>
              </Link>
              <Link href="/jobs-search-tips" className="internal-link-card">
                <span className="link-icon">✦</span>
                <span className="link-text">Effective Job Search Strategies</span>
              </Link>
              <Link href="/resume-formatting-guide" className="internal-link-card">
                <span className="link-icon">✦</span>
                <span className="link-text">Professional Resume Formatting Guide</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section - Enhanced with schema markup */}
        <section className="section section-alt" aria-labelledby="faq-title" id="faqs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-title">Frequently Asked Questions About Free Resume Tools</h2>
              <p className="section-subtitle">
                Common questions about our free resume tools and how they can help your job search.
              </p>
            </div>
            
            <div className="faq-grid">
              {faqItems.map((item, index) => (
                <div key={index} className="faq-item" id={`faq-${index + 1}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="faq-question" itemProp="name">{item.question}</h3>
                  <div className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Enhanced */}
        <section className="cta-section" aria-labelledby="cta-title">
          <div className="section-container">
            <div className="cta-content">
              <h2 className="cta-title" id="cta-title">Ready to Optimize Your Resume?</h2>
              <p className="cta-subtitle">
                Start using our free tools today and create a resume that stands out to employers and ATS systems. Join 50,000+ successful job seekers.
              </p>
              <div className="cta-buttons">
                <Link href="/resume-templates" className="btn-primary" aria-label="Browse all free resume templates">
                  Browse 45+ Templates
                  <FiArrowRight aria-hidden="true" />
                </Link>
                <Link href="/free-resume-builder" className="btn-outline" aria-label="Start with the free resume builder">
                  Start Free Builder
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
              <div className="cta-guarantee">
                <FiCheck className="guarantee-icon" aria-hidden="true" />
                <span className="guarantee-text">
                  No credit card required • Free forever • Instant results • Privacy focused
                </span>
              </div>
              <p className="text-small" style={{ marginTop: '1.25rem', color: 'var(--text-muted)' }}>
                Updated: {safeCurrentDate} • 12+ tools • 100% free
              </p>
            </div>
          </div>
        </section>

        {/* Hidden Metadata */}
        <div style={{ display: 'none' }}>
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="softwareVersion">2026.2</span>
        </div>
      </main>
    </>
  );
};

// SSG with ISR - Enhanced following Page 1 blueprint
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        buildTimestamp
      },
      buildTimestamp
    },
    // Revalidate every hour for fresh content
    revalidate: 3600
  };
}

export default ResumeToolsPage;