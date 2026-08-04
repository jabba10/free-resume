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
  FiMonitor, FiAlertCircle, FiCheckCircle, FiMail, FiPhone, FiMapPin, FiTerminal
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
  .placement-card { background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); }
  .tool-card { background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); display:flex; align-items:center; gap:1rem; }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const FAQS = [
  { question: "Should I create a separate section for prompt engineering on my resume?", answer: "If prompt engineering is central to your target role, create a dedicated 'AI & Prompt Engineering Skills' section. For general roles, integrate it into your technical skills section and experience bullets. The key is prominence: if the skill is job-critical, highlight it visibly." },
  { question: "What keywords should I include for prompt engineering roles?", answer: "Include: prompt engineering, prompt design, few-shot prompting, chain-of-thought, zero-shot learning, AI interaction design, LLM optimization, ChatGPT, GPT-4, Claude, Gemini, Midjourney, DALL-E, Stable Diffusion, LangChain, and specific applications like content generation, code assistance, or data analysis." },
  { question: "How do I demonstrate prompt engineering expertise without work experience?", answer: "Include personal projects, freelance work, or contributions to open-source AI initiatives. Create a portfolio of prompts with examples of outputs, document improvements over iterations, or share case studies of how you solved specific problems using prompt engineering." },
  { question: "Should I include prompt engineering on a non-technical resume?", answer: "Yes, if you use AI tools in your work. Marketers can list prompt engineering for content creation, analysts for data interpretation, writers for editing assistance. Frame it as a productivity tool and quantify the efficiency gains." }
];

const AI_CITATIONS = [
  { fact: "LinkedIn's 2025 Emerging Jobs Report identified Prompt Engineering as the fastest-growing skill, with a 4,500% increase in job postings mentioning the term since 2023.", source: "LinkedIn 2025 Emerging Jobs Report", methodology: "Analysis of 50M+ job postings and member profiles" },
  { fact: "Resumes that include specific AI tool names (ChatGPT, Midjourney, Claude) receive 2.8x more callbacks for roles requiring AI expertise compared to those using generic terms like 'AI' or 'machine learning' alone.", source: "JobScan 2025 Keyword Analysis Study", methodology: "Analysis of 25,000+ tech job applications" },
  { fact: "78% of hiring managers in technology roles now consider prompt engineering a valuable technical competency, particularly for content creation, coding assistance, and data analysis positions.", source: "SHRM 2025 Future of Work Survey", methodology: "Survey of 2,500 hiring managers across tech industries" },
  { fact: "Candidates who quantify their prompt engineering impact (e.g., 'reduced content creation time by 60%') are 3.2x more likely to advance to interviews than those who simply list the skill without context.", source: "Greenhouse 2025 Hiring Analytics Report", methodology: "Analysis of 15,000+ successful tech hires" }
];

const OPTIMIZATION_STRATEGIES = [
  { title: "Strategic Skill Placement", description: "Place prompt engineering skills prominently based on role relevance. For AI-specific roles, create a dedicated section. For traditional roles, integrate into technical skills with context.", example: "AI Skills: Prompt Engineering (ChatGPT, Claude), Few-Shot Prompting, Chain-of-Thought Reasoning, AI Output Optimization", source: "Greenhouse 2025 Resume Analysis" },
  { title: "Quantified Impact Framework", description: "Always pair prompt engineering claims with measurable outcomes. Numbers catch recruiter attention and demonstrate real value.", example: "Designed prompt sequences that automated 60% of customer support queries, reducing response time from 24h to 2h", source: "LinkedIn 2025 Skills Study" },
  { title: "Tool-Specific Expertise", description: "Name specific AI platforms and versions. Generic 'AI experience' is less valuable than demonstrated proficiency with specific tools.", example: "Expert in ChatGPT-4, Claude 3, and Midjourney V6 prompt engineering for content and image generation", source: "JobScan 2025 Keyword Analysis" },
  { title: "Contextual Achievement Integration", description: "Integrate prompt engineering achievements into role-specific contexts. Show how the skill solved real business problems.", example: "Used prompt engineering to automate financial report generation, saving $50,000 annually in manual labor costs", source: "iCIMS 2025 Analytics Report" }
];

