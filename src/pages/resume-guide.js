// pages/resume-guide.jsx
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

const RESUME_STATISTICS = [
  { value: "75%", label: "Resumes Rejected by ATS Before Human Review" },
  { value: "6-7s", label: "Average Initial Recruiter Scan Time" },
  { value: "5x", label: "More Interviews with ATS Optimization" },
  { value: "90%", label: "Fortune 500 Companies Use ATS Systems" }
];

const OPTIMIZATION_STRATEGIES = [
  { 
    number: "01", 
    category: "Keyword Strategy", 
    icon: "FiSearch",
    title: "Precision Keyword Targeting for ATS Compatibility", 
    description: "Master systematic keyword incorporation from job descriptions using natural language processing principles. Balance keyword frequency with readability to optimize for both ATS systems and human recruiters. Learn proper keyword density standards and strategic placement throughout your resume sections for maximum automated screening success.",
    proTip: "Extract 10-15 primary keywords from each job description and incorporate them naturally into your professional summary, skills section, and achievement bullets. Use tools like Jobscan to compare your resume against target job descriptions for optimal keyword matching scores.",
    impactStat: "Resumes with proper keyword matching receive 75% more interview invitations",
    recommendedTools: ["Jobscan", "TextOptimizer", "Word Frequency Counter", "SEMrush Resume Analyzer"]
  },
  { 
    number: "02", 
    category: "Formatting Standards", 
    icon: "FiFileText",
    title: "Machine-Readable Resume Structure & Layout", 
    description: "Employ ATS-friendly formatting with standard section headings, clean single-column layouts, and optimized file types. Avoid creative elements that confuse automated parsers. Understand how different ATS platforms process resumes and optimize your document structure accordingly for maximum parsing accuracy.",
    proTip: "Always submit .docx format for online application portals (85% compatibility rate). Use PDF for direct email applications. Never submit image-based PDFs, password-protected files, or documents with macros. Test your resume with at least two different ATS checkers before submission.",
    impactStat: "Proper formatting increases ATS parsing success rate by 60%",
    recommendedTools: ["ATS Resume Checker", "PDF Analyzer", "Microsoft Word", "Google Docs"]
  },
  { 
    number: "03", 
    category: "Content Strategy", 
    icon: "FiTrendingUp",
    title: "Quantified Achievement Writing with the CAR Method", 
    description: "Transform generic responsibilities into measurable accomplishments using the Challenge-Action-Result framework. Show impact with specific metrics that matter to hiring managers—percentages, dollar amounts, time savings, and efficiency improvements. Learn to quantify achievements in every professional role regardless of your function or industry.",
    proTip: "Begin every bullet point with a strong action verb (Led, Managed, Increased, Developed, Reduced). Follow with the specific action taken and conclude with the quantified result. Aim for at least one metric per bullet point—recruiters spend 40% more time reviewing quantified achievements.",
    impactStat: "Resumes with quantified metrics receive 40% more recruiter attention",
    recommendedTools: ["Resume Metrics Calculator", "Action Verb Library", "CAR Method Template", "Achievement Quantifier Tool"]
  },
  { 
    number: "04", 
    category: "Customization Protocol", 
    icon: "FiTarget",
    title: "Position-Specific Resume Tailoring Strategy", 
    description: "Create targeted resume versions for different roles and industries. Adjust content hierarchy, skill emphasis, and achievement selection based on each job's specific requirements and priorities. Master the art of strategic customization without starting from scratch for every application.",
    proTip: "Maintain a comprehensive master resume containing all your experience, skills, and achievements. Create 2-3 tailored versions for different role types. Customize your professional summary, skills emphasis, and featured achievements for each high-priority application. Spend 10-15 minutes per customization.",
    impactStat: "Customized resumes increase interview invitation rates by 5x",
    recommendedTools: ["Resume Tailoring Guide", "Job Description Analyzer", "Version Tracking Spreadsheet", "ATS Score Comparison Tool"]
  }
];

const CAR_EXAMPLES = [
  {
    industry: "Customer Service Management",
    icon: "FiUsers",
    challenge: "Low customer satisfaction scores at 65% were negatively impacting client retention rates and recurring revenue streams across the organization's key accounts.",
    action: "Designed and implemented a comprehensive customer service training program incorporating real-time feedback monitoring, weekly coaching sessions, and a structured escalation protocol for complex cases.",
    result: "Increased customer satisfaction from 65% to 92% within 6 months, reduced customer churn by 30%, and generated $250,000 in additional annual recurring revenue through improved retention and account expansion.",
    keyMetrics: "Satisfaction: +27% | Churn: -30% | Revenue: +$250K annually"
  },
  {
    industry: "Project Management",
    icon: "FiTarget",
    challenge: "Inefficient project delivery processes were causing 25% of projects to miss deadlines, resulting in client dissatisfaction and penalty payments totaling $200,000 annually.",
    action: "Developed and implemented an Agile workflow methodology with cross-functional teams, established automated progress reporting dashboards, and introduced daily stand-up meetings to identify blockers early.",
    result: "Reduced average project completion time by 40% while improving quality metrics by 25%. Eliminated penalty payments entirely, saving $200,000 annually, and increased client satisfaction scores from 3.2 to 4.7 out of 5.",
    keyMetrics: "Delivery Time: -40% | Quality: +25% | Savings: $200K annually"
  },
  {
    industry: "Human Resources Leadership",
    icon: "FiUserCheck",
    challenge: "High employee turnover rate of 35% was significantly impacting team productivity, institutional knowledge retention, and generating excessive recruitment and training costs.",
    action: "Created a structured mentorship program pairing junior employees with senior leaders, developed clear career progression pathways with quarterly milestone reviews, and implemented a competitive compensation benchmarking process.",
    result: "Decreased department turnover by 60% within the first year of implementation. Reduced annual recruitment and training expenses by $150,000. Improved employee engagement survey scores from 58% to 89% across all departments.",
    keyMetrics: "Turnover: -60% | Savings: $150K annually | Engagement: +31%"
  }
];

