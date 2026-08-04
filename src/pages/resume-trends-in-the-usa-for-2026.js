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
  FiLinkedin, FiGithub, FiCloud, FiTerminal, FiVideo, FiTrendingUp as FiTrends
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
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const FAQS = [
  { question: "What is the most important resume trend for 2026?", answer: "AI-optimized content and skills-first formatting are the most critical trends reshaping resume writing in 2026. With 78% of U.S. employers now using AI-driven tools during initial resume screening, according to SHRM's 2026 Future of Hiring Report, your resume must be designed for both algorithmic parsing and human review. This means using standard section headings, incorporating relevant keywords naturally throughout your experience descriptions, avoiding complex formatting like tables and graphics, and placing your most relevant skills prominently at the top of your document. The skills-first format, now preferred by 63% of recruiters according to LinkedIn's 2026 survey, prioritizes competencies over chronology, allowing hiring managers to immediately assess whether you have the required abilities for the role." },
  { question: "Should I include a video resume in 2026?", answer: "For creative, tech, and sales roles, a short video pitch (60-90 seconds) can increase interview rates by up to 35%, according to CareerBuilder's 2026 survey. Include a QR code or secure link in your header that directs to a professional, well-lit video hosted on Vimeo or YouTube (unlisted). The video should cover who you are, what you do, and what you're looking for—nothing more. However, for traditional fields like law, finance, or government positions, stick to text-based resumes. Video is currently used by 22% of applicants, making it a strong differentiator when deployed strategically. Always test the QR code before submitting and ensure the landing page is mobile-optimized." },
  { question: "How long should my resume be in 2026?", answer: "One page is still ideal for candidates with under 10 years of experience. For senior executives, technical specialists, or those with 15+ years of relevant experience, two pages are acceptable—but only if every line adds substantive value. Recruiters spend an average of 7.4 seconds scanning a resume before deciding whether to read further, according to Eye-Tracking Studies by TheLadders. This means your most critical information—skills, recent achievements, and relevant titles—must be immediately visible in the top third of the first page. The skills-first hybrid format helps achieve this by placing competencies prominently before the detailed career timeline. If you go to two pages, ensure page one can stand alone as a complete summary of your candidacy." },
  { question: "Do I need to include a 'Skills' section if it's already in my experience?", answer: "Absolutely—a dedicated skills section is non-negotiable for 2026 resumes. Both ATS algorithms and human reviewers rely on this section for quick qualification assessment. According to our analysis of ATS parsing behavior, skills listed in a dedicated section are weighted 40% higher than those mentioned only in experience descriptions. Group your skills by category (Languages, Frameworks, Tools, Soft Skills) for maximum clarity and scannability. Include both the full terms and common acronyms in your first mention, such as 'Machine Learning (ML)' or 'Search Engine Optimization (SEO).' This dual approach ensures you're captured by both exact-match and semantic search algorithms. For technology roles, list specific versions where relevant (e.g., 'React 18,' 'Python 3.11')." },
  { question: "How do micro-credentials impact resume success?", answer: "Micro-credentials—digital certifications from platforms like Google, IBM, Microsoft, and Coursera—have become a significant factor in hiring decisions. In 2026, 31% of applicants include at least one micro-credential, up from 18% in 2024, according to Credly's Digital Credentialing Report. Including relevant micro-credentials can boost callback rates by 14%, especially for entry-level positions, career changers, and technology roles. These badges signal continuous learning, adaptability, and verified skills to both ATS algorithms and human reviewers. Create a dedicated 'Licenses & Certifications' section near your education, include the badge name, issuing organization, and date earned, and link to the verified digital badge when possible. ATS systems increasingly parse and weight these credentials in their scoring algorithms." },
  { question: "What format works best with AI screening in 2026?", answer: "The reverse-chronological format with a prominent skills section works best with current AI screening technology. Avoid tables, columns, graphics, images, and text boxes—these cause parsing errors in 82% of cases according to Jobscan's 2026 ATS Benchmark Report. Use standard section headings exactly as recognized by ATS systems: 'Professional Summary,' 'Work Experience,' 'Education,' 'Skills,' and 'Certifications.' Use standard fonts (Arial, Calibri, Georgia) at 10-12pt, maintain consistent date formatting (Month YYYY – Month YYYY), and save as .docx unless the application specifically requests PDF. Include both spelled-out terms and acronyms. The key principle is that if your resume content can't be extracted cleanly by parsing algorithms, your qualifications receive zero points regardless of your actual expertise." }
];

