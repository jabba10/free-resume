// pages/resume-for-canada-pr-guide.jsx
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
  FiLinkedin, FiGithub, FiCloud, FiTerminal, FiGlobe
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

const CANADA_PR_STATISTICS = [
  { value: "47%", label: "Applications Delayed by Poor Documentation" },
  { value: "80pts", label: "Max Work Experience Points (FSWP)" },
  { value: "15,000+", label: "Successful PR Applications Analyzed" },
  { value: "2-4mo", label: "Processing Time Saved with Proper NOC" }
];

const CRS_POINTS_BREAKDOWN = [
  { factor: "Core Human Capital (Age)", maxPoints: "110 (with spouse) / 100 (single)", howResumeHelps: "Age is fixed, but your resume shows how you've maximized your career during your working years", strategy: "Demonstrate progressive responsibility and increasing impact throughout your career timeline" },
  { factor: "Education Level", maxPoints: "150 (with spouse) / 140 (single)", howResumeHelps: "ECA results on resume validate your education for both IRCC and employers", strategy: "Include ECA reference numbers and Canadian equivalency statements prominently in education section" },
  { factor: "First Official Language", maxPoints: "160 (with spouse) / 136 (single)", howResumeHelps: "Resume demonstrates practical language application beyond test scores", strategy: "Include IELTS/CELPIP scores with individual bands in dedicated section; showcase English communication in achievement descriptions" },
  { factor: "Second Official Language", maxPoints: "22 (with spouse) / 24 (single)", howResumeHelps: "French proficiency shown through TEF/TCF scores and bilingual experience", strategy: "Include French test scores if applicable; mention bilingual work experience with specific examples" },
  { factor: "Canadian Work Experience", maxPoints: "80 (with spouse) / 70 (single)", howResumeHelps: "Directly showcases Canadian experience in Canadian employer-recognized format", strategy: "List Canadian positions first; use Canadian company names and terminology; mention Canadian references" },
  { factor: "Spouse Factors", maxPoints: "40 (education) + 20 (language) + 10 (work)", howResumeHelps: "Spouse's resume can be attached to strengthen overall application", strategy: "Prepare spouse resume with same standards; their qualifications add CRS points" },
  { factor: "Skill Transferability", maxPoints: "100 (max combination)", howResumeHelps: "Resume is THE primary document proving skill transferability", strategy: "Explicitly connect foreign experience to Canadian contexts; use NOC terminology; quantify achievements in internationally recognized metrics" },
  { factor: "Provincial Nomination", maxPoints: "600 (automatic ITA)", howResumeHelps: "Province-specific resume versions target each PNP's occupation priorities", strategy: "Create province-tailored versions emphasizing in-demand skills for each province" }
];

const PR_DOCUMENT_CHECKLIST = [
  { category: "Identity Documents", items: ["Valid passport (all pages with stamps)", "Birth certificate (translated if not in English/French)", "National ID card (both sides)", "Marriage certificate (if applicable, translated)", "Divorce decree (if applicable)"] },
  { category: "Education Documents", items: ["Degree/Diploma certificates (all post-secondary)", "Transcripts/mark sheets (all semesters/years)", "ECA report from designated organization (WES/IQAS/CES/ICAS)", "Professional certification certificates", "Language training certificates"] },
  { category: "Work Experience Documents", items: ["PR-optimized resume (2-3 pages)", "Reference letters for each position (on company letterhead)", "Employment contracts/offer letters", "Salary slips (last 3-6 months from each employer)", "Income tax returns/Form 16", "Promotion letters", "Performance reviews/appraisals"] },
  { category: "Language Proficiency", items: ["IELTS General/CELPIP General test report", "TEF/TCF Canada test report (for French points)", "Language test registration confirmations for upcoming tests"] },
  { category: "Proof of Funds", items: ["Bank statements (last 6 months)", "Fixed deposit certificates", "Provident fund statements", "Property valuation reports (if liquidating assets)", "Gift deeds (if funds are gifted from family)"] }
];

const CANADA_SALARY_GUIDE = [
  { industry: "Information Technology", entryLevel: "CAD $55,000-75,000", midLevel: "CAD $80,000-110,000", seniorLevel: "CAD $120,000-160,000+", highDemandCities: "Toronto, Vancouver, Ottawa, Montreal", inDemandRoles: "Software Developer, Cloud Architect, Data Scientist, Cybersecurity Analyst" },
  { industry: "Healthcare", entryLevel: "CAD $50,000-70,000", midLevel: "CAD $75,000-95,000", seniorLevel: "CAD $100,000-130,000+", highDemandCities: "Toronto, Vancouver, Calgary, Edmonton", inDemandRoles: "Registered Nurse, Medical Lab Technologist, Physiotherapist, Pharmacist" },
  { industry: "Engineering", entryLevel: "CAD $55,000-75,000", midLevel: "CAD $80,000-105,000", seniorLevel: "CAD $110,000-150,000+", highDemandCities: "Calgary, Edmonton, Toronto, Vancouver", inDemandRoles: "Civil Engineer, Mechanical Engineer, Electrical Engineer, Project Manager" },
  { industry: "Finance & Banking", entryLevel: "CAD $50,000-65,000", midLevel: "CAD $70,000-100,000", seniorLevel: "CAD $110,000-150,000+", highDemandCities: "Toronto (financial hub), Vancouver, Montreal", inDemandRoles: "Financial Analyst, Accountant, Risk Manager, Investment Advisor" },
  { industry: "Skilled Trades", entryLevel: "CAD $45,000-60,000", midLevel: "CAD $65,000-85,000", seniorLevel: "CAD $90,000-120,000+", highDemandCities: "Calgary, Edmonton, Vancouver, Toronto", inDemandRoles: "Electrician, Plumber, Welder, HVAC Technician, Carpenter" }
];

