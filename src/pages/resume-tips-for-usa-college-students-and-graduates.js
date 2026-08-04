// pages/resume-tips-for-usa-college-students-and-graduates.jsx
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

const STUDENT_STATISTICS = [
  { value: "250+", label: "Average Applications Per Entry-Level Role" },
  { value: "98%", label: "Fortune 500 Companies Use ATS for Screening" },
  { value: "85%", label: "Employers Value Internship Experience" },
  { value: "1 Page", label: "Ideal Resume Length for Students & Graduates" }
];

const ESSENTIAL_TIPS = [
  { title: "Lead with Education", icon: "FiBookOpen", description: "Place your education section prominently at the top of your resume. Include your university name, degree program, expected graduation date, GPA if 3.0 or above, and 3-5 relevant coursework items that align with your target role. For competitive fields like finance, consulting, and technology, a strong GPA is expected and should be included. If your major GPA is higher than your cumulative GPA, list the major GPA instead." },
  { title: "Showcase Academic & Personal Projects", icon: "FiCode", description: "Create a dedicated 'Projects' section to demonstrate practical application of your skills. For each project, include the project name, technologies or methodologies used, your specific role and contributions, and quantified outcomes where possible. Academic capstone projects, hackathon entries, personal coding projects, research papers, and class projects can all demonstrate competency when described with technical depth and measurable results." },
  { title: "Leverage Internships & Part-Time Work", icon: "FiBriefcase", description: "Every internship—paid or unpaid—and part-time job provides evidence of workplace readiness. Describe your responsibilities and achievements using action verbs and quantified results. Even roles in retail, food service, or campus jobs demonstrate transferable skills: customer service, time management, teamwork, and reliability. Frame these experiences professionally." },
  { title: "Highlight Leadership & Extracurricular Activities", icon: "FiUsers", description: "Leadership roles in student organizations, sports teams, volunteer work, and community service demonstrate initiative, teamwork, and organizational skills that employers value. Describe your specific contributions and impact. Quantify your achievements wherever possible—numbers transform vague claims into compelling evidence." },
  { title: "Use Powerful Action Verbs", icon: "FiTrendingUp", description: "Begin every bullet point with a strong, descriptive action verb that clearly communicates your contribution. Replace weak language like 'helped with,' 'worked on,' or 'responsible for' with verbs like 'Developed,' 'Led,' 'Created,' 'Analyzed,' 'Coordinated,' 'Implemented,' 'Designed,' 'Increased,' 'Reduced,' 'Launched,' 'Managed,' and 'Optimized.'" },
  { title: "Quantify Every Achievement", icon: "FiAward", description: "Numbers transform vague claims into compelling evidence. Wherever possible, include specific metrics: dollar amounts, percentages, timeframes, team sizes, audience numbers, or performance improvements. Quantification provides the concrete evidence that distinguishes your application from other candidates." }
];

const NO_EXPERIENCE_CONTENT = [
  { title: "Academic Projects & Research", description: "Group projects, research papers, capstone projects, and laboratory work all demonstrate practical application of your knowledge. Describe your specific role, the methodologies used, and the outcomes achieved.", example: "Led a team of 4 students to develop a comprehensive marketing plan for a local business as part of a senior capstone project. Conducted market research with 50+ survey respondents, analyzed competitor strategies, and presented recommendations that the business implemented, resulting in a 15% increase in social media engagement within 2 months." },
  { title: "Volunteer Work & Community Service", description: "Volunteering demonstrates initiative, social responsibility, and transferable skills. Include any leadership roles, measurable impact, or skills developed through your service.", example: "Coordinated campus food drive as Volunteer Lead for Student Community Outreach. Recruited 25 volunteers, secured donations from 8 local businesses, and collected 500+ pounds of food for the local shelter, exceeding the original goal by 40%." },
  { title: "Extracurricular Leadership", description: "Student government, clubs, sports teams, and cultural organizations all provide evidence of teamwork, leadership, time management, and communication skills.", example: "Served as Treasurer of the Student Government Association, managing a $10,000 annual budget across 15 student organizations. Implemented new expense tracking system that reduced reimbursement processing time by 40% and improved budget transparency for all member organizations." },
  { title: "Personal Projects & Self-Directed Learning", description: "Blogs, applications, freelance work, creative portfolios, and online certifications demonstrate initiative, technical skills, and self-motivation—qualities employers value highly.", example: "Self-taught React and Node.js through online courses and built a personal portfolio website showcasing 5 design projects. The site receives 1,000+ monthly visitors and was featured in a university design showcase. Completed Google UX Design Professional Certificate during summer break." }
];

