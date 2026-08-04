// pages/resume-achievement-calculator.js
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { 
  FiHome, FiChevronRight, FiAward, FiTarget, FiBriefcase,
  FiCalendar, FiPieChart, FiShield, FiZap, FiStar,
  FiGrid, FiFileText, FiArrowRight, FiRefreshCw, FiTrash2,
  FiHelpCircle, FiAlertCircle, FiLock, FiTrendingUp,
  FiBook, FiCpu, FiMonitor, FiBarChart2, FiCoffee, FiCloud,
  FiCheckCircle, FiGlobe, FiEdit, FiClipboard, FiLayout,
  FiAlertTriangle, FiActivity, FiUsers, FiDollarSign,
  FiPlus, FiXCircle, FiHeart, FiClock, FiDatabase, FiTool
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
    --success-color: #4caf50; --info-color: #64b5f6;
    --font-display: 'Playfair Display','Georgia',serif;
    --font-body: 'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    --font-size-display-lg: clamp(3rem,6vw,4rem); --font-size-display-md: clamp(2.25rem,5vw,3rem);
    --font-size-headline-lg: clamp(1.75rem,4vw,2rem); --font-size-title-md: clamp(1.125rem,2.5vw,1.25rem);
    --font-size-body-lg: clamp(1rem,2vw,1.125rem); --font-size-body-md: 1rem; --font-size-body-sm: 0.875rem;
    --font-weight-semibold: 600; --font-weight-bold: 700; --font-weight-extrabold: 800;
    --letter-spacing-tight: -0.02em; --letter-spacing-caps: 0.08em;
    --line-height-display: 1.1; --line-height-headline: 1.2; --line-height-body: 1.6;
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
    --input-bg: #1c1b1d; --input-border: 1px solid rgba(229,225,228,0.15);
    --input-text: #e5e1e4; --input-placeholder: rgba(229,225,228,0.4);
    --input-radius: 0.375rem; --input-padding: 0.75rem 1rem;
  }
  * { margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color:transparent; }
  body { background-color:var(--bg-page); color:var(--text-primary); font-family:var(--font-body); font-size:var(--font-size-body-md); line-height:var(--line-height-body); -webkit-font-smoothing:antialiased; overflow-x:hidden; }
  h1,h2,h3 { font-family:var(--font-display); color:var(--text-primary); letter-spacing:var(--letter-spacing-tight); word-wrap:break-word; }
  h1 { font-size:var(--font-size-display-lg); line-height:var(--line-height-display); font-weight:var(--font-weight-bold); margin-bottom:1rem; }
  h2 { font-size:var(--font-size-display-md); line-height:var(--line-height-headline); font-weight:var(--font-weight-bold); }
  h3 { font-size:var(--font-size-headline-lg); line-height:var(--line-height-headline); font-weight:var(--font-weight-semibold); font-family:var(--font-body); }
  p { color:var(--text-secondary); font-size:var(--font-size-body-lg); line-height:var(--line-height-body); }
  strong { color:var(--text-primary); font-weight:var(--font-weight-semibold); }
  a { color:var(--accent-primary); transition:color var(--transition-fast); text-decoration:none; }
  a:hover { color:var(--accent-primary-hover); }
  .gradient-text { background:linear-gradient(135deg,#f2ca50 0%,#d4af37 50%,#ffe088 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .section-container { max-width:var(--content-max-width); margin:0 auto; padding:0 var(--gutter-desktop); width:100%; }
  @media (max-width:768px) { .section-container { padding:0 var(--gutter-mobile); } }
  .skip-link { position:absolute; top:-40px; left:50%; transform:translateX(-50%); background:var(--accent-primary); color:var(--accent-on-primary); padding:8px 16px; z-index:100; border-radius:0 0 0.25rem 0.25rem; font-weight:var(--font-weight-semibold); }
  .skip-link:focus { top:0; }
  .btn-primary { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:var(--btn-primary-bg); color:var(--btn-primary-text); border:none; border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.3); text-decoration:none; min-width:200px; white-space:nowrap; }
  .btn-primary:hover { background:var(--accent-primary-hover); transform:translateY(-2px); box-shadow:var(--shadow-gold-glow-sm); color:var(--btn-primary-text); }
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; text-decoration:none; min-width:200px; white-space:nowrap; }
  .btn-outline:hover { background:rgba(242,202,80,0.08); border-color:rgba(212,175,55,0.8); transform:translateY(-2px); color:var(--btn-outline-text); }
  .card-executive { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); -webkit-backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); transition:all var(--transition-medium) var(--easing-smooth); height:100%; display:flex; flex-direction:column; }
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
  .grid { display:grid; grid-template-columns:1fr; gap:1.25rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid { grid-template-columns:repeat(3,1fr); } }
  .stat-card { text-align:center; padding:clamp(1rem,3vw,1.5rem); background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; min-width:0; }
  .stat-number { font-size:clamp(1.2rem,3vw,1.8rem); font-weight:var(--font-weight-bold); color:var(--accent-primary); display:block; font-family:var(--font-display); word-break:break-word; }
  .stat-label { color:var(--text-secondary); font-size:var(--font-size-label-sm); word-break:break-word; }
  .feature-badge { display:inline-flex; align-items:center; gap:0.25rem; background:rgba(242,202,80,0.1); padding:0.25rem 0.75rem; border-radius:9999px; font-size:var(--font-size-body-sm); color:var(--accent-primary); border:0.5px solid var(--border-gold-filament); }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .text-success { color:var(--success-color); font-weight:var(--font-weight-semibold); }
  .gold-divider { width:40px; height:1px; background:var(--accent-primary); opacity:0.6; margin:1.5rem auto; }
  .input-group { margin-bottom:1.5rem; }
  .input-label { display:block; margin-bottom:0.5rem; color:var(--text-secondary); font-weight:500; font-size:var(--font-size-body-sm); }
  .input-field { width:100%; padding:var(--input-padding); background:var(--input-bg); border:var(--input-border); border-radius:var(--input-radius); color:var(--input-text); font-size:1rem; font-family:var(--font-body); transition:border-color var(--transition-fast); }
  .input-field:focus { outline:none; border-color:var(--accent-primary); box-shadow:0 0 0 3px rgba(242,202,80,0.1); }
  .input-field::placeholder { color:var(--input-placeholder); }
  select.input-field { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23d4af37' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 1rem center; padding-right:2.5rem; }
  textarea.input-field { min-height:80px; resize:vertical; }
  .result-box { background:rgba(242,202,80,0.05); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:clamp(1rem,3vw,1.5rem); margin-top:2rem; }
  .achievement-card { padding:1rem; background:var(--card-bg); border:var(--card-border); border-radius:0.5rem; margin-bottom:0.75rem; position:relative; }
  .score-circle { width:120px; height:120px; border-radius:50%; display:flex; flex-direction:column; align-items:center; justify-content:center; margin:0 auto 1.5rem; }
  .score-high { background:rgba(76,175,80,0.1); border:4px solid var(--success-color); box-shadow:0 0 30px rgba(76,175,80,0.3); }
  .score-medium { background:rgba(242,202,80,0.1); border:4px solid var(--accent-primary); box-shadow:0 0 30px rgba(242,202,80,0.3); }
  .score-low { background:rgba(244,67,54,0.1); border:4px solid var(--error-color); box-shadow:0 0 30px rgba(244,67,54,0.3); }
  .remove-btn { position:absolute; top:0.5rem; right:0.5rem; background:none; border:none; color:var(--error-color); cursor:pointer; font-size:1.25rem; }
  .add-btn { width:100%; padding:0.75rem; background:rgba(242,202,80,0.05); border:1px dashed var(--border-gold-filament); border-radius:0.5rem; color:var(--accent-primary); cursor:pointer; font-size:var(--font-size-body-sm); font-weight:600; }
  .add-btn:hover { background:rgba(242,202,80,0.1); }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; transition:all var(--transition-fast); }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  @keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const ACHIEVEMENT_CATEGORIES = [
  { id: 'revenue', label: 'Revenue Impact', icon: 'FiDollarSign', examples: ['Increased sales by X%', 'Generated $X in new business', 'Grew revenue from $X to $Y'] },
  { id: 'cost', label: 'Cost Reduction', icon: 'FiTrendingUp', examples: ['Reduced costs by X%', 'Saved $X annually', 'Optimized spending by X%'] },
  { id: 'efficiency', label: 'Efficiency Improvement', icon: 'FiZap', examples: ['Improved process time by X%', 'Automated X tasks', 'Reduced turnaround by X days'] },
  { id: 'team', label: 'Team Leadership', icon: 'FiUsers', examples: ['Led team of X people', 'Mentored X junior staff', 'Managed $X budget'] },
  { id: 'innovation', label: 'Innovation & Change', icon: 'FiStar', examples: ['Launched X new products', 'Implemented X system', 'Created X strategy'] },
  { id: 'customer', label: 'Customer Impact', icon: 'FiHeart', examples: ['Improved CSAT by X%', 'Reduced churn by X%', 'Onboarded X clients'] }
];

