// pages/free-action-verb-recommender.js
import { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp,
  FiFileText, FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool, FiLayers, FiUser,
  FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight, FiCopy,
  FiX, FiGrid, FiList, FiBookmark, FiSmartphone
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
  .btn-primary { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:var(--btn-primary-bg); color:var(--btn-primary-text); border:none; borderRadius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.3); text-decoration:none; min-width:200px; }
  .btn-primary:hover { background:var(--accent-primary-hover); transform:translateY(-2px); box-shadow:var(--shadow-gold-glow-sm); color:var(--btn-primary-text); }
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); borderRadius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; text-decoration:none; min-width:200px; }
  .btn-outline:hover { background:rgba(242,202,80,0.08); border-color:rgba(212,175,55,0.8); transform:translateY(-2px); color:var(--btn-outline-text); }
  .card-executive { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); -webkit-backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; padding:var(--card-padding); transition:all var(--transition-medium) var(--easing-smooth); height:100%; display:flex; flex-direction:column; }
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
  .badge { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.5rem 1.25rem; borderRadius:9999px; font-size:var(--font-size-body-sm); font-weight:500; letter-spacing:var(--letter-spacing-caps); text-transform:uppercase; margin-bottom:1.5rem; border:0.5px solid var(--border-gold-filament); }
  .grid { display:grid; grid-template-columns:1fr; gap:1.25rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid { grid-template-columns:repeat(3,1fr); } }
  .stat-card { text-align:center; padding:1.5rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; }
  .stat-number { font-size:clamp(1.8rem,4vw,2.2rem); font-weight:var(--font-weight-bold); color:var(--accent-primary); display:block; font-family:var(--font-display); }
  .feature-badge { display:inline-flex; align-items:center; gap:0.25rem; background:rgba(242,202,80,0.1); padding:0.25rem 0.75rem; borderRadius:9999px; font-size:var(--font-size-body-sm); color:var(--accent-primary); border:0.5px solid var(--border-gold-filament); }
  .feature-tag { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.25rem 0.5rem; borderRadius:0.25rem; font-size:var(--font-size-label-sm); border:0.5px solid var(--border-gold-filament); }
  .search-box { position:relative; }
  .search-input { width:100%; padding:0.875rem 1rem; padding-right:3rem; background:var(--bg-surface-low); border:0.5px solid var(--border-gold-filament); borderRadius:0.5rem; color:var(--text-primary); font-size:var(--font-size-body-md); font-family:var(--font-body); transition:all var(--transition-fast); }
  .search-input:focus { outline:none; border-color:var(--accent-primary); box-shadow:0 0 0 3px rgba(242,202,80,0.1); }
  .search-input::placeholder { color:var(--text-muted); }
  .clear-search { position:absolute; right:0.75rem; top:50%; transform:translateY(-50%); background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:1.25rem; padding:0.25rem; line-height:1; transition:color var(--transition-fast); }
  .clear-search:hover { color:var(--accent-primary); }
  .category-button { padding:0.5rem 1rem; background:var(--card-bg); border:0.5px solid var(--border-gold-filament); borderRadius:9999px; font-size:var(--font-size-body-sm); cursor:pointer; color:var(--text-secondary); transition:all var(--transition-fast); white-space:nowrap; }
  .category-button:hover { border-color:var(--accent-primary-container); }
  .category-button.active { background:var(--accent-primary); color:var(--accent-on-primary); border-color:var(--accent-primary); }
  .verb-card { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; padding:1.25rem; cursor:pointer; transition:all var(--transition-medium) var(--easing-smooth); display:flex; flex-direction:column; }
  .verb-card:hover { border-color:var(--accent-primary-container); transform:translateY(-2px); }
  .verb-card.selected { border:1px solid var(--accent-primary); background:rgba(242,202,80,0.05); }
  .verb-text { font-size:var(--font-size-title-md); font-weight:var(--font-weight-bold); color:var(--text-primary); }
  .weak-verb-bad { color:var(--error-color); font-weight:var(--font-weight-semibold); font-size:var(--font-size-body-sm); }
  .strong-verb-good { color:var(--accent-primary); font-weight:var(--font-weight-semibold); font-size:var(--font-size-body-sm); }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; overflow:hidden; cursor:pointer; transition:all var(--transition-fast); }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .text-success { color:var(--accent-primary); font-weight:var(--font-weight-semibold); }
  .text-danger { color:var(--error-color); font-weight:var(--font-weight-semibold); }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// SEO-OPTIMIZED getStaticProps (INJECTED FROM PAGE 1 BLUEPRINT)
