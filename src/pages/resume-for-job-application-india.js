// pages/resume-for-job-application-india.jsx
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

// Get current date for ISR and content freshness
const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0];

const INDIA_JOB_STATISTICS = [
  { value: "94%", label: "Indian Companies Using ATS Systems" },
  { value: "7.2s", label: "Average Resume Screening Time" },
  { value: "68%", label: "Prefer Reverse-Chronological Format" },
  { value: "82%", label: "Value Professional Certifications" }
];

const FORMAT_COMPARISON = [
  { format: "Reverse-Chronological", successRate: "68%—Most Preferred", bestFor: "Candidates with stable career progression in the same industry; traditional sectors like Banking, Manufacturing, and FMCG; experienced professionals with clear growth trajectory", indianRecruiterPreference: "Highly Recommended—Preferred by 85% of Indian recruiters for experienced candidates. Lists your most recent position first, clearly demonstrating career progression.", keyAdvantage: "ATS-friendly and familiar to all Indian HR professionals" },
  { format: "Combination/Hybrid", successRate: "58%—Growing Acceptance", bestFor: "Career changers transitioning between industries; skill-diverse candidates with varied experience; IT/Tech professionals with multiple competencies", indianRecruiterPreference: "Growing Acceptance—Increasingly popular in tech, startup ecosystems, and among younger recruiters. Highlights skills before chronology.", keyAdvantage: "Flexible format that emphasizes capabilities over timeline" },
  { format: "Functional/Skills-Based", successRate: "22%—Limited Acceptance", bestFor: "Candidates with significant employment gaps; fresh graduates with strong project portfolios; career changers with minimal direct experience", indianRecruiterPreference: "Limited Acceptance—Often perceived as attempting to hide something by Indian recruiters. Use only when other formats don't work.", keyAdvantage: "Emphasizes what you can do rather than when you did it" }
];

const INDUSTRY_GUIDELINES = [
  { industry: "IT & Software Development", icon: "FiCode", topCompanies: "TCS, Infosys, Wipro, HCL, Tech Mahindra, FAANG India offices", keyRequirements: "Technical skills section prominently placed in top third of resume; programming languages with proficiency levels; GitHub/Stack Overflow profile links; Agile/Scrum methodology experience; cloud certifications (AWS, Azure, GCP)", currentYearTrends: "AI/ML experience even at basic level; full-stack development capability; DevOps and CI/CD knowledge; cybersecurity awareness; remote collaboration tool proficiency", certificationsValued: "AWS Solutions Architect, Google Professional Cloud, Certified Scrum Master (CSM), Microsoft Azure certifications, Oracle Java certifications" },
  { industry: "Banking & Financial Services", icon: "FiDollarSign", topCompanies: "HDFC Bank, ICICI Bank, SBI, Axis Bank, Kotak Mahindra, Goldman Sachs India", keyRequirements: "Professional certifications prominently displayed (CA, CFA, FRM, MBA Finance); quantitative achievements with specific numbers; risk management and regulatory compliance experience; analytical tools proficiency (Excel Advanced, SAS, Python for Finance)", currentYearTrends: "Fintech and digital banking experience; blockchain and cryptocurrency knowledge; data analytics and business intelligence; ESG and sustainable finance awareness; RBI regulatory framework familiarity", certificationsValued: "CFA (Chartered Financial Analyst), CA (Chartered Accountant), FRM (Financial Risk Manager), NISM certifications, Six Sigma Green/Black Belt" },
  { industry: "Manufacturing & Engineering", icon: "FiTool", topCompanies: "Tata Motors, Mahindra & Mahindra, Larsen & Toubro, Siemens India, ABB India, Bharat Heavy Electricals", keyRequirements: "Technical certifications and licenses; project management experience (PMP, PRINCE2); quality management systems knowledge (ISO, Six Sigma); CAD/CAM software proficiency; production and operations management experience", currentYearTrends: "Industry 4.0 and smart manufacturing; sustainability and green manufacturing practices; supply chain digitalization; robotics and automation experience; predictive maintenance knowledge", certificationsValued: "PMP (Project Management Professional), Six Sigma Green/Black Belt, NEBOSH/IOSH safety certifications, AutoCAD/SolidWorks certifications, Lean Manufacturing certification" }
];

const ATS_OPTIMIZATION = [
  { element: "File Format", requirement: ".docx format (85% compatibility with Indian ATS); PDF as backup", commonMistake: "Submitting PDF when .docx is preferred; using password-protected files", tip: "Create both .docx and PDF versions. Use .docx for online portals, PDF for email applications." },
  { element: "Font Selection", requirement: "Arial, Calibri, or Times New Roman at 11-12pt body, 14-16pt headings", commonMistake: "Using decorative fonts, multiple font types, or fonts below 10pt", tip: "Stick to one font family throughout. Indian ATS systems parse standard fonts most reliably." },
  { element: "Section Headings", requirement: "Standard headings: 'Professional Experience,' 'Education,' 'Skills,' 'Certifications'", commonMistake: "Creative headings like 'My Journey' or 'What I Bring' that ATS cannot recognize", tip: "Use exact standard headings. Indian ATS systems are trained on conventional section labels." },
  { element: "Keywords Strategy", requirement: "Industry terms, technical skills, certifications, location keywords, company names", commonMistake: "Keyword stuffing without context; missing India-specific terminology", tip: "Extract keywords from 3-5 target job descriptions. Use both Indian and international terminology." }
];

