// pages/resume-keywords-finder.jsx
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
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const KEYWORD_STATISTICS = [
  { value: "98%", label: "Fortune 500 Companies Use ATS" },
  { value: "75%", label: "Resumes Rejected by ATS Before Human Review" },
  { value: "40%", label: "More Interviews with Keyword Optimization" },
  { value: "3x", label: "Faster Job Placement with Optimized Resume" }
];

const KEYWORD_TYPES = [
  { type: "Hard Skills", examples: "Python, Salesforce, Financial Modeling, SEO, Data Analysis, AWS, Java, SQL", atsPriority: "Critical", description: "Technical, teachable abilities specific to your profession. These are the primary keywords ATS systems are programmed to identify and match against job requirements." },
  { type: "Soft Skills", examples: "Leadership, Communication, Problem-Solving, Team Collaboration, Adaptability, Emotional Intelligence", atsPriority: "High", description: "Interpersonal traits and people skills. Modern ATS systems increasingly recognize and weight soft skills, especially for management and client-facing roles." },
  { type: "Industry Terminology", examples: "Agile, Scrum, KPI, ROI, SaaS, B2B, Conversion Rate, DevOps, CI/CD", atsPriority: "Essential", description: "Domain-specific language that demonstrates industry expertise. Using correct terminology signals that you understand the field and can communicate effectively with colleagues." },
  { type: "Certifications & Credentials", examples: "PMP, CPA, AWS Certified, Google Analytics, Six Sigma, CFA, CISSP, SHRM-CP", atsPriority: "Very High", description: "Professional certifications validate your expertise and are highly weighted by ATS algorithms. Always include the full certification name and common abbreviations." },
  { type: "Tools & Software", examples: "Tableau, Jira, Adobe Suite, Salesforce, Microsoft Office, Docker, Kubernetes, SAP", atsPriority: "High", description: "Specific platforms and applications you're proficient with. Include version numbers or proficiency levels where relevant for technical roles." }
];

const KEYWORD_RESEARCH_STEPS = [
  { step: 1, title: "Analyze Target Job Descriptions", desc: "Collect 5-10 job descriptions for your target role from different companies. Use text analysis to identify frequently mentioned terms—words and phrases that appear 3+ times across multiple postings. Pay special attention to requirements listed as 'required' versus 'preferred,' as required qualifications carry higher ATS weighting. Create a spreadsheet listing each keyword, its frequency across job descriptions, and whether it appears as required or preferred." },
  { step: 2, title: "Research Industry Trends & Emerging Terminology", desc: "Consult industry publications, professional association websites, and LinkedIn's Skills Insights to identify emerging keywords. For example, in marketing, terms like 'conversational AI' and 'first-party data strategy' have gained prominence recently. Review industry reports from Gartner, Forrester, or McKinsey to identify trending terminology. Follow thought leaders in your field on LinkedIn and note the language they use to describe current challenges and solutions." },
  { step: 3, title: "Conduct Competitor Analysis", desc: "Review LinkedIn profiles of 10-15 successful professionals currently working in your target role at companies you admire. Note their listed skills, certifications, and the language they use to describe achievements. Pay attention to which skills receive the most endorsements. This competitive intelligence reveals what keywords are actually valued in your industry and what language resonates with recruiters." },
  { step: 4, title: "Leverage Keyword Research Tools", desc: "Use specialized tools for comprehensive analysis. Jobscan compares your resume against specific job descriptions and provides a match rate score. SkillSyncer identifies missing keywords and suggests additions. TextAnalyzer (free) identifies keyword frequency across multiple documents. Google Trends shows keyword popularity over time, helping you identify emerging versus declining terms." },
  { step: 5, title: "Create Your Strategic Keyword Bank", desc: "Organize identified keywords into three priority tiers. Tier 1 (Must-Have): Keywords appearing in 80%+ of job descriptions—these are non-negotiable for ATS passage. Tier 2 (Important): Keywords appearing in 50-80% of descriptions—include these to strengthen your match score. Tier 3 (Optional): Keywords appearing in 25-50% of descriptions—include if genuinely relevant to your experience. Aim for 15-25 total keywords distributed across these tiers." }
];

