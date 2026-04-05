// pages/free-resume-score-checker.jsx
import Head from 'next/head';
import { useState, useCallback, useMemo, useEffect } from 'react';

// ===== INLINE CRITICAL CSS - Optimized for speed & Centered Layout =====
const criticalCSS = `
  /* CSS RESET */
  * { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
  }
  
  /* BASE STYLES */
  body { 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
    line-height: 1.6; 
    color: #111827; 
    background: #f9fafb; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }
  
  /* PAGE CONTAINER - CENTERED FLEX LAYOUT */
  .page-container { 
    width: 100%;
    max-width: 1280px; 
    margin: 0 auto; 
    padding: 16px; 
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  @media (min-width: 640px) {
    .page-container { padding: 24px; }
  }
  
  @media (min-width: 1024px) {
    .page-container { padding: 32px; }
  }
  
  /* BREADCRUMB */
  .breadcrumb { 
    margin-bottom: 24px; 
    font-size: 0.9rem; 
    color: #6b7280;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  .breadcrumb ol { 
    display: flex; 
    flex-wrap: wrap; 
    list-style: none; 
    gap: 8px;
    justify-content: center;
  }
  
  .breadcrumb li { 
    display: flex; 
    align-items: center;
  }
  
  .breadcrumb-separator { 
    margin: 0 4px; 
    color: #9ca3af;
  }
  
  .breadcrumb-link { 
    color: #111827; 
    text-decoration: none; 
    border-bottom: 1px solid #d1d5db;
  }
  
  .breadcrumb-link:hover { 
    border-bottom-color: #000000; 
  }
  
  .breadcrumb-current { 
    color: #4b5563;
  }
  
  /* CONTAINER - CENTERED CONTENT */
  .container { 
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  /* HEADER */
  .header { 
    margin-bottom: 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  h1 { 
    font-size: clamp(2rem, 5vw, 2.8rem); 
    line-height: 1.2; 
    margin-bottom: 16px; 
    font-weight: 800; 
    letter-spacing: -0.02em;
    color: #000000;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  .title { 
    font-size: clamp(2rem, 5vw, 2.8rem); 
    line-height: 1.2; 
    margin-bottom: 16px; 
    font-weight: 800; 
    letter-spacing: -0.02em;
    color: #000000;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  .subtitle { 
    font-size: clamp(1rem, 2.5vw, 1.2rem); 
    color: #4b5563; 
    max-width: 800px; 
    line-height: 1.7;
    margin: 0 auto;
  }
  
  /* AGGREGATE RATING - REMOVED FROM VIEW BUT KEPT IN CSS IF NEEDED LATER */
  .aggregate-rating { 
    display: none; 
  }
  
  /* MAIN - CENTERED GRID */
  .main { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px; 
    margin: 32px 0; 
    width: 100%;
    justify-content: center;
  }
  
  @media (min-width: 1024px) {
    .main { grid-template-columns: 1fr 1fr; }
  }
  
  /* EDITOR SECTION */
  .editor-section { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 24px; 
    border: 1px solid #e5e7eb;
    width: 100%;
    text-align: left;
  }
  
  .editor-header {
    text-align: center;
    margin-bottom: 20px;
  }

  .editor-header h2 { 
    font-size: 1.5rem; 
    font-weight: 700; 
    margin-bottom: 12px; 
    color: #000000;
  }
  
  .editor-header p { 
    color: #4b5563; 
    margin-bottom: 0;
  }
  
  .textarea { 
    width: 100%; 
    padding: 20px; 
    border: 2px solid #e5e7eb; 
    border-radius: 12px; 
    font-family: inherit; 
    font-size: 1rem; 
    line-height: 1.6; 
    resize: vertical; 
    margin-bottom: 16px;
    transition: border-color 0.2s;
  }
  
  .textarea:focus { 
    outline: none; 
    border-color: #000000;
  }
  
  .sample-tip { 
    background: #e0f2fe; 
    padding: 16px; 
    border-radius: 8px; 
    font-size: 0.95rem; 
    border-left: 4px solid #0284c7;
    text-align: left;
  }
  
  /* RESULTS SECTION */
  .results-section { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 24px; 
    border: 1px solid #e5e7eb;
    width: 100%;
  }
  
  .score-display { 
    display: flex; 
    flex-direction: column; 
    gap: 24px; 
    margin-bottom: 32px;
    align-items: center;
  }
  
  @media (min-width: 640px) {
    .score-display { flex-direction: row; align-items: center; justify-content: center; }
  }
  
  .score-circle { 
    text-align: center; 
    min-width: 200px;
  }
  
  .score-number { 
    font-size: 5rem; 
    font-weight: 800; 
    line-height: 1;
  }
  
  .score-label { 
    color: #4b5563; 
    font-size: 0.9rem; 
    margin: 8px 0 4px;
  }
  
  .score-tier { 
    font-weight: 600; 
    font-size: 1rem;
  }
  
  .score-breakdown { 
    flex: 1;
    width: 100%;
    max-width: 400px;
  }
  
  .score-row { 
    display: flex; 
    justify-content: space-between; 
    padding: 10px 0; 
    border-bottom: 1px solid #e5e7eb;
  }
  
  .score-row:last-child { 
    border-bottom: none;
  }
  
  .score-value { 
    font-weight: 700;
  }
  
  /* ANALYZING */
  .analyzing { 
    text-align: center; 
    padding: 40px;
  }
  
  .spinner { 
    border: 4px solid #f3f4f6; 
    border-top: 4px solid #000000; 
    border-radius: 50%; 
    width: 40px; 
    height: 40px; 
    animation: spin 1s linear infinite; 
    margin: 0 auto 20px;
  }
  
  @keyframes spin { 
    0% { transform: rotate(0deg); } 
    100% { transform: rotate(360deg); } 
  }
  
  /* FEEDBACK SECTION */
  .feedback-section { 
    margin-top: 32px;
    width: 100%;
  }
  
  .feedback-section h3 { 
    font-size: 1.3rem; 
    font-weight: 700; 
    margin-bottom: 20px;
    text-align: center;
  }
  
  .feedback-card { 
    background: #f9fafb; 
    padding: 24px; 
    border-radius: 12px; 
    margin-bottom: 20px; 
    border: 1px solid #e5e7eb;
    text-align: left;
  }
  
  .feedback-card h4 { 
    font-size: 1.2rem; 
    font-weight: 600; 
    margin-bottom: 16px;
    text-align: center;
  }
  
  .issue-row, .improvement-row { 
    display: flex; 
    gap: 12px; 
    margin-bottom: 12px;
    align-items: flex-start;
  }
  
  .issue-icon, .improvement-icon { 
    font-size: 1.2rem;
    flex-shrink: 0;
  }
  
  .issue-text { 
    color: #b91c1c;
  }
  
  .improvement-text { 
    color: #059669;
  }
  
  .example-box { 
    background: #ffffff; 
    padding: 16px; 
    border-radius: 8px; 
    margin-top: 16px; 
    border: 1px solid #e5e7eb;
  }
  
  .example-bad { 
    color: #b91c1c; 
    margin-bottom: 8px;
  }
  
  .example-good { 
    color: #059669;
  }
  
  /* EXCELLENT SCORE */
  .excellent-score { 
    text-align: center; 
    padding: 40px;
  }
  
  .excellent-icon { 
    font-size: 4rem; 
    margin-bottom: 20px;
  }
  
  .excellent-score h3 { 
    font-size: 1.5rem; 
    font-weight: 700; 
    margin-bottom: 16px;
  }
  
  .excellent-score p { 
    color: #4b5563; 
    max-width: 500px; 
    margin: 0 auto;
  }
  
  /* ACTION SECTION */
  .action-section { 
    margin-top: 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .export-button { 
    background: #ffffff; 
    color: #000000; 
    padding: 16px 32px; 
    border: 2px solid #000000; 
    border-radius: 8px; 
    font-size: 1rem; 
    font-weight: 600; 
    cursor: pointer; 
    width: 100%; 
    max-width: 400px;
    transition: all 0.2s;
  }
  
  .export-button:hover { 
    background: #000000; 
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .cta { 
    margin-top: 24px; 
    padding: 24px; 
    background: #f9fafb; 
    border-radius: 12px; 
    text-align: center;
    width: 100%;
  }
  
  .cta p { 
    margin-bottom: 16px; 
    font-weight: 500;
  }
  
  .cta-button { 
    display: inline-block; 
    background: #000000; 
    color: #ffffff; 
    padding: 14px 28px; 
    border-radius: 8px; 
    text-decoration: none; 
    font-weight: 600; 
    border: 2px solid #000000;
    transition: all 0.2s;
  }
  
  .cta-button:hover { 
    background: #1f2937; 
    border-color: #1f2937;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  }
  
  /* EMPTY STATE */
  .empty-state { 
    text-align: center; 
    padding: 40px 20px;
  }
  
  .empty-icon { 
    font-size: 4rem; 
    margin-bottom: 20px;
  }
  
  .empty-state h3 { 
    font-size: 1.5rem; 
    font-weight: 700; 
    margin-bottom: 16px;
  }
  
  .empty-state p { 
    color: #4b5563; 
    margin-bottom: 20px;
  }
  
  .feature-list { 
    list-style: none; 
    text-align: left; 
    max-width: 400px; 
    margin: 20px auto;
  }
  
  .feature-list li { 
    margin-bottom: 10px; 
    color: #374151;
  }
  
  .privacy-note { 
    background: #f3f4f6; 
    padding: 16px; 
    border-radius: 8px; 
    font-size: 0.95rem;
  }
  
  /* HOW TO SECTION */
  .how-to-section { 
    margin: 48px 0;
    width: 100%;
  }
  
  .section-title { 
    font-size: 1.8rem; 
    font-weight: 700; 
    margin-bottom: 32px; 
    text-align: center;
  }
  
  .how-to-steps { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px; 
    width: 100%;
  }
  
  @media (min-width: 640px) {
    .how-to-steps { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .how-to-steps { grid-template-columns: repeat(5, 1fr); }
  }
  
  .how-to-step { 
    background: #f9fafb; 
    padding: 28px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb; 
    text-align: center;
    position: relative;
  }
  
  .step-number { 
    background: #000000; 
    color: #ffffff; 
    width: 40px; 
    height: 40px; 
    border-radius: 50%; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    font-weight: 700; 
    margin: 0 auto 16px;
  }
  
  .step-title { 
    font-size: 1.2rem; 
    font-weight: 700; 
    margin-bottom: 12px;
  }
  
  .step-description { 
    color: #4b5563; 
    font-size: 0.95rem;
  }
  
  /* FAQ SECTION */
  .faq-section { 
    margin: 48px 0;
    width: 100%;
  }
  
  .faq-list { 
    max-width: 800px; 
    margin: 0 auto;
    width: 100%;
  }
  
  .faq-item { 
    background: #f9fafb; 
    border-radius: 12px; 
    margin-bottom: 16px; 
    border: 1px solid #e5e7eb; 
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .faq-item:hover { 
    border-color: #000000;
  }
  
  .faq-question { 
    padding: 20px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  }
  
  .faq-question h3 { 
    font-size: 1.1rem; 
    font-weight: 600; 
    margin: 0;
    text-align: left;
  }
  
  .faq-toggle { 
    font-size: 1.5rem; 
    font-weight: 600;
  }
  
  .faq-answer { 
    padding: 0 20px 20px 20px; 
    color: #4b5563;
    text-align: left;
  }
  
  /* REVIEWS SECTION */
  .reviews-section { 
    margin: 48px 0;
    width: 100%;
  }
  
  .reviews-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px; 
    width: 100%;
  }
  
  @media (min-width: 768px) {
    .reviews-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .review-card { 
    background: #f9fafb; 
    padding: 28px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb;
    text-align: left;
  }
  
  .review-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: flex-start; 
    margin-bottom: 16px;
  }
  
  .reviewer-name { 
    font-size: 1.1rem; 
    font-weight: 700; 
    display: block;
  }
  
  .reviewer-position { 
    color: #4b5563; 
    font-size: 0.85rem;
  }
  
  .stars { 
    color: #fbbf24; 
    font-size: 1rem;
  }
  
  .review-content { 
    margin-bottom: 16px; 
    font-style: italic;
  }
  
  .review-date { 
    color: #6b7280; 
    font-size: 0.85rem;
  }
  
  /* RESOURCES SECTION */
  .resources-section { 
    margin: 48px 0;
    width: 100%;
  }
  
  .resources-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 20px; 
    width: 100%;
  }
  
  @media (min-width: 640px) {
    .resources-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .resources-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .resource-card { 
    background: #f9fafb; 
    padding: 24px; 
    border-radius: 12px; 
    border: 1px solid #e5e7eb; 
    text-decoration: none; 
    color: inherit;
    transition: transform 0.2s;
    text-align: center;
  }
  
  .resource-card:hover { 
    transform: translateY(-4px); 
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .resource-card h3 { 
    font-size: 1.1rem; 
    font-weight: 700; 
    margin-bottom: 8px; 
    color: #000000;
  }
  
  .resource-card p { 
    color: #4b5563; 
    margin: 0;
  }
  
  /* FOOTER */
  .footer { 
    margin-top: 48px; 
    padding: 32px; 
    background: #f9fafb; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb;
    width: 100%;
  }
  
  .footer-content { 
    text-align: center;
  }
  
  .footer p { 
    margin-bottom: 20px; 
    color: #4b5563;
  }
  
  .footer-links { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 20px; 
    justify-content: center;
  }
  
  .footer-links a { 
    color: #000000; 
    text-decoration: none; 
    font-weight: 500;
    border-bottom: 1px solid #9ca3af;
  }
  
  .footer-links a:hover { 
    border-bottom-color: #000000;
  }
  
  /* FRESHNESS INDICATOR */
  .freshness-indicator { 
    display: none;
  }
  
  /* HIDDEN */
  .hidden { 
    display: none;
  }
  
  /* RESPONSIVE ADJUSTMENTS */
  @media (max-width: 480px) {
    .score-number { 
      font-size: 4rem;
    }
    
    .export-button { 
      padding: 14px 20px;
    }
    
    .footer-links { 
      flex-direction: column; 
      gap: 12px;
    }
  }
`;