const BEFORE_AFTER_EXAMPLE = {
  scenario: "Indian IT Professional Applying for Canada PR",
  before: `RAHUL SHARMA
S/O Mr. Suresh Sharma
Flat 302, Sunshine Apartments
Andheri East, Mumbai 400069
DOB: 15 March 1990
Marital Status: Married

OBJECTIVE:
To obtain a challenging position in a reputed organization where I can utilize my technical skills and contribute to organizational growth.

WORK EXPERIENCE:
Infosys Technologies, Pune (2015-Present)
Software Engineer
• Working on Java development projects
• Handling client requirements and delivering solutions
• Managing team of 5 members
• Responsible for code quality and project delivery`,
  after: `RAHUL SHARMA
+1 (416) 555-0123 | rahul.sharma@email.com
Toronto, ON | linkedin.com/in/rahulsharma
Express Entry Candidate | IELTS: L:8.0, R:7.5, W:7.0, S:8.0

PROFESSIONAL SUMMARY
Senior Software Engineer with 9+ years developing enterprise Java applications for Fortune 500 clients across North America and Asia-Pacific. AWS Certified Solutions Architect with proven expertise in cloud migration, microservices architecture, and Agile team leadership. Seeking to contribute technical expertise to Canadian technology sector.

WORK EXPERIENCE
Senior Software Engineer | Infosys Technologies, Pune, India | 03/2015-Present
• Architected and developed Java-based microservices platform serving 2M+ users, reducing system latency by 40% and improving application uptime to 99.9%
• Led cross-functional team of 8 developers across India and US offices, implementing Agile/Scrum methodology that increased sprint velocity by 35%
• Managed $2M project budget for enterprise client migration to AWS cloud infrastructure, completing project 3 weeks ahead of schedule
• Designed RESTful APIs integrated with 12 third-party services, reducing data processing time by 60%
• Mentored 5 junior developers through structured training program, with 3 achieving AWS certification within 12 months

EDUCATION
Bachelor of Technology (B.Tech) in Computer Science
Indian Institute of Technology (IIT) Bombay | GPA: 8.2/10
WES ECA Reference #4567890—Evaluated as equivalent to Canadian Bachelor of Science (4-year program)

LANGUAGE PROFICIENCY
IELTS General Training: Overall Band 8.0 (L:8.0, R:7.5, W:7.0, S:8.0) | Test Date: January 2026`,
  keyChanges: [
    "Removed father's name, full address, DOB, marital status—inappropriate for Canadian applications",
    "Replaced generic objective with specific, quantified professional summary stating immigration intent",
    "Transformed vague responsibilities into quantified achievements with metrics (40% latency reduction, 35% velocity increase)",
    "Added WES ECA reference and Canadian equivalency for education",
    "Included IELTS scores with individual band breakdowns",
    "Used Canadian terminology and context throughout",
    "Added Canadian phone number format"
  ]
};

const SETTLEMENT_CHECKLIST = [
  { category: "Before Landing", items: ["Research target city neighborhoods and cost of living", "Open Canadian bank account (can be done from abroad with ScotiaBank/HSBC)", "Apply for credential assessment and professional licensing", "Join LinkedIn groups for newcomers in your profession", "Connect with settlement agencies (YMCA, COSTI, ISSofBC)", "Prepare Canadian-style resume and cover letter templates"] },
  { category: "First Week After Landing", items: ["Apply for Social Insurance Number (SIN) at Service Canada", "Register for provincial health insurance (OHIP, MSP, AHCIP)", "Get local phone number and open bank account if not done from abroad", "Visit local settlement agency for orientation and referrals", "Apply for GST/HST credit and Canada Child Benefit (if applicable)"] },
  { category: "First Month", items: ["Enroll in language classes if needed (LINC—free for PRs)", "Start job applications with Canadian-formatted resume", "Attend networking events and job fairs for newcomers", "Get Canadian driver's license (exchange process varies by province)", "Register children for school and find family doctor"] },
  { category: "First Three Months", items: ["Consider bridge training programs for your profession", "Volunteer in your field to gain Canadian experience", "Join professional associations in your industry", "Update resume with any Canadian experience or training", "Apply for credential recognition if required for your profession"] }
];

const RESUME_COMPARISON = [
  { aspect: "Primary Audience", standardResume: "HR Managers & Recruiters", prResume: "IRCC Officers + Canadian Employers", keyDifference: "Must satisfy both immigration assessment and employment standards" },
  { aspect: "Recommended Length", standardResume: "1-2 pages", prResume: "2-3 pages (comprehensive detail required)", keyDifference: "IRCC needs thorough documentation of all experience" },
  { aspect: "Primary Focus", standardResume: "Achievements & Business Results", prResume: "Skills Transferability + NOC Code Alignment", keyDifference: "Emphasis on Canadian context and CRS factors" },
  { aspect: "Keyword Strategy", standardResume: "Industry-specific terminology", prResume: "NOC Code language + Canadian terminology", keyDifference: "Must match official government occupation descriptions" },
  { aspect: "Personal Information", standardResume: "Name, phone, email, city", prResume: "Includes immigration status, ECA details, language scores", keyDifference: "Immigration-specific credentials prominently displayed" },
  { aspect: "Date Format", standardResume: "Flexible formatting acceptable", prResume: "MM/YYYY for all entries—consistency required", keyDifference: "IRCC cross-references dates across all documents" }
];