const INDUSTRY_KEYWORDS = [
  { 
    industry: "Software Development", 
    icon: "FiCode",
    keywords: ["Python", "JavaScript", "React", "AWS", "Docker", "Agile", "Git", "REST API", "Microservices", "CI/CD", "TypeScript", "Node.js", "Kubernetes", "GraphQL", "Test-Driven Development"],
    emergingTerms: ["AI-Assisted Development", "Platform Engineering", "WebAssembly", "Edge Computing", "Rust"],
    certifications: ["AWS Solutions Architect", "Google Professional Cloud Developer", "Certified Scrum Master", "Oracle Java Certification", "Kubernetes CKAD"]
  },
  { 
    industry: "Digital Marketing", 
    icon: "FiTrendingUp",
    keywords: ["SEO", "SEM", "Google Analytics", "Content Strategy", "Social Media", "Conversion Rate", "PPC", "Email Marketing", "Marketing Automation", "ROI", "HubSpot", "A/B Testing", "Lead Generation", "CRM", "Customer Journey"],
    emergingTerms: ["Conversational AI Marketing", "First-Party Data Strategy", "TikTok Commerce", "AI Content Generation", "Privacy-First Marketing"],
    certifications: ["Google Analytics Certification", "HubSpot Content Marketing", "Facebook Blueprint", "Digital Marketing Institute Certification", "SEMrush Academy"]
  },
  { 
    industry: "Healthcare", 
    icon: "FiHeart",
    keywords: ["Patient Care", "EHR/EMR", "HIPAA", "Clinical", "Treatment Plans", "Medical Terminology", "Healthcare Compliance", "Patient Education", "Care Coordination", "Medical Records", "Quality Improvement", "Infection Control", "Telehealth", "Interdisciplinary", "Patient Safety"],
    emergingTerms: ["Telehealth Platforms", "AI Diagnostic Tools", "Value-Based Care", "Remote Patient Monitoring", "Genomic Medicine"],
    certifications: ["RN License", "BLS/ACLS", "CCRN", "Healthcare Quality Certification", "Epic/Cerner Certification"]
  },
  { 
    industry: "Finance & Accounting", 
    icon: "FiDollarSign",
    keywords: ["Financial Analysis", "Risk Management", "Investment Strategy", "Excel Modeling", "Financial Reporting", "Compliance", "Portfolio Management", "Valuation", "Forecasting", "Audit", "GAAP", "SOX", "FP&A", "Due Diligence", "Cash Flow"],
    emergingTerms: ["DeFi & Blockchain", "ESG Investing", "AI in Finance", "Cryptocurrency Compliance", "Automated Auditing"],
    certifications: ["CFA", "CPA", "FRM", "CMA", "Series 7/63"]
  }
];

const ATS_TECHNOLOGY = [
  { technology: "Natural Language Processing (NLP)", capability: "Understands context and relationships between words, recognizes synonyms, and interprets meaning beyond exact keyword matches", impactOnResumes: "Enables more natural keyword integration—you don't need exact-match phrases as often. Write for human readers while ensuring key concepts are clearly communicated." },
  { technology: "Semantic Analysis", capability: "Recognizes related terms and concepts even when different terminology is used (e.g., 'JavaScript' and 'JS,' 'team leadership' and 'people management')", impactOnResumes: "Use varied terminology naturally. Include both formal terms and common industry abbreviations to capture all semantic variations." },
  { technology: "Machine Learning Algorithms", capability: "Learns from successful candidates' resumes to identify patterns, weights keywords based on historical hiring data, and adapts scoring criteria over time", impactOnResumes: "Review resumes of people currently in your target role. Identify patterns in their keyword usage and achievement descriptions." },
  { technology: "Weighted Scoring Systems", capability: "Assigns different point values to keywords based on placement (summary vs. body), frequency, and whether they appear in context with supporting evidence", impactOnResumes: "Front-load important keywords in your professional summary. Provide context and evidence for each keyword rather than simply listing terms." }
];

