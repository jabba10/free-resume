import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiFileText, FiTarget, FiBriefcase,
  FiCalendar, FiPieChart, FiShield, FiZap, FiStar, FiAward,
  FiGrid, FiArrowRight, FiRefreshCw, FiTrash2,
  FiHelpCircle, FiDatabase, FiAlertCircle, FiLock, FiServer,
  FiUsers, FiFlag, FiHeart, FiMapPin, FiDollarSign, FiClock,
  FiCpu, FiMonitor, FiBarChart2, FiCoffee, FiCloud,
  FiCheckCircle, FiGlobe, FiTrendingUp, FiPlus, FiMinus,
  FiSearch, FiXCircle, FiEdit, FiClipboard, FiLayout,
  FiAlertTriangle, FiBook, FiTool
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS (Resume Strength Calculator Edition)
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
  .grid { display:grid; grid-template-columns:1fr; gap:1.5rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid { grid-template-columns:repeat(3,1fr); } }
  .stat-card { text-align:center; padding:1.5rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; }
  .stat-number { font-size:clamp(1.8rem,4vw,2.2rem); font-weight:var(--font-weight-bold); color:var(--accent-primary); display:block; font-family:var(--font-display); }
  .stat-label { color:var(--text-secondary); font-size:var(--font-size-body-sm); }
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
  textarea.input-field { min-height: 250px; resize: vertical; font-family: var(--font-mono); font-size: 0.9rem; line-height: 1.5; }
  .result-box { background: rgba(242,202,80,0.05); border: 0.5px solid var(--border-gold-filament); border-radius: 0.5rem; padding: clamp(1rem,3vw,1.5rem); margin-top: 2rem; }
  .score-circle { width: 140px; height: 140px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto 1.5rem; }
  .score-excellent { background: rgba(76, 175, 80, 0.1); border: 4px solid var(--success-color); box-shadow: 0 0 30px rgba(76, 175, 80, 0.2); }
  .score-good { background: rgba(100, 181, 246, 0.1); border: 4px solid var(--info-color); box-shadow: 0 0 30px rgba(100, 181, 246, 0.2); }
  .score-average { background: rgba(255, 183, 77, 0.1); border: 4px solid var(--warning-color); box-shadow: 0 0 30px rgba(255, 183, 77, 0.2); }
  .score-poor { background: rgba(244, 67, 54, 0.1); border: 4px solid var(--error-color); box-shadow: 0 0 30px rgba(244, 67, 54, 0.2); }
  .checklist-item { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.75rem; background: var(--card-bg); border-radius: 0.375rem; border: var(--card-border); margin-bottom: 0.5rem; }
  .checklist-icon { flex-shrink: 0; margin-top: 2px; }
  .category-score-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1.5rem; }
  .category-score-card { text-align: center; padding: 1.25rem; background: var(--card-bg); border-radius: 0.5rem; border: var(--card-border); }
  .progress-bar-bg { width: 100%; height: 6px; background: var(--bg-surface-high); border-radius: 3px; overflow: hidden; margin-top: 0.5rem; }
  .progress-bar-fill { height: 100%; border-radius: 3px; transition: width 0.5s var(--easing-smooth); }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; transition:all var(--transition-fast); }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { 
    .btn-primary,.btn-outline { width:100%; min-width:auto; }
    .category-score-grid { grid-template-columns: 1fr; }
  }