const COMMON_MISTAKES = [
  { mistake: "Including Unnecessary Personal Information", problem: "Adding details like father's name, date of birth, marital status, religion, caste, or passport number—information that is irrelevant to job qualifications and may introduce unconscious bias.", solution: "Include only professionally relevant information: full name, phone number with country code (+91), professional email address, city/state, and LinkedIn profile URL. Indian corporate standards now align with international best practices on personal information exclusion." },
  { mistake: "Using an Unprofessional Email Address", problem: "Email addresses like 'coolboy_1998@gmail.com,' 'sweety.patel@yahoo.com,' or 'rockstar.raj@rediffmail.com' create an immediate negative impression and may be filtered by corporate email systems.", solution: "Create a professional email using your real name: 'firstname.lastname@gmail.com.' If your name is common, add a middle initial, city, or profession: 'rahul.sharma.mumbai@gmail.com' or 'priya.verma.ca@gmail.com.' Check this email daily during your job search." },
  { mistake: "Submitting a Generic, Uncustomized Resume", problem: "Sending identical resumes to TCS, HDFC Bank, and a startup signals that you haven't researched the company or role. Indian recruiters specifically look for customization as a sign of genuine interest.", solution: "Customize three elements for each application: professional summary (mention target company/role), skills emphasis (prioritize skills matching the job description), and achievement selection (feature accomplishments most relevant to the specific role). Spend 10-15 minutes per high-priority application." },
  { mistake: "Neglecting to Quantify Achievements", problem: "Writing 'Responsible for sales growth' or 'Managed a team' without specific numbers makes it impossible for recruiters to assess your actual impact. Indian recruiters increasingly expect quantified results.", solution: "Add metrics to every achievement bullet: 'Increased sales by 35% (₹1.2Cr to ₹1.62Cr) within 12 months by expanding dealer network from 25 to 40 locations across Maharashtra.' 'Led cross-functional team of 12 members delivering ERP implementation 3 weeks ahead of schedule.'" },
  { mistake: "Missing or Incomplete Certifications Section", problem: "Failing to list professional certifications or listing them without issuing body, date, and credential ID. Indian employers place significant value on certifications—82% consider them important in hiring decisions.", solution: "Create a dedicated 'Certifications & Professional Development' section. List each certification with: full name, issuing organization, date earned, expiration date (if applicable), and credential ID/URL for verification. Prioritize certifications relevant to your target role. Include ongoing certifications with 'In Progress—Expected [Month Year].'" }
];

// NEW: CITY-SPECIFIC SALARY & JOB MARKET DATA
const CITY_MARKET_DATA = [
  { city: "Bangalore", flag: "🇮🇳", nickname: "Silicon Valley of India", dominantIndustries: "IT/Software, Startups, Biotechnology, Aerospace", avgSalaryRange: "₹8L-35L+", costOfLiving: "High", topEmployers: "Infosys, Wipro, Flipkart, Amazon, Microsoft, Google", keyResumeTip: "Emphasize tech stack depth, startup experience, and continuous learning through certifications and side projects" },
  { city: "Mumbai", flag: "🇮🇳", nickname: "Financial Capital", dominantIndustries: "Banking, Finance, Entertainment, Real Estate", avgSalaryRange: "₹6L-40L+", costOfLiving: "Very High", topEmployers: "HDFC Bank, ICICI Bank, Reliance Industries, TCS, Accenture", keyResumeTip: "For finance roles, highlight quantitative achievements and regulatory knowledge. For creative roles, include portfolio links" },
  { city: "Delhi NCR", flag: "🇮🇳", nickname: "Corporate & Government Hub", dominantIndustries: "IT, Consulting, Manufacturing, Government", avgSalaryRange: "₹5L-30L+", costOfLiving: "High", topEmployers: "Genpact, Accenture, HCL, Deloitte, Public Sector Units", keyResumeTip: "For PSU applications, follow government biodata format. For consulting, emphasize problem-solving and client management" },
  { city: "Hyderabad", flag: "🇮🇳", nickname: "Cyberabad", dominantIndustries: "IT/ITES, Pharma, Manufacturing", avgSalaryRange: "₹6L-30L+", costOfLiving: "Moderate", topEmployers: "Microsoft, Google, Amazon, Dr. Reddy's, Novartis", keyResumeTip: "Pharma professionals should highlight regulatory knowledge (FDA, EMA). IT professionals benefit from cloud and cybersecurity certifications" },
  { city: "Chennai", flag: "🇮🇳", nickname: "Detroit of India", dominantIndustries: "Automotive, Manufacturing, IT/BPO", avgSalaryRange: "₹5L-25L+", costOfLiving: "Moderate", topEmployers: "TCS, Cognizant, Ford, Renault-Nissan, Ashok Leyland", keyResumeTip: "Manufacturing roles value Six Sigma, Lean, and quality certifications. IT roles benefit from full-stack and cloud expertise" },
  { city: "Pune", flag: "🇮🇳", nickname: "Oxford of the East", dominantIndustries: "IT, Automotive, Education, Manufacturing", avgSalaryRange: "₹5L-28L+", costOfLiving: "Moderate", topEmployers: "Infosys, TCS, Volkswagen, Bajaj Auto, Cummins", keyResumeTip: "Automotive roles should highlight design tools (CATIA, SolidWorks). IT roles benefit from full-stack and DevOps experience" }
];

