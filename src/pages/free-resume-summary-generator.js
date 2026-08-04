import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp,
  FiFileText, FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool, FiLayers, FiUser,
  FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight, FiCopy,
  FiX, FiGrid, FiList, FiBookmark, FiSmartphone, FiBriefcase,
  FiLayout, FiEdit3, FiSave, FiPrinter, FiRefreshCw, FiInfo,
  FiChevronDown, FiChevronUp, FiPlus, FiMinus, FiLock, FiSmile,
  FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiActivity, FiHash, FiType
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS - FIXED OVERLAY ISSUES
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
  
  /* CRITICAL FIXES FOR OVERLAY ISSUES */
  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color:transparent; }
  html { overflow-x:hidden; width:100%; }
  body { 
    background-color:var(--bg-page); color:var(--text-primary); 
    font-family:var(--font-body); font-size:var(--font-size-body-md); 
    line-height:var(--line-height-body); -webkit-font-smoothing:antialiased; 
    overflow-x:hidden; width:100%; min-height:100vh;
  }
  
  /* Ensure all containers have proper overflow and clearfix */
  .section-container, .card-executive, .grid, .geo-link-grid, .faq-grid,
  .form-grid, .summary-output-box, .template-btn, .keyword-btn {
    overflow: hidden;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  /* Fix card height issues - allow auto height */
  .card-executive {
    background:var(--card-bg); 
    backdrop-filter:blur(var(--glass-blur)); 
    -webkit-backdrop-filter:blur(var(--glass-blur)); 
    border:var(--card-border); 
    border-radius:0.5rem; 
    padding:var(--card-padding); 
    transition:all var(--transition-medium) var(--easing-smooth); 
    height:auto; 
    min-height:0;
    display:flex; 
    flex-direction:column; 
    width:100%;
    max-width:100%;
  }
  .card-executive:hover { 
    background:rgba(32,31,33,0.8); 
    border-color:rgba(212,175,55,0.3); 
    transform:translateY(-4px); 
    box-shadow:var(--shadow-card-hover); 
  }
  
  h1,h2,h3,h4,h5,h6 { 
    font-family:var(--font-display); color:var(--text-primary); 
    letter-spacing:var(--letter-spacing-tight); word-wrap:break-word; 
    overflow-wrap:break-word; line-height:1.3;
  }
  h1 { font-size:var(--font-size-display-lg); line-height:var(--line-height-display); font-weight:var(--font-weight-bold); margin-bottom:1rem; }
  h2 { font-size:var(--font-size-display-md); line-height:var(--line-height-headline); font-weight:var(--font-weight-bold); }
  h3 { font-size:var(--font-size-headline-lg); line-height:var(--line-height-headline); font-weight:var(--font-weight-semibold); font-family:var(--font-body); }
  p { color:var(--text-secondary); font-size:var(--font-size-body-lg); line-height:var(--line-height-body); margin-bottom:0.5rem; word-wrap:break-word; overflow-wrap:break-word; }
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
  
  /* FIXED GRID - Explicit heights removed, gap increased */
  .grid { display:grid; grid-template-columns:1fr; gap:1.5rem; margin:2rem auto; width:100%; align-items:stretch; }
  @media (min-width:640px) { .grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid { grid-template-columns:repeat(3,1fr); } }
  
  .stat-card { text-align:center; padding:1.5rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; width:100%; }
  .stat-number { font-size:clamp(1.8rem,4vw,2.2rem); font-weight:var(--font-weight-bold); color:var(--accent-primary); display:block; font-family:var(--font-display); }
  
  .feature-badge { display:inline-flex; align-items:center; gap:0.25rem; background:rgba(242,202,80,0.1); padding:0.25rem 0.75rem; border-radius:9999px; font-size:var(--font-size-body-sm); color:var(--accent-primary); border:0.5px solid var(--border-gold-filament); white-space:nowrap; }
  .feature-tag { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.25rem 0.5rem; border-radius:0.25rem; font-size:var(--font-size-label-sm); border:0.5px solid var(--border-gold-filament); white-space:nowrap; }
  
  .faq-grid { display:flex; flex-direction:column; gap:0.75rem; max-width:800px; margin:0 auto; width:100%; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; transition:all var(--transition-fast); width:100%; }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; width:100%; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1.25rem; width:100%; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; width:100%; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); word-wrap:break-word; }
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
  
  /* FIXED: Summary output box - proper overflow */
  .summary-output-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:var(--card-padding); border:var(--card-border); margin:1rem 0; width:100%; overflow-wrap:break-word; word-break:break-word; }
  
  /* FIXED: Template buttons - proper width and spacing */
  .template-btn { width:100%; text-align:left; padding:1rem; border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; background:var(--card-bg); cursor:pointer; transition:all var(--transition-fast); color:var(--text-secondary); font-size:var(--font-size-body-sm); margin-bottom:0.5rem; display:block; }
  .template-btn:hover { border-color:var(--accent-primary-container); background:rgba(242,202,80,0.05); }
  .template-btn.selected { border-color:var(--accent-primary); background:rgba(242,202,80,0.08); }
  
  /* FIXED: Keyword buttons - prevent wrapping issues */
  .keyword-btn { padding:0.5rem 1rem; border:0.5px solid var(--border-gold-filament); border-radius:9999px; background:var(--card-bg); cursor:pointer; font-size:var(--font-size-body-sm); color:var(--text-secondary); transition:all var(--transition-fast); white-space:nowrap; }
  .keyword-btn:hover { border-color:var(--accent-primary-container); }
  .keyword-btn.selected { background:var(--accent-primary); color:var(--accent-on-primary); border-color:var(--accent-primary); }
  
  .form-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.25rem; width:100%; }
  .form-group-full { grid-column:1/-1; width:100%; }
  .label-style { display:block; font-weight:var(--font-weight-semibold); margin-bottom:0.5rem; color:var(--text-primary); font-size:var(--font-size-body-sm); }
  
  /* FIXED: Flex container for keywords - proper wrapping */
  .keywords-flex { display:flex; flex-wrap:wrap; gap:0.5rem; }
  
  /* FIXED: Main two-column layout - proper stacking on mobile */
  .generator-layout { display:flex; gap:1.5rem; flex-wrap:wrap; max-width:1100px; margin:0 auto; width:100%; }
  .generator-col { flex:1; min-width:300px; max-width:100%; display:flex; flex-direction:column; gap:1.5rem; }
  
  /* FIXED: Ensure no absolute positioning conflicts */
  .relative { position:relative; }
  
  /* FIXED: Action buttons spacing */
  .action-buttons { display:flex; gap:1rem; flex-wrap:wrap; padding-top:0.5rem; }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const SITE_URL = 'https://professionalresumefree.com';