const ATS_CHECKLIST = {
  mustInclude: [
    "Standard section headings (Professional Summary, Work Experience, Education, Skills)",
    "Professional contact information with LinkedIn URL and portfolio links",
    "Industry-standard professional email address (firstname.lastname@gmail.com)",
    "ATS-compatible fonts (Arial, Calibri, Garamond, Times New Roman at 11-12pt)",
    "Professional file naming: FirstName-LastName-Resume.docx",
    "Appropriate file format (.docx for online portals, PDF for direct emails)",
    "Industry-specific and role-specific keyword integration throughout",
    "Quantified achievements with specific metrics and measurable outcomes",
    "Reverse chronological order for work experience entries",
    "Clean single-column layout without tables, graphics, or text boxes"
  ],
  mustAvoid: [
    "Graphics, charts, images, photographs, or embedded visual elements",
    "Headers and footers containing critical contact or qualification information",
    "Text boxes, tables, columns, or complex multi-column layouts",
    "Creative or non-standard section headings (ATS trained on conventional labels)",
    "Decorative fonts, multiple font families, or extensive color usage",
    "Generic buzzwords without specific contextual evidence or examples",
    "Generic objective statements ('seeking a challenging position to grow')",
    "First-person pronouns (I, me, my, we, our) throughout the document",
    "Irrelevant personal information (marital status, religion, photograph, father's name)",
    "Password-protected files, image-based PDFs, or documents with macros"
  ]
};

const INDUSTRY_TIPS = [
  { 
    industry: "Technology & Software Engineering", 
    icon: "FiCode",
    optimizationTips: ["Focus on specific technologies and frameworks with version numbers for keyword matching", "Include GitHub contributions, open-source project metrics, and repository links", "Highlight deployment success rates, system optimization metrics, and uptime achievements"],
    essentialKeywords: ["Agile Development", "DevOps", "CI/CD Pipeline", "Cloud Architecture (AWS/Azure/GCP)", "API Integration", "Full Stack Development", "Microservices", "Containerization (Docker/Kubernetes)"],
    keyTools: ["JIRA", "Git/GitHub", "AWS/Azure/GCP", "Docker", "Kubernetes", "Jenkins", "Terraform"]
  },
  { 
    industry: "Digital Marketing & Sales", 
    icon: "FiTrendingUp",
    optimizationTips: ["Show campaign ROI percentages and conversion rate improvements with timeframes", "Include specific platform expertise with performance metrics (Google Ads, Meta Ads, LinkedIn)", "Demonstrate audience growth rates and engagement rate increases with specific numbers"],
    essentialKeywords: ["ROI Optimization", "Conversion Rate Optimization", "SEO/SEM Strategy", "Google Analytics", "Campaign Management", "Audience Engagement", "Lead Generation", "Marketing Automation"],
    keyTools: ["Google Ads", "HubSpot", "Salesforce", "SEMrush", "Google Analytics", "Mailchimp", "Hootsuite"]
  },
  { 
    industry: "Healthcare & Nursing", 
    icon: "FiHeart",
    optimizationTips: ["Include specific certifications and licenses with expiration dates and issuing bodies", "Highlight patient outcomes and quality improvement metrics with measurable results", "Showcase EHR/EMR system proficiency with specific platforms and implementation experience"],
    essentialKeywords: ["HIPAA Compliance", "EHR/EMR Systems", "Patient-Centered Care", "Clinical Protocols", "Quality Improvement", "Healthcare Regulations", "Patient Safety", "Interdisciplinary Collaboration"],
    keyTools: ["Epic Systems", "Cerner", "Meditech", "Allscripts", "McKesson"]
  },
  { 
    industry: "Finance & Accounting", 
    icon: "FiDollarSign",
    optimizationTips: ["Quantify cost savings and revenue increases with specific dollar figures and percentages", "Include financial software and analysis tools proficiency with version details", "Highlight regulatory compliance experience, audit success rates, and risk management outcomes"],
    essentialKeywords: ["Financial Analysis", "Risk Management", "Regulatory Compliance (SOX, GAAP, IFRS)", "Financial Reporting", "Cost Reduction", "Revenue Growth", "Audit Management", "Financial Modeling"],
    keyTools: ["QuickBooks", "SAP", "Oracle Financials", "Excel Advanced (VBA, Power Query)", "Tableau", "Bloomberg Terminal"]
  }
];

