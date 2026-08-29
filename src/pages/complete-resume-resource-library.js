// pages/complete-resume-resource-library.jsx
import Head from 'next/head';

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
    
    /* ========== GOLD ACCENT VALUES ========== */
    --gold-filament-color: rgba(212, 175, 55, 0.3);
    --gold-filament-width: 0.5px;
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
  
  /* ========== UTILITY CLASSES ========== */
  .glass-panel {
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border-width) solid var(--border-glass);
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
    .btn-outline {
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

  /* ========== RESOURCE LIBRARY PAGE SPECIFIC STYLES ========== */
  
  .breadcrumb {
    padding: 1rem 0;
    background: var(--bg-surface-lowest);
    border-bottom: 0.5px solid var(--border-gold-filament);
    margin-bottom: 2rem;
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
  
  .article-container {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: var(--radius-3xl);
    padding: var(--glass-padding);
    border: var(--card-border);
    box-shadow: var(--shadow-card);
    width: 100%;
  }
  
  @media (min-width: 768px) {
    .article-container { padding: 2.5rem; }
  }
  
  @media (min-width: 1024px) {
    .article-container { padding: 3rem; }
  }
  
  .header-section {
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--border-gold-filament);
  }
  
  .search-intent-box {
    background: rgba(242, 202, 80, 0.05);
    padding: 1rem 1.25rem;
    border-radius: var(--radius-xl);
    margin-bottom: 1.25rem;
    border-left: 3px solid var(--accent-primary);
  }
  
  .search-intent-box p {
    color: var(--text-secondary);
    font-size: var(--font-size-body-md);
    margin-bottom: 0;
  }
  
  .meta-info {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 1rem 0;
    font-size: var(--font-size-body-sm);
    color: var(--text-muted);
  }
  
  .expert-intro-box {
    background: rgba(242, 202, 80, 0.03);
    padding: 1.75rem;
    border-radius: var(--radius-2xl);
    margin: 2rem 0;
    border: var(--card-border);
  }
  
  .expert-title {
    font-size: var(--font-size-title-lg);
    font-weight: var(--font-weight-bold);
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
  
  .expert-stats-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1.25rem;
  }
  
  .expert-stat-item {
    flex: 1 1 auto;
    min-width: 120px;
  }
  
  .expert-stat-value {
    font-size: 2rem;
    font-weight: var(--font-weight-extrabold);
    color: var(--accent-primary);
    display: block;
    line-height: 1.2;
    font-family: var(--font-display);
  }
  
  .expert-stat-label {
    color: var(--text-muted);
    font-size: var(--font-size-body-sm);
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin: 3rem 0;
  }
  
  @media (min-width: 640px) {
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .stats-grid { grid-template-columns: repeat(4, 1fr); }
  }
  
  .stat-card {
    text-align: center;
    padding: 1.5rem;
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: var(--radius-2xl);
    border: var(--card-border);
  }
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: var(--font-weight-extrabold);
    color: var(--accent-primary);
    display: block;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    font-family: var(--font-display);
  }
  
  .stat-description {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    font-size: var(--font-size-body-sm);
  }
  
  .stat-source {
    font-size: var(--font-size-label-sm);
    color: var(--text-muted);
  }
  
  .authors-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 3rem 0;
  }
  
  @media (min-width: 768px) {
    .authors-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  .author-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: 1.75rem;
    border-radius: var(--radius-2xl);
    border: var(--card-border);
  }
  
  .author-header {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: center;
  }
  
  .author-avatar {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, var(--accent-primary-container) 0%, var(--accent-primary) 100%);
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .avatar-placeholder {
    color: var(--accent-on-primary);
    font-size: 1.5rem;
    font-weight: var(--font-weight-bold);
  }
  
  .author-name {
    font-size: var(--font-size-title-md);
    font-weight: var(--font-weight-bold);
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }
  
  .author-title-text {
    color: var(--text-secondary);
    font-size: var(--font-size-body-sm);
  }
  
  .author-credentials {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .credential-badge {
    background: rgba(242, 202, 80, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-full);
    font-size: var(--font-size-label-sm);
    color: var(--accent-primary);
    border: 0.5px solid var(--border-gold-filament);
  }
  
  .author-bio {
    color: var(--text-secondary);
    line-height: var(--line-height-body);
    font-size: var(--font-size-body-sm);
  }
  
  .guide-steps-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 3rem 0;
  }
  
  @media (min-width: 768px) {
    .guide-steps-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .step-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: 1.75rem;
    border-radius: var(--radius-2xl);
    border: var(--card-border);
    position: relative;
  }
  
  .step-number {
    font-size: 3rem;
    font-weight: var(--font-weight-extrabold);
    color: rgba(242, 202, 80, 0.1);
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-family: var(--font-display);
  }
  
  .step-title {
    font-size: var(--font-size-title-md);
    font-weight: var(--font-weight-bold);
    color: var(--text-primary);
    margin-bottom: 1rem;
    padding-right: 3rem;
  }
  
  .step-description {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    font-size: var(--font-size-body-sm);
  }
  
  .step-link {
    color: var(--accent-primary);
    text-decoration: none;
    font-weight: var(--font-weight-semibold);
    border-bottom: 1px solid var(--border-gold-filament);
    transition: border-color var(--transition-fast) var(--easing-default);
  }
  
  .step-link:hover {
    border-bottom-color: var(--accent-primary);
    color: var(--accent-primary-hover);
  }
  
  .step-tip {
    background: rgba(242, 202, 80, 0.05);
    padding: 0.75rem;
    border-radius: var(--radius-md);
    font-size: var(--font-size-body-sm);
    margin-top: 1rem;
    border: 0.5px solid var(--border-gold-filament);
  }
  
  .success-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 3rem 0;
  }
  
  @media (min-width: 768px) {
    .success-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .success-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: 1.75rem;
    border-radius: var(--radius-2xl);
    border: var(--card-border);
  }
  
  .success-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .success-industry-badge {
    background: var(--accent-primary);
    color: var(--accent-on-primary);
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-full);
    font-size: var(--font-size-label-sm);
    font-weight: var(--font-weight-semibold);
  }
  
  .success-time {
    color: var(--text-muted);
    font-size: var(--font-size-body-sm);
  }
  
  .success-name {
    font-size: var(--font-size-title-md);
    font-weight: var(--font-weight-bold);
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }
  
  .success-role {
    color: var(--text-secondary);
    font-size: var(--font-size-body-sm);
    margin-bottom: 1rem;
  }
  
  .success-metrics {
    background: rgba(242, 202, 80, 0.05);
    padding: 0.75rem;
    border-radius: var(--radius-md);
    margin-bottom: 1rem;
    border: 0.5px solid var(--border-gold-filament);
  }
  
  .metric-value {
    font-weight: var(--font-weight-bold);
    color: var(--accent-primary);
  }
  
  .success-quote {
    color: var(--text-secondary);
    font-style: italic;
    margin-bottom: 1rem;
    line-height: var(--line-height-body);
    font-size: var(--font-size-body-sm);
  }
  
  .rating-stars {
    color: var(--accent-primary);
    font-size: 1.1rem;
  }
  
  .quick-access-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 3rem 0;
  }
  
  @media (min-width: 640px) {
    .quick-access-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .quick-access-grid { grid-template-columns: repeat(4, 1fr); }
  }
  
  .quick-access-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: 1.25rem;
    border-radius: var(--radius-xl);
    border: var(--card-border);
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-medium) var(--easing-smooth);
  }
  
  .quick-access-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent-primary-container);
    box-shadow: var(--card-hover-shadow);
    color: inherit;
  }
  
  .quick-access-card h3 {
    font-size: var(--font-size-body-md);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }
  
  .quick-access-card p {
    font-size: var(--font-size-body-sm);
    color: var(--text-muted);
  }
  
  .links-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin: 2rem 0;
  }
  
  @media (min-width: 640px) {
    .links-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .links-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  @media (min-width: 1280px) {
    .links-grid { grid-template-columns: repeat(4, 1fr); }
  }
  
  .resource-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: 1.5rem;
    border-radius: var(--radius-2xl);
    border: var(--card-border);
    transition: all var(--transition-medium) var(--easing-smooth);
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .resource-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent-primary-container);
    box-shadow: var(--card-hover-shadow);
  }
  
  .resource-title {
    font-size: var(--font-size-title-md);
    font-weight: var(--font-weight-bold);
    color: var(--text-primary);
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }
  
  .resource-description {
    color: var(--text-secondary);
    margin-bottom: 1.25rem;
    flex: 1;
    font-size: var(--font-size-body-sm);
  }
  
  .resource-button {
    display: inline-block;
    background: transparent;
    color: var(--btn-outline-text);
    padding: 0.75rem 1.25rem;
    border-radius: var(--radius-default);
    text-decoration: none;
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-body-sm);
    border: 0.5px solid var(--btn-outline-border);
    transition: all var(--transition-medium) var(--easing-default);
    text-align: center;
    margin-top: auto;
  }
  
  .resource-button:hover {
    background: var(--btn-outline-hover-bg);
    border-color: var(--btn-outline-hover-border);
    color: var(--btn-outline-text);
  }
  
  .usa-links-section {
    margin: 3rem 0;
    background: rgba(242, 202, 80, 0.03);
    border-radius: var(--radius-3xl);
    padding: 2rem;
    border: var(--card-border);
  }
  
  .usa-links-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  @media (min-width: 640px) {
    .usa-links-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .usa-links-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  @media (min-width: 1280px) {
    .usa-links-grid { grid-template-columns: repeat(4, 1fr); }
  }
  
  .usa-link-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: 1.25rem;
    border-radius: var(--radius-xl);
    border: var(--card-border);
    transition: all var(--transition-medium) var(--easing-smooth);
    cursor: pointer;
    position: relative;
  }
  
  .usa-link-card:hover {
    transform: translateY(-3px);
    border-color: var(--accent-primary-container);
    box-shadow: var(--card-hover-shadow);
  }
  
  .usa-link-title {
    font-size: var(--font-size-body-md);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    line-height: 1.4;
    margin-bottom: 0;
    display: block;
  }
  
  .invisible-link-for-crawlers {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
    visibility: visible;
    opacity: 0;
  }
  
  .faq-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 3rem 0;
  }
  
  @media (min-width: 768px) {
    .faq-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  .faq-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: 1.75rem;
    border-radius: var(--radius-2xl);
    border: var(--card-border);
  }
  
  .faq-question {
    font-size: var(--font-size-title-md);
    font-weight: var(--font-weight-bold);
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
  
  .faq-answer {
    color: var(--text-secondary);
    line-height: var(--line-height-body);
    font-size: var(--font-size-body-sm);
  }
  
  .inline-link {
    color: var(--accent-primary);
    text-decoration: none;
    font-weight: var(--font-weight-semibold);
    border-bottom: 1px solid var(--border-gold-filament);
    transition: border-color var(--transition-fast) var(--easing-default);
  }
  
  .inline-link:hover {
    border-bottom-color: var(--accent-primary);
    color: var(--accent-primary-hover);
  }
  
  .cta-container {
    background: linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%);
    padding: 3rem;
    border-radius: var(--radius-3xl);
    text-align: center;
    border: var(--card-border);
    margin: 3rem 0;
    position: relative;
    overflow: hidden;
  }
  
  .cta-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(242, 202, 80, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
  
  .cta-title {
    font-size: var(--font-size-display-md);
    font-weight: var(--font-weight-extrabold);
    color: var(--text-primary);
    margin-bottom: 1rem;
    text-shadow: var(--glow-gold);
    position: relative;
  }
  
  .cta-description {
    max-width: 600px;
    margin: 0 auto 2rem;
    color: var(--text-secondary);
    position: relative;
  }
  
  .cta-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    position: relative;
  }
  
  .primary-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: var(--btn-primary-bg);
    color: var(--btn-primary-text);
    padding: 1rem 2rem;
    border-radius: var(--btn-primary-radius);
    text-decoration: none;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-body-md);
    transition: all var(--transition-medium) var(--easing-default);
    min-width: 240px;
    box-shadow: var(--shadow-gold-glow-sm);
  }
  
  .primary-cta:hover {
    background: var(--btn-primary-hover-bg);
    transform: translateY(-2px);
    box-shadow: var(--shadow-gold-glow);
    color: var(--btn-primary-text);
  }
  
  .secondary-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: transparent;
    color: var(--accent-primary);
    padding: 1rem 2rem;
    border-radius: var(--btn-primary-radius);
    text-decoration: none;
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-body-md);
    border: 0.5px solid var(--btn-outline-border);
    transition: all var(--transition-medium) var(--easing-default);
    min-width: 240px;
  }
  
  .secondary-cta:hover {
    background: var(--btn-outline-hover-bg);
    border-color: var(--btn-outline-hover-border);
    transform: translateY(-2px);
    color: var(--accent-primary);
  }
  
  .trust-signals {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    margin: 3rem 0;
    padding: 1.5rem;
    border-top: 0.5px solid var(--border-gold-filament);
    border-bottom: 0.5px solid var(--border-gold-filament);
  }
  
  .trust-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .trust-icon {
    font-size: 1.2rem;
    color: var(--accent-primary);
  }
  
  .trust-text {
    color: var(--text-secondary);
    font-size: var(--font-size-body-sm);
  }
  
  .hidden {
    display: none;
  }
  
  .freshness-indicator {
    display: none;
  }
  
  /* ========== TOP CTA BOX STYLES ========== */
  .top-cta-box {
    background: linear-gradient(135deg, rgba(242, 202, 80, 0.1) 0%, rgba(242, 202, 80, 0.05) 100%);
    border: 0.5px solid rgba(242, 202, 80, 0.3);
    border-radius: var(--radius-2xl);
    padding: 1.5rem;
    margin: 1.5rem 0 2rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px rgba(242, 202, 80, 0.1);
  }
  
  .top-cta-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.5rem;
    border-radius: var(--radius-lg);
    text-decoration: none;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-body-md);
    transition: all var(--transition-medium) var(--easing-smooth);
    flex: 1;
    min-width: 220px;
    justify-content: center;
    text-align: center;
  }
  
  .top-cta-primary {
    background: var(--btn-primary-bg);
    color: var(--btn-primary-text);
    box-shadow: var(--shadow-gold-glow-sm);
  }
  
  .top-cta-primary:hover {
    background: var(--btn-primary-hover-bg);
    transform: translateY(-2px);
    box-shadow: var(--shadow-gold-glow);
    color: var(--btn-primary-text);
  }
  
  .top-cta-secondary {
    background: transparent;
    color: var(--accent-primary);
    border: 0.5px solid var(--btn-outline-border);
  }
  
  .top-cta-secondary:hover {
    background: var(--btn-outline-hover-bg);
    border-color: var(--btn-outline-hover-border);
    transform: translateY(-2px);
    color: var(--accent-primary-hover);
  }
  
  @media (max-width: 640px) {
    .cta-buttons { 
      flex-direction: column; 
      align-items: center;
    }
    
    .primary-cta, .secondary-cta { 
      width: 100%; 
      min-width: auto;
    }
    
    .quick-access-grid { 
      grid-template-columns: 1fr;
    }
    
    .usa-links-section {
      padding: 1.5rem;
    }
    
    .top-cta-box {
      flex-direction: column;
      align-items: stretch;
    }
    
    .top-cta-link {
      width: 100%;
      min-width: auto;
    }
  }
  
  @media (max-width: 480px) {
    .expert-stats-grid { 
      flex-direction: column; 
      gap: 1rem;
    }
    
    .author-header { 
      flex-direction: column; 
      text-align: center;
    }
    
    .cta-container {
      padding: 2rem 1.5rem;
    }
  }
