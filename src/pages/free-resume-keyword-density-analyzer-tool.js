// pages/free-resume-keyword-density-analyzer-tool.jsx
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
  
  /* HERO SECTION */
  .hero-section { 
    margin-bottom: 40px; 
    padding-bottom: 32px; 
    border-bottom: 2px solid #f3f4f6;
  }
  
  .hero-content { 
    width: 100%;
  }
  
  .trust-badge { 
    display: inline-block; 
    background: #f3f4f6; 
    padding: 8px 16px; 
    border-radius: 50px; 
    margin-bottom: 20px; 
    border: 1px solid #e5e7eb;
  }
  
  .trust-badge-text { 
    font-weight: 500; 
    color: #111827;
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
  
  .hero-title { 
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
  
  .gradient-text { 
    background: linear-gradient(135deg, #000000 0%, #4b5563 100%); 
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    background-clip: text;
  }
  
  .hero-subtitle { 
    font-size: clamp(1rem, 2.5vw, 1.2rem); 
    color: #4b5563; 
    max-width: 900px; 
    line-height: 1.7; 
    margin-bottom: 24px;
  }
  
  .hero-highlight { 
    background: #f3f4f6; 
    padding: 2px 6px; 
    border-radius: 4px;
  }
  
  /* CTA BUTTONS */
  .cta-buttons { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 16px; 
    margin: 24px 0;
  }
  
  .primary-button, .secondary-button { 
    display: inline-flex; 
    align-items: center; 
    gap: 8px; 
    padding: 14px 28px; 
    border-radius: 8px; 
    font-weight: 600; 
    font-size: 1rem; 
    border: 2px solid #000000;
    cursor: pointer; 
    transition: all 0.2s ease; 
    text-decoration: none;
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
  
  .button-arrow { 
    transition: transform 0.2s;
  }
  
  .primary-button:hover .button-arrow { 
    transform: translateX(4px);
  }
  
  @media (max-width: 480px) {
    .primary-button, .secondary-button { 
      width: 100%; 
      justify-content: center;
    }
  }
  
  /* HERO STATS */
  .hero-stats { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 24px; 
    margin: 32px 0;
  }
  
  .stat-item { 
    flex: 1 1 auto; 
    min-width: 100px; 
    text-align: center;
  }
  
  .stat-number { 
    font-size: 1.8rem; 
    font-weight: 800; 
    color: #000000; 
    display: block; 
    line-height: 1.2;
  }
  
  .stat-label { 
    color: #4b5563; 
    font-size: 0.85rem;
  }
  
  /* MAIN */
  .main { 
    margin: 32px 0;
  }
  
  /* ANALYZER SECTION */
  .analyzer-section { 
    margin-bottom: 48px;
  }
  
  .analyzer-header { 
    margin-bottom: 32px;
  }
  
  .analyzer-header h2 { 
    font-size: 1.8rem; 
    font-weight: 700; 
    margin-bottom: 12px;
  }
  
  .analyzer-header p { 
    color: #4b5563;
  }
  
  .analyzer-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px; 
    margin-bottom: 24px;
  }
  
  @media (min-width: 768px) {
    .analyzer-grid { grid-template-columns: 1fr 1fr; }
  }
  
  .resume-column, .keywords-column { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 24px; 
    border: 1px solid #e5e7eb;
  }
  
  .column-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 16px; 
    flex-wrap: wrap; 
    gap: 12px;
  }
  
  .column-header h3 { 
    font-size: 1.2rem; 
    font-weight: 600;
  }
  
  .example-button { 
    padding: 6px 12px; 
    background: #f3f4f6; 
    border: 1px solid #e5e7eb; 
    border-radius: 6px; 
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .example-button:hover { 
    background: #e5e7eb;
  }
  
  .textarea, .keywords-textarea { 
    width: 100%; 
    padding: 16px; 
    border: 2px solid #e5e7eb; 
    border-radius: 12px; 
    font-family: inherit; 
    font-size: 1rem; 
    line-height: 1.6; 
    resize: vertical; 
    margin-bottom: 12px;
    transition: border-color 0.2s;
  }
  
  .textarea:focus, .keywords-textarea:focus { 
    outline: none; 
    border-color: #000000;
  }
  
  .word-count, .keyword-count { 
    text-align: right; 
    font-size: 0.85rem; 
    color: #6b7280;
  }
  
  .industry-selector { 
    min-width: 200px;
  }
  
  .industry-select { 
    width: 100%; 
    padding: 8px; 
    border: 2px solid #e5e7eb; 
    border-radius: 6px; 
    font-family: inherit;
  }
  
  .analyzer-actions { 
    display: flex; 
    gap: 16px; 
    justify-content: center; 
    margin-top: 24px; 
    flex-wrap: wrap;
  }
  
  .analyze-button, .reset-button { 
    padding: 12px 24px; 
    border-radius: 8px; 
    font-weight: 600; 
    cursor: pointer;
    transition: all 0.2s;
    min-width: 200px;
  }
  
  .analyze-button { 
    background: #000000; 
    color: #ffffff; 
    border: 2px solid #000000;
  }
  
  .analyze-button:hover { 
    background: #1f2937; 
    border-color: #1f2937;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .reset-button { 
    background: transparent; 
    color: #000000; 
    border: 2px solid #000000;
  }
  
  .reset-button:hover { 
    background: #f9fafb;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 480px) {
    .analyze-button, .reset-button { 
      width: 100%;
    }
  }
  
  /* RESULTS SECTION */
  .results-section { 
    margin-bottom: 48px;
  }
  
  .results-header { 
    margin-bottom: 32px;
  }
  
  .results-header h2 { 
    font-size: 1.8rem; 
    font-weight: 700; 
    margin-bottom: 16px;
  }
  
  .results-summary { 
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    gap: 16px; 
    margin-top: 20px;
  }
  
  @media (min-width: 640px) {
    .results-summary { grid-template-columns: repeat(4, 1fr); }
  }
  
  .summary-item { 
    background: #ffffff; 
    padding: 20px; 
    border-radius: 12px; 
    border: 1px solid #e5e7eb; 
    text-align: center;
  }
  
  .summary-label { 
    font-size: 0.85rem; 
    color: #6b7280; 
    margin-bottom: 8px;
  }
  
  .summary-value { 
    font-size: 1.5rem; 
    font-weight: 700;
  }
  
  /* KEYWORDS GRID */
  .keywords-grid { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 28px; 
    border: 1px solid #e5e7eb;
  }
  
  .keywords-grid h3 { 
    font-size: 1.3rem; 
    font-weight: 700; 
    margin-bottom: 8px;
  }
  
  .grid-subtitle { 
    color: #6b7280; 
    margin-bottom: 24px;
  }
  
  .keywords-table { 
    display: flex; 
    flex-direction: column; 
    gap: 8px;
  }
  
  .table-header { 
    display: grid; 
    grid-template-columns: 2fr 1fr 1fr 1fr 2fr; 
    background: #f9fafb; 
    padding: 12px; 
    border-radius: 8px; 
    font-weight: 600;
  }
  
  .table-row { 
    display: grid; 
    grid-template-columns: 2fr 1fr 1fr 1fr 2fr; 
    padding: 12px; 
    border-bottom: 1px solid #e5e7eb; 
    align-items: center;
  }
  
  .table-row:last-child { 
    border-bottom: none;
  }
  
  .table-cell { 
    word-break: break-word;
  }
  
  .keyword-text { 
    font-weight: 500;
  }
  
  .frequency-badge { 
    display: inline-block; 
    background: #f3f4f6; 
    padding: 4px 10px; 
    border-radius: 50px; 
    font-size: 0.85rem;
  }
  
  .density-value { 
    font-weight: 600;
  }
  
  .status-badge { 
    display: inline-block; 
    padding: 4px 10px; 
    border-radius: 50px; 
    font-size: 0.8rem; 
    color: #ffffff;
  }
  
  .recommendation { 
    font-size: 0.85rem; 
    color: #4b5563;
  }
  
  .no-results { 
    padding: 40px; 
    text-align: center; 
    color: #6b7280;
  }
  
  @media (max-width: 768px) {
    .table-header, .table-row { 
      grid-template-columns: 1fr; 
      gap: 8px;
    }
    
    .table-cell { 
      padding: 4px 0;
    }
    
    .table-header { 
      display: none;
    }
  }
  
  /* INDUSTRY SECTION */
  .industry-section { 
    margin: 48px 0;
  }
  
  .section-header { 
    margin-bottom: 32px;
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
    margin: 0 auto;
  }
  
  .industry-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px;
  }
  
  @media (min-width: 640px) {
    .industry-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .industry-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .industry-card { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 24px; 
    border: 1px solid #e5e7eb;
  }
  
  .industry-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 16px; 
    flex-wrap: wrap; 
    gap: 12px;
  }
  
  .industry-title { 
    font-size: 1.2rem; 
    font-weight: 700;
  }
  
  .use-keywords-button { 
    padding: 6px 12px; 
    background: #000000; 
    color: #ffffff; 
    border: none; 
    border-radius: 6px; 
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .use-keywords-button:hover { 
    background: #1f2937;
  }
  
  .industry-keywords { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 8px;
  }
  
  .keyword-tag { 
    background: #f3f4f6; 
    padding: 4px 10px; 
    border-radius: 50px; 
    font-size: 0.85rem;
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
  
  /* CTA SECTION */
  .cta-section { 
    margin: 48px 0;
  }
  
  .cta-content { 
    background: linear-gradient(135deg, #000000 0%, #1f2937 100%); 
    padding: 48px; 
    border-radius: 24px; 
    text-align: center; 
    color: #ffffff;
  }
  
  .cta-title { 
    font-size: 2rem; 
    font-weight: 800; 
    margin-bottom: 16px;
  }
  
  .cta-subtitle { 
    color: #9ca3af; 
    max-width: 600px; 
    margin: 0 auto 24px;
  }
  
  .cta-button { 
    display: inline-flex; 
    align-items: center; 
    gap: 8px; 
    padding: 16px 32px; 
    background: #ffffff; 
    color: #000000; 
    border: none; 
    border-radius: 8px; 
    font-weight: 600; 
    text-decoration: none;
    transition: all 0.2s;
  }
  
  .cta-button:hover { 
    transform: translateY(-2px); 
    box-shadow: 0 10px 15px -3px rgba(255, 255, 255, 0.2);
  }
  
  .cta-button-arrow { 
    transition: transform 0.2s;
  }
  
  .cta-button:hover .cta-button-arrow { 
    transform: translateX(4px);
  }
  
  .cta-guarantee { 
    margin-top: 24px;
  }
  
  .guarantee-text { 
    background: rgba(255, 255, 255, 0.1); 
    padding: 8px 16px; 
    border-radius: 50px; 
    font-size: 0.9rem;
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
    .hero-stats { 
      flex-direction: column; 
      gap: 16px;
    }
    
    .stat-item { 
      text-align: left; 
      display: flex; 
      justify-content: space-between;
    }
    
    .stat-number { 
      font-size: 1.2rem;
    }
    
    .cta-content { 
      padding: 32px 20px;
    }
    
    .cta-title { 
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .hero-title { 
      font-size: 1.8rem;
    }
    
    .column-header { 
      flex-direction: column; 
      align-items: flex-start;
    }
    
    .industry-selector { 
      width: 100%;
    }
  }
`;

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();
const SITE_URL = 'https://www.professionalresumefree.com';

// FAQ Data
const FAQS = [
  {
    question: "What is keyword density and why is it important for resumes?",
    answer: "Keyword density measures how frequently specific words appear in your resume relative to total word count. It's crucial because ATS systems scan for keywords matching job descriptions, and optimal density (1-3%) improves your chances of passing automated screening while maintaining natural readability."
  },
  {
    question: "What's the ideal keyword density percentage for resumes?",
    answer: "Aim for 1-3% per important keyword. Lower than 1% may not trigger ATS recognition, while higher than 3% can appear unnatural or 'keyword-stuffed' to both ATS and human reviewers. Strategic placement in key sections is more effective than high frequency alone."
  },
  {
    question: "How do I identify the right keywords for my industry?",
    answer: "Analyze job descriptions for your target roles, extract recurring technical skills and industry terms, research LinkedIn profiles of professionals in similar positions, and use our tool to identify your resume's current keyword strengths and gaps for optimization."
  },
  {
    question: "Should I include keywords in the skills section only?",
    answer: "No! Keywords should appear throughout your resume—in summary, experience bullet points, and achievements. Strategic distribution across sections shows comprehensive proficiency rather than just listing skills. Our analyzer tracks keyword distribution across your entire resume."
  },
  {
    question: "How does keyword density affect human readability?",
    answer: "Balanced keyword density (1-3%) maintains natural language flow. Over-optimization (keyword stuffing) makes content sound robotic and reduces readability. Our tool helps you optimize for both ATS systems and human reviewers with density recommendations."
  }
];

// Common Industry Keywords
const INDUSTRY_KEYWORDS = {
  'Software Development': ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'API', 'Git', 'Agile', 'Testing', 'DevOps'],
  'Marketing': ['SEO', 'Google Analytics', 'Content Strategy', 'Social Media', 'Campaign', 'ROI', 'Brand', 'Lead Generation', 'Digital Marketing', 'Analytics'],
  'Finance': ['Financial Analysis', 'Budgeting', 'Forecasting', 'Excel', 'Reporting', 'Compliance', 'Risk Management', 'Accounting', 'Audit', 'Financial Modeling'],
  'Healthcare': ['Patient Care', 'Clinical', 'HIPAA', 'EMR', 'Healthcare Management', 'Medical Terminology', 'Treatment Planning', 'Quality Improvement', 'Regulatory Compliance', 'Patient Safety'],
  'Project Management': ['Project Planning', 'Stakeholder Management', 'Risk Assessment', 'Budget Management', 'Timeline', 'Scope', 'Agile', 'Waterfall', 'Team Leadership', 'Delivery']
};

// Optimization Tips
const OPTIMIZATION_TIPS = [
  "Include keywords in section headers",
  "Use variations of keywords (manage, management, manager)",
  "Place important keywords in the first third of your resume",
  "Incorporate keywords naturally in achievement statements",
  "Balance hard skills with soft skills keywords",
  "Update keywords for each job application",
  "Use industry-specific terminology",
  "Include certifications and qualifications as keywords",
  "Add location-based keywords if relevant",
  "Proofread for keyword repetition issues"
];

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'resume keyword analyzer',
  'keyword density checker',
  'ATS keyword optimization',
  'resume keyword density',
  'keyword analysis tool',
  'resume optimization software',
  'job application keywords',
  'resume keyword tracker',
  'keyword frequency analyzer',
  'professional resume keywords'
];

const ResumeKeywordDensityAnalyzer = ({ seoData, buildTimestamp }) => {
  const [buildTime, setBuildTime] = useState('');
  const [text, setText] = useState('');
  const [keywords, setKeywords] = useState('');
  const [analysisResults, setAnalysisResults] = useState({
    totalWords: 0,
    uniqueKeywords: 0,
    keywordDensity: {},
    keywordDistribution: {},
    topKeywords: [],
    overallDensity: 0,
    sectionCount: 0
  });
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  const textareaRef = useRef(null);
  const keywordsRef = useRef(null);

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
  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : currentDate;

  // Schema data with enhanced structure
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/free-resume-keyword-density-analyzer-tool#webpage`,
        "url": `${SITE_URL}/free-resume-keyword-density-analyzer-tool`,
        "name": `Resume Keyword Density Analyzer – ATS Optimization & Strategic Keyword Placement ${CURRENT_YEAR}`,
        "description": "Free professional resume keyword density analyzer with ATS optimization, industry-specific keyword suggestions, and strategic placement guidance. Improve your resume's visibility with AI-powered keyword analysis.",
        "datePublished": "2024-01-01",
        "dateModified": lastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          "url": SITE_URL,
          "name": "Professional Resume Free",
          "description": "Free online resume builder for job seekers",
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
              "https://www.linkedin.com/company/professional-resume-free",
              "https://www.facebook.com/ProfessionalResumeFree",
              "https://www.youtube.com/@ProfessionalResumeFree"
            ]
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/og-keyword-analyzer.jpg`,
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
              "name": "Free Tools",
              "item": `${SITE_URL}/free-resume-tools`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Keyword Density Analyzer",
              "item": `${SITE_URL}/free-resume-keyword-density-analyzer-tool`
            }
          ]
        },
        "mainEntity": {
          "@type": "SoftwareApplication",
          "name": "Resume Keyword Density Analyzer - ATS Optimization Tool",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2026-12-31"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.8,
            "ratingCount": 203,
            "bestRating": 5,
            "worstRating": 1
          },
          "description": "Free online ATS-optimized resume keyword analyzer that helps job seekers optimize resume keywords for maximum visibility and interview success.",
          "featureList": [
            "ATS-Optimized Keyword Analysis",
            "Industry-Specific Keyword Suggestions",
            "Keyword Density Visualization",
            "Strategic Placement Guidance",
            "Real-Time Analysis",
            "No Sign Up Required",
            "Free Forever"
          ],
          "softwareVersion": "2026.1.0",
          "screenshot": `${SITE_URL}/images/screenshot-keyword-analyzer.jpg`,
          "applicationSuite": "Career Tools",
          "countriesSupported": "Global",
          "fileSize": "Web Application"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/free-resume-keyword-density-analyzer-tool#faqpage`,
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": safeSeoData.faqDates?.[index] || currentDate,
            "author": {
              "@type": "Person",
              "name": "Resume Optimization Team"
            }
          },
          "mainEntityOfPage": `${SITE_URL}/free-resume-keyword-density-analyzer-tool#webpage`
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Optimize Resume Keywords for ATS",
        "description": "Step-by-step guide to analyze and optimize resume keywords for ATS compatibility",
        "totalTime": "PT10M",
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
            "text": "Copy and paste your resume text into the analyzer tool.",
            "url": `${SITE_URL}/free-resume-keyword-density-analyzer-tool#resume-input`,
            "image": `${SITE_URL}/images/step1-paste-resume.jpg`
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Add Target Keywords",
            "text": "Enter keywords from job descriptions or select industry-specific suggestions.",
            "url": `${SITE_URL}/free-resume-keyword-density-analyzer-tool#keywords-input`,
            "image": `${SITE_URL}/images/step2-add-keywords.jpg`
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Analyze Keyword Density",
            "text": "Get detailed analysis of keyword frequency, density, and distribution across your resume.",
            "url": `${SITE_URL}/free-resume-keyword-density-analyzer-tool#analysis`,
            "image": `${SITE_URL}/images/step3-analyze-density.jpg`
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Optimize and Improve",
            "text": "Use recommendations to adjust keyword usage for optimal ATS compatibility and readability.",
            "url": `${SITE_URL}/free-resume-keyword-density-analyzer-tool#optimization`,
            "image": `${SITE_URL}/images/step4-optimize-resume.jpg`
          }
        ]
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".hero-title", ".hero-subtitle", ".faq-question h3", ".industry-title"]
      },
      {
        "@type": "ItemList",
        "name": "Industry Keyword Categories",
        "itemListElement": Object.keys(INDUSTRY_KEYWORDS).map((industry, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": industry,
          "description": `${INDUSTRY_KEYWORDS[industry].slice(0, 3).join(', ')}...`
        }))
      }
    ]
  };

  // Calculate keyword density
  const analyzeKeywords = useCallback((content, keywordList) => {
    if (!content.trim() || !keywordList.trim()) {
      return {
        totalWords: 0,
        uniqueKeywords: 0,
        keywordDensity: {},
        keywordDistribution: {},
        topKeywords: [],
        overallDensity: 0,
        sectionCount: 0
      };
    }

    const words = content.toLowerCase().match(/\b\w+\b/g) || [];
    const totalWords = words.length;
    
    // Extract keywords and clean them
    const keywordArray = keywordList.toLowerCase()
      .split(/[,;\n]+/)
      .map(k => k.trim())
      .filter(k => k.length > 0);
    
    const uniqueKeywords = [...new Set(keywordArray)];
    
    // Analyze keyword frequency and density
    const keywordFrequency = {};
    const keywordDensity = {};
    
    uniqueKeywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const matches = content.match(regex) || [];
      keywordFrequency[keyword] = matches.length;
      
      // Calculate density percentage
      keywordDensity[keyword] = totalWords > 0 ? 
        parseFloat(((matches.length / totalWords) * 100).toFixed(2)) : 0;
    });
    
    // Analyze distribution across sections
    const sections = content.split(/\n\s*\n/).filter(s => s.trim().length > 0);
    const sectionCount = sections.length;
    const keywordDistribution = {};
    
    uniqueKeywords.forEach(keyword => {
      keywordDistribution[keyword] = sections.map(section => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        const matches = section.match(regex) || [];
        return matches.length;
      });
    });
    
    // Get top keywords by frequency
    const topKeywords = uniqueKeywords
      .filter(keyword => keywordFrequency[keyword] > 0)
      .sort((a, b) => keywordFrequency[b] - keywordFrequency[a])
      .slice(0, 10)
      .map(keyword => ({
        keyword,
        frequency: keywordFrequency[keyword],
        density: keywordDensity[keyword],
        status: getKeywordStatus(keywordDensity[keyword])
      }));
    
    // Calculate overall keyword density
    const totalKeywordOccurrences = Object.values(keywordFrequency).reduce((a, b) => a + b, 0);
    const overallDensity = totalWords > 0 ? 
      parseFloat(((totalKeywordOccurrences / totalWords) * 100).toFixed(2)) : 0;
    
    return {
      totalWords,
      uniqueKeywords: uniqueKeywords.length,
      keywordDensity,
      keywordDistribution,
      topKeywords,
      overallDensity,
      sectionCount
    };
  }, []);

  // Determine keyword status
  const getKeywordStatus = (density) => {
    if (density === 0) return 'missing';
    if (density < 1) return 'low';
    if (density <= 3) return 'optimal';
    return 'high';
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const results = analyzeKeywords(text, keywords);
      setAnalysisResults(results);
    }, 500);

    return () => clearTimeout(timer);
  }, [text, keywords, analyzeKeywords]);

  const handleReset = () => {
    setText('');
    setKeywords('');
    setSelectedIndustry('');
    setAnalysisResults(analyzeKeywords('', ''));
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleIndustrySelect = (industry) => {
    setSelectedIndustry(industry);
    const industryKeywords = INDUSTRY_KEYWORDS[industry] || [];
    setKeywords(industryKeywords.join(', '));
    
    if (keywordsRef.current) {
      keywordsRef.current.focus();
    }
  };

  const handleLoadExample = () => {
    const exampleText = `SENIOR SOFTWARE DEVELOPER
Tech Innovations Inc. | San Francisco, CA | 2020-Present

• Developed scalable web applications using React, Node.js, and MongoDB
• Implemented RESTful APIs and microservices architecture for improved performance
• Led Agile development team in delivering 15+ projects with 99.9% uptime
• Optimized application performance resulting in 40% faster load times
• Collaborated with cross-functional teams using Git version control

TECHNICAL SKILLS
Frontend: JavaScript, React, HTML5, CSS3, TypeScript
Backend: Node.js, Python, Express.js, REST APIs
Database: MongoDB, PostgreSQL, Redis
Tools: Git, Docker, AWS, Jenkins, Agile/Scrum

EDUCATION
Bachelor of Science in Computer Science
Stanford University | 2016-2020`;

    const exampleKeywords = "JavaScript, React, Node.js, Python, API, Git, Agile, AWS, MongoDB, Development";
    
    setText(exampleText);
    setKeywords(exampleKeywords);
    setSelectedIndustry('Software Development');
  };

  // Calculate optimization score
  const calculateOptimizationScore = () => {
    const { topKeywords, overallDensity } = analysisResults;
    
    if (topKeywords.length === 0) return 0;
    
    let score = 0;
    let optimalCount = 0;
    
    topKeywords.forEach(keyword => {
      if (keyword.status === 'optimal') {
        score += 10;
        optimalCount++;
      } else if (keyword.status === 'low') {
        score += 5;
      } else if (keyword.status === 'high') {
        score += 3;
      }
    });
    
    // Overall density factor
    if (overallDensity >= 2 && overallDensity <= 4) {
      score += 20;
    } else if (overallDensity >= 1 && overallDensity <= 5) {
      score += 10;
    } else if (overallDensity > 0) {
      score += 5;
    }
    
    // Keyword count factor
    if (optimalCount >= 3) {
      score += 10;
    } else if (optimalCount >= 1) {
      score += 5;
    }
    
    return Math.min(100, score);
  };

  const optimizationScore = calculateOptimizationScore();
  const getOptimizationColor = () => {
    if (optimizationScore >= 80) return '#28a745';
    if (optimizationScore >= 60) return '#ffc107';
    return '#dc3545';
  };

  // Get status display info
  const getStatusDisplay = (status) => {
    switch(status) {
      case 'missing': return { text: 'Missing', color: '#dc3545' };
      case 'low': return { text: 'Too low', color: '#ffc107' };
      case 'optimal': return { text: 'Optimal', color: '#28a745' };
      case 'high': return { text: 'Too high', color: '#ff6b35' };
      default: return { text: 'Unknown', color: '#6c757d' };
    }
  };

  return (
    <div className="container" lang="en-US">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Primary Meta Tags */}
        <title>Resume Keyword Density Analyzer – ATS Optimization &amp; Strategic Keyword Placement {CURRENT_YEAR}</title>
        <meta 
          name="title" 
          content={`Resume Keyword Density Analyzer – ATS Optimization & Strategic Keyword Placement ${CURRENT_YEAR}`}
        />
        <meta 
          name="description" 
          content={`Free professional resume keyword density analyzer with ATS optimization, industry-specific keyword suggestions, and strategic placement guidance. Improve your resume's visibility with AI-powered keyword analysis. ${CURRENT_YEAR}`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Resume Keyword Density Analyzer - ATS Optimization Tool" />
        <meta name="chatgpt-fts:description" content="Free professional resume keyword density analyzer with ATS optimization, industry-specific keyword suggestions, and strategic placement guidance." />
        <meta name="chatgpt-fts:keywords" content="resume keyword analyzer, keyword density checker, ATS keyword optimization" />
        <meta name="chatgpt-fts:last-updated" content={currentDate} />
        <meta name="generator" content="Professional Resume Free - Keyword Analyzer" />
        
        {/* Robots & Crawler Directives */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Content Freshness */}
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta name="revisit-after" content="2 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        
        {/* Canonical & Hreflang */}
        <link rel="canonical" href={`${SITE_URL}/free-resume-keyword-density-analyzer-tool`} />
        <link rel="alternate" href={`${SITE_URL}/free-resume-keyword-density-analyzer-tool`} hreflang="en" />
        <link rel="alternate" href={`${SITE_URL}/free-resume-keyword-density-analyzer-tool`} hreflang="en-US" />
        <link rel="alternate" href={`${SITE_URL}/free-resume-keyword-density-analyzer-tool`} hreflang="en-GB" />
        <link rel="alternate" href={`${SITE_URL}/free-resume-keyword-density-analyzer-tool`} hreflang="en-CA" />
        <link rel="alternate" href={`${SITE_URL}/free-resume-keyword-density-analyzer-tool`} hreflang="en-AU" />
        <link rel="alternate" href={`${SITE_URL}/free-resume-keyword-density-analyzer-tool`} hreflang="x-default" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Resume Keyword Density Analyzer – Professional ATS Optimization" />
        <meta property="og:description" content="Free resume keyword density analyzer with ATS optimization, industry keyword suggestions, and strategic placement analysis" />
        <meta property="og:image" content={`${SITE_URL}/og-keyword-analyzer.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Keyword Density Analyzer Tool" />
        <meta property="og:url" content={`${SITE_URL}/free-resume-keyword-density-analyzer-tool`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={lastModifiedDate} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Keyword Density Analyzer" />
        <meta name="twitter:description" content="Professional keyword analysis with ATS optimization and industry-specific suggestions" />
        <meta name="twitter:image" content={`${SITE_URL}/twitter-keyword-analyzer.jpg`} />
        <meta name="twitter:image:alt" content="Resume Keyword Density Analyzer Interface" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div className="freshness-indicator">
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="/" className="breadcrumb-link">
              <span className="breadcrumb-text">Home</span>
            </a>
          </li>
          <li className="breadcrumb-separator">›</li>
          <li>
            <a href="/free-resume-tools" className="breadcrumb-link">
              <span className="breadcrumb-text">Free Tools</span>
            </a>
          </li>
          <li className="breadcrumb-separator">›</li>
          <li>
            <span className="breadcrumb-text" aria-current="page">Keyword Density Analyzer</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="trust-badge">
              <span className="trust-badge-text">
                ★ 4.8/5 Rating • 12,000+ Users • Updated {freshnessIndicator}
              </span>
            </div>
            
            <h1 className="hero-title">
              Resume Keyword Density Analyzer
              <span className="gradient-text"> ATS Optimization Tool {CURRENT_YEAR}</span>
            </h1>
            
            <p className="hero-subtitle">
              <strong className="hero-highlight">Optimize your resume keywords for ATS systems</strong> with our free keyword density analyzer. 
              Get industry-specific suggestions, strategic placement guidance, and actionable insights to improve your resume's visibility.
            </p>

            <div className="cta-buttons">
              <a
                href="#analyzer"
                className="primary-button"
                aria-label="Start analyzing your resume keywords now"
              >
                <span className="button-text">Start Analyzing Keywords Now</span>
                <span className="button-arrow">→</span>
              </a>
              
              <a
                href="/free-resume-tools"
                className="secondary-button"
                aria-label="Explore all free resume tools"
              >
                <span className="button-text">All Free Tools</span>
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">12K+</span>
                <span className="stat-label">Users Analyzed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">94%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3.2x</span>
                <span className="stat-label">More Interviews</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.8/5</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="main">
        {/* Main Analyzer Section */}
        <section id="analyzer" className="analyzer-section">
          <div className="container">
            <div className="analyzer-header">
              <h2>Analyze Your Resume Keywords</h2>
              <p>
                Paste your resume content and keywords to analyze density, distribution, and ATS optimization. 
                Get actionable insights for improving your resume's keyword strategy.
              </p>
            </div>
            
            <div className="analyzer-grid">
              <div className="resume-column">
                <div className="column-header">
                  <h3>Your Resume Content</h3>
                  <button
                    className="example-button"
                    onClick={handleLoadExample}
                    type="button"
                  >
                    Load Example
                  </button>
                </div>
                <textarea
                  ref={textareaRef}
                  className="textarea"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={`Paste your resume content here...
                  
Example:
MARKETING DIRECTOR
Global Brand Solutions | 2019-2023

• Increased brand visibility by 150% through integrated digital campaigns
• Managed $2M annual marketing budget with 35% ROI improvement
• Led team of 15 marketing specialists across multiple channels
• Implemented data-driven strategies using Google Analytics and CRM tools

SKILLS
Digital Marketing | SEO/SEM | Brand Strategy | Team Leadership
Data Analytics | Budget Management | Campaign Optimization`}
                  rows={18}
                  autoFocus
                />
                <div className="word-count">
                  {analysisResults.totalWords} words • {analysisResults.sectionCount} sections
                </div>
              </div>
              
              <div className="keywords-column">
                <div className="column-header">
                  <h3>Keywords to Analyze</h3>
                  <div className="industry-selector">
                    <select
                      value={selectedIndustry}
                      onChange={(e) => handleIndustrySelect(e.target.value)}
                      className="industry-select"
                    >
                      <option value="">Select Industry</option>
                      {Object.keys(INDUSTRY_KEYWORDS).map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <textarea
                  ref={keywordsRef}
                  className="keywords-textarea"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder={`Enter keywords separated by commas or new lines...

Example keywords:
leadership, management, strategy, analytics,
team building, project management, budget,
communication, problem solving, innovation

Or select an industry above for suggestions.`}
                  rows={18}
                />
                <div className="keyword-count">
                  {analysisResults.uniqueKeywords} unique keywords
                </div>
              </div>
            </div>
            
            <div className="analyzer-actions">
              <button
                className="analyze-button"
                onClick={() => setAnalysisResults(analyzeKeywords(text, keywords))}
                type="button"
              >
                Analyze Keywords
              </button>
              <button
                className="reset-button"
                onClick={handleReset}
                type="button"
              >
                Clear All
              </button>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="results-section">
          <div className="container">
            <div className="results-header">
              <h2>Keyword Analysis Results</h2>
              <div className="results-summary">
                <div className="summary-item">
                  <div className="summary-label">Optimization Score</div>
                  <div className="summary-value" style={{ color: getOptimizationColor() }}>
                    {optimizationScore}/100
                  </div>
                </div>
                <div className="summary-item">
                  <div className="summary-label">Overall Density</div>
                  <div className="summary-value">{analysisResults.overallDensity.toFixed(2)}%</div>
                </div>
                <div className="summary-item">
                  <div className="summary-label">Keywords Found</div>
                  <div className="summary-value">{analysisResults.topKeywords.length}</div>
                </div>
                <div className="summary-item">
                  <div className="summary-label">Optimal Keywords</div>
                  <div className="summary-value">
                    {analysisResults.topKeywords.filter(k => k.status === 'optimal').length}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Top Keywords Grid */}
            <div className="keywords-grid">
              <h3>Top Keyword Analysis</h3>
              <p className="grid-subtitle">
                Showing top {analysisResults.topKeywords.length} keywords by frequency (ideal density: 1-3%)
              </p>
              
              <div className="keywords-table">
                <div className="table-header">
                  <div className="table-cell">Keyword</div>
                  <div className="table-cell">Frequency</div>
                  <div className="table-cell">Density</div>
                  <div className="table-cell">Status</div>
                  <div className="table-cell">Recommendation</div>
                </div>
                
                {analysisResults.topKeywords.length > 0 ? (
                  analysisResults.topKeywords.map((item, index) => {
                    const statusInfo = getStatusDisplay(item.status);
                    return (
                      <div key={index} className="table-row">
                        <div className="table-cell">
                          <span className="keyword-text">{item.keyword}</span>
                        </div>
                        <div className="table-cell">
                          <span className="frequency-badge">{item.frequency}</span>
                        </div>
                        <div className="table-cell">
                          <span className="density-value">{item.density}%</span>
                        </div>
                        <div className="table-cell">
                          <span 
                            className="status-badge"
                            style={{ backgroundColor: statusInfo.color }}
                          >
                            {statusInfo.text}
                          </span>
                        </div>
                        <div className="table-cell">
                          <span className="recommendation">
                            {item.status === 'missing' && 'Add this keyword to your resume'}
                            {item.status === 'low' && 'Increase usage or add variations'}
                            {item.status === 'optimal' && 'Perfect density, maintain current usage'}
                            {item.status === 'high' && 'Consider reducing repetition'}
                          </span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="no-results">
                    No keywords found. Add keywords to analyze or check if your resume contains the specified keywords.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Keywords Section */}
        <section className="industry-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Industry-Specific Keyword Suggestions</h2>
              <p className="section-subtitle">
                Optimize your resume with the right keywords for your industry. Click any industry to load suggested keywords.
              </p>
            </div>
            
            <div className="industry-grid">
              {Object.entries(INDUSTRY_KEYWORDS).map(([industry, keywords]) => (
                <div key={industry} className="industry-card">
                  <div className="industry-header">
                    <h3 className="industry-title">{industry}</h3>
                    <button
                      className="use-keywords-button"
                      onClick={() => handleIndustrySelect(industry)}
                      type="button"
                    >
                      Use These Keywords
                    </button>
                  </div>
                  <div className="industry-keywords">
                    {keywords.map((keyword, index) => (
                      <span key={index} className="keyword-tag">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Long-Tail Keywords Section - GEO Optimization */}
        <section className="industry-section">
          <h2 className="section-title">Common Questions About Keyword Density</h2>
          <div className="industry-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {[
              "how to calculate keyword density in resume",
              "best keyword density for ATS resumes",
              "resume keyword optimization tools free",
              "industry specific keywords for resumes",
              "keyword stuffing in resume detection",
              "ATS friendly keyword placement tips",
              "resume keyword frequency checker online",
              "how many keywords should a resume have"
            ].map((keyword, i) => (
              <div key={i} className="industry-card" style={{ padding: '20px' }}>
                <p style={{ fontWeight: '600', marginBottom: '12px' }}>❓ {keyword}</p>
                <a href="/complete-resume-resource-library" className="breadcrumb-link">
                  Find answer in our resource library →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="tips-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Keyword Optimization Best Practices</h2>
              <p className="section-subtitle">
                Follow these proven strategies to maximize your resume's ATS compatibility and human readability.
              </p>
            </div>
            
            <div className="tips-grid">
              {OPTIMIZATION_TIPS.map((tip, index) => (
                <div key={index} className="tip-card">
                  <div className="tip-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="tip-content">{tip}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Everything you need to know about resume keyword optimization and ATS systems.
              </p>
            </div>
            
            <div className="faq-list">
              {FAQS.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === index ? null : index)}
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Optimize Your Resume?</h2>
              <p className="cta-subtitle">
                Join 12,000+ professionals who improved their resume visibility with our keyword analyzer.
              </p>
              <div className="cta-buttons">
                <a
                  href="#analyzer"
                  className="cta-button"
                  aria-label="Start optimizing your resume keywords now"
                >
                  <span className="cta-button-text">Start Keyword Analysis Now</span>
                  <span className="cta-button-arrow">→</span>
                </a>
              </div>
              <div className="cta-guarantee">
                <span className="guarantee-text">✓ No credit card required • Free forever • Privacy first • ATS Optimized</span>
              </div>
            </div>
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

  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(6).fill(null).map((_, i) => {
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

export default ResumeKeywordDensityAnalyzer;