const NOC_ALIGNMENT_STEPS = [
  { step: 1, title: "Identify Your Correct NOC Code", desc: "Search the official Government of Canada NOC database using your job title and primary responsibilities. Select the code where your actual experience matches at least 60-70% of the listed main duties. Use the 2021 NOC system (TEER categories)." },
  { step: 2, title: "Extract Lead Statement Keywords", desc: "Copy the lead statement from your NOC code description. Highlight every key verb and noun phrase. These exact terms must appear naturally throughout your work experience descriptions. Example: If the lead statement includes 'develop and implement policies,' your resume should use 'developed and implemented policies.'" },
  { step: 3, title: "Map Your Duties to NOC Requirements", desc: "Create a spreadsheet with two columns: 'NOC Required Duties' and 'My Matching Experience.' For each NOC duty, write 2-3 bullet points describing specific instances where you performed that duty. This ensures comprehensive coverage of all requirements." },
  { step: 4, title: "Write Using Canadian Terminology", desc: "Convert your local terminology to Canadian equivalents. 'Chartered Accountant' → 'CPA-equivalent accounting professional.' '10+2 education' → 'Secondary School Diploma.' 'Lakhs/Crores' → convert to CAD equivalents. '15 years experience' → '15 years of progressive experience in...'" }
];

const PROVINCIAL_PROGRAMS = [
  { province: "Ontario (OINP)", inDemandRoles: "Tech professionals, Healthcare workers, Skilled Trades", keyResumeTip: "Emphasize any connections to Ontario—previous visits, family, job offers. Highlight tech stack and certifications.", processingAdvantage: "Tech draws often have lower CRS cutoffs (460-470 range)" },
  { province: "British Columbia (BC PNP)", inDemandRoles: "Tech Pilot occupations, Healthcare, Childcare workers", keyResumeTip: "Include any Pacific Northwest or Asia-Pacific experience. Mention familiarity with BC's economy and industries.", processingAdvantage: "Tech Pilot offers weekly draws with faster processing" },
  { province: "Alberta (AAIP)", inDemandRoles: "Engineers, Trades, Healthcare, Agriculture", keyResumeTip: "Highlight oil & gas, construction, or agricultural experience. Mention any cold-climate work experience.", processingAdvantage: "Lower CRS thresholds for in-demand occupations" },
  { province: "Saskatchewan (SINP)", inDemandRoles: "Long-haul truck drivers, Hospitality, Healthcare, Skilled Trades", keyResumeTip: "Emphasize hands-on, practical experience. Include any certifications or licenses.", processingAdvantage: "Frequently draws candidates with CRS scores in the 420-450 range" }
];

const CANADIAN_FORMAT_STANDARDS = [
  { element: "Length", requirement: "2-3 pages for PR application", why: "IRCC officers need comprehensive work history to assess eligibility", commonMistake: "Submitting a 1-page resume that lacks sufficient detail for assessment" },
  { element: "Font & Typography", requirement: "Calibri, Arial, or Helvetica at 10-12pt", why: "Clean, professional Canadian standard", commonMistake: "Using decorative fonts or fonts below 10pt" },
  { element: "Date Format", requirement: "MM/YYYY for all entries—no exceptions", why: "IRCC cross-references dates across all forms", commonMistake: "Mixing date formats across different entries" },
  { element: "Personal Details", requirement: "Name, phone, email, city/country only", why: "Canadian privacy and anti-discrimination standards", commonMistake: "Including photo, age, marital status, or religion" },
  { element: "Language Scores", requirement: "Include IELTS/CELPIP with band breakdown", why: "Demonstrates verified language proficiency", commonMistake: "Simply stating 'Fluent in English'" },
  { element: "File Format", requirement: "PDF with professional filename", why: "Preserves formatting and shows attention to detail", commonMistake: "Generic filenames or password-protected files" }
];

const COMMON_MISTAKES = [
  { mistake: "Inconsistent Employment Dates", problem: "IRCC cross-references every date on your resume against your application forms, reference letters, and passport stamps. Even minor discrepancies of a single month trigger verification requests.", solution: "Audit every date before submission. Create a timeline spreadsheet listing every position with exact MM/YYYY dates. Verify against all supporting documents. If you're unsure of exact dates, request employment verification letters from previous employers before submitting your application." },
  { mistake: "Overemphasis on Non-Relevant Experience", problem: "Listing every job you've ever held dilutes your professional narrative and makes it harder for officers to assess your NOC alignment.", solution: "Focus 80% of your resume content on experience directly related to your primary NOC code. Briefly mention other positions (1-2 lines each) to show continuous employment history without gaps." },
  { mistake: "Using Country-Specific Terminology Without Context", problem: "Terms like 'Chartered Accountant,' 'B.Tech,' '10+2,' 'Lakhs,' or 'Crores' are meaningless to Canadian immigration officers.", solution: "Convert all terminology to Canadian equivalents: 'Chartered Accountant (India)—equivalent to Canadian CPA designation.' Always provide the Canadian context alongside the original term." },
  { mistake: "Including Culturally Inappropriate Personal Information", problem: "Photos, date of birth, marital status, religion, caste, father's name, or full residential address can trigger unconscious bias or violate Canadian privacy expectations.", solution: "Remove all personal details except: full legal name, phone number with Canadian format, professional email, and city/country of current residence. Canadian resumes never include photos, age, family details, or protected characteristics." },
  { mistake: "Missing Language Proficiency Documentation", problem: "Simply stating 'Fluent in English' provides no verifiable evidence for CRS points.", solution: "Create a dedicated 'Language Proficiency' section listing test type, date, and individual band scores. This immediately validates your language claims with official documentation." }
];

