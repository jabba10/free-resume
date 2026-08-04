// pages/resume-value-calculator.js
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiDollarSign, FiTarget, FiBriefcase,
  FiCalendar, FiPieChart, FiShield, FiZap, FiStar, FiAward,
  FiGrid, FiFileText, FiArrowRight, FiRefreshCw, FiTrash2,
  FiHelpCircle, FiAlertCircle, FiLock, FiTrendingUp,
  FiBook, FiCpu, FiMonitor, FiBarChart2, FiCoffee, FiCloud,
  FiCheckCircle, FiGlobe, FiEdit, FiClipboard, FiLayout,
  FiAlertTriangle, FiActivity, FiUsers, FiClock, FiEye, FiCheck
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS (Resume Value Calculator Edition)
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
  .value-circle { width: 140px; height: 140px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto 1.5rem; }
  .value-high { background: rgba(76, 175, 80, 0.1); border: 4px solid var(--success-color); box-shadow: 0 0 30px rgba(76, 175, 80, 0.2); }
  .value-medium { background: rgba(242, 202, 80, 0.1); border: 4px solid var(--accent-primary); box-shadow: 0 0 30px rgba(242, 202, 80, 0.2); }
  .value-low { background: rgba(244, 67, 54, 0.1); border: 4px solid var(--error-color); box-shadow: 0 0 30px rgba(244, 67, 54, 0.2); }
  .value-item { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background: var(--card-bg); border-radius: 0.375rem; border: var(--card-border); margin-bottom: 0.5rem; }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; transition:all var(--transition-fast); }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

const CURRENT_YEAR = new Date().getFullYear();

const EDUCATION_LEVELS = [
  { value: 'highschool', label: 'High School', multiplier: 0.7 },
  { value: 'associate', label: 'Associate Degree', multiplier: 0.8 },
  { value: 'bachelors', label: "Bachelor's Degree", multiplier: 1.0 },
  { value: 'masters', label: "Master's Degree", multiplier: 1.2 },
  { value: 'phd', label: 'Doctorate (PhD)', multiplier: 1.4 }
];

const FEATURES = [
  { icon: 'FiDollarSign', title: 'Market Value Estimation', desc: 'Calculate your resume\'s market value based on experience, education, skills, certifications, achievements, and leadership.', stat: '6 Factors' },
  { icon: 'FiTrendingUp', title: 'Value Breakdown', desc: 'See how each factor contributes to your overall resume value with weighted calculations and percentage breakdowns.', stat: 'Detailed' },
  { icon: 'FiTarget', title: 'Industry Benchmarking', desc: 'Compare your resume value against industry standards with demand multipliers and identify areas for improvement.', stat: 'Comparative' },
  { icon: 'FiStar', title: 'Growth Potential', desc: 'Understand how improving specific areas like certifications or leadership experience can increase your market worth.', stat: 'Strategic' }
];

const FAQS = [
  { question: "How is resume value calculated?", answer: "Resume value is calculated by evaluating 6 key factors: years of experience (up to $50K), education level (up to $21K based on degree), skills & certifications (up to $30K), quantified achievements (up to $25K), leadership experience (up to $20K), and industry demand (up to $15K). Each factor contributes to your total estimated market value premium above base salary expectations." },
  { question: "What does the dollar value represent?", answer: "The dollar value represents an estimated market premium that your resume qualifications command above a base salary. It reflects how much additional value your specific combination of experience, education, skills, certifications, and achievements brings to potential employers. A higher value indicates stronger market positioning." },
  { question: "How can I increase my resume value?", answer: "Focus on gaining relevant certifications (each adds ~$6K value), documenting quantified achievements with specific metrics (each adds ~$3K), developing leadership experience (each year adds ~$4K), and staying current with in-demand skills (each skill adds ~$2K). Targeting high-demand industries can multiply your overall value by up to 1.5x." },
  { question: "How accurate is the market value estimate?", answer: "Our calculator provides data-driven estimates based on salary surveys, industry benchmarks, and hiring market analysis. The actual market value depends on location, specific industry, company size, and negotiation outcomes. Use this estimate as a strategic guide to understand your competitive positioning, not as a guaranteed salary figure." }
];