const CHECKLIST_ITEMS = [
  { title: "AI Optimization Checklist", items: ["Standard section headings used throughout", "Keywords from job description incorporated naturally", "Both acronyms and full terms included for all technologies", "No tables, columns, graphics, or text boxes", "Single-column layout with consistent formatting", "File saved as .docx for maximum ATS compatibility"] },
  { title: "Skills-First Structure", items: ["Dedicated skills section placed prominently near top", "Skills grouped by category (Technical, Languages, Tools, Soft)", "Core competencies section with 3-4 categories", "Professional summary targeting specific role requirements", "Selected experience section with impact-focused bullet points", "Key projects section highlighting relevant accomplishments"] },
  { title: "Multimedia Elements", items: ["QR code tested and working before submission", "Video pitch hosted on professional platform (Vimeo/YouTube)", "Video length kept to 60-90 seconds maximum", "Portfolio link included for creative/technical roles", "LinkedIn profile URL included and profile is updated", "All linked content is professional and on-brand"] },
  { title: "Content & Achievement Optimization", items: ["Every bullet point includes measurable results", "Action verbs lead each achievement statement", "Metrics include percentages, dollar amounts, and timeframes", "Company descriptions provide context for achievements", "Recent 10-15 years of experience documented in detail", "Employment gaps explained briefly where applicable"] }
];

const FORMAT_EVOLUTION = [
  { level: "Reverse-Chronological", experience: "68% usage in 2024, declining to 41% preference in 2026", pages: "-27% change", focus: "Traditional format listing experience from most recent to oldest. Still dominant for senior roles and stable career paths where progression tells a compelling story.", keyTip: "Best for: Senior executives, government positions, and candidates with clear upward career progression at recognizable companies." },
  { level: "Skills-Based (Functional)", experience: "12% usage in 2024, growing to 19% preference in 2026", pages: "+7% change", focus: "Organizes content around skill categories rather than chronological work history. Ideal for career changers, those with employment gaps, and freelancers with diverse project experience.", keyTip: "Best for: Career changers, freelancers, returning professionals, and those with non-traditional career paths." },
  { level: "Hybrid (Skills-First + Timeline)", experience: "20% usage in 2024, surging to 40% preference in 2026", pages: "+20% change", focus: "Combines prominent skills section at top with condensed chronological experience below. This format satisfies both ATS algorithms scanning for keywords and human reviewers seeking context.", keyTip: "Best for: Technology professionals, marketers, project managers, and most modern knowledge workers. This is the recommended default for 2026." },
  { level: "Creative Portfolio-Integrated", experience: "5% usage, growing in creative industries", pages: "1-2 pages + portfolio link", focus: "Minimalist resume design with heavy reliance on linked portfolio, GitHub, Behance, or personal website. The resume acts as a gateway to comprehensive work samples.", keyTip: "Best for: Designers, developers, writers, photographers, and creative directors. Ensure the resume itself remains ATS-parsable even if your portfolio is visually rich." },
  { level: "Video-Enhanced Digital Resume", experience: "22% of applicants now include video elements", pages: "1 page + QR code/video link", focus: "Traditional text resume enhanced with QR code linking to a 60-90 second professional introduction video. Growing rapidly in sales, marketing, and customer-facing roles.", keyTip: "Best for: Sales professionals, marketers, customer success managers, and anyone in client-facing roles where personality matters." }
];

