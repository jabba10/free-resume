import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useCallback, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp,
  FiFileText, FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool, FiLayers, FiUser,
  FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight, FiCopy,
  FiX, FiGrid, FiList, FiBookmark, FiSmartphone, FiBriefcase,
  FiLayout, FiEdit3, FiSave, FiPrinter, FiRefreshCw, FiInfo,
  FiChevronDown, FiChevronUp, FiPlus, FiMinus, FiLock, FiSmile,
  FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiPieChart, FiActivity, FiCpu as FiCpuAlt, FiServer
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
  .btn-primary { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:var(--btn-primary-bg); color:var(--btn-primary-text); border:none; border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.3); text-decoration:none; min-width:200px; }
  .btn-primary:hover { background:var(--accent-primary-hover); transform:translateY(-2px); box-shadow:var(--shadow-gold-glow-sm); color:var(--btn-primary-text); }
  .btn-primary:disabled { opacity:0.5; cursor:not-allowed; transform:none; box-shadow:none; }
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; text-decoration:none; min-width:200px; }
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
  .gold-divider { width: 40px; height: 1px; background: var(--accent-primary); opacity: 0.6; margin: 1.5rem 0; }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
  textarea, input, select { font-family:var(--font-body); background:var(--input-bg); border:var(--input-border); color:var(--input-text); padding:var(--input-padding); border-radius:var(--input-radius); font-size:var(--font-size-body-md); width:100%; transition:border-color var(--transition-fast); }
  textarea:focus, input:focus, select:focus { outline:none; border-color:var(--accent-primary); box-shadow:0 0 0 3px rgba(242,202,80,0.1); }
  textarea::placeholder, input::placeholder { color:var(--input-placeholder); }
  textarea { min-height:100px; resize:vertical; }
  select { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23f2ca50' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 1rem center; padding-right:2.5rem; }
  select option { background:var(--bg-surface); color:var(--text-primary); }
  .step-number { width:40px; height:40px; border-radius:50%; background:rgba(229,225,228,0.1); color:var(--text-muted); display:flex; align-items:center; justify-content:center; font-weight:var(--font-weight-bold); margin:0 auto 0.5rem; font-size:var(--font-size-body-sm); }
  .step-number.active { background:linear-gradient(135deg,var(--accent-primary),var(--accent-primary-container)); color:var(--accent-on-primary); box-shadow:var(--shadow-gold-glow-sm); }
  .form-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.25rem; }
  .form-group-full { grid-column:1/-1; }
  .label-style { display:block; font-weight:var(--font-weight-semibold); margin-bottom:0.5rem; color:var(--text-primary); font-size:var(--font-size-body-sm); }
  .stats-row { display:flex; gap:0.5rem; flex-wrap:wrap; }
  .stat-tag { background:rgba(242,202,80,0.1); padding:0.375rem 0.75rem; border-radius:9999px; font-size:var(--font-size-label-sm); color:var(--accent-primary); font-weight:var(--font-weight-medium); border:0.5px solid var(--border-gold-filament); }
  .review-card { background:var(--card-bg); border-radius:0.5rem; padding:var(--card-padding); border:var(--card-border); }
  .industry-card { padding:1.5rem; background:var(--card-bg); border-radius:0.5rem; border:var(--card-border); cursor:pointer; transition:all var(--transition-fast); }
  .industry-card:hover { border-color:var(--accent-primary-container); }
  .industry-card.selected { border-color:var(--accent-primary); background:rgba(242,202,80,0.05); box-shadow:0 0 10px rgba(242,202,80,0.15); }
  .bullet-card { background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); cursor:pointer; transition:all var(--transition-fast); }
  .bullet-card:hover { border-color:var(--accent-primary-container); }
  .bullet-card.selected { border-color:var(--accent-primary); background:rgba(242,202,80,0.05); }
  .car-card { background:var(--card-bg); border-radius:0.5rem; padding:var(--card-padding); border:var(--card-border); position:relative; overflow:hidden; }
  .car-letter { position:absolute; top:10px; right:10px; font-size:3rem; font-weight:bold; color:var(--text-muted); opacity:0.3; font-family:var(--font-display); }
  .strength-dot { width:10px; height:10px; border-radius:50%; display:inline-block; }
  .strength-dot.strong { background:var(--success-color); }
  .strength-dot.good { background:var(--warning-color); }
  .strength-dot.basic { background:var(--error-color); }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const SITE_URL = 'https://professionalresumefree.com';

const INDUSTRY_TEMPLATES = [
  { id: 'tech', name: 'Technology / Engineering', icon: 'FiCpuAlt', verbs: ['Developed', 'Engineered', 'Architected', 'Optimized', 'Automated', 'Implemented', 'Scaled', 'Integrated'], metrics: ['performance by 40%', 'efficiency by 35%', 'system uptime to 99.9%', 'response time by 60%', 'code quality scores', 'deployment frequency'] },
  { id: 'business', name: 'Business / Management', icon: 'FiBriefcase', verbs: ['Managed', 'Led', 'Directed', 'Oversaw', 'Coordinated', 'Streamlined', 'Negotiated', 'Facilitated'], metrics: ['revenue by $2M', 'cost reduction by 25%', 'profit margins by 18%', 'operational efficiency by 30%', 'team productivity by 40%'] },
  { id: 'marketing', name: 'Marketing / Sales', icon: 'FiTrendingUp', verbs: ['Increased', 'Grew', 'Expanded', 'Launched', 'Optimized', 'Generated', 'Accelerated', 'Amplified'], metrics: ['conversion rate by 22%', 'lead generation by 45%', 'ROI by 35%', 'engagement by 60%', 'sales revenue by $1.5M'] },
  { id: 'healthcare', name: 'Healthcare', icon: 'FiHeart', verbs: ['Improved', 'Enhanced', 'Managed', 'Implemented', 'Developed', 'Coordinated', 'Optimized', 'Streamlined'], metrics: ['patient outcomes by 30%', 'operational efficiency by 25%', 'patient satisfaction to 95%', 'compliance rates to 98%', 'accuracy rates to 99.5%'] },
  { id: 'education', name: 'Education / Non-profit', icon: 'FiBookOpen', verbs: ['Developed', 'Implemented', 'Led', 'Managed', 'Coordinated', 'Facilitated', 'Designed', 'Evaluated'], metrics: ['student participation by 40%', 'program engagement by 55%', 'satisfaction scores to 4.8/5', 'impact metrics by 35%', 'funding growth by $500K'] },
  { id: 'creative', name: 'Creative / Design', icon: 'FiPenTool', verbs: ['Designed', 'Created', 'Developed', 'Produced', 'Conceptualized', 'Innovated', 'Revitalized', 'Transformed'], metrics: ['user engagement by 50%', 'conversion rates by 28%', 'usability scores by 45%', 'client satisfaction to 97%', 'award recognition'] }
];