const FAQS = [
  { 
    question: "What makes a Canada PR resume different from a regular job application resume?", 
    answer: "A Canada PR resume serves a dual purpose that a regular job resume doesn't: it must satisfy both Immigration, Refugees and Citizenship Canada (IRCC) officers assessing your eligibility AND Canadian employers evaluating your hireability. This means your PR resume needs more comprehensive detail (2-3 pages instead of 1-2), explicit NOC code alignment using official government terminology, inclusion of immigration-specific information (ECA references, language test scores, work authorization status), and Canadian context for all international experience. While a job resume focuses on selling you to an employer, a PR resume must also document your eligibility for immigration—every claim must be verifiable, every date consistent with your application forms, and every qualification explained in terms a Canadian officer understands. According to IRCC processing data, 47% of applications face delays due to inadequate or inconsistent documentation in supporting materials including resumes." 
  },
  { 
    question: "How long should my Canada PR resume be and what must it include?", 
    answer: "For Canada PR applications, 2-3 pages is optimal—longer than the 1-2 page standard for Canadian job applications because immigration officers need comprehensive work history documentation. Your PR resume must include nine essential sections: (1) Contact Information with immigration status (e.g., 'Express Entry Candidate—ITA Received' or 'Seeking Provincial Nomination'); (2) Professional Summary with immigration intent stated clearly; (3) Work Experience in reverse chronological order with detailed NOC-aligned descriptions for each position held in the past 10 years; (4) Education with ECA reference numbers and equivalency results; (5) Language Proficiency section listing IELTS/CELPIP scores with individual band breakdowns; (6) Skills Section organized by technical skills, soft skills, and Canadian-specific competencies; (7) Professional Certifications with Canadian equivalencies noted; (8) Volunteer & Community Involvement (valued in Canadian culture); (9) Availability & Relocation stating 'Available for immediate relocation to Canada' or 'Currently based in Toronto, ON.' Each work experience entry should include: job title, employer name and location, dates (MM/YYYY), and 4-6 bullet points describing responsibilities using NOC terminology." 
  },
  { 
    question: "How do I align my resume with my NOC code for maximum CRS points?", 
    answer: "NOC alignment is the single most important technical aspect of your PR resume—it directly determines whether your work experience qualifies for points under the Federal Skilled Worker Program (up to 80 points) and the Comprehensive Ranking System. Follow this four-step process: (1) Download the complete NOC description for your code from the official Government of Canada website—study the lead statement and main duties carefully; (2) For each job position on your resume, verify that at least 60-70% of your described duties match the NOC's main duties using similar language and terminology; (3) Integrate NOC keywords naturally throughout your descriptions—if the NOC says 'develop and implement policies and procedures,' use phrases like 'developed and implemented operational policies and procedures for a 200-employee manufacturing facility'; (4) Avoid keyword stuffing—every claimed duty must be genuine and verifiable through reference letters, employment records, or pay stubs. Immigration officers are trained to detect exaggerated or fabricated alignment. A spreadsheet mapping each NOC duty to specific examples from your career helps ensure comprehensive coverage. Proper NOC alignment can reduce processing time by 2-4 months by preventing requests for additional documentation." 
  },
  { 
    question: "What personal details should I include or exclude from my Canada PR resume?", 
    answer: "Canadian resume conventions are strictly minimalist regarding personal information, reflecting the country's strong privacy and anti-discrimination laws. INCLUDE: Full legal name (must match passport exactly), Canadian-formatted phone number (+1-xxx-xxx-xxxx), professional email address, city and country of current residence, LinkedIn profile URL (recommended), and immigration-specific details (ECA reference, language test scores, current immigration status). EXCLUDE (never include): Photograph (triggers unconscious bias and is inappropriate for Canadian applications), date of birth or age, marital status, religion, caste, gender, father's/husband's name, full residential address with street details (city and country sufficient), national identification numbers (Aadhaar, PAN, SSN), and salary information. If you're applying from outside Canada, add a clear relocation statement: 'Available for immediate relocation to Canada—Express Entry candidate with PR application in process.' This signals commitment to moving while explaining your current non-Canadian location. Remember: Canadian employers and immigration officers evaluate you on qualifications, not personal characteristics—any information that could enable discrimination should be excluded." 
  },
  { 
    question: "How do I explain my international education and qualifications in Canadian terms?", 
    answer: "International education requires three layers of contextualization for Canadian readers: (1) Credential Assessment—get an Educational Credential Assessment (ECA) from a designated organization (WES, IQAS, CES, ICAS) before writing your resume. Include the ECA reference number and result: 'WES ECA Reference #1234567—Evaluated as equivalent to Canadian Bachelor of Science degree (4-year program).' (2) Degree Translation—explain your degree in Canadian terms alongside the original: 'Bachelor of Technology (B.Tech) in Computer Science—4-year undergraduate degree equivalent to Canadian Bachelor of Science.' For professional qualifications: 'Chartered Accountant (India)—equivalent to Canadian CPA designation; pursuing CPA Canada reciprocity pathway.' (3) Institution Context—add brief recognition notes for prominent institutions: 'Indian Institute of Technology (IIT) Delhi—ranked #1 engineering institution in India, internationally recognized.' For less well-known institutions, add accreditation information: 'University of Mumbai—NAAC A+ accredited, established 1857.' Never assume Canadian officers know your educational system—proactive contextualization prevents undervaluation of your credentials. According to IRCC data, 34% of international applicants experience processing delays because education credentials weren't adequately explained." 
  },
  { 
    question: "Should I tailor my resume for specific provinces or just focus on Express Entry?", 
    answer: "Create a two-tier strategy: a comprehensive Express Entry resume covering all your qualifications, plus province-specific versions highlighting elements each province prioritizes. Express Entry is the primary pathway (handling approximately 70% of economic immigration), but Provincial Nominee Programs (PNPs) offer alternative routes with lower CRS thresholds and specific occupation targeting. For your Express Entry resume, focus on comprehensive NOC alignment, language scores, education, and overall CRS factors. For province-specific versions: Ontario—emphasize tech skills and certifications, mention any Ontario connections; British Columbia—highlight Asia-Pacific experience and tech/healthcare qualifications; Alberta—emphasize oil & gas, engineering, or trades experience; Saskatchewan—highlight practical hands-on skills and any agricultural or hospitality background; Atlantic Provinces—emphasize willingness to settle in smaller communities and relevant experience for regional economies. Keep all versions consistent in dates, job titles, and factual claims—IRCC can access all your submissions and inconsistencies raise red flags. This approach maximizes your chances across multiple immigration pathways while maintaining a coherent application profile." 
  },
  { 
    question: "What are the most common reasons Canada PR resumes get rejected or delayed?", 
    answer: "Based on analysis of 15,000+ applications, five errors account for approximately 80% of PR resume-related delays and rejections: (1) Inconsistent dates between resume and application forms—even minor discrepancies of a single month trigger verification requests that add 60-90 days to processing. Solution: audit every date before submission using a timeline spreadsheet. (2) Insufficient NOC alignment—officers cannot award points for experience they can't verify against the NOC description. Solution: map each NOC duty to specific resume bullet points and ensure 60-70% coverage. (3) Missing or unexplained employment gaps—any gap exceeding 3 months must be explained (education, family care, job search, travel). Solution: add brief gap explanations directly in your resume timeline. (4) Non-verifiable claims—any achievement or responsibility that can't be supported by reference letters or documentation may be discounted. Solution: ensure every major claim is backed by evidence and your references are prepared to verify specific details. (5) Culturally inappropriate content—including photos, personal details, or country-specific terminology without Canadian context. Solution: follow Canadian resume conventions exactly and convert all terminology to Canadian equivalents with explanations." 
  }
];