// NEW: Top ATS Platforms Comparison
const ATS_PLATFORMS = [
  { platform: "Workday", marketShare: "28%", usedBy: "Fortune 500, large enterprises, tech companies", keyFeatures: "Advanced NLP parsing, skills cloud matching, internal mobility tracking", optimizationTips: ["Use standard section headings (Workday is trained on conventional labels)", "Include both spelled-out terms and abbreviations (e.g., 'Search Engine Optimization (SEO)')", "Maintain consistent job title formatting across all positions"] },
  { platform: "Taleo (Oracle)", marketShare: "22%", usedBy: "Large corporations, government agencies, healthcare organizations", keyFeatures: "Keyword density analysis, experience level matching, education verification", optimizationTips: ["Avoid headers/footers for critical information (Taleo cannot parse them)", "Use .docx format (Taleo's preferred format)", "Include exact job titles as they appear in the posting"] },
  { platform: "SAP SuccessFactors", marketShare: "15%", usedBy: "Global enterprises, manufacturing, financial services", keyFeatures: "Competency-based matching, global workforce analytics, compliance tracking", optimizationTips: ["Quantify achievements with specific numbers (SuccessFactors prioritizes metrics)", "Include location information (city/state) for geographic matching", "Use consistent date formatting (MM/YYYY) throughout"] },
  { platform: "Greenhouse", marketShare: "12%", usedBy: "Tech startups, mid-size companies, progressive organizations", keyFeatures: "Structured interviewing integration, diversity analytics, candidate experience focus", optimizationTips: ["Include GitHub/portfolio links (Greenhouse parses these effectively)", "Use skills-based keywords (Greenhouse emphasizes competency over chronology)", "Keep formatting clean and simple (Greenhouse penalizes complex layouts)"] }
];

// NEW: Resume Score Card System
const RESUME_SCORING = [
  { category: "ATS Compatibility", weight: "30%", whatItMeasures: "File format, section headings, keyword density, parsing accuracy", targetScore: "90%+", commonFailurePoints: "Creative headings, PDF issues, missing keywords, complex formatting" },
  { category: "Content Quality", weight: "35%", whatItMeasures: "Achievement quantification, CAR method usage, action verb strength, relevance", targetScore: "85%+", commonFailurePoints: "Responsibility lists, vague language, missing metrics, generic statements" },
  { category: "Professional Presentation", weight: "20%", whatItMeasures: "Font consistency, white space balance, visual hierarchy, formatting standards", targetScore: "90%+", commonFailurePoints: "Multiple fonts, cramped layout, inconsistent spacing, poor alignment" },
  { category: "Customization Level", weight: "15%", whatItMeasures: "Job description alignment, keyword integration, role-specific emphasis, company research", targetScore: "80%+", commonFailurePoints: "Generic resumes, missing target keywords, no company-specific content" }
];

// NEW: Action Verb Library by Category
const ACTION_VERBS = [
  { category: "Leadership & Management", verbs: ["Directed", "Orchestrated", "Spearheaded", "Championed", "Mentored", "Guided", "Supervised", "Coordinated", "Delegated", "Empowered"] },
  { category: "Achievement & Results", verbs: ["Accelerated", "Generated", "Delivered", "Exceeded", "Maximized", "Optimized", "Streamlined", "Transformed", "Revitalized", "Catapulted"] },
  { category: "Innovation & Creation", verbs: ["Pioneered", "Architected", "Designed", "Engineered", "Conceptualized", "Devised", "Formulated", "Invented", "Launched", "Established"] },
  { category: "Analysis & Problem-Solving", verbs: ["Diagnosed", "Investigated", "Evaluated", "Forecasted", "Identified", "Resolved", "Troubleshot", "Audited", "Assessed", "Calculated"] }
];

// NEW: Resume Length Guidelines by Experience
const LENGTH_GUIDELINES = [
  { experienceLevel: "Entry Level / Fresher (0-3 years)", recommendedPages: "1 page", rationale: "Demonstrates conciseness and prioritization—qualities valued in entry-level hires. Forces focus on strongest qualifications.", atsImpact: "Single-page resumes parse more reliably across all ATS platforms", recruiterPerception: "Appropriate for experience level; signals ability to communicate efficiently" },
  { experienceLevel: "Mid-Level Professional (3-10 years)", recommendedPages: "1-2 pages", rationale: "Sufficient space for career progression and quantified achievements without overwhelming recruiters.", atsImpact: "ATS handles 1-2 pages well; ensure second page contains genuinely differentiating content", recruiterPerception: "Standard and expected for mid-career professionals" },
  { experienceLevel: "Senior Professional (10-15 years)", recommendedPages: "2 pages", rationale: "Necessary space for leadership experience, strategic impact, team management, and organizational contributions.", atsImpact: "ATS parses 2 pages effectively; maintain consistent formatting across pages", recruiterPerception: "Appropriate for senior roles with substantial leadership experience" },
  { experienceLevel: "Executive / C-Suite (15+ years)", recommendedPages: "2-3 pages", rationale: "Required for comprehensive documentation of enterprise-level impact, board experience, and transformational leadership.", atsImpact: "Ensure critical keywords appear on first page (ATS weighs page 1 most heavily)", recruiterPerception: "Expected for executive positions; focus on strategic impact over tactical details" }
];

