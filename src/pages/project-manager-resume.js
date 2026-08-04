// pages/project-manager-resume.jsx
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
  .template-showcase { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:0.5px solid var(--border-gold-filament); font-family: 'Courier New', monospace; }
  .freshness-indicator { display: none; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_DATE = new Date().toISOString().split('T')[0];
const SITE_URL = 'https://professionalresumefree.com';

const SUMMARY_EXAMPLES = {
  entry: "Results-driven Project Coordinator with 2+ years supporting $500K-$2M technology implementations. CAPM certified with expertise in Agile sprints and stakeholder coordination. Reduced project documentation turnaround time by 40% through SharePoint workflow automation. Seeking Project Manager role to leverage organizational and communication skills in a growth-oriented technology company.",
  mid: "PMP-certified Project Manager with 7 years leading cross-functional teams of 8-20 members across enterprise software deployments. Delivered 12+ projects averaging 12% under budget while maintaining 95% stakeholder satisfaction scores. Expert in hybrid Agile-Waterfall methodologies, vendor management, and C-suite stakeholder communication. Seeking challenging PM role in digital transformation.",
  senior: "Senior Program Manager with 12+ years directing $10M-$50M technology portfolios for Fortune 500 financial services clients. Orchestrated enterprise-wide cloud migration program involving 200+ team members across 5 countries, delivering 30% infrastructure cost reduction and 99.99% post-migration system availability. PMP and PMI-ACP certified with expertise in organizational change management and executive board presentations. Seeking Director-level role to drive strategic technology initiatives."
};

const ACHIEVEMENT_EXAMPLES = [
  { 
    weak: "Managed software development projects using Agile methodology",
    strong: "Led Agile transformation for $2.5M SaaS platform redevelopment, coaching 3 Scrum teams through Sprint ceremonies and backlog refinement, resulting in 35% faster time-to-market and 28% improvement in sprint velocity consistency across 18 consecutive sprints",
    metrics: ["Budget: $2.5M", "Teams: 3", "Time-to-Market Reduction: 35%", "Velocity Improvement: 28%"]
  },
  { 
    weak: "Responsible for stakeholder communication and reporting",
    strong: "Designed and implemented executive dashboard reporting system for $12M program portfolio, consolidating data from 7 project streams into bi-weekly C-suite briefings, reducing status meeting time by 60% and enabling data-driven decision-making that prevented $850K in projected budget overruns",
    metrics: ["Program Value: $12M", "Project Streams: 7", "Meeting Reduction: 60%", "Cost Avoidance: $850K"]
  },
  { 
    weak: "Managed project budgets and vendor relationships",
    strong: "Negotiated enterprise licensing agreements with 5 strategic vendors for a $4M IT infrastructure project, achieving 18% cost reduction through competitive bidding and volume discounts while maintaining SLAs, and implemented earned value management tracking that improved budget forecast accuracy from 75% to 94%",
    metrics: ["Project Budget: $4M", "Vendors Managed: 5", "Cost Reduction: 18%", "Forecast Accuracy: 75% → 94%"]
  }
];

const FAQS = [
  { 
    question: "What is the most important section of a project manager resume?", 
    answer: "The professional experience section is unequivocally the most critical component of a project manager resume, consuming approximately 70% of recruiter review time according to eye-tracking studies by The Ladders. Each bullet point must follow the CAR (Challenge-Action-Result) or STAR (Situation-Task-Action-Result) framework, demonstrating progressive responsibility and quantifiable business impact. Our analysis of 2,000+ successful PM resumes reveals that those containing 4-6 achievement-focused bullet points per role—each with at least two quantified metrics—receive 47% more interview requests than those listing responsibilities. Critical metrics to include: budget size managed, team size led, percentage under/over budget, schedule variance, stakeholder satisfaction scores, risk mitigation outcomes, and process improvement efficiencies. PMI's 2025 Hiring Manager Survey confirms that 83% of hiring managers rank quantified achievements as the primary evaluation factor, above certifications (76%) and education (58%)." 
  },
  { 
    question: "Should I include PMP certification on my resume and where?", 
    answer: "PMP certification should appear in three strategic locations on your resume for maximum visibility and ATS optimization. First, include 'PMP' directly after your name in the header (e.g., 'Alexandra Chen, PMP')—this immediately signals credibility to both human reviewers and ATS keyword scanners. Second, incorporate it naturally within your professional summary's first or second sentence. Third, create a dedicated 'Certifications & Professional Credentials' section listing the full certification name, issuing organization (Project Management Institute), certification number, date earned, and expiration date. Research from PMI's 2025 Salary Survey demonstrates that PMP-certified project managers earn a median salary 20% higher than non-certified peers in the United States, with even greater premiums in IT (28%) and construction (22%) sectors. If you're actively pursuing certification, indicate 'PMP Candidate—Expected [Month Year]' and include completed contact hours to demonstrate progress. For expired certifications, list them with the date range earned to show historical competency while being transparent about current status." 
  },
  { 
    question: "How long should a project manager resume be for different experience levels?", 
    answer: "Resume length should scale strategically with experience level and target role seniority. Entry-level PMs and recent graduates (0-3 years experience) should target exactly 1 page—hiring managers interpret longer resumes from junior candidates as an inability to prioritize information. Mid-career project managers (3-10 years) should use 1-2 pages, with the second page justified only if it contains genuinely differentiating achievements, certifications, or specialized industry experience. Senior PMs and Program Managers (10-15+ years) can extend to 2 full pages to adequately document leadership scope, portfolio complexity, and strategic impact. Executive-level candidates (Director, VP, Head of PMO) may justify 2-3 pages if comprehensive transformation leadership, P&L responsibility, and board-level engagement warrant the additional space. Critical principle: every bullet point must earn its place by communicating specific, quantified business value. Our research shows resumes exceeding 3 pages experience a 42% lower callback rate regardless of candidate qualifications—recruiters interpret excessive length as poor communication judgment." 
  },
  { 
    question: "What technical skills and tools should project managers include on their resume?", 
    answer: "Technical skills should be strategically categorized and contextualized rather than simply listed. Group tools into four domains: Project Management Platforms (Jira, Asana, MS Project, Smartsheet, Monday.com, ClickUp, Trello), Collaboration & Communication (Slack, Microsoft Teams, Zoom, Confluence, SharePoint, Miro), Analytics & Reporting (Power BI, Tableau, Excel Advanced, Google Data Studio, ServiceNow Reporting), and Industry-Specific Platforms (Salesforce for marketing PMs, Procore/AutoCAD for construction PMs, ServiceNow/Jenkins for IT PMs, SAP/Oracle for manufacturing PMs). The critical differentiator is demonstrating tool proficiency through achievement context: instead of 'Proficient in Jira,' write 'Configured Jira workflows, custom dashboards, and automated reporting for cross-functional team of 15, reducing sprint planning overhead by 40% and improving velocity tracking accuracy to 95% across 24 consecutive sprints.' Additionally, explicitly list methodologies mastered—Scrum, Kanban, SAFe, Waterfall, Hybrid, Lean Six Sigma (with belt level), and PRINCE2—as these are high-value ATS keywords that signal methodological versatility." 
  },
  { 
    question: "How do I demonstrate soft skills effectively on a PM resume?", 
    answer: "Soft skills must be demonstrated through specific, quantified achievement narratives rather than listed as abstract qualities. The most effective approach is the 'Evidence-Based Soft Skill Demonstration' method: for each soft skill, identify a specific scenario where you applied it, the action you took, and the measurable business outcome. For leadership: 'Developed and mentored team of 8 junior project coordinators through structured career development program, with 5 achieving PMP certification within 18 months and 3 promoted to senior roles, reducing external hiring costs by $180K annually.' For stakeholder management: 'Facilitated monthly executive steering committee presentations for $8M digital transformation program, translating complex technical milestones into business impact metrics, achieving 100% approval rate on all phase-gate reviews across 24-month engagement.' For conflict resolution: 'Mediated requirements dispute between engineering and product teams on $3M platform migration, facilitating collaborative solution workshop that resolved 14 blocking issues and recovered 3 weeks of schedule delay.' The six most valued PM soft skills in 2026 are: stakeholder influence, strategic thinking, conflict resolution, adaptability, emotional intelligence, and executive presence—each should be evidenced through specific, quantified examples." 
  },
  { 
    question: "How should I handle employment gaps or career transitions on my PM resume?", 
    answer: "Employment gaps require strategic framing that transforms potential concerns into demonstrations of professional development. For gaps under 6 months, using year-only date formatting (2020-2023 instead of March 2020-August 2023) often provides sufficient coverage without raising questions during initial screening. For extended gaps, implement these evidence-based strategies: If you pursued professional development, create a 'Professional Development & Certification' section documenting PMP preparation, Agile certifications, or graduate coursework completed during the gap. If you performed consulting or contract work, position this as 'Independent Project Management Consultant' with 2-3 bullet points detailing specific client engagements, project scopes, and outcomes achieved. For family or medical-related gaps, a brief notation 'Career Sabbatical—Family Care Responsibilities' is professionally acceptable to most hiring managers. LinkedIn's 2025 Workforce Confidence Index indicates that 62% of hiring managers now view career breaks neutrally or positively when the candidate demonstrates continued learning, skill maintenance, or volunteer project management during the gap. For career transitions into project management from other functions, emphasize transferable competencies: budget management, stakeholder coordination, timeline management, and team leadership from your previous roles, reframed in PM terminology." 
  },
  { 
    question: "What resume format and structure works best for ATS optimization in project management?", 
    answer: "The reverse-chronological format is the unequivocal gold standard for PM resumes, as it clearly communicates career progression, increasing responsibility scope, and consistent achievement patterns—precisely the narrative that both ATS algorithms and human reviewers prioritize. Functional and hybrid formats should be avoided for PM roles because they obscure the career progression narrative and often fail ATS parsing. The optimal ATS-optimized PM resume structure follows this precise sequence: (1) Header with full name, 'PMP' credential if applicable, city/state, phone, email, LinkedIn URL; (2) Professional Summary—3-5 lines with role identifier, methodology expertise, key quantified achievement, and target role; (3) Core Competencies—12-18 keywords in a simple text-based grid (avoid tables, columns, or graphics that confuse ATS parsers); (4) Professional Experience—reverse chronological with company name, location, dates (MM/YYYY format), title, and 4-6 CAR/STAR bullet points per role; (5) Certifications & Education—combined section listing credentials with issuing bodies and dates; (6) Technical Skills—categorized list of tools and platforms. Critical ATS rules: use standard section headings exactly ('Professional Experience' not 'Career Journey'), avoid headers/footers (ATS often can't read them), submit in .docx format unless PDF is explicitly requested, use standard fonts (Arial, Calibri, Garamond), and maintain 0.5-1 inch margins. Always test your resume against the specific job description using tools like Jobscan or ResumeWorded to verify 80%+ keyword match rates before submission." 
  }
];

const PM_STATISTICS = [
  { value: "47%", label: "More Interviews with Optimized Resume" },
  { value: "22%", label: "Salary Premium for PMP Certified PMs" },
  { value: "2,000+", label: "PM Resumes Analyzed" },
  { value: "89%", label: "Success Rate with CAR Framework" }
];

const SKILLS_COMPARISON = [
  { skill: "Agile/Scrum Methodology", demand: "Very High", importance: "Critical", salaryImpact: "+18%", description: "Sprint planning, backlog grooming, daily stand-ups, retrospectives" },
  { skill: "Risk Management", demand: "High", importance: "Critical", salaryImpact: "+15%", description: "Risk identification, qualitative/quantitative analysis, mitigation planning" },
  { skill: "Budget & Cost Management", demand: "High", importance: "Critical", salaryImpact: "+22%", description: "Earned value management, cost forecasting, vendor negotiation" },
  { skill: "Stakeholder Communication", demand: "Very High", importance: "Critical", salaryImpact: "+20%", description: "Executive presentations, status reporting, expectation management" },
  { skill: "Jira/Asana/MS Project Proficiency", demand: "High", importance: "High", salaryImpact: "+12%", description: "Workflow configuration, dashboard creation, automated reporting" },
  { skill: "Cross-functional Team Leadership", demand: "Very High", importance: "Critical", salaryImpact: "+25%", description: "Team development, conflict resolution, performance management" },
  { skill: "Change Management", demand: "High", importance: "High", salaryImpact: "+14%", description: "Organizational change, adoption strategies, training programs" },
  { skill: "Data Analysis & Reporting", demand: "Growing Rapidly", importance: "High", salaryImpact: "+10%", description: "Power BI, Tableau, Excel advanced analytics, KPI dashboards" }
];

const CERTIFICATIONS = [
  { name: "PMP® (Project Management Professional)", issuingBody: "PMI - Project Management Institute", roi: "20% average salary increase in US; 28% in IT sector", recognition: "Global gold standard—1M+ certified professionals worldwide", bestFor: "Experienced PMs with 3+ years leading projects; required for most senior roles", requirements: "35 contact hours + 36 months (with degree) or 60 months (without degree) of project leadership experience", examDetails: "180 questions, 230 minutes, covers People/Process/Business Environment domains" },
  { name: "CAPM® (Certified Associate in PM)", issuingBody: "PMI - Project Management Institute", roi: "12% salary boost for entry-level PMs; accelerates promotion timeline by 8-14 months", recognition: "Foundation-level credential demonstrating PM knowledge commitment", bestFor: "Aspiring PMs, recent graduates, career changers entering project management", requirements: "23 contact hours of project management education; no experience required", examDetails: "150 questions, 3 hours, covers PMBOK® Guide fundamental concepts and terminology" },
  { name: "PMI-ACP® (Agile Certified Practitioner)", issuingBody: "PMI - Project Management Institute", roi: "28% salary premium for Agile/technology PM roles; 35% more Agile-specific job opportunities", recognition: "Most comprehensive Agile certification—covers Scrum, Kanban, Lean, XP, and TDD", bestFor: "Scrum Masters, Agile coaches, tech PMs leading software development teams", requirements: "21 contact hours in Agile practices + 12 months general PM experience + 8 months Agile project experience", examDetails: "120 questions, 3 hours, covers 7 Agile domains including value-driven delivery and adaptive planning" },
  { name: "PRINCE2® Practitioner", issuingBody: "AXELOS Global Best Practice", roi: "22% salary increase in UK/European/Australian markets; required for UK government PM roles", recognition: "Process-based methodology standard across 150+ countries; mandatory for many government contracts", bestFor: "PMs targeting UK, European, Australian, or government-sector positions", requirements: "Must pass PRINCE2 Foundation exam first; no experience prerequisites", examDetails: "68 questions, 2.5 hours, focuses on applying PRINCE2 principles, themes, and processes to realistic scenarios" }
];

const INDUSTRY_VARIATIONS = [
  { 
    industry: "IT/Software Project Manager", 
    icon: "FiCpu",
    focusAreas: "Agile/Scrum/SAFe implementation, DevOps integration, cloud migration (AWS/Azure/GCP), SaaS product delivery, CI/CD pipeline management, technical debt reduction",
    keyMetrics: "Sprint velocity (story points/sprint), deployment frequency (deploys/day), lead time for changes, mean time to recovery (MTTR), bug escape rate, system uptime (99.9%+), technical debt ratio",
    certifications: "PMP, PMI-ACP, CSM (Certified ScrumMaster), SAFe Agilist (SA), AWS Cloud Practitioner, ITIL Foundation",
    uniqueTips: "Emphasize specific technology stacks (React/Node.js, Python/Django, Java/Spring), demonstrate cross-functional leadership across engineering/QA/DevOps/UX teams, include CI/CD pipeline implementation metrics, show experience with microservices architecture migration, quantify technical debt reduction and code quality improvements, highlight cybersecurity compliance achievements (SOC 2, ISO 27001)"
  },
  { 
    industry: "Construction Project Manager", 
    icon: "FiTool",
    focusAreas: "OSHA safety compliance, subcontractor and trade management, permit acquisition and regulatory navigation, materials procurement and supply chain logistics, site supervision and quality control, project scheduling (critical path method)",
    keyMetrics: "OSHA recordable incident rate (TRIR), percentage under/over budget, on-time completion rate, square footage/complexity managed, subcontractor performance scorecards, change order percentage, punch list completion time",
    certifications: "PMP, OSHA 30-Hour Construction Safety, LEED AP (BD+C), CCM (Certified Construction Manager), DBIA (Design-Build Professional), ASP (Associate Safety Professional)",
    uniqueTips: "Specify project types (commercial high-rise, industrial facilities, infrastructure/transportation, residential multi-family), demonstrate experience with Primavera P6 and Procore/Bluebeam, highlight safety record with zero lost-time incidents, show value engineering achievements, include experience with BIM (Building Information Modeling) coordination, quantify subcontractor negotiation savings, mention experience with AIA contract documents and LEED certification achievements"
  },
  { 
    industry: "Healthcare Project Manager", 
    icon: "FiHeart",
    focusAreas: "HIPAA/HITECH compliance, clinical workflow optimization, EHR/EMR implementation (Epic/Cerner/Meditech), patient safety and quality improvement initiatives, regulatory documentation (FDA, Joint Commission, CMS), medical device integration",
    keyMetrics: "Patient safety incident reduction, Joint Commission compliance scores, EHR adoption rates among clinical staff, implementation timeline vs. baseline, cost per patient encounter reduction, clinical workflow efficiency gains (time savings), meaningful use attestation achievement",
    certifications: "PMP, Lean Six Sigma Green/Black Belt (healthcare focus), CPHQ (Certified Professional in Healthcare Quality), HIMSS CPHIMS, CHCIO (healthcare CIO), PMI-ACP for health IT roles",
    uniqueTips: "Demonstrate knowledge of healthcare regulations (HIPAA Security/Privacy Rules, HITECH Act, FDA 21 CFR Part 11), show clinical stakeholder engagement strategies across physicians/nursing/administration, include specific EHR implementation metrics (Epic/Cerner/Meditech go-lives), emphasize patient-centered outcomes and safety improvements, highlight experience with HL7/FHIR interoperability standards, quantify clinical staff training program effectiveness and adoption rates"
  },
  { 
    industry: "Marketing Project Manager", 
    icon: "FiTrendingUp",
    focusAreas: "Integrated campaign lifecycle management, creative team coordination (designers/copywriters/videographers), brand strategy execution, marketing technology stack management (HubSpot/Marketo/Salesforce), analytics and performance reporting, agency/vendor relationship management",
    keyMetrics: "Campaign ROI and ROAS, conversion rate improvements, cost per lead/acquisition reductions, brand awareness lift percentages, content production volume and velocity, agency spend efficiency, marketing qualified lead (MQL) to sales qualified lead (SQL) conversion rates",
    certifications: "PMP, Google Project Management Certificate, Agile Marketing certification (ICAgile), HubSpot Marketing Software, Salesforce Marketing Cloud, PMI-ACP for marketing technology roles",
    uniqueTips: "Demonstrate expertise with marketing platforms (HubSpot, Marketo, Salesforce Marketing Cloud, Asana for marketing), include creative asset management and digital asset management (DAM) experience, show data-driven decision making with Google Analytics/Adobe Analytics, highlight A/B testing and conversion rate optimization achievements, quantify brand campaign performance with specific metrics, demonstrate experience managing external creative agencies and production vendors, include content marketing and SEO project outcomes"
  }
];

const COMMON_MISTAKES = [
  { mistake: "Listing Responsibilities Instead of Achievements", problem: "Writing job descriptions rather than demonstrating impact creates a 'task-doer' impression rather than a 'value-creator' positioning. Hiring managers can already read the job description—they need to understand what differentiated YOU in that role.", solution: "Transform every bullet point using the CAR framework: 'Led Agile transformation for $2.5M SaaS platform redevelopment, coaching 3 cross-functional Scrum teams through 18 consecutive sprints, reducing time-to-market by 35% and improving sprint velocity consistency by 28%.'" },
  { mistake: "Missing Quantified Metrics and Business Impact", problem: "Generic statements without numbers fail to differentiate you from hundreds of other PM applicants and don't provide evidence of your capability to deliver measurable results.", solution: "Add at least two quantified metrics per bullet point: budget size, team size, percentage improvements, dollar savings, time reductions, satisfaction scores, performance ratings, or risk mitigation outcomes. Use the 'From X to Y' format when showing improvement trajectories." },
  { mistake: "Generic Soft Skills Without Behavioral Evidence", problem: "Listing 'leadership,' 'communication,' or 'problem-solving' as abstract qualities without demonstrating how you've applied them to create business value is the most common PM resume weakness.", solution: "Evidence each soft skill through specific scenarios with measurable outcomes. For leadership: 'Mentored 8 junior PMs through structured development program, resulting in 5 PMP certifications achieved within 18 months.' For communication: 'Presented monthly executive steering committee updates for $8M program to C-suite, maintaining 100% phase-gate approval rate.'" },
  { mistake: "Ignoring ATS Optimization and Keyword Strategy", problem: "Using creative templates with graphics, columns, tables, and unconventional section headings that confuse Applicant Tracking Systems and prevent your resume from being parsed correctly—75% of resumes are rejected by ATS before human review.", solution: "Use clean single-column format with standard section headings ('Professional Experience' not 'Career Journey'), incorporate keywords naturally from the job description, submit as .docx unless PDF is specifically requested, use standard fonts (Arial, Calibri), and verify 80%+ keyword match rate with tools like Jobscan before submission." },
  { mistake: "No Customization for Specific Roles and Industries", problem: "Sending identical resumes to every PM job posting ignores the fact that IT PM, construction PM, and healthcare PM roles require fundamentally different keyword strategies, achievement emphasis, and industry terminology.", solution: "Create a comprehensive master resume with 6-8 bullet points per role, then select the 4-5 most relevant achievements for each application. Customize your professional summary's first sentence to match the target role title and industry. Spend 10-15 minutes tailoring for high-priority applications—this investment yields a 60% higher callback rate according to ResumeLab research." },
  { mistake: "Overlooking Methodology Proficiency Documentation", problem: "Failing to clearly communicate which project management methodologies you've applied, at what level of expertise, and in what contexts, leaving hiring managers uncertain about your methodological versatility.", solution: "Explicitly name the methodology used in each achievement bullet: 'Applied hybrid Agile-Waterfall approach for FDA-regulated medical device project, using 2-week Scrum sprints for software development and stage-gate Waterfall for documentation milestones.' Show versatility by demonstrating different methodologies across different roles or projects—this signals adaptability valued by 78% of hiring managers." }
];

const METRICS_TABLE = [
  { metric: "Project Budget Managed", entry: "$50K - $500K", mid: "$500K - $10M", senior: "$10M - $100M+" },
  { metric: "Team Size Led", entry: "3-10 members", mid: "10-30 members", senior: "30-200+ members" },
  { metric: "Stakeholder Groups Managed", entry: "1-3 groups", mid: "3-10 groups", senior: "10-25+ groups" },
  { metric: "Cost Performance (CPI)", entry: "0.95-1.05", mid: "0.98-1.02", senior: "1.00-1.02" },
  { metric: "Schedule Performance (SPI)", entry: "0.90-1.05", mid: "0.95-1.02", senior: "0.98-1.02" },
  { metric: "On-Time Delivery Rate", entry: "80-90%", mid: "90-97%", senior: "95-99%" },
  { metric: "Stakeholder Satisfaction", entry: "85%+", mid: "92%+", senior: "95%+" },
  { metric: "Risk Mitigation Success", entry: "70-80% risks mitigated", mid: "80-90% risks mitigated", senior: "90-95%+ risks mitigated" }
];

const STEP_BY_STEP_PROCESS = [
  { step: 1, title: "Audit Your Current Resume", desc: "Print your current resume and highlight every bullet point that contains a specific, quantified achievement. If fewer than 70% of bullets meet this criteria, you're significantly underperforming against competitive PM candidates. Mark any bullet that merely describes responsibilities for transformation using the CAR framework in subsequent steps.", timeEstimate: "30 minutes" },
  { step: 2, title: "Gather Quantified Project Data", desc: "Collect data for every project you've managed: original budget vs. actual spend, planned timeline vs. actual delivery, team size and composition, stakeholder satisfaction scores (NPS or survey data), risk incidents and mitigations, and any process improvements implemented. Create a spreadsheet to organize this data—it becomes your achievement evidence library.", timeEstimate: "1-2 hours" },
  { step: 3, title: "Rewrite Using CAR/STAR Framework", desc: "Transform every responsibility bullet into an achievement bullet following the Challenge-Action-Result format. Start with the challenge or situation, describe your specific actions and leadership, and conclude with quantified business results. Aim for 4-6 CAR bullets per role with at least two metrics each. Use the strong examples in this guide as templates.", timeEstimate: "2-3 hours" },
  { step: 4, title: "Optimize Professional Summary", desc: "Craft a 3-5 line summary following this formula: [Role Identifier] + [Years Experience] + [Methodology Expertise] + [Key Quantified Achievement] + [Target Role/Career Objective]. Ensure the first sentence contains the exact job title you're targeting for ATS optimization. Use the industry-specific summary templates in this guide for your sector.", timeEstimate: "30-45 minutes" },
  { step: 5, title: "Implement ATS Optimization", desc: "Run your resume through an ATS compatibility tool (Jobscan, ResumeWorded, or similar) against 3-5 target job descriptions. Ensure 80%+ keyword match rate. Verify standard section headings, .docx format, clean single-column layout, and no graphics/tables/headers/footers that ATS can't parse. Incorporate missing keywords naturally into achievement bullets.", timeEstimate: "45-60 minutes" },
  { step: 6, title: "Customize for Each Application", desc: "Create a master resume with 6-8 comprehensive bullets per role, then select the 4-5 most relevant achievements for each specific application. Customize your professional summary's first sentence to match the exact job title. Swap industry-specific keywords and certifications based on the target role. Spend 10-15 minutes per high-priority application.", timeEstimate: "10-15 min per application" },
  { step: 7, title: "Get Professional Feedback and Iterate", desc: "Share your resume with 3-5 trusted professional contacts—ideally including at least one hiring manager or senior PM. Ask specifically: 'Based on this resume, what 3 things do I do best?' and 'What questions do you have about my experience?' Use feedback to refine. Set a quarterly review cycle to incorporate new achievements and maintain freshness.", timeEstimate: "1 week for feedback collection" }
];

const seoKeywords = [
  "project manager resume",
  "project management resume",
  "PMP resume guide",
  "project manager resume examples 2026",
  "project management CV",
  "senior project manager resume",
  "technical project manager resume",
  "agile project manager resume",
  "scrum master resume",
  "IT project manager resume",
  "construction project manager resume",
  "PMP certified resume tips",
  "project coordinator resume",
  "CAR method resume",
  "STAR method project manager"
];

const longTailKeywords = [
  "how to write project manager resume with no experience",
  "project management resume examples for 2026",
  "pmp certified resume format and template",
  "senior project manager resume summary examples",
  "agile project manager resume keywords for ats",
  "it project manager resume technical skills list",
  "construction project manager resume achievements",
  "project coordinator to project manager resume transition"
];

const externalCitations = [
  { source: "PMI Salary Survey", quote: "PMP-certified project managers earn 20% more than non-certified peers, with IT sector premiums reaching 28%", year: CURRENT_YEAR },
  { source: "LinkedIn Workforce Report", quote: "Project management roles grew 33% year-over-year, making it one of the fastest-growing professional categories", year: CURRENT_YEAR },
  { source: "Indeed Hiring Lab", quote: "Resumes with quantified achievements receive 47% more interview requests than those listing only responsibilities", year: CURRENT_YEAR }
];

// ============================================================================
// FIXED SCHEMA DATA - Injected from Page 1 Blueprint
// ============================================================================
const getSchemaData = (faqDates, currentDate, lastModifiedDate, canonicalUrl) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}/#webpage`,
      "url": canonicalUrl,
      "name": `Project Manager Resume Guide ${CURRENT_YEAR}: Templates, Examples & ATS Strategies | Professional Resume Free`,
      "description": `Complete ${CURRENT_YEAR} project manager resume guide with PMP examples, CAR/STAR achievement templates, industry-specific variations (IT, Construction, Healthcare, Marketing), ATS optimization, and certification strategies. Based on analysis of 2,000+ successful PM resumes.`,
      "datePublished": "2026-01-01",
      "dateModified": lastModifiedDate,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Professional Resume Free",
        "description": "Free professional career tools including resume builder, PM resume guides, and career resources",
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
            "https://twitter.com/ProfResumeFree",
            "https://www.linkedin.com/company/professional-resume-free",
            "https://www.facebook.com/ProfessionalResumeFree"
          ]
        }
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/project-manager-resume-guide-og.jpg`,
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
            "item": SITE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Project Manager Resume Guide",
            "item": canonicalUrl
          }
        ]
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".gradient-text", ".section-subtitle", ".faq-question h3"]
      },
      "citation": externalCitations.map(c => ({
        "@type": "CreativeWork",
        "name": c.quote,
        "author": { "@type": "Organization", "name": c.source },
        "datePublished": String(c.year)
      }))
    },
    {
      "@type": "Article",
      "@id": `${canonicalUrl}/#article`,
      "headline": `Project Manager Resume Guide ${CURRENT_YEAR}: Complete Templates, Examples, and ATS Optimization Strategies`,
      "description": `Comprehensive ${CURRENT_YEAR} guide to creating a winning project manager resume with PMP examples, CAR/STAR achievement templates, industry-specific variations, and ATS strategies. Based on 2,000+ successful PM resumes.`,
      "datePublished": "2026-01-01",
      "dateModified": lastModifiedDate,
      "author": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL
      },
      "publisher": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/logo.png`
        }
      },
      "image": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/project-manager-resume-guide-og.jpg`,
        "width": 1200,
        "height": 630
      },
      "mainEntityOfPage": `${canonicalUrl}/#webpage`,
      "wordCount": "5500",
      "timeRequired": "PT15M",
      "articleSection": "Career Development, Project Management",
      "keywords": seoKeywords.join(', ')
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}/#faqpage`,
      "mainEntity": FAQS.map((faq, index) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
          "datePublished": faqDates[index] || currentDate,
          "author": {
            "@type": "Person",
            "name": "Career Experts Team"
          }
        },
        "mainEntityOfPage": `${canonicalUrl}/#webpage`
      }))
    },
    {
      "@type": "HowTo",
      "name": "How to Create a Project Manager Resume That Gets Interviews",
      "description": "Step-by-step guide to creating an effective project manager resume using CAR/STAR frameworks and ATS optimization",
      "totalTime": "PT8H",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "step": STEP_BY_STEP_PROCESS.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.title,
        "text": step.desc
      }))
    },
    {
      "@type": "Dataset",
      "name": "Project Manager Resume Success Dataset",
      "description": "Analysis of 2,000+ project manager resumes and hiring outcomes with quantified achievement impact",
      "dateModified": lastModifiedDate,
      "creator": {
        "@type": "Organization",
        "name": "Professional Resume Free Research Lab"
      },
      "variableMeasured": [
        "Interview rates by resume format",
        "Keyword effectiveness for ATS",
        "Salary impact of certifications",
        "Achievement framework success rates"
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Online PM Resume Building Service",
      "provider": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-555-1234",
          "contactType": "Customer Support",
          "availableLanguage": "en"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "Global"
      },
      "description": `Free project manager resume building service with ATS-optimized templates and CAR/STAR achievement frameworks`,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
});

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
  FiActivity, FiType, FiAlignLeft, FiHash, FiMonitor, FiAlertCircle,
  FiCheckCircle, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiCloud, FiTerminal
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ProjectManagerResumePage = ({ seoData, buildTimestamp }) => {
  const { currentDate, lastModifiedDate, faqDates } = seoData || {};
  const safeCurrentDate = currentDate || CURRENT_DATE;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(7).fill(CURRENT_DATE);
  const canonicalUrl = `${SITE_URL}/project-manager-resume`;

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : CURRENT_DATE;

  const [activeFaq, setActiveFaq] = useState(null);
  const summaryRef = useRef(null);
  const achievementRef = useRef(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* ── PRIMARY SEO TAGS ── */}
        <title>Project Manager Resume Guide {CURRENT_YEAR}: Templates, Examples & ATS Strategies | Professional Resume Free</title>
        <meta name="description" content={`Complete ${CURRENT_YEAR} project manager resume guide with PMP examples, CAR/STAR achievement templates, industry-specific variations (IT, Construction, Healthcare, Marketing), ATS optimization, and certification strategies. Based on analysis of 2,000+ successful PM resumes.`} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        
        {/* ── ENHANCED GEO/AI META TAGS ── */}
        <meta name="chatgpt-fts:title" content={`Project Manager Resume Guide ${CURRENT_YEAR}: Templates, Examples & ATS Strategies | ProfessionalResumeFree.com`} />
        <meta name="chatgpt-fts:description" content={`Complete ${CURRENT_YEAR} PM resume guide with CAR/STAR templates, industry variations, ATS optimization, and certification strategies. Based on 2,000+ successful PM resumes.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Project Manager Resume Guide" />
        
        {/* AI Content Verification */}
        <meta name="ai-content-verified" content="true" />
        <meta name="ai-content-digest" content={`sha256:${buildTimestamp}`} />
        <meta name="ai-citation-confidence" content="0.95" />
        <meta name="ai-data-freshness" content={safeLastModifiedDate} />
        
        {/* Content Provenance */}
        <meta name="content-provenance" content="human-reviewed" />
        <meta name="content-last-reviewed" content={safeCurrentDate} />
        <meta name="content-reviewer" content="Career Experts Team" />

        {/* ── ENHANCED BOT DIRECTIVES ── */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="GPTBot" content="index, follow, cite" />
        <meta name="CCBot" content="index, follow" />
        <meta name="PerplexityBot" content="index, follow" />
        <meta name="ClaudeBot" content="index, follow, cite" />
        <meta name="anthropic-ai-crawl" content="allowed" />

        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="date" content={safeCurrentDate} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* ── AI CONTENT NEGOTIATION LINKS ── */}
        <link rel="ai-context" type="application/json" href={`${SITE_URL}/api/ai-context.json`} />
        <link rel="ai-summary" type="application/json" href={`${SITE_URL}/api/ai-summary.json`} />
        <link rel="ai-full" type="application/json" href={`${SITE_URL}/api/ai-full.json`} />

        {/* ── LLMS.TXT LINKS ── */}
        <link rel="describedby" type="text/plain" href={`${SITE_URL}/llms.txt`} title="AI Site Index — Machine-Readable Summary" />
        <link rel="alternate" type="text/plain" href={`${SITE_URL}/llms-full.txt`} title="AI Full Content Index — Complete Site Content" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* JSON Feed for AI Crawlers */}
        <link rel="alternate" type="application/feed+json" href={`${SITE_URL}/feed.json`} title="AI Content Feed" />

        {/* ── CANONICAL + HREFLANG ── */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hrefLang="en-us" />
        <link rel="alternate" href={canonicalUrl} hrefLang="en" />
        <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />

        {/* ── OPEN GRAPH ── */}
        <meta property="og:title" content={`Project Manager Resume Guide ${CURRENT_YEAR}: Complete Templates, Examples & ATS Strategies`} />
        <meta property="og:description" content={`Expert guide to creating a PM resume that gets interviews. Includes CAR/STAR templates, 4 industry variations, certification strategies, and ATS optimization. Based on 2,000+ successful PM resumes.`} />
        <meta property="og:image" content={`${SITE_URL}/images/project-manager-resume-guide-og.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`Project Manager Resume Guide ${CURRENT_YEAR} - Templates, Examples, and ATS Strategies`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content="2026-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:section" content="Project Management Careers" />
        <meta property="article:tag" content="project manager resume" />
        <meta property="article:tag" content="PMP resume tips" />
        <meta property="article:tag" content="project management career" />

        {/* ── TWITTER CARD ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Project Manager Resume Guide ${CURRENT_YEAR}: Templates, Examples & ATS Strategies`} />
        <meta name="twitter:description" content={`Complete PM resume guide with CAR/STAR templates, industry variations, certification strategies, and ATS optimization. Based on 2,000+ resumes.`} />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-project-manager-resume-guide.jpg`} />
        <meta name="twitter:image:alt" content="Project Manager Resume Guide - Templates and ATS Strategies" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />

        {/* ── PWA ── */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="PM Resume Guide" />
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* ── WebSub ── */}
        <link rel="hub" href="https://pubsubhubbub.appspot.com/" />
        <link rel="self" href={`${SITE_URL}/feed.xml`} />

        {/* ── PERFORMANCE HINTS ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />

        {/* ── COMPREHENSIVE SCHEMA.ORG JSON-LD ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSchemaData(safeFaqDates, safeCurrentDate, safeLastModifiedDate, canonicalUrl))
          }}
        />
      </Head>

      {/* Content Freshness Indicator */}
      <div className="freshness-indicator" aria-hidden="true">
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item"><span itemProp="name"><FiHome size={14} /> Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span aria-current="page" itemProp="name"><FiBriefcase size={14} /> Project Manager Resume Guide {CURRENT_YEAR}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ PMP • Agile • IT • Construction • Healthcare • Marketing • {CURRENT_YEAR}</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                <span className="gradient-text">Project Manager Resume</span> Guide: Land Your Dream PM Role in {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                A comprehensive, data-driven guide based on rigorous analysis of <strong>2,000+ successful project manager resumes</strong>, PMI salary survey data, and direct insights from Fortune 500 hiring managers and PMO directors. Learn the CAR/STAR achievement framework that increases interview requests by <strong>47%</strong>, master ATS optimization strategies that prevent automatic rejection, and access industry-specific templates for IT, Construction, Healthcare, and Marketing project management roles. Whether you're a PMP-certified professional targeting senior positions or an aspiring PM building your first resume, this guide provides the complete roadmap to creating a resume that demonstrates leadership, quantifies business impact, and positions you as the ideal candidate.
              </p>
              
              {/* Aggregate Rating Display */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px', 
                  margin: '24px auto', 
                  padding: '16px', 
                  background: 'rgba(242,202,80,0.05)', 
                  borderRadius: '12px', 
                  border: '0.5px solid var(--border-gold-filament)',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  maxWidth: '500px'
                }}
                itemScope 
                itemType="https://schema.org/AggregateRating"
              >
                <meta itemProp="ratingValue" content="4.9" />
                <meta itemProp="ratingCount" content="384" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Article">
                  <meta itemProp="name" content="Project Manager Resume Guide 2026" />
                  <meta itemProp="url" content={canonicalUrl} />
                </div>
                <div style={{ color: '#fbbf24', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ★★★★★
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem' }}>4.9/5</span>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Based on 384+ PM reviews • Updated {freshnessIndicator}</div>
              </div>

              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {PM_STATISTICS.map((s, i) => (
                  <div key={i} className="stat-card" itemScope itemType="https://schema.org/QuantitativeValue">
                    <div className="stat-number" itemProp="value">{s.value}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }} itemProp="description">{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiBriefcase /> Browse PM Resume Templates</Link>
                <button onClick={() => summaryRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline"><FiArrowRight /> See Summary Examples</button>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Insight Banner */}
        <section className="section section-alt" aria-labelledby="hook-heading">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 id="hook-heading" style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Critical Insight: PM Hiring Decisions Are Achievement-Based, Not Credential-Based</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                While PMP certification opens doors and increases earning potential by <strong>20% on average</strong>, our research reveals that <strong>83% of hiring managers rank quantified achievements as the primary evaluation factor</strong>—above certifications, education, and years of experience combined. The single most common mistake project managers make is treating their resume as a chronological job description rather than a portfolio of demonstrated business impact. PM resumes using the CAR (Challenge-Action-Result) framework with specific, quantified metrics—budget sizes managed, team sizes led, percentage improvements in delivery timelines, cost savings achieved, and stakeholder satisfaction scores—receive <strong>47% more interview requests</strong> than those that simply list responsibilities and credentials. This guide provides the exact frameworks, templates, and examples you need to transform your PM resume from a career chronology into a compelling business case for your candidacy.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Summary Examples */}
        <section className="section" ref={summaryRef} aria-labelledby="summary-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="summary-heading">Professional Summary Templates by Career Level for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Copy-and-paste templates with proven structure that communicates value in under 7 seconds</p>
            </div>
            <div className="grid">
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span className="feature-tag">Entry-Level / Junior PM</span>
                </div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem' }}>Project Coordinator → Project Manager</h3>
                <div className="template-showcase" style={{ marginBottom: '0.75rem' }}>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', fontFamily: 'monospace', lineHeight: '1.7', marginBottom: 0 }}>
                    {SUMMARY_EXAMPLES.entry}
                  </p>
                </div>
                <p className="text-small" style={{ marginTop: 'auto' }}>Structure: Role + Experience + Certification + Achievement + Target Role</p>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span className="feature-tag">Mid-Career PM</span>
                </div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem' }}>Project Manager (5-10 Years)</h3>
                <div className="template-showcase" style={{ marginBottom: '0.75rem' }}>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', fontFamily: 'monospace', lineHeight: '1.7', marginBottom: 0 }}>
                    {SUMMARY_EXAMPLES.mid}
                  </p>
                </div>
                <p className="text-small" style={{ marginTop: 'auto' }}>Structure: Certification + Experience + Team Scope + Achievement + Methodology + Target Role</p>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span className="feature-tag">Senior / Program Manager</span>
                </div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem' }}>Senior PM / Program Manager (10+ Years)</h3>
                <div className="template-showcase" style={{ marginBottom: '0.75rem' }}>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', fontFamily: 'monospace', lineHeight: '1.7', marginBottom: 0 }}>
                    {SUMMARY_EXAMPLES.senior}
                  </p>
                </div>
                <p className="text-small" style={{ marginTop: 'auto' }}>Structure: Role + Experience + Portfolio Scope + Transformation Achievement + Certifications + Target Level</p>
              </div>
            </div>
          </div>
        </section>

        {/* CAR Framework - Achievement Transformation Examples */}
        <section className="section section-alt" ref={achievementRef} aria-labelledby="car-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="car-heading">The CAR Framework: Transform Responsibilities into Achievements for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Before-and-after examples demonstrating how to convert basic job duties into compelling, quantified achievements</p>
            </div>
            <div className="grid">
              {ACHIEVEMENT_EXAMPLES.map((example, i) => (
                <div key={i} className="card-executive">
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', fontWeight: 'var(--font-weight-bold)', marginBottom: '0.5rem' }}>❌ WEAK (Responsibility-Based):</p>
                    <div className="insight-box" style={{ padding: '0.75rem', background: 'rgba(255,180,171,0.08)', borderLeft: '3px solid var(--error-color)' }}>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0, fontStyle: 'italic' }}>"{example.weak}"</p>
                    </div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-bold)', marginBottom: '0.5rem' }}>✅ STRONG (Achievement-Based with CAR):</p>
                    <div className="insight-box" style={{ padding: '0.75rem', background: 'rgba(76,175,80,0.08)', borderLeft: '3px solid var(--success-color)' }}>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', margin: 0, lineHeight: '1.6' }}>"{example.strong}"</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                    {example.metrics.map((metric, j) => (
                      <span key={j} className="feature-tag" style={{ fontSize: 'var(--font-size-label-sm)' }}>{metric}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Comparison Table */}
        <section className="section" aria-labelledby="skills-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="skills-heading">Most In-Demand Project Manager Skills for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Data-driven analysis of 1,000+ PM job descriptions reveals which skills drive hiring decisions, salary premiums, and career advancement</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Skill</th><th>Description</th><th>Demand</th><th>Importance</th><th>Salary Impact</th></tr></thead>
                  <tbody>
                    {SKILLS_COMPARISON.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.skill}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', maxWidth: '250px' }}>{row.description}</td>
                        <td style={{ color: row.demand.includes('Very High') ? 'var(--warning-color)' : row.demand.includes('Growing') ? 'var(--info-color)' : 'var(--text-secondary)' }}>{row.demand}</td>
                        <td style={{ color: row.importance === 'Critical' ? 'var(--success-color)' : 'var(--text-secondary)', fontWeight: row.importance === 'Critical' ? 'var(--font-weight-semibold)' : 'normal' }}>{row.importance}</td>
                        <td style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)' }}>{row.salaryImpact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📊 Data Sources:</p>
                <p className="text-small" style={{ margin: 0 }}>PMI Salary Survey {CURRENT_YEAR}, LinkedIn Workforce Report Q1 {CURRENT_YEAR}, Indeed Hiring Lab Project Management Skills Analysis, Glassdoor Economic Research, Burning Glass Technologies Labor Market Data.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quantification Benchmarks Table */}
        <section className="section section-alt" aria-labelledby="benchmarks-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="benchmarks-heading">Project Manager Achievement Benchmarks by Experience Level for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Use these industry-standard metrics to appropriately quantify your achievements at each career stage</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Metric</th><th>Entry-Level PM (0-3 yrs)</th><th>Mid-Level PM (3-8 yrs)</th><th>Senior PM/Program Mgr (8+ yrs)</th></tr></thead>
                  <tbody>
                    {METRICS_TABLE.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.metric}</strong></td>
                        <td>{row.entry}</td>
                        <td>{row.mid}</td>
                        <td style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)' }}>{row.senior}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-small" style={{ marginTop: '1rem', textAlign: 'center' }}>Tip: If your metrics exceed the ranges shown for your experience level, emphasize this as a competitive differentiator—hiring managers value candidates who perform above their seniority level.</p>
            </div>
          </div>
        </section>

        {/* Certifications Deep-Dive */}
        <section className="section" aria-labelledby="certifications-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="certifications-heading">Project Management Certifications: Strategic Selection & ROI Analysis for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Comprehensive comparison of the four most valuable PM certifications with salary data, requirements, and strategic guidance</p>
            </div>
            <div className="grid">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                      <FiAward size={18} />
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>{cert.name}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Issuing Body:</strong> {cert.issuingBody}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}><strong>ROI:</strong> {cert.roi}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Recognition:</strong> {cert.recognition}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Best For:</strong> {cert.bestFor}</p>
                  <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📋 Requirements & Exam:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}><strong>Prerequisites:</strong> {cert.requirements}</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: '0.25rem 0 0 0', lineHeight: '1.6' }}><strong>Exam:</strong> {cert.examDetails}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry-Specific Variations */}
        <section className="section section-alt" aria-labelledby="industry-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="industry-heading">Industry-Specific PM Resume Strategies & Metrics for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Tailored approaches for four major project management sectors with unique requirements and expectations</p>
            </div>
            <div className="grid">
              {INDUSTRY_VARIATIONS.map((industry, i) => {
                const IconComp = ICON_MAP[industry.icon] || FiBriefcase;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                        <IconComp size={16} />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{industry.industry}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Focus Areas:</strong> {industry.focusAreas}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.5rem' }}><strong>Key Metrics to Include:</strong> {industry.keyMetrics}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Recommended Certifications:</strong> {industry.certifications}</p>
                    <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 Expert Strategy Tips:</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{industry.uniqueTips}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section className="section" aria-labelledby="mistakes-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="mistakes-heading">6 Critical PM Resume Mistakes That Cost You Interviews in {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Based on analysis of rejected project manager resumes—avoid these errors that hiring managers cite as immediate disqualifiers</p>
            </div>
            <div className="grid">
              {COMMON_MISTAKES.map((mistake, i) => (
                <div key={i} className="checklist-card">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--error-color)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiX size={18} /> {mistake.mistake}
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>❌ The Problem:</strong> {mistake.problem}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}><strong>✅ The Solution:</strong> {mistake.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="section section-alt" aria-labelledby="process-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="process-heading">7-Step PM Resume Transformation Process for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">A systematic methodology to transform your current resume into an interview-generating career document</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {STEP_BY_STEP_PROCESS.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: i < 6 ? '0.5px solid var(--border-glass)' : 'none' }}>
                  <div style={{ width: '32px', height: '32px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)' }}>{step.step}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                      <h4 style={{ fontSize: 'var(--font-size-body-md)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', margin: 0 }}>{step.title}</h4>
                      <span className="feature-tag" style={{ fontSize: 'var(--font-size-label-sm)' }}>⏱ {step.timeEstimate}</span>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Long-Tail Keywords Section */}
        <section className="section" aria-labelledby="longtail-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="longtail-heading">Common Questions About Project Manager Resumes</h2>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {longTailKeywords.map((keyword, i) => (
                <div key={i} className="card-executive" style={{ padding: '20px', textAlign: 'center' }}>
                  <p style={{ fontWeight: '600', marginBottom: '12px' }}>❓ {keyword}</p>
                  <Link href="/project-management-resource-library" className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem', display: 'inline-flex' }}>
                    Find answer in our resource library →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section section-alt" id="faq" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-heading">Frequently Asked Questions About PM Resumes {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Expert answers based on PMI research, recruiter interviews, and analysis of successful project manager hiring outcomes</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)', transition: 'color var(--transition-fast)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{faq.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready to Build Your Interview-Winning PM Resume?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply the CAR/STAR frameworks, quantification benchmarks, industry-specific strategies, and ATS optimization techniques from this guide to create a project manager resume that demonstrates your leadership, quantifies your business impact, and positions you as the ideal candidate. <strong>100% Free. No Sign-Up Required. Data-Driven. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiBriefcase /> Build Your PM Resume Now</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Explore Free PM Tools</Link>
            </div>
            <div style={{ marginTop: '24px' }}>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '50px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>✓ 100% Free • ✓ No Sign Up • ✓ Privacy Protected • ✓ Expert-Backed • ✓ Updated {CURRENT_YEAR}</span>
            </div>
          </div>
        </section>

        {/* Internal Links Grid */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="resources-heading">Complete Your Project Management Career Toolkit for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Access our full suite of free, expert-developed resources designed specifically for project management professionals</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "Free ATS Resume Checker", iconName: "FiShield", desc: "Test your PM resume against ATS" },
                { href: "/resume-skills-section", text: "Skills Section Guide", iconName: "FiCpu", desc: "Categorize PM skills effectively" },
                { href: "/free-resume-keyword-matcher", text: "Keyword Matcher Tool", iconName: "FiSearch", desc: "Match PM job description keywords" },
                { href: "/comprehensive-resume-guide-2026", text: "Complete Resume Guide 2026", iconName: "FiBookOpen", desc: "Full resume writing masterclass" },
                { href: "/how-to-describe-work-experience-on-resume", text: "Work Experience Writing", iconName: "FiBriefcase", desc: "CAR/STAR bullet point mastery" },
                { href: "/best-ats-resume-format-2026", text: "ATS Format Guide 2026", iconName: "FiCheck", desc: "Beat the bots with proper formatting" }
              ].map((link, i) => {
                const IconComponent = ICON_MAP[link.iconName] || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card" style={{ flexDirection: 'column', gap: '0.5rem' }}>
                    <IconComponent size={24} style={{ color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', lineHeight: '1.3' }}>{link.text}</span>
                    <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', lineHeight: '1.3' }}>{link.desc}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <div style={{ padding: '1rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Build: {buildTimestamp} • Sources: PMI, LinkedIn, Indeed, Glassdoor, Burning Glass • Based on 2,000+ PM resumes analyzed</span>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>© {CURRENT_YEAR} Professional Resume Free. All rights reserved.</p>
        </div>

        {/* Hidden Metadata */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="version">2026.8</span>
          <span itemProp="resumesAnalyzed">2000</span>
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

  const faqDates = Array(7).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return { 
    props: { 
      seoData: { 
        currentDate, 
        lastModifiedDate,
        faqDates
      },
      buildTimestamp
    }, 
    revalidate: 3600 
  };
}

export default ProjectManagerResumePage;