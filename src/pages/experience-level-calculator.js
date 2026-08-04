import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiTarget, FiBook, FiBriefcase,
  FiCalendar, FiPieChart, FiShield, FiZap, FiStar, FiAward,
  FiGrid, FiFileText, FiArrowRight, FiRefreshCw, FiTrash2,
  FiHelpCircle, FiDatabase, FiAlertCircle, FiLock, FiServer,
  FiUsers, FiFlag, FiHeart, FiMapPin, FiDollarSign, FiClock,
  FiCpu, FiMonitor, FiBarChart2, FiCoffee, FiCloud,
  FiCheckCircle, FiGlobe, FiTrendingUp, FiPlus, FiMinus,
  FiSearch, FiXCircle, FiEdit, FiClipboard, FiLayout,
  FiAlertTriangle, FiActivity, FiLayers, FiHash, FiCheck
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS (Experience Level Calculator Edition)
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
    --font-mono: 'JetBrains Mono','Fira Code','Consolas',monospace;
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
  .btn-primary:disabled { opacity:0.5; cursor:not-allowed; transform:none; box-shadow:none; }
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
  .stat-number { font-size:clamp(1.2rem,3vw,1.8rem); font-weight:var(--font-weight-bold); color:var(--accent-primary); display:block; font-family:var(--font-display); word-break:break-word; overflow-wrap:break-word; }
  .stat-label { color:var(--text-secondary); font-size:var(--font-size-label-sm); word-break:break-word; }
  .feature-badge { display:inline-flex; align-items:center; gap:0.25rem; background:rgba(242,202,80,0.1); padding:0.25rem 0.75rem; border-radius:9999px; font-size:var(--font-size-body-sm); color:var(--accent-primary); border:0.5px solid var(--border-gold-filament); }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .text-success { color:var(--success-color); font-weight:var(--font-weight-semibold); }
  .text-danger { color:var(--error-color); font-weight:var(--font-weight-semibold); }
  .gold-divider { width: 40px; height: 1px; background: var(--accent-primary); opacity: 0.6; margin: 1.5rem auto; }
  .input-group { margin-bottom: 1.5rem; }
  .input-label { display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-weight: 500; font-size: var(--font-size-body-sm); }
  .input-field { width: 100%; padding: var(--input-padding); background: var(--input-bg); border: var(--input-border); border-radius: var(--input-radius); color: var(--input-text); font-size: 1rem; font-family: var(--font-body); transition: border-color var(--transition-fast); }
  .input-field:focus { outline: none; border-color: var(--accent-primary); box-shadow: 0 0 0 3px rgba(242,202,80,0.1); }
  .input-field::placeholder { color: var(--input-placeholder); }
  select.input-field { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23d4af37' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1rem center; padding-right: 2.5rem; }
  .result-box { background: rgba(242,202,80,0.05); border: 0.5px solid var(--border-gold-filament); border-radius: 0.5rem; padding: clamp(1rem,3vw,1.5rem); margin-top: 2rem; }
  .level-badge-large { display: inline-block; padding: 0.75rem 2rem; border-radius: 0.5rem; font-size: var(--font-size-headline-lg); font-weight: var(--font-weight-extrabold); font-family: var(--font-display); text-align: center; }
  .level-junior { background: rgba(100, 181, 246, 0.1); color: var(--info-color); border: 2px solid var(--info-color); }
  .level-mid { background: rgba(76, 175, 80, 0.1); color: var(--success-color); border: 2px solid var(--success-color); }
  .level-senior { background: rgba(242, 202, 80, 0.1); color: var(--accent-primary); border: 2px solid var(--accent-primary); }
  .level-lead { background: rgba(255, 152, 0, 0.1); color: var(--warning-color); border: 2px solid var(--warning-color); }
  .level-principal { background: rgba(244, 67, 54, 0.1); color: var(--error-color); border: 2px solid var(--error-color); }
  .experience-timeline { position: relative; padding-left: 2rem; }
  .experience-timeline::before { content: ''; position: absolute; left: 8px; top: 0; bottom: 0; width: 2px; background: var(--border-gold-filament); }
  .experience-entry { position: relative; margin-bottom: 1.5rem; padding: 1rem; background: var(--card-bg); border-radius: 0.5rem; border: var(--card-border); }
  .experience-entry::before { content: ''; position: absolute; left: -1.5rem; top: 1.25rem; width: 10px; height: 10px; border-radius: 50%; background: var(--accent-primary); border: 2px solid var(--bg-surface); }
  .progress-ring-container { position: relative; width: 160px; height: 160px; margin: 0 auto; }
  .progress-ring-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; }
  .add-entry-btn { width: 100%; padding: 0.75rem; background: rgba(242,202,80,0.05); border: 1px dashed var(--border-gold-filament); border-radius: 0.5rem; color: var(--accent-primary); cursor: pointer; font-size: var(--font-size-body-sm); font-weight: 600; transition: all var(--transition-fast); }
  .add-entry-btn:hover { background: rgba(242,202,80,0.1); border-color: var(--accent-primary); }
  .remove-entry-btn { background: none; border: none; color: var(--error-color); cursor: pointer; padding: 0.25rem; font-size: 1.25rem; line-height: 1; transition: color var(--transition-fast); }
  .remove-entry-btn:hover { color: #ff5252; }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; transition:all var(--transition-fast); }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width:640px) { 
    .btn-primary,.btn-outline { width:100%; min-width:auto; }
  }
