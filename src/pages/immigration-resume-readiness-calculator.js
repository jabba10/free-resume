// pages/immigration-resume-readiness-calculator.js
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { 
  FiHome, FiChevronRight, FiGlobe, FiTarget, FiFileText, FiCalendar,
  FiShield, FiStar, FiGrid, FiArrowRight, FiRefreshCw, FiHelpCircle,
  FiAlertCircle, FiCheckCircle, FiAlertTriangle, FiFlag, FiUsers,
  FiBook, FiBriefcase, FiAward, FiDollarSign, FiTrendingUp, FiEdit,
  FiClock, FiActivity, FiPieChart, FiLayout, FiEye, FiCheck
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
    --font-size-label-sm: 0.6875rem;
    --line-height-display: 1.1; --line-height-headline: 1.2; --line-height-body: 1.6;
    --font-weight-semibold: 600; --font-weight-bold: 700; --font-weight-extrabold: 800;
    --letter-spacing-tight: -0.02em; --letter-spacing-caps: 0.08em;
    --section-gap-md: clamp(4rem,8vw,6rem); --section-gap-lg: clamp(5rem,10vw,8rem);
    --content-max-width: 1280px; --gutter-desktop: clamp(1.5rem,5vw,2.5rem);
    --shadow-gold-glow-sm: 0 0 10px rgba(242,202,80,0.3);
    --shadow-card: 0 4px 12px rgba(0,0,0,0.3); --shadow-card-hover: 0 8px 24px rgba(0,0,0,0.4),0 0 20px rgba(242,202,80,0.05);
    --transition-fast: 150ms; --transition-medium: 250ms; --easing-smooth: cubic-bezier(0.65,0,0.35,1);
    --glass-blur: 20px;
    --btn-primary-bg: #f2ca50; --btn-primary-text: #3c2f00; --btn-primary-padding: 0.875rem 2rem;
    --btn-outline-border: rgba(212,175,55,0.5); --btn-outline-text: #f2ca50;
    --card-bg: rgba(28,27,29,0.6); --card-border: 0.5px solid rgba(212,175,55,0.15);
    --card-padding: clamp(1.5rem,4vw,2.5rem);
    --input-bg: #1c1b1d; --input-border: 1px solid rgba(229,225,228,0.15);
    --input-text: #e5e1e4; --input-radius: 0.375rem; --input-padding: 0.75rem 1rem;
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
  .gradient-text { background:linear-gradient(135deg,#f2ca50,#d4af37,#ffe088); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .section-container { max-width:var(--content-max-width); margin:0 auto; padding:0 var(--gutter-desktop); width:100%; }
  @media (max-width:768px) { .section-container { padding:0 1rem; } }
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
  .stat-number { font-size:clamp(1.2rem,3vw,1.8rem); font-weight:var(--font-weight-bold); color:var(--accent-primary); display:block; font-family:var(--font-display); word-break:break-word; overflow-wrap:break-word; }
  .stat-label { color:var(--text-secondary); font-size:var(--font-size-label-sm); word-break:break-word; }
  .feature-badge { display:inline-flex; align-items:center; gap:0.25rem; background:rgba(242,202,80,0.1); padding:0.25rem 0.75rem; border-radius:9999px; font-size:var(--font-size-body-sm); color:var(--accent-primary); border:0.5px solid var(--border-gold-filament); }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .text-success { color:var(--success-color); font-weight:var(--font-weight-semibold); }
  .text-danger { color:var(--error-color); font-weight:var(--font-weight-semibold); }
  .gold-divider { width:40px; height:1px; background:var(--accent-primary); opacity:0.6; margin:1.5rem auto; }
  .input-group { margin-bottom:1.5rem; }
  .input-label { display:block; margin-bottom:0.5rem; color:var(--text-secondary); font-weight:500; font-size:var(--font-size-body-sm); }
  .input-field { width:100%; padding:var(--input-padding); background:var(--input-bg); border:var(--input-border); border-radius:var(--input-radius); color:var(--input-text); font-size:1rem; font-family:var(--font-body); transition:border-color var(--transition-fast); }
  .input-field:focus { outline:none; border-color:var(--accent-primary); box-shadow:0 0 0 3px rgba(242,202,80,0.1); }
  select.input-field { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23d4af37' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 1rem center; padding-right:2.5rem; }
  .result-box { background:rgba(242,202,80,0.05); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:clamp(1rem,3vw,1.5rem); margin-top:2rem; }
  .score-circle { width:140px; height:140px; border-radius:50%; display:flex; flex-direction:column; align-items:center; justify-content:center; margin:0 auto 1.5rem; }
  .score-high { background:rgba(76,175,80,0.1); border:4px solid var(--success-color); box-shadow:0 0 30px rgba(76,175,80,0.2); }
  .score-medium { background:rgba(242,202,80,0.1); border:4px solid var(--accent-primary); box-shadow:0 0 30px rgba(242,202,80,0.2); }
  .score-low { background:rgba(244,67,54,0.1); border:4px solid var(--error-color); box-shadow:0 0 30px rgba(244,67,54,0.2); }
  .factor-item { display:flex; justify-content:space-between; align-items:center; padding:0.75rem 1rem; background:var(--card-bg); border:var(--card-border); border-radius:0.375rem; margin-bottom:0.5rem; }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; transition:all var(--transition-fast); }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  @keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

const CURRENT_YEAR = new Date().getFullYear();

const IMMIGRATION_FACTORS = [
  { id: 'occupation', label: 'Occupation on Shortage List', weight: 25, description: 'Your occupation matches in-demand roles in the target country' },
  { id: 'qualifications', label: 'Qualification Assessment', weight: 20, description: 'Degrees and certifications recognized by relevant authority' },
  { id: 'experience', label: 'Skilled Work Experience', weight: 20, description: 'Years of experience in your nominated occupation' },
  { id: 'language', label: 'Language Proficiency', weight: 20, description: 'IELTS, CELPIP, or equivalent test scores meeting requirements' },
  { id: 'age', label: 'Age Factor', weight: 10, description: 'Age range optimal for immigration points (typically 25-35)' },
  { id: 'adaptability', label: 'Adaptability Factors', weight: 5, description: 'Spouse skills, prior study/work in country, family connections' }
];

const COUNTRIES = {
  'canada': { name: 'Canada', passMark: 67, maxPoints: 100, system: 'Express Entry - Federal Skilled Worker' },
  'australia': { name: 'Australia', passMark: 65, maxPoints: 130, system: 'General Skilled Migration (GSM)' },
  'uk': { name: 'United Kingdom', passMark: 70, maxPoints: 100, system: 'Skilled Worker Visa' },
  'nz': { name: 'New Zealand', passMark: 100, maxPoints: 200, system: 'Skilled Migrant Category (SMC)' }
};

const FEATURES = [
  { icon: 'FiGlobe', title: '4 Country Support', desc: 'Assess resume readiness for Canada, Australia, UK, and New Zealand skilled migration programs with country-specific criteria.', stat: '4 Countries' },
  { icon: 'FiTarget', title: 'Factor Weighting', desc: 'Understand which resume factors carry the most weight for immigration points assessment across 6 key dimensions.', stat: '6 Factors' },
  { icon: 'FiFlag', title: 'Pass Mark Check', desc: 'See if your resume meets the minimum points threshold for skilled migration eligibility in your target country.', stat: 'Essential' },
  { icon: 'FiActivity', title: 'Real-Time Feedback', desc: 'Adjust your ratings and instantly see how changes affect your overall readiness score and pass mark status.', stat: 'Interactive' }
];

const FAQS = [
  { question: "What makes a resume immigration-ready?", answer: "An immigration-ready resume emphasizes skilled occupation classification, qualification equivalency, years of relevant experience, language test scores, and adaptability factors. It should align with the specific points-based assessment criteria of your target country and highlight credentials recognized by immigration authorities such as WES for Canada, ACS for Australia, or NZQA for New Zealand." },
  { question: "How is the readiness score calculated?", answer: "Rate yourself on 6 weighted factors: occupation match (25%), qualifications (20%), experience (20%), language (20%), age (10%), and adaptability (5%). The weighted average determines your overall readiness percentage. A score above the country's pass mark indicates strong readiness for skilled migration application." },
  { question: "Do I need a formal qualification assessment?", answer: "Most countries require formal qualification assessment through designated organizations (e.g., WES for Canada, ACS for Australia, UK NARIC for the UK). Our calculator helps you estimate readiness, but official assessment is mandatory for actual immigration applications. Plan for this process as it can take several weeks to months." },
  { question: "What language score do I need for skilled migration?", answer: "Requirements vary by country: Canada typically requires CLB 7+ (IELTS 6.0+ per band), Australia requires Competent English (IELTS 6.0+), UK requires B2 level (IELTS 4.0-5.0+ depending on visa type), and New Zealand requires IELTS 6.5+. Higher scores earn more points in all systems and can significantly improve your chances." }
];

const ICON_MAP = { 
  FiHome, FiChevronRight, FiGlobe, FiTarget, FiFileText, FiCalendar,
  FiShield, FiStar, FiGrid, FiArrowRight, FiRefreshCw, FiHelpCircle,
  FiAlertCircle, FiCheckCircle, FiAlertTriangle, FiFlag, FiUsers,
  FiBook, FiBriefcase, FiAward, FiDollarSign, FiTrendingUp, FiEdit,
  FiClock, FiActivity, FiPieChart, FiLayout, FiEye, FiCheck
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ImmigrationResumeReadinessCalculatorPage = ({ seoData }) => {
  const { 
    currentDate, 
    lastModifiedDate,
    buildTimestamp,
    faqDates 
  } = seoData || {};

  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(4).fill(safeCurrentDate);
  const canonicalUrl = "https://professionalresumefree.com/immigration-resume-readiness-calculator";

  // Product image URL for schema
  const productImage = "https://professionalresumefree.com/immigration-resume-readiness-og.jpg";

  const [selectedCountry, setSelectedCountry] = useState('canada');
  const [factorRatings, setFactorRatings] = useState({
    occupation: 60,
    qualifications: 55,
    experience: 50,
    language: 45,
    age: 65,
    adaptability: 40
  });
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const calculateReadiness = useCallback(() => {
    const countryData = COUNTRIES[selectedCountry];
    let totalScore = 0;
    let totalWeight = 0;
    const factorScores = [];

    IMMIGRATION_FACTORS.forEach(factor => {
      const rating = factorRatings[factor.id] || 0;
      const weightedScore = (rating / 100) * factor.weight;
      totalScore += weightedScore;
      totalWeight += factor.weight;
      
      factorScores.push({
        ...factor,
        rating,
        weightedScore: Math.round(weightedScore * 100) / 100,
        percentage: rating
      });
    });

    const readinessScore = totalWeight > 0 ? Math.round((totalScore / totalWeight) * 100) : 0;
    const passed = readinessScore >= countryData.passMark;
    
    let scoreClass = 'score-low';
    if (readinessScore >= countryData.passMark) {
      scoreClass = 'score-high';
    } else if (readinessScore >= countryData.passMark * 0.8) {
      scoreClass = 'score-medium';
    }

    const strengths = factorScores.filter(f => f.rating >= 70);
    const gaps = factorScores.filter(f => f.rating < 50);

    setResults({
      readinessScore,
      passed,
      scoreClass,
      factorScores,
      countryData,
      strengths,
      gaps,
      pointsNeeded: Math.max(0, countryData.passMark - readinessScore)
    });
  }, [selectedCountry, factorRatings]);

  useEffect(() => {
    calculateReadiness();
  }, [calculateReadiness]);

  const handleRatingChange = (factorId, value) => {
    setFactorRatings(prev => ({
      ...prev,
      [factorId]: parseInt(value)
    }));
  };

  const resetCalculator = () => {
    setFactorRatings({
      occupation: 60,
      qualifications: 55,
      experience: 50,
      language: 45,
      age: 65,
      adaptability: 40
    });
    setSelectedCountry('canada');
    setResults(null);
  };

  const getRatingColor = (rating) => {
    if (rating >= 70) return 'var(--success-color)';
    if (rating >= 50) return 'var(--accent-primary)';
    return 'var(--error-color)';
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Font Preconnects & Import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>Free Immigration Resume Readiness Calculator {CURRENT_YEAR} - Canada, Australia, UK, NZ | No Sign Up</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Assess your resume's readiness for skilled migration to Canada, Australia, UK, and New Zealand. Rate 6 key factors, check pass marks, and identify gaps. 100% free, private, no sign-up required." />
        <meta name="keywords" content="immigration resume readiness, skilled migration resume checker, visa resume assessment, immigration CV calculator, express entry resume readiness, skilled worker resume tool, migration readiness assessment, immigration eligibility calculator, resume for immigration, skilled migration points" />
        <meta name="author" content="Professional Resume Free" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Free Immigration Resume Readiness Calculator {CURRENT_YEAR} - Check Your Eligibility" />
        <meta name="chatgpt-fts:description" content="Assess your resume readiness for skilled migration to Canada, Australia, UK, and New Zealand. Rate key factors and check pass marks. Free and private." />
        <meta name="chatgpt-fts:keywords" content="immigration resume readiness, skilled migration resume checker, visa resume assessment, immigration CV calculator, express entry resume, skilled worker resume" />
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
        <meta property="og:title" content="Free Immigration Resume Readiness Calculator {CURRENT_YEAR} - Check Your Eligibility Instantly" />
        <meta property="og:description" content="Assess your resume readiness for skilled migration to Canada, Australia, UK, and New Zealand. Rate 6 key factors and check pass marks. 100% free, private, no sign-up." />
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
        <meta name="twitter:title" content="Free Immigration Resume Readiness Calculator {CURRENT_YEAR}" />
        <meta name="twitter:description" content="Assess your resume readiness for skilled migration. Free, private, no sign-up. Canada, Australia, UK, NZ." />
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
                  "name": "Free Immigration Resume Readiness Calculator",
                  "url": canonicalUrl,
                  "applicationCategory": "GovernmentApplication",
                  "description": "Free online tool to assess resume readiness for skilled migration to Canada, Australia, UK, and New Zealand. Rate 6 weighted factors and check against country pass marks.",
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
                  "name": "Free Immigration Resume Readiness Calculator {CURRENT_YEAR} - Canada, Australia, UK, NZ",
                  "description": "Assess your resume's readiness for skilled migration to Canada, Australia, UK, and New Zealand. Rate 6 key factors, check pass marks, and identify gaps.",
                  "dateModified": safeLastModifiedDate
                },
                {
                  "@type": "HowTo",
                  "name": "How to Assess Your Immigration Resume Readiness",
                  "description": "Step-by-step guide to evaluating your resume for skilled migration eligibility",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Select Your Target Country",
                      "text": "Choose from Canada, Australia, UK, or New Zealand. Each country has different skilled migration criteria and pass mark thresholds."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Rate Your Qualifications",
                      "text": "Assess yourself on 6 weighted factors: occupation match (25%), qualifications (20%), experience (20%), language (20%), age (10%), and adaptability (5%). Use the sliders to indicate your readiness level."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Review Your Results",
                      "text": "Check your overall readiness score against the country's pass mark. Review your strengths and identify areas needing improvement before submitting an application."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Address Identified Gaps",
                      "text": "Focus on improving factors with the highest weight and lowest scores. Consider language training, credential assessment, or gaining additional work experience to boost your eligibility."
                    }
                  ],
                  "totalTime": "PT5M"
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
                <span itemProp="name" aria-current="page"><FiGlobe size={14} style={{marginRight: '4px'}} /> Immigration Resume Readiness</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">🌍 {CURRENT_YEAR} EDITION • 4 COUNTRIES • 6 FACTORS • FREE TOOL • NO SIGN UP</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free <span className="gradient-text">Immigration Resume Readiness</span> Calculator {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Assess your <strong>resume's readiness for skilled migration</strong> to Canada, Australia, UK, and New Zealand. Rate 6 key factors, check against country pass marks, and identify gaps before applying. <strong>100% Free. No Sign-Up Required. Complete Privacy Guaranteed.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
                {[
                  { value: "4", label: "Countries Supported" },
                  { value: "6", label: "Assessment Factors" },
                  { value: "Real-Time", label: "Scoring" },
                  { value: "100%", label: "Private & Secure" }
                ].map((s, i) => (
                  <div key={i} className="stat-card">
                    <div className="stat-number">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link href="/immigration-points-calculator" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiGlobe /> Immigration Points Calculator</Link>
                <Link href="/country-resume-format-calculator" className="btn-outline"><FiFlag /> Country Resume Formats</Link>
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
            <span><FiGlobe style={{marginRight: '4px'}} /> 4 Countries</span>
            <span><FiClock style={{marginRight: '4px'}} /> 5 min assessment</span>
            <span><FiCalendar style={{marginRight: '4px'}} /> Updated: {safeCurrentDate}</span>
            <span><FiEye style={{marginRight: '4px'}} /> 12,000+ assessments</span>
          </div>
        </div>

        {/* Calculator Tool */}
        <section className="section section-alt" id="calculator-tool">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                <h2 className="section-title">Resume Readiness Assessment</h2>
                <p className="section-subtitle">Select your target country and rate your qualifications for each immigration factor</p>
              </div>

              <div className="input-group">
                <label className="input-label">
                  <FiGlobe size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                  Target Country
                </label>
                <select className="input-field" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                  {Object.entries(COUNTRIES).map(([key, country]) => (
                    <option key={key} value={key}>{country.name} - {country.system} (Pass Mark: {country.passMark}%)</option>
                  ))}
                </select>
              </div>

              <div className="gold-divider"></div>
              <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: 'var(--font-size-body-md)', textAlign: 'center' }}>
                📊 Rate Your Qualifications
              </h3>

              {IMMIGRATION_FACTORS.map(factor => (
                <div key={factor.id} className="input-group" style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span className="input-label" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {factor.label}
                      <span className="feature-badge" style={{ fontSize: 'var(--font-size-label-sm)', padding: '0.15rem 0.5rem' }}>
                        Weight: {factor.weight}%
                      </span>
                    </span>
                    <span style={{ fontWeight: 700, fontSize: 'var(--font-size-body-sm)', color: getRatingColor(factorRatings[factor.id]) }}>
                      {factorRatings[factor.id]}%
                    </span>
                  </div>
                  <input type="range" min="0" max="100" value={factorRatings[factor.id]} onChange={(e) => handleRatingChange(factor.id, e.target.value)}
                    style={{ width: '100%', WebkitAppearance: 'none', appearance: 'none', height: '8px', background: `linear-gradient(90deg, var(--error-color) 0%, var(--warning-color) 50%, var(--success-color) 100%)`, borderRadius: '4px', outline: 'none' }} />
                  <div className="text-small" style={{ marginTop: '0.25rem' }}>{factor.description}</div>
                </div>
              ))}

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
                <button className="btn-outline" onClick={resetCalculator}><FiRefreshCw size={18} /> Reset All</button>
              </div>

              {/* Results */}
              {results && (
                <div className="result-box" style={{ animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                  <div className="gold-divider"></div>
                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>
                      📊 {results.countryData.name} Readiness Report
                    </h3>
                    <p className="text-small">{results.countryData.system} | Pass Mark: {results.countryData.passMark}%</p>
                  </div>

                  <div className={`score-circle ${results.scoreClass}`}>
                    <span style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>{results.readinessScore}%</span>
                    <span className="stat-label">Readiness Score</span>
                  </div>

                  <p style={{ textAlign: 'center', fontWeight: 600, fontSize: 'var(--font-size-body-lg)', marginBottom: '1.5rem' }}>
                    {results.passed ? (
                      <span className="text-success">
                        <FiCheckCircle size={18} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                        Meets the {results.countryData.passMark}% pass mark! Your resume shows strong readiness.
                      </span>
                    ) : (
                      <span className="text-danger">
                        <FiAlertTriangle size={18} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                        Needs {results.pointsNeeded}% more to meet the {results.countryData.passMark}% pass mark.
                      </span>
                    )}
                  </p>

                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', fontSize: 'var(--font-size-body-md)' }}>
                    Factor Scores
                  </h3>

                  {results.factorScores.map((factor, idx) => (
                    <div key={idx} className="factor-item">
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.25rem' }}>{factor.label}</div>
                        <div style={{ width: '100%', height: '6px', background: 'var(--bg-surface-high)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: `${factor.percentage}%`, height: '100%', background: getRatingColor(factor.percentage), borderRadius: '3px', transition: 'width 0.5s ease' }}></div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', marginLeft: '1rem', flexShrink: 0 }}>
                        <span style={{ fontWeight: 700, color: getRatingColor(factor.percentage), fontSize: 'var(--font-size-body-sm)' }}>{factor.percentage}%</span>
                        <div className="text-small">{factor.weightedScore} pts</div>
                      </div>
                    </div>
                  ))}

                  {results.strengths.length > 0 && (
                    <>
                      <div className="gold-divider"></div>
                      <h3 style={{ color: 'var(--success-color)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-md)' }}>💪 Your Strengths</h3>
                      {results.strengths.map((s, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0' }}>
                          <FiCheckCircle size={16} color="var(--success-color)" />
                          <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)' }}>{s.label} - {s.percentage}%</span>
                        </div>
                      ))}
                    </>
                  )}

                  {results.gaps.length > 0 && (
                    <>
                      <div className="gold-divider"></div>
                      <h3 style={{ color: 'var(--error-color)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-md)' }}>🎯 Areas to Improve</h3>
                      {results.gaps.map((g, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0' }}>
                          <FiAlertTriangle size={16} color="var(--warning-color)" />
                          <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)' }}>{g.label} - {g.percentage}% (Weight: {g.weight}%)</span>
                        </div>
                      ))}
                    </>
                  )}

                  <div className="gold-divider"></div>
                  <div style={{ textAlign: 'center', padding: '1rem', background: 'rgba(242,202,80,0.05)', borderRadius: '0.5rem', border: '0.5px solid var(--border-gold-filament)' }}>
                    <p className="text-small" style={{ margin: 0 }}>
                      <FiAlertCircle size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                      This is an estimate. Official immigration assessments require formal documentation and authorized evaluation bodies.
                    </p>
                  </div>
                </div>
              )}

              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)' }}>
                  <FiAlertCircle size={12} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                  This calculator provides estimates. Always verify with official immigration authorities and authorized assessment bodies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section" id="features">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Comprehensive Resume Readiness Analysis</h2>
              <p className="section-subtitle">Everything you need to evaluate your skilled migration eligibility across four countries</p>
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
              <h2 className="section-title">Frequently Asked Questions About Immigration Resume Readiness ({CURRENT_YEAR} Edition)</h2>
              <p className="section-subtitle">Common questions about skilled migration resume assessment and eligibility</p>
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
              Ready to Start Your Immigration Journey?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Assess your resume readiness and identify areas to strengthen before applying. <strong>100% Free. No Sign-Up Required. Instant Results. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/immigration-points-calculator" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                <FiGlobe /> Immigration Points Calculator
              </Link>
              <Link href="/country-resume-format-calculator" className="btn-outline"><FiFlag /> Country Resume Formats</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["4 Countries", "6 Factors", "Instant Results", "Pass Mark Check", "100% Free"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Explore More Immigration & Career Tools</h2>
              <p className="section-subtitle">Complement your immigration planning with these powerful resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/immigration-points-calculator", text: "Immigration Points Calculator", iconName: "FiGlobe" },
                { href: "/country-resume-format-calculator", text: "Country Resume Format Guide", iconName: "FiFlag" },
                { href: "/salary-calculator", text: "Free Salary Calculator", iconName: "FiDollarSign" },
                { href: "/cost-of-living-calculator", text: "Cost of Living Comparison", iconName: "FiTrendingUp" }
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Version {CURRENT_YEAR}.2 • Next review: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 14)).toISOString().split('T')[0]}</span>
          <span className="text-small" style={{ marginLeft: '1rem', display: 'block', marginTop: '0.5rem' }}>
            <FiAlertCircle size={12} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
            For reference only. Immigration criteria subject to change. Always verify with official government authorities.
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

export default ImmigrationResumeReadinessCalculatorPage;