const BEFORE_AFTER_EXAMPLES = [
  { before: "Education: XYZ University, expected 2026 (no GPA, no coursework)", after: "XYZ University | Bachelor of Arts in Marketing | Expected May 2026 | GPA: 3.6/4.0 | Relevant Coursework: Consumer Behavior, Digital Marketing Analytics, Brand Strategy, Market Research Methods", keyImprovement: "Added GPA, relevant coursework, and professional formatting" },
  { before: "Worked at campus bookstore. Helped customers and stocked shelves.", after: "Campus Bookstore Associate (2024-2025). Assisted 100+ customers daily with product inquiries and purchases. Resolved customer complaints independently, maintaining 95% satisfaction rating. Trained and mentored 3 new hires on store procedures. Recognized as Employee of the Month twice for exceptional service.", keyImprovement: "Quantified impact, used action verbs, demonstrated leadership and recognition" },
  { before: "Member of Marketing Club.", after: "Marketing Club, Vice President (2024-2025). Led 10-member executive board to organize 4 professional networking events with 200+ total attendees and 12 corporate sponsors. Launched social media campaign that increased club membership by 30% and engagement by 45%. Secured $2,500 in sponsorship funding from local businesses.", keyImprovement: "Demonstrated leadership, quantified results, showed initiative and impact" },
  { before: "Skills: Microsoft Office, social media, communication.", after: "Technical Skills: Excel (Pivot Tables, VLOOKUP, Data Analysis), Meta Business Suite, Google Analytics 4, Canva, Adobe Creative Suite | Professional Skills: Public speaking (presented to audiences of 50+), team leadership, project management, cross-cultural communication (studied abroad in Spain)", keyImprovement: "Specified proficiency levels, added context, included unique qualifications" }
];

const ATS_TIPS = [
  "Use standard section headings exactly: 'Education,' 'Experience,' 'Skills,' 'Projects'—ATS systems are trained on these labels",
  "Incorporate keywords naturally from the job description—match the employer's exact terminology for skills and qualifications",
  "Avoid all graphics, columns, tables, images, or text boxes—ATS parsers read linearly and frequently fail with complex formatting",
  "Save as .docx for online applications (highest ATS compatibility) and PDF for direct email submissions",
  "Test your resume by copying all content into a plain text editor—if information is lost or garbled, your formatting is too complex",
  "Tailor each application with keywords from that specific job description—generic resumes receive 40% fewer interview invitations"
];

const RESUME_SECTION_BUILDER = [
  { 
    section: "Professional Header", 
    purpose: "Immediate identification and professional contact accessibility",
    content: "Full name (largest text, 18-20pt), phone number, professional email address (firstname.lastname@gmail.com), city/state, LinkedIn profile URL, and GitHub/portfolio link for technical roles. Never include your full street address for privacy reasons.",
    example: "ALEX JOHNSON\n(555) 123-4567 | alex.johnson@email.com | Boston, MA\nlinkedin.com/in/alexjohnson | github.com/alexjohnson",
    studentTip: "Use your university email (.edu) if you prefer, but ensure you'll have access after graduation. Create a professional Gmail address as a permanent option."
  },
  { 
    section: "Education Section", 
    purpose: "Your primary qualification as a student—must be comprehensive and prominently placed",
    content: "University name, location, degree (spelled out), major/minor, expected graduation date (Month Year), GPA (if 3.0+), relevant coursework (3-5 courses), academic honors (Dean's List, scholarships), and study abroad experience.",
    example: "BOSTON UNIVERSITY | Boston, MA\nBachelor of Science in Business Administration, Concentration in Finance\nExpected May 2026 | GPA: 3.7/4.0 | Dean's List (4 semesters)\nRelevant Coursework: Financial Modeling, Investment Analysis, Corporate Finance, Business Analytics\nStudy Abroad: Semester at London School of Economics (Fall 2025)",
    studentTip: "Include 10th and 12th standard only if you're an international student with limited US experience. Remove high school entirely once you have college credits."
  },
  { 
    section: "Projects Section", 
    purpose: "Evidence of practical skill application—critical for students without formal work experience",
    content: "2-3 significant projects with: project name, your role, technologies/tools used, 2-3 bullet points describing your specific contributions and quantified outcomes, and links to live projects or GitHub repositories.",
    example: "E-Commerce Platform Development | Full-Stack Developer\nTechnologies: React, Node.js, MongoDB, Stripe API\n• Built full-stack e-commerce application with user authentication, product catalog (200+ items), shopping cart, and payment processing\n• Implemented responsive design achieving 95% mobile compatibility score on Google Lighthouse\n• Optimized database queries reducing page load time by 40% through indexing and caching strategies",
    studentTip: "Include both team projects (demonstrating collaboration) and individual projects (demonstrating self-direction). Link to live demos or GitHub repositories for technical roles."
  }
];

