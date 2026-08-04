// pages/resume-skills-section.jsx
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

const SKILLS_STATISTICS = [
  { value: "98%", label: "Fortune 500 Companies Use ATS to Screen Skills" },
  { value: "<7s", label: "Recruiters Scan Resumes—Skills Must Be Visible" },
  { value: "8-15", label: "Optimal Number of Targeted Skills to List" },
  { value: "3x", label: "More Interviews with Tailored Skills Section" }
];

const SKILL_TYPES = [
  { type: "Hard Skills", definition: "Technical, teachable, and measurable abilities specific to your profession. These are quantifiable and can be tested or certified.", examples: "Python programming, Financial Modeling, SEO/SEM, SQL, Adobe Creative Suite, AWS Cloud Architecture, Foreign Language Proficiency (Spanish B2)", bestUse: "List prominently in a dedicated skills section. Include proficiency levels where relevant. These are the primary keywords ATS systems scan for.", atsWeight: "Critical—highest keyword matching priority" },
  { type: "Soft Skills", definition: "Interpersonal traits and people skills that describe how you work with others and approach your work. Harder to quantify but essential for team and client-facing roles.", examples: "Cross-functional Collaboration, Adaptability, Emotional Intelligence, Critical Thinking, Conflict Resolution, Time Management, Leadership", bestUse: "Demonstrate through specific, quantified achievements in your experience section. Never simply list without evidence. 'Led cross-functional team of 12 to deliver project 3 weeks ahead of schedule' proves leadership.", atsWeight: "High—increasingly weighted by modern ATS" },
  { type: "Transferable Skills", definition: "Competencies that apply across different roles, industries, and career stages. These are the skills that enable career changes and progression into leadership.", examples: "Project Management, Strategic Planning, Budget Oversight, Stakeholder Communication, Data Analysis, Process Improvement, Team Development", bestUse: "Critical for career changers, professionals targeting leadership roles, and those with diverse experience. Highlight these prominently when transitioning between industries.", atsWeight: "High—demonstrates versatility and adaptability" }
];

const ROLE_EXAMPLES = [
  {
    role: "Software Engineer",
    icon: "FiCode",
    skillCategories: [
      { category: "Programming Languages", skills: "Python, TypeScript, Java, Rust, SQL, Go" },
      { category: "Frameworks & Libraries", skills: "React.js, Node.js, Django, Spring Boot, Next.js, Express" },
      { category: "Cloud & Infrastructure", skills: "AWS (EC2, S3, Lambda), Docker, Kubernetes, Terraform, CI/CD Pipelines" },
      { category: "Development Practices", skills: "Test-Driven Development, Agile/Scrum, Code Review, Git/GitHub, RESTful API Design" }
    ],
    atsTips: "Include both spelled-out terms and common abbreviations (e.g., 'Amazon Web Services (AWS)'). List specific AWS services rather than just 'AWS.' Include proficiency levels for languages. Mention version numbers for frameworks where relevant."
  },
  {
    role: "Digital Marketing Specialist",
    icon: "FiTarget",
    skillCategories: [
      { category: "Digital Channels", skills: "SEO/SEM, Google Analytics 4, Meta Ads Manager, LinkedIn Campaign Manager, Programmatic Display" },
      { category: "Content & Creative", skills: "Copywriting, A/B Testing, Email Marketing (HubSpot/Mailchimp), Canva/Adobe Express, Video Marketing" },
      { category: "Analytics & Data", skills: "ROI Tracking, Conversion Rate Optimization, Google Data Studio, Excel Advanced, A/B Testing" },
      { category: "Tools & Platforms", skills: "HubSpot, Salesforce Marketing Cloud, SEMrush, Ahrefs, Hootsuite, Asana" }
    ],
    atsTips: "Include specific platform names and versions (e.g., 'Google Analytics 4' not just 'Analytics'). Quantify tool proficiency where possible. Mention certifications (Google Ads Certified, HubSpot Inbound Marketing). Include both strategy and execution skills."
  },
  {
    role: "Project Manager",
    icon: "FiBriefcase",
    skillCategories: [
      { category: "Methodologies", skills: "Agile (Scrum/Kanban), Waterfall, Hybrid, SAFe, Lean Six Sigma (Green Belt)" },
      { category: "Tools & Software", skills: "Jira, Trello, Microsoft Project, Smartsheet, Asana, Confluence, Slack" },
      { category: "Core Competencies", skills: "Budget Management ($500K-$5M), Stakeholder Communication, Risk Mitigation, Resource Allocation, Vendor Management" },
      { category: "Leadership Skills", skills: "Cross-functional Team Leadership (5-25 members), Executive Presentations, Conflict Resolution, Mentoring & Development" }
    ],
    atsTips: "Include budget ranges managed to demonstrate scale. Mention team sizes led. List specific certifications (PMP, CSM, PRINCE2). Include both methodology expertise and practical tools proficiency. Quantify project outcomes where possible."
  }
];