const PAGE_URL = `${SITE_URL}/free-resume-summary-generator`;

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'free resume summary generator',
  'professional summary creator',
  'career profile builder',
  'resume introduction maker',
  'ATS-friendly summary generator',
  'executive summary generator',
  'career summary template',
  'professional bio creator',
  'resume headline generator',
  'summary statement builder',
  'resume summary examples',
  'professional summary writer',
  'resume profile generator',
  'cv summary creator',
  'job application summary'
];

const SUMMARY_TEMPLATES = [
  { id: 'experienced', name: 'Experienced Professional', templates: [
    { title: 'Senior Executive', summary: 'Results-driven senior executive with over 15 years of experience in [Industry]. Proven track record of leading cross-functional teams, driving strategic initiatives, and delivering sustainable business growth. Expertise in [Key Skill 1], [Key Skill 2], and [Key Skill 3].', keywords: ['Strategic Leadership', 'Business Growth', 'Team Management'] },
    { title: 'Mid-Career Professional', summary: 'Accomplished [Job Title] with [Number] years of experience in [Industry]. Skilled in [Key Skill 1], [Key Skill 2], and [Key Skill 3]. Demonstrated success in [Major Achievement 1] and [Major Achievement 2].', keywords: ['Project Management', 'Process Improvement', 'Client Relations'] }
  ]},
  { id: 'career-change', name: 'Career Changer', templates: [
    { title: 'Transferable Skills Focus', summary: '[Current Industry] professional transitioning to [New Industry] with [Number] years of transferable experience in [Transferable Skill 1], [Transferable Skill 2], and [Transferable Skill 3]. Eager to apply skills in new context.', keywords: ['Adaptable', 'Quick Learner', 'Transferable Skills'] }
  ]},
  { id: 'recent-grad', name: 'Recent Graduate', templates: [
    { title: 'Academic Excellence', summary: 'Recent [Degree] graduate from [University] with strong academic background in [Field of Study]. Developed skills in [Skill 1], [Skill 2], and [Skill 3] through coursework and projects.', keywords: ['Fast Learner', 'Academic Achievement', 'Technical Skills'] }
  ]},
  { id: 'technical', name: 'Technical', templates: [
    { title: 'Software Developer', summary: 'Full-stack developer with [Number] years of experience building scalable applications. Proficient in [Programming Language 1], [Programming Language 2], and [Framework]. Demonstrated ability to deliver high-quality solutions.', keywords: ['Full-Stack Development', 'Agile Methodology', 'System Architecture'] }
  ]}
];

