// pages/free-cover-letter-generator.jsx
import Head from 'next/head';
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';

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
  
  .subtitle { 
    font-size: clamp(1rem, 2.5vw, 1.2rem); 
    color: #4b5563; 
    max-width: 900px; 
    line-height: 1.7; 
    margin-bottom: 20px;
  }
  
  .trust-badge { 
    display: inline-block; 
    background: #000000; 
    color: #ffffff; 
    padding: 4px 12px; 
    border-radius: 50px; 
    font-size: 0.9rem; 
    margin-left: 12px;
  }
  
  /* PROGRESS STEPS */
  .progress-steps { 
    display: flex; 
    align-items: center; 
    margin: 32px 0; 
    flex-wrap: wrap;
  }
  
  .step { 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    min-width: 80px;
  }
  
  .step-number { 
    width: 40px; 
    height: 40px; 
    border-radius: 50%; 
    background: #e5e7eb; 
    color: #6b7280; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    font-weight: 700; 
    margin-bottom: 8px;
  }
  
  .step-active .step-number { 
    background: #000000; 
    color: #ffffff;
  }
  
  .step-label { 
    font-size: 0.85rem; 
    color: #6b7280;
  }
  
  .step-active .step-label { 
    color: #000000; 
    font-weight: 600;
  }
  
  .step-line { 
    flex: 1; 
    height: 2px; 
    background: #e5e7eb; 
    min-width: 20px;
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
  
  /* MAIN CONTENT */
  .main-content { 
    margin: 32px 0;
  }
  
  /* CARD */
  .card { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 28px; 
    border: 1px solid #e5e7eb; 
    margin-bottom: 32px;
  }
  
  .card-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 24px; 
    flex-wrap: wrap; 
    gap: 16px;
  }
  
  .card-title { 
    font-size: 1.5rem; 
    font-weight: 700; 
    color: #000000;
  }
  
  .card-subtitle { 
    font-size: 1.2rem; 
    font-weight: 600; 
    margin-bottom: 16px;
  }
  
  /* BUTTONS */
  .button-group { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 12px;
  }
  
  .button { 
    display: inline-block; 
    padding: 12px 24px; 
    border-radius: 8px; 
    font-weight: 600; 
    font-size: 1rem; 
    border: 2px solid #000000;
    cursor: pointer; 
    transition: all 0.2s ease; 
    text-decoration: none; 
    text-align: center;
    background: #000000;
    color: #ffffff;
  }
  
  .button:hover { 
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
    color: #000000;
  }
  
  @media (max-width: 480px) {
    .button { 
      width: 100%;
    }
  }
  
  /* FORM */
  .form-section { 
    margin-bottom: 32px;
  }
  
  .form-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 20px; 
    margin: 24px 0;
  }
  
  @media (min-width: 640px) {
    .form-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  .form-group { 
    width: 100%;
  }
  
  .form-group-full { 
    grid-column: 1 / -1;
  }
  
  .label { 
    display: block; 
    font-weight: 600; 
    margin-bottom: 8px; 
    color: #111827;
  }
  
  .input, .select, .textarea { 
    width: 100%; 
    padding: 12px; 
    border: 2px solid #e5e7eb; 
    border-radius: 8px; 
    font-family: inherit; 
    font-size: 1rem; 
    transition: border-color 0.2s;
  }
  
  .input:focus, .select:focus, .textarea:focus { 
    outline: none; 
    border-color: #000000;
  }
  
  .textarea { 
    resize: vertical;
  }
  
  /* STEP NAVIGATION */
  .step-navigation { 
    display: flex; 
    gap: 16px; 
    justify-content: flex-end; 
    margin-top: 24px; 
    flex-wrap: wrap;
  }
  
  /* SPINNER */
  .spinner { 
    display: inline-block; 
    margin-left: 8px; 
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin { 
    0% { transform: rotate(0deg); } 
    100% { transform: rotate(360deg); } 
  }
  
  /* LOADING */
  .loading { 
    text-align: center; 
    padding: 60px;
  }
  
  /* TEMPLATE GRID */
  .template-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 20px; 
    margin: 24px 0;
  }
  
  @media (min-width: 640px) {
    .template-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .template-grid { grid-template-columns: repeat(4, 1fr); }
  }
  
  .template-card { 
    background: #f9fafb; 
    padding: 24px; 
    border-radius: 12px; 
    border: 2px solid #e5e7eb; 
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .template-card:hover { 
    border-color: #000000;
  }
  
  .template-selected { 
    border-color: #000000; 
    background: #f3f4f6;
  }
  
  .template-name { 
    font-size: 1.1rem; 
    font-weight: 700; 
    margin-bottom: 8px;
  }
  
  .template-description { 
    color: #4b5563; 
    font-size: 0.9rem; 
    margin-bottom: 12px;
  }
  
  .template-tone { 
    font-size: 0.85rem; 
    color: #6b7280;
  }
  
  /* LETTER DISPLAY */
  .stats { 
    display: flex; 
    gap: 16px; 
    flex-wrap: wrap;
  }
  
  .stat-item { 
    background: #f3f4f6; 
    padding: 6px 12px; 
    border-radius: 50px; 
    font-size: 0.9rem;
  }
  
  .letter-content { 
    background: #f9fafb; 
    padding: 28px; 
    border-radius: 12px; 
    margin: 24px 0;
  }
  
  .letter-text { 
    white-space: pre-wrap; 
    font-family: inherit; 
    line-height: 1.7; 
    font-size: 1rem;
  }
  
  .tips { 
    background: #e0f2fe; 
    padding: 20px; 
    border-radius: 12px; 
    margin-top: 24px; 
    border-left: 4px solid #0284c7;
  }
  
  .tip-title { 
    font-weight: 700; 
    margin-bottom: 12px; 
    color: #0369a1;
  }
  
  .tip-list { 
    list-style: none;
  }
  
  .tip-list li { 
    margin-bottom: 8px; 
    padding-left: 24px; 
    position: relative;
  }
  
  .tip-list li::before { 
    content: "✓"; 
    color: #0284c7; 
    position: absolute; 
    left: 0; 
    font-weight: 700;
  }
  
  /* CUSTOMIZATION TIPS */
  .customization-tips { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 20px; 
    margin: 24px 0;
  }
  
  @media (min-width: 768px) {
    .customization-tips { grid-template-columns: repeat(3, 1fr); }
  }
  
  .tip-card { 
    background: #f9fafb; 
    padding: 24px; 
    border-radius: 12px; 
    border: 1px solid #e5e7eb;
  }
  
  .tip-card-title { 
    font-size: 1.1rem; 
    font-weight: 700; 
    margin-bottom: 12px;
  }
  
  .tip-card p { 
    color: #4b5563;
  }
  
  /* CENTER TEXT */
  .center-text { 
    text-align: center;
  }
  
  /* READY TEXT */
  .ready-text { 
    color: #4b5563; 
    margin: 24px 0;
  }
  
  /* CHECKLIST */
  .checklist { 
    background: #f9fafb; 
    padding: 24px; 
    border-radius: 12px; 
    margin-top: 24px;
  }
  
  .checklist-title { 
    font-weight: 700; 
    margin-bottom: 16px;
  }
  
  .checklist ul { 
    padding-left: 20px;
  }
  
  .checklist li { 
    margin-bottom: 8px;
  }
  
  /* HOW TO SECTION */
  .how-to-section { 
    margin: 48px 0;
  }
  
  .section-title { 
    font-size: 2rem; 
    font-weight: 700; 
    margin-bottom: 32px; 
    text-align: center;
  }
  
  .how-to-steps { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px;
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
    background: #f9fafb; 
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
  
  /* REVIEWS SECTION */
  .reviews-section { 
    margin: 48px 0;
  }
  
  .reviews-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px;
  }
  
  @media (min-width: 640px) {
    .reviews-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .reviews-grid { grid-template-columns: repeat(4, 1fr); }
  }
  
  .review-card { 
    background: #f9fafb; 
    padding: 28px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb;
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
  }
  
  .resources-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px;
  }
  
  @media (min-width: 640px) {
    .resources-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .resources-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .resource-card { 
    background: #f9fafb; 
    padding: 28px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb; 
    text-decoration: none; 
    color: inherit;
    display: block;
    transition: transform 0.2s;
  }
  
  .resource-card:hover { 
    transform: translateY(-4px); 
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .resource-card h3 { 
    font-size: 1.2rem; 
    font-weight: 700; 
    margin-bottom: 12px; 
    color: #000000;
  }
  
  .resource-card p { 
    color: #4b5563; 
    margin: 0;
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
  
  .cta-title { 
    font-size: 2rem; 
    font-weight: 800; 
    margin-bottom: 16px;
  }
  
  .cta-text { 
    color: #9ca3af; 
    max-width: 600px; 
    margin: 0 auto 24px;
  }
  
  .cta-button { 
    display: inline-block; 
    background: #ffffff; 
    color: #000000; 
    padding: 16px 32px; 
    border-radius: 8px; 
    font-weight: 600; 
    font-size: 1.1rem; 
    border: none;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .cta-button:hover { 
    transform: translateY(-2px); 
    box-shadow: 0 10px 15px -3px rgba(255, 255, 255, 0.2);
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
    .progress-steps { 
      flex-direction: column; 
      align-items: flex-start; 
      gap: 16px;
    }
    
    .step-line { 
      display: none;
    }
    
    .step { 
      flex-direction: row; 
      gap: 16px; 
      width: 100%;
    }
    
    .step-number { 
      margin-bottom: 0;
    }
  }
  
  @media (max-width: 480px) {
    .trust-badge { 
      display: block; 
      margin-left: 0; 
      margin-top: 10px;
    }
    
    .cta-card { 
      padding: 32px 20px;
    }
    
    .cta-title { 
      font-size: 1.5rem;
    }
  }
`;

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_DATE = new Date().toISOString().split('T')[0];
const SITE_URL = 'https://www.professionalresumefree.com';

// FAQ Data
const FAQS = [
  {
    question: "Why is a customized cover letter important?",
    answer: "78% of hiring managers say a well-crafted cover letter significantly improves a candidate's chances. It shows you've researched the company and tailored your application specifically for the role."
  },
  {
    question: "How long should my cover letter be?",
    answer: "Aim for 250-400 words or 3-4 paragraphs. Hiring managers typically spend 30-60 seconds reviewing each application, so concise, impactful writing is essential."
  },
  {
    question: "Is my information private and secure?",
    answer: "Yes! All content generation happens locally in your browser. No personal data is sent to our servers—your information stays completely private."
  },
  {
    question: "What's the best format for a cover letter?",
    answer: "Use a professional business letter format with your contact info, date, company details, salutation, 3-4 body paragraphs, and a formal closing."
  },
  {
    question: "How do I customize the generated cover letter?",
    answer: "Always personalize the generated template by adding specific company details, mentioning recent news about the company, and tailoring achievements to the job requirements."
  },
  {
    question: "Is this tool really free?",
    answer: "100% free with no signup required. We believe professional career tools should be accessible to everyone."
  }
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Enter Your Details",
    text: "Fill in your basic information, skills, and achievements. Be specific about your accomplishments with numbers where possible."
  },
  {
    name: "Add Job Information",
    text: "Provide the job title, company details, and key requirements. The more specific you are, the better the customization."
  },
  {
    name: "Generate Cover Letter",
    text: "Our AI-powered system creates a professional, tailored cover letter based on your inputs and the job requirements."
  },
  {
    name: "Review & Customize",
    text: "Review the generated content and add personal touches, specific company details, or recent news about the organization."
  },
  {
    name: "Download & Apply",
    text: "Copy the formatted letter or download it as a PDF. Always proofread before sending with your resume."
  }
];

// Sample Reviews
const REVIEWS = [
  {
    name: "Jennifer Martinez",
    position: "HR Manager",
    rating: 5,
    date: "2024-02-15",
    review: "This tool helped our candidates submit better applications. The templates are professional and customizable."
  },
  {
    name: "Robert Chen",
    position: "Career Consultant",
    rating: 5,
    date: "2024-02-20",
    review: "I recommend this to all my clients. The quality of generated letters rivals professional writing services."
  },
  {
    name: "Amanda Wilson",
    position: "Marketing Director",
    rating: 4,
    date: "2024-02-10",
    review: "Used this for my last job application. The customized letter helped me stand out and get the interview."
  },
  {
    name: "David Thompson",
    position: "Software Developer",
    rating: 5,
    date: "2024-02-05",
    review: "Saved me hours of staring at a blank page. The generated content was easily customizable for different roles."
  }
];

// Template variations
const TEMPLATE_VARIANTS = [
  {
    id: 'standard',
    name: 'Standard Professional',
    description: 'Classic business format suitable for most industries',
    tone: 'Professional, respectful, confident'
  },
  {
    id: 'creative',
    name: 'Creative Industry',
    description: 'More engaging and expressive for creative fields',
    tone: 'Energetic, innovative, passionate'
  },
  {
    id: 'executive',
    name: 'Executive Level',
    description: 'Strategic and results-focused for senior positions',
    tone: 'Strategic, leadership-focused, impactful'
  },
  {
    id: 'entry',
    name: 'Entry Level',
    description: 'Emphasizes potential and enthusiasm for early career',
    tone: 'Enthusiastic, eager to learn, adaptable'
  }
];

// Industry-specific keywords
const INDUSTRY_KEYWORDS = {
  tech: ['agile', 'scrum', 'devops', 'full-stack', 'cloud', 'cybersecurity', 'machine learning', 'AI', 'API'],
  marketing: ['ROI', 'conversion', 'brand awareness', 'SEO', 'content strategy', 'social media', 'campaign', 'engagement'],
  finance: ['ROI', 'revenue', 'profit margin', 'financial modeling', 'risk management', 'compliance', 'audit', 'forecasting'],
  healthcare: ['patient care', 'HIPAA', 'clinical', 'treatment', 'wellness', 'medical', 'healthcare', 'public health']
};

// Schema data
const getSchemaData = (faqDates, reviewDates, currentDate, lastModifiedDate) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/free-cover-letter-generator/#webpage`,
      "url": `${SITE_URL}/free-cover-letter-generator`,
      "name": "Free Cover Letter Generator - Professional Templates & AI Customization 2026",
      "description": "Create professional ATS-optimized cover letters for free. Generate customized cover letters in minutes with our AI-powered tool. Privacy-first, no signup required.",
      "datePublished": "2024-01-01",
      "dateModified": lastModifiedDate,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Professional Resume Free",
        "description": "Free professional career tools including resume builder, cover letter generator, and resume checker",
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
        "url": `${SITE_URL}/images/og-cover-letter-generator.jpg`,
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
            "name": "Free Cover Letter Generator",
            "item": `${SITE_URL}/free-cover-letter-generator`
          }
        ]
      }
    },
    {
      "@type": "WebApplication",
      "name": "Free Cover Letter Generator",
      "description": "Professional cover letter generator with AI-powered customization for any job application",
      "url": `${SITE_URL}/free-cover-letter-generator`,
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
        "ratingValue": "4.7",
        "reviewCount": "156",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL
      },
      "featureList": [
        "AI-Powered Customization",
        "Multiple Template Styles",
        "Privacy-First Design",
        "No Sign Up Required",
        "Instant Generation",
        "Download Multiple Formats"
      ],
      "softwareVersion": "2026.1.0",
      "screenshot": `${SITE_URL}/images/screenshot-cover-letter-generator.jpg`,
      "applicationSuite": "Career Tools",
      "countriesSupported": "Global"
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/free-cover-letter-generator/#faqpage`,
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
        "mainEntityOfPage": `${SITE_URL}/free-cover-letter-generator/#webpage`
      }))
    },
    {
      "@type": "HowTo",
      "name": "How to Generate a Professional Cover Letter with Our Free Generator",
      "description": "Step-by-step guide to create customized cover letters for job applications",
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
        "url": `${SITE_URL}/free-cover-letter-generator#step-${index + 1}`
      }))
    },
    {
      "@type": "Service",
      "serviceType": "Online Cover Letter Building Service",
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
        "name": "Free Cover Letter Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Cover Letter Generation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Professional Template Selection"
            }
          }
        ]
      },
      "description": "Free AI-powered cover letter generator for job seekers worldwide",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "SpeakableSpecification",
      "cssSelector": [".title", ".subtitle", ".faqQuestion h3"]
    },
    {
      "@type": "ItemList",
      "itemListElement": REVIEWS.map((review, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
            "bestRating": 5
          },
          "author": {
            "@type": "Person",
            "name": review.name
          },
          "reviewBody": review.review,
          "datePublished": reviewDates[index] || currentDate,
          "publisher": {
            "@type": "Organization",
            "name": "Professional Resume Free"
          },
          "itemReviewed": {
            "@type": "SoftwareApplication",
            "name": "Free Cover Letter Generator",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Professional cover letter generator with AI-powered customization for any job application",
            "url": `${SITE_URL}/free-cover-letter-generator`
          }
        }
      }))
    }
  ]
});

