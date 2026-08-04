import Head from 'next/head';
import Link from 'next/link';
import { 
  FiAward, 
  FiUsers, 
  FiGlobe, 
  FiClock,
  FiTrendingUp,
  FiCheckCircle,
  FiHeart,
  FiTarget,
  FiStar,
  FiShield,
  FiZap,
  FiCompass,
  FiBookOpen,
  FiMail,
  FiMapPin,
  FiCalendar,
  FiCheck,
  FiArrowRight,
  FiDownload,
  FiFileText,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiMessageCircle,
  FiBriefcase,
  FiSmile,
  FiThumbsUp,
  FiSun,
  FiMoon,
  FiCloud,
  FiCpu,
  FiDatabase,
  FiServer,
  FiCode,
  FiSmartphone,
  FiMonitor,
  FiTablet,
  FiLayers,
  FiLayout,
  FiPenTool,
  FiTool,
  FiPackage,
  FiTruck,
  FiHome,
  FiCoffee,
  FiGift,
  FiCrown,
  FiRocket,
  FiAnchor,
  FiFlag,
  FiHelpCircle,
  FiEye,
  FiUserCheck,
  FiLock,
  FiTrash2,
  FiAlertCircle,
  FiLink as FiLinkIcon
} from 'react-icons/fi';
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
    
    /* Font Sizes */
    --font-size-display-lg: clamp(2.5rem, 6vw, 4rem);
    --font-size-display-md: clamp(2rem, 5vw, 3rem);
    --font-size-headline-lg: clamp(1.5rem, 4vw, 2rem);
    --font-size-headline-md: clamp(1.25rem, 3.5vw, 1.75rem);
    --font-size-title-lg: clamp(1.125rem, 3vw, 1.5rem);
    --font-size-title-md: clamp(1rem, 2.5vw, 1.25rem);
    --font-size-body-lg: clamp(0.9375rem, 2vw, 1.125rem);
    --font-size-body-md: 0.9375rem;
    --font-size-body-sm: 0.8125rem;
    --font-size-label-lg: 0.8125rem;
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
    --section-gap-sm: clamp(2rem, 6vw, 4rem);
    --section-gap-md: clamp(3rem, 8vw, 6rem);
    --section-gap-lg: clamp(4rem, 10vw, 8rem);
    
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
  
  /* ========== BASE RESET OVERRIDES ========== */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  a:hover {
    color: var(--accent-primary-hover);
  }
  
  img {
    max-width: 100%;
    height: auto;
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
    white-space: nowrap;
    width: fit-content;
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
    white-space: nowrap;
    width: fit-content;
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
    color: var(--btn-primary-text);
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
    box-sizing: border-box;
  }
  
  @media (max-width: 768px) {
    .section-container {
      padding: 0 var(--gutter-mobile);
    }
    
    .btn-primary,
    .btn-outline {
      width: 100%;
      justify-content: center;
    }
    
    .card-executive {
      padding: 1.25rem;
    }
    
    .glass-panel {
      padding: 1.25rem;
    }
  }
  
  @media (max-width: 480px) {
    :root {
      --font-size-display-lg: clamp(2rem, 8vw, 2.5rem);
      --font-size-display-md: clamp(1.75rem, 7vw, 2rem);
      --font-size-headline-lg: clamp(1.375rem, 6vw, 1.5rem);
      --font-size-headline-md: clamp(1.125rem, 5vw, 1.25rem);
      --font-size-body-lg: 0.9375rem;
      --font-size-body-md: 0.875rem;
      --section-gap-sm: clamp(1.5rem, 5vw, 2.5rem);
      --section-gap-md: clamp(2rem, 7vw, 4rem);
      --section-gap-lg: clamp(2.5rem, 8vw, 5rem);
    }
    
    .section-container {
      padding: 0 0.75rem;
    }
    
    .btn-primary,
    .btn-outline {
      width: 100%;
      justify-content: center;
      font-size: 0.8125rem;
      padding: 0.75rem 1.25rem;
    }
    
    .btn-badge {
      font-size: 0.6875rem;
      padding: 0.2rem 0.625rem;
    }
    
    h1 {
      font-size: clamp(1.75rem, 8vw, 2.25rem);
    }
    
    h2 {
      font-size: clamp(1.5rem, 7vw, 1.875rem);
    }
    
    h3 {
      font-size: clamp(1.25rem, 6vw, 1.5rem);
    }
    
    p {
      font-size: 0.9375rem;
    }
  }
  
  @media (max-width: 360px) {
    .section-container {
      padding: 0 0.625rem;
    }
    
    .card-executive,
    .glass-panel {
      padding: 1rem;
    }
    
    h1 {
      font-size: 1.625rem;
    }
    
    h2 {
      font-size: 1.375rem;
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
    font-size: var(--font-size-body-sm);
  }
  
  .skip-link:focus { 
    top: 0; 
  }
  
  /* Mobile touch optimizations */
  @media (hover: none) and (pointer: coarse) {
    .card-executive:hover {
      transform: none;
    }
    
    .btn-primary:hover,
    .btn-outline:hover {
      transform: none;
    }
  }
  
  /* Ensure tables don't overflow */
  table {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    display: block;
  }
  
  /* Responsive grid adjustments */
  @media (max-width: 640px) {
    .grid-2-col,
    .grid-3-col,
    .grid-4-col {
      grid-template-columns: 1fr !important;
    }
  }
`;

// Helper function to get responsive icon size
const useResponsiveIconSize = (small, medium, large) => {
  const [size, setSize] = useState(medium);
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setSize(small);
      } else if (width < 768) {
        setSize(medium);
      } else {
        setSize(large);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [small, medium, large]);
  
  return size;
};

const AboutPage = ({ currentDate, lastModifiedDate, nextUpdateDate }) => {
  const lockIconSize = useResponsiveIconSize(28, 32, 36);
  const featureIconSize = useResponsiveIconSize(24, 26, 28);
  const globeIconSize = useResponsiveIconSize(24, 26, 28);
  const helpIconSize = useResponsiveIconSize(16, 17, 18);
  
  // Calculate price valid until date (e.g., 1 year from now)
  const getPriceValidUntil = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    return date.toISOString();
  };

  // ============= ENHANCED FEATURES WITH ICONS =============
  const features = [
    {
      icon: <FiAward size={featureIconSize} />,
      title: 'Professional Designs',
      description: 'Professionally crafted templates that impress recruiters with their clean, modern aesthetic.',
      stat: ''
    },
    {
      icon: <FiTrendingUp size={featureIconSize} />,
      title: 'Fast Results',
      description: 'Create a polished, interview-ready resume quickly with our intuitive drag-and-drop editor.',
      stat: ''
    },
    {
      icon: <FiCheckCircle size={featureIconSize} />,
      title: 'ATS Optimized',
      description: 'Every template is rigorously tested against major ATS platforms including Workday, Taleo, and Greenhouse.',
      stat: ''
    },
    {
      icon: <FiGlobe size={featureIconSize} />,
      title: 'Global Reach',
      description: 'Trusted by job seekers worldwide with region-specific formatting and international resume requirements.',
      stat: ''
    },
    {
      icon: <FiHeart size={featureIconSize} />,
      title: 'User-Centered Design',
      description: 'Built with feedback from users to create the most intuitive, frustration-free resume building experience.',
      stat: ''
    }
  ];

  // ============= COMPANY VALUES =============
  const values = [
    {
      title: "Accessibility First",
      description: "We believe great resume tools should be free and accessible to everyone, regardless of budget.",
      icon: <FiHeart size={20} />
    },
    {
      title: "Data-Driven Design",
      description: "Every template is backed by real data from ATS systems and recruiter feedback, not guesswork.",
      icon: <FiDatabase size={20} />
    },
    {
      title: "Continuous Innovation",
      description: "We update our platform regularly based on changing hiring trends and user feedback.",
      icon: <FiZap size={20} />
    }
  ];

  // ============= FAQ DATA =============
  const faqData = [
    {
      question: "What makes ProfessionalResumeFree different from other resume builders?",
      answer: "We combine beautiful, modern designs with rigorous ATS (Applicant Tracking System) optimization. Unlike other builders, every template is tested against major ATS platforms to ensure high compatibility. Plus, we're completely free with no hidden costs ever."
    },
    {
      question: "Is ProfessionalResumeFree really 100% free?",
      answer: "Yes, absolutely! We offer a completely free resume builder with access to all templates and features. No credit card required, no time limits, no watermarks. We believe everyone deserves access to professional resume tools."
    },
    {
      question: "Do I need to sign up to use the builder?",
      answer: "No sign-up is required. You can start building your resume immediately. There are no hidden paywalls, and you can download your resume PDF instantly without creating an account."
    },
    {
      question: "How does ATS optimization work?",
      answer: "All our templates are designed with proper heading hierarchy, standard fonts, clean layouts, and machine-readable formatting. We test each template against Workday, Taleo, iCIMS, Lever, Greenhouse, and other major ATS platforms to ensure maximum compatibility."
    },
    {
      question: "In which countries is ProfessionalResumeFree available?",
      answer: "Our platform is available worldwide and supports job seekers globally. We offer region-specific formatting including date formats, address styles, phone number formats, and resume conventions for North America, Europe, Asia, Australia, and more."
    },
    {
      question: "Do you store my personal data?",
      answer: "No. We do not store your data. Everything runs directly in your browser. The moment you leave the site or close the tab, your personal details disappear completely from our system. Your privacy is guaranteed."
    },
    {
      question: "Can I download my resume instantly?",
      answer: "Yes. Once you finish editing, you can download your resume as a PDF instantly. There are no waiting periods, approval processes, or hidden steps."
    }
  ];

  // ============= TESTIMONIALS =============
  const testimonials = [
    {
      name: "Jennifer L.",
      role: "Marketing Director",
      quote: "I was job searching for months with no luck. Used ProfessionalResumeFree and had interviews within weeks. Landed my dream job!",
      rating: 5,
      company: "Tech Startup"
    },
    {
      name: "David K.",
      role: "Software Engineer",
      quote: "The ATS optimization is no joke. My resume started getting through to hiring managers immediately. Worth more than any paid service I've tried.",
      rating: 5,
      company: "Fortune 500 Company"
    },
    {
      name: "Maria G.",
      role: "Nurse",
      quote: "Finally a resume builder that understands healthcare! The templates are professional and the interface is so easy to use.",
      rating: 5,
      company: "Major Hospital System"
    }
  ];

  // ============= PARTNERS =============
  const partners = [
    { name: "CareerBuilder", icon: <FiBriefcase size={16} /> },
    { name: "LinkedIn", icon: <FiLinkedin size={16} /> },
    { name: "Indeed", icon: <FiGlobe size={16} /> },
    { name: "Monster", icon: <FiUsers size={16} /> },
    { name: "Glassdoor", icon: <FiStar size={16} /> },
    { name: "ZipRecruiter", icon: <FiZap size={16} /> }
  ];

  // ============= INTERNAL LINKS =============
  const internalLinks = [
    {
      href: "/free-resume-readability-checker",
      text: "Free Resume Readability Checker for USA Job Applications",
      description: "Ensure your resume scores high on clarity and ATS compatibility"
    },
    {
      href: "/ats-friendly-logistics-transportation-resume-builder",
      text: "ATS-Friendly Logistics & Transportation Resume Builder",
      description: "Optimized templates for drivers, warehouse, and supply chain roles"
    },
    {
      href: "/how-long-should-a-resume-be-usa-recruiter-insights",
      text: "How Long Should Your Resume Be? USA Recruiter Insights 2026",
      description: "Data-backed guidance from American hiring managers"
    },
    {
      href: "/ats-friendly-driver-resume-builder",
      text: "Professional Driver Resume Builder - ATS Optimized for USA Jobs",
      description: "CDL, delivery, and transportation career templates"
    },
    {
      href: "/how-to-pass-the-ai-resume-screen-2026-ats-algorithms-explained",
      text: "Pass AI Resume Screens: 2026 ATS Algorithm Guide for USA Applicants",
      description: "Beat automated screening with proven optimization tactics"
    }
  ];

  // SINGLE CANONICAL URL
  const canonicalUrl = "https://professionalresumefree.com/about";

  return (
    <div style={{ 
      backgroundColor: 'var(--bg-page)', 
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      minHeight: '100vh',
      overflowX: 'hidden',
      width: '100%',
      maxWidth: '100vw'
    }}>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Google Fonts for Executive Design */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* ===== OPTIMIZED HIGH-CTR TITLE ===== */}
        <title>About Us: 100% Free Resume Builder | No Sign Up | Private</title>
        
        {/* ===== META DESCRIPTION ===== */}
        <meta name="description" content="Build your resume 100% free with no sign-up. Runs entirely in your browser—your data is never stored. Download PDF instantly. ATS optimized templates." />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="keywords" content="about us, free resume builder, no sign up resume, private resume builder, browser based resume, ATS resume, instant PDF download" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta httpEquiv="last-modified" content={lastModifiedDate} />
        
        {/* ===== SINGLE CANONICAL URL ===== */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* ===== ALTERNATE HREFLANG ===== */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* ===== GEO OPTIMIZATION TAGS ===== */}
        <meta name="chatgpt-fts:title" content="About ProfessionalResumeFree: 100% Free & Private" />
        <meta name="chatgpt-fts:description" content="Free resume builder with no sign-up. Runs in your browser; data is never stored. Instant PDF downloads. Learn about our privacy-first mission." />
        <meta name="chatgpt-fts:last-updated" content={currentDate} />
        
        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:title" content="About Us: 100% Free Resume Builder | No Sign Up | Private" />
        <meta property="og:description" content="Build your resume 100% free with no sign-up. Runs entirely in your browser—your data is never stored. Download PDF instantly." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/about-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="article:published_time" content={lastModifiedDate} />
        <meta property="article:modified_time" content={lastModifiedDate} />
        
        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us: 100% Free Resume Builder | No Sign Up | Private" />
        <meta name="twitter:description" content="Build your resume 100% free with no sign-up. Runs entirely in your browser—your data is never stored. Download PDF instantly." />
        <meta name="twitter:image" content="https://professionalresumefree.com/about-preview.jpg" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        
        {/* ===== COMPREHENSIVE JSON-LD SCHEMA ===== */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://professionalresumefree.com/#organization",
                "name": "ProfessionalResumeFree",
                "url": "https://professionalresumefree.com",
                "logo": "https://professionalresumefree.com/logo.png",
                "image": "https://professionalresumefree.com/og-image.jpg",
                "description": "Free ATS-optimized resume builder that runs entirely in your browser with no data storage.",
                "sameAs": [
                  "https://www.linkedin.com/company/professionalresumefree",
                  "https://twitter.com/ProfResumeFree",
                  "https://www.facebook.com/professionalresumefree"
                ]
              },
              {
                "@type": "WebPage",
                "@id": `${canonicalUrl}#webpage`,
                "url": canonicalUrl,
                "name": "About ProfessionalResumeFree",
                "description": "Learn about our mission to provide free, private, and ATS-optimized resume tools.",
                "isPartOf": {
                  "@id": "https://professionalresumefree.com/#website"
                },
                "datePublished": "2020-01-01",
                "dateModified": lastModifiedDate,
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
                      "name": "About Us",
                      "item": canonicalUrl
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "@id": `${canonicalUrl}#faq`,
                "mainEntity": faqData.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer,
                    "dateModified": lastModifiedDate
                  }
                }))
              },
              {
                "@type": "Product",
                "name": "ProfessionalResumeFree Resume Builder",
                "description": "Free ATS-optimized resume builder with professional templates. No sign-up required.",
                "image": "https://professionalresumefree.com/product-image.jpg",
                "brand": {
                  "@type": "Brand",
                  "name": "ProfessionalResumeFree"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "ratingCount": "10000",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "priceValidUntil": getPriceValidUntil(),
                  "availability": "https://schema.org/InStock",
                  "hasMerchantReturnPolicy": {
                    "@type": "MerchantReturnPolicy",
                    "applicableCountry": "US",
                    "returnPolicyCategory": "https://schema.org/NoReturnPolicy",
                    "returnFees": "https://schema.org/NoReturnFees"
                  },
                  "shippingDetails": {
                    "@type": "OfferShippingDetails",
                    "shippingRate": {
                      "@type": "MonetaryAmount",
                      "value": "0",
                      "currency": "USD"
                    },
                    "shippingDestination": {
                      "@type": "DefinedRegion",
                      "addressCountry": "US"
                    },
                    "deliveryTime": {
                      "@type": "ShippingDeliveryTime",
                      "handlingTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 0,
                        "maxValue": 0,
                        "unitCode": "DAY"
                      },
                      "transitTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 0,
                        "maxValue": 0,
                        "unitCode": "DAY"
                      }
                    }
                  }
                }
              }
            ]
          })
        }} />
      </Head>

      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* ============= HERO SECTION ============= */}
      <section id="main-content" style={{
        padding: 'var(--section-gap-lg) 0 var(--section-gap-sm)',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-page)',
        width: '100%'
      }}>
        <div className="section-container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 'clamp(1.25rem, 3vw, 2rem)',
            maxWidth: 'var(--content-narrow)',
            margin: '0 auto',
            width: '100%'
          }}>
            <div style={{ width: '100%' }}>
              <p style={{
                color: 'var(--accent-primary)',
                fontSize: 'var(--font-size-label-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                letterSpacing: 'var(--letter-spacing-caps)',
                textTransform: 'uppercase',
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
              }}>
                Our Mission
              </p>
              
              <h1 style={{
                fontSize: 'var(--font-size-display-lg)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--font-weight-extrabold)',
                lineHeight: 'var(--line-height-display)',
                color: 'var(--text-primary)',
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                letterSpacing: 'var(--letter-spacing-tight)'
              }}>
                We Believe in Your{' '}
                <span className="gradient-text">Potential</span>
              </h1>
              
              <p style={{
                fontSize: 'var(--font-size-body-lg)',
                color: 'var(--text-secondary)',
                marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
                lineHeight: 'var(--line-height-body)',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '0 0.5rem'
              }}>
                Our mission is to help you present your best self and unlock career opportunities
                through beautifully designed, effective resumes that get you noticed by top employers.
                <strong style={{ color: 'var(--text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {' '}100% Free. No Sign-Up. Instant Download.
                </strong>
              </p>
              
              <div style={{
                display: 'flex',
                gap: 'clamp(0.75rem, 2vw, 1rem)',
                flexWrap: 'wrap',
                justifyContent: 'center',
                width: '100%',
                padding: '0 0.5rem'
              }}>
                <Link href="/resume-templates" className="btn-primary">
                  <FiFileText size={18} />
                  Start Building Now
                  <span className="btn-badge">Free</span>
                </Link>
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool size={18} />
                  Explore Free Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= PRIVACY FIRST SECTION ============= */}
      <section style={{
        padding: 'var(--section-gap-sm) 0',
        position: 'relative',
        width: '100%'
      }}>
        <div className="section-container">
          <div className="glass-panel" style={{
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--glass-padding)',
            textAlign: 'center',
            boxShadow: 'var(--shadow-card)',
            border: '0.5px solid var(--border-gold-filament-strong)',
            width: '100%'
          }}>
            <div style={{
              width: 'clamp(60px, 10vw, 80px)',
              height: 'clamp(60px, 10vw, 80px)',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(242, 202, 80, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto clamp(1rem, 3vw, 1.5rem)',
              boxShadow: 'var(--shadow-gold-glow-sm)'
            }}>
              <FiLock size={lockIconSize} color="var(--accent-primary)" />
            </div>
            
            <h2 style={{
              fontSize: 'var(--font-size-headline-lg)',
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              fontWeight: 'var(--font-weight-bold)'
            }}>
              Your Data Never Leaves Your Browser
            </h2>
            
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 'var(--line-height-body)',
              padding: '0 0.5rem'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>We do not store your data.</strong> Everything runs{' '}
              <span style={{ 
                color: 'var(--accent-primary)', 
                fontWeight: 'var(--font-weight-semibold)',
                textDecoration: 'underline',
                textDecorationColor: 'var(--accent-primary-container)',
                textUnderlineOffset: '4px'
              }}>
                100% locally in your browser
              </span>. 
              The moment you leave the site or close the tab,{' '}
              <span style={{ 
                color: 'var(--accent-primary)',
                fontWeight: 'var(--font-weight-semibold)',
                textDecoration: 'underline',
                textDecorationColor: 'var(--accent-primary-container)',
                textUnderlineOffset: '4px'
              }}>
                your personal details disappear completely
              </span>. 
              No servers, no databases, no tracking. Just you and your resume.
            </p>
          </div>
        </div>
      </section>

      {/* ============= MISSION SECTION ============= */}
      <section style={{
        padding: 'var(--section-gap-md) 0',
        width: '100%'
      }}>
        <div className="section-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(1.5rem, 4vw, 3rem)',
            alignItems: 'center',
            width: '100%'
          }}>
            <div style={{ maxWidth: '600px', width: '100%' }}>
              <h2 style={{
                fontSize: 'var(--font-size-display-md)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)'
              }}>
                Our Mission
              </h2>
              
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
              }}>
                We founded ProfessionalResumeFree with a simple belief: <strong style={{ color: 'var(--text-primary)' }}>everyone deserves the opportunity</strong> 
                to present their skills and experience in the best possible light. In today's 
                competitive job market, your resume is your first impression - we make sure it's 
                a great one.
              </p>
              
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
              }}>
                Our platform combines <strong style={{ color: 'var(--text-primary)' }}>cutting-edge design with rigorous ATS optimization</strong> to ensure 
                your resume not only looks beautiful but also gets past automated screening 
                systems and into the hands of hiring managers. We help job seekers globally 
                create professional resumes that land interviews, <strong style={{ color: 'var(--text-primary)' }}>completely free of charge</strong>.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: 'clamp(1rem, 3vw, 1.5rem)',
              width: '100%'
            }}>
              <div className="glass-panel" style={{
                textAlign: 'center',
                padding: 'clamp(1.25rem, 3vw, 2rem) clamp(1rem, 2vw, 1.5rem)',
                borderRadius: 'var(--radius-xl)'
              }}>
                <FiGlobe size={globeIconSize} style={{ margin: '0 auto 0.75rem', color: 'var(--accent-primary)' }} />
                <span style={{
                  fontSize: 'var(--font-size-headline-md)',
                  fontWeight: 'var(--font-weight-bold)',
                  display: 'block',
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem'
                }}>Global</span>
                <span style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--font-size-body-sm)'
                }}>Reach</span>
              </div>
              
              <div className="glass-panel" style={{
                textAlign: 'center',
                padding: 'clamp(1.25rem, 3vw, 2rem) clamp(1rem, 2vw, 1.5rem)',
                borderRadius: 'var(--radius-xl)'
              }}>
                <FiZap size={globeIconSize} style={{ margin: '0 auto 0.75rem', color: 'var(--accent-primary)' }} />
                <span style={{
                  fontSize: 'var(--font-size-headline-md)',
                  fontWeight: 'var(--font-weight-bold)',
                  display: 'block',
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem'
                }}>Fast</span>
                <span style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--font-size-body-sm)'
                }}>Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= FEATURES SECTION ============= */}
      <section style={{
        padding: 'var(--section-gap-md) 0',
        background: 'var(--bg-surface-lowest)',
        width: '100%'
      }}>
        <div className="section-container">
          <div style={{
            textAlign: 'center',
            maxWidth: 'var(--content-narrow)',
            margin: '0 auto clamp(2rem, 5vw, 3rem)',
            padding: '0 0.5rem'
          }}>
            <h2 style={{
              fontSize: 'var(--font-size-display-md)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
            }}>
              Why Choose ProfessionalResumeFree
            </h2>
            
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)'
            }}>
              We combine beautiful design with powerful functionality to help you stand out
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1rem, 2vw, 1.5rem)',
            width: '100%'
          }}>
            {features.map((feature, index) => (
              <div key={index} className="card-executive">
                <div style={{
                  width: 'clamp(48px, 8vw, 56px)',
                  height: 'clamp(48px, 8vw, 56px)',
                  background: 'rgba(242, 202, 80, 0.1)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                  color: 'var(--accent-primary)'
                }}>
                  {feature.icon}
                </div>
                
                <h3 style={{
                  fontSize: 'var(--font-size-title-md)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  {feature.title}
                </h3>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--font-size-body-md)',
                  lineHeight: 'var(--line-height-body)',
                  flex: 1
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= VALUES SECTION ============= */}
      <section style={{
        padding: 'var(--section-gap-md) 0',
        width: '100%'
      }}>
        <div className="section-container">
          <div style={{
            textAlign: 'center',
            maxWidth: 'var(--content-narrow)',
            margin: '0 auto clamp(2rem, 5vw, 3rem)',
            padding: '0 0.5rem'
          }}>
            <h2 style={{
              fontSize: 'var(--font-size-display-md)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
            }}>
              Our Core Values
            </h2>
            
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)'
            }}>
              The principles that guide everything we do
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(1rem, 2vw, 1.5rem)',
            width: '100%'
          }}>
            {values.map((value, index) => (
              <div key={index} className="glass-panel" style={{
                padding: 'clamp(1.25rem, 3vw, 2rem)',
                borderRadius: 'var(--radius-xl)',
                textAlign: 'center'
              }}>
                <div style={{
                  width: 'clamp(48px, 8vw, 56px)',
                  height: 'clamp(48px, 8vw, 56px)',
                  background: 'linear-gradient(135deg, #f2ca50 0%, #d4af37 100%)',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto clamp(1rem, 2vw, 1.25rem)',
                  color: 'var(--accent-on-primary)',
                  boxShadow: 'var(--shadow-gold-glow-sm)'
                }}>
                  {value.icon}
                </div>
                
                <h3 style={{
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  fontSize: 'var(--font-size-title-md)'
                }}>
                  {value.title}
                </h3>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--font-size-body-md)'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= TESTIMONIALS SECTION ============= */}
      <section style={{
        padding: 'var(--section-gap-md) 0',
        background: 'var(--bg-surface-lowest)',
        width: '100%'
      }}>
        <div className="section-container">
          <div style={{
            textAlign: 'center',
            maxWidth: 'var(--content-narrow)',
            margin: '0 auto clamp(2rem, 5vw, 3rem)',
            padding: '0 0.5rem'
          }}>
            <h2 style={{
              fontSize: 'var(--font-size-display-md)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
            }}>
              Success Stories
            </h2>
            
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)'
            }}>
              Real feedback from users who landed their dream jobs
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1rem, 2vw, 1.5rem)',
            width: '100%'
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-executive">
                <p style={{
                  fontSize: 'var(--font-size-body-md)',
                  color: 'var(--text-secondary)',
                  fontStyle: 'italic',
                  marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                  lineHeight: 'var(--line-height-body)'
                }}>
                  "{testimonial.quote}"
                </p>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(0.75rem, 1.5vw, 1rem)',
                  marginTop: 'auto',
                  borderTop: '0.5px solid var(--border-gold-filament)',
                  paddingTop: 'clamp(0.75rem, 1.5vw, 1rem)',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    width: 'clamp(40px, 7vw, 48px)',
                    height: 'clamp(40px, 7vw, 48px)',
                    borderRadius: 'var(--radius-full)',
                    background: 'linear-gradient(135deg, var(--accent-primary-container) 0%, var(--accent-primary) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-on-primary)',
                    fontWeight: 'var(--font-weight-bold)',
                    fontSize: 'var(--font-size-body-md)',
                    flexShrink: 0
                  }}>
                    {testimonial.name.charAt(0)}
                  </div>
                  
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem',
                      fontSize: 'var(--font-size-body-md)'
                    }}>
                      {testimonial.name}
                    </div>
                    
                    <div style={{
                      fontSize: 'var(--font-size-body-sm)',
                      color: 'var(--text-secondary)'
                    }}>
                      {testimonial.role} • {testimonial.company}
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      gap: '0.25rem',
                      color: 'var(--accent-primary)',
                      marginTop: '0.5rem',
                      fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)'
                    }}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= PARTNERS SECTION ============= */}
      <section style={{
        padding: 'var(--section-gap-sm) 0',
        borderTop: '0.5px solid var(--border-gold-filament)',
        borderBottom: '0.5px solid var(--border-gold-filament)',
        width: '100%'
      }}>
        <div className="section-container">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(0.5rem, 1.5vw, 1rem)',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 0.5rem'
          }}>
            <span style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--font-size-body-sm)',
              fontWeight: 'var(--font-weight-medium)',
              letterSpacing: 'var(--letter-spacing-wide)',
              textTransform: 'uppercase',
              width: '100%',
              textAlign: 'center',
              marginBottom: '0.5rem'
            }}>
              Trusted by users of:
            </span>
            
            {partners.map((partner, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: 'clamp(0.375rem, 1vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)',
                background: 'rgba(242, 202, 80, 0.05)',
                borderRadius: 'var(--radius-full)',
                border: '0.5px solid var(--border-gold-filament)',
                fontSize: 'var(--font-size-body-sm)',
                color: 'var(--text-secondary)',
                whiteSpace: 'nowrap'
              }}>
                <span style={{ color: 'var(--accent-primary)' }}>{partner.icon}</span>
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= FAQ SECTION ============= */}
      <section style={{
        padding: 'var(--section-gap-md) 0',
        width: '100%'
      }}>
        <div className="section-container">
          <div style={{
            textAlign: 'center',
            maxWidth: 'var(--content-narrow)',
            margin: '0 auto clamp(2rem, 5vw, 3rem)',
            padding: '0 0.5rem'
          }}>
            <h2 style={{
              fontSize: 'var(--font-size-display-md)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
            }}>
              Frequently Asked Questions
            </h2>
            
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)'
            }}>
              Everything you need to know about our platform
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(1rem, 2vw, 1.25rem)',
            maxWidth: '1000px',
            margin: '0 auto',
            width: '100%'
          }}>
            {faqData.map((faq, index) => (
              <div key={index} className="glass-panel" style={{
                padding: 'clamp(1rem, 2vw, 1.5rem)',
                borderRadius: 'var(--radius-lg)'
              }}>
                <h3 style={{
                  fontSize: 'var(--font-size-body-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--text-primary)',
                  marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'clamp(0.375rem, 1vw, 0.5rem)'
                }}>
                  <FiHelpCircle 
                    size={helpIconSize} 
                    color="var(--accent-primary)" 
                    style={{ marginTop: '0.2rem', flexShrink: 0 }} 
                  />
                  <span>{faq.question}</span>
                </h3>
                
                <p style={{
                  fontSize: 'var(--font-size-body-md)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--line-height-body)'
                }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= CTA SECTION ============= */}
      <section style={{
        padding: 'var(--section-gap-lg) 0',
        background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%'
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
          <div style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto',
            padding: '0 0.5rem'
          }}>
            <h2 style={{
              fontSize: 'var(--font-size-display-md)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              textShadow: 'var(--glow-gold)'
            }}>
              Ready to Build Your Dream Career?
            </h2>
            
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)',
              marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)'
            }}>
              Join thousands of job seekers who've landed better jobs with our professionally designed resumes.
              <br/>
              <strong style={{ 
                color: 'var(--accent-primary)', 
                fontWeight: 'var(--font-weight-semibold)',
                textShadow: 'var(--glow-gold)'
              }}>
                100% Free. No Sign-Up. No Paywalls. Instant PDF Download.
              </strong>
            </p>
            
            <div style={{
              display: 'flex',
              gap: 'clamp(0.75rem, 2vw, 1rem)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              width: '100%'
            }}>
              <Link href="/resume-templates" className="btn-primary" style={{
                boxShadow: 'var(--shadow-gold-glow)'
              }}>
                <FiDownload size={18} />
                Create Your Resume Now
                <span className="btn-badge" style={{ 
                  background: 'rgba(60, 47, 0, 0.5)',
                  color: 'var(--accent-primary)'
                }}>Free</span>
              </Link>
              
              <Link href="/free-resume-tools" className="btn-outline" style={{
                borderColor: 'var(--accent-primary)',
                color: 'var(--accent-primary)'
              }}>
                <FiTool size={18} />
                Explore Free Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============= INTERNAL LINKS SECTION ============= */}
      <section style={{
        padding: 'var(--section-gap-sm) 0',
        borderTop: '0.5px solid var(--border-gold-filament)',
        width: '100%'
      }}>
        <div className="section-container">
          <div style={{
            textAlign: 'center',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
            padding: '0 0.5rem'
          }}>
            <h2 style={{
              fontSize: 'var(--font-size-headline-lg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: '0.5rem'
            }}>
              Explore More Free Resume Resources
            </h2>
            
            <p style={{
              fontSize: 'var(--font-size-body-md)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Strengthen your job application with our USA-optimized tools and guides
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(0.75rem, 1.5vw, 1rem)',
            width: '100%'
          }}>
            {internalLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 'clamp(1rem, 2vw, 1.25rem)',
                  background: 'var(--card-bg)',
                  backdropFilter: 'blur(var(--glass-blur))',
                  WebkitBackdropFilter: 'blur(var(--glass-blur))',
                  borderRadius: 'var(--radius-lg)',
                  border: 'var(--card-border)',
                  transition: 'all var(--transition-medium) var(--easing-default)',
                  textDecoration: 'none',
                  color: 'inherit',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = 'var(--accent-primary-container)';
                    e.currentTarget.style.boxShadow = 'var(--card-hover-shadow)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <span style={{
                  fontSize: 'var(--font-size-body-md)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  lineHeight: '1.4'
                }}>
                  {link.text}
                </span>
                
                <span style={{
                  fontSize: 'var(--font-size-body-sm)',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                  flex: 1
                }}>
                  {link.description}
                </span>
                
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '0.75rem',
                  fontSize: 'var(--font-size-body-sm)',
                  color: 'var(--accent-primary)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  <FiArrowRight size={14} />
                  Explore Resource
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Update Strategy */}
      <div style={{
        padding: 'clamp(0.75rem, 2vw, 1rem) 0',
        background: 'var(--bg-surface-lowest)',
        borderTop: '0.5px solid var(--border-gold-filament)',
        fontSize: 'var(--font-size-body-sm)',
        color: 'var(--text-secondary)',
        textAlign: 'center',
        width: '100%'
      }}>
        <div className="section-container">
          <FiCalendar size={14} style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle', color: 'var(--accent-primary)' }} />
          <span>Last updated: {currentDate} • Next update: {nextUpdateDate}</span>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];
  const lastModifiedDate = now.toISOString();
  
  const nextDate = new Date(now);
  nextDate.setDate(nextDate.getDate() + 7);
  const nextUpdateDate = nextDate.toISOString().split('T')[0];
  
  return {
    props: {
      currentDate,
      lastModifiedDate,
      nextUpdateDate
    },
    revalidate: 3600
  };
}

export default AboutPage;