const ICON_MAP = { 
  FiHome, FiChevronRight, FiDollarSign, FiTarget, FiBriefcase, 
  FiCalendar, FiPieChart, FiShield, FiZap, FiStar, FiAward,
  FiGrid, FiFileText, FiArrowRight, FiRefreshCw, FiTrash2,
  FiHelpCircle, FiAlertCircle, FiLock, FiTrendingUp,
  FiBook, FiCpu, FiMonitor, FiBarChart2, FiCoffee, FiCloud,
  FiCheckCircle, FiGlobe, FiEdit, FiClipboard, FiLayout,
  FiAlertTriangle, FiActivity, FiUsers, FiClock, FiEye, FiCheck
};

const ResumeValueCalculatorPage = ({ seoData }) => {
  const { 
    currentDate, 
    lastModifiedDate,
    buildTimestamp,
    faqDates 
  } = seoData || {};

  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(4).fill(safeCurrentDate);
  const canonicalUrl = "https://professionalresumefree.com/resume-value-calculator";

  // Product image URL for schema
  const productImage = "https://professionalresumefree.com/resume-value-calculator-og.jpg";

  const [experience, setExperience] = useState('5');
  const [education, setEducation] = useState('bachelors');
  const [skillCount, setSkillCount] = useState('8');
  const [certifications, setCertifications] = useState('2');
  const [achievementCount, setAchievementCount] = useState('5');
  const [leadershipYears, setLeadershipYears] = useState('2');
  const [industryDemand, setIndustryDemand] = useState('medium');
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const calculatorRef = useRef(null);

  const calculateValue = useCallback(() => {
    const exp = parseInt(experience) || 0;
    const skillCountNum = parseInt(skillCount) || 0;
    const certCount = parseInt(certifications) || 0;
    const achievementNum = parseInt(achievementCount) || 0;
    const leadYears = parseInt(leadershipYears) || 0;
    
    const eduData = EDUCATION_LEVELS.find(e => e.value === education);
    const eduMultiplier = eduData?.multiplier || 1.0;
    
    const demandMultipliers = { low: 0.7, medium: 1.0, high: 1.3, 'very-high': 1.5 };
    const demandMult = demandMultipliers[industryDemand] || 1.0;
    
    const expValue = Math.min(exp * 5000, 50000);
    const eduValue = 15000 * eduMultiplier;
    const skillsValue = Math.min((skillCountNum + certCount * 3) * 2000, 30000);
    const achievementValue = Math.min(achievementNum * 3000, 25000);
    const leadershipValue = Math.min(leadYears * 4000, 20000);
    const demandValue = 10000 * demandMult;
    
    const totalValue = expValue + eduValue + skillsValue + achievementValue + leadershipValue + demandValue;
    
    let valueLevel, valueClass;
    if (totalValue >= 100000) { valueLevel = 'Premium'; valueClass = 'value-high'; }
    else if (totalValue >= 60000) { valueLevel = 'Strong'; valueClass = 'value-medium'; }
    else { valueLevel = 'Developing'; valueClass = 'value-low'; }

    setResults({
      totalValue,
      valueLevel,
      valueClass,
      breakdown: [
        { label: 'Experience', value: expValue, percentage: Math.round((expValue / totalValue) * 100) },
        { label: 'Education', value: eduValue, percentage: Math.round((eduValue / totalValue) * 100) },
        { label: 'Skills & Certs', value: skillsValue, percentage: Math.round((skillsValue / totalValue) * 100) },
        { label: 'Achievements', value: achievementValue, percentage: Math.round((achievementValue / totalValue) * 100) },
        { label: 'Leadership', value: leadershipValue, percentage: Math.round((leadershipValue / totalValue) * 100) },
        { label: 'Industry Demand', value: demandValue, percentage: Math.round((demandValue / totalValue) * 100) }
      ]
    });
  }, [experience, education, skillCount, certifications, achievementCount, leadershipYears, industryDemand]);

  useEffect(() => { calculateValue(); }, [calculateValue]);

  const resetCalculator = () => {
    setExperience('5'); setEducation('bachelors'); setSkillCount('8');
    setCertifications('2'); setAchievementCount('5'); setLeadershipYears('2');
    setIndustryDemand('medium'); setResults(null);
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000) return '$' + (amount / 1000000).toFixed(2) + 'M';
    return '$' + amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Font Preconnects & Import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>Free Resume Value Calculator {CURRENT_YEAR} - Estimate Your Market Worth | No Sign Up</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Calculate your resume's market value based on experience, education, skills, certifications, achievements, and leadership. Get a dollar estimate of what your qualifications are worth. 100% free, private, no sign-up required." />
        <meta name="keywords" content="resume value calculator, resume worth estimator, market value calculator, resume market value, career value assessment, professional worth calculator, resume valuation tool, salary premium estimator, resume ROI calculator, career worth" />
        <meta name="author" content="Professional Resume Free" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Free Resume Value Calculator {CURRENT_YEAR} - Estimate Your Market Worth" />
        <meta name="chatgpt-fts:description" content="Calculate your resume's market value based on experience, education, skills, and achievements. Free dollar estimate of your qualifications." />
        <meta name="chatgpt-fts:keywords" content="resume value calculator, resume worth estimator, market value calculator, career value assessment, professional worth calculator, salary premium estimator" />
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
        <meta property="og:title" content="Free Resume Value Calculator {CURRENT_YEAR} - Estimate Your Market Worth Instantly" />
        <meta property="og:description" content="Calculate your resume's market value based on experience, education, skills, certifications, and achievements. Free, private, no sign-up." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={productImage} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-03-01" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Value Calculator {CURRENT_YEAR}" />
        <meta name="twitter:description" content="Calculate what your resume qualifications are worth in the job market. Free, private, instant." />
        <meta name="twitter:image" content={productImage} />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
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
                  "name": "Free Resume Value Calculator",
                  "url": canonicalUrl,
                  "applicationCategory": "BusinessApplication",
                  "description": "Free online tool to calculate your resume's market value based on experience, education, skills, certifications, achievements, and leadership. Get a dollar estimate of your professional worth.",
                  "operatingSystem": "All",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "url": canonicalUrl,
                    "priceValidUntil": `${CURRENT_YEAR}-12-31`,
                    "eligibleRegion": {
                      "@type": "Country",
                      "name": "Worldwide"
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
                          "minValue": "0",
                          "maxValue": "0",
                          "unitCode": "DAY"
                        },
                        "transitTime": {
                          "@type": "QuantitativeValue",
                          "minValue": "0",
                          "maxValue": "0",
                          "unitCode": "DAY"
                        }
                      }
                    },
                    "hasMerchantReturnPolicy": {
                      "@type": "MerchantReturnPolicy",
                      "applicableCountry": "US",
                      "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
                      "merchantReturnDays": "0",
                      "returnMethod": "https://schema.org/ReturnNotPermitted",
                      "returnFees": "https://schema.org/FreeReturn"
                    }
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": f.answer
                    }
                  }))
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": "Free Resume Value Calculator {CURRENT_YEAR} - Estimate Your Market Worth",
                  "description": "Calculate your resume's market value based on experience, education, skills, certifications, achievements, and leadership. Free dollar estimate of what your qualifications are worth.",
                  "dateModified": safeLastModifiedDate
                },
                {
                  "@type": "HowTo",
                  "name": "How to Calculate Your Resume Value",
                  "description": "Step-by-step guide to estimating your resume's market value using 6 key factors",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Enter Your Experience Details",
                      "text": "Input your years of professional experience, education level, number of skills, and certifications earned. These form the foundation of your market value assessment."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Add Achievements & Leadership",
                      "text": "Enter the number of quantified achievements on your resume and years of leadership experience. These factors significantly boost your estimated market value."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Select Industry Demand Level",
                      "text": "Choose your industry's current demand level from low to very high. High-demand industries apply a multiplier that increases your overall value by up to 1.5x."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Review Your Value Breakdown",
                      "text": "Analyze your total estimated value premium and the percentage contribution from each factor. Identify which areas offer the greatest opportunity for improvement."
                    }
                  ],
                  "totalTime": "PT3M"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp || Date.now()} />
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
                <span itemProp="name" aria-current="page"><FiDollarSign size={14} style={{marginRight: '4px'}} /> Resume Value Calculator</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">💰 {CURRENT_YEAR} EDITION • 6 FACTORS • FREE TOOL • NO SIGN UP • INSTANT RESULTS</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free <span className="gradient-text">Resume Value</span> Calculator {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Estimate your <strong>resume's market value premium</strong> based on experience, education, skills, certifications, achievements, and leadership. See exactly what your qualifications are worth. <strong>100% Free. No Sign-Up Required. Complete Privacy Guaranteed.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
                {[
                  { value: "6", label: "Value Factors" },
                  { value: "$ Premium", label: "Estimate" },
                  { value: "Real-Time", label: "Calculation" },
                  { value: "100%", label: "Private & Secure" }
                ].map((s, i) => (
                  <div key={i} className="stat-card">
                    <div className="stat-number">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => calculatorRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiDollarSign /> Calculate Your Value</button>
                <Link href="/salary-calculator" className="btn-outline"><FiTarget /> Salary Calculator</Link>
              </div>
              {/* Freshness indicator */}
              <div style={{marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)'}} aria-label="Page last updated">
                <FiCalendar style={{marginRight: '4px'}} /> Last updated: {safeCurrentDate}
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', margin: '20px 0', flexWrap: 'wrap', color: 'var(--text-muted)' }}>
            <span><FiPieChart style={{marginRight: '4px'}} /> 6 Value Factors</span>
            <span><FiClock style={{marginRight: '4px'}} /> 3 min assessment</span>
            <span><FiCalendar style={{marginRight: '4px'}} /> Updated: {safeCurrentDate}</span>
            <span><FiEye style={{marginRight: '4px'}} /> 18,000+ assessments</span>
          </div>
        </div>

        {/* Calculator Tool */}
        <section ref={calculatorRef} className="section section-alt" id="calculator-tool">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                <h2 className="section-title">Resume Value Estimator</h2>
                <p className="section-subtitle">Enter your qualifications to estimate your resume's market value premium</p>
              </div>
              
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                <div className="input-group">
                  <label className="input-label"><FiClock size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />Years of Experience</label>
                  <input type="number" className="input-field" value={experience} onChange={(e) => setExperience(e.target.value)} min="0" max="30" />
                </div>
                <div className="input-group">
                  <label className="input-label"><FiBook size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />Education Level</label>
                  <select className="input-field" value={education} onChange={(e) => setEducation(e.target.value)}>
                    {EDUCATION_LEVELS.map(e => <option key={e.value} value={e.value}>{e.label}</option>)}
                  </select>
                </div>
                <div className="input-group">
                  <label className="input-label"><FiCpu size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />Number of Skills</label>
                  <input type="number" className="input-field" value={skillCount} onChange={(e) => setSkillCount(e.target.value)} min="0" max="20" />
                </div>
                <div className="input-group">
                  <label className="input-label"><FiAward size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />Certifications</label>
                  <input type="number" className="input-field" value={certifications} onChange={(e) => setCertifications(e.target.value)} min="0" max="10" />
                </div>
                <div className="input-group">
                  <label className="input-label"><FiTrendingUp size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />Quantified Achievements</label>
                  <input type="number" className="input-field" value={achievementCount} onChange={(e) => setAchievementCount(e.target.value)} min="0" max="15" />
                </div>
                <div className="input-group">
                  <label className="input-label"><FiUsers size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />Leadership Years</label>
                  <input type="number" className="input-field" value={leadershipYears} onChange={(e) => setLeadershipYears(e.target.value)} min="0" max="15" />
                </div>
                <div className="input-group">
                  <label className="input-label"><FiTarget size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />Industry Demand</label>
                  <select className="input-field" value={industryDemand} onChange={(e) => setIndustryDemand(e.target.value)}>
                    <option value="low">Low Demand</option>
                    <option value="medium">Medium Demand</option>
                    <option value="high">High Demand</option>
                    <option value="very-high">Very High Demand</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn-outline" onClick={resetCalculator}><FiRefreshCw size={18} /> Reset Calculator</button>
              </div>

              {results && (
                <div className="result-box" style={{ animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                  <div className="gold-divider"></div>
                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <div className={`value-circle ${results.valueClass}`}>
                      <span style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>{formatCurrency(results.totalValue)}</span>
                      <span className="stat-label">Estimated Value Premium</span>
                    </div>
                    <p style={{ fontWeight: 600, fontSize: 'var(--font-size-body-lg)' }}>
                      {results.valueLevel === 'Premium' && <span className="text-success"><FiCheckCircle size={18} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} /> {results.valueLevel} Resume Value</span>}
                      {results.valueLevel === 'Strong' && <span style={{ color: 'var(--accent-primary)' }}><FiStar size={18} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} /> {results.valueLevel} Resume Value</span>}
                      {results.valueLevel === 'Developing' && <span className="text-danger"><FiAlertTriangle size={18} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} /> {results.valueLevel} Resume Value</span>}
                    </p>
                  </div>
                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', fontSize: 'var(--font-size-body-md)' }}>
                    Value Breakdown by Factor
                  </h3>
                  {results.breakdown.map((item, idx) => (
                    <div key={idx} className="value-item">
                      <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{item.label}</span>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{formatCurrency(item.value)}</span>
                        <span className="text-small" style={{ marginLeft: '0.5rem' }}>({item.percentage}%)</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)' }}>
                  <FiAlertCircle size={12} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                  This is an estimate based on market data. Actual value depends on location, industry, and negotiation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section" id="features">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Powerful Value Analysis Features</h2>
              <p className="section-subtitle">Comprehensive tools to understand and maximize your resume's market value</p>
            </div>
            <div className="grid">
              {FEATURES.map((f, i) => {
                const Icon = ICON_MAP[f.icon] || FiStar;
                return (
                  <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', background: 'rgba(242,202,80,0.1)', borderRadius: '0.125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '0.5px solid var(--border-gold-filament)', color: 'var(--accent-primary)', flexShrink: 0 }}>
                      <Icon size={32} />
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{f.title}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', flex: 1 }}>{f.desc}</p>
                    <span className="feature-badge" style={{ marginTop: '1rem', justifyContent: 'center' }}>{f.stat}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt" id="faqs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Resume Value ({CURRENT_YEAR} Edition)</h2>
              <p className="section-subtitle">Common questions about market value estimation and resume worth</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)', flexShrink: 0 }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                      <small className="text-small" style={{ display: 'block', marginTop: '0.5rem' }}>Updated: {safeFaqDates[i] || safeCurrentDate}</small>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="next-steps" style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Know Your Professional Worth Today
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Estimate your resume's market value and identify areas to increase your earning potential. <strong>100% Free. No Sign-Up Required. Instant Results. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => calculatorRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                <FiDollarSign /> Calculate Your Value Now
              </button>
              <Link href="/free-resume-builder" className="btn-outline"><FiEdit /> Build Your Resume</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["6 Value Factors", "$ Premium Estimate", "Instant Results", "Value Breakdown", "100% Free"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Explore More Career Tools</h2>
              <p className="section-subtitle">Complement your value assessment with these powerful resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/salary-calculator", text: "Free Salary Calculator", iconName: "FiDollarSign" },
                { href: "/resume-strength-calculator", text: "Resume Strength Checker", iconName: "FiFileText" },
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiTarget" },
                { href: "/free-resume-builder", text: "Free Resume Builder", iconName: "FiEdit" }
              ].map((link, i) => {
                const Icon = ICON_MAP[link.iconName] || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card">
                    <Icon size={20} style={{ marginBottom: '0.625rem', color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{link.text}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Version {CURRENT_YEAR}.2 • Next review: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 14)).toISOString().split('T')[0]}</span>
          <span className="text-small" style={{ marginLeft: '1rem', display: 'block', marginTop: '0.5rem' }}>
            <FiAlertCircle size={12} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
            Estimates based on market data. Actual value depends on location, industry, and individual negotiation.
          </span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp || Date.now()}</span>
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
  const faqDates = Array(4).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return { 
    props: { 
      seoData: { 
        buildTimestamp,
        currentDate, 
        lastModifiedDate,
        faqDates
      } 
    }, 
    revalidate: 3600 
  };
}

export default ResumeValueCalculatorPage;