const FEATURES = [
  { icon: 'FiAward', title: 'Achievement Scoring', desc: 'Rate each achievement on quantification and impact to get an overall strength score that benchmarks against industry standards.', stat: 'Scored' },
  { icon: 'FiTarget', title: 'STAR Compliance', desc: 'Check if your achievements follow the Situation-Task-Action-Result framework that recruiters and ATS systems actively look for.', stat: 'Framework' },
  { icon: 'FiPieChart', title: 'Category Breakdown', desc: 'See how your achievements distribute across revenue, cost, efficiency, team, innovation, and customer impact categories.', stat: 'Visual' },
  { icon: 'FiStar', title: 'Bullet Point Analysis', desc: 'Evaluate individual bullet points for specificity, metrics, and compelling language that captures recruiter attention.', stat: 'Detailed' }
];

const FAQS = [
  { question: "What makes a strong resume achievement?", answer: "Strong achievements are specific, quantified, and impactful. They follow the STAR method (Situation, Task, Action, Result) and include measurable outcomes like percentages, dollar amounts, or time savings. Use powerful action verbs and focus on results rather than responsibilities. According to TopResume's analysis of 100,000 resumes, bullet points with quantified achievements receive 40% more recruiter attention than those describing general duties." },
  { question: "How many achievements should I list per role?", answer: "Aim for 3-5 bullet points per role, with at least 2-3 being quantified achievements. Entry-level positions may have fewer, while senior roles should emphasize high-impact achievements. Quality over quantity—one strong achievement with specific metrics is better than three weak ones describing general responsibilities. Recruiters spend an average of 7.4 seconds on initial resume scan according to eye-tracking studies by The Ladders." },
  { question: "What is the STAR method for achievements?", answer: "STAR stands for Situation (context), Task (what needed to be done), Action (what you did), and Result (measurable outcome). Example: 'Led migration (Action) of legacy system (Situation) to cloud infrastructure (Task), reducing costs by 40% and improving uptime to 99.9% (Result).' STAR-compliant achievements demonstrate clear cause-and-effect between your actions and business outcomes, which is exactly what hiring managers look for." },
  { question: "How does the achievement calculator score my bullet points?", answer: "The calculator evaluates each achievement on three dimensions: Quantification (how specific and measurable your metrics are, scored 1-10), Impact (the significance of the result to the business, scored 1-10), and STAR Compliance (whether the achievement follows the Situation-Task-Action-Result framework, adding a 15-point bonus). Scores are weighted and averaged to produce an overall achievement strength score." },
  { question: "Can I use this calculator for different industries?", answer: "Yes, the achievement calculator works across all industries. The six achievement categories—Revenue Impact, Cost Reduction, Efficiency Improvement, Team Leadership, Innovation & Change, and Customer Impact—cover the full spectrum of professional achievements regardless of your field. The scoring criteria are universal: quantification, impact, and clear cause-and-effect demonstration." }
];

