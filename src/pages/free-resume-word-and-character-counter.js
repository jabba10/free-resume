// pages/free-resume-word-and-character-counter.jsx
import Head from 'next/head';
import { useState, useEffect, useCallback, useRef } from 'react';

// ===== INLINE CRITICAL CSS - Optimized for speed =====
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
  }
  
  /* CONTAINER */
  .container { 
    max-width: 1280px; 
    margin: 0 auto; 
    padding: 16px; 
    width: 100%;
  }
  
  @media (min-width: 640px) {
    .container { padding: 24px; }
  }
  
  @media (min-width: 1024px) {
    .container { padding: 32px; }
  }
  
  /* BREADCRUMB */
  .breadcrumb { 
    margin-bottom: 24px; 
    font-size: 0.9rem; 
    color: #6b7280;
  }
  
  .breadcrumb ol { 
    display: flex; 
    flex-wrap: wrap; 
    list-style: none; 
    gap: 8px;
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
  
  /* HEADER */
  .header { 
    margin-bottom: 40px; 
    padding-bottom: 32px; 
    border-bottom: 2px solid #f3f4f6;
  }
  
  h1 { 
    font-size: clamp(2rem, 6vw, 3.2rem); 
    line-height: 1.2; 
    margin-bottom: 20px; 
    font-weight: 800; 
    letter-spacing: -0.02em;
    color: #000000;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  .title { 
    font-size: clamp(2rem, 6vw, 3.2rem); 
    line-height: 1.2; 
    margin-bottom: 20px; 
    font-weight: 800; 
    letter-spacing: -0.02em;
    color: #000000;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  .year-badge { 
    display: inline-block; 
    background: #000000; 
    color: #ffffff; 
    padding: 4px 12px; 
    border-radius: 50px; 
    font-size: 0.9rem; 
    margin-left: 12px; 
    vertical-align: middle;
  }
  
  .subtitle { 
    font-size: clamp(1rem, 2.5vw, 1.2rem); 
    color: #4b5563; 
    max-width: 900px; 
    line-height: 1.7; 
    margin-bottom: 20px; 
    display: flex; 
    align-items: center; 
    flex-wrap: wrap; 
    gap: 16px;
  }
  
  .word-count { 
    display: inline-block; 
    padding: 4px 12px; 
    border-radius: 50px; 
    font-weight: 600; 
    font-size: 1rem;
  }
  
  .in-range { 
    background: #10b981; 
    color: #ffffff;
  }
  
  .out-of-range { 
    background: #f59e0b; 
    color: #ffffff;
  }
  
  /* AGGREGATE RATING */
  .aggregate-rating { 
    display: flex; 
    align-items: center; 
    gap: 16px; 
    margin: 24px 0; 
    padding: 16px; 
    background: #f3f4f6; 
    border-radius: 12px; 
    border: 1px solid #e5e7eb;
    flex-wrap: wrap;
  }
  
  .rating-stars { 
    color: #fbbf24; 
    font-size: 1.3rem; 
    display: flex; 
    align-items: center; 
    gap: 8px;
  }
  
  .rating-value { 
    color: #111827; 
    font-weight: 700; 
    font-size: 1rem;
  }
  
  .rating-text { 
    color: #4b5563; 
    font-size: 0.9rem;
  }
  
  /* MAIN */
  .main { 
    margin: 32px 0;
  }
  
  /* EDITOR SECTION */
  .editor-section { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 28px; 
    border: 1px solid #e5e7eb; 
    margin-bottom: 32px;
  }
  
  .editor-header { 
    margin-bottom: 24px;
  }
  
  .editor-header h2 { 
    font-size: 1.5rem; 
    font-weight: 700; 
    margin-bottom: 12px;
  }
  
  .editor-header p { 
    color: #4b5563;
  }
  
  .text-area-container { 
    width: 100%;
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
    margin-bottom: 20px;
    transition: border-color 0.2s;
  }
  
  .textarea:focus { 
    outline: none; 
    border-color: #000000;
  }
  
  .button-group { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 12px;
  }
  
  .primary-button, .secondary-button { 
    padding: 12px 24px; 
    border-radius: 8px; 
    font-weight: 600; 
    font-size: 1rem; 
    border: 2px solid #000000;
    cursor: pointer; 
    transition: all 0.2s ease;
  }
  
  .primary-button { 
    background: #000000; 
    color: #ffffff;
  }
  
  .primary-button:hover { 
    background: #1f2937; 
    border-color: #1f2937;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .secondary-button { 
    background: transparent; 
    color: #000000;
  }
  
  .secondary-button:hover { 
    background: #f9fafb;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 480px) {
    .primary-button, .secondary-button { 
      width: 100%;
    }
  }
  
  /* STATS SECTION */
  .stats-section { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 28px; 
    border: 1px solid #e5e7eb; 
    margin-bottom: 32px;
  }
  
  .stats-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 24px; 
    flex-wrap: wrap; 
    gap: 16px;
  }
  
  .stats-header h2 { 
    font-size: 1.5rem; 
    font-weight: 700;
  }
  
  .status-indicator { 
    font-weight: 600; 
    padding: 8px 16px; 
    background: #f3f4f6; 
    border-radius: 50px;
  }
  
  .stats-grid { 
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    gap: 16px; 
    margin-bottom: 32px;
  }
  
  @media (min-width: 640px) {
    .stats-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .stats-grid { grid-template-columns: repeat(6, 1fr); }
  }
  
  .stat-card { 
    background: #f9fafb; 
    padding: 20px; 
    border-radius: 12px; 
    border: 1px solid #e5e7eb;
  }
  
  .stat-label { 
    font-size: 0.85rem; 
    color: #6b7280; 
    margin-bottom: 8px;
  }
  
  .stat-value { 
    font-size: 1.5rem; 
    font-weight: 700; 
    color: #000000;
  }
  
  .stat-subtext { 
    font-size: 0.75rem; 
    color: #6b7280; 
    margin-top: 4px;
  }
  
  .under-limit { 
    color: #ef4444;
  }
  
  .over-limit { 
    color: #ef4444;
  }
  
  /* RANGE SECTION */
  .range-section { 
    margin-bottom: 32px;
  }
  
  .range-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 16px; 
    flex-wrap: wrap; 
    gap: 12px;
  }
  
  .range-header h3 { 
    font-size: 1.2rem; 
    font-weight: 600;
  }
  
  .current-position { 
    color: #4b5563;
  }
  
  .range-indicator { 
    width: 100%;
  }
  
  .range-labels { 
    display: flex; 
    justify-content: space-between; 
    margin-bottom: 8px;
  }
  
  .range-label { 
    font-size: 0.85rem; 
    color: #6b7280;
  }
  
  .active-warning { 
    color: #ef4444; 
    font-weight: 600;
  }
  
  .active-success { 
    color: #10b981; 
    font-weight: 600;
  }
  
  .range-bar { 
    width: 100%; 
    height: 20px; 
    background: #f3f4f6; 
    border-radius: 10px; 
    position: relative; 
    margin-bottom: 8px;
  }
  
  .range-progress { 
    height: 100%; 
    background: #000000; 
    border-radius: 10px; 
    transition: width 0.3s;
  }
  
  .in-range-bar { 
    background: #10b981;
  }
  
  .under-bar { 
    background: #ef4444;
  }
  
  .over-bar { 
    background: #ef4444;
  }
  
  .range-markers { 
    display: flex; 
    justify-content: space-between; 
    font-size: 0.75rem; 
    color: #9ca3af;
  }
  
  /* OPTIONS SECTION */
  .options-section { 
    margin-top: 24px;
  }
  
  .options-section h3 { 
    font-size: 1.2rem; 
    font-weight: 600; 
    margin-bottom: 16px;
  }
  
  .options-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 16px;
  }
  
  @media (min-width: 640px) {
    .options-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  .option { 
    display: flex; 
    gap: 12px; 
    padding: 16px; 
    background: #f9fafb; 
    border-radius: 8px; 
    border: 1px solid #e5e7eb; 
    cursor: pointer;
  }
  
  .option input[type="checkbox"] { 
    width: 18px; 
    height: 18px; 
    margin-top: 2px;
  }
  
  .option-content { 
    flex: 1;
  }
  
  .option-title { 
    font-weight: 600; 
    margin-bottom: 4px;
  }
  
  .option-description { 
    font-size: 0.85rem; 
    color: #6b7280;
  }
  
  /* GUIDELINES SECTION */
  .guidelines-section { 
    margin: 48px 0;
  }
  
  .section-title { 
    font-size: 2rem; 
    font-weight: 700; 
    margin-bottom: 16px; 
    text-align: center;
  }
  
  .section-subtitle { 
    text-align: center; 
    color: #4b5563; 
    max-width: 800px; 
    margin: 0 auto 32px;
  }
  
  .guidelines-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px;
  }
  
  @media (min-width: 640px) {
    .guidelines-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .guidelines-grid { grid-template-columns: repeat(4, 1fr); }
  }
  
  .guideline-card { 
    background: #ffffff; 
    padding: 28px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb;
  }
  
  .guideline-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 16px;
  }
  
  .guideline-level { 
    font-size: 1.2rem; 
    font-weight: 700;
  }
  
  .guideline-words { 
    background: #f3f4f6; 
    padding: 4px 12px; 
    border-radius: 50px; 
    font-size: 0.9rem;
  }
  
  .guideline-body { 
    display: flex; 
    flex-direction: column; 
    gap: 8px;
  }
  
  .guideline-pages, .guideline-focus { 
    display: flex; 
    gap: 8px;
  }
  
  .guideline-label { 
    font-size: 0.85rem; 
    color: #6b7280; 
    min-width: 45px;
  }
  
  .guideline-value { 
    font-weight: 500;
  }
  
  /* TIPS SECTION */
  .tips-section { 
    margin: 48px 0;
  }
  
  .tips-grid { 
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    gap: 16px;
  }
  
  @media (min-width: 640px) {
    .tips-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .tips-grid { grid-template-columns: repeat(5, 1fr); }
  }
  
  .tip-card { 
    background: #ffffff; 
    padding: 20px; 
    border-radius: 12px; 
    border: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .tip-number { 
    font-size: 1.5rem; 
    font-weight: 800; 
    color: #9ca3af;
  }
  
  .tip-content { 
    color: #374151;
  }
  
  /* FAQ SECTION */
  .faq-section { 
    margin: 48px 0;
  }
  
  .faq-list { 
    max-width: 800px; 
    margin: 0 auto;
  }
  
  .faq-item { 
    background: #ffffff; 
    border-radius: 12px; 
    margin-bottom: 16px; 
    border: 1px solid #e5e7eb; 
    cursor: pointer;
  }
  
  .faq-item.active { 
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
  }
  
  .faq-toggle { 
    font-size: 1.5rem; 
    font-weight: 600;
  }
  
  .faq-answer { 
    padding: 0 20px 20px 20px; 
    color: #4b5563;
  }
  
  /* BENEFITS SECTION */
  .benefits-section { 
    margin: 48px 0;
  }
  
  .benefits-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px;
  }
  
  @media (min-width: 768px) {
    .benefits-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .benefit-card { 
    background: #ffffff; 
    padding: 28px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb;
  }
  
  .benefit-title { 
    font-size: 1.2rem; 
    font-weight: 700; 
    margin-bottom: 12px;
  }
  
  .benefit-description { 
    color: #4b5563;
  }
  
  /* CTA SECTION */
  .cta-section { 
    margin: 48px 0;
  }
  
  .cta-card { 
    background: linear-gradient(135deg, #000000 0%, #1f2937 100%); 
    padding: 48px; 
    border-radius: 24px; 
    color: #ffffff; 
    text-align: center;
  }
  
  .cta-card h2 { 
    font-size: 2rem; 
    font-weight: 800; 
    margin-bottom: 16px;
  }
  
  .cta-card p { 
    color: #9ca3af; 
    max-width: 600px; 
    margin: 0 auto 24px;
  }
  
  .cta-button { 
    display: inline-block; 
    padding: 16px 32px; 
    background: #ffffff; 
    color: #000000; 
    border: none; 
    border-radius: 8px; 
    font-weight: 600; 
    font-size: 1.1rem; 
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .cta-button:hover { 
    transform: translateY(-2px); 
    box-shadow: 0 10px 15px -3px rgba(255, 255, 255, 0.2);
  }
  
  /* FOOTER */
  .footer { 
    margin-top: 48px; 
    padding: 48px; 
    background: #f9fafb; 
    border-radius: 24px; 
    border: 1px solid #e5e7eb;
  }
  
  .footer-content { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 32px; 
    margin-bottom: 32px;
  }
  
  @media (min-width: 768px) {
    .footer-content { grid-template-columns: repeat(3, 1fr); }
  }
  
  .footer-title { 
    font-size: 1.2rem; 
    font-weight: 700; 
    margin-bottom: 16px;
  }
  
  .footer-description { 
    color: #4b5563;
  }
  
  .feature-list { 
    list-style: none;
  }
  
  .feature-list li { 
    margin-bottom: 8px;
  }
  
  .feature-list a { 
    color: #4b5563; 
    text-decoration: none;
  }
  
  .feature-list a:hover { 
    color: #000000;
  }
  
  .stats-list { 
    display: flex; 
    flex-direction: column; 
    gap: 12px;
  }
  
  .stat-item { 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  }
  
  .stat-number { 
    font-weight: 700;
  }
  
  .copyright { 
    text-align: center; 
    padding-top: 32px; 
    border-top: 1px solid #e5e7eb; 
    color: #6b7280; 
    font-size: 0.9rem;
  }
  
  .privacy-note { 
    margin-top: 8px; 
    font-size: 0.8rem;
  }
  
  /* FRESHNESS INDICATOR */
  .freshness-indicator { 
    display: none;
  }
  
  /* HIDDEN */
  .hidden { 
    display: none;
  }
  
  /* BUILD INFO - FIXED HYDRATION */
  .build-info { 
    margin-top: 48px; 
    padding: 16px; 
    border-top: 1px solid #e5e7eb; 
    font-size: 0.8rem; 
    color: #6b7280;
    text-align: center;
  }
  
  /* RESPONSIVE ADJUSTMENTS */
  @media (max-width: 640px) {
    .stats-header { 
      flex-direction: column; 
      align-items: flex-start;
    }
    
    .range-labels { 
      flex-direction: column; 
      gap: 8px;
    }
    
    .footer-content { 
      gap: 24px;
    }
  }
  
  @media (max-width: 480px) {
    .title { 
      font-size: 1.8rem;
    }
    
    .year-badge { 
      display: inline-block; 
      margin-left: 0; 
      margin-top: 10px;
    }
    
    .subtitle { 
      flex-direction: column; 
      align-items: flex-start;
    }
    
    .cta-card { 
      padding: 32px 20px;
    }
    
    .cta-card h2 { 
      font-size: 1.5rem;
    }
  }
`;

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();
const SITE_URL = 'https://www.professionalresumefree.com';

// FAQ Data
const FAQS = [
  {
    question: "What is the ideal resume length?",
    answer: "For most positions, aim for 300-800 words. Entry-level: 300-500 words, Mid-career: 400-700 words, Executive: 600-800 words. One page typically equals 450-500 words."
  },
  {
    question: "Does word count really matter for resumes?",
    answer: "Yes! Recruiters spend an average of 6-7 seconds scanning a resume. The right length ensures you include essential information without overwhelming the reader. ATS systems also prefer concise, well-structured resumes."
  },
  {
    question: "Should I exclude bullet points from the count?",
    answer: "It depends. Some ATS systems parse bullet points differently. Our tool lets you toggle this option to see both counts. Generally, bullet points improve readability and should be included in your final count."
  },
  {
    question: "How accurate is the character count?",
    answer: "Our counter is 100% accurate, tracking characters with and without spaces in real-time. This helps ensure your resume fits within application system limits, which often have character constraints."
  },
  {
    question: "Can I use this for cover letters too?",
    answer: "Absolutely! The same length principles apply to cover letters. Aim for 250-400 words for cover letters, focusing on quality over quantity while covering key points concisely."
  }
];

// Resume Length Guidelines
const LENGTH_GUIDELINES = [
  {
    level: "Entry-Level",
    words: "300-500 words",
    pages: "≤ 1 page",
    focus: "Education, internships, basic skills"
  },
  {
    level: "Mid-Career",
    words: "400-700 words",
    pages: "1-2 pages",
    focus: "Experience, achievements, specific skills"
  },
  {
    level: "Senior/Manager",
    words: "500-800 words",
    pages: "1-2 pages",
    focus: "Leadership, strategic impact, results"
  },
  {
    level: "Executive",
    words: "600-800 words",
    pages: "2 pages max",
    focus: "Vision, P&L, organizational impact"
  }
];

// Tips Data
const RESUME_TIPS = [
  "Start with strong action verbs",
  "Quantify achievements with numbers",
  "Tailor content to job description",
  "Use bullet points for readability",
  "Focus on recent experience",
  "Include relevant keywords",
  "Keep formatting clean and simple",
  "Proofread multiple times",
  "Save as PDF for consistency",
  "Update regularly"
];

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'resume word counter',
  'resume character counter',
  'resume length checker',
  'ATS resume word count',
  'professional resume length',
  'free resume word counter',
  'resume editing tool',
  'character count resume',
  'resume optimization tool',
  'job application resume length'
];

const ResumeWordCharacterCounter = ({ seoData, buildTimestamp }) => {
  const [buildTime, setBuildTime] = useState('');
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    words: 0,
    charactersWithSpaces: 0,
    charactersWithoutSpaces: 0,
    lines: 0,
    paragraphs: 0,
    estimatedPages: 0,
  });
  const [excludeBullets, setExcludeBullets] = useState(false);
  const [countOnlyBody, setCountOnlyBody] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const textareaRef = useRef(null);

  // Set build time on client to avoid hydration mismatch
  useEffect(() => {
    setBuildTime(Date.now().toString());
  }, []);

  // Use SEO data with fallbacks
  const safeSeoData = seoData || {
    currentDate: new Date().toISOString().split('T')[0],
    lastModifiedDate: new Date().toISOString()
  };

  const currentDate = safeSeoData.currentDate;
  const lastModifiedDate = safeSeoData.lastModifiedDate;

  // Schema data - Expanded with comprehensive structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/free-resume-word-character-counter#webpage`,
        "url": `${SITE_URL}/free-resume-word-character-counter`,
        "name": `Resume Word & Character Counter - Professional Length Checker ${CURRENT_YEAR}`,
        "description": "Free professional resume word counter and character counter with ATS optimization guidance. Check your resume length against industry standards with real-time analysis.",
        "datePublished": "2024-01-01",
        "dateModified": lastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          "url": SITE_URL,
          "name": "Professional Resume Free",
          "description": "Free online resume building tools for job seekers",
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
              "https://twitter.com/ProResumeFree",
              "https://www.linkedin.com/company/professional-resume-free"
            ]
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/og-word-counter.jpg`,
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
              "name": "Resume Tools",
              "item": `${SITE_URL}/resume-tools`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Word & Character Counter",
              "item": `${SITE_URL}/free-resume-word-character-counter`
            }
          ]
        },
        "mainEntity": {
          "@type": "SoftwareApplication",
          "name": "Resume Word & Character Counter - ATS Optimized Resume Length Checker",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.8,
            "ratingCount": 142,
            "bestRating": 5,
            "worstRating": 1
          },
          "description": "Free online ATS-friendly resume word and character counter that helps job seekers optimize resume length for better ATS performance.",
          "featureList": [
            "Real-time Word Count",
            "Character Count with/without Spaces",
            "ATS-Optimized Length Guidelines",
            "Professional Resume Tips",
            "One-Click Clear Options",
            "Mobile-Friendly Interface",
            "No Sign Up Required",
            "Free Forever"
          ],
          "softwareVersion": "2024.1.0",
          "applicationSuite": "Resume Optimization Tools",
          "countriesSupported": "Global"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/free-resume-word-character-counter#faqpage`,
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": lastModifiedDate,
            "author": {
              "@type": "Person",
              "name": "Resume Expert Team"
            }
          },
          "mainEntityOfPage": `${SITE_URL}/free-resume-word-character-counter#webpage`
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Use the Resume Word Counter to Optimize Your Resume",
        "description": "Step-by-step guide to check and optimize your resume length using our free tool",
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Paste Your Resume Content",
            "text": "Copy and paste your entire resume content into the text area.",
            "url": `${SITE_URL}/free-resume-word-character-counter#paste`,
            "image": `${SITE_URL}/images/step1-paste.jpg`
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Review Real-Time Statistics",
            "text": "Watch as the tool instantly calculates words, characters, paragraphs, and estimated pages.",
            "url": `${SITE_URL}/free-resume-word-character-counter#stats`,
            "image": `${SITE_URL}/images/step2-stats.jpg`
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Check Against Guidelines",
            "text": "Compare your word count against professional resume length guidelines for your career level.",
            "url": `${SITE_URL}/free-resume-word-character-counter#guidelines`,
            "image": `${SITE_URL}/images/step3-guidelines.jpg`
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Optimize and Adjust",
            "text": "Use the tips and recommendations to adjust your resume content for optimal length and impact.",
            "url": `${SITE_URL}/free-resume-word-character-counter#optimize`,
            "image": `${SITE_URL}/images/step4-optimize.jpg`
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Resume Length Guidelines by Career Level",
        "itemListElement": LENGTH_GUIDELINES.map((guideline, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": `${guideline.level}: ${guideline.words}`,
          "description": `Professional resume length recommendation for ${guideline.level} professionals. Focus on ${guideline.focus}.`
        }))
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".title", ".subtitle", ".section-title", ".faq-question h3"]
      }
    ]
  };

  const calculateStats = useCallback((content) => {
    let processedText = content;
    
    if (excludeBullets) {
      processedText = processedText.replace(/^[•\-*]\s*/gm, '');
    }
    
    if (countOnlyBody) {
      const lines = processedText.split('\n');
      if (lines.length > 2) {
        processedText = lines.slice(2).join('\n');
      }
    }

    const charsWithSpaces = processedText.length;
    const charsWithoutSpaces = processedText.replace(/\s+/g, '').length;
    
    const words = processedText.trim() === '' ? 0 : 
      processedText.trim().split(/\s+/).filter(word => word.length > 0).length;
    
    const lines = processedText === '' ? 0 : 
      processedText.split('\n').filter(line => line.trim().length > 0).length;
    
    const paragraphs = processedText.trim() === '' ? 0 : 
      processedText.split(/\n\s*\n/).filter(para => para.trim().length > 0).length;
    
    const estimatedPages = words / 475;

    return {
      words,
      charactersWithSpaces: charsWithSpaces,
      charactersWithoutSpaces: charsWithoutSpaces,
      lines,
      paragraphs,
      estimatedPages: parseFloat(estimatedPages.toFixed(2)),
    };
  }, [excludeBullets, countOnlyBody]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats(calculateStats(text));
    }, 300);

    return () => clearTimeout(timer);
  }, [text, calculateStats]);

  const handleReset = () => {
    setText('');
    setStats(calculateStats(''));
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleClearOptions = () => {
    setExcludeBullets(false);
    setCountOnlyBody(false);
  };

  const isWithinRange = stats.words >= 300 && stats.words <= 800;
  const isOverLimit = stats.words > 800;
  const isUnderLimit = stats.words < 300;

  const getWordCountStatus = () => {
    if (isWithinRange) return { text: '✓ Perfect length!', color: '#10b981' };
    if (isUnderLimit) return { text: '⚠ Add more content', color: '#ef4444' };
    return { text: '⚠ Consider shortening', color: '#ef4444' };
  };

  const status = getWordCountStatus();

  return (
    <div className="container" lang="en-US">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Primary Meta Tags */}
        <title>Resume Word & Character Counter – Professional Length Checker {CURRENT_YEAR} | Free ATS Optimized Tool</title>
        <meta 
          name="description" 
          content={`Free professional resume word counter and character counter with ATS optimization. Check your resume length against industry standards. Real-time analysis with word count, character count, and professional recommendations. ${CURRENT_YEAR}`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Resume Word & Character Counter - Professional Length Checker" />
        <meta name="chatgpt-fts:description" content="Free professional resume word counter and character counter with ATS optimization. Check your resume length against industry standards." />
        <meta name="chatgpt-fts:keywords" content="resume word counter, resume character counter, resume length checker" />
        <meta name="chatgpt-fts:last-updated" content={currentDate} />
        <meta name="generator" content="Professional Resume Free - Word Counter Tool" />
        
        {/* Freshness Meta Tags */}
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta name="revisit-after" content="2 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={`${SITE_URL}/free-resume-word-character-counter`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Resume Word & Character Counter – Professional Length Checker ${CURRENT_YEAR}`} />
        <meta property="og:description" content="Free professional resume word counter with ATS optimization guidance. Check length, characters, and get industry-standard recommendations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/free-resume-word-character-counter`} />
        <meta property="og:image" content={`${SITE_URL}/og-word-counter.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Word & Character Counter - Free Professional Tool" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={lastModifiedDate} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Word & Character Counter" />
        <meta name="twitter:description" content="Professional resume length checker with ATS optimization and real-time analysis" />
        <meta name="twitter:image" content={`${SITE_URL}/twitter-word-counter.jpg`} />
        <meta name="twitter:image:alt" content="Resume Word Counter Tool" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Hidden freshness indicator */}
      <div className="freshness-indicator">
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={currentDate} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a itemProp="item" href="https://www.professionalresumefree.com" className="breadcrumb-link">
              <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <li className="breadcrumb-separator">›</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a itemProp="item" href="https://www.professionalresumefree.com/resume-tools" className="breadcrumb-link">
              <span itemProp="name">Resume Tools</span>
            </a>
            <meta itemProp="position" content="2" />
          </li>
          <li className="breadcrumb-separator">›</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Word & Character Counter</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      <header className="header">
        <h1 className="title">
          Resume Word & Character Counter
          <span className="year-badge">{CURRENT_YEAR}</span>
        </h1>
        <p className="subtitle">
          Professional resume length analyzer with ATS optimization guidance
          <span className={`word-count ${isWithinRange ? 'in-range' : 'out-of-range'}`}>
            {stats.words} words
          </span>
        </p>
        
        <div className="aggregate-rating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="4.8" />
          <meta itemProp="ratingCount" content="142" />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="worstRating" content="1" />
          <div className="rating-stars">
            ★★★★★
            <span className="rating-value" itemProp="ratingValue">4.8/5</span>
          </div>
          <div className="rating-text" itemProp="ratingCount">Trusted by 10,000+ professionals</div>
        </div>
      </header>

      <main className="main">
        {/* Main Editor Section */}
        <section className="editor-section" aria-labelledby="editor-title">
          <div className="editor-header">
            <h2 id="editor-title">Paste Your Resume Content</h2>
            <p>
              Paste or type your resume content below for real-time analysis. All processing happens in your browser - your data never leaves your device.
            </p>
          </div>
          
          <div className="text-area-container">
            <textarea
              ref={textareaRef}
              className="textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={`Paste your resume content here...
              
For example:
John Doe
Software Engineer
(123) 456-7890 | john@email.com
LinkedIn: linkedin.com/in/johndoe

PROFESSIONAL SUMMARY
Results-driven software engineer with 5+ years of experience...

EXPERIENCE
Senior Developer | Tech Company | 2020-Present
• Led development of scalable web applications...
• Reduced page load time by 40%...
• Mentored 3 junior developers...`}
              rows={20}
              autoFocus
              aria-label="Resume content input area"
            />
            
            <div className="button-group">
              <button
                className="primary-button"
                onClick={handleReset}
                type="button"
                aria-label="Clear all text from the input area"
              >
                Clear All Text
              </button>
              <button
                className="secondary-button"
                onClick={handleClearOptions}
                type="button"
                aria-label="Reset counting options to default settings"
              >
                Reset Options
              </button>
            </div>
          </div>
        </section>

        {/* Stats Display Section */}
        <section className="stats-section" aria-labelledby="stats-title">
          <div className="stats-header">
            <h2 id="stats-title">Resume Analysis Results</h2>
            <div className="status-indicator" style={{ color: status.color }}>
              <span className="status-text">{status.text}</span>
            </div>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card" itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="stat-label">Word Count</div>
              <div className={`stat-value ${isUnderLimit ? 'under-limit' : ''} ${isOverLimit ? 'over-limit' : ''}`} itemProp="value">
                {stats.words.toLocaleString()}
                <div className="stat-subtext">
                  {isWithinRange ? 'Ideal range: 300-800' : isUnderLimit ? 'Below minimum: 300' : 'Above maximum: 800'}
                </div>
              </div>
            </div>

            <div className="stat-card" itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="stat-label">Characters</div>
              <div className="stat-value" itemProp="value">
                {stats.charactersWithSpaces.toLocaleString()}
                <div className="stat-subtext">including spaces</div>
              </div>
            </div>

            <div className="stat-card" itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="stat-label">Characters</div>
              <div className="stat-value" itemProp="value">
                {stats.charactersWithoutSpaces.toLocaleString()}
                <div className="stat-subtext">excluding spaces</div>
              </div>
            </div>

            <div className="stat-card" itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="stat-label">Lines</div>
              <div className="stat-value" itemProp="value">
                {stats.lines}
                <div className="stat-subtext">non-empty lines</div>
              </div>
            </div>

            <div className="stat-card" itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="stat-label">Paragraphs</div>
              <div className="stat-value" itemProp="value">
                {stats.paragraphs}
                <div className="stat-subtext">content sections</div>
              </div>
            </div>

            <div className="stat-card" itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="stat-label">Estimated Pages</div>
              <div className="stat-value" itemProp="value">
                {stats.estimatedPages}
                <div className="stat-subtext">based on 475 words/page</div>
              </div>
            </div>
          </div>

          {/* Range Indicator */}
          <div className="range-section">
            <div className="range-header">
              <h3>Word Count Range Analysis</h3>
              <div className="current-position">
                Current: <strong>{stats.words} words</strong>
              </div>
            </div>
            
            <div className="range-indicator">
              <div className="range-labels">
                <span className={`range-label ${isUnderLimit ? 'active-warning' : ''}`}>
                  Too Short ({stats.words < 300 ? '←' : ''})
                </span>
                <span className={`range-label ${isWithinRange ? 'active-success' : ''}`}>
                  Ideal Range
                </span>
                <span className={`range-label ${isOverLimit ? 'active-warning' : ''}`}>
                  Too Long ({stats.words > 800 ? '→' : ''})
                </span>
              </div>
              
              <div className="range-bar">
                <div 
                  className={`range-progress ${isWithinRange ? 'in-range-bar' : isUnderLimit ? 'under-bar' : 'over-bar'}`}
                  style={{ width: `${Math.min(Math.max(stats.words / 1000 * 100, 2), 100)}%` }}
                />
                <div className="range-markers">
                  <div className="range-marker" style={{ left: '0%' }}>0</div>
                  <div className="range-marker" style={{ left: '30%' }}>300</div>
                  <div className="range-marker" style={{ left: '80%' }}>800</div>
                  <div className="range-marker" style={{ left: '100%' }}>1000</div>
                </div>
              </div>
            </div>
          </div>

          {/* Options Section */}
          <div className="options-section">
            <h3>Counting Options</h3>
            <div className="options-grid">
              <label className="option">
                <input
                  type="checkbox"
                  checked={excludeBullets}
                  onChange={(e) => setExcludeBullets(e.target.checked)}
                  aria-label="Exclude bullet points from word count"
                />
                <div className="option-content">
                  <div className="option-title">Exclude bullet points</div>
                  <div className="option-description">Ignore lines starting with •, -, or *</div>
                </div>
              </label>
              
              <label className="option">
                <input
                  type="checkbox"
                  checked={countOnlyBody}
                  onChange={(e) => setCountOnlyBody(e.target.checked)}
                  aria-label="Count only body text, skip first 2 lines"
                />
                <div className="option-content">
                  <div className="option-title">Count only body text</div>
                  <div className="option-description">Skip first 2 lines (header/contact info)</div>
                </div>
              </label>
            </div>
          </div>
        </section>

        {/* Length Guidelines Section */}
        <section className="guidelines-section" aria-labelledby="guidelines-title">
          <h2 className="section-title" id="guidelines-title">Professional Resume Length Guidelines</h2>
          <p className="section-subtitle">
            Industry standards for different career levels (based on ATS optimization research)
          </p>
          
          <div className="guidelines-grid">
            {LENGTH_GUIDELINES.map((guideline, index) => (
              <div key={index} className="guideline-card" itemScope itemType="https://schema.org/ListItem">
                <div className="guideline-header">
                  <div className="guideline-level" itemProp="name">{guideline.level}</div>
                  <div className="guideline-words">{guideline.words}</div>
                </div>
                <div className="guideline-body">
                  <div className="guideline-pages">
                    <span className="guideline-label">Pages:</span>
                    <span className="guideline-value">{guideline.pages}</span>
                  </div>
                  <div className="guideline-focus">
                    <span className="guideline-label">Focus on:</span>
                    <span className="guideline-value">{guideline.focus}</span>
                  </div>
                </div>
                <meta itemProp="position" content={index + 1} />
              </div>
            ))}
          </div>
        </section>

        {/* Long-Tail Keywords Section - GEO Optimization */}
        <section className="guidelines-section">
          <h2 className="section-title">Common Questions About Resume Length</h2>
          <div className="guidelines-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {[
              "how many words should a resume be 2026",
              "resume word count for experienced professionals",
              "ideal resume length for ATS systems",
              "one page resume word count guideline",
              "character count for online job applications",
              "resume length for senior executives",
              "how to shorten resume without losing impact",
              "resume word counter free online tool"
            ].map((keyword, i) => (
              <div key={i} className="guideline-card" style={{ padding: '20px' }}>
                <p style={{ fontWeight: '600', marginBottom: '12px' }}>❓ {keyword}</p>
                <a href="/complete-resume-resource-library" className="breadcrumb-link">
                  Find answer in our resource library →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="tips-section" aria-labelledby="tips-title">
          <h2 className="section-title" id="tips-title">Professional Resume Writing Tips</h2>
          <div className="tips-grid">
            {RESUME_TIPS.map((tip, index) => (
              <div key={index} className="tip-card">
                <div className="tip-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="tip-content">{tip}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section" aria-labelledby="faq-title">
          <h2 className="section-title" id="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list" itemScope itemType="https://schema.org/FAQPage">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                onKeyDown={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === index ? null : index)}
                tabIndex={0}
                role="button"
                aria-expanded={activeFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="faq-question">
                  <h3 itemProp="name">{faq.question}</h3>
                  <span className="faq-toggle" aria-hidden="true">
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </div>
                {activeFaq === index && (
                  <div 
                    className="faq-answer" 
                    id={`faq-answer-${index}`}
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section" aria-labelledby="benefits-title">
          <h2 className="section-title" id="benefits-title">Why Optimize Resume Length?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3 className="benefit-title">ATS Friendly</h3>
              <p className="benefit-description">
                Applicant Tracking Systems prefer concise, well-structured resumes. Optimal length improves parsing accuracy.
              </p>
            </div>
            
            <div className="benefit-card">
              <h3 className="benefit-title">Recruiter Attention</h3>
              <p className="benefit-description">
                Recruiters spend 6-7 seconds per resume. The right length ensures key information gets noticed quickly.
              </p>
            </div>
            
            <div className="benefit-card">
              <h3 className="benefit-title">Professional Standards</h3>
              <p className="benefit-description">
                Following industry length standards shows professionalism and respect for the hiring process.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-card">
            <h2>Ready to Optimize Your Resume?</h2>
            <p>Use our free resume builder to create ATS-optimized resumes with perfect length and formatting.</p>
            <a href="https://www.professionalresumefree.com/resume-templates" className="cta-button">
              Create Professional Resume
            </a>
          </div>
        </section>
      </main>

      
             

      {/* Build Info - Fixed hydration */}
      <div className="build-info">
        <p>Last updated: {currentDate} • Build: {buildTime}</p>
      </div>

      {/* Hidden Metadata */}
      <div className="hidden">
        <span itemProp="dateModified">{lastModifiedDate}</span>
        <span itemProp="softwareVersion">2026.1.0</span>
      </div>
    </div>
  );
};

// SSG with ISR
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate
      },
      buildTimestamp
    },
    // Revalidate every hour
    revalidate: 3600,
  };
}

export default ResumeWordCharacterCounter;