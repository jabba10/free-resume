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
  FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool
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
  select { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23f2ca50' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 1rem center; padding-right:2.5rem; }
  select option { background:var(--bg-surface); color:var(--text-primary); }
  .objective-card { background:var(--card-bg); border-radius:0.5rem; padding:var(--card-padding); border:var(--card-border); display:flex; flex-direction:column; gap:1rem; }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const SITE_URL = 'https://professionalresumefree.com';

// SEO Keywords - Injected from Page 1 Blueprint
const SEO_KEYWORDS = [
  'free resume objective generator',
  'ATS-friendly resume objective creator',
  'professional objective statement generator',
  'career objective builder free',
  'resume summary generator 2024',
  'custom resume objective tool',
  'job application objective maker',
  'career level objective generator',
  'privacy-first resume tool',
  'no signup objective generator',
  'instant resume objective creator',
  'professional summary generator',
  'entry level objective statement',
  'senior level resume objective',
  'career change objective generator'
];

const CAREER_LEVELS = ['Entry-Level (0-2 years)', 'Mid-Career (3-7 years)', 'Senior (8+ years)', 'Executive', 'Career Change'];
const KEY_GOALS = [
  'gain professional experience', 'transition into new industry', 'advance to leadership role',
  'drive organizational growth', 'build technical expertise', 'start professional career',
  'learn and develop quickly', 'increase responsibility level', 'specialize in specific field',
  'lead teams and projects', 'mentor and develop others', 'shape company strategy',
  'build new departments', 'achieve executive leadership'
];

const FAQS = [
  { question: "Is the resume objective generator really free with no hidden costs?", answer: "Yes, our resume objective generator is 100% free with no signup required. Generate unlimited professional objective statements tailored to your career level and goals. No credit card needed, no watermarks, completely free forever." },
  { question: "Are these objective statements ATS-friendly and optimized for applicant tracking systems?", answer: "Absolutely. All generated objectives are optimized for Applicant Tracking Systems with proper keywords, professional phrasing, and formatting that passes automated screening used by 99% of Fortune 500 companies." },
  { question: "How many objective options can I generate for different job applications?", answer: "Generate 3 different professional objective statements per customization, each with unique strengths and approaches. All options are ATS-optimized and can be tailored for different applications." },
  { question: "Can I use these objective statements for cover letters and LinkedIn profiles too?", answer: "Yes! These objective statements can be adapted for cover letters by adding specific company details, and for LinkedIn profiles by adjusting the tone. Perfect for all professional platforms." },
  { question: "How do I choose the best objective statement for my specific job application?", answer: "Select the statement that best reflects your career goals, matches the job description keywords, and feels most authentic to your experience. Our tool provides guidance on which option works best for different scenarios." },
  { question: "Are the generated objective statements suitable for career changers and entry-level candidates?", answer: "Yes! We provide specialized objective templates for all career levels including entry-level, mid-career, senior professionals, and career changers. Each is tailored to address specific challenges at that career stage." }
];

const HOW_TO_STEPS = [
  { name: "Select Your Career Level", text: "Choose your current career stage for age-appropriate objective statements that match your experience.", icon: 'FiUser' },
  { name: "Enter Target Job Title", text: "Specify the exact job title you're targeting for customized professional phrasing.", icon: 'FiBriefcase' },
  { name: "Choose Your Industry", text: "Select your industry for sector-specific language and terminology that resonates.", icon: 'FiTarget' },
  { name: "Define Your Key Goal", text: "Select your primary career objective to generate goal-oriented statements.", icon: 'FiFlag' },
  { name: "Generate & Customize", text: "Generate multiple professional options and customize for each application.", icon: 'FiZap' }
];

const REVIEWS = [
  { name: "Jennifer Carter", position: "HR Manager at TechCorp", rating: 5, review: "The objective statements generated are professional and ATS-friendly. Much better than generic templates found online. Our recruiting team sees immediate improvement in candidate quality.", verified: true },
  { name: "Michael Torres", position: "Software Engineer transitioning to Management", rating: 5, review: "As a career changer, the specific templates for my situation were invaluable. Landed 3 interviews in 2 weeks using the generated objectives.", verified: true },
  { name: "Sarah Johnson", position: "Recent Graduate | Business Administration", rating: 5, review: "Perfect for entry-level candidates. The objectives helped me stand out despite limited experience. Got my first job offer using this tool!", verified: true }
];

// Breadcrumb data - Injected from Page 1 Blueprint
const BREADCRUMB_DATA = [
  { name: "Home", item: SITE_URL },
  { name: "Free Tools", item: `${SITE_URL}/free-tools` },
  { name: "Resume Objective Generator", item: `${SITE_URL}/free-resume-objective-generator` }
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
  FiLock, FiSmile, FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool
};

// ============================================================================
// GENERATION HELPERS (simplified)
// ============================================================================
function getEntrySkill(goal) {
  const map = { 'gain professional experience': 'academic knowledge and practical skills', 'transition into new industry': 'adaptable skills and strong work ethic', 'advance to leadership role': 'leadership potential and team collaboration' };
  return map[goal] || 'strong foundational skills and enthusiasm';
}

function getMidExpertise(goal) {
  const map = { 'gain professional experience': 'industry knowledge and practical experience', 'advance to leadership role': 'project leadership and team coordination', 'drive organizational growth': 'business development and market analysis' };
  return map[goal] || 'industry experience and professional skills';
}

function getSeniorGoal(goal) {
  const map = { 'advance to leadership role': 'provide executive leadership and direction', 'drive organizational growth': 'lead business expansion and transformation', 'shape company strategy': 'define and execute organizational strategy' };
  return map[goal] || 'provide strategic leadership and direction';
}

function getTransferableSkills() { return 'project management and stakeholder communication'; }

function generateObjectives(formData) {
  const { careerLevel, jobTitle, industry, keyGoal } = formData;
  const templates = {
    entry: [
      `Motivated ${jobTitle} seeking to launch a professional career in ${industry}. Eager to apply ${getEntrySkill(keyGoal)} while contributing to team success through dedicated effort. Committed to professional growth and delivering value from day one.`,
      `Recent professional ready to begin a ${industry} career as a ${jobTitle}. Focused on acquiring valuable hands-on experience and dedicated to developing expertise through practical application in a dynamic, growth-oriented environment.`,
      `Aspirational ${jobTitle} candidate aiming to enter the ${industry} sector. Bringing strong analytical abilities and a solid work ethic. Seeking to contribute immediately while developing expertise and advancing professionally.`
    ],
    mid: [
      `Experienced ${jobTitle} with 4-6 years in ${industry}, seeking to leverage ${getMidExpertise(keyGoal)} to drive team performance and departmental success. Proven ability to execute projects and improve processes.`,
      `Accomplished ${jobTitle} professional targeting strategic roles in ${industry} where initiative and team development focus can drive improved performance and growth. Expertise in industry practices with track record of delivering results.`,
      `Skilled ${jobTitle} aiming to advance in ${industry} by applying professional competencies to solve business challenges. Demonstrated history of exceeding expectations and delivering results.`
    ],
    senior: [
      `Senior ${jobTitle} leader with 10+ years of ${industry} expertise seeking to ${getSeniorGoal(keyGoal)}. Strategic executive adept at driving initiatives and managing complexity to deliver transformational outcomes.`,
      `Executive-level ${jobTitle} professional targeting ${industry} leadership roles. Visionary in strategic development with demonstrated success in delivering complex solutions and mentoring talent.`,
      `Seasoned ${jobTitle} executive offering deep ${industry} knowledge to enhance organizational capability. Expert in strategic leadership with extensive history of achieving business objectives.`
    ],
    careerchange: [
      `Accomplished professional transitioning into ${industry} as a ${jobTitle}. Bringing transferable skills in ${getTransferableSkills()} to apply proven skills to new industry challenges while rapidly acquiring industry-specific knowledge.`,
      `Strategic career-changer targeting ${jobTitle} roles in ${industry}. Combining years of professional discipline with recent training to contribute effectively while developing new expertise.`,
      `Diverse professional pivoting to ${industry} as a ${jobTitle}. Leveraging unique perspective and cross-functional perspective to contribute innovative approaches to industry challenges.`
    ]
  };
  const careerKey = careerLevel.toLowerCase().includes('entry') ? 'entry' : careerLevel.toLowerCase().includes('mid') ? 'mid' : careerLevel.toLowerCase().includes('senior') ? 'senior' : careerLevel.toLowerCase().includes('executive') ? 'senior' : 'careerchange';
  return (templates[careerKey] || templates.entry).map((template, i) => ({
    template,
    why: "ATS-optimized with professional action verbs and industry-specific keywords for maximum impact with hiring managers and applicant tracking systems.",
    bestFor: i === 0 ? "Best for general applications and broad job searches" : i === 1 ? "Best for growth-oriented roles and career advancement" : "Best for competitive positions and specialized roles"
  }));
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeObjectiveGenerator = ({ seoData, lastModified, buildTimestamp }) => {
  const { currentDate, lastModifiedDate } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || lastModified || new Date().toISOString();
  const canonicalUrl = `${SITE_URL}/free-resume-objective-generator`;
  const pageTitle = `Free Resume Objective Generator – Professional & ATS-Safe ${CURRENT_YEAR} | Get 3x More Interviews`;
  const pageDescription = `Generate targeted, ATS-friendly resume objectives tailored to your career level (${CURRENT_YEAR}). Professional statements that get 3x more interviews. 100% free, no signup required.`;

  const [formData, setFormData] = useState({ careerLevel: '', jobTitle: '', industry: '', keyGoal: '' });
  const [objectives, setObjectives] = useState([]);
  const [isGenerated, setIsGenerated] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  const handleInputChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleGenerate = () => {
    const { careerLevel, jobTitle, industry, keyGoal } = formData;
    if (!careerLevel || !jobTitle || !industry || !keyGoal) { alert('Please fill in all fields to generate professional objective statements'); return; }
    const results = generateObjectives(formData);
    setObjectives(results);
    setIsGenerated(true);
    setTimeout(() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const handleCopy = async (text, index) => {
    try { await navigator.clipboard.writeText(text); setCopiedIndex(index); setTimeout(() => setCopiedIndex(null), 2000); }
    catch { alert('Failed to copy text. Please try again or use Ctrl+C.'); }
  };

  const handleClear = () => { setFormData({ careerLevel: '', jobTitle: '', industry: '', keyGoal: '' }); setObjectives([]); setIsGenerated(false); };

  // Schema Data - Injected from Page 1 Blueprint
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": `Free Resume Objective Generator – Professional & ATS-Safe ${CURRENT_YEAR}`,
        "description": pageDescription,
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          "url": SITE_URL,
          "name": "Professional Resume Free",
          "description": "Free professional resume tools and resources",
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
              "https://www.facebook.com/ProfessionalResumeFree"
            ]
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/og-objective-generator.jpg`,
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": BREADCRUMB_DATA.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.item
          }))
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${canonicalUrl}#software`,
        "name": "Free Resume Objective Generator - ATS Optimized",
        "description": "Professional resume objective generator with ATS-friendly templates for all career levels",
        "url": canonicalUrl,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": `${CURRENT_YEAR}-12-31`
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "reviewCount": 156,
          "bestRating": 5,
          "worstRating": 1
        },
        "featureList": [
          "ATS-Optimized Templates",
          "Career Level Specific",
          "Industry Tailored",
          "Instant Generation",
          "No Sign Up Required",
          "Free Forever"
        ],
        "softwareVersion": `${CURRENT_YEAR}.1.0`,
        "applicationSuite": "Career Tools",
        "countriesSupported": "Global"
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faqpage`,
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": safeCurrentDate,
            "author": {
              "@type": "Person",
              "name": "Career Advisory Team"
            }
          },
          "mainEntityOfPage": `${canonicalUrl}#webpage`
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Generate Professional Resume Objectives",
        "description": "Step-by-step guide to create ATS-friendly resume objective statements",
        "totalTime": "PT3M",
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
          "url": `${canonicalUrl}#step-${index + 1}`,
          "image": `${SITE_URL}/images/step${index + 1}-objective.jpg`
        }))
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".section-title", ".section-subtitle", ".faq-item h3"]
      },
      ...REVIEWS.map((review, index) => ({
        "@type": "Review",
        "@id": `${canonicalUrl}#review-${index + 1}`,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": 5,
          "worstRating": 1
        },
        "author": {
          "@type": "Person",
          "name": review.name
        },
        "reviewBody": review.review,
        "datePublished": safeCurrentDate,
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "Free Resume Objective Generator",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Any",
          "url": canonicalUrl
        }
      }))
    ]
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Primary Meta Tags - Injected from Page 1 Blueprint */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Resume Objective Generator - Professional & ATS-Safe" />
        <meta name="chatgpt-fts:description" content="Generate targeted, ATS-friendly resume objectives tailored to your career level, industry, and goals. 100% free, no signup." />
        <meta name="chatgpt-fts:keywords" content="resume objective generator, professional objective statement, ATS-friendly resume objective" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Objective Generator" />
        
        {/* Freshness Meta Tags */}
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="2 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="theme-color" content="#131315" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph - Injected from Page 1 Blueprint */}
        <meta property="og:title" content={`Free Resume Objective Generator – Professional & ATS-Safe ${CURRENT_YEAR}`} />
        <meta property="og:description" content="Generate professional resume objectives instantly. Tailored to your career level and goals. 100% free, no signup. ATS-optimized for 3x more interviews." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${SITE_URL}/og-objective-generator.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free ATS Resume Objective Generator - Create Professional Objectives" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Card - Injected from Page 1 Blueprint */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Free Resume Objective Generator ${CURRENT_YEAR}`} />
        <meta name="twitter:description" content="Generate professional, ATS-friendly resume objectives tailored to your career level. 100% free, no signup." />
        <meta name="twitter:image" content={`${SITE_URL}/twitter-objective-generator.jpg`} />
        <meta name="twitter:image:alt" content="Free Resume Objective Generator with ATS Templates" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* PWA & Browser Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Hidden SEO Elements */}
      <div style={{display: 'none'}} aria-hidden="true">
        <span itemProp="tool-type">Resume Objective Generator</span>
        <span itemProp="year">{CURRENT_YEAR}</span>
        <span itemProp="last-updated">{safeCurrentDate}</span>
        <span itemProp="dateModified">{safeLastModifiedDate}</span>
        <span itemProp="softwareVersion">{CURRENT_YEAR}.1.0</span>
      </div>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol>
              <li><Link href="/"><FiHome size={14} /> Home</Link></li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li><Link href="/free-resume-tools"><FiTool size={14} /> Free Tools</Link></li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li><span aria-current="page"><FiTarget size={14} /> Resume Objective Generator</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ Free Tool • No Sign Up • ATS Optimized • Updated {safeCurrentDate}</div>
              <h1 style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free Resume <span className="gradient-text">Objective</span> Generator – Professional & ATS-Safe {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Create targeted, compelling objective statements tailored to your career level, industry, and goals. All statements optimized for Applicant Tracking Systems (ATS). <strong>100% free, no signup required.</strong> Used by <strong>250,000+ professionals</strong> to get <strong>3x more interviews</strong>.
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <span className="feature-badge">✓ No Sign Up Required</span>
                <span className="feature-badge">✓ ATS Optimized</span>
                <span className="feature-badge">✓ Free Forever</span>
                <span className="feature-badge">✓ Mobile Friendly</span>
              </div>

              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "250K+", label: "Professionals" }, { value: "3x", label: "More Interviews" }, { value: "4.8/5", label: "User Rating" }, { value: "100%", label: "Private & Secure" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiTarget /> Generate Your Free Objective Statement</button>
                <Link href="/resume-templates" className="btn-outline"><FiFileText /> Explore Resume Templates</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Generator Tool */}
        <section ref={toolRef} className="section section-alt" aria-labelledby="generator-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="generator-title">Customize Your Professional Objective Statement</h2>
              <p className="section-subtitle">Fill in all fields to generate objective statements specifically tailored to your career stage and goals. All statements are <strong>ATS-optimized</strong> and follow <strong>professional hiring standards</strong>. Generate <strong>3 unique options</strong> per customization.</p>
            </div>

            <div className="card-executive" style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div className="form-grid" style={{ marginBottom: '1.5rem' }}>
                <div><label className="label-style">Career Level *</label><select value={formData.careerLevel} onChange={(e) => handleInputChange('careerLevel', e.target.value)} aria-required="true"><option value="">Choose your career level</option>{CAREER_LEVELS.map(l => (<option key={l} value={l}>{l}</option>))}</select></div>
                <div><label className="label-style">Target Job Title *</label><input type="text" value={formData.jobTitle} onChange={(e) => handleInputChange('jobTitle', e.target.value)} placeholder="e.g., Software Engineer, Marketing Manager" aria-required="true" /></div>
                <div><label className="label-style">Industry *</label><input type="text" value={formData.industry} onChange={(e) => handleInputChange('industry', e.target.value)} placeholder="e.g., Technology, Healthcare, Finance" aria-required="true" /></div>
                <div><label className="label-style">Primary Career Goal *</label><select value={formData.keyGoal} onChange={(e) => handleInputChange('keyGoal', e.target.value)} aria-required="true"><option value="">Select your main career goal</option>{KEY_GOALS.map(g => (<option key={g} value={g}>{g}</option>))}</select></div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={handleGenerate} className="btn-primary" aria-label="Generate professional objective statements"><FiZap size={18} /> Generate Objective Statements</button>
                <button onClick={handleClear} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem' }}><FiRefreshCw size={16} /> Clear All</button>
              </div>
              <div style={{ background: 'rgba(242,202,80,0.05)', padding: '1.25rem', borderRadius: '0.5rem', marginTop: '1.5rem', border: '0.5px solid var(--border-gold-filament)' }}>
                <h3 style={{ fontSize: 'var(--font-size-body-sm)', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>Professional Tips for Maximum Impact:</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {["Be specific with job titles - hiring managers scan for exact matches", "Choose accurate career level - statements differ significantly by experience", "Industry specificity helps create more relevant, credible statements", "Review all three options - each is optimized for different scenarios", "Customize further - add specific skills or achievements to personalize"].map((tip, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} /> {tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Results */}
            {isGenerated && (
              <div id="results" style={{ maxWidth: '1000px', margin: '2rem auto 0', animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                <div className="section-header">
                  <h2 className="section-title">Your Custom Objective Statements</h2>
                  <p className="section-subtitle">Professionally crafted for a <strong>{formData.careerLevel}</strong> <strong>{formData.jobTitle}</strong> in <strong>{formData.industry}</strong> aiming to <strong>{formData.keyGoal}</strong></p>
                </div>
                <div className="grid">
                  {objectives.map((obj, i) => (
                    <div key={i} className="objective-card">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <span className="feature-badge">Option {i + 1}</span>
                          <span className="feature-tag">ATS Optimized</span>
                        </div>
                        <span className="text-small" style={{ cursor: 'help' }} title={obj.why}>ℹ️ Why this works</span>
                      </div>
                      <p style={{ fontSize: 'var(--font-size-body-md)', color: 'var(--text-secondary)', flex: 1, lineHeight: '1.7' }}>{obj.template}</p>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span className="feature-tag">✓ Professional Tone</span>
                        <span className="feature-tag">✓ Industry Specific</span>
                      </div>
                      <button onClick={() => handleCopy(obj.template, i)} className={`btn-primary ${copiedIndex === i ? '' : ''}`} style={{ width: '100%', justifyContent: 'center', background: copiedIndex === i ? 'var(--success-color)' : 'var(--btn-primary-bg)', color: copiedIndex === i ? '#fff' : 'var(--btn-primary-text)' }} aria-label={copiedIndex === i ? "Objective copied to clipboard" : "Copy objective to clipboard"}>
                        {copiedIndex === i ? <><FiCheck size={16} /> Copied!</> : <><FiCopy size={16} /> Copy Objective</>}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="card-executive" style={{ marginTop: '1.5rem' }}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem', textAlign: 'center' }}>How to Use These Professional Objectives:</h3>
                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📄</div>
                      <h4 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>Resume Placement</h4>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>Place at the top of your resume, just below contact information, for maximum impact.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
                      <h4 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>Customization</h4>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>Add specific skills, achievements, or company names to make it uniquely yours.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤖</div>
                      <h4 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>ATS Optimization</h4>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>These objectives include keywords and formatting that help pass automated screening systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Long-Tail Keywords Section - GEO Optimization */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Common Questions About Resume Objectives</h2>
              <p className="section-subtitle">Find answers to the most searched objective writing questions</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {[
                "how to write a resume objective with no experience",
                "professional resume objective examples 2026",
                "what to write in objective on a resume",
                "resume objective for career change examples",
                "senior level resume objective statements",
                "ATS friendly resume objective generator",
                "entry level resume objective for fresh graduates",
                "executive resume objective samples"
              ].map((keyword, i) => (
                <div key={i} className="card-executive" style={{ padding: '1.5rem' }}>
                  <p style={{ fontWeight: '600', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>❓ {keyword}</p>
                  <Link href="/complete-resume-resource-library" className="btn-outline" style={{ padding: '0.375rem 0.75rem', fontSize: '0.8rem', minWidth: 'auto', display: 'inline-flex' }}>
                    Find answer in our resource library →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section section-alt" aria-labelledby="how-to-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="how-to-title">How It Works: 5-Step Professional Objective Creation</h2>
              <p className="section-subtitle">Follow these steps to create compelling, ATS-optimized objective statements in minutes</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              {HOW_TO_STEPS.map((step, idx) => {
                const IconComponent = ICON_MAP[step.icon] || FiCheck;
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

        {/* Reviews */}
        <section className="section" aria-labelledby="reviews-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="reviews-title">What Professionals Say About Our Objective Generator</h2>
              <p className="section-subtitle">Trusted by HR managers, career coaches, and professionals at all levels</p>
            </div>
            <div className="grid">
              {REVIEWS.map((review, i) => (
                <div key={i} className="card-executive" style={{ gap: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>{review.name}</strong>
                      <span className="text-small">{review.position}</span>
                      {review.verified && <span style={{ display: 'inline-block', background: 'var(--success-color)', color: '#fff', padding: '2px 8px', borderRadius: '50px', fontSize: '0.7rem', marginTop: '4px' }}>✓ Verified</span>}
                    </div>
                    <span style={{ color: 'var(--accent-primary)', fontSize: 'var(--font-size-body-sm)' }}>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                  </div>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>"{review.review}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt" aria-labelledby="faq-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-title">Frequently Asked Questions About Resume Objectives</h2>
              <p className="section-subtitle">Everything you need to know about creating professional resume objectives in {CURRENT_YEAR}</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '▲' : '▼'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                      <div className="text-small" style={{ marginTop: '0.75rem', color: 'var(--text-muted)' }}>Updated: {safeCurrentDate}</div>
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
              Ready to Transform Your Job Applications?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Join <strong>250,000+ professionals</strong> who've improved their interview rates with our free tools. Generate your professional objective statement now. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <button onClick={() => { handleClear(); toolRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }} aria-label="Start generating professional objective statements"><FiTarget /> Generate Your Free Objective Statement</button>
              <Link href="/resume-templates" className="btn-outline"><FiGrid /> Browse ATS Templates</Link>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> No Sign Up Required</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> 100% Free Forever</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> ATS Optimized</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> Mobile Friendly</span>
            </div>
            <p className="text-small" style={{ marginTop: '2rem' }}>Based on analysis of 250,000+ resumes • Updated for {CURRENT_YEAR} hiring standards</p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Explore More Career Resources</h2>
              <p className="section-subtitle">Complement your objective with these powerful tools and guides</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-resume-keyword-matcher", text: "Free Resume Keyword Matcher", iconName: "FiSearch", desc: "Match resume to job descriptions" },
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield", desc: "Test your resume score" },
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiEdit3", desc: "CAR methodology bullets" },
                { href: "/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds", text: "Professional Summary Guide", iconName: "FiFileText", desc: "Hook recruiters fast" },
                { href: "/resume-templates", text: "ATS Resume Templates", iconName: "FiGrid", desc: "46+ professional formats" }
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • © {CURRENT_YEAR} Professional Resume Free. All rights reserved.</span>
        </div>
      </main>
    </>
  );
};

// SSG with ISR - Injected from Page 1 Blueprint
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const reviewDates = REVIEWS.map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = FAQS.map((_, i) => {
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
      buildTimestamp,
      lastModified: lastModifiedDate
    },
    // Revalidate every hour for fresh content
    revalidate: 3600,
  };
}

export default ResumeObjectiveGenerator;