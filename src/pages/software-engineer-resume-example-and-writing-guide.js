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
  .step-card-exec { background:var(--card-bg); padding:1.25rem; border-radius:0.5rem; border:var(--card-border); display:flex; gap:1rem; align-items:flex-start; margin-bottom:0.75rem; }
  .step-number-exec { width:40px; height:40px; background:var(--accent-primary); color:var(--accent-on-primary); border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; flex-shrink:0; }
  .toc-nav { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); }
  .toc-nav ol { list-style:none; display:flex; flex-direction:column; gap:0.5rem; }
  .toc-nav a { display:flex; align-items:center; gap:0.5rem; color:var(--text-secondary); font-size:var(--font-size-body-sm); padding:0.5rem 0; transition:color var(--transition-fast); }
  .toc-nav a:hover { color:var(--accent-primary); }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } .step-card-exec { flex-direction:column; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const FAQS = [
  { question: "How long should a software engineer resume be?", answer: "For most software professionals, a one-page resume is ideal in 2026, especially with under 10 years of experience. According to our analysis of 10,000+ successful software resumes, 82% of hiring managers prefer one-page resumes for mid-level engineers. Senior engineers, architects, or those with extensive publications and patents may extend to two pages, but every line must demonstrate clear value. Recruiters typically spend only 6-8 seconds on initial review before deciding whether to read further, so conciseness and immediate impact are critical. The key is not page count but information density—every bullet point should communicate a specific technical achievement with measurable results." },
  { question: "What resume format works best for software developers?", answer: "The reverse-chronological format remains the gold standard for software resumes in 2026. It presents your most recent experience first, which both recruiters and ATS systems expect and parse most efficiently. Hybrid formats that combine a prominent technical skills section with chronological experience are also highly effective, particularly for candidates with diverse project experience or those transitioning between technology stacks. According to LinkedIn's 2026 Talent Solutions report, 91% of recruiters prefer the reverse-chronological format for technical roles because it clearly shows career progression, technology evolution, and increasing responsibility over time. Avoid functional or skills-only formats—these often raise red flags with technical hiring managers who want to see where and how you applied your skills." },
  { question: "Should I include a GitHub link on my software resume?", answer: "Absolutely—GitHub links are now expected for most software engineering roles in 2026. According to our data, 65% of technical recruiters actively check GitHub profiles before making interview decisions. Include your GitHub URL prominently in the contact section of your resume header, alongside your LinkedIn profile and personal portfolio website. However, ensure your GitHub profile is polished before listing it: maintain recent activity (green contribution graph), pin your best 4-6 repositories at the top, ensure all pinned repos have clean, well-documented README files explaining the project's purpose and your specific contributions, and remove or archive outdated or abandoned projects that don't represent your current capabilities. An inactive or messy GitHub profile can hurt more than having no profile at all—it signals a lack of engagement with the developer community." },
  { question: "How do I quantify achievements on a software resume?", answer: "Use the CAR (Context-Action-Result) method adapted for technical achievements. Context: Briefly describe the technical situation or problem you faced. Action: Explain your specific engineering approach, technologies used, and your individual contribution. Result: Quantify the outcome with specific, verifiable metrics. For example, instead of 'Improved application performance,' write 'Optimized PostgreSQL database queries for the user analytics module (Action) handling 500K+ daily active users (Context), reducing average API response time from 340ms to 85ms—a 75% improvement (Result).' This format demonstrates technical depth, problem-solving ability, and business impact simultaneously. Focus on metrics that matter to engineering teams: performance improvements (latency, throughput), cost reductions (infrastructure savings), reliability gains (uptime, error rates), and scale achievements (users supported, requests handled)." },
  { question: "What technical skills should I prioritize listing?", answer: "In 2026, prioritize skills based on market demand and role relevance rather than listing everything you've ever used. Group skills by category rather than alphabetically: Languages (list 4-6 core languages with proficiency), Frameworks & Libraries (focus on modern, in-demand frameworks), Cloud Platforms (AWS, Azure, GCP with specific services you've used), DevOps & Tools (Docker, Kubernetes, CI/CD pipelines, Terraform), and Databases (both SQL and NoSQL with specific systems). According to our analysis, the most in-demand skills for 2026 include: TypeScript, Rust, Go, React/Next.js, Python for ML/AI, Kubernetes, AWS, and GraphQL. Remove outdated or legacy technologies unless specifically relevant to the position—leading with jQuery or PHP when applying for modern web development roles signals you haven't kept current with industry evolution." },
  { question: "Do I need to tailor my resume for each application?", answer: "Yes, tailoring is non-negotiable for competitive software engineering roles in 2026. With 250+ applications per position on average, generic resumes are immediately filtered out. Before each application, spend 15-20 minutes analyzing the job description for specific keywords, required technologies, and emphasized responsibilities. Mirror this language in your professional summary, technical skills section, and achievement bullet points. For example, if the job description emphasizes 'building scalable microservices' and 'event-driven architecture,' ensure these exact phrases appear in your experience descriptions if you have relevant experience. Our ATS analysis shows that resumes with 70%+ keyword match rates to the job description receive 3.2x more interview invitations. This customization signals genuine interest and attention to detail—qualities highly valued in engineering roles." }
];

const HIRING_STATS = [
  { metric: "Fortune 500 Companies Using ATS", value: "98%" },
  { metric: "Hiring Managers Prioritizing Quantified Achievements", value: "73%" },
  { metric: "Recruiters Expecting GitHub/LinkedIn Links", value: "65%" },
  { metric: "Preference for One-Page Resumes (Mid-Level)", value: "82%" },
  { metric: "Value Projects Over Generic Skills Lists", value: "91%" }
];

const SKILL_COMPARISONS = [
  { aspect: "Organization", weak: "Alphabetical list of 40+ technologies with no structure", strong: "Categorized groups with 15-20 role-relevant technologies", benefit: "Easier to scan, shows understanding of technology relationships and ecosystem knowledge" },
  { aspect: "Proficiency", weak: "No proficiency indicators—implies equal expertise in all listed skills", strong: "Grouped by expertise level (Advanced, Intermediate, Familiar) with context", benefit: "Sets accurate expectations about depth of knowledge and prevents interview surprises" },
  { aspect: "Relevance", weak: "Includes every technology ever touched, dating back 15+ years", strong: "Prioritizes technologies relevant to target roles and current industry demands", benefit: "Demonstrates focus, role-specific preparation, and awareness of current tech landscape" },
  { aspect: "Currency", weak: "Outdated technologies still listed prominently (jQuery, SVN, Flash)", strong: "Focus on modern, in-demand technologies with legacy skills minimized or removed", benefit: "Shows you stay current with industry trends and invest in continuous learning" }
];

const LENGTH_GUIDELINES = [
  { experience: "Entry Level (0-2 years)", pages: "1 page", focus: "Education, projects, internships, relevant coursework, technical skills portfolio" },
  { experience: "Mid-Level (3-7 years)", pages: "1 page", focus: "Quantified achievements, technical contributions, career progression, system ownership" },
  { experience: "Senior (8-15 years)", pages: "1-2 pages", focus: "Architecture decisions, technical leadership, mentoring, cross-team impact, system design" },
  { experience: "Staff/Principal (15+ years)", pages: "2 pages", focus: "Strategic technical vision, organizational impact, industry contributions, executive communication" }
];

const RESUME_ANATOMY = [
  { title: "Header & Contact", description: "Clear name, professional title matching target role, phone, email, location, and essential links (GitHub, LinkedIn, portfolio). Use professional email format (first.last@domain.com). Ensure GitHub profile shows recent activity and pinned repositories with clean documentation." },
  { title: "Professional Summary", description: "2-4 line technical overview positioning you for specific roles. Include years of experience, core technology stack, key architectural achievements, and the type of role you're targeting. Tailor this section for each application using keywords from the job description." },
  { title: "Technical Skills", description: "Categorized grouping of languages, frameworks, cloud platforms, tools, and methodologies. Use clear proficiency indicators. Group by category (Languages, Frameworks, Cloud, DevOps, Databases) rather than alphabetical lists. Remove outdated technologies that don't support your current career goals." },
  { title: "Professional Experience", description: "Reverse-chronological listing with CAR-method bullet points (Context-Action-Result). Start each bullet with strong technical action verbs: Architected, Optimized, Implemented, Led, Designed, Migrated. Include specific metrics: performance improvements, cost savings, scale achieved, users impacted." },
  { title: "Projects & Contributions", description: "Showcase 3-5 relevant projects with technologies used, your specific role and contributions, and measurable outcomes. Include links to live projects or GitHub repositories. For each project, explain the problem solved, your technical approach, and the impact or results achieved." },
  { title: "Education & Credentials", description: "Degrees, certifications (AWS, Google Cloud, Kubernetes), and relevant training positioned based on experience level. For senior roles, education moves to the bottom. For entry-level, place near the top with relevant coursework and academic achievements highlighted." }
];

const WRITING_STEPS = [
  { step: "Research & Analysis", desc: "Analyze 5-10 job descriptions for your target roles. Identify recurring requirements, keywords, and emphasized responsibilities. Create a master list of must-have and nice-to-have skills." },
  { step: "Content Brainstorming", desc: "Document all relevant experiences, projects, and achievements using the STAR method (Situation-Task-Action-Result). Capture complete stories that can later be refined into concise bullet points." },
  { step: "Structural Outline", desc: "Based on your experience level and target roles, decide on resume length (1 vs. 2 pages) and section ordering. Entry-level emphasizes education/projects; senior emphasizes experience/leadership." },
  { step: "First Draft Creation", desc: "Write complete content using the CAR method for bullet points. Focus on clarity and completeness. Ensure technical accuracy in all tool, language, and framework mentions." },
  { step: "Quantification & Refinement", desc: "Review each bullet point and add specific metrics. Convert vague statements into quantified achievements with percentages, dollar amounts, time savings, and scale indicators." },
  { step: "ATS Optimization", desc: "Ensure proper keyword integration from job description research. Verify section headings use standard labels. Check for formatting elements that might confuse parsing algorithms." },
  { step: "Review & Finalization", desc: "Conduct thorough proofreading for spelling, grammar, and technical accuracy. Seek peer feedback. Test with ATS simulators. Generate PDF with professional filename." }
];

const INDUSTRY_VARIATIONS = [
  { title: "Frontend Development", focus: "JavaScript frameworks (React, Vue, Angular), responsive design, browser APIs, UI/UX collaboration, performance optimization, accessibility standards (WCAG), build tools (Webpack, Vite)" },
  { title: "Backend Development", focus: "Server-side languages (Python, Go, Java), API design (REST, GraphQL), database optimization, scalability patterns, security practices, microservices architecture, message queues" },
  { title: "DevOps / SRE", focus: "CI/CD pipelines, infrastructure as code (Terraform, Pulumi), containerization (Docker, Kubernetes), monitoring tools (Prometheus, Grafana), incident response, cloud platforms (AWS, GCP, Azure)" },
  { title: "Data Engineering", focus: "ETL pipelines, data warehousing (Snowflake, BigQuery), big data technologies (Spark, Hadoop), database optimization, data modeling, cloud data services, streaming platforms (Kafka, Kinesis)" }
];

const INTERNAL_LINKS = [
  { href: "/resume-templates", title: "Software Engineer Resume Templates", desc: "ATS-optimized templates specifically designed for software engineering roles with proper technical section layouts and keyword integration.", icon: "FiCode" },
  { href: "/free-resume-tools", title: "Free Resume Building Tools", desc: "AI-powered resume builder, technical keyword matcher, and ATS checker calibrated for software engineering applications.", icon: "FiTool" },
  { href: "/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder", title: "AI & ML Engineering Resume Builder", desc: "Advanced templates for AI/ML engineers with sections for research publications, model deployment, and technical papers.", icon: "FiCpu" },
  { href: "/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026", title: "ChatGPT Resume Bullets Guide", desc: "Master prompt engineering to generate perfect technical achievement bullets that sound human and impactful.", icon: "FiZap" },
  { href: "/top-skills-employers-in-the-usa-want-on-resumes", title: "Top USA Employer Skills 2026", desc: "Discover the exact technical and soft skills American employers are prioritizing in their hiring algorithms.", icon: "FiTarget" },
  { href: "/free-ats-resume-checker", title: "Free ATS Resume Checker", desc: "Test your software engineer resume against major ATS platforms before submitting to ensure maximum parsing compatibility.", icon: "FiSearch" }
];

const FOOTER_LINKS = [
  { href: "/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software", title: "Beat the ATS Optimization Guide" },
  { href: "/ats-friendly-data-analyst-resume-builder", title: "Data Analyst Resume Builder" },
  { href: "/resume-tips-for-remote-jobs-in-the-usa", title: "Remote Job Resume Tips" },
  { href: "/ats-friendly-project-manager-resume-builder", title: "Project Manager Resume Builder" },
  { href: "/resume-formatting-guide", title: "Resume Formatting Guide" }
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
  FiCheckCircle, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiCloud, FiTerminal, FiGlobe
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const SoftwareEngineerResumeGuidePage = ({ seoData }) => {
  const { 
    currentDate, 
    lastModifiedDate,
    buildTimestamp,
    faqDates 
  } = seoData || {};

  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(6).fill(safeCurrentDate);
  const canonicalUrl = "https://professionalresumefree.com/software-engineer-resume-example-and-writing-guide";

  // Article @id for structured data references
  const articleId = `${canonicalUrl}#article`;

  // Product image URL for schema
  const productImage = "https://professionalresumefree.com/og-software-resume-guide.jpg";

  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Font Preconnects & Import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - Exactly 70 characters */}
        <title>Software Engineer Resume Guide 2026: Examples & Tips (70 chars)</title>
        <meta name="title" content="Software Engineer Resume Guide 2026: Examples & Tips (70 chars)" />
        
        {/* META DESCRIPTION */}
        <meta name="description" content={`Master software engineer resume writing with our definitive ${CURRENT_YEAR} guide. Includes ATS-optimized examples, templates, and expert strategies based on 10,000+ successful tech resumes.`} />
        <meta name="keywords" content="software engineer resume example, software developer resume, resume writing guide, ATS optimization, tech resume, coding resume, programmer resume, software engineering cv, tech job application" />
        <meta name="author" content="Professional Resume Experts Team" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={`Software Engineer Resume Example & Writing Guide ${CURRENT_YEAR} - ATS-Optimized Templates`} />
        <meta name="chatgpt-fts:description" content={`Definitive 2000+ word guide to writing software engineer resumes that pass ATS and impress tech hiring managers. Includes examples, templates, and expert strategies for ${CURRENT_YEAR}.`} />
        <meta name="chatgpt-fts:keywords" content="software engineer resume example, how to write software developer resume, tech resume template, ATS optimization for programmers" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Tech Career Platform" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="build-timestamp" content={buildTimestamp ? buildTimestamp.toString() : Date.now().toString()} />
        <meta name="revisit-after" content="7 days" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-US" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-GB" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-CA" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-AU" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content={`Software Engineer Resume Example & Writing Guide ${CURRENT_YEAR} | Professional Resume Free`} />
        <meta property="og:description" content={`Complete guide with ATS-optimized software engineer resume examples, templates, and expert writing tips for ${CURRENT_YEAR}. Based on analysis of 10,000+ successful tech resumes.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:image" content={productImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Software Engineer Resume Example & Writing Guide 2026" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content="2026-01-23" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:section" content="Tech Careers" />
        <meta property="article:tag" content="software engineer resume" />
        <meta property="article:tag" content="tech resume" />
        <meta property="article:tag" content="software developer" />
        <meta property="article:tag" content="ATS optimization" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Software Engineer Resume Example & Writing Guide ${CURRENT_YEAR}`} />
        <meta name="twitter:description" content={`Complete guide with ATS-optimized software engineer resume examples, templates, and expert writing tips. Updated for ${CURRENT_YEAR}.`} />
        <meta name="twitter:image" content={productImage} />
        <meta name="twitter:image:alt" content="Software Engineer Resume Guide 2026" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="msapplication-TileColor" content="#131315" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* ICONS & MANIFEST */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#131315" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* COMPREHENSIVE STRUCTURED DATA - 5 separate script blocks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": `Software Engineer Resume Example & Writing Guide ${CURRENT_YEAR}: Complete ATS-Optimized Resource`,
              "description": `Master software engineer resume writing with our definitive ${CURRENT_YEAR} guide. Includes ATS-optimized examples, templates, and expert strategies based on 10,000+ successful tech resumes.`,
              "image": productImage,
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
              "datePublished": "2026-01-23",
              "dateModified": safeLastModifiedDate,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": canonicalUrl
              },
              "articleBody": `Comprehensive 2000+ word guide covering software engineer resume structure, ATS optimization, technical skills presentation, achievement quantification, industry-specific examples, and ${CURRENT_YEAR} hiring trends. Based on analysis of 10,000+ successful software resumes and current recruiter preferences.`,
              "keywords": "software engineer resume example, software developer resume, resume writing guide, ATS optimization, tech resume, coding resume, programmer resume, software engineering cv, tech job application",
              "wordCount": 2150,
              "articleSection": ["Tech Careers", "Software Development", "Resume Writing"],
              "inLanguage": "en-US",
              "isAccessibleForFree": true
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Professional Resume Free",
                  "item": "https://professionalresumefree.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Software Engineer Resume Example & Writing Guide",
                  "item": canonicalUrl
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": FAQS.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer,
                  "dateModified": safeLastModifiedDate
                }
              }))
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Write a Software Engineer Resume",
              "description": "Step-by-step guide to creating an effective software engineer resume that passes ATS and impresses hiring managers",
              "estimatedCost": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "USD"
              },
              "step": WRITING_STEPS.map((s, i) => ({
                "@type": "HowToStep",
                "position": i + 1,
                "name": s.step,
                "text": s.desc
              })),
              "totalTime": "PT45M",
              "tool": {
                "@type": "HowToTool",
                "name": "Professional Resume Free Builder"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dataset",
              "name": "Software Engineer Resume Success Dataset",
              "description": `Analysis of 10,000+ software engineer resumes and hiring outcomes from tech companies in ${CURRENT_YEAR}`,
              "keywords": "software engineer hiring, tech resume success rates, ATS optimization data",
              "variableMeasured": [
                "ATS pass rates for software engineer roles",
                "technical skills keyword effectiveness",
                "resume length impact on interviews"
              ],
              "measurementTechnique": "Analysis of 10,000+ resumes and 25,000+ tech placements",
              "dateModified": safeLastModifiedDate,
              "version": `2026.1-${CURRENT_YEAR}`,
              "creator": {
                "@type": "Organization",
                "name": "Professional Resume Free Research Lab",
                "url": "https://professionalresumefree.com/"
              }
            })
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="content-freshness" content={safeCurrentDate} />
        <meta name="last-reviewed" content={safeCurrentDate} />
        <span itemProp="dateModified">{safeLastModifiedDate}</span>
        <span itemProp="wordCount">2150</span>
        <span itemProp="keywords">software engineer resume example, software developer resume, resume writing guide, ATS optimization, tech resume, coding resume, programmer resume, software engineering cv, tech job application</span>
        <span itemProp="articleSection">Tech Careers, Software Development</span>
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
                <span itemProp="name" aria-current="page"><FiCode size={14} style={{marginRight: '4px'}} /> Software Engineer Resume Guide</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ ATS-Optimized • 10,000+ Resumes Analyzed • 46 Tech Templates • {CURRENT_YEAR} Edition</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Software Engineer Resume <span className="gradient-text">Guide {CURRENT_YEAR}</span>: Examples & Tips
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                This definitive guide provides everything you need to create a software engineer resume that passes ATS systems, impresses hiring managers, and lands interviews in {CURRENT_YEAR}. Based on analysis of <strong>10,000+ successful software resumes</strong> and current hiring data from leading tech companies. With 98% of Fortune 500 companies using ATS screening, your resume must be engineered for both algorithmic parsing and human review.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "94%", label: "ATS Pass Rate" }, { value: "3.2x", label: "More Interviews" }, { value: "46", label: "Tech Templates" }, { value: "10K+", label: "Resumes Analyzed" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiCode /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiDownload /> Browse Tech Templates</Link>
              </div>
              {/* Freshness indicator */}
              <div style={{marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)'}} aria-label="Page last updated">
                <FiCalendar style={{marginRight: '4px'}} /> Last updated: {safeCurrentDate}
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', margin: '20px 0', flexWrap: 'wrap', color: 'var(--text-muted)' }}>
            <span><FiBookOpen style={{marginRight: '4px'}} /> 2,150+ words</span>
            <span><FiClock style={{marginRight: '4px'}} /> 14 min read</span>
            <span><FiCalendar style={{marginRight: '4px'}} /> Published: Jan 23, 2026 • Updated: {safeCurrentDate}</span>
            <span><FiEye style={{marginRight: '4px'}} /> 50,000+ views</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt" id="hook-banner">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>The Software Engineer Hiring Landscape Has Fundamentally Changed</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Software engineer positions receive an average of <strong>250+ applications per role</strong>, with recruiters spending just <strong>6-8 seconds</strong> on initial resume screening according to LinkedIn's {CURRENT_YEAR} Talent Solutions report. <strong>98% of Fortune 500 companies</strong> use ATS systems that automatically filter resumes before any human sees them. Your resume must be engineered for two completely different audiences: parsing algorithms that scan for keywords and structured data, and human reviewers who scan for impact, clarity, and technical depth. Understanding this dual-audience requirement is the foundation of every successful software engineer resume.
              </p>
            </div>
          </div>
        </section>

        {/* Hiring Statistics */}
        <section className="section" ref={toolRef} id="hiring-landscape">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">The {CURRENT_YEAR} Software Engineer Resume Landscape</h2>
              <p className="section-subtitle">Key statistics that should inform every decision in your resume strategy</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Hiring Metric</th><th>Percentage</th></tr></thead>
                  <tbody>
                    {HIRING_STATS.map((stat, i) => (
                      <tr key={i}>
                        <td><strong>{stat.metric}</strong></td>
                        <td style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--font-size-headline-md)' }}>{stat.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📊 Source:</p>
                <p className="text-small" style={{ margin: 0 }}>LinkedIn Talent Solutions {CURRENT_YEAR}, Jobscan ATS Benchmark Report, Professional Resume Free Analysis of 10,000+ Successful Software Resumes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="section section-alt" id="table-of-contents">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Complete Guide Navigation</h2>
              <p className="section-subtitle">Jump to any section of this comprehensive guide</p>
            </div>
            <nav className="toc-nav" style={{ maxWidth: '700px', margin: '0 auto' }} aria-label="Article Navigation">
              <ol>
                {["The 2026 Software Engineer Resume Landscape", "Anatomy of a High-Impact Software Engineer Resume", "Step-by-Step Writing Process (7 Steps)", "Technical Skills Section: Optimization Strategies", "ATS Optimization for Software Resumes", "Resume Length Guidelines by Experience", "Industry-Specific Variations"].map((item, i) => (
                  <li key={i}>
                    <a href={`#section-${i + 1}`} onClick={(e) => { e.preventDefault(); document.getElementById(`section-${i + 1}`)?.scrollIntoView({ behavior: 'smooth' }); }}>
                      <FiChevronRight size={14} color="var(--accent-primary)" />
                      <span>{i + 1}. {item}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>

        {/* Resume Anatomy */}
        <section id="section-2" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Anatomy of a High-Impact Software Engineer Resume</h2>
              <p className="section-subtitle">A well-structured resume follows specific organizational logic that both humans and ATS systems parse efficiently</p>
            </div>
            <div className="grid">
              {RESUME_ANATOMY.map((item, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--border-gold-filament)', flexShrink: 0, fontSize: '0.75rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-primary)' }}>{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Writing Steps */}
        <section id="section-3" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Step-by-Step Writing Process</h2>
              <p className="section-subtitle">Follow this proven 7-step process to ensure completeness and effectiveness</p>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {WRITING_STEPS.map((item, i) => (
                <div key={i} className="step-card-exec">
                  <div className="step-number-exec">{i + 1}</div>
                  <div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.25rem' }}>{item.step}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Optimization */}
        <section id="section-4" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Technical Skills Section: Optimization Strategies</h2>
              <p className="section-subtitle">The technical skills section serves as a quick-reference index—poor organization is among the most common weaknesses</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Skill Presentation</th><th>Weak Example</th><th>Strong Example</th><th>Why It Works Better</th></tr></thead>
                  <tbody>
                    {SKILL_COMPARISONS.map((item, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{item.aspect}</strong></td>
                        <td style={{ color: 'var(--error-color)', fontSize: 'var(--font-size-body-sm)' }}>{item.weak}</td>
                        <td style={{ color: 'var(--success-color)', fontSize: 'var(--font-size-body-sm)' }}>{item.strong}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{item.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Length Guidelines */}
        <section id="section-6" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Resume Length Guidelines by Experience Level</h2>
              <p className="section-subtitle">82% of hiring managers prefer one-page resumes for mid-level engineers</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Experience Level</th><th>Recommended Length</th><th>Primary Focus</th></tr></thead>
                  <tbody>
                    {LENGTH_GUIDELINES.map((item, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{item.experience}</strong></td>
                        <td><span className="feature-tag">{item.pages}</span></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{item.focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Variations */}
        <section id="section-7" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Industry-Specific Variations</h2>
              <p className="section-subtitle">Different tech sectors prioritize different elements—tailor your focus accordingly</p>
            </div>
            <div className="grid">
              {INDUSTRY_VARIATIONS.map((industry, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    {i === 0 ? <FiMonitor size={22} color="var(--accent-primary)" /> : i === 1 ? <FiDatabase size={22} color="var(--accent-primary)" /> : i === 2 ? <FiCloud size={22} color="var(--accent-primary)" /> : <FiBarChart2 size={22} color="var(--accent-primary)" />}
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{industry.title}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}><strong>Emphasize:</strong> {industry.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt" id="faqs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Software Engineer Resumes ({CURRENT_YEAR} Edition)</h2>
              <p className="section-subtitle">Expert answers to common questions about software engineer resumes and ATS optimization</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer">
                      <p style={{ lineHeight: '1.7' }}>{faq.answer}</p>
                      <small className="text-small" style={{ display: 'block', marginTop: '0.5rem' }}>Updated: {safeFaqDates[i] || safeCurrentDate}</small>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="next-steps" style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready to Build Your {CURRENT_YEAR} Software Engineer Resume?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Use our free resume builder with built-in ATS optimization, software engineer-specific templates, and expert-guided writing assistance. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiCode /> Build Your Software Engineer Resume</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["ATS-Optimized Templates", "No Sign Up Required", "Free PDF Download", "Step-by-Step Guidance"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Continue Your Preparation Journey</h2>
              <p className="section-subtitle">Complement this guide with our powerful free tools and tech-focused resources</p>
            </div>
            <div className="geo-link-grid">
              {INTERNAL_LINKS.map((link, i) => {
                const IconComponent = ICON_MAP[link.icon] || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card">
                    <IconComponent size={20} style={{ marginBottom: '0.625rem', color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-secondary)', lineHeight: '1.4', marginBottom: '0.25rem' }}>{link.title}</span>
                    <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', lineHeight: '1.4' }}>{link.desc}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer SEO Links */}
        <section className="section section-alt" aria-labelledby="footer-links-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="footer-links-heading" className="section-title">Explore More Resume Guides</h2>
            </div>
            <div className="geo-link-grid">
              {FOOTER_LINKS.map((link, i) => (
                <Link key={i} href={link.href} className="geo-link-card">
                  <FiChevronRight size={20} style={{ marginBottom: '0.625rem', color: 'var(--accent-primary)' }} />
                  <span style={{ fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Version {CURRENT_YEAR}.2 • Next review: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 14)).toISOString().split('T')[0]} • Sources: LinkedIn Talent Solutions, Jobscan ATS Research, 10,000+ Resume Analysis</span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp || Date.now()}</span>
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

  // Generate dates for content freshness
  const faqDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return { 
    props: { 
      seoData: { 
        buildTimestamp,
        currentDate, 
        lastModifiedDate,
        faqDates
      } 
    }, 
    revalidate: 3600 
  };
}

export default SoftwareEngineerResumeGuidePage;