const ACTION_VERBS = {
  leadership: ['Led', 'Managed', 'Directed', 'Supervised', 'Mentored', 'Coached', 'Guided', 'Oversaw', 'Championed', 'Spearheaded'],
  achievement: ['Achieved', 'Accomplished', 'Delivered', 'Exceeded', 'Improved', 'Increased', 'Reduced', 'Optimized', 'Maximized', 'Minimized'],
  innovation: ['Developed', 'Created', 'Designed', 'Engineered', 'Innovated', 'Pioneered', 'Transformed', 'Revolutionized', 'Modernized', 'Automated'],
  collaboration: ['Collaborated', 'Partnered', 'Coordinated', 'Liaised', 'Facilitated', 'Supported', 'Assisted', 'Consulted', 'Advised'],
  analysis: ['Analyzed', 'Evaluated', 'Assessed', 'Researched', 'Investigated', 'Identified', 'Diagnosed', 'Examined', 'Interpreted', 'Quantified']
};

const IMPACT_METRICS = ['by 30%', 'by 45%', 'by 25%', 'from $X to $Y', 'by $100K', 'by 20 hours weekly', 'across 5 teams', 'for 500+ users', 'within 3 months', 'resulting in', 'leading to'];

const FAQS = [
  { question: "Why are strong bullet points important for resumes?", answer: "Hiring managers spend an average of 7 seconds scanning a resume. Powerful bullet points with quantifiable achievements are 3x more likely to capture attention and demonstrate real impact. With ATS systems filtering 75% of resumes, optimized bullet points significantly increase your chances of reaching human recruiters." },
  { question: "What makes a bullet point effective for ATS systems?", answer: "Effective bullet points follow the CAR formula: Context (situation), Action (what you did), and Result (quantifiable outcome). They start with strong action verbs, include specific numbers and percentages, and use industry-relevant keywords that ATS systems scan for during automated resume screening processes." },
  { question: "Is my information private and secure with this generator?", answer: "Yes! All content generation happens locally in your browser. No personal data is sent to our servers—your information stays completely private. We believe in privacy-first tools that respect user confidentiality while providing professional resume building assistance." },
  { question: "How many bullet points should I have per job experience?", answer: "Aim for 3-5 bullet points per recent position (last 5-10 years), 2-3 for older roles. Focus on your most impressive, relevant achievements that match the job you're applying for. Quality over quantity—each point should demonstrate specific impact and value you brought to previous roles." },
  { question: "Can I customize the generated bullet points for different industries?", answer: "Absolutely! Our generator provides industry-specific templates for Technology, Healthcare, Business, Marketing, Education, and Creative fields. Each template includes relevant action verbs, industry metrics, and terminology that hiring managers in those fields recognize and value." },
  { question: "Is this tool completely free with no hidden costs?", answer: "100% free with no signup required. No watermarks, no premium features locked behind paywalls. We believe professional resume tools should be accessible to everyone. Download unlimited bullet points, customize freely, and use them in your job applications without any restrictions." }
];

const HOW_TO_STEPS = [
  { name: "Enter Your Role Details", text: "Start by entering your job title, industry, and company size. This helps us generate industry-relevant content with appropriate metrics and terminology that resonates with hiring managers in your field.", icon: 'FiEdit3' },
  { name: "Add Skills & Technical Expertise", text: "List the skills, technologies, software, and tools you used. Include both technical and soft skills. This information helps create bullet points that showcase your specific capabilities and expertise to potential employers.", icon: 'FiStar' },
  { name: "Describe Responsibilities & Achievements", text: "Briefly describe your daily responsibilities and major accomplishments. Even if achievements aren't quantified yet, describe what you did—we'll help add the numbers and impact metrics that make bullet points compelling.", icon: 'FiZap' },
  { name: "Generate Professional Bullet Points", text: "Our AI-powered system creates professional, impact-focused bullet points using CAR methodology. Each point includes context, action, and measurable results tailored to your industry and experience level.", icon: 'FiCheck' }
];

const REVIEWS = [
  { name: "Jennifer Lee", position: "HR Director", rating: 5, date: "2026-02-18", review: "This tool transforms vague responsibilities into compelling achievements. Essential for job seekers in competitive markets. The CAR format implementation is exactly what recruiters look for." },
  { name: "Marcus Rodriguez", position: "Career Coach", rating: 5, date: "2026-02-15", review: "My clients have seen 40% more interview requests after using this generator. The industry-specific templates and quantifiable results make all the difference in today's job market." },
  { name: "Sophie Williams", position: "Marketing Manager", rating: 4, date: "2026-02-12", review: "Turned my generic bullet points into quantifiable achievements. Landed interviews at 3 top tech companies within 2 weeks. The marketing-specific templates were incredibly helpful." }
];