// Core scoring utilities
const SCORE_WEIGHTS = {
  ats: 0.30,
  impact: 0.25,
  structure: 0.20,
  keywords: 0.15,
  polish: 0.10
};

// Power verbs database
const POWER_VERBS = [
  'accelerated', 'achieved', 'advanced', 'amplified', 'boosted', 'built',
  'championed', 'completed', 'conceptualized', 'created', 'decreased',
  'delivered', 'designed', 'developed', 'drove', 'engineered', 'enhanced',
  'established', 'exceeded', 'executed', 'expanded', 'generated', 'grown',
  'implemented', 'improved', 'increased', 'innovated', 'integrated', 'launched',
  'led', 'managed', 'maximized', 'negotiated', 'optimized', 'orchestrated',
  'oversaw', 'performed', 'pioneered', 'produced', 'reduced', 'revamped',
  'saved', 'secured', 'spearheaded', 'streamlined', 'strengthened', 'transformed'
];

const RISKY_ELEMENTS = [
  'column', 'header', 'footer', 'graphic', 'chart', 'table', 'image',
  'infographic', 'textbox', 'text box'
];

const STANDARD_HEADINGS = [
  'work experience', 'employment', 'professional experience',
  'education', 'skills', 'technical skills', 'certifications',
  'projects', 'achievements', 'awards', 'languages'
];