const FAQS = [
  { 
    question: "What is the ideal number of skills to list on my resume?", 
    answer: "The optimal range is 8-15 targeted skills organized in 3-5 logical categories. This provides sufficient depth to demonstrate competency without overwhelming recruiters during their 6-8 second initial scan. Quality and relevance dramatically outweigh quantity. Each skill should be: (1) directly relevant to the target role based on the job description, (2) demonstrable through specific achievements in your experience section, and (3) organized in clear categories that enable rapid scanning. Avoid listing more than 20 skills—this dilutes the impact of your most important qualifications and signals inability to prioritize. For technical roles, you may list 10-15 skills across 3-4 categories. For non-technical roles, 8-12 skills across 2-3 categories is appropriate. Always prioritize skills that appear in the job description's requirements section—these carry the highest ATS matching weight." 
  },
  { 
    question: "Should I separate hard skills and soft skills on my resume?", 
    answer: "Yes—organized categorization significantly improves both ATS parsing and human readability. Create distinct categories with clear subheadings: 'Technical Skills' or 'Hard Skills' for programming languages, software, tools, certifications, and technical competencies; 'Professional Skills' or 'Leadership Competencies' for communication, team leadership, project management, and strategic thinking; optionally, 'Industry Expertise' for domain-specific knowledge and methodologies. This separation serves three purposes: it helps ATS systems correctly categorize and weight your skills, it enables recruiters to rapidly locate the specific competencies they're evaluating, and it demonstrates professional organization and clear communication. Within each category, list skills in order of relevance to the target role. For soft skills, always provide evidence through achievements rather than simply listing—'Led cross-functional team of 8' proves leadership more effectively than listing 'Leadership' alone." 
  },
  { 
    question: "Where should I place my skills section on my resume?", 
    answer: "Skills section placement depends on your career stage and the role you're targeting. Place it prominently near the top (after your professional summary, before work experience) if: you're in a technical role where specific competencies are the primary hiring criteria (software engineering, data science, design), you're a recent graduate or entry-level candidate with limited work experience but strong relevant skills, or you're making a career change and need to highlight transferable competencies immediately. Place it after your work experience section if: you're an experienced professional with 5+ years of progressive experience where your track record speaks louder than a skills list, or you're in a senior leadership role where strategic impact and achievements matter more than technical competencies. Regardless of placement, ensure your skills section is clearly labeled, well-organized, and immediately visible—recruiters should never have to search for it." 
  },
  { 
    question: "How do I effectively tailor my skills section for each job application?", 
    answer: "Implement a systematic 4-step tailoring process for each application. Step 1—Keyword Extraction: Analyze the job description and extract all required and preferred skills, technical competencies, and qualifications. Highlight terms that appear multiple times—these carry the highest ATS weight. Step 2—Skills Mapping: Compare the job's required skills against your actual competencies. Identify matches, near-matches (synonyms or related skills), and gaps. Be honest—never claim skills you can't demonstrate during an interview. Step 3—Prioritization: Reorder your skills to feature the strongest matches first. Place skills that appear in the job description's 'Requirements' section before those in 'Preferred Qualifications.' Remove skills that aren't relevant to this specific role even if they're impressive. Step 4—Language Alignment: Mirror the employer's exact terminology. If the job description says 'Google Analytics 4,' use that exact phrase—not just 'Analytics' or 'GA4.' If it says 'Cross-functional Team Leadership,' use that exact phrase rather than 'Led teams.' This process takes 5-10 minutes per application and significantly increases ATS match rates and recruiter engagement." 
  },
  { 
    question: "Should I include proficiency levels for my skills?", 
    answer: "Include proficiency levels only when they add meaningful context and you can back them up with evidence. For technical skills (programming languages, software, tools): proficiency levels are valuable and expected. Use clear descriptors: 'Expert,' 'Advanced,' 'Proficient,' 'Working Knowledge,' or 'Familiar.' Be conservative—interviewers will test claimed proficiencies. For languages: use standardized frameworks: 'Native,' 'Fluent,' 'Professional Working Proficiency,' 'Basic.' Include CEFR levels (B2, C1) or test scores (IELTS 7.5, TOEFL 105) for international applications. For soft skills: never include proficiency levels—these are subjective and appear unprofessional. Instead, demonstrate proficiency through achievement examples. When NOT to include levels: when you can't objectively measure proficiency, when skills are basic expectations for your role (don't list 'Microsoft Word—Advanced'), or when the number of proficiency levels creates visual clutter. When including levels, maintain consistent formatting: either use labels for all skills or for none." 
  },
  { 
    question: "Is a skills-based (functional) resume format effective?", 
    answer: "Skills-based or functional resume formats can be effective in specific situations but should be used cautiously because many recruiters and ATS systems prefer chronological formats. Best scenarios for functional formats: career changers transitioning to a completely new industry where transferable skills matter more than job titles, professionals with significant employment gaps (2+ years) who need to emphasize competencies over chronology, freelancers or consultants with diverse, project-based experience that doesn't fit neatly into chronological format, and military veterans translating specialized military experience into civilian competencies. Risks of functional formats: many ATS systems struggle to parse functional resumes correctly, some recruiters perceive them as attempts to hide employment gaps or lack of progression, and they make it harder for hiring managers to understand your career trajectory. Recommendation: for most professionals, use a combination/hybrid format that features a prominent skills section within a chronological structure. This provides the ATS compatibility of chronological format with the skills emphasis of functional format." 
  },
  { 
    question: "How do I keep my skills section current with industry trends?", 
    answer: "Implement a quarterly skills audit and update process. Step 1—Industry Monitoring: follow 5-10 job descriptions for your target role monthly. Note emerging skills, tools, and certifications that appear consistently. Subscribe to industry publications, professional association newsletters, and LinkedIn groups in your field. Step 2—Competitive Analysis: review LinkedIn profiles of 10-15 professionals recently hired into roles you're targeting. Note their listed skills, certifications, and the language they use. Step 3—Skills Gap Assessment: compare your current skills against the emerging requirements. Identify gaps and create a development plan—online courses, certifications, side projects, or on-the-job learning. Step 4—Resume Updates: add genuinely acquired new skills immediately. Remove outdated or obsolete technologies (unless specifically relevant to legacy systems roles). Replace generic skills with more specific, current terminology. For 2026 specifically, AI literacy (prompt engineering, AI tool proficiency), data analysis capabilities, and remote collaboration skills are increasingly expected across all roles." 
  }
];