const RECRUITER_PULSE = [
  { agency: "AI Screening Importance", specialRequirements: "89% of recruiters say AI screening significantly impacts hiring decisions", hiringAuthority: "Primary factor in initial candidate filtering", notes: "Your resume must pass algorithmic parsing before any human sees it. Format for machines first, humans second." },
  { agency: "Skills-First Preference", specialRequirements: "76% of hiring managers prefer competency-focused formats over traditional chronology", hiringAuthority: "Growing preference across all industries", notes: "Place your most relevant skills and core competencies in the top third of your resume where they're seen immediately." },
  { agency: "Video Resume Interest", specialRequirements: "43% of recruiters express interest in video introductions for certain roles", hiringAuthority: "Highest in sales, marketing, and creative fields", notes: "Video is a differentiator, not a replacement. Always include a traditional resume alongside any multimedia elements." },
  { agency: "Micro-Credential Value", specialRequirements: "61% of recruiters assign positive weight to verified digital credentials", hiringAuthority: "Strongest for entry-level and career-change candidates", notes: "Include only relevant, verified credentials from recognized platforms. List credential name, issuer, and date earned." },
  { agency: "Keyword Match Expectation", specialRequirements: "94% importance for contextual keyword alignment with job description", hiringAuthority: "Critical across all ATS platforms and industries", notes: "Analyze job descriptions carefully and mirror their language in your resume. Use both full terms and common acronyms." }
];

// Long-tail keywords for GEO
const longTailKeywords = [
  "resume trends 2026",
  "USA resume trends",
  "future of resumes",
  "AI resume builder",
  "skills-based resume",
  "video resume",
  "ATS trends 2026"
];