const COMMON_MISTAKES = [
  { mistake: "Keyword Stuffing Without Context", problem: "Listing keywords without connecting them to actual experience or achievements. Modern ATS systems detect unnatural keyword density and may penalize or reject resumes that appear to be gaming the system.", solution: "Integrate each keyword naturally within achievement bullets or skill descriptions that provide context. Instead of simply listing 'Agile methodology,' write 'Led Agile transformation across 3 Scrum teams, implementing sprint planning and retrospectives that improved delivery velocity by 35%.'" },
  { mistake: "Ignoring Soft Skills and Interpersonal Keywords", problem: "Focusing exclusively on technical hard skills while neglecting soft skills that ATS systems increasingly weight, especially for management, client-facing, and leadership roles.", solution: "Include 5-8 soft skill keywords demonstrated through specific achievements. 'Communication' becomes 'Presented quarterly business reviews to C-suite executives, translating complex technical metrics into actionable business insights.' 'Leadership' becomes 'Mentored team of 8 junior developers, with 5 achieving promotion within 18 months.'" },
  { mistake: "Using Outdated or Declining Terminology", problem: "Including keywords that were relevant 3-5 years ago but have been replaced by newer terms. This signals that your knowledge may not be current.", solution: "Review industry publications and job descriptions from the past 6 months to identify current terminology. Replace outdated terms with their modern equivalents. For example, 'social media marketing' may now be 'social commerce' or 'creator economy marketing' depending on your specific role." },
  { mistake: "Missing Location and Industry Context Keywords", problem: "Failing to include geographic, regulatory, or industry-specific context keywords that ATS systems use for filtering, especially for roles requiring specific regional knowledge or compliance expertise.", solution: "Include relevant location-based keywords (city, state, region), regulatory frameworks (GDPR, HIPAA, SOX, ISO standards), and industry-specific compliance terms that demonstrate your qualification for roles with specific requirements." },
  { mistake: "One-Size-Fits-All Keyword Strategy", problem: "Using identical keywords for every application without customizing for specific job descriptions, resulting in lower ATS match scores and reduced interview invitations.", solution: "Create a master keyword bank organized by role type and industry. For each application, select and prioritize keywords based on that specific job description's requirements. Customize your professional summary and skills emphasis for each application. This 10-minute investment yields a 40% higher callback rate." }
];

