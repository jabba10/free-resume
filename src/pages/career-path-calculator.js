import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiTrendingUp, FiTarget, FiBriefcase,
  FiCalendar, FiPieChart, FiShield, FiZap, FiStar, FiAward,
  FiGrid, FiFileText, FiArrowRight, FiRefreshCw, FiTrash2,
  FiHelpCircle, FiDatabase, FiAlertCircle, FiLock, FiServer,
  FiUsers, FiFlag, FiHeart, FiMapPin, FiDollarSign, FiClock,
  FiBook, FiCpu, FiMonitor, FiBarChart2, FiCoffee, FiCloud,
  FiCheckCircle, FiGlobe
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS (Career Path Calculator Edition - UNCHANGED)
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
  .timeline { position: relative; padding-left: 2rem; }
  .timeline::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--border-gold-filament); }
  .timeline-item { position: relative; margin-bottom: 2rem; }
  .timeline-item::before { content: ''; position: absolute; left: -2.35rem; top: 0.5rem; width: 12px; height: 12px; border-radius: 50%; background: var(--accent-primary); border: 2px solid var(--bg-surface); box-shadow: 0 0 10px rgba(242,202,80,0.3); }
  .timeline-card { background: var(--card-bg); border: var(--card-border); border-radius: 0.5rem; padding: 1.25rem; }
  .salary-projection-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem; }
  .projection-card { text-align: center; padding: 1.25rem; background: var(--card-bg); border-radius: 0.5rem; border: var(--card-border); }
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem; margin-top: 1rem; }
  .skill-tag { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem; background: rgba(242,202,80,0.05); border-radius: 0.375rem; border: 0.5px solid var(--border-gold-filament); font-size: var(--font-size-body-sm); }
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
    .salary-projection-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width:380px) {
    .salary-projection-grid { grid-template-columns: 1fr; }
  }