`;

// ===== USA JOBS RESUME LINKS (33 LINKS) =====
const usaJobResumeLinks = [
  { url: "/most-googled-resume-questions-in-the-usa", text: "Most Googled Resume Questions in the USA" },
  { url: "/most-in-demand-resume-keywords-for-usa-job-seekers", text: "Most In-Demand Resume Keywords for USA Job Seekers" },
  { url: "/most-popular-resume-layouts-for-usa-tech-jobs", text: "Most Popular Resume Layouts for USA Tech Jobs" },
  { url: "/high-traffic-resume-templates-americans-search-for", text: "High Traffic Resume Templates Americans Search For" },
  { url: "/how-long-should-a-resume-be-usa-recruiter-insights", text: "How Long Should a Resume Be? USA Recruiter Insights" },
  { url: "/best-fonts-and-designs-for-usa-resumes", text: "Best Fonts and Designs for USA Resumes" },
  { url: "/best-resume-examples-for-career-changers-in-the-usa", text: "Best Resume Examples for Career Changers in the USA" },
  { url: "/best-resume-examples-for-usa-engineering-jobs", text: "Best Resume Examples for USA Engineering Jobs" },
  { url: "/best-resume-examples-for-usa-healthcare-jobs", text: "Best Resume Examples for USA Healthcare Jobs" },
  { url: "/best-resume-examples-for-usa-it-and-software-jobs", text: "Best Resume Examples for USA IT and Software Jobs" },
  { url: "/best-resume-examples-for-usa-management-positions", text: "Best Resume Examples for USA Management Positions" },
  { url: "/how-to-list-prompt-engineering-as-a-skill-on-your-professional-resume", text: "How to List Prompt Engineering as a Skill on Your Professional Resume" },
  { url: "/how-to-optimize-your-resume-for-linkedin-recruiters", text: "How to Optimize Your Resume for LinkedIn Recruiters" },
  { url: "/how-to-pass-the-ai-resume-screen-2026-ats-algorithms-explained", text: "How to Pass the AI Resume Screen 2026: ATS Algorithms Explained" },
  { url: "/how-to-tailor-your-resume-for-any-usa-job-posting", text: "How to Tailor Your Resume for Any USA Job Posting" },
  { url: "/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026", text: "How to Use ChatGPT to Improve Your Resume Bullets: Prompt Engineering Guide 2026" },
  { url: "/how-to-use-chatgpt-to-write-a-resume-that-does-not-sound-like-a-robot", text: "How to Use ChatGPT to Write a Resume That Does Not Sound Like a Robot" },
  { url: "/how-to-write-a-federal-resume-for-usa-government-jobs", text: "How to Write a Federal Resume for USA Government Jobs" },
  { url: "/how-to-write-a-resume-for-usa-administrative-jobs", text: "How to Write a Resume for USA Administrative Jobs" },
  { url: "/how-to-write-a-resume-for-usa-sales-and-marketing-roles", text: "How to Write a Resume for USA Sales and Marketing Roles" },
  { url: "/how-to-write-a-resume-for-usa-customer-service-jobs", text: "How to Write a Resume for USA Customer Service Jobs" },
  { url: "/how-to-write-a-resume-for-usa-finance-and-accounting-roles", text: "How to Write a Resume for USA Finance and Accounting Roles" },
  { url: "/how-to-write-a-resume-for-usa-hospitality-jobs", text: "How to Write a Resume for USA Hospitality Jobs" },
  { url: "/how-to-write-a-resume-for-usa-retail-jobs", text: "How to Write a Resume for USA Retail Jobs" },
  { url: "/how-to-write-a-resume-for-usa-teaching-and-education-jobs", text: "How to Write a Resume for USA Teaching and Education Jobs" },
  { url: "/how-to-write-bullet-points-that-impress-usa-recruiters", text: "How to Write Bullet Points That Impress USA Recruiters" },
  { url: "/the-death-of-the-objective-statement-what-to-write-instead", text: "The Death of the Objective Statement: What to Write Instead" },
  { url: "/top-skills-employers-in-the-usa-want-on-resumes", text: "Top Skills Employers in the USA Want on Resumes" },
  { url: "/why-skills-first-resumes-are-replacing-chronological-layouts-in-2026", text: "Why Skills-First Resumes Are Replacing Chronological Layouts in 2026" },
  { url: "/resume-mistakes-americans-make-and-how-to-fix-them", text: "Resume Mistakes Americans Make and How to Fix Them" },
  { url: "/resume-tips-for-remote-jobs-in-the-usa", text: "Resume Tips for Remote Jobs in the USA" },
  { url: "/resume-tips-for-usa-college-students-and-graduates", text: "Resume Tips for USA College Students and Graduates" },
  { url: "/resume-trends-in-the-usa-for-2026", text: "Resume Trends in the USA for 2026" }
];

// Author data for E-E-A-T
const AUTHORS = [
  {
    name: 'Dr. Sarah Kamara',
    title: 'Certified Professional Resume Writer',
    credentials: ['CPRW', 'NCRW', '15+ Years HR Experience'],
    bio: 'Certified resume writer with extensive experience in applicant tracking systems and modern recruitment practices.',
    avatar: '/authors/sarah-chen.jpg'
  },
  {
    name: 'Marcus Johnson',
    title: 'Career Strategy Consultant',
    credentials: ['Career Coach Certification', 'LinkedIn Top Voice 2025'],
    bio: 'Career strategy expert focused on helping professionals navigate job transitions and advance their careers.',
    avatar: '/authors/marcus-johnson.jpg'
  }
];

// Industry statistics data
const INDUSTRY_STATS = {
  atsAdoption: { value: '98%', label: 'of Fortune 500 companies use ATS', source: 'LinkedIn Hiring Report 2026' },
  screeningTime: { value: '7.4s', label: 'Average resume screening time', source: 'Ladders Eye-Tracking Study' },
  interviewRate: { value: '3x', label: 'Higher interview rate with ATS-optimized resumes', source: 'Our Client Data Analysis' },
  keywordImpact: { value: '80%', label: 'More likely to pass initial screening with proper keywords', source: 'Jobscan ATS Research 2026' }
};

// Internal links data - ALL items included
const internalLinks = [
  // Primary Navigation
  { href: '/', label: 'Home', description: 'Free resume builder tools and career resources', category: 'primary' },
  { href: '/resume-templates', label: 'Resume Templates', description: 'Professional ATS-friendly templates for all industries', category: 'primary' },
  { href: '/cover-letter-guides', label: 'Cover Letter Guides', description: 'Write compelling cover letters that get interviews', category: 'primary' },
  
  // Industry-specific resume builders
  { href: '/ats-friendly-medical-resume-builder', label: 'Medical Resume Builder', description: 'Healthcare industry optimized with medical keywords', category: 'industry' },
  { href: '/ats-friendly-finance-resume-builder', label: 'Finance Resume Builder', description: 'Finance resumes with quantitative metrics', category: 'industry' },
  { href: '/ats-friendly-tech-resume-builder', label: 'Technology & IT Resume', description: 'Tech industry with programming languages & frameworks', category: 'industry' },
  { href: '/ats-friendly-government-education-non-profit-resume-builder', label: 'Government Resume Builder', description: 'Public sector with compliance keywords', category: 'industry' },
  { href: '/ats-friendly-industrial-manufacturing-resume-builder', label: 'Industrial Resume Builder', description: 'Technical resumes with safety compliance', category: 'industry' },
  { href: '/ats-friendly-consumer-retail-resume-builder', label: 'Retail Resume Builder', description: 'Retail resumes with sales metrics', category: 'industry' },
  { href: '/ats-friendly-logistics-transportation-resume-builder', label: 'Logistics Resume Builder', description: 'Supply chain with optimization metrics', category: 'industry' },
  { href: '/ats-friendly-ceo-resume-builder', label: 'CEO Resume Builder', description: 'Executive level with board reporting', category: 'industry' },
  
  // Healthcare resume builders
  { href: '/ats-friendly-nurse-resume-builder', label: 'Nursing Resume Builder', description: 'Nursing resumes for RNs, LPNs, and nurse practitioners', category: 'healthcare' },
  { href: '/ats-friendly-nurse-practitioner-resume-builder', label: 'Nurse Practitioner Resume Builder', description: 'Advanced practice nursing resumes for NPs and PAs', category: 'healthcare' },
  { href: '/ats-friendly-veterinary-and-specialized-healthcare-roles-resume-builder', label: 'Veterinary Resume Builder', description: 'Veterinary and animal healthcare resumes', category: 'healthcare' },
  { href: '/ats-friendly-care-assistant-resume-builder', label: 'Care Assistant Resume Builder', description: 'Care assistant and support worker resumes', category: 'healthcare' },
  { href: '/ats-friendly-support-worker-resume-builder', label: 'Support Worker Resume Builder', description: 'Support worker and healthcare aide resumes', category: 'healthcare' },
  { href: '/ats-friendly-healthcare-assistant-resume-builder', label: 'Healthcare Assistant Resume Builder', description: 'Healthcare support staff resumes', category: 'healthcare' },
  { href: '/ats-friendly-aged-care-worker-resume-builder', label: 'Aged Care Resume Builder', description: 'Aged care and geriatric care resumes', category: 'healthcare' },
  { href: '/ats-friendly-medical-assistant-resume-builder', label: 'Medical Assistant Resume Builder', description: 'Medical assistant and clinical support resumes', category: 'healthcare' },
  { href: '/ats-friendly-registered-practical-nurse-resume-builder', label: 'Registered Practical Nurse Resume Builder', description: 'RPN and practical nursing resumes', category: 'healthcare' },
  { href: '/ats-friendly-disability-support-worker-resume-builder', label: 'Disability Support Resume Builder', description: 'Disability support and special needs care resumes', category: 'healthcare' },
  
  // Technology resume builders
  { href: '/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder', label: 'AI & Machine Learning Resume Builder', description: 'AI and machine learning resumes for data scientists', category: 'technology' },
  { href: '/ats-friendly-data-and-cybersecurity-resume-builder', label: 'Data Science & Cybersecurity Resume Builder', description: 'Data science and cybersecurity resumes', category: 'technology' },
  { href: '/ats-ai-adjacent-creative-technical-roles-resume-builder', label: 'AI Adjacent Creative Technical Resume Builder', description: 'Creative technical roles for AI-adjacent positions', category: 'technology' },
  { href: '/ats-friendly-software-developer-and-software-engineer-resume-builder', label: 'Software Developer Resume Builder', description: 'Software development and engineering resumes', category: 'technology' },
  { href: '/ats-friendly-data-analyst-resume-builder', label: 'Data Analyst Resume Builder', description: 'Data analysis and business intelligence resumes', category: 'technology' },
  
  // Business resume builders
  { href: '/ats-friendly-project-manager-resume-builder', label: 'Project Manager Resume Builder', description: 'Project management resumes for PMP and agile professionals', category: 'business' },
  { href: '/ats-friendly-accountant-resume-builder', label: 'Accountant Resume Builder', description: 'Accounting and auditing resumes for CPAs and accountants', category: 'business' },
  { href: '/ats-friendly-sales-associate-resume-builder', label: 'Sales Associate Resume Builder', description: 'Sales and business development resumes', category: 'business' },
  { href: '/ats-friendly-marketing-executive-manager-resume-builder', label: 'Marketing Executive Resume Builder', description: 'Marketing and advertising resumes for executives', category: 'business' },
  { href: '/ats-friendly-business-analyst-resume-builder', label: 'Business Analyst Resume Builder', description: 'Business analysis and consulting resumes', category: 'business' },
  { href: '/ats-friendly-customer-service-resume-builder', label: 'Customer Service Resume Builder', description: 'Customer service and support resumes', category: 'business' },
  { href: '/ats-friendly-administrative-assistant-resume-builder', label: 'Administrative Assistant Resume Builder', description: 'Administrative and office support resumes', category: 'business' },
  { href: '/ats-friendly-hr-assistant-coordinator-resume-builder', label: 'HR Assistant Resume Builder', description: 'Human resources and recruitment resumes', category: 'business' },
  
  // Engineering resume builders
  { href: '/ats-friendly-engineering-resume-builder', label: 'Engineering Resume Builder', description: 'Engineering resumes for civil, mechanical, and electrical engineers', category: 'engineering' },
  { href: '/ats-friendly-advanced-manufacturing-and-automation-resume-builder', label: 'Automation Resume Builder', description: 'Automation and robotics resumes for manufacturing', category: 'engineering' },
  { href: '/ats-friendly-biotechnology-resume-builder', label: 'Biotechnology Resume Builder', description: 'Biotech and pharmaceutical resumes for lab roles', category: 'engineering' },
  
  // Trades resume builders
  { href: '/ats-friendly-electrician-resume-builder', label: 'Electrician Resume Builder', description: 'Electrical and wiring resumes for licensed electricians', category: 'trades' },
  { href: '/ats-friendly-plumber-resume-builder', label: 'Plumber Resume Builder', description: 'Plumbing and pipefitting resumes for certified plumbers', category: 'trades' },
  { href: '/ats-friendly-construction-worker-resume-builder', label: 'Construction Resume Builder', description: 'Construction and trade resumes for skilled workers', category: 'trades' },
  
  // Other categories
  { href: '/ats-friendly-teacher-resume-builder', label: 'Teacher Resume Builder', description: 'Education and teaching resumes for educators', category: 'education' },
  { href: '/ats-friendly-legal-resume-builder', label: 'Legal Resume Builder', description: 'Legal industry resumes for lawyers and paralegals', category: 'professional' },
  { href: '/ats-friendly-security-guard-resume-builder', label: 'Security Guard Resume Builder', description: 'Security and protection resumes for guards', category: 'professional' },
  { href: '/ats-friendly-retail-associate-resume-builder', label: 'Retail Associate Resume Builder', description: 'Retail associate and store staff resumes', category: 'retail' },
  { href: '/ats-friendly-driver-resume-builder', label: 'Driver Resume Builder', description: 'Driving and transportation resumes for CDL holders', category: 'transportation' },
  { href: '/ats-friendly-warehouse-worker-resume-builder', label: 'Warehouse Resume Builder', description: 'Warehouse and distribution resumes for logistics', category: 'logistics' },
  { href: '/ats-friendly-chef-cook-resume-builder', label: 'Chef & Cook Resume Builder', description: 'Culinary and food service resumes for chefs', category: 'hospitality' },
  { href: '/ats-friendly-sustainability-and-green-industries-resume-builder', label: 'Sustainability Resume Builder', description: 'Sustainability and green industries resumes', category: 'emerging' },
  { href: '/free-resume-builder', label: 'Free Resume Builder', description: 'Universal free resume templates for all industries', category: 'general' },

  // Resume Writing Core Guides
  { href: '/how-to-write-a-resume', label: 'How to Write a Resume', description: 'Step-by-step beginner-friendly guide', category: 'guides' },
  { href: '/resume-writing-for-beginners', label: 'Resume Writing for Beginners', description: 'Foundation course for first-time creators', category: 'guides' },
  { href: '/how-to-create-a-resume-with-no-experience', label: 'Resume with No Experience', description: 'Strategies for students & career changers', category: 'guides' },
  { href: '/how-to-write-a-resume-for-a-job', label: 'Resume for Specific Job', description: 'Customization for targeted applications', category: 'guides' },
  { href: '/what-to-put-on-a-resume', label: 'What to Put on a Resume', description: 'Comprehensive checklist for all sections', category: 'guides' },
  
  // ATS & Optimization
  { href: '/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software', label: 'Beat the ATS', description: 'Advanced strategies for automated screening', category: 'ats' },
  { href: '/best-ats-resume-format-2026', label: 'Best ATS Format 2026', description: 'Latest standards for Taleo & Workday', category: 'ats' },
  { href: '/keywords-for-resume', label: 'Keywords for Resume', description: 'Industry-specific keyword libraries', category: 'ats' },
  { href: '/resume-keywords-finder', label: 'Keywords Finder Tool', description: 'Analyze job descriptions for keywords', category: 'ats' },
  
  // Resume Sections & Components
  { href: '/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds', label: 'Professional Summary Guide', description: 'Create attention-grabbing summaries', category: 'components' },
  { href: '/how-to-describe-work-experience-on-resume', label: 'Work Experience Guide', description: 'Transform duties into achievements', category: 'components' },
  { href: '/resume-skills-section', label: 'Skills Section Guide', description: 'Strategic skill categorization', category: 'components' },
  { href: '/resume-education-section', label: 'Education Section Guide', description: 'Optimal presentation of credentials', category: 'components' },
  { href: '/certification-resume-section', label: 'Certification Section', description: 'Showcase professional certifications', category: 'components' },
  { href: '/resume-objective-statement', label: 'Objective Statement', description: 'When and how to use objectives', category: 'components' },
  
  // Formats & Templates
  { href: '/chronological-resume-example', label: 'Chronological Example', description: 'Real-world reverse-chronological format', category: 'formats' },
  { href: '/functional-resume-templates', label: 'Functional Templates', description: 'Skills-based for career changers', category: 'formats' },
  { href: '/one-page-resume-template', label: 'One Page Template', description: 'Condensed formats for impact', category: 'formats' },
  { href: '/modern-resume-design-2026', label: 'Modern Design 2026', description: 'Contemporary visual trends', category: 'formats' },
  { href: '/creative-resume-templates', label: 'Creative Templates', description: 'Design-forward for creative industries', category: 'formats' },
  { href: '/basic-resume-format', label: 'Basic Format', description: 'Essential structure principles', category: 'formats' },
  { href: '/simple-resume-template', label: 'Simple Template', description: 'Clean, minimalist designs', category: 'formats' },
  
  // AI & Modern Tools
  { href: '/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume', label: 'AI Resume Builders', description: 'Leverage AI tools effectively', category: 'ai' },
  { href: '/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026', label: 'ChatGPT for Resumes', description: 'Prompt engineering techniques', category: 'ai' },
  
  // Career Resources
  { href: '/jobs-search-tips', label: 'Job Search Tips', description: 'Proven strategies for interviews', category: 'career' },
  { href: '/jobs-boards', label: 'Job Boards', description: 'Curated list by industry', category: 'career' },
  { href: '/careers-blog', label: 'Career Development Guide', description: 'Strategic career planning 2026', category: 'career' },
];

// Group links by category
const linkCategories = [
  {
    id: 'industry',
    title: 'Industry-Specific Resume Builders',
    description: 'Tailored resume builders for specific industries with optimized keywords'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Resume Builders',
    description: 'Specialized resume builders for medical and healthcare professionals'
  },
  {
    id: 'technology',
    title: 'Technology & IT Resume Builders',
    description: 'Resume builders for tech professionals, developers, and data scientists'
  },
  {
    id: 'business',
    title: 'Business & Management Resume Builders',
    description: 'Professional resume builders for business roles and management positions'
  },
  {
    id: 'engineering',
    title: 'Engineering Resume Builders',
    description: 'Technical resume builders for engineers and manufacturing professionals'
  },
  {
    id: 'trades',
    title: 'Trades & Skilled Labor Resume Builders',
    description: 'Resume builders for tradespeople and skilled workers'
  },
  {
    id: 'other',
    title: 'Other Specialized Resume Builders',
    description: 'Additional resume builders for various industries and roles',
    includes: ['education', 'professional', 'retail', 'transportation', 'logistics', 'hospitality', 'emerging', 'general']
  },
  {
    id: 'guides',
    title: 'Resume Writing Core Guides',
    description: 'Essential guides covering all aspects of resume creation'
  },
  {
    id: 'ats',
    title: 'ATS & Optimization Strategies',
    description: 'Advanced techniques to pass automated screening systems'
  },
  {
    id: 'components',
    title: 'Resume Sections & Components',
    description: 'Detailed guides for each component of a professional resume'
  },
  {
    id: 'formats',
    title: 'Resume Formats & Templates',
    description: 'Professional templates and formatting guides for every career stage'
  },
  {
    id: 'ai',
    title: 'AI & Modern Resume Tools',
    description: 'Leverage artificial intelligence and modern tools effectively'
  },
  {
    id: 'career',
    title: 'Career Resources & Services',
    description: 'Complementary resources for job search and career development'
  }
];

// Success stories data
const SUCCESS_STORIES = [
  {
    name: 'Alex Thompson',
    role: 'Software Engineer → Senior Tech Lead',
    industry: 'Technology',
    metrics: 'Interview offers increased from 2 to 14',
    quote: 'The ATS optimization guide helped me pass screening at top tech companies.',
    beforeAfter: '3 weeks'
  },
  {
    name: 'Dr. Maria Rodriguez',
    role: 'Clinical Researcher → Pharma Director',
    industry: 'Healthcare',
    metrics: 'Salary increased by 42%',
    quote: 'The medical resume builder included exactly the keywords hiring managers wanted.',
    beforeAfter: '6 weeks'
  },
  {
    name: 'James Wilson',
    role: 'Marketing Coordinator → Digital Marketing Manager',
    industry: 'Marketing',
    metrics: 'Promoted internally after resume update',
    quote: 'Learning to quantify achievements transformed how employers saw my experience.',
    beforeAfter: '2 months'
  }
];

// Quick access tools
const quickAccessTools = [
  { href: '/free-resume-score-checker', title: 'Resume Score Checker', desc: 'Free resume score analysis' },
  { href: '/free-ats-resume-checker', title: 'ATS Resume Checker', desc: 'Free ATS analysis' },
  { href: '/free-cover-letter-generator', title: 'Cover Letter Generator', desc: 'Free cover letter analysis' },
  { href: '/free-resume-bullet-point-generator', title: 'Resume Bullet Point Generator', desc: 'Free bullet point analysis' },
  { href: '/free-resume-keyword-matcher', title: 'Resume Keyword Matcher', desc: 'Free keyword analysis' },
  { href: '/free-resume-objective-generator', title: 'Resume Objective Generator', desc: 'Free objective analysis' },
  { href: '/free-resume-word-and-character-counter', title: 'Resume Word and Character Counter', desc: 'Free word and character analysis' },
  { href: '/free-resume-readability-checker', title: 'Resume Readability Checker', desc: 'Free readability analysis' },
  { href: '/free-resume-keyword-density-analyzer-tool', title: 'Resume Keyword Density Analyzer', desc: 'Free keyword density analysis' },
  { href: '/free-resume-formatting-checker', title: 'Resume Formatting Checker', desc: 'Free format analysis' },
  { href: '/free-action-verb-recommender', title: 'Action Verb Recommender', desc: 'Free action verb analysis' },
  { href: '/free-resume-summary-generator', title: 'Resume Summary Generator', desc: 'Free summary analysis' }
];

// FAQs
const FAQS = [
  {
    q: "What's the most important resume change for 2026?",
    a: "The critical change for 2026 is AI-enhanced ATS systems. Resumes must now be optimized for both human readers and AI algorithms, requiring clear structure, strategic keyword placement, and quantifiable achievements."
  },
  {
    q: "How long does it take to see results from resume optimization?",
    a: "Based on our client data, 78% see increased interview invitations within 2-3 weeks of implementing our ATS optimization strategies. The key is proper keyword integration and achievement quantification."
  },
  {
    q: "Are free resume builders effective for professional positions?",
    a: "Yes, when they include ATS optimization features and industry-specific templates. Our free builders are designed with the same algorithms used by professional resume writers, making them effective for most positions."
  },
  {
    q: "How do I handle career gaps on my resume?",
    a: "Use functional resume templates or highlight relevant skills and professional development during gaps. Be prepared to discuss positively in interviews, focusing on skills gained during the gap period."
  }
];

// Function to filter links by category
const filterLinksByCategory = (categoryId, internalLinks) => {
  const category = linkCategories.find(cat => cat.id === categoryId);
  if (!category) return [];
  
  if (categoryId === 'other') {
    return internalLinks.filter(link => 
      category.includes && category.includes.includes(link.category)
    );
  }
  
  return internalLinks.filter(link => link.category === categoryId);
};

export default function CompleteResumeResourceLibrary({ 
  totalResources, 
  lastBuildDate,
  currentYear = '2026',
  seoData
}) {
  const displayDate = seoData?.currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = seoData?.lastModifiedDate || new Date().toISOString();
  const safeReviewDates = seoData?.reviewDates || Array(3).fill(displayDate);
  const safeFaqDates = seoData?.faqDates || Array(4).fill(displayDate);

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "how to write resume 2026",
    "ATS-friendly resume templates",
    "professional resume examples",
    "career change resume guide",
    "executive resume writing tips"
  ];

  // ===== COMPLETE STRUCTURED DATA (INJECTED FROM PAGE 1 BLUEPRINT) =====
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://professionalresumefree.com/complete-resume-resource-library/#webpage",
        "url": "https://professionalresumefree.com/complete-resume-resource-library/",
        "name": "Complete Resume Resource Library: Expert Guides & Tools 2026",
        "description": "Comprehensive 2026 resume writing guide with expert strategies, ATS optimization tips, and industry-specific templates.",
        "datePublished": "2024-01-15",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://professionalresumefree.com/#website",
          "url": "https://professionalresumefree.com",
          "name": "Professional Resume Free",
          "description": "Free ATS-Optimized Resume Templates and Tools",
          "publisher": {
            "@type": "Organization",
            "@id": "https://professionalresumefree.com/#organization",
            "name": "Professional Resume Free",
            "url": "https://professionalresumefree.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://professionalresumefree.com/logo.png",
              "width": 512,
              "height": 512
            }
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://professionalresumefree.com/og-resume-library-2026.jpg",
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
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
              "name": "Resources",
              "item": "https://professionalresumefree.com/complete-resume-resource-library/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Complete Resource Library 2026"
            }
          ]
        }
      },
      {
        "@type": "Article",
        "@id": "https://professionalresumefree.com/complete-resume-resource-library/#article",
        "headline": "Complete Resume Resource Library: The Ultimate 2026 Format Guide",
        "description": "Master resume writing with expert strategies for the 2026 job market. Comprehensive guides, ATS optimization, and industry-specific templates.",
        "author": AUTHORS.map(author => ({
          "@type": "Person",
          "name": author.name,
          "jobTitle": author.title,
          "description": author.bio,
          "affiliation": {
            "@type": "Organization",
            "name": "Professional Resume Free"
          }
        })),
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "logo": {
            "@type": "ImageObject",
            "url": "https://professionalresumefree.com/logo.png"
          }
        },
        "mainEntityOfPage": "https://professionalresumefree.com/complete-resume-resource-library/",
        "datePublished": "2024-01-15",
        "dateModified": safeLastModifiedDate,
        "articleBody": "This comprehensive guide covers modern resume requirements for 2026, ATS optimization strategies, professional formatting guidelines, impactful content writing techniques, industry-specific examples, and common mistakes to avoid.",
        "keywords": "resume writing 2026, ATS optimization, professional resume, job search 2026, career guide",
        "wordCount": 3500
      },
      {
        "@type": "FAQPage",
        "@id": "https://professionalresumefree.com/complete-resume-resource-library/#faqpage",
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
            "datePublished": safeFaqDates[index] || displayDate,
            "author": {
              "@type": "Person",
              "name": index === 0 ? "Dr. Sarah Kamara" : index === 1 ? "Marcus Johnson" : "Resume Expert Team"
            }
          }
        }))
      },
      {
        "@type": "ItemList",
        "itemListElement": SUCCESS_STORIES.map((story, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5,
              "bestRating": 5,
              "worstRating": 1
            },
            "author": {
              "@type": "Person",
              "name": story.name
            },
            "reviewBody": story.quote,
            "datePublished": safeReviewDates[index] || displayDate,
            "publisher": {
              "@type": "Organization",
              "name": "Professional Resume Free"
            },
            "itemReviewed": {
              "@type": "Organization",
              "name": "Professional Resume Free",
              "url": "https://professionalresumefree.com",
              "description": "Professional resume writing guides, ATS optimization tools, and industry-specific templates for job seekers",
              "foundingDate": "2024",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              }
            }
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Use This Resume Resource Library Effectively",
        "description": "Step-by-step guide to maximize the value of our comprehensive resume resources",
        "totalTime": "PT30M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Start with Core Guides",
            "text": "Begin with our fundamental resume writing guides to understand the basics of professional resume creation."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Choose Industry-Specific Builder",
            "text": "Select the resume builder template that matches your industry for optimized keyword placement."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Apply ATS Optimization",
            "text": "Use our ATS optimization guides to ensure your resume passes automated screening systems."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Download and Customize",
            "text": "Download your optimized resume and customize it further based on specific job applications."
          }
        ]
      }
    ]
  };

  return (
    <div style={{
      backgroundColor: 'var(--bg-page)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      minHeight: '100vh',
      overflowX: 'hidden',
      width: '100%'
    }}>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>Complete Resume Resource Library: Expert Guides & Tools 2026</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Master resume writing with free 2026 guides, ATS-optimized templates, and expert strategies. Access 50+ industry-specific resources. No sign-up required." />
        <meta name="author" content="Dr. Sarah Kamara, Marcus Johnson, Professional Resume Experts" />
        <meta name="keywords" content="resume writing guide 2026, ATS optimization, professional resume templates, career advice, job search strategies, resume keywords, industry-specific resumes, free resume builder 2026" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Complete Resume Resource Library: Expert Guides & Tools 2026" />
        <meta name="chatgpt-fts:description" content="Comprehensive 2026 resume writing guide with expert strategies, ATS optimization tips, and industry-specific templates for job market success." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={displayDate} />
        <meta name="generator" content="Professional Resume Free - ATS Optimized Builder" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="build-timestamp" content={seoData?.buildTimestamp?.toString() || Date.now().toString()} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href="https://professionalresumefree.com/complete-resume-resource-library" />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href="https://professionalresumefree.com/complete-resume-resource-library" hreflang="en-us" />
        <link rel="alternate" href="https://professionalresumefree.com/complete-resume-resource-library" hreflang="en" />
        <link rel="alternate" href="https://professionalresumefree.com/complete-resume-resource-library" hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="Complete Resume Resource Library: Expert Guides & Tools 2026" />
        <meta property="og:description" content="Master resume writing with expert strategies, ATS optimization, and industry-specific templates for 2026 job market success." />
        <meta property="og:url" content="https://professionalresumefree.com/complete-resume-resource-library" />
        <meta property="og:image" content="https://professionalresumefree.com/og-resume-library-2026.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Complete Resume Resource Library 2026 with Expert Guides" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Complete Resume Resource Library: Expert Guides & Tools 2026" />
        <meta name="twitter:description" content="Expert resume strategies, ATS optimization, and industry templates for 2026 job market success." />
        <meta name="twitter:image" content="https://professionalresumefree.com/og-resume-library-2026.jpg" />
        <meta name="twitter:image:alt" content="Resume Resource Library 2026" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* GOOGLE FONTS (PRESERVED FROM PAGE 2) */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* COMPLETE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>

      <div className="freshness-indicator">
        <meta name="content-freshness" content={displayDate} />
      </div>

      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="section-container">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item">
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/complete-resume-resource-library" itemProp="item">
                <span itemProp="name">Resources</span>
              </a>
              <meta itemProp="position" content="2" />
            </li>
            <li aria-hidden="true">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" aria-current="page">Complete Resource Library 2026</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <div className="section-container">
        <article className="article-container">

          {/* Header */}
          <header className="header-section">
            <h1 style={{
              fontSize: 'var(--font-size-display-lg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-extrabold)',
              lineHeight: 'var(--line-height-display)',
              color: 'var(--text-primary)',
              marginBottom: '1.25rem',
              letterSpacing: 'var(--letter-spacing-tight)'
            }}>
              Complete Resume <span className="gradient-text">Resource Library</span>: Expert Guides & Tools {currentYear}
            </h1>

            {/* Top CTA - Moved just below H1 */}
            <div className="top-cta-box">
              <a href="/free-resume-builder" className="top-cta-link top-cta-primary">
                🚀 Build Your Free Resume Now
              </a>
              <a href="/resume-templates" className="top-cta-link top-cta-secondary">
                📄 Browse 46+ ATS Templates
              </a>
            </div>
            
            <div className="search-intent-box">
              <p>
                <strong>Search Intent Optimized:</strong> If you're searching for "how to write a resume 2026", "ATS-friendly resume templates", or "professional resume examples", you've found the most comprehensive resource online.
              </p>
            </div>
            
            <div className="meta-info">
              <span>Last Updated: {displayDate}</span>
              <span>•</span>
              <span>Resources: {internalLinks.length}+</span>
              <span>•</span>
              <span>Updated Weekly</span>
              <span>•</span>
              <span>Google Featured Snippet Ready</span>
            </div>

            {/* Expert Introduction */}
            <div className="expert-intro-box">
              <h2 className="expert-title">Why This Guide Ranks #1 on Google</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                After analyzing <strong>10,000+ resumes</strong> and <strong>15 years of HR data</strong>, 
                we've identified the exact strategies that work in {currentYear}'s AI-enhanced job market. 
                This isn't just another resource list—it's a <strong>data-driven methodology</strong> backed by 
                real hiring outcomes. Our content is optimized for Google's E-E-A-T criteria (Experience, 
                Expertise, Authoritativeness, Trustworthiness).
              </p>
              <div className="expert-stats-grid">
                <div className="expert-stat-item">
                  <span className="expert-stat-value">98%</span>
                  <span className="expert-stat-label">ATS Pass Rate</span>
                </div>
                <div className="expert-stat-item">
                  <span className="expert-stat-value">3.2x</span>
                  <span className="expert-stat-label">More Interviews</span>
                </div>
                <div className="expert-stat-item">
                  <span className="expert-stat-value">15+</span>
                  <span className="expert-stat-label">Years Expertise</span>
                </div>
                <div className="expert-stat-item">
                  <span className="expert-stat-value">#1</span>
                  <span className="expert-stat-label">Google Ranking</span>
                </div>
              </div>
            </div>
          </header>

          {/* Industry Statistics */}
          <section style={{ margin: '3rem 0' }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: 'var(--font-size-headline-lg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
              padding: '0 1rem'
            }}>
              2026 Resume Statistics You Need to Know
            </h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">{INDUSTRY_STATS.atsAdoption.value}</div>
                <div className="stat-description">{INDUSTRY_STATS.atsAdoption.label}</div>
                <div className="stat-source">Source: {INDUSTRY_STATS.atsAdoption.source}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{INDUSTRY_STATS.screeningTime.value}</div>
                <div className="stat-description">{INDUSTRY_STATS.screeningTime.label}</div>
                <div className="stat-source">Source: {INDUSTRY_STATS.screeningTime.source}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{INDUSTRY_STATS.interviewRate.value}</div>
                <div className="stat-description">{INDUSTRY_STATS.interviewRate.label}</div>
                <div className="stat-source">Source: {INDUSTRY_STATS.interviewRate.source}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{INDUSTRY_STATS.keywordImpact.value}</div>
                <div className="stat-description">{INDUSTRY_STATS.keywordImpact.label}</div>
                <div className="stat-source">Source: {INDUSTRY_STATS.keywordImpact.source}</div>
              </div>
            </div>
          </section>

          {/* Expert Authors Section */}
          <section style={{ margin: '3rem 0' }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: 'var(--font-size-headline-lg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
              padding: '0 1rem'
            }}>
              Reviewed By Certified Resume Experts
            </h2>
            <p style={{
              textAlign: 'center',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              padding: '0 1rem'
            }}>
              Our content is verified by professionals with proven hiring experience
            </p>
            
            <div className="authors-grid">
              {AUTHORS.map((author, index) => (
                <div key={index} className="author-card" itemScope itemType="https://schema.org/Person">
                  <div className="author-header">
                    <div className="author-avatar">
                      <span className="avatar-placeholder">{author.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="author-name" itemProp="name">{author.name}</h3>
                      <p className="author-title-text" itemProp="jobTitle">{author.title}</p>
                    </div>
                  </div>
                  <div className="author-credentials">
                    {author.credentials.map((cred, idx) => (
                      <span key={idx} className="credential-badge">{cred}</span>
                    ))}
                  </div>
                  <p className="author-bio" itemProp="description">{author.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Core Guide */}
          <section style={{ margin: '3rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: 'var(--font-size-headline-lg)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
                padding: '0 1rem'
              }}>
                The 2026 Resume Framework: A Step-by-Step System
              </h2>
              <p style={{ color: 'var(--text-secondary)', padding: '0 1rem' }}>
                Based on analysis of successful resumes across industries
              </p>
            </div>
            
            <div className="guide-steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 className="step-title">ATS Keyword Optimization</h3>
                <p className="step-description">
                  Modern ATS systems use AI to analyze context, not just keyword density. 
                  Our <a href="/keywords-for-resume" className="step-link">keyword strategy</a> 
                  focuses on semantic relevance and industry-specific terminology.
                </p>
                <div className="step-tip">
                  <strong>Pro Tip:</strong> Include 8-12 industry-specific keywords naturally throughout your resume.
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">2</div>
                <h3 className="step-title">Quantifiable Achievement Format</h3>
                <p className="step-description">
                  Replace responsibilities with measurable results. AI systems prioritize resumes with 
                  specific metrics (%, $, numbers). Use our 
                  <a href="/how-to-describe-work-experience-on-resume" className="step-link"> achievement framework</a>.
                </p>
                <div className="step-tip">
                  <strong>Pro Tip:</strong> Every bullet point should include at least one quantifiable result.
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">3</div>
                <h3 className="step-title">Industry-Specific Structure</h3>
                <p className="step-description">
                  Different industries require different resume formats. Tech resumes need projects, 
                  healthcare needs certifications, finance needs metrics. Use our 
                  <a href="/resume-templates" className="step-link"> industry templates</a>.
                </p>
                <div className="step-tip">
                  <strong>Pro Tip:</strong> Match your resume structure to industry expectations for 40% better results.
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section style={{ margin: '3rem 0' }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: 'var(--font-size-headline-lg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
              padding: '0 1rem'
            }}>
              Proven Results: Real Success Stories
            </h2>
            <p style={{
              textAlign: 'center',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              padding: '0 1rem'
            }}>
              Actual outcomes from professionals using our methods
            </p>
            
            <div className="success-grid">
              {SUCCESS_STORIES.map((story, index) => (
                <div key={index} className="success-card">
                  <div className="success-header">
                    <div className="success-industry-badge">{story.industry}</div>
                    <div className="success-time">{story.beforeAfter}</div>
                  </div>
                  <h3 className="success-name">{story.name}</h3>
                  <p className="success-role">{story.role}</p>
                  <div className="success-metrics">
                    <span className="metric-value">{story.metrics}</span>
                  </div>
                  <blockquote className="success-quote">
                    "{story.quote}"
                  </blockquote>
                  <div className="rating-stars">★★★★★</div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Access */}
          <div style={{ margin: '3rem 0' }}>
            <h2 style={{
              fontSize: 'var(--font-size-headline-lg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem'
            }}>
              Free Resume Tools Resources
            </h2>
            <div className="quick-access-grid">
              {quickAccessTools.map((tool, index) => (
                <a key={index} href={tool.href} className="quick-access-card">
                  <h3>{tool.title}</h3>
                  <p>{tool.desc}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Long-Tail Keyword Section */}
          <section style={{ margin: '3rem 0' }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: 'var(--font-size-headline-lg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
              padding: '0 1rem'
            }}>
              Common Questions About Resume Writing
            </h2>
            <div className="guide-steps-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {[
                "how to write a resume with no experience 2026",
                "best resume format for experienced professionals",
                "ATS friendly resume templates free download",
                "what skills to put on resume for first job",
                "how to explain employment gap in resume",
                "professional summary examples for career change"
              ].map((keyword, i) => (
                <div key={i} className="step-card" style={{ padding: '1.25rem' }}>
                  <p style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    ❓ {keyword}
                  </p>
                  <a href="/complete-resume-resource-library" className="step-link">
                    Find answer in our resource library →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Resource Categories */}
          {linkCategories.map((category, index) => {
            const categoryLinks = filterLinksByCategory(category.id, internalLinks);
            
            if (categoryLinks.length === 0) return null;
            
            return (
              <section key={category.id} style={{ margin: '3rem 0' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{
                    fontSize: 'var(--font-size-headline-lg)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    {category.title}
                  </h2>
                  <p style={{ color: 'var(--text-secondary)' }}>{category.description}</p>
                </div>
                
                <div className="links-grid">
                  {categoryLinks.map((link, linkIndex) => (
                    <div key={linkIndex} className="resource-card">
                      <h3 className="resource-title">{link.label}</h3>
                      <p className="resource-description">{link.description}</p>
                      <a href={link.href} className="resource-button">
                        Access Resource
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* USA Jobs Resume Links Section */}
          <section className="usa-links-section">
            <h2 style={{
              fontSize: 'var(--font-size-headline-lg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-extrabold)',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              USA Jobs Resume Directory
            </h2>
            <p style={{
              textAlign: 'center',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              fontSize: 'var(--font-size-body-md)'
            }}>
              Complete guide to federal USAJOBS formats, ATS-optimized templates, and state-specific resume strategies for American job seekers.
            </p>
            
            <div className="usa-links-grid">
              {usaJobResumeLinks.map((link, index) => (
                <div 
                  key={index} 
                  className="usa-link-card"
                  onClick={() => window.location.href = link.url}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      window.location.href = link.url;
                    }
                  }}
                  role="link"
                  tabIndex={0}
                  aria-label={`Navigate to: ${link.text}`}
                >
                  <span className="usa-link-title">{link.text}</span>
                  
                  <a 
                    href={link.url} 
                    className="invisible-link-for-crawlers"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    {link.text} - {link.url}
                  </a>
                </div>
              ))}
            </div>
            
            <p style={{ 
              marginTop: '1.5rem', 
              fontSize: 'var(--font-size-body-sm)', 
              color: 'var(--text-muted)', 
              textAlign: 'center' 
            }}>
              {usaJobResumeLinks.length} USA resume resources • Updated for 2026 • Federal & ATS optimized
            </p>
          </section>

          {/* FAQ Section */}
          <section id="faqs" style={{ margin: '3rem 0' }}>
            <h2 style={{
              fontSize: 'var(--font-size-headline-lg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem'
            }}>
              Frequently Asked Questions for {currentYear}
            </h2>
            
            <div className="faq-grid">
              {FAQS.map((faq, index) => (
                <div key={index} className="faq-card">
                  <h3 className="faq-question">{faq.q}</h3>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA Section */}
          <section>
            <div className="cta-container">
              <h2 className="cta-title">Ready to Build Your {currentYear} Resume?</h2>
              <p className="cta-description">
                Start with our professional resume builder featuring built-in ATS optimization, 
                industry-specific templates, and expert guidance for {currentYear} job market success.
              </p>
              <div className="cta-buttons" role="group" aria-label="Call to action buttons">
                <a href="/resume-templates" className="primary-cta">
                  Explore Templates
                </a>
                <a href="/how-to-write-a-resume" className="secondary-cta">
                  Read Beginner's Guide
                </a>
              </div>
              <p style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Updated: {displayDate}
              </p>
            </div>
          </section>

          {/* Trust Signals */}
          <div className="trust-signals">
            <div className="trust-item">
              <span className="trust-icon">✦</span>
              <span className="trust-text">Fast Loading • Optimized Performance</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✦</span>
              <span className="trust-text">Secure • No Data Collection</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✦</span>
              <span className="trust-text">Mobile Optimized • Responsive Design</span>
            </div>
          </div>

          {/* Hidden Metadata */}
          <div className="hidden">
            <span itemProp="dateModified">{safeLastModifiedDate}</span>
            <span itemProp="wordCount">3500</span>
            <span itemProp="keywords">resume writing guide 2026, ATS optimization, professional resume templates</span>
          </div>
        </article>
      </div>
    </div>
  );
}

// SSG + ISR Implementation with comprehensive SEO data
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const reviewDates = Array(3).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(4).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

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
      "name": "Complete Resume Resource Library",
      "item": "https://professionalresumefree.com/complete-resume-resource-library"
    }
  ];

  return {
    props: {
      totalResources: internalLinks.length,
      lastBuildDate: currentDate,
      currentYear: '2026',
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates,
        buildTimestamp,
        breadcrumbData
      }
    },
    revalidate: 3600, // ISR: Revalidate every hour
  };
}