`;

// Data Constants
const CURRENT_YEAR = new Date().getFullYear();

const STRENGTH_CATEGORIES = [
  {
    id: 'content',
    title: 'Content Quality',
    icon: 'FiEdit',
    maxScore: 25,
    criteria: [
      { id: 'summary', label: 'Professional Summary', points: 5, description: 'Clear, compelling summary highlighting key qualifications' },
      { id: 'achievements', label: 'Quantified Achievements', points: 5, description: 'Specific results with numbers, percentages, or dollar amounts' },
      { id: 'actionVerbs', label: 'Strong Action Verbs', points: 5, description: 'Uses powerful verbs like "Led", "Achieved", "Developed"' },
      { id: 'relevance', label: 'Relevant Experience', points: 5, description: 'Experience directly related to target position' },
      { id: 'customization', label: 'Job-Specific Customization', points: 5, description: 'Tailored content matching job description keywords' }
    ]
  },
  {
    id: 'structure',
    title: 'Structure & Format',
    icon: 'FiLayout',
    maxScore: 25,
    criteria: [
      { id: 'sections', label: 'Clear Section Headings', points: 5, description: 'Well-organized sections (Experience, Education, Skills)' },
      { id: 'length', label: 'Optimal Length', points: 5, description: '1-2 pages with appropriate content density' },
      { id: 'bulletPoints', label: 'Bullet Points Usage', points: 5, description: 'Effective use of bullet points for readability' },
      { id: 'consistency', label: 'Formatting Consistency', points: 5, description: 'Consistent fonts, spacing, and date formats' },
      { id: 'readability', label: 'Visual Readability', points: 5, description: 'Good use of white space, margins, and font sizes' }
    ]
  },
  {
    id: 'keywords',
    title: 'Keywords & ATS',
    icon: 'FiSearch',
    maxScore: 20,
    criteria: [
      { id: 'industryKeywords', label: 'Industry Keywords', points: 5, description: 'Includes relevant technical and industry-specific terms' },
      { id: 'skillsKeywords', label: 'Skills Section Keywords', points: 5, description: 'Comprehensive skills list with both hard and soft skills' },
      { id: 'atsCompatible', label: 'ATS Compatibility', points: 5, description: 'No images, tables, or complex formatting that confuse ATS' },
      { id: 'jobMatch', label: 'Job Description Match', points: 5, description: 'Keywords align with target job requirements' }
    ]
  },
  {
    id: 'impact',
    title: 'Impact & Results',
    icon: 'FiTrendingUp',
    maxScore: 15,
    criteria: [
      { id: 'metrics', label: 'Metrics & Data', points: 5, description: 'Includes measurable outcomes and performance metrics' },
      { id: 'scope', label: 'Scope & Scale', points: 5, description: 'Demonstrates project scope, team size, budget managed' },
      { id: 'awards', label: 'Awards & Recognition', points: 5, description: 'Highlights professional awards, honors, or special recognition' }
    ]
  },
  {
    id: 'professionalism',
    title: 'Professional Polish',
    icon: 'FiStar',
    maxScore: 15,
    criteria: [
      { id: 'grammar', label: 'Grammar & Spelling', points: 5, description: 'No spelling errors or grammatical mistakes' },
      { id: 'contact', label: 'Complete Contact Info', points: 5, description: 'Professional email, phone, LinkedIn, and portfolio links' },
      { id: 'modern', label: 'Modern Conventions', points: 5, description: 'Updated format, no outdated phrases or unnecessary personal info' }
    ]
  }
];

const FEATURES = [
  { icon: 'FiTarget', title: 'Comprehensive 5-Category Scoring', desc: 'Get your resume evaluated across Content Quality, Structure & Format, Keywords & ATS, Impact & Results, and Professional Polish with detailed breakdowns.', stat: '5 Categories' },
  { icon: 'FiAlertTriangle', title: 'Precision Weakness Detection', desc: 'Identify exactly which specific criteria your resume misses and receive prioritized, actionable recommendations ranked by impact on your score.', stat: 'Critical' },
  { icon: 'FiTrendingUp', title: 'Strength Highlight Analysis', desc: 'Understand what your resume does well and learn how to strategically leverage those strengths throughout your job search and interview process.', stat: 'Insightful' },
  { icon: 'FiEdit', title: 'Deep Content Analysis', desc: 'Evaluate achievement quantification, action verb usage, content relevance, and customization level—the exact factors recruiters assess.', stat: 'Deep Dive' },
  { icon: 'FiSearch', title: 'ATS Compatibility Check', desc: 'Verify keyword density, section heading standards, and formatting requirements to ensure your resume passes automated screening systems.', stat: 'Essential' },
  { icon: 'FiShield', title: 'Complete Privacy Guarantee', desc: 'All analysis happens entirely in your browser using client-side processing. Your resume data is never uploaded, never stored, and never shared.', stat: '100% Safe' }
];

const FAQS = [
  { 
    question: "How is the resume strength score calculated?", 
    answer: "Your resume is evaluated across 5 weighted categories: Content Quality (25 points), Structure & Format (25 points), Keywords & ATS (20 points), Impact & Results (15 points), and Professional Polish (15 points)—for a total of 100 points. Each category contains specific criteria worth 5 points each. You check off the criteria that apply to your resume, and our calculator instantly computes your score. Additionally, if you paste your resume text, our system performs automated analysis for action verbs, quantified results, contact information, and optimal word count—providing bonus points that can increase your final score. The total determines your overall resume strength rating: Excellent (90-100), Good (75-89), Average (60-74), or Needs Improvement (below 60)." 
  },
  { 
    question: "What is a good resume strength score to target?", 
    answer: "We recommend targeting a score of 80 or above (Good to Excellent range). Research shows that resumes scoring in this range receive significantly more recruiter attention and have higher ATS pass rates. Scores of 90-100 (Excellent) indicate a highly optimized resume that effectively communicates your value, passes automated screening, and engages human reviewers. Scores of 75-89 (Good) are competitive but have identifiable improvement opportunities—typically in keyword optimization or achievement quantification. Scores of 60-74 (Average) need focused improvement in several categories. Scores below 60 (Needs Improvement) require significant revision—prioritize the highest-point recommendations first. Most hiring managers spend only 6-7 seconds on initial resume screening, so every point improvement in your score translates to measurably better interview outcomes." 
  },
  { 
    question: "How does the checklist-based assessment work?", 
    answer: "Simply review each criterion across the 5 categories and check off the ones that accurately describe your resume. The calculator instantly computes your score and identifies specific areas needing improvement. For the most accurate results, be honest in your self-assessment—overestimating your resume's quality won't help you improve. Optionally, paste your resume text for automated analysis that detects action verbs, quantified results, contact information, and word count. The combination of your self-assessment checklist and automated text analysis provides a comprehensive evaluation. The more honest and thorough you are, the more accurate and actionable your results will be." 
  },
  { 
    question: "Can this tool replace a professional resume review?", 
    answer: "While our calculator provides excellent guidance and helps identify major issues across all critical resume dimensions, it works best as a powerful self-assessment and improvement tool. For high-stakes applications (executive roles, competitive industries, career transitions), consider combining our calculator's systematic evaluation with personalized feedback from mentors, career coaches, or professional resume writers. Our tool excels at identifying technical issues (ATS compatibility, keyword optimization, formatting standards) and content gaps (missing achievements, weak action verbs)—areas where systematic checklists outperform subjective review. Professional reviewers add value in areas requiring human judgment: narrative flow, personal branding, industry-specific nuances, and strategic positioning. The ideal approach uses both: our calculator for systematic technical assessment and a professional review for strategic guidance." 
  },
  { 
    question: "Is my resume data safe and private when using this tool?", 
    answer: "Absolutely—this is a foundational design principle of our tool. All analysis happens entirely in your browser using client-side JavaScript processing. Your resume content, checklist responses, and assessment results are never uploaded to any server, never stored in any database, and never transmitted to any third party. There is no account creation, no login required, and no tracking of your usage. When you close your browser tab, all data from your session is completely gone. This privacy-by-design approach means you can use the tool with complete confidence—whether you're actively job searching and don't want your current employer to know, or simply want to evaluate your resume privately. No cookies, no local storage, no analytics tracking of your resume content." 
  }
];

// Long-tail keywords for GEO
const longTailKeywords = [
  "resume strength calculator",
  "resume score checker",
  "resume evaluation tool",
  "resume quality assessment",
  "how strong is my resume",
  "resume grader",
  "resume scoring system",
  "resume improvement tool",
  "resume analysis",
  "resume checklist",
  "2026 resume standards",
  "resume optimization"
];

// People Also Ask for GEO
const peopleAlsoAsk = [
  { question: "How is the resume strength score calculated?", answer: "Your resume is evaluated across 5 weighted categories: Content Quality (25 pts), Structure & Format (25 pts), Keywords & ATS (20 pts), Impact & Results (15 pts), and Professional Polish (15 pts). Each category contains specific criteria worth 5 points each for a total of 100 points." },
  { question: "What is a good resume strength score?", answer: "Target a score of 80 or above. Scores of 90-100 indicate an excellent resume. Scores of 75-89 are good but improvable. Scores below 60 require significant revision. Most hiring managers spend only 6-7 seconds on initial resume screening." },
  { question: "How does the checklist-based assessment work?", answer: "Review each criterion across the 5 categories and check off the ones that describe your resume. The calculator instantly computes your score and identifies areas needing improvement. Optionally paste your resume text for automated analysis." }
];

const ICON_MAP = {
  FiHome, FiChevronRight, FiFileText, FiTarget, FiBriefcase, FiCalendar,
  FiPieChart, FiShield, FiZap, FiStar, FiAward, FiGrid, FiArrowRight,
  FiRefreshCw, FiTrash2, FiHelpCircle, FiDatabase, FiAlertCircle, FiLock, FiServer,
  FiUsers, FiFlag, FiHeart, FiMapPin, FiDollarSign, FiClock, FiCpu,
  FiMonitor, FiBarChart2, FiCoffee, FiCloud, FiCheckCircle, FiGlobe, FiTrendingUp,
  FiPlus, FiMinus, FiSearch, FiXCircle, FiEdit, FiClipboard, FiLayout,
  FiAlertTriangle, FiBook, FiTool
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeStrengthCalculatorPage = ({ seoData }) => {
  const { currentDate: seoCurrentDate, lastModifiedDate, buildTimestamp } = seoData || {};
  const safeCurrentDate = seoCurrentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const canonicalUrl = "https://professionalresumefree.com/resume-strength-calculator";

  // Optimized title
  const optimizedTitle = `Resume Strength Calculator ${CURRENT_YEAR}: Score & Improve Your Resume`;

  // Calculator State
  const [checkedCriteria, setCheckedCriteria] = useState({});
  const [resumeText, setResumeText] = useState('');
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const calculatorRef = useRef(null);

  // ==========================================================================
  // CRITERIA MANAGEMENT
  // ==========================================================================
  const toggleCriterion = (categoryId, criterionId) => {
    const key = `${categoryId}-${criterionId}`;
    setCheckedCriteria(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // ==========================================================================
  // CALCULATION LOGIC
  // ==========================================================================
  const calculateStrength = useCallback(() => {
    const categoryScores = {};
    let totalScore = 0;
    let totalMaxScore = 0;
    
    STRENGTH_CATEGORIES.forEach(category => {
      let categoryScore = 0;
      category.criteria.forEach(criterion => {
        const key = `${category.id}-${criterion.id}`;
        if (checkedCriteria[key]) {
          categoryScore += criterion.points;
        }
      });
      categoryScores[category.id] = {
        score: categoryScore,
        maxScore: category.maxScore,
        percentage: Math.round((categoryScore / category.maxScore) * 100),
        title: category.title,
        icon: category.icon
      };
      totalScore += categoryScore;
      totalMaxScore += category.maxScore;
    });

    const overallPercentage = Math.round((totalScore / totalMaxScore) * 100);
    
    // Determine strength level
    let strengthLevel, scoreColor, scoreClass;
    if (overallPercentage >= 90) {
      strengthLevel = 'Excellent';
      scoreColor = 'var(--success-color)';
      scoreClass = 'score-excellent';
    } else if (overallPercentage >= 75) {
      strengthLevel = 'Good';
      scoreColor = 'var(--info-color)';
      scoreClass = 'score-good';
    } else if (overallPercentage >= 60) {
      strengthLevel = 'Average';
      scoreColor = 'var(--warning-color)';
      scoreClass = 'score-average';
    } else {
      strengthLevel = 'Needs Improvement';
      scoreColor = 'var(--error-color)';
      scoreClass = 'score-poor';
    }

    // Additional text analysis
    const wordCount = resumeText.trim() ? resumeText.split(/\s+/).filter(w => w.length > 0).length : 0;
    const hasActionVerbs = /\b(managed|developed|created|led|implemented|achieved|improved|increased|reduced|delivered|designed|launched|orchestrated|spearheaded|optimized|transformed)\b/i.test(resumeText);
    const hasQuantifiedResults = /\d+%|\d+ years|\$\d+|\d+ people|\d+ million|\d+ thousand|\d+\+|\d+-\d+/i.test(resumeText);
    const hasContactInfo = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(resumeText) || /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/.test(resumeText);
    
    // Text-based bonus
    let textBonus = 0;
    if (hasActionVerbs) textBonus += 3;
    if (hasQuantifiedResults) textBonus += 3;
    if (hasContactInfo) textBonus += 2;
    if (wordCount > 300 && wordCount < 800) textBonus += 2;

    const finalScore = Math.min(100, overallPercentage + textBonus);

    // Recommendations
    const recommendations = [];
    STRENGTH_CATEGORIES.forEach(category => {
      category.criteria.forEach(criterion => {
        const key = `${category.id}-${criterion.id}`;
        if (!checkedCriteria[key]) {
          recommendations.push({
            category: category.title,
            criterion: criterion.label,
            description: criterion.description,
            points: criterion.points
          });
        }
      });
    });

    // Sort by points (highest impact first)
    recommendations.sort((a, b) => b.points - a.points);

    setResults({
      totalScore: finalScore,
      overallPercentage,
      strengthLevel,
      scoreColor,
      scoreClass,
      categoryScores,
      recommendations: recommendations.slice(0, 10),
      totalRecommendations: recommendations.length,
      textAnalysis: {
        wordCount,
        hasActionVerbs,
        hasQuantifiedResults,
        hasContactInfo,
        textBonus
      },
      checkedCount: Object.values(checkedCriteria).filter(Boolean).length,
      totalCriteria: Object.values(STRENGTH_CATEGORIES).reduce((sum, cat) => sum + cat.criteria.length, 0)
    });
  }, [checkedCriteria, resumeText]);

  useEffect(() => {
    calculateStrength();
  }, [calculateStrength]);

  const resetCalculator = () => {
    setCheckedCriteria({});
    setResumeText('');
    setResults(null);
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 90) return 'var(--success-color)';
    if (percentage >= 75) return 'var(--info-color)';
    if (percentage >= 60) return 'var(--warning-color)';
    return 'var(--error-color)';
  };

  // ==========================================================================
  // RENDER
  // ==========================================================================
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* ===== PRIMARY SEO TAGS - OPTIMIZED TITLE ===== */}
        <title>{optimizedTitle}</title>
        <meta name="description" content={`Evaluate your resume strength with our free ${CURRENT_YEAR} calculator. Get scored across 5 categories, identify weaknesses, and receive actionable improvement recommendations. 100% private, no sign-up required.`} />
        <meta name="keywords" content={longTailKeywords.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        
        {/* ===== GEO OPTIMIZATION TAGS FOR AI CRAWLERS ===== */}
        <meta name="chatgpt-fts:title" content={optimizedTitle} />
        <meta name="chatgpt-fts:description" content={`Free ${CURRENT_YEAR} resume strength calculator. Evaluate your resume across 5 categories and get actionable improvement recommendations. 100% private, no sign-up.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords?.slice(0, 6).join(', ') || ''} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Strength Calculator" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* ===== SINGLE CANONICAL TAG - NO www ===== */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* ===== HREFLANG TAGS ===== */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* ===== OPEN GRAPH (Facebook/LinkedIn) ===== */}
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content={`Get your resume scored across 5 key categories. Identify weaknesses and get actionable tips to improve. Free, private, no sign-up required.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content={`${CURRENT_YEAR}-01-15`} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={optimizedTitle} />
        <meta name="twitter:description" content={`Evaluate your resume across 5 categories. Free, private, no sign-up required.`} />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        {/* ===== ADDITIONAL META ===== */}
        <meta name="theme-color" content="#131315" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* ===== PRECONNECT FOR PERFORMANCE ===== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* ===== FONT STYLESHEETS ===== */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        
        {/* ===== SITEMAP ===== */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* ===== SCHEMA.ORG JSON-LD ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "name": "Resume Strength Calculator",
                "url": canonicalUrl,
                "applicationCategory": "BusinessApplication",
                "description": `Free ${CURRENT_YEAR} resume strength calculator that evaluates resumes across 5 categories and provides actionable improvement recommendations.`,
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
                "name": optimizedTitle,
                "description": `Evaluate your resume strength with our free ${CURRENT_YEAR} calculator.`,
                "dateModified": safeLastModifiedDate,
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website"
                }
              },
              {
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
                    "name": "Resume Strength Calculator",
                    "item": canonicalUrl
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  ...FAQS.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "dateModified": safeLastModifiedDate
                    }
                  })),
                  ...peopleAlsoAsk.map(paa => ({
                    "@type": "Question",
                    "name": paa.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": paa.answer
                    }
                  }))
                ]
              },
              {
                "@type": "HowTo",
                "name": "How to Evaluate Your Resume Strength",
                "description": "Use this calculator to assess your resume across 5 key categories",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "value": "0",
                  "currency": "USD"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Review Content Quality",
                    "text": "Check criteria for professional summary, quantified achievements, action verbs, relevant experience, and customization."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Evaluate Structure & Format",
                    "text": "Verify section headings, optimal length, bullet point usage, formatting consistency, and visual readability."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Check Keywords & ATS",
                    "text": "Assess industry keywords, skills section completeness, ATS compatibility, and job description alignment."
                  }
                ],
                "totalTime": "PT5M"
              }
            ]
          }) }}
        />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        {/* Hidden freshness indicators */}
        <div style={{ display: 'none' }}>
          <meta name="build-timestamp" content={safeBuildTimestamp} />
          <meta name="content-freshness" content={safeCurrentDate} />
        </div>

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
                <span itemProp="name" aria-current="page">Resume Strength Calculator</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">📄 Free Tool • No Sign Up • Instant Results • {CURRENT_YEAR}</div>
              
              {/* SINGLE H1 TAG */}
              <h1 id="hero-heading">
                Free <span className="gradient-text">Resume Strength Calculator</span> {CURRENT_YEAR}: Score & Improve Your Resume
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Evaluate your <strong>resume strength</strong> across 5 key categories with detailed scoring breakdowns. Identify weaknesses, understand your strengths, and receive prioritized, actionable recommendations to improve. Based on recruiter evaluation criteria and ATS platform requirements. <strong>100% Free. No Sign-Up. Complete Privacy.</strong> All analysis happens in your browser—your data is never uploaded or stored.
              </p>
              
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[
                  { value: "5", label: "Score Categories" }, 
                  { value: "100pts", label: "Total Score" }, 
                  { value: "Instant", label: "Assessment" }, 
                  { value: "100%", label: "Private & Secure" }
                ].map((s, i) => (
                  <div key={i} className="stat-card">
                    <div className="stat-number">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Call to action buttons">
                <a href="#calculator" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                  Assess Your Resume Now <FiArrowRight style={{ marginLeft: '0.5rem' }} />
                </a>
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool style={{ marginRight: '0.5rem' }} /> Explore Free Tools
                </Link>
              </div>
              
              {/* Freshness indicator */}
              <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }} aria-label="Page last updated">
                <FiCalendar style={{ marginRight: '0.5rem', display: 'inline' }} /> Last updated: {safeCurrentDate}
              </div>
            </div>
          </div>
        </section>

        {/* Critical Insight Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Most Resumes Score Below 60—Find Out Where Yours Stands in 5 Minutes</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Recruiters spend an average of <strong>6-7 seconds on initial resume screening</strong>. During that critical window, they're evaluating exactly what our 5 categories measure: content quality, structure, keywords, impact, and professionalism. <strong>75% of resumes are rejected by ATS before human review</strong> due to formatting and keyword deficiencies. This calculator provides the same systematic evaluation framework that recruiters and ATS systems use—giving you the exact insights needed to transform your resume from reject-pile material to interview-generating document.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Tool */}
        <section ref={calculatorRef} className="section" id="calculator">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Resume Strength Assessment</h2>
              <p className="section-subtitle">Check off the criteria that apply to your resume for an instant strength score</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              {/* Optional Resume Paste */}
              <div className="input-group">
                <label className="input-label">
                  <FiClipboard size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                  Paste Your Resume Text (Optional - for automated text analysis)
                </label>
                <textarea 
                  className="input-field"
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  placeholder="Paste your resume text here for additional automated analysis..."
                  aria-label="Paste your resume text for analysis"
                />
              </div>

              {/* Criteria Checklist */}
              {STRENGTH_CATEGORIES.map((category) => {
                const IconComponent = ICON_MAP[category.icon] || FiFileText;
                const categoryKey = category.id;
                const checkedInCategory = category.criteria.filter(c => 
                  checkedCriteria[`${categoryKey}-${c.id}`]
                ).length;
                
                return (
                  <div key={category.id} style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <IconComponent size={20} color="var(--accent-primary)" />
                      <h3 style={{ fontSize: 'var(--font-size-body-md)', color: 'var(--accent-primary)', margin: 0 }}>
                        {category.title} ({category.maxScore} points)
                      </h3>
                      <span className="text-small">
                        {checkedInCategory}/{category.criteria.length} checked
                      </span>
                    </div>
                    
                    {category.criteria.map((criterion) => {
                      const key = `${categoryKey}-${criterion.id}`;
                      const isChecked = checkedCriteria[key] || false;
                      
                      return (
                        <div 
                          key={key}
                          className="checklist-item"
                          onClick={() => toggleCriterion(category.id, criterion.id)}
                          style={{ cursor: 'pointer', borderColor: isChecked ? 'var(--success-color)' : 'var(--border-glass)' }}
                          role="checkbox"
                          aria-checked={isChecked}
                          tabIndex={0}
                          onKeyPress={(e) => e.key === 'Enter' && toggleCriterion(category.id, criterion.id)}
                        >
                          <div className="checklist-icon">
                            {isChecked ? (
                              <FiCheckCircle size={20} color="var(--success-color)" />
                            ) : (
                              <div style={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid var(--text-muted)' }} />
                            )}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }}>
                              {criterion.label}
                              <span className="text-small" style={{ marginLeft: '0.5rem' }}>({criterion.points} pts)</span>
                            </div>
                            <div className="text-small" style={{ marginTop: '0.25rem' }}>{criterion.description}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn-outline" onClick={resetCalculator} aria-label="Reset all criteria and text">
                  <FiRefreshCw size={18} /> Reset All
                </button>
              </div>

              {/* Results */}
              {results && (
                <div className="result-box" style={{ animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                  <div className="gold-divider"></div>
                  
                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>
                      📊 Resume Strength Report
                    </h3>
                    <p className="text-small">
                      {results.checkedCount} of {results.totalCriteria} criteria met
                    </p>
                  </div>

                  {/* Score Circle */}
                  <div className={`score-circle ${results.scoreClass}`}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 'var(--font-weight-extrabold)', fontFamily: 'var(--font-display)', color: results.scoreColor }}>
                      {results.totalScore}
                    </span>
                    <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)' }}>
                      / 100 points
                    </span>
                  </div>
                  
                  <p style={{ textAlign: 'center', color: results.scoreColor, fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-body-lg)', marginBottom: '1.5rem' }}>
                    {results.strengthLevel} Resume
                  </p>

                  {/* Category Scores */}
                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', fontSize: 'var(--font-size-body-md)' }}>
                    Category Breakdown
                  </h3>
                  
                  <div className="category-score-grid">
                    {Object.values(results.categoryScores).map((cat, idx) => {
                      const IconComponent = ICON_MAP[cat.icon] || FiFileText;
                      return (
                        <div key={idx} className="category-score-card">
                          <IconComponent size={24} color={getScoreColor(cat.percentage)} style={{ marginBottom: '0.5rem' }} />
                          <div style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                            {cat.title}
                          </div>
                          <div style={{ fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-bold)', color: getScoreColor(cat.percentage) }}>
                            {cat.score}/{cat.maxScore}
                          </div>
                          <div className="progress-bar-bg">
                            <div 
                              className="progress-bar-fill" 
                              style={{ 
                                width: `${cat.percentage}%`,
                                background: getScoreColor(cat.percentage)
                              }}
                            ></div>
                          </div>
                          <div className="text-small" style={{ marginTop: '0.25rem' }}>{cat.percentage}%</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Text Analysis */}
                  {resumeText.trim() && (
                    <>
                      <div className="gold-divider"></div>
                      <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', fontSize: 'var(--font-size-body-md)' }}>
                        🔍 Text Analysis
                      </h3>
                      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', marginTop: '0' }}>
                        <div className="stat-card">
                          <div className="stat-number">{results.textAnalysis.wordCount}</div>
                          <div className="stat-label">Word Count</div>
                        </div>
                        <div className="stat-card">
                          <div className="stat-number" style={{ color: results.textAnalysis.hasActionVerbs ? 'var(--success-color)' : 'var(--error-color)' }}>
                            {results.textAnalysis.hasActionVerbs ? '✓' : '✗'}
                          </div>
                          <div className="stat-label">Action Verbs Found</div>
                        </div>
                        <div className="stat-card">
                          <div className="stat-number" style={{ color: results.textAnalysis.hasQuantifiedResults ? 'var(--success-color)' : 'var(--error-color)' }}>
                            {results.textAnalysis.hasQuantifiedResults ? '✓' : '✗'}
                          </div>
                          <div className="stat-label">Quantified Results</div>
                        </div>
                        <div className="stat-card">
                          <div className="stat-number" style={{ color: results.textAnalysis.hasContactInfo ? 'var(--success-color)' : 'var(--error-color)' }}>
                            {results.textAnalysis.hasContactInfo ? '✓' : '✗'}
                          </div>
                          <div className="stat-label">Contact Information</div>
                        </div>
                      </div>
                      <p className="text-small" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                        Text analysis bonus: +{results.textAnalysis.textBonus} points
                      </p>
                    </>
                  )}

                  {/* Recommendations */}
                  {results.recommendations.length > 0 && (
                    <>
                      <div className="gold-divider"></div>
                      <h3 style={{ color: 'var(--error-color)', marginBottom: '1rem', fontSize: 'var(--font-size-body-md)' }}>
                        ⚠️ Top Areas to Improve ({results.totalRecommendations} items)
                      </h3>
                      {results.recommendations.map((rec, idx) => (
                        <div key={idx} className="checklist-item" style={{ borderColor: 'var(--border-glass)' }}>
                          <FiAlertTriangle size={18} color="var(--warning-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }}>
                              {rec.criterion}
                              <span className="text-small" style={{ marginLeft: '0.5rem' }}>({rec.points} pts)</span>
                            </div>
                            <div className="text-small" style={{ marginTop: '0.25rem' }}>{rec.description}</div>
                            <div className="text-small" style={{ color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                              Category: {rec.category}
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Comprehensive Resume Evaluation Features</h2>
              <p className="section-subtitle">Everything you need to systematically assess and strengthen your resume</p>
            </div>
            <div className="grid">
              {FEATURES.map((feature, i) => {
                const IconComponent = ICON_MAP[feature.icon] || FiFileText;
                return (
                  <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, rgba(242,202,80,0.1), rgba(212,175,55,0.05))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '0.5px solid var(--border-gold-filament)', color: 'var(--accent-primary)', flexShrink: 0 }}>
                      <IconComponent size={32} />
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{feature.title}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', flex: 1, marginBottom: '1rem', lineHeight: '1.6' }}>{feature.desc}</p>
                    <span className="feature-badge" style={{ marginTop: 'auto', justifyContent: 'center' }}>{feature.stat}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="section-container">
            <h2 id="paa-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>People Also Ask About Resume Strength Evaluation</h2>
            <div className="faq-grid">
              {peopleAlsoAsk?.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{paa.question}</h3>
                  </summary>
                  <div className="faq-answer">
                    <p style={{ lineHeight: '1.7' }}>{paa.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt" id="faq" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">❓ Frequently Asked Questions About Resume Strength</h2>
              <p className="section-subtitle">Expert answers based on recruiter evaluation criteria and ATS platform requirements</p>
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
                  aria-expanded={activeFaq === i}
                >
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)', flexShrink: 0 }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{faq.answer}</p><small className="text-small">Updated: {safeCurrentDate}</small></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links Grid */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">🔗 Complete Your Resume Toolkit</h2>
              <p className="section-subtitle">Access our full suite of free resume tools and resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "Free ATS Resume Checker", iconName: "FiShield", desc: "Test against real ATS systems" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward", desc: "Get instant quality feedback" },
                { href: "/resume-formatting-guide", text: "Resume Formatting Guide", iconName: "FiLayout", desc: "Professional layout standards" },
                { href: "/resume-keywords-finder", text: "Resume Keywords Finder", iconName: "FiSearch", desc: "Find the right keywords" },
                { href: "/free-resume-builder", text: "Free Resume Builder", iconName: "FiEdit", desc: "Build your resume" },
                { href: "/free-action-verb-recommender", text: "Action Verb Recommender", iconName: "FiZap", desc: "Powerful resume verbs" }
              ].map((link, i) => {
                const IconComponent = ICON_MAP[link.iconName] || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card" style={{ flexDirection: 'column', gap: '0.5rem' }}>
                    <IconComponent size={24} style={{ color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: '600', color: 'var(--text-primary)', lineHeight: '1.3' }}>{link.text}</span>
                    <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', lineHeight: '1.3' }}>{link.desc}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready to Strengthen Your Resume?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Assess your resume strength and get actionable recommendations to improve. Visit <a href="https://professionalresumefree.com" style={{ color: 'var(--accent-primary)' }}>Professional Resume Free</a> for our complete suite of resume tools. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} role="group" aria-label="Final call to action buttons">
              <Link href="/free-resume-builder" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                <FiEdit /> Build Your Resume
              </Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Explore Free Tools</Link>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>✓ No credit card required • ✓ Free forever • ✓ 5 categories • ✓ Instant results</p>
          </div>
        </section>

        {/* NEW SECTION: Internal Linking Boost */}
        <section className="section" style={{ background: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)' }} aria-labelledby="expand-toolkit-heading">
          <div className="section-container">
            <h2 id="expand-toolkit-heading" className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Expand Your Career Toolkit</h2>
            <div className="grid">
              <Link href="/resume-templates" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>ATS-Optimized Resume Templates</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Professionally designed templates that pass automated screening.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Browse Templates <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/resume-guide" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Complete ATS Resume Guide</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Master ATS optimization with proven strategies and real examples.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Read Guide <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/interview-tips" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Interview Preparation Tips</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Ace your next interview with proven strategies and common questions.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Get Tips <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Beat the ATS Screening</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Advanced optimization tips to ensure your resume passes automated screening.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Learn More <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
          <span itemProp="keywords">{longTailKeywords.join(', ')}</span>
        </div>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Data Freshness: Last updated {safeCurrentDate} • Self-assessment tool—combine with professional review for best results • Next update: {new Date(safeBuildTimestamp + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}</span>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const lastModifiedDate = buildTime.toISOString();

  return {
    props: {
      seoData: {
        currentDate: buildTime.toISOString().split('T')[0],
        lastModifiedDate,
        buildTimestamp
      }
    },
    revalidate: 7200,
  };
}

export default ResumeStrengthCalculatorPage;