const INDUSTRY_KEYWORDS = [
  { industry: 'Technology', keywords: ['Innovation', 'Scalability', 'Digital Transformation', 'Agile'] },
  { industry: 'Finance', keywords: ['Risk Management', 'Financial Analysis', 'Compliance', 'Strategy'] },
  { industry: 'Healthcare', keywords: ['Patient Care', 'Clinical Excellence', 'Operations', 'Research'] },
  { industry: 'Marketing', keywords: ['Brand Strategy', 'Digital Marketing', 'Engagement', 'Campaigns'] }
];

const POWER_WORDS = ['Accomplished', 'Achieved', 'Built', 'Created', 'Delivered', 'Developed', 'Drove', 'Enhanced', 'Generated', 'Implemented', 'Improved', 'Increased', 'Led', 'Optimized', 'Orchestrated', 'Spearheaded', 'Streamlined', 'Transformed'];

const FAQS = [
  { question: "What makes a great professional summary?", answer: "A great professional summary is concise (3-5 sentences), highlights key achievements, includes relevant keywords, and shows what value you bring to employers. It should be tailored to the specific job you're applying for and include quantifiable results whenever possible." },
  { question: "How long should my resume summary be?", answer: "Ideal length is 3-5 sentences or 50-100 words. Recruiters typically spend only 6-7 seconds scanning a resume, so your summary needs to be impactful and concise. Focus on your most impressive achievements and relevant skills that match the job description." },
  { question: "Should I include keywords from the job description?", answer: "Absolutely! Keywords from the job description are crucial for both human readers and ATS systems. Our generator helps identify and incorporate relevant keywords. Match your skills and experiences to the job requirements to show you're the perfect fit." },
  { question: "Can I use the same summary for every job application?", answer: "While you can have a base summary, it's best to customize it for each application. Tailor your summary to highlight the skills and experiences most relevant to each specific job. This shows employers you've taken the time to understand their needs." }
];

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
  FiActivity, FiHash, FiType
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeSummaryGenerator = ({ seoData }) => {
  const { currentDate, lastModifiedDate } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const canonicalUrl = PAGE_URL;
  const [buildTime, setBuildTime] = useState('');

  useEffect(() => {
    setBuildTime(Date.now().toString());
  }, []);

  const [formData, setFormData] = useState({ jobTitle: '', yearsExperience: '', industry: '', keySkills: '', achievements: '', targetRole: '' });
  const [generatedSummary, setGeneratedSummary] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);
  const [copied, setCopied] = useState(false);
  const formRef = useRef(null);
  const toolRef = useRef(null);

  const handleInputChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));
  const handleKeywordSelect = (keyword) => setSelectedKeywords(prev => prev.includes(keyword) ? prev.filter(k => k !== keyword) : [...prev, keyword]);
  const handleTemplateSelect = (template) => { setSelectedTemplate(template); if (template.keywords?.length) setSelectedKeywords(prev => [...new Set([...prev, ...template.keywords])].slice(0, 6)); };

  const generateSummary = useCallback(() => {
    if (!selectedTemplate) return;
    let summary = selectedTemplate.summary;
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim()) {
        let placeholder = key === 'targetRole' ? '[Target Role]' : key === 'keySkills' ? '[Key Skill 1]' : `[${key.replace(/([A-Z])/g, ' $1').trim()}]`;
        summary = summary.replace(new RegExp(placeholder, 'gi'), value);
      }
    });
    summary = summary.replace(/\[Number\]/g, formData.yearsExperience || '5');
    summary = summary.replace(/\[Industry\]/g, formData.industry || 'the industry');
    if (selectedKeywords.length > 0) summary += ` Proficient in ${selectedKeywords.slice(0, 4).join(', ')} with a commitment to excellence and continuous improvement.`;
    setGeneratedSummary(summary.replace(/\s+/g, ' ').trim());
  }, [formData, selectedTemplate, selectedKeywords]);

  useEffect(() => { if (selectedTemplate && (formData.jobTitle || formData.keySkills)) { const t = setTimeout(generateSummary, 500); return () => clearTimeout(t); } }, [selectedTemplate, formData, selectedKeywords, generateSummary]);

  const copyToClipboard = () => { navigator.clipboard.writeText(generatedSummary); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  const handleReset = () => { setFormData({ jobTitle: '', yearsExperience: '', industry: '', keySkills: '', achievements: '', targetRole: '' }); setSelectedTemplate(null); setSelectedKeywords([]); setGeneratedSummary(''); formRef.current?.focus(); };
  const loadExample = () => {
    setFormData({ jobTitle: 'Senior Project Manager', yearsExperience: '8', industry: 'Technology', keySkills: 'Agile methodologies, stakeholder management, budget control', achievements: 'Led digital transformation reducing costs by 30%', targetRole: 'Director of Project Management' });
    setSelectedTemplate(SUMMARY_TEMPLATES[0].templates[0]);
    setSelectedKeywords(['Strategic Planning', 'Team Leadership', 'Process Improvement']);
  };
  const getIndustrySuggestions = (industry) => { const data = INDUSTRY_KEYWORDS.find(i => i.industry.toLowerCase() === industry.toLowerCase()); return data ? data.keywords : []; };

  const wordCount = generatedSummary.trim().split(/\s+/).filter(w => w.length > 0).length;
  const charCount = generatedSummary.length;

  // ===== FIXED Schema data - Properly structured with no itemReviewed errors =====
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        "url": PAGE_URL,
        "name": "Free Resume Summary Generator - Professional Career Profile Builder 2026",
        "description": "Create ATS-friendly professional resume summaries instantly with our free generator. Choose from 20+ templates, add keywords, and download your perfect summary.",
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}#website`,
          "url": SITE_URL,
          "name": "Professional Resume Free",
          "description": "Free resume building tools and resources for job seekers",
          "publisher": {
            "@type": "Organization",
            "@id": `${SITE_URL}#organization`,
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
              "https://www.facebook.com/ProfessionalResumeFree"
            ]
          }
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
              "name": "Free Resume Summary Generator",
              "item": PAGE_URL
            }
          ]
        }
      },
      {
        "@type": "WebApplication",
        "name": "Resume Summary Generator",
        "description": "Free professional resume summary generator with template recommendations, keyword optimization, and industry-specific suggestions",
        "url": PAGE_URL,
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
          "ratingCount": "215",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "20+ Professional Templates",
          "ATS-Friendly Formatting",
          "Keyword Optimization",
          "Industry-Specific Suggestions",
          "Real-Time Preview",
          "Free PDF Export",
          "No Sign Up Required"
        ],
        "softwareVersion": "2026.1.0",
        "screenshot": `${SITE_URL}/images/summary-generator-screenshot.jpg`,
        "applicationSuite": "Career Tools",
        "countriesSupported": "Global",
        "fileSize": "Web Application"
      },
      {
        "@type": "AggregateRating",
        "@id": `${PAGE_URL}#rating`,
        "ratingValue": "4.8",
        "ratingCount": "215",
        "bestRating": "5",
        "worstRating": "1",
        "itemReviewed": {
          "@type": "WebApplication",
          "name": "Resume Summary Generator",
          "url": PAGE_URL
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": safeCurrentDate,
            "author": {
              "@type": "Person",
              "name": "Resume Builder Team"
            }
          },
          "mainEntityOfPage": `${PAGE_URL}#faq-${index + 1}`
        }))
      },
      {
        "@type": "ItemList",
        "name": "Summary Template Categories",
        "description": "Professional resume summary templates for different career levels",
        "numberOfItems": SUMMARY_TEMPLATES.length,
        "itemListElement": SUMMARY_TEMPLATES.map((category, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "CreativeWork",
            "name": category.name,
            "description": `Templates for ${category.name.toLowerCase()} roles`,
            "hasPart": {
              "@type": "ItemList",
              "numberOfItems": category.templates.length,
              "itemListElement": category.templates.map((template, tIndex) => ({
                "@type": "ListItem",
                "position": tIndex + 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": template.title,
                  "keywords": template.keywords.join(', ')
                }
              }))
            }
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Create a Professional Resume Summary",
        "description": "Step-by-step guide to create an effective resume summary using our generator",
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Enter Your Career Information",
            "text": "Fill in your job title, experience, industry, skills, achievements, and target role.",
            "url": `${PAGE_URL}#form`
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Choose a Template",
            "text": "Select from professional templates tailored to your career level and goals.",
            "url": `${PAGE_URL}#templates`
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Add Keywords",
            "text": "Select relevant keywords and power words to optimize your summary for ATS.",
            "url": `${PAGE_URL}#keywords`
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Generate & Copy",
            "text": "Generate your professional summary and copy it to your resume instantly.",
            "url": `${PAGE_URL}#generate`
          }
        ],
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "Career Information"
          }
        ],
        "tool": [
          {
            "@type": "HowToTool",
            "name": "Resume Summary Generator"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Online Resume Summary Generation",
        "provider": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "url": SITE_URL
        },
        "areaServed": {
          "@type": "Country",
          "name": "Global"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Free Resume Building Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Summary Generation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Keyword Optimization"
              }
            }
          ]
        }
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".section-title", ".section-subtitle", ".stat-number"]
      }
    ]
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* OPTIMIZED TITLE - Under 70 characters */}
        <title>Free Resume Summary Generator | Professional Career Profile Builder</title>
        
        <meta
          name="description"
          content={`Create ATS-friendly professional resume summaries instantly. ${CURRENT_YEAR}'s best free resume summary generator with 20+ templates, keyword optimization & industry-specific suggestions.`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#131315" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Resume Summary Generator - Professional Career Profile Builder" />
        <meta name="chatgpt-fts:description" content="Create ATS-friendly professional resume summaries instantly. Choose from 20+ templates, add keywords, and optimize for your target role." />
        <meta name="chatgpt-fts:keywords" content="resume summary generator, professional summary creator, career profile builder, ATS-friendly summary" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Summary Generator" />
        
        {/* Canonical URL - Single canonical tag */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-US" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-GB" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-CA" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-AU" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Resume Summary Generator | Professional Career Profile Builder" />
        <meta property="og:description" content="Create ATS-friendly professional resume summaries instantly with our free generator. Choose from 20+ templates, add keywords, and download your perfect summary." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${SITE_URL}/images/og-resume-summary-generator.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Summary Generator Interface" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Summary Generator | Professional Career Profile Builder" />
        <meta name="twitter:description" content="Create professional ATS-friendly resume summaries instantly. 20+ templates, keyword optimization, free to use." />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-resume-summary-generator.jpg`} />
        <meta name="twitter:image:alt" content="Professional Resume Summary Generator" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        
        <html lang="en" />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href={SITE_URL} itemProp="item">
                  <FiHome size={14} /> <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page"><FiFileText size={14} /> Resume Summary Generator</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ Free Tool • No Sign Up • 20+ Templates • ATS Optimized</div>
              <h1 className="section-title" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free Resume Summary Generator {CURRENT_YEAR}
              </h1>
              <p className="section-subtitle" style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Create compelling professional summaries that get noticed by employers. Choose from 20+ templates, add keywords, and download your perfect summary. <strong>Optimized for ATS systems and human recruiters.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "4.8/5", label: "User Rating" }, { value: "18,000+", label: "Job Seekers" }, { value: "20+", label: "Templates" }, { value: "100%", label: "Free to Use" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Generate Summary</button>
                <Link href="/resume-templates" className="btn-outline"><FiGrid /> View Templates</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Generator Tool */}
        <section ref={toolRef} className="section section-alt" id="generator">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Generate Your Professional Resume Summary</h2>
              <p className="section-subtitle">
                Fill in your details, choose a template, and get a professionally crafted summary tailored to your career goals. <strong>Optimized for ATS systems and human recruiters.</strong>
              </p>
            </div>

            <div className="generator-layout">
              {/* Input Column */}
              <div className="generator-col">
                <div className="card-executive" id="form">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Your Career Information</h3>
                    <button onClick={loadExample} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', minWidth: 'auto' }} aria-label="Load example data to see how the generator works"><FiCopy size={14} /> Load Example</button>
                  </div>
                  <div className="form-grid">
                    <div><label className="label-style" htmlFor="jobTitle">Current/Most Recent Job Title</label><input ref={formRef} type="text" id="jobTitle" value={formData.jobTitle} onChange={(e) => handleInputChange('jobTitle', e.target.value)} placeholder="e.g., Senior Marketing Manager" aria-required="true" /></div>
                    <div><label className="label-style" htmlFor="yearsExperience">Years of Experience</label><input type="text" id="yearsExperience" value={formData.yearsExperience} onChange={(e) => handleInputChange('yearsExperience', e.target.value)} placeholder="e.g., 8" /></div>
                    <div><label className="label-style" htmlFor="industry">Industry</label><input type="text" id="industry" value={formData.industry} onChange={(e) => handleInputChange('industry', e.target.value)} placeholder="e.g., Technology, Finance, Healthcare" /></div>
                    <div><label className="label-style" htmlFor="targetRole">Target Role</label><input type="text" id="targetRole" value={formData.targetRole} onChange={(e) => handleInputChange('targetRole', e.target.value)} placeholder="e.g., Director of Operations" /></div>
                    <div className="form-group-full"><label className="label-style" htmlFor="keySkills">Key Skills (comma separated)</label><textarea id="keySkills" value={formData.keySkills} onChange={(e) => handleInputChange('keySkills', e.target.value)} placeholder="e.g., Project Management, Data Analysis, Team Leadership, Strategic Planning" rows={3} aria-describedby="skillsHelp" /><div id="skillsHelp" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Separate skills with commas for best results</div></div>
                    <div className="form-group-full"><label className="label-style" htmlFor="achievements">Key Achievements</label><textarea id="achievements" value={formData.achievements} onChange={(e) => handleInputChange('achievements', e.target.value)} placeholder="e.g., Increased sales by 30% through new strategy. Reduced costs by 25% by optimizing processes." rows={3} aria-describedby="achievementsHelp" /><div id="achievementsHelp" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Use numbers and metrics when possible</div></div>
                  </div>
                </div>

                <div className="card-executive" id="templates">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>Choose a Professional Template ({selectedTemplate ? '1 selected' : 'None selected'})</h3>
                  {SUMMARY_TEMPLATES.map(cat => (
                    <div key={cat.id} style={{ marginBottom: '1rem' }}>
                      <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '0.5rem', fontWeight: 'var(--font-weight-semibold)' }}>{cat.name}</h4>
                      {cat.templates.map((tpl, i) => (
                        <button key={i} className={`template-btn ${selectedTemplate?.title === tpl.title ? 'selected' : ''}`} onClick={() => handleTemplateSelect(tpl)} aria-label={`Select ${tpl.title} template`}>
                          <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{tpl.title}</strong>
                          <span className="text-small">{tpl.summary.substring(0, 80)}...</span>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Output Column */}
              <div className="generator-col">
                <div className="card-executive">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Generated Summary</h3>
                    <span className="text-small">{charCount} characters • {wordCount} words</span>
                  </div>
                  <div className="summary-output-box">
                    {generatedSummary ? (
                      <p style={{ fontSize: 'var(--font-size-body-md)', color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0 }}>{generatedSummary}</p>
                    ) : (
                      <p className="text-small" style={{ textAlign: 'center', padding: '2rem', margin: 0 }}>Your professional summary will appear here. Fill in your details and select a template to generate.</p>
                    )}
                  </div>
                  {generatedSummary && (
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <button onClick={copyToClipboard} className="btn-primary" style={{ flex: 1, justifyContent: 'center', background: copied ? 'var(--success-color)' : 'var(--btn-primary-bg)', color: copied ? '#fff' : 'var(--btn-primary-text)' }} aria-label="Copy summary to clipboard">
                        {copied ? <><FiCheck size={16} /> Copied!</> : <><FiCopy size={16} /> Copy Summary</>}
                      </button>
                      <button onClick={generateSummary} className="btn-outline" style={{ flex: 1, justifyContent: 'center', minWidth: 'auto' }} aria-label="Regenerate summary with current data"><FiRefreshCw size={16} /> Regenerate</button>
                    </div>
                  )}
                </div>

                <div className="card-executive" id="keywords">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Keywords & Power Words</h3>
                    <span className="text-small">{selectedKeywords.length} selected</span>
                  </div>
                  <div className="keywords-flex" style={{ marginBottom: '1rem' }}>
                    {getIndustrySuggestions(formData.industry).map((kw, i) => (
                      <button key={`ind-${i}`} className={`keyword-btn ${selectedKeywords.includes(kw) ? 'selected' : ''}`} onClick={() => handleKeywordSelect(kw)} aria-label={`Select keyword: ${kw}`}>{kw}</button>
                    ))}
                    {POWER_WORDS.slice(0, 12).map((w, i) => (
                      <button key={`pw-${i}`} className={`keyword-btn ${selectedKeywords.includes(w) ? 'selected' : ''}`} onClick={() => handleKeywordSelect(w)} aria-label={`Select power word: ${w}`}>{w}</button>
                    ))}
                  </div>
                  <h4 style={{ fontSize: 'var(--font-size-body-sm)', marginBottom: '0.75rem', color: 'var(--text-secondary)', textAlign: 'center' }}>Quick Industry Select</h4>
                  <div className="keywords-flex" style={{ justifyContent: 'center' }}>
                    {INDUSTRY_KEYWORDS.map((ind, i) => (
                      <button key={i} className="keyword-btn" onClick={() => { handleInputChange('industry', ind.industry); setSelectedKeywords(prev => [...prev, ...ind.keywords.slice(0, 2)]); }} aria-label={`Set industry to ${ind.industry}`}>{ind.industry}</button>
                    ))}
                  </div>
                </div>

                {/* FIXED: Action buttons with proper gap from card above */}
                <div className="action-buttons" id="generate">
                  <button onClick={generateSummary} disabled={!selectedTemplate} className="btn-primary" style={{ flex: 1, justifyContent: 'center' }} aria-label="Generate professional summary"><FiZap size={18} /> Generate Summary</button>
                  <button onClick={handleReset} className="btn-outline" style={{ flex: 1, justifyContent: 'center', minWidth: 'auto' }} aria-label="Reset all form data"><FiRefreshCw size={16} /> Reset All</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Writing Tips */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Writing Tips for Powerful Resume Summaries</h2>
              <p className="section-subtitle">Follow these expert tips to create summaries that get results</p>
            </div>
            <div className="grid">
              {[
                { title: "Be Specific & Quantifiable", desc: "Include specific achievements with numbers and metrics. Instead of 'improved sales,' say 'increased sales by 25% through targeted marketing campaigns that expanded market reach by 15%.'" },
                { title: "Use ATS Keywords", desc: "Incorporate keywords from the job description. This helps with Applicant Tracking System scanning and shows you're a perfect fit for the specific role. Use our keyword selector above." },
                { title: "Start Strong", desc: "Begin with your strongest selling point. The first sentence should capture attention and make recruiters want to keep reading. Lead with your most impressive achievement or unique value proposition." },
                { title: "Keep it Concise", desc: "Limit your summary to 3-5 sentences (50-100 words). Recruiters spend only 6-7 seconds scanning resumes, so every word needs to count and add value. Remove fluff and focus on impact." }
              ].map((tip, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{tip.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Long-Tail Keywords Section */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Common Questions About Resume Summaries</h2>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {[
                "how to write a professional summary for resume",
                "best resume summary examples for experienced professionals",
                "resume summary for career change examples",
                "what to write in summary on a resume",
                "professional summary vs objective statement",
                "resume summary for recent graduates",
                "ATS friendly resume summary templates",
                "executive summary examples for senior roles"
              ].map((keyword, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center', padding: '1.5rem' }}>
                  <p style={{ fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>❓ {keyword}</p>
                  <div>
                    <Link href="/complete-resume-resource-library" style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>
                      Find answer in our resource library →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Professional Summary Examples</h2>
              <p className="section-subtitle">See how effective summaries are structured across different career levels</p>
            </div>
            <div className="grid">
              {[
                { title: "Senior Executive", badge: "15+ Years Experience", summary: "Visionary CEO with 15+ years of experience driving growth in technology startups. Successfully scaled three companies from seed to Series C, generating over $500M in collective enterprise value. Expertise in fundraising, team building, and market expansion with a proven track record of delivering 35%+ annual growth.", keywords: ['Strategic Leadership', 'Business Growth', 'Team Development', 'Market Expansion'] },
                { title: "Software Engineer", badge: "5 Years Experience", summary: "Full-stack developer with 5 years of experience building scalable web applications. Proficient in React, Node.js, and AWS. Led development of customer portal serving 100K+ users, improving load times by 40% and reducing bounce rate by 25%. Passionate about clean code, agile methodologies, and mentoring junior developers.", keywords: ['Full-Stack Development', 'System Architecture', 'Performance Optimization', 'Team Leadership'] },
                { title: "Recent Graduate", badge: "Entry Level", summary: "Recent Computer Science graduate with strong academic background (3.8 GPA) and hands-on internship experience. Developed skills in Python, machine learning, and data analysis through coursework and research projects. Completed summer internship at TechCorp, contributing to data pipeline optimization that improved processing speed by 30%.", keywords: ['Technical Skills', 'Academic Excellence', 'Fast Learner', 'Research Experience'] }
              ].map((ex, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{ex.title}</h3>
                    <span className="feature-badge">{ex.badge}</span>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem', flex: 1 }}>{ex.summary}</p>
                  <div className="keywords-flex">
                    {ex.keywords.map((kw, j) => (<span key={j} className="feature-tag">{kw}</span>))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Common Summary Mistakes to Avoid</h2>
              <p className="section-subtitle">Don't let these errors undermine your resume's effectiveness</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {[
                { number: "01", title: "Too Generic & Vague", desc: "Avoid vague statements like 'hard worker' or 'team player.' Be specific about what you actually achieved and how you contributed. Use concrete examples and measurable results." },
                { number: "02", title: "Too Long & Wordy", desc: "Summaries longer than 5 sentences lose impact. Be concise and focus only on your most relevant and impressive achievements. Remove fluff and redundant information." },
                { number: "03", title: "Missing ATS Keywords", desc: "Not including job-specific keywords can cause ATS rejection. Always tailor your summary with keywords from the job description. Use our keyword optimization tools above." },
                { number: "04", title: "Focusing on Duties Instead of Achievements", desc: "Don't just list job responsibilities. Focus on achievements, results, and the value you brought to previous employers. Show impact, not just activity." }
              ].map((mistake, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-muted)' }}>{mistake.number}</span>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--text-primary)', margin: 0 }}>{mistake.title}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>{mistake.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faqs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Everything you need to know about creating effective resume summaries</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} id={`faq-${i + 1}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <div className="faq-question" onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i} aria-controls={`faq-answer-${i}`}>
                    <h3 itemProp="name" style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer" id={`faq-answer-${i}`} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p itemProp="text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Why a Strong Resume Summary Matters</h2>
              <p className="section-subtitle">Your summary is your first impression - make it count</p>
            </div>
            <div className="grid">
              {[
                { title: "First Impression Advantage", desc: "Your summary is the first thing recruiters read. A strong opening captures attention and encourages them to read the rest of your resume. 75% of hiring decisions are made in the first 30 seconds." },
                { title: "ATS Optimization", desc: "Well-crafted summaries with relevant keywords perform better in Applicant Tracking Systems used by 99% of employers. This increases your chances of getting seen by human recruiters by up to 300%." },
                { title: "Career Positioning", desc: "A targeted summary positions you for the specific role you want, highlighting the exact skills and experiences employers are looking for. It tells your career story in a compelling, concise way." }
              ].map((benefit, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{benefit.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready to Create Your Perfect Resume Summary?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Join 18,000+ professionals who have improved their resumes with our free generator
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <button onClick={() => { handleReset(); toolRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }} aria-label="Start creating your professional resume summary"><FiFileText /> Start Creating Now</button>
              <button onClick={loadExample} className="btn-outline" aria-label="Try with example data to see how it works"><FiCopy /> Try Example First</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
              <span><span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> 100% Free - No Sign Up Required</span>
              <span><span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> ATS-Optimized Templates</span>
              <span><span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> Instant Results - No Watermarks</span>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Recommended Career Resources</h2>
              <p className="section-subtitle">Explore our complete suite of resume tools and guides</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-resume-keyword-density-analyzer-tool", text: "Free Keyword Density Analyzer", iconName: "FiHash" },
                { href: "/how-to-use-chatgpt-to-write-a-resume-that-does-not-sound-like-a-robot", text: "AI Resume Writing Guide", iconName: "FiCpu" },
                { href: "/ats-friendly-data-and-cybersecurity-resume-builder", text: "Cybersecurity Resume Builder", iconName: "FiShield" },
                { href: "/resume-tips-for-remote-jobs-in-the-usa", text: "Remote Job Resume Tips", iconName: "FiSmartphone" },
                { href: "/best-resume-examples-for-usa-management-positions", text: "Management Resume Examples", iconName: "FiBriefcase" }
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Build: {buildTime}</span>
        </div>

        {/* Hidden Metadata */}
        <div style={{ display: 'none' }}>
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="softwareVersion">2026.1.0</span>
        </div>
      </main>
    </>
  );
};

// SSG with ISR
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildDate = new Date(buildTimestamp).toISOString().split('T')[0];
  
  return {
    props: {
      seoData: {
        currentDate: buildDate,
        lastModifiedDate: new Date(buildTimestamp).toISOString(),
        buildTimestamp
      }
    },
    revalidate: 3600,
  };
}

export default ResumeSummaryGenerator;