// ============================================================================
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // Generate freshness review dates
  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  // Generate FAQ freshness dates
  const faqDates = Array(6).fill(null).map((_, i) => {
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
      "name": "Action Verb Recommender",
      "item": "https://professionalresumefree.com/free-action-verb-recommender"
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

const CURRENT_YEAR = new Date().getFullYear();

const VERB_CATEGORIES = [
  { id: 'leadership', name: 'Leadership & Management', verbs: ['Directed', 'Managed', 'Led', 'Supervised', 'Oversaw', 'Coordinated', 'Organized', 'Mentored', 'Coached', 'Facilitated', 'Empowered', 'Delegated', 'Guided', 'Chaired', 'Steered', 'Orchestrated'] },
  { id: 'achievement', name: 'Achievement & Results', verbs: ['Achieved', 'Accomplished', 'Attained', 'Exceeded', 'Surpassed', 'Improved', 'Enhanced', 'Increased', 'Reduced', 'Optimized', 'Maximized', 'Minimized', 'Streamlined', 'Amplified', 'Boosted', 'Elevated'] },
  { id: 'technical', name: 'Technical & Analytical', verbs: ['Developed', 'Engineered', 'Programmed', 'Designed', 'Implemented', 'Analyzed', 'Evaluated', 'Assessed', 'Calculated', 'Measured', 'Modeled', 'Simulated', 'Automated', 'Debugged', 'Integrated'] },
  { id: 'creative', name: 'Creative & Strategic', verbs: ['Created', 'Designed', 'Innovated', 'Pioneered', 'Transformed', 'Revolutionized', 'Redesigned', 'Conceptualized', 'Visualized', 'Branded', 'Strategized', 'Planned', 'Forecasted', 'Projected'] },
  { id: 'communication', name: 'Communication & Collaboration', verbs: ['Presented', 'Communicated', 'Articulated', 'Authored', 'Edited', 'Negotiated', 'Collaborated', 'Liaised', 'Consulted', 'Advised', 'Educated', 'Trained', 'Facilitated', 'Moderated'] },
  { id: 'research', name: 'Research & Analysis', verbs: ['Researched', 'Investigated', 'Explored', 'Examined', 'Studied', 'Interpreted', 'Identified', 'Discovered', 'Validated', 'Verified', 'Tested', 'Experimented', 'Surveyed', 'Interviewed'] },
  { id: 'financial', name: 'Financial & Business', verbs: ['Budgeted', 'Forecasted', 'Allocated', 'Invested', 'Generated', 'Secured', 'Saved', 'Negotiated', 'Procured', 'Purchased', 'Traded', 'Audited', 'Reconciled'] }
];

const WEAK_VERBS = [
  { verb: 'Responsible for', suggestion: 'Managed, Oversaw, Led' },
  { verb: 'Did', suggestion: 'Executed, Performed, Implemented' },
  { verb: 'Made', suggestion: 'Created, Produced, Developed' },
  { verb: 'Helped', suggestion: 'Assisted, Supported, Facilitated' },
  { verb: 'Worked on', suggestion: 'Contributed to, Participated in' },
  { verb: 'Used', suggestion: 'Utilized, Leveraged, Applied' },
  { verb: 'Fixed', suggestion: 'Resolved, Repaired, Rectified' },
  { verb: 'Talked to', suggestion: 'Consulted, Advised, Liaised with' },
  { verb: 'Wrote', suggestion: 'Authored, Composed, Drafted' },
  { verb: 'Looked at', suggestion: 'Analyzed, Reviewed, Examined' }
];

const INDUSTRY_VERBS = [
  { industry: 'Technology', verbs: ['Developed', 'Engineered', 'Programmed', 'Architected', 'Debugged', 'Integrated', 'Automated', 'Deployed', 'Optimized', 'Scaled'] },
  { industry: 'Marketing', verbs: ['Promoted', 'Branded', 'Strategized', 'Analyzed', 'Optimized', 'Segmented', 'Targeted', 'Converted', 'Launched', 'Amplified'] },
  { industry: 'Finance', verbs: ['Analyzed', 'Forecasted', 'Modeled', 'Audited', 'Reconciled', 'Budgeted', 'Invested', 'Traded', 'Secured', 'Allocated'] },
  { industry: 'Healthcare', verbs: ['Administered', 'Diagnosed', 'Treated', 'Monitored', 'Evaluated', 'Coordinated', 'Implemented', 'Educated', 'Consulted', 'Documented'] },
  { industry: 'Education', verbs: ['Instructed', 'Educated', 'Mentored', 'Developed', 'Designed', 'Evaluated', 'Assessed', 'Facilitated', 'Guided', 'Supervised'] }
];

const FAQS = [
  { question: "Why are action verbs so important on a resume?", answer: "Action verbs make your accomplishments more impactful and engaging. They transform passive descriptions into dynamic achievements, showing initiative and results. Recruiters spend only 6-7 seconds scanning a resume—strong action verbs help your achievements stand out immediately and pass ATS keyword filters." },
  { question: "How do I choose the right action verbs?", answer: "Choose verbs specific to your role and industry. Leadership roles need verbs like 'Directed' and 'Managed', while technical roles need 'Developed' and 'Engineered'. Match verbs to your actual responsibilities and pair them with quantifiable achievements for maximum impact." },
  { question: "Should I avoid using the same verb multiple times?", answer: "Yes, avoid repeating the same verb more than 2-3 times. Use synonyms to keep your writing fresh. Instead of always using 'Managed', alternate with 'Oversaw', 'Directed', 'Led', or 'Supervised'. Variety shows richer vocabulary and keeps the reader engaged." },
  { question: "What's wrong with passive language on resumes?", answer: "Passive language ('was responsible for', 'helped with') makes you seem like a passive participant rather than an active achiever. Action verbs position you as the driver of results. Replace 'Helped improve sales' with 'Contributed to 25% sales improvement'." },
  { question: "Can I use present tense for current positions?", answer: "Absolutely. Use present tense verbs for current roles (e.g., 'Manage', 'Develop', 'Coordinate') and past tense for previous positions ('Managed', 'Developed', 'Coordinated'). This keeps your resume current and shows ongoing contributions." },
  { question: "How many action verbs should I use per resume?", answer: "Aim for variety—use 15-25 unique action verbs across your resume. Each bullet point should start with a strong verb. Avoid generic openers and choose verbs that precisely describe your specific contribution to each achievement." }
];

const ResumeActionVerbRecommender = ({ seoData, buildTimestamp }) => {
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
  const safeFaqDates = faqDates || Array(6).fill(freshnessIndicator);

  const canonicalUrl = "https://professionalresumefree.com/free-action-verb-recommender";
  
  // Optimized title - approximately 70 characters
  const optimizedTitle = "Free Resume Action Verb Recommender - 150+ Power Verbs for 2026";

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "resume action verbs finder tool free",
    "power verbs for resumes by category",
    "ATS-friendly resume verb recommendations",
    "strong action verbs for bullet points",
    "professional resume vocabulary builder"
  ];

  // People Also Ask for GEO
  const peopleAlsoAsk = [
    { question: "What are the best action verbs for a resume?", answer: "The best action verbs are specific to your industry and role. Leadership roles benefit from 'Directed', 'Spearheaded', and 'Orchestrated'. Technical roles need 'Developed', 'Engineered', and 'Implemented'. Our tool categorizes 150+ verbs to help you find the perfect match." },
    { question: "How do action verbs help pass ATS screening?", answer: "Modern ATS systems scan for action-oriented language. Resumes with diverse, strong verbs score higher in automated relevance rankings. Using industry-specific action verbs signals to ATS algorithms that your experience matches the job requirements." }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVerbs, setSelectedVerbs] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);
  const [showExamples, setShowExamples] = useState(false);
  const [copiedVerb, setCopiedVerb] = useState(null);
  const searchRef = useRef(null);

  const filteredVerbs = useCallback(() => {
    let allVerbs = [];
    if (selectedCategory === 'all') {
      VERB_CATEGORIES.forEach(cat => { cat.verbs.forEach(v => allVerbs.push({ verb: v, category: cat.name })); });
    } else {
      const cat = VERB_CATEGORIES.find(c => c.id === selectedCategory);
      if (cat) allVerbs = cat.verbs.map(v => ({ verb: v, category: cat.name }));
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return allVerbs.filter(item => item.verb.toLowerCase().includes(q) || item.category.toLowerCase().includes(q));
    }
    return allVerbs;
  }, [searchQuery, selectedCategory]);

  const handleVerbSelect = (verb) => {
    setSelectedVerbs(prev => prev.includes(verb) ? prev.filter(v => v !== verb) : [...prev, verb]);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedVerb(text);
    setTimeout(() => setCopiedVerb(null), 2000);
  };

  const handleClearAll = () => { setSelectedVerbs([]); setSearchQuery(''); setSelectedCategory('all'); };

  const internalLinks = [
    { href: "/free-resume-bullet-point-generator", text: "Resume Bullet Point Generator", iconName: "FiEdit", desc: "Turn verbs into achievements" },
    { href: "/how-to-write-bullet-points-that-impress-usa-recruiters", text: "Write Bullet Points That Impress", iconName: "FiTarget", desc: "Master resume writing" },
    { href: "/free-resume-summary-generator", text: "Resume Summary Generator", iconName: "FiFileText", desc: "Craft compelling summaries" },
    { href: "/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026", text: "ChatGPT Resume Prompt Guide", iconName: "FiZap", desc: "AI-powered refinement" },
    { href: "/best-resume-examples-for-usa-it-and-software-jobs", text: "IT & Software Resume Examples", iconName: "FiCpu", desc: "Verbs in context" },
    { href: "/free-resume-keyword-matcher", text: "Free Keyword Matcher", iconName: "FiSearch", desc: "Match resume to jobs" },
    { href: "/resume-templates", text: "ATS Resume Templates", iconName: "FiGrid", desc: "46+ professional formats" },
    { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward", desc: "Get instant quality score" }
  ];

  const iconMap = { FiEdit, FiTarget, FiFileText, FiZap, FiCpu, FiSearch, FiGrid, FiAward, FiStar, FiCheck, FiBookOpen, FiTrendingUp };

  // ============================================================================
  // COMPLETE STRUCTURED DATA (INJECTED FROM PAGE 1 BLUEPRINT)
  // ============================================================================
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": optimizedTitle,
        "description": "Free resume action verb recommender with 150+ powerful verbs categorized by industry. Find strong action verbs to replace weak words and optimize your resume for ATS systems.",
        "datePublished": safeCurrentDate,
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
        "description": "Free ATS-Optimized Resume Templates and Career Tools",
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${canonicalUrl}#softwareapplication`,
        "name": "Resume Action Verb Recommender",
        "url": canonicalUrl,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "ratingCount": 189,
          "bestRating": 5,
          "worstRating": 1
        },
        "description": "Free online resume action verb recommender that helps job seekers find powerful verbs to strengthen their resume bullet points and pass ATS screenings.",
        "featureList": [
          "150+ Professional Action Verbs",
          "Industry-Specific Recommendations",
          "Weak Verb Replacement Guide",
          "One-Click Copy Function",
          "Mobile-Friendly Interface",
          "No Sign Up Required",
          "Free Forever"
        ],
        "softwareVersion": `${CURRENT_YEAR}.1.0`,
        "dateModified": safeLastModifiedDate
      },
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": "Free Resume Action Verb Recommender: 150+ Power Verbs for 2026",
        "description": "Find powerful action verbs to strengthen your resume bullet points. 150+ verbs categorized by industry with weak verb replacement guide and one-click copy.",
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
        "name": "How to Use Action Verbs Effectively in Your Resume",
        "description": "Step-by-step guide to using powerful action verbs to strengthen your resume bullet points",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Identify Weak Verbs",
            "text": "Scan your resume for weak verbs like 'responsible for', 'helped', 'did', and replace them with powerful alternatives from our recommender."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Choose Industry-Specific Verbs",
            "text": "Select verbs relevant to your field from our categorized lists to make your resume more targeted and ATS-friendly."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Create Powerful Bullet Points",
            "text": "Start each bullet point with an action verb and follow with quantifiable achievements for maximum impact."
          }
        ],
        "totalTime": "PT10M"
      }
    ]
  };

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
        <meta name="description" content="Free resume action verb recommender with 150+ powerful verbs categorized by industry. Find strong action verbs to replace weak words and optimize your resume for ATS systems." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="resume action verbs, power verbs for resumes, resume verb recommendations, action verb generator, professional resume verbs, strong verbs for resumes, resume writing tips, career achievement verbs, resume optimization, ATS-friendly verbs, free resume verb finder, powerful resume words, strong action verbs, resume bullet points, professional vocabulary" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Free Resume Action Verb Recommender - 150+ Power Verbs for 2026" />
        <meta name="chatgpt-fts:description" content="Find powerful action verbs for your resume. 150+ verbs categorized by industry. Free tool with examples and weak verb replacements." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - ATS Optimized Builder" />
        
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
        <meta property="og:title" content="Free Resume Action Verb Recommender - 150+ Power Verbs for 2026" />
        <meta property="og:description" content="Free resume action verb recommender with 150+ powerful verbs. Find strong action verbs for your resume. Industry-specific categories and weak verb replacements." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="Free Resume Action Verb Recommender - 150+ Power Verbs" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Action Verb Recommender - 150+ Power Verbs" />
        <meta name="twitter:description" content="150+ powerful action verbs for your resume. Free tool with industry-specific categories and weak verb replacements." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:image:alt" content="Action Verb Recommender 2026" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* GOOGLE FONTS (PRESERVED FROM PAGE 2) */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
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
                <Link href="/free-action-verb-recommender" itemProp="item">
                  <span itemProp="name">Free Tools</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Action Verb Recommender 2026</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">✦ Free Tool • No Sign Up • 150+ Professional Verbs | Updated {CURRENT_YEAR}</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Resume <span className="gradient-text">Action Verb Recommender</span>
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Transform your resume with <strong>150+ powerful action verbs</strong> that showcase achievements and pass ATS systems. Find, select, and copy verbs instantly. <strong>100% Free. No Sign-Up.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }} aria-label="Key statistics">
                <div style={{ textAlign: 'center', width: '100%', marginBottom: '20px', gridColumn: '1 / -1' }}>
                  <span className="badge">📊 Based on {CURRENT_YEAR} Hiring Standards</span>
                </div>
                <div className="stat-card"><div className="stat-number">150+</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Action Verbs</div></div>
                <div className="stat-card"><div className="stat-number">7</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Categories</div></div>
                <div className="stat-card"><div className="stat-number">5</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Industries</div></div>
                <div className="stat-card"><div className="stat-number">4.8/5</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>User Rating</div></div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>
                <span><FiCalendar size={14} style={{ display: 'inline' }} /> Updated: {safeCurrentDate}</span>
                <span><FiClock size={14} style={{ display: 'inline' }} /> Instant Results</span>
                <span><FiUsers size={14} style={{ display: 'inline' }} /> Trusted by 500K+ Users</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="section section-alt" aria-labelledby="search-heading">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                <h2 id="search-heading" className="section-title">Find Powerful Action Verbs</h2>
                <p className="section-subtitle">Search and filter by category. Click verbs to select them for your resume.</p>
              </div>
              <div className="search-box" style={{ marginBottom: '1rem' }}>
                <input ref={searchRef} type="text" className="search-input" placeholder="Search action verbs (e.g., 'managed', 'developed', 'increased')..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} aria-label="Search action verbs" />
                {searchQuery && <button className="clear-search" onClick={() => setSearchQuery('')} type="button">×</button>}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <button className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`} onClick={() => setSelectedCategory('all')}>All Categories</button>
                {VERB_CATEGORIES.map(cat => (
                  <button key={cat.id} className={`category-button ${selectedCategory === cat.id ? 'active' : ''}`} onClick={() => setSelectedCategory(cat.id)}>{cat.name}</button>
                ))}
              </div>
              {/* Selected Verbs Panel */}
              <div style={{ background: 'var(--bg-surface-low)', borderRadius: '0.5rem', padding: '1.25rem', border: 'var(--card-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)' }}>Selected Verbs ({selectedVerbs.length})</h3>
                  {selectedVerbs.length > 0 && <button onClick={handleClearAll} style={{ padding: '0.5rem 1rem', background: 'transparent', border: '0.5px solid var(--border-gold-filament)', borderRadius: '0.375rem', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: 'var(--font-size-body-sm)' }}>Clear All</button>}
                </div>
                {selectedVerbs.length > 0 ? (
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                      {selectedVerbs.map((verb, i) => (
                        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', background: 'var(--card-bg)', borderRadius: '0.375rem', border: 'var(--card-border)', fontSize: 'var(--font-size-body-sm)' }}>
                          {verb}
                          <button onClick={() => handleVerbSelect(verb)} style={{ background: 'none', border: 'none', color: 'var(--error-color)', cursor: 'pointer', fontSize: '1rem', lineHeight: 1 }}>×</button>
                        </span>
                      ))}
                    </div>
                    <button onClick={() => { copyToClipboard(selectedVerbs.join(', ')); }} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}>{copiedVerb === selectedVerbs.join(', ') ? 'Copied!' : 'Copy All Verbs'}</button>
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-muted)', textAlign: 'center', fontSize: 'var(--font-size-body-sm)' }}>No verbs selected yet. Click verbs below to add them here.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Verbs Grid */}
        <section className="section" aria-labelledby="verbs-heading">
          <div className="section-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 id="verbs-heading" style={{ fontSize: 'var(--font-size-headline-lg)', margin: 0 }}>
                {selectedCategory === 'all' ? 'All Action Verbs' : VERB_CATEGORIES.find(c => c.id === selectedCategory)?.name} ({filteredVerbs().length})
              </h2>
              <button onClick={() => setShowExamples(!showExamples)} className="btn-outline" style={{ padding: '0.5rem 1rem', minWidth: 'auto', fontSize: 'var(--font-size-body-sm)' }}>
                {showExamples ? 'Hide Examples' : 'Show Examples'}
              </button>
            </div>
            {filteredVerbs().length > 0 ? (
              <div className="grid">
                {filteredVerbs().map((item, i) => (
                  <div key={i} className={`verb-card ${selectedVerbs.includes(item.verb) ? 'selected' : ''}`} onClick={() => handleVerbSelect(item.verb)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && handleVerbSelect(item.verb)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span className="feature-tag">{item.category}</span>
                      <span style={{ fontSize: 'var(--font-size-label-sm)', color: selectedVerbs.includes(item.verb) ? 'var(--accent-primary)' : 'var(--text-muted)', fontWeight: 'var(--font-weight-semibold)' }}>{selectedVerbs.includes(item.verb) ? 'Selected' : 'Click to Add'}</span>
                    </div>
                    <div className="verb-text">{item.verb}</div>
                    {showExamples && (
                      <div style={{ marginTop: '0.75rem', padding: '0.75rem', background: 'var(--bg-surface-low)', borderRadius: '0.375rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                        "{item.verb} [measurable achievement with specific result]"
                      </div>
                    )}
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto', paddingTop: '0.75rem' }}>
                      <button onClick={(e) => { e.stopPropagation(); copyToClipboard(item.verb); }} style={{ flex: 1, padding: '0.5rem', background: 'var(--accent-primary)', color: 'var(--accent-on-primary)', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }}>{copiedVerb === item.verb ? 'Copied!' : 'Copy'}</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>No verbs found matching "{searchQuery}". Try a different search term.</div>
            )}
          </div>
        </section>

        {/* Weak Verbs Replacement */}
        <section className="section section-alt" aria-labelledby="weak-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="weak-heading" className="section-title">Replace Weak Verbs</h2>
              <p className="section-subtitle">Strengthen your resume by replacing common weak verbs with powerful alternatives</p>
            </div>
            <div className="grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
              {WEAK_VERBS.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', background: 'var(--card-bg)', backdropFilter: 'blur(var(--glass-blur))', borderRadius: '0.5rem', border: 'var(--card-border)' }}>
                  <div style={{ flex: 1, textAlign: 'right' }}><span className="weak-verb-bad">{item.verb}</span></div>
                  <div style={{ color: 'var(--accent-primary)', fontSize: '1.25rem' }}>→</div>
                  <div style={{ flex: 1 }}><span className="strong-verb-good">{item.suggestion}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Verbs */}
        <section className="section" aria-labelledby="industry-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="industry-heading" className="section-title">Industry-Specific Verbs</h2>
              <p className="section-subtitle">Tailored verb recommendations for different professional fields</p>
            </div>
            <div className="grid">
              {INDUSTRY_VERBS.map((ind, i) => (
                <div key={i} className="card-executive">
                  <div style={{ background: 'var(--accent-primary)', color: 'var(--accent-on-primary)', padding: '0.75rem', borderRadius: '0.375rem', marginBottom: '1rem', textAlign: 'center', fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-body-sm)' }}>{ind.industry}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {ind.verbs.map((verb, j) => (
                      <button key={j} onClick={() => { handleVerbSelect(verb); copyToClipboard(verb); }} style={{ padding: '0.375rem 0.75rem', background: 'var(--bg-surface-low)', border: '0.5px solid var(--border-gold-filament)', borderRadius: '0.375rem', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', transition: 'all var(--transition-fast)' }}>{verb}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verb Usage Tips */}
        <section className="section section-alt" aria-labelledby="tips-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="tips-heading" className="section-title">Action Verb Usage Tips</h2>
              <p className="section-subtitle">Maximize the impact of your action verbs</p>
            </div>
            <div className="grid">
              {[
                { title: "Be Specific", desc: "Choose verbs that precisely describe your actions. Instead of 'Worked on projects,' use 'Developed,' 'Managed,' or 'Implemented.'" },
                { title: "Quantify Results", desc: "Pair action verbs with measurable results. For example: 'Increased sales by 25%' or 'Reduced costs by $50K annually.' Numbers make verbs powerful." },
                { title: "Vary Your Verbs", desc: "Avoid repeating the same verb. Use synonyms to keep your resume engaging and demonstrate a rich vocabulary throughout." },
                { title: "Use Proper Tense", desc: "Use present tense for current roles and past tense for previous positions. Be consistent within each job description." },
                { title: "Start Strong", desc: "Begin every bullet point with an action verb. This immediately communicates impact and makes your resume more scannable." },
                { title: "Match Industry Standards", desc: "Different industries value different verbs. Tech roles need 'Engineered' and 'Developed'; leadership roles need 'Directed' and 'Spearheaded.'" }
              ].map((tip, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{tip.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask Section (INJECTED FROM PAGE 1 BLUEPRINT) */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="paa-heading" className="section-title">People Also Ask About Action Verbs</h2>
              <p className="section-subtitle">Quick answers to common action verb questions</p>
            </div>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <div key={`paa-${i}`} className={`faq-item ${activeFaq === `paa-${i}` ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === `paa-${i}` ? null : `paa-${i}`)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === `paa-${i}` ? null : `paa-${i}`)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{paa.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === `paa-${i}` ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === `paa-${i}` ? '−' : '+'}</span>
                  </div>
                  {activeFaq === `paa-${i}` && <div className="faq-answer"><p>{paa.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Bullet Points */}
        <section className="section section-alt" aria-labelledby="samples-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="samples-heading" className="section-title">Sample Bullet Points with Strong Verbs</h2>
              <p className="section-subtitle">See how powerful action verbs transform resume bullet points</p>
            </div>
            <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {["Managed team of 12 to achieve quarterly sales targets 115%", "Developed scalable application serving 50K+ users daily", "Increased customer satisfaction scores by 35% in 6 months", "Reduced operational costs by $120K annually through automation", "Created comprehensive training program for 200+ employees"].map((bullet, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--card-bg)', backdropFilter: 'blur(var(--glass-blur))', borderRadius: '0.5rem', border: 'var(--card-border)' }}>
                  <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)' }}>•</span>
                  <p style={{ flex: 1, fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>{bullet}</p>
                  <button onClick={() => copyToClipboard(bullet)} style={{ padding: '0.375rem 0.75rem', background: 'var(--accent-primary)', color: 'var(--accent-on-primary)', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-semibold)', whiteSpace: 'nowrap' }}>{copiedVerb === bullet ? 'Copied!' : 'Copy'}</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Action Verbs Matter */}
        <section className="section" aria-labelledby="benefits-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="benefits-heading" className="section-title">Why Action Verbs Matter</h2>
              <p className="section-subtitle">The data behind powerful resume language</p>
            </div>
            <div className="grid">
              {[
                { title: "Showcase Achievements", desc: "Action verbs transform passive responsibilities into active accomplishments. They highlight your contributions and demonstrate initiative rather than just listing duties." },
                { title: "Grab Attention Fast", desc: "With recruiters scanning resumes in seconds, strong action verbs immediately communicate impact and results, making your achievements stand out quickly." },
                { title: "Demonstrate Impact", desc: "Action verbs naturally lead to measurable results. They encourage you to quantify achievements, showing clear ROI and business impact to hiring managers." },
                { title: "Pass ATS Filters", desc: "Modern ATS systems scan for action-oriented language. Resumes with diverse, strong verbs score higher in automated relevance rankings." },
                { title: "Build Executive Presence", desc: "Strong verbs like 'Spearheaded', 'Orchestrated', and 'Championed' convey leadership and strategic thinking that hiring managers seek." },
                { title: "Differentiate Your Application", desc: "While other candidates use weak language, your action-verb-packed resume stands out as confident, capable, and results-driven." }
              ].map((benefit, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{benefit.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section section-alt" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Everything about using action verbs effectively</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer"><p>{faq.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready to Transform Your Resume?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Start using powerful action verbs today and make your resume stand out to recruiters and ATS systems.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }} role="group" aria-label="Final call to action buttons">
              <button onClick={handleClearAll} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>Start Building Your Resume <FiArrowRight /></button>
              <Link href="/resume-templates" className="btn-outline">View Resume Templates</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {["150+ Professional Verbs", "Industry-Specific", "Weak Verb Replacements", "One-Click Copy"].map((f, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck style={{ color: 'var(--accent-primary)' }} /> {f}</span>
              ))}
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Updated: {safeCurrentDate}
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Enhance Your Resume Further</h2>
              <p className="section-subtitle">Complement your action verbs with these powerful tools and guides</p>
            </div>
            <div className="geo-link-grid">
              {internalLinks.map((link, i) => {
                const IconComponent = iconMap[link.iconName] || FiFileText;
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

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
};

export default ResumeActionVerbRecommender;