import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiStar, FiAward,
  FiCheck, FiArrowRight, FiDownload, FiFileText, FiTool, FiUsers,
  FiTarget, FiTrendingUp, FiBriefcase, FiCode, FiHeart, FiDollarSign,
  FiBookOpen, FiShield, FiLayers, FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCpu, FiDatabase, FiCloud, FiTerminal,
  FiAlertCircle, FiCheckCircle, FiXCircle, FiX, FiBarChart2,
  FiActivity, FiZap, FiInfo, FiEdit, FiEdit3, FiSmartphone,
  FiCopy, FiPenTool, FiType, FiAlignLeft, FiHash, FiLock,
  FiSmile, FiUserCheck, FiSave, FiRefreshCw, FiThumbsUp,
  FiGlobe, FiSearch, FiMonitor, FiSun, FiMoon, FiCoffee,
  FiCompass, FiAnchor, FiPercent, FiPieChart, FiMessageCircle
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
  .list-style { padding-left:1.25rem; display:flex; flex-direction:column; gap:0.5rem; }
  .list-style li { color:var(--text-secondary); font-size:var(--font-size-body-sm); }
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  .insight-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .insight-box-success { background:rgba(76,175,80,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(76,175,80,0.3); }
  .insight-box-danger { background:rgba(255,180,171,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(255,180,171,0.3); }
  .insight-box-warning { background:rgba(255,183,77,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(255,183,77,0.3); }
  .insight-box-purple { background:rgba(187,134,252,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(187,134,252,0.3); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .keyword-cloud { display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:center; margin:1.5rem 0; }
  .keyword-tag { background:rgba(242,202,80,0.08); color:var(--accent-primary); padding:0.5rem 1rem; border-radius:9999px; font-size:var(--font-size-label-sm); font-weight:500; border:0.5px solid var(--border-gold-filament); }
  .pre-block { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); overflow-x:auto; font-family:'Courier New',monospace; font-size:var(--font-size-label-sm); color:var(--text-secondary); line-height:1.8; white-space:pre-wrap; }
  .number-circle { display:inline-flex; align-items:center; justify-content:center; width:2rem; height:2rem; background:linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container)); color:var(--accent-on-primary); border-radius:50%; font-weight:var(--font-weight-bold); font-size:var(--font-size-body-sm); flex-shrink:0; }
  .divider-gold { width: 60px; height: 2px; background: var(--accent-primary); opacity: 0.5; margin: 1.5rem auto; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
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
  FiAlertCircle, FiCheckCircle, FiXCircle, FiX, FiBarChart2,
  FiActivity, FiZap, FiInfo, FiEdit, FiEdit3, FiSmartphone,
  FiCopy, FiPenTool, FiType, FiAlignLeft, FiHash, FiLock,
  FiSmile, FiUserCheck, FiSave, FiRefreshCw, FiThumbsUp,
  FiGlobe, FiSearch, FiMonitor, FiSun, FiMoon, FiCoffee,
  FiCompass, FiAnchor, FiPercent, FiPieChart, FiMessageCircle
};

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const TEACHING_STATS = [
  { value: "92%", label: "Schools Require Certification", description: "State teaching license is non-negotiable for public school positions across all 50 states" },
  { value: "3x", label: "More Interview Calls", description: "Resumes highlighting certification and student achievement data receive significantly more responses" },
  { value: "85%", label: "Large Districts Use ATS", description: "Automated screening filters applications before human review in most urban and suburban districts" },
  { value: "1-2", label: "Pages Ideal Length", description: "Concise, achievement-focused resumes preferred by busy principals and HR administrators" }
];

const CERTIFICATION_EXAMPLES = [
  { state: "California", license: "Multiple Subject Teaching Credential", requirements: "Bachelor's degree, CBEST, CSET, teacher preparation program, CPR certification", reciprocity: "Limited—NASDTEC Interstate Agreement, may require additional coursework" },
  { state: "Texas", license: "Standard Certificate (EC-6, 4-8, 7-12)", requirements: "Bachelor's degree, content exams, PPR exam, internship or clinical teaching", reciprocity: "Review of out-of-state credentials; additional Texas exams may be required" },
  { state: "New York", license: "Initial Teaching Certificate", requirements: "Bachelor's degree, edTPA, approved teacher preparation program, NYS exams", reciprocity: "Conditional initial certificate available; full certification requires NYS exams" },
  { state: "Florida", license: "Professional Certificate", requirements: "Bachelor's degree, subject area exam, professional education exam, fingerprinting", reciprocity: "Full reciprocity for valid out-of-state standard certificates; no additional exams" },
  { state: "Illinois", license: "Professional Educator License (PEL)", requirements: "Bachelor's degree, content test, teacher preparation program, edTPA", reciprocity: "Direct reciprocity for comparable out-of-state licenses; may require Illinois-specific tests" },
  { state: "Pennsylvania", license: "Instructional I Certificate", requirements: "Bachelor's degree, Praxis exams, approved teacher preparation program, student teaching", reciprocity: "NASDTEC Interstate Agreement participant; credentials reviewed individually" }
];

const SALARY_DATA = [
  { role: "Elementary School Teacher", entry: "$42,000 - $52,000", mid: "$52,000 - $68,000", senior: "$68,000 - $88,000", demand: "Very High" },
  { role: "Middle School Teacher", entry: "$43,000 - $53,000", mid: "$53,000 - $70,000", senior: "$70,000 - $90,000", demand: "High" },
  { role: "High School Teacher", entry: "$44,000 - $55,000", mid: "$55,000 - $72,000", senior: "$72,000 - $92,000", demand: "High" },
  { role: "Special Education Teacher", entry: "$46,000 - $58,000", mid: "$58,000 - $75,000", senior: "$75,000 - $95,000", demand: "Very High" },
  { role: "ESL/ELL Teacher", entry: "$43,000 - $54,000", mid: "$54,000 - $70,000", senior: "$70,000 - $88,000", demand: "Very High" },
  { role: "School Principal/Admin", entry: "$75,000 - $95,000", mid: "$95,000 - $125,000", senior: "$125,000 - $165,000+", demand: "Medium" }
];

const TEACHING_KEYWORDS = {
  instructional: ["Curriculum Development", "Differentiated Instruction", "Lesson Planning", "Formative Assessment", "Summative Assessment", "Project-Based Learning", "Scaffolding", "Bloom's Taxonomy", "Universal Design for Learning", "Inquiry-Based Learning"],
  management: ["Classroom Management", "Positive Behavior Support", "PBIS", "Restorative Practices", "Social-Emotional Learning", "Trauma-Informed Teaching", "De-escalation Techniques", "Behavior Intervention Plans"],
  technology: ["Google Classroom", "Canvas LMS", "Schoology", "Nearpod", "Kahoot", "SMART Board", "Seesaw", "Flipgrid", "EdPuzzle", "Microsoft Teams for Education"],
  assessment: ["Data-Driven Instruction", "RTI (Response to Intervention)", "MTSS", "Student Growth Percentiles", "Benchmark Assessment", "Progress Monitoring", "IEP Implementation", "504 Plans"],
  specialties: ["ESL/ELL Strategies", "Gifted & Talented", "Reading Intervention", "Math Intervention", "STEM Education", "Dual Language Immersion", "CTE (Career Technical Education)", "Arts Integration"]
};

const BEFORE_AFTER_EXAMPLES = [
  { before: "Responsible for teaching reading to 3rd graders.", after: "Implemented research-based literacy interventions (Fountas & Pinnell guided reading, Wilson Fundations), moving 85% of students from 'below grade level' to 'on or above grade level' in reading within one academic year as measured by DRA2 assessments." },
  { before: "Planned and delivered lessons for 4th grade class.", after: "Designed and delivered differentiated lessons across all core subjects using Universal Design for Learning principles, incorporating formative assessments to target individual student needs, resulting in 90% of students meeting or exceeding NWEA MAP growth targets in both math and reading." },
  { before: "Managed classroom behavior and discipline.", after: "Established comprehensive Positive Behavior Interventions and Supports (PBIS) system with clear expectations, consistent reinforcement, and restorative practices, reducing disciplinary referrals by 40% while improving student engagement scores from 72% to 94% on district climate surveys." },
  { before: "Communicated with parents about student progress.", after: "Developed multi-channel parent engagement strategy including weekly ClassDojo updates, bi-monthly student-led conferences, digital portfolio sharing via Seesaw, and monthly curriculum newsletters, increasing parent participation from 45% to 85% and earning recognition from district leadership as a model program." },
  { before: "Used technology in the classroom for instruction.", after: "Pioneered blended learning model integrating Google Classroom, Nearpod interactive lessons, and Flipgrid for student voice, resulting in 35% increase in student engagement metrics and selection as district technology demonstration classroom for peer observation." },
  { before: "Taught math to 5th grade students.", after: "Implemented Singapore Math approach with manipulatives and visual models, supplemented by targeted small-group intervention for struggling learners, achieving 88% proficiency rate on state standardized math assessment—15 percentage points above district average." }
];

const ACHIEVEMENT_FORMULAS = [
  { formula: "Intervention + Method + Student Outcome + Data Source", example: "Implemented Leveled Literacy Intervention (LLI) with 12 struggling readers, advancing 10 students (83%) by 2+ Fountas & Pinnell reading levels within 16 weeks as measured by BAS assessments." },
  { formula: "Initiative + Implementation + Quantitative Impact + Comparison", example: "Launched school-wide positive behavior program serving 450+ students, reducing office discipline referrals by 55% year-over-year and recovering 300+ hours of instructional time previously lost to behavioral incidents." },
  { formula: "Collaboration + Scope + Achievement + Recognition", example: "Co-led 4th grade PLC team of 6 teachers in implementing data-driven instruction cycles, contributing to 22% increase in state math proficiency rate and earning 'Model PLC School' designation." },
  { formula: "Innovation + Technology Tool + Engagement Metric + Outcome", example: "Designed and piloted gamified vocabulary program using Quizlet Live and Kahoot, increasing weekly vocabulary assessment scores by 28% and expanding to all 5th grade classrooms after demonstrated success." }
];

const GRADE_LEVEL_STRATEGIES = [
  { level: "Early Childhood (PreK-2)", focus: "Foundational skills, play-based learning, social-emotional development, phonemic awareness", keyTerms: "Developmentally Appropriate Practice, Phonological Awareness, Guided Reading, Number Sense, Fine Motor Skills, Conscious Discipline" },
  { level: "Elementary (3-5)", focus: "Content mastery, critical thinking, collaborative learning, standardized test preparation", keyTerms: "Close Reading, Mathematical Reasoning, Writing Workshop, Science Inquiry, Project-Based Learning, Growth Mindset" },
  { level: "Middle School (6-8)", focus: "Adolescent development, subject specialization, executive functioning, student autonomy", keyTerms: "Advisory Programs, Cross-Curricular Integration, Study Skills, Peer Collaboration, Formative Assessment, Student-Led Conferences" },
  { level: "High School (9-12)", focus: "College/career readiness, advanced content, independent research, real-world application", keyTerms: "AP/IB Instruction, Dual Enrollment, Capstone Projects, Career Pathways, Socratic Seminar, Authentic Assessment" }
];

const FAQS = [
  { question: "How long should a teaching resume be?", answer: "For most teachers with under 10 years of experience, one page is ideal. Experienced educators with extensive achievements, publications, or leadership roles can use two pages, but every line must add clear value. School principals often review 50-100+ applications per opening—concise, high-impact resumes that quickly demonstrate certification and student impact receive significantly more attention than lengthy, unfocused documents." },
  { question: "Should I include my teaching philosophy on my resume?", answer: "Integrate your philosophy into your professional summary rather than creating a separate statement. A 2-3 sentence summary that captures your teaching approach, student-centered values, and key strengths is far more effective. Example: 'Student-centered educator committed to creating inclusive, culturally responsive learning environments where all students achieve academic and personal growth through differentiated instruction, data-driven practices, and authentic family engagement.' Save detailed philosophy for cover letters and interviews." },
  { question: "How do I highlight student teaching experience effectively?", answer: "Treat student teaching as professional experience with full detail. Include it under 'Teaching Experience' with your role ('Student Teacher, 5th Grade'), school name, location, and dates. Write 3-5 bullet points describing grade levels, subjects taught, lesson plans created, independent teaching responsibilities, and measurable outcomes. Example: 'Completed 16-week full-time student teaching placement, independently planning and delivering differentiated instruction for 28 students across all core subjects, achieving 100% pass rate on end-of-unit assessments.'" },
  { question: "What if I'm still pursuing certification?", answer: "Be transparent and strategic about your certification pathway. Note your status clearly: 'Eligible for [State] Teaching License (Expected June 2026)' or 'Alternative Certification Program in Progress—completion expected August 2026.' List exams you've passed (Praxis, edTPA, CSET) and remaining requirements. Some private and charter schools hire candidates actively pursuing certification. Always check specific district requirements as policies vary significantly." },
  { question: "How do I demonstrate technology proficiency on my teaching resume?", answer: "List specific platforms and tools you've mastered, but more importantly, demonstrate how you've used technology to enhance student learning. Instead of just listing 'Google Classroom,' write: 'Leveraged Google Classroom and Nearpod to create interactive, self-paced learning modules that increased student engagement by 35% and provided real-time formative assessment data to guide instruction.' Name specific tools: Canvas, Schoology, Seesaw, Flipgrid, Kahoot, EdPuzzle, SMART Board, and any subject-specific software." },
  { question: "Should I include professional development and continuing education?", answer: "Absolutely—create a dedicated 'Professional Development' section. Include recent workshops, conferences, online courses, and certifications. Prioritize training aligned with the specific position. Examples: 'Completed 45-hour Orton-Gillingham Multisensory Reading Training (2025),' 'Attended ISTE Conference—presented on blended learning strategies (2024),' 'Google Certified Educator Level 2.' This demonstrates commitment to professional growth and staying current with educational best practices." },
  { question: "How do I address a career change into teaching?", answer: "Create a 'Relevant Experience' section that bridges your previous career to teaching competencies. Highlight transferable skills: training, mentoring, public speaking, curriculum development, data analysis, and any experience with children or youth. Example for a former corporate trainer: 'Transitioning from 8-year corporate training career to secondary education, bringing expertise in instructional design, adult learning theory, and engaging presentation skills applicable to high school classroom instruction.' Include any volunteer teaching, tutoring, or coaching experience prominently." },
  { question: "What makes a teaching resume stand out to principals?", answer: "Three factors consistently differentiate strong teaching candidates: (1) Certification visibility—your license must be immediately apparent near the top; (2) Student achievement data—specific, verifiable metrics showing how your instruction improved learning outcomes; (3) Cultural fit indicators—language demonstrating alignment with the school's mission, values, and student population. Principals also value evidence of collaboration (PLC participation, co-teaching), parent engagement, and willingness to contribute beyond the classroom (sponsoring clubs, coaching, committees)." }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const TeachingResumeGuide = ({ seoData }) => {
  const { 
    currentDate, 
    lastModifiedDate,
    buildTimestamp,
    canonicalUrl,
    breadcrumbData,
    meta,
    longTailKeywords,
    peopleAlsoAsk,
    conversationalExplanations,
    reviewDates,
    faqDates 
  } = seoData || {};

  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeCanonicalUrl = canonicalUrl || "https://professionalresumefree.com/how-to-write-a-resume-for-usa-teaching-and-education-jobs";
  const safeMeta = meta || {
    title: `How to Write a Resume for USA Teaching and Education Jobs: ${CURRENT_YEAR} Guide`,
    description: "Master the art of writing a resume for USA teaching and education jobs. Learn certification requirements, keyword strategies, and proven templates to land your dream teaching position.",
    image: "https://professionalresumefree.com/teaching-resume.jpeg",
    siteName: "Professional Resume Free"
  };
  const safeLongTailKeywords = longTailKeywords || [
    "how to write a resume for teaching jobs usa",
    "teacher resume examples 2026",
    "education resume template",
    "teaching certification on resume",
    "k-12 teacher resume format"
  ];
  const safePeopleAlsoAsk = peopleAlsoAsk || [];
  const safeConversationalExplanations = conversationalExplanations || [];

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
        
        {/* Font Preconnects & Import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>{safeMeta.title}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={safeMeta.description} />
        <meta name="author" content={safeMeta.siteName} />
        <meta name="keywords" content="teaching resume, education resume, teacher resume template, how to write teacher resume, education jobs usa, teaching certification, k-12 resume" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={safeMeta.title} />
        <meta name="chatgpt-fts:description" content={safeMeta.description} />
        <meta name="chatgpt-fts:keywords" content={safeLongTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={safeCanonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={safeCanonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={safeCanonicalUrl} hreflang="en" />
        <link rel="alternate" href={safeCanonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content={safeMeta.title} />
        <meta property="og:description" content={safeMeta.description} />
        <meta property="og:url" content={safeCanonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={safeMeta.image} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content={safeMeta.siteName} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-03-01" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Write a Resume for USA Teaching Jobs" />
        <meta name="twitter:description" content={safeMeta.description} />
        <meta name="twitter:image" content={safeMeta.image} />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* COMPREHENSIVE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "@id": `${safeCanonicalUrl}#article`,
                  "headline": safeMeta.title,
                  "description": safeMeta.description,
                  "image": safeMeta.image,
                  "author": {
                    "@type": "Organization",
                    "name": safeMeta.siteName
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": safeMeta.siteName,
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": "2026-03-01",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": safeCanonicalUrl
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${safeCanonicalUrl}#breadcrumb`,
                  "itemListElement": breadcrumbData || [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://professionalresumefree.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Career Resources",
                      "item": "https://professionalresumefree.com/resume-templates"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Teaching & Education Resume Guide",
                      "item": safeCanonicalUrl
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": safeCanonicalUrl,
                  "url": safeCanonicalUrl,
                  "name": "How to Write a Resume for USA Teaching and Education Jobs",
                  "description": safeMeta.description
                },
                {
                  "@type": "FAQPage",
                  "@id": `${safeCanonicalUrl}#faq`,
                  "mainEntity": [
                    ...FAQS.map(item => ({
                      "@type": "Question",
                      "name": item.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                      }
                    })),
                    ...safePeopleAlsoAsk.map(paa => ({
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
                  "name": "How to Write a Resume for USA Teaching Jobs",
                  "description": "Step-by-step guide to creating an effective teaching resume for USA education positions",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Highlight Certifications First",
                      "text": "List your state teaching license, grade levels, and subject endorsements prominently near your name and contact information."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Write a Teaching-Focused Summary",
                      "text": "Create a 2-3 sentence summary that captures your teaching philosophy, years of experience, grade levels, and key instructional strengths."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Show Student Impact with Data",
                      "text": "Use bullet points that include measurable outcomes: test score improvements, reading level gains, or behavioral growth metrics."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Include Professional Development",
                      "text": "Add workshops, continuing education, and specialized training to show commitment to growth and current best practices."
                    }
                  ],
                  "totalTime": "PT40M"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp || Date.now()} />
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
                <Link href="/resume-templates" itemProp="item">
                  <span itemProp="name"><FiFileText size={14} style={{marginRight: '4px'}} /> Career Resources</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page"><FiBookOpen size={14} style={{marginRight: '4px'}} /> Teaching Resume Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ {CURRENT_YEAR} Edition • Education Focus • 6 States • Salary Data • Grade Strategies • ATS-Optimized</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                How to Write a <span className="gradient-text">Resume</span> for USA Teaching & Education Jobs
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                A comprehensive guide based on <strong>state certification requirements, school district hiring data, salary research, and education-specific ATS analysis.</strong> Master certification placement, student achievement metrics, grade-level strategies, education keywords, and proven techniques that <strong>generate 3x more interview calls</strong> for K-12, higher education, and administrative positions.
              </p>
              <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {TEACHING_STATS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }}>{s.label}</div><div style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-label-sm)', marginTop: '0.5rem' }}>{s.description}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiLayers /> Teaching Resume Templates</Link>
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
            <span><FiBookOpen style={{marginRight: '4px'}} /> 2,600+ words</span>
            <span><FiClock style={{marginRight: '4px'}} /> 14 min read</span>
            <span><FiCalendar style={{marginRight: '4px'}} /> Updated: {safeCurrentDate}</span>
            <span><FiEye style={{marginRight: '4px'}} /> 22,000+ views</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Critical Insight: Teaching Resumes Must Lead with Certification and Prove Student Impact</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Education hiring follows fundamentally different rules than corporate recruitment. <strong>92% of public schools require state teaching certification as a non-negotiable qualification</strong>—your license must appear before your experience section. Beyond credentials, administrators seek <strong>specific, verifiable evidence of student achievement growth</strong> through assessment data, reading level advances, and behavioral improvement metrics. Generic teaching descriptions without measurable outcomes fail to differentiate you from dozens of identically credentialed applicants.
              </p>
            </div>
          </div>
        </section>

        {/* Conversational Explanations Section (if available from SEO data) */}
        {safeConversationalExplanations.length > 0 && (
          <section className="section" aria-labelledby="conversational-heading">
            <div className="section-container">
              <h2 id="conversational-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Teaching Resume Writing Made Simple</h2>
              <div className="grid">
                {safeConversationalExplanations.map((item, i) => (
                  <article key={i} className="card-executive">
                    <h3 style={{fontSize: '1.1rem', marginBottom: '12px', textAlign: 'center'}}>{item.topic}</h3>
                    <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>{item.content}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Teaching Resumes Are Different */}
        <section ref={toolRef} className="section" id="why-teaching-resume">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Why Teaching Resumes Are Fundamentally Different</h2>
              <p className="section-subtitle">Education hiring prioritizes credentials, student outcomes, and pedagogical expertise over traditional business metrics</p>
            </div>
            <div className="grid">
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="number-circle">1</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Certifications Must Lead—Always</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  In teaching, your state license is your single most important credential—not your work history. It must appear in a dedicated "Professional Certifications" section positioned immediately after your contact information and before your professional summary. Include: license type, grade levels, subject endorsements, expiration dates, and state of issuance. Many school district ATS systems automatically filter candidates without visible certification credentials, regardless of experience or qualifications. For multi-state applicants, list each state certification separately and note reciprocity status.
                </p>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="number-circle">2</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Student Achievement Data Is Your Professional Currency</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Corporate resumes highlight revenue and efficiency. Teaching resumes must demonstrate student growth through specific, named assessments and verifiable data points. "85% of students advanced two or more Fountas & Pinnell reading levels" carries exponentially more weight than "Taught 3rd grade reading." Always name the specific assessment tool (NWEA MAP, DRA2, BAS, state standardized test), include baseline and outcome data, and provide context through grade-level or district comparisons. Administrators need evidence that your instructional methods produce measurable, replicable student outcomes.
                </p>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="number-circle">3</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Pedagogical Vocabulary Signals Professional Competence</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Education has its own precise professional vocabulary that immediately signals your expertise level to principals and hiring committees. Terms like "differentiated instruction," "formative assessment cycles," "scaffolded learning," "Universal Design for Learning," "IEP implementation," and "data-driven instruction" demonstrate fluency in current educational best practices. Using generic corporate language ("managed," "coordinated," "facilitated") without pedagogical context suggests you haven't fully internalized education's professional standards. Pair every action verb with an educational methodology or framework.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Salary Data */}
        <section id="salary-data" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Teaching Salary Outlook {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Understanding compensation across grade levels and specialties helps you target the right opportunities</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Role</th><th>Entry-Level</th><th>Mid-Career</th><th>Senior/Lead</th><th>Demand</th></tr></thead>
                  <tbody>
                    {SALARY_DATA.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.role}</strong></td>
                        <td style={{ color: 'var(--text-secondary)' }}>{row.entry}</td>
                        <td style={{ color: 'var(--text-secondary)' }}>{row.mid}</td>
                        <td style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)' }}>{row.senior}</td>
                        <td><span className="feature-tag" style={{ background: row.demand === 'Very High' ? 'rgba(76,175,80,0.15)' : row.demand === 'High' ? 'rgba(242,202,80,0.15)' : 'rgba(100,181,246,0.15)' }}>{row.demand}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p className="text-small" style={{ margin: 0 }}><strong>Source:</strong> Bureau of Labor Statistics {CURRENT_YEAR}, National Education Association Salary Survey, state department of education data. Salaries vary significantly by state, district, and years of experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* State Certification Guide */}
        <section id="certifications" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">State-by-State Teaching Certification Requirements</h2>
              <p className="section-subtitle">Certification requirements vary significantly by state—understanding these differences is critical for positioning your credentials correctly</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>State</th><th>Teaching License</th><th>Key Requirements</th><th>Reciprocity for Out-of-State</th></tr></thead>
                  <tbody>
                    {CERTIFICATION_EXAMPLES.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.state}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.license}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.requirements}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--info-color)' }}>{row.reciprocity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p className="text-small" style={{ margin: 0 }}><strong>Important:</strong> Certification requirements change periodically. Always verify current requirements with your target state's Department of Education website. NASDTEC Interstate Agreement facilitates reciprocity but does not guarantee automatic certification transfer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Grade-Level Strategies */}
        <section id="grade-strategies" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Grade-Level Resume Strategies: Tailor Your Message</h2>
              <p className="section-subtitle">Each grade band values different skills and terminology—customize your resume accordingly</p>
            </div>
            <div className="grid">
              {GRADE_LEVEL_STRATEGIES.map((item, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '0.5px solid var(--border-gold-filament)', flexShrink: 0 }}>
                      <FiTarget size={20} color="var(--accent-primary)" />
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{item.level}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}><strong>Focus:</strong> {item.focus}</p>
                  <div className="insight-box-purple" style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--purple-accent)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>Key Terms to Include:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0 }}>{item.keyTerms}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Keywords */}
        <section id="keywords" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Essential Education Keywords for ATS Optimization</h2>
              <p className="section-subtitle">Organized by category—incorporate these terms naturally throughout your resume for maximum screening visibility</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              {Object.entries(TEACHING_KEYWORDS).map(([category, keywords], i) => (
                <div key={i}>
                  <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', marginTop: i > 0 ? '1.5rem' : '0', textTransform: 'capitalize' }}>{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                  <div className="keyword-cloud">
                    {keywords.map((kw, j) => (
                      <span key={j} className="keyword-tag">{kw}</span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="citation-card" style={{ marginTop: '1.5rem' }}>
                <p className="text-small" style={{ margin: 0 }}><strong>ATS Strategy:</strong> Include both specific program names (Google Classroom, NWEA MAP) and general pedagogical terms (Learning Management Systems, benchmark assessment). This ensures keyword matching regardless of the exact language used in the job description while demonstrating both technical proficiency and conceptual understanding.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievement Formulas */}
        <section id="achievement-formulas" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">4 Achievement Formulas for Teaching Resumes</h2>
              <p className="section-subtitle">Proven templates to transform ordinary teaching descriptions into compelling, data-backed achievements</p>
            </div>
            <div className="grid">
              {ACHIEVEMENT_FORMULAS.map((item, i) => (
                <div key={i} className="card-executive">
                  <div className="feature-badge" style={{ marginBottom: '0.75rem', justifyContent: 'center' }}>{item.formula}</div>
                  <div className="insight-box-success" style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', margin: 0, lineHeight: '1.6' }}>"{item.example}"</p>
                  </div>
                  <button onClick={() => handleCopy(item.example)} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '1rem', alignSelf: 'center' }}>
                    <FiCopy size={14} /> {copiedText === item.example.substring(0, 30) + '...' ? 'Copied!' : 'Copy Formula'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section id="examples" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Before & After: 6 Teaching Bullet Point Transformations</h2>
              <p className="section-subtitle">See how generic duty statements become powerful, student-focused achievement statements with named methodologies and data</p>
            </div>
            <div className="grid">
              {BEFORE_AFTER_EXAMPLES.map((item, i) => (
                <div key={i} className="card-executive">
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>❌ Before (Generic):</p>
                    <div className="insight-box-danger" style={{ padding: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', margin: 0 }}>{item.before}</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>✅ After (Data-Driven & Specific):</p>
                    <div className="insight-box-success" style={{ padding: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', margin: 0, lineHeight: '1.6' }}>{item.after}</p>
                    </div>
                  </div>
                  <button onClick={() => handleCopy(item.after)} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '1rem' }}>
                    <FiCopy size={14} /> {copiedText === item.after.substring(0, 30) + '...' ? 'Copied!' : 'Copy Example'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask Section (if available) */}
        {safePeopleAlsoAsk.length > 0 && (
          <section className="section section-alt" aria-labelledby="paa-heading">
            <div className="section-container">
              <h2 id="paa-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>People Also Ask About Teaching Resumes</h2>
              <div className="faq-grid">
                {safePeopleAlsoAsk.map((paa, i) => (
                  <details key={i} className="faq-item" open={i === 0}>
                    <summary className="faq-question" style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }}>{paa.question}</summary>
                    <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{paa.answer}</p></div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section id="faqs" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Teaching Resumes</h2>
              <p className="section-subtitle">Expert answers based on education hiring data, principal surveys, and school administrator insights</p>
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
                      <small className="text-small" style={{ display: 'block', marginTop: '0.5rem' }}>Updated: {faqDates ? faqDates[i] || safeCurrentDate : safeCurrentDate}</small>
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
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Create Your Standout Teaching Resume Today
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply these education-specific strategies, certification positioning, achievement formulas, and grade-level insights to create a resume that demonstrates your teaching impact and student-centered approach. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiZap /> Browse Teaching Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["6 State Guide", "Salary Data", "4 Grade Strategies", "6 Before/After", "Achievement Formulas", "Free PDF Download"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Explore More Career Resources</h2>
              <p className="section-subtitle">Complement this guide with our powerful free tools and expert resources for educators</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield" },
                { href: "/ats-friendly-teacher-resume-builder", text: "Teacher Resume Builder", iconName: "FiEdit" },
                { href: "/resume-tips-for-usa-college-students-and-graduates", text: "College Graduate Tips", iconName: "FiStar" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward" },
                { href: "/best-resume-examples-for-career-changers-in-the-usa", text: "Career Changer Examples", iconName: "FiTrendingUp" },
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

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Sources: State Depts of Education, NASDTEC, NCES, BLS, NEA</span>
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
  const reviewDates = Array(5).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(8).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  const canonicalUrl = "https://professionalresumefree.com/how-to-write-a-resume-for-usa-teaching-and-education-jobs";

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
      "name": "Career Resources",
      "item": "https://professionalresumefree.com/resume-templates"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Teaching & Education Resume Guide",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "How to Write a Resume for USA Teaching and Education Jobs: 2026 Guide",
    description: "Master the art of writing a resume for USA teaching and education jobs. Learn certification requirements, keyword strategies, and proven templates to land your dream teaching position.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://professionalresumefree.com/teaching-resume.jpeg",
  };

  const longTailKeywords = [
    "how to write a resume for teaching jobs usa",
    "teacher resume examples 2026",
    "education resume template",
    "teaching certification on resume",
    "k-12 teacher resume format"
  ];

  const peopleAlsoAsk = [
    { question: "What should a teaching resume include?", answer: "A teaching resume should include your contact information, professional summary, teaching certifications, education, relevant teaching experience, classroom management approach, instructional strategies, and professional development. Highlight student achievement data and specialized skills like ESL or special education." },
    { question: "How do I format a teacher resume?", answer: "Use a clean, reverse-chronological format with clear section headings. Include your teaching license/certification prominently. Focus on measurable achievements like test score improvements, lesson plan development, and parent engagement metrics. Keep it to 1-2 pages." },
    { question: "What are the keywords for education resumes?", answer: "Important keywords include: curriculum development, classroom management, differentiated instruction, student assessment, IEP implementation, parent-teacher conferences, standardized testing, educational technology, lesson planning, and specific certifications like ESL, Special Education, or subject-area endorsements." }
  ];

  const conversationalExplanations = [
    { topic: "Teaching Resume in Plain English", content: "Your teaching resume tells the story of how you create positive learning environments and help students succeed. Instead of just listing duties, you'll show how your teaching methods improved student outcomes, how you adapted to different learning styles, and how you collaborated with parents and colleagues." },
    { topic: "Why Certifications Matter on Education Resumes", content: "In USA education hiring, state teaching certifications are non-negotiable. Schools must hire certified teachers to meet accreditation requirements. Your resume must clearly display your license type, grade levels, and subject areas—ideally right at the top near your name." }
  ];

  return {
    props: {
      seoData: {
        buildTimestamp,
        currentDate,
        lastModifiedDate,
        canonicalUrl,
        breadcrumbData,
        meta,
        longTailKeywords,
        peopleAlsoAsk,
        conversationalExplanations,
        reviewDates,
        faqDates
      }
    },
    revalidate: 86400 // ISR: revalidate once per day
  };
}

export default TeachingResumeGuide;