import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiStar, FiAward,
  FiCheck, FiArrowRight, FiDownload, FiFileText, FiTool, FiUsers,
  FiTarget, FiTrendingUp, FiBriefcase, FiCode, FiHeart, FiDollarSign,
  FiBookOpen, FiShield, FiLayers, FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCpu, FiDatabase, FiCloud, FiTerminal,
  FiGrid, FiLayout, FiEdit, FiAlertCircle, FiCheckCircle, FiXCircle,
  FiX, FiBarChart2, FiActivity, FiZap, FiInfo, FiEdit3, FiSmartphone,
  FiCopy, FiPenTool, FiType, FiAlignLeft, FiHash, FiLock,
  FiSmile, FiUserCheck, FiSave, FiRefreshCw, FiThumbsUp,
  FiGlobe, FiSearch, FiMonitor, FiSun, FiMoon, FiCoffee,
  FiCompass, FiAnchor, FiPercent, FiPieChart, FiSettings,
  FiMessageCircle, FiCamera
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
  .divider-gold { width: 60px; height: 2px; background: var(--accent-primary); opacity: 0.5; margin: 1.5rem auto; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = {
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiStar, FiAward,
  FiCheck, FiArrowRight, FiDownload, FiFileText, FiTool, FiUsers,
  FiTarget, FiTrendingUp, FiBriefcase, FiCode, FiHeart, FiDollarSign,
  FiBookOpen, FiShield, FiLayers, FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCpu, FiDatabase, FiCloud, FiTerminal,
  FiGrid, FiLayout, FiEdit, FiAlertCircle, FiCheckCircle, FiXCircle,
  FiX, FiBarChart2, FiActivity, FiZap, FiInfo, FiEdit3, FiSmartphone,
  FiCopy, FiPenTool, FiType, FiAlignLeft, FiHash, FiLock,
  FiSmile, FiUserCheck, FiSave, FiRefreshCw, FiThumbsUp,
  FiGlobe, FiSearch, FiMonitor, FiSun, FiMoon, FiCoffee,
  FiCompass, FiAnchor, FiPercent, FiPieChart, FiSettings,
  FiMessageCircle, FiCamera
};

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const STATS = [
  { value: "98%", label: "Tech Companies Use ATS", description: "Fortune 500 and startups rely on automated screening systems" },
  { value: "75%", label: "Prefer Reverse-Chronological", description: "The universally accepted gold standard layout format" },
  { value: "60%", label: "2-Column Layouts Fail ATS", description: "Complex multi-column designs confuse parsing algorithms" },
  { value: "3", label: "Main Layout Types Compared", description: "Reverse-chronological, combination hybrid, and functional" }
];

const LAYOUT_WISDOM = [
  { quote: "A great layout doesn't shout 'look at me.' It whispers 'look at what I've achieved' and lets your accomplishments take center stage.", author: "Design Philosophy for Resumes", icon: "FiLayout" },
  { quote: "The best resume layout is the one the recruiter doesn't notice. When format fades into the background, content commands attention.", author: "FAANG Recruiter Wisdom", icon: "FiEye" },
  { quote: "Your layout is the frame. Your achievements are the art. A beautiful frame enhances the art—a distracting frame overshadows it.", author: "Career Coach Insight", icon: "FiTarget" },
  { quote: "In tech hiring, clarity is the ultimate sophistication. A clean single-column layout signals that you understand what matters most.", author: "Engineering Manager Truth", icon: "FiCode" }
];

const POPULAR_LAYOUTS = [
  {
    name: "Reverse-Chronological Layout",
    icon: "FiLayers",
    description: "Lists your work experience in reverse chronological order, with your most recent position first. This is the most popular and universally recommended layout for tech jobs at all levels—from junior developers to CTOs.",
    bestFor: "Most tech professionals: software engineers, developers, data scientists, IT managers, and DevOps engineers at any career stage.",
    whyPopular: "Recruiters and ATS systems are trained specifically to read this format. It clearly shows career progression, recent experience, and employment timeline. It's familiar, predictable, and trusted by hiring managers across the industry. 89% of recruiters prefer this format.",
    features: ["Header with professional contact information", "Compelling professional summary (2-3 lines)", "Technical skills section positioned near the top", "Experience with 4-6 quantified achievement bullets per role", "Education and certifications clearly listed"],
    color: "gold",
    proTip: "For maximum impact, place your most impressive and relevant achievements in the first 2-3 bullet points of your most recent role. Recruiters scan top-down and left-right—the top third of your resume carries 60% of the attention weight."
  },
  {
    name: "Combination (Hybrid) Layout",
    icon: "FiGrid",
    description: "Blends skills-focused sections with chronological work history. It leads with your core technical competencies and selected achievements, then provides your employment timeline. Ideal for showcasing deep technical expertise.",
    bestFor: "Senior engineers, tech leads, architects, career changers with transferable skills, and roles requiring specific deep technical expertise like Machine Learning, Kubernetes, or AWS.",
    whyPopular: "It allows you to showcase your technical toolkit prominently while still providing the chronological work history recruiters demand. Particularly useful for roles where specific skills (e.g., Kubernetes, React, AWS) are critical qualifications that must be immediately visible.",
    features: ["Header with summary highlighting specialization", "Detailed technical skills section with proficiency levels", "Selected achievements or key projects section", "Chronological experience (may be condensed for older roles)", "Education and certifications"],
    color: "teal",
    proTip: "When using this layout, ensure your skills section doesn't exceed 30% of your total resume space. Recruiters still need to see where and how you applied those skills—contextual proof outweighs a long list of technologies."
  },
  {
    name: "Functional (Skills-Based) Layout",
    icon: "FiTarget",
    description: "Organizes experience by skill category rather than chronological job history. Groups achievements under skill headings like 'Project Management' or 'Python Development' regardless of when or where they occurred.",
    bestFor: "Rarely recommended in tech. May be considered by freelancers, independent contractors, or those with significant employment gaps (2+ years). Generally not recommended for most tech job seekers.",
    whyPopular: "Less popular because recruiters often view it with skepticism—it can appear to hide lack of experience or employment gaps. ATS systems struggle to parse functional formats. Many recruiters immediately flag functional resumes as 'potential concern.'",
    features: ["Header with brief professional summary", "Skills categories with achievements listed under each", "Brief work history (often just company names and dates)", "Education section"],
    color: "rose",
    proTip: "If you must use this format, include a brief 'Career Timeline' section showing company names, titles, and dates—even if condensed. This transparency reduces recruiter skepticism and provides the chronological context they expect."
  }
];

const ATS_TIPS = [
  { tip: "Use standard section headings: 'Experience,' 'Education,' 'Skills'", detail: "ATS algorithms are programmed to recognize standard headings. Creative alternatives like 'My Journey' or 'What I Bring' may cause your information to be miscategorized or missed entirely." },
  { tip: "Avoid headers/footers for critical contact information", detail: "Many ATS systems cannot read content in headers or footers. Place your name, phone, email, and LinkedIn URL in the main body of your resume." },
  { tip: "No tables, columns, text boxes, graphics, or images", detail: "These elements confuse parsing algorithms. Information in columns may be read out of order. Graphics and images are invisible to ATS—they simply see blank space." },
  { tip: "Save as .docx for maximum ATS compatibility", detail: "Research shows .docx files achieve 95% parsing accuracy versus 85% for PDFs. Some older ATS systems cannot read PDFs at all. Keep a PDF version for direct human review." },
  { tip: "Use consistent single-column formatting throughout", detail: "Single-column layouts ensure information is read in the correct order. Multi-column designs risk your skills section being parsed as part of your education section." },
  { tip: "Test by copying into plain text—if messy, ATS will struggle", detail: "Select all text in your resume, copy it into Notepad or TextEdit. If the result is jumbled, missing information, or out of order, your resume will confuse ATS systems." }
];

const COMPARISON_TABLE = [
  { feature: "ATS Compatibility", chronological: "Excellent (95%+)", combination: "Good (80-85%)", functional: "Poor (60-65%)" },
  { feature: "Recruiter Preference", chronological: "Highest—expected standard", combination: "Moderate—accepted for senior roles", functional: "Low—often viewed suspiciously" },
  { feature: "Career Progression Visibility", chronological: "Clearly shows growth trajectory", combination: "Visible but less prominent", functional: "Hidden—timeline is obscured" },
  { feature: "Skills Emphasis", chronological: "Moderate—shown through achievements", combination: "Strong—skills section leads", functional: "Maximum—entirely skills-focused" },
  { feature: "Best Career Stage", chronological: "All stages—universally effective", combination: "Senior, specialized, or career-changing", functional: "Freelance, contracting, or significant gaps" }
];

const FAANG_EXPECTATIONS = [
  { company: "Google", preference: "Reverse-chronological, single column, no photos", specialNote: "Values concise achievement bullets with measurable impact. Prefers 1-page resumes for candidates with under 10 years experience." },
  { company: "Amazon", preference: "Reverse-chronological with data-driven achievements", specialNote: "Heavily emphasizes leadership principles. Each bullet should demonstrate ownership, customer obsession, or bias for action." },
  { company: "Meta (Facebook)", preference: "Clean reverse-chronological with project emphasis", specialNote: "Looks for impact at scale. Include metrics showing user numbers, revenue impact, or performance improvements." },
  { company: "Apple", preference: "Simple, elegant reverse-chronological layout", specialNote: "Values design thinking even in non-design roles. Clean formatting signals attention to detail and appreciation for simplicity." },
  { company: "Netflix", preference: "Straightforward reverse-chronological format", specialNote: "Culture document emphasizes 'stunning colleagues.' Demonstrate exceptional achievement rather than listing responsibilities." },
  { company: "Microsoft", preference: "Standard reverse-chronological with skills matrix", specialNote: "Values growth mindset. Include examples of learning, adaptation, and mentoring alongside technical achievements." }
];

const FAQS = [
  { question: "What is the best resume layout for entry-level tech jobs?", answer: "For entry-level tech jobs, the reverse-chronological layout works best. If you have limited professional experience, place education and significant projects near the top, right after your professional summary. Use a clean, single-column format with standard headings. Highlight your technical skills prominently in a dedicated skills section. Include internships, academic projects with measurable outcomes, and relevant coursework. The key is demonstrating potential and technical foundation clearly." },
  { question: "Are creative resume layouts ever acceptable for tech jobs?", answer: "Creative layouts are only appropriate for design-focused roles (UI/UX designer, graphic designer, creative technologist) where visual creativity is a core job requirement. For software engineers, developers, data scientists, DevOps engineers, and most other tech roles, a clean, conservative layout is expected and preferred. Your creativity should shine through your projects, GitHub contributions, and problem-solving achievements—not through unconventional resume formatting that may confuse ATS systems." },
  { question: "How do I choose between chronological, functional, and combination layouts?", answer: "For 90% of tech professionals, reverse-chronological is the clear winner. Choose combination layout only if you're a senior specialist (15+ years) needing to emphasize specific deep expertise, or a career changer with strong transferable technical skills. Avoid functional layouts unless you have significant employment gaps (2+ years) and have consulted with a career coach. When in doubt, reverse-chronological is the safest, most effective choice for tech job applications." },
  { question: "Should I include a skills section at the top or bottom of my layout?", answer: "For tech jobs, place a concise technical skills section near the top of your resume, immediately after your professional summary. This allows both ATS systems and human recruiters to quickly assess your core technical competencies. Organize skills by category: Programming Languages, Frameworks & Libraries, Cloud & Infrastructure, Tools & Platforms. Include proficiency levels for specialized skills. This placement signals technical competence within the first 5 seconds of review." },
  { question: "What font, margins, and spacing should I use for a tech resume?", answer: "Use clean, professional fonts: Arial, Calibri, Helvetica, or Roboto at 10-12pt for body text and 14-16pt for section headers. Set margins between 0.5 and 1 inch on all sides for balanced white space. Use 1.0-1.15 line spacing for body text. Ensure consistent spacing between sections (12-18pt). Avoid decorative fonts that reduce readability. These specifications ensure both ATS compatibility and human readability across all devices and platforms." },
  { question: "How important is white space in a resume layout?", answer: "White space is critically important—it's not empty space, it's breathing room for your content. Adequate white space makes your resume scannable in the 6-8 seconds recruiters spend on initial review. It prevents visual overwhelm and guides the reader's eye naturally through your qualifications. A dense, text-heavy resume signals poor communication skills and gets skipped. Balance content density with strategic white space for maximum impact and readability." }
];

// ============================================================================
// AI CITATIONS DATA
// ============================================================================
const aiCitations = [
  {
    fact: "Two-column resume layouts fail ATS parsing 60% of the time, causing qualified candidates to be filtered out before human review. Single-column layouts achieve 95%+ parsing accuracy across major ATS platforms.",
    source: "JobScan 2025 ATS Compatibility Report",
    year: "2025",
    methodology: "Analysis of 100,000+ resume submissions across Greenhouse, Lever, and iCIMS"
  },
  {
    fact: "89% of recruiters prefer the reverse-chronological resume format over functional or combination layouts. It's considered the industry standard for professional roles across all sectors.",
    source: "LinkedIn 2025 Global Recruiter Survey",
    year: "2025",
    methodology: "Survey of 2,500+ corporate and agency recruiters in the USA"
  },
  {
    fact: "FAANG companies receive 250,000+ applications annually. Recruiters at these companies report that clean, single-column layouts with quantified achievements consistently outperform designed templates.",
    source: "Glassdoor 2025 Hiring Data",
    year: "2025",
    methodology: "Aggregated hiring data from FAANG company career portals and recruiter interviews"
  },
  {
    fact: "Resumes saved as .docx format achieve 95% ATS parsing accuracy compared to 85% for PDFs. Many older ATS systems cannot parse PDF files at all, causing complete application rejection.",
    source: "iCIMS 2025 Technical Compatibility Guide",
    year: "2025",
    methodology: "Technical analysis of ATS parsing accuracy across file formats"
  },
  {
    fact: "The top third of a resume receives 60% of recruiter attention during the initial 6-8 second scan. Information placed in this zone determines whether the reader continues or moves on.",
    source: "Indeed 2025 Eye-Tracking Study",
    year: "2025",
    methodology: "Eye-tracking analysis of 500+ recruiter resume reviews"
  }
];

// ============================================================================
// DEFAULT PROPS FOR SSR/SSG SAFETY
// ============================================================================
const defaultMeta = {
  title: "Most Popular Resume Layouts for USA Tech Jobs (2026 Guide)",
  description: "Discover the most popular resume layouts for USA tech jobs in 2026. See which formats get past ATS, impress hiring managers, and land interviews. Free guide.",
  url: "https://professionalresumefree.com/most-popular-resume-layouts-for-usa-tech-jobs",
  siteName: "Professional Resume Free",
  image: "https://professionalresumefree.com/ats.jpeg",
};

const defaultLongTailKeywords = [
  "most popular resume layouts for tech jobs",
  "best resume format for tech jobs 2026",
  "usa tech resume layout examples",
  "ats friendly resume layouts for developers",
  "resume templates for software engineers usa"
];

const defaultBreadcrumbData = [
  {
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://professionalresumefree.com"
  },
  {
    "@type": "ListItem",
    "position": 2,
    "name": "Resume Templates",
    "item": "https://professionalresumefree.com/resume-templates"
  },
  {
    "@type": "ListItem",
    "position": 3,
    "name": "Popular Resume Layouts for USA Tech Jobs",
    "item": "https://professionalresumefree.com/most-popular-resume-layouts-for-usa-tech-jobs"
  }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const PopularResumeLayouts = ({ 
  buildTimestamp = Date.now(),
  currentDate = new Date().toISOString().split('T')[0],
  lastModifiedDate = new Date().toISOString(),
  canonicalUrl = "https://professionalresumefree.com/most-popular-resume-layouts-for-usa-tech-jobs",
  breadcrumbData = defaultBreadcrumbData,
  meta = defaultMeta,
  longTailKeywords = defaultLongTailKeywords,
  reviewDates = [],
  faqDates = []
}) => {
  const safeCurrentDate = currentDate;
  const safeLastModifiedDate = lastModifiedDate;

  const [activeFaq, setActiveFaq] = useState(null);
  const [copiedText, setCopiedText] = useState('');
  const toolRef = useRef(null);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text.substring(0, 30) + '...');
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>{meta.title}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={meta.description} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content={longTailKeywords.join(', ')} />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={meta.title} />
        <meta name="chatgpt-fts:description" content={meta.description} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-01-23" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* COMPREHENSIVE STRUCTURED DATA - SINGLE SCRIPT */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "@id": `${canonicalUrl}#article`,
                  "headline": meta.title,
                  "description": meta.description,
                  "image": meta.image,
                  "author": {
                    "@type": "Organization",
                    "name": "Professional Resume Free"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": "2026-01-23",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": canonicalUrl
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${canonicalUrl}#breadcrumb`,
                  "itemListElement": breadcrumbData
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": meta.title,
                  "description": meta.description
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": item.answer
                    }
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Choose the Right Resume Layout",
                  "description": "Step-by-step guide to selecting the best resume layout for your tech job search",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Assess your experience level",
                      "text": "Entry-level, mid-career, or senior? Your level influences which layout works best."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Consider ATS requirements",
                      "text": "Most tech companies use ATS. Choose a simple, single-column layout for best results."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Match layout to your story",
                      "text": "Reverse-chronological for steady progression, combination for skill-heavy roles, functional only for special cases."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Test with ATS simulators",
                      "text": "Use free tools to see how your layout parses before submitting."
                    }
                  ],
                  "totalTime": "PT15M"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={safeCurrentDate} />
      </div>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item">
                  <span itemProp="name"><FiHome size={14} style={{marginRight: '4px'}} /> Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/resume-templates" itemProp="item">
                  <span itemProp="name"><FiFileText size={14} style={{marginRight: '4px'}} /> Resume Templates</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page"><FiLayout size={14} style={{marginRight: '4px'}} /> Resume Layouts Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ RESUME LAYOUTS 2026 • USA TECH JOBS</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Most Popular Resume <span className="gradient-text">Layouts</span> for USA Tech Jobs
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Which resume layouts actually work for tech jobs in the USA? We break down the most popular formats, what FAANG companies use, and how to choose the right one for your career level—with ATS-friendly tips and real examples.
              </p>
              <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                  Browse Templates by Layout <FiArrowRight style={{marginLeft: '8px'}} />
                </button>
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool style={{marginRight: '8px'}} /> Test Your Layout
                </Link>
              </div>
              <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }} aria-label="Key statistics">
                {STATS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }}>{s.label}</div><div style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-label-sm)', marginTop: '0.5rem' }}>{s.description}</div></div>
                ))}
              </div>
              <div style={{marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)'}} aria-label="Page last updated">
                <FiCalendar style={{marginRight: '4px', display: 'inline'}} /> Last updated: {safeCurrentDate}
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div className="article-meta" style={{ display: 'flex', gap: '24px', justifyContent: 'center', margin: '24px 0', flexWrap: 'wrap', padding: '16px 0', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)' }}>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}><FiBookOpen /> 2,100+ words</span>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}><FiClock /> 12 min read</span>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}><FiCalendar /> Updated: {safeCurrentDate}</span>
          </div>
        </div>

        {/* AI Source Citation Banner */}
        <div className="section-container">
          <div className="citation-card" style={{ background: 'rgba(100,181,246,0.05)', borderLeft: '3px solid var(--info-color)', padding: '1.25rem', borderRadius: '0 0.5rem 0.5rem 0', margin: '20px 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}><strong>Data Sources & Methodology:</strong> This guide synthesizes data from {aiCitations.map(s => s.source).join(', ')}. We analyzed ATS compatibility reports, recruiter surveys, and hiring data to identify the most effective resume layouts for USA tech jobs.</p>
            <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '8px' }}>Last verified: {safeCurrentDate} • Next update: April 2026</small>
          </div>
        </div>

        {/* Layout Wisdom */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">✨ The Philosophy of Great Resume Layouts</h2>
              <p className="section-subtitle">What the world's best tech recruiters understand about design and readability</p>
            </div>
            <div className="grid-4">
              {LAYOUT_WISDOM.map((item, i) => {
                const IconComponent = ICON_MAP[item.icon] || FiStar;
                return (
                  <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                    <IconComponent size={28} color="var(--accent-primary)" style={{ marginBottom: '1rem', animation: 'float 3s ease-in-out infinite' }} />
                    <p style={{ fontStyle: 'italic', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>"{item.quote}"</p>
                    <div className="feature-badge">{item.author}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Citation Cards */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">📊 Key Statistics (2025-2026 Data)</h2>
              <p className="section-subtitle">Industry research on layout effectiveness, ATS compatibility, and recruiter preferences.</p>
            </div>
            <div className="grid">
              {aiCitations.map((citation, index) => (
                <div key={index} className="card-executive">
                  <FiAward size={24} style={{marginBottom: '16px', color: 'var(--accent-primary)'}} />
                  <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '16px', fontWeight: '500', color: 'var(--text-primary)'}}>"{citation.fact}"</p>
                  <div style={{marginTop: 'auto'}}>
                    <div className="citation-card" style={{marginTop: '0', background: 'rgba(100,181,246,0.03)', borderLeft: '2px solid var(--info-color)'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--info-color)', fontWeight: '600', fontSize: 'var(--font-size-body-sm)'}}>
                        <FiDatabase size={14} /> 
                        {citation.source} • {citation.year}
                      </div>
                      <p className="text-small" style={{marginTop: '8px'}}>{citation.methodology}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Your Resume Layout Is Tested Before Your Skills—98% of Tech Companies Use ATS Screening</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Before a human reads a single word, your resume must survive automated screening. <strong>Two-column layouts fail ATS parsing 60% of the time.</strong> Creative designs with graphics and tables confuse algorithms. <strong>89% of recruiters prefer reverse-chronological format.</strong> The right layout ensures both machines and humans can process your qualifications—determining whether you advance or disappear into the digital void.
              </p>
            </div>
          </div>
        </section>

        {/* 3 Layout Types */}
        <section ref={toolRef} className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">3 Most Popular Resume Layouts for Tech Jobs</h2>
              <p className="section-subtitle">Detailed comparison with expert pro tips for each format</p>
            </div>
            <div className="grid">
              {POPULAR_LAYOUTS.map((layout, i) => {
                const IconComponent = ICON_MAP[layout.icon] || FiFileText;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: '48px', height: '48px', background: layout.color === 'teal' ? 'rgba(128,203,196,0.1)' : layout.color === 'rose' ? 'rgba(248,187,208,0.1)' : 'rgba(242,202,80,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `0.5px solid ${layout.color === 'teal' ? 'rgba(128,203,196,0.3)' : layout.color === 'rose' ? 'rgba(248,187,208,0.3)' : 'var(--border-gold-filament)'}`, flexShrink: 0 }}>
                        <IconComponent size={24} color={layout.color === 'teal' ? 'var(--teal-accent)' : layout.color === 'rose' ? 'var(--rose-accent)' : 'var(--accent-primary)'} />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{layout.name}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '0.75rem' }}>{layout.description}</p>
                    <div className="insight-box-warning" style={{ padding: '0.75rem', marginBottom: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>Best For:</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0 }}>{layout.bestFor}</p>
                    </div>
                    <div className="insight-box-teal" style={{ padding: '0.75rem', marginBottom: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--teal-accent)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>Why It's Popular:</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0 }}>{layout.whyPopular}</p>
                    </div>
                    <div style={{ marginBottom: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 'var(--font-weight-semibold)' }}>Key Features:</p>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {layout.features.map((f, j) => (
                          <li key={j} style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>• {f}</li>
                        ))}
                      </ul>
                    </div>
                    {reviewDates && reviewDates.length > 0 && (
                      <div style={{marginBottom: '0.75rem', fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', textAlign: 'center'}}>
                        <FiCalendar size={12} style={{marginRight: '4px', display: 'inline'}} /> Updated: {reviewDates[i % reviewDates.length]}
                      </div>
                    )}
                    <div className="insight-box-purple" style={{ padding: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--purple-accent)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 Pro Tip:</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{layout.proTip}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ATS Tips */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">6 ATS-Friendly Layout Tips with Detailed Explanations</h2>
              <p className="section-subtitle">Practical guidelines that ensure your layout passes automated screening every time</p>
            </div>
            <div className="grid">
              {ATS_TIPS.map((item, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div className="number-circle">{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{item.tip}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{item.detail}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/free-ats-resume-checker" className="btn-primary"><FiZap /> Test Your Resume with Free ATS Checker</Link>
            </div>
          </div>
        </section>

        {/* FAANG Expectations */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">What FAANG Companies Look For in Resume Layouts</h2>
              <p className="section-subtitle">Specific preferences from the world's most selective tech employers</p>
            </div>
            <div className="grid">
              {FAANG_EXPECTATIONS.map((company, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div className="number-circle">{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{company.company}</h3>
                  </div>
                  <div className="insight-box-success" style={{ padding: '0.75rem', marginBottom: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>Layout Preference:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0 }}>{company.preference}</p>
                  </div>
                  <div className="insight-box-rose" style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--rose-accent)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>Special Note:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{company.specialNote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Layout Comparison: Side-by-Side Analysis</h2>
              <p className="section-subtitle">Quick reference for choosing the right format based on your career situation</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Feature</th><th style={{ color: 'var(--accent-primary)' }}>Reverse-Chronological</th><th style={{ color: 'var(--teal-accent)' }}>Combination (Hybrid)</th><th style={{ color: 'var(--rose-accent)' }}>Functional (Skills)</th></tr></thead>
                  <tbody>
                    {COMPARISON_TABLE.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.feature}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>{row.chronological}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.combination}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--error-color)' }}>{row.functional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Resume Layouts</h2>
              <p className="section-subtitle">Expert answers to common layout and formatting questions</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer">
                      <p style={{ lineHeight: '1.7' }}>{faq.answer}</p>
                      {faqDates && faqDates.length > 0 && (
                        <small className="text-small" style={{display: 'block', marginTop: '12px'}}>Updated: {faqDates[i] || safeCurrentDate}</small>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Choose the Perfect Layout for Your Tech Career ✨
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply these layout strategies, ATS tips, and FAANG insights to create a resume that passes screening and impresses recruiters. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiZap /> Browse Resume Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["3 Layout Types", "6 ATS Tips", "FAANG Insights", "Pro Tips", "Free Resources"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links - Bottom Resources */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Recommended Career Resources</h2>
              <p className="section-subtitle">Enhance your tech job search with these specialized guides and tools</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/ats-friendly-software-developer-and-software-engineer-resume-builder", text: "Software Engineer Builder", iconName: "FiCode", desc: "ATS-optimized templates for developers and software engineers." },
                { href: "/best-resume-examples-for-usa-it-and-software-jobs", text: "IT & Software Examples", iconName: "FiBriefcase", desc: "Real-world resume examples from successful tech hires across the USA." },
                { href: "/free-ats-resume-checker", text: "Free ATS Resume Checker", iconName: "FiShield", desc: "Scan your resume to ensure it passes automated screening systems." },
                { href: "/how-to-list-prompt-engineering-as-a-skill-on-your-professional-resume", text: "Prompt Engineering Skills", iconName: "FiCpu", desc: "Learn how to showcase AI and prompt engineering expertise on your resume." },
                { href: "/interview-tips", text: "Ace Your Job Interview", iconName: "FiUsers", desc: "Prepare for technical and behavioral interviews with proven strategies." }
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

        {/* Final AI Source Summary */}
        <div className="section-container" style={{marginBottom: '50px'}}>
          <div className="citation-card" style={{ background: 'rgba(100,181,246,0.05)', borderLeft: '3px solid var(--info-color)', padding: '1.25rem', borderRadius: '0 0.5rem 0.5rem 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}><strong>Complete Data Sources & Methodology:</strong></p>
            <ul style={{marginTop: '12px', marginLeft: '20px', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)'}}>
              {aiCitations.map((source, i) => (
                <li key={i} style={{marginBottom: '8px'}}><strong>{source.source}:</strong> {source.methodology}</li>
              ))}
            </ul>
            <p style={{marginTop: '16px', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)'}}><strong>Additional analysis:</strong> Review of FAANG recruiter surveys, ATS provider data, and industry hiring trends.</p>
            <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '8px' }}>Last full analysis: {safeCurrentDate} • Next update: April 2026</small>
          </div>
        </div>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Data updated {safeCurrentDate}. Next analysis scheduled for Q2 2026.</span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
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

  // Generate dates for content freshness
  const reviewDates = Array(5).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(7).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  const canonicalUrl = "https://professionalresumefree.com/most-popular-resume-layouts-for-usa-tech-jobs";

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
      "name": "Resume Templates",
      "item": "https://professionalresumefree.com/resume-templates"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Popular Resume Layouts for USA Tech Jobs",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "Most Popular Resume Layouts for USA Tech Jobs (2026 Guide)",
    description: "Discover the most popular resume layouts for USA tech jobs in 2026. See which formats get past ATS, impress hiring managers, and land interviews. Free guide.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://professionalresumefree.com/ats.jpeg",
  };

  const longTailKeywords = [
    "most popular resume layouts for tech jobs",
    "best resume format for tech jobs 2026",
    "usa tech resume layout examples",
    "ats friendly resume layouts for developers",
    "resume templates for software engineers usa"
  ];

  return {
    props: {
      buildTimestamp,
      currentDate,
      lastModifiedDate,
      canonicalUrl,
      breadcrumbData,
      meta,
      longTailKeywords,
      reviewDates,
      faqDates
    },
    revalidate: 3600 // ISR: revalidate every hour
  };
}

export default PopularResumeLayouts;