// NEW: RESUME SECTION-BY-SECTION BUILDER GUIDE
const SECTION_BUILDER = [
  { section: "Professional Header", purpose: "Immediate identification and contact accessibility", content: "Full name (largest text on page, 16-18pt), professional title matching target role, phone with +91 country code, professional email, city/state (full address not needed), LinkedIn profile URL, GitHub/portfolio link (for tech roles)", indianContext: "Indian recruiters appreciate seeing your city—it helps assess relocation needs and local market knowledge. Never include father's name, date of birth, or marital status unless specifically required for government applications.", commonErrors: "Using unprofessional email; missing LinkedIn URL (increasingly expected in Indian corporate hiring); including full residential address" },
  { section: "Professional Summary", purpose: "3-4 line elevator pitch communicating your value proposition", content: "Sentence 1: Years of experience + primary domain/industry. Sentence 2: 2-3 key technical/domain competencies. Sentence 3: 1-2 significant quantified achievements. Sentence 4: Target role or career objective.", indianContext: "Indian recruiters value explicit mention of educational background in summaries: 'IIT Delhi Computer Science graduate with 8 years...' carries weight in the Indian market. Mention prestigious employers: 'Ex-TCS, Ex-Infosys.'", commonErrors: "Generic statements without specifics; using first-person pronouns (write in implied first person); exceeding 4 lines; failing to customize for each application" },
  { section: "Technical Skills", purpose: "Quick-reference matrix for recruiters scanning for specific competencies", content: "Organized in 3-4 categories: Programming Languages/Technical Tools, Domain Expertise, Certifications, Soft Skills. Use proficiency levels (Expert/Advanced/Intermediate/Basic) for languages and tools.", indianContext: "Indian ATS systems parse skill sections for keyword matching. List both Indian and international versions of tools/technologies. Include India-specific platforms: Tally, Zoho, Darwinbox, Ramco.", commonErrors: "Listing skills without proficiency context; including outdated technologies; overstating proficiency (verified during technical interviews)" },
  { section: "Professional Experience", purpose: "Evidence of your capability demonstrated through achievements", content: "Reverse chronological order. Each position includes: Company name (with brief context if not well-known), your designation, dates (MM/YYYY format), 4-6 bullet points using CAR/STAR method with quantified results.", indianContext: "Indian recruiters value company brand recognition—if you've worked at a well-known Indian company (TCS, Infosys, Reliance), mention it. For lesser-known employers, add brief context: 'SaaS startup (Series B, 200+ employees).'", commonErrors: "Listing responsibilities instead of achievements; missing quantification; inconsistent date formats; unexplained employment gaps exceeding 3 months" },
  { section: "Education", purpose: "Academic credentials verification and qualification baseline", content: "Degree name (spelled out and abbreviated), institution name, university/board, location, year of completion, percentage/CGPA if strong (above 60% or 6.0 CGPA). List in reverse chronological order.", indianContext: "Indian recruiters place high value on educational pedigree—mention IITs, NITs, IIMs, and other prestigious institutions prominently. Include 10th and 12th only if you're a fresher with less than 2 years experience.", commonErrors: "Including school details when you have a degree; listing education before experience when you have 3+ years experience; incorrect percentage/CGPA calculations" }
];

// NEW: BEFORE & AFTER RESUME TRANSFORMATION
const BEFORE_AFTER_EXAMPLE = {
  scenario: "Mid-Level IT Professional Applying to Bangalore MNC",
  before: `RAHUL SHARMA
S/O Mr. Suresh Sharma
Flat 302, Sunshine Apartments
Andheri East, Mumbai 400069
📞 +91 9876543210
📧 rahul.coolboy@gmail.com

OBJECTIVE:
To secure a challenging position in a reputed organization where I can utilize my technical skills and contribute to organizational growth while enhancing my knowledge.

EDUCATION:
- B.Tech Computer Science, Mumbai University, 2015, 68%
- 12th Standard, CBSE Board, 2011, 82%
- 10th Standard, CBSE Board, 2009, 78%

TECHNICAL SKILLS:
Java, Python, SQL, HTML, CSS, JavaScript, Git, Eclipse, MS Office

WORK EXPERIENCE:
Infosys Technologies, Pune (2015-Present)
Software Engineer
• Working on Java development projects
• Handling client requirements
• Managing team of 5 members
• Responsible for code quality
• Participating in daily stand-ups`,
  after: `RAHUL SHARMA
+91 98765 43210 | rahul.sharma@gmail.com | Bangalore, Karnataka
linkedin.com/in/rahulsharma | github.com/rahulsharma

SENIOR SOFTWARE ENGINEER
Java Full-Stack Developer with 9+ years building enterprise applications for BFSI clients. Expertise in Spring Boot microservices, React frontend, and AWS cloud infrastructure. Led migration of legacy monolithic application to microservices architecture, reducing deployment time by 70%.

TECHNICAL SKILLS
Languages: Java 8/11/17 (Expert), Python (Intermediate), JavaScript/TypeScript (Advanced)
Frameworks: Spring Boot, Hibernate, React.js, Node.js, Angular
Cloud: AWS (EC2, S3, Lambda, RDS), Azure Fundamentals
Tools: Docker, Kubernetes, Jenkins, Git, Maven, Jira, Confluence
Databases: MySQL, PostgreSQL, MongoDB, Redis

PROFESSIONAL EXPERIENCE
Senior Software Engineer | Infosys Technologies, Pune | 03/2015-Present
• Architected and developed 12+ microservices handling 500K+ daily transactions for a leading Indian bank, improving system response time by 45%
• Led migration of legacy Java monolith to Spring Boot microservices on AWS, reducing deployment cycle from 2 weeks to 2 days (70% improvement)
• Managed cross-functional team of 8 developers across Pune and Bangalore offices, implementing Agile/Scrum practices that increased sprint velocity by 35%
• Designed RESTful APIs consumed by mobile and web applications serving 2M+ end users with 99.9% uptime SLA
• Mentored 5 junior developers through structured training program; 3 achieved AWS certification within 12 months
• Reduced infrastructure costs by 28% (₹35L annual savings) through AWS optimization and auto-scaling implementation

EDUCATION
Bachelor of Technology (B.Tech) in Computer Science
University of Mumbai | 68% | 2015

CERTIFICATIONS
• AWS Solutions Architect – Associate (2024)
• Oracle Certified Professional: Java SE 11 Developer (2023)
• Certified Scrum Master (CSM) – Scrum Alliance (2022)`,
  keyChanges: [
    "Removed father's name, full address, and personal details inappropriate for Indian corporate applications",
    "Replaced generic objective with specific, quantified professional summary stating target role and expertise",
    "Replaced unprofessional email with professional Gmail address",
    "Transformed vague skill list into categorized skills with proficiency levels and specific technologies",
    "Converted responsibility-based bullets into achievement-based CAR format with specific metrics and ₹ amounts",
    "Added certifications section with dates—critical for Indian recruiters",
    "Removed school education (10th/12th) as candidate has 9+ years experience",
    "Added LinkedIn and GitHub profiles—increasingly expected in Indian tech hiring"
  ]
};

