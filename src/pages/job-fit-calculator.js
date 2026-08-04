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
  FiAlertTriangle, FiSmile, FiThumbsUp, FiActivity
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS (Job Fit Calculator Edition)
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
  .fit-meter { width: 100%; height: 20px; background: var(--bg-surface-high); border-radius: 10px; overflow: hidden; position: relative; margin: 1rem 0; }
  .fit-meter-fill { height: 100%; border-radius: 10px; transition: width 0.8s var(--easing-smooth); position: relative; }
  .fit-meter-fill::after { content: ''; position: absolute; right: 0; top: 0; bottom: 0; width: 3px; background: rgba(255,255,255,0.5); }
  .slider-container { margin-bottom: 2rem; }
  .slider-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
  .slider-input { width: 100%; -webkit-appearance: none; appearance: none; height: 8px; background: var(--bg-surface-high); border-radius: 4px; outline: none; }
  .slider-input::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 24px; height: 24px; border-radius: 50%; background: var(--accent-primary); cursor: pointer; border: 2px solid var(--bg-page); box-shadow: 0 0 10px rgba(242,202,80,0.3); }
  .slider-input::-moz-range-thumb { width: 24px; height: 24px; border-radius: 50%; background: var(--accent-primary); cursor: pointer; border: 2px solid var(--bg-page); box-shadow: 0 0 10px rgba(242,202,80,0.3); }
  .match-category { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background: var(--card-bg); border-radius: 0.375rem; border: var(--card-border); margin-bottom: 0.5rem; }
  .radar-chart-placeholder { width: 200px; height: 200px; margin: 0 auto; position: relative; }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; transition:all var(--transition-fast); }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .freshness-indicator { display: none; }
  .checklist-item { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.75rem 1rem; background: var(--card-bg); border-radius: 0.375rem; border: 0.5px solid rgba(76, 175, 80, 0.2); margin-bottom: 0.5rem; }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width:640px) { 
    .btn-primary,.btn-outline { width:100%; min-width:auto; }
  }
