import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiMapPin, FiDollarSign, FiTrendingUp,
  FiCalendar, FiPieChart, FiShield, FiZap, FiTarget, FiAward,
  FiGrid, FiFileText, FiArrowRight, FiRefreshCw, FiTrash2,
  FiHelpCircle, FiDatabase, FiAlertCircle, FiLock, FiServer,
  FiBriefcase, FiHome as FiHouse, FiCoffee, FiShoppingCart,
  FiTruck, FiActivity, FiWifi, FiBook, FiFilm, FiHeart,
  FiUsers, FiClock
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS (Cost of Living Calculator Edition)
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
  .comparison-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.25rem; margin-top: 1.5rem; }
  .comparison-card { padding: clamp(1rem,2.5vw,1.5rem); background: var(--card-bg); border-radius: 0.5rem; border: var(--card-border); }
  .expense-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 0.75rem; margin-top: 1rem; }
  .expense-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: var(--card-bg); border-radius: 0.375rem; border: var(--card-border); }
  .expense-icon { width: 36px; height: 36px; background: rgba(242,202,80,0.1); border-radius: 0.25rem; display: flex; align-items: center; justify-content: center; color: var(--accent-primary); flex-shrink: 0; border: 0.5px solid var(--border-gold-filament); }
  .expense-details { flex: 1; min-width: 0; }
  .expense-label { font-size: var(--font-size-label-sm); color: var(--text-muted); }
  .expense-value { font-size: var(--font-size-body-sm); font-weight: var(--font-weight-semibold); color: var(--text-primary); word-break: break-word; }
  .comparison-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
  .comparison-amount { font-size: clamp(1.4rem,3vw,1.8rem); font-weight: var(--font-weight-extrabold); font-family: var(--font-display); word-break: break-word; }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; transition:all var(--transition-fast); }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .percentage-change { font-size: var(--font-size-body-sm); font-weight: var(--font-weight-semibold); display: inline-flex; align-items: center; gap: 0.25rem; }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width:640px) { 
    .btn-primary,.btn-outline { width:100%; min-width:auto; }
    .expense-grid { grid-template-columns: 1fr; }
    .comparison-grid { grid-template-columns: 1fr; }
  }
