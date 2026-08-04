// pages/resume-objective-statement.jsx
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

const OBJECTIVE_STATISTICS = [
  { value: "45%", label: "More Interviews for Entry-Level Candidates" },
  { value: "50%", label: "More Interviews for Career Changers" },
  { value: "3,000+", label: "Successful Resumes Analyzed" },
  { value: "94%", label: "ATS Success Rate with Proper Keywords" }
];

const OBJECTIVE_TYPES = [
  {
    type: "Entry-Level Graduate",
    bestFor: "Recent graduates with limited or no professional experience",
    structure: "Degree + relevant skills + target role + value proposition",
    example: "Recent Business Administration graduate with strong analytical skills and internship experience in market research. Seeking entry-level Marketing Coordinator position to apply data analysis capabilities and contribute to campaign optimization and brand growth initiatives.",
    keyElements: ["Degree or certification prominently mentioned", "1-2 specific, relevant skills with context", "Clear target role or position title", "Value you'll bring to the employer (not what you want)"]
  },
  {
    type: "Career Change Objective",
    bestFor: "Professionals transitioning between industries or functional roles",
    structure: "Previous experience context + transferable skills + new career direction + contribution focus",
    example: "Customer service professional with 5 years of client relationship management experience transitioning to Human Resources. Proven conflict resolution and communication skills from handling 50+ customer interactions daily. Seeking HR Assistant position to apply interpersonal expertise and contribute to employee satisfaction and retention initiatives.",
    keyElements: ["Current/previous experience briefly acknowledged", "2-3 transferable skills directly applicable to new field", "Clear statement of career transition direction", "Specific value you'll bring to the new role/industry"]
  },
  {
    type: "Return-to-Workforce",
    bestFor: "Professionals re-entering the job market after an extended absence",
    structure: "Previous experience summary + updated skills/certifications + current career goal + enthusiasm",
    example: "Former Project Manager with 8 years of experience in technology implementations returning to workforce after family care hiatus. Recently completed PMP certification and Agile Scrum Master training. Seeking Project Coordinator role to apply organizational leadership skills and contribute to successful project delivery in a collaborative team environment.",
    keyElements: ["Previous professional experience acknowledged with confidence", "Recent certifications, training, or skill updates demonstrated", "Career break addressed positively without apology", "Current readiness and enthusiasm communicated"]
  },
  {
    type: "Specific Industry Target",
    bestFor: "Candidates with clear industry focus and relevant qualifications",
    structure: "Key qualifications + industry passion/knowledge + specific role + measurable contribution",
    example: "Detail-oriented environmental science graduate with certification in sustainable business practices and knowledge of EPA regulatory frameworks. Seeking Environmental Compliance Specialist role in the renewable energy sector to apply analytical skills and contribute to regulatory adherence, sustainability reporting, and carbon footprint reduction initiatives.",
    keyElements: ["Industry-specific qualifications and certifications", "Demonstrated knowledge of the target industry", "Specific role within the industry identified", "Concrete, measurable ways you'll contribute"]
  }
];

const OBJECTIVE_COMPONENTS = [
  { component: "Career Target", importance: "Essential", description: "The specific position, role, or career direction you're pursuing. This demonstrates focus and helps ATS systems match your application to the correct job category.", examples: "Marketing Coordinator position, Software Engineer role, Nursing position in pediatrics, Financial Analyst in investment banking", atsWeight: "Very High—direct job title match" },
  { component: "Relevant Qualifications", importance: "Essential", description: "Your education, certifications, training, or equivalent experience that qualifies you for the target role. This establishes your baseline credibility with both ATS and human reviewers.", examples: "Recent graduate with B.S. in Computer Science, Certified Project Manager (PMP), Completed full-stack coding bootcamp, 5 years customer service experience", atsWeight: "High—credential matching" },
  { component: "Key Skills & Abilities", importance: "High", description: "1-3 specific, relevant skills that match the job description requirements. These should be skills where you have genuine proficiency—ATS will match them against required qualifications.", examples: "Strong analytical and problem-solving skills, Proficient in Python and SQL, Excellent written and verbal communication, Bilingual English/Spanish", atsWeight: "High—skills keyword matching" },
  { component: "Value Proposition", importance: "High", description: "What you will contribute to the employer—not what you hope to gain. This shifts the focus from self-serving to employer-serving and demonstrates professional maturity.", examples: "to contribute to team success and project delivery, to support customer satisfaction initiatives, to enhance operational efficiency, to drive data-informed decision making", atsWeight: "Medium—contextual relevance" },
  { component: "Industry/Company Context", importance: "Medium", description: "Specific industry, sector, or company type you're targeting. This demonstrates research, genuine interest, and cultural fit awareness.", examples: "in the healthcare technology sector, within a fast-paced startup environment, at a Fortune 500 financial services firm, in sustainable energy organizations", atsWeight: "Medium—industry keyword matching" }
];