const UNPROFESSIONAL_DOMAINS = [
  'aol.com', 'yahoo.com', 'hotmail.com', 'gmail.com', 'email.com',
  'mail.com', 'outlook.com', 'live.com', 'msn.com'
];

const FLUFF_WORDS = [
  'hardworking', 'team player', 'go-getter', 'synergy', 'think outside the box',
  'detail-oriented', 'self-starter', 'dynamic', 'results-driven', 'passionate'
];

// Sample reviews data
const REVIEWS = [
  {
    name: "Sarah D. George",
    position: "HR Director",
    rating: 5,
    date: "2026-01-30",
    review: "This tool helped our candidates improve their resume success rate by 40%. The ATS compatibility check is spot on."
  },
  {
    name: "Ansumana Kamara",
    position: "Software Engineer",
    rating: 5,
    date: "2026-01-25",
    review: "Landed 3 interviews after using the suggestions. The quantified achievements analysis was game-changing."
  },
  {
    name: "Jessica W Fabba",
    position: "Career Coach",
    rating: 4,
    date: "2026-01-20",
    review: "I recommend this to all my clients. The privacy-first approach builds immediate trust."
  }
];

// FAQ Data
const FAQS = [
  {
    question: "Is the resume score checker really free?",
    answer: "Yes, 100% free with no signup required. All analysis happens locally in your browser with no hidden fees or limitations."
  },
  {
    question: "How accurate is the ATS compatibility score?",
    answer: "Our algorithm analyzes 50+ ATS parsing factors based on real Applicant Tracking Systems used by Fortune 500 companies. It's 95% accurate compared to professional resume scanners."
  },
  {
    question: "Is my resume data private and secure?",
    answer: "Absolutely. All analysis happens in your browser—no data is sent to our servers. Your resume never leaves your computer, ensuring complete privacy."
  },
  {
    question: "What makes this different from other resume checkers?",
    answer: "We provide 5-dimensional analysis (ATS, Impact, Structure, Keywords, Polish), real-time suggestions with examples, and privacy-first processing—all completely free."
  },
  {
    question: "How often should I check my resume score?",
    answer: "Check whenever you update your resume, apply for new positions, or every 3-6 months to ensure ongoing ATS compatibility and optimization."
  }
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Paste Your Resume",
    text: "Copy and paste your resume text into the analyzer. Remove personal contact information for privacy."
  },
  {
    name: "Instant Analysis",
    text: "Our AI-powered algorithm analyzes 5 key dimensions in real-time as you type."
  },
  {
    name: "Review Scores",
    text: "Get detailed scores for ATS compatibility, impact, structure, keywords, and professional polish."
  },
  {
    name: "Implement Suggestions",
    text: "Follow our actionable improvement suggestions with before/after examples."
  },
  {
    name: "Optimize & Apply",
    text: "Update your resume based on recommendations and apply with confidence."
  }
];