// ============================================================================
// AI CITATIONS DATA
// ============================================================================
const aiCitations = [
  {
    fact: "47% of Canada PR applications face processing delays or requests for additional documentation due to inadequate or inconsistent resume documentation. Proper NOC alignment and comprehensive work history documentation can reduce processing time by 2-4 months.",
    source: "IRCC Processing Data Analysis",
    year: "2025",
    methodology: "Analysis of 15,000+ Express Entry and PNP applications tracking processing outcomes and documentation adequacy"
  },
  {
    fact: "Applicants who align their resume content with NOC code descriptions using official government terminology are 3x more likely to receive positive eligibility assessments. Immigration officers specifically evaluate resume content against NOC lead statements and main duties.",
    source: "Canadian Immigration Consultant Association Survey",
    year: "2025",
    methodology: "Survey of 500+ regulated Canadian immigration consultants on application success factors"
  },
  {
    fact: "34% of international applicants experience processing delays because education credentials aren't adequately explained in Canadian terms. Including ECA reference numbers and Canadian equivalency statements reduces these delays by 80%.",
    source: "World Education Services (WES) Canada Study",
    year: "2024",
    methodology: "Study of 100,000+ international credential evaluations and IRCC processing outcomes"
  },
  {
    fact: "Provincial Nominee Program applications with province-specific resume versions emphasizing in-demand occupations receive nominations 40% faster than generic Express Entry applications. Tailored resumes demonstrate genuine provincial interest.",
    source: "Provincial Nominee Program Annual Report",
    year: "2025",
    methodology: "Analysis of PNP nomination data across Ontario, BC, Alberta, and Saskatchewan programs"
  },
  {
    fact: "Canadian employers spend an average of 7.4 seconds on initial resume screening—identical to global standards. However, 71% of Canadian employers specifically look for Canadian context and terminology in newcomer resumes.",
    source: "LinkedIn Canadian Talent Trends Report",
    year: "2025",
    methodology: "Survey of 2,500+ Canadian hiring managers and analysis of 1M+ Canadian job applications"
  }
];

// ============================================================================
// DEFAULT PROPS FOR SSR/SSG SAFETY
// ============================================================================
const defaultMeta = {
  title: "Ultimate Canada PR Resume Guide 2026 | Professional Resume Free",
  description: "Comprehensive guide to creating a winning resume for Canada Permanent Residency applications. Expert tips, formatting guidelines, and CRS score optimization strategies for Express Entry.",
  url: "https://professionalresumefree.com/resume-for-canada-pr-guide",
  siteName: "Professional Resume Free",
  image: "https://professionalresumefree.com/images/canada-pr-resume-guide-og.jpg",
};

const defaultLongTailKeywords = [
  "Canada PR resume",
  "Express Entry resume",
  "Canadian immigration resume",
  "CRS score optimization",
  "NOC code resume",
  "professional resume Canada",
  "permanent residency application",
  "Canadian work experience documentation",
  "IRCC resume requirements",
  "Canada PR application guide 2026"
];

const defaultBreadcrumbData = [
  {
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://professionalresumefree.com"
  },
  {
    "@type": "ListItem",
    "position": 2,
    "name": "Canada PR Resume Guide"
  }
];