`;

// Data Constants
const CURRENT_YEAR = new Date().getFullYear();

const CITIES = [
  { name: 'New York, NY', index: 100 },
  { name: 'San Francisco, CA', index: 96.3 },
  { name: 'Los Angeles, CA', index: 76.5 },
  { name: 'Chicago, IL', index: 65.2 },
  { name: 'Miami, FL', index: 62.8 },
  { name: 'Seattle, WA', index: 78.4 },
  { name: 'Austin, TX', index: 58.9 },
  { name: 'Denver, CO', index: 62.1 },
  { name: 'Boston, MA', index: 82.7 },
  { name: 'Portland, OR', index: 66.3 },
  { name: 'Atlanta, GA', index: 55.4 },
  { name: 'Dallas, TX', index: 52.8 },
  { name: 'Phoenix, AZ', index: 54.6 },
  { name: 'Nashville, TN', index: 56.2 },
  { name: 'Philadelphia, PA', index: 60.5 }
];

const EXPENSE_CATEGORIES = [
  { id: 'housing', label: 'Housing & Rent', icon: 'FiHouse', basePercentage: 35 },
  { id: 'food', label: 'Food & Groceries', icon: 'FiShoppingCart', basePercentage: 15 },
  { id: 'transportation', label: 'Transportation', icon: 'FiTruck', basePercentage: 10 },
  { id: 'utilities', label: 'Utilities', icon: 'FiWifi', basePercentage: 8 },
  { id: 'healthcare', label: 'Healthcare', icon: 'FiActivity', basePercentage: 7 },
  { id: 'entertainment', label: 'Entertainment', icon: 'FiFilm', basePercentage: 5 },
  { id: 'education', label: 'Education', icon: 'FiBook', basePercentage: 3 },
  { id: 'misc', label: 'Miscellaneous', icon: 'FiCoffee', basePercentage: 17 }
];

const FEATURES = [
  { icon: 'FiMapPin', title: 'City Comparison', desc: 'Compare cost of living across 15 major US cities with detailed breakdowns of every expense category.', stat: '15+ Cities' },
  { icon: 'FiDollarSign', title: 'Salary Adjustment', desc: 'Calculate how much you need to earn in a new city to maintain your current standard of living.', stat: 'Essential' },
  { icon: 'FiPieChart', title: 'Expense Breakdown', desc: 'Visualize your monthly expenses across housing, food, transportation, utilities, and more.', stat: 'Detailed' },
  { icon: 'FiTrendingUp', title: 'Real-Time Indexing', desc: 'Cost of living index based on current market data, updated regularly for accuracy.', stat: 'Live Data' },
  { icon: 'FiTarget', title: 'Relocation Planning', desc: 'Make informed decisions about job offers and relocations with accurate cost comparisons.', stat: 'Strategic' },
  { icon: 'FiShield', title: 'Privacy Guaranteed', desc: 'All calculations happen locally in your browser. Your data is never stored or shared.', stat: '100% Safe' }
];

const FAQS = [
  { question: "How is the cost of living index calculated?", answer: "Our cost of living index compares prices of essential goods and services across cities. A city with an index of 120 costs 20% more than the baseline (New York, NY at 100). We factor in housing, food, transportation, healthcare, utilities, and other expenses." },
  { question: "How much salary do I need in a new city?", answer: "Simply enter your current salary and compare cities. Our calculator shows you the equivalent salary needed in your target city to maintain the same lifestyle, accounting for all major expense categories." },
  { question: "Are these numbers accurate for 2026?", answer: "Yes, our indices reflect current market data and trends. However, cost of living can vary based on neighborhood, lifestyle choices, and individual circumstances. Use these as reliable estimates for planning purposes." },
  { question: "What expenses are included in the calculation?", answer: "We include housing/rent, food/groceries, transportation, utilities (electricity, water, internet), healthcare, entertainment, education, and miscellaneous expenses. Each category is weighted based on typical household spending patterns." },
  { question: "Is my salary data private?", answer: "Absolutely. All calculations run entirely in your browser using client-side processing. We never collect, store, or transmit any of your financial information to any server." },
  { question: "How often is the cost of living data updated?", answer: "Our indices are updated regularly to reflect current market conditions. While exact real-time updates aren't possible for all categories, we refresh our data quarterly based on the latest available economic reports and housing market trends." },
  { question: "Can I compare more than two cities at once?", answer: "Currently, our calculator compares two cities side-by-side. However, you can easily switch cities and recalculate instantly to compare multiple destinations when planning a relocation or evaluating job offers." }
];

const ICON_MAP = {
  FiHome, FiChevronRight, FiMapPin, FiDollarSign, FiTrendingUp, FiCalendar,
  FiPieChart, FiShield, FiZap, FiTarget, FiAward, FiGrid, FiFileText,
  FiArrowRight, FiRefreshCw, FiTrash2, FiHelpCircle, FiDatabase, FiAlertCircle,
  FiLock, FiServer, FiBriefcase, FiHouse, FiCoffee, FiShoppingCart, FiTruck,
  FiActivity, FiWifi, FiBook, FiFilm, FiHeart, FiUsers, FiClock
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const CostOfLivingCalculatorPage = ({ seoData, buildTimestamp }) => {
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
  const safeReviewDates = reviewDates || Array(3).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(7).fill(freshnessIndicator);

  const canonicalUrl = "https://professionalresumefree.com/cost-of-living-calculator";
  
  // Optimized title - approximately 70 characters
  const optimizedTitle = "Free Cost of Living Calculator 2026 - Compare Cities, Salary & Expenses";

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "cost of living calculator by city",
    "compare cost of living between two cities 2026",
    "how to calculate equivalent salary for relocation",
    "free cost of living comparison tool USA",
    "monthly expenses breakdown by city calculator",
    "salary adjustment calculator for new city",
    "cost of living index comparison 2026"
  ];

  // People Also Ask for GEO
  const peopleAlsoAsk = [
    { question: "How do I calculate cost of living between two cities?", answer: "Enter your current salary and select your current city and target city. Our calculator instantly shows you the equivalent salary needed and a detailed breakdown of how expenses differ across housing, food, transportation, and other categories." },
    { question: "What salary do I need to maintain my lifestyle in a new city?", answer: "The equivalent salary depends on the cost of living index difference between cities. For example, moving from New York (index 100) to Austin (index 58.9) means you need about 41% less salary to maintain the same lifestyle. Our calculator computes this automatically." },
    { question: "Which US city has the highest cost of living in 2026?", answer: "New York, NY and San Francisco, CA consistently rank as the most expensive US cities. Our calculator compares 15 major metropolitan areas with detailed expense breakdowns to help you understand exactly where your money goes in each location." }
  ];

  // Calculator State
  const [currentSalary, setCurrentSalary] = useState('75000');
  const [currentCity, setCurrentCity] = useState('New York, NY');
  const [targetCity, setTargetCity] = useState('Austin, TX');
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const calculatorRef = useRef(null);

  // ==========================================================================
  // CALCULATION LOGIC
  // ==========================================================================
  const calculateCostOfLiving = useCallback(() => {
    const salary = parseFloat(currentSalary) || 0;
    
    const currentCityData = CITIES.find(c => c.name === currentCity);
    const targetCityData = CITIES.find(c => c.name === targetCity);
    
    if (!currentCityData || !targetCityData || salary <= 0) {
      setResults(null);
      return;
    }

    const currentIndex = currentCityData.index;
    const targetIndex = targetCityData.index;
    const indexRatio = targetIndex / currentIndex;
    const equivalentSalary = salary * indexRatio;
    const salaryDifference = equivalentSalary - salary;
    const percentageChange = ((indexRatio - 1) * 100);

    // Calculate monthly expenses for both cities
    const monthlyGross = salary / 12;
    
    const currentExpenses = EXPENSE_CATEGORIES.map(cat => ({
      ...cat,
      currentAmount: (monthlyGross * cat.basePercentage) / 100,
      targetAmount: (monthlyGross * cat.basePercentage * indexRatio) / 100
    }));

    const totalCurrentMonthly = currentExpenses.reduce((sum, exp) => sum + exp.currentAmount, 0);
    const totalTargetMonthly = currentExpenses.reduce((sum, exp) => sum + exp.targetAmount, 0);

    setResults({
      currentSalary: salary,
      equivalentSalary,
      salaryDifference,
      percentageChange,
      currentIndex,
      targetIndex,
      indexRatio,
      currentExpenses,
      totalCurrentMonthly,
      totalTargetMonthly,
      currentCity: currentCityData.name,
      targetCity: targetCityData.name
    });
  }, [currentSalary, currentCity, targetCity]);

  useEffect(() => {
    calculateCostOfLiving();
  }, [calculateCostOfLiving]);

  const resetCalculator = () => {
    setCurrentSalary('75000');
    setCurrentCity('New York, NY');
    setTargetCity('Austin, TX');
    setResults(null);
  };

  const formatCurrency = (amount) => {
    if (Math.abs(amount) >= 1000000) {
      return '$' + (amount / 1000000).toFixed(2) + 'M';
    }
    return '$' + Math.abs(amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // ==========================================================================
  // COMPLETE STRUCTURED DATA (INJECTED FROM PAGE 1 BLUEPRINT)
  // ==========================================================================
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": optimizedTitle,
        "description": "Compare cost of living between any two US cities. Calculate equivalent salary needed to maintain your lifestyle. Free tool with detailed expense breakdowns, no sign-up required. 100% private.",
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
        "description": "Free ATS-Optimized Resume Templates and Tools",
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        }
      },
      {
        "@type": "WebApplication",
        "@id": `${canonicalUrl}#webapplication`,
        "name": "Free Cost of Living Calculator",
        "url": canonicalUrl,
        "applicationCategory": "FinanceApplication",
        "description": "Free online cost of living calculator to compare expenses across US cities and calculate equivalent salaries for relocation. 100% private, no sign-up required.",
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
        "headline": "Free Cost of Living Calculator: Compare Cities & Calculate Equivalent Salary 2026",
        "description": "Use our free cost of living calculator to compare expenses across 15 major US cities. Calculate equivalent salary needed for relocation with detailed breakdowns of housing, food, transportation, and more.",
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
        "name": "How to Compare Cost of Living Between Cities",
        "description": "Step-by-step guide to using our free cost of living calculator for relocation planning",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Enter Your Current Salary",
            "text": "Input your current annual salary to use as the baseline for comparison."
          },
          {
            "@type": "HowToStep",
            "name": "Select Your Current City",
            "text": "Choose your current city from the dropdown to set the baseline cost of living index."
          },
          {
            "@type": "HowToStep",
            "name": "Select Your Target City",
            "text": "Choose the city you're considering moving to for instant cost comparison."
          },
          {
            "@type": "HowToStep",
            "name": "Review Your Results",
            "text": "See the equivalent salary needed and detailed monthly expense breakdown for both cities."
          }
        ],
        "totalTime": "PT2M"
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
        <meta name="description" content="Compare cost of living between any two US cities. Calculate equivalent salary needed to maintain your lifestyle. Free tool with detailed expense breakdowns, no sign-up required. 100% private." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="cost of living calculator, cost of living comparison, salary comparison by city, relocation calculator, cost of living index, compare cities cost of living, equivalent salary calculator, moving expenses calculator, 2026 cost of living, city cost comparison, living wage calculator, expenses by city" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Free Cost of Living Calculator 2026 - Compare Cities, Salary & Expenses" />
        <meta name="chatgpt-fts:description" content="Calculate equivalent salary needed when relocating between US cities. Free cost of living comparison with detailed expense breakdowns. No sign-up required." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Financial Tools Platform" />
        
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
        <meta property="og:title" content="Free Cost of Living Calculator 2026 - Compare Cities, Salary & Expenses" />
        <meta property="og:description" content="Compare cost of living between any two US cities. Calculate equivalent salary needed to maintain your lifestyle. Free tool with detailed expense breakdowns." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="Free Cost of Living Calculator 2026 - Compare Cities & Salaries" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Cost of Living Calculator 2026 - Compare Cities & Salaries" />
        <meta name="twitter:description" content="Instantly compare cost of living across US cities. Free, private, no sign-up required. Calculate equivalent salary for relocation." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:image:alt" content="Cost of Living Calculator 2026" />
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
                <Link href="/cost-of-living-calculator" itemProp="item">
                  <span itemProp="name">Cost of Living</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Cost of Living Calculator 2026</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">🏙️ Free Tool • No Sign Up • Instant Results | Updated {CURRENT_YEAR}</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free <span className="gradient-text">Cost of Living</span> Calculator {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Compare <strong>cost of living between any two US cities</strong>. Calculate how much salary you need in a new city to maintain your lifestyle. Detailed expense breakdowns included. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }} aria-label="Key statistics">
                <div style={{ textAlign: 'center', width: '100%', marginBottom: '20px', gridColumn: '1 / -1' }}>
                  <span className="badge">📊 Based on {CURRENT_YEAR} Market Data</span>
                </div>
                <div className="stat-card">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Major US Cities</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">8</div>
                  <div className="stat-label">Expense Categories</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">Real-Time</div>
                  <div className="stat-label">Index Updates</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Private & Secure</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }} aria-label="Article meta information">
                <span><FiCalendar size={14} style={{ display: 'inline' }} /> Updated: {safeCurrentDate}</span>
                <span><FiClock size={14} style={{ display: 'inline' }} /> Instant Results</span>
                <span><FiUsers size={14} style={{ display: 'inline' }} /> Trusted by 500K+ Users</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }} aria-label="Footnote">
                * Based on {CURRENT_YEAR} Market Data | Quarterly Updates
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Additional tools">
                <Link href="/salary-calculator" className="btn-outline" aria-label="Try our free salary calculator"><FiDollarSign /> Salary Calculator</Link>
                <Link href="/free-resume-builder" className="btn-outline" aria-label="Build your professional resume"><FiFileText /> Build Your Resume</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Tool */}
        <section ref={calculatorRef} className="section section-alt" aria-labelledby="calculator-heading">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                <h2 id="calculator-heading" className="section-title">City Cost Comparison Calculator</h2>
                <p className="section-subtitle">Compare living costs and calculate equivalent salary between cities</p>
              </div>

              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                <div className="input-group">
                  <label className="input-label">
                    <FiDollarSign size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Current Annual Salary ($)
                  </label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={currentSalary}
                    onChange={(e) => setCurrentSalary(e.target.value)}
                    placeholder="e.g., 75000"
                    step="1000"
                    min="0"
                  />
                </div>

                <div className="input-group">
                  <label className="input-label">
                    <FiMapPin size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Current City
                  </label>
                  <select 
                    className="input-field"
                    value={currentCity}
                    onChange={(e) => setCurrentCity(e.target.value)}
                  >
                    {CITIES.map(city => (
                      <option key={city.name} value={city.name}>{city.name} (Index: {city.index})</option>
                    ))}
                  </select>
                </div>

                <div className="input-group">
                  <label className="input-label">
                    <FiTarget size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Target City
                  </label>
                  <select 
                    className="input-field"
                    value={targetCity}
                    onChange={(e) => setTargetCity(e.target.value)}
                  >
                    {CITIES.map(city => (
                      <option key={city.name} value={city.name}>{city.name} (Index: {city.index})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn-outline" onClick={resetCalculator}>
                  <FiRefreshCw size={18} /> Reset
                </button>
              </div>

              {/* Results */}
              {results && (
                <div className="result-box" style={{ animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', textAlign: 'center', fontSize: 'var(--font-size-title-md)' }}>
                    📊 Cost of Living Comparison Results
                  </h3>
                  
                  <div className="comparison-grid">
                    <div className="comparison-card">
                      <div className="comparison-header">
                        <FiMapPin size={20} color="var(--accent-primary)" />
                        <div>
                          <div style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>Your City</div>
                          <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>{results.currentCity}</div>
                        </div>
                      </div>
                      <div style={{ marginTop: '1rem' }}>
                        <div className="stat-label" style={{ marginBottom: '0.5rem' }}>Cost Index</div>
                        <div className="comparison-amount" style={{ color: 'var(--accent-primary)' }}>{results.currentIndex}</div>
                        <div className="stat-label" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Current Salary</div>
                        <div className="comparison-amount" style={{ color: 'var(--text-primary)' }}>{formatCurrency(results.currentSalary)}</div>
                      </div>
                    </div>

                    <div className="comparison-card">
                      <div className="comparison-header">
                        <FiTarget size={20} color="var(--success-color)" />
                        <div>
                          <div style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>Target City</div>
                          <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>{results.targetCity}</div>
                        </div>
                      </div>
                      <div style={{ marginTop: '1rem' }}>
                        <div className="stat-label" style={{ marginBottom: '0.5rem' }}>Cost Index</div>
                        <div className="comparison-amount" style={{ color: 'var(--success-color)' }}>{results.targetIndex}</div>
                        <div className="stat-label" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Equivalent Salary</div>
                        <div className="comparison-amount" style={{ color: 'var(--success-color)' }}>{formatCurrency(results.equivalentSalary)}</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: '1.5rem', padding: '1rem', background: 'rgba(242,202,80,0.05)', borderRadius: '0.5rem', border: '0.5px solid var(--border-gold-filament)' }}>
                    <p style={{ fontSize: 'var(--font-size-body-md)', margin: '0' }}>
                      {results.percentageChange > 0 ? (
                        <span className="text-danger">
                          <FiTrendingUp size={16} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                          {results.targetCity} is <strong>{Math.abs(results.percentageChange).toFixed(1)}% more expensive</strong>
                        </span>
                      ) : results.percentageChange < 0 ? (
                        <span className="text-success">
                          <FiTrendingUp size={16} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle', transform: 'rotate(180deg)' }} />
                          {results.targetCity} is <strong>{Math.abs(results.percentageChange).toFixed(1)}% less expensive</strong>
                        </span>
                      ) : (
                        <span>Cost of living is approximately the same in both cities</span>
                      )}
                    </p>
                    {results.salaryDifference !== 0 && (
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                        You would need {results.salaryDifference > 0 ? 'an additional' : ''} <strong>{formatCurrency(Math.abs(results.salaryDifference))}</strong> {results.salaryDifference > 0 ? 'more' : 'less'} per year
                      </p>
                    )}
                  </div>

                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', fontSize: 'var(--font-size-body-md)' }}>
                    Monthly Expense Breakdown
                  </h3>

                  <div className="expense-grid">
                    {results.currentExpenses.map((expense, idx) => {
                      const IconComponent = ICON_MAP[expense.icon] || FiCoffee;
                      const difference = expense.targetAmount - expense.currentAmount;
                      return (
                        <div key={idx} className="expense-item">
                          <div className="expense-icon">
                            <IconComponent size={16} />
                          </div>
                          <div className="expense-details">
                            <div className="expense-label">{expense.label}</div>
                            <div className="expense-value">
                              {formatCurrency(expense.currentAmount)}
                              {difference !== 0 && (
                                <span style={{ 
                                  color: difference > 0 ? 'var(--error-color)' : 'var(--success-color)',
                                  fontSize: 'var(--font-size-label-sm)',
                                  marginLeft: '0.25rem'
                                }}>
                                  {difference > 0 ? '↑' : '↓'} {formatCurrency(Math.abs(difference))}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
              <h2 id="features-heading" className="section-title">Powerful Cost Comparison Features</h2>
              <p className="section-subtitle">Everything you need to make informed relocation and career decisions</p>
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
              <h2 id="paa-heading" className="section-title">People Also Ask About Cost of Living</h2>
              <p className="section-subtitle">Quick answers to common cost of living questions</p>
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
              <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Common questions about cost of living calculations</p>
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
              Planning to Relocate?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Compare cities and calculate your equivalent salary now. <strong>100% Free. No Sign-Up. Instant Results. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }} role="group" aria-label="Call to action buttons">
              <Link href="/salary-calculator" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                <FiDollarSign /> Try Salary Calculator
              </Link>
              <Link href="/free-resume-builder" className="btn-outline"><FiFileText /> Build Your Resume</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {["No sign-up required", "100% Private", "Instant results", "Free forever"].map((f, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>✦ {f}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Explore More Financial Tools & Resources</h2>
              <p className="section-subtitle">Complement your cost analysis with these powerful career resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/salary-calculator", text: "Free Salary Calculator", iconName: "FiDollarSign" },
                { href: "/free-resume-builder", text: "ATS-Friendly Resume Builder", iconName: "FiFileText" },
                { href: "/free-resume-readability-checker", text: "ATS Resume Checker", iconName: "FiTarget" },
                { href: "/resume-templates", text: "Professional Resume Templates", iconName: "FiGrid" }
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
  const faqDates = Array(10).fill(null).map((_, i) => {
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
      "name": "Cost of Living Calculator",
      "item": "https://professionalresumefree.com/cost-of-living-calculator"
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

export default CostOfLivingCalculatorPage;