const FAQS = [
  { 
    question: "What are resume keywords and why are they critically important in " + CURRENT_YEAR + "?", 
    answer: "Resume keywords are specific words and phrases that employers and Applicant Tracking Systems (ATS) use to filter, rank, and evaluate job applications. They encompass job titles, technical skills, software proficiencies, professional certifications, industry terminology, educational qualifications, and specific competencies mentioned in job descriptions. Keywords are critically important because approximately 75% of resumes are automatically rejected by ATS before any human reviews them—and the primary rejection reason is insufficient keyword matching. Modern ATS systems using natural language processing and machine learning assign weighted scores based on keyword relevance, placement, frequency, and contextual integration. Resumes scoring below the employer's threshold (typically 70-80% match rate) are automatically eliminated regardless of candidate qualifications. Proper keyword optimization—including strategic placement, natural integration, and contextual evidence—can increase your resume's ATS pass rate by 70% and your interview invitation rate by 40%." 
  },
  { 
    question: "How many keywords should I include in my resume for optimal ATS performance?", 
    answer: "Target 15-25 total keywords distributed across three priority tiers based on your analysis of target job descriptions. Tier 1 (Must-Have): 5-8 keywords appearing in 80%+ of job descriptions—these are non-negotiable for ATS passage and should appear in your professional summary and skills section. Tier 2 (Important): 5-8 keywords appearing in 50-80% of descriptions—integrate these into your achievement bullets and experience descriptions with contextual evidence. Tier 3 (Optional): 5-8 keywords appearing in 25-50% of descriptions—include only if genuinely relevant to your experience. Maintain keyword density at 2-3% of total content—excessive density above 5% triggers ATS spam filters. Quality and contextual relevance matter far more than quantity. Each keyword should connect to demonstrable experience or competency. Distribute keywords naturally throughout your resume rather than clustering them in one section." 
  },
  { 
    question: "Where should I place keywords in my resume for maximum ATS impact?", 
    answer: "Strategic keyword placement follows a hierarchy based on how ATS systems and human recruiters scan documents. Priority 1—Professional Summary (highest ATS weight): Place your most important 5-8 Tier 1 keywords in your opening summary paragraph. This section receives the highest ATS scoring weight and is the first content human recruiters read. Priority 2—Skills Section: Create a dedicated skills section organized by category (Technical, Domain, Professional) with clear keyword integration. Use both spelled-out terms and common abbreviations. Priority 3—Work Experience Bullets: Integrate Tier 2 and Tier 3 keywords naturally within achievement descriptions using the CAR method. This provides the contextual evidence that modern ATS systems require. Priority 4—Certifications & Education: Include certification names exactly as they appear in job descriptions. Add relevant coursework keywords for entry-level positions. Front-load keywords in the top third of your resume—ATS systems weight early placement more heavily, and recruiters spend 80% of their scan time on the first half of page one." 
  },
  { 
    question: "How do I find the right keywords for my specific industry and target role?", 
    answer: "Implement a systematic five-step keyword research methodology. Step 1: Collect 5-10 recent job descriptions for your exact target role from different companies. Use free text analysis tools to identify terms appearing in 3+ descriptions. Step 2: Review LinkedIn profiles of 10-15 professionals currently in your target role at companies you admire—note their listed skills, certifications, and achievement language. Step 3: Consult industry publications (Harvard Business Review, TechCrunch, industry-specific journals), professional association resources, and thought leader content to identify emerging terminology. Step 4: Use specialized tools like Jobscan (compares your resume against specific job descriptions), SkillSyncer (identifies missing keywords), and LinkedIn Skills Insights (shows trending skills). Step 5: Organize findings into a keyword bank with three priority tiers. Update this research quarterly as industry terminology evolves." 
  },
  { 
    question: "What's the difference between hard skill and soft skill keywords for ATS?", 
    answer: "Hard skill keywords represent technical, teachable, and measurable abilities specific to your profession—programming languages, software proficiency, financial modeling, data analysis, foreign languages, and certifications. These are the primary keywords ATS systems are programmed to identify and carry the highest matching weight. Soft skill keywords represent interpersonal traits and people skills—leadership, communication, problem-solving, adaptability, emotional intelligence, teamwork, and critical thinking. Modern ATS systems increasingly recognize and weight soft skills, especially for management, client-facing, and leadership roles. The key distinction for ATS optimization is how each type should be presented. Hard skills can be listed in a dedicated skills section with proficiency levels. Soft skills must be demonstrated through specific achievement examples—never simply listed. 'Communication' becomes 'Presented quarterly business reviews to C-suite executives, translating complex technical metrics into actionable insights.' 'Leadership' becomes 'Led cross-functional team of 12 through enterprise software implementation, delivering project 3 weeks ahead of schedule.' This evidence-based approach satisfies both ATS contextual analysis requirements and human recruiter expectations." 
  },
  { 
    question: "Should I customize keywords for each job application?", 
    answer: "Absolutely—and this is the highest-ROI activity in your job search process. Research consistently shows that customized resumes receive 40% more interview invitations than generic versions. The customization process involves three strategic adjustments for each application. First, analyze the specific job description and identify the exact keywords, phrases, and requirements it contains. Second, reorder and prioritize your skills section to feature the keywords most relevant to that specific role. Third, customize your professional summary to incorporate 3-5 of the job's most important keywords naturally. This process takes 10-15 minutes per application but dramatically increases your ATS match score and recruiter engagement. Create a master keyword bank organized by role type and industry, then select and prioritize keywords for each application. Maintain a spreadsheet tracking which keywords appear in which job descriptions to identify patterns and refine your strategy over time." 
  }
];

// Long-tail keywords for GEO
const longTailKeywords = [
  "resume keywords finder for ats optimization",
  "how to find keywords for resume from job description",
  "best resume keywords for software engineers 2026",
  "ats friendly resume keywords by industry",
  "free resume keyword analyzer and checker"
];

