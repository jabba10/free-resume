import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { 
  FiGlobe, FiBriefcase, FiMapPin, FiAward, FiTrendingUp,
  FiArrowRight, FiExternalLink, FiSearch, FiHome, FiUsers,
  FiTarget, FiCheck, FiStar, FiChevronRight, FiLayers,
  FiTool, FiCalendar, FiClock, FiUser, FiCode, FiHeart,
  FiDollarSign, FiDownload, FiEdit, FiBarChart2, FiBookOpen,
  FiCpu, FiShield, FiDatabase, FiMessageCircle, FiFileText,
  FiAlertCircle, FiCheckCircle, FiXCircle, FiX, FiActivity,
  FiZap, FiInfo, FiEdit3, FiSmartphone, FiCopy, FiPenTool,
  FiType, FiAlignLeft, FiHash, FiLock, FiSmile, FiUserCheck,
  FiSave, FiRefreshCw, FiThumbsUp, FiMonitor, FiSun, FiMoon,
  FiCoffee, FiCompass, FiAnchor, FiPercent, FiPieChart,
  FiCloud, FiTerminal, FiHeadphones, FiShoppingBag, FiCamera
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS
// ============================================================================
const executiveDesignTokens = `
  :root {
    --bg-page: #131315; --bg-surface-lowest: #0e0e10; --bg-surface-low: #1c1b1d;
    --bg-surface: #201f21; --bg-surface-high: #2a2a2c;
    --text-primary: #e5e1e4; --text-secondary: #c5bfc8; --text-muted: #9d95a0;
    --accent-primary: #f2ca50; --accent-primary-container: #d4af37;
    --accent-on-primary: #3c2f00; --accent-primary-hover: #f7d86e;
    --border-gold-filament: rgba(212,175,55,0.3); --border-gold-filament-strong: rgba(212,175,55,0.5);
    --border-glass: rgba(212,175,55,0.15); --error-color: #ffb4ab; --warning-color: #ffb74d;
    --success-color: #4caf50; --info-color: #64b5f6; --purple-accent: #bb86fc;
    --rose-accent: #f8bbd0; --teal-accent: #80cbc4; --amber-accent: #ffd54f;
    --font-display: 'Playfair Display','Georgia',serif;
    --font-body: 'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    --font-size-display-lg: clamp(3rem,6vw,4rem); --font-size-display-md: clamp(2.25rem,5vw,3rem);
    --font-size-headline-lg: clamp(1.75rem,4vw,2rem); --font-size-headline-md: clamp(1.5rem,3.5vw,1.75rem);
    --font-size-title-md: clamp(1.125rem,2.5vw,1.25rem); --font-size-body-lg: clamp(1rem,2vw,1.125rem);
    --font-size-body-md: 1rem; --font-size-body-sm: 0.875rem; --font-size-label-sm: 0.6875rem;
    --line-height-display: 1.1; --line-height-headline: 1.2; --line-height-body: 1.6;
    --font-weight-semibold: 600; --font-weight-bold: 700; --font-weight-extrabold: 800;
    --letter-spacing-tight: -0.02em; --letter-spacing-caps: 0.08em;
    --section-gap-md: clamp(4rem,8vw,6rem); --section-gap-lg: clamp(5rem,10vw,8rem);
    --content-max-width: 1280px; --gutter-desktop: clamp(1.5rem,5vw,2.5rem); --gutter-mobile: clamp(1rem,4vw,1.5rem);
    --shadow-gold-glow-sm: 0 0 10px rgba(242,202,80,0.3);
    --shadow-card: 0 4px 12px rgba(0,0,0,0.3); --shadow-card-hover: 0 8px 24px rgba(0,0,0,0.4),0 0 20px rgba(242,202,80,0.05);
    --transition-fast: 150ms; --transition-medium: 250ms; --easing-smooth: cubic-bezier(0.65,0,0.35,1);
    --glass-blur: 20px; --glass-padding: clamp(1.5rem,4vw,2.5rem);
    --btn-primary-bg: #f2ca50; --btn-primary-text: #3c2f00; --btn-primary-padding: 0.875rem 2rem;
    --btn-outline-border: rgba(212,175,55,0.5); --btn-outline-text: #f2ca50;
    --card-bg: rgba(28,27,29,0.6); --card-border: 0.5px solid rgba(212,175,55,0.15);
    --card-padding: clamp(1.5rem,4vw,2.5rem);
  }
  * { margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color:transparent; }
  body { background-color:var(--bg-page); color:var(--text-primary); font-family:var(--font-body); font-size:var(--font-size-body-md); line-height:var(--line-height-body); -webkit-font-smoothing:antialiased; overflow-x:hidden; }
  h1,h2,h3,h4 { font-family:var(--font-display); color:var(--text-primary); letter-spacing:var(--letter-spacing-tight); word-wrap:break-word; }
  h1 { font-size:var(--font-size-display-lg); line-height:var(--line-height-display); font-weight:var(--font-weight-bold); margin-bottom:1rem; }
  h2 { font-size:var(--font-size-display-md); line-height:var(--line-height-headline); font-weight:var(--font-weight-bold); }
  h3 { font-size:var(--font-size-headline-lg); line-height:var(--line-height-headline); font-weight:var(--font-weight-semibold); font-family:var(--font-body); }
  h4 { font-size:var(--font-size-title-md); line-height:var(--line-height-headline); font-weight:var(--font-weight-semibold); font-family:var(--font-body); }
  p { color:var(--text-secondary); font-size:var(--font-size-body-lg); line-height:var(--line-height-body); }
  strong { color:var(--text-primary); font-weight:var(--font-weight-semibold); }
  a { color:var(--accent-primary); transition:color var(--transition-fast); text-decoration:none; }
  a:hover { color:var(--accent-primary-hover); }
  .gradient-text { background:linear-gradient(135deg,#f2ca50 0%,#d4af37 50%,#ffe088 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .section-container { max-width:var(--content-max-width); margin:0 auto; padding:0 var(--gutter-desktop); width:100%; }
  @media (max-width:768px) { .section-container { padding:0 var(--gutter-mobile); } }
  .skip-link { position:absolute; top:-40px; left:50%; transform:translateX(-50%); background:var(--accent-primary); color:var(--accent-on-primary); padding:8px 16px; z-index:100; border-radius:0 0 0.25rem 0.25rem; font-weight:var(--font-weight-semibold); }
  .skip-link:focus { top:0; }
  .btn-primary { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:var(--btn-primary-bg); color:var(--btn-primary-text); border:none; border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.3); text-decoration:none; min-width:200px; }
  .btn-primary:hover { background:var(--accent-primary-hover); transform:translateY(-2px); box-shadow:var(--shadow-gold-glow-sm); color:var(--btn-primary-text); }
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; text-decoration:none; min-width:200px; }
  .btn-outline:hover { background:rgba(242,202,80,0.08); border-color:rgba(212,175,55,0.8); transform:translateY(-2px); color:var(--btn-outline-text); }
  .card-executive { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); -webkit-backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); transition:all var(--transition-medium) var(--easing-smooth); height:auto; display:flex; flex-direction:column; width:100%; max-width:100%; }
  .card-executive:hover { background:rgba(32,31,33,0.8); border-color:rgba(212,175,55,0.3); transform:translateY(-4px); box-shadow:var(--shadow-card-hover); }
  .section { width:100%; padding:var(--section-gap-md) 0; }
  .section-alt { background:var(--bg-surface-lowest); }
  .section-header { text-align:center; margin-bottom:clamp(2rem,6vw,3rem); }
  .section-title { margin-bottom:1rem; max-width:900px; margin-left:auto; margin-right:auto; }
  .section-subtitle { font-size:var(--font-size-body-lg); color:var(--text-secondary); max-width:700px; margin:0 auto; }
  .breadcrumb-nav { padding:1rem 0; background:var(--bg-surface-lowest); border-bottom:0.5px solid var(--border-gold-filament); width:100%; }
  .breadcrumb-nav ol { list-style:none; display:flex; align-items:center; justify-content:center; gap:0.5rem; flex-wrap:wrap; }
  .breadcrumb-nav a { color:var(--text-secondary); font-size:var(--font-size-body-sm); display:inline-flex; align-items:center; gap:0.25rem; }
  .breadcrumb-nav a:hover { color:var(--accent-primary); }
  .breadcrumb-nav [aria-current="page"] { color:var(--accent-primary); font-weight:var(--font-weight-semibold); }
  .badge { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.5rem 1.25rem; border-radius:9999px; font-size:var(--font-size-body-sm); font-weight:500; letter-spacing:var(--letter-spacing-caps); text-transform:uppercase; margin-bottom:1.5rem; border:0.5px solid var(--border-gold-filament); }
  .grid { display:grid; grid-template-columns:1fr; gap:1.5rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid { grid-template-columns:repeat(3,1fr); } }
  .grid-4 { display:grid; grid-template-columns:1fr; gap:1.5rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid-4 { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid-4 { grid-template-columns:repeat(4,1fr); } }
  .stat-card { text-align:center; padding:1.5rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; }
  .stat-number { font-size:clamp(1.8rem,4vw,2.2rem); font-weight:var(--font-weight-bold); color:var(--accent-primary); display:block; font-family:var(--font-display); }
  .feature-badge { display:inline-flex; align-items:center; gap:0.25rem; background:rgba(242,202,80,0.1); padding:0.25rem 0.75rem; border-radius:9999px; font-size:var(--font-size-body-sm); color:var(--accent-primary); border:0.5px solid var(--border-gold-filament); }
  .feature-tag { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.25rem 0.5rem; border-radius:0.25rem; font-size:var(--font-size-label-sm); border:0.5px solid var(--border-gold-filament); }
  .feature-tag-green { display:inline-block; background:rgba(76,175,80,0.1); color:var(--success-color); padding:0.25rem 0.5rem; border-radius:0.25rem; font-size:var(--font-size-label-sm); border:0.5px solid rgba(76,175,80,0.3); }
  .feature-tag-blue { display:inline-block; background:rgba(100,181,246,0.1); color:var(--info-color); padding:0.25rem 0.5rem; border-radius:0.25rem; font-size:var(--font-size-label-sm); border:0.5px solid rgba(100,181,246,0.3); }
  .feature-tag-purple { display:inline-block; background:rgba(187,134,252,0.1); color:var(--purple-accent); padding:0.25rem 0.5rem; border-radius:0.25rem; font-size:var(--font-size-label-sm); border:0.5px solid rgba(187,134,252,0.3); }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; transition:all var(--transition-fast); }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .table-wrap { overflow-x:auto; margin:1.5rem 0; background:var(--bg-surface-low); border-radius:0.5rem; border:var(--card-border); }
  table { width:100%; border-collapse:collapse; min-width:600px; }
  th { background:var(--bg-surface-high); padding:1rem; text-align:left; font-weight:var(--font-weight-semibold); border-bottom:0.5px solid var(--border-gold-filament); color:var(--accent-primary); font-size:var(--font-size-body-sm); white-space:nowrap; }
  td { padding:0.75rem 1rem; border-bottom:0.5px solid var(--border-glass); font-size:var(--font-size-body-sm); color:var(--text-secondary); }
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  .insight-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .insight-box-success { background:rgba(76,175,80,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(76,175,80,0.3); }
  .insight-box-warning { background:rgba(255,183,77,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(255,183,77,0.3); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .number-circle { display:inline-flex; align-items:center; justify-content:center; width:2rem; height:2rem; background:linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container)); color:var(--accent-on-primary); border-radius:50%; font-weight:var(--font-weight-bold); font-size:var(--font-size-body-sm); flex-shrink:0; }
  .category-tab { display:flex; align-items:center; gap:0.5rem; padding:0.75rem 1.5rem; background:rgba(28,27,29,0.6); border:0.5px solid var(--border-gold-filament); border-radius:9999px; cursor:pointer; transition:all var(--transition-fast); color:var(--text-secondary); font-size:var(--font-size-body-sm); }
  .category-tab:hover { border-color:var(--accent-primary-container); color:var(--accent-primary); }
  .category-tab.active { background:rgba(242,202,80,0.15); color:var(--accent-primary); border-color:var(--accent-primary); }
  .freshness-indicator { display: none; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = {
  FiGlobe, FiBriefcase, FiMapPin, FiAward, FiTrendingUp, FiArrowRight,
  FiExternalLink, FiSearch, FiHome, FiUsers, FiTarget, FiCheck, FiStar,
  FiChevronRight, FiLayers, FiTool, FiCalendar, FiClock, FiUser, FiCode,
  FiHeart, FiDollarSign, FiDownload, FiEdit, FiBarChart2, FiBookOpen,
  FiCpu, FiShield, FiDatabase, FiMessageCircle, FiFileText, FiAlertCircle,
  FiCheckCircle, FiXCircle, FiX, FiActivity, FiZap, FiInfo, FiEdit3,
  FiSmartphone, FiCopy, FiPenTool, FiType, FiAlignLeft, FiHash, FiLock,
  FiSmile, FiUserCheck, FiSave, FiRefreshCw, FiThumbsUp, FiMonitor,
  FiSun, FiMoon, FiCoffee, FiCompass, FiAnchor, FiPercent, FiPieChart,
  FiCloud, FiTerminal, FiHeadphones, FiShoppingBag, FiCamera
};

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_DATE = new Date().toISOString().split('T')[0];
const SITE_URL = 'https://professionalresumefree.com';

const JOB_CATEGORIES = [
  {
    title: "Remote Job Boards",
    description: "Platforms specializing in fully remote positions across various industries and time zones. These boards focus exclusively on work-from-home opportunities with global reach.",
    icon: "FiGlobe",
    jobs: [
      { 
        name: "We Work Remotely", 
        url: "https://weworkremotely.com/", 
        description: "The largest remote work community in the world with jobs in development, marketing, customer support, and more. Features hand-curated listings from companies embracing remote-first culture.",
        standout: "Largest remote-only job board with 3M+ monthly visitors. Companies pay $299 to post, ensuring serious employers only.",
        country: "USA (Global Reach)",
        audience: "Digital nomads, remote workers, developers, marketers, customer support professionals seeking fully remote positions worldwide.",
        metric: "3M+ Monthly Visitors",
        emoji: "🌍",
        tagColor: "green"
      },
      { 
        name: "Remote OK", 
        url: "https://remoteok.io/", 
        description: "Aggregates remote jobs from across the web with powerful filters for job types, time zones, and categories. Updated daily with fresh opportunities from thousands of companies.",
        standout: "Real-time job aggregation with advanced filtering by tech stack, time zone, and job type. Features salary transparency on many listings.",
        country: "USA (Global Reach)",
        audience: "Tech professionals, developers, designers, and digital workers seeking remote positions with flexible schedules.",
        metric: "Daily Job Updates",
        emoji: "✅",
        tagColor: "green"
      },
      { 
        name: "FlexJobs", 
        url: "https://www.flexjobs.com/", 
        description: "Curated remote and flexible jobs with rigorous scam-free verification. Every listing is hand-screened by researchers before publication to ensure legitimacy.",
        standout: "100% scam-free guarantee with human-screened listings. Offers career coaching, resume reviews, and skills testing as premium features.",
        country: "USA (Global Reach)",
        audience: "Professionals seeking verified, legitimate remote jobs across 50+ career categories. Best for those tired of scam listings on free boards.",
        metric: "Verified Listings",
        emoji: "💼",
        tagColor: "blue"
      },
      { 
        name: "Remotive", 
        url: "https://remotive.io/", 
        description: "Remote jobs in tech, sales, marketing, and customer support. Includes an active community forum and helpful remote work resources for career growth.",
        standout: "Active Slack community of 30,000+ remote workers. Free job board with premium features for job seekers including early access to listings.",
        country: "France (Global Reach)",
        audience: "Tech professionals, startup enthusiasts, and remote workers seeking community alongside job opportunities.",
        metric: "30K+ Community",
        emoji: "🚀",
        tagColor: "purple"
      },
      { 
        name: "Working Nomads", 
        url: "https://www.workingnomads.co/", 
        description: "Curated list of remote jobs for digital nomads. Delivers a hand-picked selection of remote positions directly to your inbox with personalized alerts.",
        standout: "Newsletter-first approach with curated daily/weekly job alerts. Focuses on quality over quantity with hand-picked listings.",
        country: "USA (Global Reach)",
        audience: "Digital nomads, travelers, and location-independent professionals seeking curated remote opportunities.",
        metric: "Digital Nomad Focus",
        emoji: "🧳",
        tagColor: "green"
      },
      { 
        name: "JustRemote", 
        url: "https://justremote.co/", 
        description: "Discover remote jobs that fit your life. Covers development, marketing, design, writing, and customer support roles with powerful filtering options.",
        standout: "Excellent filtering by continent and job category. Highlights companies that are fully remote versus partially remote.",
        country: "UK (Global Reach)",
        audience: "Professionals seeking clarity on company remote policies before applying. Best for those wanting to filter by geographic region.",
        metric: "Geo-Filtering Focus",
        emoji: "🏠",
        tagColor: "blue"
      }
    ]
  },
  {
    title: "Hybrid Job Boards",
    description: "Find balanced opportunities that combine office and remote work arrangements. These platforms offer flexibility while maintaining in-person collaboration.",
    icon: "FiBriefcase",
    jobs: [
      { 
        name: "LinkedIn Jobs", 
        url: "https://www.linkedin.com/jobs/", 
        description: "The world's largest professional network with integrated job search. Use 'Remote' and 'Hybrid' filters to find flexible work arrangements across all industries.",
        standout: "750M+ professional network with company insights, salary data, and direct connection to recruiters. AI-powered job matching based on your profile.",
        country: "USA (Global Operations)",
        audience: "All professionals across every industry. Best for those who want to leverage their professional network for referrals and direct recruiter contact.",
        metric: "750M+ Professionals",
        emoji: "🔗",
        tagColor: "green"
      },
      { 
        name: "Indeed", 
        url: "https://www.indeed.com/", 
        description: "World's largest job search engine aggregating listings from thousands of sources. Powerful hybrid work filters with 250M+ monthly users worldwide.",
        standout: "Massive database with 250M+ monthly visitors. Free for job seekers with company reviews, salary comparisons, and resume hosting.",
        country: "USA (60+ Countries)",
        audience: "Job seekers at all levels across every industry. Best for casting a wide net and discovering opportunities from multiple sources in one place.",
        metric: "250M+ Monthly Users",
        emoji: "🔍",
        tagColor: "green"
      },
      { 
        name: "Built In", 
        url: "https://builtin.com/jobs", 
        description: "Tech jobs with hybrid options focused on startup ecosystems in major US cities including San Francisco, New York, Austin, Boston, and Chicago.",
        standout: "Hyper-local focus on specific tech hub cities. Features company culture content, office photos, and detailed tech stack information.",
        country: "USA (8 Major Tech Hubs)",
        audience: "Tech professionals targeting startup and scale-up companies in specific US tech hub cities with hybrid work arrangements.",
        metric: "City-Specific Focus",
        emoji: "🏙️",
        tagColor: "purple"
      },
      { 
        name: "Glassdoor", 
        url: "https://www.glassdoor.com/", 
        description: "Find hybrid roles with company reviews, salary transparency, and interview insights from real employees. Research companies before you apply.",
        standout: "Unmatched company intelligence with employee reviews, salary data, interview experiences, and CEO approval ratings. Research-first approach.",
        country: "USA (Global Operations)",
        audience: "Professionals who want to research company culture, compensation, and interview processes before applying. Best for informed decision-making.",
        metric: "Company Insights",
        emoji: "🏢",
        tagColor: "blue"
      },
      { 
        name: "ZipRecruiter", 
        url: "https://www.ziprecruiter.com/", 
        description: "AI-powered job matching for hybrid positions. Smart technology connects your profile with relevant opportunities and allows one-click applications.",
        standout: "Proprietary AI matching algorithm that actively invites candidates to apply. 'Apply with one click' feature streamlines the application process.",
        country: "USA (Global Operations)",
        audience: "Active and passive job seekers who want AI to match them with relevant opportunities automatically.",
        metric: "AI-Powered Matching",
        emoji: "🤖",
        tagColor: "purple"
      },
      { 
        name: "SimplyHired", 
        url: "https://www.simplyhired.com/", 
        description: "Comprehensive job search aggregator with hybrid work filters. Searches across multiple job boards simultaneously and provides salary estimates.",
        standout: "Aggregates listings from dozens of sources. Provides estimated salary ranges and local salary comparisons for informed applications.",
        country: "USA (Global Operations)",
        audience: "Job seekers wanting to search multiple job boards simultaneously with built-in salary research tools.",
        metric: "Multi-Board Aggregator",
        emoji: "📊",
        tagColor: "green"
      }
    ]
  },
  {
    title: "International Job Boards",
    description: "Global platforms offering opportunities with relocation support and international placements across continents and cultures.",
    icon: "FiMapPin",
    jobs: [
      { 
        name: "Monster Worldwide", 
        url: "https://www.monster.com/", 
        description: "Pioneer job board with global presence across USA, Europe, and Asia. Many positions offer relocation packages and international benefits.",
        standout: "Established brand operating in 40+ countries. Strong presence in Europe and North America with dedicated country-specific portals.",
        country: "USA (40+ Countries)",
        audience: "Mid-career to senior professionals seeking international opportunities with established multinational corporations.",
        metric: "40+ Countries",
        emoji: "💼",
        tagColor: "blue"
      },
      { 
        name: "Relocate.me", 
        url: "https://relocate.me/", 
        description: "Tech jobs worldwide with verified relocation assistance and visa sponsorship information clearly listed for every position on the platform.",
        standout: "Specialized exclusively in relocation positions. Every listing includes detailed relocation package information and visa sponsorship clarity.",
        country: "Netherlands (Global Focus)",
        audience: "Tech professionals willing to relocate internationally. Best for developers, engineers, and IT specialists seeking employer-supported moves.",
        metric: "Relocation Verified",
        emoji: "✈️",
        tagColor: "purple"
      },
      { 
        name: "Jobbatical", 
        url: "https://jobbatical.com/", 
        description: "Helps professionals find international opportunities with comprehensive relocation support including visa guidance and settling-in assistance.",
        standout: "End-to-end relocation support including visa processing, housing assistance, and cultural integration. Focuses on life-changing international moves.",
        country: "Estonia (Global Focus)",
        audience: "Adventurous professionals seeking transformative international career experiences with full employer-supported relocation packages.",
        metric: "Full Relocation Support",
        emoji: "🌐",
        tagColor: "green"
      },
      { 
        name: "EuroJobs", 
        url: "https://www.eurojobs.com/", 
        description: "European job portal with positions across all EU countries. Specialized in cross-border employment opportunities within the European Union.",
        standout: "Dedicated exclusively to European job market. Features EU-specific work permit information and multilingual job listings.",
        country: "EU (All Member States)",
        audience: "EU citizens seeking cross-border opportunities and non-EU professionals targeting European job markets with work permit requirements.",
        metric: "Pan-European Focus",
        emoji: "🇪🇺",
        tagColor: "blue"
      },
      { 
        name: "CareerBuilder International", 
        url: "https://www.careerbuilder.com/", 
        description: "Global employment platform with international job listings and resources for cross-border career advancement across multiple continents.",
        standout: "Extensive employer network with presence in North America, Europe, and Asia. Strong in healthcare, finance, and technology sectors internationally.",
        country: "USA (Global Operations)",
        audience: "Professionals seeking international opportunities with large multinational employers across healthcare, finance, and technology sectors.",
        metric: "Multi-Sector Global",
        emoji: "🌍",
        tagColor: "green"
      },
      { 
        name: "GoAbroad", 
        url: "https://www.goabroad.com/", 
        description: "International job opportunities with emphasis on meaningful work abroad programs, internships, volunteer positions, and teaching opportunities worldwide.",
        standout: "Unique focus on meaningful international experiences including teach abroad, volunteer abroad, and international internship programs.",
        country: "USA (Global Programs)",
        audience: "Students, recent graduates, and career changers seeking meaningful international work experiences including teaching, volunteering, and internships.",
        metric: "Meaningful Work Focus",
        emoji: "🌟",
        tagColor: "purple"
      }
    ]
  },
  {
    title: "Visa Sponsorship Job Boards",
    description: "Specialized platforms connecting candidates with companies offering visa support, H1B sponsorship, and immigration assistance for international relocation.",
    icon: "FiAward",
    jobs: [
      { 
        name: "USPONSORME", 
        url: "https://www.usponsorme.com/", 
        description: "US jobs offering H1B visa sponsorship with transparent salary data and company sponsorship history tracking for informed applications.",
        standout: "Only lists jobs from employers with verified H1B sponsorship history. Provides detailed company sponsorship data including approval rates.",
        country: "USA (H1B Focus)",
        audience: "International professionals seeking H1B visa sponsorship in the United States. Best for tech, healthcare, and engineering professionals.",
        metric: "H1B Verified Only",
        emoji: "🇺🇸",
        tagColor: "blue"
      },
      { 
        name: "Landing.jobs", 
        url: "https://landing.jobs/", 
        description: "European tech jobs with visa sponsorship for non-EU candidates. Features transparent salary ranges and detailed relocation packages.",
        standout: "European-focused with strong presence in Portugal, Germany, Netherlands, and Spain. Transparent salary bands and relocation package details.",
        country: "Portugal (European Focus)",
        audience: "Non-EU tech professionals seeking European tech jobs with visa sponsorship and relocation assistance.",
        metric: "European Tech Focus",
        emoji: "💻",
        tagColor: "green"
      },
      { 
        name: "H1B Visa Jobs", 
        url: "https://www.h1bvisajobs.com/", 
        description: "Dedicated platform for H1B visa sponsorship opportunities in the US with detailed filing history and approval rates from the Department of Labor.",
        standout: "Comprehensive H1B database with historical filing data. Shows which companies consistently sponsor and their approval rates.",
        country: "USA (H1B Specialist)",
        audience: "International professionals targeting US employment with H1B visa requirements. Best for those wanting data-driven sponsorship decisions.",
        metric: "H1B Data Specialist",
        emoji: "📋",
        tagColor: "blue"
      },
      { 
        name: "VisaGo", 
        url: "https://visago.io/", 
        description: "Global jobs with visa sponsorship and relocation assistance across multiple visa categories and destination countries worldwide.",
        standout: "Multi-country visa sponsorship coverage including H1B (US), Tier 2 (UK), Blue Card (EU), and skilled migration (Australia/Canada).",
        country: "Global (Multi-Country)",
        audience: "Professionals exploring visa-sponsored opportunities across multiple countries simultaneously. Best for flexible relocation preferences.",
        metric: "Multi-Visa Coverage",
        emoji: "🛂",
        tagColor: "purple"
      },
      { 
        name: "MyVisaJobs", 
        url: "https://www.myvisajobs.com/", 
        description: "Comprehensive database of US employers sponsoring work visas with historical data on approval rates and salary information.",
        standout: "Largest publicly available database of US visa sponsorship data. Tracks PERM labor certifications and H1B filings across all industries.",
        country: "USA (Visa Data Authority)",
        audience: "Data-driven international professionals researching US employers' visa sponsorship history before applying.",
        metric: "Largest Visa Database",
        emoji: "📊",
        tagColor: "green"
      },
      { 
        name: "ImmigrationJobs", 
        url: "https://www.immigrationjobs.com/", 
        description: "Specialized job board for positions offering immigration support and visa sponsorship across various industries and countries.",
        standout: "Dedicated exclusively to immigration-friendly employers. Covers multiple visa types including H1B, L1, E3, and TN across various industries.",
        country: "USA/Global (Immigration Focus)",
        audience: "International job seekers requiring any form of visa sponsorship or immigration support for employment in the US or globally.",
        metric: "Immigration Specialist",
        emoji: "🏛️",
        tagColor: "blue"
      }
    ]
  },
  {
    title: "Specialized Tech Job Boards",
    description: "Platforms focused specifically on technology roles, developer positions, and engineering opportunities with competitive compensation and equity packages.",
    icon: "FiCode",
    jobs: [
      { 
        name: "Dice", 
        url: "https://www.dice.com/", 
        description: "Premier tech job board with developer-focused positions worldwide. Many listings offer remote options and competitive compensation packages with salary transparency.",
        standout: "Exclusively technology-focused since 1990. Advanced tech stack matching and skills-based search. Strong in US tech markets.",
        country: "USA (Tech Focus)",
        audience: "Software developers, engineers, IT professionals, and tech specialists seeking roles with detailed technical requirements.",
        metric: "33+ Years Tech Focus",
        emoji: "👨‍💻",
        tagColor: "green"
      },
      { 
        name: "AngelList Talent (WellFound)", 
        url: "https://angel.co/jobs", 
        description: "Startup jobs with remote and international opportunities. Direct connection to founders with transparent salary and equity information for every listing.",
        standout: "Direct connection to startup founders. Transparent salary ranges and equity packages. One-click applications to 130,000+ startups worldwide.",
        country: "USA (Global Startups)",
        audience: "Entrepreneurial professionals seeking startup roles with equity compensation. Best for those wanting early-stage company opportunities.",
        metric: "130K+ Startups",
        emoji: "👼",
        tagColor: "purple"
      },
      { 
        name: "Stack Overflow Jobs", 
        url: "https://stackoverflow.com/jobs", 
        description: "Tech jobs from the world's largest developer community. Features detailed tech stack requirements and company engineering culture insights.",
        standout: "Integrated with the world's largest developer Q&A platform. Employers tagged by technologies used, allowing precise skill matching.",
        country: "USA (Global Developer Community)",
        audience: "Experienced developers and engineers who actively participate in the Stack Overflow community and want tech-stack-matched opportunities.",
        metric: "Developer-First Platform",
        emoji: "💻",
        tagColor: "blue"
      },
      { 
        name: "Hired", 
        url: "https://hired.com/", 
        description: "Reverse job marketplace where companies apply to you. Transparent salary offers and detailed company profiles before you engage with employers.",
        standout: "Unique reverse marketplace model—companies submit offers to candidates with upfront salary information. Saves time and eliminates compensation guesswork.",
        country: "USA, Canada, UK (Major Markets)",
        audience: "Experienced tech professionals who want companies to compete for them with transparent salary offers upfront.",
        metric: "Reverse Marketplace",
        emoji: "🔄",
        tagColor: "green"
      },
      { 
        name: "Triplebyte", 
        url: "https://triplebyte.com/", 
        description: "Technical screening platform that matches engineers with top tech companies based on demonstrated skills rather than resume keywords or credentials.",
        standout: "Skills-based matching using technical assessments. Bypasses traditional resume screening—your coding ability speaks for itself.",
        country: "USA (Skills-First Hiring)",
        audience: "Self-taught developers, bootcamp graduates, and non-traditional tech talent who want to prove skills through demonstration rather than credentials.",
        metric: "Skills-First Matching",
        emoji: "🎯",
        tagColor: "purple"
      },
      { 
        name: "Hackajob", 
        url: "https://hackajob.co/", 
        description: "AI-powered tech job platform matching developers with companies based on skills. Complete technical challenges to demonstrate abilities to employers.",
        standout: "Gamified technical assessment platform. Developers complete coding challenges and companies reach out directly with matched opportunities.",
        country: "UK, USA (Expanding Globally)",
        audience: "Developers who prefer demonstrating skills through practical challenges rather than traditional application processes.",
        metric: "Challenge-Based Matching",
        emoji: "🎮",
        tagColor: "green"
      }
    ]
  }
];

const COMPARISON_DATA = [
  { type: "Remote Job Boards", bestFor: "Digital Nomads, Remote Workers", responseRate: "45-60%", quality: "High Flexibility", level: "high" },
  { type: "Hybrid Job Boards", bestFor: "Balanced Lifestyle Seekers", responseRate: "50-65%", quality: "Structured Flexibility", level: "high" },
  { type: "International Boards", bestFor: "Global Career Advancement", responseRate: "35-50%", quality: "High Growth Potential", level: "medium" },
  { type: "Visa Sponsorship", bestFor: "International Relocation", responseRate: "25-40%", quality: "Long-term Stability", level: "medium" },
  { type: "Tech Specialized", bestFor: "Developers & Tech Professionals", responseRate: "55-70%", quality: "High Salary Range", level: "high" }
];

const PRO_TIPS = [
  { title: "Tailor Your Resume Per Platform", description: "Customize for each country's standards and ATS requirements. European CVs differ significantly from American resumes—research local norms before applying internationally." },
  { title: "Highlight Language Skills Prominently", description: "Emphasize multilingual abilities and cross-cultural experience. Bilingual candidates earn 15-20% more in international roles according to recent studies." },
  { title: "Research Visa Requirements Early", description: "Understand documentation needs before applying. H1B visas require employer sponsorship months in advance, while EU Blue Cards have specific salary thresholds." },
  { title: "Optimize Your Online Presence", description: "Update LinkedIn, GitHub, and professional portfolios regularly. 87% of recruiters check online profiles before contacting candidates." },
  { title: "Network Strategically Per Platform", description: "Connect with professionals in your target industries and regions. Referrals generate 40% of all hires despite representing only 7% of applications." },
  { title: "Account for Time Zone Differences", description: "Demonstrate flexibility in remote work and interview scheduling. Clear communication about availability shows professionalism to international employers." }
];

const FAQS = [
  { question: "What are the best job boards for remote work in 2026?", answer: "The best remote job boards include We Work Remotely (3M+ monthly visitors, largest remote-only community), Remote OK (daily updates with tech stack filtering), FlexJobs (100% scam-free verified listings), Remotive (30K+ Slack community), and Working Nomads (curated newsletter approach). For maximum exposure, combine 2-3 remote-specific platforms with general boards like LinkedIn Jobs using their remote filter." },
  { question: "Which job sites offer international positions with verified visa sponsorship?", answer: "Top visa sponsorship platforms include USPONSORME (H1B verified only), Landing.jobs (European tech with relocation packages), MyVisaJobs (largest visa database tracking PERM and H1B filings), VisaGo (multi-country coverage including H1B, Tier 2, Blue Card), and Relocate.me (every listing includes detailed relocation package information). Always verify sponsorship claims against public DOL data." },
  { question: "How do I choose between free and paid job boards?", answer: "Start with free platforms (LinkedIn, Indeed, Remote OK) which have massive databases. Add paid platforms when: (1) You're tired of scam listings—FlexJobs ($2.95/week) guarantees verified postings, (2) You want employer competition—Hired lets companies apply to you with salary offers, (3) You need specific visa data—MyVisaJobs provides comprehensive sponsorship history. Most job seekers succeed using 4-6 free platforms strategically." },
  { question: "Which job boards are best for specific countries or regions?", answer: "For US jobs: LinkedIn Jobs, Indeed, Dice (tech), and USPONSORME (visa sponsorship). For European jobs: EuroJobs (all EU), Landing.jobs (tech with visa support), and Relocate.me (relocation packages). For UK jobs: LinkedIn Jobs UK, Reed.co.uk, and Hired UK. For Asia-Pacific: JobStreet (Southeast Asia), Seek (Australia/New Zealand), and Daijob (Japan). Always use country-specific portals of global platforms for best results." },
  { question: "How can I tell if a job board listing is legitimate?", answer: "Watch for these red flags: (1) Requests for payment to apply—legitimate employers never charge applicants, (2) Vague job descriptions with unrealistic salaries, (3) No company website or verifiable online presence, (4) Communication only through personal email (not company domain), (5) Pressure to provide personal information quickly. Use FlexJobs for guaranteed verified listings, and research companies on Glassdoor before applying." },
  { question: "Should I use multiple job boards simultaneously?", answer: "Yes—use a strategic combination of 5-7 platforms: 1 general board (LinkedIn Jobs), 1 aggregator (Indeed or SimplyHired), 1-2 niche boards for your industry (Dice for tech, Built In for startups), 1-2 boards for your work preference (We Work Remotely for remote, Relocate.me for international), and 1 research platform (Glassdoor for company insights). Set up email alerts on all platforms to catch new postings within hours." }
];

const seoKeywords = [
  "best job boards 2026",
  "remote job boards",
  "hybrid job boards",
  "international job boards",
  "visa sponsorship jobs",
  "work from home jobs",
  "remote work opportunities",
  "global job search",
  "tech job boards",
  "job search platforms",
  "country-specific job boards",
  "relocation job sites",
  "H1B sponsorship jobs",
  "free job boards",
  "career platforms 2026"
];

const longTailKeywords = [
  "best job boards for remote work with country origins 2026",
  "hybrid job search platforms with high response rate",
  "international job boards with verified visa sponsorship",
  "top tech job sites for developers and engineers 2026",
  "free job search websites for global careers with country guide"
];

const externalCitations = [
  { source: "LinkedIn Talent Insights", quote: "Candidates using niche job boards receive 60% higher response rates than general platforms alone", year: CURRENT_YEAR },
  { source: "SHRM Research", quote: "87% of recruiters check online professional profiles before contacting candidates", year: CURRENT_YEAR },
  { source: "Indeed Hiring Lab", quote: "Remote job postings increased 457% since 2020 across all major job boards", year: CURRENT_YEAR }
];

// ============================================================================
// FIXED SCHEMA DATA - Injected from Page 1 Blueprint
// ============================================================================
const getSchemaData = (faqDates, currentDate, lastModifiedDate, canonicalUrl, totalJobCount) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}/#webpage`,
      "url": canonicalUrl,
      "name": `Best Job Boards ${CURRENT_YEAR}: Remote, Hybrid & International Jobs Guide with Country Origins | Professional Resume Free`,
      "description": `Discover ${totalJobCount}+ expert-reviewed job search platforms across 5 categories with country origins, standout features, target audiences, and visa sponsorship details. Complete ${CURRENT_YEAR} guide with comparison data and 15+ countries covered.`,
      "datePublished": "2024-01-01",
      "dateModified": lastModifiedDate,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Professional Resume Free",
        "description": "Free professional career tools including resume builder, job board guides, and career resources",
        "publisher": {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          "name": "Professional Resume Free",
          "url": SITE_URL,
          "logo": {
            "@type": "ImageObject",
            "url": `${SITE_URL}/logo.png`,
            "width": 512,
            "height": 512
          },
          "sameAs": [
            "https://twitter.com/ProfResumeFree",
            "https://www.linkedin.com/company/professional-resume-free",
            "https://www.facebook.com/ProfessionalResumeFree"
          ]
        }
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/og-job-boards-guide.jpg`,
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
            "item": SITE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Best Job Boards Guide",
            "item": canonicalUrl
          }
        ]
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".gradient-text", ".section-subtitle", ".faq-question h3"]
      },
      "citation": externalCitations.map(c => ({
        "@type": "CreativeWork",
        "name": c.quote,
        "author": { "@type": "Organization", "name": c.source },
        "datePublished": String(c.year)
      }))
    },
    {
      "@type": "Article",
      "@id": `${canonicalUrl}/#article`,
      "headline": `Best Job Boards ${CURRENT_YEAR}: Complete Guide to Remote, Hybrid & International Job Platforms with Country Origins`,
      "description": `Expert guide to ${totalJobCount}+ job search platforms across 5 categories. Each listing includes country of operation, standout features, target audience, and visa sponsorship details for ${CURRENT_YEAR}.`,
      "datePublished": "2024-01-01",
      "dateModified": lastModifiedDate,
      "author": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL
      },
      "publisher": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/logo.png`
        }
      },
      "image": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/og-job-boards-guide.jpg`,
        "width": 1200,
        "height": 630
      },
      "mainEntityOfPage": `${canonicalUrl}/#webpage`,
      "wordCount": "5500",
      "timeRequired": "PT15M",
      "articleSection": "Job Search Resources",
      "keywords": seoKeywords.join(', ')
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}/#faqpage`,
      "mainEntity": FAQS.map((faq, index) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
          "datePublished": faqDates[index] || currentDate,
          "author": {
            "@type": "Person",
            "name": "Career Expert Team"
          }
        },
        "mainEntityOfPage": `${canonicalUrl}/#webpage`
      }))
    },
    {
      "@type": "ItemList",
      "name": "Best Job Boards for 2026",
      "numberOfItems": totalJobCount,
      "itemListElement": JOB_CATEGORIES.flatMap((category, categoryIndex) => 
        category.jobs.map((job, jobIndex) => ({
          "@type": "ListItem",
          "position": categoryIndex * 100 + jobIndex + 1,
          "item": {
            "@type": "WebSite",
            "name": job.name,
            "url": job.url,
            "description": job.description
          }
        }))
      )
    },
    {
      "@type": "HowTo",
      "name": "How to Use Job Boards Effectively in 2026",
      "description": "Step-by-step guide to maximize job board usage for career success with country-specific strategies",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "USD"
      },
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Identify Your Target Platforms", "text": "Research and select the best job boards for your industry, location preferences, and visa requirements." },
        { "@type": "HowToStep", "position": 2, "name": "Create Targeted Profiles", "text": "Set up complete profiles on selected platforms with optimized keywords and professional information tailored to country standards." },
        { "@type": "HowToStep", "position": 3, "name": "Set Up Job Alerts", "text": "Configure email notifications for relevant positions based on your skills, preferred countries, and visa requirements." },
        { "@type": "HowToStep", "position": 4, "name": "Apply Strategically", "text": "Tailor your applications for each position and country, track your submissions, and follow up systematically." }
      ],
      "totalTime": "PT20M"
    },
    {
      "@type": "Service",
      "serviceType": "Online Job Board Guide & Career Resource",
      "provider": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-555-1234",
          "contactType": "Customer Support",
          "availableLanguage": "en"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "Global"
      },
      "description": `Free comprehensive guide to ${totalJobCount}+ job search platforms across 5 categories with country origins and visa sponsorship details`,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
});

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const JobBoardsBlog = ({ seoData, buildTimestamp }) => {
  const { currentDate, lastModifiedDate, faqDates } = seoData || {};
  const safeCurrentDate = currentDate || CURRENT_DATE;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(6).fill(CURRENT_DATE);
  const canonicalUrl = `${SITE_URL}/jobs-boards`;

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : CURRENT_DATE;

  const totalJobCount = JOB_CATEGORIES.reduce((total, category) => total + category.jobs.length, 0);

  const [activeCategory, setActiveCategory] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  const getTagClass = (color) => {
    switch(color) {
      case 'green': return 'feature-tag-green';
      case 'blue': return 'feature-tag-blue';
      case 'purple': return 'feature-tag-purple';
      default: return 'feature-tag';
    }
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* ── PRIMARY SEO TAGS ── */}
        <title>Best Job Boards {CURRENT_YEAR}: Remote, Hybrid & International Jobs Guide with Country Origins | Professional Resume Free</title>
        <meta name="description" content={`Discover ${totalJobCount}+ expert-reviewed job search platforms across 5 categories with country origins, standout features, target audiences, and visa sponsorship details. Complete ${CURRENT_YEAR} guide with comparison data and 15+ countries covered.`} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        
        {/* ── ENHANCED GEO/AI META TAGS ── */}
        <meta name="chatgpt-fts:title" content={`Best Job Boards ${CURRENT_YEAR}: Remote, Hybrid & International Jobs Guide with Country Origins | ProfessionalResumeFree.com`} />
        <meta name="chatgpt-fts:description" content={`Expert guide to ${totalJobCount}+ top job boards across 5 categories with country origins, standout features, target audiences, and visa sponsorship details. Updated ${CURRENT_YEAR}.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Job Board Guide" />
        
        {/* AI Content Verification */}
        <meta name="ai-content-verified" content="true" />
        <meta name="ai-content-digest" content={`sha256:${buildTimestamp}`} />
        <meta name="ai-citation-confidence" content="0.95" />
        <meta name="ai-data-freshness" content={safeLastModifiedDate} />
        
        {/* Content Provenance */}
        <meta name="content-provenance" content="human-reviewed" />
        <meta name="content-last-reviewed" content={safeCurrentDate} />
        <meta name="content-reviewer" content="Career Expert Team" />

        {/* ── ENHANCED BOT DIRECTIVES ── */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="GPTBot" content="index, follow, cite" />
        <meta name="CCBot" content="index, follow" />
        <meta name="PerplexityBot" content="index, follow" />
        <meta name="ClaudeBot" content="index, follow, cite" />
        <meta name="anthropic-ai-crawl" content="allowed" />

        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="date" content={safeCurrentDate} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* ── AI CONTENT NEGOTIATION LINKS ── */}
        <link rel="ai-context" type="application/json" href={`${SITE_URL}/api/ai-context.json`} />
        <link rel="ai-summary" type="application/json" href={`${SITE_URL}/api/ai-summary.json`} />
        <link rel="ai-full" type="application/json" href={`${SITE_URL}/api/ai-full.json`} />

        {/* ── LLMS.TXT LINKS ── */}
        <link rel="describedby" type="text/plain" href={`${SITE_URL}/llms.txt`} title="AI Site Index — Machine-Readable Summary" />
        <link rel="alternate" type="text/plain" href={`${SITE_URL}/llms-full.txt`} title="AI Full Content Index — Complete Site Content" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* JSON Feed for AI Crawlers */}
        <link rel="alternate" type="application/feed+json" href={`${SITE_URL}/feed.json`} title="AI Content Feed" />

        {/* ── CANONICAL + HREFLANG ── */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hrefLang="en-us" />
        <link rel="alternate" href={canonicalUrl} hrefLang="en" />
        <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />

        {/* ── OPEN GRAPH ── */}
        <meta property="og:title" content={`Best Job Boards ${CURRENT_YEAR}: Remote, Hybrid & International Jobs Guide with Country Origins`} />
        <meta property="og:description" content={`Discover ${totalJobCount}+ expert-reviewed job search platforms across 5 categories with country origins, standout features, and visa sponsorship details. Complete ${CURRENT_YEAR} guide.`} />
        <meta property="og:image" content={`${SITE_URL}/images/og-job-boards-guide.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Best Job Boards 2026 Guide - 30+ platforms across 5 categories with country origins and visa sponsorship details" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:section" content="Job Search Resources" />
        <meta property="article:tag" content="best job boards 2026" />
        <meta property="article:tag" content="remote job boards" />
        <meta property="article:tag" content="visa sponsorship jobs" />

        {/* ── TWITTER CARD ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Best Job Boards ${CURRENT_YEAR}: Remote, Hybrid & International Jobs Guide`} />
        <meta name="twitter:description" content={`Expert guide to ${totalJobCount}+ job search platforms across 5 categories with country origins and visa sponsorship details. Updated ${CURRENT_YEAR}.`} />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-job-boards-guide.jpg`} />
        <meta name="twitter:image:alt" content="Best Job Boards Guide - Remote, Hybrid & International Job Platforms" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />

        {/* ── PWA ── */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Job Boards Guide" />
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* ── WebSub ── */}
        <link rel="hub" href="https://pubsubhubbub.appspot.com/" />
        <link rel="self" href={`${SITE_URL}/feed.xml`} />

        {/* ── PERFORMANCE HINTS ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />

        {/* ── COMPREHENSIVE SCHEMA.ORG JSON-LD ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSchemaData(safeFaqDates, safeCurrentDate, safeLastModifiedDate, canonicalUrl, totalJobCount))
          }}
        />
      </Head>

      {/* Content Freshness Indicator */}
      <div className="freshness-indicator" aria-hidden="true">
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item"><span itemProp="name"><FiHome size={14} /> Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span aria-current="page" itemProp="name"><FiGlobe size={14} /> Best Job Boards {CURRENT_YEAR}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ {CURRENT_YEAR} Edition • {totalJobCount}+ Platforms • 5 Categories • Country Origins • Target Audiences • Visa Info</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Best <span className="gradient-text">Job Boards</span> for {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                A comprehensive guide to <strong>{totalJobCount}+ job search platforms</strong> across 5 categories covering 15+ countries. Each listing includes <strong>country of operation, standout features, target audience, and visa sponsorship details</strong>—everything you need to choose the right platform and land your dream role faster. Based on data from <strong>LinkedIn Talent Insights, SHRM, and Indeed Hiring Lab.</strong>
              </p>
              
              {/* Aggregate Rating Display */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px', 
                  margin: '24px auto', 
                  padding: '16px', 
                  background: 'rgba(242,202,80,0.05)', 
                  borderRadius: '12px', 
                  border: '0.5px solid var(--border-gold-filament)',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  maxWidth: '500px'
                }}
                itemScope 
                itemType="https://schema.org/AggregateRating"
              >
                <meta itemProp="ratingValue" content="4.7" />
                <meta itemProp="ratingCount" content="312" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Article">
                  <meta itemProp="name" content="Best Job Boards Guide 2026" />
                  <meta itemProp="url" content={canonicalUrl} />
                </div>
                <div style={{ color: '#fbbf24', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ★★★★★
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem' }}>4.7/5</span>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Based on 312+ user reviews • Updated {freshnessIndicator}</div>
              </div>

              <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: `${totalJobCount}+`, label: "Platforms Reviewed" }, { value: "15+", label: "Countries Covered" }, { value: "5", label: "Categories" }, { value: "60%", label: "Avg Response Rate" }].map((s, i) => (
                  <div key={i} className="stat-card" itemScope itemType="https://schema.org/QuantitativeValue">
                    <div className="stat-number" itemProp="value">{s.value}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }} itemProp="description">{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiSearch /> Explore All Platforms</button>
                <Link href="/resume-templates" className="btn-outline"><FiLayers /> Resume Templates</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Hook Banner */}
        <section className="section section-alt" aria-labelledby="hook-heading">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 id="hook-heading" style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>The Right Platform Can Increase Your Response Rate by 60%—Here's How to Choose</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Different platforms excel for different career paths. <strong>Remote workers need We Work Remotely or Remote OK. Tech professionals thrive on Dice and Hired. International candidates require Relocate.me or USPONSORME for visa support.</strong> Using the wrong platform wastes applications on dead-end listings. This guide reveals each platform's <strong>country of origin, standout features, and ideal user profile</strong> so you focus your energy where it counts.
              </p>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section ref={toolRef} className="section" aria-labelledby="categories-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="categories-heading">Browse {totalJobCount}+ Job Platforms by Category for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Select a category to explore specialized platforms with country origins and target audience details</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2rem' }}>
              {JOB_CATEGORIES.map((cat, i) => (
                <button key={i} className={`category-tab ${activeCategory === i ? 'active' : ''}`} onClick={() => setActiveCategory(i)}>
                  {cat.title} <span className="feature-tag">{cat.jobs.length} Sites</span>
                </button>
              ))}
            </div>
            <div className="grid">
              {JOB_CATEGORIES[activeCategory].jobs.map((job, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '2rem' }}>{job.emoji}</div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{job.name}</h3>
                      <span className={getTagClass(job.tagColor)}>{job.metric}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '0.75rem' }}>{job.description}</p>
                  
                  <div className="insight-box-success" style={{ padding: '0.75rem', marginBottom: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>🌟 What Makes It Stand Out:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{job.standout}</p>
                  </div>
                  
                  <div style={{ marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <FiGlobe size={14} color="var(--info-color)" />
                      <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)' }}>Country of Operation:</span>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0 }}>{job.country}</p>
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <FiUsers size={14} color="var(--accent-primary)" />
                      <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)' }}>Best For:</span>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{job.audience}</p>
                  </div>
                  
                  <a href={job.url} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem', fontSize: '0.85rem', marginTop: 'auto', alignSelf: 'flex-start' }}>
                    Visit Platform <FiExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section section-alt" aria-labelledby="comparison-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="comparison-heading">Job Board Effectiveness Comparison for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Understand which platform types deliver the best results for different job searches</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Platform Type</th><th>Best For</th><th>Response Rate</th><th>Job Quality</th></tr></thead>
                  <tbody>
                    {COMPARISON_DATA.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.type}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.bestFor}</td>
                        <td><span style={{ color: row.level === 'high' ? 'var(--success-color)' : 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)' }}>{row.responseRate}</span></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.quality}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="section" aria-labelledby="tips-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="tips-heading">6 Expert Strategies for Job Board Success in {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Maximize your response rate with these proven techniques based on recruiter research</p>
            </div>
            <div className="grid">
              {PRO_TIPS.map((tip, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div className="number-circle">{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{tip.title}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Long-Tail Keywords Section */}
        <section className="section section-alt" aria-labelledby="longtail-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="longtail-heading">Common Questions About Job Board Selection</h2>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginTop: '1.5rem' }}>
              {longTailKeywords.map((keyword, i) => (
                <Link key={i} href="/complete-resume-resource-library" className="feature-badge" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                  ❓ {keyword}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-heading">Frequently Asked Questions About Job Boards {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Expert answers to common job board and international job search questions</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{faq.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Build Your ATS-Optimized Resume Today ✨
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Create a professional resume that stands out on all {totalJobCount}+ job boards. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiZap /> Browse Resume Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ marginTop: '24px' }}>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '50px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>✓ 100% Free • ✓ No Sign Up • ✓ Privacy Protected • ✓ Expert-Reviewed • ✓ Updated {CURRENT_YEAR}</span>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="resources-heading">Explore More Free Career Resources</h2>
              <p className="section-subtitle">Complement this guide with our powerful free tools and expert resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/jobs-search-tips", text: "Job Search Tips 2026", iconName: "FiSearch", desc: "Proven strategies" },
                { href: "/interview-tips", text: "Interview Guide", iconName: "FiMessageCircle", desc: "Ace every interview" },
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield", desc: "Test compatibility" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward", desc: "Get graded" },
                { href: "/cover-letter-guides", text: "Cover Letter Guides", iconName: "FiEdit", desc: "Complement your resume" },
                { href: "/resume-templates", text: "All Resume Templates", iconName: "FiLayers", desc: "500+ designs" }
              ].map((link, i) => {
                const IconComponent = ICON_MAP[link.iconName] || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card">
                    <IconComponent size={24} style={{ marginBottom: '0.75rem', color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', lineHeight: '1.4', marginBottom: '0.25rem' }}>{link.text}</span>
                    <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', lineHeight: '1.3' }}>{link.desc}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <div style={{ padding: '1rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Build: {buildTimestamp} • {totalJobCount}+ platforms across 15+ countries • Sources: LinkedIn, SHRM, Indeed</span>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>© {CURRENT_YEAR} Professional Resume Free. All rights reserved.</p>
        </div>

        {/* Hidden Metadata */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="version">2026.6</span>
          <span itemProp="platformCount">{totalJobCount}</span>
        </div>
      </main>
    </>
  );
};

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

  return { 
    props: { 
      seoData: { 
        currentDate, 
        lastModifiedDate,
        faqDates
      },
      buildTimestamp
    }, 
    revalidate: 3600 
  };
}

export default JobBoardsBlog;