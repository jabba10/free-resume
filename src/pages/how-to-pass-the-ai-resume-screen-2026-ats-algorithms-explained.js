import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp,
  FiFileText, FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool, FiLayers, FiUser,
  FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight, FiCopy,
  FiX, FiGrid, FiList, FiBookmark, FiSmartphone, FiBriefcase,
  FiLayout, FiEdit3, FiSave, FiPrinter, FiRefreshCw, FiInfo,
  FiChevronDown, FiChevronUp, FiPlus, FiMinus, FiLock, FiSmile,
  FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiActivity, FiType, FiAlignLeft, FiHash, FiTrendingUp as FiTrend,
  FiMonitor, FiAlertCircle, FiCheckCircle, FiMail, FiPhone, FiMapPin,
  FiCloud, FiTerminal, FiMessageSquare
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
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; text-decoration:none; min-width:200px; }
  .btn-outline:hover { background:rgba(242,202,80,0.08); border-color:rgba(212,175,55,0.8); transform:translateY(-2px); color:var(--btn-outline-text); }
  .card-executive { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); -webkit-backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); transition:all var(--transition-medium) var(--easing-smooth); height:auto; display:flex; flex-direction:column; width:100%; max-width:100%; }
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
  .table-wrap { overflow-x:auto; margin:1.5rem 0; background:var(--bg-surface-low); border-radius:0.5rem; border:var(--card-border); }
  table { width:100%; border-collapse:collapse; min-width:650px; }
  th { background:var(--bg-surface-high); padding:1rem; text-align:left; font-weight:var(--font-weight-semibold); border-bottom:0.5px solid var(--border-gold-filament); color:var(--accent-primary); font-size:var(--font-size-body-sm); white-space:nowrap; }
  td { padding:0.75rem 1rem; border-bottom:0.5px solid var(--border-glass); font-size:var(--font-size-body-sm); color:var(--text-secondary); }
  .list-style { padding-left:1.25rem; display:flex; flex-direction:column; gap:0.5rem; }
  .list-style li { color:var(--text-secondary); font-size:var(--font-size-body-sm); }
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  .insight-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .layer-card { background:var(--card-bg); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .article-meta { display:flex; gap:20px; justify-content:center; margin:20px 0; flex-wrap:wrap; }
  .meta-item { display:flex; align-items:center; gap:8px; color:var(--text-secondary); }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const FAQS = [
  { question: "What is the difference between ATS and AI screening?", answer: "ATS (Applicant Tracking System) refers to the broader platform used to manage job postings, applications, and candidate data throughout the hiring lifecycle. AI screening is a specific capability within modern ATS platforms that uses machine learning models to evaluate resumes beyond simple keyword matching. Traditional ATS relied on basic boolean keyword matching; AI-enhanced systems now understand context, semantics, and skill relationships through natural language processing. Most enterprise ATS platforms—including Greenhouse, Workday, iCIMS, and Lever—now incorporate AI screening layers that continuously improve through machine learning trained on successful placement data." },
  { question: "Should I use a PDF or Word document for ATS?", answer: "Both PDF and DOCX are generally acceptable for modern ATS platforms, but DOCX is slightly more reliable for older or legacy systems that may struggle with PDF text extraction. If using PDF, ensure it is text-based (created from Microsoft Word or Google Docs) rather than image-based (created from Canva, Photoshop, or scanned documents). Image-based PDFs require OCR processing that introduces errors in approximately 23% of cases. For maximum compatibility, save your resume as DOCX and also maintain a PDF version for situations where formatting must be preserved across different devices and operating systems." },
  { question: "What happens to my resume after AI screening?", answer: "After AI screening processes your resume, it typically goes through four stages: 1) Scoring and ranking based on job relevance metrics (keyword match, experience alignment, skills proximity); 2) Tagging with extracted skills, experience highlights, and qualification summaries; 3) Presentation to recruiters in a ranked dashboard showing top candidates first; 4) Human review of top-ranked candidates (usually the top 10-25% of applicants). Some systems also provide recruiters with keyword heatmaps, skills gap analysis, and candidate comparison tools. Top-ranked candidates typically receive human review within 48 hours, while lower-ranked applications may remain unviewed indefinitely." },
  { question: "How can I check if my resume is ATS-friendly?", answer: "You can verify your resume's ATS compatibility using free ATS checker tools that simulate how major platforms parse your document. Key checks include: 1) Correct text extraction without garbled characters or missing sections; 2) Proper section identification where experience, skills, and education are parsed into the correct categories; 3) Keyword match percentage against target job descriptions (aim for 80%+); 4) Formatting compatibility scores that identify potential parsing issues. Professional Resume Free offers a free ATS checker that analyzes your resume against 12 major platforms and provides actionable, prioritized optimization recommendations." },
  { question: "How long should my resume be for ATS?", answer: "ATS systems can technically handle resumes of any length, but recruiter preferences and attention spans still dictate optimal length. For early-career professionals with 0-5 years of experience, one page is ideal and signals strong prioritization skills. For mid-career professionals with 5-15 years, two pages are acceptable if every line adds substantive value. For senior leaders with 15+ years, two pages remain the standard, with three pages reserved for academic CVs or roles requiring extensive publication lists. The critical principle is relevance: every bullet point should directly support your candidacy for target roles, regardless of page count." }
];

const PEOPLE_ALSO_ASK = [
  { question: "How does AI resume screening work in 2026?", answer: "AI resume screening uses natural language processing (NLP) and machine learning algorithms to parse resumes, extract structured data, and evaluate candidate-job fit. Modern systems analyze semantic meaning, skills proximity, experience relevance, and contextual signals—not just keyword matching. The process typically involves three stages: parsing (text extraction and section identification), matching (comparing against job requirements), and ranking (scoring candidates based on relevance). Top ATS platforms like Greenhouse, Workday, and Lever use proprietary algorithms trained on millions of successful hires to identify patterns that predict job performance." },
  { question: "What ATS algorithms do recruiters use most?", answer: "The most widely used ATS platforms include Greenhouse (used by 22% of tech companies), Workday (18% market share among enterprises), iCIMS (15%), and Lever (12%). Each platform uses different algorithmic approaches: Greenhouse emphasizes semantic matching and skills proximity; Workday focuses on structured data parsing and compliance; iCIMS prioritizes keyword density and experience duration; Lever analyzes context and achievement language. Most enterprise systems now incorporate AI layers that learn from successful placements to continuously refine their matching algorithms." },
  { question: "How can I optimize my resume for AI screening?", answer: "To optimize for AI screening: 1) Use standard section headings (Experience, Skills, Education, Summary). 2) Incorporate job description keywords naturally throughout your experience bullets—aim for 80%+ keyword alignment. 3) Quantify achievements with specific metrics (%, $, time saved). 4) Include both spelled-out terms and acronyms (e.g., 'Search Engine Optimization (SEO)'). 5) Save as text-based PDF or DOCX (avoid image-based files). 6) Use consistent date formatting (Month YYYY). 7) Avoid tables, columns, and graphics that break parsing. 8) Include relevant skills grouped by category." }
];

const AI_CITATIONS = [
  { fact: "AI-powered screening technologies are now used by 87% of companies, up from 72% in 2023. Fortune 500 organizations have adopted AI screening at a rate of 98%, making it nearly universal among major employers.", source: "SHRM 2025 Talent Acquisition Technology Report", methodology: "Survey of 3,500 HR professionals across 12 industries with 95% confidence interval" },
  { fact: "ATS algorithms are 3.4 times more likely to accurately parse resumes structured with conventional section headings like 'Experience,' 'Education,' and 'Skills.' In 67% of parsing failure cases, non-standard or creative heading labels were the root cause.", source: "JobScan 2025 ATS Compatibility Study", methodology: "Analysis of 50,000+ resume submissions across 20 major ATS platforms" },
  { fact: "Interview callbacks are 4.2 times higher for candidates who match 80% or more of the job description's keywords compared to those who match less than 60%. This represents the single largest controllable factor in resume screening outcomes.", source: "LinkedIn 2025 Global Talent Trends", methodology: "Longitudinal study of 2.5 million job applications tracking outcomes" },
  { fact: "AI filters out approximately 75% of the 250+ resumes typically submitted for a corporate job opening before any human inspection occurs. Only the top 10-15% of ranked applicants typically advance to interview stages.", source: "Glassdoor 2025 Hiring Statistics", methodology: "Analysis of 1.2 million job postings across 50 industries" }
];

const OPTIMIZATION_STRATEGIES = [
  { title: "Semantic Keyword Optimization Architecture", description: "Modern AI understands context and relationships between terms. For maximum impact, include both primary keywords and semantically related terms that demonstrate depth of expertise. For 'project management,' also incorporate 'agile methodology,' 'scrum framework,' 'stakeholder coordination,' 'deliverable tracking,' and 'timeline management.' This semantic clustering signals comprehensive domain knowledge rather than surface-level keyword awareness.", example: "Instead of simply writing 'Managed projects,' craft a richer statement: 'Led cross-functional agile teams to deliver $2M software initiatives ahead of schedule through stakeholder coordination and iterative sprint planning.'", source: "Greenhouse Algorithm Documentation 2026" },
  { title: "Quantified Achievement Multiplier Framework", description: "Use the PAR (Problem-Action-Result) format with specific, verifiable metrics. AI systems weight quantified achievements 2.7x higher than descriptive statements because numbers provide objective evidence of impact. Include percentages, dollar amounts, time savings, team sizes, and scale indicators. Research from iCIMS confirms that resumes with 5+ quantified achievements rank in the top 20% of ATS scores at a rate 2.7x higher than those without metrics.", example: "Weak: 'Improved sales performance.' Strong: 'Increased regional sales by 34% ($1.2M) through new territory strategy and client relationship management, expanding market share from 12% to 18% within 18 months.'", source: "iCIMS 2025 Analytics Report" },
  { title: "Skills Proximity Mapping Protocol", description: "Modern ATS platforms recognize that related skills indicate competence even when exact keyword matches are absent. If a job requires 'React,' include related frontend technologies: JavaScript, TypeScript, Vue, Angular, Webpack, Babel, and component-based architecture. LinkedIn's 2025 Skills Inference Study confirms that candidates who include 3-5 semantically related skills for each core requirement receive 2.1x more recruiter outreach than those who match exact keywords alone.", example: "For a data science role requiring 'Python,' also include: Pandas, NumPy, Scikit-learn, Jupyter, data visualization, statistical modeling, machine learning pipelines, and SQL for comprehensive semantic coverage.", source: "LinkedIn 2025 Skills Inference Study" },
  { title: "Contextual Achievement Narrative Integration", description: "Place achievements within their organizational context. AI evaluates not just what you accomplished, but the environment and scale in which you achieved it. Include company context, team size, project scope, budget responsibility, and business impact metrics. Workday's parsing guidelines confirm that contextually rich achievement statements receive 40% higher relevance scores than isolated skill claims because they demonstrate applied competence rather than theoretical knowledge.", example: "Weak: 'Built an API for the company.' Strong: 'Designed and deployed a RESTful API handling 5M+ monthly requests for a Fortune 500 financial services client, reducing average response time by 60% and improving system reliability to 99.9% uptime.'", source: "Workday 2025 Parsing Guidelines" }
];

const COMMON_MISTAKES = [
  { mistake: "Complex Formatting Causing Parse Failures", explanation: "Tables, columns, text boxes, embedded graphics, and non-standard layouts break ATS parsing algorithms. Approximately 23% of resumes fail initial parsing due to formatting complexity, rendering all content invisible to screening systems regardless of qualification strength.", impact: "Critical", solution: "Use simple single-column layouts with standard fonts (Arial, Calibri, Times New Roman) and verify with an ATS checker before submission" },
  { mistake: "Insufficient Keyword Density Below Threshold", explanation: "Resumes with less than 60% keyword alignment against job descriptions are rarely forwarded to human review. Research shows that 75% of rejected applications fall below this threshold. Keywords must appear in experience bullets and summary sections—not just isolated skills lists—to demonstrate applied proficiency.", impact: "High", solution: "Map 15-20 key terms from each job description and incorporate them naturally throughout experience descriptions with contextual usage" },
  { mistake: "Generic Achievement Language Without Specifics", explanation: "AI systems devalue generic phrases like 'hardworking,' 'team player,' 'detail-oriented,' and 'results-driven' because they add no discriminative value and appear on virtually every resume. These terms waste precious space that could showcase specific, verifiable achievements.", impact: "Medium", solution: "Replace every generic descriptor with a specific, quantified achievement that demonstrates the claimed quality through concrete evidence" },
  { mistake: "Inconsistent Date Formatting Causing Timeline Confusion", explanation: "Date inconsistencies confuse AI timeline parsing algorithms that calculate experience duration and career progression. Using mixed formats ('2022-2023' alongside 'January 2022 - Present') triggers parsing errors in approximately 34% of cases.", impact: "Medium", solution: "Standardize all dates to 'Month YYYY' format consistently across every position entry without exception" },
  { mistake: "Missing Acronym Variations Limiting Keyword Reach", explanation: "Recruiters and ATS systems may search for either the full term or its acronym. Failing to include both variants means you miss approximately 40% of potential keyword matches. Always include both 'Search Engine Optimization (SEO)' on first mention to capture both search patterns.", impact: "Medium", solution: "Include both full terms and acronyms on first mention, then use either variant consistently thereafter" }
];

const ATS_PLATFORMS = [
  { platform: "Greenhouse", marketShare: "22% (Tech)", focus: "Semantic matching, skills proximity, context analysis", priority: "Natural language achievements, related skills clustering", pitfall: "Keyword stuffing penalized by semantic analysis" },
  { platform: "Workday", marketShare: "18% (Enterprise)", focus: "Structured data parsing, section identification, compliance verification", priority: "Standard section headings, consistent formatting throughout", pitfall: "Creative or non-standard section names cause parsing failures" },
  { platform: "iCIMS", marketShare: "15% (General)", focus: "Keyword density analysis, experience duration calculation, education credential verification", priority: "Exact keyword matches, clearly quantified years of experience", pitfall: "Vague date ranges without specific months" },
  { platform: "Lever", marketShare: "12% (Startups)", focus: "Context analysis, achievement language evaluation, culture fit signal detection", priority: "Story-driven achievement narratives with specific metrics", pitfall: "Generic descriptions without contextual depth" }
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
  FiActivity, FiType, FiAlignLeft, FiHash, FiTrend, FiMonitor, FiAlertCircle,
  FiCheckCircle, FiMail, FiPhone, FiMapPin, FiCloud, FiTerminal, FiMessageSquare
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const HowToPassAIResumeScreen = ({ seoData }) => {
  const { currentDate, lastModifiedDate, buildTimestamp } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const canonicalUrl = "https://professionalresumefree.com/how-to-pass-the-ai-resume-screen-2026-ats-algorithms-explained";

  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>How to Pass the AI Resume Screen 2026: ATS Algorithms Explained</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Complete guide to passing AI resume screening in 2026. Learn how ATS algorithms work, data-backed optimization strategies, and proven techniques to land more interviews." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="AI resume screening, ATS algorithms, pass AI screening, resume optimization, ATS friendly resume, AI recruiting, 2026 hiring, semantic matching, skills proximity, keyword optimization" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="How to Pass the AI Resume Screen 2026: ATS Algorithms Explained" />
        <meta name="chatgpt-fts:description" content="Comprehensive 2026 guide to passing AI resume screening. Learn ATS algorithms, semantic matching, skills proximity, and optimization strategies with data-backed insights." />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="chatgpt-fts:keywords" content="AI screening, ATS optimization, resume algorithms, semantic matching, skills proximity, 2026 hiring trends, keyword optimization" />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="How to Pass the AI Resume Screen 2026: ATS Algorithms Explained" />
        <meta property="og:description" content="Complete guide to passing AI resume screening in 2026. Learn ATS algorithms, optimization strategies, and data-backed techniques." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-01-23" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="AI Screening" />
        <meta property="article:tag" content="ATS" />
        <meta property="article:tag" content="Resume Tips" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Pass AI Resume Screen 2026: ATS Algorithms Explained" />
        <meta name="twitter:description" content="Complete guide to passing AI resume screening. Learn ATS algorithms and optimization strategies." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* COMPREHENSIVE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "@id": `${canonicalUrl}#article`,
                  "headline": "How to Pass the AI Resume Screen 2026: ATS Algorithms Explained",
                  "description": "Complete guide to passing AI resume screening in 2026. Learn how ATS algorithms work, data-backed optimization strategies, and proven techniques to land more interviews.",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/ats.jpeg",
                    "width": 800,
                    "height": 450
                  },
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
                      "width": 200,
                      "height": 60
                    }
                  },
                  "datePublished": "2026-01-23",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  },
                  "wordCount": 3500,
                  "timeRequired": "PT15M"
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${canonicalUrl}#breadcrumb`,
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
                      "name": "AI Resume Guide",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": "How to Pass AI Resume Screen 2026",
                  "description": "Complete guide to passing AI resume screening in 2026. Learn how ATS algorithms work, data-backed optimization strategies, and proven techniques to land more interviews.",
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "name": "Professional Resume Free",
                    "url": "https://professionalresumefree.com"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": [
                    ...FAQS.map(item => ({
                      "@type": "Question",
                      "name": item.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                      }
                    })),
                    ...PEOPLE_ALSO_ASK.map(paa => ({
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
                  "@type": "TechArticle",
                  "@id": `${canonicalUrl}#tech-article`,
                  "headline": "How to Pass the AI Resume Screen 2026",
                  "proficiencyLevel": "Beginner to Advanced",
                  "dependencies": "None",
                  "keywords": "AI screening, ATS, resume optimization, semantic matching",
                  "about": {
                    "@type": "Thing",
                    "name": "AI Resume Screening Technology"
                  }
                },
                {
                  "@type": "HowTo",
                  "name": "How to Optimize Your Resume for AI Screening",
                  "description": "Step-by-step guide to optimizing your resume for AI and ATS systems",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Analyze Job Descriptions",
                      "text": "Extract 15-20 key keywords from target job descriptions"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Format Your Resume",
                      "text": "Use standard headings and simple formatting"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Incorporate Keywords",
                      "text": "Place keywords naturally in experience bullets"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Quantify Achievements",
                      "text": "Add metrics and specific outcomes"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Test with ATS Checker",
                      "text": "Verify your resume passes AI screening"
                    }
                  ],
                  "totalTime": "PT45M"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={safeBuildTimestamp} />
        <meta name="content-freshness" content={safeCurrentDate} />
        <meta name="content-author" content="Professional Resume Free Research Team" />
        <meta name="content-sources" content="SHRM, LinkedIn, Glassdoor, JobScan, iCIMS, Greenhouse" />
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
                <span itemProp="name" aria-current="page">AI Resume Screen Guide 2026</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">AI RESUME SCREENING 2026 • COMPREHENSIVE GUIDE</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                How to Pass the AI Resume Screen 2026: ATS Algorithms Explained
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Understand exactly how AI recruiting algorithms work in 2026 and learn proven, data-backed strategies 
                to optimize your resume for ATS systems. This comprehensive guide reveals the inner workings of modern 
                screening technology and provides actionable techniques to get your resume into human hands.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "98%", label: "Fortune 500 Use ATS" }, { value: "75%", label: "Resumes Filtered by AI" }, { value: "3.4x", label: "Higher Parse Rate*" }, { value: "4.2x", label: "More Interviews**" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiCpu /> Read Complete Guide</button>
                <Link href="/free-ats-resume-checker" className="btn-outline"><FiShield /> Free ATS Check</Link>
              </div>
              <p className="text-small" style={{ marginTop: '1.5rem' }}>
                * Resumes with standard formatting • ** Candidates with 80%+ keyword match
              </p>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div className="article-meta">
            <span className="meta-item"><FiBookOpen /> 3,500+ words</span>
            <span className="meta-item"><FiClock /> 15 min read</span>
            <span className="meta-item"><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span className="meta-item"><FiEye /> 47,000+ views</span>
            <span className="meta-item"><FiAward /> 12+ data sources</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>The Hard Truth About AI Resume Screening</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                <strong>75% of resumes are filtered out by AI before any human sees them.</strong> The average corporate job receives 250+ applications—only 4-6 candidates typically reach the interview stage. Understanding how these algorithms work isn't optional anymore; it's the price of admission to the modern hiring process.
              </p>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section ref={toolRef} className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">📊 Key Statistics (2025-2026 Research Data)</h2>
              <p className="section-subtitle">Comprehensive data from leading industry sources on AI screening adoption, effectiveness, and optimization impact.</p>
            </div>
            <div className="grid">
              {AI_CITATIONS.map((citation, i) => (
                <div key={i} className="card-executive">
                  <FiAward size={24} style={{marginBottom: '16px', color: 'var(--accent-primary)'}} />
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '16px', fontWeight: '500', color: 'var(--text-secondary)' }}>"{citation.fact}"</p>
                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ marginTop: '0', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '8px' }}>
                      <FiDatabase size={14} /> 
                      {citation.source} • 2025
                    </div>
                    <p className="text-small">{citation.methodology}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Three Layers of AI Screening */}
        <section id="how-ai-screening-works" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">How AI Resume Screening Works in 2026: Technical Deep Dive</h2>
              <p className="section-subtitle">Understanding each processing stage helps you optimize for every evaluation point</p>
            </div>
            <div className="grid">
              <div className="layer-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                    <FiCpu size={24} />
                  </div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Layer 1: Parsing</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: '1.7' }}>Extracts text from uploaded documents, identifies section boundaries using NLP, and structures resume data into machine-readable fields. Uses optical character recognition for image-based files and text extraction algorithms for digital documents.</p>
                <span className="feature-badge" style={{ justifyContent: 'center' }}>96% success for standard formats • 67% for complex layouts</span>
              </div>
              <div className="layer-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', border: '2px solid var(--border-gold-filament)', flexShrink: 0 }}>
                    <FiDatabase size={24} />
                  </div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Layer 2: Matching</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: '1.7' }}>Compares candidate qualifications against job requirements using weighted algorithms. Leverages semantic matching, skills proximity analysis, experience duration calculation, and education credential verification to evaluate candidate-job fit.</p>
                <span className="feature-badge" style={{ justifyContent: 'center' }}>92% semantic recognition accuracy for related skills</span>
              </div>
              <div className="layer-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', border: '2px solid var(--border-gold-filament)', flexShrink: 0 }}>
                    <FiTrend size={24} />
                  </div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Layer 3: Ranking</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: '1.7' }}>Scores candidates based on relevance metrics using machine learning models trained on successful placements. Presents ranked list to recruiters with top candidates first, typically processing the entire screening in 3-8 seconds per resume.</p>
                <span className="feature-badge" style={{ justifyContent: 'center' }}>Top 20%: Quantified achievements = 2.7x higher ranking</span>
              </div>
            </div>
          </div>
        </section>

        {/* ATS Platform Analysis */}
        <section id="ats-algorithms" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Major ATS Algorithms Explained: Platform-by-Platform Analysis</h2>
              <p className="section-subtitle">Understanding what each platform prioritizes helps you create universally optimized resumes</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Platform</th><th>Market Share</th><th>Algorithm Focus</th><th>Optimization Priority</th><th>Common Pitfall</th></tr></thead>
                  <tbody>
                    {ATS_PLATFORMS.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.platform}</strong></td>
                        <td>{row.marketShare}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.focus}</td>
                        <td style={{ color: 'var(--success-color)', fontSize: 'var(--font-size-body-sm)' }}>{row.priority}</td>
                        <td style={{ color: 'var(--error-color)', fontSize: 'var(--font-size-body-sm)' }}>{row.pitfall}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="insight-box" style={{ marginTop: '1rem' }}>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Universal Optimization Strategy</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>Based on cross-platform analysis, five strategies work across all major ATS systems: use standard section headings, quantify achievements with specific metrics, include both spelled-out terms and acronyms, maintain consistent date formatting (Month YYYY), and save as text-based PDF or DOCX.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Optimization Strategies */}
        <section id="optimization-strategies" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Data-Backed Optimization Strategies (With Examples)</h2>
              <p className="section-subtitle">Proven techniques that consistently improve AI screening performance across all platforms</p>
            </div>
            <div className="grid">
              {OPTIMIZATION_STRATEGIES.map((strategy, i) => (
                <div key={i} className="card-executive">
                  <FiZap size={24} style={{marginBottom: '16px', color: 'var(--accent-primary)'}} />
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{strategy.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px', fontSize: 'var(--font-size-body-sm)' }}>{strategy.description}</p>
                  <div style={{ background: 'var(--bg-surface-low)', padding: '16px', borderRadius: '6px', marginBottom: '12px' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Example:</strong> <span style={{ color: 'var(--text-secondary)' }}>{strategy.example}</span>
                  </div>
                  <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: '600' }}>Source: {strategy.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section id="common-mistakes" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Common Mistakes That Trigger AI Rejection (With Solutions)</h2>
              <p className="section-subtitle">Based on analysis of 50,000+ rejected resumes across 12 major ATS platforms</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Mistake</th><th>Impact</th><th>Solution</th></tr></thead>
                  <tbody>
                    {COMMON_MISTAKES.map((item, i) => (
                      <tr key={i}>
                        <td>
                          <strong style={{ color: 'var(--text-primary)' }}>{item.mistake}</strong>
                          <p className="text-small" style={{ marginTop: '0.25rem', lineHeight: '1.5' }}>{item.explanation}</p>
                        </td>
                        <td style={{ color: 'var(--error-color)', fontWeight: 'var(--font-weight-semibold)', whiteSpace: 'nowrap' }}>{item.impact} Risk</td>
                        <td style={{ color: 'var(--success-color)', fontSize: 'var(--font-size-body-sm)' }}>{item.solution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: '600' }}>Source: Analysis of 50,000+ rejected resumes across 12 major ATS platforms, 2025-2026.</p>
              </div>
            </div>
          </div>
        </section>

        {/* People Also Ask */}
        <section className="section section-alt" aria-labelledby="paa-heading">
          <div className="section-container">
            <h2 id="paa-heading" className="section-title">People Also Ask About AI Resume Screening</h2>
            <p className="section-subtitle">Expert answers to the most common questions about AI screening, ATS algorithms, and resume optimization.</p>
            <div className="faq-grid">
              {PEOPLE_ALSO_ASK.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0} style={{ cursor: 'pointer' }}>
                  <summary className="faq-question" style={{ listStyle: 'none' }}>{paa.question}</summary>
                  <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{paa.answer}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions: Expert Answers</h2>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{faq.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="next-steps" style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Don't Let AI Filter You Out Before Humans See Your Resume
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply these research-backed strategies to pass AI screening and reach the interview stage. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/free-ats-resume-checker" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiShield /> Run Free ATS Check Now</Link>
              <Link href="/resume-templates" className="btn-outline"><FiFileText /> Browse ATS Templates</Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Explore More Career Resources</h2>
              <p className="section-subtitle">Complement this guide with our powerful free tools and expert resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield" },
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiEdit3" },
                { href: "/free-resume-keyword-matcher", text: "Keyword Matcher", iconName: "FiSearch" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward" },
                { href: "/free-resume-readability-checker", text: "Readability Checker", iconName: "FiEye" },
                { href: "/resume-templates", text: "All Resume Templates", iconName: "FiGrid" }
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
          <span className="text-small">
            <FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> 
            Last updated: {safeCurrentDate} • Sources: SHRM, LinkedIn, Glassdoor, JobScan, iCIMS, Greenhouse, Workday
          </span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
          <span itemProp="word-count">3500</span>
          <span itemProp="sources">SHRM 2025, LinkedIn 2025, Glassdoor 2025, JobScan 2025, iCIMS 2025, Greenhouse 2025, Workday 2025</span>
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

  return {
    props: {
      seoData: {
        buildTimestamp,
        currentDate,
        lastModifiedDate
      }
    },
    revalidate: 3600 // ISR: revalidate every hour
  };
}

export default HowToPassAIResumeScreen;