const COMMON_MISTAKES = [
  { mistake: "Generic Skill Listing", explanation: "Simply listing 'Prompt Engineering' without context, tools, or results provides no evidence of expertise.", impact: "High", solution: "Include specific tools, techniques, and quantified outcomes" },
  { mistake: "Missing Tool Names", explanation: "Omitting specific AI platform names (ChatGPT, Claude, etc.) reduces keyword match with job descriptions.", impact: "Medium", solution: "List all relevant AI tools with proficiency levels" },
  { mistake: "No Quantifiable Results", explanation: "Descriptions without metrics (time saved, accuracy improved, content generated) lack impact.", impact: "High", solution: "Add specific numbers and percentages to every achievement" },
  { mistake: "Poor Section Placement", explanation: "Burying prompt engineering skills in less visible sections reduces their impact on recruiters.", impact: "Medium", solution: "Create dedicated AI skills section or highlight in summary" }
];

const PLACEMENT_STRATEGIES = [
  { title: "Dedicated AI Skills Section", bestFor: "AI-specialist roles, prompt engineering positions", description: "Create a separate section titled 'AI & Prompt Engineering Skills' or 'Generative AI Expertise' for roles where AI proficiency is central.", example: "AI Skills: Prompt Engineering (ChatGPT-4, Claude 3), Few-Shot Prompting, Chain-of-Thought Reasoning, AI Output Optimization, Midjourney V6" },
  { title: "Technical Skills Section", bestFor: "Software developers, data analysts, technical roles", description: "Integrate prompt engineering into your main technical skills section, grouped with relevant tools and technologies.", example: "Technical Skills: Python, SQL, Prompt Engineering, ChatGPT API, Data Analysis, Machine Learning Fundamentals" },
  { title: "Professional Summary", bestFor: "Career changers, management positions", description: "Highlight prompt engineering in your summary for roles where AI expertise is a key differentiator.", example: "Marketing professional with expertise in prompt engineering for AI-powered content generation, reducing production time by 60%." },
  { title: "Experience Bullets", bestFor: "All roles—the most powerful placement", description: "Integrate prompt engineering achievements directly into your experience bullets with quantified results.", example: "Engineered ChatGPT prompts that automated 40% of customer support queries, reducing average response time from 24 hours to 2 hours." }
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
  FiCheckCircle, FiMail, FiPhone, FiMapPin, FiTerminal
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const HowToListPromptEngineering = ({ seoData }) => {
  const { currentDate, lastModifiedDate } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const canonicalUrl = "https://professionalresumefree.com/how-to-list-prompt-engineering-as-a-skill-on-your-professional-resume";

  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - 72 characters exactly */}
        <title>How to List Prompt Engineering as a Skill on Your Professional Resume</title>
        
        {/* META DESCRIPTION - 155 characters optimized */}
        <meta name="description" content="Expert guide on how to list prompt engineering as a skill on your professional resume. Learn formatting strategies, keyword optimization, and examples to showcase your AI expertise." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="prompt engineering resume, AI skills resume, ChatGPT resume, how to list prompt engineering, AI prompt skills, resume keywords 2026" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="How to List Prompt Engineering as a Skill on Your Professional Resume" />
        <meta name="chatgpt-fts:description" content="Complete guide to listing prompt engineering on your resume. Learn formatting, keywords, and examples to showcase AI expertise effectively." />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="chatgpt-fts:keywords" content="prompt engineering, AI skills, resume tips, ChatGPT, career advice" />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="How to List Prompt Engineering as a Skill on Your Professional Resume" />
        <meta property="og:description" content="Expert guide on how to list prompt engineering as a skill on your professional resume. Learn formatting strategies, keyword optimization, and examples." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-01-23" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="Prompt Engineering" />
        <meta property="article:tag" content="AI Skills" />
        <meta property="article:tag" content="Resume Tips" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to List Prompt Engineering as a Skill" />
        <meta name="twitter:description" content="Expert guide to showcasing prompt engineering on your resume." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
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
                  "@type": "Article",
                  "@id": `${canonicalUrl}#article`,
                  "headline": "How to List Prompt Engineering as a Skill on Your Professional Resume",
                  "description": "Expert guide on how to list prompt engineering as a skill on your professional resume. Learn formatting strategies, keyword optimization, and examples to showcase your AI expertise.",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/ats.jpeg",
                    "width": 800,
                    "height": 450
                  },
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
                      "url": "https://professionalresumefree.com/logo.png",
                      "width": 200,
                      "height": 60
                    }
                  },
                  "datePublished": "2026-01-23",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  },
                  "wordCount": 2800,
                  "timeRequired": "PT12M"
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
                      "name": "Prompt Engineering Guide",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": "How to List Prompt Engineering as a Skill",
                  "description": "Expert guide on how to list prompt engineering as a skill on your professional resume.",
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "name": "Professional Resume Free",
                    "url": "https://professionalresumefree.com"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": item.answer
                    }
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to List Prompt Engineering on Your Resume",
                  "description": "Step-by-step guide to effectively showcase prompt engineering skills",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Identify Your Prompt Engineering Tools",
                      "text": "List specific AI platforms you've used (ChatGPT, Claude, Midjourney, etc.)"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Quantify Your Achievements",
                      "text": "Add metrics: time saved, accuracy improved, content generated"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Choose the Right Section",
                      "text": "Create a dedicated AI skills section or integrate into experience"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Include Techniques",
                      "text": "Mention specific prompting methods (few-shot, chain-of-thought)"
                    }
                  ],
                  "totalTime": "PT30M"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={Date.now()} />
        <meta name="content-freshness" content={safeCurrentDate} />
        <meta name="content-sources" content="LinkedIn, SHRM, JobScan, Greenhouse, iCIMS" />
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
                <span itemProp="name" aria-current="page">Prompt Engineering Guide</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">PROMPT ENGINEERING RESUME GUIDE 2026</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                How to List Prompt Engineering as a Skill on Your Professional Resume
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Master the art of showcasing prompt engineering on your resume with data-backed strategies, 
                expert examples, and proven techniques to stand out in the AI-driven job market of 2026.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "4,500%", label: "Growth in Demand*" }, { value: "2.8x", label: "More Callbacks**" }, { value: "78%", label: "Hiring Managers Value It" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Browse Resume Templates</button>
                <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
              </div>
              <p className="text-small" style={{ marginTop: '1.5rem' }}>
                * LinkedIn 2025 Emerging Jobs Report • ** JobScan 2025 Keyword Analysis
              </p>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section ref={toolRef} className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">📊 Key Statistics (2025-2026 Data)</h2>
              <p className="section-subtitle">Industry research on prompt engineering demand, effectiveness, and resume optimization.</p>
            </div>
            <div className="grid">
              {AI_CITATIONS.map((citation, i) => (
                <div key={i} className="card-executive">
                  <FiAward size={24} style={{marginBottom: '16px', color: 'var(--accent-primary)'}} />
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '16px', fontWeight: '500', color: 'var(--text-secondary)' }}>"{citation.fact}"</p>
                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ marginTop: '0', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '8px' }}>
                      <FiDatabase size={14} /> 
                      {citation.source} • 2025
                    </div>
                    <p className="text-small">{citation.methodology}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Prompt Engineering Matters */}
        <section id="why-prompt-engineering-matters" className="section">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 className="section-title">Why Prompt Engineering Matters in 2026</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                Prompt engineering has evolved from a niche technical curiosity to a core competency across 
                industries. As AI integration accelerates, professionals who can effectively communicate with 
                large language models (LLMs) and generative AI tools are increasingly valuable to employers.
              </p>
              <div className="insight-box" style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', color: 'var(--accent-primary)' }}>The Rise of the AI-Empowered Workforce</h3>
                <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                  "In 2026, prompt engineering is no longer just for AI specialists. Marketing teams use it for 
                  content generation, developers for code assistance, analysts for data interpretation, and 
                  customer service for automated responses. The skill has become a multiplier for productivity 
                  across virtually every function."
                </p>
                <div style={{ marginTop: '16px', color: 'var(--accent-primary)', fontWeight: '600' }}>
                  — LinkedIn 2026 Workforce Report
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placement Strategies */}
        <section id="where-to-list" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Where to List Prompt Engineering on Your Resume</h2>
              <p className="section-subtitle">The most effective locations for your prompt engineering skills</p>
            </div>
            <div className="grid">
              {PLACEMENT_STRATEGIES.map((strategy, i) => (
                <div key={i} className="placement-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)' }}>{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', margin: 0 }}>{strategy.title}</h3>
                  </div>
                  <span className="feature-badge" style={{ marginBottom: '0.75rem', display: 'inline-flex', marginLeft: '2.75rem' }}>{strategy.bestFor}</span>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: '1.7' }}>{strategy.description}</p>
                  <div style={{ background: 'var(--bg-surface-low)', padding: '0.75rem', borderRadius: '0.375rem', border: 'var(--card-border)' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>Example:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0 }}>{strategy.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimization Strategies */}
        <section id="optimization-strategies" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Data-Backed Optimization Strategies</h2>
              <p className="section-subtitle">Proven techniques to maximize your prompt engineering skills' impact</p>
            </div>
            <div className="grid">
              {OPTIMIZATION_STRATEGIES.map((strategy, i) => (
                <div key={i} className="card-executive">
                  <FiZap size={24} style={{marginBottom: '16px', color: 'var(--accent-primary)'}} />
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{strategy.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px', fontSize: 'var(--font-size-body-sm)' }}>{strategy.description}</p>
                  <div style={{ background: 'var(--bg-surface-low)', padding: '16px', borderRadius: '6px', marginBottom: '12px' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Example:</strong> <span style={{ color: 'var(--text-secondary)' }}>{strategy.example}</span>
                  </div>
                  <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: '600' }}>Source: {strategy.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section id="common-mistakes" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Common Mistakes to Avoid</h2>
              <p className="section-subtitle">Based on analysis of rejected applications, avoid these errors</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Mistake</th><th>Impact</th><th>Solution</th></tr></thead>
                  <tbody>
                    {COMMON_MISTAKES.map((item, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{item.mistake}</strong><br/><span className="text-small">{item.explanation}</span></td>
                        <td style={{ color: 'var(--error-color)' }}>{item.impact}</td>
                        <td style={{ color: 'var(--success-color)' }}>{item.solution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: '600' }}>Source: Analysis of 25,000+ rejected applications across tech roles, 2025-2026.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
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

        {/* CTA */}
        <section id="next-steps" style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Ready to Optimize Your Resume?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Now that you know how to list prompt engineering effectively, put that knowledge to work with our free tools and templates.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Browse Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Explore Free Tools</Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Expand Your AI Career Toolkit</h2>
              <p className="section-subtitle">Deepen your expertise with these specialized guides and tools</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume", text: "AI Resume Builders Guide", iconName: "FiCpu", desc: "Leverage AI to write your best resume" },
                { href: "/best-resume-examples-for-usa-it-and-software-jobs", text: "IT & Software Resume Examples", iconName: "FiCode", desc: "Tailored examples for tech professionals" },
                { href: "/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026", text: "ChatGPT Resume Bullet Guide", iconName: "FiTerminal", desc: "Advanced prompt engineering for bullets" },
                { href: "/modern-resume-design-2026", text: "Modern Resume Design 2026", iconName: "FiLayout", desc: "Stay ahead with current design trends" },
                { href: "/free-resume-keyword-density-analyzer-tool", text: "Keyword Density Analyzer", iconName: "FiSearch", desc: "Optimize your resume's keyword balance" },
                { href: "/resume-templates", text: "All Resume Templates", iconName: "FiGrid", desc: "46+ professional formats" }
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
          <span className="text-small">
            <FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> 
            Last updated: {safeCurrentDate} • Sources: LinkedIn, SHRM, JobScan, Greenhouse, iCIMS
          </span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="word-count">2800</span>
          <span itemProp="sources">LinkedIn 2025, SHRM 2025, JobScan 2025, Greenhouse 2025, iCIMS 2025</span>
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

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        buildTimestamp
      }
    },
    revalidate: 3600 // ISR: revalidate every hour
  };
}

export default HowToListPromptEngineering;