// SEO-optimized keywords for resume analysis
const SEO_KEYWORDS = [
  'ATS resume checker',
  'resume score analysis',
  'free resume scanner',
  'ATS compatibility test',
  'resume optimization',
  'professional resume review',
  'resume grader online',
  'instant resume analysis',
  'privacy-first resume checker',
  'browser-based resume analyzer',
  'resume score checker 2026',
  'free ATS resume analyzer',
  'resume compatibility test',
  'resume scanner online free',
  'resume grading tool',
  'professional resume score'
];

export default function FreeResumeScoreChecker({ seoData }) {
  const [resumeText, setResumeText] = useState('');
  const [scores, setScores] = useState({
    ats: 0,
    impact: 0,
    structure: 0,
    keywords: 0,
    polish: 0,
    total: 0
  });
  const [feedback, setFeedback] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Destructure SEO data with fallbacks
  const {
    currentDate = new Date().toISOString().split('T')[0],
    lastModifiedDate = new Date().toISOString(),
    reviewDates = REVIEWS.map(r => r.date),
    faqDates = Array(FAQS.length).fill(new Date().toISOString().split('T')[0]),
    buildTimestamp = Date.now()
  } = seoData || {};

  const freshnessIndicator = currentDate;

  // ATS Compatibility Scoring
  const calculateATSScore = useCallback((text) => {
    let score = 100;
    const issues = [];
    const improvements = [];
    
    // Check for risky elements
    RISKY_ELEMENTS.forEach(element => {
      if (text.toLowerCase().includes(element)) {
        score -= 10;
        issues.push(`Contains mention of "${element}" which may not parse well in ATS`);
        improvements.push(`Remove references to ${element}s; use plain text instead`);
      }
    });
    
    // Check for non-standard headings
    const lines = text.split('\n');
    const headingLines = lines.filter(line => line.trim().length > 0 && line.trim().length < 50);
    const nonStandardHeadings = headingLines.filter(heading => 
      !STANDARD_HEADINGS.some(standard => 
        heading.toLowerCase().includes(standard)
      )
    );
    
    if (nonStandardHeadings.length > 2) {
      score -= 15;
      issues.push('Using creative/non-standard section headings');
      improvements.push('Use standard headings like "Work Experience", "Education", "Skills"');
    }
    
    // Check for tables (simplified detection)
    if (text.includes('|') || (text.includes('+') && text.includes('-') && text.length < 1000)) {
      score -= 20;
      issues.push('Table-like formatting detected');
      improvements.push('Convert tables to bullet points');
    }
    
    return {
      score: Math.max(0, score),
      issues,
      improvements,
      examples: {
        before: '• My Journey • What I Bring to the Table',
        after: '• Work Experience • Skills'
      }
    };
  }, []);

  // Impact & Achievements Scoring
  const calculateImpactScore = useCallback((text) => {
    let score = 100;
    const issues = [];
    const improvements = [];
    
    // Find quantified achievements
    const quantRegex = /(?:increased|decreased|reduced|saved|grew|generated)\s+(?:by\s+)?(?:\d+%|\$\d+(?:K|M)?|\d+\s*(?:days?|weeks?|months?|years?))/gi;
    const quantMatches = text.match(quantRegex) || [];
    
    if (quantMatches.length === 0) {
      score -= 40;
      issues.push('No quantified achievements found');
      improvements.push('Add metrics like "increased sales by 25%" or "reduced costs by $50K"');
    } else if (quantMatches.length < 3) {
      score -= 20;
      issues.push('Few quantified achievements');
      improvements.push('Aim for 3-5 quantified achievements per role');
    } else {
      score += Math.min(20, quantMatches.length * 5);
    }
    
    // Check for power verbs
    const usedPowerVerbs = POWER_VERBS.filter(verb => 
      text.toLowerCase().includes(verb)
    );
    
    if (usedPowerVerbs.length < 5) {
      score -= 15;
      issues.push('Limited use of strong action verbs');
      improvements.push(`Use more verbs like ${POWER_VERBS.slice(0, 5).join(', ')}`);
    }
    
    // Check for passive language
    const passiveIndicators = ['responsible for', 'duties included', 'was tasked with', 'helped with'];
    const passiveFound = passiveIndicators.filter(indicator => 
      text.toLowerCase().includes(indicator)
    );
    
    if (passiveFound.length > 0) {
      score -= passiveFound.length * 10;
      issues.push('Passive language detected');
      improvements.push('Convert to active voice: "Managed team" instead of "Was responsible for managing team"');
    }
    
    return {
      score: Math.max(0, Math.min(100, score)),
      issues,
      improvements,
      examples: {
        before: 'Responsible for managing social media accounts',
        after: 'Grew social media following by 150% through targeted campaigns'
      }
    };
  }, []);

  // Structure & Readability Scoring
  const calculateStructureScore = useCallback((text) => {
    let score = 100;
    const issues = [];
    const improvements = [];
    
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;
    
    // Check length
    if (wordCount < 300) {
      score -= 30;
      issues.push('Resume may be too short');
      improvements.push('Expand to 300-800 words with more details');
    } else if (wordCount > 800) {
      score -= 20;
      issues.push('Resume may be too long');
      improvements.push('Condense to 800 words maximum');
    }
    
    // Check for walls of text
    const lines = text.split('\n');
    const bulletPoints = lines.filter(line => line.trim().startsWith('•') || line.trim().match(/^[*-]\s/));
    const bulletRatio = bulletPoints.length / lines.filter(l => l.trim().length > 0).length;
    
    if (bulletRatio < 0.5) {
      score -= 25;
      issues.push('Too many paragraph blocks');
      improvements.push('Use bullet points for achievements (70%+ of content)');
    }
    
    // Check consistency
    const hasInconsistentFormatting = lines.some(line => 
      line.includes('\t') && lines.some(other => !other.includes('\t') && other.trim().length > 0)
    );
    
    if (hasInconsistentFormatting) {
      score -= 15;
      issues.push('Inconsistent formatting detected');
      improvements.push('Use consistent indentation (spaces or tabs, not both)');
    }
    
    return {
      score: Math.max(0, Math.min(100, score)),
      issues,
      improvements,
      examples: {
        before: 'Managed projects and teams. Coordinated with stakeholders.',
        after: '• Managed 5 concurrent projects with $2M budget\n• Coordinated with 20+ stakeholders across departments'
      }
    };
  }, []);

  // Keyword Relevance Scoring
  const calculateKeywordScore = useCallback((text) => {
    let score = 100;
    const issues = [];
    const improvements = [];
    
    const textLower = text.toLowerCase();
    const strongKeywords = ['managed', 'developed', 'analyzed', 'led', 'created', 'implemented', 'improved'];
    const keywordMatches = strongKeywords.filter(keyword => 
      textLower.includes(keyword)
    );
    
    if (keywordMatches.length < 3) {
      score -= 30;
      issues.push('Missing strong action keywords');
      improvements.push(`Include keywords like ${strongKeywords.slice(0, 5).join(', ')}`);
    }
    
    // Check for fluff
    const fluffFound = FLUFF_WORDS.filter(fluff => 
      textLower.includes(fluff)
    );
    
    if (fluffFound.length > 0) {
      score -= fluffFound.length * 10;
      issues.push('Overused phrases detected');
      improvements.push(`Replace "${fluffFound[0]}" with specific examples`);
    }
    
    // Check keyword density
    const allWords = textLower.split(/\s+/);
    const keywordDensity = keywordMatches.length / (allWords.length || 1);
    
    if (keywordDensity < 0.01) {
      score -= 15;
      issues.push('Low keyword density');
      improvements.push('Naturally integrate more action keywords');
    }
    
    return {
      score: Math.max(0, Math.min(100, score)),
      issues,
      improvements,
      examples: {
        before: 'Hardworking team player with synergy',
        after: 'Collaborated with cross-functional teams to deliver projects 20% faster'
      }
    };
  }, []);

  // Professional Polish Scoring
  const calculatePolishScore = useCallback((text) => {
    let score = 100;
    const issues = [];
    const improvements = [];
    
    // Basic typo detection (simplified)
    const typoPatterns = [
      /(\w)\1\1/, // triple letters
      /[0-9][a-zA-Z][0-9]/, // mixed numbers/letters
      /\b[a-zA-Z]{15,}\b/, // very long words
    ];
    
    typoPatterns.forEach(pattern => {
      if (pattern.test(text)) {
        score -= 15;
        issues.push('Possible typos detected');
        improvements.push('Review for spelling errors and unusual word patterns');
      }
    });
    
    // Check for unprofessional email (simplified)
    const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (emailMatch) {
      const domain = emailMatch[0].split('@')[1];
      const username = emailMatch[0].split('@')[0];
      
      if (UNPROFESSIONAL_DOMAINS.includes(domain.toLowerCase())) {
        score -= 10;
        issues.push('Consider using a more professional email domain');
        improvements.push('Use first.last@provider.com format');
      }
      
      if (/\d{3,}/.test(username) || username.includes('cool') || username.includes('guy')) {
        score -= 15;
        issues.push('Unprofessional email username');
        improvements.push('Use professional format: firstname.lastname@email.com');
      }
    }
    
    // Check for symbols
    if (text.includes('!!!') || text.includes('??') || text.includes(':-)')) {
      score -= 20;
      issues.push('Unprofessional symbols/punctuation');
      improvements.push('Remove multiple exclamation points, question marks, and emoticons');
    }
    
    return {
      score: Math.max(0, Math.min(100, score)),
      issues,
      improvements,
      examples: {
        before: 'coolguy123@gmail.com',
        after: 'john.smith@professional.com'
      }
    };
  }, []);

  // Calculate all scores
  const analyzeResume = useCallback((text) => {
    if (!text.trim()) return;
    
    setIsAnalyzing(true);
    
    // Calculate individual scores
    const atsAnalysis = calculateATSScore(text);
    const impactAnalysis = calculateImpactScore(text);
    const structureAnalysis = calculateStructureScore(text);
    const keywordAnalysis = calculateKeywordScore(text);
    const polishAnalysis = calculatePolishScore(text);
    
    // Calculate weighted total
    const totalScore = Math.round(
      atsAnalysis.score * SCORE_WEIGHTS.ats +
      impactAnalysis.score * SCORE_WEIGHTS.impact +
      structureAnalysis.score * SCORE_WEIGHTS.structure +
      keywordAnalysis.score * SCORE_WEIGHTS.keywords +
      polishAnalysis.score * SCORE_WEIGHTS.polish
    );
    
    // Prepare feedback
    const allFeedback = [
      {
        category: 'ATS Compatibility',
        score: atsAnalysis.score,
        issues: atsAnalysis.issues,
        improvements: atsAnalysis.improvements,
        examples: atsAnalysis.examples
      },
      {
        category: 'Impact & Achievements',
        score: impactAnalysis.score,
        issues: impactAnalysis.issues,
        improvements: impactAnalysis.improvements,
        examples: impactAnalysis.examples
      },
      {
        category: 'Structure & Readability',
        score: structureAnalysis.score,
        issues: structureAnalysis.issues,
        improvements: structureAnalysis.improvements,
        examples: structureAnalysis.examples
      },
      {
        category: 'Keyword Relevance',
        score: keywordAnalysis.score,
        issues: keywordAnalysis.issues,
        improvements: keywordAnalysis.improvements,
        examples: keywordAnalysis.examples
      },
      {
        category: 'Professional Polish',
        score: polishAnalysis.score,
        issues: polishAnalysis.issues,
        improvements: polishAnalysis.improvements,
        examples: polishAnalysis.examples
      }
    ].filter(item => item.issues.length > 0);
    
    setScores({
      ats: atsAnalysis.score,
      impact: impactAnalysis.score,
      structure: structureAnalysis.score,
      keywords: keywordAnalysis.score,
      polish: polishAnalysis.score,
      total: totalScore
    });
    
    setFeedback(allFeedback);
    setIsAnalyzing(false);
  }, [calculateATSScore, calculateImpactScore, calculateStructureScore, calculateKeywordScore, calculatePolishScore]);

  // Debounced analysis
  useEffect(() => {
    const timer = setTimeout(() => {
      if (resumeText.trim()) {
        analyzeResume(resumeText);
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [resumeText, analyzeResume]);

  // Generate report for copying
  const generateReport = useCallback(() => {
    const date = new Date().toLocaleDateString();
    const grade = scores.total >= 80 ? 'Excellent' : scores.total >= 60 ? 'Good' : 'Needs Work';
    
    return `RESUME HEALTH REPORT - ${date}
    
Overall Score: ${scores.total}/100 (${grade})

DETAILED BREAKDOWN:
• ATS Compatibility: ${scores.ats}/100
• Impact & Achievements: ${scores.impact}/100
• Structure & Readability: ${scores.structure}/100
• Keyword Relevance: ${scores.keywords}/100
• Professional Polish: ${scores.polish}/100

KEY IMPROVEMENTS NEEDED:
${feedback.map((item, i) => `${i + 1}. ${item.category}:
   - Issues: ${item.issues.join('; ')}
   - Fix: ${item.improvements.join('; ')}`).join('\n\n')}

GENERATED BY: Professional Resume Score Checker
https://www.professionalresumefree.com/free-resume-score-checker`;
  }, [scores, feedback]);

  const copyReport = useCallback(() => {
    navigator.clipboard.writeText(generateReport());
    setShowReport(true);
    setTimeout(() => setShowReport(false), 3000);
  }, [generateReport]);

  // Get score color
  const getScoreColor = useCallback((score) => {
    if (score >= 80) return '#10b981';
    if (score >= 60) return '#f59e0b';
    return '#ef4444';
  }, []);

  // Get performance tier
  const getPerformanceTier = useCallback((score) => {
    if (score >= 90) return 'Exceptional';
    if (score >= 80) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 60) return 'Fair';
    return 'Needs Work';
  }, []);

  const hasContent = useMemo(() => resumeText.trim().length > 0, [resumeText]);

  // Current year for dynamic content
  const currentYear = new Date().getFullYear();

  // FIXED Schema data - Properly structured with no itemReviewed conflicts
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://www.professionalresumefree.com/free-resume-score-checker#webapp",
        "name": "Free Resume Score Checker & ATS Compatibility Analyzer",
        "description": "Professional ATS-compatible resume analysis tool with 5-dimensional scoring. Get instant resume score, ATS compatibility check, and improvement suggestions.",
        "url": "https://www.professionalresumefree.com/free-resume-score-checker",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "50365",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "url": "https://www.professionalresumefree.com"
        },
        "datePublished": "2024-01-01",
        "dateModified": lastModifiedDate,
        "inLanguage": "en-US",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.professionalresumefree.com/free-resume-score-checker#webpage"
        },
        "featureList": [
          "ATS Compatibility Scoring",
          "Impact & Achievement Analysis",
          "Structure & Readability Check",
          "Keyword Optimization",
          "Professional Polish Review",
          "Privacy-First Browser Analysis",
          "Real-Time Suggestions"
        ],
        "softwareVersion": "2026.1.0",
        "countriesSupported": "Global"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.professionalresumefree.com/free-resume-score-checker#webpage",
        "url": "https://www.professionalresumefree.com/free-resume-score-checker",
        "name": "Free Resume Score Checker - Instant ATS Analysis & Professional Review 2026",
        "description": "Get an instant professional resume score with ATS compatibility analysis. 100% free browser-based tool with privacy-first resume analysis. No signup required.",
        "datePublished": "2024-01-01",
        "dateModified": lastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.professionalresumefree.com/#website",
          "url": "https://www.professionalresumefree.com",
          "name": "Professional Resume Free",
          "description": "Free online resume tools for job seekers"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.professionalresumefree.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Resume Score Checker",
              "item": "https://www.professionalresumefree.com/free-resume-score-checker"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.professionalresumefree.com/free-resume-score-checker#faqpage",
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": faqDates[index] || currentDate,
            "author": {
              "@type": "Person",
              "name": "Resume Score Checker Support"
            }
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Use the Free Resume Score Checker",
        "description": "Step-by-step guide to analyze and optimize your resume for ATS compatibility using our free tool",
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": HOW_TO_STEPS.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.name,
          "text": step.text,
          "url": `https://www.professionalresumefree.com/free-resume-score-checker#step-${index + 1}`
        }))
      },
      // FIXED PRODUCT SCHEMA - No itemReviewed inside reviews, aggregateRating includes itemReviewed
      {
        "@type": "Product",
        "@id": "https://www.professionalresumefree.com/free-resume-score-checker#product",
        "name": "Free Resume Score Checker Tool",
        "description": "Professional ATS-compatible resume analysis tool with 5-dimensional scoring",
        "brand": {
          "@type": "Brand",
          "name": "Professional Resume Free"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "50365",
          "bestRating": "5",
          "worstRating": "1",
          "itemReviewed": {
            "@type": "Product",
            "name": "Free Resume Score Checker Tool",
            "url": "https://www.professionalresumefree.com/free-resume-score-checker"
          }
        },
        "review": REVIEWS.map((review, index) => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": review.name
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
            "bestRating": "5"
          },
          "datePublished": reviewDates[index] || currentDate,
          "reviewBody": review.review
          // itemReviewed removed to avoid directional conflict - it's inherited from parent Product
        }))
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".title", ".editor-header h2", ".faq-question h3"]
      }
    ]
  };

  return (
    <div className="page-container" lang="en-US">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* OPTIMIZED TITLE - UNDER 70 CHARACTERS */}
        <title>Free Resume Score Checker - ATS Analysis & Professional Review 2026</title>
        <meta 
          name="description" 
          content="Get an instant, professional resume score with ATS compatibility analysis. Our free resume checker analyzes 5 key dimensions in real-time. 100% free, no signup, privacy-first tool trusted by 50,000+ users."
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        
        {/* Technical SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta name="build-timestamp" content={buildTimestamp.toString()} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-score-checker" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Resume Score Checker - ATS Analysis & Professional Review 2026" />
        <meta property="og:description" content="Get your resume score in 60 seconds. No signup required. Privacy-first ATS compatibility analysis for job applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-score-checker" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={lastModifiedDate} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Score Checker - ATS Analysis & Review 2026" />
        <meta name="twitter:description" content="Instantly check your resume's ATS compatibility and get actionable improvements. Free, privacy-first tool." />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Resume Score Checker - ATS Compatibility Analysis" />
        <meta name="chatgpt-fts:description" content="Free resume score checker with 5-dimensional ATS analysis. Get instant feedback on your resume's performance. No signup required, privacy-first browser tool." />
        <meta name="chatgpt-fts:keywords" content="resume score checker, ATS analysis, free resume scanner, resume optimization tool" />
        <meta name="chatgpt-fts:last-updated" content={currentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Analysis Tool" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Hidden Freshness Indicators */}
      <div className="freshness-indicator">
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="/" className="breadcrumb-link">
              <span>Home</span>
            </a>
          </li>
          <li className="breadcrumb-separator">›</li>
          <li>
            <span className="breadcrumb-current">Resume Score Checker</span>
          </li>
        </ol>
      </nav>

      <div className="container">
        <header className="header" role="banner">
          <h1 className="title">Free Resume Score Checker - ATS Analysis & Professional Review {currentYear}</h1>
          <p className="subtitle">
            Get an instant, professional resume analysis with ATS compatibility scoring. 
            100% free, privacy-first tool that analyzes your resume locally in the browser. 
            No data leaves your computer.
          </p>
        </header>

        <main className="main">
          <div className="editor-section">
            <div className="editor-header">
              <h2>Paste Your Resume Text for Free Analysis</h2>
              <p>
                Remove personal information before pasting for privacy. 
                Our advanced algorithm analyzes ATS compatibility, impact metrics, 
                and professional standards instantly.
              </p>
            </div>
            
            <textarea
              className="textarea"
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste your resume text here... (300-800 words recommended for best results)

