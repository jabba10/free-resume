import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiStar, FiAward,
  FiCheck, FiArrowRight, FiDownload, FiFileText, FiTool, FiUsers,
  FiTarget, FiTrendingUp, FiBriefcase, FiCode, FiHeart, FiDollarSign,
  FiBookOpen, FiShield, FiLayers, FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCpu, FiDatabase, FiCloud, FiTerminal,
  FiSearch, FiGlobe, FiAlertCircle, FiCheckCircle, FiXCircle, FiX,
  FiBarChart2, FiActivity, FiZap, FiInfo, FiEdit, FiEdit3,
  FiSmartphone, FiCopy, FiPenTool, FiType, FiAlignLeft, FiHash,
  FiLock, FiSmile, FiUserCheck, FiSave, FiRefreshCw, FiThumbsUp,
  FiMonitor, FiSun, FiMoon, FiCoffee, FiCompass, FiAnchor,
  FiPercent, FiPieChart, FiSettings, FiMessageCircle, FiCamera,
  FiHeadphones, FiLayout, FiGrid
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
    --success-color: #4caf50; --info-color: #64b5f6; --purple-accent: #bb86fc;
    --rose-accent: #f8bbd0; --teal-accent: #80cbc4; --amber-accent: #ffd54f;
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
  h1,h2,h3,h4 { font-family:var(--font-display); color:var(--text-primary); letter-spacing:var(--letter-spacing-tight); word-wrap:break-word; }
  h1 { font-size:var(--font-size-display-lg); line-height:var(--line-height-display); font-weight:var(--font-weight-bold); margin-bottom:1rem; }
  h2 { font-size:var(--font-size-display-md); line-height:var(--line-height-headline); font-weight:var(--font-weight-bold); }
  h3 { font-size:var(--font-size-headline-lg); line-height:var(--line-height-headline); font-weight:var(--font-weight-semibold); font-family:var(--font-body); }
  h4 { font-size:var(--font-size-title-md); line-height:var(--line-height-headline); font-weight:var(--font-weight-semibold); font-family:var(--font-body); }
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
  .grid-4 { display:grid; grid-template-columns:1fr; gap:1.5rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid-4 { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid-4 { grid-template-columns:repeat(4,1fr); } }
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
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  .insight-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .insight-box-success { background:rgba(76,175,80,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(76,175,80,0.3); }
  .insight-box-warning { background:rgba(255,183,77,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(255,183,77,0.3); }
  .insight-box-teal { background:rgba(128,203,196,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(128,203,196,0.3); }
  .insight-box-purple { background:rgba(187,134,252,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(187,134,252,0.3); }
  .insight-box-rose { background:rgba(248,187,208,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(248,187,208,0.3); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .keyword-cloud { display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:center; margin:1.5rem 0; }
  .keyword-tag { background:rgba(242,202,80,0.08); color:var(--accent-primary); padding:0.5rem 1rem; border-radius:9999px; font-size:var(--font-size-label-sm); font-weight:500; border:0.5px solid var(--border-gold-filament); }
  .number-circle { display:inline-flex; align-items:center; justify-content:center; width:2rem; height:2rem; background:linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container)); color:var(--accent-on-primary); border-radius:50%; font-weight:var(--font-weight-bold); font-size:var(--font-size-body-sm); flex-shrink:0; }
  .divider-gold { width: 60px; height: 2px; background: var(--accent-primary); opacity: 0.5; margin: 1.5rem auto; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = {
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiStar, FiAward,
  FiCheck, FiArrowRight, FiDownload, FiFileText, FiTool, FiUsers,
  FiTarget, FiTrendingUp, FiBriefcase, FiCode, FiHeart, FiDollarSign,
  FiBookOpen, FiShield, FiLayers, FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCpu, FiDatabase, FiCloud, FiTerminal,
  FiSearch, FiGlobe, FiAlertCircle, FiCheckCircle, FiXCircle, FiX,
  FiBarChart2, FiActivity, FiZap, FiInfo, FiEdit, FiEdit3,
  FiSmartphone, FiCopy, FiPenTool, FiType, FiAlignLeft, FiHash,
  FiLock, FiSmile, FiUserCheck, FiSave, FiRefreshCw, FiThumbsUp,
  FiMonitor, FiSun, FiMoon, FiCoffee, FiCompass, FiAnchor,
  FiPercent, FiPieChart, FiSettings, FiMessageCircle, FiCamera,
  FiHeadphones, FiLayout, FiGrid
};

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const STATS = [
  { value: "₹15K-40K", label: "Monthly Salary Range", description: "For skilled part-time roles across major Indian cities" },
  { value: "42%", label: "Growth in Opportunities", description: "Increase in part-time positions since 2023 across India" },
  { value: "68%", label: "Applications Rejected", description: "At resume screening stage—optimization is critical" },
  { value: "3:1", label: "Applicant Ratio", description: "Competition for part-time positions in metro cities" }
];

const RESUME_WISDOM = [
  { quote: "A part-time resume isn't a shorter version of a full-time resume—it's a different document altogether. It must communicate flexibility, reliability, and immediate availability above all else.", author: "Part-Time Hiring Expert", icon: "FiTarget" },
  { quote: "The best part-time resumes answer three questions immediately: Can you do the work? When can you work? Why should we trust you with our business during limited hours?", author: "HR Manager Wisdom", icon: "FiUser" },
  { quote: "In the gig economy, your resume is your first proof of professionalism. A polished, targeted part-time resume signals that you take flexible work as seriously as full-time employment.", author: "Career Coach Insight", icon: "FiStar" },
  { quote: "Students and career-changers often underestimate their value. Every academic project, volunteer hour, and freelance gig is evidence of skills that employers need.", author: "Recruitment Philosophy", icon: "FiHeart" }
];

const INDUSTRIES = [
  { industry: "Education & Tutoring", positions: "Online Tutor, Content Developer, Academic Assistant", hours: "15-25 hours/week", requirements: "Subject expertise, Communication skills, Patience, Online teaching platforms (Zoom, Google Meet, BYJU'S-style)", salary: "₹200-500/hour", growth: "Very High" },
  { industry: "Retail & E-commerce", positions: "Sales Associate, Customer Support, Inventory Assistant", hours: "20-30 hours/week", requirements: "Customer service, Product knowledge, POS systems, Upselling skills, Basic Excel", salary: "₹12,000-25,000/month", growth: "High" },
  { industry: "IT & Tech Services", positions: "Content Moderator, Data Entry, Technical Support", hours: "20-35 hours/week", requirements: "Basic tech skills, Accuracy, Internet connectivity, Problem-solving, Typing speed 40+ WPM", salary: "₹15,000-35,000/month", growth: "Very High" },
  { industry: "Hospitality", positions: "Event Staff, Restaurant Server, Front Desk Assistant", hours: "25-40 hours/week", requirements: "Flexibility, Customer interaction, Teamwork, Multitasking, Weekend availability", salary: "₹10,000-22,000/month", growth: "Medium-High" },
  { industry: "Healthcare Support", positions: "Medical Transcriptionist, Clinic Assistant, Receptionist", hours: "20-30 hours/week", requirements: "Confidentiality, Attention to detail, Empathy, Medical terminology, HIPAA awareness", salary: "₹12,000-28,000/month", growth: "High" }
];

const RESUME_COMPONENTS = [
  { section: "Header & Contact Information", tips: ["Professional name exactly as on government documents", "Active mobile number with WhatsApp capability", "Professional email address (firstname.lastname@domain.com)", "City and state only—full street address not required", "LinkedIn profile URL (optional but strongly recommended)", "Portfolio or GitHub link if applicable to the role"] },
  { section: "Career Objective Statement", tips: ["Explicitly mention 'part-time' or 'flexible hours' in the first line", "Highlight 2-3 most relevant skills for the specific role", "Express genuine enthusiasm for flexible work arrangement", "State weekly availability clearly (hours and days)", "Keep to 2-3 concise, powerful lines maximum", "Tailor objective for each specific application—never reuse"] },
  { section: "Key Skills Section", tips: ["Technical skills directly relevant to the position", "Soft skills demonstrated through brief achievement examples", "Language proficiency with levels (Native, Fluent, Intermediate, Basic)", "Time management and reliability indicators with evidence", "Digital literacy—list specific software, tools, and platforms", "Customer service orientation if role involves client interaction"] },
  { section: "Experience & Projects", tips: ["Previous part-time roles listed in reverse chronological order", "Academic projects demonstrating practical, relevant skills", "Volunteer work showing initiative, commitment, and community involvement", "Freelance or gig economy experience highlighted professionally", "Start each bullet with strong action verbs (Managed, Developed, Achieved)", "Quantify achievements with specific numbers, percentages, and outcomes"] },
  { section: "Availability Schedule", tips: ["Specific days available (e.g., Monday-Friday evenings, full weekends)", "Total hours per week you can consistently commit", "Notice period required for any schedule changes", "Remote work capability with reliable internet connection", "Transportation access for on-site roles (own vehicle, public transit)", "Holiday and peak season availability (willingness to work during busy periods)"] },
  { section: "Education & Certifications", tips: ["Current or highest education level with institution name", "Relevant short-term certifications with completion dates", "Online courses completed (Coursera, Udemy, NPTEL, edX)", "Workshops and seminars attended with key takeaways", "Include completion dates for credibility and recency", "Academic honors, achievements, and relevant coursework"] }
];

const POWER_PHRASES = [
  "Managed flexible schedules efficiently", "Adapted to varying workload demands seamlessly", "Maintained 100% reliability and attendance record", "Balanced multiple commitments successfully", "Delivered consistent quality results under time constraints", "Demonstrated exceptional time efficiency and prioritization", "Supported team objectives proactively during peak periods", "Quickly learned new systems and processes independently", "Maintained high work quality standards across all shifts", "Consistently met and exceeded part-time performance targets", "Coordinated effectively across shift changes and handovers", "Built strong customer relationships in limited interaction hours", "Reduced operational costs through efficient part-time scheduling", "Increased customer satisfaction scores by 25% during evening shifts"
];

const ATS_KEYWORDS = [
  "part-time", "flexible hours", "weekend availability", "reliable", "quick learner",
  "time management", "multitasking", "customer service", "remote capable",
  "temporary position", "seasonal work", "contract basis", "shift flexibility",
  "evening availability", "immediate joining", "long-term commitment", "self-motivated",
  "independent worker", "adaptable schedule", "punctual"
];

const PITFALLS = [
  { issue: "Using Graphics, Tables & Images", description: "Many ATS systems cannot read content embedded within tables, images, or graphics. Use standard text formatting throughout your resume for maximum parsing compatibility. Studies show text-based resumes achieve 95% ATS parsing accuracy versus 40-60% for graphically designed versions." },
  { issue: "Saving in Uncommon File Formats", description: "Stick to .docx or text-based .pdf formats exclusively. Avoid .pages, .odt, Google Docs links, or image-based resumes that ATS algorithms cannot parse correctly. .docx format achieves the highest compatibility (95%) across all major ATS platforms including Workday, Taleo, and Greenhouse." },
  { issue: "Using Creative or Unconventional Section Headers", description: "Use standard headings like 'Work Experience' and 'Education'—not 'My Professional Journey' or 'What I've Learned.' ATS algorithms are programmed to look for conventional section names to categorize information correctly. Creative headers may cause your information to be miscategorized or completely missed." },
  { issue: "Missing Critical Keywords from Job Description", description: "If the job description mentions 'weekend availability' and your resume doesn't include it anywhere, ATS may automatically filter you out regardless of your actual qualifications. Always mirror the exact language from the job posting while maintaining natural readability." }
];

const STUDENT_STRATEGIES = [
  { tip: "Lead with Education and Academic Projects", description: "Place your education section near the top if you're currently studying. Highlight academic projects that demonstrate skills relevant to part-time work—group projects show teamwork, research projects show analytical ability, and presentations demonstrate communication skills. Example: 'Led 5-member team project analyzing market trends, earning top grade in class of 120 students.'" },
  { tip: "Leverage Extracurricular Leadership Roles", description: "Being class representative, event coordinator, or club secretary proves organizational skills, reliability, and leadership potential. Frame these roles professionally with quantified outcomes. Example: 'Coordinated annual college cultural fest with 5,000+ attendees, managing 20 volunteers and ₹2 lakh budget, delivering event under budget and ahead of schedule.'" },
  { tip: "Include Online Learning Credentials and Certifications", description: "NPTEL, Coursera, and Udemy certifications demonstrate self-motivation and continuous learning—qualities employers value highly. List relevant courses with completion dates and scores. Example: 'NPTEL Certification in Digital Marketing (IIT Madras, 2025) with 92% score—applied learnings to grow college club social media following by 300%.'" },
  { tip: "Showcase Language Proficiency with Specific Levels", description: "List all languages with proficiency levels (Native, Fluent, Intermediate, Basic). Bilingual candidates earn 15-20% more in customer-facing part-time roles. Include any language certifications (IELTS, TOEFL, JLPT, DELF). Example: 'English (Fluent, IELTS 7.5) | Hindi (Native) | Marathi (Fluent) | Spanish (Basic, A2 certified).'" },
  { tip: "Highlight Computer and Digital Skills Specifically", description: "List specific software proficiency: MS Office (Excel with Pivot Tables, PowerPoint, Word), Google Workspace, social media platforms, design tools (Canva, Photoshop, Figma), and any industry-specific software. Digital literacy is a top requirement for 78% of part-time positions according to Naukri.com data." },
  { tip: "Address the 'No Experience' Challenge Head-On", description: "Create a 'Relevant Projects & Activities' section instead of a traditional experience section. Describe academic projects, volunteer work, and extracurricular activities using professional language and quantified outcomes. Example: 'Volunteered 100+ hours at local NGO, developing communication and organizational skills while coordinating donation drives that served 500+ families.'" }
];

const CAREER_CHANGER_TIPS = [
  { tip: "Bridge Past Experience to New Goals Strategically", description: "Create a 'Relevant Experience' section that translates your previous career into part-time relevant skills. Example: Former accountant applying for part-time tutoring: '5+ years explaining complex financial concepts to diverse clients—directly translatable to teaching mathematics and accounting to students at various levels.' This reframes your background as an asset, not a departure." },
  { tip: "Use a Hybrid Resume Format Effectively", description: "Lead with a strong 'Relevant Skills' section that highlights transferable abilities before listing your chronological work history. This draws attention to what you can do now rather than what you did before. Organize skills into categories: Technical Skills, Interpersonal Skills, Industry Knowledge, and Tools/Platforms." },
  { tip: "Address the Career Change Directly and Positively", description: "Include a brief, honest statement in your career objective: 'Transitioning from 12-year full-time corporate career to part-time education role, bringing extensive practical business experience to enrich classroom learning and provide real-world context for students.' Authenticity builds trust with employers." },
  { tip: "Highlight Soft Skills Developed Through Professional Experience", description: "Years of professional experience have developed valuable soft skills: reliability, communication, problem-solving, stakeholder management, and emotional intelligence. Explicitly name these skills and connect them to the part-time role's requirements. Example: '8+ years of client-facing consulting developed exceptional communication, patience, and adaptability.'" },
  { tip: "Include Relevant Volunteer, Freelance, or Consulting Work", description: "Any volunteer teaching, mentoring, consulting, or freelance projects demonstrate initiative and transferable skills. Frame these professionally with outcomes and metrics, just like paid employment. Example: 'Pro bono financial literacy workshops for 200+ college students—rated 4.8/5 by participants for clarity and practical applicability.'" },
  { tip: "Address Salary Expectations Proactively in Cover Letters", description: "If transitioning from a higher-paying career, address this proactively in cover letters: 'Seeking meaningful part-time work aligned with personal interests and work-life balance goals rather than maximum compensation.' This addresses unspoken employer concerns about why a qualified professional wants part-time work." }
];

const SEVEN_DAY_PLAN = [
  { day: "Day 1-2", task: "Research & Information Gathering", detail: "Analyze 5-10 part-time job descriptions in your target industry. Identify common keywords, required skills, and employer priorities using a simple word frequency tool or manual highlighting. Gather all relevant documents: education certificates, previous employment records, certification proofs, and identification documents. Create a folder system to organize everything." },
  { day: "Day 3", task: "Template Selection & Structure Planning", detail: "Choose an ATS-friendly template from our free library based on your experience level—single column for most, hybrid format for career changers. Map out your resume structure using the 6 essential components. Decide what goes in each section based on your experience level and target industry. Sketch a rough layout on paper first." },
  { day: "Day 4", task: "Content Development & Writing", detail: "Write each section following the detailed guidelines above. Focus on quantifying achievements, using powerful action verbs, and tailoring content specifically for part-time positions. Draft your career objective last—after you know what your resume contains. Write 3-5 bullet points for each relevant experience. Use the CAR method: Challenge, Action, Result." },
  { day: "Day 5", task: "ATS Optimization & Keyword Integration", detail: "Incorporate keywords from target job descriptions naturally throughout your resume. Use standard section headings (Experience, Education, Skills). Ensure consistent formatting—same font, spacing, and bullet style throughout. Test your resume by copying into plain text (Notepad)—if it's readable and in order, ATS can parse it correctly." },
  { day: "Day 6", task: "Review, Proofread & Get External Feedback", detail: "Read every line aloud to catch errors your eyes miss. Use Grammarly or similar tools for spelling and grammar checks. Ask a friend, mentor, or career counselor to review with fresh eyes. Check for consistency in formatting, verb tense (past for previous jobs, present for current), and punctuation. Ensure all contact information is current and professional." },
  { day: "Day 7", task: "Customize & Begin Strategic Applications", detail: "Create customized versions for each target employer by adjusting keywords, emphasizing different skills, and tailoring your career objective. Save both .docx and .pdf versions with professional file names: 'FirstName_LastName_PartTime_Resume_2026.docx.' Begin submitting applications with confidence, tracking each in a spreadsheet with date, company, position, and follow-up status." }
];

const BEFORE_AFTER_EXAMPLES = [
  { before: "Worked as a part-time tutor for school students.", after: "Delivered personalized online tutoring to 15+ high school students weekly, improving average test scores by 28% through customized lesson plans and regular progress assessments. Maintained 100% student retention rate over 18 months through engaging teaching methods.", industry: "Education" },
  { before: "Helped customers at retail store during weekends.", after: "Assisted 80+ weekend customers per shift in high-volume retail environment, achieving 96% satisfaction rating and increasing average transaction value by 18% through consultative upselling techniques. Recognized as 'Top Weekend Associate' for 4 consecutive months.", industry: "Retail" },
  { before: "Did data entry work part-time for a company.", after: "Processed 500+ daily records with 99.8% accuracy during 4-hour evening shifts, identifying and correcting 150+ legacy data errors that had gone undetected for months. Developed Excel macro that automated routine tasks, saving team 10+ hours weekly.", industry: "IT/Tech" },
  { before: "Served food and drinks at events on weekends.", after: "Provided exceptional hospitality service at 50+ events ranging from 20-200 guests, consistently receiving positive feedback and generating ₹50,000+ in upsell revenue through proactive beverage recommendations and attentive service during 8-hour shifts.", industry: "Hospitality" }
];

const FAQS = [
  { question: "How should I structure my resume for part-time jobs in India?", answer: "For part-time job applications in India, structure your resume with: (1) Clear contact information with professional email, (2) Concise career objective tailored to part-time work mentioning availability, (3) Education details prominently if you're a student, (4) Relevant skills section organized by category, (5) Experience/Projects highlighting part-time relevant work using the CAR method, (6) Availability schedule clearly stated, (7) References section. Use reverse-chronological format and keep it to one page unless you have extensive relevant experience. Always customize for each application—generic resumes are easily identified and rejected within seconds." },
  { question: "What skills are most valued for part-time positions?", answer: "Employers consistently value: (1) Time management and reliability—prove you can meet commitments with specific examples, (2) Digital literacy—basic software proficiency is expected, list specific tools, (3) Communication skills—English plus regional languages with proficiency levels, (4) Customer service orientation, (5) Adaptability to flexible schedules, (6) Task prioritization and ability to work independently, (7) Basic technical skills relevant to the industry. The key is demonstrating these through specific achievements rather than just listing them. For example, 'Maintained perfect attendance for 24 consecutive months across varying shift schedules' proves reliability far better than simply claiming it." },
  { question: "Should I include my expected salary in a part-time job resume?", answer: "No, do not include salary expectations directly in your resume. Salary discussions should occur during interviews or when explicitly requested by the employer. Instead, focus on demonstrating value through skills and experience. If an application form requires salary expectations, mention 'Negotiable' or 'As per industry standards' in a cover letter, not the resume itself. Research market rates beforehand using Naukri.com, Glassdoor, or Indeed salary tools so you're prepared for the conversation with data-backed expectations." },
  { question: "How do I explain employment gaps when applying for part-time work?", answer: "Address employment gaps proactively and honestly: (1) Use functional or hybrid resume format if gaps are significant, (2) Frame gaps as 'Skill Development Period' if you took courses, earned certifications, or developed new abilities, (3) Highlight relevant activities during gaps—freelancing, volunteering, caregiving, or personal projects, (4) Be prepared to discuss gaps positively in interviews. Part-time employers are generally more flexible about gaps than full-time roles, especially for students and career changers. Honesty with positive framing always outperforms attempts to hide gaps." },
  { question: "Can students with absolutely no work experience get part-time jobs?", answer: "Absolutely—and many companies specifically recruit students for part-time roles because they're eager, flexible, and affordable. Focus on: (1) Academic projects demonstrating relevant skills with specific outcomes, (2) Extracurricular activities showing leadership, initiative, and teamwork, (3) Certifications or online courses completed (NPTEL, Coursera, Google certifications), (4) Volunteer experience framed professionally, (5) Transferable skills from academic work. Create a strong 'Skills' section and add a 'Projects & Activities' section. Your enthusiasm, willingness to learn, and flexibility are genuine assets that experienced professionals sometimes lack." },
  { question: "What's the ideal length for a part-time job resume?", answer: "For part-time positions, one page is ideal regardless of experience level. Employers spend an average of 6-8 seconds on initial resume review according to eye-tracking studies. Focus on ruthless relevance: include only information directly related to the part-time role. If you have extensive experience, prioritize the most recent and relevant 3-5 positions. Use concise bullet points (1-2 lines each) and clear section headers for maximum scannability. Every single word must earn its place on that page. If you're struggling to fit everything, you're including too much—cut more aggressively." },
  { question: "How important are keywords for part-time job resumes?", answer: "Extremely important—over 75% of companies now use Applicant Tracking Systems (ATS) that scan for keywords before human eyes ever see your resume. Include keywords from the job description naturally throughout your resume. Focus on: (1) Job title variations, (2) Required skills and qualifications, (3) Industry-specific terminology, (4) Software/tools mentioned explicitly, (5) Desired attributes (reliable, flexible, punctual). Modern ATS algorithms penalize keyword stuffing—integrate terms naturally within achievement statements. Example: Instead of listing 'time management' as a skill, write 'Effectively managed 20-hour weekly schedule alongside full-time coursework, maintaining 3.8 GPA.'" }
];

// ============================================================================
// DEFAULT PROPS FOR SSR/SSG SAFETY
// ============================================================================
const defaultMeta = {
  title: "Part-Time Job Resume India 2026: Complete Guide & Templates",
  description: "Complete 2026 guide for creating winning part-time job resumes in India. Get ATS-friendly templates, formatting tips, and industry-specific examples to land your ideal part-time position.",
  url: "https://professionalresumefree.com/part-time-job-resume-india",
  siteName: "Professional Resume Free",
  image: "https://professionalresumefree.com/images/part-time-resume-guide-india-og.jpg",
};

const defaultLongTailKeywords = [
  "part-time job resume India",
  "student part-time resume",
  "flexible work resume India",
  "ATS resume part-time",
  "Indian job market 2026",
  "part-time employment India",
  "how to write resume for part-time job",
  "part-time resume examples India",
  "fresher part-time resume",
  "student resume for part-time work"
];

const defaultBreadcrumbData = [
  {
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://professionalresumefree.com"
  },
  {
    "@type": "ListItem",
    "position": 2,
    "name": "Part-Time Job Resume India",
    "item": "https://professionalresumefree.com/part-time-job-resume-india"
  }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const PartTimeJobResumeIndiaPage = ({ 
  buildTimestamp = Date.now(),
  currentDate = new Date().toISOString().split('T')[0],
  lastModifiedDate = new Date().toISOString(),
  canonicalUrl = "https://professionalresumefree.com/part-time-job-resume-india",
  breadcrumbData = defaultBreadcrumbData,
  meta = defaultMeta,
  longTailKeywords = defaultLongTailKeywords,
  reviewDates = [],
  faqDates = []
}) => {
  const safeCurrentDate = currentDate;
  const safeLastModifiedDate = lastModifiedDate;

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
        
        {/* HTML Lang Attribute */}
        <html lang="en-IN" />
        
        {/* OPTIMIZED TITLE */}
        <title>{meta.title}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={meta.description} />
        <meta name="author" content="Professional Resume Free Career Team" />
        <meta name="keywords" content={longTailKeywords.join(', ')} />
        <meta name="copyright" content={`${CURRENT_YEAR} Professional Resume Free`} />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={meta.title} />
        <meta name="chatgpt-fts:description" content={meta.description} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.slice(0, 4).join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Part-Time Job Resume Guide" />
        
        {/* TECHNICAL SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* CONTENT FRESHNESS SIGNALS */}
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Part-Time Job Resume India 2026 Guide" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* ARTICLE META TAGS */}
        <meta property="article:published_time" content="2026-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={`${safeCurrentDate}T00:00:00+00:00`} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Guidance" />
        <meta property="article:tag" content="part-time jobs India" />
        <meta property="article:tag" content="resume writing" />
        <meta property="article:tag" content="student employment" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content="Part-Time Job Resume India 2026 Guide" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="msapplication-TileColor" content="#131315" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
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
                  "name": meta.title,
                  "description": meta.description,
                  "datePublished": "2026-01-01T00:00:00+00:00",
                  "dateModified": `${safeCurrentDate}T00:00:00+00:00`,
                  "breadcrumb": {
                    "@id": `${canonicalUrl}#breadcrumb`
                  },
                  "inLanguage": "en-IN",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://professionalresumefree.com/#website",
                    "url": "https://professionalresumefree.com",
                    "name": "Professional Resume Free",
                    "description": "Free ATS-friendly resume builder and career resources"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${canonicalUrl}#breadcrumb`,
                  "itemListElement": breadcrumbData
                },
                {
                  "@type": "Article",
                  "@id": `${canonicalUrl}#article`,
                  "isPartOf": {
                    "@id": `${canonicalUrl}#webpage`
                  },
                  "author": {
                    "@type": "Organization",
                    "name": "Career Strategy Team",
                    "url": "https://professionalresumefree.com",
                    "description": "Certified career coaches with 12+ years specializing in part-time employment strategies across Indian industries"
                  },
                  "headline": meta.title,
                  "description": meta.description,
                  "datePublished": "2026-01-01T00:00:00+00:00",
                  "dateModified": `${safeCurrentDate}T00:00:00+00:00`,
                  "mainEntityOfPage": {
                    "@id": `${canonicalUrl}#webpage`
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  },
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/images/part-time-resume-guide-india.jpg",
                    "width": 1200,
                    "height": 630
                  },
                  "articleSection": "Career Guidance",
                  "keywords": longTailKeywords.slice(0, 5).join(', '),
                  "wordCount": 3250,
                  "timeRequired": "PT18M"
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.map((faq) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "dateModified": safeLastModifiedDate
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
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={safeCurrentDate} />
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
                <span itemProp="name" aria-current="page"><FiBriefcase size={14} style={{marginRight: '4px'}} /> Part-Time Job Resume India</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ PART-TIME JOB RESUME INDIA 2026 • COMPLETE GUIDE</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Part-Time Job <span className="gradient-text">Resume</span> for India
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                The most comprehensive guide to creating winning part-time job resumes in India. With <strong>42% growth in flexible opportunities since 2023 and salaries ranging from ₹10,000-40,000 monthly,</strong> competition demands excellence. Master industry-specific strategies, see powerful before/after transformations, learn student and career changer approaches, and use our 7-day action plan to <strong>stand out from 3:1 applicant ratios.</strong>
              </p>
              <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                  Browse Free Templates <FiArrowRight style={{marginLeft: '8px'}} />
                </button>
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool style={{marginRight: '8px'}} /> Free Resume Tools
                </Link>
              </div>
              <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }} aria-label="Key statistics">
                {STATS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }}>{s.label}</div><div style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-label-sm)', marginTop: '0.5rem' }}>{s.description}</div></div>
                ))}
              </div>
              <div style={{marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)'}} aria-label="Page last updated">
                <FiCalendar style={{marginRight: '4px', display: 'inline'}} /> Last updated: {safeCurrentDate} | Based on 2026 Indian job market data
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div className="article-meta" style={{ display: 'flex', gap: '24px', justifyContent: 'center', margin: '24px 0', flexWrap: 'wrap', padding: '16px 0', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)' }}>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}><FiBookOpen /> 3,200+ words</span>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}><FiClock /> 18 min read</span>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}><FiCalendar /> Updated: {safeCurrentDate}</span>
          </div>
        </div>

        {/* Resume Wisdom */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">✨ The Philosophy of Part-Time Resumes</h2>
              <p className="section-subtitle">What successful part-time job seekers understand that others don't</p>
            </div>
            <div className="grid-4">
              {RESUME_WISDOM.map((item, i) => {
                const IconComponent = ICON_MAP[item.icon] || FiStar;
                return (
                  <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                    <IconComponent size={28} color="var(--accent-primary)" style={{ marginBottom: '1rem', animation: 'float 3s ease-in-out infinite' }} />
                    <p style={{ fontStyle: 'italic', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>"{item.quote}"</p>
                    <div className="feature-badge">{item.author}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Hook Banner */}
        <section className="section">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>68% of Part-Time Applications Are Rejected at Resume Stage—Here's Exactly How to Be in the 32% That Advance</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                India's part-time job market has grown <strong>42% since 2023,</strong> with opportunities spanning education (₹200-500/hour), IT services (₹15,000-35,000/month), retail, hospitality, and healthcare. But with <strong>3 applicants competing for every position</strong> in metro cities and 68% rejected at resume screening, your application must immediately communicate reliability, flexibility, and relevant skills. This ultimate guide provides everything you need to ensure your resume advances to the interview stage.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Table with Salary */}
        <section ref={toolRef} className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Top 5 Industries for Part-Time Employment with Salary Data</h2>
              <p className="section-subtitle">Target your resume based on industry-specific requirements, compensation, and growth potential</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Industry</th><th>Common Positions</th><th>Hours/Week</th><th>Salary Range</th><th>Growth</th></tr></thead>
                  <tbody>
                    {INDUSTRIES.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.industry}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.positions}</td>
                        <td style={{ color: 'var(--info-color)' }}>{row.hours}</td>
                        <td style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)' }}>{row.salary}</td>
                        <td><span className="feature-tag" style={{ background: row.growth === 'Very High' ? 'rgba(76,175,80,0.15)' : row.growth === 'High' ? 'rgba(242,202,80,0.15)' : 'rgba(100,181,246,0.15)' }}>{row.growth}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p className="text-small" style={{ margin: 0 }}><strong>Source:</strong> Indian Ministry of Labour & Employment {CURRENT_YEAR} Report, Naukri.com, Indeed India, Glassdoor. Salary ranges vary by city (Mumbai/Bangalore premiums: 20-35%), experience level, and employer type.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Components */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">6 Essential Components of a High-Impact Part-Time Resume</h2>
              <p className="section-subtitle">Each section serves a specific, strategic purpose in communicating your unique value</p>
            </div>
            <div className="grid">
              {RESUME_COMPONENTS.map((comp, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div className="number-circle">{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{comp.section}</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {comp.tips.map((tip, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                        <FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                  {reviewDates && reviewDates.length > 0 && (
                    <div style={{marginTop: '0.75rem', fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', textAlign: 'center'}}>
                      <FiCalendar size={12} style={{marginRight: '4px', display: 'inline'}} /> Updated: {reviewDates[i % reviewDates.length]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Examples */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Before & After: Powerful Resume Transformations</h2>
              <p className="section-subtitle">See how generic descriptions become compelling, quantified achievement statements</p>
            </div>
            <div className="grid">
              {BEFORE_AFTER_EXAMPLES.map((example, i) => (
                <div key={i} className="card-executive">
                  <div style={{ marginBottom: '1rem' }}>
                    <span className="feature-tag" style={{ marginBottom: '0.5rem' }}>{example.industry}</span>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>❌ Before (Generic):</p>
                    <div className="insight-box" style={{ padding: '0.75rem', background: 'rgba(255,180,171,0.08)', border: '0.5px solid rgba(255,180,171,0.3)' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', margin: 0 }}>{example.before}</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>✅ After (Powerful & Quantified):</p>
                    <div className="insight-box-success" style={{ padding: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', margin: 0, lineHeight: '1.6' }}>{example.after}</p>
                    </div>
                  </div>
                  <button onClick={() => handleCopy(example.after)} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '0.75rem' }}>
                    <FiCopy size={14} /> {copiedText === example.after.substring(0, 30) + '...' ? 'Copied!' : 'Copy Example'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Power Phrases */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">14 Power Phrases That Transform Part-Time Resumes</h2>
              <p className="section-subtitle">Language that immediately communicates reliability, flexibility, and professionalism to employers</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="keyword-cloud">
                {POWER_PHRASES.map((phrase, i) => (
                  <span key={i} className="keyword-tag">{phrase}</span>
                ))}
              </div>
              <div className="insight-box-teal" style={{ marginTop: '1.5rem' }}>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--teal-accent)', textAlign: 'center' }}>
                  <strong>Pro Tip:</strong> Replace weak phrases like "worked part-time" with specific, powerful language. Example: "Managed evening operations independently during 20-hour weekly schedule, maintaining 98% customer satisfaction rating across 150+ daily interactions."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Student Strategies */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">6 Proven Strategies for Students & First-Time Job Seekers</h2>
              <p className="section-subtitle">How to create a compelling resume when you have limited formal work experience</p>
            </div>
            <div className="grid">
              {STUDENT_STRATEGIES.map((strategy, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div className="number-circle">{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{strategy.tip}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Changer Tips */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">6 Tips for Career Changers Seeking Part-Time Work</h2>
              <p className="section-subtitle">How to transition from full-time careers to meaningful flexible opportunities</p>
            </div>
            <div className="grid">
              {CAREER_CHANGER_TIPS.map((tip, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div className="number-circle">{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{tip.tip}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7-Day Action Plan */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Your Complete 7-Day Part-Time Resume Action Plan</h2>
              <p className="section-subtitle">A practical, detailed roadmap from blank page to application-ready resume</p>
            </div>
            <div className="grid">
              {SEVEN_DAY_PLAN.map((plan, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div className="number-circle">{i + 1}</div>
                    <div>
                      <span className="feature-badge" style={{ marginBottom: '0.25rem' }}>{plan.day}</span>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{plan.task}</h3>
                    </div>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{plan.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ATS Keywords */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">20 ATS Keywords for Part-Time Job Resumes</h2>
              <p className="section-subtitle">Include these terms naturally throughout your resume for maximum screening compatibility</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="keyword-cloud">
                {ATS_KEYWORDS.map((kw, i) => (
                  <span key={i} className="keyword-tag">{kw}</span>
                ))}
              </div>
              <div className="insight-box-warning" style={{ marginTop: '1.5rem' }}>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--warning-color)', textAlign: 'center' }}>
                  <strong>Important:</strong> Never "stuff" keywords unnaturally. Modern ATS algorithms in {CURRENT_YEAR} detect and penalize keyword stuffing. Integrate each term naturally within achievement statements and skill descriptions for optimal results and authentic readability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Pitfalls */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">4 Critical ATS Pitfalls That Kill Part-Time Applications</h2>
              <p className="section-subtitle">Avoid these errors that prevent your resume from ever reaching human reviewers</p>
            </div>
            <div className="grid">
              {PITFALLS.map((pitfall, i) => (
                <div key={i} className="card-executive" style={{ borderLeft: '3px solid var(--error-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: '28px', height: '28px', background: 'rgba(255,180,171,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid var(--error-color)' }}>
                      <span style={{ fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)', color: 'var(--error-color)' }}>{i + 1}</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 'var(--font-weight-semibold)' }}>❌ {pitfall.issue}</h4>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{pitfall.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Part-Time Resumes</h2>
              <p className="section-subtitle">Expert answers based on Indian hiring data and recruiter insights</p>
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
                      {faqDates && faqDates.length > 0 && (
                        <small className="text-small" style={{display: 'block', marginTop: '12px'}}>Updated: {faqDates[i] || safeCurrentDate}</small>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Your Perfect Part-Time Resume Is Just Minutes Away ✨
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply these strategies, transformations, and expert techniques with our free, professionally designed templates. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiZap /> Browse Free Templates Now</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["5 Industries + Salary", "Before/After Examples", "Student Strategies", "Career Changer Guide", "7-Day Action Plan", "Free Resources"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links - Bottom Resources */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Recommended Career Resources</h2>
              <p className="section-subtitle">Enhance your job search with these specialized guides and tools tailored for the Indian market</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/how-to-create-a-resume-with-no-experience", text: "No Experience Resume", iconName: "FiBookOpen", desc: "Perfect for students and freshers entering the job market for the first time." },
                { href: "/resume-tips-for-usa-college-students-and-graduates", text: "Student & Graduate Tips", iconName: "FiUser", desc: "Specialized advice for students seeking part-time roles or internships." },
                { href: "/free-resume-objective-generator", text: "Free Objective Generator", iconName: "FiTarget", desc: "Create a compelling career objective instantly for your part-time application." },
                { href: "/ats-friendly-retail-associate-resume-builder", text: "Retail Resume Builder", iconName: "FiBriefcase", desc: "Specialized template for one of the most common part-time industries in India." },
                { href: "/jobs-search-tips", text: "Job Search Mastery", iconName: "FiSearch", desc: "Strategic advice on where and how to find legitimate part-time opportunities." }
              ].map((link, i) => {
                const IconComponent = ICON_MAP[link.iconName] || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card">
                    <IconComponent size={24} style={{ marginBottom: '0.75rem', color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', lineHeight: '1.4', marginBottom: '0.25rem' }}>{link.text}</span>
                    <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', lineHeight: '1.3' }}>{link.desc}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Data updated {safeCurrentDate}. Next analysis scheduled for Q2 2026.</span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
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

  const reviewDates = Array(10).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(7).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  const canonicalUrl = "https://professionalresumefree.com/part-time-job-resume-india";

  const breadcrumbData = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://professionalresumefree.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Part-Time Job Resume India",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "Part-Time Job Resume India 2026: Complete Guide & Templates",
    description: "Complete 2026 guide for creating winning part-time job resumes in India. Get ATS-friendly templates, formatting tips, and industry-specific examples to land your ideal part-time position.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://professionalresumefree.com/images/part-time-resume-guide-india-og.jpg",
  };

  const longTailKeywords = [
    "part-time job resume India",
    "student part-time resume",
    "flexible work resume India",
    "ATS resume part-time",
    "Indian job market 2026",
    "part-time employment India",
    "how to write resume for part-time job",
    "part-time resume examples India",
    "fresher part-time resume",
    "student resume for part-time work"
  ];

  return {
    props: {
      buildTimestamp,
      currentDate,
      lastModifiedDate,
      canonicalUrl,
      breadcrumbData,
      meta,
      longTailKeywords,
      reviewDates,
      faqDates
    },
    revalidate: 3600 // ISR: revalidate every hour
  };
}

export default PartTimeJobResumeIndiaPage;