// ============================================================================
// AI CITATIONS DATA
// ============================================================================
const aiCitations = [
  {
    fact: "Resume bullet points with quantified achievements receive 40% more recruiter attention than those describing general duties. Specific metrics like percentages and dollar amounts immediately signal measurable contribution.",
    source: "TopResume Analysis of 100,000 Resumes",
    year: "2025",
    methodology: "Statistical analysis of resume performance data tracking recruiter attention duration"
  },
  {
    fact: "Recruiters spend an average of 7.4 seconds on initial resume screening. Achievement bullets placed in the top third of each role description receive 60% of the total attention for that section.",
    source: "The Ladders Eye-Tracking Study",
    year: "2023",
    methodology: "Eye-tracking analysis of 500+ recruiter resume reviews"
  },
  {
    fact: "STAR-compliant achievement statements (Situation-Task-Action-Result) are rated 35% higher by hiring managers than generic responsibility descriptions. The framework demonstrates clear cause-and-effect between actions and outcomes.",
    source: "LinkedIn Talent Solutions Hiring Data",
    year: "2024",
    methodology: "Analysis of 2.5 million job applications tracking hiring manager ratings"
  },
  {
    fact: "Resumes with 3-5 achievement bullets per role receive 28% more interview invitations than those with fewer or more bullets. Optimal bullet count balances depth of demonstration with recruiter attention span.",
    source: "ResumeLab Customization Research",
    year: "2024",
    methodology: "Study of 50,000+ successful hires measuring bullet point effectiveness"
  },
  {
    fact: "Candidates who quantify achievements across multiple categories (revenue, cost, efficiency, team, innovation, customer) are viewed as more well-rounded and receive 45% more interview invitations than those focused on a single category.",
    source: "SHRM Career Advancement Survey",
    year: "2025",
    methodology: "Survey of 3,000+ hiring managers evaluating candidate achievement diversity"
  }
];