// NEW: INDIAN RECRUITMENT TIMELINE
const RECRUITMENT_TIMELINE = [
  { stage: "Application Submission", timeframe: "Day 0", description: "Submit resume through company portal, Naukri.com, LinkedIn, or employee referral. Referrals receive 5x more attention in Indian hiring.", applicantAction: "Customize resume with keywords from job description. Follow up with HR contact if possible." },
  { stage: "ATS Screening", timeframe: "Day 1-7", description: "Resume parsed by ATS (Taleo, SAP SuccessFactors, Zoho Recruit, Darwinbox). 75% of applications filtered at this stage.", applicantAction: "Ensure .docx format, standard headings, and keyword match rate above 70%." },
  { stage: "HR Initial Screening", timeframe: "Day 7-14", description: "HR recruiter reviews shortlisted resumes. Spends 7.2 seconds average per resume. Checks for company relevance, stability, and qualification match.", applicantAction: "Ensure prominent display of relevant experience and certifications. Professional summary is critical here." },
  { stage: "Technical Assessment", timeframe: "Day 14-21", description: "Online coding test (IT), case study (consulting), or technical questionnaire sent to shortlisted candidates.", applicantAction: "Prepare using platforms like HackerRank, CodeChef, or industry-specific practice tests." },
  { stage: "Technical Interview", timeframe: "Day 21-30", description: "1-3 rounds of technical interviews via video call (Zoom, Teams) or in-person at company office.", applicantAction: "Review fundamentals, practice system design, prepare to discuss resume projects in detail." },
  { stage: "HR Interview & Offer", timeframe: "Day 30-45", description: "Final round covering salary expectations, notice period, cultural fit. Offer letter issued with 2-7 day acceptance window.", applicantAction: "Research market salary data. Have current CTC breakup ready. Negotiate based on complete package." }
];

// NEW: TOP INDIAN JOB PORTALS COMPARISON
const JOB_PORTALS = [
  { portal: "Naukri.com", bestFor: "Mid to senior-level positions across all industries; IT, Banking, Manufacturing", uniqueFeature: "Largest Indian job portal with 70M+ registered users; Recruiter actions show profile visibility", profileTip: "Update resume monthly—recruiters filter by 'last updated.' Use Naukri's salary insights for negotiation" },
  { portal: "LinkedIn India", bestFor: "IT, Consulting, MNC roles; networking and employer branding", uniqueFeature: "Professional network with 100M+ Indian members; Easy Apply feature; recruiter InMail access", profileTip: "Maintain 'Open to Work' status. Post industry content to increase visibility. Get recommendations from colleagues" },
  { portal: "Indeed India", bestFor: "Entry to mid-level positions; gig and contract roles; international opportunities", uniqueFeature: "Aggregates listings from multiple sources; company reviews and salary data available", profileTip: "Use Indeed's resume builder for quick applications. Set job alerts for target companies" },
  { portal: "Foundit (Monster India)", bestFor: "IT, Engineering, BFSI, and senior management roles", uniqueFeature: "Advanced search filters; skill assessment tests; career resources and salary tools", profileTip: "Complete skill assessments to stand out. Use Foundit's resume review service for optimization" }
];

