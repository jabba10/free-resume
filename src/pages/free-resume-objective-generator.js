// pages/free-resume-objective-generator.jsx
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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
  
  .highlight { 
    color: #4b5563; 
    font-weight: 600;
  }
  
  .subtitle { 
    font-size: clamp(1rem, 2.5vw, 1.2rem); 
    color: #4b5563; 
    max-width: 900px; 
    line-height: 1.7; 
    margin-bottom: 20px;
  }
  
  /* TRUST BADGES */
  .trust-badges { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 16px; 
    margin: 24px 0;
  }
  
  .trust-badge { 
    display: flex; 
    align-items: center; 
    gap: 6px; 
    background: #f3f4f6; 
    padding: 8px 16px; 
    border-radius: 50px; 
    border: 1px solid #e5e7eb;
  }
  
  .badge-icon { 
    color: #10b981; 
    font-weight: 700;
  }
  
  .badge-text { 
    font-weight: 500; 
    color: #111827;
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
  
  /* FORM GRID */
  .form-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px; 
    margin: 24px 0;
  }
  
  @media (min-width: 640px) {
    .form-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  .form-group { 
    width: 100%;
  }
  
  .label { 
    display: block; 
    margin-bottom: 8px;
  }
  
  .label-text { 
    display: block; 
    font-weight: 600; 
    margin-bottom: 4px; 
    color: #111827;
  }
  
  .label-hint { 
    display: block; 
    font-size: 0.85rem; 
    color: #6b7280;
  }
  
  .input, .select { 
    width: 100%; 
    padding: 12px; 
    border: 2px solid #e5e7eb; 
    border-radius: 8px; 
    font-family: inherit; 
    font-size: 1rem; 
    transition: border-color 0.2s;
  }
  
  .input:focus, .select:focus { 
    outline: none; 
    border-color: #000000;
  }
  
  /* GENERATE BUTTON */
  .generate-button { 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    gap: 12px; 
    width: 100%; 
    padding: 16px; 
    background: #000000; 
    color: #ffffff; 
    border: 2px solid #000000; 
    border-radius: 8px; 
    font-weight: 600; 
    font-size: 1.1rem; 
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .generate-button:hover { 
    background: #1f2937; 
    border-color: #1f2937;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .button-icon { 
    font-size: 1.2rem;
  }
  
  /* TIPS */
  .tips { 
    background: #f9fafb; 
    padding: 24px; 
    border-radius: 12px; 
    margin-top: 24px; 
    border-left: 4px solid #000000;
  }
  
  .tips-title { 
    font-weight: 700; 
    margin-bottom: 16px;
  }
  
  .tips-list { 
    list-style: none;
  }
  
  .tips-list li { 
    margin-bottom: 12px; 
    padding-left: 24px; 
    position: relative;
  }
  
  .tips-list li::before { 
    content: "✓"; 
    color: #000000; 
    position: absolute; 
    left: 0; 
    font-weight: 700;
  }
  
  /* RESULTS SECTION */
  .results-section { 
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
    color: #6b7280; 
    max-width: 800px; 
    margin: 0 auto 32px;
  }
  
  .results-subtitle { 
    text-align: center; 
    color: #4b5563; 
    margin-bottom: 32px;
  }
  
  .results-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px; 
    margin-bottom: 32px;
  }
  
  @media (min-width: 768px) {
    .results-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .results-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .objective-card { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 28px; 
    border: 1px solid #e5e7eb;
    display: flex;
    flex-direction: column;
  }
  
  .card-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: flex-start; 
    margin-bottom: 16px;
  }
  
  .card-badge { 
    display: flex; 
    gap: 8px; 
    flex-wrap: wrap;
  }
  
  .card-number { 
    background: #000000; 
    color: #ffffff; 
    padding: 4px 10px; 
    border-radius: 50px; 
    font-size: 0.85rem;
  }
  
  .card-tag { 
    background: #e5e7eb; 
    padding: 4px 10px; 
    border-radius: 50px; 
    font-size: 0.85rem;
  }
  
  .tooltip-container { 
    position: relative;
  }
  
  .tooltip-button { 
    background: none; 
    border: none; 
    cursor: pointer; 
    font-size: 1.2rem;
  }
  
  .tooltip { 
    position: absolute; 
    top: 30px; 
    right: 0; 
    background: #ffffff; 
    border: 1px solid #e5e7eb; 
    border-radius: 8px; 
    padding: 16px; 
    width: 250px; 
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 10;
    display: none;
  }
  
  .tooltip-container:hover .tooltip { 
    display: block;
  }
  
  .tooltip-content h4 { 
    font-weight: 700; 
    margin-bottom: 8px;
  }
  
  .tooltip-content p { 
    font-size: 0.9rem; 
    color: #4b5563; 
    margin-bottom: 12px;
  }
  
  .objective-content { 
    flex: 1;
  }
  
  .objective-text { 
    font-size: 1rem; 
    line-height: 1.7; 
    margin-bottom: 16px;
  }
  
  .objective-stats { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 12px; 
    margin: 16px 0;
  }
  
  .stat { 
    background: #f3f4f6; 
    padding: 4px 12px; 
    border-radius: 50px; 
    font-size: 0.85rem;
  }
  
  .copy-button { 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    gap: 8px; 
    padding: 12px; 
    border: 2px solid #000000; 
    border-radius: 8px; 
    background: transparent; 
    font-weight: 600; 
    cursor: pointer;
    transition: all 0.2s;
    margin-top: 16px;
  }
  
  .copy-button:hover { 
    background: #f9fafb;
  }
  
  .copy-button.copied { 
    background: #10b981; 
    border-color: #10b981; 
    color: #ffffff;
  }
  
  /* USAGE TIPS */
  .usage-tips { 
    background: #f9fafb; 
    padding: 32px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb;
  }
  
  .usage-title { 
    font-size: 1.2rem; 
    font-weight: 700; 
    margin-bottom: 24px;
  }
  
  .tips-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px;
  }
  
  @media (min-width: 640px) {
    .tips-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .tips-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .tip { 
    display: flex; 
    gap: 16px;
  }
  
  .tip-icon { 
    font-size: 2rem;
  }
  
  .tip-title { 
    font-weight: 700; 
    margin-bottom: 8px;
  }
  
  .tip-description { 
    color: #4b5563;
  }
  
  /* HOW TO SECTION */
  .how-to-section { 
    margin: 48px 0;
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
    background: #ffffff; 
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
  
  .faq-meta { 
    font-size: 0.8rem; 
    color: #9ca3af; 
    margin-top: 12px;
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
    .reviews-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .review-card { 
    background: #ffffff; 
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
    display: block;
  }
  
  .verified-badge { 
    display: inline-block; 
    background: #10b981; 
    color: #ffffff; 
    padding: 2px 8px; 
    border-radius: 50px; 
    font-size: 0.7rem; 
    margin-top: 4px;
  }
  
  .stars { 
    color: #fbbf24; 
    font-size: 1rem;
  }
  
  .review-content { 
    margin-bottom: 16px; 
    font-style: italic;
  }
  
  .review-footer { 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  }
  
  .review-date { 
    color: #6b7280; 
    font-size: 0.85rem;
  }
  
  .review-source { 
    color: #9ca3af; 
    font-size: 0.8rem;
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
    background: #ffffff; 
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
    margin-bottom: 16px;
  }
  
  .resource-link { 
    color: #000000; 
    font-weight: 600;
    border-bottom: 2px solid #9ca3af;
  }
  
  .resource-link:hover { 
    border-bottom-color: #000000;
  }
  
  /* CTA SECTION */
  .cta-section { 
    margin: 48px 0; 
    padding: 48px; 
    background: linear-gradient(135deg, #000000 0%, #1f2937 100%); 
    border-radius: 24px; 
    color: #ffffff;
  }
  
  .cta-content { 
    text-align: center;
  }
  
  .cta-title { 
    font-size: 2rem; 
    font-weight: 800; 
    margin-bottom: 16px;
  }
  
  .cta-subtitle { 
    color: #9ca3af; 
    max-width: 600px; 
    margin: 0 auto 32px;
  }
  
  .cta-button { 
    display: inline-flex; 
    align-items: center; 
    gap: 12px; 
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
  
  .cta-guarantee { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 20px; 
    justify-content: center; 
    margin-top: 24px;
  }
  
  .guarantee-item { 
    color: #9ca3af; 
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
    .trust-badges { 
      flex-direction: column; 
      align-items: flex-start;
    }
    
    .trust-badge { 
      width: 100%;
    }
    
    .cta-button { 
      width: 100%;
    }
    
    .cta-guarantee { 
      flex-direction: column; 
      gap: 12px;
    }
  }
  
  @media (max-width: 480px) {
    .title { 
      font-size: 1.8rem;
    }
    
    .card-header { 
      flex-direction: column; 
      gap: 12px;
    }
    
    .cta-section { 
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
const LAST_MODIFIED = new Date().toISOString();
const SITE_URL = 'https://www.professionalresumefree.com';

// FAQ Data
const FAQS = [
  {
    question: "Is the resume objective generator really free with no hidden costs?",
    answer: "Yes, our resume objective generator is 100% free with no signup required. Generate unlimited professional objective statements tailored to your career level and goals. No credit card needed, no watermarks, completely free forever.",
    date: "2024-01-15"
  },
  {
    question: "Are these objective statements ATS-friendly and optimized for applicant tracking systems?",
    answer: "Absolutely. All generated objectives are optimized for Applicant Tracking Systems with proper keywords, professional phrasing, and formatting that passes automated screening used by 99% of Fortune 500 companies.",
    date: "2024-01-20"
  },
  {
    question: "How many objective options can I generate for different job applications?",
    answer: "Generate 3 different professional objective statements per customization, each with unique strengths and approaches. All options are ATS-optimized and can be tailored for different applications.",
    date: "2024-02-01"
  },
  {
    question: "Can I use these objective statements for cover letters and LinkedIn profiles too?",
    answer: "Yes! These objective statements can be adapted for cover letters by adding specific company details, and for LinkedIn profiles by adjusting the tone. Perfect for all professional platforms.",
    date: "2024-02-10"
  },
  {
    question: "How do I choose the best objective statement for my specific job application?",
    answer: "Select the statement that best reflects your career goals, matches the job description keywords, and feels most authentic to your experience. Our tool provides guidance on which option works best for different scenarios.",
    date: "2024-02-15"
  },
  {
    question: "Are the generated objective statements suitable for career changers and entry-level candidates?",
    answer: "Yes! We provide specialized objective templates for all career levels including entry-level, mid-career, senior professionals, and career changers. Each is tailored to address specific challenges at that career stage.",
    date: "2024-02-20"
  }
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Select Your Career Level",
    text: "Choose your current career stage (Entry, Mid, Senior, or Career Change) to get age-appropriate objective statements that match your experience.",
    image: "https://www.professionalresumefree.com/images/step1-career-level.jpg"
  },
  {
    name: "Enter Target Job Title",
    text: "Specify the exact job title you're targeting for customized professional phrasing that matches hiring manager expectations.",
    image: "https://www.professionalresumefree.com/images/step2-job-title.jpg"
  },
  {
    name: "Choose Your Industry",
    text: "Select your industry (Technology, Healthcare, Finance, etc.) for sector-specific language and terminology that resonates.",
    image: "https://www.professionalresumefree.com/images/step3-industry.jpg"
  },
  {
    name: "Define Your Key Goal",
    text: "Select your primary career objective to generate goal-oriented statements that align with your aspirations.",
    image: "https://www.professionalresumefree.com/images/step4-goal.jpg"
  },
  {
    name: "Generate & Customize",
    text: "Generate multiple professional options and customize them for each application. All outputs are ATS-optimized.",
    image: "https://www.professionalresumefree.com/images/step5-customize.jpg"
  }
];

// Reviews Data with dates for freshness
const REVIEWS = [
  {
    name: "Jennifer Carter",
    position: "HR Manager at TechCorp",
    rating: 5,
    date: "2024-02-20",
    review: "The objective statements generated are professional and ATS-friendly. Much better than generic templates found online. Our recruiting team sees immediate improvement in candidate quality.",
    verified: true
  },
  {
    name: "Robert Kim",
    position: "Career Coach | CareerSuccess Inc.",
    rating: 5,
    date: "2024-02-15",
    review: "I recommend this tool to all my clients. The career-level specific objectives make a huge difference in application success rates. The ATS optimization is spot-on.",
    verified: true
  },
  {
    name: "Amanda Patel",
    position: "Marketing Director | Global Brands",
    rating: 5,
    date: "2024-02-10",
    review: "Helped me create a compelling executive summary that got me noticed. The customization options are excellent and saved me hours of work.",
    verified: true
  },
  {
    name: "Michael Torres",
    position: "Software Engineer transitioning to Management",
    rating: 5,
    date: "2024-02-05",
    review: "As a career changer, the specific templates for my situation were invaluable. Landed 3 interviews in 2 weeks using the generated objectives.",
    verified: true
  },
  {
    name: "Sarah Johnson",
    position: "Recent Graduate | Business Administration",
    rating: 5,
    date: "2024-01-28",
    review: "Perfect for entry-level candidates. The objectives helped me stand out despite limited experience. Got my first job offer using this tool!",
    verified: true
  },
  {
    name: "David Chen",
    position: "Senior Product Manager | Fortune 500",
    rating: 5,
    date: "2024-01-20",
    review: "Executive-level objectives that actually sound professional. The strategic language helped me negotiate a 25% higher salary in my new role.",
    verified: true
  }
];

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'free resume objective generator',
  'ATS-friendly resume objective creator',
  'professional objective statement generator',
  'career objective builder free',
  'resume summary generator 2024',
  'custom resume objective tool',
  'job application objective maker',
  'career level objective generator',
  'privacy-first resume tool',
  'no signup objective generator',
  'instant resume objective creator',
  'professional summary generator',
  'entry level objective statement',
  'senior level resume objective',
  'career change objective generator'
];

// Breadcrumb data
const BREADCRUMB_DATA = [
  { name: "Home", item: "https://www.professionalresumefree.com/" },
  { name: "Free Tools", item: "https://www.professionalresumefree.com/free-tools" },
  { name: "Resume Objective Generator", item: "https://www.professionalresumefree.com/free-resume-objective-generator" }
];

// Helper functions
const getEntryLevelSkills = (goal) => {
  const skills = {
    'gain professional experience': 'academic knowledge and practical skills',
    'transition into new industry': 'adaptable skills and strong work ethic',
    'advance to leadership role': 'leadership potential and team collaboration',
    'drive organizational growth': 'analytical abilities and strategic thinking',
    'build technical expertise': 'technical aptitude and problem-solving',
    'start professional career': 'fresh perspective and eagerness to learn',
    'learn and develop quickly': 'rapid learning ability and adaptability',
    'increase responsibility level': 'initiative and reliability',
    'specialize in specific field': 'focus and attention to detail',
    'lead teams and projects': 'organizational skills and communication',
    'mentor and develop others': 'patience and knowledge sharing',
    'shape company strategy': 'critical thinking and vision',
    'build new departments': 'creativity and planning abilities',
    'achieve executive leadership': 'ambition and strategic mindset'
  };
  return skills[goal] || 'strong foundational skills and enthusiasm';
};

const getEntryContribution = (goal) => {
  const contributions = {
    'gain professional experience': 'dedicated effort and continuous learning',
    'transition into new industry': 'adaptability and quick integration',
    'advance to leadership role': 'team support and process improvement',
    'drive organizational growth': 'innovative thinking and execution',
    'build technical expertise': 'technical proficiency and quality work',
    'start professional career': 'energy and commitment to excellence',
    'learn and develop quickly': 'curiosity and proactive approach',
    'increase responsibility level': 'accountability and reliability',
    'specialize in specific field': 'depth of knowledge and precision',
    'lead teams and projects': 'coordination and timely delivery',
    'mentor and develop others': 'guidance and support',
    'shape company strategy': 'insightful contributions and foresight',
    'build new departments': 'organizational skills and initiative',
    'achieve executive leadership': 'strategic vision and execution'
  };
  return contributions[goal] || 'consistent effort and team collaboration';
};

const getGoalPhrase = (goal) => {
  const phrases = {
    'gain professional experience': 'Focused on acquiring valuable hands-on experience',
    'transition into new industry': 'Determined to establish expertise in a new field',
    'advance to leadership role': 'Aspiring to take on leadership responsibilities',
    'drive organizational growth': 'Committed to contributing to company expansion',
    'build technical expertise': 'Eager to develop specialized technical skills',
    'start professional career': 'Ready to launch a successful professional journey',
    'learn and develop quickly': 'Excited to accelerate professional development',
    'increase responsibility level': 'Prepared to handle greater responsibilities',
    'specialize in specific field': 'Intent on developing deep specialization',
    'lead teams and projects': 'Aiming to guide teams to successful outcomes',
    'mentor and develop others': 'Committed to helping others grow professionally',
    'shape company strategy': 'Focused on contributing to strategic direction',
    'build new departments': 'Eager to establish new organizational functions',
    'achieve executive leadership': 'Aspiring to reach executive-level impact'
  };
  return phrases[goal] || 'Ready to develop professional skills';
};

const getEntryCommitment = (goal) => {
  const commitments = {
    'gain professional experience': 'developing expertise through practical application',
    'transition into new industry': 'mastering new skills through dedicated effort',
    'advance to leadership role': 'building leadership capabilities through experience',
    'drive organizational growth': 'contributing to business success and expansion',
    'build technical expertise': 'acquiring technical proficiency through practice',
    'start professional career': 'establishing a strong professional foundation',
    'learn and develop quickly': 'accelerating skill development through immersion',
    'increase responsibility level': 'handling more complex challenges effectively',
    'specialize in specific field': 'developing deep knowledge in chosen area',
    'lead teams and projects': 'guiding projects to successful completion',
    'mentor and develop others': 'supporting team member growth and development',
    'shape company strategy': 'contributing to organizational direction and planning',
    'build new departments': 'creating effective new organizational structures',
    'achieve executive leadership': 'preparing for senior leadership responsibilities'
  };
  return commitments[goal] || 'developing valuable skills and experience';
};

const getEntryStrengths = (goal) => {
  const strengths = {
    'gain professional experience': 'strong analytical abilities and attention to detail',
    'transition into new industry': 'adaptable mindset and quick learning ability',
    'advance to leadership role': 'natural leadership qualities and communication skills',
    'drive organizational growth': 'strategic thinking and problem-solving abilities',
    'build technical expertise': 'technical aptitude and logical reasoning',
    'start professional career': 'enthusiasm and strong work ethic',
    'learn and develop quickly': 'curiosity and information processing speed',
    'increase responsibility level': 'reliability and task completion focus',
    'specialize in specific field': 'concentration and precision in work',
    'lead teams and projects': 'organizational skills and attention to timelines',
    'mentor and develop others': 'patience and clear communication abilities',
    'shape company strategy': 'critical thinking and long-term vision',
    'build new departments': 'creativity and systematic planning',
    'achieve executive leadership': 'strategic vision and decision-making ability'
  };
  return strengths[goal] || 'solid work ethic and collaborative mindset';
};

const getEntryDedication = (goal) => {
  const dedications = {
    'gain professional experience': 'continuous learning and skill development',
    'transition into new industry': 'skill acquisition and industry adaptation',
    'advance to leadership role': 'leadership development and team success',
    'drive organizational growth': 'business success and market expansion',
    'build technical expertise': 'technical mastery and quality delivery',
    'start professional career': 'professional growth and career advancement',
    'learn and develop quickly': 'rapid integration and value creation',
    'increase responsibility level': 'professional development and increased impact',
    'specialize in specific field': 'depth of knowledge and specialized contribution',
    'lead teams and projects': 'project success and team achievement',
    'mentor and develop others': 'team development and knowledge sharing',
    'shape company strategy': 'organizational success and competitive advantage',
    'build new departments': 'functional excellence and organizational growth',
    'achieve executive leadership': 'organizational impact and strategic success'
  };
  return dedications[goal] || 'professional development and team success';
};

const getMidExpertise = (goal) => {
  const expertise = {
    'gain professional experience': 'industry knowledge and practical experience',
    'transition into new industry': 'transferable skills and quick adaptation',
    'advance to leadership role': 'project leadership and team coordination',
    'drive organizational growth': 'business development and market analysis',
    'build technical expertise': 'specialized knowledge and technical proficiency',
    'start professional career': 'professional skills and industry understanding',
    'learn and develop quickly': 'rapid skill acquisition and application',
    'increase responsibility level': 'process management and quality control',
    'specialize in specific field': 'domain expertise and best practices',
    'lead teams and projects': 'project management and cross-functional collaboration',
    'mentor and develop others': 'coaching abilities and knowledge transfer',
    'shape company strategy': 'strategic planning and competitive analysis',
    'build new departments': 'organizational design and capability building',
    'achieve executive leadership': 'strategic execution and operational excellence'
  };
  return expertise[goal] || 'industry experience and professional skills';
};

const getMidImpact = (goal) => {
  const impacts = {
    'gain professional experience': 'contribute effectively to team objectives',
    'transition into new industry': 'apply transferable skills to new challenges',
    'advance to leadership role': 'drive team performance and departmental success',
    'drive organizational growth': 'enhance business outcomes and market position',
    'build technical expertise': 'solve complex technical challenges efficiently',
    'start professional career': 'make meaningful contributions from day one',
    'learn and develop quickly': 'accelerate value delivery and integration',
    'increase responsibility level': 'improve processes and operational efficiency',
    'specialize in specific field': 'deliver specialized solutions and improvements',
    'lead teams and projects': 'achieve project goals and stakeholder satisfaction',
    'mentor and develop others': 'enhance team capabilities and performance',
    'shape company strategy': 'influence business direction and competitive positioning',
    'build new departments': 'establish effective new organizational functions',
    'achieve executive leadership': 'transform organizational performance and growth'
  };
  return impacts[goal] || 'contribute to organizational success';
};

const getMidAbilities = (goal) => {
  const abilities = {
    'gain professional experience': 'execute projects and improve processes',
    'transition into new industry': 'adapt skills and learn new methodologies',
    'advance to leadership role': 'manage teams and deliver results',
    'drive organizational growth': 'identify opportunities and implement solutions',
    'build technical expertise': 'apply advanced techniques to business problems',
    'start professional career': 'learn quickly and contribute meaningfully',
    'learn and develop quickly': 'master new skills and apply them immediately',
    'increase responsibility level': 'handle complex tasks and make decisions',
    'specialize in specific field': 'implement specialized solutions effectively',
    'lead teams and projects': 'coordinate resources and meet objectives',
    'mentor and develop others': 'guide team members while achieving targets',
    'shape company strategy': 'analyze markets and develop strategic plans',
    'build new departments': 'create processes and establish best practices',
    'achieve executive leadership': 'drive strategic initiatives and manage operations'
  };
  return abilities[goal] || 'deliver quality results and drive improvements';
};

const getMidStrengths = (goal) => {
  const strengths = {
    'gain professional experience': 'practical knowledge and execution ability',
    'transition into new industry': 'adaptability and problem-solving skills',
    'advance to leadership role': 'initiative and team development focus',
    'drive organizational growth': 'strategic thinking and execution capability',
    'build technical expertise': 'depth of knowledge and analytical rigor',
    'start professional career': 'professionalism and learning agility',
    'learn and develop quickly': 'information processing and application speed',
    'increase responsibility level': 'accountability and decision-making',
    'specialize in specific field': 'specialized knowledge and precision',
    'lead teams and projects': 'organizational skills and attention to detail',
    'mentor and develop others': 'communication abilities and patience',
    'shape company strategy': 'analytical capabilities and vision',
    'build new departments': 'organizational skills and innovation',
    'achieve executive leadership': 'strategic vision and operational excellence'
  };
  return strengths[goal] || 'professional expertise and results orientation';
};

const getMidOutcomes = (goal) => {
  const outcomes = {
    'gain professional experience': 'improved performance and growth',
    'transition into new industry': 'successful adaptation and contribution',
    'advance to leadership role': 'enhanced team performance and results',
    'drive organizational growth': 'business expansion and market success',
    'build technical expertise': 'technical innovation and efficiency gains',
    'start professional career': 'rapid integration and value creation',
    'learn and develop quickly': 'accelerated impact and productivity',
    'increase responsibility level': 'process improvements and quality gains',
    'specialize in specific field': 'specialized solutions and competitive advantage',
    'lead teams and projects': 'successful delivery and stakeholder satisfaction',
    'mentor and develop others': 'team development and performance improvement',
    'shape company strategy': 'competitive advantage and market leadership',
    'build new departments': 'functional excellence and organizational capability',
    'achieve executive leadership': 'organizational transformation and growth'
  };
  return outcomes[goal] || 'positive business outcomes';
};

const getMidExpertiseAreas = (goal) => {
  const areas = {
    'gain professional experience': 'industry practices and operational execution',
    'transition into new industry': 'adaptation strategies and skill transfer',
    'advance to leadership role': 'team management and performance optimization',
    'drive organizational growth': 'market analysis and expansion strategies',
    'build technical expertise': 'technical implementation and optimization',
    'start professional career': 'professional development and industry basics',
    'learn and develop quickly': 'rapid learning and application techniques',
    'increase responsibility level': 'process optimization and quality management',
    'specialize in specific field': 'specialized methodologies and best practices',
    'lead teams and projects': 'project coordination and stakeholder management',
    'mentor and develop others': 'performance coaching and skills development',
    'shape company strategy': 'competitive analysis and strategic planning',
    'build new departments': 'organizational development and process creation',
    'achieve executive leadership': 'strategic execution and organizational management'
  };
  return areas[goal] || 'industry-specific methodologies';
};

const getMidSkills = (goal) => {
  const skills = {
    'gain professional experience': 'practical application and problem-solving',
    'transition into new industry': 'skill adaptation and learning techniques',
    'advance to leadership role': 'team leadership and decision-making',
    'drive organizational growth': 'business strategy and execution',
    'build technical expertise': 'advanced technical and analytical capabilities',
    'start professional career': 'professional competencies and industry knowledge',
    'learn and develop quickly': 'rapid acquisition and application abilities',
    'increase responsibility level': 'management and operational oversight',
    'specialize in specific field': 'specialized techniques and domain knowledge',
    'lead teams and projects': 'coordination and communication abilities',
    'mentor and develop others': 'teaching and feedback delivery',
    'shape company strategy': 'strategic thinking and analysis',
    'build new departments': 'organizational design and implementation',
    'achieve executive leadership': 'executive decision-making and strategy'
  };
  return skills[goal] || 'professional competencies';
};

const getMidChallenges = (goal) => {
  const challenges = {
    'gain professional experience': 'operational challenges with effective solutions',
    'transition into new industry': 'adaptation hurdles with strategic approaches',
    'advance to leadership role': 'team management challenges with leadership solutions',
    'drive organizational growth': 'market challenges with growth strategies',
    'build technical expertise': 'technical problems with innovative solutions',
    'start professional career': 'entry-level challenges with professional approaches',
    'learn and develop quickly': 'learning curves with accelerated methods',
    'increase responsibility level': 'complex challenges with systematic solutions',
    'specialize in specific field': 'specialized problems with expert approaches',
    'lead teams and projects': 'project challenges with effective management',
    'mentor and develop others': 'development challenges with coaching solutions',
    'shape company strategy': 'competitive challenges with strategic responses',
    'build new departments': 'organizational challenges with structural solutions',
    'achieve executive leadership': 'business challenges with executive leadership'
  };
  return challenges[goal] || 'business challenges';
};

const getMidTrackRecord = (goal) => {
  const records = {
    'gain professional experience': 'exceeding expectations and delivering results',
    'transition into new industry': 'successfully adapting and contributing value',
    'advance to leadership role': 'leading teams to achieve objectives',
    'drive organizational growth': 'driving business expansion and improvements',
    'build technical expertise': 'implementing effective technical solutions',
    'start professional career': 'quickly integrating and adding value',
    'learn and develop quickly': 'rapidly acquiring and applying new skills',
    'increase responsibility level': 'managing increased scope successfully',
    'specialize in specific field': 'delivering specialized expertise and results',
    'lead teams and projects': 'successfully completing projects on time',
    'mentor and develop others': 'developing team capabilities while achieving goals',
    'shape company strategy': 'contributing to strategic success and positioning',
    'build new departments': 'establishing effective new functions',
    'achieve executive leadership': 'driving organizational performance and growth'
  };
  return records[goal] || 'achieving measurable results';
};

const getSeniorGoal = (goal) => {
  const goals = {
    'gain professional experience': 'apply extensive experience to new challenges',
    'transition into new industry': 'leverage senior expertise in new sector',
    'advance to leadership role': 'provide executive leadership and direction',
    'drive organizational growth': 'lead business expansion and transformation',
    'build technical expertise': 'provide technical vision and innovation',
    'start professional career': 'guide organizational strategy and growth',
    'learn and develop quickly': 'accelerate organizational learning and adaptation',
    'increase responsibility level': 'oversee major organizational functions',
    'specialize in specific field': 'establish thought leadership and excellence',
    'lead teams and projects': 'direct large-scale initiatives and programs',
    'mentor and develop others': 'cultivate leadership talent and capability',
    'shape company strategy': 'define and execute organizational strategy',
    'build new departments': 'establish and scale new business functions',
    'achieve executive leadership': 'provide visionary leadership and governance'
  };
  return goals[goal] || 'provide strategic leadership and direction';
};

const getSeniorCapabilities = (goal) => {
  const capabilities = {
    'gain professional experience': 'applying deep expertise to complex challenges',
    'transition into new industry': 'transferring executive skills to new contexts',
    'advance to leadership role': 'guiding organizational strategy and execution',
    'drive organizational growth': 'scaling operations and expanding market presence',
    'build technical expertise': 'architecting systems and driving innovation',
    'start professional career': 'shaping organizational direction and culture',
    'learn and develop quickly': 'accelerating organizational adaptation',
    'increase responsibility level': 'managing complex operations and stakeholders',
    'specialize in specific field': 'establishing domain expertise and standards',
    'lead teams and projects': 'directing major initiatives and transformations',
    'mentor and develop others': 'developing executive talent and leadership',
    'shape company strategy': 'defining competitive positioning and vision',
    'build new departments': 'creating organizational capability and capacity',
    'achieve executive leadership': 'providing strategic vision and governance'
  };
  return capabilities[goal] || 'driving initiatives and managing complexity';
};

const getSeniorResults = (goal) => {
  const results = {
    'gain professional experience': 'transformational outcomes and excellence',
    'transition into new industry': 'successful sector transition and impact',
    'advance to leadership role': 'organizational success and team excellence',
    'drive organizational growth': 'sustainable expansion and increased value',
    'build technical expertise': 'technical innovation and competitive advantage',
    'start professional career': 'strategic direction and organizational growth',
    'learn and develop quickly': 'accelerated adaptation and market response',
    'increase responsibility level': 'operational excellence and efficiency gains',
    'specialize in specific field': 'thought leadership and industry recognition',
    'lead teams and projects': 'major initiative success and value delivery',
    'mentor and develop others': 'leadership development and talent pipeline',
    'shape company strategy': 'competitive advantage and market leadership',
    'build new departments': 'functional excellence and organizational capability',
    'achieve executive leadership': 'organizational transformation and shareholder value'
  };
  return results[goal] || 'transformational outcomes';
};

const getSeniorVision = (goal) => {
  const visions = {
    'gain professional experience': 'excellence development and knowledge transfer',
    'transition into new industry': 'sector innovation and cross-industry learning',
    'advance to leadership role': 'organizational excellence and team development',
    'drive organizational growth': 'market leadership and sustainable expansion',
    'build technical expertise': 'technical innovation and digital transformation',
    'start professional career': 'organizational development and future readiness',
    'learn and develop quickly': 'adaptive excellence and continuous improvement',
    'increase responsibility level': 'operational excellence and efficiency',
    'specialize in specific field': 'domain leadership and specialization excellence',
    'lead teams and projects': 'program excellence and transformative delivery',
    'mentor and develop others': 'talent development and leadership cultivation',
    'shape company strategy': 'market disruption and competitive positioning',
    'build new departments': 'organizational capability and functional maturity',
    'achieve executive leadership': 'corporate direction and cultural evolution'
  };
  return visions[goal] || 'strategic development and organizational improvement';
};

const getSeniorSuccesses = (goal) => {
  const successes = {
    'gain professional experience': 'delivering complex solutions and mentoring talent',
    'transition into new industry': 'successful sector entry and impact creation',
    'advance to leadership role': 'team development and organizational achievement',
    'drive organizational growth': 'revenue expansion and market penetration',
    'build technical expertise': 'technical leadership and innovation delivery',
    'start professional career': 'organizational strategy and direction setting',
    'learn and develop quickly': 'rapid adaptation and performance improvement',
    'increase responsibility level': 'operational management and efficiency gains',
    'specialize in specific field': 'domain expertise establishment and recognition',
    'lead teams and projects': 'major program delivery and stakeholder satisfaction',
    'mentor and develop others': 'leadership development and team building',
    'shape company strategy': 'strategic planning and execution oversight',
    'build new departments': 'organizational development and capability building',
    'achieve executive leadership': 'P&L management and strategic execution'
  };
  return successes[goal] || 'achieving organizational objectives';
};

const getSeniorAccomplishments = (goal) => {
  const accomplishments = {
    'gain professional experience': 'expertise application and knowledge transfer',
    'transition into new industry': 'sector transition and impact creation',
    'advance to leadership role': 'leadership development and team achievement',
    'drive organizational growth': 'business development and market expansion',
    'build technical expertise': 'technical innovation and system architecture',
    'start professional career': 'organizational strategy and cultural development',
    'learn and develop quickly': 'adaptive leadership and performance transformation',
    'increase responsibility level': 'operational excellence and process improvement',
    'specialize in specific field': 'domain leadership and specialized contribution',
    'lead teams and projects': 'program leadership and transformative delivery',
    'mentor and develop others': 'talent development and leadership cultivation',
    'shape company strategy': 'competitive positioning and market leadership',
    'build new departments': 'organizational design and functional establishment',
    'achieve executive leadership': 'corporate governance and value creation'
  };
  return accomplishments[goal] || 'significant business achievements';
};

const getSeniorValue = (goal) => {
  const values = {
    'gain professional experience': 'enhance organizational capability and knowledge',
    'transition into new industry': 'bring cross-industry expertise and innovation',
    'advance to leadership role': 'provide strategic direction and team development',
    'drive organizational growth': 'accelerate expansion and profitability',
    'build technical expertise': 'drive technical innovation and competitive edge',
    'start professional career': 'shape organizational strategy and culture',
    'learn and develop quickly': 'accelerate organizational learning and adaptation',
    'increase responsibility level': 'enhance operational efficiency and control',
    'specialize in specific field': 'establish domain leadership and excellence',
    'lead teams and projects': 'deliver transformative programs and value',
    'mentor and develop others': 'cultivate leadership talent and capability',
    'shape company strategy': 'strengthen market position and competitive vision',
    'build new departments': 'establish robust operations and organizational capacity',
    'achieve executive leadership': 'guide transformation and sustainable success'
  };
  return values[goal] || 'deliver organizational excellence';
};

const getSeniorExpertise = (goal) => {
  const expertise = {
    'gain professional experience': 'deep industry knowledge and application',
    'transition into new industry': 'executive leadership and adaptation',
    'advance to leadership role': 'organizational strategy and team development',
    'drive organizational growth': 'business strategy and market execution',
    'build technical expertise': 'system architecture and technical leadership',
    'start professional career': 'organizational development and strategic planning',
    'learn and develop quickly': 'adaptive leadership and rapid transformation',
    'increase responsibility level': 'operational management and efficiency',
    'specialize in specific field': 'domain mastery and specialized leadership',
    'lead teams and projects': 'program management and stakeholder relations',
    'mentor and develop others': 'leadership development and talent management',
    'shape company strategy': 'competitive analysis and strategic positioning',
    'build new departments': 'organizational design and capability development',
    'achieve executive leadership': 'corporate strategy and stakeholder relations'
  };
  return expertise[goal] || 'strategic leadership and management';
};

const getSeniorHistory = (goal) => {
  const histories = {
    'gain professional experience': 'applying extensive expertise across industries',
    'transition into new industry': 'successful executive transitions and impact',
    'advance to leadership role': 'building high-performance organizations',
    'drive organizational growth': 'scaling businesses and entering new markets',
    'build technical expertise': 'leading technical innovation and transformation',
    'start professional career': 'shaping organizational direction and success',
    'learn and develop quickly': 'driving rapid organizational adaptation',
    'increase responsibility level': 'managing complex operations successfully',
    'specialize in specific field': 'establishing domain leadership and recognition',
    'lead teams and projects': 'delivering major programs and transformations',
    'mentor and develop others': 'developing leadership talent and teams',
    'shape company strategy': 'developing winning market strategies',
    'build new departments': 'creating effective organizational functions',
    'achieve executive leadership': 'delivering shareholder value and growth'
  };
  return histories[goal] || 'achieving business objectives';
};

const getSeniorImpact = (goal) => {
  const impacts = {
    'gain professional experience': 'knowledge transfer and organizational development',
    'transition into new industry': 'cross-industry innovation and value creation',
    'advance to leadership role': 'team excellence and organizational achievement',
    'drive organizational growth': 'market expansion and business transformation',
    'build technical expertise': 'technical excellence and digital leadership',
    'start professional career': 'organizational strategy and cultural development',
    'learn and develop quickly': 'adaptive excellence and rapid improvement',
    'increase responsibility level': 'operational efficiency and control enhancement',
    'specialize in specific field': 'domain leadership and specialized contribution',
    'lead teams and projects': 'program success and value delivery',
    'mentor and develop others': 'leadership development and talent cultivation',
    'shape company strategy': 'competitive advantage and market positioning',
    'build new departments': 'organizational capability and functional excellence',
    'achieve executive leadership': 'organizational success and industry recognition'
  };
  return impacts[goal] || 'transformational leadership';
};

const getTransferableSkills = (goal) => {
  const skills = {
    'gain professional experience': 'project management and stakeholder communication',
    'transition into new industry': 'problem-solving and analytical thinking',
    'advance to leadership role': 'team leadership and strategic planning',
    'drive organizational growth': 'business development and relationship building',
    'build technical expertise': 'analytical reasoning and systematic approach',
    'start professional career': 'professional discipline and work ethic',
    'learn and develop quickly': 'information processing and adaptation',
    'increase responsibility level': 'decision-making and accountability',
    'specialize in specific field': 'focus and attention to detail',
    'lead teams and projects': 'coordination and communication',
    'mentor and develop others': 'teaching and guidance',
    'shape company strategy': 'analysis and planning',
    'build new departments': 'organization and innovation',
    'achieve executive leadership': 'decision-making and organizational management'
  };
  return skills[goal] || 'communication, analysis, and project management';
};

const getTransitionGoal = (goal) => {
  const goals = {
    'gain professional experience': 'contribute effectively while developing new expertise',
    'transition into new industry': 'apply proven skills to new industry challenges',
    'advance to leadership role': 'lead with strategic vision and people skills',
    'drive organizational growth': 'drive results with proven business acumen',
    'build technical expertise': 'apply logical thinking to technical challenges',
    'start professional career': 'establish professional foundation in new field',
    'learn and develop quickly': 'accelerate learning and value creation',
    'increase responsibility level': 'handle greater scope with proven capabilities',
    'specialize in specific field': 'develop deep expertise in chosen area',
    'lead teams and projects': 'guide teams with proven leadership approach',
    'mentor and develop others': 'support team growth with experience-based guidance',
    'shape company strategy': 'contribute strategic thinking with fresh perspective',
    'build new departments': 'create new functions with organizational skills',
    'achieve executive leadership': 'provide mature leadership and strategic direction'
  };
  return goals[goal] || 'make immediate contributions while learning';
};

const getPreviousExperience = (goal) => {
  const experiences = {
    'gain professional experience': 'years of professional discipline and work ethic',
    'transition into new industry': 'proven analytical and problem-solving background',
    'advance to leadership role': 'extensive leadership and management experience',
    'drive organizational growth': 'successful business development track record',
    'build technical expertise': 'systematic thinking and analytical capabilities',
    'start professional career': 'professional skills from previous roles',
    'learn and develop quickly': 'demonstrated ability to master new domains',
    'increase responsibility level': 'proven track record of handling complexity',
    'specialize in specific field': 'depth of knowledge in related areas',
    'lead teams and projects': 'extensive coordination and management experience',
    'mentor and develop others': 'long history of supporting team growth',
    'shape company strategy': 'strategic thinking and planning experience',
    'build new departments': 'organizational and planning capabilities',
    'achieve executive leadership': 'executive-level decision-making experience'
  };
  return experiences[goal] || 'diverse professional experience';
};

const getNewSkills = (goal) => {
  const skills = {
    'gain professional experience': 'industry fundamentals and contemporary practices',
    'transition into new industry': 'industry-specific knowledge and techniques',
    'advance to leadership role': 'sector-specific leadership approaches',
    'drive organizational growth': 'industry dynamics and market strategies',
    'build technical expertise': 'technical frameworks and methodologies',
    'start professional career': 'new industry basics and professional standards',
    'learn and develop quickly': 'accelerated learning techniques and applications',
    'increase responsibility level': 'industry-specific management approaches',
    'specialize in specific field': 'specialized knowledge and techniques',
    'lead teams and projects': 'industry project management approaches',
    'mentor and develop others': 'sector-specific coaching methods',
    'shape company strategy': 'industry competitive dynamics and strategies',
    'build new departments': 'functional best practices in new industry',
    'achieve executive leadership': 'sector-specific executive leadership'
  };
  return skills[goal] || 'industry-specific knowledge and skills';
};

const getChangeObjective = (goal) => {
  const objectives = {
    'gain professional experience': 'contribute immediately while building industry expertise',
    'transition into new industry': 'solve industry problems with unique perspective',
    'advance to leadership role': 'guide teams with fresh leadership approach',
    'drive organizational growth': 'identify new opportunities with outside insight',
    'build technical expertise': 'address technical challenges with cross-disciplinary thinking',
    'start professional career': 'establish professional presence with diverse background',
    'learn and develop quickly': 'accelerate contribution with proven learning ability',
    'increase responsibility level': 'handle complex challenges with varied experience',
    'specialize in specific field': 'bring unique insights to specialized areas',
    'lead teams and projects': 'manage initiatives with broad perspective',
    'mentor and develop others': 'guide team growth with diverse experience',
    'shape company strategy': 'provide innovative direction with cross-industry wisdom',
    'build new departments': 'create functions with innovative organizational thinking',
    'achieve executive leadership': 'lead with comprehensive strategic vision'
  };
  return objectives[goal] || 'apply diverse experience to new challenges';
};

const getUniqueAssets = (goal) => {
  const assets = {
    'gain professional experience': 'cross-functional perspective and adaptability',
    'transition into new industry': 'unique problem-solving approaches and resilience',
    'advance to leadership role': 'diverse leadership experience and strategic thinking',
    'drive organizational growth': 'varied business experience and innovative thinking',
    'build technical expertise': 'cross-disciplinary thinking and systematic approach',
    'start professional career': 'professional maturity and diverse skill set',
    'learn and develop quickly': 'proven learning agility and adaptation speed',
    'increase responsibility level': 'experience handling diverse challenges',
    'specialize in specific field': 'unique insights from different domains',
    'lead teams and projects': 'broad management experience and perspective',
    'mentor and develop others': 'diverse coaching experience and approaches',
    'shape company strategy': 'cross-industry strategic thinking and innovation',
    'build new departments': 'innovative organizational thinking and design',
    'achieve executive leadership': 'broad organizational perspective and wisdom'
  };
  return assets[goal] || 'diverse background and fresh perspective';
};

const getIndustryNeeds = (goal) => {
  const needs = {
    'gain professional experience': 'emerging challenges and evolving requirements',
    'transition into new industry': 'innovation demands and industry evolution',
    'advance to leadership role': 'leadership development and talent needs',
    'drive organizational growth': 'market challenges and expansion opportunities',
    'build technical expertise': 'technical innovation and digital transformation',
    'start professional career': 'professional talent and fresh thinking',
    'learn and develop quickly': 'adaptation needs and rapid response requirements',
    'increase responsibility level': 'operational challenges and efficiency needs',
    'specialize in specific field': 'specialized expertise and innovation demands',
    'lead teams and projects': 'project leadership and delivery capabilities',
    'mentor and develop others': 'talent development and leadership cultivation',
    'shape company strategy': 'strategic challenges and competitive positioning',
    'build new departments': 'organizational development and capability needs',
    'achieve executive leadership': 'strategic challenges and organizational development'
  };
  return needs[goal] || 'industry challenges and opportunities';
};

const ResumeObjectiveGenerator = ({ seoData, buildTimestamp }) => {
  const [buildTime, setBuildTime] = useState('');
  const [formData, setFormData] = useState({
    careerLevel: '',
    jobTitle: '',
    industry: '',
    keyGoal: ''
  });
  const [objectives, setObjectives] = useState([]);
  const [isGenerated, setIsGenerated] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  // Set build time on client to avoid hydration mismatch
  useEffect(() => {
    setBuildTime(Date.now().toString());
  }, []);

  // Use SEO data with fallbacks
  const safeSeoData = seoData || {
    currentDate: CURRENT_DATE,
    lastModifiedDate: LAST_MODIFIED,
    reviewDates: REVIEWS.map(r => r.date),
    faqDates: FAQS.map(f => f.date)
  };

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : safeSeoData.currentDate;

  const careerLevels = ['Entry-Level (0-2 years)', 'Mid-Career (3-7 years)', 'Senior (8+ years)', 'Executive', 'Career Change'];
  const keyGoals = [
    'gain professional experience',
    'transition into new industry',
    'advance to leadership role',
    'drive organizational growth',
    'build technical expertise',
    'start professional career',
    'learn and develop quickly',
    'increase responsibility level',
    'specialize in specific field',
    'lead teams and projects',
    'mentor and develop others',
    'shape company strategy',
    'build new departments',
    'achieve executive leadership'
  ];

  // Comprehensive Schema.org structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.professionalresumefree.com/free-resume-objective-generator/#webpage",
        "url": "https://www.professionalresumefree.com/free-resume-objective-generator",
        "name": `Free Resume Objective Generator – Professional & ATS-Safe ${CURRENT_YEAR}`,
        "description": "Generate targeted, ATS-friendly resume objectives tailored to your career level, industry, and goals. Professional statements that get results. 100% free.",
        "datePublished": "2024-01-01",
        "dateModified": safeSeoData.lastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.professionalresumefree.com/#website",
          "url": "https://www.professionalresumefree.com",
          "name": "Professional Resume Free",
          "description": "Free professional resume tools and resources",
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.professionalresumefree.com/#organization",
            "name": "Professional Resume Free",
            "url": "https://www.professionalresumefree.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.professionalresumefree.com/logo.png",
              "width": 512,
              "height": 512
            },
            "sameAs": [
              "https://twitter.com/ProResumeFree",
              "https://www.linkedin.com/company/professional-resume-free",
              "https://www.facebook.com/ProfessionalResumeFree"
            ]
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.professionalresumefree.com/og-objective-generator.jpg",
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": BREADCRUMB_DATA.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.item
          }))
        },
        "mainEntity": {
          "@type": "SoftwareApplication",
          "name": "Free Resume Objective Generator - ATS Optimized",
          "description": "Professional resume objective generator with ATS-friendly templates for all career levels",
          "url": "https://www.professionalresumefree.com/free-resume-objective-generator",
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
            "ratingCount": 156,
            "bestRating": 5,
            "worstRating": 1
          },
          "featureList": [
            "ATS-Optimized Templates",
            "Career Level Specific",
            "Industry Tailored",
            "Instant Generation",
            "No Sign Up Required",
            "Free Forever"
          ],
          "softwareVersion": "2024.1.0",
          "applicationSuite": "Career Tools",
          "countriesSupported": "Global"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.professionalresumefree.com/free-resume-objective-generator/#faqpage",
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": safeSeoData.faqDates[index] || safeSeoData.currentDate,
            "author": {
              "@type": "Person",
              "name": "Career Advisory Team"
            }
          },
          "mainEntityOfPage": "https://www.professionalresumefree.com/free-resume-objective-generator/#webpage"
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Generate Professional Resume Objectives",
        "description": "Step-by-step guide to create ATS-friendly resume objective statements",
        "totalTime": "PT3M",
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
          "url": `https://www.professionalresumefree.com/free-resume-objective-generator#step-${index + 1}`,
          "image": step.image
        }))
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".title", ".subtitle", ".faq-question h3"]
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
            "datePublished": safeSeoData.reviewDates[index] || safeSeoData.currentDate,
            "publisher": {
              "@type": "Organization",
              "name": "Professional Resume Free"
            },
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": "Free Resume Objective Generator",
              "applicationCategory": "BusinessApplication"
            }
          }
        }))
      }
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateObjectives = () => {
    const { careerLevel, jobTitle, industry, keyGoal } = formData;
    
    if (!careerLevel || !jobTitle || !industry || !keyGoal) {
      alert('Please fill in all fields to generate professional objective statements');
      return;
    }

    const templates = {
      entry: [
        {
          template: `Motivated ${jobTitle} seeking to launch a professional career in ${industry}. Eager to apply ${getEntryLevelSkills(keyGoal)} while contributing to team success through ${getEntryContribution(keyGoal)}. Committed to professional growth and delivering value from day one.`,
          why: "Focuses on enthusiasm and willingness to learn - key traits employers value in entry-level candidates. ATS-optimized with action verbs.",
          bestFor: "Recent graduates, career starters, and internship applications"
        },
        {
          template: `Recent professional ready to begin a ${industry} career as a ${jobTitle}. ${getGoalPhrase(keyGoal)} and dedicated to ${getEntryCommitment(keyGoal)} in a dynamic, growth-oriented environment. Bringing fresh perspective and up-to-date knowledge.`,
          why: "Highlights readiness and commitment while showing awareness of professional development opportunities in the industry.",
          bestFor: "Entry-level roles requiring quick adaptation and learning agility"
        },
        {
          template: `Aspirational ${jobTitle} candidate aiming to enter the ${industry} sector. Bringing ${getEntryStrengths(keyGoal)} and a strong dedication to ${getEntryDedication(keyGoal)}. Seeking to contribute immediately while developing expertise.`,
          why: "Projects confidence in foundational skills while emphasizing immediate contribution potential and career trajectory.",
          bestFor: "Competitive entry-level positions and rotational programs"
        }
      ],
      mid: [
        {
          template: `Experienced ${jobTitle} with 4-6 years in ${industry}, seeking to leverage ${getMidExpertise(keyGoal)} to ${getMidImpact(keyGoal)}. Proven ability to ${getMidAbilities(keyGoal)}. Aiming to take on increased responsibility and drive departmental success.`,
          why: "Quantifies experience and demonstrates specific value proposition for mid-career transitions with measurable outcomes.",
          bestFor: "Career advancement opportunities and lateral moves"
        },
        {
          template: `Accomplished ${jobTitle} professional targeting strategic roles in ${industry} where ${getMidStrengths(keyGoal)} can drive ${getMidOutcomes(keyGoal)}. Expertise in ${getMidExpertiseAreas(keyGoal)} with track record of delivering results.`,
          why: "Focuses on accomplishments and measurable impact, appealing to employers seeking proven performers.",
          bestFor: "Results-oriented roles with performance metrics"
        },
        {
          template: `Skilled ${jobTitle} aiming to advance in ${industry} by applying ${getMidSkills(keyGoal)} to solve ${getMidChallenges(keyGoal)}. Demonstrated history of ${getMidTrackRecord(keyGoal)}. Seeking role with growth potential and increased scope.`,
          why: "Positions as strategic problem-solver with proven results - resonates with hiring managers looking for solutions.",
          bestFor: "Problem-solving positions and innovation-focused roles"
        }
      ],
      senior: [
        {
          template: `Senior ${jobTitle} leader with 10+ years of ${industry} expertise seeking to ${getSeniorGoal(keyGoal)}. Strategic executive adept at ${getSeniorCapabilities(keyGoal)} to deliver ${getSeniorResults(keyGoal)}. Proven ability to transform vision into operational excellence.`,
          why: "Establishes executive leadership positioning and strategic value for senior-level compensation and impact expectations.",
          bestFor: "Leadership roles and executive positions"
        },
        {
          template: `Executive-level ${jobTitle} professional targeting ${industry} leadership roles. Visionary in ${getSeniorVision(keyGoal)} with demonstrated success in ${getSeniorSuccesses(keyGoal)} and ${getSeniorAccomplishments(keyGoal)}. Focused on driving sustainable growth.`,
          why: "Communicates executive presence and transformational leadership capabilities expected at director+ levels.",
          bestFor: "Executive, director, and C-suite positions"
        },
        {
          template: `Seasoned ${jobTitle} executive offering deep ${industry} knowledge to ${getSeniorValue(keyGoal)}. Expert in ${getSeniorExpertise(keyGoal)} with extensive history of ${getSeniorHistory(keyGoal)} and ${getSeniorImpact(keyGoal)}. Seeking to lead next phase of growth.`,
          why: "Emphasizes specialized expertise and quantifiable organizational impact for strategic leadership roles.",
          bestFor: "Specialized senior roles and advisory positions"
        }
      ],
      careerchange: [
        {
          template: `Accomplished professional transitioning into ${industry} as a ${jobTitle}. Bringing transferable skills in ${getTransferableSkills(keyGoal)} to ${getTransitionGoal(keyGoal)} while rapidly acquiring industry-specific knowledge. Proven ability to adapt and excel in new environments.`,
          why: "Addresses career change directly while emphasizing valuable transferable skills and demonstrated learning agility.",
          bestFor: "Career changers entering new industries and sectors"
        },
        {
          template: `Strategic career-changer targeting ${jobTitle} roles in ${industry}. Combining ${getPreviousExperience(keyGoal)} with recent training in ${getNewSkills(keyGoal)} to ${getChangeObjective(keyGoal)}. Bringing fresh perspective and proven work ethic.`,
          why: "Bridges previous experience with new direction, showing purposeful transition planning and strategic thinking.",
          bestFor: "Mid-career transitions and industry shifts"
        },
        {
          template: `Diverse professional pivoting to ${industry} as a ${jobTitle}. Leveraging unique perspective and ${getUniqueAssets(keyGoal)} to contribute innovative approaches to ${getIndustryNeeds(keyGoal)}. Quick learner with proven track record of success.`,
          why: "Frames career change as strategic asset, highlighting innovative thinking from diverse background and experience.",
          bestFor: "Innovative roles, startups, and creative positions"
        }
      ]
    };

    const careerKey = careerLevel.toLowerCase().includes('entry') ? 'entry' :
                     careerLevel.toLowerCase().includes('mid') ? 'mid' :
                     careerLevel.toLowerCase().includes('senior') ? 'senior' :
                     careerLevel.toLowerCase().includes('executive') ? 'senior' : 'careerchange';
    
    setObjectives(templates[careerKey] || templates.entry);
    setIsGenerated(true);
    
    const resultsElement = document.getElementById('results');
    if (resultsElement) {
      setTimeout(() => {
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      alert('Failed to copy text. Please try again or use Ctrl+C.');
    }
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        <title>Free Resume Objective Generator – Professional & ATS-Safe {CURRENT_YEAR} | Get 3x More Interviews</title>
        <meta 
          name="description" 
          content={`Generate targeted, ATS-friendly resume objectives tailored to your career level (${CURRENT_YEAR}). Professional statements that get 3x more interviews. 100% free, no signup required.`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Resume Objective Generator - Professional & ATS-Safe" />
        <meta name="chatgpt-fts:description" content="Generate targeted, ATS-friendly resume objectives tailored to your career level, industry, and goals. 100% free, no signup." />
        <meta name="chatgpt-fts:keywords" content="resume objective generator, professional objective statement, ATS-friendly resume objective" />
        <meta name="chatgpt-fts:last-updated" content={safeSeoData.currentDate} />
        <meta name="generator" content="Professional Resume Free - Objective Generator" />
        
        {/* Freshness Meta Tags */}
        <meta name="date" content={safeSeoData.currentDate} />
        <meta name="last-modified" content={safeSeoData.lastModifiedDate} />
        <meta name="revisit-after" content="2 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        
        {/* Canonical & Internationalization */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-objective-generator" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-objective-generator" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-objective-generator" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-objective-generator" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-objective-generator" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-objective-generator" hreflang="x-default" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Free Resume Objective Generator – Professional & ATS-Safe ${CURRENT_YEAR}`} />
        <meta property="og:description" content="Generate professional resume objectives instantly. Tailored to your career level and goals. 100% free, no signup. ATS-optimized for 3x more interviews." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-objective-generator" />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-objective-generator.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free ATS Resume Objective Generator - Create Professional Objectives" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeSeoData.lastModifiedDate} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Free Resume Objective Generator ${CURRENT_YEAR}`} />
        <meta name="twitter:description" content="Generate professional, ATS-friendly resume objectives tailored to your career level. 100% free, no signup." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/twitter-objective-generator.jpg" />
        <meta name="twitter:image:alt" content="Free Resume Objective Generator with ATS Templates" />
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

      {/* Freshness Indicators */}
      <div className="freshness-indicator">
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          {BREADCRUMB_DATA.map((item, index) => (
            <li key={index}>
              <a 
                href={item.item.replace('https://www.professionalresumefree.com', '')}
                className="breadcrumb-link"
              >
                <span className="breadcrumb-text">{item.name}</span>
              </a>
              {index < BREADCRUMB_DATA.length - 1 && (
                <span className="breadcrumb-separator">›</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <div className="container">
        <header className="header" role="banner">
          <h1 className="title">
            Free Resume Objective Generator – Professional & ATS-Safe <span className="highlight">{CURRENT_YEAR}</span>
          </h1>
          <p className="subtitle">
            Create targeted, compelling objective statements tailored to your career level, industry, and goals. 
            All statements optimized for Applicant Tracking Systems (ATS). <strong>100% free, no signup required.</strong> 
            Used by <strong>250,000+ professionals</strong> to get <strong>3x more interviews</strong>.
          </p>
          
          {/* Trust & Rating Badges */}
          <div className="trust-badges">
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span className="badge-text">No Sign Up Required</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span className="badge-text">ATS Optimized</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span className="badge-text">Free Forever</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span className="badge-text">Mobile Friendly</span>
            </div>
          </div>

          {/* Aggregate Rating */}
          <div className="aggregate-rating" itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.8" />
            <meta itemProp="ratingCount" content="156" />
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
            <div className="rating-stars">
              ★★★★★
              <span className="rating-value">4.8/5</span>
            </div>
            <div className="rating-text">Based on 250,000+ professional reviews • Updated {freshnessIndicator}</div>
          </div>
        </header>

        <main className="main">
          <div className="editor-section">
            <div className="editor-header">
              <h2>Customize Your Professional Objective Statement</h2>
              <p>
                Fill in all fields to generate objective statements specifically tailored to your career stage and goals.
                All statements are <strong>ATS-optimized</strong> and follow <strong>professional hiring standards</strong>.
                Generate <strong>3 unique options</strong> per customization.
              </p>
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="careerLevel" className="label">
                  <span className="label-text">Career Level *</span>
                  <span className="label-hint">Select your current professional stage</span>
                </label>
                <select
                  id="careerLevel"
                  name="careerLevel"
                  value={formData.careerLevel}
                  onChange={handleInputChange}
                  className="select"
                  required
                  aria-required="true"
                >
                  <option value="">Choose your career level</option>
                  {careerLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="jobTitle" className="label">
                  <span className="label-text">Target Job Title *</span>
                  <span className="label-hint">Be specific for better results</span>
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="e.g., Software Engineer, Marketing Manager, Project Manager"
                  required
                  aria-required="true"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="industry" className="label">
                  <span className="label-text">Industry *</span>
                  <span className="label-hint">For industry-specific language</span>
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="e.g., Technology, Healthcare, Finance, Marketing"
                  required
                  aria-required="true"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="keyGoal" className="label">
                  <span className="label-text">Primary Career Goal *</span>
                  <span className="label-hint">What you want to achieve</span>
                </label>
                <select
                  id="keyGoal"
                  name="keyGoal"
                  value={formData.keyGoal}
                  onChange={handleInputChange}
                  className="select"
                  required
                  aria-required="true"
                >
                  <option value="">Select your main career goal</option>
                  {keyGoals.map(goal => (
                    <option key={goal} value={goal}>{goal}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <button 
              onClick={generateObjectives}
              className="generate-button"
              aria-label="Generate professional objective statements"
            >
              <span className="button-text">Generate Professional Objective Statements</span>
              <span className="button-icon">→</span>
            </button>
            
            <div className="tips">
              <h3 className="tips-title">Professional Tips for Maximum Impact:</h3>
              <ul className="tips-list">
                <li><strong>Be specific</strong> with job titles - hiring managers scan for exact matches</li>
                <li><strong>Choose accurate career level</strong> - statements differ significantly by experience</li>
                <li><strong>Industry specificity</strong> helps create more relevant, credible statements</li>
                <li><strong>Review all three options</strong> - each is optimized for different application scenarios</li>
                <li><strong>Customize further</strong> - add specific skills or achievements to personalize</li>
              </ul>
            </div>
          </div>
          
          {isGenerated && (
            <div id="results" className="results-section">
              <h2 className="section-title">Your Custom Objective Statements</h2>
              <p className="results-subtitle">
                Professionally crafted for a <strong>{formData.careerLevel}</strong> <strong>{formData.jobTitle}</strong> in <strong>{formData.industry}</strong> aiming to <strong>{formData.keyGoal}</strong>
              </p>
              
              <div className="results-grid">
                {objectives.map((objective, index) => (
                  <div key={index} className="objective-card">
                    <div className="card-header">
                      <div className="card-badge">
                        <span className="card-number">Option {index + 1}</span>
                        <span className="card-tag">ATS Optimized</span>
                      </div>
                      <div className="tooltip-container">
                        <button className="tooltip-button" aria-label="More information">
                          <span className="tooltip-icon">ℹ️</span>
                        </button>
                        <div className="tooltip" role="tooltip">
                          <div className="tooltip-content">
                            <h4>Why This Works:</h4>
                            <p>{objective.why}</p>
                            <h4>Best For:</h4>
                            <p>{objective.bestFor}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="objective-content">
                      <p className="objective-text">{objective.template}</p>
                      <div className="objective-stats">
                        <span className="stat">✓ ATS-Friendly</span>
                        <span className="stat">✓ Professional Tone</span>
                        <span className="stat">✓ Industry Specific</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleCopy(objective.template, index)}
                      className={`copy-button ${copiedIndex === index ? 'copied' : ''}`}
                      aria-label={copiedIndex === index ? "Objective copied to clipboard" : "Copy objective to clipboard"}
                    >
                      <span className="copy-icon">{copiedIndex === index ? '✓' : '📋'}</span>
                      <span className="copy-text">
                        {copiedIndex === index ? 'Copied!' : 'Copy Objective'}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="usage-tips">
                <h3 className="usage-title">How to Use These Professional Objectives:</h3>
                <div className="tips-grid">
                  <div className="tip">
                    <div className="tip-icon">📄</div>
                    <div className="tip-content">
                      <h4 className="tip-title">Resume Placement</h4>
                      <p className="tip-description">Place at the top of your resume, just below contact information, for maximum impact.</p>
                    </div>
                  </div>
                  <div className="tip">
                    <div className="tip-icon">🎯</div>
                    <div className="tip-content">
                      <h4 className="tip-title">Customization</h4>
                      <p className="tip-description">Add specific skills, achievements, or company names to make it uniquely yours.</p>
                    </div>
                  </div>
                  <div className="tip">
                    <div className="tip-icon">🤖</div>
                    <div className="tip-content">
                      <h4 className="tip-title">ATS Optimization</h4>
                      <p className="tip-description">These objectives include keywords and formatting that help pass automated screening systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Long-Tail Keywords Section - GEO Optimization */}
          <section className="how-to-section">
            <h2 className="section-title">Common Questions About Resume Objectives</h2>
            <div className="how-to-steps" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {[
                "how to write a resume objective with no experience",
                "professional resume objective examples 2026",
                "what to write in objective on a resume",
                "resume objective for career change examples",
                "senior level resume objective statements",
                "ATS friendly resume objective generator",
                "entry level resume objective for fresh graduates",
                "executive resume objective samples"
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
            <h2 className="section-title" id="how-to-title">How It Works: 5-Step Professional Objective Creation</h2>
            <p className="section-subtitle">Follow these steps to create compelling, ATS-optimized objective statements in minutes</p>
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
            <p className="section-subtitle">Everything you need to know about creating professional resume objectives</p>
            <div className="faq-list">
              {FAQS.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === index ? null : index)}
                  aria-expanded={activeFaq === index}
                >
                  <div className="faq-question">
                    <h3>{faq.question}</h3>
                    <span className="faq-toggle">{activeFaq === index ? '−' : '+'}</span>
                  </div>
                  {activeFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                      <div className="faq-meta">Updated: {faq.date}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Reviews Section */}
          <section className="reviews-section" aria-labelledby="reviews-title">
            <h2 className="section-title" id="reviews-title">What Professionals Say About Our Objective Generator</h2>
            <p className="section-subtitle">Trusted by HR managers, career coaches, and professionals at all levels</p>
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
                      {review.verified && <span className="verified-badge">✓ Verified</span>}
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
                  <div className="review-footer">
                    <div className="review-date" itemProp="datePublished">
                      {review.date}
                    </div>
                    <div className="review-source">via Professional Resume Free</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Resources Section - Links Preserved */}
          <section className="resources-section" aria-labelledby="resources-title">
            <h2 className="section-title" id="resources-title">More Career Resources</h2>
            <p className="section-subtitle">Explore our complete suite of free professional tools</p>
            <div className="resources-grid">
              <a 
                href="/resume-templates" 
                className="resource-card"
                rel="nofollow"
              >
                <h3>Free Resume Templates</h3>
                <p>ATS-optimized resume templates for all industries and career levels.</p>
                <span className="resource-link">Explore Templates →</span>
              </a>
              <a 
                href="/free-cover-letter-generator" 
                className="resource-card"
                rel="nofollow"
              >
                <h3>Free Cover Letter Generator</h3>
                <p>Create professional cover letters for your job applications. </p>
                <span className="resource-link">Build Cover Letter →</span>
              </a>
              <a 
                href="/free-ats-resume-checker" 
                className="resource-card"
                rel="nofollow"
              >
                <h3>ATS Resume Checker</h3>
                <p>Test your resume's ATS compatibility and get optimization suggestions.</p>
                <span className="resource-link">Check Your Resume →</span>
              </a>
            </div>
          </section>

          {/* Final CTA */}
          <section className="cta-section">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Transform Your Job Applications?</h2>
              <p className="cta-subtitle">
                Join <strong>250,000+ professionals</strong> who've improved their interview rates with our free tools.
                Generate your professional objective statement now.
              </p>
              <button 
                onClick={generateObjectives}
                className="cta-button"
                aria-label="Start generating professional objective statements"
              >
                <span className="cta-button-text">Generate Your Free Objective Statement</span>
                <span className="cta-button-icon">→</span>
              </button>
              <div className="cta-guarantee">
                <span className="guarantee-item">✓ No Sign Up Required</span>
                <span className="guarantee-item">✓ 100% Free Forever</span>
                <span className="guarantee-item">✓ ATS Optimized</span>
                <span className="guarantee-item">✓ Mobile Friendly</span>
              </div>
            </div>
          </section>
        </main>

        {/* Build Info - Fixed hydration */}
        <div className="build-info">
          <p>Last updated: {safeSeoData.currentDate} • Build: {buildTime}</p>
        
        </div>

        {/* Hidden Metadata */}
        <div className="hidden">
          <span itemProp="dateModified">{safeSeoData.lastModifiedDate}</span>
          <span itemProp="softwareVersion">2026.1.0</span>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const reviewDates = REVIEWS.map(review => review.date);
  const faqDates = FAQS.map(faq => faq.date);

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
    // Revalidate every hour for fresh content
    revalidate: 3600,
  };
}

export default ResumeObjectiveGenerator;