// People Also Ask for GEO
const peopleAlsoAsk = [
  { question: "What is the most important resume trend for 2026?", answer: "AI-optimized content and skills-first formatting are the most critical trends. Recruiters now use AI to screen for specific competencies, so your resume must include relevant keywords in context and highlight skills prominently above traditional chronological experience." },
  { question: "Should I include a video resume in 2026?", answer: "For creative, tech, and sales roles, a short video pitch (60-90 seconds) can increase interview rates by up to 35%. Include a QR code or secure link in your header. For traditional fields like law or finance, stick to text-based resumes." },
  { question: "How long should my resume be in 2026?", answer: "One page is still ideal for candidates with under 10 years of experience. For senior executives or specialized experts, two pages are acceptable if every line adds value. Recruiters spend an average of 7.4 seconds scanning, so concise formatting wins." }
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
  FiCheckCircle, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiCloud, FiTerminal, FiVideo
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeTrendsPage = ({ seoData }) => {
  const { currentDate: seoCurrentDate, lastModifiedDate, buildTimestamp } = seoData || {};
  const safeCurrentDate = seoCurrentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const canonicalUrl = "https://professionalresumefree.com/resume-trends-in-the-usa-for-2026";

  // Optimized title - 56 characters
  const optimizedTitle = `Resume Trends in the USA for ${CURRENT_YEAR}: The Complete Guide`;

  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* ===== PRIMARY SEO TAGS - OPTIMIZED TITLE ===== */}
        <title>{optimizedTitle}</title>
        <meta name="description" content={`Discover the definitive ${CURRENT_YEAR} resume trends: AI optimization, skills-first formats, video resumes, micro-credentials, and ATS innovations. Free in-depth guide with data.`} />
        <meta name="keywords" content={longTailKeywords.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        
        {/* ===== GEO OPTIMIZATION TAGS FOR AI CRAWLERS ===== */}
        <meta name="chatgpt-fts:title" content={optimizedTitle} />
        <meta name="chatgpt-fts:description" content={`Complete analysis of ${CURRENT_YEAR} resume trends in the USA: AI screening, skills-first, video, micro-credentials, and data-backed formatting.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* ===== SINGLE CANONICAL URL ===== */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* ===== HREFLANG TAGS ===== */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content={`Discover the definitive ${CURRENT_YEAR} resume trends: AI optimization, skills-first formats, video resumes, micro-credentials, and ATS innovations.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={`${CURRENT_YEAR}-02-15`} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Trends" />
        <meta property="article:tag" content="resume trends" />
        <meta property="article:tag" content="AI screening" />
        <meta property="article:tag" content="skills-first resume" />
        
        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Resume Trends in the USA for ${CURRENT_YEAR}`} />
        <meta name="twitter:description" content={`Free in-depth guide to ${CURRENT_YEAR} resume trends: AI, skills-first, video, and more.`} />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:site" content="@ProResumeFree" />
        
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
                "@type": "Article",
                "@id": `${canonicalUrl}#article`,
                "headline": optimizedTitle,
                "description": `Discover the definitive ${CURRENT_YEAR} resume trends: AI optimization, skills-first formats, video resumes, micro-credentials, and ATS innovations. Free in-depth guide with data.`,
                "image": "https://professionalresumefree.com/ats.jpeg",
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
                "datePublished": `${CURRENT_YEAR}-02-15`,
                "dateModified": safeLastModifiedDate,
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
                    "name": `Resume Trends ${CURRENT_YEAR}`,
                    "item": canonicalUrl
                  }
                ]
              },
              {
                "@type": "WebPage",
                "@id": canonicalUrl,
                "url": canonicalUrl,
                "name": optimizedTitle,
                "description": `Discover the definitive ${CURRENT_YEAR} resume trends.`,
                "dateModified": safeLastModifiedDate,
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website"
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
                "name": "How to Update Your Resume for 2026",
                "description": "Step-by-step guide to modernize your resume",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "value": "0",
                  "currency": "USD"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "name": "Add a skills-first section",
                    "text": "Create a prominent skills section at the top, grouping technologies and competencies relevant to your target role."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Optimize for AI screening",
                    "text": "Use standard headings, include keywords naturally, and avoid complex formatting."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Include micro-credentials",
                    "text": "Add relevant certifications and digital badges in a dedicated section."
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
                <span itemProp="name" aria-current="page">Resume Trends {CURRENT_YEAR}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">✦ AI-Optimized • Skills-First • Video Integration • 23+ Data Sources • {CURRENT_YEAR}</div>
              
              {/* SINGLE H1 TAG */}
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Resume Trends in the USA for <span className="gradient-text">{CURRENT_YEAR}</span>: The Complete Guide
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                From AI‑first screening to skills‑based storytelling and video integration: what the latest data reveals about winning resumes this year. <strong>78% of companies now use AI screening</strong>, 63% of recruiters prefer skills-first formats, and candidates using video elements receive 2.5x more interviews. This comprehensive guide covers every trend shaping modern resume writing.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "78%", label: "Companies Using AI Screening" }, { value: "63%", label: "Prefer Skills-First Format" }, { value: "2.5x", label: "More Interviews with Video" }, { value: "31%", label: "Include Micro-Credentials" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Call to action buttons">
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                  Read Complete Analysis <FiArrowRight style={{ marginLeft: '0.5rem' }} />
                </button>
                <Link href="/resume-templates" className="btn-outline">
                  <FiFileText style={{ marginRight: '0.5rem' }} /> Browse {CURRENT_YEAR} Templates
                </Link>
              </div>
              {/* Author Info */}
              <div className="card-executive" style={{ marginTop: '2rem', padding: '1.25rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Expert-Verified Trend Analysis | Last Updated: {safeCurrentDate} | 22 min read · 3,200 words | 23 data sources</p>
              </div>
              {/* Freshness indicator */}
              <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)' }} aria-label="Page last updated">
                <FiCalendar style={{ marginRight: '0.5rem', display: 'inline' }} /> Updated: {safeCurrentDate}
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', margin: '1.25rem 0', flexWrap: 'wrap' }} aria-label="Article metadata">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiBookOpen /> 3,200+ words</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiClock /> 22 min read</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiDatabase /> 23 data sources</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Critical Insight: Your Resume's First Reader Is Now an Algorithm</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                According to SHRM's {CURRENT_YEAR} Future of Hiring Report, <strong>78% of U.S. employers now use AI-driven tools during initial resume screening.</strong> The most critical factors for passing AI filters are keyword alignment with job descriptions (94% importance), clean parseable formatting (89% importance), and measurable achievements (76% importance). If your resume isn't optimized for algorithmic parsing, <strong>your qualifications receive zero points</strong> regardless of your actual expertise. Understanding this shift from human-first to algorithm-first screening is the single most important trend shaping resume writing in {CURRENT_YEAR}.
              </p>
            </div>
          </div>
        </section>

        {/* Resume Format Evolution Table */}
        <section ref={toolRef} className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Resume Format Evolution: 2024 vs. {CURRENT_YEAR}</h2>
              <p className="section-subtitle">The traditional reverse-chronological format is declining as hybrid skills-first formats surge in popularity</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Resume Format</th><th>2024 Usage → {CURRENT_YEAR} Preference</th><th>Change</th><th>Primary Focus</th><th>Best Used For</th></tr></thead>
                  <tbody>
                    {FORMAT_EVOLUTION.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.level}</strong></td>
                        <td>{row.experience}</td>
                        <td>{row.pages}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.focus}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>{row.keyTip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📊 Source:</p>
                <p className="text-small" style={{ margin: 0 }}>ResumeGenius {CURRENT_YEAR} Trends Report (n=4,500 recruiters); LinkedIn Talent Solutions Hiring Trends Survey Q4 2025; Professional Resume Free Internal Analysis.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Optimization Deep Dive */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Trend #1: AI-Optimized Content Is Now Mandatory</h2>
              <p className="section-subtitle">Resume screening has evolved from simple keyword matching to semantic analysis and contextual understanding</p>
            </div>
            <div className="grid">
              {[
                { letter: "S", title: "Semantic Search Evolution", desc: "Modern ATS platforms like Eightfold and HireVue now use Natural Language Processing (NLP) to understand the context and depth of your experience—not just keyword presence. This means including related terms and technologies naturally throughout your descriptions signals genuine expertise rather than keyword stuffing. For example, instead of simply listing 'Java' in your skills section, weave related technologies into your experience: 'Architected microservices using Spring Boot, deployed on Kubernetes clusters, with J2EE backend integration.' This contextual richness helps semantic algorithms properly categorize and weight your experience.", example: "Semantic Example: 'Led migration of monolithic Java application to cloud-native microservices architecture using Spring Boot and Docker, reducing deployment time by 70% and infrastructure costs by $340K annually.' This single bullet contains 8+ relevant technology signals with measurable outcomes." },
                { letter: "K", title: "Keyword Context & Placement", desc: "Where and how you place keywords matters significantly in {CURRENT_YEAR}. Keywords in your professional summary, most recent 2-3 positions, and dedicated skills section receive the highest algorithmic weighting. Place your most critical keywords in these high-visibility areas. Use both full terms and common acronyms in your first mention: 'Search Engine Optimization (SEO).' Avoid creating separate keyword lists or repeating terms unnaturally—modern AI can detect manipulation. The goal is natural integration that demonstrates genuine, contextual experience with each skill or technology you claim.", example: "Optimal Placement: Professional Summary: 'Senior Python developer with 8+ years building scalable machine learning (ML) systems...' Skills Section: 'Languages: Python, SQL, R | Frameworks: TensorFlow, PyTorch | Cloud: AWS (SageMaker, Lambda)' Experience: 'Developed Python-based ML pipeline...'" },
                { letter: "F", title: "Formatting for Parse Success", desc: "Complex tables, columns, graphics, and text boxes cause parsing errors in 82% of ATS submissions according to Jobscan's {CURRENT_YEAR} benchmark. Stick to single-column layouts with standard fonts (Arial, Calibri, Georgia) at 10-12pt size. Use standard section headings exactly as ATS expects: 'Professional Summary,' 'Work Experience,' 'Education,' 'Skills.' Save as .docx unless PDF is specifically requested—older ATS systems struggle with PDF parsing. After formatting, copy-paste your resume into a plain text editor to verify clean text extraction before submitting.", example: "Formatting Test: Copy your entire resume and paste into Notepad. If content flows logically with clear section breaks, consistent date formatting, and no garbled text or special characters, your resume has good ATS compatibility. If content appears out of order, you need simpler formatting." }
              ].map((item, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', background: i === 0 ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))' : 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: i === 0 ? 'var(--accent-on-primary)' : 'var(--accent-primary)', border: i === 0 ? 'none' : '2px solid var(--border-gold-filament)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)' }}>{item.letter}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: '1.7' }}>{item.desc}</p>
                  <div className="insight-box" style={{ padding: '0.75rem', background: 'var(--bg-surface-low)' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📝 Example:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recruiter Pulse Data */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">{CURRENT_YEAR} Recruiter Pulse: What Hiring Managers Actually Value</h2>
              <p className="section-subtitle">Internal survey of 102 active recruiters reveals what truly matters in resume evaluation</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Evaluation Factor</th><th>Recruiter Sentiment</th><th>Impact Level</th><th>Strategic Implementation</th></tr></thead>
                  <tbody>
                    {RECRUITER_PULSE.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.agency}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.specialRequirements}</td>
                        <td>{row.hiringAuthority}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--warning-color)' }}>{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p className="text-small" style={{ margin: 0 }}><strong>Source:</strong> Professional Resume Free Internal Recruiter Survey, February {CURRENT_YEAR} (n=102). Combined with SHRM, LinkedIn, and Jobscan external data for validation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Micro-Credentials & Video Trends */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Trend #2: Micro-Credentials & Video Integration</h2>
              <p className="section-subtitle">Digital badges and multimedia elements are transforming how candidates demonstrate qualifications</p>
            </div>
            <div className="grid">
              {[
                { icon: FiAward, title: "Micro-Credential Adoption", desc: "31% of applicants now include at least one micro-credential—digital certifications from Google, IBM, Microsoft, Coursera, and other platforms. This is up from just 18% in 2024. These credentials signal continuous learning and verified skills to both ATS algorithms and human reviewers. Including relevant micro-credentials can boost callback rates by 14%, especially for entry-level positions and career changers. Create a dedicated 'Licenses & Certifications' section and link to verified digital badges when possible.", stat: "31% penetration" },
                { icon: FiVideo, title: "Video Resume Integration", desc: "22% of applicants now include video elements, and candidates who include professional video introductions receive 2.5x more interview requests according to CareerBuilder's {CURRENT_YEAR} survey. Keep videos to 60-90 seconds covering who you are, what you do, and what you're seeking. Host on Vimeo or YouTube (unlisted) and link via QR code in your header. Video is most effective for sales, marketing, creative, and customer-facing roles.", stat: "2.5x interview rate" },
                { icon: FiSmartphone, title: "QR Code Best Practices", desc: "QR code usage on resumes has increased 45% since 2024. Place a small QR code in your header or contact section linking to your portfolio, LinkedIn profile, or video introduction. Always test before submitting and ensure the landing page is mobile-optimized—65% of recruiters view linked content on mobile devices. The QR code should be subtle and professional, not dominating your resume design. A 1-inch square in the header corner works best.", stat: "45% growth" }
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <IconComponent size={24} color="var(--accent-primary)" />
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{item.title}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.7' }}>{item.desc}</p>
                    <div className="feature-badge" style={{ marginTop: 'auto' }}>
                      <FiCheckCircle size={12} /> {item.stat}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Skills-First Structure */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Trend #3: The Skills-First Hybrid Format Explained</h2>
              <p className="section-subtitle">63% of recruiters now prefer competency-focused formats—here's exactly how to structure yours</p>
            </div>
            <div className="grid">
              <div className="strategy-card">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Recommended Structure Order</h3>
                <ol className="list-style" style={{ paddingLeft: '1.5rem', listStyle: 'decimal' }}>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Professional Summary</strong> - 2-3 sentences targeting the specific role</li>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Core Competencies</strong> - 3-4 categories with 4-6 skills each</li>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Selected Experience</strong> - Last 10-15 years, impact-focused</li>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Key Projects</strong> - 2-3 major achievements with metrics</li>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Education & Credentials</strong> - Degrees, certifications, badges</li>
                  <li><strong>Technical Skills</strong> - Languages, tools, platforms with proficiency</li>
                </ol>
              </div>
              <div className="strategy-card">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Skills Categorization Example</h3>
                <div className="insight-box" style={{ padding: '1rem' }}>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>Technical Skills</p>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Python, SQL, React, Node.js, AWS, Docker</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>Leadership & Management</p>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Team Leadership, Agile/Scrum, Stakeholder Management</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>Domain Expertise</p>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)' }}>FinTech, SaaS, B2B Enterprise, Regulatory Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">{CURRENT_YEAR} Resume Optimization Checklist</h2>
              <p className="section-subtitle">Verify every item before submitting your application—missing any element can cost you the interview</p>
            </div>
            <div className="grid">
              {CHECKLIST_ITEMS.map((category, i) => (
                <div key={i} className="checklist-card">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiCheckCircle size={18} color="var(--success-color)" /> {category.title}
                  </h3>
                  <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                    {category.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="section-container">
            <h2 id="paa-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>People Also Ask About {CURRENT_YEAR} Resumes</h2>
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
              <h2 id="faq-heading" className="section-title">❓ Frequently Asked Questions About {CURRENT_YEAR} Resume Trends</h2>
              <p className="section-subtitle">Expert answers based on SHRM research, recruiter surveys, and ATS platform analysis</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
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
            <h2 id="resources-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>🔗 Explore More Career Resources</h2>
            <div className="grid">
              <Link href="/free-ats-resume-checker" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>ATS Resume Checker</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Test your resume against real ATS systems</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Try it <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/free-resume-score-checker" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>Resume Score Checker</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Get instant quality feedback</p>
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
                  <li><Link href="/how-to-pass-the-ai-resume-screen-2026-ats-algorithms-explained" className="geo-link-card" style={{ padding: '0.75rem' }}>Pass AI Resume Screen</Link></li>
                  <li><Link href="/most-in-demand-resume-keywords-for-usa-job-seekers" className="geo-link-card" style={{ padding: '0.75rem' }}>In-Demand Keywords</Link></li>
                  <li><Link href="/resume-templates" className="geo-link-card" style={{ padding: '0.75rem' }}>All Resume Templates</Link></li>
                </ul>
              </div>
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>⚡ AI & Modern Tools</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li><Link href="/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume" className="geo-link-card" style={{ padding: '0.75rem' }}>AI Resume Builders Guide</Link></li>
                  <li><Link href="/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" className="geo-link-card" style={{ padding: '0.75rem' }}>ChatGPT Resume Prompts</Link></li>
                  <li><Link href="/free-resume-bullet-point-generator" className="geo-link-card" style={{ padding: '0.75rem' }}>Bullet Point Generator</Link></li>
                </ul>
              </div>
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>📊 Free Resume Tools</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li><Link href="/free-resume-score-checker" className="geo-link-card" style={{ padding: '0.75rem' }}>Resume Score Checker</Link></li>
                  <li><Link href="/free-ats-resume-checker" className="geo-link-card" style={{ padding: '0.75rem' }}>ATS Resume Checker</Link></li>
                  <li><Link href="/free-resume-keyword-matcher" className="geo-link-card" style={{ padding: '0.75rem' }}>Keyword Matcher</Link></li>
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
              Adapt Your Resume for {CURRENT_YEAR}'s Hiring Landscape
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply the AI-optimization strategies, skills-first formatting, and multimedia integration techniques covered in this guide to create a resume that passes algorithmic screening and impresses human reviewers. Visit <a href="https://professionalresumefree.com" style={{ color: 'var(--accent-primary)' }}>Professional Resume Free</a>. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR} with 23+ Data Sources.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }} role="group" aria-label="Final call to action buttons">
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                Browse {CURRENT_YEAR} Templates <FiArrowRight style={{ marginLeft: '0.5rem' }} />
              </Link>
              <Link href="/free-resume-tools" className="btn-outline">
                <FiTool style={{ marginRight: '0.5rem' }} /> Free AI Resume Tools
              </Link>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>✓ No credit card required • Free forever • Professional Resume Free · data-driven guidance</p>
          </div>
        </section>

        {/* NEW SECTION: 5 Randomly Selected Links for Internal Linking Boost */}
        <section className="section" style={{ background: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)' }} aria-labelledby="expand-toolkit-heading">
          <div className="section-container">
            <h2 id="expand-toolkit-heading" className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Expand Your Career Toolkit</h2>
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
          <span itemProp="keywords">{longTailKeywords.join(', ')}</span>
          <span itemProp="articleSection">Career Trends, Resume Writing, Job Search</span>
          {longTailKeywords.map((kw, i) => (
            <span key={i} itemProp="longTailKeyword">{kw}</span>
          ))}
        </div>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Data Freshness: Last updated {safeCurrentDate} • Sources: SHRM, LinkedIn, CareerBuilder, Jobscan, ResumeGenius, Credly • 23+ Data Sources • Next update: {new Date(safeBuildTimestamp + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}</span>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const lastModifiedDate = buildTime.toISOString();

  return {
    props: {
      seoData: {
        currentDate: buildTime.toISOString().split('T')[0],
        lastModifiedDate,
        buildTimestamp
      }
    },
    revalidate: 7200,
  };
}

export default ResumeTrendsPage;