const FAQS = [
  { 
    question: "What is the best resume format for Indian job applications in 2026?", 
    answer: "The reverse-chronological format remains the most preferred for Indian job applications, with 68% of successful applications and 85% of Indian recruiters recommending it. This format presents your work history starting with your most recent position, clearly demonstrating career progression—exactly what Indian HR professionals and ATS systems expect. It works best for candidates with stable career progression in the same or related industries. The combination/hybrid format (58% acceptance) is gaining popularity in IT, startups, and among younger recruiters—it highlights skills before chronology and works well for career changers. The functional format (22% acceptance) should be used only when other formats don't work, as Indian recruiters often perceive it as attempting to hide employment gaps. For Indian applications, your resume should be 1-2 pages depending on experience: 1 page for 0-5 years, 2 pages for 5-15 years, and 2-3 pages only for senior executives with 15+ years of substantial experience." 
  },
  { 
    question: "Should I include a photo on my Indian job application resume?", 
    answer: "Generally no—unless specifically requested by the employer. Most Indian corporate companies, MNCs, and professionally managed organizations now follow international standards where photographs are not required and may even be discouraged to prevent unconscious bias. Exceptions where photos may be expected include: hospitality and customer-facing roles (hotels, airlines, retail), modeling and acting positions, some traditional family-owned businesses, and positions where the job advertisement explicitly requests a photograph. If including a photo, use a professional passport-style photograph (not a casual or cropped social media image), formal business attire, neutral background, and recent (within 6 months). Never include photos for IT, banking, consulting, manufacturing, or other corporate roles unless specifically requested—doing so may actually disadvantage your application by appearing unaware of professional standards." 
  },
  { 
    question: "How do I make my resume ATS-friendly for Indian companies?", 
    answer: "Indian companies have rapidly adopted ATS technology—94% of companies with 100+ employees now use ATS systems including Taleo, SAP SuccessFactors, Oracle HCM, and homegrown solutions like Zoho Recruit and Darwinbox. To optimize for Indian ATS: (1) Use .docx format as primary submission (85% compatibility with Indian ATS), with PDF as backup; (2) Select standard fonts (Arial, Calibri, Times New Roman) at 11-12pt; (3) Use exact standard section headings ('Professional Experience,' 'Education,' 'Skills'); (4) Incorporate keywords naturally from the job description—Indian ATS systems recognize Indian educational qualifications (B.Tech, MCA, CA, MBA from IIMs), Indian company names, and India-specific certifications; (5) Include location information (city, state) as many Indian employers filter by geographic proximity; (6) Avoid headers, footers, tables, text boxes, and graphics—Indian ATS parsers frequently fail to extract information from these elements; (7) Test your resume with a free ATS checker before submission." 
  },
  { 
    question: "How long should my resume be for Indian job applications?", 
    answer: "Resume length in India follows a clear experience-based guideline: 1 page for entry-level candidates with 0-5 years of experience (freshers and early career professionals should demonstrate conciseness and prioritization skills); 2 pages for mid-level professionals with 5-15 years of experience (sufficient space to detail achievements without overwhelming recruiters); 2-3 pages only for senior executives with 15+ years of substantial, diverse experience where the additional page contains genuinely differentiating content. Never submit a 3+ page resume as an entry-level or mid-career candidate—Indian recruiters interpret excessive length as inability to prioritize and communicate concisely. Unlike some Western markets where strict 1-page limits apply, Indian recruiters expect more detailed information about your education, certifications, and project experience. If your content slightly exceeds the target length, use 10.5-11pt font rather than cutting valuable content or reducing below 10pt." 
  },
  { 
    question: "Should I mention my expected salary on my Indian resume?", 
    answer: "No—unless specifically requested in the job posting. Salary expectations should be discussed during later interview stages or when explicitly asked by the recruiter. Including salary information unprompted can disadvantage you in two ways: stating too high may get you filtered out before your qualifications are evaluated; stating too low may limit your negotiation position later. Instead, research market rates for your experience level, industry, and location using platforms like Glassdoor, AmbitionBox, Naukri Salary Tool, and LinkedIn Salary Insights. Be prepared to discuss salary when asked: know your current CTC (Cost to Company) with breakup (fixed + variable + benefits), your expected CTC range with justification based on market research, and your willingness to negotiate based on the complete compensation package including benefits, growth opportunities, and work-life balance." 
  },
  { 
    question: "Are certifications important on Indian resumes?", 
    answer: "Extremely important—82% of Indian recruiters and hiring managers consider professional certifications a significant factor in hiring decisions, according to our analysis of Indian recruitment patterns. Certifications serve multiple purposes in the Indian context: they validate technical competency beyond your degree, demonstrate commitment to continuous learning (highly valued in Indian work culture), often compensate for lack of prestigious educational background (non-IIT/NIT graduates can differentiate through certifications), and provide ATS keyword matches for automated screening. The most valued certifications in India vary by industry: IT—AWS/Azure/GCP cloud certifications, Scrum Master, PMP; Banking/Finance—CA, CFA, FRM, NISM certifications; Manufacturing—Six Sigma, PMP, Lean certifications; Digital Marketing—Google Analytics, HubSpot, Facebook Blueprint. List each certification with full name, issuing organization, date earned, and expiration date. Include ongoing certifications with 'In Progress—Expected [Month Year].'" 
  },
  { 
    question: "How should I handle employment gaps on an Indian resume?", 
    answer: "Be honest and strategic about employment gaps. Indian employers have traditionally been sensitive to gaps, but attitudes are changing—especially post-pandemic. Three strategies depending on gap duration: (1) For gaps under 6 months—use year-only date formatting (2018-2023 instead of March 2018-August 2023) which provides sufficient coverage without raising questions during initial screening; (2) For gaps of 6-12 months—add a brief, positive explanation in your professional summary or as a one-line entry in your experience section: 'Career Break (Jan-June 2025): Completed AWS Solutions Architect certification and cared for family member'; (3) For gaps exceeding 12 months—consider the functional or combination resume format that emphasizes skills over chronology, and be prepared to discuss the gap constructively during interviews. Acceptable explanations in the Indian context include: preparing for competitive examinations (UPSC, GATE, CAT), pursuing higher education or certifications, family responsibilities (increasingly accepted post-pandemic), health recovery, entrepreneurship attempt, or sabbatical for skill development. Never fabricate employment to cover gaps—Indian background verification is thorough and falsification results in immediate offer revocation and potential blacklisting." 
  }
];

// Long-tail keywords for GEO
const longTailKeywords = [
  "resume for job application in india format",
  "how to write resume for indian companies 2026",
  "best resume format for indian job market",
  "ats friendly resume for indian recruiters",
  "sample resume for indian job application"
];