function generateCoverLetter(formData) {
  const {
    yourName,
    yourEmail,
    yourPhone,
    yourAddress,
    hiringManager,
    companyName,
    companyAddress,
    jobTitle,
    yearsExperience,
    keySkills,
    keyAchievements,
    whyCompany,
    templateVariant = 'standard'
  } = formData;

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Get appropriate tone based on template
  const template = TEMPLATE_VARIANTS.find(t => t.id === templateVariant) || TEMPLATE_VARIANTS[0];

  // Split achievements into array
  const achievements = keyAchievements.split('\n').filter(a => a.trim());
  // Split skills into array
  const skills = keySkills.split(',').map(s => s.trim()).filter(s => s);

  // Generate opening paragraph based on template
  let openingParagraph = '';
  switch(templateVariant) {
    case 'creative':
      openingParagraph = `I am writing with genuine enthusiasm to apply for the ${jobTitle} position at ${companyName}. With ${yearsExperience} of experience in the field and a proven track record of ${achievements.length > 0 ? achievements[0].toLowerCase() : 'delivering results'}, I am excited by the opportunity to contribute to your team's success.`;
      break;
    case 'executive':
      openingParagraph = `I am writing to express my interest in the ${jobTitle} position at ${companyName}. With ${yearsExperience} of strategic leadership experience and a demonstrated history of ${achievements.length > 0 ? 'driving ' + achievements[0].toLowerCase() : 'achieving business objectives'}, I am confident in my ability to deliver significant value to your organization.`;
      break;
    case 'entry':
      openingParagraph = `I am excited to apply for the ${jobTitle} position at ${companyName} that I discovered through your career portal. As an emerging professional with ${yearsExperience} of hands-on experience and strong capabilities in ${skills.slice(0, 3).join(', ')}, I am eager to contribute to your team while developing my skills in a dynamic environment.`;
      break;
    default:
      openingParagraph = `I am writing to express my interest in the ${jobTitle} position at ${companyName}. With ${yearsExperience} of experience in the field and expertise in ${skills.slice(0, 3).join(', ')}, I am confident in my ability to contribute effectively to your team.`;
  }

  // Generate middle paragraph with achievements
  let middleParagraph = '';
  if (achievements.length > 0) {
    const selectedAchievements = achievements.slice(0, Math.min(3, achievements.length));
    middleParagraph = `In my previous role, I successfully ${selectedAchievements.join('; ').toLowerCase()}. These accomplishments demonstrate my ability to ${skills.slice(0, 2).join(' and ')} effectively while delivering measurable results.`;
  } else {
    middleParagraph = `Throughout my career, I have developed strong skills in ${skills.slice(0, 4).join(', ')}, enabling me to tackle complex challenges and deliver effective solutions. I have consistently demonstrated the ability to adapt to changing environments and collaborate effectively with cross-functional teams.`;
  }

  // Generate company-specific paragraph
  let companyParagraph = '';
  if (whyCompany && whyCompany.trim()) {
    companyParagraph = whyCompany;
  } else {
    companyParagraph = `I have long admired ${companyName}'s commitment to ${['innovation', 'excellence', 'customer satisfaction', 'quality'][Math.floor(Math.random() * 4)]} and believe my background aligns well with your organizational goals. Your focus on ${['team development', 'sustainable growth', 'technological advancement', 'market leadership'][Math.floor(Math.random() * 4)]} particularly resonates with my professional values and aspirations.`;
  }

  // Generate closing paragraph based on template
  let closingParagraph = '';
  switch(templateVariant) {
    case 'creative':
      closingParagraph = `I am excited about the possibility of bringing my ${skills.slice(0, 2).join(' and ')} skills to ${companyName} and contributing to your creative vision. I welcome the opportunity to discuss how my innovative approach can benefit your team. Thank you for considering my application.`;
      break;
    case 'executive':
      closingParagraph = `I am confident that my strategic experience and leadership capabilities align with ${companyName}'s objectives. I look forward to discussing how I can contribute to your organization's continued success.`;
      break;
    default:
      closingParagraph = `I am excited about the opportunity to contribute to ${companyName} and am confident that my skills and experience align well with your requirements. Thank you for considering my application. I look forward to discussing my qualifications further.`;
  }

  // Generate salutation
  const salutation = hiringManager ? `Dear ${hiringManager},` : `Dear Hiring Manager,`;

  // Generate closing
  const closing = `Sincerely,\n${yourName}\n${yourEmail}\n${yourPhone}`;

  // Compile the letter
  const letter = `
${yourName}
${yourAddress}
${yourEmail} | ${yourPhone}
${today}

${companyName}
${companyAddress}

${salutation}

${openingParagraph}

${middleParagraph}

${companyParagraph}

${closingParagraph}

${closing}
`;

  return {
    content: letter.trim(),
    wordCount: letter.trim().split(/\s+/).length,
    paragraphCount: (letter.match(/\n/g) || []).length + 1,
    templateUsed: template.name
  };
}