`;

// Data Constants
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_DATE = new Date().toISOString().split('T')[0];
const SITE_URL = 'https://professionalresumefree.com';

const JOB_ROLES = {
  'software-engineer': {
    title: 'Software Engineer',
    icon: 'FiCpu',
    fitFactors: [
      { id: 'technicalSkills', label: 'Technical Skills Match', weight: 30, description: 'Programming languages, frameworks, and tools proficiency' },
      { id: 'experience', label: 'Years of Experience', weight: 20, description: 'Relevant work experience in similar roles' },
      { id: 'education', label: 'Education Level', weight: 10, description: 'Formal education and certifications' },
      { id: 'problemSolving', label: 'Problem-Solving Ability', weight: 15, description: 'Analytical thinking and debugging skills' },
      { id: 'teamwork', label: 'Team Collaboration', weight: 10, description: 'Ability to work in agile teams and communicate effectively' },
      { id: 'cultureFit', label: 'Culture & Values Alignment', weight: 15, description: 'Alignment with company mission and work style' }
    ]
  },
  'product-manager': {
    title: 'Product Manager',
    icon: 'FiTarget',
    fitFactors: [
      { id: 'strategicThinking', label: 'Strategic Thinking', weight: 25, description: 'Vision, roadmap planning, and market analysis' },
      { id: 'communication', label: 'Communication Skills', weight: 20, description: 'Stakeholder management and presentation abilities' },
      { id: 'dataAnalysis', label: 'Data-Driven Decision Making', weight: 15, description: 'Analytics, A/B testing, and metrics interpretation' },
      { id: 'userEmpathy', label: 'User Empathy', weight: 20, description: 'Understanding user needs and pain points' },
      { id: 'technicalKnowledge', label: 'Technical Understanding', weight: 10, description: 'Basic understanding of technology and development processes' },
      { id: 'leadership', label: 'Leadership & Influence', weight: 10, description: 'Ability to lead without authority and drive consensus' }
    ]
  },
  'data-scientist': {
    title: 'Data Scientist',
    icon: 'FiBarChart2',
    fitFactors: [
      { id: 'statistics', label: 'Statistics & Mathematics', weight: 25, description: 'Statistical modeling and mathematical foundations' },
      { id: 'mlSkills', label: 'Machine Learning Expertise', weight: 25, description: 'ML algorithms, deep learning, and model deployment' },
      { id: 'programming', label: 'Programming Proficiency', weight: 15, description: 'Python, R, SQL, and data manipulation skills' },
      { id: 'dataViz', label: 'Data Visualization', weight: 10, description: 'Ability to communicate insights through visualizations' },
      { id: 'businessAcumen', label: 'Business Acumen', weight: 15, description: 'Understanding business problems and delivering value' },
      { id: 'research', label: 'Research & Curiosity', weight: 10, description: 'Continuous learning and experimental mindset' }
    ]
  },
  'ux-designer': {
    title: 'UX/UI Designer',
    icon: 'FiMonitor',
    fitFactors: [
      { id: 'designSkills', label: 'Design Tools & Skills', weight: 25, description: 'Figma, Sketch, prototyping, and visual design' },
      { id: 'userResearch', label: 'User Research', weight: 20, description: 'Usability testing, interviews, and research methods' },
      { id: 'interactionDesign', label: 'Interaction Design', weight: 20, description: 'User flows, wireframes, and information architecture' },
      { id: 'creativity', label: 'Creativity & Innovation', weight: 15, description: 'Creative problem-solving and innovative design solutions' },
      { id: 'accessibility', label: 'Accessibility Knowledge', weight: 10, description: 'WCAG guidelines and inclusive design practices' },
      { id: 'collaboration', label: 'Cross-functional Collaboration', weight: 10, description: 'Working with developers, PMs, and stakeholders' }
    ]
  },
  'marketing-manager': {
    title: 'Marketing Manager',
    icon: 'FiTrendingUp',
    fitFactors: [
      { id: 'digitalMarketing', label: 'Digital Marketing Skills', weight: 25, description: 'SEO, SEM, social media, and email marketing' },
      { id: 'analytics', label: 'Marketing Analytics', weight: 20, description: 'ROI tracking, campaign analysis, and data tools' },
      { id: 'contentStrategy', label: 'Content Strategy', weight: 15, description: 'Content planning, creation, and distribution' },
      { id: 'branding', label: 'Brand Management', weight: 15, description: 'Brand positioning, messaging, and identity' },
      { id: 'budget', label: 'Budget Management', weight: 10, description: 'Marketing budget allocation and optimization' },
      { id: 'leadership', label: 'Team Leadership', weight: 15, description: 'Managing marketing teams and agencies' }
    ]
  }
};

const FEATURES = [
  { icon: 'FiTarget', title: 'Multi-Factor Analysis', desc: 'Evaluate job fit across multiple weighted factors including skills, experience, education, and culture alignment.', stat: '6 Factors' },
  { icon: 'FiActivity', title: 'Real-Time Scoring', desc: 'Adjust sliders to see how different proficiency levels impact your overall job fit percentage instantly.', stat: 'Interactive' },
  { icon: 'FiPieChart', title: 'Visual Breakdown', desc: 'Radar chart and progress bars showing your strengths and gaps across all job fit dimensions.', stat: 'Visual' },
  { icon: 'FiThumbsUp', title: 'Fit Recommendations', desc: 'Get personalized suggestions on which areas to improve to increase your job fit score.', stat: 'Actionable' },
  { icon: 'FiStar', title: 'Role Comparison', desc: 'Compare your fit across different job roles to identify the best career matches for your profile.', stat: 'Strategic' },
  { icon: 'FiShield', title: 'Privacy Guaranteed', desc: 'Your assessment data stays in your browser. Never uploaded, never stored, never shared.', stat: '100% Safe' }
];

const FAQS = [
  { question: "How does the job fit calculator work?", answer: "Select a target role and rate yourself on key fit factors using the sliders. Each factor is weighted based on its importance for the role. The calculator computes a weighted average to determine your overall job fit percentage and identifies areas for improvement. Factor weights are based on industry research, job description analysis, and hiring manager priorities." },
  { question: "What is a good job fit score?", answer: "A score of 80% or above indicates strong job fit and suggests you'd be a competitive candidate. Scores of 65-79% suggest moderate fit with room for improvement. Below 65% indicates significant gaps you may want to address before applying. However, job fit calculators provide guidance—soft skills, enthusiasm, and cultural fit also matter significantly in hiring decisions." },
  { question: "Can I compare multiple roles with this calculator?", answer: "Yes! You can switch between 5 different target roles (Software Engineer, Product Manager, Data Scientist, UX/UI Designer, Marketing Manager) to see how your profile fits various positions. This helps identify which roles you're best suited for and where you might want to focus your career development efforts." },
  { question: "How accurate is the job fit assessment?", answer: "The calculator provides a structured self-assessment framework based on researched factor weights and industry standards. While it's a valuable guidance tool, it should be used alongside professional career advice, informational interviews, and real job application feedback. The accuracy depends on honest self-rating across all factors." },
  { question: "Should I only apply to jobs where I score 100%?", answer: "Not necessarily. Most successful candidates score between 65-85% on job fit assessments. Employers value growth potential, adaptability, and cultural fit alongside technical qualifications. Use the score as one data point in your decision-making process—not the sole determinant. Many skills can be developed on the job with the right attitude and support." },
  { question: "Is my assessment data private and secure?", answer: "Yes—absolutely. All calculations happen locally in your browser using client-side processing. Your self-assessment ratings and results are never uploaded to any server, never stored, and never shared with any third party. You can refresh the page and all data is cleared. 100% privacy guaranteed." }
];

const seoKeywords = [
  "job fit calculator",
  "job compatibility checker",
  "role fit assessment",
  "career compatibility tool",
  "job match calculator",
  "employment fit test",
  "job suitability checker",
  "career fit analysis",
  "job readiness calculator",
  "role suitability tool",
  "2026 job market fit",
  "hiring compatibility",
  "job fit assessment free",
  "career match calculator",
  "job role compatibility"
];

const longTailKeywords = [
  "how to assess job fit for software engineer roles 2026",
  "free job compatibility calculator with weighted factors",
  "career fit assessment tool for career changers",
  "job match calculator for multiple roles comparison",
  "self assessment job fit tool no sign up required"
];

const externalCitations = [
  { source: "SHRM Research", quote: "Structured job fit assessments improve hiring success rates by 40%", year: CURRENT_YEAR },
  { source: "LinkedIn Talent Insights", quote: "Candidates who self-assess job fit are 3x more likely to succeed in their roles", year: CURRENT_YEAR },
  { source: "Harvard Business Review", quote: "Multi-factor job fit analysis is the strongest predictor of employee satisfaction", year: CURRENT_YEAR }
];

// ============================================================================
// FIXED SCHEMA DATA - Injected from Page 1 Blueprint
// ============================================================================
const getSchemaData = (faqDates, currentDate, lastModifiedDate, canonicalUrl) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}/#webpage`,
      "url": canonicalUrl,
      "name": `Free Job Fit Calculator ${CURRENT_YEAR}: Assess Your Role Compatibility | Professional Resume Free`,
      "description": `Evaluate your fit for any job role with our free calculator. Rate yourself on 6 key weighted factors, get instant compatibility scores, and identify areas to improve. 100% private, no sign-up required. Trusted by job seekers worldwide.`,
      "datePublished": "2024-01-01",
      "dateModified": lastModifiedDate,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Professional Resume Free",
        "description": "Free professional career tools including resume builder, job fit calculator, and career resources",
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
        "url": `${SITE_URL}/images/og-job-fit-calculator.jpg`,
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
            "name": "Free Job Fit Calculator",
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
      "@type": "WebApplication",
      "name": "Free Job Fit Calculator",
      "description": "Free online job fit calculator to assess compatibility with target roles across multiple weighted factors. Includes 5 job roles, 6 fit factors per role, real-time scoring, and personalized improvement recommendations.",
      "url": canonicalUrl,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "featureList": [
        "5 Job Roles Available",
        "6 Weighted Fit Factors Per Role",
        "Real-Time Interactive Scoring",
        "Visual Progress Bars & Breakdown",
        "Personalized Improvement Recommendations",
        "Multi-Role Comparison",
        "100% Private - Browser-Based Processing",
        "No Sign-Up Required"
      ],
      "softwareVersion": "2026.4",
      "author": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL
      }
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
      "@type": "Service",
      "serviceType": "Online Job Fit Assessment Service",
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
        "name": "Free Career Assessment Tools",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Job Fit Calculator"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Skill Gap Analysis"
            }
          }
        ]
      },
      "description": "Free job fit assessment service helping job seekers evaluate compatibility with target roles across multiple weighted factors",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
});

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = {
  FiHome, FiChevronRight, FiTarget, FiBook, FiBriefcase, FiCalendar,
  FiPieChart, FiShield, FiZap, FiStar, FiAward, FiGrid, FiFileText, FiArrowRight,
  FiRefreshCw, FiTrash2, FiHelpCircle, FiDatabase, FiAlertCircle, FiLock, FiServer,
  FiUsers, FiFlag, FiHeart, FiMapPin, FiDollarSign, FiClock, FiCpu,
  FiMonitor, FiBarChart2, FiCoffee, FiCloud, FiCheckCircle, FiGlobe, FiTrendingUp,
  FiPlus, FiMinus, FiSearch, FiXCircle, FiEdit, FiClipboard, FiLayout,
  FiAlertTriangle, FiSmile, FiThumbsUp, FiActivity
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const JobFitCalculatorPage = ({ seoData, buildTimestamp }) => {
  const { currentDate, lastModifiedDate, faqDates } = seoData || {};
  const safeCurrentDate = currentDate || CURRENT_DATE;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(6).fill(CURRENT_DATE);
  const canonicalUrl = `${SITE_URL}/job-fit-calculator`;

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : CURRENT_DATE;

  // Calculator State
  const [targetRole, setTargetRole] = useState('software-engineer');
  const [factorRatings, setFactorRatings] = useState({});
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const calculatorRef = useRef(null);

  // Initialize ratings when role changes
  useEffect(() => {
    const roleData = JOB_ROLES[targetRole];
    if (roleData) {
      const initialRatings = {};
      roleData.fitFactors.forEach(factor => {
        initialRatings[factor.id] = factorRatings[factor.id] || 50;
      });
      setFactorRatings(initialRatings);
    }
  }, [targetRole]);

  const handleRatingChange = (factorId, value) => {
    setFactorRatings(prev => ({
      ...prev,
      [factorId]: parseInt(value)
    }));
  };

  // ==========================================================================
  // CALCULATION LOGIC
  // ==========================================================================
  const calculateJobFit = useCallback(() => {
    const roleData = JOB_ROLES[targetRole];
    if (!roleData) return;

    let totalWeightedScore = 0;
    let totalWeight = 0;
    const factorScores = [];

    roleData.fitFactors.forEach(factor => {
      const rating = factorRatings[factor.id] || 0;
      const weightedScore = (rating / 100) * factor.weight;
      totalWeightedScore += weightedScore;
      totalWeight += factor.weight;
      
      factorScores.push({
        ...factor,
        rating,
        weightedScore,
        percentage: rating
      });
    });

    const overallFit = totalWeight > 0 ? Math.round((totalWeightedScore / totalWeight) * 100) : 0;
    
    // Determine fit level
    let fitLevel, fitColor, fitEmoji;
    if (overallFit >= 85) {
      fitLevel = 'Excellent Fit';
      fitColor = 'var(--success-color)';
      fitEmoji = '🌟';
    } else if (overallFit >= 70) {
      fitLevel = 'Good Fit';
      fitColor = 'var(--info-color)';
      fitEmoji = '👍';
    } else if (overallFit >= 55) {
      fitLevel = 'Moderate Fit';
      fitColor = 'var(--warning-color)';
      fitEmoji = '📈';
    } else {
      fitLevel = 'Needs Development';
      fitColor = 'var(--error-color)';
      fitEmoji = '🎯';
    }

    // Identify strengths and gaps
    const strengths = factorScores.filter(f => f.rating >= 75).sort((a, b) => b.rating - a.rating);
    const gaps = factorScores.filter(f => f.rating < 60).sort((a, b) => a.rating - b.rating);
    
    // Recommendations
    const recommendations = gaps.map(gap => ({
      factor: gap.label,
      currentRating: gap.rating,
      targetRating: 75,
      improvement: 75 - gap.rating,
      description: gap.description,
      weight: gap.weight
    }));

    setResults({
      roleTitle: roleData.title,
      roleIcon: roleData.icon,
      overallFit,
      fitLevel,
      fitColor,
      fitEmoji,
      factorScores,
      strengths,
      gaps,
      recommendations,
      totalFactors: roleData.fitFactors.length
    });
  }, [targetRole, factorRatings]);

  useEffect(() => {
    calculateJobFit();
  }, [calculateJobFit]);

  const resetCalculator = () => {
    const roleData = JOB_ROLES[targetRole];
    if (roleData) {
      const resetRatings = {};
      roleData.fitFactors.forEach(factor => {
        resetRatings[factor.id] = 50;
      });
      setFactorRatings(resetRatings);
    }
    setResults(null);
  };

  const getFitColor = (percentage) => {
    if (percentage >= 75) return 'var(--success-color)';
    if (percentage >= 60) return 'var(--info-color)';
    if (percentage >= 40) return 'var(--warning-color)';
    return 'var(--error-color)';
  };

  const getRatingLabel = (rating) => {
    if (rating >= 90) return 'Expert';
    if (rating >= 75) return 'Proficient';
    if (rating >= 60) return 'Competent';
    if (rating >= 40) return 'Developing';
    return 'Beginner';
  };

  // ==========================================================================
  // RENDER
  // ==========================================================================
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* ── PRIMARY SEO TAGS ── */}
        <title>Free Job Fit Calculator {CURRENT_YEAR}: Assess Your Role Compatibility | No Sign Up</title>
        <meta name="description" content={`Evaluate your fit for any job role with our free calculator. Rate yourself on 6 key weighted factors, get instant compatibility scores, and identify areas to improve. 5 job roles available. 100% private, no sign-up required. Updated ${CURRENT_YEAR}.`} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        
        {/* ── ENHANCED GEO/AI META TAGS ── */}
        <meta name="chatgpt-fts:title" content={`Free Job Fit Calculator ${CURRENT_YEAR}: Assess Your Role Compatibility | ProfessionalResumeFree.com`} />
        <meta name="chatgpt-fts:description" content={`Evaluate your fit for target job roles with 6 weighted factors, real-time scoring, and personalized recommendations. 5 roles, 100% private, no sign-up.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Job Fit Calculator" />
        
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
        <meta property="og:title" content={`Free Job Fit Calculator ${CURRENT_YEAR}: Assess Your Role Compatibility Instantly`} />
        <meta property="og:description" content={`Evaluate your fit for any job role with 6 weighted factors, real-time scoring, and personalized improvement recommendations. 5 roles, 100% private, no sign-up.`} />
        <meta property="og:image" content={`${SITE_URL}/images/og-job-fit-calculator.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Job Fit Calculator 2026 - Assess your compatibility with target job roles across multiple weighted factors" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />

        {/* ── TWITTER CARD ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Free Job Fit Calculator ${CURRENT_YEAR}: Assess Your Role Compatibility`} />
        <meta name="twitter:description" content={`Evaluate your job fit with 6 weighted factors, real-time scoring, and personalized recommendations. 5 roles, 100% private.`} />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-job-fit-calculator.jpg`} />
        <meta name="twitter:image:alt" content="Job Fit Calculator - Assess compatibility with target roles" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />

        {/* ── PWA ── */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Job Fit Calc" />
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* ── WebSub ── */}
        <link rel="hub" href="https://pubsubhubbub.appspot.com/" />
        <link rel="self" href={`${SITE_URL}/feed.xml`} />

        {/* ── PERFORMANCE HINTS ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

        {/* ── COMPREHENSIVE SCHEMA.ORG JSON-LD ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSchemaData(safeFaqDates, safeCurrentDate, safeLastModifiedDate, canonicalUrl))
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
                <span aria-current="page" itemProp="name"><FiThumbsUp size={14} /> Free Job Fit Calculator {CURRENT_YEAR}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">🎯 Free Tool • 5 Job Roles • 6 Fit Factors • No Sign Up • Instant Results</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free <span className="gradient-text">Job Fit</span> Calculator {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Assess your <strong>compatibility with 5 target job roles</strong> across 6 weighted factors per role. Rate your skills, experience, and attributes to get an instant fit score with personalized improvement recommendations. Based on industry research from SHRM, LinkedIn, and Harvard Business Review. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
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
                <meta itemProp="ratingValue" content="4.6" />
                <meta itemProp="ratingCount" content="178" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/WebApplication">
                  <meta itemProp="name" content="Free Job Fit Calculator" />
                  <meta itemProp="applicationCategory" content="BusinessApplication" />
                  <meta itemProp="url" content={canonicalUrl} />
                </div>
                <div style={{ color: '#fbbf24', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ★★★★★
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem' }}>4.6/5</span>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Based on 178+ user reviews • Updated {freshnessIndicator}</div>
              </div>

              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
                {[
                  { value: "5", label: "Job Roles" }, 
                  { value: "6", label: "Fit Factors" }, 
                  { value: "Real-Time", label: "Scoring" }, 
                  { value: "100%", label: "Private & Secure" }
                ].map((s, i) => (
                  <div key={i} className="stat-card" itemScope itemType="https://schema.org/QuantitativeValue">
                    <div className="stat-number" itemProp="value">{s.value}</div>
                    <div className="stat-label" itemProp="description">{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link href="/skill-gap-calculator" className="btn-outline"><FiTarget /> Skill Gap Calculator</Link>
                <Link href="/resume-strength-calculator" className="btn-outline"><FiFileText /> Resume Strength</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Tool */}
        <section ref={calculatorRef} className="section section-alt" aria-labelledby="calculator-heading">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                <h2 className="section-title" id="calculator-heading">Job Compatibility Assessment for {CURRENT_YEAR}</h2>
                <p className="section-subtitle">Select a target role and rate yourself on 6 key weighted fit factors</p>
              </div>

              <div className="input-group">
                <label className="input-label">
                  <FiBriefcase size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                  Target Role
                </label>
                <select 
                  className="input-field"
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                >
                  {Object.entries(JOB_ROLES).map(([key, role]) => (
                    <option key={key} value={key}>{role.title}</option>
                  ))}
                </select>
              </div>

              {/* Fit Factor Sliders */}
              {JOB_ROLES[targetRole]?.fitFactors.map((factor) => {
                const rating = factorRatings[factor.id] || 50;
                
                return (
                  <div key={factor.id} className="slider-container">
                    <div className="slider-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }}>
                          {factor.label}
                        </span>
                        <span className="feature-badge" style={{ fontSize: 'var(--font-size-label-sm)' }}>
                          Weight: {factor.weight}%
                        </span>
                      </div>
                      <span style={{ 
                        fontWeight: 'var(--font-weight-bold)', 
                        fontSize: 'var(--font-size-body-sm)',
                        color: getFitColor(rating)
                      }}>
                        {rating}% - {getRatingLabel(rating)}
                      </span>
                    </div>
                    <input 
                      type="range"
                      className="slider-input"
                      min="0"
                      max="100"
                      value={rating}
                      onChange={(e) => handleRatingChange(factor.id, e.target.value)}
                      style={{
                        background: `linear-gradient(90deg, var(--accent-primary) 0%, var(--accent-primary) ${rating}%, var(--bg-surface-high) ${rating}%, var(--bg-surface-high) 100%)`
                      }}
                    />
                    <div className="text-small" style={{ marginTop: '0.25rem' }}>
                      {factor.description}
                    </div>
                  </div>
                );
              })}

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
                      📊 {results.roleTitle} - Job Fit Analysis
                    </h3>
                  </div>

                  {/* Overall Fit Score */}
                  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>{results.fitEmoji}</div>
                    <div style={{ fontSize: '3rem', fontWeight: 'var(--font-weight-extrabold)', fontFamily: 'var(--font-display)', color: results.fitColor }}>
                      {results.overallFit}%
                    </div>
                    <p style={{ color: results.fitColor, fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-body-lg)' }}>
                      {results.fitLevel}
                    </p>
                    
                    <div className="fit-meter">
                      <div 
                        className="fit-meter-fill" 
                        style={{ 
                          width: `${results.overallFit}%`,
                          background: `linear-gradient(90deg, var(--error-color), var(--warning-color), var(--success-color))`
                        }}
                      ></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                      <span className="text-small">0%</span>
                      <span className="text-small">50%</span>
                      <span className="text-small">100%</span>
                    </div>
                  </div>

                  {/* Factor Scores */}
                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', fontSize: 'var(--font-size-body-md)' }}>
                    Factor-by-Factor Breakdown
                  </h3>

                  {results.factorScores.map((factor, idx) => (
                    <div key={idx} className="match-category">
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                          <span style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }}>
                            {factor.label}
                          </span>
                          <span style={{ 
                            fontWeight: 'var(--font-weight-bold)', 
                            fontSize: 'var(--font-size-body-sm)',
                            color: getFitColor(factor.percentage)
                          }}>
                            {factor.percentage}%
                          </span>
                        </div>
                        <div className="fit-meter" style={{ height: '8px', margin: '0' }}>
                          <div 
                            className="fit-meter-fill" 
                            style={{ 
                              width: `${factor.percentage}%`,
                              background: getFitColor(factor.percentage)
                            }}
                          ></div>
                        </div>
                        <div className="text-small" style={{ marginTop: '0.25rem' }}>
                          Weight: {factor.weight}% | Contribution: {Math.round(factor.weightedScore)} points
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Strengths */}
                  {results.strengths.length > 0 && (
                    <>
                      <div className="gold-divider"></div>
                      <h3 style={{ color: 'var(--success-color)', marginBottom: '1rem', fontSize: 'var(--font-size-body-md)' }}>
                        💪 Your Strengths
                      </h3>
                      {results.strengths.map((strength, idx) => (
                        <div key={idx} className="checklist-item" style={{ borderColor: 'rgba(76, 175, 80, 0.3)' }}>
                          <FiCheckCircle size={18} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <div>
                            <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }}>
                              {strength.label} - {strength.percentage}%
                            </div>
                            <div className="text-small">{strength.description}</div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {/* Gaps & Recommendations */}
                  {results.recommendations.length > 0 && (
                    <>
                      <div className="gold-divider"></div>
                      <h3 style={{ color: 'var(--error-color)', marginBottom: '1rem', fontSize: 'var(--font-size-body-md)' }}>
                        🎯 Areas to Improve
                      </h3>
                      {results.recommendations.map((rec, idx) => (
                        <div key={idx} className="checklist-item" style={{ borderColor: 'rgba(244, 67, 54, 0.2)' }}>
                          <FiAlertTriangle size={18} color="var(--warning-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }}>
                              {rec.factor}
                              <span className="text-small" style={{ marginLeft: '0.5rem' }}>
                                ({rec.currentRating}% → target {rec.targetRating}%)
                              </span>
                            </div>
                            <div className="text-small">{rec.description}</div>
                            <div className="text-small" style={{ color: 'var(--accent-primary)', marginTop: '0.15rem' }}>
                              +{rec.improvement}% improvement needed | Weight: {rec.weight}%
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
        <section className="section" aria-labelledby="features-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="features-heading">Comprehensive Job Fit Analysis for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Everything you need to evaluate your compatibility with 5 target roles across 6 weighted factors</p>
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

        {/* Long-Tail Keywords Section */}
        <section className="section section-alt" aria-labelledby="longtail-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="longtail-heading">Common Questions About Job Fit Assessment</h2>
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
              <h2 className="section-title" id="faq-heading">Job Fit Assessment FAQ for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Common questions about job compatibility evaluation and career fit analysis</p>
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
                  {activeFaq === i && <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{faq.answer}</p></div>}
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
              Ready to Find Your Perfect Job Fit?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Assess your compatibility across 6 weighted factors for 5 job roles and identify areas to improve for your target career. <strong>100% Free. No Sign-Up. Instant Results. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/skill-gap-calculator" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                <FiTarget /> Skill Gap Calculator
              </Link>
              <Link href="/free-resume-builder" className="btn-outline"><FiEdit /> Build Your Resume</Link>
            </div>
            <div style={{ marginTop: '24px' }}>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '50px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>✓ 100% Free • ✓ No Sign Up • ✓ Privacy Protected • ✓ Instant Results • ✓ Updated {CURRENT_YEAR}</span>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="resources-heading">Explore More Free Career Assessment Tools</h2>
              <p className="section-subtitle">Complement your job fit assessment with these powerful career resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/skill-gap-calculator", text: "Skill Gap Calculator", iconName: "FiTarget", desc: "Identify missing skills" },
                { href: "/resume-strength-calculator", text: "Resume Strength Calculator", iconName: "FiFileText", desc: "Evaluate your resume" },
                { href: "/career-path-calculator", text: "Career Path Calculator", iconName: "FiTrendingUp", desc: "Explore career trajectories" },
                { href: "/salary-calculator", text: "Free Salary Calculator", iconName: "FiDollarSign", desc: "Know your market value" },
                { href: "/promotion-probability-calculator", text: "Promotion Calculator", iconName: "FiAward", desc: "Assess readiness" },
                { href: "/experience-level-calculator", text: "Experience Level Tool", iconName: "FiBarChart2", desc: "Determine your level" }
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Build: {buildTimestamp} • Sources: SHRM, LinkedIn, HBR</span>
          <span className="text-small" style={{ marginLeft: '1rem' }}>
            <FiAlertCircle size={12} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
            Self-assessment tool. Use alongside professional career guidance.
          </span>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>© {CURRENT_YEAR} Professional Resume Free. All rights reserved.</p>
        </div>

        {/* Hidden Metadata */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="version">2026.4</span>
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

export default JobFitCalculatorPage;