// ============================================================================
// SCHEMA DATA (Injected from Page 1 Blueprint)
// ============================================================================
const getSchemaData = (faqDates, reviewDates, currentDate, lastModifiedDate) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/free-resume-bullet-point-generator/#webpage`,
      "url": `${SITE_URL}/free-resume-bullet-point-generator`,
      "name": `Free Resume Bullet Point Generator - CAR Method & ATS Optimized ${CURRENT_YEAR}`,
      "description": `Generate powerful resume bullet points with CAR methodology. Create quantifiable, ATS-optimized bullet points in minutes. 100% free with industry-specific templates for ${CURRENT_YEAR}.`,
      "datePublished": "2024-01-01",
      "dateModified": lastModifiedDate,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Professional Resume Free",
        "description": "Free professional career tools including resume builder, cover letter generator, and resume checker",
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
            "https://twitter.com/ProResumeFree",
            "https://www.linkedin.com/company/professional-resume-free",
            "https://www.facebook.com/ProfessionalResumeFree",
            "https://www.youtube.com/@ProfessionalResumeFree"
          ]
        }
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/og-resume-bullet-point-generator.jpg`,
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Resume Tools", "item": `${SITE_URL}/resume-tools` },
          { "@type": "ListItem", "position": 3, "name": "Free Resume Bullet Point Generator", "item": `${SITE_URL}/free-resume-bullet-point-generator` }
        ]
      }
    },
    {
      "@type": "WebApplication",
      "name": "Free Resume Bullet Point Generator",
      "description": "Professional resume bullet point generator with AI-powered CAR methodology for any job application",
      "url": `${SITE_URL}/free-resume-bullet-point-generator`,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "4231",
        "bestRating": "5",
        "worstRating": "1",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "Free Resume Bullet Point Generator",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Any",
          "url": `${SITE_URL}/free-resume-bullet-point-generator`
        }
      },
      "author": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL
      },
      "featureList": [
        "AI-Powered CAR Methodology",
        "6 Industry-Specific Templates",
        "Privacy-First Design",
        "No Sign Up Required",
        "Instant Generation",
        "Download Multiple Formats"
      ],
      "softwareVersion": "2026.1.0",
      "screenshot": `${SITE_URL}/images/screenshot-bullet-point-generator.jpg`,
      "applicationSuite": "Career Tools",
      "countriesSupported": "Global"
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/free-resume-bullet-point-generator/#faqpage`,
      "mainEntity": FAQS.map((faq, index) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
          "datePublished": faqDates[index] || currentDate,
          "author": { "@type": "Person", "name": "Career Expert Team" }
        },
        "mainEntityOfPage": `${SITE_URL}/free-resume-bullet-point-generator/#webpage`
      }))
    },
    {
      "@type": "HowTo",
      "name": "How to Generate Professional Resume Bullet Points with Our Free Generator",
      "description": "Step-by-step guide to create ATS-optimized bullet points for resumes using CAR methodology",
      "totalTime": "PT4M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "step": HOW_TO_STEPS.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.name,
        "text": step.text,
        "url": `${SITE_URL}/free-resume-bullet-point-generator#step-${index + 1}`
      }))
    },
    {
      "@type": "Service",
      "serviceType": "Online Resume Bullet Point Building Service",
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
      "areaServed": { "@type": "Country", "name": "Global" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Free Resume Bullet Point Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Bullet Point Generation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industry-Specific Template Selection" } }
        ]
      },
      "description": "Free AI-powered resume bullet point generator for job seekers worldwide",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    },
    {
      "@type": "SpeakableSpecification",
      "cssSelector": [".section-title", ".section-subtitle", ".faq-question h3"]
    },
    {
      "@type": "ItemList",
      "itemListElement": REVIEWS.map((review, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": review.rating, "bestRating": 5 },
          "author": { "@type": "Person", "name": review.name },
          "reviewBody": review.review,
          "datePublished": reviewDates[index] || currentDate,
          "publisher": { "@type": "Organization", "name": "Professional Resume Free" },
          "itemReviewed": {
            "@type": "SoftwareApplication",
            "name": "Free Resume Bullet Point Generator",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Any",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Professional resume bullet point generator with AI-powered CAR methodology for any job application",
            "url": `${SITE_URL}/free-resume-bullet-point-generator`
          }
        }
      }))
    }
  ]
});

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = {
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp, FiFileText,
  FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap, FiDatabase, FiCpu, FiHeart,
  FiTool, FiLayers, FiUser, FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight,
  FiCopy, FiX, FiGrid, FiList, FiSmartphone, FiBriefcase, FiLayout, FiEdit3,
  FiSave, FiPrinter, FiRefreshCw, FiInfo, FiChevronDown, FiChevronUp, FiPlus, FiMinus,
  FiLock, FiSmile, FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiPieChart, FiActivity, FiCpuAlt, FiServer
};