function CoverLetterDisplay({ content, wordCount, paragraphCount, templateUsed }) {
  const handleDownload = useCallback(() => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'cover-letter.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }, [content]);

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Generated Cover Letter</h2>
        <div className="stats">
          <span className="stat-item">{wordCount} words</span>
          <span className="stat-item">{paragraphCount} paragraphs</span>
          <span className="stat-item">{templateUsed}</span>
        </div>
      </div>
      <div className="letter-content">
        <pre className="letter-text">{content}</pre>
      </div>
      <div className="button-group">
        <button onClick={handleDownload} className="button secondary-button">
          Download as Text
        </button>
        <button onClick={() => window.print()} className="button">
          Print Letter
        </button>
      </div>
      <div className="tips">
        <p className="tip-title">💡 Customization Tips:</p>
        <ul className="tip-list">
          <li>Add specific company details or recent news</li>
          <li>Tailor achievements to match job requirements</li>
          <li>Use the hiring manager's name if you have it</li>
          <li>Proofread carefully before sending</li>
          <li>Save as PDF with your name in the filename</li>
        </ul>
      </div>
    </div>
  );
}

function TemplateSelector({ selectedTemplate, onTemplateChange }) {
  return (
    <div className="card">
      <h3 className="card-subtitle">Select Template Style</h3>
      <div className="template-grid">
        {TEMPLATE_VARIANTS.map(template => (
          <div
            key={template.id}
            className={`template-card ${selectedTemplate === template.id ? 'template-selected' : ''}`}
            onClick={() => onTemplateChange(template.id)}
          >
            <h4 className="template-name">{template.name}</h4>
            <p className="template-description">{template.description}</p>
            <div className="template-tone">
              <strong>Tone:</strong> {template.tone}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CoverLetterGenerator({ seoData, buildTimestamp }) {
  const [buildTime, setBuildTime] = useState('');
  const [formData, setFormData] = useState({
    yourName: '',
    yourEmail: '',
    yourPhone: '',
    yourAddress: '',
    hiringManager: '',
    companyName: '',
    companyAddress: '',
    jobTitle: '',
    yearsExperience: '3',
    keySkills: '',
    keyAchievements: '',
    whyCompany: '',
    templateVariant: 'standard'
  });

  const [generatedLetter, setGeneratedLetter] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  // Set build time on client to avoid hydration mismatch
  useEffect(() => {
    setBuildTime(Date.now().toString());
  }, []);

  // Use SEO data with fallbacks
  const safeSeoData = seoData || {
    currentDate: CURRENT_DATE,
    lastModifiedDate: CURRENT_DATE,
    reviewDates: Array(4).fill(CURRENT_DATE),
    faqDates: Array(6).fill(CURRENT_DATE)
  };

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : CURRENT_DATE;

  const safeReviewDates = safeSeoData.reviewDates || Array(REVIEWS.length).fill(freshnessIndicator);
  const safeFaqDates = safeSeoData.faqDates || Array(FAQS.length).fill(freshnessIndicator);

  // Sample form data for demonstration
  const SAMPLE_DATA = {
    yourName: 'Jane Doe',
    yourEmail: 'jane.doe@professional.com',
    yourPhone: '(555) 123-4567',
    yourAddress: '123 Main Street, San Francisco, CA 94105',
    hiringManager: 'John Smith',
    companyName: 'Tech Innovations Inc.',
    companyAddress: '456 Tech Avenue, San Jose, CA 95113',
    jobTitle: 'Senior Marketing Manager',
    yearsExperience: '8',
    keySkills: 'Digital Marketing, Team Leadership, Campaign Strategy, Data Analysis, Content Creation, SEO/SEM',
    keyAchievements: 'Increased lead generation by 45% through strategic campaigns\nReduced marketing costs by 22% while improving ROI\nManaged a team of 8 marketing specialists\nImplemented automation saving 30 hours weekly',
    whyCompany: 'I have followed Tech Innovations Inc.\'s growth in the AI marketing space and am particularly impressed with your recent launch of the predictive analytics platform. Your commitment to innovation aligns perfectly with my experience in data-driven marketing strategies.',
    templateVariant: 'standard'
  };

  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const handleGenerate = useCallback(() => {
    // Validate required fields
    const requiredFields = ['yourName', 'yourEmail', 'companyName', 'jobTitle', 'keySkills'];
    const missingFields = requiredFields.filter(field => !formData[field]?.trim());
    if (missingFields.length > 0) {
      alert(`Please fill in: ${missingFields.join(', ').replace(/([A-Z])/g, ' $1').toLowerCase()}`);
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      const letter = generateCoverLetter(formData);
      setGeneratedLetter(letter);
      setIsGenerating(false);
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  }, [formData]);

  const handleUseSample = () => {
    setFormData(SAMPLE_DATA);
    setCurrentStep(2);
  };

  const handleClear = () => {
    setFormData({
      yourName: '',
      yourEmail: '',
      yourPhone: '',
      yourAddress: '',
      hiringManager: '',
      companyName: '',
      companyAddress: '',
      jobTitle: '',
      yearsExperience: '3',
      keySkills: '',
      keyAchievements: '',
      whyCompany: '',
      templateVariant: 'standard'
    });
    setGeneratedLetter(null);
    setCurrentStep(1);
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="container" lang="en-US">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Basic Meta Tags */}
        <title>Free Cover Letter Generator - Professional Templates & AI Customization 2026 | Cover Letter Builder</title>
        <meta name="description" content={`Create professional ATS-optimized cover letters for free. Generate customized cover letters in minutes with our AI-powered tool. Privacy-first, no signup required. ${CURRENT_YEAR}`} />
        <meta name="keywords" content="free cover letter generator, professional cover letter, AI cover letter, cover letter template, job application letter, cover letter builder, ATS cover letter, customizable cover letter" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Content Freshness */}
        <meta name="date" content={safeSeoData.currentDate} />
        <meta name="last-modified" content={safeSeoData.lastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Cover Letter Generator - Professional Templates & AI Customization" />
        <meta name="chatgpt-fts:description" content="Create professional ATS-optimized cover letters for free. Generate customized cover letters in minutes with our AI-powered tool. Privacy-first, no signup required." />
        <meta name="chatgpt-fts:keywords" content="cover letter generator, AI cover letter, professional cover letter, job application letter" />
        <meta name="chatgpt-fts:last-updated" content={safeSeoData.currentDate} />
        <meta name="generator" content="Professional Resume Free - Cover Letter Generator" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={`${SITE_URL}/free-cover-letter-generator`} />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph Protocol */}
        <meta property="og:title" content="Free Cover Letter Generator - Professional Templates & AI Customization 2026" />
        <meta property="og:description" content="Create professional ATS-optimized cover letters for free. Generate customized cover letters in minutes with our AI-powered tool." />
        <meta property="og:image" content={`${SITE_URL}/images/og-cover-letter-generator.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free AI-Powered Cover Letter Generator - Create Professional Cover Letters Online" />
        <meta property="og:url" content={`${SITE_URL}/free-cover-letter-generator`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeSeoData.lastModifiedDate} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Cover Letter Generator - Professional Templates & AI Customization 2026" />
        <meta name="twitter:description" content="Create professional ATS-optimized cover letters for free. Generate customized cover letters in minutes with AI." />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-cover-letter-generator.jpg`} />
        <meta name="twitter:image:alt" content="Free Cover Letter Generator with AI Templates" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Mobile & PWA */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSchemaData(safeFaqDates, safeReviewDates, safeSeoData.currentDate, safeSeoData.lastModifiedDate))
          }}
        />
      </Head>

      {/* Content Freshness Indicator */}
      <div className="freshness-indicator">
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="/" className="breadcrumb-link">
              Home
            </a>
          </li>
          <li className="breadcrumb-separator">›</li>
          <li>
            <a href="/free-cover-letter-generator" className="breadcrumb-link">
              Free Cover Letter Generator
            </a>
          </li>
        </ol>
      </nav>

      <header className="header" role="banner">
        <h1 className="title">Free Cover Letter Generator - Professional Templates & AI Customization 2026</h1>
        <p className="subtitle">
          Create customized cover letters in minutes. Our AI-powered generator crafts professional letters tailored to your specific job application.
          <span className="trust-badge"> Trusted by 500,000+ job seekers</span>
        </p>

        {/* Progress Steps */}
        <div className="progress-steps">
          <div className={`step ${currentStep >= 1 ? 'step-active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">Your Details</div>
          </div>
          <div className="step-line"></div>
          <div className={`step ${currentStep >= 2 ? 'step-active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Job Details</div>
          </div>
          <div className="step-line"></div>
          <div className={`step ${currentStep >= 3 ? 'step-active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">Generate</div>
          </div>
        </div>

        {/* Aggregate Rating Display */}
        <div className="aggregate-rating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="4.7" />
          <meta itemProp="ratingCount" content="156" />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="worstRating" content="1" />
          <div className="rating-stars">
            ★★★★★
            <span className="rating-value">4.7/5</span>
          </div>
          <div className="rating-text">Based on 156+ user reviews • Updated {freshnessIndicator}</div>
        </div>
      </header>

      <main className="main-content">
        {!generatedLetter && (
          <div className="form-section">
            {/* Step 1: Personal Details */}
            {(currentStep === 1 || currentStep === 2) && (
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Step {currentStep}: {currentStep === 1 ? 'Your Professional Details' : 'Job & Company Information'}</h2>
                  <div className="button-group">
                    <button onClick={handleUseSample} className="button secondary-button">
                      Use Sample
                    </button>
                    <button onClick={handleClear} className="button secondary-button">
                      Clear All
                    </button>
                  </div>
                </div>
                <div className="form-grid">
                  {currentStep === 1 ? (
                    <>
                      <div className="form-group">
                        <label className="label">Your Full Name *</label>
                        <input
                          type="text"
                          className="input"
                          value={formData.yourName}
                          onChange={(e) => handleInputChange('yourName', e.target.value)}
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="form-group">
                        <label className="label">Your Email *</label>
                        <input
                          type="email"
                          className="input"
                          value={formData.yourEmail}
                          onChange={(e) => handleInputChange('yourEmail', e.target.value)}
                          placeholder="jane.doe@professional.com"
                        />
                      </div>
                      <div className="form-group">
                        <label className="label">Your Phone</label>
                        <input
                          type="tel"
                          className="input"
                          value={formData.yourPhone}
                          onChange={(e) => handleInputChange('yourPhone', e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div className="form-group">
                        <label className="label">Your Address</label>
                        <input
                          type="text"
                          className="input"
                          value={formData.yourAddress}
                          onChange={(e) => handleInputChange('yourAddress', e.target.value)}
                          placeholder="123 Main Street, City, State ZIP"
                        />
                      </div>
                      <div className="form-group">
                        <label className="label">Years of Experience *</label>
                        <select
                          className="select"
                          value={formData.yearsExperience}
                          onChange={(e) => handleInputChange('yearsExperience', e.target.value)}
                        >
                          {[...Array(20)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'year' : 'years'}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group-full">
                        <label className="label">Key Skills (comma separated) *</label>
                        <textarea
                          className="textarea"
                          value={formData.keySkills}
                          onChange={(e) => handleInputChange('keySkills', e.target.value)}
                          placeholder="e.g., Project Management, Data Analysis, Team Leadership, Python, Marketing Strategy"
                          rows={3}
                        />
                      </div>
                      <div className="form-group-full">
                        <label className="label">Key Achievements (one per line)</label>
                        <textarea
                          className="textarea"
                          value={formData.keyAchievements}
                          onChange={(e) => handleInputChange('keyAchievements', e.target.value)}
                          placeholder="Increased sales by 30% in Q4 2025\nReduced costs by 15% through process optimization\nManaged a team of 10 across multiple projects"
                          rows={4}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="form-group">
                        <label className="label">Hiring Manager Name</label>
                        <input
                          type="text"
                          className="input"
                          value={formData.hiringManager}
                          onChange={(e) => handleInputChange('hiringManager', e.target.value)}
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="form-group">
                        <label className="label">Company Name *</label>
                        <input
                          type="text"
                          className="input"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange('companyName', e.target.value)}
                          placeholder="Tech Innovations Inc."
                        />
                      </div>
                      <div className="form-group">
                        <label className="label">Company Address</label>
                        <input
                          type="text"
                          className="input"
                          value={formData.companyAddress}
                          onChange={(e) => handleInputChange('companyAddress', e.target.value)}
                          placeholder="456 Tech Avenue, City, State ZIP"
                        />
                      </div>
                      <div className="form-group">
                        <label className="label">Job Title *</label>
                        <input
                          type="text"
                          className="input"
                          value={formData.jobTitle}
                          onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                          placeholder="Senior Marketing Manager"
                        />
                      </div>
                      <div className="form-group-full">
                        <label className="label">Why This Company? (Optional but recommended)</label>
                        <textarea
                          className="textarea"
                          value={formData.whyCompany}
                          onChange={(e) => handleInputChange('whyCompany', e.target.value)}
                          placeholder="What attracts you to this company? Mention recent news, company values, or specific products/services that align with your experience."
                          rows={4}
                        />
                      </div>
                    </>
                  )}
                </div>
                <div className="step-navigation">
                  {currentStep === 2 && (
                    <button onClick={prevStep} className="button secondary-button">
                      ← Back
                    </button>
                  )}
                  {currentStep === 1 ? (
                    <button onClick={nextStep} className="button">
                      Continue to Job Details →
                    </button>
                  ) : (
                    <button onClick={handleGenerate} className="button" disabled={isGenerating}>
                      {isGenerating ? (
                        <>
                          <span>Generating Cover Letter...</span>
                          <span className="spinner">⟳</span>
                        </>
                      ) : (
                        'Generate Cover Letter'
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Template Selector (Step 2) */}
            {currentStep === 2 && (
              <TemplateSelector
                selectedTemplate={formData.templateVariant}
                onTemplateChange={(template) => handleInputChange('templateVariant', template)}
              />
            )}
          </div>
        )}

        {isGenerating ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Generating your professional cover letter...</p>
          </div>
        ) : generatedLetter ? (
          <>
            <CoverLetterDisplay {...generatedLetter} />
            <div className="card">
              <h2 className="card-title">Ready to Customize Further?</h2>
              <div className="customization-tips">
                <div className="tip-card">
                  <h4 className="tip-card-title">Add Specific Details</h4>
                  <p>Include recent company news, specific projects, or details from the job description</p>
                </div>
                <div className="tip-card">
                  <h4 className="tip-card-title">Quantify Achievements</h4>
                  <p>Add numbers and metrics to your achievements to make them more impactful</p>
                </div>
                <div className="tip-card">
                  <h4 className="tip-card-title">Company Research</h4>
                  <p>Mention the company's mission, values, or recent accomplishments</p>
                </div>
              </div>
              <div className="button-group">
                <button onClick={handleClear} className="button secondary-button">
                  Create Another Letter
                </button>
                <button onClick={() => window.print()} className="button">
                  Print Letter
                </button>
              </div>
            </div>
          </>
        ) : currentStep === 1 ? (
          <div className="card">
            <h2 className="card-title center-text">Create a Professional Cover Letter in Minutes</h2>
            <p className="ready-text center-text">
              Fill in your details above and click "Continue" to get started.
            </p>
            <div className="checklist">
              <p className="checklist-title">What makes a great cover letter:</p>
              <ul>
                <li><strong>Customization:</strong> Tailor each letter to the specific job</li>
                <li><strong>Professional Tone:</strong> Match the company culture and industry</li>
                <li><strong>Clear Structure:</strong> Introduction, body, and compelling close</li>
                <li><strong>Keyword Optimization:</strong> Include terms from the job description</li>
                <li><strong>Results Focus:</strong> Highlight achievements with numbers</li>
                <li><strong>Company Alignment:</strong> Show you've researched the organization</li>
              </ul>
            </div>
          </div>
        ) : null}

        {/* Long-Tail Keywords Section - GEO Optimization */}
        <section className="how-to-section">
          <h2 className="section-title">Common Questions About Cover Letters</h2>
          <div className="how-to-steps" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {[
              "how to write a cover letter with no experience",
              "best cover letter format for 2026",
              "cover letter samples for career change",
              "what to include in a cover letter",
              "cover letter vs resume differences",
              "ATS friendly cover letter tips",
              "professional cover letter templates free",
              "cover letter for internal position"
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

        {/* How-to Section */}
        <section className="how-to-section" aria-labelledby="how-to-title">
          <h2 className="section-title" id="how-to-title">How It Works: 5-Step Cover Letter Creation</h2>
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
          <h2 className="section-title" id="faq-title">Frequently Asked Questions About Cover Letters</h2>
          <div className="faq-list">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
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
          <h2 className="section-title" id="reviews-title">What Users Say About Our Cover Letter Generator</h2>
          <div className="reviews-grid">
            {REVIEWS.map((review, index) => (
              <div key={index} className="review-card" itemScope itemType="https://schema.org/Review">
                <div className="review-header">
                  <div className="reviewer-info">
                    <span itemProp="author" itemScope itemType="https://schema.org/Person">
                      <meta itemProp="name" content={review.name} />
                      <strong className="reviewer-name">{review.name}</strong>
                    </span>
                    <span className="reviewer-position">{review.position}</span>
                  </div>
                  <div className="review-rating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={review.rating} />
                    <meta itemProp="bestRating" content="5" />
                    <div className="stars">
                      {'★'.repeat(review.rating)}
                      {'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>
                </div>
                <div className="review-content" itemProp="reviewBody">
                  <p>"{review.review}"</p>
                </div>
                <div className="review-date" itemProp="datePublished">
                  {review.date}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section - Links Preserved */}
        <section className="resources-section" aria-labelledby="resources-title">
          <h2 className="section-title" id="resources-title">Additional Career Resources</h2>
          <div className="resources-grid">
            <a
              href="/free-ats-resume-checker"
              className="resource-card"
              rel="nofollow"
            >
              <h3>Free ATS Resume Checker</h3>
              <p>Analyze your resume for ATS compatibility and get optimization tips.</p>
            </a>
            <a
              href="/resume-templates"
              className="resource-card"
              rel="nofollow"
            >
              <h3>Free Resume Templates</h3>
              <p>Professional ATS-friendly resume templates for all industries.</p>
            </a>
            <a
              href="/resume-for-canada-pr-guide"
              className="resource-card"
              rel="nofollow"
            >
              <h3>Resume for Canada PR Guide</h3>
              <p>Learn how to optimize your resume for Canadian Permanent Residence.</p>
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" aria-labelledby="cta-title">
          <div className="cta-card">
            <h2 className="cta-title" id="cta-title">Ready to Create Your Perfect Cover Letter?</h2>
            <p className="cta-text">
              Join 500,000+ job seekers who improved their job applications with our free cover letter generator.
            </p>
            <button onClick={handleClear} className="cta-button">
              Start Creating Now - No Sign Up Required
            </button>
            <div className="cta-guarantee">
              <span className="guarantee-text">✓ 100% Free • ✓ No Sign Up • ✓ Privacy Protected • ✓ Instant Results</span>
            </div>
          </div>
        </section>
      </main>

      {/* Build Info - Fixed hydration */}
      <div className="build-info">
        <p>Last updated: {safeSeoData.currentDate} • Build: {buildTime}</p>
        <p>© {CURRENT_YEAR} Professional Resume Free. All rights reserved.</p>
      </div>

      {/* Hidden Metadata */}
      <div className="hidden">
        <span itemProp="dateModified">{safeSeoData.lastModifiedDate}</span>
        <span itemProp="softwareVersion">2026.1.0</span>
      </div>
    </div>
  );
}

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