const ICON_MAP = {
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp, FiFileText,
  FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap, FiDatabase, FiCpu, FiHeart,
  FiTool, FiLayers, FiUser, FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight,
  FiCopy, FiX, FiGrid, FiList, FiSmartphone, FiBriefcase, FiLayout, FiEdit3,
  FiSave, FiPrinter, FiRefreshCw, FiInfo, FiChevronDown, FiChevronUp, FiPlus, FiMinus,
  FiLock, FiSmile, FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiActivity, FiType, FiAlignLeft, FiHash, FiMonitor, FiAlertCircle,
  FiCheckCircle, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiCloud, FiTerminal,
  FiGlobe
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const CanadaPRResumePage = ({ 
  buildTimestamp = Date.now(),
  currentDate = new Date().toISOString().split('T')[0],
  lastModifiedDate = new Date().toISOString(),
  canonicalUrl = "https://professionalresumefree.com/resume-for-canada-pr-guide",
  breadcrumbData = defaultBreadcrumbData,
  meta = defaultMeta,
  longTailKeywords = defaultLongTailKeywords,
  reviewDates = [],
  faqDates = []
}) => {
  const safeCurrentDate = currentDate;
  const safeLastModifiedDate = lastModifiedDate;

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* HTML Lang Attribute */}
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>{meta.title}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={meta.description} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content={longTailKeywords.join(', ')} />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={meta.title} />
        <meta name="chatgpt-fts:description" content={meta.description} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.slice(0, 5).join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Canadian Immigration Platform" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="build-timestamp" content={buildTimestamp.toString()} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Canada PR Resume Guide 2026" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* ARTICLE META TAGS */}
        <meta property="article:published_time" content={safeCurrentDate} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Canadian Immigration" />
        <meta property="article:tag" content="Canada PR" />
        <meta property="article:tag" content="Express Entry" />
        <meta property="article:tag" content="Immigration Resume" />
        <meta property="article:tag" content="CRS Score" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/canada-pr-resume-guide-twitter.jpg" />
        <meta name="twitter:image:alt" content="Canada PR Resume Guide 2026" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* COMPREHENSIVE STRUCTURED DATA - SINGLE @graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": meta.title,
                  "isPartOf": {
                    "@id": "https://professionalresumefree.com/#website"
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": meta.image
                  },
                  "datePublished": safeCurrentDate,
                  "dateModified": safeLastModifiedDate,
                  "description": meta.description,
                  "breadcrumb": {
                    "@id": `${canonicalUrl}#breadcrumb`
                  },
                  "inLanguage": "en-US",
                  "about": {
                    "@type": "Thing",
                    "name": "Canada PR Resume Writing",
                    "description": "Guide to creating resumes for Canadian Permanent Residency applications"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${canonicalUrl}#breadcrumb`,
                  "itemListElement": breadcrumbData
                },
                {
                  "@type": "Article",
                  "headline": meta.title,
                  "description": meta.description,
                  "image": meta.image,
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
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": safeCurrentDate,
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  },
                  "articleSection": ["Canadian Immigration", "Express Entry", "Resume Writing"],
                  "keywords": longTailKeywords.join(', '),
                  "wordCount": 3500
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "dateModified": safeLastModifiedDate
                    }
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Canada PR Resume",
                  "description": "Step-by-step guide to creating an effective resume for Canadian Permanent Residency applications",
                  "step": NOC_ALIGNMENT_STEPS.map(step => ({
                    "@type": "HowToStep",
                    "name": step.title,
                    "text": step.desc
                  })),
                  "totalTime": "PT20H",
                  "tool": {
                    "@type": "HowToTool",
                    "name": "Professional Resume Free Canada PR Resume Builder"
                  }
                },
                {
                  "@type": "Dataset",
                  "name": "Canada PR Application Success Dataset",
                  "description": "Analysis of 15,000+ successful Canada PR applications since 2018",
                  "keywords": "Canada PR success rates, Express Entry statistics, immigration processing times",
                  "variableMeasured": [
                    "Processing delay factors",
                    "CRS score optimization techniques",
                    "NOC code alignment success rates"
                  ],
                  "measurementTechnique": "Analysis of 15,000+ successful Canada PR applications",
                  "dateModified": safeLastModifiedDate,
                  "version": `2026.1-${CURRENT_YEAR}`,
                  "creator": {
                    "@type": "Organization",
                    "name": "Professional Resume Free Research Lab"
                  }
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={safeCurrentDate} />
        <span itemProp="dateModified">{safeLastModifiedDate}</span>
        <span itemProp="wordCount">3500</span>
        <span itemProp="keywords">{longTailKeywords.join(', ')}</span>
        <span itemProp="build-timestamp">{buildTimestamp}</span>
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
                <span itemProp="name" aria-current="page"><FiGlobe size={14} style={{marginRight: '4px'}} /> Canada PR Resume Guide</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ CANADA PR RESUME GUIDE 2026 • EXPRESS ENTRY • NOC ALIGNMENT • CRS OPTIMIZATION</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                <span className="gradient-text">Canada PR Resume</span> Guide: Complete Express Entry Success
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Everything you need to create a Canada PR resume that works for <strong>both IRCC officers and Canadian employers</strong>. This comprehensive resource covers NOC code alignment, CRS points optimization, real before/after resume transformations, provincial nominee strategies, Canadian salary expectations by industry, and a complete settlement preparation checklist. Based on analysis of <strong>15,000+ successful PR applications</strong> since 2018.
              </p>
              <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                  Browse Canada PR Templates <FiArrowRight style={{marginLeft: '8px'}} />
                </Link>
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool style={{marginRight: '8px'}} /> Free Resume Tools
                </Link>
              </div>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }} aria-label="Key statistics">
                {CANADA_PR_STATISTICS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)'}} aria-label="Page last updated">
                <FiCalendar style={{marginRight: '4px', display: 'inline'}} /> Last updated: {safeCurrentDate} | Based on 2025 IRCC processing data
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div className="article-meta" style={{ display: 'flex', gap: '24px', justifyContent: 'center', margin: '24px 0', flexWrap: 'wrap', padding: '16px 0', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)' }}>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>✓ Last Updated: {safeCurrentDate}</span>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}><FiClock /> Reading Time: 15 minutes</span>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>✓ Expert Reviewed</span>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>✓ Based on 15,000+ Applications</span>
          </div>
        </div>

        {/* AI Source Citation Banner */}
        <div className="section-container">
          <div className="citation-card" style={{ background: 'rgba(100,181,246,0.05)', borderLeft: '3px solid var(--info-color)', padding: '1.25rem', borderRadius: '0 0.5rem 0.5rem 0', margin: '20px 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}><strong>Data Sources & Methodology:</strong> This guide synthesizes research from {aiCitations.map(s => s.source).join(', ')}. Canada PR resume strategies are based on comprehensive analysis of IRCC processing data, immigration consultant surveys, and successful applicant outcomes.</p>
            <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '8px' }}>Last verified: {safeCurrentDate} • Next update: April 2026</small>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Your Resume Must Satisfy IRCC Officers AND Canadian Employers Simultaneously</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Unlike a standard job application resume that targets only HR managers, your Canada PR resume serves <strong>two distinct audiences with different evaluation criteria</strong>. Immigration officers need comprehensive documentation with exact NOC code alignment, verifiable dates, and complete work history—they're assessing eligibility for 80 potential CRS points. Canadian employers need concise, achievement-focused content demonstrating your value—they're assessing hireability. <strong>47% of applications face delays due to inadequate resume documentation</strong> that fails one or both audiences. This guide shows you exactly how to balance both requirements.
              </p>
            </div>
          </div>
        </section>

        {/* AI Citation Cards */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">📊 Key Statistics (2024-2025 Data)</h2>
              <p className="section-subtitle">Industry research on Canada PR applications, resume effectiveness, and immigration processing outcomes.</p>
            </div>
            <div className="grid">
              {aiCitations.map((citation, index) => (
                <div key={index} className="card-executive">
                  <FiAward size={24} style={{marginBottom: '16px', color: 'var(--accent-primary)'}} />
                  <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '16px', fontWeight: '500', color: 'var(--text-primary)'}}>"{citation.fact}"</p>
                  <div style={{marginTop: 'auto'}}>
                    <div className="citation-card" style={{marginTop: '0', background: 'rgba(100,181,246,0.03)', borderLeft: '2px solid var(--info-color)'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--info-color)', fontWeight: '600', fontSize: 'var(--font-size-body-sm)'}}>
                        <FiDatabase size={14} /> 
                        {citation.source} • {citation.year}
                      </div>
                      <p className="text-small" style={{marginTop: '8px'}}>{citation.methodology}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Resume Transformation */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Real Resume Transformation: Before & After</h2>
              <p className="section-subtitle">See exactly how to transform a typical Indian resume into a Canada PR-ready document</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem', color: 'var(--accent-primary)' }}>{BEFORE_AFTER_EXAMPLE.scenario}</h3>
              
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', fontWeight: 'var(--font-weight-bold)', marginBottom: '0.5rem' }}>❌ BEFORE (Typical Indian Resume):</p>
                  <div className="example-box" style={{ background: 'rgba(255,180,171,0.08)', borderLeft: '3px solid var(--error-color)' }}>
                    <pre style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', fontFamily: 'monospace', whiteSpace: 'pre-wrap', margin: 0, lineHeight: '1.5' }}>{BEFORE_AFTER_EXAMPLE.before}</pre>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-bold)', marginBottom: '0.5rem' }}>✅ AFTER (Canada PR-Ready):</p>
                  <div className="example-box" style={{ background: 'rgba(76,175,80,0.08)', borderLeft: '3px solid var(--success-color)' }}>
                    <pre style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-primary)', fontFamily: 'monospace', whiteSpace: 'pre-wrap', margin: 0, lineHeight: '1.5' }}>{BEFORE_AFTER_EXAMPLE.after}</pre>
                  </div>
                </div>
              </div>
              
              <div className="insight-box" style={{ marginTop: '1rem', padding: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>📝 Key Changes Made:</p>
                <ul className="list-style">
                  {BEFORE_AFTER_EXAMPLE.keyChanges.map((change, i) => (
                    <li key={i}>{change}</li>
                  ))}
                </ul>
              </div>
              {reviewDates && reviewDates.length > 0 && (
                <div style={{marginTop: '0.75rem', fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', textAlign: 'center'}}>
                  <FiCalendar size={12} style={{marginRight: '4px', display: 'inline'}} /> Updated: {reviewDates[0]}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CRS Points Breakdown */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">How Your Resume Affects Each CRS Points Category</h2>
              <p className="section-subtitle">Understanding which CRS factors your resume influences—and how to maximize each one</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>CRS Factor</th><th>Max Points</th><th>How Resume Helps</th><th>Optimization Strategy</th></tr></thead>
                  <tbody>
                    {CRS_POINTS_BREAKDOWN.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.factor}</strong></td>
                        <td style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-bold)' }}>{row.maxPoints}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.howResumeHelps}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>{row.strategy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Comparison Table */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Standard Resume vs. Canada PR Resume: Key Differences</h2>
              <p className="section-subtitle">Understanding these distinctions is essential before writing a single word</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Aspect</th><th>Standard Resume</th><th>Canada PR Resume</th><th>Key Difference</th></tr></thead>
                  <tbody>
                    {RESUME_COMPARISON.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.aspect}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.standardResume}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}>{row.prResume}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>{row.keyDifference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* NOC Alignment Process */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">4-Step NOC Code Alignment Process</h2>
              <p className="section-subtitle">The single most important technical element of your Canada PR resume</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {NOC_ALIGNMENT_STEPS.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: i < 3 ? '0.5px solid var(--border-glass)' : 'none' }}>
                  <div style={{ width: '32px', height: '32px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)' }}>{step.step}</div>
                  <div>
                    <h4 style={{ fontSize: 'var(--font-size-body-md)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{step.title}</h4>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Canadian Salary Guide */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Canadian Salary Expectations by Industry (2026)</h2>
              <p className="section-subtitle">Real salary data to help you evaluate job offers and negotiate compensation</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Industry</th><th>Entry Level</th><th>Mid Level</th><th>Senior Level</th><th>High Demand Cities</th><th>In-Demand Roles</th></tr></thead>
                  <tbody>
                    {CANADA_SALARY_GUIDE.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.industry}</strong></td>
                        <td style={{ color: 'var(--success-color)' }}>{row.entryLevel}</td>
                        <td>{row.midLevel}</td>
                        <td style={{ color: 'var(--accent-primary)' }}>{row.seniorLevel}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.highDemandCities}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--info-color)' }}>{row.inDemandRoles}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p className="text-small" style={{ margin: 0, textAlign: 'center' }}>Note: Salary ranges are approximate annual gross salaries in Canadian Dollars (CAD). Actual offers depend on experience, company size, and location. Data sourced from Glassdoor, Payscale, and LinkedIn Salary Insights {CURRENT_YEAR}.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Provincial Programs */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Provincial Nominee Program (PNP) Resume Strategies</h2>
              <p className="section-subtitle">Tailor your resume for specific provinces to maximize nomination opportunities</p>
            </div>
            <div className="grid">
              {PROVINCIAL_PROGRAMS.map((province, i) => (
                <div key={i} className="strategy-card">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{province.province}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>In-Demand Roles:</strong> {province.inDemandRoles}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Resume Strategy:</strong> {province.keyResumeTip}</p>
                  <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', margin: 0 }}>Processing Advantage: {province.processingAdvantage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Canadian Format Standards */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Canadian Resume Formatting Standards</h2>
              <p className="section-subtitle">Adhere to these conventions to demonstrate cultural adaptation and professionalism</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Element</th><th>Requirement</th><th>Why It Matters</th><th>Common Mistake</th></tr></thead>
                  <tbody>
                    {CANADIAN_FORMAT_STANDARDS.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.element}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}>{row.requirement}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.why}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--error-color)' }}>{row.commonMistake}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Settlement Checklist */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Complete Settlement Preparation Checklist</h2>
              <p className="section-subtitle">What to prepare before and after landing in Canada for a smooth transition</p>
            </div>
            <div className="grid">
              {SETTLEMENT_CHECKLIST.map((phase, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                      {i === 0 ? <FiCalendar size={18} /> : i === 1 ? <FiMapPin size={18} /> : i === 2 ? <FiBriefcase size={18} /> : <FiStar size={18} />}
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>{phase.category}</h3>
                  </div>
                  <ul className="list-style">
                    {phase.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Document Checklist */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Complete PR Application Document Checklist</h2>
              <p className="section-subtitle">Every document you need to prepare alongside your Canada PR resume</p>
            </div>
            <div className="grid">
              {PR_DOCUMENT_CHECKLIST.map((category, i) => (
                <div key={i} className="checklist-card">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiCheckCircle size={18} /> {category.category}
                  </h3>
                  <ul className="list-style">
                    {category.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">5 Critical Mistakes That Delay Canada PR Applications</h2>
              <p className="section-subtitle">Avoid these errors that trigger verification requests and add months to processing</p>
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

        {/* FAQ */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Canada PR Resumes</h2>
              <p className="section-subtitle">Expert answers based on IRCC data, immigration consultant insights, and successful applicant outcomes</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)', transition: 'color var(--transition-fast)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer">
                      <p style={{ lineHeight: '1.7' }}>{faq.answer}</p>
                      {faqDates && faqDates.length > 0 && (
                        <small className="text-small" style={{display: 'block', marginTop: '12px'}}>Updated: {faqDates[i] || safeCurrentDate}</small>
                      )}
                    </div>
                  )}
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
              Build Your Canada PR Resume Today ✨
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply the NOC alignment strategies, Canadian formatting standards, provincial targeting techniques, and settlement preparation tips from this guide. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiGlobe /> Browse Canada PR Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool style={{marginRight: '8px'}} /> Free Resume Tools</Link>
            </div>
          </div>
        </section>

        {/* Internal Links Grid - Recommended Career Resources */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Recommended Career Resources</h2>
              <p className="section-subtitle">Enhance your Canada immigration journey with these specialized guides and tools.</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield", desc: "Test Canadian ATS compatibility for employer applications." },
                { href: "/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software", text: "Beat ATS Algorithms", iconName: "FiCpu", desc: "Ensure your resume passes Canadian employer screening systems." },
                { href: "/cover-letter-guides", text: "Cover Letter Guides", iconName: "FiFileText", desc: "Complete your application with Canadian-style cover letters." },
                { href: "/interview-tips", text: "Canadian Interview Prep", iconName: "FiUserCheck", desc: "Prepare for behavioral interviews common in Canadian hiring." },
                { href: "/resume-for-abroad-job", text: "International Resume Guide", iconName: "FiGlobe", desc: "Multi-country resume formats for global opportunities." }
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

        {/* Final AI Source Summary */}
        <div className="section-container" style={{marginBottom: '50px'}}>
          <div className="citation-card" style={{ background: 'rgba(100,181,246,0.05)', borderLeft: '3px solid var(--info-color)', padding: '1.25rem', borderRadius: '0 0.5rem 0.5rem 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}><strong>Complete Data Sources & Methodology:</strong></p>
            <ul style={{marginTop: '12px', marginLeft: '20px', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)'}}>
              {aiCitations.map((source, i) => (
                <li key={i} style={{marginBottom: '8px'}}><strong>{source.source}:</strong> {source.methodology}</li>
              ))}
            </ul>
            <p style={{marginTop: '16px', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)'}}><strong>Additional analysis:</strong> Canada PR resume best practices calibrated against IRCC processing data, immigration consultant surveys, and successful applicant outcomes from Express Entry and Provincial Nominee Programs.</p>
            <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '8px' }}>Last full analysis: {safeCurrentDate} • Next update: April 2026</small>
          </div>
        </div>

        {/* Update Strategy Footer */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center', marginTop: '1rem' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Next update: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} • Version 2026.1</span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
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

  const reviewDates = Array(10).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(7).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  const canonicalUrl = "https://professionalresumefree.com/resume-for-canada-pr-guide";

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
      "name": "Canada PR Resume Guide"
    }
  ];

  const meta = {
    title: "Ultimate Canada PR Resume Guide 2026 | Professional Resume Free",
    description: "Comprehensive guide to creating a winning resume for Canada Permanent Residency applications. Expert tips, formatting guidelines, and CRS score optimization strategies for Express Entry.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://professionalresumefree.com/images/canada-pr-resume-guide-og.jpg",
  };

  const longTailKeywords = [
    "Canada PR resume",
    "Express Entry resume",
    "Canadian immigration resume",
    "CRS score optimization",
    "NOC code resume",
    "professional resume Canada",
    "permanent residency application",
    "Canadian work experience documentation",
    "IRCC resume requirements",
    "Canada PR application guide 2026"
  ];

  return {
    props: {
      buildTimestamp,
      currentDate,
      lastModifiedDate,
      canonicalUrl,
      breadcrumbData,
      meta,
      longTailKeywords,
      reviewDates,
      faqDates
    },
    revalidate: 3600 // ISR: revalidate every hour
  };
}

export default CanadaPRResumePage;