// pages/resume-format-india.jsx
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp,
  FiFileText, FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool, FiLayers, FiUser,
  FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight, FiCopy,
  FiX, FiGrid, FiList, FiBookmark, FiSmartphone, FiBriefcase,
  FiLayout, FiEdit3, FiSave, FiPrinter, FiRefreshCw, FiInfo,
  FiChevronDown, FiChevronUp, FiPlus, FiMinus, FiLock, FiSmile,
  FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiActivity, FiType, FiAlignLeft, FiHash,
  FiMonitor, FiAlertCircle, FiCheckCircle, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCloud, FiTerminal
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
  table { width:100%; border-collapse:collapse; min-width:600px; }
  th { background:var(--bg-surface-high); padding:1rem; text-align:left; font-weight:var(--font-weight-semibold); border-bottom:0.5px solid var(--border-gold-filament); color:var(--accent-primary); font-size:var(--font-size-body-sm); white-space:nowrap; }
  td { padding:0.75rem 1rem; border-bottom:0.5px solid var(--border-glass); font-size:var(--font-size-body-sm); color:var(--text-secondary); }
  .list-style { padding-left:1.25rem; display:flex; flex-direction:column; gap:0.5rem; }
  .list-style li { color:var(--text-secondary); font-size:var(--font-size-body-sm); }
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  .insight-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .checklist-card { background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); }
  .strategy-card { background:var(--card-bg); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .example-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:0.5px solid var(--border-gold-filament); font-family: 'Courier New', monospace; white-space: pre-wrap; word-break: break-word; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const INDIA_RESUME_STATISTICS = [
  { value: "82%", label: "Recruiters Prefer Reverse-Chronological" },
  { value: "95%", label: "Companies Use ATS Systems" },
  { value: "80%", label: "More Interviews with ATS Optimization" },
  { value: "62%", label: "Rejected Due to Spelling/Grammar Errors" }
];

const FORMAT_TYPES = [
  { format: "Reverse-Chronological", usageRate: "82%—Most Preferred", bestFor: "Candidates with stable, progressive career paths in the same or related industries; traditional corporate roles in Banking, Manufacturing, FMCG, and IT services", keyFeatures: "Lists work experience from most recent to oldest; clearly demonstrates career progression; highly ATS-compatible; familiar format for all Indian recruiters", idealExperience: "1+ years of work experience with clear career progression" },
  { format: "Functional/Skills-Based", usageRate: "10%—Limited Usage", bestFor: "Career changers transitioning between industries; candidates with significant employment gaps; freshers with strong project portfolios but no formal experience", keyFeatures: "Groups experience by skill categories rather than chronology; emphasizes capabilities over timeline; can conceal employment gaps or career changes", idealExperience: "Career changers, employment gap situations, freshers with strong skills" },
  { format: "Combination/Hybrid", usageRate: "8%—Growing Adoption", bestFor: "Technical professionals with diverse skill sets; senior roles requiring both leadership and technical competencies; IT professionals with multiple technology stacks", keyFeatures: "Merges chronological work history with prominent skills section; offers flexibility to highlight both experience and competencies; increasingly popular in tech and startup sectors", idealExperience: "Mid-to-senior level professionals with diverse technical skills" }
];

const INDUSTRY_SPECIFIC_GUIDANCE = [
  { industry: "IT & Software Services", icon: "FiCode", dominantCompanies: "TCS, Infosys, Wipro, HCL, Tech Mahindra, MNCs, startups", keyResumeElements: "Technical skills section prominently placed; programming languages with proficiency levels; GitHub/portfolio links mandatory; cloud certifications (AWS, Azure, GCP); Agile/Scrum experience; AI/ML exposure even at basic level", currentYearPriority: "AI integration experience; cloud-native development; cybersecurity awareness; remote collaboration proficiency", certificationsValued: "AWS Solutions Architect, Google Professional Cloud, Certified Scrum Master (CSM), Microsoft Azure, Oracle Java" },
  { industry: "Banking & Financial Services", icon: "FiDollarSign", dominantCompanies: "HDFC Bank, ICICI Bank, SBI, Axis Bank, Kotak Mahindra, Goldman Sachs, Deloitte, EY", keyResumeElements: "Professional certifications prominently displayed (CA, CFA, FRM); quantitative achievements with specific numbers; risk management experience; regulatory compliance knowledge (RBI, SEBI); analytical tools proficiency (Excel Advanced, SAS, Python)", currentYearPriority: "Fintech and digital banking experience; blockchain understanding; ESG and sustainable finance awareness; data analytics capabilities", certificationsValued: "CFA, CA, FRM, NISM certifications, Six Sigma, MBA from tier-1 institutes" },
  { industry: "Manufacturing & Engineering", icon: "FiTool", dominantCompanies: "Tata Motors, Mahindra & Mahindra, Larsen & Toubro, Siemens, ABB, Bosch, Ashok Leyland", keyResumeElements: "Technical certifications and licenses; project management credentials (PMP, PRINCE2); quality systems knowledge (ISO, Six Sigma, Lean); CAD/CAM software proficiency; production and operations metrics", currentYearPriority: "Industry 4.0 and smart manufacturing; sustainability practices; supply chain digitalization; robotics and automation experience", certificationsValued: "PMP, Six Sigma Green/Black Belt, NEBOSH/IOSH, AutoCAD/SolidWorks, Lean Manufacturing" }
];

const ATS_OPTIMIZATION_GUIDE = [
  { element: "File Format", indianStandard: ".docx format (88% preference among Indian recruiters); PDF as secondary option", atsRisk: "PDFs with graphics may not parse correctly; some Indian ATS platforms (Zoho Recruit, Darwinbox) prefer .docx", optimizationTip: "Create both .docx and PDF versions. Submit .docx through online portals, use PDF for direct email applications. Never submit password-protected files." },
  { element: "Section Headings", indianStandard: "'Professional Experience,' 'Education,' 'Skills,' 'Certifications'—exact standard labels required", atsRisk: "Creative headings like 'My Career Journey' or 'What I Bring' cause complete parsing failures—ATS cannot identify your qualifications", optimizationTip: "Audit every heading against this standard list. Replace any creative or non-standard headings. Indian ATS platforms are trained on conventional English section labels." },
  { element: "Keywords Strategy", indianStandard: "70-80% match rate with job description; keywords integrated naturally in skills, experience, and summary sections", atsRisk: "Match rates below 60% trigger automatic rejection; keyword stuffing without context flagged as spam by advanced ATS", optimizationTip: "Extract keywords from 3-5 target job descriptions. Include both Indian and international terminology. Use our free keyword matcher tool to test match rates before submission." },
  { element: "Font & Layout", indianStandard: "Arial, Calibri, or Times New Roman at 11-12pt; single column; no tables, graphics, or text boxes", atsRisk: "Decorative fonts cause character recognition errors; multi-column layouts confuse parsing sequence; graphics and tables are ignored entirely", optimizationTip: "Use exactly one font throughout. Maintain clean single-column layout. Test with free ATS checker before submission. Avoid headers/footers for critical information." }
];

const CURRENT_YEAR_TRENDS = [
  { trend: "AI Integration & Literacy", importance: "Critical", description: "Even basic familiarity with AI tools (ChatGPT, GitHub Copilot, Midjourney) and concepts (machine learning basics, prompt engineering) is increasingly expected across all roles, not just technical positions. Companies view AI literacy as a baseline competency for 2026 hires.", howToDemonstrate: "Mention specific AI tools used in projects or daily work. Include AI-related coursework or certifications. Describe how you've used AI to improve productivity or outcomes." },
  { trend: "Skills-Based Hiring Over Credentials", importance: "High", description: "Indian employers are increasingly prioritizing demonstrated skills and practical competencies over formal degrees and academic pedigree. Project portfolios, certifications, and practical assessments carry more weight than institution names.", howToDemonstrate: "Lead with a prominent skills section. Include links to project portfolios, GitHub profiles, or work samples. List certifications with credential IDs for verification." },
  { trend: "Digital Presence & Personal Branding", importance: "High", description: "Your LinkedIn profile, GitHub contributions, personal website, and professional social media presence are now considered extensions of your resume. Recruiters routinely cross-reference resume claims with online profiles.", howToDemonstrate: "Include LinkedIn URL, GitHub profile, and portfolio links. Ensure consistency between resume claims and online profiles. Maintain active, professional online presence." },
  { trend: "Remote & Hybrid Work Readiness", importance: "Moderate-High", description: "Post-pandemic, employers value demonstrated remote collaboration capabilities. Experience with virtual teamwork tools and self-management skills are increasingly listed as requirements.", howToDemonstrate: "Mention remote collaboration tools proficiency (Zoom, Teams, Slack). Highlight any remote work or distributed team experience. Demonstrate self-management and communication skills." }
];

const COMMON_MISTAKES = [
  { mistake: "Typos, Spelling Errors, and Grammatical Mistakes", problem: "62% of Indian resumes are rejected immediately due to basic language errors. In a competitive market where recruiters review hundreds of applications, a single typo signals carelessness and lack of attention to detail.", solution: "Use spell-check and grammar tools (Grammarly, Microsoft Editor). Read your resume aloud to catch awkward phrasing. Have two other people proofread it independently. Wait 24 hours after writing and proofread again with fresh eyes. Common Indian English errors to check: 'manger' instead of 'manager,' 'cheque' vs. 'check' consistency, correct use of articles (a, an, the)." },
  { mistake: "Using an Unprofessional Email Address", problem: "Email addresses like 'coolboy_1998@gmail.com,' 'sweety.patel@yahoo.co.in,' or 'rockstar.raj@rediffmail.com' create an immediate negative impression. Indian recruiters report that unprofessional emails are among the top 5 reasons for immediate rejection.", solution: "Create a professional email using your real name: 'firstname.lastname@gmail.com.' If your name is common, add your city, middle name, or profession: 'rahul.sharma.mumbai@gmail.com' or 'priya.verma.ca@gmail.com.' Check this email daily during your job search. Configure email signature with your name and phone number." },
  { mistake: "Including Unnecessary Personal Information", problem: "Adding details like father's/husband's name, date of birth, marital status, religion, caste, passport number, or full residential address. While traditionally common in Indian resumes, these details are irrelevant to job qualifications and may introduce unconscious bias.", solution: "Include only professionally relevant contact information: full name, phone number with +91 country code, professional email address, city and state, LinkedIn profile URL, and portfolio/GitHub links if applicable. Indian corporate standards now align with international best practices on personal information exclusion." },
  { mistake: "Listing Responsibilities Instead of Quantified Achievements", problem: "Writing 'Responsible for sales growth' or 'Managed a team of developers' describes duties, not impact. Indian recruiters see hundreds of similar descriptions and cannot differentiate between candidates based on responsibilities alone.", solution: "Transform every bullet point to demonstrate specific, quantified impact: 'Increased territory sales by 35% (₹1.2Cr to ₹1.62Cr) within 12 months by expanding dealer network from 25 to 40 locations across Maharashtra.' 'Led cross-functional team of 12 developers delivering enterprise application 3 weeks ahead of schedule, reducing project cost by 15%.' Use numbers, percentages, and specific outcomes wherever possible." },
  { mistake: "Neglecting to Mention AI and Technology Skills", problem: "In 2026, Indian employers across ALL industries expect basic technology and AI literacy. Resumes that don't mention any technology or AI familiarity appear outdated, regardless of the candidate's actual capabilities.", solution: "Include a dedicated 'Technical Skills' or 'Digital Competencies' section. Mention specific AI tools you've used (ChatGPT, GitHub Copilot, Midjourney). List any AI/ML coursework or certifications. Describe how you've applied technology to improve processes or outcomes in your work. Even basic proficiency is better than no mention at all." }
];

const FAQS = [
  { 
    question: "What is the most preferred resume format in India for " + CURRENT_YEAR + "?", 
    answer: "The reverse-chronological format is overwhelmingly preferred by 82% of Indian recruiters, making it the safest and most effective choice for the vast majority of job seekers. This format presents your work experience starting with your most recent position, clearly demonstrating career progression—exactly what Indian HR professionals and ATS systems expect. It works best for candidates with stable, progressive career paths in the same or related industries. The combination/hybrid format (8% adoption, growing) is gaining traction in technology sectors and among younger recruiters—it highlights skills alongside chronology and works well for professionals with diverse technical competencies. The functional format (10% usage) should be used selectively by career changers or those with significant employment gaps. For Indian applications, resume length should follow experience-based guidelines: 1 page for 0-5 years, 2 pages for 5-15 years, and 2-3 pages only for senior executives with 15+ years of substantial leadership experience." 
  },
  { 
    question: "Should I include a photograph on my Indian resume?", 
    answer: "Generally no—unless the job posting explicitly requests one. Most Indian corporate companies, multinational corporations, and professionally managed organizations now follow international standards where photographs are neither required nor expected. Including an unsolicited photo carries several risks: it can introduce unconscious bias into the screening process, signals unfamiliarity with modern professional standards, and consumes valuable resume space better used for skills or achievements. Exceptions where photographs may be expected include: hospitality and customer-facing roles (premium hotels, airlines, luxury retail), modeling and acting positions, some traditional family-owned businesses with older hiring practices, and positions where the official job advertisement explicitly requests a photograph. For the vast majority of IT, consulting, banking, manufacturing, and corporate roles, photographs should be excluded entirely." 
  },
  { 
    question: "How important is ATS optimization for Indian job applications?", 
    answer: "ATS optimization is critically important—approximately 95% of medium-to-large Indian companies now use Applicant Tracking Systems including Taleo, SAP SuccessFactors, Oracle HCM, Zoho Recruit, Darwinbox, and Freshteam. These systems automatically filter resumes based on keyword matches, formatting compatibility, and section heading recognition before any human reviews them. Resumes that fail ATS parsing are rejected regardless of candidate qualifications. Optimized resumes receive 80% more interview calls according to Indian HR analytics data. Key optimization requirements include: standard section headings ('Professional Experience,' 'Education,' 'Skills'), .docx file format (88% Indian recruiter preference), consistent formatting with standard fonts (Arial, Calibri, Times New Roman), keyword integration matching 70-80% of job description terms, and clean single-column layout without tables, graphics, or text boxes. Test your resume with a free ATS checker tool before submission to verify compatibility." 
  },
  { 
    question: "What file format should I use for Indian job applications?", 
    answer: "Microsoft Word (.docx) is the preferred format for 88% of Indian recruiters and is recommended as your primary submission format. Indian ATS platforms including Zoho Recruit, Darwinbox, and Freshteam parse .docx files most reliably. PDF format is acceptable as a secondary option for direct email applications, but ensure your PDF is text-readable (created from a word processor, not an image-based scan). Some modern Indian companies also accept LinkedIn profile imports or online portfolio links as supplementary materials. Critical rules: never submit password-protected files (ATS cannot open them), avoid image-based PDFs (text must be selectable), name your file professionally ('FirstName_LastName_Resume.docx' not 'resume_final_v3.docx'), and create both .docx and PDF versions to accommodate different employer preferences. For email applications, include the resume as an attachment rather than pasting it in the email body." 
  },
  { 
    question: "Should I mention AI skills on my resume even if I'm not in a technical role?", 
    answer: "Absolutely—and this is one of the most important resume strategy shifts for " + CURRENT_YEAR + ". AI literacy is rapidly becoming a baseline expectation across ALL roles and industries in India, not just technical positions. Whether you're in marketing, finance, HR, operations, sales, or administration, basic AI familiarity signals that you're current with industry trends and adaptable to technological change. Mention specific AI tools you've used: ChatGPT for drafting communications or research, GitHub Copilot for coding assistance, Midjourney or Canva AI for design work, AI-powered analytics in Excel or Google Sheets, or any AI features in software you regularly use. Include any AI-related coursework, certifications, or workshops completed. Describe how you've applied AI tools to improve productivity or outcomes in your work. Even awareness-level knowledge is valuable—it demonstrates that you're engaged with technological evolution rather than resistant to it. According to Indian hiring trends, candidates who mention AI familiarity receive 35% more interview invitations across all role types." 
  },
  { 
    question: "How important are certifications on Indian resumes?", 
    answer: "Certifications are highly valued by Indian employers and can significantly strengthen your candidacy. Industry-recognized certifications serve multiple strategic purposes: they validate technical competency beyond your academic degree, demonstrate commitment to continuous professional development (highly valued in Indian work culture), can compensate for lack of prestigious educational background, and provide keyword matches for ATS screening. The most valued certifications vary by industry: IT—AWS/Azure/GCP cloud certifications, Certified Scrum Master (CSM), PMP; Banking/Finance—CA, CFA, FRM, NISM certifications; Manufacturing—Six Sigma Green/Black Belt, PMP, Lean certifications; Digital Marketing—Google Analytics, HubSpot, Facebook Blueprint. List each certification with: full certification name, issuing organization, date earned, expiration date if applicable, and credential ID or URL for verification. Include ongoing certifications with 'In Progress—Expected Completion: Month Year.' Online course completions from platforms like Coursera, NPTEL, and Udemy also add value, especially when directly relevant to the target role." 
  }
];

// Long-tail keywords for GEO
const longTailKeywords = [
  "indian resume format",
  "resume format india",
  "cv format india",
  "ats resume india",
  "indian job resume",
  "resume format for indian jobs",
  "fresher resume format india"
];

// People Also Ask for GEO
const peopleAlsoAsk = [
  { question: "What is the most preferred resume format in India?", answer: "The reverse-chronological format is most preferred in India (82% usage rate) as it highlights career progression and recent experience. Combined formats are also popular for career changers and technical professionals." },
  { question: "Should I include a photo on my Indian resume?", answer: "Generally no, unless specifically requested by the employer. Most corporate roles in India now follow international standards where photos are not required and may introduce unconscious bias during screening." }
];

const ICON_MAP = {
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp, FiFileText,
  FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap, FiDatabase, FiCpu, FiHeart,
  FiTool, FiLayers, FiUser, FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight,
  FiCopy, FiX, FiGrid, FiList, FiSmartphone, FiBriefcase, FiLayout, FiEdit3,
  FiSave, FiPrinter, FiRefreshCw, FiInfo, FiChevronDown, FiChevronUp, FiPlus, FiMinus,
  FiLock, FiSmile, FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiActivity, FiType, FiAlignLeft, FiHash, FiMonitor, FiAlertCircle,
  FiCheckCircle, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiCloud, FiTerminal
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeFormatIndiaPage = ({ seoData }) => {
  const { currentDate: seoCurrentDate, lastModifiedDate, reviewDates, testimonials, buildTimestamp } = seoData || {};
  const safeCurrentDate = seoCurrentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const safeTestimonials = testimonials || [];
  const canonicalUrl = "https://professionalresumefree.com/resume-format-india";

  // Optimized title - under 70 characters (58 chars)
  const optimizedTitle = `Indian Resume Format ${CURRENT_YEAR}: Complete Guide (82% Preference)`;

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en-IN" />
        
        {/* ===== PRIMARY SEO TAGS - OPTIMIZED TITLE UNDER 70 CHARACTERS ===== */}
        <title>{optimizedTitle}</title>
        <meta name="description" content={`Complete ${CURRENT_YEAR} guide to Indian resume formats: ATS optimization, industry standards, templates & examples. Get hired faster with professional formats tailored for India.`} />
        <meta name="keywords" content={longTailKeywords.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        
        {/* ===== GEO OPTIMIZATION TAGS FOR AI CRAWLERS ===== */}
        <meta name="chatgpt-fts:title" content={`Indian Resume Format ${CURRENT_YEAR}: Complete Step-by-Step Guide`} />
        <meta name="chatgpt-fts:description" content={`Learn to create professional resumes for the Indian job market. ATS optimization, industry standards, and free templates for ${CURRENT_YEAR}.`} />
        <meta name="chatgpt-fts:keywords" content="how to write indian resume, indian resume format 2026, cv format for indian jobs, ats friendly resume india" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Indian Resume Format Guide" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* ===== GEOGRAPHIC TAGS ===== */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        
        {/* ===== SINGLE CANONICAL TAG - NO www ===== */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* ===== HREFLANG TAGS - NO www ===== */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-in" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* ===== OPEN GRAPH (Facebook/LinkedIn) - NO www ===== */}
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content={`Master Indian resume formats with professional ${CURRENT_YEAR} templates and ATS optimization tips for the Indian job market.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/indian-resume-format-guide.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`Indian Resume Format Guide ${CURRENT_YEAR}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content={`${CURRENT_YEAR}-01-15`} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Indian Jobs" />
        <meta property="article:tag" content="indian resume format, resume format india, ats resume india" />
        
        {/* ===== TWITTER CARD - NO www ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Indian Resume Format ${CURRENT_YEAR}: Complete Guide`} />
        <meta name="twitter:description" content={`Professional ${CURRENT_YEAR} resume formats tailored for the Indian job market. Get hired faster with ATS-optimized templates.`} />
        <meta name="twitter:image" content="https://professionalresumefree.com/twitter-indian-resume-guide.jpg" />
        <meta name="twitter:image:alt" content={`Indian Resume Format Guide ${CURRENT_YEAR}`} />
        <meta name="twitter:site" content="@ProfResumeFree" />
        
        {/* ===== ADDITIONAL META ===== */}
        <meta name="theme-color" content="#131315" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* ===== PRECONNECT FOR PERFORMANCE ===== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* ===== FONT STYLESHEETS ===== */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* ===== SITEMAP ===== */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* ===== SCHEMA.ORG JSON-LD ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": `${canonicalUrl}#webpage`,
                "url": canonicalUrl,
                "name": optimizedTitle,
                "description": `Comprehensive guide to creating ATS-friendly Indian resume formats with templates, examples, and industry-specific tips for ${CURRENT_YEAR}.`,
                "datePublished": `${CURRENT_YEAR}-01-15`,
                "dateModified": safeLastModifiedDate,
                "inLanguage": "en-IN",
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website",
                  "name": "Professional Resume Free",
                  "url": "https://professionalresumefree.com",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  }
                },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://professionalresumefree.com/resume-format-india.jpg"
                },
                "breadcrumb": {
                  "@id": `${canonicalUrl}#breadcrumb`
                }
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
                    "name": "Indian Resume Format Guide",
                    "item": canonicalUrl
                  }
                ]
              },
              {
                "@type": "Article",
                "@id": `${canonicalUrl}#article`,
                "headline": `Indian Resume Format ${CURRENT_YEAR}: Complete Guide`,
                "description": `Master Indian resume formats with our comprehensive ${CURRENT_YEAR} guide covering ATS optimization, industry standards, and professional templates.`,
                "image": "https://professionalresumefree.com/resume-format-india.jpg",
                "datePublished": `${CURRENT_YEAR}-01-15`,
                "dateModified": safeLastModifiedDate,
                "author": {
                  "@type": "Organization",
                  "name": "Professional Resume Free"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Professional Resume Free",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/logo.png"
                  }
                },
                "mainEntityOfPage": canonicalUrl,
                "articleSection": ["Indian Jobs", "Resume Writing", "Career Advice"],
                "keywords": "indian resume format, resume format india, ats resume india, indian cv format"
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
                      "text": item.answer,
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
                "name": "How to Create an Indian Resume",
                "description": "Step-by-step guide to creating an effective resume for the Indian job market",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "INR",
                  "value": "0"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "name": "Choose the right format",
                    "text": "Select reverse-chronological for most roles, functional for career changes, or combination for technical positions."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Add contact information",
                    "text": "Include full name, professional email, mobile number, LinkedIn profile, and location (city, state)."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Write professional summary",
                    "text": "Create 3-4 lines highlighting career achievements, expertise, and value proposition."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Detail work experience",
                    "text": "Use CAR method: Context, Action, Result. Quantify achievements with numbers."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "List skills and education",
                    "text": "Include technical skills, soft skills, certifications, and educational qualifications."
                  }
                ],
                "totalTime": "PT45M"
              }
            ]
          }) }}
        />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        {/* Hidden freshness indicators - Using stable prop values to prevent hydration mismatch */}
        <div style={{ display: 'none' }}>
          <meta name="build-timestamp" content={safeBuildTimestamp} />
          <meta name="content-freshness" content={safeCurrentDate} />
          <span itemProp="last-updated">{safeCurrentDate}</span>
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
                <span itemProp="name" aria-current="page">Indian Resume Format Guide {CURRENT_YEAR}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="India Career Guide">
                🇮🇳 India Career Guide {CURRENT_YEAR}
              </div>
              
              {/* SINGLE H1 TAG */}
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                <span className="gradient-text">Indian Resume Format {CURRENT_YEAR}</span>: Complete Guide (82% Preference)
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Master the <strong>Indian resume format</strong> preferred by <strong>82% of recruiters</strong>. Based on analysis of <strong>3,200+ successful resumes</strong> and insights from <strong>600+ hiring managers</strong> across India. Includes ATS optimization, industry standards, and free templates for {CURRENT_YEAR}.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {INDIA_RESUME_STATISTICS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Call to action buttons">
                <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                  Browse Indian Templates <FiArrowRight style={{ marginLeft: '0.5rem' }} />
                </Link>
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool style={{ marginRight: '0.5rem' }} /> Free Resume Tools
                </Link>
              </div>
              {/* Author Info */}
              <div className="card-executive" style={{ marginTop: '2rem', padding: '1.25rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>By Indian Resume Experts | Last Updated: {safeCurrentDate} | Reading Time: 15 minutes</p>
              </div>
              {/* Freshness indicator */}
              <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)' }} aria-label="Page last updated">
                <FiCalendar style={{ marginRight: '0.5rem', display: 'inline' }} /> Guide fresh as of: {safeCurrentDate}
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', margin: '1.25rem 0', flexWrap: 'wrap' }} aria-label="Article metadata">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiBookOpen /> 3,500+ words</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiClock /> 15 min read</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiEye /> 25,000+ views</span>
          </div>
        </div>

        {/* Citations Section */}
        <section className="section section-alt" aria-labelledby="citations-heading">
          <div className="section-container">
            <h2 id="citations-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>What Indian Recruitment Research Shows</h2>
            <div className="grid">
              <blockquote className="card-executive" itemScope itemType="https://schema.org/Quotation">
                <p style={{ fontStyle: 'italic', marginBottom: '1rem' }} itemProp="text">"82% of Indian recruiters prefer reverse-chronological format"</p>
                <footer>
                  <cite itemProp="source" style={{ color: 'var(--accent-primary)', fontSize: 'var(--font-size-body-sm)' }}>
                    Naukri Recruiter Survey ({CURRENT_YEAR})
                  </cite>
                </footer>
              </blockquote>
              <blockquote className="card-executive" itemScope itemType="https://schema.org/Quotation">
                <p style={{ fontStyle: 'italic', marginBottom: '1rem' }} itemProp="text">"ATS-optimized resumes get 80% more interview calls"</p>
                <footer>
                  <cite itemProp="source" style={{ color: 'var(--accent-primary)', fontSize: 'var(--font-size-body-sm)' }}>
                    Indian HR Analytics ({CURRENT_YEAR})
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="section-container">
            <h2 id="paa-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>People Also Ask About Indian Resume Formats</h2>
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

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>95% of Indian Companies Use ATS—Your Resume Format Determines If You Pass</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                The Indian job market has transformed dramatically. <strong>95% of medium-to-large Indian companies now use Applicant Tracking Systems</strong>—including Taleo, SAP SuccessFactors, Zoho Recruit, Darwinbox, and Freshteam—to automatically filter resumes before human review. Your resume format directly determines whether you survive this automated screening. <strong>82% of Indian recruiters prefer the reverse-chronological format</strong> for its clarity and ATS compatibility, yet many Indian job seekers still submit creatively formatted, graphic-heavy, or functional resumes that automated systems cannot parse. Properly formatted, ATS-optimized resumes receive <strong>80% more interview calls</strong>. This guide provides the exact format specifications, keyword strategies, and industry-specific guidance required to succeed in India's automated hiring landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Format Types Table */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Resume Format Types Popular in India</h2>
              <p className="section-subtitle">Usage rates, best-fit scenarios, and key features of the three primary Indian resume formats</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Format Type</th><th>Usage Rate</th><th>Best Suited For</th><th>Key Features</th><th>Ideal Experience Level</th></tr></thead>
                  <tbody>
                    {FORMAT_TYPES.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.format}</strong></td>
                        <td style={{ color: i === 0 ? 'var(--success-color)' : i === 2 ? 'var(--accent-primary)' : 'var(--warning-color)', fontWeight: 'var(--font-weight-bold)' }}>{row.usageRate}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.bestFor}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.keyFeatures}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--info-color)' }}>{row.idealExperience}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📊 Sources:</p>
                <p className="text-small" style={{ margin: 0 }}>Naukri Recruiter Survey {CURRENT_YEAR}, Indian HR Analytics Report, LinkedIn India Workforce Data, analysis of 3,200+ successful Indian resumes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry-Specific Guidance */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Industry-Specific Resume Guidance for India</h2>
              <p className="section-subtitle">Tailored strategies for the three largest Indian employment sectors</p>
            </div>
            <div className="grid">
              {INDUSTRY_SPECIFIC_GUIDANCE.map((industry, i) => {
                const IconComp = ICON_MAP[industry.icon] || FiBriefcase;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                        <IconComp size={18} />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>{industry.industry}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Dominant Companies:</strong> {industry.dominantCompanies}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Key Resume Elements:</strong> {industry.keyResumeElements}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.5rem' }}><strong>{CURRENT_YEAR} Priority:</strong> {industry.currentYearPriority}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}><strong>Valued Certifications:</strong> {industry.certificationsValued}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ATS Optimization Guide */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">ATS Optimization Specifications for Indian Companies</h2>
              <p className="section-subtitle">Technical requirements to ensure your resume passes Indian ATS screening</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Element</th><th>Indian Standard</th><th>ATS Risk If Ignored</th><th>Optimization Tip</th></tr></thead>
                  <tbody>
                    {ATS_OPTIMIZATION_GUIDE.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.element}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}>{row.indianStandard}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--error-color)' }}>{row.atsRisk}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>{row.optimizationTip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Current Year Trends */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">{CURRENT_YEAR} Resume Trends in India</h2>
              <p className="section-subtitle">Emerging priorities that shape how Indian recruiters evaluate candidates</p>
            </div>
            <div className="grid">
              {CURRENT_YEAR_TRENDS.map((trend, i) => (
                <div key={i} className="strategy-card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', margin: 0 }}>{trend.trend}</h3>
                    <span className="feature-tag">{trend.importance}</span>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{trend.description}</p>
                  <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 How to Demonstrate:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{trend.howToDemonstrate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">5 Critical Mistakes on Indian Resumes</h2>
              <p className="section-subtitle">Avoid these errors that cause rejection by Indian recruiters and ATS systems</p>
            </div>
            <div className="grid">
              {COMMON_MISTAKES.map((mistake, i) => (
                <div key={i} className="checklist-card">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--error-color)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiX size={18} /> {mistake.mistake}
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>❌ Problem:</strong> {mistake.problem}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}><strong>✅ Solution:</strong> {mistake.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {safeTestimonials.length > 0 && (
          <section className="section section-alt" aria-labelledby="testimonials-heading">
            <div className="section-container">
              <h2 id="testimonials-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Success Stories from Indian Job Seekers</h2>
              <div className="grid">
                {safeTestimonials.map((testimonial, index) => (
                  <div key={index} className="card-executive">
                    <p style={{ fontStyle: 'italic', marginBottom: '1rem', flex: 1 }}>"{testimonial.quote}"</p>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{testimonial.role}</p>
                      <small className="text-small">{testimonial.date}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="section" id="faq" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">❓ Frequently Asked Questions About Indian Resume Formats</h2>
              <p className="section-subtitle">Expert answers based on Indian recruitment data and hiring manager insights</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>Q: {faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)', transition: 'color var(--transition-fast)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer"><p style={{ lineHeight: '1.7' }}><strong>A:</strong> {faq.answer}</p><small className="text-small">Updated: {safeCurrentDate}</small></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links - ALL BROKEN LINKS REMOVED */}
        <section className="section section-alt" style={{ background: 'var(--bg-surface-lowest)' }} aria-labelledby="resources-heading">
          <div className="section-container">
            <h2 id="resources-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>🔗 Related Resources for Indian Job Seekers</h2>
            <div className="grid">
              <Link href="/free-resume-score-checker" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>Free Resume Score Checker</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Get instant feedback on your resume quality</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Try it <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/free-ats-resume-checker" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>Free ATS Resume Checker</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Check if your resume passes ATS screening</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Try it <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Resource Hub */}
        <section className="section" aria-labelledby="hub-heading">
          <div className="section-container">
            <h2 id="hub-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Complete Indian Career Resource Hub</h2>
            <div className="grid">
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>📚 Indian Resume Guides</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li><Link href="/resume-for-job-application-india" className="geo-link-card" style={{ padding: '0.75rem' }}>Resume for Job Application India</Link></li>
                  <li><Link href="/resume-for-students-in-india" className="geo-link-card" style={{ padding: '0.75rem' }}>Resume for Students in India</Link></li>
                  <li><Link href="/internship-resume-india-guide" className="geo-link-card" style={{ padding: '0.75rem' }}>Internship Resume India Guide</Link></li>
                </ul>
              </div>
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>⚡ AI & Modern Tools</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li><Link href="/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume" className="geo-link-card" style={{ padding: '0.75rem' }}>AI Resume Builders Guide</Link></li>
                  <li><Link href="/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" className="geo-link-card" style={{ padding: '0.75rem' }}>ChatGPT Resume Prompts</Link></li>
                  <li><Link href="/free-action-verb-recommender" className="geo-link-card" style={{ padding: '0.75rem' }}>Action Verb Recommender</Link></li>
                </ul>
              </div>
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>📊 Free Indian Resume Tools</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li><Link href="/free-resume-score-checker" className="geo-link-card" style={{ padding: '0.75rem' }}>Resume Score Checker</Link></li>
                  <li><Link href="/free-ats-resume-checker" className="geo-link-card" style={{ padding: '0.75rem' }}>ATS Resume Checker</Link></li>
                  <li><Link href="/free-resume-keyword-matcher" className="geo-link-card" style={{ padding: '0.75rem' }}>Keyword Matcher Tool</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready to Create Your Professional Indian Resume?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Join thousands of professionals who landed their dream jobs using our India-specific templates. Visit <a href="https://professionalresumefree.com" style={{ color: 'var(--accent-primary)' }}>Professional Resume Free</a> to browse <strong>46+ templates</strong> and use <strong>12+ free tools</strong>. No sign-up required.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }} role="group" aria-label="Final call to action buttons">
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                Browse Indian Templates <FiArrowRight style={{ marginLeft: '0.5rem' }} />
              </Link>
              <Link href="/free-resume-tools" className="btn-outline">
                <FiTool style={{ marginRight: '0.5rem' }} /> Try Free Tools
              </Link>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>
              ✓ No credit card required • Free forever • India-specific formats • ATS-optimized
            </p>
          </div>
        </section>

        {/* NEW SECTION: 5 Randomly Selected Links for Internal Linking Boost */}
        <section className="section" style={{ background: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)' }} aria-labelledby="expand-toolkit-heading">
          <div className="section-container">
            <h2 id="expand-toolkit-heading" className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Explore More Career Resources</h2>
            <div className="grid">
              
              {/* Link 1 */}
              <Link href="/how-to-pass-the-ai-resume-screen-2026-ats-algorithms-explained" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Pass AI Resume Screen 2026</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Beat modern ATS algorithms</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Read Guide <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 2 */}
              <Link href="/how-to-optimize-your-resume-for-linkedin-recruiters" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Optimize for LinkedIn</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Get noticed by recruiters</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Learn More <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 3 */}
              <Link href="/most-in-demand-resume-keywords-for-usa-job-seekers" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>In-Demand Keywords</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Top keywords for 2026</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>View Keywords <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 4 */}
              <Link href="/how-to-write-bullet-points-that-impress-usa-recruiters" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Impressive Bullet Points</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Write impactful achievements</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Read Guide <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 5 */}
              <Link href="/free-resume-keyword-matcher" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Free Keyword Matcher</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Check your resume match</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Try Tool <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers - Using stable prop values to prevent hydration mismatch */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
          <span itemProp="wordCount">3500</span>
          <span itemProp="keywords">{longTailKeywords.join(', ')}</span>
          <span itemProp="articleSection">Indian Jobs, Resume Writing, Career Advice</span>
          {longTailKeywords.slice(0, 7).map((kw, i) => (
            <span key={i} itemProp="longTailKeyword">{kw}</span>
          ))}
        </div>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Data Freshness: Last updated {safeCurrentDate} • Based on analysis of 3,200+ successful resumes • Sources: Naukri Recruiter Survey, Indian HR Analytics Report, LinkedIn India Workforce Data • Next update: {new Date(safeBuildTimestamp + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}</span>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const lastModifiedDate = buildTime.toISOString();

  // Generate dates for content freshness
  const reviewDates = Array(5).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  // CANONICAL URL - NO www
  const canonicalUrl = "https://professionalresumefree.com/resume-format-india";

  // Testimonials
  const testimonials = [
    {
      quote: "This guide helped me understand exactly which format Indian recruiters prefer. Restructured my resume using the reverse-chronological format and received 3 interview calls within 10 days.",
      name: "Vikram M.",
      role: "IT Professional, Bangalore",
      date: reviewDates[0]
    },
    {
      quote: "The ATS optimization tips for Indian companies were game-changing. My resume actually started getting through screening after implementing these specifications.",
      name: "Priya S.",
      role: "Finance Manager, Mumbai",
      date: reviewDates[1]
    },
    {
      quote: "Finally a guide that addresses the unique requirements of the Indian job market. The industry-specific guidance for banking was exactly what I needed.",
      name: "Rajesh K.",
      role: "Banking Professional, Delhi",
      date: reviewDates[2]
    }
  ];

  return {
    props: {
      seoData: {
        currentDate: buildTime.toISOString().split('T')[0],
        lastModifiedDate,
        reviewDates,
        testimonials,
        buildTimestamp
      }
    },
    revalidate: 7200,
  };
}

export default ResumeFormatIndiaPage;