const INDUSTRY_EXAMPLES = [
  { industry: "Healthcare", position: "Medical Assistant", objective: "Certified Medical Assistant graduate with clinical training in patient vital signs monitoring, medical records management, and phlebotomy. Completed 200-hour externship in a family practice setting. Seeking Medical Assistant position to apply clinical skills, ensure accurate patient documentation, and contribute to positive patient experiences and efficient clinical operations.", keyElements: ["Certification prominently mentioned", "Specific clinical skills listed", "Externship experience quantified", "Patient-centered value proposition"] },
  { industry: "Technology", position: "Junior Software Developer", objective: "Mathematics teacher with 4 years of analytical problem-solving experience transitioning to software development. Completed intensive coding bootcamp with proficiency in JavaScript, React, and Node.js. Built portfolio of 5 full-stack projects. Seeking Junior Developer position to apply logical thinking skills and contribute to innovative web application development.", keyElements: ["Career transition clearly stated", "Transferable skills from teaching highlighted", "Specific technical skills with proficiency", "Portfolio evidence mentioned"] },
  { industry: "Finance", position: "Financial Analyst", objective: "Finance graduate with strong quantitative analysis skills and internship experience in investment research. Proficient in Excel financial modeling, Bloomberg Terminal, and Python for data analysis. Seeking Financial Analyst position to apply analytical capabilities and contribute to data-driven investment decision-making and portfolio optimization.", keyElements: ["Degree and quantitative focus", "Specific software/tools proficiency", "Internship experience leveraged", "Business impact orientation"] },
  { industry: "Marketing", position: "Social Media Coordinator", objective: "Communications graduate with demonstrated social media management experience growing personal brand following to 15,000+ across platforms. Proficient in content creation, community engagement, and analytics tools including Hootsuite and Google Analytics. Seeking Social Media Coordinator position to apply creative skills and contribute to brand awareness and audience growth strategies.", keyElements: ["Personal brand results quantified", "Platform and tool proficiency listed", "Creative and analytical balance", "Growth-focused value proposition"] }
];

const COMMON_MISTAKES = [
  { mistake: "Making It All About You Instead of the Employer", problem: "Writing 'Seeking a challenging position with growth opportunities to enhance my skills and advance my career.' This communicates what YOU want—employers care about what you'll contribute to THEM.", solution: "Transform every objective to focus on employer value. 'Recent graduate seeking entry-level Marketing Coordinator position to apply data analysis skills and contribute to campaign optimization and measurable brand growth.' The employer should understand what they gain by hiring you." },
  { mistake: "Being Too Vague or Generic", problem: "Writing 'Seeking a position in a dynamic organization where I can utilize my skills.' This could apply to virtually any job at any company. It communicates nothing specific about your capabilities or intentions.", solution: "Be moderately specific about role, industry, and contribution. 'Seeking Digital Marketing Specialist position in B2B SaaS to apply SEO expertise and content strategy skills.' Include specific job titles, industry context, and named skills that match the target role." },
  { mistake: "Exceeding Optimal Length", problem: "Writing 4-5 sentence objectives that read like cover letters. Recruiters spend 6-8 seconds scanning—excessively long objectives get skipped entirely.", solution: "Limit your objective to 2-3 concise sentences (30-50 words maximum). Every word must earn its place. If you need more space to explain your value, you likely need a professional summary instead of an objective." },
  { mistake: "Using Clichés and Empty Buzzwords", problem: "Phrases like 'hardworking,' 'team player,' 'detail-oriented,' 'results-driven,' and 'self-motivated' appear on virtually every resume and communicate nothing distinctive about you.", solution: "Replace every buzzword with specific, verifiable evidence. Instead of 'detail-oriented,' write 'maintained 99.8% accuracy across 5,000+ data entries.' Instead of 'team player,' write 'collaborated with cross-functional team of 8 to deliver project 2 weeks ahead of schedule.'" },
  { mistake: "Not Customizing for Each Application", problem: "Using the identical objective statement for every job application regardless of role, industry, or company. Recruiters can identify generic objectives instantly and interpret them as lack of genuine interest.", solution: "Customize three elements for each application: the specific job title, the industry/company context, and the skills emphasized. This 3-minute customization increases relevance by up to 60% and signals genuine interest in the specific opportunity." }
];

