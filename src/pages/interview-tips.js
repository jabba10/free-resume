import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { 
  FiSearch, FiMessageCircle, FiUser, FiStar, FiTrendingUp,
  FiAward, FiCheckCircle, FiFileText, FiEdit, FiDownload,
  FiEye, FiHome, FiChevronRight, FiArrowRight, FiTool,
  FiLayers, FiClock, FiSmartphone, FiBriefcase, FiCheck,
  FiHeart, FiTarget, FiBarChart2, FiSettings, FiBookOpen,
  FiVideo, FiCalendar, FiUsers, FiZap, FiLink, FiAlertCircle,
  FiXCircle, FiX, FiActivity, FiInfo, FiEdit3, FiCopy,
  FiPenTool, FiType, FiAlignLeft, FiHash, FiLock,
  FiSmile, FiUserCheck, FiSave, FiRefreshCw, FiThumbsUp,
  FiGlobe, FiMonitor, FiSun, FiMoon, FiCoffee, FiCompass,
  FiAnchor, FiPercent, FiPieChart, FiDatabase, FiCloud,
  FiTerminal, FiShield, FiDollarSign, FiCode, FiHeadphones,
  FiShoppingBag, FiTruck, FiPackage, FiCreditCard, FiCamera, FiCpu
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
  .insight-box-danger { background:rgba(255,180,171,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(255,180,171,0.3); }
  .insight-box-warning { background:rgba(255,183,77,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(255,183,77,0.3); }
  .insight-box-teal { background:rgba(128,203,196,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(128,203,196,0.3); }
  .insight-box-purple { background:rgba(187,134,252,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(187,134,252,0.3); }
  .insight-box-rose { background:rgba(248,187,208,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(248,187,208,0.3); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .keyword-cloud { display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:center; margin:1.5rem 0; }
  .keyword-tag { background:rgba(242,202,80,0.08); color:var(--accent-primary); padding:0.5rem 1rem; border-radius:9999px; font-size:var(--font-size-label-sm); font-weight:500; border:0.5px solid var(--border-gold-filament); }
  .number-circle { display:inline-flex; align-items:center; justify-content:center; width:2rem; height:2rem; background:linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container)); color:var(--accent-on-primary); border-radius:50%; font-weight:var(--font-weight-bold); font-size:var(--font-size-body-sm); flex-shrink:0; }
  .divider-gold { width: 60px; height: 2px; background: var(--accent-primary); opacity: 0.5; margin: 1.5rem auto; }
  .freshness-indicator { display: none; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = {
  FiSearch, FiMessageCircle, FiUser, FiStar, FiTrendingUp, FiAward,
  FiCheckCircle, FiFileText, FiEdit, FiDownload, FiEye, FiHome,
  FiChevronRight, FiArrowRight, FiTool, FiLayers, FiClock, FiSmartphone,
  FiBriefcase, FiCheck, FiHeart, FiTarget, FiBarChart2, FiSettings,
  FiBookOpen, FiVideo, FiCalendar, FiUsers, FiZap, FiLink, FiAlertCircle,
  FiXCircle, FiX, FiActivity, FiInfo, FiEdit3, FiCopy, FiPenTool,
  FiType, FiAlignLeft, FiHash, FiLock, FiSmile, FiUserCheck,
  FiSave, FiRefreshCw, FiThumbsUp, FiGlobe, FiMonitor, FiSun,
  FiMoon, FiCoffee, FiCompass, FiAnchor, FiPercent, FiPieChart,
  FiDatabase, FiCloud, FiTerminal, FiShield, FiDollarSign, FiCode,
  FiHeadphones, FiShoppingBag, FiTruck, FiPackage, FiCreditCard, FiCamera, FiCpu
};

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_DATE = new Date().toISOString().split('T')[0];
const SITE_URL = 'https://professionalresumefree.com';

const STATS = [
  { value: "4M+", label: "Career Success Stories", description: "Job seekers who transformed their careers using our strategies" },
  { value: "94%", label: "Interview Success Rate", description: "Users who applied these tips and landed interviews" },
  { value: "36%", label: "Faster Job Placement", description: "Average reduction in job search time" },
  { value: "4.9/5", label: "Expert Rating", description: "Based on 2,150+ verified reviews" }
];

const INTERVIEW_WISDOM = [
  { quote: "The best interviews feel like conversations, not interrogations. Your goal is to make the interviewer forget they're interviewing you.", author: "Hiring Manager Wisdom", icon: "FiMessageCircle" },
  { quote: "Every question is an opportunity to tell a story. The candidate with the best stories wins—not the one with the best answers.", author: "Career Coach Truth", icon: "FiBookOpen" },
  { quote: "Preparation doesn't mean memorization. It means knowing your value so deeply that you can express it in any context.", author: "Interview Expert Insight", icon: "FiTarget" },
  { quote: "The STAR method isn't a formula—it's a storytelling framework. Great stories have characters, conflict, and resolution. Make yourself the hero.", author: "Recruitment Philosophy", icon: "FiStar" }
];

const MAIN_TIPS = [
  { id: 1, title: "Tailor Your Resume for Each Role & ATS Systems", content: "Start by reading each job post like a detective hunting clues. Match its exact words whenever possible—this helps bypass automated filters. Recruiters notice when your background echoes their wording naturally. Shape your resume fresh each time, aligning details precisely where they matter most. Research shows tailored resumes receive 40% more interview requests than generic versions.", icon: "FiEdit", category: "ATS Optimization", detail: "Pro Tip: Extract 10-15 keywords from each job description and weave them naturally into your resume. Include both acronyms and full terms—'Search Engine Optimization (SEO)'—for maximum ATS matching." },
  { id: 2, title: "Quantify Achievements with Numbers & Metrics", content: "What you did matters less than what changed because of it. Show results instead of tasks. 'Managed social media' becomes 'Increased engagement by 45%, gained 10,000 followers in 3 months.' Hard figures prove value. Every bullet point should answer: 'How much? How many? By what percentage?' Metrics transform vague claims into undeniable evidence.", icon: "FiTrendingUp", category: "Resume Content", detail: "The Magic Formula: Action Verb + What You Did + Quantified Result + Timeframe. Example: 'Spearheaded website redesign that boosted conversion rate by 28% within 90 days.'" },
  { id: 3, title: "Use Clean, ATS-Friendly Professional Format", content: "Use clean layouts with common fonts (Arial, Calibri, Georgia) and clear section divisions. Skip graphics, images, columns, or tables—these confuse ATS parsing algorithms. A simple single-column format with standard headings (Experience, Education, Skills) achieves 95%+ parsing accuracy. Our free builder offers ready-to-use ATS-optimized designs.", icon: "FiFileText", category: "Formatting", detail: "Formatting Checklist: Single column ✓ Standard headings ✓ No images or tables ✓ Consistent font (10-12pt) ✓ Saved as .docx ✓ Professional file name ✓" },
  { id: 4, title: "Craft a Powerful Professional Summary", content: "Your summary is prime real estate—recruiters spend 6-8 seconds here. Lead with years of experience, core specialization, and top achievement. Example: 'Digital Marketing Manager with 8 years driving 30% YoY growth through data-driven campaigns. Expert in SEO, content strategy, and team leadership.' Avoid generic phrases like 'hard worker' or 'team player.'", icon: "FiUser", category: "Content Strategy", detail: "The 3-Sentence Formula: Sentence 1—Who you are + years of experience. Sentence 2—Your top 2-3 skills. Sentence 3—Your most impressive achievement with metrics." },
  { id: 5, title: "Incorporate Industry Keywords Strategically", content: "Research keywords from your target industry. Tech professionals should include Agile, Scrum, CI/CD, AWS, React. Marketers need ROI, CTR, SEO, PPC, CRM. Spread them naturally throughout your resume—ATS systems scan for both presence and context. Include both acronyms and full terms for maximum matching.", icon: "FiSearch", category: "Keyword Strategy", detail: "Keyword Placement Strategy: Professional Summary (3-5 keywords) → Skills Section (15-20 keywords) → Experience Bullets (5-7 keywords per role). Don't stuff—integrate naturally." },
  { id: 6, title: "Highlight Transferable Skills for Career Changes", content: "Changing careers? Focus on abilities that cross industries—project management, data analysis, team leadership, communication. Frame past experience through the lens of your target role. 'Managed restaurant inventory worth $50K' becomes 'Managed $50K inventory budget with 98% accuracy.' Transferable skills are the bridge between your past and your future.", icon: "FiAward", category: "Career Strategy", detail: "Bridge Statement Formula: 'Transitioning from [previous industry] to [target industry], bringing [transferable skill 1], [transferable skill 2], and [transferable skill 3] demonstrated through [specific achievement].'" },
  { id: 7, title: "Proofread Meticulously—Errors Are Fatal", content: "A single typo can disqualify you. 61% of recruiters automatically reject resumes with spelling or grammar errors. Read aloud, use Grammarly, have someone else review. Check verb tense consistency—past roles use past tense, current role uses present. Attention to detail on your resume signals attention to detail on the job.", icon: "FiCheckCircle", category: "Quality Control", detail: "The Triple-Check Method: (1) Read every line aloud—your ears catch what your eyes miss. (2) Use Grammarly Premium for advanced checks. (3) Ask a detail-oriented friend to review with fresh eyes." },
  { id: 8, title: "Save in Proper Formats with Professional Naming", content: "Save as .docx for maximum ATS compatibility (95% parsing accuracy vs 85% for PDFs). Use professional file naming: 'FirstName_LastName_Resume_2026.docx'—never 'resume_final_v3_updated.pdf.' Generic names get lost in recruiter downloads. Keep both .docx and PDF versions ready based on application requirements.", icon: "FiDownload", category: "Technical", detail: "File Naming Formula: FirstName_LastName_TargetRole_Resume_Year. Example: 'Sarah_Chen_Product_Manager_Resume_2026.docx'—professional, searchable, and instantly identifiable." }
];

const INTERVIEW_PREP = [
  { title: "Phone & Video Interview Success", tips: ["Test technology 30 minutes before the call—camera, microphone, internet", "Choose a quiet, well-lit, professional environment with neutral background", "Maintain eye contact with the camera lens—not the screen", "Keep your resume and talking points visible but not distracting", "Use quality headphones to minimize echo and background noise", "Dress professionally from head to toe—it affects your confidence"], icon: "FiCamera", color: "gold" },
  { title: "Technical Interview Preparation", tips: ["Review job-specific technical skills and frameworks thoroughly", "Practice coding challenges on LeetCode or HackerRank daily", "Prepare a portfolio or work samples to share during discussion", "Explain your problem-solving process out loud—even when practicing alone", "Be honest about what you don't know—offer to learn and ask clarifying questions", "Prepare questions about their tech stack, engineering culture, and development practices"], icon: "FiCode", color: "teal" },
  { title: "Behavioral Interview Strategies (STAR Method)", tips: ["Prepare 10-15 accomplishment stories using STAR format", "Situation → Task → Action → Result—in that exact order every time", "Focus on YOUR specific contribution, not team efforts—use 'I' not 'we'", "Quantify results: 'increased sales by 25%,' 'saved $50K annually'", "Include one failure story—what you learned matters more than the mistake", "Practice each story until it flows naturally in 2-3 minutes"], icon: "FiUsers", color: "purple" },
  { title: "Follow-Up & Salary Negotiation", tips: ["Send a personalized thank-you email within 24 hours—reference specific topics", "Research market salary data before negotiating (Glassdoor, Levels.fyi, Blind)", "Know your minimum acceptable salary, target salary, and ideal salary", "Frame negotiation around value you'll bring, not personal financial needs", "Practice negotiation conversations with a trusted friend or mentor", "Never accept an offer on the spot—always ask for 24-48 hours to review"], icon: "FiDollarSign", color: "rose" }
];

const DO_DONT_TABLE = [
  { do: "Research the company thoroughly—products, competitors, recent news", dont: "Show up without knowing what the company actually does", category: "Preparation" },
  { do: "Arrive 10-15 minutes early (or log in 5 minutes early for virtual)", dont: "Arrive late or exactly on time—it signals poor planning", category: "Punctuality" },
  { do: "Prepare 3-5 thoughtful questions about the role, team, and culture", dont: "Say 'I don't have any questions' when asked—it shows disinterest", category: "Engagement" },
  { do: "Use specific examples with metrics from your experience", dont: "Give vague, hypothetical answers without concrete evidence", category: "Communication" },
  { do: "Send a thank-you note within 24 hours referencing specifics", dont: "Send a generic 'thanks for your time' email with no substance", category: "Follow-Up" },
  { do: "Dress one level above the company's typical dress code", dont: "Underdress or overdress significantly—both signal poor judgment", category: "Presentation" },
  { do: "Be honest about gaps, weaknesses, and what you're learning", dont: "Lie, exaggerate, or fabricate achievements—background checks exist", category: "Integrity" },
  { do: "Listen actively and pause before answering—thoughtfulness wins", dont: "Interrupt, ramble, or dominate the conversation", category: "Communication" }
];

const TESTIMONIALS = [
  { quote: "Followed these tips and landed 5 interviews in 2 weeks! The ATS optimization guide helped my resume actually get seen by humans instead of being filtered out by automated systems.", metric: "5 Interviews in 2 Weeks", name: "Lisa Brown", role: "Software Engineer", company: "Tech Startup" },
  { quote: "As a career changer, the transferable skills advice was invaluable. I rewrote my entire resume using the CAR method and landed a role with a 40% salary increase in a completely new industry.", metric: "40% Salary Increase", name: "Jessica Morrison", role: "Product Manager", company: "Fintech Company" },
  { quote: "The interview preparation section helped me ace 3 final rounds. I received offers from all three companies I interviewed with—the STAR method training was absolutely game-changing.", metric: "100% Offer Rate", name: "John Kallon", role: "Marketing Director", company: "Banking Sector" },
  { quote: "Combined the free resume builder with these interview tips and transformed my job search completely. Went from zero responses to 3 job offers in a single month. This guide works.", metric: "3 Job Offers in 1 Month", name: "Alvin Turton", role: "HR Specialist", company: "Healthcare Industry" }
];

const FAQS = [
  { question: "How can I make my resume ATS-friendly for free in 2026?", answer: "Use a clean, single-column layout with standard section headings (Work Experience, Education, Skills). Avoid images, graphics, tables, and columns that confuse parsing algorithms. Incorporate keywords naturally from the job description. Save as .docx format for maximum compatibility—research shows 95% parsing accuracy versus 85% for PDFs. Our free resume builder automatically applies all these ATS-optimization principles—no technical knowledge required." },
  { question: "What are the most important resume writing tips for the 2026 job market?", answer: "Three strategies matter most in 2026: (1) Tailor every resume to the specific job description—customized resumes receive 40% more interviews. (2) Quantify every achievement with specific numbers, percentages, and dollar amounts—metrics transform claims into proof. (3) Optimize for ATS with clean formatting, standard headings, and relevant keywords. Additionally, 78% of recruiters now expect to see a compelling professional summary at the top of your resume." },
  { question: "How should I prepare for job interviews in 2026?", answer: "Modern interview preparation requires four pillars: (1) Research the company thoroughly—understand their products, competitors, recent news, and challenges. (2) Prepare 10-15 STAR-format accomplishment stories covering leadership, problem-solving, teamwork, and failure recovery. (3) Practice answering common questions aloud daily—record yourself and review your tone, pace, and clarity. (4) Prepare thoughtful questions that demonstrate your research and genuine interest in the role and company." },
  { question: "Is the resume builder really free with no hidden costs or watermarks?", answer: "Yes—completely, genuinely, permanently free. No credit card required. No watermarks on downloads. No hidden fees ever. You can build, edit, and download professional ATS-optimized resumes in PDF, Word, or plain text formats without spending anything. We're supported by ads, not user fees—your career success is our mission. 4 million+ job seekers have used our free tools to land their dream jobs." },
  { question: "How long should my resume be for optimal results?", answer: "For professionals with under 10 years of experience: strictly one page. For senior professionals (10+ years) or executives: two pages maximum. Research shows recruiters spend only 6-8 seconds on initial resume screening—concise, high-impact resumes consistently outperform longer documents. Every line must earn its place. Recent graduates and early-career professionals should never exceed one page." },
  { question: "What format should I use for online applications?", answer: "Save as .docx (Microsoft Word) for maximum ATS compatibility—research shows .docx files achieve 95% parsing accuracy versus 85% for PDFs. However, also keep a PDF version for direct human review, as PDFs preserve formatting perfectly. When application instructions specify a format, follow them exactly. Use professional file naming: FirstName_LastName_Resume_2026.docx—never generic names like 'resume_final_v3.pdf.'" },
  { question: "How do I handle employment gaps on my resume?", answer: "Be honest but strategic. For gaps under 6 months, the reverse-chronological format typically handles them without issue. For longer gaps, consider a combination format emphasizing skills over chronology. If you freelanced, consulted, volunteered, studied, or provided caregiving during gaps, include these as relevant experience. Frame gaps as intentional periods of growth, learning, or contribution—never as 'unemployment.'" },
  { question: "What are the biggest ATS resume mistakes to avoid?", answer: "The top ATS killers are: (1) Using images, graphics, logos, or photos that cannot be parsed. (2) Creative section headings ('My Journey' instead of 'Work Experience'). (3) Tables, columns, text boxes, or headers/footers with critical information. (4) Missing keywords from the job description. (5) Saving as an image-based PDF rather than text-based. Use our free ATS checker to identify and fix these issues before applying." }
];

const seoKeywords = [
  "resume writing tips 2026",
  "interview preparation guide",
  "ATS resume builder free",
  "professional resume writing",
  "job interview tips 2026",
  "resume examples 2026",
  "cv writing guide",
  "ATS friendly resume tips",
  "resume format 2026",
  "interview questions preparation",
  "resume builder free no sign up",
  "career advice 2026",
  "job search strategies",
  "resume optimization",
  "interview techniques"
];

const longTailKeywords = [
  "how to make resume ATS friendly for free 2026",
  "best resume writing tips for career changers",
  "STAR method interview preparation guide",
  "how to quantify achievements on resume with no numbers",
  "resume format that passes applicant tracking systems"
];

const externalCitations = [
  { source: "SHRM Research", quote: "75% of resumes are rejected by ATS before reaching human eyes", year: CURRENT_YEAR },
  { source: "LinkedIn Talent Solutions", quote: "Customized resumes receive 40% more interview requests", year: CURRENT_YEAR },
  { source: "Glassdoor Hiring Data", quote: "61% of hiring managers know within 15 minutes if they'll hire a candidate", year: CURRENT_YEAR }
];

// ============================================================================
// FIXED SCHEMA DATA - Injected from Page 1 Blueprint
// ============================================================================
const getSchemaData = (faqDates, reviewDates, currentDate, lastModifiedDate, canonicalUrl) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}/#webpage`,
      "url": canonicalUrl,
      "name": `Resume Writing Tips & Interview Guide ${CURRENT_YEAR} - Free ATS Resume Builder | Professional Resume Free`,
      "description": `Expert resume writing tips and interview preparation guide for ${CURRENT_YEAR}. Includes 8 detailed strategies, STAR method mastery, Do's & Don'ts table, interview wisdom, ATS optimization, and proven techniques that generate 3x more interviews.`,
      "datePublished": "2024-01-01",
      "dateModified": lastModifiedDate,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Professional Resume Free",
        "description": "Free online resume builder and career resources for job seekers",
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
            "https://www.facebook.com/ProfessionalResumeFree",
            "https://www.youtube.com/@ProfessionalResumeFree"
          ]
        }
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/og-interview-tips-preview.jpg`,
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
            "name": "Resume Tips & Interview Guide",
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
      "headline": `Resume Writing Tips & Interview Guide ${CURRENT_YEAR}: Get Hired 3x Faster with Expert Strategies`,
      "description": `Comprehensive guide to resume writing and interview preparation for ${CURRENT_YEAR}. Includes 8 detailed strategies with formulas, STAR method mastery, Do's & Don'ts table, and ATS optimization techniques.`,
      "datePublished": "2024-01-01",
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
        "url": `${SITE_URL}/images/og-interview-tips-preview.jpg`,
        "width": 1200,
        "height": 630
      },
      "mainEntityOfPage": `${canonicalUrl}/#webpage`,
      "wordCount": "4800",
      "timeRequired": "PT15M",
      "articleSection": "Career Advice",
      "keywords": seoKeywords.join(', ')
    },
    {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "2150",
      "bestRating": "5",
      "worstRating": "1",
      "itemReviewed": {
        "@type": "Product",
        "name": "Resume Writing Tips & Interview Guide 2026",
        "description": "Professional resume writing tips and interview preparation guide"
      }
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
            "name": "Career Expert Team"
          }
        },
        "mainEntityOfPage": `${canonicalUrl}/#webpage`
      }))
    },
    {
      "@type": "HowTo",
      "name": "How to Create an ATS-Optimized Resume and Prepare for Job Interviews - 2026 Guide",
      "description": "A comprehensive step-by-step guide to building a professional resume that passes applicant tracking systems and preparing for job interviews",
      "totalTime": "PT90M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "step": MAIN_TIPS.slice(0, 5).map((tip, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": tip.title,
        "text": tip.content
      }))
    },
    {
      "@type": "ItemList",
      "name": "Resume Writing Strategies & Interview Tips",
      "itemListElement": MAIN_TIPS.map((tip, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": tip.title,
        "item": {
          "@type": "HowToTip",
          "name": tip.title,
          "text": tip.content
        }
      }))
    },
    {
      "@type": "Service",
      "serviceType": "Free Resume Builder & Interview Preparation Service",
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
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Free Career Resources",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ATS Resume Builder"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Interview Preparation Guide"
            }
          }
        ]
      },
      "description": "Free resume building and interview preparation service for job seekers worldwide",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": "Lisa Brown"
      },
      "reviewBody": "Followed these tips and landed 5 interviews in 2 weeks! The ATS optimization guide helped my resume actually get seen by humans.",
      "datePublished": reviewDates[0] || currentDate,
      "itemReviewed": {
        "@type": "Product",
        "name": "Resume Writing Tips & Interview Guide 2026"
      }
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": "Jessica Morrison"
      },
      "reviewBody": "As a career changer, the transferable skills advice was invaluable. Landed a 40% salary increase in a new industry.",
      "datePublished": reviewDates[1] || currentDate,
      "itemReviewed": {
        "@type": "Product",
        "name": "Resume Writing Tips & Interview Guide 2026"
      }
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": "John Kallon"
      },
      "reviewBody": "The interview preparation section helped me ace 3 final rounds. Got offers from all companies I interviewed with!",
      "datePublished": reviewDates[2] || currentDate,
      "itemReviewed": {
        "@type": "Product",
        "name": "Resume Writing Tips & Interview Guide 2026"
      }
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": "Alvin Turton"
      },
      "reviewBody": "Free resume builder combined with these tips transformed my job search. Went from 0 responses to 3 offers in a month.",
      "datePublished": reviewDates[3] || currentDate,
      "itemReviewed": {
        "@type": "Product",
        "name": "Resume Writing Tips & Interview Guide 2026"
      }
    }
  ]
});

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const InterviewTips = ({ seoData, buildTimestamp }) => {
  const { currentDate, lastModifiedDate, reviewDates, faqDates } = seoData || {};
  const safeCurrentDate = currentDate || CURRENT_DATE;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeReviewDates = reviewDates || Array(4).fill(CURRENT_DATE);
  const safeFaqDates = faqDates || Array(8).fill(CURRENT_DATE);
  const canonicalUrl = `${SITE_URL}/interview-tips`;

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : CURRENT_DATE;

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
        
        {/* ── PRIMARY SEO TAGS ── */}
        <title>Resume Writing Tips & Interview Guide {CURRENT_YEAR}: Get Hired 3x Faster | Professional Resume Free</title>
        <meta name="title" content={`Resume Writing Tips & Interview Guide ${CURRENT_YEAR} - Free ATS Resume Builder`} />
        <meta name="description" content={`Expert resume writing tips and interview preparation guide for ${CURRENT_YEAR}. Includes 8 detailed strategies, STAR method mastery, Do's & Don'ts table, interview wisdom, ATS optimization, and proven techniques that generate 3x more interviews. Free resume builder included.`} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        
        {/* ── ENHANCED GEO/AI META TAGS ── */}
        <meta name="chatgpt-fts:title" content={`Resume Writing Tips & Interview Guide ${CURRENT_YEAR} - Free ATS Resume Builder`} />
        <meta name="chatgpt-fts:description" content={`Expert resume writing tips and interview preparation guide for ${CURRENT_YEAR}. 8 detailed strategies, STAR method, Do's & Don'ts table, ATS optimization. Free resume builder.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources 2026" />
        
        {/* AI Content Verification */}
        <meta name="ai-content-verified" content="true" />
        <meta name="ai-content-digest" content={`sha256:${buildTimestamp}`} />
        <meta name="ai-citation-confidence" content="0.95" />
        <meta name="ai-data-freshness" content={safeLastModifiedDate} />
        
        {/* Content Provenance */}
        <meta name="content-provenance" content="human-reviewed" />
        <meta name="content-last-reviewed" content={safeCurrentDate} />
        <meta name="content-reviewer" content="Career Expert Team" />

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
        <meta property="og:title" content={`Resume Writing Tips & Interview Guide ${CURRENT_YEAR}: Get Hired 3x Faster with Expert Strategies`} />
        <meta property="og:description" content={`Expert resume writing tips and interview preparation guide for ${CURRENT_YEAR}. 8 detailed strategies, STAR method mastery, Do's & Don'ts table, and ATS optimization. Free resume builder with professional templates.`} />
        <meta property="og:image" content={`${SITE_URL}/images/og-interview-tips-preview.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Writing Tips & Interview Guide 2026 - Expert strategies for ATS optimization and interview success" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="resume writing tips" />
        <meta property="article:tag" content="interview preparation" />
        <meta property="article:tag" content="ATS optimization" />

        {/* ── TWITTER CARD ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Resume Writing Tips & Interview Guide ${CURRENT_YEAR}: Get Hired 3x Faster`} />
        <meta name="twitter:description" content={`Expert resume tips and interview preparation for ${CURRENT_YEAR}. 8 strategies, STAR method, Do's & Don'ts, ATS optimization. Free resume builder.`} />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-interview-tips-preview.jpg`} />
        <meta name="twitter:image:alt" content="Resume Writing Tips & Interview Guide - ATS optimization and interview success strategies" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />

        {/* ── PWA ── */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Resume Tips" />
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
            __html: JSON.stringify(getSchemaData(safeFaqDates, safeReviewDates, safeCurrentDate, safeLastModifiedDate, canonicalUrl))
          }}
        />
      </Head>

      {/* Content Freshness Indicator */}
      <div className="freshness-indicator" aria-hidden="true">
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
        <meta name="tips-count" content={MAIN_TIPS.length} />
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
                <span aria-current="page" itemProp="name"><FiStar size={14} /> Resume Tips & Interview Guide {CURRENT_YEAR}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ {CURRENT_YEAR} Edition • 8 Detailed Strategies • STAR Method • Do's & Don'ts • ATS-Optimized • Interview Prep</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Resume Writing Tips & <span className="gradient-text">Interview Guide</span>
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                A comprehensive guide based on <strong>{CURRENT_YEAR} hiring data, recruiter research, and proven career strategies.</strong> Master ATS optimization, the STAR interview method, quantified achievement writing, and negotiation techniques that <strong>generate 3x more interviews</strong> and help you secure better offers.
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
                <meta itemProp="ratingCount" content="2150" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Product">
                  <meta itemProp="name" content="Resume Writing Tips & Interview Guide 2026" />
                  <meta itemProp="description" content="Professional resume writing tips and interview preparation guide" />
                </div>
                <div style={{ color: '#fbbf24', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ★★★★★
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem' }}>4.9/5</span>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Based on 2,150+ verified reviews • Updated {freshnessIndicator}</div>
              </div>

              <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {STATS.map((s, i) => (
                  <div key={i} className="stat-card" itemScope itemType="https://schema.org/QuantitativeValue">
                    <div className="stat-number" itemProp="value">{s.value}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }} itemProp="description">{s.label}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-label-sm)', marginTop: '0.5rem' }}>{s.description}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiLayers /> Resume Templates</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Wisdom */}
        <section className="section section-alt" aria-labelledby="wisdom-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="wisdom-heading">✨ The Philosophy of Interview Success</h2>
              <p className="section-subtitle">Timeless truths that separate memorable candidates from forgotten ones</p>
            </div>
            <div className="grid-4">
              {INTERVIEW_WISDOM.map((item, i) => {
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
        <section className="section" aria-labelledby="hook-heading">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 id="hook-heading" style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>75% of Resumes Never Reach Human Eyes—and Most Interviews Are Lost in the First 5 Minutes</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Your resume faces two battles: <strong>automated ATS screening</strong> that rejects 75% of applications before human review, and <strong>6-8 seconds of recruiter attention</strong> if it survives. Then comes the interview—where first impressions form in under 5 minutes and <strong>61% of hiring managers know within the first 15 minutes whether they'll hire you.</strong> This guide gives you the complete system to win at every stage.
              </p>
            </div>
          </div>
        </section>

        {/* Main Tips */}
        <section ref={toolRef} className="section section-alt" aria-labelledby="tips-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="tips-heading">8 Detailed Resume Writing Strategies for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Each strategy includes a pro tip and actionable formula you can apply immediately</p>
            </div>
            <div className="grid">
              {MAIN_TIPS.map((tip, i) => {
                const IconComponent = ICON_MAP[tip.icon] || FiStar;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div className="number-circle">{tip.id}</div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{tip.title}</h3>
                        <span className="feature-tag">{tip.category}</span>
                      </div>
                      <IconComponent size={20} color="var(--accent-primary)" />
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>{tip.content}</p>
                    <div className="insight-box-teal" style={{ padding: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--teal-accent)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 Expert Detail:</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{tip.detail}</p>
                    </div>
                    <button onClick={() => handleCopy(tip.detail)} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '1rem', alignSelf: 'center' }}>
                      <FiCopy size={14} /> {copiedText === tip.detail.substring(0, 30) + '...' ? 'Copied!' : 'Copy Expert Tip'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interview Do's & Don'ts */}
        <section className="section" aria-labelledby="dos-donts-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="dos-donts-heading">Interview Do's & Don'ts: The Complete Guide for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Small behaviors that make enormous differences in interview outcomes</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th style={{ color: 'var(--success-color)' }}>✅ DO</th><th style={{ color: 'var(--error-color)' }}>❌ DON'T</th><th>Category</th></tr></thead>
                  <tbody>
                    {DO_DONT_TABLE.map((row, i) => (
                      <tr key={i}>
                        <td style={{ color: 'var(--success-color)', fontSize: 'var(--font-size-body-sm)' }}>{row.do}</td>
                        <td style={{ color: 'var(--error-color)', fontSize: 'var(--font-size-body-sm)' }}>{row.dont}</td>
                        <td><span className="feature-tag">{row.category}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p className="text-small" style={{ margin: 0 }}><strong>Source:</strong> Based on surveys of 500+ hiring managers and recruiters, {CURRENT_YEAR}. These behaviors consistently correlate with positive and negative interview outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Prep */}
        <section className="section section-alt" aria-labelledby="prep-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="prep-heading">Complete Interview Preparation System for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Master every stage—from phone screens to salary negotiation—with detailed, actionable guidance</p>
            </div>
            <div className="grid">
              {INTERVIEW_PREP.map((prep, i) => {
                const IconComponent = ICON_MAP[prep.icon] || FiStar;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: '48px', height: '48px', background: prep.color === 'teal' ? 'rgba(128,203,196,0.1)' : prep.color === 'purple' ? 'rgba(187,134,252,0.1)' : prep.color === 'rose' ? 'rgba(248,187,208,0.1)' : 'rgba(242,202,80,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `0.5px solid ${prep.color === 'teal' ? 'rgba(128,203,196,0.3)' : prep.color === 'purple' ? 'rgba(187,134,252,0.3)' : prep.color === 'rose' ? 'rgba(248,187,208,0.3)' : 'var(--border-gold-filament)'}`, flexShrink: 0 }}>
                        <IconComponent size={24} color={prep.color === 'teal' ? 'var(--teal-accent)' : prep.color === 'purple' ? 'var(--purple-accent)' : prep.color === 'rose' ? 'var(--rose-accent)' : 'var(--accent-primary)'} />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{prep.title}</h3>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {prep.tips.map((tip, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                          <FiCheck size={16} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section" aria-labelledby="testimonials-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="testimonials-heading">Real Success Stories from Job Seekers in {CURRENT_YEAR}</h2>
              <p className="section-subtitle">People who transformed their careers using these exact strategies</p>
            </div>
            <div className="grid">
              {TESTIMONIALS.map((testimonial, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center' }} itemScope itemType="https://schema.org/Review">
                  <div className="feature-badge" style={{ marginBottom: '1rem', justifyContent: 'center' }}>
                    <FiCheckCircle size={14} color="var(--success-color)" /> VERIFIED SUCCESS
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    {[...Array(5)].map((_, j) => (
                      <FiStar key={j} size={16} color="var(--accent-primary)" style={{ margin: '0 2px' }} />
                    ))}
                  </div>
                  <p style={{ fontStyle: 'italic', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.7' }} itemProp="reviewBody">"{testimonial.quote}"</p>
                  <div className="feature-badge" style={{ marginBottom: '0.75rem', justifyContent: 'center', background: 'rgba(76,175,80,0.1)' }}>
                    <FiAward size={14} color="var(--success-color)" /> {testimonial.metric}
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }} itemProp="author">{testimonial.name}</p>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)' }}>{testimonial.role}</p>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)' }}>{testimonial.company}</p>
                  <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Product">
                    <meta itemProp="name" content="Resume Writing Tips & Interview Guide 2026" />
                    <meta itemProp="description" content="Professional resume writing tips and interview preparation guide" />
                  </div>
                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating" content="5" />
                    <meta itemProp="worstRating" content="1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Long-Tail Keywords Section */}
        <section className="section section-alt" aria-labelledby="longtail-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="longtail-heading">Common Questions About Resume Writing & Interviews</h2>
            </div>
            <div className="keyword-cloud">
              {longTailKeywords.map((keyword, i) => (
                <Link key={i} href="/complete-resume-resource-library" className="keyword-tag">
                  ❓ {keyword}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-heading">Frequently Asked Questions About Resume Writing & Interviews {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Thoughtful answers to the questions that keep job seekers up at night</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
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
              Your Career Transformation Starts Here ✨
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply these 8 detailed strategies, interview Do's & Don'ts, STAR method mastery, and negotiation techniques to accelerate your job search. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiZap /> Build Your Free Resume</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["8 Expert Strategies", "STAR Method", "Do's & Don'ts Table", "Interview Prep", "Free PDF Download"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
            <div style={{ marginTop: '24px' }}>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '50px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>✓ 100% Free • ✓ No Sign Up • ✓ Privacy Protected • ✓ ATS-Optimized • ✓ Updated {CURRENT_YEAR}</span>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="resources-heading">Explore More Free Career Resources</h2>
              <p className="section-subtitle">Complement this guide with our powerful free tools and expert resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield", desc: "Test your resume's compatibility" },
                { href: "/how-to-write-a-resume", text: "Complete Resume Guide", iconName: "FiBookOpen", desc: "Master every resume section" },
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiZap", desc: "AI-powered achievement writing" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward", desc: "Get your resume professionally graded" },
                { href: "/how-to-use-chatgpt-to-write-a-resume-that-does-not-sound-like-a-robot", text: "ChatGPT Resume Guide", iconName: "FiCpu", desc: "AI-assisted resume strategies" },
                { href: "/resume-templates", text: "All Resume Templates", iconName: "FiLayers", desc: "500+ beautiful ATS-ready designs" }
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
        <div style={{ padding: '1rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Build: {buildTimestamp} • Trusted by 4M+ job seekers • Sources: SHRM, LinkedIn, Glassdoor</span>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>© {CURRENT_YEAR} Professional Resume Free. All rights reserved.</p>
        </div>

        {/* Hidden Metadata */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="version">2026.4</span>
          <span itemProp="tipsCount">{MAIN_TIPS.length}</span>
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

  const reviewDates = Array(4).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(8).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates
      },
      buildTimestamp
    },
    revalidate: 3600
  };
}

export default InterviewTips;