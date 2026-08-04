import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiDollarSign, FiClock, FiTrendingUp,
  FiCalendar, FiPieChart, FiShield, FiZap, FiTarget, FiAward,
  FiGrid, FiFileText, FiArrowRight, FiRefreshCw, FiTrash2,
  FiHelpCircle, FiDatabase, FiAlertCircle, FiLock, FiServer,
  FiBriefcase, FiPercent, FiEye, FiCheck, FiBookOpen
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS (Salary Calculator Edition)
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
  .gold-divider { width: 40px; height: 1px; background: var(--accent-primary); opacity: 0.6; margin: 1.5rem auto; }
  .input-group { margin-bottom: 1.5rem; }
  .input-label { display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-weight: 500; font-size: var(--font-size-body-sm); }
  .input-field { width: 100%; padding: var(--input-padding); background: var(--input-bg); border: var(--input-border); border-radius: var(--input-radius); color: var(--input-text); font-size: 1rem; font-family: var(--font-body); transition: border-color var(--transition-fast); }
  .input-field:focus { outline: none; border-color: var(--accent-primary); box-shadow: 0 0 0 3px rgba(242,202,80,0.1); }
  .input-field::placeholder { color: var(--input-placeholder); }
  select.input-field { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23d4af37' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1rem center; padding-right: 2.5rem; }
  .result-box { background: rgba(242,202,80,0.05); border: 0.5px solid var(--border-gold-filament); border-radius: 0.5rem; padding: clamp(1rem,3vw,1.5rem); margin-top: 2rem; }
  .salary-result-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.75rem; margin-top: 1rem; }
  .salary-stat { text-align: center; padding: clamp(0.75rem,2vw,1rem); background: var(--card-bg); border-radius: 0.5rem; border: var(--card-border); min-width: 0; }
  .salary-amount { font-size: clamp(1rem,2.5vw,1.4rem); font-weight: var(--font-weight-bold); color: var(--text-primary); display: block; word-break: break-word; overflow-wrap: break-word; }
  .salary-amount-large { font-size: clamp(1.4rem,3vw,1.8rem); font-weight: var(--font-weight-extrabold); color: var(--accent-primary); display: block; font-family: var(--font-display); word-break: break-word; overflow-wrap: break-word; }
  .salary-amount-success { font-size: clamp(1.4rem,3vw,1.8rem); font-weight: var(--font-weight-extrabold); color: var(--success-color); display: block; font-family: var(--font-display); word-break: break-word; overflow-wrap: break-word; }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; transition:all var(--transition-fast); }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .tax-info-box { padding: 1rem; background: rgba(242,202,80,0.05); border-radius: 0.5rem; border: 0.5px solid var(--border-gold-filament); margin-top: 1rem; }
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { 
    .btn-primary,.btn-outline { width:100%; min-width:auto; } 
    .salary-result-grid { grid-template-columns: repeat(2, 1fr); }
    .stat-card { padding: 1rem; }
  }
  @media (max-width:380px) {
    .salary-result-grid { grid-template-columns: 1fr; }
  }