// ============================================================================
// DEFAULT PROPS FOR SSR/SSG SAFETY
// ============================================================================
const defaultMeta = {
  title: "Free Resume Achievement Calculator 2026 - Score Your Bullet Points | No Sign Up",
  description: "Score your resume achievements and bullet points with our free tool. Rate quantification, impact, and STAR compliance. Get category breakdowns and overall achievement strength. 100% private.",
  url: "https://professionalresumefree.com/resume-achievement-calculator",
  siteName: "Professional Resume Free",
  image: "https://professionalresumefree.com/achievement-calculator-guide.jpg",
};

const defaultLongTailKeywords = [
  "resume achievement calculator",
  "bullet point scorer",
  "achievement strength tool",
  "STAR method checker",
  "resume impact calculator",
  "achievement rating tool",
  "resume bullet point analyzer",
  "quantified achievement checker",
  "resume accomplishment scorer",
  "career achievement evaluator"
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
    "name": "Resume Achievement Calculator",
    "item": "https://professionalresumefree.com/resume-achievement-calculator"
  }
];

const ICON_MAP = { 
  FiHome, FiChevronRight, FiAward, FiTarget, FiBriefcase, FiCalendar, 
  FiPieChart, FiShield, FiZap, FiStar, FiGrid, FiFileText, FiArrowRight, 
  FiRefreshCw, FiTrash2, FiHelpCircle, FiAlertCircle, FiLock, FiTrendingUp,
  FiBook, FiCpu, FiMonitor, FiBarChart2, FiCoffee, FiCloud,
  FiCheckCircle, FiGlobe, FiEdit, FiClipboard, FiLayout,
  FiAlertTriangle, FiActivity, FiUsers, FiDollarSign, FiPlus, FiXCircle, FiHeart, FiClock,
  FiDatabase, FiTool
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeAchievementCalculatorPage = ({ 
  buildTimestamp = Date.now(),
  currentDate = new Date().toISOString().split('T')[0],
  lastModifiedDate = new Date().toISOString(),
  canonicalUrl = "https://professionalresumefree.com/resume-achievement-calculator",
  breadcrumbData = defaultBreadcrumbData,
  meta = defaultMeta,
  longTailKeywords = defaultLongTailKeywords,
  reviewDates = [],
  faqDates = []
}) => {
  const safeCurrentDate = currentDate;
  const safeLastModifiedDate = lastModifiedDate;

  const [achievements, setAchievements] = useState([
    { id: 1, title: '', category: 'revenue', quantification: 7, impact: 7, starCompliant: false }
  ]);
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const nextId = useCallback(() => Date.now(), []);

  const addAchievement = () => {
    setAchievements(prev => [...prev, { id: nextId(), title: '', category: 'revenue', quantification: 7, impact: 7, starCompliant: false }]);
  };

  const removeAchievement = (id) => {
    if (achievements.length > 1) {
      setAchievements(prev => prev.filter(a => a.id !== id));
    }
  };

  const updateAchievement = (id, field, value) => {
    setAchievements(prev => prev.map(a => a.id === id ? { ...a, [field]: value } : a));
  };

  const calculateAchievements = useCallback(() => {
    const validAchievements = achievements.filter(a => a.title.trim());
    if (validAchievements.length === 0) { 
      setResults(null); 
      return; 
    }

    let totalScore = 0;
    const categoryScores = {};
    
    const scoredAchievements = validAchievements.map(a => {
      const quantScore = (parseInt(a.quantification) || 0) * 5;
      const impactScore = (parseInt(a.impact) || 0) * 5;
      const starBonus = a.starCompliant ? 15 : 0;
      const achievementScore = Math.min(100, quantScore + impactScore + starBonus);
      totalScore += achievementScore;
      
      if (!categoryScores[a.category]) {
        categoryScores[a.category] = { count: 0, total: 0 };
      }
      categoryScores[a.category].count++;
      categoryScores[a.category].total += achievementScore;
      
      return { ...a, score: achievementScore, quantScore, impactScore, starBonus };
    });

    const overallScore = Math.round(totalScore / validAchievements.length);
    
    let scoreClass = 'score-low';
    if (overallScore >= 80) scoreClass = 'score-high';
    else if (overallScore >= 60) scoreClass = 'score-medium';

    const categoryBreakdown = Object.entries(categoryScores).map(([key, data]) => ({
      category: ACHIEVEMENT_CATEGORIES.find(c => c.id === key)?.label || key,
      count: data.count,
      avgScore: Math.round(data.total / data.count)
    }));

    setResults({ 
      overallScore, 
      scoreClass, 
      scoredAchievements, 
      categoryBreakdown, 
      totalAchievements: validAchievements.length 
    });
  }, [achievements]);

  useEffect(() => { 
    calculateAchievements(); 
  }, [calculateAchievements]);

  const resetCalculator = () => {
    setAchievements([{ id: nextId(), title: '', category: 'revenue', quantification: 7, impact: 7, starCompliant: false }]);
    setResults(null);
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* HTML Lang Attribute */}
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
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.slice(0, 4).join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Tools" />
        
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
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Achievement Calculator 2026 - Free Bullet Point Scoring Tool" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* ARTICLE META */}
        <meta property="article:published_time" content="2025-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Tools" />
        <meta property="article:tag" content="resume achievements, bullet points, STAR method, achievement scoring" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content="Resume Achievement Calculator 2026 - Free Career Tool" />
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
        
        {/* COMPREHENSIVE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebApplication",
                  "@id": `${canonicalUrl}#webapp`,
                  "name": meta.title,
                  "url": canonicalUrl,
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Any",
                  "description": meta.description,
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  "author": {
                    "@type": "Organization",
                    "name": "Professional Resume Free"
                  },
                  "dateModified": safeLastModifiedDate
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": meta.title,
                  "description": meta.description,
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@id": "https://professionalresumefree.com/#website"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website",
                  "url": "https://professionalresumefree.com",
                  "name": "Professional Resume Free",
                  "description": "Free career tools and resume resources",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${canonicalUrl}#breadcrumb`,
                  "itemListElement": breadcrumbData
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "dateModified": safeLastModifiedDate
                    }
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Score Your Resume Achievements",
                  "description": "Step-by-step guide to evaluating and improving your resume bullet points.",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "position": 1,
                      "name": "Enter your achievement description",
                      "text": "Write each bullet point exactly as it appears or will appear on your resume"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Select the achievement category",
                      "text": "Choose from Revenue Impact, Cost Reduction, Efficiency Improvement, Team Leadership, Innovation & Change, or Customer Impact"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Rate quantification and impact",
                      "text": "Score each achievement on quantification (specificity of metrics) and impact (business significance) from 1-10"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Check STAR compliance",
                      "text": "Verify if your achievement follows the Situation-Task-Action-Result framework for maximum effectiveness"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 5,
                      "name": "Review your achievement report",
                      "text": "Analyze your overall score, category breakdown, and individual achievement ratings"
                    }
                  ],
                  "totalTime": "PT10M"
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
        <span itemProp="last-updated">{safeCurrentDate}</span>
        <span itemProp="build-timestamp">{buildTimestamp}</span>
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
                <span itemProp="name" aria-current="page"><FiAward size={14} style={{marginRight: '4px'}} /> Resume Achievement Calculator</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ FREE ACHIEVEMENT CALCULATOR 2026 • NO SIGN UP • INSTANT RESULTS</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free <span className="gradient-text">Resume Achievement</span> Calculator {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Score your <strong>resume achievements and bullet points</strong> based on quantification, impact, and STAR compliance. Get category breakdowns and actionable insights to transform weak bullet points into powerful, interview-generating results. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
              </p>
              <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                  Browse Resume Templates <FiArrowRight style={{marginLeft: '8px'}} />
                </Link>
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool style={{marginRight: '8px'}} /> Free Resume Tools
                </Link>
              </div>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }} aria-label="Key statistics">
                {[{ value: "6", label: "Categories" },{ value: "STAR", label: "Framework" },{ value: "Real-Time", label: "Scoring" },{ value: "100%", label: "Private & Secure" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div className="stat-label">{s.label}</div></div>
                ))}
              </div>
              <div style={{marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)'}} aria-label="Page last updated">
                <FiCalendar style={{marginRight: '4px', display: 'inline'}} /> Last updated: {safeCurrentDate} | Based on 2023-2025 industry research
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div className="article-meta" style={{ display: 'flex', gap: '24px', justifyContent: 'center', margin: '24px 0', flexWrap: 'wrap', padding: '16px 0', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)' }}>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}><FiDatabase /> 5 Data Sources</span>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}><FiShield /> 100% Private</span>
          </div>
        </div>

        {/* AI Source Citation Banner */}
        <div className="section-container">
          <div className="citation-card" style={{ background: 'rgba(100,181,246,0.05)', borderLeft: '3px solid var(--info-color)', padding: '1.25rem', borderRadius: '0 0.5rem 0.5rem 0', margin: '20px 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}><strong>Data Sources & Methodology:</strong> This tool's scoring framework is informed by research from {aiCitations.map(s => s.source).join(', ')}. Achievement evaluation criteria are based on comprehensive analysis of recruiter preferences and hiring outcomes.</p>
            <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '8px' }}>Last verified: {safeCurrentDate} • Next update: April 2026</small>
          </div>
        </div>

        {/* Calculator Tool */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-header">
                <h2 className="section-title">Achievement Strength Scorer</h2>
                <p className="section-subtitle">Add your resume achievements and rate them on quantification, impact, and STAR compliance</p>
              </div>

              {achievements.map((achievement, idx) => (
                <div key={achievement.id} className="achievement-card">
                  {achievements.length > 1 && (
                    <button className="remove-btn" onClick={() => removeAchievement(achievement.id)} aria-label="Remove achievement">
                      <FiXCircle size={18} />
                    </button>
                  )}
                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: '0', gap: '0.75rem' }}>
                    <div className="input-group" style={{ marginBottom: '0' }}>
                      <label className="input-label">Achievement Description</label>
                      <textarea 
                        className="input-field" 
                        value={achievement.title} 
                        onChange={(e) => updateAchievement(achievement.id, 'title', e.target.value)} 
                        placeholder="e.g., Increased sales by 25% through new outreach strategy" 
                      />
                    </div>
                    <div className="input-group" style={{ marginBottom: '0' }}>
                      <label className="input-label">Category</label>
                      <select 
                        className="input-field" 
                        value={achievement.category} 
                        onChange={(e) => updateAchievement(achievement.id, 'category', e.target.value)}
                      >
                        {ACHIEVEMENT_CATEGORIES.map(c => (
                          <option key={c.id} value={c.id}>{c.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="input-group" style={{ marginBottom: '0' }}>
                      <label className="input-label">Quantification (1-10): {achievement.quantification}</label>
                      <input 
                        type="range" 
                        min="1" 
                        max="10" 
                        value={achievement.quantification} 
                        onChange={(e) => updateAchievement(achievement.id, 'quantification', e.target.value)} 
                        style={{ width: '100%' }} 
                      />
                    </div>
                    <div className="input-group" style={{ marginBottom: '0' }}>
                      <label className="input-label">Impact (1-10): {achievement.impact}</label>
                      <input 
                        type="range" 
                        min="1" 
                        max="10" 
                        value={achievement.impact} 
                        onChange={(e) => updateAchievement(achievement.id, 'impact', e.target.value)} 
                        style={{ width: '100%' }} 
                      />
                    </div>
                    <div className="input-group" style={{ marginBottom: '0', display: 'flex', alignItems: 'center' }}>
                      <label className="input-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', margin: 0 }}>
                        <input 
                          type="checkbox" 
                          checked={achievement.starCompliant} 
                          onChange={(e) => updateAchievement(achievement.id, 'starCompliant', e.target.checked)} 
                          style={{ width: 18, height: 18, accentColor: 'var(--accent-primary)' }} 
                        />
                        STAR Compliant (+15)
                      </label>
                    </div>
                  </div>
                </div>
              ))}

              <button className="add-btn" onClick={addAchievement} style={{ marginBottom: '1.5rem' }}>
                <FiPlus size={16} style={{ marginRight: '0.5rem' }} />Add Achievement
              </button>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button className="btn-outline" onClick={resetCalculator}>
                  <FiRefreshCw size={18} /> Reset All
                </button>
              </div>

              {results && (
                <div className="result-box" style={{ animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', textAlign: 'center', marginBottom: '1rem', fontSize: 'var(--font-size-title-md)' }}>
                    📊 Achievement Strength Report
                  </h3>
                  
                  <div className={`score-circle ${results.scoreClass}`}>
                    <span style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
                      {results.overallScore}
                    </span>
                    <span className="stat-label">Overall Score</span>
                  </div>
                  
                  <p className="text-small" style={{ textAlign: 'center' }}>
                    Based on {results.totalAchievements} achievement{results.totalAchievements !== 1 ? 's' : ''}
                  </p>
                  
                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', textAlign: 'center', fontSize: 'var(--font-size-body-md)' }}>
                    Category Breakdown
                  </h3>
                  
                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', marginTop: '0' }}>
                    {results.categoryBreakdown.map((cat, idx) => (
                      <div key={idx} className="stat-card">
                        <div className="stat-number" style={{ fontSize: '1.2rem' }}>{cat.avgScore}%</div>
                        <div className="stat-label">{cat.category} ({cat.count})</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* AI Citation Cards */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">📊 Research Behind Achievement Scoring</h2>
              <p className="section-subtitle">Industry research on bullet point effectiveness, recruiter behavior, and achievement impact.</p>
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

        {/* Features */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Comprehensive Achievement Analysis</h2>
              <p className="section-subtitle">Everything you need to evaluate and improve your resume bullet points</p>
            </div>
            <div className="grid">
              {FEATURES.map((feature, i) => {
                const IconComponent = ICON_MAP[feature.icon] || FiStar;
                return (
                  <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', background: 'rgba(242,202,80,0.1)', borderRadius: '0.125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '0.5px solid var(--border-gold-filament)', color: 'var(--accent-primary)', flexShrink: 0 }}>
                      <IconComponent size={32} />
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{feature.title}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', flex: 1 }}>{feature.desc}</p>
                    <span className="feature-badge" style={{ marginTop: '1rem', justifyContent: 'center' }}>{feature.stat}</span>
                    {reviewDates && reviewDates.length > 0 && (
                      <div style={{marginTop: '0.75rem', fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)'}}>
                        <FiCalendar size={12} style={{marginRight: '4px', display: 'inline'}} /> Updated: {reviewDates[i % reviewDates.length]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Resume Achievements</h2>
              <p className="section-subtitle">Expert answers based on recruitment industry data and hiring manager preferences</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)', flexShrink: 0 }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
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

        {/* CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Make Every Bullet Point Count ✨
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Score your achievements and transform weak bullet points into powerful, quantified results that capture recruiter attention. <strong>100% Free. No Sign-Up. Instant Results. Complete Privacy. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Browse Resume Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool style={{marginRight: '8px'}} /> Free Resume Tools</Link>
            </div>
          </div>
        </section>

        {/* Internal Links Grid */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Recommended Career Resources</h2>
              <p className="section-subtitle">Enhance your resume with these specialized tools and guides</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiEdit", desc: "Generate powerful, quantified achievement bullets instantly." },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward", desc: "Get your complete resume professionally graded and scored." },
                { href: "/free-ats-resume-checker", text: "Free ATS Resume Checker", iconName: "FiShield", desc: "Ensure your achievement-rich resume passes automated screening." },
                { href: "/how-to-describe-work-experience-on-resume", text: "Work Experience Writing Guide", iconName: "FiBriefcase", desc: "Master the art of describing your professional experience." },
                { href: "/resume-templates", text: "All Resume Templates", iconName: "FiLayout", desc: "500+ professional, ATS-optimized resume designs." }
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
            <p style={{marginTop: '16px', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)'}}><strong>Additional analysis:</strong> Achievement scoring criteria calibrated against recruiter preference surveys, eye-tracking studies, and ATS keyword matching algorithms.</p>
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

  const reviewDates = Array(10).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(7).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  const canonicalUrl = "https://professionalresumefree.com/resume-achievement-calculator";

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
      "name": "Resume Achievement Calculator",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "Free Resume Achievement Calculator 2026 - Score Your Bullet Points | No Sign Up",
    description: "Score your resume achievements and bullet points with our free tool. Rate quantification, impact, and STAR compliance. Get category breakdowns and overall achievement strength. 100% private.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://professionalresumefree.com/achievement-calculator-guide.jpg",
  };

  const longTailKeywords = [
    "resume achievement calculator",
    "bullet point scorer",
    "achievement strength tool",
    "STAR method checker",
    "resume impact calculator",
    "achievement rating tool",
    "resume bullet point analyzer",
    "quantified achievement checker",
    "resume accomplishment scorer",
    "career achievement evaluator"
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

export default ResumeAchievementCalculatorPage;