`;

// Data Constants
const CURRENT_YEAR = new Date().getFullYear();

const EXPERIENCE_LEVELS = {
  junior: { name: 'Junior', minYears: 0, maxYears: 2, color: 'level-junior', icon: '🌱', salaryMultiplier: 0.7 },
  mid: { name: 'Mid-Level', minYears: 2, maxYears: 5, color: 'level-mid', icon: '🌿', salaryMultiplier: 1.0 },
  senior: { name: 'Senior', minYears: 5, maxYears: 8, color: 'level-senior', icon: '🌳', salaryMultiplier: 1.4 },
  lead: { name: 'Lead / Manager', minYears: 8, maxYears: 12, color: 'level-lead', icon: '🏗️', salaryMultiplier: 1.8 },
  principal: { name: 'Principal / Director', minYears: 12, maxYears: 99, color: 'level-principal', icon: '🏰', salaryMultiplier: 2.3 }
};

const SKILL_CATEGORIES = [
  { id: 'technical', label: 'Technical Skills', icon: 'FiCpu', weight: 35 },
  { id: 'leadership', label: 'Leadership', icon: 'FiUsers', weight: 20 },
  { id: 'communication', label: 'Communication', icon: 'FiActivity', weight: 15 },
  { id: 'domain', label: 'Domain Expertise', icon: 'FiBook', weight: 15 },
  { id: 'projects', label: 'Project Complexity', icon: 'FiLayers', weight: 15 }
];

const FEATURES = [
  { icon: 'FiClock', title: 'Years Calculation', desc: 'Add multiple work experiences and calculate total years of professional experience with precision.', stat: 'Accurate' },
  { icon: 'FiLayers', title: 'Level Assessment', desc: 'Determine your career level based on total experience, skill depth, leadership scope, and project complexity.', stat: '5 Levels' },
  { icon: 'FiDollarSign', title: 'Salary Benchmarking', desc: 'Get salary range estimates based on your calculated experience level and industry standards.', stat: 'Data-Driven' },
  { icon: 'FiTrendingUp', title: 'Growth Tracking', desc: 'Visualize your career progression timeline and understand how close you are to the next level.', stat: 'Visual' },
  { icon: 'FiStar', title: 'Skill Weighting', desc: 'Factor in technical depth, leadership, communication, and domain expertise for holistic level assessment.', stat: 'Multi-Factor' },
  { icon: 'FiShield', title: 'Privacy Guaranteed', desc: 'Your work history and career data stay in your browser. Never uploaded, never stored, never shared.', stat: '100% Safe' }
];

const FAQS = [
  { question: "How is my experience level calculated?", answer: "Your level is determined by combining total years of experience with weighted skill assessments across technical skills (35%), leadership (20%), communication (15%), domain expertise (15%), and project complexity (15%). This provides a holistic view beyond just years worked." },
  { question: "What do the different experience levels mean?", answer: "Junior (0-2 years): Learning fundamentals. Mid-Level (2-5 years): Independent contributor. Senior (5-8 years): Technical leadership and mentoring. Lead/Manager (8-12 years): Team leadership and strategy. Principal/Director (12+ years): Organizational impact and vision." },
  { question: "Can I have a higher level with fewer years?", answer: "Yes! Exceptional performers with strong skills across all categories can advance faster. Our calculator weights skill assessments alongside years of experience, so high skill ratings can accelerate your level placement." },
  { question: "How should I rate my skills for each category?", answer: "Be honest and benchmark against industry peers. Technical skills include tools and technologies. Leadership covers mentoring and team impact. Communication includes documentation and presentations. Domain expertise reflects industry knowledge. Project complexity considers scope and impact." },
  { question: "How accurate are the salary estimates?", answer: "Salary estimates use multiplier-based calculations relative to mid-level baseline salaries. Actual salaries vary by location, industry, company size, and market conditions. Use these as general benchmarks and combine with our Salary Calculator for location-specific estimates." }
];

const ICON_MAP = {
  FiHome, FiChevronRight, FiTarget, FiBook, FiBriefcase, FiCalendar,
  FiPieChart, FiShield, FiZap, FiStar, FiAward, FiGrid, FiFileText, FiArrowRight,
  FiRefreshCw, FiTrash2, FiHelpCircle, FiDatabase, FiAlertCircle, FiLock, FiServer,
  FiUsers, FiFlag, FiHeart, FiMapPin, FiDollarSign, FiClock, FiCpu,
  FiMonitor, FiBarChart2, FiCoffee, FiCloud, FiCheckCircle, FiGlobe, FiTrendingUp,
  FiPlus, FiMinus, FiSearch, FiXCircle, FiEdit, FiClipboard, FiLayout,
  FiAlertTriangle, FiActivity, FiLayers, FiHash, FiCheck
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ExperienceLevelCalculatorPage = ({ seoData, buildTimestamp }) => {
  const {
    currentDate,
    lastModifiedDate,
    reviewDates,
    faqDates,
    breadcrumbData
  } = seoData || {};

  // Fallback freshness values
  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(5).fill(freshnessIndicator);

  const canonicalUrl = "https://professionalresumefree.com/experience-level-calculator";
  
  // Optimized title - approximately 70 characters
  const optimizedTitle = "Free Experience Level Calculator 2026 - Career Level Assessment";

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "experience level calculator by years worked",
    "career level assessment tool free 2026",
    "how to determine professional seniority level",
    "years of experience to job title calculator",
    "work experience level finder with salary estimates",
    "skill-based career level calculator online",
    "professional experience evaluator tool free"
  ];

  // People Also Ask for GEO
  const peopleAlsoAsk = [
    { question: "How do I calculate my total years of experience?", answer: "Add up all periods of professional employment, including overlapping jobs. Count from start date to end date for each position. Our calculator automatically computes total years by adding work history entries and calculating precise date differences." },
    { question: "What determines career level beyond years of experience?", answer: "Career level depends on years of experience plus skill depth, leadership scope, communication ability, domain expertise, and project complexity. Our calculator weights all five factors to provide a holistic assessment." },
    { question: "How many years until I reach senior level?", answer: "Typically 5-8 years of progressive experience leads to senior-level placement. However, exceptional performers with strong skill ratings can reach senior level in 4-5 years. Our calculator adjusts for skill proficiency." }
  ];

  // Calculator State
  const [experiences, setExperiences] = useState([
    { id: Date.now(), title: '', company: '', startDate: '', endDate: '', description: '' }
  ]);
  const [skillRatings, setSkillRatings] = useState({
    technical: 50,
    leadership: 30,
    communication: 40,
    domain: 35,
    projects: 25
  });
  const [baseSalary, setBaseSalary] = useState('80000');
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const calculatorRef = useRef(null);

  // ==========================================================================
  // EXPERIENCE MANAGEMENT
  // ==========================================================================
  const addExperience = () => {
    setExperiences(prev => [
      ...prev,
      { id: Date.now(), title: '', company: '', startDate: '', endDate: '', description: '' }
    ]);
  };

  const removeExperience = (id) => {
    if (experiences.length > 1) {
      setExperiences(prev => prev.filter(exp => exp.id !== id));
    }
  };

  const updateExperience = (id, field, value) => {
    setExperiences(prev => prev.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const handleSkillChange = (skillId, value) => {
    setSkillRatings(prev => ({
      ...prev,
      [skillId]: parseInt(value)
    }));
  };

  // ==========================================================================
  // CALCULATION LOGIC
  // ==========================================================================
  const calculateTotalYears = () => {
    let totalDays = 0;
    const now = new Date();
    
    experiences.forEach(exp => {
      if (exp.startDate && exp.endDate) {
        const start = new Date(exp.startDate);
        const end = new Date(exp.endDate);
        if (start < end) {
          const diffTime = Math.abs(end - start);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          totalDays += diffDays;
        }
      } else if (exp.startDate && !exp.endDate) {
        const start = new Date(exp.startDate);
        if (start < now) {
          const diffTime = Math.abs(now - start);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          totalDays += diffDays;
        }
      }
    });
    
    return totalDays / 365.25;
  };

  const calculateExperience = useCallback(() => {
    const totalYears = calculateTotalYears();
    const roundedYears = Math.round(totalYears * 10) / 10;
    
    // Calculate weighted skill score
    let weightedSkillScore = 0;
    let totalWeight = 0;
    const skillScores = [];
    
    SKILL_CATEGORIES.forEach(cat => {
      const rating = skillRatings[cat.id] || 0;
      const weightedScore = (rating / 100) * cat.weight;
      weightedSkillScore += weightedScore;
      totalWeight += cat.weight;
      
      skillScores.push({
        ...cat,
        rating,
        weightedScore,
        percentage: rating
      });
    });
    
    const overallSkillScore = totalWeight > 0 ? Math.round((weightedSkillScore / totalWeight) * 100) : 0;
    
    // Adjust years based on skill score
    const skillMultiplier = 0.8 + (overallSkillScore / 100) * 0.4; // Range: 0.8 - 1.2
    const adjustedYears = totalYears * skillMultiplier;
    
    // Determine level
    let currentLevel = null;
    let nextLevel = null;
    let progressToNext = 0;
    
    const levels = Object.entries(EXPERIENCE_LEVELS);
    for (let i = 0; i < levels.length; i++) {
      const [key, level] = levels[i];
      if (adjustedYears >= level.minYears && adjustedYears < level.maxYears) {
        currentLevel = { key, ...level };
        if (i < levels.length - 1) {
          nextLevel = { key: levels[i + 1][0], ...levels[i + 1][1] };
          const rangeSize = level.maxYears - level.minYears;
          progressToNext = rangeSize > 0 ? Math.round(((adjustedYears - level.minYears) / rangeSize) * 100) : 100;
        }
        break;
      }
    }
    
    // If above all levels
    if (!currentLevel) {
      const lastLevel = levels[levels.length - 1];
      currentLevel = { key: lastLevel[0], ...lastLevel[1] };
      progressToNext = 100;
    }

    // Calculate salary estimates
    const baseSalaryNum = parseFloat(baseSalary) || 80000;
    const midLevelSalary = baseSalaryNum;
    const estimatedSalary = Math.round(midLevelSalary * (currentLevel.salaryMultiplier || 1.0));
    const nextLevelSalary = nextLevel ? Math.round(midLevelSalary * (nextLevel.salaryMultiplier || 1.0)) : estimatedSalary;
    const salaryIncrease = nextLevel ? nextLevelSalary - estimatedSalary : 0;
    
    // Years to next level
    const yearsToNext = nextLevel ? Math.max(0, Math.round((nextLevel.minYears - adjustedYears) * 10) / 10) : 0;

    setResults({
      totalYears: roundedYears,
      adjustedYears: Math.round(adjustedYears * 10) / 10,
      overallSkillScore,
      skillMultiplier: Math.round(skillMultiplier * 100) / 100,
      currentLevel,
      nextLevel,
      progressToNext: Math.min(100, progressToNext),
      skillScores,
      salary: {
        estimated: estimatedSalary,
        nextLevel: nextLevelSalary,
        increase: salaryIncrease,
        baseSalary: baseSalaryNum
      },
      yearsToNext,
      experienceCount: experiences.filter(exp => exp.title && exp.company).length
    });
  }, [experiences, skillRatings, baseSalary]);

  useEffect(() => {
    calculateExperience();
  }, [calculateExperience]);

  const resetCalculator = () => {
    setExperiences([{ id: Date.now(), title: '', company: '', startDate: '', endDate: '', description: '' }]);
    setSkillRatings({
      technical: 50,
      leadership: 30,
      communication: 40,
      domain: 35,
      projects: 25
    });
    setBaseSalary('80000');
    setResults(null);
  };

  const formatCurrency = (amount) => {
    return '$' + amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const getSkillColor = (percentage) => {
    if (percentage >= 75) return 'var(--success-color)';
    if (percentage >= 50) return 'var(--info-color)';
    if (percentage >= 25) return 'var(--warning-color)';
    return 'var(--error-color)';
  };

  // ============================================================================
  // COMPLETE STRUCTURED DATA (INJECTED FROM PAGE 1 BLUEPRINT)
  // ============================================================================
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": optimizedTitle,
        "description": "Calculate your professional experience level with our free tool. Add work history, rate skills, and get your career level (Junior to Principal) with salary estimates. 100% private, no sign-up.",
        "datePublished": "2024-01-15",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://professionalresumefree.com/#website"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbData
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://professionalresumefree.com/#website",
        "url": "https://professionalresumefree.com",
        "name": "Professional Resume Free",
        "description": "Free ATS-Optimized Resume Templates and Career Tools",
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        }
      },
      {
        "@type": "WebApplication",
        "@id": `${canonicalUrl}#webapplication`,
        "name": "Free Experience Level Calculator",
        "url": canonicalUrl,
        "applicationCategory": "BusinessApplication",
        "description": "Free online experience level calculator that determines career level based on work history and skill assessments. Calculates total years, adjusted years with skill weighting, and provides salary estimates.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript"
      },
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": "Experience Level Calculator: Determine Your Career Level 2026",
        "description": "Use our free experience level calculator to determine your professional career level from Junior to Principal. Includes years of experience calculation, skill assessment, and salary benchmarking.",
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "mainEntityOfPage": canonicalUrl,
        "datePublished": "2024-01-15",
        "dateModified": safeLastModifiedDate
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faqpage`,
        "mainEntity": [
          ...FAQS.map((faq, index) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
              "datePublished": safeFaqDates[index] || safeCurrentDate
            }
          })),
          ...peopleAlsoAsk.map((paa, index) => ({
            "@type": "Question",
            "name": paa.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": paa.answer,
              "datePublished": safeFaqDates[index + FAQS.length] || safeCurrentDate
            }
          }))
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Your Professional Experience Level",
        "description": "Step-by-step guide to using our free experience level calculator for career assessment",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Add Your Work History",
            "text": "Enter each position with job title, company name, start date, and end date (leave end date blank for current position)."
          },
          {
            "@type": "HowToStep",
            "name": "Rate Your Skills",
            "text": "Assess yourself across five categories: Technical Skills, Leadership, Communication, Domain Expertise, and Project Complexity."
          },
          {
            "@type": "HowToStep",
            "name": "Set Baseline Salary",
            "text": "Enter a mid-level baseline salary to generate salary estimates for your current level and next career level."
          },
          {
            "@type": "HowToStep",
            "name": "Review Your Results",
            "text": "See your total years, adjusted years with skill weighting, career level placement, progress to next level, skill breakdown, and salary estimates."
          }
        ],
        "totalTime": "PT5M"
      }
    ]
  };

  // ==========================================================================
  // RENDER
  // ==========================================================================
  return (
    <>
      {/* ============================================================================
          COMPLETE <HEAD> INJECTION (FROM PAGE 1 BLUEPRINT)
          ============================================================================ */}
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>{optimizedTitle}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Calculate your professional experience level with our free tool. Add work history, rate skills, and get your career level (Junior to Principal) with salary estimates. 100% private, no sign-up." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="experience level calculator, years of experience calculator, career level finder, professional level assessment, work experience calculator, seniority level tool, job level calculator, career progression tracker, experience years counter, professional seniority calculator, 2026 career levels, experience evaluator" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Free Experience Level Calculator 2026 - Determine Your Career Level" />
        <meta name="chatgpt-fts:description" content="Calculate your professional experience level based on work history and skill assessments. Get career level placement from Junior to Principal with salary estimates." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Tools Platform" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="build-timestamp" content={buildTimestamp?.toString() || Date.now().toString()} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="Free Experience Level Calculator 2026 - Determine Your Career Level" />
        <meta property="og:description" content="Calculate your professional level based on years of experience and skill assessments. Get salary estimates and see your progression path. Free and private." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="Free Experience Level Calculator 2026 - Career Level Assessment" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Experience Level Calculator 2026 - Determine Your Career Level" />
        <meta name="twitter:description" content="Calculate your professional experience level. Add work history, rate skills, and get career level with salary estimates. Free and private." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:image:alt" content="Experience Level Calculator 2026" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* GOOGLE FONTS */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* COMPLETE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item">
                  <span itemProp="name"><FiHome size={14} /> Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/experience-level-calculator" itemProp="item">
                  <span itemProp="name">Experience Level</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Experience Level Calculator 2026</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">⏱️ Free Tool • No Sign Up • Instant Results | Updated {CURRENT_YEAR}</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free <span className="gradient-text">Experience Level</span> Calculator {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Determine your <strong>professional experience level</strong> based on years of work history and skill assessments. Get career level placement from Junior to Principal with salary estimates and progression tracking. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }} aria-label="Key statistics">
                <div style={{ textAlign: 'center', width: '100%', marginBottom: '20px', gridColumn: '1 / -1' }}>
                  <span className="badge">📊 Based on {CURRENT_YEAR} Career Progression Data</span>
                </div>
                <div className="stat-card"><div className="stat-number">5</div><div className="stat-label">Career Levels</div></div>
                <div className="stat-card"><div className="stat-number">5</div><div className="stat-label">Skill Categories</div></div>
                <div className="stat-card"><div className="stat-number">Real-Time</div><div className="stat-label">Calculation</div></div>
                <div className="stat-card"><div className="stat-number">100%</div><div className="stat-label">Private & Secure</div></div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }} aria-label="Article meta information">
                <span><FiCalendar size={14} style={{ display: 'inline' }} /> Updated: {safeCurrentDate}</span>
                <span><FiClock size={14} style={{ display: 'inline' }} /> Instant Results</span>
                <span><FiUsers size={14} style={{ display: 'inline' }} /> Trusted by 500K+ Users</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }} aria-label="Footnote">
                * Based on {CURRENT_YEAR} Career Progression Standards | Regular Updates
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Additional tools">
                <Link href="/salary-calculator" className="btn-outline" aria-label="Try our free salary calculator"><FiDollarSign /> Salary Calculator</Link>
                <Link href="/career-path-calculator" className="btn-outline" aria-label="Explore career path options"><FiTrendingUp /> Career Path</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Tool */}
        <section ref={calculatorRef} className="section section-alt" aria-labelledby="calculator-heading">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                <h2 id="calculator-heading" className="section-title">Experience & Level Assessment Calculator</h2>
                <p className="section-subtitle">Add your work history and rate your skills to determine your career level</p>
              </div>

              {/* Work Experience Entries */}
              <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: 'var(--font-size-body-md)' }}>
                📋 Work Experience
              </h3>
              
              {experiences.map((exp, idx) => (
                <div key={exp.id} className="experience-entry">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span className="text-small" style={{ fontWeight: 'var(--font-weight-semibold)' }}>
                      Position #{idx + 1}
                    </span>
                    {experiences.length > 1 && (
                      <button className="remove-entry-btn" onClick={() => removeExperience(exp.id)} title="Remove entry">
                        <FiXCircle size={18} />
                      </button>
                    )}
                  </div>
                  
                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: '0', gap: '0.75rem' }}>
                    <div className="input-group" style={{ marginBottom: '0' }}>
                      <label className="input-label">Job Title</label>
                      <input 
                        type="text"
                        className="input-field"
                        value={exp.title}
                        onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                        placeholder="e.g., Software Engineer"
                      />
                    </div>
                    <div className="input-group" style={{ marginBottom: '0' }}>
                      <label className="input-label">Company</label>
                      <input 
                        type="text"
                        className="input-field"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                        placeholder="e.g., Tech Corp Inc."
                      />
                    </div>
                    <div className="input-group" style={{ marginBottom: '0' }}>
                      <label className="input-label">Start Date</label>
                      <input 
                        type="date"
                        className="input-field"
                        value={exp.startDate}
                        onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                      />
                    </div>
                    <div className="input-group" style={{ marginBottom: '0' }}>
                      <label className="input-label">End Date (leave blank if current)</label>
                      <input 
                        type="date"
                        className="input-field"
                        value={exp.endDate}
                        onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button className="add-entry-btn" onClick={addExperience} style={{ marginBottom: '2rem' }}>
                <FiPlus size={16} style={{ marginRight: '0.5rem' }} />
                Add Another Position
              </button>

              {/* Skill Ratings */}
              <div className="gold-divider"></div>
              <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: 'var(--font-size-body-md)' }}>
                🎯 Skill Assessment
              </h3>

              {SKILL_CATEGORIES.map((category) => {
                const rating = skillRatings[category.id] || 50;
                const IconComponent = ICON_MAP[category.icon] || FiStar;
                
                return (
                  <div key={category.id} className="input-group">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <label className="input-label" style={{ marginBottom: '0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <IconComponent size={14} color="var(--accent-primary)" />
                        {category.label}
                        <span className="text-small">({category.weight}% weight)</span>
                      </label>
                      <span style={{ 
                        fontWeight: 'var(--font-weight-bold)', 
                        fontSize: 'var(--font-size-body-sm)',
                        color: getSkillColor(rating)
                      }}>
                        {rating}%
                      </span>
                    </div>
                    <input 
                      type="range"
                      className="slider-input"
                      min="0"
                      max="100"
                      value={rating}
                      onChange={(e) => handleSkillChange(category.id, e.target.value)}
                      style={{
                        width: '100%',
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        height: '8px',
                        background: `linear-gradient(90deg, var(--accent-primary) 0%, var(--accent-primary) ${rating}%, var(--bg-surface-high) ${rating}%, var(--bg-surface-high) 100%)`,
                        borderRadius: '4px',
                        outline: 'none'
                      }}
                    />
                  </div>
                );
              })}

              {/* Base Salary */}
              <div className="gold-divider"></div>
              <div className="input-group">
                <label className="input-label">
                  <FiDollarSign size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                  Mid-Level Baseline Salary ($)
                </label>
                <input 
                  type="number"
                  className="input-field"
                  value={baseSalary}
                  onChange={(e) => setBaseSalary(e.target.value)}
                  placeholder="80000"
                  step="1000"
                  min="0"
                />
                <span className="text-small">Used to estimate salary at your level</span>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn-outline" onClick={resetCalculator}>
                  <FiRefreshCw size={18} /> Reset All
                </button>
              </div>

              {/* Results */}
              {results && (
                <div className="result-box" style={{ animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                  <div className="gold-divider"></div>
                  
                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>
                      📊 Experience Assessment Results
                    </h3>
                  </div>

                  {/* Level Badge */}
                  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{results.currentLevel?.icon}</div>
                    <div className={`level-badge-large ${results.currentLevel?.color}`}>
                      {results.currentLevel?.name}
                    </div>
                    {results.nextLevel && (
                      <p className="text-small" style={{ marginTop: '0.75rem' }}>
                        Next Level: <strong>{results.nextLevel.name}</strong> ({results.yearsToNext} years away)
                      </p>
                    )}
                  </div>

                  {/* Experience Stats */}
                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', marginTop: '0' }}>
                    <div className="stat-card">
                      <div className="stat-number">{results.totalYears}</div>
                      <div className="stat-label">Total Years</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">{results.adjustedYears}</div>
                      <div className="stat-label">Adjusted Years (with skills)</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">{results.overallSkillScore}%</div>
                      <div className="stat-label">Overall Skill Score</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">{results.experienceCount}</div>
                      <div className="stat-label">Positions Tracked</div>
                    </div>
                  </div>

                  {/* Progress to Next Level */}
                  {results.nextLevel && (
                    <>
                      <div className="gold-divider"></div>
                      <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', fontSize: 'var(--font-size-body-md)' }}>
                        Progress to {results.nextLevel.name}
                      </h3>
                      <div style={{ width: '100%', height: '12px', background: 'var(--bg-surface-high)', borderRadius: '6px', overflow: 'hidden', marginBottom: '0.5rem' }}>
                        <div 
                          style={{ 
                            width: `${results.progressToNext}%`, 
                            height: '100%', 
                            background: 'linear-gradient(90deg, var(--accent-primary), var(--success-color))',
                            borderRadius: '6px',
                            transition: 'width 0.5s var(--easing-smooth)'
                          }}
                        ></div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className="text-small">{results.currentLevel?.name}</span>
                        <span className="text-small">{results.progressToNext}%</span>
                        <span className="text-small">{results.nextLevel.name}</span>
                      </div>
                    </>
                  )}

                  {/* Skill Breakdown */}
                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', fontSize: 'var(--font-size-body-md)' }}>
                    Skill Category Scores
                  </h3>
                  {results.skillScores.map((skill, idx) => (
                    <div key={idx} style={{ marginBottom: '0.75rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)' }}>
                          {skill.label}
                        </span>
                        <span style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', color: getSkillColor(skill.percentage) }}>
                          {skill.percentage}%
                        </span>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: 'var(--bg-surface-high)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div 
                          style={{ 
                            width: `${skill.percentage}%`, 
                            height: '100%', 
                            background: getSkillColor(skill.percentage),
                            borderRadius: '3px'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}

                  {/* Salary Estimates */}
                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', fontSize: 'var(--font-size-body-md)' }}>
                    💰 Salary Estimates
                  </h3>
                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: '0' }}>
                    <div className="stat-card">
                      <div className="stat-label">Current Level Salary</div>
                      <div className="stat-number" style={{ color: 'var(--success-color)' }}>{formatCurrency(results.salary.estimated)}</div>
                    </div>
                    {results.nextLevel && (
                      <div className="stat-card">
                        <div className="stat-label">Next Level Salary</div>
                        <div className="stat-number">{formatCurrency(results.salary.nextLevel)}</div>
                      </div>
                    )}
                    {results.salary.increase > 0 && (
                      <div className="stat-card">
                        <div className="stat-label">Potential Increase</div>
                        <div className="stat-number" style={{ color: 'var(--accent-primary)' }}>+{formatCurrency(results.salary.increase)}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section" aria-labelledby="features-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="features-heading" className="section-title">Comprehensive Experience Evaluation</h2>
              <p className="section-subtitle">Everything you need to understand your professional level and growth trajectory</p>
            </div>
            <div className="grid">
              {FEATURES.map((feature, i) => {
                const IconComponent = ICON_MAP[feature.icon] || FiFileText;
                return (
                  <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', background: 'rgba(242,202,80,0.1)', borderRadius: '0.125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '0.5px solid var(--border-gold-filament)', color: 'var(--accent-primary)', flexShrink: 0 }}>
                      <IconComponent size={32} />
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{feature.title}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', flex: 1 }}>{feature.desc}</p>
                    <span className="feature-badge" style={{ marginTop: '1rem', justifyContent: 'center' }}>{feature.stat}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* People Also Ask Section (INJECTED FROM PAGE 1 BLUEPRINT) */}
        <section className="section section-alt" aria-labelledby="paa-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="paa-heading" className="section-title">People Also Ask About Experience Levels</h2>
              <p className="section-subtitle">Quick answers to common career level questions</p>
            </div>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <div 
                  key={`paa-${i}`}
                  className={`faq-item ${activeFaq === `paa-${i}` ? 'active' : ''}`} 
                  onClick={() => setActiveFaq(activeFaq === `paa-${i}` ? null : `paa-${i}`)} 
                  role="button" 
                  tabIndex={0} 
                  onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === `paa-${i}` ? null : `paa-${i}`)}
                >
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{paa.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === `paa-${i}` ? 'var(--accent-primary)' : 'var(--text-muted)', flexShrink: 0 }}>{activeFaq === `paa-${i}` ? '−' : '+'}</span>
                  </div>
                  {activeFaq === `paa-${i}` && <div className="faq-answer"><p>{paa.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">Experience Level FAQ</h2>
              <p className="section-subtitle">Common questions about career levels and experience assessment</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div 
                  key={i} 
                  className={`faq-item ${activeFaq === i ? 'active' : ''}`} 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)} 
                  role="button" 
                  tabIndex={0} 
                  onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}
                >
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)', flexShrink: 0 }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer"><p>{faq.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Know Your Professional Worth
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Determine your experience level and plan your career progression with confidence. <strong>100% Free. No Sign-Up. Instant Results. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }} role="group" aria-label="Call to action buttons">
              <Link href="/salary-calculator" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                <FiDollarSign /> Salary Calculator
              </Link>
              <Link href="/career-path-calculator" className="btn-outline"><FiTrendingUp /> Career Path Calculator</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {["No sign-up required", "100% Private", "Instant results", "Free forever"].map((f, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck style={{ color: 'var(--accent-primary)' }} /> {f}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Explore More Career Tools</h2>
              <p className="section-subtitle">Complement your experience assessment with these powerful resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/career-path-calculator", text: "Career Path Calculator", iconName: "FiTrendingUp" },
                { href: "/salary-calculator", text: "Free Salary Calculator", iconName: "FiDollarSign" },
                { href: "/job-fit-calculator", text: "Job Fit Calculator", iconName: "FiTarget" },
                { href: "/skill-gap-calculator", text: "Skill Gap Calculator", iconName: "FiSearch" }
              ].map((link, i) => {
                const IconComponent = ICON_MAP[link.iconName] || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card">
                    <IconComponent size={20} style={{ marginBottom: '0.625rem', color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{link.text}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate}</span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
};

// ============================================================================
// SEO-OPTIMIZED getStaticProps (INJECTED FROM PAGE 1 BLUEPRINT)
// ============================================================================
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // Generate freshness review dates
  const reviewDates = Array(3).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  // Generate FAQ freshness dates
  const faqDates = Array(8).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  // Breadcrumb structured data
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
      "name": "Experience Level Calculator",
      "item": "https://professionalresumefree.com/experience-level-calculator"
    }
  ];

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates,
        breadcrumbData
      },
      buildTimestamp
    },
    revalidate: 3600, // ISR: Revalidate every hour
  };
}

export default ExperienceLevelCalculatorPage;