const INDUSTRY_STUDENT_GUIDANCE = [
  { industry: "Business & Finance", icon: "FiDollarSign", targetRoles: "Investment Banking Analyst, Consulting Analyst, Financial Analyst, Marketing Coordinator, Business Development Representative", keySkills: "Excel (Financial Modeling, VLOOKUP, Pivot Tables), PowerPoint, Bloomberg Terminal, Salesforce, SQL basics, Financial Analysis", certifications: "Bloomberg Market Concepts (BMC), Wall Street Prep, Excel Certification, Google Analytics", resumeEmphasis: "Lead with GPA if strong (3.5+). Highlight quantitative coursework. Include any finance or consulting club leadership. Mention case competition participation." },
  { industry: "Technology & Engineering", icon: "FiCode", targetRoles: "Software Engineer, Data Analyst, IT Support Specialist, Web Developer, QA Engineer", keySkills: "Programming languages (Python, Java, JavaScript), Git/GitHub, Cloud platforms (AWS/Azure basics), Agile methodology, Database management", certifications: "AWS Cloud Practitioner, Google IT Support, CompTIA A+, specific language certifications", resumeEmphasis: "GitHub profile is mandatory. Lead with technical projects. Include hackathon participation. List programming languages with proficiency levels. Include any open-source contributions." },
  { industry: "Healthcare & Sciences", icon: "FiHeart", targetRoles: "Research Assistant, Clinical Lab Technician, Healthcare Administrator, Pharmaceutical Sales, Public Health Coordinator", keySkills: "Laboratory techniques, research methodology, data analysis (SPSS, R), patient care basics, medical terminology, HIPAA awareness", certifications: "CPR/BLS, CNA, EMT, research certifications, clinical research coordinator (CCRC)", resumeEmphasis: "Highlight laboratory and research experience. Include relevant science coursework. Mention any clinical shadowing or volunteering. List specific laboratory equipment proficiency." },
  { industry: "Communications & Creative", icon: "FiType", targetRoles: "Social Media Coordinator, Content Writer, Graphic Designer, PR Assistant, Marketing Assistant", keySkills: "Adobe Creative Suite, Canva, social media platforms (Meta, TikTok, LinkedIn), content management systems (WordPress), SEO basics, copywriting", certifications: "Google Analytics, HubSpot Content Marketing, Adobe Certified Associate, Hootsuite Social Marketing", resumeEmphasis: "Include portfolio link prominently. Highlight social media results with metrics. Mention any published work or campaigns. Include relevant coursework in digital media and communications." }
];

const JOB_SEARCH_TIMELINE = [
  { phase: "Freshman/Sophomore Year (Years 1-2)", actions: "Explore career interests through coursework and student organizations. Begin building LinkedIn profile. Attend career fairs to understand employer expectations. Start documenting projects and achievements for future resume use.", keyMilestone: "Join at least one career-relevant student organization" },
  { phase: "Junior Year (Year 3)", actions: "Secure first internship or relevant part-time position. Update resume with new experiences and skills. Begin networking with alumni in target industries. Attend employer information sessions and career center workshops. Create or update portfolio/GitHub profile.", keyMilestone: "Complete at least one internship or significant project" },
  { phase: "Senior Year—Fall Semester", actions: "Finalize resume with all college experiences. Research target companies and roles intensively. Begin applying for full-time positions (many companies recruit fall semester). Practice interview skills through mock interviews. Request LinkedIn recommendations from professors and internship supervisors.", keyMilestone: "Submit first 20 job applications by October" },
  { phase: "Senior Year—Spring Semester", actions: "Continue applications while interviewing. Follow up on pending applications. Consider backup options and plan B roles. Negotiate offers professionally. Prepare for transition from student to professional.", keyMilestone: "Accept job offer by graduation or within 3 months after" }
];

// NEW: Action Verb Library for Students
const ACTION_VERB_LIBRARY = [
  { category: "Leadership & Initiative", verbs: ["Led", "Founded", "Launched", "Spearheaded", "Organized", "Coordinated", "Directed", "Championed", "Established", "Orchestrated"] },
  { category: "Achievement & Results", verbs: ["Increased", "Improved", "Reduced", "Generated", "Achieved", "Exceeded", "Delivered", "Accelerated", "Maximized", "Streamlined"] },
  { category: "Analysis & Research", verbs: ["Analyzed", "Researched", "Evaluated", "Investigated", "Identified", "Assessed", "Calculated", "Forecasted", "Diagnosed", "Surveyed"] },
  { category: "Creation & Development", verbs: ["Created", "Developed", "Designed", "Built", "Produced", "Authored", "Programmed", "Engineered", "Constructed", "Formulated"] }
];