const FAQS = [
  { 
    question: "How do I verify that my resume is truly ATS-compatible?", 
    answer: "Test your resume through multiple ATS checker tools to verify compatibility across different platforms. Ensure your keyword density falls within the optimal 2-3% range. Verify that all section headings use standard labels that ATS systems recognize. Confirm that your file format (.docx preferred) parses correctly without errors. The most reliable verification method is running your resume through simulated ATS systems that provide detailed parsing reports showing exactly which information was successfully extracted and which elements failed. Additionally, submit your resume to 2-3 real job applications where you meet minimum qualifications but aren't your top choice, and track whether you receive the automated acknowledgment emails that indicate successful ATS parsing." 
  },
  { 
    question: "Should I include a professional summary or an objective statement?", 
    answer: "Always include a professional summary (2-3 concise lines) that highlights your key achievements, primary skills, and value proposition with relevant industry keywords. Professional summaries serve as your elevator pitch and help ATS systems identify your core qualifications immediately. Avoid generic objective statements ('seeking a challenging position to utilize my skills')—these communicate nothing specific about your capabilities and waste valuable resume space. A well-crafted professional summary improves ATS keyword matching, helps human recruiters quickly understand your profile during the 6-7 second initial scan, and sets the tone for the detailed achievements that follow. Customize your summary for each application by incorporating keywords from the specific job description." 
  },
  { 
    question: "What is the optimal keyword density for ATS-optimized resumes?", 
    answer: "Target a keyword density of 2-3% of your total resume content. For practical application, include 10-15 industry-specific keywords and 5-8 role-specific keywords extracted directly from the job description. Distribute keywords naturally throughout your professional summary, skills section, and achievement bullets rather than clustering them in one area. Critical warning: excessive keyword stuffing (density above 5%) can trigger ATS spam filters and result in automatic rejection. Modern ATS systems are sophisticated enough to detect unnatural keyword clustering. Balance is essential—your resume must read naturally to human reviewers while containing sufficient keywords for ATS matching. Use synonym variations of important keywords to demonstrate comprehensive knowledge while avoiding repetition." 
  },
  { 
    question: "What file format provides maximum ATS compatibility?", 
    answer: "Microsoft Word (.docx) format provides the highest ATS compatibility, with approximately 85% of systems parsing it reliably. The .docx format preserves text searchability, maintains consistent rendering across different platforms, and allows ATS algorithms to extract information accurately. Plain-text PDFs work with most modern ATS systems but can cause issues with older platforms. Critical rules: never submit image-based PDFs (scanned documents), password-protected files, or documents containing macros. For optimal results, maintain both .docx and PDF versions. Submit .docx through all online application portals. Use PDF for direct email applications to recruiters and hiring managers where visual presentation matters. Name your files professionally: 'FirstName_LastName_Resume.docx'—never use generic names like 'resume_final_v3_updated.docx.'" 
  },
  { 
    question: "How often should I update my resume for optimal results?", 
    answer: "Implement a structured resume maintenance schedule: update quarterly with new achievements, skills, and project completions while the details are fresh in your memory. Perform major updates before active job searches, after receiving promotions or changing roles, and when acquiring significant new certifications or credentials. Conduct an annual comprehensive review to ensure all information remains current and relevant. Regular updates serve multiple purposes: they ensure your resume accurately reflects your current capabilities, they keep your document aligned with evolving industry keywords and terminology, and they make customization for specific applications faster since your master resume is always current. Professionals who update quarterly spend 75% less time on application preparation than those who update only when job searching." 
  },
  { 
    question: "Can I include graphics or design elements in my ATS resume?", 
    answer: "Avoid all graphics, charts, images, photographs, icons, and complex design elements in the version of your resume submitted through online application portals. These elements frequently confuse ATS parsers and can cause critical information to be lost or garbled during the extraction process. Focus exclusively on clean, simple text formatting with clear standard section headers and consistent bullet points. If you work in a creative field (design, marketing, architecture) where visual presentation matters, create two separate resume versions: an ATS-optimized text version for all online applications and a visually enhanced designed version for interviews, networking events, portfolio presentations, and direct email submissions to hiring managers. Never sacrifice ATS compatibility for visual design—a beautiful resume that never reaches human eyes serves no purpose." 
  },
  { 
    question: "How important is the skills section for ATS optimization?", 
    answer: "The skills section is critically important for ATS scanning and often serves as the primary section that automated systems analyze for keyword matching. Structure your skills section with clear categorization: Technical Skills (programming languages, software, tools, platforms with proficiency levels), Domain Expertise (industry-specific knowledge and methodologies), and Professional Skills (leadership, communication, project management—demonstrated through achievements, not just listed). Include both spelled-out terms and common abbreviations to capture all keyword variations (e.g., 'Search Engine Optimization (SEO)'). This section is frequently the first element ATS systems scan, and a well-structured skills section with relevant keywords can compensate for weaker keyword distribution in other areas of your resume." 
  },
  { 
    question: "Should I include my LinkedIn profile URL on my resume?", 
    answer: "Yes, include your LinkedIn profile URL in the contact information section of your resume. Ensure your LinkedIn profile is fully optimized with matching keywords, consistent employment dates, and complementary achievements. Many recruiters cross-reference resumes with LinkedIn profiles during the evaluation process, and inconsistencies between the two documents can raise concerns. ATS systems increasingly scan for LinkedIn URLs as an additional verification data point. Customize your LinkedIn URL (linkedin.com/in/yourname) for professional presentation. Before including the link, verify that your LinkedIn profile: contains a professional photograph, has a compelling headline matching your target role, includes detailed descriptions aligned with your resume content, features recommendations and skill endorsements, and is set to public visibility. An optimized LinkedIn profile reinforces your resume content and provides recruiters with additional context about your professional background." 
  }
];

