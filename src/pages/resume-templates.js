// pages/resume-templates.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FiFileText, 
  FiHeart, 
  FiBriefcase, 
  FiPackage, 
  FiShoppingCart, 
  FiTruck, 
  FiUser,
  FiArrowRight,
  FiStar,
  FiCheck,
  FiDownload,
  FiUsers,
  FiHome,
  FiChevronRight,
  FiAward,
  FiSettings,
  FiTool,
  FiTrendingUp,
  FiClock,
  FiSearch,
  FiEdit,
  FiBarChart,
  FiTarget,
  FiLayers,
  FiCode,
  FiCpu,
  FiDollarSign,
  FiBook,
  FiShield,
  FiZap,
  FiGlobe,
  FiCoffee,
  FiActivity,
  FiPenTool,
  FiLayout
} from 'react-icons/fi';
import { 
  FaBuilding, 
  FaClipboard, 
  FaLeaf,
  FaHospitalAlt
} from 'react-icons/fa';

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
  
  .templates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
    gap: clamp(1.25rem, 3vw, 1.5rem);
    margin: 2.5rem 0;
    width: 100%;
  }
  
  .template-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-2xl);
    padding: var(--card-padding);
    transition: all var(--transition-slow) var(--easing-smooth);
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  
  .template-card:hover {
    background: var(--card-bg-hover);
    border: var(--card-border-hover);
    transform: var(--card-hover-transform);
    box-shadow: var(--card-hover-shadow);
  }
  
  .card-decoration {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--accent-primary);
    opacity: 0.5;
    transition: opacity var(--transition-medium) var(--easing-default);
  }
  
  .template-card:hover .card-decoration {
    opacity: 1;
  }
  
  .template-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }
  
  .template-icon-container {
    width: 48px;
    height: 48px;
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(242, 202, 80, 0.1);
    flex-shrink: 0;
  }
  
  .template-icon-container svg {
    width: 24px;
    height: 24px;
    color: var(--accent-primary);
  }
  
  .template-title {
    font-size: var(--font-size-title-md);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    flex: 1;
    line-height: 1.4;
    text-align: left;
  }
  
  .template-description {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    font-size: var(--font-size-body-sm);
    line-height: 1.5;
    flex: 1;
    text-align: left;
  }
  
  .template-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
    justify-content: flex-start;
  }
  
  .feature-tag {
    background: rgba(242, 202, 80, 0.1);
    color: var(--accent-primary);
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-full);
    font-size: var(--font-size-label-sm);
    border: 0.5px solid var(--border-gold-filament);
  }
  
  .template-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent-primary);
    text-decoration: none;
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-body-sm);
    margin-top: auto;
    padding: 0.5rem 0;
    border-bottom: 1px solid transparent;
    transition: border-color var(--transition-fast) var(--easing-default);
    align-self: flex-start;
  }
  
  .template-link:hover {
    border-bottom-color: var(--accent-primary);
    color: var(--accent-primary-hover);
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: clamp(1.25rem, 3vw, 1.5rem);
    width: 100%;
  }
  
  .feature-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: clamp(1.25rem, 4vw, 1.5rem);
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .feature-icon-container {
    width: 64px;
    height: 64px;
    background: rgba(242, 202, 80, 0.1);
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.25rem;
  }
  
  .feature-icon-container svg {
    width: 32px;
    height: 32px;
    color: var(--accent-primary);
  }
  
  .feature-title {
    font-size: var(--font-size-title-md);
    margin-bottom: 0.75rem;
    color: var(--text-primary);
    text-align: center;
  }
  
  .feature-description {
    color: var(--text-secondary);
    font-size: var(--font-size-body-sm);
    line-height: 1.5;
    text-align: center;
  }
  
  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: clamp(1.25rem, 3vw, 1.5rem);
    width: 100%;
  }
  
  .step-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-xl);
    padding: clamp(1.5rem, 5vw, 2rem);
    text-align: center;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .step-number {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--accent-primary-container) 0%, var(--accent-primary) 100%);
    color: var(--accent-on-primary);
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: var(--font-weight-bold);
    margin: 0 auto 1.25rem;
  }
  
  .step-title {
    font-size: var(--font-size-title-md);
    margin-bottom: 0.75rem;
    color: var(--text-primary);
    text-align: center;
  }
  
  .step-description {
    color: var(--text-secondary);
    font-size: var(--font-size-body-sm);
    line-height: 1.5;
    text-align: center;
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
  
  .related-links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
    margin-top: 1.25rem;
  }
  
  .related-link-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: var(--radius-lg);
    padding: 1.25rem;
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-medium) var(--easing-smooth);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .related-link-card:hover {
    border-color: var(--accent-primary-container);
    background: var(--card-bg-hover);
    transform: translateY(-2px);
    box-shadow: var(--card-hover-shadow);
    color: inherit;
  }
  
  .related-link-title {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-title-md);
    margin-bottom: 0.5rem;
    display: block;
    color: var(--text-primary);
  }
  
  .related-link-desc {
    font-size: var(--font-size-body-sm);
    color: var(--text-secondary);
    line-height: 1.4;
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

const ResumeTemplates = ({ 
  seoData,
  buildTimestamp 
}) => {
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

  // Optimized title - 62 characters
  const optimizedTitle = `ATS-Friendly Resume Templates ${new Date().getFullYear()}: Professional Templates`;

  // Selected Links for Internal Linking (SEO/GEO Boost)
  const relatedLinks = [
    {
      href: "/modern-resume-design-2026",
      title: "Modern Resume Design Trends 2026",
      desc: "Explore contemporary layouts that balance visual appeal with ATS compatibility for creative and tech roles."
    },
    {
      href: "/how-to-create-a-resume-with-no-experience",
      title: "Resume Guide for No Experience",
      desc: "Step-by-step instructions for students and career changers to build a strong resume without work history."
    },
    {
      href: "/ats-friendly-data-analyst-resume-builder",
      title: "Data Analyst Resume Builder",
      desc: "Specialized templates highlighting SQL, Python, and visualization skills for data professionals."
    },
    {
      href: "/ats-friendly-project-manager-resume-builder",
      title: "Project Manager Resume Templates",
      desc: "Showcase your PMP certification and leadership achievements with these targeted layouts."
    },
    {
      href: "/functional-resume-templates",
      title: "Functional Resume Templates",
      desc: "Skill-based formats ideal for career pivots or hiding employment gaps while highlighting capabilities."
    }
  ];

  // Pillar to Cluster Links for SEO
  const pillarToClusterLinks = [
    {
      anchor_text: "Free Resume Builder — Start Now",
      url: "/free-resume-builder"
    },
    {
      anchor_text: "Resume Calculators — 15+ Tools",
      url: "/resume-calculators"
    },
    {
      anchor_text: "Free Resume Tools Suite",
      url: "/free-resume-tools"
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

  // Contextual Tool Links for SEO
  const contextualToolLinks = [
    {
      anchor_text: "ATS Resume Checker",
      url: "/free-ats-resume-checker"
    },
    {
      anchor_text: "Resume Score Checker",
      url: "/free-resume-score-checker"
    },
    {
      anchor_text: "Resume Formatting Guide",
      url: "/resume-formatting-guide"
    },
    {
      anchor_text: "Best ATS Format 2026",
      url: "/best-ats-resume-format-2026"
    },
    {
      anchor_text: "Keywords for Resume",
      url: "/keywords-for-resume"
    },
    {
      anchor_text: "Resume Keywords Finder",
      url: "/resume-keywords-finder"
    },
    {
      anchor_text: "Cover Letter Guides",
      url: "/cover-letter-guides"
    },
    {
      anchor_text: "How to Write a Professional Summary",
      url: "/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds"
    }
  ];

  // Template categories data with ALL industry-specific links
  const templateCategories = [
    {
      title: 'ATS-Friendly Free Resume Template',
      description: 'Universal free resume templates suitable for all industries and career levels.',
      icon: <FiFileText />,
      link: '/free-resume-builder',
      features: ['All Industries', 'Free Templates', 'Universal Design'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Medical Resume Template',
      description: 'Healthcare-specific resume templates optimized for medical ATS systems. Designed for doctors, medical assistants, and healthcare administrators.',
      icon: <FiHeart />,
      link: '/ats-friendly-medical-resume-builder',
      features: ['Doctor Resume', 'Medical Assistant', 'Healthcare Admin'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Nursing Resume Template',
      description: 'Nursing resume templates specifically designed for RNs, LPNs, nurse practitioners, and nursing students.',
      icon: <FiHeart />,
      link: '/ats-friendly-nurse-resume-builder',
      features: ['Registered Nurse', 'Nurse Practitioner', 'Nursing Student'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Nurse Practitioner Resume Template',
      description: 'Advanced practice nursing resume templates for NPs, PAs, and specialized nursing roles.',
      icon: <FiAward />,
      link: '/ats-friendly-nurse-practitioner-resume-builder',
      features: ['Nurse Practitioner', 'Physician Assistant', 'Specialized Nursing'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Veterinary Resume Template',
      description: 'Veterinary and animal healthcare resume templates for veterinarians, vet techs, and animal care professionals.',
      icon: <FiHeart />,
      link: '/ats-friendly-veterinary-and-specialized-healthcare-roles-resume-builder',
      features: ['Veterinarian', 'Vet Tech', 'Animal Care'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Care Assistant Resume Template',
      description: 'Care assistant and support worker resume templates for home health aides and personal care attendants.',
      icon: <FiUsers />,
      link: '/ats-friendly-care-assistant-resume-builder',
      features: ['Home Health Aide', 'Personal Care', 'Support Worker'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Support Worker Resume Template',
      description: 'Support worker and healthcare aide resume templates for patient support roles.',
      icon: <FiUsers />,
      link: '/ats-friendly-support-worker-resume-builder',
      features: ['Support Worker', 'Patient Care', 'Healthcare Aide'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Healthcare Assistant Resume Template',
      description: 'Healthcare support staff resume templates for medical assistants, patient care technicians, and healthcare aides.',
      icon: <FiUsers />,
      link: '/ats-friendly-healthcare-assistant-resume-builder',
      features: ['Patient Care Tech', 'Medical Assistant', 'Healthcare Aide'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Aged Care Resume Template',
      description: 'Aged care and geriatric care resume templates for nursing home staff and senior care professionals.',
      icon: <FiUsers />,
      link: '/ats-friendly-aged-care-worker-resume-builder',
      features: ['Geriatric Care', 'Nursing Home', 'Senior Care'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Medical Assistant Resume Template',
      description: 'Medical assistant and clinical support resume templates for MA certification holders.',
      icon: <FiHeart />,
      link: '/ats-friendly-medical-assistant-resume-builder',
      features: ['Clinical Assistant', 'Medical Office', 'Certified MA'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Registered Practical Nurse Resume Template',
      description: 'RPN and practical nursing resume templates for licensed practical nurses.',
      icon: <FiHeart />,
      link: '/ats-friendly-registered-practical-nurse-resume-builder',
      features: ['LPN Resume', 'Practical Nurse', 'Licensed Nurse'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Disability Support Resume Template',
      description: 'Disability support and special needs care resume templates for support workers.',
      icon: <FiUsers />,
      link: '/ats-friendly-disability-support-worker-resume-builder',
      features: ['Disability Care', 'Special Needs', 'Support Worker'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Technology Resume Template',
      description: 'Tech industry resume templates engineered to pass technical ATS screening.',
      icon: <FiCpu />,
      link: '/ats-friendly-tech-resume-builder',
      features: ['Software Engineer', 'IT Professional', 'Tech Specialist'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Machine Learning Resume Template',
      description: 'AI and machine learning resume templates for data scientists and ML engineers.',
      icon: <FiActivity />,
      link: '/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder',
      features: ['Data Scientist', 'ML Engineer', 'AI Specialist'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Data Science & Cybersecurity Resume Template',
      description: 'Data science and cybersecurity resume templates for analysts and security professionals.',
      icon: <FiShield />,
      link: '/ats-friendly-data-and-cybersecurity-resume-builder',
      features: ['Cybersecurity', 'Data Analyst', 'Security Analyst'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly AI Adjacent Creative Technical Resume Template',
      description: 'Creative technical roles resume templates for AI-adjacent positions.',
      icon: <FiZap />,
      link: '/ats-ai-adjacent-creative-technical-roles-resume-builder',
      features: ['Creative Tech', 'AI Roles', 'Technical Creative'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Software Developer Resume Template',
      description: 'Software development and engineering resume templates for developers.',
      icon: <FiCode />,
      link: '/ats-friendly-software-developer-and-software-engineer-resume-builder',
      features: ['Developer Resume', 'Software Engineer', 'Programmer'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Data Analyst Resume Template',
      description: 'Data analysis and business intelligence resume templates for analysts.',
      icon: <FiBarChart />,
      link: '/ats-friendly-data-analyst-resume-builder',
      features: ['Business Analyst', 'Data Analysis', 'BI Specialist'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Finance Resume Template',
      description: 'Finance sector resume templates optimized for financial ATS systems.',
      icon: <FiBriefcase />,
      link: '/ats-friendly-finance-resume-builder',
      features: ['Accountant', 'Financial Analyst', 'Banking'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly CEO Resume Template',
      description: 'Executive-level resume templates designed for C-suite ATS screening.',
      icon: <FiUser />,
      link: '/ats-friendly-ceo-resume-builder',
      features: ['Executive Resume', 'Leadership', 'C-Suite'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Project Manager Resume Template',
      description: 'Project management resume templates for PMP and agile professionals.',
      icon: <FiTarget />,
      link: '/ats-friendly-project-manager-resume-builder',
      features: ['PMP Certified', 'Agile PM', 'Project Lead'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Accountant Resume Template',
      description: 'Accounting and auditing resume templates for CPAs and accountants.',
      icon: <FiDollarSign />,
      link: '/ats-friendly-accountant-resume-builder',
      features: ['CPA Resume', 'Auditor', 'Financial Accountant'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Sales Associate Resume Template',
      description: 'Sales and business development resume templates for sales professionals.',
      icon: <FiTrendingUp />,
      link: '/ats-friendly-sales-associate-resume-builder',
      features: ['Sales Rep', 'Business Dev', 'Account Executive'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Marketing Executive Resume Template',
      description: 'Marketing and advertising resume templates for executives and managers.',
      icon: <FiGlobe />,
      link: '/ats-friendly-marketing-executive-manager-resume-builder',
      features: ['Marketing Manager', 'Advertising', 'Brand Manager'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Business Analyst Resume Template',
      description: 'Business analysis and consulting resume templates for analysts.',
      icon: <FiBarChart />,
      link: '/ats-friendly-business-analyst-resume-builder',
      features: ['Business Consultant', 'Analysis', 'Strategy'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Customer Service Resume Template',
      description: 'Customer service and support resume templates for service professionals.',
      icon: <FiUsers />,
      link: '/ats-friendly-customer-service-resume-builder',
      features: ['Customer Support', 'Service Rep', 'Help Desk'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Administrative Assistant Resume Template',
      description: 'Administrative and office support resume templates for assistants.',
      icon: <FaClipboard />,
      link: '/ats-friendly-administrative-assistant-resume-builder',
      features: ['Office Admin', 'Executive Assistant', 'Administrative'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly HR Assistant Resume Template',
      description: 'Human resources and recruitment resume templates for HR professionals.',
      icon: <FiUsers />,
      link: '/ats-friendly-hr-assistant-coordinator-resume-builder',
      features: ['HR Generalist', 'Recruiter', 'Talent Acquisition'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Engineering Resume Template',
      description: 'Engineering resume templates for civil, mechanical, and electrical engineers.',
      icon: <FiTool />,
      link: '/ats-friendly-engineering-resume-builder',
      features: ['Civil Engineer', 'Mechanical', 'Electrical'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Industrial & Manufacturing Resume Template',
      description: 'Manufacturing industry resume templates for production and quality control.',
      icon: <FiPackage />,
      link: '/ats-friendly-industrial-manufacturing-resume-builder',
      features: ['Production', 'Quality Control', 'Manufacturing'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Automation Resume Template',
      description: 'Automation and robotics resume templates for manufacturing professionals.',
      icon: <FiSettings />,
      link: '/ats-friendly-advanced-manufacturing-and-automation-resume-builder',
      features: ['Robotics', 'Automation', 'Process Control'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Biotechnology Resume Template',
      description: 'Biotech and pharmaceutical resume templates for lab and research roles.',
      icon: <FiActivity />,
      link: '/ats-friendly-biotechnology-resume-builder',
      features: ['Pharma', 'Lab Tech', 'Research'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Electrician Resume Template',
      description: 'Electrical and wiring resume templates for licensed electricians.',
      icon: <FiZap />,
      link: '/ats-friendly-electrician-resume-builder',
      features: ['Licensed Electrician', 'Electrical', 'Wiring'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Plumber Resume Template',
      description: 'Plumbing and pipefitting resume templates for certified plumbers.',
      icon: <FiTool />,
      link: '/ats-friendly-plumber-resume-builder',
      features: ['Certified Plumber', 'Pipefitting', 'Plumbing'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Construction Resume Template',
      description: 'Construction and trade resume templates for skilled workers.',
      icon: <FiTool />,
      link: '/ats-friendly-construction-worker-resume-builder',
      features: ['Construction', 'Trade Worker', 'Skilled Labor'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Government & Non-Profit Resume Template',
      description: 'Public sector resume templates compliant with government and non-profit requirements.',
      icon: <FaBuilding />,
      link: '/ats-friendly-government-education-non-profit-resume-builder',
      features: ['Government', 'Non-Profit', 'Public Service'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Teacher Resume Template',
      description: 'Education and teaching resume templates for educators at all levels.',
      icon: <FiBook />,
      link: '/ats-friendly-teacher-resume-builder',
      features: ['Teacher', 'Educator', 'Instruction'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Legal Resume Template',
      description: 'Legal industry resume templates for lawyers, paralegals, and legal staff.',
      icon: <FiShield />,
      link: '/ats-friendly-legal-resume-builder',
      features: ['Lawyer', 'Paralegal', 'Legal Assistant'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Security Guard Resume Template',
      description: 'Security and protection resume templates for guards and officers.',
      icon: <FiShield />,
      link: '/ats-friendly-security-guard-resume-builder',
      features: ['Security Officer', 'Protection', 'Guard'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Retail Resume Template',
      description: 'Retail industry resume templates for customer-facing and sales roles.',
      icon: <FiShoppingCart />,
      link: '/ats-friendly-consumer-retail-resume-builder',
      features: ['Retail Sales', 'Store Manager', 'Customer Service'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Retail Associate Resume Template',
      description: 'Retail associate and store staff resume templates for entry-level positions.',
      icon: <FiShoppingCart />,
      link: '/ats-friendly-retail-associate-resume-builder',
      features: ['Store Associate', 'Sales Clerk', 'Retail Staff'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Logistics Resume Template',
      description: 'Logistics and supply chain resume templates for transportation professionals.',
      icon: <FiTruck />,
      link: '/ats-friendly-logistics-transportation-resume-builder',
      features: ['Supply Chain', 'Logistics', 'Transportation'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Driver Resume Template',
      description: 'Driving and transportation resume templates for CDL holders.',
      icon: <FiTruck />,
      link: '/ats-friendly-driver-resume-builder',
      features: ['CDL Driver', 'Delivery', 'Transportation'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Warehouse Resume Template',
      description: 'Warehouse and distribution resume templates for logistics workers.',
      icon: <FiPackage />,
      link: '/ats-friendly-warehouse-worker-resume-builder',
      features: ['Warehouse', 'Distribution', 'Logistics'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Chef & Cook Resume Template',
      description: 'Culinary and food service resume templates for chefs and cooks.',
      icon: <FiCoffee />,
      link: '/ats-friendly-chef-cook-resume-builder',
      features: ['Chef', 'Cook', 'Food Service'],
      color: '#f2ca50'
    },
    {
      title: 'ATS-Friendly Sustainability Resume Template',
      description: 'Sustainability and green industries resume templates for environmental roles.',
      icon: <FaLeaf />,
      link: '/ats-friendly-sustainability-and-green-industries-resume-builder',
      features: ['Sustainability', 'Green Energy', 'Environmental'],
      color: '#f2ca50'
    }
  ];

  // Features for the page
  const pageFeatures = [
    {
      icon: <FiCheck />,
      title: '100% ATS Optimized Templates',
      description: 'Every resume template is rigorously tested to pass major Applicant Tracking Systems'
    },
    {
      icon: <FiDownload />,
      title: 'Instant Free Download',
      description: 'Download your customized resume immediately - no signup required'
    },
    {
      icon: <FiStar />,
      title: 'Industry-Specific Designs',
      description: 'Professionally designed templates tailored to industry standards'
    },
    {
      icon: <FiFileText />,
      title: 'Easy Customization',
      description: 'Simple fill-in-the-blank format with smart content suggestions'
    },
    {
      icon: <FiAward />,
      title: 'Proven Interview Results',
      description: 'Users report 3x more interview callbacks with our templates'
    },
    {
      icon: <FiSettings />,
      title: 'Mobile-Friendly Editor',
      description: 'Create and edit your resume from any device'
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What makes a resume template ATS-friendly?",
      answer: "A fresh layout helps your resume move smoothly through hiring software. Each design skips flashy extras like images or complex charts - simple wins every time. We built them using common headings so machines recognize each part fast. Words matter too - they sit where scanners expect without tricks or clutter. Every version gets tested against real systems such as Workday, Taleo, iCIMS, and Greenhouse. Smooth passage means fewer hiccups on its way to human eyes."
    },
    {
      question: "Are these resume templates really free to download?",
      answer: "Fresh start every time - that's how we built our resume templates, totally free, nothing tucked away. Pick one, tweak it your way, then grab a copy in PDF format. No marks spoiling the page, no sign-up hoop to jump through. Built clean because fairness matters - landing a solid job begins with tools that actually work for you."
    },
    {
      question: "Which industries are covered by your ATS resume templates?",
      answer: "Picking the right look matters when machines scan your job application. Different fields need different wording - healthcare uses terms tech jobs do not. 46+ industries are areas covered, from shipping goods to fixing them, plus office roles too. One size never fits all, especially if software reads first. These layouts match what hiring systems search for in each line of work. Words matter, placement counts, timing changes nothing about being seen."
    },
    {
      question: "How do I customize the resume templates?",
      answer: "Pick a layout you like. Put your details into the tool, step by step. Out comes a clean version ready to save - under quarter of an hour. Skip the guesswork; each field adjusts itself based on what fits your job type. Design know-how? Not required here."
    },
    {
      question: "Can I use these templates for executive-level positions?",
      answer: "Sure thing - our resume designs for CEOs and top executives fit high-level career moves. Built for C-suite jobs, they spotlight big-picture decisions that shaped company growth. Formatting follows smart patterns hiring systems expect at this level. Leadership presence stands clear without clutter. Each layout guides eyes toward influence on profit, scale, and governance. Templates reflect how seasoned leaders communicate value - quietly confident, precisely framed."
    },
    {
      question: "Do you offer templates for career changers?",
      answer: "Fine if you're switching careers - our templates fit just right, built to show off skills that move across jobs while slipping smoothly through resume scanners. Helpful guides come along too, walking step by step on how to frame what you've done so it lands well in a new field."
    }
  ];

  // Long-tail keywords for GEO
  const seoKeywords = [
    "ATS resume templates",
    "free resume templates 2026",
    "ATS friendly resume templates",
    "professional resume templates",
    "medical resume template",
    "tech resume template",
    "finance resume template",
    "government resume template",
    "manufacturing resume",
    "retail resume template",
    "logistics resume template",
    "CEO resume template",
    "executive resume templates",
    "ATS optimized resume",
    "applicant tracking system resume",
    "Workday resume template",
    "Taleo compatible resume",
    "iCIMS resume format",
    "nursing resume template",
    "software engineer resume",
    "data analyst resume",
    "project manager resume",
    "HR resume template",
    "marketing resume template",
    "sales resume template",
    "engineering resume template",
    "construction resume",
    "teacher resume template",
    "legal resume template",
    "warehouse resume",
    "driver resume template",
    "chef resume template",
    "sustainability resume",
    "free resume builder 2026",
    "ATS compliant resume",
    "professional resume download"
  ];

  // People Also Ask for GEO
  const peopleAlsoAsk = [
    { question: "What makes a resume template ATS-friendly?", answer: "ATS-friendly templates use standard section headings, clean single-column layouts, standard fonts (Arial, Calibri, Garamond), no graphics or tables, and consistent formatting that Applicant Tracking Systems can parse reliably. They're tested against major platforms like Workday, Taleo, iCIMS, and Greenhouse." },
    { question: "Are these resume templates really free to download?", answer: "Yes—completely free with no hidden costs. You can select any template, customize it with your information, and download it as a PDF or DOCX file. No credit card, no sign-up, no watermarks, and no trial periods." },
    { question: "Which industries are covered by your ATS resume templates?", answer: "We offer 46+ industry-specific templates covering healthcare, technology, finance, government, manufacturing, retail, logistics, education, legal, construction, and many more. Each template is optimized with industry-specific keywords and formatting standards." }
  ];

  // Structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://professionalresumefree.com/resume-templates",
        "url": "https://professionalresumefree.com/resume-templates",
        "name": optimizedTitle,
        "description": "Browse ATS-optimized resume templates for medical, tech, finance, government, manufacturing, retail, logistics & executive roles. Free downloads, no registration required.",
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "numberOfItems": templateCategories.length,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://professionalresumefree.com/#website",
          "name": "Professional Resume Free",
          "url": "https://professionalresumefree.com"
        },
        "about": {
          "@type": "Thing",
          "name": "ATS Resume Templates",
          "description": "Applicant Tracking System optimized resume templates for job seekers"
        },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": templateCategories.map((template, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": template.title,
            "description": template.description,
            "url": `https://professionalresumefree.com${template.link}`
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://professionalresumefree.com/resume-templates#faq",
        "mainEntity": [
          ...faqs.map((faq) => ({
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
              "text": paa.answer
            }
          }))
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://professionalresumefree.com/#website",
        "url": "https://professionalresumefree.com",
        "name": "Professional Resume Free",
        "description": "Free ATS-optimized resume templates and builder",
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "logo": {
            "@type": "ImageObject",
            "url": "https://professionalresumefree.com/logo.png",
            "width": 512,
            "height": 512
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://professionalresumefree.com/resume-templates#breadcrumb",
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
            "name": "ATS Resume Templates 2026",
            "item": "https://professionalresumefree.com/resume-templates"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "ATS Resume Template Service",
        "provider": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Global"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Job Seekers"
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* ===== PRIMARY SEO TAGS - OPTIMIZED TITLE ===== */}
        <title>{optimizedTitle}</title>
        <meta name="title" content={optimizedTitle} />
        <meta name="description" content="Browse ATS-optimized resume templates for medical, tech, finance, government, manufacturing, retail, logistics & executive roles. Free downloads, no registration required." />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        
        {/* ===== GEO OPTIMIZATION TAGS FOR AI CRAWLERS ===== */}
        <meta name="chatgpt-fts:title" content={`ATS-Friendly Resume Templates ${new Date().getFullYear()} - Professional Templates`} />
        <meta name="chatgpt-fts:description" content="Free ATS-optimized resume templates for medical, tech, finance, and more. No signup required. Download instantly." />
        <meta name="chatgpt-fts:keywords" content="ATS resume templates, free resume templates 2026, industry-specific resume templates, ATS optimized" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - ATS Resume Templates" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* ===== SINGLE CANONICAL TAG - NO www ===== */}
        <link rel="canonical" href="https://professionalresumefree.com/resume-templates" />
        
        {/* ===== HREFLANG TAGS ===== */}
        <link rel="alternate" href="https://professionalresumefree.com/resume-templates" hreflang="en-us" />
        <link rel="alternate" href="https://professionalresumefree.com/resume-templates" hreflang="en" />
        <link rel="alternate" href="https://professionalresumefree.com/resume-templates" hreflang="x-default" />
        
        {/* ===== OPEN GRAPH (Facebook/LinkedIn) ===== */}
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content="Browse ATS-optimized resume templates for medical, tech, finance, government, manufacturing, retail, logistics & executive roles." />
        <meta property="og:image" content="https://professionalresumefree.com/46-free-resume-templates.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://professionalresumefree.com/resume-templates" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content="2024-01-01" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`ATS-Friendly Resume Templates ${new Date().getFullYear()} | Free Downloads`} />
        <meta name="twitter:description" content="Browse ATS-optimized resume templates for medical, tech, finance, government, manufacturing, retail, logistics & executive roles." />
        <meta name="twitter:image" content="https://professionalresumefree.com/46-free-resume-templates.jpeg" />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        {/* ===== ADDITIONAL META ===== */}
        <meta name="theme-color" content="#131315" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* ===== PRECONNECT FOR PERFORMANCE ===== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* ===== FONT STYLESHEETS ===== */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* ===== SITEMAP ===== */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* ===== SCHEMA.ORG JSON-LD ===== */}
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
          <meta name="template-count" content={templateCategories.length} />
          <meta name="last-reviewed" content={safeCurrentDate} />
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item">
                  <FiHome size={16} aria-hidden="true" />
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">
                <FiChevronRight size={16} />
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span aria-current="page" itemProp="name">ATS Resume Templates {new Date().getFullYear()}</span>
                <meta itemProp="position" content="2" />
                <meta itemProp="item" content="https://professionalresumefree.com/resume-templates" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="hero-section" role="banner" aria-labelledby="hero-heading">
          <div className="section-container">
            <div className="hero-content">
              <h1 id="hero-heading" style={{
                fontSize: 'var(--font-size-display-lg)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--font-weight-extrabold)',
                lineHeight: 'var(--line-height-display)',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
                letterSpacing: 'var(--letter-spacing-tight)'
              }}>
                Professional <span className="gradient-text">ATS-Friendly Resume Templates</span> for Every Industry
              </h1>
              
              <p style={{
                fontSize: 'var(--font-size-body-lg)',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                lineHeight: 'var(--line-height-body)',
                maxWidth: '800px'
              }}>
                Download <strong style={{ color: 'var(--text-primary)' }}>100% ATS-optimized resume templates</strong> designed specifically for your industry. Each template is tested to pass Applicant Tracking Systems including Workday, Taleo, and iCIMS.
              </p>

              {/* Hero Image */}
              <div className="hero-image-container">
                <Image
                  src="/46-free-resume-templates.jpeg"
                  alt="ATS-Friendly Resume Templates Preview - Collection of professional resume templates optimized for applicant tracking systems across healthcare, technology, finance, and more industries"
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

              {/* Hero Stats */}
              <div className="hero-stats">
                <div className="hero-stat-item">
                  <span className="hero-stat-number">{templateCategories.length}+</span>
                  <span className="hero-stat-label">Specialized Templates</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-number">100%</span>
                  <span className="hero-stat-label">ATS Optimized</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-number">$0</span>
                  <span className="hero-stat-label">Free Forever</span>
                </div>
              </div>

              <div className="cta-buttons" role="group" aria-label="Call to action buttons">
                <Link href="#templates-grid" className="btn-primary">
                  Browse All Templates
                  <FiArrowRight aria-hidden="true" />
                </Link>
                
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool aria-hidden="true" />
                  Try Free Resume Tools
                </Link>
              </div>

              {/* Author Info */}
              <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'var(--card-bg)', borderRadius: 'var(--radius-xl)', border: 'var(--card-border)', width: '100%', maxWidth: '600px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', margin: 0 }}>
                  Expert-Verified ATS Templates | Last Updated: {safeCurrentDate} | {templateCategories.length}+ Templates | 100% Free
                </p>
              </div>
              
              {/* Freshness indicator */}
              <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)' }} aria-label="Page last updated">
                <FiClock style={{ marginRight: '0.5rem', display: 'inline' }} /> Last updated: {safeCurrentDate}
              </div>
            </div>
          </div>
        </header>

        {/* Template Categories Grid */}
        <section 
          id="templates-grid" 
          className="section section-alt" 
          aria-labelledby="templates-title"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="templates-title">
                Browse {templateCategories.length} ATS-Optimized Resume Templates by Industry
              </h2>
              <p className="section-subtitle">
                Each professionally designed template is specifically optimized to pass Applicant Tracking Systems in your industry.
              </p>
            </div>
            
            <div className="templates-grid">
              {templateCategories.map((template, index) => (
                <TemplateCard 
                  key={index} 
                  {...template} 
                  index={index} 
                  currentDate={safeCurrentDate}
                  position={index + 1}
                />
              ))}
            </div>
            
            <div className="cta-buttons">
              <Link href="/free-resume-builder" className="btn-primary">
                Start Building Your Resume Now
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
            
            <p className="text-small" style={{ marginTop: '1.25rem' }}>
              Last updated: {safeCurrentDate} • All templates ATS-validated
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="section" aria-labelledby="features-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="features-title">Why Our ATS Resume Templates Get Results</h2>
              <p className="section-subtitle">
                Professional design combined with technical ATS optimization ensures your resume reaches human recruiters.
              </p>
            </div>
            
            <div className="features-grid">
              {pageFeatures.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon-container">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section section-alt" aria-labelledby="how-it-works-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="how-it-works-title">Create Your ATS-Optimized Resume in 3 Steps</h2>
              <p className="section-subtitle">
                Get a professional, interview-winning resume in minutes with our easy process
              </p>
            </div>
            
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 className="step-title">Choose Your Industry Template</h3>
                <p className="step-description">Select from our ATS-optimized templates designed for your specific industry</p>
              </div>
              
              <div className="step-card">
                <div className="step-number">2</div>
                <h3 className="step-title">Customize with Smart Suggestions</h3>
                <p className="step-description">Fill in your information using our guided forms with ATS keyword optimization</p>
              </div>
              
              <div className="step-card">
                <div className="step-number">3</div>
                <h3 className="step-title">Download & Start Applying</h3>
                <p className="step-description">Download your professional resume in PDF or Word format - completely free</p>
              </div>
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="section-container">
            <h2 id="paa-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>People Also Ask About Resume Templates</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
              {peopleAlsoAsk?.map((paa, i) => (
                <details key={i} style={{ background: 'var(--card-bg)', backdropFilter: 'blur(var(--glass-blur))', border: 'var(--card-border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }} open={i === 0}>
                  <summary style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1, textAlign: 'left' }}>{paa.question}</h3>
                  </summary>
                  <div style={{ padding: '0 1.25rem 1.25rem', color: 'var(--text-secondary)', borderTop: '0.5px solid var(--border-gold-filament)', fontSize: 'var(--font-size-body-sm)' }}>
                    <p style={{ lineHeight: '1.7', textAlign: 'left' }}>{paa.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section section-alt" id="faq" aria-labelledby="faq-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Everything you need to know about our ATS-friendly resume templates
              </p>
            </div>
            
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3 className="faq-question">{faq.question}</h3>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                    <small className="text-small" style={{ display: 'block', marginTop: '0.5rem' }}>Updated: {safeCurrentDate}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Internal Links Section */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">More Specialized Resume Resources</h2>
              <p className="section-subtitle">
                Explore additional guides and templates tailored to specific career needs and modern design trends.
              </p>
            </div>
            
            <div className="related-links-grid">
              {relatedLinks.map((link, index) => (
                <Link href={link.href} key={index} className="related-link-card">
                  <span className="related-link-title">{link.title}</span>
                  <span className="related-link-desc">{link.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Boost Your Application Success Section */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Boost Your Application Success</h2>
              <p className="section-subtitle">
                Explore these additional resources to maximize your job search effectiveness
              </p>
            </div>
            
            {/* Pillar to Cluster Links */}
            <div className="related-links-grid">
              {pillarToClusterLinks.map((link, index) => (
                <Link href={link.url} key={index} className="related-link-card">
                  <span className="related-link-title">{link.anchor_text}</span>
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
              <div className="related-links-grid">
                {contextualToolLinks.map((link, index) => (
                  <Link href={link.url} key={index} className="related-link-card">
                    <span className="related-link-title">{link.anchor_text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="cta-section" aria-labelledby="cta-title">
          <div className="section-container">
            <div className="cta-content">
              <h2 className="cta-title" id="cta-title">Ready to Transform Your Job Search?</h2>
              <p className="cta-subtitle">
                Join 4 million+ job seekers who landed interviews faster with our ATS-optimized resume templates. Visit <a href="https://professionalresumefree.com" style={{ color: 'var(--accent-primary)' }}>Professional Resume Free</a>.
              </p>
              
              <div className="cta-buttons" role="group" aria-label="Final call to action buttons">
                <Link href="/free-resume-builder" className="btn-primary">
                  Create Free Resume Now
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
              
              <div className="cta-guarantee">
                <FiCheck className="guarantee-icon" aria-hidden="true" />
                <span className="guarantee-text">No credit card required • Free forever • No watermarks • ATS Optimized</span>
              </div>
              
              <p className="text-small" style={{ marginTop: '1.25rem', color: 'var(--text-muted)' }}>
                Updated: {safeCurrentDate} • 100% Free • {templateCategories.length}+ Templates
              </p>
            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
          <span itemProp="keywords">{seoKeywords.join(', ')}</span>
        </div>
      </main>
    </>
  );
};

// Template Card Component
const TemplateCard = ({ title, description, icon, link, features, color, index, currentDate, position }) => {
  return (
    <div 
      className="template-card"
      itemScope
      itemType="https://schema.org/ListItem"
      itemProp="itemListElement"
      role="article"
      aria-label={title}
    >
      <meta itemProp="position" content={position} />
      
      <div className="card-decoration" aria-hidden="true"></div>
      
      <div className="template-header">
        <div className="template-icon-container">
          {icon}
        </div>
        <h3 className="template-title" itemProp="name">{title}</h3>
      </div>
      
      <p className="template-description" itemProp="description">{description}</p>
      
      <div className="template-features">
        {features.map((feature, idx) => (
          <span key={idx} className="feature-tag">{feature}</span>
        ))}
      </div>
      
      <Link 
        href={link}
        className="template-link"
        aria-label={`View ${title} template details`}
        itemProp="url"
      >
        View Template Details
        <FiArrowRight size={16} aria-hidden="true" />
      </Link>
      
      <div style={{ display: 'none' }}>
        <meta itemProp="dateCreated" content={currentDate} />
        <span itemProp="item">{title} - ATS Resume Template</span>
      </div>
    </div>
  );
};

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
        reviewDates: Array(6).fill(currentDate),
        faqDates: Array(6).fill(currentDate),
        breadcrumbData: [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://professionalresumefree.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "ATS Resume Templates 2026",
            "item": "https://professionalresumefree.com/resume-templates"
          }
        ]
      },
      buildTimestamp
    },
    revalidate: 7200,
  };
}

export default ResumeTemplates;