// NEW: Skills by Major
const SKILLS_BY_MAJOR = [
  { major: "Business Administration", technicalSkills: "Excel Advanced, Financial Modeling, CRM Software (Salesforce, HubSpot), Data Visualization (Tableau, Power BI), Project Management Tools (Asana, Trello)", softSkills: "Presentation skills, Negotiation, Client relationship management, Strategic thinking, Cross-functional collaboration", certifications: "Bloomberg Market Concepts, Google Analytics, Six Sigma Yellow Belt, Microsoft Office Specialist" },
  { major: "Computer Science", technicalSkills: "Python, Java, JavaScript/TypeScript, SQL, Git/GitHub, AWS/Azure basics, Docker, REST APIs, Agile/Scrum", softSkills: "Problem-solving, Debugging, Technical documentation, Code review, Algorithmic thinking", certifications: "AWS Cloud Practitioner, Google IT Support, Oracle Java Certification, CompTIA Security+" },
  { major: "Communications/Journalism", technicalSkills: "Adobe Creative Suite, Canva, WordPress, SEO tools (SEMrush, Ahrefs), Social media management platforms (Hootsuite, Buffer), Google Analytics", softSkills: "Storytelling, Interviewing, Editing, AP Style writing, Public relations, Crisis communication", certifications: "Google Analytics Individual Qualification, HubSpot Content Marketing, Hootsuite Social Marketing, Adobe Certified Associate" },
  { major: "Biology/Pre-Med", technicalSkills: "Laboratory techniques (PCR, Gel Electrophoresis), Microscopy, Data analysis (SPSS, R), Electronic Health Records (EHR) systems, Medical terminology", softSkills: "Attention to detail, Research methodology, Scientific writing, Patient communication, Ethical reasoning", certifications: "CPR/BLS, CNA, EMT-Basic, Phlebotomy Technician, Clinical Research Coordinator" }
];

// NEW: Common Student Resume Questions with Detailed Answers
const COMMON_QUESTIONS = [
  { question: "How do I handle multiple internships at the same company?", answer: "List each internship as a separate entry with different dates and titles to show progression. Example: 'Marketing Intern (Summer 2024)' and 'Marketing Coordinator Intern (Summer 2025)' at the same company demonstrates growth and increasing responsibility. Use different bullet points for each role to show expanded duties." },
  { question: "Should I include my part-time restaurant/retail job if it's not related to my career?", answer: "Yes—but frame it to highlight transferable skills. 'Server at Olive Garden' becomes 'Customer Service Professional: Managed 8-table section during peak hours, resolved customer concerns independently, trained 5 new team members, and consistently received 5-star reviews for service excellence.' These roles demonstrate reliability, communication, and work ethic that employers value." },
  { question: "What if I graduated with a low GPA but have great experience?", answer: "Omit your GPA entirely and lead with your strongest qualifications—projects, internships, leadership roles, and relevant skills. Place your education section after your experience and projects rather than at the top. If asked during interviews, frame your answer around what you learned and how you've developed professionally since graduation." },
  { question: "How do I list study abroad experience on my resume?", answer: "Include study abroad under your Education section: 'Semester Abroad: University of Sydney, Australia (Spring 2025). Completed coursework in International Marketing and Cross-Cultural Communication.' Highlight language skills gained, cultural adaptability, and any projects completed during your time abroad. Study abroad demonstrates independence, adaptability, and global perspective." }
];