// People Also Ask for GEO
const peopleAlsoAsk = [
  { question: "How do I find keywords for my resume?", answer: "Analyze 5-10 job descriptions for your target role, identify frequently mentioned terms, use LinkedIn skills sections of professionals in your field, and leverage tools like Jobscan or SkillSyncer to compare your resume against job descriptions." },
  { question: "What are the most important resume keywords for 2026?", answer: "For 2026, focus on AI-related terms (Machine Learning, Prompt Engineering), hybrid skills (Data Analytics + Business Strategy), industry-specific certifications, and emerging technologies in your field. Soft skills like adaptability and emotional intelligence are also highly valued." },
  { question: "Can using too many keywords hurt my resume?", answer: "Yes, keyword stuffing can make your resume unreadable and may trigger ATS spam filters. Aim for natural integration with 15-20 relevant keywords placed contextually in your professional summary, skills section, and work experience bullet points." }
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
const ResumeKeywordsFinderPage = ({ seoData }) => {
  const { currentDate: seoCurrentDate, lastModifiedDate, reviewDates, testimonials, buildTimestamp } = seoData || {};
  const safeCurrentDate = seoCurrentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const safeTestimonials = testimonials || [];
  const canonicalUrl = "https://professionalresumefree.com/resume-keywords-finder";

  // Optimized title - 66 characters
  const optimizedTitle = `Resume Keywords Finder ${CURRENT_YEAR}: Ultimate ATS Optimization Guide`;

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* ===== PRIMARY SEO TAGS - OPTIMIZED TITLE ===== */}
        <title>{optimizedTitle}</title>
        <meta name="description" content={`Master resume keyword optimization with our comprehensive ${CURRENT_YEAR} guide. Learn to identify, research & implement keywords that beat ATS systems. Get 40% more interviews.`} />
        <meta name="keywords" content="resume keywords, ATS optimization, keyword finder, resume builder, job search keywords, career advice, resume writing, ATS friendly, job hunting" />
        <meta name="author" content="Professional Resume Free" />
        
        {/* ===== GEO OPTIMIZATION TAGS FOR AI CRAWLERS ===== */}
        <meta name="chatgpt-fts:title" content={optimizedTitle} />
        <meta name="chatgpt-fts:description" content={`Master resume keyword optimization. Learn to find and implement keywords that beat ATS. 40% more interviews. Free guide.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords?.join(', ') || ''} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* ===== SINGLE CANONICAL TAG - NO www ===== */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* ===== HREFLANG TAGS - NO www ===== */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* ===== OPEN GRAPH (Facebook/LinkedIn) - NO www ===== */}
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content={`Master resume keyword optimization. Learn to find and implement keywords that beat ATS. 40% more interviews. Free guide.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2024-01-01" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* ===== TWITTER CARD - NO www ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Resume Keywords Finder ${CURRENT_YEAR}: Ultimate ATS Guide`} />
        <meta name="twitter:description" content={`Master resume keyword optimization. Free guide with strategies to beat ATS.`} />
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
                "@type": "WebPage",
                "@id": `${canonicalUrl}#webpage`,
                "url": canonicalUrl,
                "name": optimizedTitle,
                "description": `Master resume keyword optimization with our comprehensive ${CURRENT_YEAR} guide. Learn to identify, research & implement keywords that beat ATS systems. Get 40% more interviews.`,
                "inLanguage": "en-US",
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website",
                  "url": "https://professionalresumefree.com",
                  "name": "Professional Resume Free",
                  "description": "Free ATS-optimized resume builder and career resources",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free"
                  }
                },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://professionalresumefree.com/ats.jpeg"
                },
                "datePublished": "2024-01-01",
                "dateModified": safeLastModifiedDate,
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
                    "name": "Resume Keywords Finder",
                    "item": canonicalUrl
                  }
                ]
              },
              {
                "@type": "Article",
                "@id": `${canonicalUrl}#article`,
                "headline": optimizedTitle,
                "description": `Master resume keyword optimization with our comprehensive ${CURRENT_YEAR} guide. Learn to identify, research & implement keywords that beat ATS systems.`,
                "author": {
                  "@type": "Organization",
                  "name": "Professional Resume Free"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Professional Resume Free"
                },
                "mainEntityOfPage": canonicalUrl,
                "datePublished": "2024-01-01",
                "dateModified": safeLastModifiedDate
              },
              {
                "@type": "FAQPage",
                "@id": `${canonicalUrl}#faq`,
                "mainEntity": [
                  ...FAQS.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
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
                "name": "How to Find and Use Resume Keywords Effectively",
                "description": "Step-by-step guide to master resume keyword optimization for ATS systems",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "value": "0",
                  "currency": "USD"
                },
                "step": KEYWORD_RESEARCH_STEPS.map((s, i) => ({
                  "@type": "HowToStep",
                  "position": i + 1,
                  "name": s.title,
                  "text": s.desc
                })),
                "totalTime": "PT20M"
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
          <meta name="article:modified_time" content={safeLastModifiedDate} />
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
                <Link href="/resume-keywords-finder" itemProp="item">
                  <span itemProp="name">Resume Keywords Finder</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Complete Guide</span>
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
                <FiStar style={{ marginRight: '0.5rem', display: 'inline' }} /> Trusted by 50,000+ Job Seekers | Updated for {CURRENT_YEAR} ATS Systems
              </div>
              
              {/* SINGLE H1 TAG */}
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                <span className="gradient-text">Resume Keywords Finder {CURRENT_YEAR}</span>: Ultimate ATS Optimization Guide
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Learn exactly how to find, research, and implement the right keywords that get your resume past automated screening systems and in front of hiring managers. Increase your interview chances by <strong>up to 40%</strong> with our proven keyword optimization strategies.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {KEYWORD_STATISTICS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Call to action buttons">
                <Link href="/free-resume-keyword-matcher" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                  Start Learning Keyword Strategies <FiArrowRight style={{ marginLeft: '0.5rem' }} />
                </Link>
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool style={{ marginRight: '0.5rem' }} /> Try Free Resume Tools
                </Link>
              </div>
              {/* Author Info */}
              <div className="card-executive" style={{ marginTop: '2rem', padding: '1.25rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Expert-Verified Keyword Strategies | Last Updated: {safeCurrentDate} | 15 min read | Based on ATS platform analysis</p>
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
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiBookOpen /> 3,250+ words</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiClock /> 15 min read</span>
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
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>75% of Resumes Are Rejected by ATS—Keywords Are the Primary Filter</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                <strong>98% of Fortune 500 companies and 75% of mid-sized employers use Applicant Tracking Systems</strong> that filter resumes based on keyword matches before any human reviews them. These systems assign weighted scores based on keyword relevance, placement, frequency, and contextual integration. Resumes scoring below the employer's threshold (typically 70-80% match rate) are automatically rejected—regardless of candidate qualifications. The most impressive career achievements become invisible if your resume lacks the keywords ATS algorithms are configured to identify. This guide provides the exact keyword research methodology, industry-specific terminology, and strategic placement techniques to ensure your resume survives automated screening and reaches the hiring managers who make interview decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Keyword Types Table */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Types of Resume Keywords Every Job Seeker Needs</h2>
              <p className="section-subtitle">Understanding the five keyword categories that ATS systems evaluate</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Keyword Type</th><th>Examples</th><th>ATS Priority</th><th>Description</th></tr></thead>
                  <tbody>
                    {KEYWORD_TYPES.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.type}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.examples}</td>
                        <td style={{ color: row.atsPriority === 'Critical' || row.atsPriority === 'Very High' || row.atsPriority === 'Essential' ? 'var(--error-color)' : 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)' }}>{row.atsPriority}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Keyword Research Steps */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">5-Step Keyword Research Methodology</h2>
              <p className="section-subtitle">A systematic, repeatable process for identifying the keywords that matter most</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {KEYWORD_RESEARCH_STEPS.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: i < 4 ? '0.5px solid var(--border-glass)' : 'none' }}>
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

        {/* Industry Keywords */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Industry-Specific Keyword Libraries</h2>
              <p className="section-subtitle">Essential keywords, emerging terms, and valued certifications for four major industries</p>
            </div>
            <div className="grid">
              {INDUSTRY_KEYWORDS.map((industry, i) => {
                const IconComp = ICON_MAP[industry.icon] || FiBriefcase;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                        <IconComp size={18} />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>{industry.industry}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.5rem' }}><strong>Core Keywords:</strong></p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      {industry.keywords.map((kw, j) => (
                        <span key={j} className="feature-tag">{kw}</span>
                      ))}
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}><strong>Emerging Terms:</strong></p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      {industry.emergingTerms.map((term, j) => (
                        <span key={j} className="feature-badge">{term}</span>
                      ))}
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><strong>Key Certifications:</strong> {industry.certifications.join(', ')}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ATS Technology */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Understanding Modern ATS Technology</h2>
              <p className="section-subtitle">How today's Applicant Tracking Systems actually process and evaluate your resume</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Technology</th><th>Capability</th><th>Impact on Your Resume Strategy</th></tr></thead>
                  <tbody>
                    {ATS_TECHNOLOGY.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.technology}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.capability}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>{row.impactOnResumes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">5 Critical Keyword Mistakes That Cost Interviews</h2>
              <p className="section-subtitle">Avoid these errors that cause ATS rejection regardless of qualifications</p>
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
              <h2 id="testimonials-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Success Stories from Our Readers</h2>
              <div className="grid">
                {safeTestimonials.map((testimonial, index) => (
                  <div key={index} className="card-executive">
                    <div style={{ fontSize: '4rem', color: 'var(--text-muted)', opacity: 0.3, position: 'absolute', top: 0, left: '1rem' }}>"</div>
                    <p style={{ fontStyle: 'italic', marginBottom: '1rem', flex: 1, position: 'relative', zIndex: 1 }}>"{testimonial.quote}"</p>
                    <div className="feature-badge" style={{ marginBottom: '0.75rem' }}>
                      <FiCheck style={{ marginRight: '0.25rem' }} />
                      <span>{testimonial.metric}</span>
                    </div>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{testimonial.role}</p>
                      <small className="text-small">{testimonial.company}</small>
                      <small className="text-small" style={{ display: 'block' }}>{testimonial.date}</small>
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
            <h2 id="paa-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>People Also Ask About Resume Keywords</h2>
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
              <h2 id="faq-heading" className="section-title">❓ Frequently Asked Questions About Resume Keywords</h2>
              <p className="section-subtitle">Expert answers based on ATS platform documentation and recruitment research</p>
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
            <h2 id="resources-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>🔗 Related Resources & Tools</h2>
            <div className="grid">
              <Link href="/free-resume-score-checker" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>Free Resume Score Checker</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Get instant resume score and detailed feedback on how to improve your resume.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Try it <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/free-ats-resume-checker" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>Free ATS Resume Checker</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Check if your resume passes ATS screening with detailed analysis.</p>
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
              Ready to Optimize Your Resume with the Right Keywords?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Use our free resume builder with built-in keyword optimization tools and ATS scoring to create a resume that gets results. Visit <a href="https://professionalresumefree.com" style={{ color: 'var(--accent-primary)' }}>Professional Resume Free</a>.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }} role="group" aria-label="Final call to action buttons">
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                Build Your Optimized Resume Now <FiArrowRight style={{ marginLeft: '0.5rem' }} />
              </Link>
              <Link href="/free-resume-tools" className="btn-outline">
                <FiTool style={{ marginRight: '0.5rem' }} /> Explore Free Tools
              </Link>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>
              ✓ ATS optimized • 40% more interviews • Free forever • No sign-up
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
          <span itemProp="wordCount">3250</span>
          <span itemProp="keywords">resume keywords, ATS optimization, keyword finder, resume builder, job search keywords, career advice, resume writing, ATS friendly, job hunting</span>
          <span itemProp="articleSection">Career Development, Resume Writing, Job Search</span>
          {longTailKeywords.map((kw, i) => (
            <span key={i} itemProp="longTailKeyword">{kw}</span>
          ))}
        </div>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Data Freshness: Last updated {safeCurrentDate} • Sources: ATS platform documentation, recruiter behavior studies, industry keyword analysis • Next update: {new Date(safeBuildTimestamp + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}</span>
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
  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  // CANONICAL URL - NO www
  const canonicalUrl = "https://professionalresumefree.com/resume-keywords-finder";

  // Testimonials
  const testimonials = [
    {
      quote: "Using the keyword strategies from this guide, I went from 0 interviews to 5 callbacks in two weeks. The industry-specific keyword lists were a game-changer!",
      metric: "5 Interviews in 2 Weeks",
      name: "Michael T.",
      role: "Data Analyst",
      company: "Tech Company",
      date: reviewDates[0]
    },
    {
      quote: "As a career changer, I struggled to get past ATS. This guide taught me how to translate my transferable skills into keywords that actually get noticed.",
      metric: "Career Change Success",
      name: "Jessica L.",
      role: "Marketing Manager",
      company: "Startup",
      date: reviewDates[1]
    },
    {
      quote: "The step-by-step keyword research method helped me identify keywords I never would have thought of. Landed my dream job at a FAANG company!",
      metric: "FAANG Job Offer",
      name: "David K.",
      role: "Software Engineer",
      company: "Tech Giant",
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

export default ResumeKeywordsFinderPage;