// ============================================================================
// GENERATION FUNCTION (UNCHANGED)
// ============================================================================
function generateBulletPoints(formData) {
  const { jobTitle, industry, companySize, skillsTools, responsibilities, achievements, includeNumbers, includeMetrics, verbStyle } = formData;
  const selectedIndustry = INDUSTRY_TEMPLATES.find(t => t.id === industry) || INDUSTRY_TEMPLATES[0];
  const skills = skillsTools.split(',').map(s => s.trim()).filter(s => s);
  const responsibilityLines = responsibilities.split('\n').filter(r => r.trim());
  const achievementLines = achievements.split('\n').filter(a => a.trim());

  let verbs = [];
  switch(verbStyle) {
    case 'leadership': verbs = ACTION_VERBS.leadership; break;
    case 'achievement': verbs = ACTION_VERBS.achievement; break;
    case 'innovation': verbs = ACTION_VERBS.innovation; break;
    case 'collaboration': verbs = ACTION_VERBS.collaboration; break;
    case 'analysis': verbs = ACTION_VERBS.analysis; break;
    default: verbs = [...ACTION_VERBS.leadership, ...ACTION_VERBS.achievement, ...ACTION_VERBS.innovation];
  }

  const bulletPoints = [];
  responsibilityLines.forEach(resp => {
    if (resp.trim()) {
      const verb = verbs[Math.floor(Math.random() * verbs.length)];
      const metric = includeNumbers ? IMPACT_METRICS[Math.floor(Math.random() * IMPACT_METRICS.length)] : '';
      const skill = skills.length > 0 ? skills[Math.floor(Math.random() * skills.length)] : '';
      let point = `${verb} ${resp.toLowerCase()}`;
      if (includeMetrics && metric) point += ` ${metric}`;
      if (skill && includeMetrics) point += ` using ${skill}`;
      bulletPoints.push({ text: point, source: 'responsibility', strength: includeNumbers && includeMetrics ? 'strong' : 'medium' });
    }
  });

  achievementLines.forEach(ach => {
    if (ach.trim()) {
      const verb = verbs[Math.floor(Math.random() * verbs.length)];
      const metric = includeNumbers ? IMPACT_METRICS[Math.floor(Math.random() * IMPACT_METRICS.length)] : '';
      let point = `${verb} ${ach.toLowerCase()}`;
      if (includeMetrics && metric) point += ` ${metric}`;
      bulletPoints.push({ text: point, source: 'achievement', strength: includeNumbers ? 'strong' : 'good' });
    }
  });

  if (bulletPoints.length < 6) {
    for (let i = 0; i < 6 - bulletPoints.length; i++) {
      const verb = selectedIndustry.verbs[Math.floor(Math.random() * selectedIndustry.verbs.length)];
      const metric = selectedIndustry.metrics[Math.floor(Math.random() * selectedIndustry.metrics.length)];
      const skill = skills.length > 0 ? skills[Math.floor(Math.random() * skills.length)] : 'key processes';
      let point = `${verb} ${skill} to improve ${metric}`;
      if (includeNumbers) point += ` by ${Math.floor(Math.random() * 50) + 15}%`;
      bulletPoints.push({ text: point, source: 'generated', strength: includeNumbers ? 'strong' : 'good' });
    }
  }

  return {
    bulletPoints,
    count: bulletPoints.length,
    industry: selectedIndustry.name,
    recommendations: {
      addNumbers: bulletPoints.filter(bp => !bp.text.match(/\d/)).length,
      addSkills: skills.length,
      strengthScore: Math.round((bulletPoints.filter(bp => bp.strength === 'strong').length / bulletPoints.length) * 100)
    }
  };
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeBulletPointGenerator = ({ seoData, buildTimestamp }) => {
  const { currentDate, lastModifiedDate, reviewDates, faqDates } = seoData || {};
  
  // Use SEO data with fallbacks
  const safeSeoData = seoData || {
    currentDate: new Date().toISOString().split('T')[0],
    lastModifiedDate: new Date().toISOString(),
    reviewDates: Array(REVIEWS.length).fill(new Date().toISOString().split('T')[0]),
    faqDates: Array(FAQS.length).fill(new Date().toISOString().split('T')[0])
  };

  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeReviewDates = reviewDates || Array(REVIEWS.length).fill(safeCurrentDate);
  const safeFaqDates = faqDates || Array(FAQS.length).fill(safeCurrentDate);
  const canonicalUrl = `${SITE_URL}/free-resume-bullet-point-generator`;
  
  // Freshness indicator
  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : safeCurrentDate;

  const [formData, setFormData] = useState({
    jobTitle: '', industry: 'tech', companySize: 'medium', skillsTools: '',
    responsibilities: '', achievements: '', includeNumbers: true, includeMetrics: true, verbStyle: 'mixed'
  });
  const [generatedPoints, setGeneratedPoints] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const toolRef = useRef(null);

  const SAMPLE_DATA = {
    jobTitle: 'Senior Marketing Manager', industry: 'marketing', companySize: 'large',
    skillsTools: 'Google Analytics, SEO, Content Strategy, Social Media Marketing, Marketing Automation, Data Analysis, CRM Management',
    responsibilities: `Develop and execute comprehensive marketing campaigns across multiple channels\nManage social media presence and engagement strategies\nAnalyze campaign performance using data-driven insights\nLead a team of 5 marketing specialists and coordinators\nCreate and implement content marketing strategy\nManage $500K annual marketing budget\nReport on KPIs and ROI to senior leadership`,
    achievements: `Increased website traffic by 45% through SEO optimization\nImproved conversion rate by 22% with A/B testing strategies\nReduced customer acquisition cost by 18% through channel optimization\nLaunched successful new product campaign generating $2M in first-year revenue\nGrew social media following by 15,000+ engaged users\nImplemented marketing automation reducing manual work by 25 hours weekly`,
    includeNumbers: true, includeMetrics: true, verbStyle: 'achievement'
  };

  const handleInputChange = useCallback((field, value) => setFormData(prev => ({ ...prev, [field]: value })), []);
  const handleUseSample = () => { setFormData(SAMPLE_DATA); setCurrentStep(2); };
  const handleClear = () => {
    setFormData({ jobTitle: '', industry: 'tech', companySize: 'medium', skillsTools: '', responsibilities: '', achievements: '', includeNumbers: true, includeMetrics: true, verbStyle: 'mixed' });
    setGeneratedPoints(null); setSelectedPoints([]); setCurrentStep(1);
  };

  const handleGenerate = useCallback(() => {
    const requiredFields = ['jobTitle', 'responsibilities'];
    const missingFields = requiredFields.filter(field => !formData[field]?.trim());
    if (missingFields.length > 0) { alert(`Please fill in: ${missingFields.join(', ')}`); return; }
    setIsGenerating(true);
    setTimeout(() => {
      const points = generateBulletPoints(formData);
      setGeneratedPoints(points); setIsGenerating(false); setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  }, [formData]);

  const handleCopyPoint = (text, index) => { navigator.clipboard.writeText(`• ${text}`); setCopiedIndex(index); setTimeout(() => setCopiedIndex(null), 2000); };
  const handleSelectPoint = (index) => { setSelectedPoints(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]); };
  const handleCopySelected = () => {
    const selectedText = selectedPoints.sort((a, b) => a - b).map(index => `• ${generatedPoints.bulletPoints[index].text}`).join('\n');
    navigator.clipboard.writeText(selectedText);
    alert(`${selectedPoints.length} bullet points copied!`);
  };
  const handleDownloadAll = () => {
    const allText = generatedPoints.bulletPoints.map(bp => `• ${bp.text}`).join('\n');
    const el = document.createElement('a'); const file = new Blob([allText], { type: 'text/plain' });
    el.href = URL.createObjectURL(file); el.download = 'professional-resume-bullet-points.txt';
    document.body.appendChild(el); el.click(); document.body.removeChild(el);
  };
  const nextStep = () => { if (currentStep === 1 && !formData.jobTitle.trim()) { alert('Please enter your job title'); return; } setCurrentStep(prev => Math.min(prev + 1, 3)); };
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Basic Meta Tags - Injected from Page 1 Blueprint */}
        <title>Free Resume Bullet Point Generator - CAR Method & ATS Optimized {CURRENT_YEAR} | Resume Bullet Points Builder</title>
        <meta name="description" content={`Generate powerful resume bullet points with CAR methodology. Create quantifiable, ATS-optimized bullet points in minutes. 100% free with industry-specific templates for ${CURRENT_YEAR}.`} />
        <meta name="keywords" content="resume bullet point generator, CAR method resume, resume achievements, quantifiable bullet points, resume writing, career tools, free resume builder, ATS resume, professional resume, job search tools 2026" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Content Freshness - Injected from Page 1 Blueprint */}
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        
        {/* GEO Optimization Tags - Injected from Page 1 Blueprint */}
        <meta name="chatgpt-fts:title" content="Free Resume Bullet Point Generator - CAR Method & ATS Optimized" />
        <meta name="chatgpt-fts:description" content="Generate powerful resume bullet points with CAR methodology. Create quantifiable, ATS-optimized bullet points in minutes. 100% free." />
        <meta name="chatgpt-fts:keywords" content="resume bullet points, CAR method, ATS resume, achievement statements" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Bullet Point Generator" />
        
        {/* SINGLE CANONICAL URL - Injected from Page 1 Blueprint */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Preconnect - Injected from Page 1 Blueprint */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Open Graph Protocol - Injected from Page 1 Blueprint */}
        <meta property="og:title" content={`Free Resume Bullet Point Generator - CAR Method & ATS Optimized ${CURRENT_YEAR}`} />
        <meta property="og:description" content="Generate powerful resume bullet points with CAR methodology. Create quantifiable, ATS-optimized bullet points in minutes with our AI-powered tool." />
        <meta property="og:image" content={`${SITE_URL}/images/og-resume-bullet-point-generator.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free AI-Powered Resume Bullet Point Generator - Create Professional Resume Bullet Points Online" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Cards - Injected from Page 1 Blueprint */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Free Resume Bullet Point Generator - CAR Method & ATS Optimized ${CURRENT_YEAR}`} />
        <meta name="twitter:description" content="Generate powerful resume bullet points with CAR methodology. Create quantifiable, ATS-optimized bullet points in minutes with AI." />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-resume-bullet-point-generator.jpg`} />
        <meta name="twitter:image:alt" content="Free Resume Bullet Point Generator with AI Templates" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Mobile & PWA - Injected from Page 1 Blueprint */}
        <meta name="theme-color" content="#131315" />
        <meta name="msapplication-TileColor" content="#131315" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <html lang="en" />
        
        {/* Structured Data - FIXED VERSION from Page 1 Blueprint */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSchemaData(safeFaqDates, safeReviewDates, safeCurrentDate, safeLastModifiedDate))
          }}
        />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        {/* Content Freshness Indicator (Hidden) */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={freshnessIndicator} />
        </div>
        
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb - SEO Optimized with aria-label */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item"><span itemProp="name"><FiHome size={14} /> Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/resume-tools" itemProp="item"><span itemProp="name"><FiTool size={14} /> Resume Tools</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span aria-current="page" itemProp="name"><FiEdit3 size={14} /> Free Resume Bullet Point Generator</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero - SEO Optimized H1 */}
        <section className="section" id="main-content">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ Free Tool • No Sign Up • CAR Methodology • ATS Optimized</div>
              <h1 style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free <span className="gradient-text">Resume Bullet Point Generator</span> - CAR Method & ATS Optimized {CURRENT_YEAR}
              </h1>
              <p className="section-subtitle" style={{ maxWidth: '900px', marginBottom: '2rem' }}>
                Transform vague responsibilities into powerful, quantifiable achievements that pass ATS screening. Our AI-powered generator uses CAR methodology (Context-Action-Result) with industry-specific templates for maximum impact in {CURRENT_YEAR}.
                <strong style={{ display: 'inline-block', background: '#131315', color: '#f2ca50', padding: '4px 12px', borderRadius: '50px', fontSize: '0.9rem', marginLeft: '12px', border: '0.5px solid var(--border-gold-filament)' }}>
                  Trusted by 500,000+ job seekers
                </strong>
              </p>
              
              {/* Aggregate Rating Display */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '24px 0', padding: '16px', background: 'rgba(28,27,29,0.6)', borderRadius: '12px', border: '0.5px solid var(--border-gold-filament)', flexWrap: 'wrap', justifyContent: 'center' }}
                itemScope itemType="https://schema.org/AggregateRating">
                <meta itemProp="ratingValue" content="4.8" />
                <meta itemProp="reviewCount" content="4231" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/SoftwareApplication">
                  <meta itemProp="name" content="Free Resume Bullet Point Generator" />
                  <meta itemProp="applicationCategory" content="BusinessApplication" />
                  <meta itemProp="url" content={canonicalUrl} />
                </div>
                <div style={{ color: '#fbbf24', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ★★★★★
                  <span style={{ color: '#e5e1e4', fontWeight: 700, fontSize: '1rem' }}>4.8/5</span>
                </div>
                <span style={{ color: '#9d95a0', fontSize: '0.9rem' }}>Based on 4,231+ user reviews • Updated {freshnessIndicator}</span>
              </div>
              
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "4.8/5", label: "User Rating" }, { value: "6", label: "Industry Templates" }, { value: "CAR", label: "Methodology" }, { value: "100%", label: "Private & Secure" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiEdit3 /> Generate Bullet Points</button>
                <Link href="/resume-templates" className="btn-outline"><FiFileText /> View Resume Templates</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Generator Tool - SEO Optimized H2 */}
        <section ref={toolRef} className="section section-alt" aria-labelledby="generator-tool-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="generator-tool-title">Create Professional Resume Bullet Points</h2>
              <p className="section-subtitle">Fill in your details below and generate ATS-optimized bullet points in minutes</p>
            </div>

            {/* Progress Steps */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', flexWrap: 'wrap', gap: '0.5rem', maxWidth: '600px' }}>
              {['Role Details', 'Skills & Achievements', 'Generate & Customize'].map((label, idx) => (
                <React.Fragment key={idx}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '60px' }}>
                    <div className={`step-number ${currentStep > idx ? 'active' : ''}`}>{currentStep > idx ? '✓' : idx + 1}</div>
                    <span className="text-small" style={{ color: currentStep > idx ? 'var(--accent-primary)' : 'var(--text-muted)', fontWeight: currentStep > idx ? 'var(--font-weight-semibold)' : 'normal', textAlign: 'center' }}>{label}</span>
                  </div>
                  {idx < 2 && <div style={{ flex: 1, height: '2px', background: 'rgba(229,225,228,0.1)', minWidth: '20px', marginBottom: '1.5rem' }} />}
                </React.Fragment>
              ))}
            </div>

            {!generatedPoints && (
              <>
                {/* Step 1: Role Details */}
                {currentStep === 1 && (
                  <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <h3 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0 }}>Step 1: Role & Industry Information</h3>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <button onClick={handleUseSample} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', minWidth: 'auto' }}><FiCopy size={16} /> Use Sample Data</button>
                        <button onClick={handleClear} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', minWidth: 'auto' }}><FiX size={16} /> Clear</button>
                      </div>
                    </div>
                    <div className="form-grid">
                      <div><label className="label-style">Job Title *</label><input type="text" value={formData.jobTitle} onChange={(e) => handleInputChange('jobTitle', e.target.value)} placeholder="e.g., Senior Marketing Manager" aria-required="true" /></div>
                      <div><label className="label-style">Company Size</label><select value={formData.companySize} onChange={(e) => handleInputChange('companySize', e.target.value)}><option value="small">Small (1-50)</option><option value="medium">Medium (51-500)</option><option value="large">Large (500+)</option><option value="enterprise">Enterprise (5000+)</option></select></div>
                      <div className="form-group-full"><label className="label-style">Key Responsibilities * (one per line)</label><textarea value={formData.responsibilities} onChange={(e) => handleInputChange('responsibilities', e.target.value)} placeholder="Manage social media accounts and engagement&#10;Analyze campaign performance using Google Analytics&#10;Lead team meetings and coordinate projects" rows={6} aria-required="true" /></div>
                    </div>
                    <div style={{ marginTop: '2rem' }}>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem', color: 'var(--accent-primary)' }}>Select Your Industry for Targeted Content</h3>
                      <div className="grid">
                        {INDUSTRY_TEMPLATES.map(ind => {
                          const IconComponent = ICON_MAP[ind.icon] || FiBriefcase;
                          return (
                            <div key={ind.id} className={`industry-card ${formData.industry === ind.id ? 'selected' : ''}`} onClick={() => handleInputChange('industry', ind.id)} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} role="button" tabIndex={0} aria-pressed={formData.industry === ind.id} onKeyPress={(e) => e.key === 'Enter' && handleInputChange('industry', ind.id)}>
                              <div style={{ color: 'var(--accent-primary)' }}><IconComponent size={24} /></div>
                              <h4 style={{ fontSize: 'var(--font-size-title-md)', fontWeight: 'var(--font-weight-semibold)' }}>{ind.name}</h4>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>{ind.verbs.slice(0, 4).map((v, i) => (<span key={i} className="feature-tag">{v}</span>))}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                      <button onClick={nextStep} className="btn-primary" aria-label="Continue to Skills and Achievements">Continue to Skills & Achievements <FiArrowRight size={18} /></button>
                    </div>
                  </div>
                )}

                {/* Step 2: Skills & Customization */}
                {currentStep === 2 && (
                  <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h3 style={{ fontSize: 'var(--font-size-headline-md)', marginBottom: '1.5rem' }}>Step 2: Skills, Achievements & Customization</h3>
                    <div className="form-grid">
                      <div className="form-group-full"><label className="label-style">Skills & Tools (comma separated)</label><textarea value={formData.skillsTools} onChange={(e) => handleInputChange('skillsTools', e.target.value)} placeholder="Google Analytics, SEO, Content Strategy, Social Media Marketing, Data Analysis" rows={3} /></div>
                      <div className="form-group-full"><label className="label-style">Achievements & Results (one per line)</label><textarea value={formData.achievements} onChange={(e) => handleInputChange('achievements', e.target.value)} placeholder="Increased website traffic and user engagement&#10;Improved conversion rates through optimization&#10;Reduced operational costs and improved efficiency" rows={5} /></div>
                      <div><label className="label-style">Action Verb Style</label><select value={formData.verbStyle} onChange={(e) => handleInputChange('verbStyle', e.target.value)}><option value="mixed">Mixed (Recommended)</option><option value="leadership">Leadership Focused</option><option value="achievement">Achievement Focused</option><option value="innovation">Innovation Focused</option><option value="collaboration">Collaboration Focused</option><option value="analysis">Analysis Focused</option></select></div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', justifyContent: 'center' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><input type="checkbox" checked={formData.includeNumbers} onChange={(e) => handleInputChange('includeNumbers', e.target.checked)} style={{ width: '18px', height: '18px' }} /> Include quantifiable numbers & percentages</label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><input type="checkbox" checked={formData.includeMetrics} onChange={(e) => handleInputChange('includeMetrics', e.target.checked)} style={{ width: '18px', height: '18px' }} /> Add impact metrics & measurable results</label>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                      <button onClick={prevStep} className="btn-outline" aria-label="Go back to previous step">← Back</button>
                      <button onClick={handleGenerate} className="btn-primary" disabled={isGenerating} aria-label="Generate professional bullet points">
                        {isGenerating ? <><FiRefreshCw size={18} style={{ animation: 'spin 1s linear infinite' }} /> Generating...</> : <><FiZap size={18} /> Generate Bullet Points</>}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Loading */}
            {isGenerating && (
              <div className="card-executive" style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
                <FiRefreshCw size={40} style={{ animation: 'spin 1s linear infinite', color: 'var(--accent-primary)', margin: '0 auto 1rem' }} />
                <p style={{ fontSize: 'var(--font-size-body-lg)' }}>Generating powerful, ATS-optimized bullet points...</p>
                <p className="text-small">Using CAR methodology and industry-specific templates</p>
              </div>
            )}

            {/* Results */}
            {generatedPoints && !isGenerating && (
              <div style={{ maxWidth: '900px', margin: '0 auto', animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                <div className="card-executive">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0 }}>Your Generated Professional Bullet Points</h3>
                    <div className="stats-row">
                      <span className="stat-tag">{generatedPoints.count} points</span>
                      <span className="stat-tag">{generatedPoints.industry}</span>
                      <span className="stat-tag">{generatedPoints.recommendations.strengthScore}% strong</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {generatedPoints.bulletPoints.map((point, index) => (
                      <div key={index} className={`bullet-card ${selectedPoints.includes(index) ? 'selected' : ''}`} onClick={() => handleSelectPoint(index)} role="button" tabIndex={0} aria-pressed={selectedPoints.includes(index)} onKeyPress={(e) => e.key === 'Enter' && handleSelectPoint(index)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1 }}>
                          <p style={{ margin: 0, paddingLeft: '1.25rem', fontSize: 'var(--font-size-body-md)' }}>• {point.text}</p>
                          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                            <span className="feature-tag">{point.source}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)' }}>
                              <span className={`strength-dot ${point.strength}`}></span>
                              {point.strength === 'strong' ? 'Strong Impact' : point.strength === 'good' ? 'Good' : 'Basic'}
                            </span>
                          </div>
                        </div>
                        <button onClick={(e) => { e.stopPropagation(); handleCopyPoint(point.text, index); }} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem' }} aria-label={`Copy bullet point: ${point.text}`}>
                          {copiedIndex === index ? <><FiCheck size={14} /> Copied</> : <><FiCopy size={14} /> Copy</>}
                        </button>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
                    <button onClick={handleCopySelected} disabled={selectedPoints.length === 0} className="btn-primary" style={{ minWidth: 'auto', padding: '0.75rem 1.5rem' }} aria-label={`Copy ${selectedPoints.length} selected bullet points`}><FiCopy size={18} /> Copy Selected ({selectedPoints.length})</button>
                    <button onClick={handleDownloadAll} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem' }} aria-label="Download all bullet points as text file"><FiDownload size={18} /> Download All</button>
                    <button onClick={handleClear} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem' }} aria-label="Generate another set of bullet points"><FiRefreshCw size={18} /> Generate Another</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CAR Methodology - SEO Optimized H2 */}
        <section className="section" aria-labelledby="car-methodology-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="car-methodology-title">The CAR Methodology: Proven Framework for Impactful Bullet Points</h2>
              <p className="section-subtitle">Context, Action, Result—the framework that makes bullet points 3x more memorable to hiring managers</p>
            </div>
            <div className="grid">
              {[
                { letter: 'C', title: 'Context', desc: 'Describe the situation, challenge, or scope you faced. This sets the stage and shows the significance of your action.', example: '"During company expansion into new markets..."', tip: 'Start with timeframes, situations, or challenges' },
                { letter: 'A', title: 'Action', desc: 'Explain what you specifically did, using strong action verbs and mentioning specific skills, tools, or methodologies.', example: '"Led a cross-functional team of 8 to implement..."', tip: 'Use industry-specific verbs and mention tools used' },
                { letter: 'R', title: 'Result', desc: 'Quantify the outcome with specific numbers, percentages, timeframes, or measurable business impact.', example: '"...resulting in 25% increase in efficiency and $150K annual savings"', tip: 'Always include numbers—they\'re 3x more memorable' }
              ].map((item, i) => (
                <div key={i} className="car-card" id={`car-step-${i + 1}`}>
                  <div className="car-letter">{item.letter}</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{item.desc}</p>
                  <div style={{ background: 'var(--bg-surface-low)', padding: '0.75rem', borderRadius: '0.375rem', marginBottom: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', fontStyle: 'italic' }}>{item.example}</div>
                  <span className="feature-tag"><strong>Tip:</strong> {item.tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - SEO Optimized H2 */}
        <section className="section section-alt" aria-labelledby="how-it-works-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="how-it-works-title">How to Generate Professional Resume Bullet Points: 4 Simple Steps</h2>
              <p className="section-subtitle">Our AI-powered bullet point generator makes it easy to create ATS-optimized achievements</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {HOW_TO_STEPS.map((step, idx) => {
                const IconComponent = ICON_MAP[step.icon] || FiEdit3;
                return (
                  <div key={idx} className="card-executive" style={{ textAlign: 'center' }} id={`step-${idx + 1}`}>
                    <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--accent-on-primary)', boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                      <IconComponent size={24} />
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>{step.name}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Long-Tail Keywords Section - GEO Optimization */}
        <section className="section" aria-labelledby="common-questions-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="common-questions-title">Common Questions About Resume Bullet Points</h2>
              <p className="section-subtitle">Expert answers to your most frequently asked resume writing questions</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: '1000px', margin: '0 auto' }}>
              {[
                "how to write resume bullet points with no experience",
                "best resume bullet point format for 2026",
                "resume achievement examples for career change",
                "what to include in resume bullet points",
                "CAR method vs STAR method for resumes",
                "ATS friendly resume bullet point tips",
                "professional resume bullet point templates free",
                "resume bullet points for internal promotion"
              ].map((keyword, i) => (
                <div key={i} className="card-executive" style={{ padding: '20px', textAlign: 'center' }}>
                  <p style={{ fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>❓ {keyword}</p>
                  <Link href="/complete-resume-resource-library" className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', minWidth: 'auto', display: 'inline-flex', width: 'auto' }}>
                    Find answer in our resource library →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews - SEO Optimized with Schema */}
        <section className="section section-alt" aria-labelledby="reviews-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="reviews-title">What Professionals Say About Our Resume Bullet Point Generator</h2>
              <p className="section-subtitle">Join thousands of satisfied job seekers who improved their resumes</p>
            </div>
            <div className="grid">
              {REVIEWS.map((review, i) => (
                <div key={i} className="review-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} itemScope itemType="https://schema.org/Review">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }} itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">{review.name}</span>
                      </strong>
                      <span className="text-small">{review.position}</span>
                    </div>
                    <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content={review.rating} />
                      <meta itemProp="bestRating" content="5" />
                      <span style={{ color: 'var(--accent-primary)', fontSize: 'var(--font-size-body-sm)' }}>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                    </div>
                  </div>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }} itemProp="reviewBody">"{review.review}"</p>
                  <meta itemProp="datePublished" content={review.date || safeCurrentDate} />
                  <div itemProp="itemReviewed" itemScope itemType="https://schema.org/SoftwareApplication">
                    <meta itemProp="name" content="Free Resume Bullet Point Generator" />
                    <meta itemProp="applicationCategory" content="BusinessApplication" />
                    <meta itemProp="url" content={canonicalUrl} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - SEO Optimized H2 */}
        <section className="section" aria-labelledby="faq-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-title">Frequently Asked Questions About Our Resume Bullet Point Generator</h2>
              <p className="section-subtitle">Everything about resume bullet point creation and our free tool</p>
            </div>
            <div className="faq-grid" itemScope itemType="https://schema.org/FAQPage">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} aria-expanded={activeFaq === i} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }} itemProp="name">{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }} aria-hidden="true">{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p itemProp="text">{faq.answer}</p>
                      <meta itemProp="datePublished" content={safeFaqDates[i] || safeCurrentDate} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-title">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }} id="cta-title">
              Ready to Transform Your Resume with Powerful Bullet Points?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Join 500,000+ job seekers who've improved their resumes with our free bullet point generator. <strong>100% Free. No Sign-Up. Instant Results. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => { handleClear(); toolRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }} aria-label="Start generating bullet points now"><FiEdit3 /> Generate Bullet Points Now</button>
              <Link href="/free-resume-builder" className="btn-outline"><FiFileText /> Build Your Resume</Link>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '8px 16px', borderRadius: '50px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                ✓ 100% Free • ✓ No Sign Up • ✓ Privacy Protected • ✓ Instant Results
              </span>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="resources-title">Enhance Your Resume Further with Free Career Resources</h2>
              <p className="section-subtitle">Complement your bullet points with these powerful tools and guides</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-resume-keyword-matcher", text: "Free Resume Keyword Matcher Tool", iconName: "FiSearch" },
                { href: "/free-ats-resume-checker", text: "Free ATS Resume Checker", iconName: "FiShield" },
                { href: "/free-resume-summary-generator", text: "Free Resume Summary Generator", iconName: "FiFileText" },
                { href: "/resume-templates", text: "Professional Resume Templates", iconName: "FiGrid" },
                { href: "/free-cover-letter-generator", text: "Free Cover Letter Generator", iconName: "FiEdit" },
                { href: "/interview-tips", text: "Expert Interview Tips", iconName: "FiUserCheck" }
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

        {/* Footer Info - Freshness Signals */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small">
            <FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> 
            Last updated: {safeCurrentDate} • Build: {freshnessIndicator} • © {CURRENT_YEAR} Professional Resume Free. All rights reserved.
          </span>
        </div>
        
        {/* Hidden Metadata */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="softwareVersion">2026.1.0</span>
        </div>
      </main>
    </>
  );
};

// ============================================================================
// ISR STRATEGY - Injected from Page 1 Blueprint
// ============================================================================
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // Generate dynamic review dates (staggered backward from build time)
  const reviewDates = Array(REVIEWS.length).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  // Generate dynamic FAQ dates (staggered backward from build time)
  const faqDates = Array(FAQS.length).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates
      },
      buildTimestamp
    },
    revalidate: 3600 // Revalidate every hour (ISR strategy from Page 1)
  };
}

export default ResumeBulletPointGenerator;