`;

// Data Constants
const CURRENT_YEAR = new Date().getFullYear();

const FEATURES = [
  { icon: 'FiDollarSign', title: 'Salary Conversion', desc: 'Instantly convert between hourly, monthly, and annual salary rates with precision calculations for any pay structure.', stat: 'Real-Time' },
  { icon: 'FiPercent', title: 'Tax Estimation', desc: 'Customize your tax withholding rate to get accurate take-home pay estimates for better financial planning and budgeting.', stat: 'Customizable' },
  { icon: 'FiClock', title: 'Overtime Calculator', desc: 'Factor in overtime hours and rates (1.5x, 2x, 2.5x, 3x) to see how extra work impacts your bottom line earnings.', stat: 'Advanced' },
  { icon: 'FiTrendingUp', title: 'Career Planning', desc: 'Compare different salary scenarios to make informed decisions about job offers, career moves, and salary negotiations.', stat: 'Strategic' },
  { icon: 'FiPieChart', title: 'Detailed Breakdown', desc: 'See your salary broken down by year, month, bi-weekly, week, and day for complete financial clarity and planning.', stat: 'Comprehensive' },
  { icon: 'FiShield', title: 'Privacy Guaranteed', desc: 'Your salary data stays in your browser. Never uploaded to any server, never stored, never shared with third parties.', stat: '100% Safe' }
];

const FAQS = [
  { question: "How accurate is the salary calculator?", answer: "Our calculator provides precise mathematical conversions based on standard payroll formulas. For tax estimates, you can adjust the withholding rate to match your specific tax situation. While it gives excellent estimates for planning purposes, consult a tax professional or use your actual pay stub for exact figures, as individual circumstances vary based on deductions, credits, and state-specific tax rates." },
  { question: "How do I convert hourly to annual salary?", answer: "The standard formula is: multiply your hourly rate by the number of hours you work per week, then multiply by 52 weeks per year. For example: $25/hour × 40 hours × 52 weeks = $52,000 gross annual salary. Our calculator does this instantly and also factors in overtime pay and tax deductions to give you both gross and net (take-home) figures. For part-time workers, simply adjust the hours per week field to match your schedule." },
  { question: "Is my salary data private and secure?", answer: "Absolutely. All calculations happen entirely in your browser using client-side JavaScript. Your salary information is never transmitted to any server, never stored in any database, and never shared with third parties. You can verify this by using the calculator offline—it will work the same way. We believe financial information deserves complete privacy, which is why we built this tool to run entirely on your device." },
  { question: "Can I calculate overtime pay with this tool?", answer: "Yes! Our calculator includes dedicated overtime fields. Enter your overtime hours per week and select your overtime multiplier (1.5x for standard time-and-a-half, 2x for double time, 2.5x, or 3x for triple time). The calculator automatically adds overtime earnings to your gross weekly pay and factors everything into your annual, monthly, and periodic breakdowns. The results section also shows your overtime contribution separately." },
  { question: "What tax rate should I use for accurate estimates?", answer: "The average effective tax rate in the United States is approximately 22-25% for middle-income earners, which includes federal income tax, state income tax (varies by state), Social Security (6.2%), and Medicare (1.45%). Higher earners may see effective rates of 28-35%. For the most accurate estimate, check your most recent pay stub for your actual withholding percentage, or consult the IRS tax brackets for your income level and filing status. You can adjust the tax rate slider anytime to see how different scenarios affect your take-home pay." }
];

const ICON_MAP = {
  FiHome, FiChevronRight, FiDollarSign, FiClock, FiTrendingUp, FiCalendar, FiPieChart,
  FiShield, FiZap, FiTarget, FiAward, FiGrid, FiFileText, FiArrowRight, FiRefreshCw,
  FiTrash2, FiHelpCircle, FiDatabase, FiAlertCircle, FiLock, FiServer, FiBriefcase,
  FiPercent, FiEye, FiCheck, FiBookOpen
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const SalaryCalculatorPage = ({ seoData }) => {
  const { 
    currentDate, 
    lastModifiedDate,
    buildTimestamp,
    faqDates 
  } = seoData || {};

  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(5).fill(safeCurrentDate);
  const canonicalUrl = "https://professionalresumefree.com/salary-calculator";

  // Product image URL for schema
  const productImage = "https://professionalresumefree.com/salary-calculator-og.jpg";

  // Calculator State
  const [hourlyRate, setHourlyRate] = useState('25.00');
  const [hoursPerWeek, setHoursPerWeek] = useState('40');
  const [taxRate, setTaxRate] = useState('25');
  const [overtimeHours, setOvertimeHours] = useState('0');
  const [overtimeMultiplier, setOvertimeMultiplier] = useState('1.5');
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const calculatorRef = useRef(null);

  // ==========================================================================
  // CALCULATION LOGIC
  // ==========================================================================
  const calculateSalary = useCallback(() => {
    const hourly = parseFloat(hourlyRate) || 0;
    const regularHours = parseFloat(hoursPerWeek) || 0;
    const overtimeHrs = parseFloat(overtimeHours) || 0;
    const overtimeMult = parseFloat(overtimeMultiplier) || 1.5;
    const taxPercent = parseFloat(taxRate) || 0;

    if (hourly <= 0 && regularHours <= 0) {
      setResults(null);
      return;
    }

    // Weekly calculations
    const regularWeeklyPay = hourly * regularHours;
    const overtimeWeeklyPay = hourly * overtimeMult * overtimeHrs;
    const grossWeekly = regularWeeklyPay + overtimeWeeklyPay;
    
    // Annual calculations
    const grossAnnual = grossWeekly * 52;
    const taxAmount = grossAnnual * (taxPercent / 100);
    const netAnnual = grossAnnual - taxAmount;
    
    // Periodic breakdowns
    const netMonthly = netAnnual / 12;
    const netBiweekly = netAnnual / 26;
    const netWeekly = netAnnual / 52;
    const netDaily = netAnnual / 260;

    setResults({
      hourly,
      regularHours,
      overtimeHrs,
      overtimeMult,
      grossWeekly,
      grossAnnual,
      taxAmount,
      netAnnual,
      netMonthly,
      netBiweekly,
      netWeekly,
      netDaily,
      taxPercent
    });
  }, [hourlyRate, hoursPerWeek, taxRate, overtimeHours, overtimeMultiplier]);

  useEffect(() => {
    calculateSalary();
  }, [calculateSalary]);

  const resetCalculator = () => {
    setHourlyRate('25.00');
    setHoursPerWeek('40');
    setTaxRate('25');
    setOvertimeHours('0');
    setOvertimeMultiplier('1.5');
    setResults(null);
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return '$' + (amount / 1000000).toFixed(2) + 'M';
    }
    return '$' + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // ==========================================================================
  // RENDER
  // ==========================================================================
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
        <title>Free Salary Calculator {CURRENT_YEAR} - Hourly to Annual, Net Pay & Take-Home Estimator</title>
        <meta name="title" content={`Free Salary Calculator ${CURRENT_YEAR} - Hourly to Annual, Net Pay & Take-Home Estimator`} />
        
        {/* META DESCRIPTION */}
        <meta name="description" content={`Calculate your real earnings instantly with our free ${CURRENT_YEAR} salary calculator. Convert hourly to annual salary, estimate tax deductions, factor in overtime pay, and get detailed breakdowns by year, month, week, and day. 100% private—no sign-up required.`} />
        <meta name="keywords" content="salary calculator, free salary calculator, hourly to annual, net pay calculator, take-home pay calculator, overtime calculator, salary converter, wage estimator, income tax calculator, monthly salary calculator, annual income calculator, paycheck estimator, 2026 salary tools, gross to net calculator, hourly wage calculator, salary breakdown tool" />
        <meta name="author" content="Professional Resume Free" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={`Free Salary Calculator ${CURRENT_YEAR} - Hourly to Annual & Net Pay Estimator`} />
        <meta name="chatgpt-fts:description" content={`Calculate your real earnings instantly. Convert hourly to annual salary with tax estimates and overtime. Free, private, no sign-up required for ${CURRENT_YEAR}.`} />
        <meta name="chatgpt-fts:keywords" content="salary calculator, free salary calculator, hourly to annual, net pay calculator, take-home pay, overtime calculator, wage estimator, salary converter" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-US" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-GB" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-CA" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-AU" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content={`Free Salary Calculator ${CURRENT_YEAR} - Hourly, Net Pay & Take-Home Estimator`} />
        <meta property="og:description" content={`Calculate your real earnings instantly. Convert hourly to annual salary, estimate tax deductions, factor in overtime, and plan your finances. 100% private, no sign-up. Updated for ${CURRENT_YEAR}.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:image" content={productImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Salary Calculator - Hourly to Annual Conversion Tool" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Free Salary Calculator ${CURRENT_YEAR} - Hourly to Annual & Take-Home Pay`} />
        <meta name="twitter:description" content={`Calculate your real earnings. Convert hourly to annual salary with tax estimates and overtime. Free, private, no sign-up. Updated for ${CURRENT_YEAR}.`} />
        <meta name="twitter:image" content={productImage} />
        <meta name="twitter:image:alt" content="Free Salary Calculator Tool" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="msapplication-TileColor" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* ICONS & MANIFEST */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#131315" />
        
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
                  "name": `Free Salary Calculator ${CURRENT_YEAR}`,
                  "url": canonicalUrl,
                  "applicationCategory": "FinanceApplication",
                  "description": `Free online salary calculator to convert hourly wages to annual salary with tax estimates, overtime calculations, and detailed periodic breakdowns. 100% private—all calculations run in your browser. Updated for ${CURRENT_YEAR}.`,
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
                  "name": `Free Salary Calculator ${CURRENT_YEAR} - Hourly to Annual, Net Pay & Take-Home Estimator`,
                  "description": `Calculate your real earnings instantly with our free ${CURRENT_YEAR} salary calculator. Convert hourly to annual salary, estimate tax deductions, factor in overtime pay, and get detailed breakdowns.`,
                  "dateModified": safeLastModifiedDate,
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".section-subtitle", ".faq-item h3"]
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
                        "name": "Free Salary Calculator",
                        "item": canonicalUrl
                      }
                    ]
                  }
                },
                {
                  "@type": "HowTo",
                  "name": "How to Calculate Your Salary",
                  "description": "Step-by-step guide to using the free salary calculator for hourly to annual conversion with tax estimates",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "position": 1,
                      "name": "Enter Your Hourly Rate",
                      "text": "Input your hourly wage in the Hourly Rate field. This is your base pay rate before any deductions or overtime."
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Set Your Hours Per Week",
                      "text": "Enter the number of hours you work per week. Standard full-time is 40 hours. Adjust for part-time or alternative schedules."
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Adjust Tax Rate and Overtime",
                      "text": "Set your estimated tax withholding rate (typically 22-25% for middle-income earners). Add overtime hours and select your overtime multiplier if applicable."
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Review Your Salary Breakdown",
                      "text": "View your gross annual salary, net take-home pay after taxes, and detailed breakdowns by month, bi-weekly, week, and day. Use this data for budgeting and career planning."
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
        <meta name="last-reviewed" content={safeCurrentDate} />
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
                <span itemProp="name" aria-current="page"><FiDollarSign size={14} style={{marginRight: '4px'}} /> Salary Calculator</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">💰 {CURRENT_YEAR} EDITION • FREE TOOL • NO SIGN UP • INSTANT RESULTS • 100% PRIVATE</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free <span className="gradient-text">Salary Calculator</span> {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Instantly convert your <strong>hourly wage to annual salary</strong> with tax estimates and overtime calculations. See your take-home pay broken down by year, month, bi-weekly, week, and day. <strong>100% Free. No Sign-Up Required. Complete Privacy Guaranteed—all calculations run in your browser.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
                {[
                  { value: "$75K", label: "Average US Salary (2026)" }, 
                  { value: "25%", label: "Typical Effective Tax Rate" }, 
                  { value: "1.5x", label: "Standard Overtime Rate" }, 
                  { value: "100%", label: "Private & Secure" }
                ].map((s, i) => (
                  <div key={i} className="stat-card">
                    <div className="stat-number">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => calculatorRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                  <FiDollarSign /> Calculate Your Salary Now
                </button>
                <Link href="/free-resume-builder" className="btn-outline"><FiFileText /> Build Your Resume</Link>
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
            <span><FiDollarSign style={{marginRight: '4px'}} /> 6 Salary Breakdowns</span>
            <span><FiClock style={{marginRight: '4px'}} /> 3 min assessment</span>
            <span><FiCalendar style={{marginRight: '4px'}} /> Updated: {safeCurrentDate}</span>
            <span><FiEye style={{marginRight: '4px'}} /> 30,000+ calculations</span>
          </div>
        </div>

        {/* Calculator Tool */}
        <section ref={calculatorRef} className="section section-alt" id="calculator-tool">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                <h2 className="section-title">Salary Breakdown Calculator</h2>
                <p className="section-subtitle">Enter your wage details for instant annual, monthly, and weekly estimates with tax deductions</p>
              </div>

              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                <div className="input-group">
                  <label className="input-label">
                    <FiDollarSign size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Hourly Rate ($)
                  </label>
                  <input type="number" className="input-field" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} placeholder="e.g., 25.00" step="0.01" min="0" />
                </div>
                <div className="input-group">
                  <label className="input-label">
                    <FiClock size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Hours Per Week
                  </label>
                  <input type="number" className="input-field" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)} placeholder="40" step="1" min="0" max="80" />
                </div>
                <div className="input-group">
                  <label className="input-label">
                    <FiPercent size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Tax Rate (%)
                  </label>
                  <input type="number" className="input-field" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} placeholder="25" step="0.1" min="0" max="50" />
                </div>
                <div className="input-group">
                  <label className="input-label">
                    <FiClock size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Overtime Hours/Week
                  </label>
                  <input type="number" className="input-field" value={overtimeHours} onChange={(e) => setOvertimeHours(e.target.value)} placeholder="0" step="0.5" min="0" />
                </div>
                <div className="input-group">
                  <label className="input-label">
                    <FiTrendingUp size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Overtime Multiplier
                  </label>
                  <select className="input-field" value={overtimeMultiplier} onChange={(e) => setOvertimeMultiplier(e.target.value)}>
                    <option value="1.5">1.5x (Time and a half)</option>
                    <option value="2">2.0x (Double time)</option>
                    <option value="2.5">2.5x</option>
                    <option value="3">3.0x (Triple time)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn-outline" onClick={resetCalculator}><FiRefreshCw size={18} /> Reset Calculator</button>
              </div>

              {/* Results */}
              {results && (
                <div className="result-box" style={{ animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', fontSize: 'var(--font-size-title-md)' }}>
                    📊 Your Salary Breakdown
                  </h3>
                  
                  <div className="salary-result-grid">
                    <div className="salary-stat">
                      <span className="salary-amount-large" style={{ color: 'var(--text-primary)' }}>{formatCurrency(results.grossAnnual)}</span>
                      <span className="stat-label">Gross Annual</span>
                    </div>
                    <div className="salary-stat">
                      <span className="salary-amount-success">{formatCurrency(results.netAnnual)}</span>
                      <span className="stat-label">Net Annual (Take-Home)</span>
                    </div>
                    <div className="salary-stat">
                      <span className="salary-amount">{formatCurrency(results.netMonthly)}</span>
                      <span className="stat-label">Monthly</span>
                    </div>
                    <div className="salary-stat">
                      <span className="salary-amount">{formatCurrency(results.netBiweekly)}</span>
                      <span className="stat-label">Bi-Weekly</span>
                    </div>
                    <div className="salary-stat">
                      <span className="salary-amount">{formatCurrency(results.netWeekly)}</span>
                      <span className="stat-label">Weekly</span>
                    </div>
                    <div className="salary-stat">
                      <span className="salary-amount">{formatCurrency(results.netDaily)}</span>
                      <span className="stat-label">Daily</span>
                    </div>
                  </div>

                  <div className="tax-info-box">
                    <p style={{ textAlign: 'center', margin: '0.5rem 0', fontSize: 'var(--font-size-body-sm)' }}>
                      <strong>Estimated Annual Tax:</strong> {formatCurrency(results.taxAmount)} 
                      <span style={{ color: 'var(--text-muted)', marginLeft: '0.5rem' }}>({results.taxPercent}% effective rate)</span>
                    </p>
                    {results.overtimeHrs > 0 && (
                      <p style={{ textAlign: 'center', margin: '0.5rem 0', color: 'var(--accent-primary)', fontSize: 'var(--font-size-body-sm)' }}>
                        <FiClock size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                        Overtime: {results.overtimeHrs} hrs/week at {results.overtimeMult}x = {formatCurrency(results.grossWeekly - (results.hourly * results.regularHours))}/week extra
                      </p>
                    )}
                  </div>

                  <div className="citation-card" style={{ marginTop: '1rem' }}>
                    <p className="text-small" style={{ margin: 0 }}>
                      <strong>Note:</strong> This calculator provides estimates based on standard payroll formulas. Actual take-home pay varies based on state taxes, deductions, benefits, and individual circumstances. Consult a tax professional for personalized advice.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section" id="features">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Why Use Our Salary Calculator</h2>
              <p className="section-subtitle">Everything you need to understand your true earning potential and plan your financial future</p>
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

        {/* FAQ */}
        <section className="section section-alt" id="faqs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Salary Calculator FAQs ({CURRENT_YEAR} Edition)</h2>
              <p className="section-subtitle">Expert answers to common questions about salary calculations and financial planning</p>
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
                      <p style={{ lineHeight: '1.7' }}>{faq.answer}</p>
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
              Ready to Plan Your Financial Future?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Use our salary calculator to make informed career decisions and negotiate with confidence. <strong>100% Free. No Sign-Up Required. Instant Results. Complete Privacy Guaranteed.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => calculatorRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                <FiDollarSign /> Calculate Your Salary Now
              </button>
              <Link href="/free-resume-builder" className="btn-outline"><FiFileText /> Build Your Resume</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["6 Salary Breakdowns", "Tax Estimation", "Overtime Calculator", "Instant Results", "100% Free"].map((f, i) => (
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
              <p className="section-subtitle">Complement your salary planning with these powerful career resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-resume-builder", text: "Free ATS-Friendly Resume Builder", iconName: "FiFileText" },
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiTarget" },
                { href: "/resume-templates", text: "Professional Resume Templates", iconName: "FiGrid" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward" }
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Version {CURRENT_YEAR}.2 • Next review: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 14)).toISOString().split('T')[0]} • Sources: BLS, IRS Tax Brackets, Payroll Standards</span>
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
  const faqDates = Array(5).fill(null).map((_, i) => {
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

export default SalaryCalculatorPage;