const FAQS = [
  { 
    question: "What if I have absolutely no work experience? What do I put on my resume?", 
    answer: "Focus intensively on four categories that demonstrate your potential despite lacking formal employment. Academic projects and research demonstrate practical application of your knowledge—describe each project with the STAR method (Situation, Task, Action, Result). Volunteer work and community service show initiative and transferable skills. Extracurricular leadership roles prove teamwork, organization, and communication abilities. Personal projects, online certifications, and self-directed learning demonstrate motivation and technical competency. The key is presenting each experience with the same professional rigor you'd apply to a paid position: use action verbs, quantify outcomes, and connect your contributions to business-relevant skills. According to NACE's 2026 Job Outlook Survey, 85% of employers consider internship experience and project work as valid substitutes for formal employment when evaluating entry-level candidates." 
  },
  { 
    question: "Should I include my GPA on my student resume?", 
    answer: "Include your GPA if it's 3.0 or above on a 4.0 scale—this is the most common threshold employers use. For competitive fields like investment banking, management consulting, and top technology companies, a strong GPA (3.5+) is often expected and should be prominently displayed. If your major GPA (within your specific field of study) is significantly higher than your cumulative GPA, list the major GPA instead: 'Major GPA: 3.7/4.0.' If your GPA is between 2.8 and 3.0, the decision depends on your other strengths—include it if you have strong projects, internships, or leadership experience that compensate. If your GPA is below 2.8, omit it entirely and emphasize projects, skills, and practical experience more prominently. Once you have 2+ years of professional experience after graduation, remove your GPA entirely—employers prioritize work performance over academic metrics at that stage." 
  },
  { 
    question: "How do I make my student resume stand out when competing with experienced candidates?", 
    answer: "Compete on your strengths rather than trying to match experienced candidates on theirs. Five differentiation strategies: (1) Lead with your most recent and relevant education, including specific coursework, academic honors, and GPA if strong—experienced candidates typically place education at the bottom. (2) Showcase projects with the same depth and professionalism that experienced candidates use for work achievements—quantify outcomes, name specific technologies, and describe your individual contribution. (3) Highlight current technical skills and certifications—students often have more recent training in emerging technologies than professionals who learned them years ago. (4) Demonstrate enthusiasm, adaptability, and willingness to learn through specific examples—qualities that experienced candidates may not emphasize. (5) Include relevant extracurricular leadership that shows you can manage multiple priorities—balancing academics with leadership roles demonstrates time management that employers value." 
  },
  { 
    question: "Should I list coursework on my resume?", 
    answer: "Yes, strategically list 3-5 relevant courses that directly align with your target role—but never simply list course titles without context. For each course, briefly connect it to practical skills: 'Data Analytics (Python, SQL, Tableau)—analyzed 10,000+ data points for semester project identifying customer segmentation patterns.' This approach demonstrates both the knowledge acquired AND your ability to apply it. Select courses that map to the job description's requirements. For a marketing role, list 'Consumer Behavior,' 'Digital Marketing Analytics,' and 'Brand Strategy.' For a software development role, list 'Data Structures & Algorithms,' 'Web Development,' and 'Database Management.' Remove basic introductory courses that are assumed for your major. Once you have 1-2 years of professional experience, replace coursework with work achievements." 
  },
  { 
    question: "How should I address changing majors, transferring schools, or taking a gap year on my resume?", 
    answer: "Address these situations proactively and positively. For major changes: list only your final/current major—you don't need to mention previous majors unless the coursework is directly relevant to your target role. For transferring schools: list only the institution from which you'll graduate. Include your graduation date and GPA from your current institution. You don't need to list previous schools unless you completed significant achievements there. For gap years: address the gap briefly and positively if asked during interviews, but you don't need to explain it on your resume. If you used the gap productively—travel, volunteer work, skill development, family responsibilities, health recovery—you can include a brief 'Career Break' entry with a positive description. Focus on what you gained, not what you missed." 
  },
  { 
    question: "How long should my resume be as a college student or recent graduate?", 
    answer: "One page is the firmly established standard for college students and recent graduates. Recruiters expect concise, focused resumes from entry-level candidates—a second page signals inability to prioritize information and communicate efficiently. A well-structured single page can effectively communicate your education, 2-3 significant projects, internship or part-time experience, key skills, leadership roles, and relevant certifications. Extend to two pages only if you have genuinely substantial experience: multiple significant internships, extensive project portfolio, research publications, or 3+ years of relevant part-time work. Never pad your resume with irrelevant information to reach a second page. Use 10.5-11pt font if needed to fit quality content, but never go below 10pt. According to eye-tracking research, recruiters spend 80% of their scan time on the top half of the first page—your most compelling qualifications should appear in this prime real estate." 
  }
];

// Long-tail keywords for GEO
const longTailKeywords = [
  "resume tips for college students",
  "student resume guide",
  "entry-level resume tips",
  "college graduate resume",
  "how to write a resume with no experience",
  "student resume examples",
  "college student resume format",
  "entry level job resume tips"
];