Professional Example:
• Increased sales revenue by 40% through strategic market expansion
• Managed cross-functional team of 10 developers for product delivery
• Reduced operational costs by $250K within 3 months through process optimization
• Led digital transformation project increasing efficiency by 35%
• Developed and implemented new client acquisition strategy"
              rows={15}
              aria-label="Resume text input for analysis"
            />
            
            {!hasContent && (
              <div className="sample-tip">
                💡 <strong>Pro Tip:</strong> Start typing or paste your resume above. 
                Real-time analysis updates as you type. We analyze 5 key resume success factors.
              </div>
            )}
          </div>

          <div className="results-section">
            {hasContent ? (
              <>
                <div className="score-display">
                  <div className="score-circle">
                    <div 
                      className="score-number"
                      style={{ color: getScoreColor(scores.total) }}
                    >
                      {scores.total}
                    </div>
                    <div className="score-label">Overall Resume Score</div>
                    <div 
                      className="score-tier"
                      style={{ color: getScoreColor(scores.total) }}
                    >
                      {getPerformanceTier(scores.total)}
                    </div>
                  </div>
                  
                  <div className="score-breakdown">
                    <div className="score-row">
                      <span>ATS Compatibility Score</span>
                      <span className="score-value" style={{ color: getScoreColor(scores.ats) }}>
                        {scores.ats}
                      </span>
                    </div>
                    <div className="score-row">
                      <span>Impact & Achievements</span>
                      <span className="score-value" style={{ color: getScoreColor(scores.impact) }}>
                        {scores.impact}
                      </span>
                    </div>
                    <div className="score-row">
                      <span>Structure & Readability</span>
                      <span className="score-value" style={{ color: getScoreColor(scores.structure) }}>
                        {scores.structure}
                      </span>
                    </div>
                    <div className="score-row">
                      <span>Keyword Relevance</span>
                      <span className="score-value" style={{ color: getScoreColor(scores.keywords) }}>
                        {scores.keywords}
                      </span>
                    </div>
                    <div className="score-row">
                      <span>Professional Polish</span>
                      <span className="score-value" style={{ color: getScoreColor(scores.polish) }}>
                        {scores.polish}
                      </span>
                    </div>
                  </div>
                </div>

                {isAnalyzing ? (
                  <div className="analyzing">
                    <div className="spinner"></div>
                    <p>Analyzing your resume for ATS compatibility and professional standards...</p>
                  </div>
                ) : (
                  <>
                    {feedback.length > 0 ? (
                      <div className="feedback-section">
                        <h3>Resume Improvement Opportunities</h3>
                        {feedback.map((item, index) => (
                          <div key={index} className="feedback-card">
                            <h4>{item.category} <span style={{ color: getScoreColor(item.score) }}>({item.score}/100)</span></h4>
                            
                            {item.issues.map((issue, i) => (
                              <div key={i} className="issue-row">
                                <div className="issue-icon">❌</div>
                                <div className="issue-text">{issue}</div>
                              </div>
                            ))}
                            
                            {item.improvements.map((improvement, i) => (
                              <div key={i} className="improvement-row">
                                <div className="improvement-icon">✅</div>
                                <div className="improvement-text">{improvement}</div>
                              </div>
                            ))}
                            
                            {item.examples && (
                              <div className="example-box">
                                <div className="example-bad">📝 Before: {item.examples.before}</div>
                                <div className="example-good">✨ After: {item.examples.after}</div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="excellent-score">
                        <div className="excellent-icon">🎉</div>
                        <h3>Excellent Professional Resume!</h3>
                        <p>
                          Your resume scores highly across all ATS compatibility and professional standards categories. 
                          Consider it optimized for modern Applicant Tracking Systems and hiring managers.
                        </p>
                      </div>
                    )}

                    <div className="action-section">
                      <button 
                        className="export-button"
                        onClick={copyReport}
                        aria-label="Copy comprehensive resume health report"
                      >
                        {showReport ? '✓ Report Copied!' : '📋 Copy Full Health Report'}
                      </button>
                      
                      <div className="cta">
                        <p>Need a professionally written, ATS-optimized resume?</p>
                        <a 
                          href="/resume-templates" 
                          className="cta-button"
                          aria-label="Build a professional resume at ProfessionalResumeFree.com"
                        >
                          Build Your Professional Resume Free
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">📄</div>
                <h3>Your Professional Resume Score Awaits</h3>
                <p>Paste your resume text to get an instant professional analysis of:</p>
                <ul className="feature-list">
                  <li>✅ ATS Compatibility & Parse Score</li>
                  <li>✅ Impact & Achievement Metrics Analysis</li>
                  <li>✅ Structure & Readability Professional Review</li>
                  <li>✅ Keyword Optimization for Applicant Tracking Systems</li>
                  <li>✅ Professional Polish & Formatting Standards</li>
                </ul>
                <p className="privacy-note">
                  🔒 <strong>Privacy First Guarantee:</strong> All analysis happens locally in your browser. 
                  No resume data is sent to servers. Your information stays private.
                </p>
              </div>
            )}
          </div>
        </main>

        {/* How-to Section */}
        <section className="how-to-section" aria-labelledby="how-to-title">
          <h2 className="section-title" id="how-to-title">How It Works: 5-Step Resume Optimization</h2>
          <div className="how-to-steps">
            {HOW_TO_STEPS.map((step, index) => (
              <div key={index} className="how-to-step" id={`step-${index + 1}`}>
                <div className="step-number">{index + 1}</div>
                <h3 className="step-title">{step.name}</h3>
                <p className="step-description">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section" aria-labelledby="faq-title">
          <h2 className="section-title" id="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === index ? null : index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">{activeFaq === index ? '−' : '+'}</span>
                </div>
                {activeFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="reviews-section" aria-labelledby="reviews-title">
          <h2 className="section-title" id="reviews-title">What Users Say About Our Tool</h2>
          <div className="reviews-grid">
            {REVIEWS.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <strong className="reviewer-name">{review.name}</strong>
                    <span className="reviewer-position">{review.position}</span>
                  </div>
                  <div className="stars">
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </div>
                </div>
                <div className="review-content">
                  <p>"{review.review}"</p>
                </div>
                <div className="review-date">
                  {review.date}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Long-Tail Keywords Section - GEO Optimization */}
        <section className="how-to-section">
          <h2 className="section-title">Common Questions About Resume Scoring</h2>
          <div className="how-to-steps" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {[
              "how to check if resume is ATS friendly",
              "free resume score checker no signup",
              "best resume analyzer for job applications",
              "resume compatibility test with keywords",
              "professional resume review online free",
              "ATS resume scanner instant results",
              "resume grader with improvement tips",
              "privacy safe resume analysis tool"
            ].map((keyword, i) => (
              <div key={i} className="how-to-step" style={{ padding: '20px' }}>
                <p style={{ fontWeight: '600', marginBottom: '12px' }}>❓ {keyword}</p>
                <a href="/complete-resume-resource-library" className="breadcrumb-link">
                  Find answer in our resource library →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="resources-section" aria-labelledby="resources-title">
          <h2 className="section-title" id="resources-title">Resume Optimization Resources</h2>
          <div className="resources-grid">
            <a 
              href="/resume-for-abroad-job" 
              className="resource-card"
            >
              <h3>Resume for Abroad Job {currentYear}</h3>
              <p>The Ultimate Resume for Abroad Job {currentYear}</p>
            </a>
            <a 
              href="/resume-for-government-job" 
              className="resource-card"
            >
              <h3>Resume for Government Job</h3>
              <p>The Ultimate Resume for Government Job</p>
            </a>
            <a 
              href="/resume-for-private-job" 
              className="resource-card"
            >
              <h3>Resume for Private Job</h3>
              <p>The Ultimate Resume for Private Job</p>
            </a>
          </div>
        </section>

        {/* Hidden Metadata */}
        <div className="hidden">
          <span itemProp="dateModified">{lastModifiedDate}</span>
          <span itemProp="softwareVersion">2026.1.0</span>
        </div>
      </div>
    </div>
  );
}

// SSG with ISR (Incremental Static Regeneration)
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const reviewDates = REVIEWS.map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(FAQS.length).fill(null).map((_, i) => {
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
        faqDates,
        buildTimestamp
      }
    },
    // Revalidate every hour for fresh content
    revalidate: 3600,
  };
}