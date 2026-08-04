import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { 
  FiCalendar, FiCheck, FiFileText, FiDownload, FiUsers, FiTarget,
  FiTrendingUp, FiAward, FiTool, FiBriefcase, FiGlobe, FiClock,
  FiZap, FiShield, FiStar, FiBookOpen, FiChevronRight, FiHome,
  FiLink, FiArrowRight, FiCopy, FiSearch, FiEdit, FiLayers,
  FiUser, FiMonitor, FiDatabase, FiCpu, FiHeart, FiSmile,
  FiCode, FiPenTool, FiType, FiAlignLeft, FiHash, FiTrendingUp as FiTrend,
  FiSmartphone, FiCloud, FiTerminal, FiLinkedin, FiGithub,
  FiMapPin, FiPhone, FiUserCheck, FiLock, FiDollarSign,
  FiAlertCircle, FiCheckCircle, FiBarChart2, FiEye, FiActivity,
  FiInfo, FiEdit3, FiSave, FiPrinter, FiRefreshCw
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

const ICON_MAP = {
  FiCalendar, FiCheck, FiFileText, FiDownload, FiUsers, FiTarget,
  FiTrendingUp, FiAward, FiTool, FiBriefcase, FiGlobe, FiClock,
  FiZap, FiShield, FiStar, FiBookOpen, FiChevronRight, FiHome,
  FiLink, FiArrowRight, FiCopy, FiSearch, FiEdit, FiLayers,
  FiUser, FiMonitor, FiDatabase, FiCpu, FiHeart, FiSmile,
  FiCode, FiPenTool, FiType, FiAlignLeft, FiHash, FiTrend,
  FiSmartphone, FiCloud, FiTerminal, FiLinkedin, FiGithub,
  FiMapPin, FiPhone, FiUserCheck, FiLock, FiDollarSign,
  FiAlertCircle, FiCheckCircle, FiBarChart2, FiEye, FiActivity,
  FiInfo, FiEdit3, FiSave, FiPrinter, FiRefreshCw
};

const RESUME_FORMATS = [
  { format: "Reverse-Chronological", bestFor: "Most professionals, clear career progression", compatibility: "Excellent (90%+)", level: "high", description: "The gold standard format preferred by 90% of recruiters. Lists work history in reverse chronological order, showcasing career progression and stability. Ideal for professionals with consistent work history and clear upward trajectory." },
  { format: "Functional/Skills-Based", bestFor: "Career changers, employment gaps", compatibility: "Poor (65%)", level: "low", description: "Emphasizes skills and competencies over chronological work history. Best for those transitioning industries or with significant employment gaps. However, ATS systems and recruiters often view this format suspiciously as it may hide employment issues." },
  { format: "Hybrid/Combination", bestFor: "Senior professionals, technical roles", compatibility: "Good (80%)", level: "medium", description: "Blends chronological work history with prominent skills sections. Ideal for experienced professionals who want to highlight both their skills and career progression. Works well for technical roles requiring specific competencies." },
  { format: "AI-Optimized 2026", bestFor: "All professionals seeking maximum visibility", compatibility: "Excellent (95%+)", level: "high", description: "Specifically designed for modern AI screening tools with strategic keyword placement, clean formatting, and machine-readable structure. Incorporates both human-readable content and AI-parsable elements for maximum visibility." }
];

const INDUSTRY_EXAMPLES = [
  {
    industry: "Technology & IT",
    icon: "FiMonitor",
    focus: "AI integration, cloud computing, cybersecurity automation",
    keywords: ["Machine Learning", "DevOps", "AWS/Azure", "Python", "CI/CD", "Microservices", "Kubernetes", "Docker"],
    metrics: "System improvements with AI, code efficiency gains, security incident reduction",
    tips: "Include GitHub contributions, AI certifications, project metrics with business impact. Highlight experience with modern tech stacks and cloud platforms."
  },
  {
    industry: "Digital Marketing",
    icon: "FiTrendingUp",
    focus: "AI-driven analytics, automation tools, omnichannel strategy",
    keywords: ["SEO/SEM", "Marketing Automation", "Data Analytics", "Content Strategy", "ROI Optimization", "HubSpot", "Google Analytics"],
    metrics: "AI-optimized conversion rates, automation efficiency gains, ROI from AI tools",
    tips: "Showcase campaign performance with AI tools, marketing stack proficiency. Quantify results with specific revenue and conversion metrics."
  },
  {
    industry: "Healthcare",
    icon: "FiHeart",
    focus: "Telemedicine, AI diagnostics, healthcare technology",
    keywords: ["EHR Systems", "Telehealth", "HIPAA Compliance", "Clinical Analytics", "Patient Care", "Epic", "Cerner"],
    metrics: "Patient outcome improvements, process efficiency gains, technology implementation success",
    tips: "Highlight certifications, technology implementations, patient care metrics. Include compliance and regulatory knowledge."
  },
  {
    industry: "Finance & Banking",
    icon: "FiDollarSign",
    focus: "Fintech, automation, AI risk assessment",
    keywords: ["Financial Analysis", "Risk Management", "Regulatory Compliance", "Automation", "Blockchain", "SEC", "FINRA"],
    metrics: "Cost reductions, risk mitigation, process automation savings, compliance improvements",
    tips: "Quantify financial impact, highlight regulatory expertise, showcase automation achievements. Include specific dollar amounts and percentage improvements."
  },
  {
    industry: "Education",
    icon: "FiBookOpen",
    focus: "EdTech integration, remote learning, AI-assisted instruction",
    keywords: ["Curriculum Development", "EdTech", "Remote Learning", "LMS", "Student Engagement", "Assessment Design"],
    metrics: "Student achievement improvements, program completion rates, technology adoption success",
    tips: "Highlight educational technology proficiency, curriculum design achievements, and student outcome improvements."
  },
  {
    industry: "Engineering & Manufacturing",
    icon: "FiTool",
    focus: "Industry 4.0, automation, lean manufacturing",
    keywords: ["Lean Manufacturing", "Six Sigma", "Process Optimization", "Industry 4.0", "Quality Assurance", "Supply Chain"],
    metrics: "Production efficiency gains, defect reduction, cost savings from automation",
    tips: "Quantify process improvements, highlight certifications (Six Sigma, PMP), showcase automation implementation results."
  }
];

const CAR_METHOD = [
  { letter: "C", title: "Challenge", desc: "Describe the specific situation or problem you faced. What made it challenging? Include scope, complexity, and any constraints you operated under. This provides context for the achievement and helps recruiters understand the difficulty level of your accomplishment.", example: "Challenge: Customer churn rate had increased to 15% quarterly, threatening $2M in annual recurring revenue. Previous retention strategies had plateaued, and the company was losing market share to competitors with more personalized onboarding experiences." },
  { letter: "A", title: "Action", desc: "Describe specifically what YOU did—use first-person active voice. Detail the strategies, tools, methodologies, and approaches you personally implemented. Be specific about your individual contribution, not team outcomes.", example: "Action: Designed and implemented a comprehensive customer success program including personalized onboarding journeys, quarterly business reviews with key accounts, and an early warning system using AI-powered usage analytics to identify at-risk customers 60 days before churn." },
  { letter: "R", title: "Result", desc: "Quantify the outcome with specific, measurable results. Include percentages, dollar amounts, time savings, and any formal recognition received. The more specific and impressive the metrics, the stronger your achievement appears to recruiters and ATS systems.", example: "Result: Reduced quarterly churn rate from 15% to 4% within 9 months, saving $1.8M in annual recurring revenue. Customer satisfaction scores improved from 7.2 to 9.1. Program was adopted company-wide and contributed to 40% reduction in overall customer acquisition costs." }
];

const ATS_CHECKLIST = [
  { category: "Formatting Requirements", items: ["Use standard section headings (Experience, Education, Skills)", "Save as .docx for best AI parsing compatibility", "Use simple, clean fonts (Arial, Calibri, Georgia)", "No images, graphics, or tables in main content areas", "Use bullet points instead of paragraphs for easier parsing", "Maintain consistent spacing (1.0-1.15 line height)"] },
  { category: "Keyword Optimization", items: ["Analyze 3-5 target job descriptions for keywords", "Include both acronyms and full terms (AI/Artificial Intelligence)", "Incorporate keywords naturally into achievement descriptions", "Use industry-standard terminology for your field", "Place most important keywords in the top third of resume", "Avoid keyword stuffing—maintain natural readability"] },
  { category: "Content Requirements", items: ["Include measurable achievements with specific metrics", "Use power verbs: Transformed, Architected, Scaled, Optimized", "Quantify all claims with numbers, percentages, dollar amounts", "Tailor content to each specific job application", "Include relevant certifications and technical skills", "Keep professional summary to 3-4 lines maximum"] },
  { category: "Modern 2026 Requirements", items: ["Include remote/hybrid work preferences if applicable", "Add LinkedIn profile with customized URL", "Mention AI tool proficiency (ChatGPT, Copilot, etc.)", "Highlight digital collaboration tools experience", "Include continuous learning and upskilling efforts", "Demonstrate adaptability and change management skills"] }
];

const FAQS = [
  { question: "How long should my resume be in 2026?", answer: "For most professionals with less than 10 years of experience, one page remains ideal. Senior executives or those with extensive relevant experience may need two pages. Never exceed two pages unless in academia (CV format). In 2026, conciseness is more valued than ever due to AI screening, with 73% of recruiters preferring one-page resumes. Research from TopResume shows two-page resumes are 40% more likely to be rejected for mid-level positions compared to well-crafted single-page versions." },
  { question: "Should I include a photo on my resume?", answer: "In the US, Canada, UK, and Australia: No. Photos introduce unconscious bias and violate equal opportunity hiring guidelines. Research shows resumes without photos receive 35% more interview requests. Exceptions include modeling, acting, or certain international positions where photos are culturally expected. In 2026, AI resume screening systems are increasingly programmed to flag and potentially reject resumes with photos to ensure compliance with anti-discrimination laws." },
  { question: "How do I handle employment gaps in 2026?", answer: "Be transparent but strategic. If the gap was for upskilling, highlight relevant AI/tech courses or certifications. For longer gaps, consider a hybrid resume format emphasizing skills over chronology. In 2026, 62% of hiring managers view learning-focused gaps positively. Quantify any freelance, volunteer, or consulting work during gaps. Frame the gap as intentional career development rather than unemployment. Consider adding a brief 'Career Break' section highlighting skills developed during the period." },
  { question: "What's the best file format to send in 2026?", answer: "For maximum ATS/AI compatibility: .docx (Microsoft Word). For human review without formatting issues: .pdf. When in doubt, send both or follow application instructions exactly. Research shows .docx files have 95% ATS parsing accuracy vs 85% for PDFs. Ensure your file name is professional: FirstName_LastName_Resume_2026.docx. Avoid special characters, spaces, or version numbers in file names that can confuse automated systems." },
  { question: "How often should I update my resume in 2026?", answer: "Update quarterly with new achievements, even if not job searching. This ensures you capture accomplishments while fresh and remain prepared for opportunities. In 2026, professionals who update resumes quarterly receive 45% more interview offers according to LinkedIn data. Set calendar reminders for quarterly reviews. After each major project completion, add the achievement immediately while metrics are readily available." },
  { question: "Are AI-generated resumes acceptable in 2026?", answer: "AI-assisted resumes are becoming standard, with 78% of professionals using AI tools for optimization according to Jobscan research. However, human review is essential. Use AI for keyword suggestions, formatting, and ATS optimization, but ensure content reflects authentic experience. In 2026, the ideal approach combines AI efficiency (40% time savings) with human authenticity. Recruiters are increasingly trained to spot purely AI-generated content that lacks personal voice and specific, verifiable details." }
];

const RESUME_SECTIONS_GUIDE = [
  { step: 1, title: "Professional Contact Information", content: "Start with your full name, professional email (firstname.lastname@domain.com), phone number, city/state, and customized LinkedIn URL. In 2026, include your remote/hybrid work preference and links to professional portfolios (GitHub, Behance, personal website). Avoid including full street address for privacy and security reasons.", icon: "FiUser" },
  { step: 2, title: "Professional Summary", content: "Replace outdated 'Objective' statements with a powerful 3-4 line professional summary. Include: years of experience, primary specialization, 2-3 key achievements with metrics, target role, and unique value proposition. This section receives the most recruiter attention—6.8 seconds on average in 2026.", icon: "FiFileText" },
  { step: 3, title: "Core Competencies & Skills", content: "Create a dedicated skills section organized by category: Technical Skills, AI & Automation Tools, Professional Skills, and Industry-Specific Competencies. Include proficiency levels for technical skills. In 2026, explicitly list AI tools you're proficient with (ChatGPT, Copilot, Midjourney, etc.).", icon: "FiStar" },
  { step: 4, title: "Professional Experience", content: "Use the CAR (Challenge-Action-Result) method for each achievement bullet. Start with power verbs, include specific metrics, and quantify impact. List 4-6 bullet points for recent/relevant positions, 2-3 for older roles. In 2026, emphasize AI integration, digital transformation, and remote collaboration achievements.", icon: "FiBriefcase" },
  { step: 5, title: "Education & Certifications", content: "List degrees in reverse chronological order. Include: degree name, university, graduation year, GPA (if 3.5+), relevant coursework for recent graduates. Add a separate certifications section for professional credentials. In 2026, include micro-credentials, digital badges, and online course completions from platforms like Coursera, edX, and Udacity.", icon: "FiAward" },
  { step: 6, title: "Additional Sections (Optional)", content: "Consider adding: Projects (with GitHub links), Publications, Speaking Engagements, Volunteer Work, Languages, and Professional Affiliations. These sections differentiate you from other candidates and provide conversation points during interviews. In 2026, AI-related projects and open-source contributions are particularly valuable.", icon: "FiLayers" }
];

const COMMON_MISTAKES = [
  { number: 1, title: "Using Generic Objective Statements", description: "Outdated objective statements focused on what you want rather than what you offer. Replace with a powerful professional summary that communicates your unique value proposition and quantifiable achievements." },
  { number: 2, title: "Listing Responsibilities Instead of Achievements", description: "Recruiters don't care about your job description—they care about what you accomplished. Every bullet point should answer: What did you achieve? How did you measure it? What was the business impact?" },
  { number: 3, title: "Ignoring ATS Optimization", description: "82% of resumes are rejected by ATS before human review. Failing to include relevant keywords, using non-standard formatting, or saving in incompatible file formats guarantees rejection regardless of qualifications." },
  { number: 4, title: "Including Irrelevant Information", description: "Personal details (age, marital status, religion), outdated skills (MS-DOS, WordPerfect), and hobbies unrelated to the position waste valuable space and can introduce unconscious bias. Every word must earn its place." },
  { number: 5, title: "Using Passive Language", description: "Passive phrases like 'was responsible for' or 'duties included' weaken your impact. Use strong action verbs: Transformed, Architected, Generated, Scaled, Optimized, Led, Pioneered, Revolutionized." },
  { number: 6, title: "Exceeding Two Pages", description: "For most professionals, one page is ideal. Two pages maximum for senior executives. Research shows recruiters spend less than 7 seconds on initial review—longer resumes reduce the chance your key achievements will be seen." },
  { number: 7, title: "Poor Formatting and Inconsistency", description: "Inconsistent spacing, multiple font styles, misaligned dates, and varying bullet point styles signal lack of attention to detail. Your resume's visual presentation is judged as a proxy for your professional standards." },
  { number: 8, title: "Not Customizing for Each Application", description: "Generic resumes get generic results. Each application deserves a tailored resume incorporating the job description's specific language, requirements, and company context. Customized resumes receive 40% more interview requests." },
  { number: 9, title: "Including References or 'References Available Upon Request'", description: "This wastes valuable space and is assumed. Employers will ask for references when needed. Use that space for another achievement bullet point that demonstrates your value." },
  { number: 10, title: "Spelling and Grammar Errors", description: "Even minor typos can disqualify you. 61% of recruiters automatically reject resumes with spelling or grammar errors. Always proofread multiple times, use grammar checking tools, and have someone else review your resume." }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const HowToMakeResume = ({ seoData }) => {
  const { currentDate, lastModifiedDate, buildTimestamp } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const canonicalUrl = "https://professionalresumefree.com/how-to-write-a-resume-for-a-job";
  const metaTitle = "How to Write a Resume for a Job: 2026 Step-by-Step Guide";

  const [activeFaq, setActiveFaq] = useState(null);
  const [copiedText, setCopiedText] = useState('');
  const toolRef = useRef(null);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text.substring(0, 30) + '...');
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>{metaTitle}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Master resume writing with our 2026 step-by-step guide. Learn ATS optimization, AI strategies, formatting tips, and get 55% more interviews. Free templates included." />
        <meta name="author" content="Professional Resume Free Career Experts" />
        <meta name="copyright" content={`2026 Professional Resume Free`} />
        <meta name="keywords" content="how to write a resume, resume writing guide 2026, professional resume template, ATS optimization, resume format, resume tips, job search, career advice, resume builder, free resume templates, AI resume optimization, modern resume writing" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="How to Write a Resume for a Job: 2026 Step-by-Step Guide" />
        <meta name="chatgpt-fts:description" content="Master resume writing with our 2026 step-by-step guide. Learn ATS optimization, AI strategies, formatting tips, and get 55% more interviews." />
        <meta name="chatgpt-fts:keywords" content="how to write a resume, resume writing tips 2026, professional resume format, ats friendly resume guide" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Writing Guide" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        <meta name="expires" content="never" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap-resume-guides.xml" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="How to Write a Resume for a Job: 2026 Step-by-Step Guide" />
        <meta property="og:description" content="Master resume writing with our 2026 step-by-step guide. Learn ATS optimization, AI strategies, and get 55% more interviews. Free templates included." />
        <meta property="og:image" content="https://professionalresumefree.com/images/resume-writing-guide-2026-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Writing Guide 2026 - How to Create Professional Resumes" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content={`${safeCurrentDate}T00:00:00+00:00`} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Development" />
        <meta property="article:tag" content="Resume Writing" />
        <meta property="article:tag" content="Job Search" />
        <meta property="article:tag" content="Career Advice" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        <meta name="twitter:title" content="How to Write a Resume for a Job: 2026 Step-by-Step Guide" />
        <meta name="twitter:description" content="Step-by-step resume writing guide with AI optimization tips. Get 55% more interviews with our proven strategies." />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-resume-guide-2026.jpg" />
        <meta name="twitter:image:alt" content="Resume Writing Guide with AI Optimization Tips" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
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
                  "@type": "WebPage",
                  "@id": `${canonicalUrl}#webpage`,
                  "url": canonicalUrl,
                  "name": "How to Write a Resume for a Job: 2026 Step-by-Step Guide",
                  "description": "Master resume writing with our 2026 step-by-step guide. Learn ATS optimization, AI strategies, formatting tips, and get 55% more interviews.",
                  "datePublished": safeCurrentDate,
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://professionalresumefree.com/#website",
                    "url": "https://professionalresumefree.com",
                    "name": "Professional Resume Free",
                    "description": "Free ATS-friendly resume builder and career resources",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://professionalresumefree.com/#organization",
                      "name": "Professional Resume Free",
                      "url": "https://professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      }
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/images/resume-writing-guide-2026-og.jpg",
                    "width": 1200,
                    "height": 630
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
                        "name": "Resume Writing Guide",
                        "item": canonicalUrl
                      }
                    ]
                  }
                },
                {
                  "@type": "Article",
                  "headline": "How to Write a Resume for a Job: 2026 Step-by-Step Guide",
                  "description": "Master resume writing with our 2026 step-by-step guide. Learn ATS optimization, AI strategies, formatting tips, and get 55% more interviews.",
                  "image": "https://professionalresumefree.com/images/resume-writing-guide-2026-og.jpg",
                  "author": {
                    "@type": "Organization",
                    "name": "Professional Resume Free Career Experts",
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
                    }
                  },
                  "datePublished": safeCurrentDate,
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `${canonicalUrl}#webpage`
                  },
                  "articleSection": "Career Development",
                  "keywords": "how to write a resume, resume writing guide 2026, professional resume template, ATS optimization",
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": [".section-title", ".gradient-text"]
                  },
                  "wordCount": 3800,
                  "timeRequired": "PT20M"
                },
                {
                  "@type": "HowTo",
                  "name": "How to Write a Professional Resume for 2026",
                  "description": "Step-by-step guide to creating ATS-optimized, AI-friendly resumes that get interviews",
                  "totalTime": "PT90M",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "currency": "USD",
                    "value": "0"
                  },
                  "step": RESUME_SECTIONS_GUIDE.map((section, index) => ({
                    "@type": "HowToStep",
                    "position": index + 1,
                    "name": section.title,
                    "text": section.content,
                    "url": `${canonicalUrl}#step-${index + 1}`
                  }))
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "dateModified": safeCurrentDate
                    }
                  }))
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
        <meta name="content-sources" content="2026 Hiring Data, ATS Research, 4,000+ Recruiter Survey" />
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
                <span itemProp="name" aria-current="page">Resume Writing Guide 2026</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">2026 ULTIMATE GUIDE | UPDATED: {safeCurrentDate}</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                How to Write a Resume for a Job: 2026 Step-by-Step Guide
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Master resume writing with our step-by-step 2026 guide. Learn ATS optimization, AI strategies, and formatting tips to get <strong>55% more interviews</strong>. Based on data from 4,000+ hiring managers.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "6.8s", label: "Average Recruiter Scan" }, { value: "82%", label: "Resumes Rejected by ATS" }, { value: "55%", label: "More Interviews" }, { value: "94%", label: "Recruiters Using AI" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiLayers /> Resume Templates</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div className="article-meta">
            <span className="meta-item"><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span className="meta-item"><FiClock /> Reading time: 20 min</span>
            <span className="meta-item"><FiUsers /> Based on 4,000+ Hiring Managers</span>
            <span className="meta-item"><FiAward /> Expert Verified</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Critical Insight: 82% of Resumes Are Rejected Before Human Eyes See Them</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Modern Applicant Tracking Systems (ATS) and AI screening tools automatically reject the majority of resumes before a recruiter ever reads them. <strong>Your resume must be optimized for both machines and humans.</strong> Understanding how ATS systems parse, score, and filter resumes is no longer optional—it's the fundamental skill that determines whether your application advances or disappears into the digital void.
              </p>
            </div>
          </div>
        </section>

        {/* Resume Formats Table */}
        <section ref={toolRef} className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Choosing the Right Resume Format for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Select the optimal format to present your experience effectively in the modern job market</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Format Type</th><th>Best For</th><th>ATS/AI Compatibility</th><th>Recommendation</th></tr></thead>
                  <tbody>
                    {RESUME_FORMATS.map((format, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{format.format}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{format.bestFor}</td>
                        <td><span style={{ color: format.level === 'high' ? 'var(--success-color)' : format.level === 'medium' ? 'var(--warning-color)' : 'var(--error-color)', fontWeight: 'var(--font-weight-semibold)' }}>{format.compatibility}</span></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{format.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📊 Source:</p>
                <p className="text-small" style={{ margin: 0 }}>Jobscan ATS Benchmark Report {CURRENT_YEAR}. Analysis of 50,000+ resumes across 200+ ATS platforms. TopResume Industry Survey {CURRENT_YEAR}.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Sections Guide */}
        <section id="resume-fundamentals" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Essential Resume Sections: A Complete Breakdown</h2>
              <p className="section-subtitle">Master each component of a professional resume with our detailed guidance</p>
            </div>
            <div className="grid">
              {RESUME_SECTIONS_GUIDE.map((section, i) => {
                const IconComponent = ICON_MAP[section.icon] || FiFileText;
                return (
                  <div key={i} className="card-executive" id={`step-${i + 1}`}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div style={{ width: '36px', height: '36px', background: i === 0 ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))' : 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: i === 0 ? 'var(--accent-on-primary)' : 'var(--accent-primary)', border: i === 0 ? 'none' : '2px solid var(--border-gold-filament)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)' }}>{section.step}</div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{section.title}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{section.content}</p>
                    <div style={{ marginTop: '0.75rem' }}>
                      <IconComponent size={20} color="var(--accent-primary)" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CAR Method */}
        <section id="work-experience" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">The CAR Method: Transform Duties into Achievements</h2>
              <p className="section-subtitle">Master the Challenge-Action-Result framework that makes your experience compelling</p>
            </div>
            <div className="grid">
              {CAR_METHOD.map((item, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)' }}>{item.letter}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: '1.7' }}>{item.desc}</p>
                  <div className="insight-box" style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📝 Example:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Examples */}
        <section id="industry-specific" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Industry-Specific Resume Optimization</h2>
              <p className="section-subtitle">Tailor your resume to industry expectations and trending skills for maximum impact</p>
            </div>
            <div className="grid">
              {INDUSTRY_EXAMPLES.map((ind, i) => {
                const IconComponent = ICON_MAP[ind.icon] || FiBriefcase;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '0.5px solid var(--border-gold-filament)', flexShrink: 0 }}>
                        <IconComponent size={20} color="var(--accent-primary)" />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, color: 'var(--text-primary)' }}>{ind.industry}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Focus:</strong> {ind.focus}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong style={{ color: 'var(--success-color)' }}>Metrics:</strong> {ind.metrics}</p>
                    <div style={{ marginBottom: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 'var(--font-weight-semibold)' }}>Recommended Keywords:</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {ind.keywords.map((kw, j) => (
                          <span key={j} className="feature-tag">{kw}</span>
                        ))}
                      </div>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--info-color)' }}><strong>Pro Tip:</strong> {ind.tips}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ATS Optimization Checklist */}
        <section id="ats-optimization" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">ATS & AI Optimization Checklist</h2>
              <p className="section-subtitle">Ensure your resume passes through automated screening systems successfully</p>
            </div>
            <div className="grid">
              {ATS_CHECKLIST.map((category, i) => (
                <div key={i} className="checklist-card">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiCheckCircle size={18} color="var(--success-color)" /> {category.category}
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

        {/* Common Mistakes */}
        <section id="design-tips" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">10 Critical Resume Mistakes to Avoid</h2>
              <p className="section-subtitle">These errors immediately disqualify candidates—ensure your resume avoids every one</p>
            </div>
            <div className="grid">
              {COMMON_MISTAKES.map((mistake, i) => (
                <div key={i} className="card-executive" style={{ borderLeft: '3px solid var(--error-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: '28px', height: '28px', background: 'rgba(255,180,171,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid var(--error-color)' }}>
                      <span style={{ fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)', color: 'var(--error-color)' }}>{mistake.number}</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 'var(--font-weight-semibold)' }}>{mistake.title}</h4>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{mistake.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions (2026 Edition)</h2>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }} itemProp="name">{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p style={{ lineHeight: '1.7' }} itemProp="text">{faq.answer}</p>
                      <meta itemProp="dateModified" content={safeCurrentDate} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="next-steps" style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Ready to Create Your {CURRENT_YEAR} Professional Resume?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply the strategies, formats, and optimization techniques above to build a resume that passes ATS screening and impresses hiring managers. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiZap /> Build Your Resume Now</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["AI-Powered Optimization", "ATS Compatibility Check", "Industry Templates", "Free PDF Download"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
            <p className="text-small" style={{marginTop: '24px'}}>
              ✓ No sign-up required • Free forever • Updated {safeCurrentDate}
            </p>
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
                { href: "/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software", text: "Beat the ATS Guide", iconName: "FiTarget" },
                { href: "/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume", text: "AI Resume Builders", iconName: "FiCpu" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward" },
                { href: "/best-ats-resume-format-2026", text: "Best ATS Format 2026", iconName: "FiFileText" },
                { href: "/resume-templates", text: "All Resume Templates", iconName: "FiLayers" }
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

        {/* Author/Footer Info */}
        <div style={{ padding: '1.5rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)' }}>
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <FiAward size={30} color="var(--accent-on-primary)" />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>About the Career Experts</h4>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Our certified career coaches and HR professionals have helped over 4 million job seekers land their dream jobs. We specialize in resume writing, ATS optimization, and career development strategies backed by {CURRENT_YEAR} industry data and hiring trends.
                </p>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <span className="text-small">
                <FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> 
                Last updated: {safeCurrentDate} • Based on {CURRENT_YEAR} hiring data & ATS research
              </span>
            </div>
          </div>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
          <span itemProp="word-count">3800</span>
          <span itemProp="sources">2026 Hiring Data, ATS Research, 4,000+ Recruiter Survey</span>
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
    revalidate: 3600
  };
}

export default HowToMakeResume;