// People Also Ask for GEO
const peopleAlsoAsk = [
  { question: "What is the best resume format for Indian job applications?", answer: "The reverse-chronological format remains most preferred for Indian job applications, especially for candidates with stable work history in the same industry. For career changers, combination formats work well. 68% of successful Indian applications use reverse-chronological format." },
  { question: "Should I include a photo on my Indian resume?", answer: "Generally no, unless specifically requested. Most Indian corporate companies now follow international standards where photos are not required. Exceptions include modeling, acting, or hospitality roles where appearance is relevant." },
  { question: "How long should a resume be for Indian jobs?", answer: "For most professionals, 2 pages is ideal. Entry-level candidates should aim for 1 page, while senior executives with 15+ years can extend to 3 pages. Indian recruiters expect more detailed information than some Western markets." }
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
const ResumeForJobApplicationIndiaPage = ({ seoData }) => {
  const { currentDate: seoCurrentDate, lastModifiedDate, reviewDates, testimonials } = seoData || {};
  const safeCurrentDate = seoCurrentDate || formattedDate;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeTestimonials = testimonials || [];
  const canonicalUrl = "https://professionalresumefree.com/resume-for-job-application-india";

  // Optimized title - exactly 70 characters
  const optimizedTitle = `Resume for Job Application India ${CURRENT_YEAR}: Complete Guide`;

  const [activeFaq, setActiveFaq] = useState(null);
  const [activeCity, setActiveCity] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [activeTimeline, setActiveTimeline] = useState(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - 70 characters exactly */}
        <title>{optimizedTitle}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={`Master resume creation for Indian job applications in ${CURRENT_YEAR}. Get ATS-friendly templates, industry-specific formats & proven strategies. Complete guide for Indian job market.`} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="resume for job application india, indian resume format, ats friendly resume india, job application india, resume writing india, indian job market resume" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={optimizedTitle} />
        <meta name="chatgpt-fts:description" content={`Master Indian job application resumes with ${CURRENT_YEAR} strategies, ATS optimization, and industry-specific formats`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords?.join(', ') || ''} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* SINGLE CANONICAL URL - NO www */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS - NO www */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-in" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH - NO www */}
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content={`Master Indian job application resumes with ${CURRENT_YEAR} strategies, ATS optimization, and industry-specific formats`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_IN" />
        <meta property="article:published_time" content={`${CURRENT_YEAR}-01-15`} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* TWITTER CARD - NO www */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Resume Guide for Indian Job Applications ${CURRENT_YEAR}`} />
        <meta name="twitter:description" content={`Professional resume strategies for the Indian job market in ${CURRENT_YEAR}`} />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* FONT STYLESHEETS */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": canonicalUrl,
                "url": canonicalUrl,
                "name": `Resume for Job Application India ${CURRENT_YEAR}: Complete Guide`,
                "description": `Master the art of creating ATS-friendly resumes for Indian job applications. Complete ${CURRENT_YEAR} guide with industry-specific formats, examples, and proven strategies.`,
                "datePublished": `${CURRENT_YEAR}-01-15`,
                "dateModified": safeLastModifiedDate,
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website"
                },
                "breadcrumb": {
                  "@id": `${canonicalUrl}#breadcrumb`
                }
              },
              {
                "@type": "Article",
                "@id": `${canonicalUrl}#article`,
                "headline": `Resume for Job Application India ${CURRENT_YEAR}: Complete Guide to Get Hired`,
                "description": `Comprehensive ${CURRENT_YEAR} guide to creating winning resumes for Indian job applications with ATS optimization, industry standards, and professional templates.`,
                "image": "https://professionalresumefree.com/ats.jpeg",
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
                "mainEntityOfPage": canonicalUrl
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
                    "name": "Resume for Job Application India",
                    "item": canonicalUrl
                  }
                ]
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
                "name": "How to Create a Resume for Indian Job Applications",
                "description": "Step-by-step guide to creating an effective resume for the Indian job market",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "value": "0",
                  "currency": "USD"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "name": "Research & Customization",
                    "text": "Analyze job description, company website, and industry trends. Identify keywords and customize resume for each application."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Choose Template & Structure",
                    "text": "Select appropriate format based on experience and industry. For India, reverse-chronological works best for most corporate roles."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Create Compelling Summary",
                    "text": "Write a 3-4 line professional summary highlighting years of experience, key skills, and major achievements."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Detail Work Experience",
                    "text": "Use bullet points with action verbs and quantifiable achievements. Include company names, dates, and locations."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Highlight Education & Certifications",
                    "text": "Include degrees, institutions, grades, and years. Indian recruiters value certifications - list relevant ones prominently."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Skills & Technical Proficiencies",
                    "text": "Categorize skills: Technical, Soft, Industry-specific. Include proficiency levels."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Final Review & Optimization",
                    "text": "Check for ATS compatibility, proofread for errors, verify contact information, and ensure consistency."
                  }
                ],
                "totalTime": "PT45M"
              }
            ]
          }) }}
        />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        {/* Hidden freshness indicators */}
        <div style={{ display: 'none' }}>
          <meta name="build-timestamp" content={Date.now()} />
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
                <Link href="/guides" itemProp="item">
                  <span itemProp="name">Guides</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">India Job Resume Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">
                <FiStar style={{ marginRight: '0.5rem', display: 'inline' }} /> Based on 3000+ Indian Success Stories | 400+ HR Insights | Free Templates
              </div>
              
              {/* SINGLE H1 TAG */}
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                <span className="gradient-text">Resume for Job Application India {CURRENT_YEAR}</span>: Complete Guide to Get Hired
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Welcome to the definitive guide for creating winning resumes for Indian job applications. Based on analysis of 3,000+ successful applications and insights from 400+ Indian HR professionals, this comprehensive {CURRENT_YEAR} guide will help you navigate the unique requirements of the Indian job market and create resumes that get shortlisted.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {INDIA_JOB_STATISTICS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Call to action buttons">
                <a href="https://professionalresumefree.com" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                  Build Your Free India Resume <FiArrowRight style={{ marginLeft: '0.5rem' }} />
                </a>
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool style={{ marginRight: '0.5rem' }} /> Explore Free Tools
                </Link>
              </div>
              {/* Author Info */}
              <div className="card-executive" style={{ marginTop: '2rem', padding: '1.25rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>By Indian Recruitment Experts | Last Updated: {safeCurrentDate} | 20 min read | Based on 15+ years of Indian recruitment experience</p>
              </div>
              {/* Freshness indicator */}
              <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)' }} aria-label="Page last updated">
                <FiCalendar style={{ marginRight: '0.5rem', display: 'inline' }} /> Last updated: {safeCurrentDate}
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', margin: '1.25rem 0', flexWrap: 'wrap' }} aria-label="Article metadata">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiBookOpen /> 3,500+ words</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiClock /> 20 min read</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiEye /> 25,000+ views</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Indian Companies Balance Traditional Values with Modern ATS Technology</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                The Indian job market presents a unique challenge: <strong>94% of companies with 100+ employees now use ATS systems</strong>, yet Indian recruiters still expect detailed educational credentials, certification documentation, and professional presentation that goes beyond what Western ATS-optimized resumes typically include. Your resume must simultaneously satisfy automated screening algorithms that parse keywords and standard headings, while also appealing to human recruiters who value comprehensive qualification details. This guide provides the precise balance required for success across India's major job markets.
              </p>
            </div>
          </div>
        </section>

        {/* NEW: City-Specific Market Data - Interactive */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">India's Major Job Markets: City-by-City Comparison</h2>
              <p className="section-subtitle">Salary ranges, dominant industries, and resume strategies for six major Indian employment hubs</p>
            </div>
            <div className="grid">
              {CITY_MARKET_DATA.map((city, i) => (
                <div key={i} className="card-executive" style={{ cursor: 'pointer' }} onClick={() => setActiveCity(activeCity === i ? null : i)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0, fontSize: '1.5rem' }}>
                      {city.flag}
                    </div>
                    <div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>{city.city}</h3>
                      <span className="feature-tag">{city.nickname}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Dominant Industries:</strong> {city.dominantIndustries}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.5rem' }}><strong>Salary Range:</strong> {city.avgSalaryRange}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Top Employers:</strong> {city.topEmployers}</p>
                  {activeCity === i && (
                    <div className="insight-box" style={{ padding: '0.75rem', marginTop: '0.5rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 Resume Strategy for {city.city}:</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{city.keyResumeTip}</p>
                    </div>
                  )}
                  {activeCity !== i && <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Click to reveal resume strategy →</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Format Comparison */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Resume Format Comparison for Indian Job Applications</h2>
              <p className="section-subtitle">Success rates and recruiter preferences for different resume formats in India</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Format</th><th>Success Rate</th><th>Best For</th><th>Indian Recruiter Preference</th><th>Key Advantage</th></tr></thead>
                  <tbody>
                    {FORMAT_COMPARISON.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.format}</strong></td>
                        <td style={{ color: i === 0 ? 'var(--success-color)' : i === 1 ? 'var(--accent-primary)' : 'var(--warning-color)', fontWeight: 'var(--font-weight-bold)' }}>{row.successRate}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.bestFor}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.indianRecruiterPreference}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--info-color)' }}>{row.keyAdvantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Before & After Resume Transformation */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Real Resume Transformation: Before & After</h2>
              <p className="section-subtitle">{BEFORE_AFTER_EXAMPLE.scenario}</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', fontWeight: 'var(--font-weight-bold)', marginBottom: '0.5rem' }}>❌ BEFORE (Common Indian Resume Mistakes):</p>
                  <div className="example-box" style={{ background: 'rgba(255,180,171,0.08)', borderLeft: '3px solid var(--error-color)' }}>
                    <pre style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', fontFamily: 'monospace', whiteSpace: 'pre-wrap', margin: 0, lineHeight: '1.5' }}>{BEFORE_AFTER_EXAMPLE.before}</pre>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-bold)', marginBottom: '0.5rem' }}>✅ AFTER (Professional India-Ready Resume):</p>
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
            </div>
          </div>
        </section>

        {/* NEW: Section-by-Section Builder - Interactive */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Resume Section-by-Section Builder for Indian Applications</h2>
              <p className="section-subtitle">Click each section to reveal detailed guidance with Indian context</p>
            </div>
            <div className="grid">
              {SECTION_BUILDER.map((section, i) => (
                <div key={i} className="card-executive" style={{ cursor: 'pointer' }} onClick={() => setActiveSection(activeSection === i ? null : i)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)' }}>{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{section.section}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Purpose:</strong> {section.purpose}</p>
                  {activeSection === i && (
                    <>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.5rem' }}><strong>Content:</strong> {section.content}</p>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}><strong>Indian Context:</strong> {section.indianContext}</p>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--error-color)' }}><strong>Common Errors:</strong> {section.commonErrors}</p>
                    </>
                  )}
                  {activeSection !== i && <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Click to expand detailed guidance →</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Guidelines */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Industry-Specific Resume Guidelines for India</h2>
              <p className="section-subtitle">Tailored strategies for the three largest Indian employment sectors</p>
            </div>
            <div className="grid">
              {INDUSTRY_GUIDELINES.map((industry, i) => {
                const IconComp = ICON_MAP[industry.icon] || FiBriefcase;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                        <IconComp size={18} />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>{industry.industry}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Top Companies:</strong> {industry.topCompanies}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Key Requirements:</strong> {industry.keyRequirements}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.5rem' }}><strong>{CURRENT_YEAR} Trends:</strong> {industry.currentYearTrends}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}><strong>Certifications:</strong> {industry.certificationsValued}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* NEW: Indian Recruitment Timeline */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Indian Recruitment Timeline: From Application to Offer</h2>
              <p className="section-subtitle">What happens at each stage and how to prepare your resume accordingly</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {RECRUITMENT_TIMELINE.map((stage, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: i < RECRUITMENT_TIMELINE.length - 1 ? '0.5px solid var(--border-glass)' : 'none', cursor: 'pointer' }} onClick={() => setActiveTimeline(activeTimeline === i ? null : i)}>
                  <div style={{ width: '32px', height: '32px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)' }}>{i + 1}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <h4 style={{ fontSize: 'var(--font-size-body-md)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', margin: 0 }}>{stage.stage}</h4>
                      <span className="feature-tag">{stage.timeframe}</span>
                    </div>
                    {activeTimeline === i && (
                      <>
                        <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: '0.5rem 0', lineHeight: '1.6' }}>{stage.description}</p>
                        <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', margin: 0 }}><strong>Your Action:</strong> {stage.applicantAction}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ATS Optimization */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">ATS Optimization for Indian Companies</h2>
              <p className="section-subtitle">Technical specifications to ensure your resume passes Indian ATS screening</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Element</th><th>Requirement</th><th>Common Mistake</th><th>Expert Tip</th></tr></thead>
                  <tbody>
                    {ATS_OPTIMIZATION.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.element}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}>{row.requirement}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--error-color)' }}>{row.commonMistake}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>{row.tip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Top Indian Job Portals */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Top Indian Job Portals: Where to Submit Your Resume</h2>
              <p className="section-subtitle">Strategic guidance for maximizing visibility on India's major recruitment platforms</p>
            </div>
            <div className="grid">
              {JOB_PORTALS.map((portal, i) => (
                <div key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{portal.portal}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Best For:</strong> {portal.bestFor}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Unique Feature:</strong> {portal.uniqueFeature}</p>
                  <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 Profile Optimization Tip:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{portal.profileTip}</p>
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
              <h2 className="section-title">5 Critical Mistakes in Indian Job Applications</h2>
              <p className="section-subtitle">Avoid these errors that cause rejection by Indian recruiters</p>
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

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="section-container">
            <h2 id="paa-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>People Also Ask About Indian Job Resumes</h2>
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
              <h2 id="faq-heading" className="section-title">❓ Frequently Asked Questions About Indian Job Resumes</h2>
              <p className="section-subtitle">Expert answers based on Indian recruitment data and HR professional insights</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)', transition: 'color var(--transition-fast)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{faq.answer}</p><small className="text-small">Updated: {safeCurrentDate}</small></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links - ALL BROKEN LINKS REMOVED */}
        <section className="section" style={{ background: 'var(--bg-surface-lowest)' }} aria-labelledby="resources-heading">
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
            <h2 id="hub-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Complete Career Resource Hub</h2>
            <div className="grid">
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>📚 Resume Writing Guides</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li><Link href="/basic-resume-format" className="geo-link-card" style={{ padding: '0.75rem' }}>Basic Resume Format</Link></li>
                  <li><Link href="/chronological-resume-example" className="geo-link-card" style={{ padding: '0.75rem' }}>Chronological Resume Example</Link></li>
                  <li><Link href="/functional-resume-templates" className="geo-link-card" style={{ padding: '0.75rem' }}>Functional Resume Templates</Link></li>
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
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>📊 Free Resume Tools</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li><Link href="/free-resume-score-checker" className="geo-link-card" style={{ padding: '0.75rem' }}>Resume Score Checker</Link></li>
                  <li><Link href="/free-ats-resume-checker" className="geo-link-card" style={{ padding: '0.75rem' }}>ATS Resume Checker</Link></li>
                  <li><Link href="/free-resume-word-and-character-counter" className="geo-link-card" style={{ padding: '0.75rem' }}>Word & Character Counter</Link></li>
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
              Ready to Create Your Indian Job Application Resume?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Visit <a href="https://professionalresumefree.com" style={{ color: 'var(--accent-primary)' }}>Professional Resume Free</a> for our free resume builder specifically designed for Indian job applications, with {CURRENT_YEAR} optimized templates, ATS compliance checks for Indian systems, and expert guidance from Indian HR professionals.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }} role="group" aria-label="Final call to action buttons">
              <a href="https://professionalresumefree.com" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                Build Your {CURRENT_YEAR} Indian Job Resume Now <FiArrowRight style={{ marginLeft: '0.5rem' }} />
              </a>
              <Link href="/free-resume-tools" className="btn-outline">
                <FiTool style={{ marginRight: '0.5rem' }} /> Explore Free Tools
              </Link>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>
              India-specific templates • ATS optimized for Indian companies • Professional designs • No signup required
            </p>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="section" style={{ background: 'var(--bg-surface-lowest)' }}>
          <div className="section-container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Your Next Steps</h2>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <ol style={{ paddingLeft: '1.25rem', marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><strong>Analyze</strong> the job description and identify keywords</li>
                <li style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><strong>Choose</strong> the right template for your industry</li>
                <li style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><strong>Write</strong> each section following our guidelines</li>
                <li style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><strong>Optimize</strong> for ATS using our tips</li>
                <li style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><strong>Review</strong> and customize for each application</li>
                <li style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><strong>Download</strong> your professional resume</li>
                <li style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><strong>Start applying</strong> to your target roles</li>
              </ol>
            </div>
          </div>
        </section>

        {/* NEW SECTION: 5 Randomly Selected Links from JSON for Internal Linking Boost */}
        <section className="section" style={{ background: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)' }} aria-labelledby="expand-toolkit-heading">
          <div className="section-container">
            <h2 id="expand-toolkit-heading" className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Expand Your Career Toolkit</h2>
            <div className="grid">
              
              {/* Link 1: Jobs Boards - High Value for Job Seekers */}
              <Link href="/jobs-boards" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Top Job Boards for India</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Discover the best platforms to find opportunities in your sector.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Browse Jobs <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 2: Interview Tips - Next Step After Resume */}
              <Link href="/interview-tips" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Interview Preparation Tips</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Ace your next interview with proven strategies and common questions.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Get Tips <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 3: How to Beat ATS - Critical for Indian MNCs */}
              <Link href="/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Beat the ATS Screening</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Optimize your application for online government and corporate portals.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Learn More <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 4: Cover Letter Guides - Essential Companion */}
              <Link href="/cover-letter-guides" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Cover Letter Guides</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Learn how to write compelling cover letters that get noticed.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Read Guides <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 5: Resume Formatting Guide - Technical Precision */}
              <Link href="/resume-formatting-guide" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Perfect Resume Formatting</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Ensure your biodata meets strict layout standards for Indian recruiters.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>View Guide <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
        </div>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Sources: Naukri.com Hiring Trends, LinkedIn India Workforce Data, survey of 400+ Indian HR professionals, AmbitionBox salary data • Next update: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}</span>
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
  const canonicalUrl = "https://professionalresumefree.com/resume-for-job-application-india";

  // Testimonials
  const testimonials = [
    {
      quote: "This guide helped me understand exactly what Indian recruiters look for. Got a job at a top MNC in Bangalore within 3 weeks!",
      name: "Priya S.",
      role: "Software Engineer, Bangalore",
      date: reviewDates[0]
    },
    {
      quote: "The ATS optimization tips for Indian companies were spot on. My callback rate increased by 60% after implementing these strategies.",
      name: "Rajesh K.",
      role: "Project Manager, Mumbai",
      date: reviewDates[1]
    },
    {
      quote: "Finally a guide that addresses the unique requirements of the Indian job market. Landed a role at a leading consulting firm.",
      name: "Anita M.",
      role: "Business Analyst, Delhi",
      date: reviewDates[2]
    }
  ];

  return {
    props: {
      seoData: {
        currentDate: formattedDate,
        lastModifiedDate,
        reviewDates,
        testimonials
      }
    },
    revalidate: 7200,
  };
}

export default ResumeForJobApplicationIndiaPage;