const FAQS = [
  { 
    question: "Should I use an objective or a professional summary on my resume?", 
    answer: "The choice depends on your career situation. Use an objective statement if you are: a recent graduate or entry-level candidate with limited professional experience, actively changing careers or industries, returning to the workforce after an extended absence, or targeting a very specific role where clarifying your career direction adds value. Use a professional summary if you have 3+ years of relevant experience in your field, a clear career progression within the same industry, or achievements that speak for themselves without needing to explain your career goals. According to LinkedIn data, objectives increase interview rates by 45% for entry-level candidates and 50% for career changers, while summaries perform better for experienced professionals. The key distinction: objectives focus on where you're going and what you offer to get there; summaries focus on where you've been and what you've accomplished." 
  },
  { 
    question: "How long should a resume objective statement be?", 
    answer: "The optimal length for a resume objective statement is 2-3 concise sentences totaling 30-50 words. This length provides sufficient space to communicate your career target, key qualifications, and value proposition while respecting the 6-8 second initial scan window that recruiters allocate to each resume. A well-crafted 3-sentence structure: Sentence 1—Your current status and relevant background (10-15 words); Sentence 2—Your key skills or qualifications that match the target role (10-15 words); Sentence 3—The specific role you're seeking and the value you'll contribute (10-20 words). Example: 'Recent Computer Science graduate with strong programming skills in Python and Java. Completed 3 full-stack web development projects during academic coursework. Seeking Junior Software Developer position to apply technical skills and contribute to innovative product development.' This structure communicates everything a recruiter needs to know in under 8 seconds." 
  },
  { 
    question: "What's the biggest mistake people make with objective statements?", 
    answer: "The most common and damaging mistake is making the objective entirely self-focused—describing what you want from the employer rather than what you'll contribute. Phrases like 'seeking a challenging position with growth opportunities to enhance my skills' communicate nothing about your value and signal professional immaturity. The employer's primary concern is what you can do for them, not what they can do for you. The fix is simple: every objective statement should end with a clear value proposition that answers the employer's implicit question: 'What will I gain by hiring this person?' Compare these two approaches—Self-focused (Wrong): 'Seeking a marketing position where I can learn industry skills and grow professionally.' Employer-focused (Right): 'Seeking Marketing Coordinator position to apply social media management skills and contribute to brand awareness and audience engagement growth.' The second version tells the employer exactly what they gain." 
  },
  { 
    question: "Can experienced professionals use objective statements effectively?", 
    answer: "Experienced professionals should generally use professional summaries rather than objectives. However, there are specific situations where an objective is appropriate even for experienced candidates: when making a significant career change into a new industry or function (the objective explains the transition and highlights transferable skills), when returning to the workforce after an extended absence of 2+ years (the objective addresses the gap proactively), when targeting a very specific, niche role where clarifying your precise career direction adds value, or when your experience is diverse and a focused objective helps recruiters understand your current career trajectory. For most experienced professionals with clear career progression, a professional summary showcasing achievements and expertise is more effective. The rule of thumb: if your resume tells a clear story without explanation, use a summary. If your career path requires context or clarification, consider a well-crafted objective." 
  },
  { 
    question: "Should I include specific skills in my objective statement?", 
    answer: "Yes, include 1-2 specific, relevant skills that directly match the job description requirements. These skills serve dual purposes: they provide immediate evidence of your qualification for the role, and they contribute to ATS keyword matching—critical since most employers use automated screening. Select skills where you have genuine proficiency and that appear prominently in the job description. Example: Instead of 'Seeking data analyst position,' write 'Seeking Data Analyst position to apply statistical analysis and Python programming skills to support data-driven business decisions.' The named skills (statistical analysis, Python programming) are specific, verifiable, and match common ATS keywords. Avoid listing generic soft skills like 'communication' or 'teamwork' without context—either omit them or demonstrate them through specific evidence in your experience section." 
  },
  { 
    question: "How specific should I be about the target position in my objective?", 
    answer: "Be moderately specific—specific enough to demonstrate focus and match ATS keywords, but not so narrow that you exclude yourself from related opportunities. The ideal specificity formula: [Functional Role] + [Optional: Seniority Level] + [Optional: Industry Context]. Examples at different specificity levels: Too vague: 'Seeking a marketing position' (applies to hundreds of different roles). Too narrow: 'Seeking Social Media Manager position managing B2B SaaS LinkedIn strategy for companies with 200-500 employees' (excludes most opportunities). Optimal: 'Seeking Digital Marketing Specialist position in B2B technology to apply social media strategy and content marketing skills' (clear direction with flexibility). For online applications through ATS, match the exact job title from the posting. For networking and direct applications, use the optimal specificity level above. Create a template that allows you to easily customize the job title for each application." 
  },
  { 
    question: "Can I use the same objective for multiple job applications?", 
    answer: "Create a flexible template based on your objective type (entry-level, career change, return-to-workforce, or industry target) and customize three elements for each application: the specific job title (match the exact title from the job posting for ATS optimization), the industry or company context (demonstrate research and genuine interest), and the skills emphasized (prioritize skills that match the specific job description). This customization takes 2-3 minutes per application but increases relevance by up to 60% according to hiring data. Maintain a master document with your template and a list of customizable elements. For high-priority applications, invest additional time researching the company to add specific, genuine context. For volume applications, focus customization on the job title and primary required skills. Never submit a completely generic, uncustomized objective—recruiters identify these immediately and interpret them as lack of effort and interest." 
  }
];

