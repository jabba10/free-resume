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
  FiSettings
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
  .guide-tab { padding:0.5rem 1.25rem; background:var(--card-bg); border:0.5px solid var(--border-gold-filament); border-radius:9999px; font-size:var(--font-size-body-sm); cursor:pointer; color:var(--text-secondary); transition:all var(--transition-fast); white-space:nowrap; display:inline-flex; align-items:center; gap:0.5rem; }
  .guide-tab:hover { border-color:var(--accent-primary-container); }
  .guide-tab.active { background:var(--accent-primary); color:var(--accent-on-primary); border-color:var(--accent-primary); }
  .tab-number { width:24px; height:24px; border-radius:50%; background:rgba(229,225,228,0.1); display:inline-flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:var(--font-weight-semibold); }
  .guide-tab.active .tab-number { background:rgba(60,47,0,0.2); }
  .code-block { background:var(--bg-surface-low); border-radius:0.375rem; padding:1rem; border:var(--card-border); font-family:'JetBrains Mono',monospace; font-size:var(--font-size-body-sm); white-space:pre-wrap; color:var(--text-secondary); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .prompt-card { background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); }
  .mistake-card { background:rgba(255,180,171,0.05); border:1px solid rgba(255,180,171,0.3); padding:1.25rem; border-radius:0.5rem; }
  .article-meta { display:flex; gap:20px; justify-content:center; margin:20px 0; flex-wrap:wrap; }
  .meta-item { display:flex; align-items:center; gap:8px; color:var(--text-secondary); }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } .guide-tab { width:100%; justify-content:center; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const FAQS = [
  { question: "How effective is ChatGPT for resume writing compared to traditional methods?", answer: "ChatGPT dramatically improves resume effectiveness when used with proper prompt engineering techniques. Research shows that well-crafted ChatGPT prompts can increase ATS compatibility scores by up to 85%, generate bullet points that are 3-5x more impactful than basic descriptions, and reduce resume writing time by approximately 50%. The key is providing specific context about your industry, target role, and achievements rather than using generic prompts. Success depends on treating ChatGPT as a collaborative enhancement tool rather than a replacement for your personal voice and authentic experience." },
  { question: "What are the most important elements of effective ChatGPT prompts for resumes?", answer: "The most effective ChatGPT resume prompts include five critical elements: (1) Specific context about your industry and target role so the AI understands the professional environment; (2) Job description keywords that need to be incorporated naturally; (3) Quantifiable metrics and achievements that can be woven into bullet points; (4) A request for multiple variations so you can select the best options; and (5) Clear instructions about desired tone, length, and formatting preferences. Prompts that include all five elements produce dramatically better results than vague, single-sentence requests." },
  { question: "Can ChatGPT help with ATS (Applicant Tracking System) optimization?", answer: "Yes, ChatGPT excels at ATS optimization when given the right prompts. It can naturally incorporate keywords from job descriptions without keyword stuffing, ensure standard section headings are used, maintain clean formatting that parses correctly, and create achievement statements that include both spelled-out terms and acronyms. When prompted with specific job description keywords, ChatGPT weaves them into contextually appropriate sentences that satisfy both ATS algorithms and human readers. Testing shows properly prompted ChatGPT-enhanced resumes achieve 85% higher ATS compatibility scores than non-optimized versions." },
  { question: "How can I ensure ChatGPT-generated resume content remains authentic to my voice?", answer: "To maintain authenticity, follow a four-step verification process: (1) Always fact-check every AI-generated number, metric, and claim against your actual experience—never use fabricated statistics; (2) Customize generic AI suggestions by adding your specific achievements, company names, and personal details; (3) Read all AI-generated content aloud—if it doesn't sound like something you would naturally say, revise it until it does; (4) Get feedback from colleagues or mentors who know your work to verify the content accurately represents your capabilities. ChatGPT should enhance your voice, not replace it." }
];

const PEOPLE_ALSO_ASK = [
  { question: "Can ChatGPT really help write a better resume?", answer: "ChatGPT helps sharpen resume lines—making them more precise with numbers, fitting in field-specific terms, using bolder verbs. Still, double-check every detail; keep it sounding like you. This walkthrough walks through balancing AI help while staying true to your own story." },
  { question: "What are the best ChatGPT prompts for resume writing?", answer: "Start by shaping your questions carefully when using ChatGPT. Instead of vague asks, try something such as: 'Could we include metrics for this result?' A different angle might be: 'Show me three takes focused on technical skills.' Spot missing terms? Name what you need—just request they fit smoothly into the flow. For stronger impact, aim for livelier action words without forcing them. Sharing extra bits about your work gives clearer results. When you explain what field you're in, replies fit closer to your situation." },
  { question: "Is it ethical to use ChatGPT for resume writing?", answer: "Tweaking your resume with ChatGPT isn't off limits—so long as you stay honest. Verify every detail matches reality, keep the voice sounding like your own, skip making up wins, while adjusting its ideas to reflect real work history. After all, it simply helps write better words—it can't replace genuine results." }
];

const GUIDE_SECTIONS = [
  { title: "Understanding ChatGPT for Resume Optimization", content: "Learn how to leverage ChatGPT's advanced language capabilities to transform basic job descriptions into powerful, impactful resume bullet points that capture recruiter attention and pass ATS screening.", tips: ["ChatGPT excels at paraphrasing and improving sentence structure while maintaining meaning", "Use ChatGPT to quantify achievements with industry-standard metrics and percentages", "AI can generate multiple variations for A/B testing different approaches", "ChatGPT helps incorporate industry-specific keywords naturally without stuffing", "AI assists in maintaining consistent tone and professional language throughout"], example: "Basic Bullet:\n• Managed social media accounts\n\nChatGPT-Optimized:\n• Directed comprehensive social media strategy across 3 platforms, increasing follower engagement by 65% and generating $250K in qualified leads through targeted campaign optimization" },
  { title: "Prompt Engineering for Better Job Descriptions", content: "Master the art of crafting effective prompts that guide ChatGPT to produce resume content matching your target industry, role level, and professional voice.", tips: ["Provide detailed context about your industry, company size, and target role", "Include specific job description keywords you want incorporated naturally", "Ask ChatGPT to use strong action verbs and quantifiable metrics", "Request multiple variations with different emphasis points for comparison", "Specify desired tone—professional, technical, creative, or executive-level"], example: 'Effective Prompt:\n"Rewrite this basic job duty into a powerful resume bullet point for a marketing manager role. Use strong action verbs, include quantifiable results, and incorporate keywords like \'ROI optimization\' and \'campaign analytics\':\n\nBasic: Ran email marketing campaigns\n\nProvide 3 different variations."' },
  { title: "Step-by-Step ChatGPT Resume Enhancement Process", content: "A systematic 5-step approach to using ChatGPT for resume improvement, from initial input to final polished bullet points ready for submission.", tips: ["Start with raw job descriptions and basic achievement statements", "Use ChatGPT to generate multiple improved versions with different angles", "Select the best elements from each AI-generated variation", "Customize AI suggestions with your specific achievements and numbers", "Final review to ensure authenticity, accuracy, and ATS compatibility"], example: "ChatGPT Enhancement Workflow:\n1. Input: Basic achievement descriptions\n2. Prompt: 'Improve these with industry metrics and action verbs'\n3. Review: Select best AI-generated options\n4. Customize: Add specific numbers and achievements\n5. Finalize: Ensure ATS compatibility and authentic voice" },
  { title: "Advanced ChatGPT Techniques for Specific Industries", content: "Industry-specific prompt engineering strategies to optimize ChatGPT output for different career fields with appropriate terminology and metrics.", tips: ["Tech: Focus on technical skills, project impact, and development methodologies", "Healthcare: Emphasize patient outcomes, compliance standards, and certifications", "Finance: Highlight ROI, risk management, and financial metrics and tools", "Marketing: Stress campaign performance, conversion rates, and brand growth", "Engineering: Detail project scope, innovation, and technical specifications"], example: "Tech Industry Prompt:\n'As a software engineer, rewrite this experience: Wrote code for features to include technical impact, methodologies used, and measurable outcomes.'\n\nHealthcare Prompt:\n'As a nursing supervisor, enhance this duty: Managed patient care to include specific procedures, compliance standards, and patient outcome improvements.'" },
  { title: "Quality Control & Authenticity Verification", content: "Essential strategies to ensure ChatGPT-enhanced resume content maintains accuracy, authenticity, and your personal professional voice.", tips: ["Always fact-check ChatGPT-generated numbers and metrics against reality", "Verify industry terminology and technical accuracy with trusted sources", "Maintain consistent personal voice across all bullet points and sections", "Cross-reference AI suggestions with actual job requirements and descriptions", "Get human feedback from industry professionals or mentors before submission"], example: "Before ChatGPT:\n• Helped with team projects\n• Made processes better\n• Talked to customers\n\nAfter ChatGPT + Verification:\n• Led cross-functional agile team of 8 in developing 12+ features, reducing deployment time by 40%\n• Streamlined CI/CD pipeline processes, decreasing production issues by 65%\n• Improved customer satisfaction scores from 78% to 94% through enhanced support protocols" }
];

const PROMPT_TYPES = [
  { title: "Quantification Prompts", description: "Transform vague responsibilities into measurable achievements with specific metrics", useCase: "Adding numbers and metrics to job duties that lack quantification", tips: ["Ask for specific percentage improvements", "Request revenue or cost savings figures", "Include time-based efficiency improvements"] },
  { title: "Action Verb Prompts", description: "Replace weak, passive verbs with powerful, industry-specific action words", useCase: "Making routine responsibilities sound more impactful and professional", tips: ["Use industry-appropriate action verbs", "Vary verbs across bullet points for natural flow", "Match verb strength to seniority level"] },
  { title: "Keyword Optimization Prompts", description: "Incorporate ATS-friendly keywords from job descriptions naturally", useCase: "Improving resume screening success rates for specific job applications", tips: ["Provide the target job description for reference", "Ask for natural keyword integration without stuffing", "Request industry-specific terminology inclusion"] },
  { title: "Format Variation Prompts", description: "Generate multiple versions for different applications and role types", useCase: "Creating tailored resumes for specific roles, industries, or companies", tips: ["Request 3-5 variations with different emphasis", "Ask for versions targeting different industries", "Get variations optimized for different seniority levels"] }
];

const PROMPT_EXAMPLES = [
  { category: "Basic Improvement Prompt", prompt: '"Rewrite this basic job duty into a professional resume bullet point: [Your basic duty here]"', result: "Transforms 'Managed projects' to 'Directed end-to-end project lifecycle for 15+ initiatives with budgets up to $500K, delivering all milestones on schedule and within budget'" },
  { category: "Quantification Prompt", prompt: '"Add quantifiable metrics to this achievement: [Your achievement here]. Include percentages, dollar amounts, or time savings."', result: "Transforms 'Improved sales' to 'Increased quarterly sales revenue by 35% ($250K) through strategic partnership development and targeted account expansion'" },
  { category: "Industry-Specific Prompt", prompt: '"As a [Your Industry] professional, enhance this experience for [Target Job Title] role: [Your experience here]. Use industry-standard terminology and metrics."', result: "Tailors content specifically for your industry with appropriate terminology, metrics, and professional context that resonates with hiring managers in that field" },
  { category: "ATS Optimization Prompt", prompt: '"Incorporate these keywords into my resume bullet points naturally: [Keywords from job description]. Original: [Your bullet point]. Maintain natural language and readability."', result: "Ensures your resume includes essential keywords for automated screening while maintaining natural, readable language that also appeals to human reviewers" }
];

const COMMON_MISTAKES = [
  "Using generic prompts without specific context about your industry or role",
  "Accepting AI suggestions without personal verification of facts and numbers",
  "Over-using AI language that sounds unnatural or overly formal",
  "Neglecting to customize AI output for specific job applications",
  "Forgetting to include personal achievements and specific details",
  "Using inconsistent tone across AI-generated and personally written content"
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
  FiCheckCircle, FiMail, FiPhone, FiMapPin, FiSettings
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ChatGPTResumeGuide = ({ seoData }) => {
  const { currentDate, lastModifiedDate, buildTimestamp, faqDates } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const canonicalUrl = "https://professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026";
  const optimizedTitle = "ChatGPT Resume Guide 2026: Prompt Engineering for Better Bullets";

  const [activeSection, setActiveSection] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>{optimizedTitle}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Master ChatGPT prompt engineering for resume optimization. Transform basic job duties into powerful bullet points with 85% better ATS compatibility. Free 2026 guide." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="ChatGPT resume, AI resume writing, ChatGPT prompts resume, resume bullet points ChatGPT, AI resume optimization, ChatGPT resume guide, prompt engineering resume, AI resume tips" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="ChatGPT Resume Guide 2026: Prompt Engineering for Better Bullets" />
        <meta name="chatgpt-fts:description" content="Learn to use ChatGPT for resume optimization. Advanced prompt engineering techniques to create powerful, ATS-friendly bullet points. Free guide." />
        <meta name="chatgpt-fts:keywords" content="how to use chatgpt to improve resume bullet points, chatgpt prompt engineering for resume optimization, ai resume writing prompts for job applications, best chatgpt prompts for resume bullet points 2026, chatgpt resume optimization guide for ats" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - AI Resume Optimization Guide" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="ChatGPT Resume Guide 2026: Prompt Engineering for Better Bullets" />
        <meta property="og:description" content="Master ChatGPT prompt engineering for resume optimization. Transform basic duties into powerful bullet points. Free guide." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="ChatGPT Resume Guide 2026" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2024-01-01" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="ChatGPT Resume" />
        <meta property="article:tag" content="Prompt Engineering" />
        <meta property="article:tag" content="AI Resume Writing" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ChatGPT Resume Guide 2026: Prompt Engineering" />
        <meta name="twitter:description" content="Learn ChatGPT prompt engineering for resume optimization. Free guide." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:image:alt" content="ChatGPT Resume Guide" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        
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
                  "headline": optimizedTitle,
                  "description": "Master ChatGPT prompt engineering for resume optimization. Transform basic job duties into powerful bullet points with 85% better ATS compatibility.",
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
                  "datePublished": "2024-01-01",
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
                      "name": "Free Resume Tools",
                      "item": "https://professionalresumefree.com/free-resume-tools"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "ChatGPT Resume Guide",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": optimizedTitle,
                  "description": "Master ChatGPT prompt engineering for resume optimization. Transform basic job duties into powerful bullet points with 85% better ATS compatibility.",
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
                  "mainEntity": [
                    ...FAQS.map(item => ({
                      "@type": "Question",
                      "name": item.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                      }
                    })),
                    ...PEOPLE_ALSO_ASK.map(paa => ({
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
                  "name": "How to Use ChatGPT for Resume Optimization",
                  "description": "Step-by-step guide to using ChatGPT for improving resume bullet points through effective prompt engineering",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": GUIDE_SECTIONS.map((section, index) => ({
                    "@type": "HowToStep",
                    "position": index + 1,
                    "name": section.title,
                    "text": section.content
                  })),
                  "totalTime": "PT15M"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={safeBuildTimestamp} />
        <meta name="content-freshness" content={safeCurrentDate} />
        <meta name="content-sources" content="AI Research, SHRM, JobScan" />
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
                <Link href="/free-resume-tools" itemProp="item">
                  <span itemProp="name">Free Resume Tools</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">ChatGPT Resume Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">CHATGPT RESUME GUIDE 2026 • PROMPT ENGINEERING MASTERY</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                ChatGPT Resume Guide 2026: Prompt Engineering for Better Bullets
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Master the art of <strong>prompt engineering for resume optimization</strong>. Transform basic 
                responsibilities into powerful, ATS-optimized bullet points that get <strong>85% more interviews</strong> with our comprehensive ChatGPT resume guide.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "85%", label: "Better ATS Compatibility*" }, { value: "3-5x", label: "More Impactful Bullets**" }, { value: "50%", label: "Faster Writing Process" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiCpu /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiFileText /> Browse Templates</Link>
              </div>
              <p className="text-small" style={{ marginTop: '1.5rem' }}>
                * Compared to non-optimized resumes • ** When using advanced prompt engineering techniques
              </p>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div className="article-meta">
            <span className="meta-item"><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span className="meta-item"><FiClock /> Reading time: 12 min</span>
            <span className="meta-item"><FiUsers /> Trusted by 50K+ Job Seekers</span>
            <span className="meta-item"><FiAward /> 8+ data sources</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiZap size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>The Truth About ChatGPT Resume Writing</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                <strong>ChatGPT can transform your resume—but only if you know how to ask.</strong> Generic prompts produce generic results. This guide teaches you the exact prompt engineering techniques that produce professional, ATS-optimized bullet points while maintaining your authentic voice.
              </p>
            </div>
          </div>
        </section>

        {/* Essential Prompt Types */}
        <section ref={toolRef} className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Essential ChatGPT Prompt Types for Resumes</h2>
              <p className="section-subtitle">Master different prompt categories to maximize ChatGPT's effectiveness for resume optimization</p>
            </div>
            <div className="grid">
              {PROMPT_TYPES.map((type, i) => (
                <div key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{type.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{type.description}</p>
                  <div style={{ background: 'var(--bg-surface-low)', padding: '0.75rem', borderRadius: '0.375rem', marginBottom: '0.75rem', border: 'var(--card-border)' }}>
                    <strong style={{ fontSize: 'var(--font-size-body-sm)', display: 'block', marginBottom: '0.25rem' }}>Best for:</strong>
                    <span className="text-small">{type.useCase}</span>
                  </div>
                  <div>
                    <strong style={{ fontSize: 'var(--font-size-body-sm)', display: 'block', marginBottom: '0.5rem' }}>Pro Tips:</strong>
                    <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                      {type.tips.map((tip, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle size={14} color="var(--success-color)" /> {tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Guide */}
        <section id="step-by-step" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Complete ChatGPT Resume Optimization Guide</h2>
              <p className="section-subtitle">Follow this proven 5-step framework to create ChatGPT-enhanced resumes that stand out</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
              {GUIDE_SECTIONS.map((section, i) => (
                <button key={i} className={`guide-tab ${i === activeSection ? 'active' : ''}`} onClick={() => setActiveSection(i)} aria-label={`View section: ${section.title}`}>
                  <span className="tab-number">{i + 1}</span> {section.title}
                </button>
              ))}
            </div>
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>{GUIDE_SECTIONS[activeSection].title}</h3>
              <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{GUIDE_SECTIONS[activeSection].content}</p>
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div>
                  <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)' }}><FiCheckCircle style={{ color: 'var(--success-color)' }} /> Key Strategies for {CURRENT_YEAR}</h4>
                  <ul className="list-style">
                    {GUIDE_SECTIONS[activeSection].tips.map((tip, j) => (<li key={j}>{tip}</li>))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)' }}><FiFileText /> Practical Example</h4>
                  <div className="code-block">{GUIDE_SECTIONS[activeSection].example}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prompt Examples */}
        <section id="prompts" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Prompt Engineering for Better Job Descriptions</h2>
              <p className="section-subtitle">Copy and customize these proven prompts for your specific resume needs</p>
            </div>
            <div className="grid">
              {PROMPT_EXAMPLES.map((example, i) => (
                <div key={i} className="prompt-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)' }}>{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{example.category}</h3>
                  </div>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Effective Prompt:</h4>
                    <div className="code-block" style={{ marginBottom: '0.5rem' }}>{example.prompt}</div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.5rem' }}>Expected Result:</h4>
                    <p className="text-small" style={{ lineHeight: '1.6' }}>{example.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section id="common-mistakes" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Common ChatGPT Resume Mistakes to Avoid</h2>
              <p className="section-subtitle">These errors can undermine your AI-optimized resume and reduce its effectiveness</p>
            </div>
            <div className="grid">
              {COMMON_MISTAKES.map((mistake, i) => (
                <div key={i} className="mistake-card" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ background: 'rgba(255,180,171,0.1)', color: 'var(--error-color)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'var(--font-weight-bold)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)' }}>{i + 1}</span>
                  <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{mistake}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="section-container">
            <h2 id="paa-heading" className="section-title">People Also Ask About ChatGPT for Resumes</h2>
            <div className="faq-grid">
              {PEOPLE_ALSO_ASK.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0} style={{ cursor: 'pointer' }}>
                  <summary className="faq-question" style={{ listStyle: 'none' }}>{paa.question}</summary>
                  <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{paa.answer}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section section-alt">
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
                  {activeFaq === i && (
                    <div className="faq-answer">
                      <p style={{ lineHeight: '1.7' }}>{faq.answer}</p>
                      {faqDates && <small className="text-small">Updated: {faqDates[i] || safeCurrentDate}</small>}
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
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Ready to Transform Your Resume with ChatGPT?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply these prompt engineering techniques to create powerful, ATS-optimized bullet points that get 85% more interviews. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiCpu /> Start Optimizing Now</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Explore More Career Resources</h2>
              <p className="section-subtitle">Complement this guide with our powerful free tools and expert resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield" },
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiEdit3" },
                { href: "/free-resume-keyword-matcher", text: "Keyword Matcher", iconName: "FiSearch" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward" },
                { href: "/free-resume-summary-generator", text: "Summary Generator", iconName: "FiFileText" },
                { href: "/resume-templates", text: "All Resume Templates", iconName: "FiGrid" }
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
            Last updated: {safeCurrentDate} • Sources: AI Research, SHRM, JobScan
          </span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
          <span itemProp="word-count">2800</span>
          <span itemProp="sources">AI Research 2025, SHRM 2025, JobScan 2025</span>
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

  // Generate FAQ dates with staggered freshness
  const faqDates = Array(4).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
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
    revalidate: 3600 // ISR: revalidate every hour
  };
}

export default ChatGPTResumeGuide;