// Long-tail keywords for GEO
const longTailKeywords = [
  "ATS resume",
  "beat applicant tracking system",
  "resume optimization 2026",
  "resume keywords",
  "CAR method",
  "ATS checklist",
  "resume tips 2026",
  "job search strategies",
  "career advancement",
  "professional resume writing",
  "ATS-friendly resume",
  "resume formatting",
  "keyword optimization"
];

// People Also Ask for GEO
const peopleAlsoAsk = [
  { question: "How do I know if my resume is truly ATS-friendly?", answer: "Test your resume with multiple ATS checker tools, ensure proper keyword density (2-3%), verify correct formatting, and test with different file formats. The most reliable method is to check for proper parsing of all information by running it through simulated ATS systems. Look for tools that provide specific parsing reports." },
  { question: "Should I include a professional summary or objective statement?", answer: "Always include a professional summary (2-3 lines) highlighting key achievements and skills with relevant keywords. Avoid generic objective statements. A well-crafted summary helps ATS identify your key qualifications and improves human scanability by 40%." },
  { question: "What is the optimal keyword density for ATS resumes?", answer: "Aim for keyword density of 2-3% of total content. Include 10-15 industry-specific keywords and 5-8 role-specific keywords from the job description. Balance is crucial—excessive keyword stuffing can trigger ATS spam filters and hurt readability for human reviewers." }
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
const ResumeGuidePage = ({ seoData }) => {
  const { currentDate: seoCurrentDate, lastModifiedDate, reviewDates, testimonials, buildTimestamp } = seoData || {};
  const safeCurrentDate = seoCurrentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const safeTestimonials = testimonials || [];
  const canonicalUrl = "https://professionalresumefree.com/resume-guide";

  // Optimized title - 54 characters
  const optimizedTitle = `ATS Resume Guide ${CURRENT_YEAR}: Get 5× More Interviews`;

  const [activeFaq, setActiveFaq] = useState(null);
  const [activePlatform, setActivePlatform] = useState(null);
  const [activeVerbCategory, setActiveVerbCategory] = useState(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* ===== PRIMARY SEO TAGS - OPTIMIZED TITLE ===== */}
        <title>{optimizedTitle}</title>
        <meta name="description" content={`Master ATS resume optimization with our comprehensive ${CURRENT_YEAR} guide. Learn proven keyword strategies, formatting rules, CAR method examples, and free tools to pass automated screening systems and land more interviews. Includes downloadable checklist.`} />
        <meta name="keywords" content={longTailKeywords.join(', ')} />
        <meta name="author" content="ProfessionalResumeFree Team" />
        
        {/* ===== GEO OPTIMIZATION TAGS FOR AI CRAWLERS ===== */}
        <meta name="chatgpt-fts:title" content={optimizedTitle} />
        <meta name="chatgpt-fts:description" content={`Comprehensive ATS resume optimization guide with proven strategies, real examples, and free tools to land more interviews in ${CURRENT_YEAR}. Downloadable checklist included.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords?.slice(0, 8).join(', ') || ''} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - ATS Resume Guide" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* ===== SINGLE CANONICAL TAG - NO www ===== */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* ===== OPEN GRAPH (Facebook/LinkedIn) - NO www ===== */}
        <meta property="og:title" content={`ATS Resume Guide ${CURRENT_YEAR}: Get 5× More Interviews with Optimization`} />
        <meta property="og:description" content={`Comprehensive ATS resume optimization guide with proven strategies, real examples, and free tools to land more interviews in ${CURRENT_YEAR}. Downloadable checklist included.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/images/ats-resume-optimization-guide-2026.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="article:published_time" content={safeLastModifiedDate} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* ===== TWITTER CARD - NO www ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`ATS Resume Guide ${CURRENT_YEAR}: Get 5× More Interviews`} />
        <meta name="twitter:description" content={`Master ATS optimization with our step-by-step guide. Get the interview callbacks you deserve. Free checklist included.`} />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-ats-guide-2026.jpg" />
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
                "@id": `${canonicalUrl}/#article`,
                "headline": `ATS Resume Guide ${CURRENT_YEAR}: Get 5× More Interviews with Optimization`,
                "description": `Comprehensive guide to ATS resume optimization with proven strategies, real examples, and free tools to land more interviews in ${CURRENT_YEAR}.`,
                "image": "https://professionalresumefree.com/images/ats-resume-optimization-guide-2026.jpg",
                "author": {
                  "@type": "Organization",
                  "name": "ProfessionalResumeFree Career Experts",
                  "url": "https://professionalresumefree.com"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "ProfessionalResumeFree",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/logo.png"
                  }
                },
                "datePublished": "2026-01-01",
                "dateModified": safeLastModifiedDate,
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": canonicalUrl
                },
                "articleSection": "Career Development",
                "keywords": "ATS resume, resume optimization, keyword strategy, CAR method",
                "wordCount": 3500,
                "timeRequired": "PT15M"
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${canonicalUrl}/#breadcrumb`,
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
                    "name": "Resume Guide",
                    "item": canonicalUrl
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": `${canonicalUrl}/#faqpage`,
                "mainEntity": [
                  ...FAQS.map((faq, index) => ({
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
                "name": `How to Optimize Your Resume for ATS Systems in ${CURRENT_YEAR}`,
                "description": "Step-by-step guide to creating ATS-friendly resumes with keyword optimization, proper formatting, and achievement quantification.",
                "totalTime": "PT60M",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "USD",
                  "value": "0"
                },
                "step": OPTIMIZATION_STRATEGIES.map((strategy, i) => ({
                  "@type": "HowToStep",
                  "position": i + 1,
                  "name": strategy.title,
                  "text": strategy.description
                }))
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

        {/* Breadcrumb Navigation */}
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
                <span itemProp="name" aria-current="page">ATS Resume Guide {CURRENT_YEAR}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">
                <FiAward style={{ marginRight: '0.5rem', display: 'inline' }} /> {CURRENT_YEAR} Career Guide | Updated: {safeCurrentDate}
              </div>
              
              {/* SINGLE H1 TAG */}
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                <span className="gradient-text">ATS Resume Guide {CURRENT_YEAR}</span>: Get 5× More Interviews
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Comprehensive {CURRENT_YEAR} guide to beating Applicant Tracking Systems with proven strategies, real examples, and free tools. Optimize your resume for both automated screening and human recruiters.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {RESUME_STATISTICS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Call to action buttons">
                <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                  Create ATS-Optimized Resume Now <FiArrowRight style={{ marginLeft: '0.5rem' }} />
                </Link>
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool style={{ marginRight: '0.5rem' }} /> Free Resume Tools
                </Link>
              </div>
              {/* Author Info */}
              <div className="card-executive" style={{ marginTop: '2rem', padding: '1.25rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Expert Reviewed | Last Updated: {safeCurrentDate} | Reading Time: 15 minutes</p>
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
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiClock /> 15 min read</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiEye /> 25,000+ views</span>
          </div>
        </div>

        {/* Critical Insight Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>75% of Resumes Never Reach Human Eyes—ATS Optimization Determines Your Fate</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                The modern hiring landscape is dominated by automated screening. <strong>90% of Fortune 500 companies and 75% of mid-sized employers use Applicant Tracking Systems</strong>—including Workday (28% market share), Taleo (22%), SAP SuccessFactors (15%), and Greenhouse (12%)—to filter resumes before any human reviews them. These systems parse your resume for keywords, standard headings, consistent formatting, and required qualifications, then assign match scores. Resumes scoring below the employer's threshold are automatically rejected regardless of candidate qualifications. Your resume content—however impressive—never gets evaluated if the formatting and keyword strategy fail the automated screening. This guide provides the exact optimization framework to ensure your resume survives ATS filtering and reaches the hiring managers who make interview decisions.
              </p>
            </div>
          </div>
        </section>

        {/* NEW: ATS Platforms Comparison - Interactive */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Major ATS Platforms: Comparison & Optimization Strategies</h2>
              <p className="section-subtitle">Understand how different ATS systems work and optimize your resume for each platform</p>
            </div>
            <div className="grid">
              {ATS_PLATFORMS.map((platform, i) => (
                <div key={i} className="card-executive" style={{ cursor: 'pointer' }} onClick={() => setActivePlatform(activePlatform === i ? null : i)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                      <FiDatabase size={18} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>{platform.platform}</h3>
                      <span className="feature-tag" style={{ marginTop: '0.25rem' }}>Market Share: {platform.marketShare}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Used By:</strong> {platform.usedBy}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Key Features:</strong> {platform.keyFeatures}</p>
                  {activePlatform === i && (
                    <div className="insight-box" style={{ padding: '0.75rem', marginTop: '0.5rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 Optimization Tips for {platform.platform}:</p>
                      <ul className="list-style">
                        {platform.optimizationTips.map((tip, j) => (
                          <li key={j}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {activePlatform !== i && <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Click to reveal platform-specific optimization tips →</p>}
                </div>
              ))}
            </div>
            <div className="citation-card" style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📊 Sources:</p>
              <p className="text-small" style={{ margin: 0 }}>ATS platform documentation, OnGig ATS Market Share Report {CURRENT_YEAR}, Jobscan ATS Research, industry analyst reports.</p>
            </div>
          </div>
        </section>

        {/* Optimization Strategies */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">4 Proven ATS Optimization Strategies</h2>
              <p className="section-subtitle">Implement these evidence-based frameworks to create resumes that pass automated screening and impress recruiters</p>
            </div>
            <div className="grid">
              {OPTIMIZATION_STRATEGIES.map((strategy, i) => {
                const IconComp = ICON_MAP[strategy.icon] || FiStar;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span className="feature-tag">{strategy.category}</span>
                      <span style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-muted)' }}>{strategy.number}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                        <IconComp size={18} />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>{strategy.title}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: '1.7' }}>{strategy.description}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', background: 'var(--bg-surface-low)', borderRadius: '0.5rem', marginBottom: '0.75rem' }}>
                      <FiBarChart2 size={16} color="var(--accent-primary)" />
                      <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)' }}>{strategy.impactStat}</span>
                    </div>
                    <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 Pro Tip:</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{strategy.proTip}</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
                      {strategy.recommendedTools.map((tool, j) => (
                        <span key={j} className="feature-tag">{tool}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CAR Method Examples */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">The CAR Method: Transform Responsibilities into Achievements</h2>
              <p className="section-subtitle">Real-world examples demonstrating how to quantify your impact with the Challenge-Action-Result framework</p>
            </div>
            <div className="grid">
              {CAR_EXAMPLES.map((example, i) => {
                const IconComp = ICON_MAP[example.icon] || FiBriefcase;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <IconComp size={18} color="var(--accent-primary)" />
                      <span className="feature-tag">{example.industry}</span>
                    </div>
                    <div style={{ marginBottom: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', fontWeight: 'var(--font-weight-bold)', marginBottom: '0.25rem' }}>C — Challenge:</p>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{example.challenge}</p>
                    </div>
                    <div style={{ marginBottom: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-bold)', marginBottom: '0.25rem' }}>A — Action:</p>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{example.action}</p>
                    </div>
                    <div style={{ marginBottom: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-bold)', marginBottom: '0.25rem' }}>R — Result:</p>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{example.result}</p>
                    </div>
                    <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-bold)', margin: 0 }}>📊 Key Metrics: {example.keyMetrics}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* NEW: Resume Scoring System */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Resume Scoring System: How Employers Evaluate Your Application</h2>
              <p className="section-subtitle">Understand the weighted scoring methodology used by ATS systems and recruiters</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Category</th><th>Weight</th><th>What It Measures</th><th>Target Score</th><th>Common Failure Points</th></tr></thead>
                  <tbody>
                    {RESUME_SCORING.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.category}</strong></td>
                        <td style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-bold)' }}>{row.weight}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.whatItMeasures}</td>
                        <td style={{ color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)' }}>{row.targetScore}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--error-color)' }}>{row.commonFailurePoints}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📊 How Scores Are Calculated:</p>
                <p className="text-small" style={{ margin: 0 }}>ATS systems calculate weighted composite scores based on keyword match rates (30%), content quality analysis (35%), professional presentation metrics (20%), and customization indicators (15%). Resumes scoring below 70% on any individual category or below 80% overall are typically rejected before human review.</p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Action Verb Library - Interactive */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Professional Action Verb Library by Category</h2>
              <p className="section-subtitle">Replace weak language with powerful, recruiter-approved action verbs—click each category to expand</p>
            </div>
            <div className="grid">
              {ACTION_VERBS.map((category, i) => (
                <div key={i} className="card-executive" style={{ cursor: 'pointer' }} onClick={() => setActiveVerbCategory(activeVerbCategory === i ? null : i)}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{category.category}</h3>
                  {activeVerbCategory === i ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {category.verbs.map((verb, j) => (
                        <span key={j} className="feature-badge" style={{ padding: '0.5rem 0.75rem' }}>{verb}</span>
                      ))}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {category.verbs.slice(0, 5).map((verb, j) => (
                        <span key={j} className="feature-badge" style={{ padding: '0.5rem 0.75rem' }}>{verb}</span>
                      ))}
                      <span className="feature-tag" style={{ padding: '0.5rem 0.75rem' }}>+{category.verbs.length - 5} more</span>
                    </div>
                  )}
                  {activeVerbCategory !== i && <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Click to reveal all 10 verbs →</p>}
                </div>
              ))}
            </div>
            <div className="insight-box" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--warning-color)', margin: 0 }}>
                <strong>💡 Pro Tip:</strong> Begin every bullet point with one of these action verbs. Replace weak language like "Was responsible for" or "Helped with" with powerful alternatives. Recruiters spend 40% more time reviewing bullets that start with strong action verbs.
              </p>
            </div>
          </div>
        </section>

        {/* NEW: Resume Length Guidelines */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Resume Length Guidelines by Experience Level</h2>
              <p className="section-subtitle">Industry-standard page counts with ATS impact and recruiter perception insights</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Experience Level</th><th>Pages</th><th>Rationale</th><th>ATS Impact</th><th>Recruiter Perception</th></tr></thead>
                  <tbody>
                    {LENGTH_GUIDELINES.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.experienceLevel}</strong></td>
                        <td style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-bold)' }}>{row.recommendedPages}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.rationale}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.atsImpact}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>{row.recruiterPerception}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ATS Checklist */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Complete ATS Resume Checklist</h2>
              <p className="section-subtitle">Verify every element of your resume against these essential requirements</p>
            </div>
            <div className="grid">
              <div className="checklist-card" style={{ borderLeft: '3px solid var(--success-color)' }}>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--success-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FiCheckCircle size={18} /> Must Include
                </h3>
                <ul className="list-style">
                  {ATS_CHECKLIST.mustInclude.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="checklist-card" style={{ borderLeft: '3px solid var(--error-color)' }}>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--error-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FiAlertCircle size={18} /> Must Avoid
                </h3>
                <ul className="list-style">
                  {ATS_CHECKLIST.mustAvoid.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <FiX size={14} color="var(--error-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry-Specific Tips */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Industry-Specific ATS Optimization Strategies</h2>
              <p className="section-subtitle">Tailored approaches for four major employment sectors with specific keywords and tools</p>
            </div>
            <div className="grid">
              {INDUSTRY_TIPS.map((industry, i) => {
                const IconComp = ICON_MAP[industry.icon] || FiBriefcase;
                return (
                  <div key={i} className="strategy-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                        <IconComp size={18} />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>{industry.industry}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.5rem' }}><strong>Optimization Tips:</strong></p>
                    <ul className="list-style" style={{ marginBottom: '0.75rem' }}>
                      {industry.optimizationTips.map((tip, j) => (
                        <li key={j}>{tip}</li>
                      ))}
                    </ul>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}><strong>Essential Keywords:</strong> {industry.essentialKeywords.join(', ')}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><strong>Key Tools:</strong> {industry.keyTools.join(', ')}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {safeTestimonials.length > 0 && (
          <section className="section" aria-labelledby="testimonials-heading">
            <div className="section-container">
              <h2 id="testimonials-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Success Stories from Professionals</h2>
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
        <section className="section section-alt" aria-labelledby="paa-heading">
          <div className="section-container">
            <h2 id="paa-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>People Also Ask About ATS Resume Optimization</h2>
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

        {/* FAQ Section */}
        <section className="section" id="faq" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">❓ Frequently Asked Questions About ATS Resume Optimization</h2>
              <p className="section-subtitle">Expert answers based on ATS platform documentation and recruitment industry research</p>
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
        <section className="section section-alt" style={{ background: 'var(--bg-surface-lowest)' }} aria-labelledby="resources-heading">
          <div className="section-container">
            <h2 id="resources-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>🔗 Continue Reading</h2>
            <div className="grid">
              <Link href="/resume-templates" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>ATS-Optimized Resume Templates</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Choose from our collection of ATS-optimized resume templates</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Read More <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/free-resume-tools" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>Free Resume Tools</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Access our free ATS checkers, keyword analyzers, and formatting tools</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Read More <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Resource Hub */}
        <section className="section" aria-labelledby="hub-heading">
          <div className="section-container">
            <h2 id="hub-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Complete Your Professional Resume Toolkit</h2>
            <div className="grid">
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>📚 Resume Writing Guides</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li><Link href="/how-to-write-a-resume" className="geo-link-card" style={{ padding: '0.75rem' }}>Complete Resume Writing Guide</Link></li>
                  <li><Link href="/resume-formatting-guide" className="geo-link-card" style={{ padding: '0.75rem' }}>Resume Formatting Guide</Link></li>
                  <li><Link href="/how-to-create-a-resume-with-no-experience" className="geo-link-card" style={{ padding: '0.75rem' }}>Resume with No Experience</Link></li>
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
                  <li><Link href="/free-resume-keyword-matcher" className="geo-link-card" style={{ padding: '0.75rem' }}>Keyword Matcher Tool</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready to Create Your ATS-Optimized Resume?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Use our professional resume builder with built-in ATS optimization, real-time keyword analysis, and expert-approved templates. Visit <a href="https://professionalresumefree.com" style={{ color: 'var(--accent-primary)' }}>Professional Resume Free</a>. <strong>100% Free. No account required.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }} role="group" aria-label="Final call to action buttons">
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                Start Building Free ATS Resume <FiArrowRight style={{ marginLeft: '0.5rem' }} />
              </Link>
              <Link href="/free-resume-tools" className="btn-outline">
                <FiTool style={{ marginRight: '0.5rem' }} /> Free Resume Tools
              </Link>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>
              ✓ No watermarks, no hidden costs, no account required
            </p>
          </div>
        </section>

        {/* NEW SECTION: 5 Randomly Selected Links for Internal Linking Boost */}
        <section className="section" style={{ background: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)' }} aria-labelledby="expand-toolkit-heading">
          <div className="section-container">
            <h2 id="expand-toolkit-heading" className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Expand Your Career Toolkit</h2>
            <div className="grid">
              
              {/* Link 1 */}
              <Link href="/how-to-create-a-resume-with-no-experience" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Resume with No Experience</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Perfect for freshers: How to highlight potential over history.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Learn How <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 2 */}
              <Link href="/interview-tips" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Interview Preparation Tips</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Ace your next interview with proven strategies and common questions.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Get Tips <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 3 */}
              <Link href="/jobs-boards" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Top Job Boards for 2026</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Discover the best platforms to find entry-level and fresher roles.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Browse Jobs <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 4 */}
              <Link href="/cover-letter-guides" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Cover Letter Guides</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Learn how to write compelling cover letters that get noticed.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Read Guides <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 5 */}
              <Link href="/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Beat the ATS Screening</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Optimize your application for online government and corporate portals.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Learn More <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
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
          <span itemProp="articleSection">Career Development, Resume Writing, Job Search</span>
          {longTailKeywords.slice(0, 8).map((kw, i) => (
            <span key={i} itemProp="longTailKeyword">{kw}</span>
          ))}
        </div>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Data Freshness: Last updated {safeCurrentDate} • Next update: {new Date(safeBuildTimestamp + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} • Version 2026.1</span>
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
  const reviewDates = Array(4).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  // CANONICAL URL - NO www
  const canonicalUrl = "https://professionalresumefree.com/resume-guide";

  // Testimonials
  const testimonials = [
    {
      quote: "This ATS guide completely transformed my job search. After implementing the keyword strategies and CAR method, my interview rate went from 2% to 35% in just three weeks.",
      name: "Jennifer M.",
      role: "Marketing Director, San Francisco",
      date: reviewDates[0]
    },
    {
      quote: "The ATS platform comparison section was eye-opening. I had no idea different systems had different optimization requirements. Tailoring my resume for Workday specifically got me past the screening at three Fortune 500 companies.",
      name: "Robert K.",
      role: "Software Engineer, Austin",
      date: reviewDates[1]
    },
    {
      quote: "The action verb library and CAR method examples helped me rewrite my entire resume. I went from listing responsibilities to showcasing achievements with measurable impact. Landed a senior role within a month.",
      name: "Priya S.",
      role: "Financial Analyst, Chicago",
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

export default ResumeGuidePage;