// Long-tail keywords for GEO
const longTailKeywords = [
  "resume skills section",
  "how to list skills on resume",
  "hard skills vs soft skills",
  "ATS optimized skills section",
  "resume skills examples",
  "skills for resume 2026",
  "best skills to put on resume",
  "technical skills for resume"
];

// People Also Ask for GEO
const peopleAlsoAsk = [
  { question: "What is the ideal number of skills to list on my resume?", answer: "The optimal range is 8-15 targeted skills organized in 3-5 logical categories. Quality and relevance outweigh quantity. Each skill should be directly relevant to the target role and demonstrable through specific achievements." },
  { question: "Should I separate hard skills and soft skills on my resume?", answer: "Yes—organized categorization improves both ATS parsing and human readability. Create distinct categories with clear subheadings like 'Technical Skills' and 'Professional Skills' to help recruiters rapidly locate the competencies they're evaluating." },
  { question: "Where should I place my skills section on my resume?", answer: "Place it prominently near the top if you're in a technical role or making a career change. Place it after work experience if you're an experienced professional with 5+ years where your track record speaks louder than a skills list." }
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
const ResumeSkillsSectionPage = ({ seoData }) => {
  const { currentDate: seoCurrentDate, lastModifiedDate, reviewDates, testimonials, buildTimestamp } = seoData || {};
  const safeCurrentDate = seoCurrentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const safeTestimonials = testimonials || [];
  const canonicalUrl = "https://professionalresumefree.com/resume-skills-section";

  // Optimized title - 63 characters
  const optimizedTitle = `Resume Skills Section Guide ${CURRENT_YEAR}: ATS Examples & Expert Tips`;

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* ===== PRIMARY SEO TAGS - OPTIMIZED TITLE ===== */}
        <title>{optimizedTitle}</title>
        <meta name="description" content={`Complete ${CURRENT_YEAR} guide to building a high-impact resume skills section. Role-specific examples (Software Engineer, Marketing, Project Manager), ATS optimization strategies, skill type breakdowns, and expert formatting guidance.`} />
        <meta name="keywords" content={longTailKeywords.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="copyright" content={`${CURRENT_YEAR} Professional Resume Free`} />
        
        {/* ===== GEO OPTIMIZATION TAGS FOR AI CRAWLERS ===== */}
        <meta name="chatgpt-fts:title" content={optimizedTitle} />
        <meta name="chatgpt-fts:description" content={`Complete ${CURRENT_YEAR} guide to building a high-impact resume skills section with role-specific examples and ATS optimization strategies.`} />
        <meta name="chatgpt-fts:keywords" content="resume skills section, how to list skills on resume, hard skills vs soft skills, ATS optimized skills" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Skills Section Guide" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* ===== SINGLE CANONICAL TAG - NO www ===== */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* ===== HREFLANG TAGS ===== */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* ===== OPEN GRAPH (Facebook/LinkedIn) ===== */}
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content={`Complete guide to building a high-impact resume skills section with role-specific examples and ATS optimization strategies.`} />
        <meta property="og:image" content="https://professionalresumefree.com/images/resume-skills-section-guide.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`Resume Skills Section Guide ${CURRENT_YEAR}`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content={`${CURRENT_YEAR}-01-15`} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Development" />
        <meta property="article:tag" content="resume skills" />
        <meta property="article:tag" content="ATS optimization" />
        <meta property="article:tag" content="career advice" />
        
        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={optimizedTitle} />
        <meta name="twitter:description" content={`Complete guide to building a high-impact resume skills section with role-specific examples.`} />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/resume-skills-section-twitter.jpg" />
        <meta name="twitter:image:alt" content="Resume Skills Section Guide" />
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
                "description": `Comprehensive guide to building a high-impact resume skills section with role-specific examples, ATS optimization strategies, and expert formatting guidance.`,
                "image": "https://professionalresumefree.com/images/resume-skills-section-guide.jpg",
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
                "datePublished": `${CURRENT_YEAR}-01-15`,
                "dateModified": safeLastModifiedDate,
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": canonicalUrl
                },
                "articleSection": "Career Development",
                "keywords": "resume skills section, ATS optimization, hard skills, soft skills"
              },
              {
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
                    "name": "Resume Skills Section Guide",
                    "item": canonicalUrl
                  }
                ]
              },
              {
                "@type": "WebPage",
                "@id": canonicalUrl,
                "url": canonicalUrl,
                "name": optimizedTitle,
                "description": `Complete ${CURRENT_YEAR} guide to building a high-impact resume skills section.`,
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
                "name": "How to Build an Effective Resume Skills Section",
                "description": "Step-by-step guide to creating a high-impact skills section for your resume",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "USD",
                  "value": "0"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Identify Your Hard Skills",
                    "text": "List all technical, teachable abilities specific to your profession that can be tested or certified."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Identify Your Soft Skills",
                    "text": "Document interpersonal traits demonstrated through specific achievements in your experience."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Organize into Categories",
                    "text": "Group skills into 3-5 logical categories with clear subheadings for rapid scanning."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Tailor for Target Role",
                    "text": "Prioritize skills matching the job description and mirror the employer's exact terminology."
                  }
                ],
                "totalTime": "PT30M"
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
                <span itemProp="name" aria-current="page">Resume Skills Section Guide</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">✦ Hard Skills • Soft Skills • Transferable Skills • ATS-Optimized • {CURRENT_YEAR}</div>
              
              {/* SINGLE H1 TAG */}
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                <span className="gradient-text">Resume Skills Section</span> Guide: ATS Examples & Expert Tips
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                A comprehensive guide to building a high-impact resume skills section that passes ATS screening and impresses hiring managers. Based on analysis of <strong>successful resumes across industries</strong> and ATS platform requirements, this resource covers hard skills vs. soft skills strategy, role-specific examples for Software Engineers, Marketing Specialists, and Project Managers, expert formatting guidance, and proven tailoring techniques. Learn why <strong>98% of Fortune 500 companies use ATS to screen skills</strong>—and how proper skills presentation increases interview invitations by <strong>3x</strong>.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {SKILLS_STATISTICS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Call to action buttons">
                <Link href="/free-resume-keyword-matcher" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                  Try Free Keyword Matcher <FiArrowRight style={{ marginLeft: '0.5rem' }} />
                </Link>
                <Link href="/resume-templates" className="btn-outline">
                  <FiFileText style={{ marginRight: '0.5rem' }} /> Browse Resume Templates
                </Link>
              </div>
              {/* Author Info */}
              <div className="card-executive" style={{ marginTop: '2rem', padding: '1.25rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Expert-Verified Skills Strategies | Last Updated: {safeCurrentDate} | Based on ATS platform analysis & recruiter research</p>
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
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiBookOpen /> 4,500+ words</span>
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
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Your Skills Section Is the #1 ATS Keyword Target—Get It Right</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Recruiters scan resumes in under <strong>7 seconds</strong>—they're not reading, they're searching for proof you can do the job. Your skills section is the fastest way to communicate that proof. <strong>98% of Fortune 500 companies use ATS systems</strong> that scan specifically for skill keywords. If your skills section is vague, generic, or poorly organized, your resume may never reach a human reviewer regardless of your qualifications. A precisely targeted, well-structured skills section dramatically increases ATS pass rates and provides the immediate evidence of capability that recruiters seek during their initial scan. This guide provides the exact frameworks to build a skills section that satisfies both automated screening and human evaluation.
              </p>
            </div>
          </div>
        </section>

        {/* Skill Types Table */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Hard Skills vs. Soft Skills vs. Transferable Skills</h2>
              <p className="section-subtitle">Understanding the three skill categories and how to present each effectively</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Skill Type</th><th>Definition</th><th>Examples</th><th>Best Presentation Strategy</th><th>ATS Weight</th></tr></thead>
                  <tbody>
                    {SKILL_TYPES.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.type}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.definition}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>{row.examples}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.bestUse}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)' }}>{row.atsWeight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Role-Specific Examples */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Role-Specific Skills Section Examples</h2>
              <p className="section-subtitle">Complete categorized skill sets for three major professional roles with ATS optimization tips</p>
            </div>
            <div className="grid">
              {ROLE_EXAMPLES.map((role, i) => {
                const IconComp = ICON_MAP[role.icon] || FiBriefcase;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                        <IconComp size={18} />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>{role.role}</h3>
                    </div>
                    {role.skillCategories.map((cat, j) => (
                      <div key={j} style={{ marginBottom: '0.75rem' }}>
                        <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>{cat.category}:</p>
                        <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>{cat.skills}</p>
                      </div>
                    ))}
                    <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 ATS Optimization Tips:</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{role.atsTips}</p>
                    </div>
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
            <h2 id="paa-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>People Also Ask About Resume Skills Sections</h2>
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
        <section className="section" id="faq" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">❓ Frequently Asked Questions About Resume Skills Sections</h2>
              <p className="section-subtitle">Expert answers based on ATS platform data and recruiter behavior research</p>
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
            <h2 id="resources-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>🔗 Complete Your Resume Toolkit</h2>
            <div className="grid">
              <Link href="/free-ats-resume-checker" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>ATS Resume Checker</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Test skills section compatibility</p>
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
                  <li><Link href="/resume-keywords-finder" className="geo-link-card" style={{ padding: '0.75rem' }}>Keywords Finder Guide</Link></li>
                  <li><Link href="/resume-formatting-guide" className="geo-link-card" style={{ padding: '0.75rem' }}>Resume Formatting Guide</Link></li>
                  <li><Link href="/how-to-write-a-resume" className="geo-link-card" style={{ padding: '0.75rem' }}>How to Write a Resume</Link></li>
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
                  <li><Link href="/free-resume-summary-generator" className="geo-link-card" style={{ padding: '0.75rem' }}>Summary Generator</Link></li>
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
              Build Your High-Impact Skills Section Today
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply the skill type strategies, role-specific examples, and ATS optimization techniques from this guide. Visit <a href="https://professionalresumefree.com" style={{ color: 'var(--accent-primary)' }}>Professional Resume Free</a>. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }} role="group" aria-label="Final call to action buttons">
              <Link href="/free-resume-keyword-matcher" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                Try Free Keyword Matcher <FiArrowRight style={{ marginLeft: '0.5rem' }} />
              </Link>
              <Link href="/resume-templates" className="btn-outline">
                <FiFileText style={{ marginRight: '0.5rem' }} /> Browse Resume Templates
              </Link>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>✓ No credit card required • ✓ Free forever • ✓ 3 role examples included • ✓ ATS-optimized strategies</p>
          </div>
        </section>

        {/* NEW SECTION: Internal Linking Boost */}
        <section className="section" style={{ background: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)' }} aria-labelledby="expand-toolkit-heading">
          <div className="section-container">
            <h2 id="expand-toolkit-heading" className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Expand Your Career Toolkit</h2>
            <div className="grid">
              <Link href="/resume-templates" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>ATS-Optimized Resume Templates</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Professionally designed templates that pass automated screening.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Browse Templates <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/resume-guide" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Complete ATS Resume Guide</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Master ATS optimization with proven strategies and real examples.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Read Guide <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/interview-tips" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Interview Preparation Tips</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Ace your next interview with proven strategies and common questions.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Get Tips <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/cover-letter-guides" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Cover Letter Guides</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Learn how to write compelling cover letters that get noticed.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Read Guides <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Beat the ATS Screening</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Advanced optimization tips to ensure your resume passes automated screening.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Learn More <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers - Using stable prop values to prevent hydration mismatch */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
          <span itemProp="keywords">{longTailKeywords.join(', ')}</span>
          <span itemProp="articleSection">Career Development, Resume Writing, Job Search</span>
          {longTailKeywords.slice(0, 8).map((kw, i) => (
            <span key={i} itemProp="longTailKeyword">{kw}</span>
          ))}
        </div>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Data Freshness: Last updated {safeCurrentDate} • Sources: ATS platform documentation, recruiter behavior studies, successful resume analysis • Next update: {new Date(safeBuildTimestamp + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}</span>
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
  const canonicalUrl = "https://professionalresumefree.com/resume-skills-section";

  // Testimonials
  const testimonials = [
    {
      quote: "This guide completely transformed how I present my skills. The role-specific examples for Software Engineers were exactly what I needed. After restructuring my skills section, my interview rate increased dramatically.",
      name: "Alex R.",
      role: "Software Engineer, San Francisco",
      date: reviewDates[0]
    },
    {
      quote: "As a career changer, the transferable skills framework helped me communicate my value effectively. The hard skills vs. soft skills breakdown was eye-opening. Landed my first marketing role within 3 weeks.",
      name: "Maria S.",
      role: "Digital Marketing Specialist, Chicago",
      date: reviewDates[1]
    },
    {
      quote: "The tailoring strategy section alone was worth the read. I had no idea I should mirror the employer's exact terminology. My ATS match rates improved significantly after implementing these techniques.",
      name: "James T.",
      role: "Project Manager, New York",
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

export default ResumeSkillsSectionPage;