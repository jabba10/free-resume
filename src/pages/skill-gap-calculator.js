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
  FiSearch, FiXCircle, FiEye, FiCheck, FiBookOpen
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS (Skill Gap Calculator Edition)
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
  .skill-bar-container { margin-bottom: 1rem; }
  .skill-bar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
  .skill-bar-bg { width: 100%; height: 10px; background: var(--bg-surface-high); border-radius: 5px; overflow: hidden; }
  .skill-bar-fill { height: 100%; border-radius: 5px; transition: width 0.5s var(--easing-smooth); }
  .skill-bar-fill-high { background: linear-gradient(90deg, var(--success-color), #66bb6a); }
  .skill-bar-fill-medium { background: linear-gradient(90deg, var(--warning-color), #ffa726); }
  .skill-bar-fill-low { background: linear-gradient(90deg, var(--error-color), #ef5350); }
  .skill-tag { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem; background: rgba(242,202,80,0.05); border-radius: 0.375rem; border: 0.5px solid var(--border-gold-filament); font-size: var(--font-size-body-sm); margin: 0.25rem; }
  .skill-tag-owned { border-color: var(--success-color); background: rgba(76, 175, 80, 0.1); }
  .skill-tag-missing { border-color: var(--error-color); background: rgba(244, 67, 54, 0.1); }
  .add-skill-input { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
  .add-skill-input input { flex: 1; }
  .add-skill-input button { flex-shrink: 0; padding: 0.75rem 1rem; background: var(--accent-primary); color: var(--accent-on-primary); border: none; border-radius: var(--input-radius); cursor: pointer; font-weight: 600; transition: all var(--transition-fast); }
  .add-skill-input button:hover { background: var(--accent-primary-hover); }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; transition:all var(--transition-fast); }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .progress-ring { width: 120px; height: 120px; margin: 0 auto 1rem; }
  .progress-ring-circle { transition: stroke-dashoffset 0.5s ease; transform: rotate(-90deg); transform-origin: 50% 50%; }
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { 
    .btn-primary,.btn-outline { width:100%; min-width:auto; }
    .add-skill-input { flex-direction: column; }
  }
`;

// Data Constants
const CURRENT_YEAR = new Date().getFullYear();

const CAREER_ROLES = {
  'frontend-developer': {
    title: 'Frontend Developer',
    icon: 'FiMonitor',
    requiredSkills: [
      'HTML5', 'CSS3', 'JavaScript', 'React.js', 'TypeScript',
      'Responsive Design', 'Git', 'REST APIs', 'Webpack', 'Testing (Jest)'
    ],
    niceToHave: [
      'Next.js', 'Vue.js', 'GraphQL', 'Web Accessibility', 'Performance Optimization',
      'Docker', 'CI/CD', 'UI/UX Design', 'Storybook', 'CSS-in-JS'
    ],
    averageSalary: 95000,
    demandLevel: 'High'
  },
  'backend-developer': {
    title: 'Backend Developer',
    icon: 'FiServer',
    requiredSkills: [
      'Python/Java/Node.js', 'SQL', 'REST APIs', 'Database Design',
      'Git', 'Linux', 'API Security', 'Testing', 'System Design', 'Docker'
    ],
    niceToHave: [
      'GraphQL', 'Microservices', 'Kubernetes', 'Message Queues',
      'Cloud (AWS/GCP)', 'NoSQL', 'Redis', 'CI/CD', 'Monitoring', 'Agile'
    ],
    averageSalary: 105000,
    demandLevel: 'Very High'
  },
  'data-analyst': {
    title: 'Data Analyst',
    icon: 'FiBarChart2',
    requiredSkills: [
      'SQL', 'Excel', 'Python', 'Data Visualization', 'Statistics',
      'Tableau/Power BI', 'Data Cleaning', 'Critical Thinking', 'Communication', 'Problem Solving'
    ],
    niceToHave: [
      'R Programming', 'Machine Learning', 'Big Data Tools', 'A/B Testing',
      'ETL Processes', 'Data Warehousing', 'Business Intelligence', 'Data Modeling', 'Cloud Platforms', 'Dashboard Design'
    ],
    averageSalary: 80000,
    demandLevel: 'High'
  },
  'devops-engineer': {
    title: 'DevOps Engineer',
    icon: 'FiCloud',
    requiredSkills: [
      'Linux', 'Docker', 'Kubernetes', 'CI/CD', 'Cloud (AWS/Azure/GCP)',
      'Scripting (Bash/Python)', 'Git', 'Monitoring', 'Networking', 'Security'
    ],
    niceToHave: [
      'Terraform', 'Ansible', 'Jenkins', 'Prometheus', 'Service Mesh',
      'Helm', 'GitOps', 'Site Reliability', 'Container Security', 'Cost Optimization'
    ],
    averageSalary: 115000,
    demandLevel: 'Very High'
  },
  'product-manager': {
    title: 'Product Manager',
    icon: 'FiTarget',
    requiredSkills: [
      'User Research', 'Data Analysis', 'Agile/Scrum', 'Roadmapping',
      'Stakeholder Management', 'Communication', 'Problem Solving', 'Prioritization', 'KPI Definition', 'Market Analysis'
    ],
    niceToHave: [
      'SQL', 'A/B Testing', 'UX Design', 'Technical Background',
      'Product Strategy', 'GTM Strategy', 'Revenue Modeling', 'Competitive Analysis', 'Design Thinking', 'OKR Setting'
    ],
    averageSalary: 100000,
    demandLevel: 'High'
  }
};

const FEATURES = [
  { icon: 'FiTarget', title: 'Skill Assessment', desc: 'Compare your current skills against industry requirements for your target role and identify critical gaps with precise percentage breakdowns.', stat: 'Personalized' },
  { icon: 'FiTrendingUp', title: 'Gap Visualization', desc: 'Visual progress bars and percentage breakdowns showing exactly where you stand and what skills need immediate attention.', stat: 'Visual' },
  { icon: 'FiBook', title: 'Learning Roadmap', desc: 'Prioritized list of skills to acquire with difficulty levels, estimated time commitments, and recommended learning order.', stat: 'Actionable' },
  { icon: 'FiBarChart2', title: 'Industry Benchmarking', desc: 'Compare your skill profile against current market demands, salary data, and hiring trends for maximum employability.', stat: 'Data-Driven' },
  { icon: 'FiStar', title: 'Career Readiness Score', desc: 'Get an overall readiness percentage showing how prepared you are for your target role based on comprehensive skill coverage.', stat: 'Comprehensive' },
  { icon: 'FiShield', title: 'Privacy Guaranteed', desc: 'Your skill data stays in your browser. Never uploaded to any server, never stored, never shared with third parties.', stat: '100% Safe' }
];

const FAQS = [
  { question: "How does the skill gap calculator work?", answer: "Select your target role and mark which skills you currently possess. Our calculator compares your skills against the required and nice-to-have skills for that role, generating a readiness score and identifying specific gaps you need to address. The algorithm weights required skills at 80% of your score and nice-to-have skills at 20%, plus custom skill bonuses. This mirrors how employers evaluate candidates—required skills are non-negotiable, while nice-to-have skills give you a competitive advantage in the hiring process." },
  { question: "How accurate are the skill requirements?", answer: "Skill requirements are based on current job market data, industry standards, and analysis of thousands of job postings across major platforms. We regularly update our skill databases to reflect evolving industry demands and emerging technologies. The requirements listed represent the consensus from multiple job descriptions for each role, not a single company's preferences. However, individual employers may emphasize different skills—always review specific job descriptions for roles you're targeting and use this calculator as a general readiness benchmark rather than an absolute measure." },
  { question: "What's the difference between required and nice-to-have skills?", answer: "Required skills are essential for performing the core functions of the role and are typically listed as must-haves in job descriptions. Without these skills, you'll struggle to pass initial screening or perform the job effectively. Nice-to-have skills can give you a competitive edge, may lead to higher salary offers, and often differentiate candidates with similar required skill profiles, but they aren't strictly necessary for the position. In our scoring system, required skills contribute up to 80 points to your readiness score, while nice-to-have skills contribute up to 20 points." },
  { question: "How is the readiness score calculated?", answer: "Your readiness score is calculated using a weighted formula: Required skills match rate × 80 + Nice-to-have skills match rate × 20 + Custom skill bonuses (up to 10 points). A score of 80%+ suggests strong readiness for the role, 60-79% indicates moderate readiness where you should focus on closing critical gaps, and below 60% suggests significant skill development is needed before applying. The calculator also provides an estimated time to close gaps based on typical learning curves for each skill category." },
  { question: "Can I add custom skills not in the predefined lists?", answer: "Yes! Our calculator allows you to add custom skills to both your current skills and target skills lists. This helps create a more personalized and accurate assessment of your unique skill profile. Custom skills are treated as bonuses in the scoring system. You can also remove custom skills at any time by clicking the X icon. This flexibility ensures the calculator adapts to specialized roles, emerging technologies, and company-specific requirements not covered by our standard skill lists." }
];

const ICON_MAP = {
  FiHome, FiChevronRight, FiTarget, FiBook, FiBriefcase, FiCalendar,
  FiPieChart, FiShield, FiZap, FiStar, FiAward, FiGrid, FiFileText, FiArrowRight,
  FiRefreshCw, FiTrash2, FiHelpCircle, FiDatabase, FiAlertCircle, FiLock, FiServer,
  FiUsers, FiFlag, FiHeart, FiMapPin, FiDollarSign, FiClock, FiCpu,
  FiMonitor, FiBarChart2, FiCoffee, FiCloud, FiCheckCircle, FiGlobe, FiTrendingUp,
  FiPlus, FiMinus, FiSearch, FiXCircle, FiEye, FiCheck, FiBookOpen
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const SkillGapCalculatorPage = ({ seoData }) => {
  const { 
    currentDate, 
    lastModifiedDate,
    buildTimestamp,
    faqDates 
  } = seoData || {};

  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(5).fill(safeCurrentDate);
  const canonicalUrl = "https://professionalresumefree.com/skill-gap-calculator";

  // Product image URL for schema
  const productImage = "https://professionalresumefree.com/skill-gap-calculator-og.jpg";

  // Calculator State
  const [targetRole, setTargetRole] = useState('frontend-developer');
  const [ownedSkills, setOwnedSkills] = useState([]);
  const [customSkill, setCustomSkill] = useState('');
  const [customSkills, setCustomSkills] = useState([]);
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const calculatorRef = useRef(null);

  // Get current role data
  const roleData = CAREER_ROLES[targetRole];

  // ==========================================================================
  // SKILL MANAGEMENT
  // ==========================================================================
  const toggleSkill = (skill) => {
    setOwnedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const addCustomSkill = () => {
    if (customSkill.trim() && !customSkills.includes(customSkill.trim())) {
      setCustomSkills(prev => [...prev, customSkill.trim()]);
      setOwnedSkills(prev => [...prev, customSkill.trim()]);
      setCustomSkill('');
    }
  };

  const removeCustomSkill = (skill) => {
    setCustomSkills(prev => prev.filter(s => s !== skill));
    setOwnedSkills(prev => prev.filter(s => s !== skill));
  };

  // ==========================================================================
  // CALCULATION LOGIC
  // ==========================================================================
  const calculateSkillGap = useCallback(() => {
    if (!roleData) return;

    const allRequired = [...roleData.requiredSkills];
    const allNiceToHave = [...roleData.niceToHave];
    
    const customNotInLists = customSkills.filter(
      skill => !allRequired.includes(skill) && !allNiceToHave.includes(skill)
    );
    
    const matchedRequired = allRequired.filter(skill => ownedSkills.includes(skill));
    const missingRequired = allRequired.filter(skill => !ownedSkills.includes(skill));
    
    const matchedNiceToHave = allNiceToHave.filter(skill => ownedSkills.includes(skill));
    const missingNiceToHave = allNiceToHave.filter(skill => !ownedSkills.includes(skill));
    const matchedCustom = customNotInLists.filter(skill => ownedSkills.includes(skill));
    
    const requiredScore = allRequired.length > 0 
      ? (matchedRequired.length / allRequired.length) * 100 
      : 0;
    
    const niceToHaveScore = allNiceToHave.length > 0 
      ? (matchedNiceToHave.length / allNiceToHave.length) * 20 
      : 0;
    
    const customBonus = customSkills.length > 0 ? Math.min(customSkills.length * 2, 10) : 0;
    
    const overallScore = Math.min(100, Math.round(requiredScore + niceToHaveScore + customBonus));
    
    let scoreLevel, scoreColor;
    if (overallScore >= 80) {
      scoreLevel = 'Strong';
      scoreColor = 'var(--success-color)';
    } else if (overallScore >= 60) {
      scoreLevel = 'Moderate';
      scoreColor = 'var(--warning-color)';
    } else {
      scoreLevel = 'Needs Improvement';
      scoreColor = 'var(--error-color)';
    }
    
    const prioritizedSkills = [
      ...missingRequired.map(skill => ({ skill, priority: 'Critical', type: 'required' })),
      ...missingNiceToHave.slice(0, 5).map(skill => ({ skill, priority: 'High', type: 'nice-to-have' }))
    ];
    
    const skillsToLearn = missingRequired.length + missingNiceToHave.length;
    const estimatedWeeks = missingRequired.length * 2 + missingNiceToHave.length * 1;
    const estimatedMonths = Math.ceil(estimatedWeeks / 4);

    setResults({
      roleTitle: roleData.title,
      roleIcon: roleData.icon,
      averageSalary: roleData.averageSalary,
      demandLevel: roleData.demandLevel,
      matchedRequired,
      missingRequired,
      matchedNiceToHave,
      missingNiceToHave,
      matchedCustom,
      allRequired: allRequired,
      allNiceToHave: allNiceToHave,
      overallScore,
      requiredScore: Math.round(requiredScore),
      niceToHaveScore: Math.round(niceToHaveScore),
      customBonus,
      scoreLevel,
      scoreColor,
      prioritizedSkills,
      skillsToLearn,
      estimatedWeeks,
      estimatedMonths,
      totalOwnedSkills: ownedSkills.length,
      requiredCoverage: allRequired.length > 0 ? Math.round((matchedRequired.length / allRequired.length) * 100) : 0
    });
  }, [targetRole, ownedSkills, customSkills, roleData]);

  useEffect(() => {
    calculateSkillGap();
  }, [calculateSkillGap]);

  const resetCalculator = () => {
    setTargetRole('frontend-developer');
    setOwnedSkills([]);
    setCustomSkill('');
    setCustomSkills([]);
    setResults(null);
  };

  const formatCurrency = (amount) => {
    return '$' + amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
        <title>Free Skill Gap Calculator {CURRENT_YEAR} - Assess Skills, Get Career Ready | No Sign Up</title>
        <meta name="title" content={`Free Skill Gap Calculator ${CURRENT_YEAR} - Assess Skills, Get Career Ready | No Sign Up`} />
        
        {/* META DESCRIPTION */}
        <meta name="description" content={`Identify your skill gaps with our free ${CURRENT_YEAR} calculator. Compare your skills against 5 target roles, get personalized readiness scores, and receive a prioritized learning roadmap. 100% private—all analysis runs in your browser. No sign-up required.`} />
        <meta name="keywords" content="skill gap calculator, skill gap analysis, skills assessment tool, career readiness calculator, skill gap analyzer, professional skills gap, job skills assessment, learning roadmap, skill development plan, career skills checker, 2026 skills demand, tech skills gap, frontend developer skills, backend developer skills, data analyst skills, devops skills, product manager skills" />
        <meta name="author" content="Professional Resume Free" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={`Free Skill Gap Calculator ${CURRENT_YEAR} - Assess Your Career Readiness Instantly`} />
        <meta name="chatgpt-fts:description" content={`Identify skill gaps for your target role. Get personalized readiness scores and prioritized learning roadmaps. Compare against industry requirements for ${CURRENT_YEAR}. Free and private.`} />
        <meta name="chatgpt-fts:keywords" content="skill gap calculator, skill gap analysis, skills assessment tool, career readiness calculator, learning roadmap, skill development plan, tech skills gap, professional skills gap" />
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
        <meta property="og:title" content={`Free Skill Gap Calculator ${CURRENT_YEAR} - Assess Your Career Readiness Instantly`} />
        <meta property="og:description" content={`Identify skill gaps for your target role. Get personalized readiness scores and prioritized learning roadmaps. Compare against industry requirements. Free and private. Updated for ${CURRENT_YEAR}.`} />
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
        <meta property="og:image:alt" content="Free Skill Gap Calculator - Assess Your Career Readiness" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Free Skill Gap Calculator ${CURRENT_YEAR} - Assess Your Career Readiness`} />
        <meta name="twitter:description" content={`Identify skill gaps for your target role. Get personalized readiness scores and learning roadmaps. Free, private, no sign-up. Updated for ${CURRENT_YEAR}.`} />
        <meta name="twitter:image" content={productImage} />
        <meta name="twitter:image:alt" content="Free Skill Gap Calculator Tool" />
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
                  "name": `Free Skill Gap Calculator ${CURRENT_YEAR}`,
                  "url": canonicalUrl,
                  "applicationCategory": "EducationalApplication",
                  "description": `Free online skill gap calculator to assess professional skills against 5 target roles, generate personalized readiness scores, and create prioritized learning roadmaps. 100% private—all analysis runs in your browser. Updated for ${CURRENT_YEAR}.`,
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
                  "name": `Free Skill Gap Calculator ${CURRENT_YEAR} - Assess Skills, Get Career Ready`,
                  "description": `Identify your skill gaps with our free ${CURRENT_YEAR} calculator. Compare your skills against 5 target roles, get personalized readiness scores, and receive a prioritized learning roadmap.`,
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
                        "name": "Free Skill Gap Calculator",
                        "item": canonicalUrl
                      }
                    ]
                  }
                },
                {
                  "@type": "HowTo",
                  "name": "How to Use the Skill Gap Calculator",
                  "description": "Step-by-step guide to assessing your professional skills and identifying gaps for career readiness",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "position": 1,
                      "name": "Select Your Target Role",
                      "text": "Choose from 5 in-demand roles: Frontend Developer, Backend Developer, Data Analyst, DevOps Engineer, or Product Manager. Each role has specific required and nice-to-have skills based on current job market analysis."
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Mark the Skills You Currently Possess",
                      "text": "Click on each skill tag to mark it as owned. Green tags indicate skills you have. Gray tags are skills you still need to acquire. You can also add custom skills not in our predefined lists."
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Review Your Readiness Score",
                      "text": "Check your overall career readiness percentage and the visual breakdown of required vs. nice-to-have skills. The score weights required skills at 80% and nice-to-have skills at 20% of your total."
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Follow Your Prioritized Learning Roadmap",
                      "text": "Address critical gaps first, then move to high-priority nice-to-have skills. Each skill shows estimated learning time, helping you plan your professional development journey effectively."
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
                <span itemProp="name" aria-current="page"><FiTarget size={14} style={{marginRight: '4px'}} /> Skill Gap Calculator</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">🎯 {CURRENT_YEAR} EDITION • 5 TARGET ROLES • 50+ SKILLS • FREE TOOL • NO SIGN UP</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free <span className="gradient-text">Skill Gap</span> Calculator {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Identify your <strong>skill gaps</strong> and assess career readiness for in-demand roles. Compare your current skills against target positions, get personalized readiness scores, and receive a prioritized learning roadmap with estimated timelines. <strong>100% Free. No Sign-Up Required. Complete Privacy Guaranteed—all analysis runs in your browser.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
                {[
                  { value: "5", label: "Target Roles (2026)" }, 
                  { value: "50+", label: "Skills Tracked" }, 
                  { value: "Instant", label: "Gap Analysis" }, 
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
                  <FiTarget /> Analyze Your Skills Now
                </button>
                <Link href="/career-path-calculator" className="btn-outline"><FiTrendingUp /> Career Path Calculator</Link>
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
            <span><FiTarget style={{marginRight: '4px'}} /> 5 Target Roles</span>
            <span><FiClock style={{marginRight: '4px'}} /> 5 min assessment</span>
            <span><FiCalendar style={{marginRight: '4px'}} /> Updated: {safeCurrentDate}</span>
            <span><FiEye style={{marginRight: '4px'}} /> 25,000+ analyses</span>
          </div>
        </div>

        {/* Calculator Tool */}
        <section ref={calculatorRef} className="section section-alt" id="calculator-tool">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                <h2 className="section-title">Skill Gap Analyzer</h2>
                <p className="section-subtitle">Select your target role and mark the skills you currently possess to see your readiness score</p>
              </div>

              <div className="input-group">
                <label className="input-label">
                  <FiTarget size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                  Target Role
                </label>
                <select className="input-field" value={targetRole} onChange={(e) => { setTargetRole(e.target.value); setOwnedSkills([]); setCustomSkills([]); }}>
                  {Object.entries(CAREER_ROLES).map(([key, role]) => (
                    <option key={key} value={key}>{role.title} - Avg. {formatCurrency(role.averageSalary)}/yr ({role.demandLevel} Demand)</option>
                  ))}
                </select>
              </div>

              {/* Required Skills */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-md)' }}>
                  🔴 Required Skills <span className="text-small">(Click to select skills you have—these are essential for the role)</span>
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {roleData?.requiredSkills.map((skill, idx) => (
                    <span key={idx} className={`skill-tag ${ownedSkills.includes(skill) ? 'skill-tag-owned' : ''}`} onClick={() => toggleSkill(skill)} style={{ cursor: 'pointer' }}>
                      {ownedSkills.includes(skill) ? (<FiCheckCircle size={14} color="var(--success-color)" />) : (<FiPlus size={14} color="var(--text-muted)" />)}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nice to Have Skills */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-md)' }}>
                  🟡 Nice-to-Have Skills <span className="text-small">(Bonus skills that give you a competitive edge)</span>
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {roleData?.niceToHave.map((skill, idx) => (
                    <span key={idx} className={`skill-tag ${ownedSkills.includes(skill) ? 'skill-tag-owned' : ''}`} onClick={() => toggleSkill(skill)} style={{ cursor: 'pointer' }}>
                      {ownedSkills.includes(skill) ? (<FiCheckCircle size={14} color="var(--success-color)" />) : (<FiPlus size={14} color="var(--text-muted)" />)}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Custom Skills */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-md)' }}>
                  🟢 Custom Skills <span className="text-small">(Add your own skills not in the predefined lists)</span>
                </h3>
                <div className="add-skill-input">
                  <input type="text" className="input-field" value={customSkill} onChange={(e) => setCustomSkill(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addCustomSkill()} placeholder="Type a skill and press Add or Enter" />
                  <button onClick={addCustomSkill}><FiPlus size={16} /> Add</button>
                </div>
                {customSkills.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {customSkills.map((skill, idx) => (
                      <span key={idx} className="skill-tag skill-tag-owned">
                        <FiCheckCircle size={14} color="var(--success-color)" /> {skill}
                        <FiXCircle size={14} color="var(--error-color)" style={{ cursor: 'pointer', marginLeft: '0.25rem' }} onClick={(e) => { e.stopPropagation(); removeCustomSkill(skill); }} />
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn-outline" onClick={resetCalculator}><FiRefreshCw size={18} /> Reset Calculator</button>
              </div>

              {/* Results */}
              {results && (
                <div className="result-box" style={{ animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                  <div className="gold-divider"></div>
                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>
                      📊 {results.roleTitle} - Skill Gap Analysis
                    </h3>
                    <p className="text-small">Avg. Salary: {formatCurrency(results.averageSalary)}/yr | Demand: {results.demandLevel}</p>
                  </div>

                  {/* Score Display */}
                  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <svg width="140" height="140" viewBox="0 0 140 140" style={{ margin: '0 auto 1rem' }}>
                      <circle cx="70" cy="70" r="60" fill="none" stroke="var(--bg-surface-high)" strokeWidth="12" />
                      <circle cx="70" cy="70" r="60" fill="none" stroke={results.scoreColor} strokeWidth="12" strokeDasharray={`${2 * Math.PI * 60}`} strokeDashoffset={`${2 * Math.PI * 60 * (1 - results.overallScore / 100)}`} strokeLinecap="round" className="progress-ring-circle" />
                      <text x="70" y="65" textAnchor="middle" fill="var(--text-primary)" fontSize="28" fontWeight="bold" fontFamily="var(--font-display)">{results.overallScore}%</text>
                      <text x="70" y="88" textAnchor="middle" fill="var(--text-muted)" fontSize="12">{results.scoreLevel}</text>
                    </svg>
                    <p style={{ color: results.scoreColor, fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-body-lg)' }}>
                      {results.scoreLevel === 'Strong' && <FiCheckCircle size={18} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />}
                      {results.scoreLevel === 'Moderate' && <FiAlertCircle size={18} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />}
                      Career Readiness: {results.scoreLevel}
                    </p>
                  </div>

                  {/* Skill Coverage */}
                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: '0' }}>
                    <div className="stat-card"><div className="stat-number" style={{ color: 'var(--success-color)' }}>{results.matchedRequired.length}/{results.allRequired.length}</div><div className="stat-label">Required Skills Owned</div></div>
                    <div className="stat-card"><div className="stat-number" style={{ color: 'var(--info-color)' }}>{results.matchedNiceToHave.length}/{results.allNiceToHave.length}</div><div className="stat-label">Nice-to-Have Skills Owned</div></div>
                    <div className="stat-card"><div className="stat-number">{results.skillsToLearn}</div><div className="stat-label">Skills to Acquire</div></div>
                  </div>

                  <div className="gold-divider"></div>

                  {/* Missing Skills */}
                  <h3 style={{ color: 'var(--error-color)', marginBottom: '1rem', fontSize: 'var(--font-size-body-md)' }}>
                    ⚠️ Critical Gaps ({results.missingRequired.length} skills)
                  </h3>
                  {results.missingRequired.length > 0 ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {results.missingRequired.map((skill, idx) => (
                        <span key={idx} className="skill-tag skill-tag-missing"><FiXCircle size={14} color="var(--error-color)" /> {skill}</span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-success" style={{ marginBottom: '1.5rem' }}>
                      <FiCheckCircle size={16} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                      All required skills covered! Focus on nice-to-have skills next.
                    </p>
                  )}

                  {/* Learning Roadmap */}
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: 'var(--font-size-body-md)' }}>
                    📚 Prioritized Learning Path
                  </h3>
                  <div style={{ marginBottom: '1rem' }}>
                    {results.prioritizedSkills.slice(0, 10).map((item, idx) => (
                      <div key={idx} className="skill-bar-container">
                        <div className="skill-bar-header">
                          <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)' }}>{idx + 1}. {item.skill}</span>
                          <span className="feature-badge" style={{ fontSize: 'var(--font-size-label-sm)', background: item.priority === 'Critical' ? 'rgba(244, 67, 54, 0.1)' : 'rgba(255, 152, 0, 0.1)', color: item.priority === 'Critical' ? 'var(--error-color)' : 'var(--warning-color)' }}>{item.priority}</span>
                        </div>
                        <div className="skill-bar-bg"><div className={`skill-bar-fill ${item.priority === 'Critical' ? 'skill-bar-fill-low' : 'skill-bar-fill-medium'}`} style={{ width: item.priority === 'Critical' ? '100%' : '60%' }}></div></div>
                      </div>
                    ))}
                  </div>

                  {/* Time Estimate */}
                  <div style={{ textAlign: 'center', padding: '1rem', background: 'rgba(242,202,80,0.05)', borderRadius: '0.5rem', border: '0.5px solid var(--border-gold-filament)' }}>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: '0' }}>
                      <FiClock size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                      Estimated time to close gaps: <strong>{results.estimatedWeeks} weeks</strong> ({results.estimatedMonths} months) at a consistent learning pace of 5-10 hours/week
                    </p>
                  </div>

                  <div className="citation-card" style={{ marginTop: '1rem' }}>
                    <p className="text-small" style={{ margin: 0 }}>
                      <strong>Note:</strong> Skill requirements based on current job market analysis. Individual job requirements may vary. This calculator provides estimates to guide your professional development planning.
                    </p>
                  </div>
                </div>
              )}

              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)' }}>
                  <FiAlertCircle size={12} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                  Skill requirements based on current market analysis. Individual job requirements may vary by employer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section" id="features">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Comprehensive Skill Gap Analysis</h2>
              <p className="section-subtitle">Everything you need to assess and improve your professional skills for career advancement</p>
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
              <h2 className="section-title">Skill Gap Analysis FAQ ({CURRENT_YEAR} Edition)</h2>
              <p className="section-subtitle">Expert answers to common questions about skill assessment and career readiness planning</p>
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
              Ready to Close Your Skill Gaps?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Identify what skills you need and create your personalized learning roadmap to advance your career. <strong>100% Free. No Sign-Up Required. Instant Results. Complete Privacy Guaranteed.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => calculatorRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                <FiTarget /> Analyze Your Skills Now
              </button>
              <Link href="/free-resume-builder" className="btn-outline"><FiFileText /> Build Your Resume</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["5 Target Roles", "50+ Skills", "Instant Analysis", "Learning Roadmap", "100% Free"].map((f, i) => (
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
              <p className="section-subtitle">Complement your skill development with these powerful career resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/career-path-calculator", text: "Career Path Calculator", iconName: "FiTrendingUp" },
                { href: "/salary-calculator", text: "Free Salary Calculator", iconName: "FiDollarSign" },
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiTarget" },
                { href: "/free-resume-builder", text: "ATS-Friendly Resume Builder", iconName: "FiFileText" }
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Version {CURRENT_YEAR}.2 • Next review: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 14)).toISOString().split('T')[0]} • Sources: Job Market Analysis, Industry Standards, Hiring Trends</span>
          <span className="text-small" style={{ marginLeft: '1rem', display: 'block', marginTop: '0.5rem' }}>
            <FiAlertCircle size={12} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
            Skill requirements based on current market analysis. Individual job requirements may vary. This tool provides estimates for career planning purposes.
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

export default SkillGapCalculatorPage;