`;

// Data Constants (UNCHANGED)
const CURRENT_YEAR = new Date().getFullYear();

const CAREER_PATHS = {
  'software-engineer': {
    title: 'Software Engineer',
    icon: 'FiCpu',
    startingSalary: 75000,
    midSalary: 120000,
    seniorSalary: 180000,
    growthRate: 12,
    timeline: [
      { year: 1, role: 'Junior Developer', salary: 75000, skills: ['HTML/CSS', 'JavaScript', 'Git', 'Basic SQL'] },
      { year: 3, role: 'Mid-Level Developer', salary: 95000, skills: ['React/Angular', 'Node.js', 'AWS', 'CI/CD'] },
      { year: 5, role: 'Senior Developer', salary: 130000, skills: ['System Design', 'Mentoring', 'Architecture', 'Performance'] },
      { year: 8, role: 'Lead Engineer', salary: 160000, skills: ['Team Leadership', 'Project Management', 'Stakeholder Management'] },
      { year: 10, role: 'Engineering Manager', salary: 190000, skills: ['Strategy', 'Budgeting', 'Hiring', 'Cross-functional'] }
    ],
    requiredSkills: ['Programming', 'Problem Solving', 'Data Structures', 'Algorithms', 'Version Control'],
    certifications: ['AWS Certified', 'Google Cloud Professional', 'Certified Scrum Master']
  },
  'data-scientist': {
    title: 'Data Scientist',
    icon: 'FiBarChart2',
    startingSalary: 85000,
    midSalary: 130000,
    seniorSalary: 200000,
    growthRate: 15,
    timeline: [
      { year: 1, role: 'Junior Data Analyst', salary: 85000, skills: ['Python', 'SQL', 'Excel', 'Tableau'] },
      { year: 3, role: 'Data Scientist', salary: 115000, skills: ['Machine Learning', 'R', 'TensorFlow', 'Statistics'] },
      { year: 5, role: 'Senior Data Scientist', salary: 150000, skills: ['Deep Learning', 'NLP', 'Big Data', 'Cloud ML'] },
      { year: 8, role: 'Lead Data Scientist', salary: 180000, skills: ['AI Strategy', 'Team Lead', 'Research', 'Patents'] },
      { year: 10, role: 'Director of Data Science', salary: 220000, skills: ['Executive Strategy', 'Budget', 'Vision', 'Innovation'] }
    ],
    requiredSkills: ['Statistics', 'Python/R', 'Machine Learning', 'Data Visualization', 'SQL'],
    certifications: ['Google Data Analytics', 'AWS ML Specialty', 'TensorFlow Developer']
  },
  'product-manager': {
    title: 'Product Manager',
    icon: 'FiTarget',
    startingSalary: 70000,
    midSalary: 110000,
    seniorSalary: 160000,
    growthRate: 10,
    timeline: [
      { year: 1, role: 'Associate Product Manager', salary: 70000, skills: ['User Research', 'Wireframing', 'Agile', 'Analytics'] },
      { year: 3, role: 'Product Manager', salary: 95000, skills: ['Roadmapping', 'Stakeholder Management', 'A/B Testing', 'KPI'] },
      { year: 5, role: 'Senior Product Manager', salary: 130000, skills: ['Product Strategy', 'Team Leadership', 'GTM', 'Revenue'] },
      { year: 8, role: 'Director of Product', salary: 165000, skills: ['Portfolio Strategy', 'Org Design', 'P&L', 'Vision'] },
      { year: 10, role: 'VP of Product', salary: 210000, skills: ['Executive Leadership', 'Company Strategy', 'Board Relations', 'M&A'] }
    ],
    requiredSkills: ['User Empathy', 'Communication', 'Data Analysis', 'Strategic Thinking', 'Stakeholder Management'],
    certifications: ['Certified Scrum Product Owner', 'Pragmatic Institute', 'Product School']
  },
  'cybersecurity': {
    title: 'Cybersecurity Analyst',
    icon: 'FiShield',
    startingSalary: 70000,
    midSalary: 110000,
    seniorSalary: 170000,
    growthRate: 18,
    timeline: [
      { year: 1, role: 'Security Analyst', salary: 70000, skills: ['Network Security', 'SIEM', 'Firewalls', 'Incident Response'] },
      { year: 3, role: 'Security Engineer', salary: 95000, skills: ['Penetration Testing', 'Cloud Security', 'Threat Hunting', 'Scripting'] },
      { year: 5, role: 'Senior Security Engineer', salary: 130000, skills: ['Security Architecture', 'Risk Assessment', 'Compliance', 'Zero Trust'] },
      { year: 8, role: 'Security Manager', salary: 160000, skills: ['Team Management', 'Security Strategy', 'Budget', 'CISO Support'] },
      { year: 10, role: 'CISO', salary: 210000, skills: ['Executive Leadership', 'Board Communication', 'Enterprise Risk', 'Regulatory'] }
    ],
    requiredSkills: ['Network Security', 'Risk Analysis', 'Incident Response', 'Compliance', 'Ethical Hacking'],
    certifications: ['CISSP', 'CEH', 'CompTIA Security+', 'CISM']
  },
  'ux-designer': {
    title: 'UX/UI Designer',
    icon: 'FiMonitor',
    startingSalary: 65000,
    midSalary: 100000,
    seniorSalary: 150000,
    growthRate: 11,
    timeline: [
      { year: 1, role: 'Junior UX Designer', salary: 65000, skills: ['Figma', 'Wireframing', 'User Flows', 'Prototyping'] },
      { year: 3, role: 'UX Designer', salary: 85000, skills: ['User Research', 'Usability Testing', 'Design Systems', 'Interaction Design'] },
      { year: 5, role: 'Senior UX Designer', salary: 115000, skills: ['Design Strategy', 'Mentoring', 'Accessibility', 'Service Design'] },
      { year: 8, role: 'Lead UX Designer', salary: 140000, skills: ['Design Leadership', 'Cross-team', 'Vision', 'Innovation'] },
      { year: 10, role: 'Director of UX', salary: 175000, skills: ['Org Design', 'Executive Strategy', 'Brand Experience', 'Culture'] }
    ],
    requiredSkills: ['User Research', 'Prototyping', 'Visual Design', 'Information Architecture', 'Usability Testing'],
    certifications: ['Google UX Design', 'Nielsen Norman Group', 'IDF Certification']
  }
};

const INDUSTRIES = [
  'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education',
  'Manufacturing', 'Consulting', 'Government', 'Energy', 'Entertainment'
];

const FEATURES = [
  { icon: 'FiTrendingUp', title: 'Salary Projections', desc: '5-year and 10-year salary forecasts with detailed growth trajectories based on current market data and industry trends.', stat: 'Data-Driven' },
  { icon: 'FiTarget', title: 'Career Roadmap', desc: 'Step-by-step career progression timelines showing roles, responsibilities, and milestones for your chosen path.', stat: 'Personalized' },
  { icon: 'FiBook', title: 'Skills Development', desc: 'Identify critical skills needed at each career stage with recommended certifications and learning resources.', stat: 'Actionable' },
  { icon: 'FiBarChart2', title: 'Industry Comparison', desc: 'Compare career paths across different industries to find the best fit for your goals and earning potential.', stat: 'Comprehensive' },
  { icon: 'FiStar', title: 'Growth Analytics', desc: 'Track projected growth rates, demand forecasts, and market trends for informed career decisions.', stat: 'Strategic' },
  { icon: 'FiShield', title: 'Privacy Guaranteed', desc: 'Your career preferences and data stay in your browser. Never uploaded, never stored, never shared.', stat: '100% Safe' }
];

const FAQS = [
  { question: "How accurate are the salary projections?", answer: "Our salary projections are based on current market data, industry reports, and verified salary databases. While they provide reliable estimates, actual salaries vary by location, company size, individual performance, and market conditions. Use these as informed benchmarks for career planning." },
  { question: "How often is the career data updated?", answer: "We regularly update our career path data to reflect current market conditions, emerging roles, and evolving skill requirements. Salary data is reviewed quarterly to ensure accuracy with current compensation trends." },
  { question: "Can I switch between different career paths?", answer: "Absolutely! The calculator allows you to explore multiple career paths to compare growth trajectories, salary potential, and skill requirements. This helps you make informed decisions about career transitions or pivots." },
  { question: "What factors influence career progression speed?", answer: "Career progression depends on multiple factors including: skill acquisition rate, industry demand, company growth opportunities, networking, continuous education, certifications, and geographic location. Our timelines represent typical progression rates based on industry averages." },
  { question: "Are certifications really necessary for career growth?", answer: "While not always mandatory, relevant certifications can significantly accelerate career progression and salary growth. They demonstrate expertise, commitment to professional development, and can differentiate you in competitive job markets. Many employers value certifications as proof of specialized knowledge." }
];

const ICON_MAP = {
  FiHome, FiChevronRight, FiTrendingUp, FiTarget, FiBriefcase, FiCalendar,
  FiPieChart, FiShield, FiZap, FiStar, FiAward, FiGrid, FiFileText, FiArrowRight,
  FiRefreshCw, FiTrash2, FiHelpCircle, FiDatabase, FiAlertCircle, FiLock, FiServer,
  FiUsers, FiFlag, FiHeart, FiMapPin, FiDollarSign, FiClock, FiBook, FiCpu,
  FiMonitor, FiBarChart2, FiCoffee, FiCloud, FiCheckCircle, FiGlobe
};

// ============================================================================
// SEO-ENHANCED PAGE COMPONENT
// ============================================================================
const CareerPathCalculatorPage = ({ seoData }) => {
  const { currentDate, lastModifiedDate, buildTimestamp } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const canonicalUrl = "https://professionalresumefree.com/career-path-calculator";

  // Long-tail keywords for GEO optimization
  const longTailKeywords = [
    "free career path calculator 2026",
    "career progression calculator with salary projections",
    "tech career paths salary forecast tool",
    "career growth calculator with skills roadmap",
    "career planning tool for professionals"
  ];

  // Calculator State
  const [careerPath, setCareerPath] = useState('software-engineer');
  const [experienceLevel, setExperienceLevel] = useState('entry');
  const [selectedIndustry, setSelectedIndustry] = useState('Technology');
  const [educationLevel, setEducationLevel] = useState('bachelors');
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const calculatorRef = useRef(null);

  // Calculation logic (UNCHANGED)
  const calculateCareerPath = useCallback(() => {
    const pathData = CAREER_PATHS[careerPath];
    if (!pathData) return;

    const experienceMultipliers = {
      'entry': 0.8,
      'mid': 1.0,
      'senior': 1.3,
      'lead': 1.6
    };

    const educationBoost = {
      'highschool': 0.85,
      'associate': 0.9,
      'bachelors': 1.0,
      'masters': 1.15,
      'phd': 1.25
    };

    const industryDemand = {
      'Technology': 1.2,
      'Healthcare': 1.1,
      'Finance': 1.15,
      'E-commerce': 1.1,
      'Education': 0.85,
      'Manufacturing': 0.9,
      'Consulting': 1.05,
      'Government': 0.8,
      'Energy': 1.0,
      'Entertainment': 0.95
    };

    const expMult = experienceMultipliers[experienceLevel] || 1.0;
    const eduMult = educationBoost[educationLevel] || 1.0;
    const indMult = industryDemand[selectedIndustry] || 1.0;
    
    const overallMultiplier = expMult * eduMult * indMult;

    const adjustedTimeline = pathData.timeline.map(stage => ({
      ...stage,
      adjustedSalary: Math.round(stage.salary * overallMultiplier),
      salaryRange: {
        min: Math.round(stage.salary * overallMultiplier * 0.8),
        max: Math.round(stage.salary * overallMultiplier * 1.2)
      }
    }));

    const startingSalary = adjustedTimeline[0].adjustedSalary;
    const targetSalary = adjustedTimeline[adjustedTimeline.length - 1].adjustedSalary;
    const totalGrowth = targetSalary - startingSalary;
    const growthPercentage = ((targetSalary - startingSalary) / startingSalary * 100).toFixed(1);
    const yearsToMax = pathData.timeline.length;
    const annualGrowthRate = (Math.pow(targetSalary / startingSalary, 1 / yearsToMax) - 1) * 100;

    const skillsToAcquire = pathData.timeline.slice(
      experienceLevel === 'entry' ? 0 : 
      experienceLevel === 'mid' ? 1 : 
      experienceLevel === 'senior' ? 2 : 3
    ).map(stage => stage.skills).flat();

    const recommendedCerts = pathData.certifications.slice(0, 
      experienceLevel === 'entry' ? 1 : 
      experienceLevel === 'mid' ? 2 : 
      experienceLevel === 'senior' ? 3 : 4
    );

    setResults({
      careerTitle: pathData.title,
      careerIcon: pathData.icon,
      timeline: adjustedTimeline,
      startingSalary,
      targetSalary,
      totalGrowth,
      growthPercentage,
      yearsToMax,
      annualGrowthRate: annualGrowthRate.toFixed(1),
      requiredSkills: pathData.requiredSkills,
      skillsToAcquire: [...new Set(skillsToAcquire)],
      certifications: pathData.certifications,
      recommendedCerts,
      growthRate: pathData.growthRate,
      adjustedGrowthRate: (pathData.growthRate * overallMultiplier / expMult).toFixed(1),
      industry: selectedIndustry,
      overallMultiplier: (overallMultiplier * 100).toFixed(0)
    });
  }, [careerPath, experienceLevel, selectedIndustry, educationLevel]);

  useEffect(() => {
    calculateCareerPath();
  }, [calculateCareerPath]);

  const resetCalculator = () => {
    setCareerPath('software-engineer');
    setExperienceLevel('entry');
    setSelectedIndustry('Technology');
    setEducationLevel('bachelors');
    setResults(null);
  };

  const formatCurrency = (amount) => {
    return '$' + amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Schema data for JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${canonicalUrl}/#webapp`,
        "name": "Free Career Path Calculator 2026",
        "url": canonicalUrl,
        "applicationCategory": "BusinessApplication",
        "description": "Free online career path calculator with 10-year salary projections, skill roadmaps, and growth forecasts for technology careers. Compare 5 career paths across 10 industries with personalized projections.",
        "datePublished": "2026-01-15",
        "dateModified": safeLastModifiedDate,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "operatingSystem": "All",
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "url": "https://professionalresumefree.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "logo": {
            "@type": "ImageObject",
            "url": "https://professionalresumefree.com/logo.png",
            "width": 512,
            "height": 512
          },
          "sameAs": [
            "https://twitter.com/ProResumeFree",
            "https://linkedin.com/company/professional-resume-free"
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "name": `Free Career Path Calculator ${CURRENT_YEAR} - Salary Projections, Growth & Skills | No Sign Up`,
        "description": `Plan your career with our free calculator. Get 10-year salary projections, skill roadmaps, and growth forecasts for tech careers. Compare paths, see earnings potential, and identify required skills. 100% private.`,
        "datePublished": "2026-01-15",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://professionalresumefree.com/#website",
          "url": "https://professionalresumefree.com",
          "name": "Professional Resume Free",
          "description": "Free online resume builder and career development resources",
          "publisher": {
            "@type": "Organization",
            "name": "Professional Resume Free"
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://professionalresumefree.com/ats.jpeg",
          "width": 800,
          "height": 450
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://professionalresumefree.com" },
            { "@type": "ListItem", "position": 2, "name": "Career Path Calculator", "item": canonicalUrl }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}/#faq`,
        "mainEntity": FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": safeCurrentDate
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Use the Career Path Calculator",
        "description": "Step-by-step guide to getting personalized career path projections and salary forecasts",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Select Your Career Path",
            "text": "Choose from Software Engineer, Data Scientist, Product Manager, Cybersecurity Analyst, or UX/UI Designer career paths."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Set Your Experience Level",
            "text": "Select from Entry Level (0-2 years), Mid Level (3-5 years), Senior Level (6-9 years), or Lead/Manager (10+ years)."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Choose Industry and Education",
            "text": "Pick your target industry from 10 options and select your education level for accurate salary projections."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Review Your Career Roadmap",
            "text": "Get personalized 10-year career timeline with salary projections, required skills, and recommended certifications."
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* ======================================================================== */}
      {/* SEO-ENHANCED HEAD SECTION                                                */}
      {/* ======================================================================== */}
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Google Fonts for Executive Design (PRESERVED) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        
        <html lang="en-US" />
        
        {/* ===== SEO TITLE ===== */}
        <title>Free Career Path Calculator 2026 - Salary Projections, Growth & Skills | No Sign Up</title>
        
        {/* ===== META DESCRIPTION ===== */}
        <meta name="description" content={`Plan your career with our free calculator. Get 10-year salary projections, skill roadmaps, and growth forecasts for tech careers. Compare paths, see earnings potential, and identify required skills. 100% private.`} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content={`career path calculator ${CURRENT_YEAR}, career progression calculator, salary projection tool, career growth forecast, tech career paths, software engineer salary, data scientist career, career roadmap, skills development, career planning tool, ${CURRENT_YEAR} career outlook, professional growth calculator`} />
        
        {/* ===== GEO OPTIMIZATION TAGS ===== */}
        <meta name="chatgpt-fts:title" content={`Free Career Path Calculator ${CURRENT_YEAR} - Salary Projections & Growth Forecasts`} />
        <meta name="chatgpt-fts:description" content={`Plan your career trajectory with detailed salary projections, skill roadmaps, and growth analytics. Compare 5 tech career paths across 10 industries. Free and private.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* ===== CANONICAL URL ===== */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* ===== OPEN GRAPH TAGS ===== */}
        <meta property="og:title" content={`Free Career Path Calculator ${CURRENT_YEAR} - Salary Projections, Growth & Skills | No Sign Up`} />
        <meta property="og:description" content={`Plan your career trajectory with detailed salary projections, skill roadmaps, and growth analytics. Compare 5 tech career paths across 10 industries. Free, private, no sign-up required.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="Free Career Path Calculator - Salary Projections and Growth Forecasts" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* ===== TWITTER CARD TAGS ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Free Career Path Calculator ${CURRENT_YEAR} - Salary Projections & Growth`} />
        <meta name="twitter:description" content={`Get 10-year salary projections, skill roadmaps, and growth forecasts. Compare tech career paths. Free and private.`} />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:image:alt" content="Free Career Path Calculator" />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        {/* ===== TWITTER LABEL TAGS ===== */}
        <meta name="twitter:label1" content="Career Paths" />
        <meta name="twitter:data1" content="5" />
        <meta name="twitter:label2" content="Projection Range" />
        <meta name="twitter:data2" content="10 Years" />
        
        {/* ===== ADDITIONAL META ===== */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* ===== ARTICLE META ===== */}
        <meta property="article:published_time" content="2026-01-15" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Tools" />
        <meta property="article:tag" content="career path calculator, salary projection, career growth, skills development, career planning" />
        
        {/* ===== SITEMAP ===== */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* ===== ENHANCED STRUCTURED DATA JSON-LD ===== */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData)
        }} />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp || Date.now()} />
        <meta name="content-freshness" content={safeCurrentDate} />
      </div>

      {/* ======================================================================== */}
      {/* MAIN CONTENT (DESIGN & LAYOUT PRESERVED)                                 */}
      {/* ======================================================================== */}
      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb - Enhanced with Schema.org markup */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item"><span itemProp="name"><FiHome size={14} /> Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page"><FiTrendingUp size={14} /> Career Path Calculator</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ Free Tool • No Sign Up • Instant Results • {CURRENT_YEAR} Data</div>
              
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free <span className="gradient-text">Career Path</span> Calculator {CURRENT_YEAR}
              </h1>
              
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Plan your <strong>career trajectory</strong> with detailed 10-year salary projections, skill roadmaps, and growth forecasts. Compare tech career paths and make informed decisions about your professional future. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
              </p>
              
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }} aria-label="Key statistics">
                {[
                  { value: "5", label: "Career Paths" }, 
                  { value: "10yr", label: "Projections" }, 
                  { value: "Real-Time", label: "Calculations" }, 
                  { value: "100%", label: "Private & Secure" }
                ].map((s, i) => (
                  <div key={i} className="stat-card">
                    <div className="stat-number">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Related career tools">
                <Link href="/salary-calculator" className="btn-outline" aria-label="Try Free Salary Calculator"><FiDollarSign /> Salary Calculator</Link>
                <Link href="/cost-of-living-calculator" className="btn-outline" aria-label="Compare Cost of Living"><FiMapPin /> Cost of Living</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Tool */}
        <section ref={calculatorRef} className="section section-alt" aria-labelledby="calculator-heading">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                <h2 id="calculator-heading" className="section-title">Career Path Planner</h2>
                <p className="section-subtitle">Select your career path and experience level for personalized projections</p>
              </div>

              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                <div className="input-group">
                  <label className="input-label" htmlFor="career-path-select">
                    <FiBriefcase size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Career Path
                  </label>
                  <select 
                    id="career-path-select"
                    className="input-field"
                    value={careerPath}
                    onChange={(e) => setCareerPath(e.target.value)}
                    aria-label="Select your career path"
                  >
                    {Object.entries(CAREER_PATHS).map(([key, path]) => (
                      <option key={key} value={key}>{path.title}</option>
                    ))}
                  </select>
                </div>

                <div className="input-group">
                  <label className="input-label" htmlFor="experience-level-select">
                    <FiStar size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Experience Level
                  </label>
                  <select 
                    id="experience-level-select"
                    className="input-field"
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    aria-label="Select your experience level"
                  >
                    <option value="entry">Entry Level (0-2 years)</option>
                    <option value="mid">Mid Level (3-5 years)</option>
                    <option value="senior">Senior Level (6-9 years)</option>
                    <option value="lead">Lead/Manager (10+ years)</option>
                  </select>
                </div>

                <div className="input-group">
                  <label className="input-label" htmlFor="industry-select">
                    <FiCloud size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Industry
                  </label>
                  <select 
                    id="industry-select"
                    className="input-field"
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    aria-label="Select your target industry"
                  >
                    {INDUSTRIES.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div className="input-group">
                  <label className="input-label" htmlFor="education-select">
                    <FiBook size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Education
                  </label>
                  <select 
                    id="education-select"
                    className="input-field"
                    value={educationLevel}
                    onChange={(e) => setEducationLevel(e.target.value)}
                    aria-label="Select your education level"
                  >
                    <option value="highschool">High School Diploma</option>
                    <option value="associate">Associate Degree</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">Doctorate (PhD)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn-outline" onClick={resetCalculator} aria-label="Reset calculator to defaults">
                  <FiRefreshCw size={18} /> Reset
                </button>
              </div>

              {/* Results */}
              {results && (
                <div className="result-box" style={{ animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                  <div className="gold-divider"></div>
                  
                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>
                      📊 {results.careerTitle} Career Path - {results.industry} Industry
                    </h3>
                    <p className="text-small">
                      Growth Rate: {results.adjustedGrowthRate}% annually | Market Index: {results.overallMultiplier}%
                    </p>
                  </div>

                  <div className="salary-projection-grid">
                    <div className="projection-card">
                      <div className="stat-label">Starting Salary</div>
                      <div className="stat-number" style={{ color: 'var(--success-color)' }}>{formatCurrency(results.startingSalary)}</div>
                    </div>
                    <div className="projection-card">
                      <div className="stat-label">Target Salary (Year {results.yearsToMax})</div>
                      <div className="stat-number">{formatCurrency(results.targetSalary)}</div>
                    </div>
                    <div className="projection-card">
                      <div className="stat-label">Total Growth</div>
                      <div className="stat-number" style={{ color: 'var(--accent-primary)' }}>{results.growthPercentage}%</div>
                    </div>
                    <div className="projection-card">
                      <div className="stat-label">Annual Growth Rate</div>
                      <div className="stat-number" style={{ color: 'var(--info-color)' }}>{results.annualGrowthRate}%</div>
                    </div>
                  </div>

                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', fontSize: 'var(--font-size-body-md)' }}>
                    Career Progression Timeline
                  </h3>

                  <div className="timeline">
                    {results.timeline.map((stage, idx) => (
                      <div key={idx} className="timeline-item">
                        <div className="timeline-card">
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <div>
                              <span style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', fontSize: 'var(--font-size-body-md)' }}>
                                Year {stage.year} - {stage.role}
                              </span>
                            </div>
                            <span style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-primary)', fontSize: 'var(--font-size-body-lg)' }}>
                              {formatCurrency(stage.adjustedSalary)}
                            </span>
                          </div>
                          <div style={{ marginBottom: '0.5rem' }}>
                            <span className="text-small" style={{ display: 'block', marginBottom: '0.25rem' }}>Salary Range:</span>
                            <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                              {formatCurrency(stage.salaryRange.min)} - {formatCurrency(stage.salaryRange.max)}
                            </span>
                          </div>
                          <div>
                            <span className="text-small" style={{ display: 'block', marginBottom: '0.25rem' }}>Key Skills:</span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                              {stage.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="feature-badge" style={{ fontSize: 'var(--font-size-label-sm)', padding: '0.15rem 0.5rem' }}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="gold-divider"></div>
                  
                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginTop: '0' }}>
                    <div>
                      <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-md)' }}>
                        🎯 Required Skills
                      </h3>
                      <div className="skills-grid" style={{ gridTemplateColumns: '1fr' }}>
                        {results.requiredSkills.map((skill, idx) => (
                          <div key={idx} className="skill-tag">
                            <FiCheckCircle size={14} color="var(--success-color)" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-md)' }}>
                        📚 Recommended Certifications
                      </h3>
                      <div className="skills-grid" style={{ gridTemplateColumns: '1fr' }}>
                        {results.recommendedCerts.map((cert, idx) => (
                          <div key={idx} className="skill-tag">
                            <FiAward size={14} color="var(--accent-primary)" />
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
              <h2 id="features-heading" className="section-title">Powerful Career Planning Features</h2>
              <p className="section-subtitle">Everything you need to navigate your professional journey with confidence</p>
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
        <section className="section section-alt" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">Career Planning FAQ</h2>
              <p className="section-subtitle">Common questions about career development and progression</p>
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
                  {activeFaq === i && <div className="faq-answer"><p>{faq.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-labelledby="cta-heading" style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready to Plan Your Career Path?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Explore career trajectories and make informed decisions about your professional future. <strong>100% Free. No Sign-Up. Instant Results. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} role="group" aria-label="Call to action">
              <Link href="/salary-calculator" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }} aria-label="Use Free Salary Calculator">
                <FiDollarSign /> Salary Calculator
              </Link>
              <Link href="/free-resume-builder" className="btn-outline" aria-label="Build Your Resume"><FiFileText /> Build Your Resume</Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Explore More Career Tools</h2>
              <p className="section-subtitle">Complement your career planning with these powerful resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/salary-calculator", text: "Free Salary Calculator", iconName: "FiDollarSign" },
                { href: "/cost-of-living-calculator", text: "Cost of Living Comparison", iconName: "FiMapPin" },
                { href: "/immigration-points-calculator", text: "Immigration Points Calculator", iconName: "FiGlobe" },
                { href: "/free-resume-builder", text: "ATS-Friendly Resume Builder", iconName: "FiFileText" }
              ].map((link, i) => {
                const IconComponent = ICON_MAP[link.iconName] || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card" aria-label={link.text}>
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
          <span className="text-small">
            <FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> 
            Last updated: {safeCurrentDate} • Next update: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 7)).toISOString().split('T')[0]} • Version 2026.1
          </span>
          <span className="text-small" style={{ marginLeft: '1rem' }}>
            <FiAlertCircle size={12} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
            Projections are estimates based on market data. Individual results may vary.
          </span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp || Date.now()}</span>
          <span itemProp="career-paths-count">5</span>
        </div>
      </main>
    </>
  );
};

// ============================================================================
// SEO-ENHANCED getStaticProps (with ISR)
// ============================================================================
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];
  const lastModifiedDate = now.toISOString();
  
  return { 
    props: { 
      seoData: { 
        currentDate, 
        lastModifiedDate,
        buildTimestamp
      } 
    }, 
    revalidate: 3600 // ISR: Revalidate every hour
  };
}

export default CareerPathCalculatorPage;