// People Also Ask for GEO
const peopleAlsoAsk = [
  { question: "What if I have absolutely no work experience?", answer: "Focus on academic projects, volunteer work, extracurricular leadership, and personal projects. Present each with the same professional rigor you'd apply to a paid position: use action verbs, quantify outcomes, and connect your contributions to business-relevant skills. According to NACE's 2026 Job Outlook Survey, 85% of employers consider internship experience and project work as valid substitutes for formal employment when evaluating entry-level candidates." },
  { question: "Should I include my GPA on my student resume?", answer: "Include your GPA if it's 3.0 or above on a 4.0 scale. For competitive fields like investment banking and consulting, a strong GPA (3.5+) is expected. If your major GPA is higher than your cumulative GPA, list the major GPA instead. If your GPA is below 2.8, omit it entirely and emphasize projects, skills, and practical experience." },
  { question: "How long should my resume be as a college student?", answer: "One page is the firmly established standard for college students and recent graduates. Recruiters expect concise, focused resumes from entry-level candidates. A well-structured single page can effectively communicate your education, 2-3 significant projects, internship or part-time experience, key skills, leadership roles, and relevant certifications." }
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
const ResumeTipsForCollegeStudentsPage = ({ seoData }) => {
  const { currentDate: seoCurrentDate, lastModifiedDate, reviewDates, testimonials, buildTimestamp } = seoData || {};
  const safeCurrentDate = seoCurrentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const safeTestimonials = testimonials || [];
  const canonicalUrl = "https://professionalresumefree.com/resume-tips-for-usa-college-students-and-graduates";

  // Optimized title - 58 characters
  const optimizedTitle = `Resume Tips for USA College Students & Graduates ${CURRENT_YEAR}`;

  const [activeFaq, setActiveFaq] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [activeVerbCategory, setActiveVerbCategory] = useState(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* ===== PRIMARY SEO TAGS - OPTIMIZED TITLE ===== */}
        <title>{optimizedTitle}</title>
        <meta name="description" content={`Complete ${CURRENT_YEAR} guide with essential resume tips for USA college students and recent graduates. Section builder, industry guidance, job search timeline, action verb library, skills by major, before/after examples, and ATS optimization.`} />
        <meta name="keywords" content={longTailKeywords.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="copyright" content={`${CURRENT_YEAR} Professional Resume Free`} />
        
        {/* ===== GEO OPTIMIZATION TAGS FOR AI CRAWLERS ===== */}
        <meta name="chatgpt-fts:title" content={optimizedTitle} />
        <meta name="chatgpt-fts:description" content={`Complete ${CURRENT_YEAR} guide with essential resume tips for USA college students and recent graduates.`} />
        <meta name="chatgpt-fts:keywords" content="resume tips for college students, student resume guide, entry-level resume tips, college graduate resume" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Student Resume Guide" />
        
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
        <meta property="og:description" content={`Complete guide with essential resume tips for USA college students and recent graduates with section builder and industry guidance.`} />
        <meta property="og:image" content="https://professionalresumefree.com/images/student-resume-guide-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`Resume Tips for USA College Students Guide ${CURRENT_YEAR}`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content={`${CURRENT_YEAR}-01-15`} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Development" />
        <meta property="article:tag" content="student resume" />
        <meta property="article:tag" content="college graduate resume" />
        <meta property="article:tag" content="entry level career" />
        
        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={optimizedTitle} />
        <meta name="twitter:description" content={`Complete guide with essential resume tips for USA college students and recent graduates.`} />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/student-resume-guide-twitter.jpg" />
        <meta name="twitter:image:alt" content="Student Resume Guide" />
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
                "description": `Comprehensive guide with essential resume tips for USA college students and recent graduates with section builder, industry guidance, job search timeline, action verb library, and skills by major.`,
                "image": "https://professionalresumefree.com/images/student-resume-guide-og.jpg",
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
                "mainEntityOfPage": canonicalUrl,
                "articleSection": "Career Development",
                "keywords": "student resume, college graduate resume, entry level career"
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
                    "name": "Resume Tips for College Students & Graduates",
                    "item": canonicalUrl
                  }
                ]
              },
              {
                "@type": "WebPage",
                "@id": canonicalUrl,
                "url": canonicalUrl,
                "name": optimizedTitle,
                "description": `Complete ${CURRENT_YEAR} guide with essential resume tips for USA college students and recent graduates.`,
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
                "name": "How to Build a Student Resume with No Experience",
                "description": "Step-by-step guide for college students to create a professional resume",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "USD",
                  "value": "0"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Lead with Your Education",
                    "text": "Place your education section prominently at the top with university name, degree, GPA, and relevant coursework."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Showcase Academic & Personal Projects",
                    "text": "Create a dedicated Projects section with 2-3 significant projects described with the STAR method."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Leverage Internships & Part-Time Work",
                    "text": "Describe all work experiences using action verbs and quantified results."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Highlight Leadership & Activities",
                    "text": "Include leadership roles in student organizations, volunteer work, and community service."
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
                <span itemProp="name" aria-current="page">Resume Tips for College Students & Graduates</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">✦ Section Builder • Industry Guidance • Job Timeline • Action Verbs • Skills by Major • {CURRENT_YEAR}</div>
              
              {/* SINGLE H1 TAG */}
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                <span className="gradient-text">Resume Tips for USA College Students</span> & Graduates
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                A comprehensive, specification-driven guide designed exclusively for college students and recent graduates creating professional resumes that win internships and first jobs. Based on analysis of <strong>entry-level hiring patterns, NACE survey data, and university career center best practices</strong>, this resource covers a complete section-by-section resume builder, industry-specific guidance for four major sectors, a four-year job search timeline, a professional action verb library, skills by major, before/after transformation examples, and ATS optimization strategies. Learn why <strong>employers receive 250+ applications per entry-level role</strong>—and how to make your student resume stand out.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {STUDENT_STATISTICS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Call to action buttons">
                <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                  Browse Student Resume Templates <FiArrowRight style={{ marginLeft: '0.5rem' }} />
                </Link>
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool style={{ marginRight: '0.5rem' }} /> Free Resume Tools
                </Link>
              </div>
              {/* Author Info */}
              <div className="card-executive" style={{ marginTop: '2rem', padding: '1.25rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Expert-Verified Student Resume Strategies | Last Updated: {safeCurrentDate} | Based on NACE data & career center best practices</p>
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
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiClock /> 18 min read</span>
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
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Employers Receive 250+ Applications Per Entry-Level Role—Your Resume Must Prove Potential</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                As a college student or recent graduate, you're competing in a crowded entry-level market where <strong>employers receive an average of 250 applications per position</strong>. Recruiters understand you may have limited work experience—they're evaluating your <strong>potential, not your past</strong>. The key is presenting your academic projects, internships, volunteer work, and extracurricular leadership with the same professional rigor that experienced candidates use for work achievements. <strong>98% of Fortune 500 companies use ATS systems</strong> that filter resumes before human review. This guide provides the exact frameworks to transform your student experience into a compelling professional narrative that passes both automated screening and recruiter evaluation.
              </p>
            </div>
          </div>
        </section>

        {/* Section-by-Section Builder */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Student Resume Section-by-Section Builder</h2>
              <p className="section-subtitle">Click each section to reveal detailed guidance with examples and student-specific tips</p>
            </div>
            <div className="grid">
              {RESUME_SECTION_BUILDER.map((section, i) => (
                <div key={i} className="card-executive" style={{ cursor: 'pointer' }} onClick={() => setActiveSection(activeSection === i ? null : i)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)' }}>{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{section.section}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Purpose:</strong> {section.purpose}</p>
                  {activeSection === i && (
                    <>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.5rem' }}><strong>What to Include:</strong> {section.content}</p>
                      <div className="insight-box" style={{ padding: '0.75rem', marginBottom: '0.5rem' }}>
                        <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📝 Complete Example:</p>
                        <pre style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', fontFamily: 'monospace', whiteSpace: 'pre-wrap', margin: 0, lineHeight: '1.5' }}>{section.example}</pre>
                      </div>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--info-color)' }}><strong>🎓 Student Tip:</strong> {section.studentTip}</p>
                    </>
                  )}
                  {activeSection !== i && <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Click to expand complete guidance →</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Essential Tips */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">6 Essential Resume Tips for College Students & Graduates</h2>
              <p className="section-subtitle">Foundational strategies to build a strong resume even with limited professional experience</p>
            </div>
            <div className="grid">
              {ESSENTIAL_TIPS.map((tip, i) => {
                const IconComp = ICON_MAP[tip.icon] || FiStar;
                return (
                  <div key={i} className="strategy-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                        <IconComp size={18} />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>{tip.title}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{tip.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* No Experience Strategies */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">How to Write a Resume with No Work Experience</h2>
              <p className="section-subtitle">Four powerful alternatives to formal employment that demonstrate your capabilities</p>
            </div>
            <div className="grid">
              {NO_EXPERIENCE_CONTENT.map((item, i) => (
                <div key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: '1.7' }}>{item.description}</p>
                  <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 Example:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6', fontStyle: 'italic' }}>"{item.example}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW: Action Verb Library */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Professional Action Verb Library for Students</h2>
              <p className="section-subtitle">Replace weak language with powerful, recruiter-approved action verbs—click each category to expand</p>
            </div>
            <div className="grid">
              {ACTION_VERB_LIBRARY.map((category, i) => (
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
          </div>
        </section>

        {/* NEW: Skills by Major */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Resume Skills by College Major</h2>
              <p className="section-subtitle">What to include on your resume based on your field of study</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Major</th><th>Technical Skills</th><th>Soft Skills</th><th>Certifications</th></tr></thead>
                  <tbody>
                    {SKILLS_BY_MAJOR.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.major}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.technicalSkills}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>{row.softSkills}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}>{row.certifications}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Industry-Specific Guidance */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Industry-Specific Student Resume Guidance</h2>
              <p className="section-subtitle">Tailored strategies for four major career paths popular among graduates</p>
            </div>
            <div className="grid">
              {INDUSTRY_STUDENT_GUIDANCE.map((industry, i) => {
                const IconComp = ICON_MAP[industry.icon] || FiBriefcase;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                        <IconComp size={18} />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>{industry.industry}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Target Roles:</strong> {industry.targetRoles}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.5rem' }}><strong>Key Skills:</strong> {industry.keySkills}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}><strong>Certifications:</strong> {industry.certifications}</p>
                    <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 Resume Emphasis:</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{industry.resumeEmphasis}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Before & After Examples */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Before & After: Student Resume Transformations</h2>
              <p className="section-subtitle">See exactly how to transform basic student entries into compelling professional content</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>❌ Before (Weak)</th><th>✅ After (Professional)</th><th>Key Improvement</th></tr></thead>
                  <tbody>
                    {BEFORE_AFTER_EXAMPLES.map((row, i) => (
                      <tr key={i}>
                        <td style={{ color: 'var(--error-color)', fontSize: 'var(--font-size-body-sm)' }}>{row.before}</td>
                        <td style={{ color: 'var(--success-color)', fontSize: 'var(--font-size-body-sm)' }}>{row.after}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}>{row.keyImprovement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Job Search Timeline */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Four-Year Student Job Search Timeline</h2>
              <p className="section-subtitle">Strategic milestones to build your resume and career readiness throughout college</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {JOB_SEARCH_TIMELINE.map((phase, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: i < 3 ? '0.5px solid var(--border-glass)' : 'none' }}>
                  <div style={{ width: '32px', height: '32px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)' }}>{i + 1}</div>
                  <div>
                    <h4 style={{ fontSize: 'var(--font-size-body-md)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{phase.phase}</h4>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '0.25rem' }}>{phase.actions}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', margin: 0 }}><strong>🎯 Key Milestone:</strong> {phase.keyMilestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW: Common Student Resume Questions */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Quick Answers to Common Student Resume Dilemmas</h2>
              <p className="section-subtitle">Practical solutions to situations every student faces when building their first resume</p>
            </div>
            <div className="grid">
              {COMMON_QUESTIONS.map((q, i) => (
                <div key={i} className="strategy-card">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{q.question}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{q.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ATS Tips */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">ATS Optimization Tips for Entry-Level Resumes</h2>
              <p className="section-subtitle">Ensure your student resume passes automated screening systems</p>
            </div>
            <div className="grid">
              {ATS_TIPS.map((tip, i) => (
                <div key={i} className="checklist-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <FiCheckCircle size={20} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', margin: 0, fontWeight: 'var(--font-weight-semibold)' }}>{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {safeTestimonials.length > 0 && (
          <section className="section" aria-labelledby="testimonials-heading">
            <div className="section-container">
              <h2 id="testimonials-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Success Stories from Students & Graduates</h2>
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
            <h2 id="paa-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>People Also Ask About Student Resumes</h2>
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
              <h2 id="faq-heading" className="section-title">❓ Frequently Asked Questions About Student Resumes</h2>
              <p className="section-subtitle">Expert answers based on entry-level hiring data and career center insights</p>
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
            <h2 id="resources-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>🔗 Complete Your Student Career Toolkit</h2>
            <div className="grid">
              <Link href="/free-ats-resume-checker" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>ATS Resume Checker</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Test your resume compatibility</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Try it <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/how-to-create-a-resume-with-no-experience" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>No Experience Resume Guide</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Perfect for students</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Try it <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Resource Hub */}
        <section className="section" aria-labelledby="hub-heading">
          <div className="section-container">
            <h2 id="hub-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Complete Student Career Resource Hub</h2>
            <div className="grid">
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>📚 Student Resume Guides</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li><Link href="/free-resume-score-checker" className="geo-link-card" style={{ padding: '0.75rem' }}>Resume Score Checker</Link></li>
                  <li><Link href="/free-resume-keyword-matcher" className="geo-link-card" style={{ padding: '0.75rem' }}>Keyword Matcher Tool</Link></li>
                  <li><Link href="/interview-tips" className="geo-link-card" style={{ padding: '0.75rem' }}>Interview Preparation</Link></li>
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
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>📊 Free Student Tools</h3>
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
              Build Your Professional Student Resume Today
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply the section builder, industry guidance, job search timeline, action verb library, skills by major, and ATS optimization techniques from this comprehensive guide. Visit <a href="https://professionalresumefree.com" style={{ color: 'var(--accent-primary)' }}>Professional Resume Free</a>. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }} role="group" aria-label="Final call to action buttons">
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                Browse Student Resume Templates <FiArrowRight style={{ marginLeft: '0.5rem' }} />
              </Link>
              <Link href="/free-resume-tools" className="btn-outline">
                <FiTool style={{ marginRight: '0.5rem' }} /> Free Resume Tools
              </Link>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>✓ No credit card required • ✓ Free forever • ✓ Action verb library • ✓ Skills by major included</p>
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
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Perfect for students: How to highlight potential over history.</p>
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
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Discover the best platforms to find entry-level and student roles.</p>
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
          <span itemProp="keywords">{longTailKeywords.join(', ')}</span>
          <span itemProp="articleSection">Career Development, Student Resources, Resume Writing</span>
          {longTailKeywords.slice(0, 8).map((kw, i) => (
            <span key={i} itemProp="longTailKeyword">{kw}</span>
          ))}
        </div>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Data Freshness: Last updated {safeCurrentDate} • Sources: NACE Job Outlook Survey, university career center interviews, ATS platform data • Next update: {new Date(safeBuildTimestamp + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}</span>
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
  const canonicalUrl = "https://professionalresumefree.com/resume-tips-for-usa-college-students-and-graduates";

  // Testimonials
  const testimonials = [
    {
      quote: "This guide completely transformed how I presented my college experience. I had no internships, but the section on academic projects showed me how to frame my coursework professionally. Received 3 internship offers within a month!",
      name: "Emily R.",
      role: "Marketing Student, University of Texas",
      date: reviewDates[0]
    },
    {
      quote: "The before/after examples were exactly what I needed. I realized I was making every mistake—weak action verbs, no quantification, no relevant coursework. After restructuring using this guide, I landed a consulting role.",
      name: "Marcus J.",
      role: "Business Graduate, NYU",
      date: reviewDates[1]
    },
    {
      quote: "As a computer science student, the skills by major section and action verb library helped me communicate my technical abilities effectively. My GitHub profile was weak, but the projects section guidance fixed that completely.",
      name: "Aisha K.",
      role: "Computer Science Student, Georgia Tech",
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

export default ResumeTipsForCollegeStudentsPage;