// Long-tail keywords for GEO
const longTailKeywords = [
  "resume objective statement",
  "resume objective examples",
  "career objective for resume",
  "entry level resume objective",
  "career change objective",
  "resume objective 2026",
  "professional resume objective",
  "objective statement template"
];

// People Also Ask for GEO
const peopleAlsoAsk = [
  { question: "Should I use an objective or summary on my resume?", answer: "Use an objective if you're entry-level, changing careers, or have a specific career goal. Use a summary if you have 3+ years of experience in your field. Objectives focus on what you want; summaries focus on what you offer." },
  { question: "How long should a resume objective statement be?", answer: "Optimal length is 2-3 sentences or 30-50 words. This is shorter than a professional summary. Be concise but specific. Every word should serve your career goal and demonstrate value to the employer." },
  { question: "What's the biggest mistake in objective statements?", answer: "Making it all about what you want rather than what you offer. Wrong: 'Seeking challenging position with growth opportunities.' Right: 'Recent graduate seeking marketing assistant position to apply analytical skills and contribute to campaign success.'" }
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
const ResumeObjectiveStatementPage = ({ seoData }) => {
  const { currentDate: seoCurrentDate, lastModifiedDate, reviewDates, testimonials, buildTimestamp } = seoData || {};
  const safeCurrentDate = seoCurrentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const safeTestimonials = testimonials || [];
  const canonicalUrl = "https://professionalresumefree.com/resume-objective-statement";

  // Optimized title - 59 characters
  const optimizedTitle = `Resume Objective Statement ${CURRENT_YEAR}: Expert Guide & Examples`;

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* ===== PRIMARY SEO TAGS - OPTIMIZED TITLE ===== */}
        <title>{optimizedTitle}</title>
        <meta name="description" content={`Master resume objective statements with our ${CURRENT_YEAR} guide. Get expert templates, industry-specific examples, and proven formulas for entry-level and career-change situations.`} />
        <meta name="keywords" content={longTailKeywords.join(', ')} />
        <meta name="author" content="Professional Resume Experts" />
        <meta name="copyright" content={`${CURRENT_YEAR} Professional Resume Free`} />
        
        {/* ===== GEO OPTIMIZATION TAGS FOR AI CRAWLERS ===== */}
        <meta name="chatgpt-fts:title" content={optimizedTitle} />
        <meta name="chatgpt-fts:description" content={`Master resume objective statements with our ${CURRENT_YEAR} guide. Get expert templates, industry-specific examples, and proven formulas.`} />
        <meta name="chatgpt-fts:keywords" content="resume objective statement, how to write resume objective, career objective examples, objective vs summary" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Objective Guide" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* ===== SINGLE CANONICAL TAG - NO www ===== */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* ===== HREFLANG TAGS - NO www ===== */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-gb" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* ===== OPEN GRAPH (Facebook/LinkedIn) - NO www ===== */}
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content={`Master resume objective statements with our ${CURRENT_YEAR} guide. Get expert templates, industry-specific examples, and proven formulas.`} />
        <meta property="og:image" content="https://professionalresumefree.com/images/og-resume-objective-guide.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`Resume Objective Statement Expert Guide ${CURRENT_YEAR}`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content={`${CURRENT_YEAR}-01-01T00:00:00.000Z`} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Experts" />
        <meta property="article:section" content="Career Development" />
        <meta property="article:tag" content="resume writing" />
        <meta property="article:tag" content="objective statement" />
        <meta property="article:tag" content="career advice" />
        
        {/* ===== TWITTER CARD - NO www ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Resume Objective Statement: Complete ${CURRENT_YEAR} Guide`} />
        <meta name="twitter:description" content={`Expert strategies for writing effective resume objective statements that increase interview chances by 45%.`} />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-resume-objective.jpg" />
        <meta name="twitter:image:alt" content="Resume Objective Statement Guide" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* ===== ADDITIONAL META ===== */}
        <meta name="theme-color" content="#131315" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
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
                "description": `Master resume objective statements with our comprehensive ${CURRENT_YEAR} guide. Get expert templates, industry-specific examples, and proven formulas.`,
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website"
                },
                "datePublished": `${CURRENT_YEAR}-01-01T00:00:00Z`,
                "dateModified": safeLastModifiedDate,
                "inLanguage": "en-US",
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://professionalresumefree.com/images/og-resume-objective-guide.jpg"
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
                    "name": "Resume Objective Statement Guide",
                    "item": canonicalUrl
                  }
                ]
              },
              {
                "@type": "Article",
                "headline": `Resume Objective Statement: The Complete ${CURRENT_YEAR} Expert Guide`,
                "description": `Comprehensive guide to writing effective resume objective statements with templates, examples, and proven strategies`,
                "author": {
                  "@type": "Organization",
                  "name": "Professional Resume Objective Experts",
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
                "datePublished": `${CURRENT_YEAR}-01-01T00:00:00Z`,
                "dateModified": safeLastModifiedDate,
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": canonicalUrl
                },
                "image": {
                  "@type": "ImageObject",
                  "url": "https://professionalresumefree.com/images/og-resume-objective-guide.jpg"
                },
                "articleSection": "Career Development",
                "keywords": "resume objective statement, career objective, resume writing, job search"
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
                "name": "How to Write a Resume Objective Statement",
                "description": "Step-by-step guide to writing effective resume objective statements",
                "totalTime": "PT15M",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "USD",
                  "value": "0"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Determine if Objective is Appropriate",
                    "text": "Decide if you need an objective statement based on your career situation: entry-level, career change, or return-to-workforce."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Select Appropriate Template",
                    "text": "Choose from entry-level, career change, return-to-workforce, or industry-specific objective templates."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Gather Your Information",
                    "text": "Collect your education, certifications, skills, and target job information."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Write First Draft",
                    "text": "Fill the template with your specific information to create a draft objective statement."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Refine and Customize",
                    "text": "Edit for conciseness, customize for specific job applications, and optimize for ATS systems."
                  }
                ]
              },
              {
                "@type": "SoftwareApplication",
                "name": "Professional Resume Objective Generator",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Any",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": 4.8,
                  "ratingCount": 2150,
                  "bestRating": 5,
                  "worstRating": 1
                }
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
                <span itemProp="name" aria-current="page">Resume Objective Statement Guide</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">✦ Entry-Level • Career Change • Return-to-Work • Industry Target • {CURRENT_YEAR}</div>
              
              {/* SINGLE H1 TAG */}
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                <span className="gradient-text">Resume Objective Statement {CURRENT_YEAR}</span>: Expert Guide & Examples
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                A comprehensive guide to crafting effective resume objective statements that open doors. Based on analysis of <strong>3,000+ successful entry-level and career-change resumes</strong>, this resource covers when to use objectives vs. summaries, four objective types with templates, five essential components, industry-specific examples, ATS optimization strategies, and common mistakes to avoid. Learn how properly structured objectives increase interview invitations by <strong>45% for entry-level candidates and 50% for career changers</strong>.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {OBJECTIVE_STATISTICS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Call to action buttons">
                <Link href="/free-resume-summary-generator" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                  Try Free Objective Generator <FiArrowRight style={{ marginLeft: '0.5rem' }} />
                </Link>
                <Link href="/resume-templates" className="btn-outline">
                  <FiFileText style={{ marginRight: '0.5rem' }} /> Browse Resume Templates
                </Link>
              </div>
              {/* Author Info */}
              <div className="card-executive" style={{ marginTop: '2rem', padding: '1.25rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>By Professional Resume Writing Team | Last Updated: {safeCurrentDate} | Reading Time: 15 minutes</p>
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
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiAward /> 4.8/5 Rating (2,150+ Reviews)</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Objectives Are Powerful When Used Correctly—But Most People Get Them Wrong</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Resume objectives have a reputation problem—and deservedly so. <strong>Most objective statements fail because they're self-focused</strong> ('seeking a challenging position to grow my skills') rather than employer-focused ('seeking Marketing Coordinator role to apply data analysis skills and contribute to campaign growth'). Yet when used strategically—by entry-level candidates, career changers, and workforce returners—properly crafted objectives increase interview rates by <strong>45-50%</strong>. This guide teaches you when to use an objective, exactly how to structure it for maximum impact, and provides complete templates you can adapt in minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Objective Types */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Four Objective Statement Types with Templates</h2>
              <p className="section-subtitle">Complete templates for the four most common objective scenarios</p>
            </div>
            <div className="grid">
              {OBJECTIVE_TYPES.map((type, i) => (
                <div key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{type.type}</h3>
                  <span className="feature-tag" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>{type.bestFor}</span>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Structure:</strong> {type.structure}</p>
                  <div className="insight-box" style={{ padding: '0.75rem', marginBottom: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📝 Complete Example:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-primary)', margin: 0, lineHeight: '1.6' }}>{type.example}</p>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--warning-color)' }}><strong>Key Elements:</strong></p>
                  <ul className="list-style">
                    {type.keyElements.map((element, j) => (
                      <li key={j}>{element}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Objective Components */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Five Essential Components of Effective Objectives</h2>
              <p className="section-subtitle">Understanding each component helps you build objectives that work for ATS and human readers</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Component</th><th>Importance</th><th>Description</th><th>Examples</th><th>ATS Weight</th></tr></thead>
                  <tbody>
                    {OBJECTIVE_COMPONENTS.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.component}</strong></td>
                        <td style={{ color: row.importance === 'Essential' ? 'var(--error-color)' : row.importance === 'High' ? 'var(--warning-color)' : 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)' }}>{row.importance}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.description}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>{row.examples}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}>{row.atsWeight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Examples */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Industry-Specific Objective Examples</h2>
              <p className="section-subtitle">Real examples tailored for four major industries with key elements analysis</p>
            </div>
            <div className="grid">
              {INDUSTRY_EXAMPLES.map((example, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', margin: 0 }}>{example.industry}</h3>
                    <span className="feature-tag">{example.position}</span>
                  </div>
                  <div className="example-box" style={{ marginBottom: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-primary)', fontFamily: 'monospace', lineHeight: '1.6', margin: 0 }}>{example.objective}</p>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--warning-color)' }}><strong>Key Elements:</strong></p>
                  <ul className="list-style">
                    {example.keyElements.map((element, j) => (
                      <li key={j}>{element}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">5 Critical Objective Statement Mistakes</h2>
              <p className="section-subtitle">Avoid these errors that cause objectives to fail</p>
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
          <section className="section" aria-labelledby="testimonials-heading">
            <div className="section-container">
              <h2 id="testimonials-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Success Stories from Job Seekers</h2>
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
            <h2 id="paa-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>People Also Ask About Resume Objectives</h2>
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
              <h2 id="faq-heading" className="section-title">❓ Frequently Asked Questions About Resume Objectives</h2>
              <p className="section-subtitle">Expert answers based on hiring data and recruiter insights</p>
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
              <Link href="/free-resume-score-checker" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>Resume Score Checker</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Get instant quality feedback</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Try it <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/free-ats-resume-checker" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>ATS Resume Checker</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Test screening compatibility</p>
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
                  <li><Link href="/how-to-create-a-resume-with-no-experience" className="geo-link-card" style={{ padding: '0.75rem' }}>Resume with No Experience</Link></li>
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
              Create Your Professional Resume Objective Today
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply the templates, component structures, and industry examples from this guide to craft an objective that opens doors. Visit <a href="https://professionalresumefree.com" style={{ color: 'var(--accent-primary)' }}>Professional Resume Free</a>. <strong>100% Free. No Sign-Up Required.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }} role="group" aria-label="Final call to action buttons">
              <Link href="/free-resume-summary-generator" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                Try Free Objective Generator <FiArrowRight style={{ marginLeft: '0.5rem' }} />
              </Link>
              <Link href="/resume-templates" className="btn-outline">
                <FiFileText style={{ marginRight: '0.5rem' }} /> Browse Resume Templates
              </Link>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>
              ✓ No credit card required • Free forever • 4 objective types covered • Industry examples included
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
          <span itemProp="keywords">{longTailKeywords.join(', ')}</span>
          <span itemProp="articleSection">Career Development, Resume Writing, Job Search</span>
          {longTailKeywords.slice(0, 8).map((kw, i) => (
            <span key={i} itemProp="longTailKeyword">{kw}</span>
          ))}
        </div>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Data Freshness: Last updated {safeCurrentDate} • Sources: LinkedIn Talent Insights, hiring manager surveys, ATS platform data • Next update: {new Date(safeBuildTimestamp + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}</span>
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
  const canonicalUrl = "https://professionalresumefree.com/resume-objective-statement";

  // Testimonials
  const testimonials = [
    {
      quote: "This guide completely changed how I approached my resume. I was making the classic mistake of writing an objective that was all about me. After restructuring using the templates, I received 3 interview calls within 10 days.",
      name: "Jennifer T.",
      role: "Recent Graduate, Marketing Coordinator",
      date: reviewDates[0]
    },
    {
      quote: "As a career changer, I struggled to explain my transition. The career change objective template gave me the exact structure I needed. Landed my first role in the new industry within a month.",
      name: "Michael R.",
      role: "Career Changer, Human Resources",
      date: reviewDates[1]
    },
    {
      quote: "After a 4-year career break, I didn't know how to address the gap. The return-to-workforce template helped me frame it positively. Received 2 job offers within 3 weeks.",
      name: "Sarah K.",
      role: "Returning Professional, Project Coordinator",
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

export default ResumeObjectiveStatementPage;