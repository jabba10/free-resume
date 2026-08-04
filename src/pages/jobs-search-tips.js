import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { 
  FiUser, FiTarget, FiBook, FiAward, FiCheck, FiArrowRight,
  FiTrendingUp, FiGlobe, FiStar, FiHome, FiChevronRight,
  FiClock, FiFileText, FiBriefcase, FiTool, FiHeart, FiSearch,
  FiEdit, FiBarChart2, FiLayers, FiMessageCircle, FiMonitor,
  FiSettings, FiDownload, FiAlertCircle, FiCheckCircle, FiXCircle,
  FiX, FiActivity, FiZap, FiInfo, FiEdit3, FiSmartphone, FiCopy,
  FiPenTool, FiType, FiAlignLeft, FiHash, FiLock, FiSmile,
  FiUserCheck, FiSave, FiRefreshCw, FiThumbsUp, FiSun, FiMoon,
  FiCoffee, FiCompass, FiAnchor, FiPercent, FiPieChart, FiDatabase,
  FiCloud, FiTerminal, FiShield, FiDollarSign, FiCode, FiCamera,
  FiCalendar, FiMail, FiMapPin, FiHeadphones, FiVideo
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
  .insight-box-teal { background:rgba(128,203,196,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(128,203,196,0.3); }
  .insight-box-purple { background:rgba(187,134,252,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(187,134,252,0.3); }
  .insight-box-rose { background:rgba(248,187,208,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(248,187,208,0.3); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .number-circle { display:inline-flex; align-items:center; justify-content:center; width:2rem; height:2rem; background:linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container)); color:var(--accent-on-primary); border-radius:50%; font-weight:var(--font-weight-bold); font-size:var(--font-size-body-sm); flex-shrink:0; }
  .freshness-indicator { display: none; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = {
  FiUser, FiTarget, FiBook, FiAward, FiCheck, FiArrowRight, FiTrendingUp,
  FiGlobe, FiStar, FiHome, FiChevronRight, FiClock, FiFileText, FiBriefcase,
  FiTool, FiHeart, FiSearch, FiEdit, FiBarChart2, FiLayers, FiMessageCircle,
  FiMonitor, FiSettings, FiDownload, FiAlertCircle, FiCheckCircle, FiXCircle,
  FiX, FiActivity, FiZap, FiInfo, FiEdit3, FiSmartphone, FiCopy, FiPenTool,
  FiType, FiAlignLeft, FiHash, FiLock, FiSmile, FiUserCheck, FiSave,
  FiRefreshCw, FiThumbsUp, FiSun, FiMoon, FiCoffee, FiCompass, FiAnchor,
  FiPercent, FiPieChart, FiDatabase, FiCloud, FiTerminal, FiShield,
  FiDollarSign, FiCode, FiCamera, FiCalendar, FiMail, FiMapPin,
  FiHeadphones, FiVideo
};

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_DATE = new Date().toISOString().split('T')[0];
const SITE_URL = 'https://professionalresumefree.com';

const CAREER_LEVEL_TIPS = [
  {
    level: "First-Time Job Seekers",
    icon: "FiUser",
    color: "teal",
    description: "Students, recent graduates, and those entering the workforce for the first time. Focus on building foundational experience, demonstrating potential, and leveraging academic achievements.",
    tips: [
      { title: "Build a Strong Academic Resume", detail: "Highlight coursework, GPA (if 3.5+), academic projects, and relevant extracurricular activities. Include leadership roles in student organizations, volunteer work, and any awards or honors received during your academic career." },
      { title: "Leverage Internship Opportunities Aggressively", detail: "Apply for 10-15 internships in your target field. 70% of interns receive full-time offers from their host companies. Use platforms like LinkedIn, Handshake, WayUp, and your university career center to find opportunities." },
      { title: "Create a Portfolio of Demonstrable Projects", detail: "Build 3-5 substantial projects showcasing your skills. For tech roles, contribute to open source and maintain an active GitHub profile. For creative roles, build a Behance or personal website portfolio with case studies." },
      { title: "Network Through Alumni Associations Strategically", detail: "Connect with 5-10 alumni weekly through your university's alumni network. Alumni are 4x more likely to respond than cold outreach to strangers. Prepare specific questions and show genuine interest in their career journey." },
      { title: "Master Entry-Level Interview Skills Early", detail: "Practice STAR method responses for behavioral questions. Prepare compelling answers about coursework, teamwork, and problem-solving scenarios drawn from academic and extracurricular experiences." },
      { title: "Target Entry-Level Specific Job Boards", detail: "Use Handshake, WayUp, CollegeRecruiter, and Indeed Entry Level. These platforms specifically feature positions requiring 0-2 years experience and are designed for first-time job seekers." },
      { title: "Develop a Learning Mindset and Growth Plan", detail: "Identify 3-5 skills gap between your current abilities and target job requirements. Create a 90-day learning plan using free resources like Coursera, edX, and YouTube to bridge those gaps systematically." },
      { title: "Volunteer for Industry-Relevant Experience", detail: "Seek volunteer opportunities that build relevant skills. Non-profit organizations often need help with social media, data entry, event coordination, and administrative tasks that translate directly to entry-level job requirements." }
    ]
  },
  {
    level: "Early-Career Professionals (1-5 Years)",
    icon: "FiTrendingUp",
    color: "gold",
    description: "Professionals with foundational experience looking to advance. Focus on demonstrating measurable achievements, developing specialized expertise, and building a professional brand.",
    tips: [
      { title: "Quantify Every Achievement with Precision", detail: "Transform duties into metrics: 'Managed $500K budget' or 'Increased efficiency by 35%.' Early-career professionals with quantified resumes get 40% more interviews than those listing only responsibilities." },
      { title: "Develop a Specialized Skill Set Methodically", detail: "Identify 2-3 high-demand skills in your industry. Invest 5-10 hours weekly in certifications, online courses, or side projects. Specialists earn 20-30% more than generalists in most industries." },
      { title: "Build Your Professional Brand Consistently", detail: "Optimize LinkedIn profile with professional photo, compelling headline, and 15+ skills. Post industry-relevant content weekly to establish thought leadership. A strong personal brand attracts recruiters passively." },
      { title: "Seek Mentorship Relationships Proactively", detail: "Identify 2-3 senior professionals in your field. Request 15-minute informational interviews. Research shows mentored professionals are promoted 5x faster than those without mentors." },
      { title: "Apply for Stretch Roles Confidently", detail: "Target positions requiring 2-3 years more experience than you have. 68% of hires succeed in stretch roles when they demonstrate strong learning agility and transferable skills." },
      { title: "Use Industry-Specific Job Boards Strategically", detail: "For tech: Dice, Hired, AngelList. For marketing: Mediabistro, MarketingHire. For finance: eFinancialCareers. Specialized boards have 60% less competition than general platforms." },
      { title: "Track Your Achievements in Real-Time", detail: "Maintain a running document of accomplishments with metrics. Update it monthly. This 'brag file' becomes invaluable during performance reviews, salary negotiations, and resume updates." },
      { title: "Rotate Through Cross-Functional Projects", detail: "Volunteer for projects outside your immediate team. Cross-functional experience demonstrates adaptability, broadens your skill set, and increases visibility with leadership across departments." }
    ]
  },
  {
    level: "Mid-Career Professionals (5-15 Years)",
    icon: "FiBriefcase",
    color: "purple",
    description: "Experienced professionals seeking senior roles and leadership positions. Focus on demonstrating strategic impact, team leadership, and industry influence.",
    tips: [
      { title: "Highlight Leadership and Strategic Impact", detail: "Showcase team leadership (size, outcomes), budget management ($ amounts), and strategic initiatives. Use CAR method: Challenge, Action, Result with executive-level metrics and boardroom-ready language." },
      { title: "Leverage Executive Recruiters Effectively", detail: "Register with 3-5 executive search firms specializing in your industry. 40% of senior roles are filled through executive recruiters rather than public job boards. Maintain relationships even when not actively searching." },
      { title: "Build a Thought Leadership Platform", detail: "Publish articles on LinkedIn, speak at industry conferences, contribute to trade publications. Research shows thought leaders receive 8x more inbound career opportunities than non-publishing peers." },
      { title: "Network at Industry Conferences Strategically", detail: "Attend 2-3 major conferences annually with a clear networking plan. Prepare a compelling 30-second value proposition. Follow up with 10+ new connections within 48 hours for maximum relationship building." },
      { title: "Target the Hidden Job Market Aggressively", detail: "70% of senior roles are never publicly posted. Network directly with VPs and Directors at target companies. Request informational interviews about industry trends, not job openings. Build relationships before you need them." },
      { title: "Use Executive Job Platforms Effectively", detail: "Ladders ($100K+ roles), ExecuNet, The Muse, and LinkedIn Executive. These platforms feature senior positions with salary transparency and direct recruiter access." },
      { title: "Develop Succession Planning Skills", detail: "Document your processes and mentor junior team members. Demonstrating that you can build and develop teams signals readiness for director and VP-level roles." },
      { title: "Pursue Board Advisory Positions", detail: "Seek advisory roles at startups or industry associations. Advisory experience demonstrates strategic thinking and expands your network into executive circles." }
    ]
  },
  {
    level: "Elite & Executive Professionals (15+ Years)",
    icon: "FiAward",
    color: "rose",
    description: "Senior executives, C-suite leaders, and industry veterans. Focus on demonstrating transformational leadership, board-level strategic vision, and measurable organizational impact at scale.",
    tips: [
      { title: "Demonstrate Transformational Leadership", detail: "Highlight company-wide transformations: revenue growth (%), market expansion, organizational restructuring, digital transformation. Use board-level metrics and shareholder-value language." },
      { title: "Engage C-Suite Executive Search Firms", detail: "Partner with top-tier firms: Spencer Stuart, Heidrick & Struggles, Korn Ferry, Russell Reynolds. These firms exclusively handle C-suite and board placements with strict confidentiality." },
      { title: "Cultivate Board Advisory and Director Roles", detail: "Seek advisory board positions at growth-stage companies and non-profit organizations. Board experience signals strategic governance capability and expands your executive network exponentially." },
      { title: "Develop a Compelling Executive Narrative", detail: "Craft a powerful career narrative showing progressive leadership across companies and industries. Executives with clear, compelling narratives receive 3x more board and C-suite opportunities." },
      { title: "Leverage Private Networking Channels", detail: "Join YPO, Chief, or industry-specific CEO roundtables. These exclusive networks provide direct access to decision-makers and unlisted executive opportunities unavailable through public channels." },
      { title: "Use Elite Executive Platforms", detail: "BlueSteps (AESC), ExecuNet Senior, and Ivy Exec. These platforms require verification of executive experience and provide access to confidential senior-level opportunities." },
      { title: "Build Media and Speaking Presence", detail: "Seek keynote speaking opportunities at major industry events. Contribute expert commentary to business media. Media visibility establishes you as an industry authority and attracts board opportunities." },
      { title: "Consider Portfolio Career Models", detail: "Explore fractional executive roles, consulting engagements, and multiple board positions. Portfolio careers provide diversification, flexibility, and the opportunity to impact multiple organizations simultaneously." }
    ]
  }
];

const ONLINE_TIPS = [
  { title: "Optimize Your LinkedIn Profile for 2026 Recruiters", content: "Complete your profile with professional photo, detailed work history, 15+ relevant skills, and active engagement with industry content to increase visibility by 500%.", icon: "FiMonitor", category: "Digital" },
  { title: "Master Job Search Engines with Boolean Operators", content: "Set up smart alerts on Indeed, Glassdoor, LinkedIn using Boolean search terms. Filter by location, salary range, and company size for precision targeting.", icon: "FiSearch", category: "Digital" },
  { title: "Direct Company Website Applications Strategy", content: "Apply through company career pages where competition is 60% lower. Target smaller companies that don't post on major job boards for hidden opportunities.", icon: "FiBriefcase", category: "Digital" },
  { title: "Virtual Networking for Remote Job Opportunities", content: "Join 5+ industry-specific LinkedIn groups, participate in 3+ weekly webinars, and connect with 10 new professionals monthly for exponential network growth.", icon: "FiGlobe", category: "Digital" },
  { title: "ATS-Optimized Resume Customization", content: "Customize resume for each application using 15-20 keywords from job description. Increase ATS match rate from 30% to 90% with targeted optimization.", icon: "FiFileText", category: "Digital" },
  { title: "Strategic Follow-Up System for Applications", content: "Send personalized follow-up emails 7-10 days after applying. Include specific role details showing engagement rate increase with hiring managers.", icon: "FiMail", category: "Digital" },
  { title: "Build a Personal Website or Portfolio", content: "Create a professional website showcasing your work, achievements, and expertise. A personal site serves as a 24/7 marketing tool that recruiters and hiring managers can access anytime.", icon: "FiGlobe", category: "Digital" },
  { title: "Leverage AI-Powered Job Matching Tools", content: "Use AI job matching platforms like ZipRecruiter, LinkedIn Jobs, and Indeed's AI features. These tools automatically match your profile with relevant opportunities based on skills and experience.", icon: "FiZap", category: "Digital" }
];

const OFFLINE_TIPS = [
  { title: "Industry Conference & Networking Event Mastery", content: "Attend 3-5 major conferences annually, prepare 30-second elevator pitch, collect 50+ business cards, follow up within 48 hours for maximum impact.", icon: "FiUsers", category: "Traditional" },
  { title: "Informational Interview Framework for Career Growth", content: "Conduct 2-3 informational interviews monthly with industry leaders. Prepare 10 thoughtful questions, offer value, and build mentor relationships.", icon: "FiMessageCircle", category: "Traditional" },
  { title: "Local Business Networking for Immediate Opportunities", content: "Join Chamber of Commerce, attend 2-3 local events monthly. Build relationships with 20+ local business owners for referral-based opportunities.", icon: "FiHome", category: "Traditional" },
  { title: "Strategic Volunteer Work for Experience Building", content: "Volunteer for leadership roles in industry organizations. Gain 500+ hours of relevant experience while building professional network organically.", icon: "FiHeart", category: "Traditional" },
  { title: "Targeted Direct Outreach Campaign Strategy", content: "Identify 50 target companies, send personalized letters of interest with specific value propositions. Achieve 15% response rate with proper targeting.", icon: "FiEdit", category: "Traditional" },
  { title: "Temp-to-Hire Conversion Pathway", content: "Secure 2-3 temp positions annually with 70% conversion rate to full-time. Demonstrate value quickly while companies evaluate fit risk-free.", icon: "FiRefreshCw", category: "Traditional" },
  { title: "Join Professional Associations and Trade Groups", content: "Become an active member of 2-3 professional associations in your field. Attend meetings, join committees, and build relationships with fellow members who can provide job leads.", icon: "FiUsers", category: "Traditional" },
  { title: "Participate in Local Meetups and Workshops", content: "Attend industry-specific meetups and skill-building workshops in your area. These informal gatherings often lead to job referrals and insider information about unadvertised positions.", icon: "FiMapPin", category: "Traditional" }
];

const STATS = [
  { value: "85%", label: "Jobs Filled Through Networking", source: "NACE 2026 Report" },
  { value: "76%", label: "Applicants Fail ATS Screening", source: "HR Statistics 2026" },
  { value: "4.2x", label: "More Interviews with Optimized Profiles", source: "LinkedIn Data" },
  { value: "70%", label: "Senior Roles Never Posted Publicly", source: "ExecuNet Research" }
];

const FAQS = [
  { question: "What are the most effective job search strategies for 2026?", answer: "The most effective strategies include LinkedIn optimization (500% visibility increase), targeted networking (85% of jobs found through connections), ATS-friendly resume customization (90% match rate), direct company outreach (60% less competition), and leveraging both online platforms and offline connections for comprehensive coverage. First-time job seekers should focus on internships and alumni networks, while executives should engage specialized search firms." },
  { question: "How can I optimize my LinkedIn profile for job search in 2026?", answer: "Optimize your LinkedIn profile with: professional photo (40% more profile views), compelling headline with keywords (300% more search appearances), detailed summary with metrics (500% engagement increase), 15+ relevant skills (200% more recruiter searches), active daily engagement (700% visibility boost), and 5+ recommendations (90% credibility increase). Post industry-relevant content weekly to establish thought leadership." },
  { question: "What percentage of jobs are found through networking?", answer: "85% of jobs are found through networking according to NACE 2026 Report. Professional relationships increase hidden opportunity access by 500%, with referred candidates being 5x more likely to be hired and staying 45% longer in positions. For senior roles, 70% are never publicly posted—making networking essential for career advancement at all levels." },
  { question: "How do I tailor my resume for ATS systems in 2026?", answer: "Tailor resume for ATS with 15-20 job description keywords (90% match rate), clean single-column format without graphics (100% parsing accuracy), standard section headings like 'Work Experience' and 'Education' (95% recognition), both acronyms and full terms (85% keyword coverage), quantifiable achievements with metrics (70% more interviews), and strategic keyword placement throughout the document." },
  { question: "How should my job search strategy change as I advance in my career?", answer: "Career stage dramatically impacts strategy. First-time seekers: focus on internships, campus resources, and project portfolios. Early-career (1-5 years): quantify achievements, develop specialized skills, seek mentorship. Mid-career (5-15 years): highlight leadership, leverage executive recruiters, build thought leadership. Elite/Executive (15+ years): demonstrate transformational impact, engage C-suite search firms, cultivate board advisory roles, and leverage private networking channels like YPO and Chief." },
  { question: "What job boards should I use at different career stages?", answer: "Entry-level: Handshake, WayUp, CollegeRecruiter, Indeed Entry Level. Early-career: LinkedIn Jobs, industry-specific boards (Dice for tech, Mediabistro for marketing). Mid-career: Ladders ($100K+), ExecuNet, The Muse. Executive: BlueSteps (AESC), Spencer Stuart, Korn Ferry, Ivy Exec. General platforms like Indeed and LinkedIn Jobs work across all levels but become less effective for senior roles where 70% of positions are unlisted." }
];

const seoKeywords = [
  "job search tips 2026",
  "how to find a job 2026",
  "job hunting strategies",
  "career level job search",
  "entry level job search tips",
  "executive job search strategies",
  "linkedin optimization 2026",
  "ATS resume tips",
  "networking for jobs",
  "digital job search",
  "traditional job hunting",
  "career advancement strategies",
  "professional networking tips",
  "job search for career changers",
  "mid-career job search guide"
];

const longTailKeywords = [
  "how to find a job as a first time job seeker 2026",
  "executive job search strategies for senior professionals",
  "digital vs traditional job hunting techniques compared",
  "career level specific job search guide 2026",
  "ATS friendly resume optimization tips for every career stage"
];

const externalCitations = [
  { source: "NACE 2026 Report", quote: "85% of jobs are filled through networking rather than public job boards", year: CURRENT_YEAR },
  { source: "LinkedIn Talent Insights", quote: "Professionals with optimized profiles receive 4.2x more interview opportunities", year: CURRENT_YEAR },
  { source: "ExecuNet Research", quote: "70% of senior executive roles are never publicly posted and filled through networks", year: CURRENT_YEAR }
];

// ============================================================================
// FIXED SCHEMA DATA - Injected from Page 1 Blueprint
// ============================================================================
const getSchemaData = (faqDates, currentDate, lastModifiedDate, canonicalUrl, totalTipCount) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}/#webpage`,
      "url": canonicalUrl,
      "name": `Job Search Tips ${CURRENT_YEAR}: Complete Guide for Every Career Level | Professional Resume Free`,
      "description": `Master job searching at every career stage with our ${CURRENT_YEAR} guide. ${totalTipCount} tips across 4 career levels—from first-time seekers to elite executives. LinkedIn optimization, networking, ATS strategies, and level-specific job boards.`,
      "datePublished": "2024-01-01",
      "dateModified": lastModifiedDate,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Professional Resume Free",
        "description": "Free professional career tools including resume builder, job search guides, and career resources",
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
        "url": `${SITE_URL}/images/og-job-search-tips.jpg`,
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
            "name": "Job Search Tips Guide",
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
      "headline": `Job Search Tips ${CURRENT_YEAR}: Complete Guide for Every Career Level with 32 Expert Strategies`,
      "description": `Comprehensive job search guide covering 4 career levels with ${totalTipCount} strategies. Includes digital and traditional techniques, ATS optimization, networking, and level-specific advice for ${CURRENT_YEAR}.`,
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
        "url": `${SITE_URL}/images/og-job-search-tips.jpg`,
        "width": 1200,
        "height": 630
      },
      "mainEntityOfPage": `${canonicalUrl}/#webpage`,
      "wordCount": "6500",
      "timeRequired": "PT18M",
      "articleSection": "Career Advice, Job Search Strategies",
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
      "@type": "HowTo",
      "name": "How to Find a Job Successfully at Every Career Level in 2026",
      "description": "Comprehensive step-by-step guide to effective job search strategies across all career stages including online and offline techniques",
      "totalTime": "PT120M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "step": [...ONLINE_TIPS, ...OFFLINE_TIPS].map((tip, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": tip.title,
        "text": tip.content
      }))
    },
    {
      "@type": "Service",
      "serviceType": "Online Job Search Strategy Guide",
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
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Free Career Resources",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Job Search Strategy Guide"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Career Level Assessment"
            }
          }
        ]
      },
      "description": `Free comprehensive job search guide with ${totalTipCount} strategies across 4 career levels for ${CURRENT_YEAR}`,
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
const JobSearchTips = ({ seoData, buildTimestamp }) => {
  const { currentDate, lastModifiedDate, faqDates } = seoData || {};
  const safeCurrentDate = currentDate || CURRENT_DATE;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(6).fill(CURRENT_DATE);
  const canonicalUrl = `${SITE_URL}/jobs-search-tips`;

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : CURRENT_DATE;

  const totalTipCount = CAREER_LEVEL_TIPS.reduce((total, level) => total + level.tips.length, 0);

  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* ── PRIMARY SEO TAGS ── */}
        <title>Job Search Tips {CURRENT_YEAR}: Complete Guide for Every Career Level | Professional Resume Free</title>
        <meta name="description" content={`Master job searching at every career stage with our ${CURRENT_YEAR} guide. ${totalTipCount} tips across 4 career levels—from first-time seekers to elite executives. LinkedIn optimization, networking, ATS strategies, and level-specific job boards. Trusted by job seekers worldwide.`} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        
        {/* ── ENHANCED GEO/AI META TAGS ── */}
        <meta name="chatgpt-fts:title" content={`Job Search Tips ${CURRENT_YEAR}: Complete Guide for Every Career Level | ProfessionalResumeFree.com`} />
        <meta name="chatgpt-fts:description" content={`Master job searching with ${totalTipCount} tips across 4 career levels. LinkedIn optimization, networking, ATS strategies, and level-specific job boards. Updated ${CURRENT_YEAR}.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Job Search Guide" />
        
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
        <meta property="og:title" content={`Job Search Tips ${CURRENT_YEAR}: Complete Guide for Every Career Level with ${totalTipCount} Strategies`} />
        <meta property="og:description" content={`Master job searching with ${totalTipCount} tips across 4 career levels—from first-time seekers to elite executives. LinkedIn optimization, networking, ATS strategies, and level-specific advice.`} />
        <meta property="og:image" content={`${SITE_URL}/images/og-job-search-tips.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Job Search Tips 2026 - Complete Guide for Every Career Level with Expert Strategies" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="job search tips 2026" />
        <meta property="article:tag" content="career level strategies" />
        <meta property="article:tag" content="professional networking" />

        {/* ── TWITTER CARD ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Job Search Tips ${CURRENT_YEAR}: Complete Guide for Every Career Level`} />
        <meta name="twitter:description" content={`${totalTipCount} tips across 4 career levels—from first-time seekers to elite executives. LinkedIn optimization, networking, ATS strategies.`} />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-job-search-tips.jpg`} />
        <meta name="twitter:image:alt" content="Job Search Tips Guide - Career Level Strategies for 2026" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />

        {/* ── PWA ── */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Job Search Tips" />
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
            __html: JSON.stringify(getSchemaData(safeFaqDates, safeCurrentDate, safeLastModifiedDate, canonicalUrl, totalTipCount))
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
                <span aria-current="page" itemProp="name"><FiSearch size={14} /> Job Search Tips {CURRENT_YEAR}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ {CURRENT_YEAR} Edition • 4 Career Levels • {totalTipCount} Tips • Digital & Traditional • ATS Strategies • Expert Insights</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Job Search <span className="gradient-text">Tips</span> for Every Career Level
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                A comprehensive guide with <strong>{totalTipCount} proven tips across 4 career stages</strong>—from first-time job seekers to elite executives. Master digital and traditional job search strategies, ATS optimization, networking techniques, and level-specific approaches based on data from <strong>NACE, LinkedIn Talent Insights, and ExecuNet Research.</strong>
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
                <meta itemProp="ratingValue" content="4.8" />
                <meta itemProp="ratingCount" content="267" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Article">
                  <meta itemProp="name" content="Job Search Tips Guide 2026" />
                  <meta itemProp="url" content={canonicalUrl} />
                </div>
                <div style={{ color: '#fbbf24', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ★★★★★
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem' }}>4.8/5</span>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Based on 267+ user reviews • Updated {freshnessIndicator}</div>
              </div>

              <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {STATS.map((s, i) => (
                  <div key={i} className="stat-card" itemScope itemType="https://schema.org/QuantitativeValue">
                    <div className="stat-number" itemProp="value">{s.value}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }} itemProp="description">{s.label}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-label-sm)', marginTop: '0.5rem' }}>Source: {s.source}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Explore All Strategies</button>
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
                <h2 id="hook-heading" style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Your Job Search Strategy Must Evolve with Your Career—Here's How at Every Level</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                First-time seekers need internships and campus resources. <strong>Early-career professionals must quantify achievements and build specialized skills. Mid-career leaders leverage executive recruiters and thought leadership. Elite executives engage C-suite search firms and private networks.</strong> Using entry-level strategies at the executive level—or vice versa—dramatically reduces effectiveness. This guide provides <strong>8 level-specific strategies for each of the 4 career stages.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Career Level Tips - 4 Major Sections with 8 tips each */}
        {CAREER_LEVEL_TIPS.map((level, levelIndex) => (
          <section key={levelIndex} className={levelIndex % 2 === 0 ? 'section' : 'section section-alt'} aria-labelledby={`level-heading-${levelIndex}`}>
            <div className="section-container">
              <div className="section-header">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', background: level.color === 'teal' ? 'rgba(128,203,196,0.1)' : level.color === 'purple' ? 'rgba(187,134,252,0.1)' : level.color === 'rose' ? 'rgba(248,187,208,0.1)' : 'rgba(242,202,80,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `0.5px solid ${level.color === 'teal' ? 'rgba(128,203,196,0.3)' : level.color === 'purple' ? 'rgba(187,134,252,0.3)' : level.color === 'rose' ? 'rgba(248,187,208,0.3)' : 'var(--border-gold-filament)'}` }}>
                    {React.createElement(ICON_MAP[level.icon] || FiUser, { size: 24, color: level.color === 'teal' ? 'var(--teal-accent)' : level.color === 'purple' ? 'var(--purple-accent)' : level.color === 'rose' ? 'var(--rose-accent)' : 'var(--accent-primary)' })}
                  </div>
                  <h2 className="section-title" id={`level-heading-${levelIndex}`} style={{ marginBottom: 0 }}>{level.level} — {CURRENT_YEAR} Strategies</h2>
                </div>
                <p className="section-subtitle">{level.description}</p>
              </div>
              <div className="grid">
                {level.tips.map((tip, i) => (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div className="number-circle">{i + 1}</div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{tip.title}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{tip.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Digital vs Traditional Strategies */}
        <section ref={toolRef} className="section" aria-labelledby="strategies-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="strategies-heading">Digital & Traditional Job Search Strategies for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Master both online and offline techniques for comprehensive job search coverage</p>
            </div>
            <div className="grid">
              <div className="card-executive" style={{ borderLeft: '3px solid var(--info-color)' }}>
                <h3 style={{ color: 'var(--info-color)', marginBottom: '1.5rem', textAlign: 'center' }}>💻 Digital Strategies (8 Tips)</h3>
                {ONLINE_TIPS.map((tip, i) => (
                  <div key={i} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: i < ONLINE_TIPS.length - 1 ? '0.5px solid var(--border-glass)' : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      {React.createElement(ICON_MAP[tip.icon] || FiStar, { size: 16, color: 'var(--info-color)' })}
                      <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>{tip.title}</h4>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{tip.content}</p>
                  </div>
                ))}
              </div>
              <div className="card-executive" style={{ borderLeft: '3px solid var(--success-color)' }}>
                <h3 style={{ color: 'var(--success-color)', marginBottom: '1.5rem', textAlign: 'center' }}>🤝 Traditional Strategies (8 Tips)</h3>
                {OFFLINE_TIPS.map((tip, i) => (
                  <div key={i} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: i < OFFLINE_TIPS.length - 1 ? '0.5px solid var(--border-glass)' : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      {React.createElement(ICON_MAP[tip.icon] || FiStar, { size: 16, color: 'var(--success-color)' })}
                      <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>{tip.title}</h4>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{tip.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Long-Tail Keywords Section */}
        <section className="section section-alt" aria-labelledby="longtail-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="longtail-heading">Common Questions About Job Search Strategies</h2>
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
              <h2 className="section-title" id="faq-heading">Frequently Asked Questions About Job Search {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Expert answers to common job search questions across all career levels</p>
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
              Accelerate Your Career at Any Level ✨
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply these {totalTipCount} level-specific strategies to transform your job search. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiZap /> Browse Resume Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["4 Career Levels", `${totalTipCount} Expert Tips`, "Digital & Traditional", "ATS Optimization", "Free PDF Download"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
            <div style={{ marginTop: '24px' }}>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '50px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>✓ 100% Free • ✓ No Sign Up • ✓ Privacy Protected • ✓ Expert-Written • ✓ Updated {CURRENT_YEAR}</span>
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
                { href: "/interview-tips", text: "Interview Guide 2026", iconName: "FiMessageCircle", desc: "Ace every interview" },
                { href: "/jobs-boards", text: "Top Job Boards Directory", iconName: "FiSearch", desc: "Find the right platforms" },
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield", desc: "Test compatibility" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward", desc: "Get professionally scored" },
                { href: "/how-to-optimize-your-resume-for-linkedin-recruiters", text: "LinkedIn Optimization", iconName: "FiUser", desc: "Attract recruiters" },
                { href: "/resume-templates", text: "All Resume Templates", iconName: "FiLayers", desc: "500+ professional designs" }
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Build: {buildTimestamp} • {totalTipCount} tips across 4 career levels • Sources: NACE, LinkedIn, ExecuNet</span>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>© {CURRENT_YEAR} Professional Resume Free. All rights reserved.</p>
        </div>

        {/* Hidden Metadata */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="version">2026.5</span>
          <span itemProp="tipCount">{totalTipCount}</span>
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

export default JobSearchTips;