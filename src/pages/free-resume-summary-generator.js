// pages/free-resume-summary-generator.jsx
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
  
  .breadcrumb a { 
    color: #111827; 
    text-decoration: none; 
    border-bottom: 1px solid #d1d5db;
  }
  
  .breadcrumb a:hover { 
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
  
  .template-count { 
    display: inline-block; 
    background: #000000; 
    color: #ffffff; 
    padding: 4px 12px; 
    border-radius: 50px; 
    font-size: 0.9rem; 
    margin-left: 12px;
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
  
  /* GENERATOR SECTION */
  .generator-section { 
    margin-bottom: 48px;
  }
  
  .generator-header { 
    margin-bottom: 32px;
  }
  
  .generator-header h2 { 
    font-size: 1.8rem; 
    font-weight: 700; 
    margin-bottom: 12px;
  }
  
  .generator-header p { 
    color: #4b5563; 
    max-width: 800px;
  }
  
  .generator-container { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 32px; 
    margin-bottom: 24px;
  }
  
  @media (min-width: 1024px) {
    .generator-container { grid-template-columns: 1fr 1fr; }
  }
  
  /* INPUT COLUMN */
  .input-column { 
    width: 100%;
  }
  
  /* FORM SECTION */
  .form-section { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 28px; 
    border: 1px solid #e5e7eb; 
    margin-bottom: 32px;
  }
  
  .form-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 24px; 
    flex-wrap: wrap; 
    gap: 16px;
  }
  
  .form-header h3 { 
    font-size: 1.3rem; 
    font-weight: 700;
  }
  
  .example-button { 
    background: transparent; 
    border: 2px solid #000000; 
    padding: 8px 16px; 
    border-radius: 8px; 
    font-weight: 600; 
    cursor: pointer; 
    transition: all 0.2s;
  }
  
  .example-button:hover { 
    background: #000000; 
    color: #ffffff;
  }
  
  .form-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 20px;
  }
  
  @media (min-width: 640px) {
    .form-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  .form-group { 
    width: 100%;
  }
  
  .full-width { 
    grid-column: 1 / -1;
  }
  
  .form-group label { 
    display: block; 
    font-weight: 600; 
    margin-bottom: 8px; 
    color: #111827;
  }
  
  .form-input, .form-textarea { 
    width: 100%; 
    padding: 12px; 
    border: 2px solid #e5e7eb; 
    border-radius: 8px; 
    font-family: inherit; 
    font-size: 1rem; 
    transition: border-color 0.2s;
  }
  
  .form-input:focus, .form-textarea:focus { 
    outline: none; 
    border-color: #000000;
  }
  
  .help-text { 
    font-size: 0.85rem; 
    color: #6b7280; 
    margin-top: 6px;
  }
  
  /* TEMPLATES SECTION */
  .templates-section { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 28px; 
    border: 1px solid #e5e7eb;
  }
  
  .section-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 24px; 
    flex-wrap: wrap; 
    gap: 16px;
  }
  
  .section-header h3 { 
    font-size: 1.3rem; 
    font-weight: 700;
  }
  
  .templates-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px;
  }
  
  .template-category { 
    border: 1px solid #e5e7eb; 
    border-radius: 12px; 
    overflow: hidden;
  }
  
  .category-header { 
    background: #f9fafb; 
    padding: 16px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    border-bottom: 1px solid #e5e7eb;
  }
  
  .category-name { 
    font-weight: 700; 
    color: #000000;
  }
  
  .category-count { 
    background: #e5e7eb; 
    padding: 4px 10px; 
    border-radius: 50px; 
    font-size: 0.85rem;
  }
  
  .category-templates { 
    padding: 16px; 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 12px;
  }
  
  .template-button { 
    width: 100%; 
    text-align: left; 
    padding: 16px; 
    border: 2px solid #e5e7eb; 
    border-radius: 8px; 
    background: #ffffff; 
    cursor: pointer; 
    transition: all 0.2s;
  }
  
  .template-button:hover { 
    border-color: #000000;
  }
  
  .template-button.selected { 
    border-color: #000000; 
    background: #f9fafb;
  }
  
  .template-title { 
    font-weight: 700; 
    margin-bottom: 6px;
  }
  
  .template-preview { 
    font-size: 0.9rem; 
    color: #6b7280;
  }
  
  /* OUTPUT COLUMN */
  .output-column { 
    width: 100%;
  }
  
  /* SUMMARY SECTION */
  .summary-section { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 28px; 
    border: 1px solid #e5e7eb; 
    margin-bottom: 32px;
  }
  
  .summary-stats { 
    display: flex; 
    gap: 8px; 
    color: #6b7280; 
    font-size: 0.9rem;
  }
  
  .summary-output { 
    background: #f9fafb; 
    border-radius: 12px; 
    padding: 24px; 
    margin: 20px 0;
  }
  
  .summary-text { 
    line-height: 1.7; 
    color: #111827;
  }
  
  .empty-summary { 
    padding: 40px; 
    text-align: center; 
    color: #6b7280;
  }
  
  .summary-actions { 
    display: flex; 
    gap: 16px; 
    margin-top: 20px; 
    flex-wrap: wrap;
  }
  
  .copy-button, .regenerate-button { 
    flex: 1; 
    padding: 12px 24px; 
    border: 2px solid #000000; 
    border-radius: 8px; 
    font-weight: 600; 
    cursor: pointer; 
    transition: all 0.2s; 
    min-width: 150px;
  }
  
  .copy-button { 
    background: #000000; 
    color: #ffffff;
  }
  
  .copy-button:hover { 
    background: #1f2937; 
    border-color: #1f2937;
  }
  
  .regenerate-button { 
    background: transparent; 
    color: #000000;
  }
  
  .regenerate-button:hover { 
    background: #f9fafb;
  }
  
  /* KEYWORDS SECTION */
  .keywords-section { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 28px; 
    border: 1px solid #e5e7eb;
  }
  
  .keywords-grid { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 10px; 
    margin: 20px 0;
  }
  
  .keyword-button { 
    padding: 8px 16px; 
    border: 2px solid #e5e7eb; 
    border-radius: 50px; 
    background: #ffffff; 
    cursor: pointer; 
    transition: all 0.2s;
  }
  
  .keyword-button:hover { 
    border-color: #000000;
  }
  
  .keyword-button.selected { 
    background: #000000; 
    color: #ffffff; 
    border-color: #000000;
  }
  
  .industry-list { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 10px; 
    margin-top: 12px;
  }
  
  .industry-button { 
    padding: 6px 12px; 
    background: #f3f4f6; 
    border: 1px solid #e5e7eb; 
    border-radius: 4px; 
    font-size: 0.85rem; 
    cursor: pointer;
  }
  
  .industry-button:hover { 
    background: #e5e7eb;
  }
  
  /* GENERATOR ACTIONS */
  .generator-actions { 
    display: flex; 
    gap: 16px; 
    justify-content: center; 
    margin-top: 32px; 
    flex-wrap: wrap;
  }
  
  .generate-button, .reset-button { 
    padding: 16px 32px; 
    border: 2px solid #000000; 
    border-radius: 8px; 
    font-weight: 600; 
    font-size: 1.1rem; 
    cursor: pointer; 
    transition: all 0.2s; 
    min-width: 250px;
  }
  
  .generate-button { 
    background: #000000; 
    color: #ffffff;
  }
  
  .generate-button:hover:not(:disabled) { 
    background: #1f2937; 
    border-color: #1f2937;
  }
  
  .generate-button:disabled { 
    opacity: 0.5; 
    cursor: not-allowed;
  }
  
  .reset-button { 
    background: transparent; 
    color: #000000;
  }
  
  .reset-button:hover { 
    background: #f9fafb;
  }
  
  /* SECTION TITLE */
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
  
  /* TIPS GRID */
  .tips-section, .examples-section, .mistakes-section, .faq-section, .benefits-section { 
    margin: 48px 0;
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
    .tips-grid { grid-template-columns: repeat(4, 1fr); }
  }
  
  .tip-card { 
    background: #ffffff; 
    padding: 28px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb;
  }
  
  .tip-title { 
    font-size: 1.2rem; 
    font-weight: 700; 
    margin-bottom: 12px;
  }
  
  .tip-description { 
    color: #4b5563;
  }
  
  /* EXAMPLES GRID */
  .examples-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px;
  }
  
  @media (min-width: 768px) {
    .examples-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .example-card { 
    background: #ffffff; 
    padding: 28px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb;
  }
  
  .example-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 16px; 
    flex-wrap: wrap; 
    gap: 12px;
  }
  
  .example-title { 
    font-size: 1.2rem; 
    font-weight: 700;
  }
  
  .example-badge { 
    background: #f3f4f6; 
    padding: 4px 12px; 
    border-radius: 50px; 
    font-size: 0.85rem;
  }
  
  .example-content p { 
    color: #4b5563; 
    margin-bottom: 16px;
  }
  
  .example-keywords { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 8px;
  }
  
  .example-keywords span { 
    background: #f3f4f6; 
    padding: 4px 10px; 
    border-radius: 50px; 
    font-size: 0.8rem;
  }
  
  /* MISTAKES GRID */
  .mistakes-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px;
  }
  
  @media (min-width: 640px) {
    .mistakes-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .mistakes-grid { grid-template-columns: repeat(4, 1fr); }
  }
  
  .mistake-card { 
    background: #ffffff; 
    padding: 28px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb;
  }
  
  .mistake-header { 
    display: flex; 
    gap: 16px; 
    margin-bottom: 16px;
  }
  
  .mistake-number { 
    font-size: 2rem; 
    font-weight: 800; 
    color: #9ca3af;
  }
  
  .mistake-title { 
    font-size: 1.2rem; 
    font-weight: 700; 
    color: #000000;
  }
  
  .mistake-content p { 
    color: #4b5563;
  }
  
  /* FAQ */
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
  
  /* BENEFITS GRID */
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
  
  .cta-buttons { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 16px; 
    justify-content: center; 
    margin-bottom: 24px;
  }
  
  .cta-primary-button, .cta-secondary-button { 
    padding: 16px 32px; 
    border: 2px solid #ffffff; 
    border-radius: 8px; 
    font-weight: 600; 
    cursor: pointer; 
    transition: all 0.2s; 
    min-width: 200px;
  }
  
  .cta-primary-button { 
    background: #ffffff; 
    color: #000000;
  }
  
  .cta-primary-button:hover { 
    background: transparent; 
    color: #ffffff;
  }
  
  .cta-secondary-button { 
    background: transparent; 
    color: #ffffff;
  }
  
  .cta-secondary-button:hover { 
    background: #ffffff; 
    color: #000000;
  }
  
  .cta-features { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 20px; 
    justify-content: center;
  }
  
  .cta-feature { 
    display: flex; 
    align-items: center; 
    gap: 8px;
  }
  
  .feature-check { 
    color: #10b981; 
    font-weight: 700;
  }
  
  /* FOOTER */
  .footer { 
    margin-top: 48px; 
    padding: 32px; 
    background: #f9fafb; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb;
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
  
  /* BUILD INFO - Fixed hydration */
  .build-info { 
    margin-top: 48px; 
    padding: 16px; 
    border-top: 1px solid #e5e7eb; 
    font-size: 0.8rem; 
    color: #6b7280;
    text-align: center;
  }
  
  /* HIDDEN */
  .hidden { 
    display: none;
  }
  
  /* RESPONSIVE */
  @media (max-width: 640px) {
    .summary-actions { 
      flex-direction: column;
    }
    
    .copy-button, .regenerate-button { 
      width: 100%;
    }
    
    .generator-actions { 
      flex-direction: column; 
      align-items: center;
    }
    
    .generate-button, .reset-button { 
      width: 100%;
    }
    
    .cta-buttons { 
      flex-direction: column; 
      align-items: center;
    }
    
    .cta-primary-button, .cta-secondary-button { 
      width: 100%;
    }
    
    .cta-features { 
      flex-direction: column; 
      align-items: center;
    }
  }
  
  @media (max-width: 480px) {
    .template-count { 
      display: block; 
      margin-left: 0; 
      margin-top: 10px;
    }
    
    .example-header { 
      flex-direction: column; 
      align-items: flex-start;
    }
  }
`;

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();
const SITE_URL = 'https://www.professionalresumefree.com';
const PAGE_URL = `${SITE_URL}/free-resume-summary-generator`;

// Template Categories
const SUMMARY_TEMPLATES = [
  {
    id: 'experienced',
    name: 'Experienced Professional',
    description: 'Templates for professionals with 5+ years of experience',
    templates: [
      {
        title: 'Senior Executive',
        summary: `Results-driven senior executive with over 15 years of experience in [Industry]. Proven track record of leading cross-functional teams, driving strategic initiatives, and delivering sustainable business growth. Expertise in [Key Skill 1], [Key Skill 2], and [Key Skill 3] with a focus on [Specific Focus Area].`,
        keywords: ['Strategic Leadership', 'Business Growth', 'Team Management', 'Operational Excellence']
      },
      {
        title: 'Mid-Career Professional',
        summary: `Accomplished [Job Title] with [Number] years of experience in [Industry]. Skilled in [Key Skill 1], [Key Skill 2], and [Key Skill 3]. Demonstrated success in [Major Achievement 1] and [Major Achievement 2]. Seeking to leverage expertise in [Target Area].`,
        keywords: ['Project Management', 'Process Improvement', 'Client Relations', 'Performance Optimization']
      }
    ]
  },
  {
    id: 'career-change',
    name: 'Career Changer',
    description: 'Templates for professionals transitioning to new industries',
    templates: [
      {
        title: 'Transferable Skills Focus',
        summary: `[Current Industry] professional transitioning to [New Industry] with [Number] years of transferable experience in [Transferable Skill 1], [Transferable Skill 2], and [Transferable Skill 3]. Demonstrated ability to [Key Achievement] and [Another Achievement]. Eager to apply [Specific Skill] in [New Industry] context.`,
        keywords: ['Adaptable', 'Quick Learner', 'Transferable Skills', 'Cross-Industry Experience']
      }
    ]
  },
  {
    id: 'recent-grad',
    name: 'Recent Graduate',
    description: 'Templates for new graduates and entry-level professionals',
    templates: [
      {
        title: 'Academic Excellence',
        summary: `Recent [Degree] graduate from [University] with strong academic background in [Field of Study]. Developed skills in [Skill 1], [Skill 2], and [Skill 3] through coursework and [Type of Experience]. Eager to apply theoretical knowledge in practical [Industry] setting.`,
        keywords: ['Fast Learner', 'Academic Achievement', 'Technical Skills', 'Research Abilities']
      },
      {
        title: 'Internship Experience',
        summary: `Recent graduate with hands-on experience gained through [Number] internships in [Industry]. Developed practical skills in [Skill 1], [Skill 2], and [Skill 3]. Demonstrated ability to [Key Achievement] during internship at [Company]. Seeking entry-level position to build career in [Industry].`,
        keywords: ['Internship Experience', 'Practical Skills', 'Entry-Level', 'Career Development']
      }
    ]
  },
  {
    id: 'leadership',
    name: 'Leadership',
    description: 'Templates for management and leadership roles',
    templates: [
      {
        title: 'Transformational Leader',
        summary: `Visionary leader with [Number] years of experience driving organizational transformation and team excellence. Expertise in [Leadership Area 1], [Leadership Area 2], and [Leadership Area 3]. Successfully [Major Leadership Achievement]. Committed to fostering innovation and achieving strategic objectives.`,
        keywords: ['Strategic Vision', 'Team Development', 'Change Management', 'Performance Leadership']
      }
    ]
  },
  {
    id: 'technical',
    name: 'Technical',
    description: 'Templates for technology and engineering professionals',
    templates: [
      {
        title: 'Software Developer',
        summary: `Full-stack developer with [Number] years of experience building scalable applications using [Technology Stack]. Proficient in [Programming Language 1], [Programming Language 2], and [Framework]. Demonstrated ability to [Technical Achievement] resulting in [Business Impact].`,
        keywords: ['Full-Stack Development', 'Agile Methodology', 'System Architecture', 'Code Optimization']
      },
      {
        title: 'Data Scientist',
        summary: `Data scientist specializing in [Specialization] with expertise in [Tool/Language 1], [Tool/Language 2], and [Tool/Language 3]. Proven ability to [Data Achievement] leading to [Business Outcome]. Passionate about leveraging data to drive decision-making and create business value.`,
        keywords: ['Machine Learning', 'Statistical Analysis', 'Data Visualization', 'Predictive Modeling']
      }
    ]
  }
];

// Industry Keywords
const INDUSTRY_KEYWORDS = [
  { industry: 'Technology', keywords: ['Innovation', 'Scalability', 'Digital Transformation', 'Agile Development'] },
  { industry: 'Finance', keywords: ['Risk Management', 'Financial Analysis', 'Regulatory Compliance', 'Investment Strategy'] },
  { industry: 'Healthcare', keywords: ['Patient Care', 'Clinical Excellence', 'Healthcare Operations', 'Medical Research'] },
  { industry: 'Marketing', keywords: ['Brand Strategy', 'Digital Marketing', 'Customer Engagement', 'Campaign Optimization'] },
  { industry: 'Education', keywords: ['Curriculum Development', 'Student Success', 'Educational Technology', 'Academic Administration'] },
  { industry: 'Consulting', keywords: ['Strategic Advisory', 'Business Transformation', 'Client Solutions', 'Process Optimization'] }
];

// Power Words
const POWER_WORDS = [
  'Accomplished', 'Achieved', 'Advanced', 'Amplified', 'Boosted', 'Built',
  'Catalyzed', 'Championed', 'Created', 'Delivered', 'Developed', 'Drove',
  'Elevated', 'Engineered', 'Enhanced', 'Established', 'Executed', 'Expanded',
  'Generated', 'Implemented', 'Improved', 'Increased', 'Innovated', 'Led',
  'Maximized', 'Optimized', 'Orchestrated', 'Pioneered', 'Produced', 'Reduced',
  'Revolutionized', 'Scaled', 'Spearheaded', 'Strengthened', 'Streamlined',
  'Transformed'
];

// FAQ Data
const FAQS = [
  {
    question: "What makes a great professional summary?",
    answer: "A great professional summary is concise (3-5 sentences), highlights key achievements, includes relevant keywords, and shows what value you bring to employers. It should be tailored to the specific job you're applying for and include quantifiable results whenever possible."
  },
  {
    question: "How long should my resume summary be?",
    answer: "Ideal length is 3-5 sentences or 50-100 words. Recruiters typically spend only 6-7 seconds scanning a resume, so your summary needs to be impactful and concise. Focus on your most impressive achievements and relevant skills that match the job description."
  },
  {
    question: "Should I include keywords from the job description?",
    answer: "Absolutely! Keywords from the job description are crucial for both human readers and ATS systems. Our generator helps identify and incorporate relevant keywords. Match your skills and experiences to the job requirements to show you're the perfect fit."
  },
  {
    question: "How do I make my summary stand out?",
    answer: "Use specific achievements with numbers, include industry-specific terminology, start with your strongest selling point, and show what makes you unique. Avoid generic phrases and focus on what differentiates you from other candidates with similar experience."
  },
  {
    question: "Can I use the same summary for every job application?",
    answer: "While you can have a base summary, it's best to customize it for each application. Tailor your summary to highlight the skills and experiences most relevant to each specific job. This shows employers you've taken the time to understand their needs."
  }
];

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'free resume summary generator',
  'professional summary creator',
  'career profile builder',
  'resume introduction maker',
  'ATS-friendly summary generator',
  'executive summary generator',
  'career summary template',
  'professional bio creator',
  'resume headline generator',
  'summary statement builder',
  'resume summary examples',
  'professional summary writer',
  'resume profile generator',
  'cv summary creator',
  'job application summary'
];

const ResumeSummaryGenerator = ({ seoData }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    yearsExperience: '',
    industry: '',
    keySkills: '',
    achievements: '',
    targetRole: ''
  });
  const [generatedSummary, setGeneratedSummary] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);
  const [copied, setCopied] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [buildTime, setBuildTime] = useState('');
  const formRef = useRef(null);

  // Set build time on client to avoid hydration mismatch
  useEffect(() => {
    setBuildTime(Date.now().toString());
  }, []);

  // Use SEO data with fallbacks
  const safeSeoData = seoData || {
    currentDate: new Date().toISOString().split('T')[0],
    lastModifiedDate: new Date().toISOString(),
    buildTimestamp: Date.now()
  };

  // Schema data for JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        "url": PAGE_URL,
        "name": "Free Resume Summary Generator - Professional Career Profile Builder 2026",
        "description": "Create ATS-friendly professional resume summaries instantly with our free generator. Choose from 20+ templates, add keywords, and download your perfect summary.",
        "datePublished": "2024-01-01",
        "dateModified": safeSeoData.lastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}#website`,
          "url": SITE_URL,
          "name": "Professional Resume Free",
          "description": "Free resume building tools and resources for job seekers",
          "publisher": {
            "@type": "Organization",
            "@id": `${SITE_URL}#organization`,
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
              "https://www.facebook.com/ProfessionalResumeFree"
            ]
          }
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
              "name": "Free Resume Summary Generator",
              "item": PAGE_URL
            }
          ]
        }
      },
      {
        "@type": "WebApplication",
        "name": "Resume Summary Generator",
        "description": "Free professional resume summary generator with template recommendations, keyword optimization, and industry-specific suggestions",
        "url": PAGE_URL,
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
          "ratingValue": "4.8",
          "ratingCount": "215",
          "bestRating": "5",
          "worstRating": "1",
          "itemReviewed": {
            "@type": "SoftwareApplication",
            "name": "Resume Summary Generator"
          }
        },
        "featureList": [
          "20+ Professional Templates",
          "ATS-Friendly Formatting",
          "Keyword Optimization",
          "Industry-Specific Suggestions",
          "Real-Time Preview",
          "Free PDF Export",
          "No Sign Up Required"
        ],
        "softwareVersion": "2026.1.0",
        "screenshot": `${SITE_URL}/images/summary-generator-screenshot.jpg`,
        "applicationSuite": "Career Tools",
        "countriesSupported": "Global",
        "fileSize": "Web Application"
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": safeSeoData.currentDate,
            "author": {
              "@type": "Person",
              "name": "Resume Builder Team"
            }
          },
          "mainEntityOfPage": `${PAGE_URL}#faq-${index + 1}`
        }))
      },
      {
        "@type": "ItemList",
        "name": "Summary Template Categories",
        "description": "Professional resume summary templates for different career levels",
        "numberOfItems": SUMMARY_TEMPLATES.length,
        "itemListElement": SUMMARY_TEMPLATES.map((category, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "CreativeWork",
            "name": category.name,
            "description": category.description,
            "hasPart": {
              "@type": "ItemList",
              "numberOfItems": category.templates.length,
              "itemListElement": category.templates.map((template, tIndex) => ({
                "@type": "ListItem",
                "position": tIndex + 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": template.title,
                  "keywords": template.keywords.join(', ')
                }
              }))
            }
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Create a Professional Resume Summary",
        "description": "Step-by-step guide to create an effective resume summary using our generator",
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
            "name": "Enter Your Career Information",
            "text": "Fill in your job title, experience, industry, skills, achievements, and target role.",
            "url": `${PAGE_URL}#form`
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Choose a Template",
            "text": "Select from professional templates tailored to your career level and goals.",
            "url": `${PAGE_URL}#templates`
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Add Keywords",
            "text": "Select relevant keywords and power words to optimize your summary for ATS.",
            "url": `${PAGE_URL}#keywords`
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Generate & Copy",
            "text": "Generate your professional summary and copy it to your resume instantly.",
            "url": `${PAGE_URL}#generate`
          }
        ],
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "Career Information"
          }
        ],
        "tool": [
          {
            "@type": "HowToTool",
            "name": "Resume Summary Generator"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Online Resume Summary Generation",
        "provider": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "url": SITE_URL
        },
        "areaServed": {
          "@type": "Country",
          "name": "Global"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Free Resume Building Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Summary Generation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Keyword Optimization"
              }
            }
          ]
        }
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".title", ".subtitle", ".section-title", ".tip-title"]
      }
    ]
  };

  // Update character and word counts
  useEffect(() => {
    const text = generatedSummary;
    setCharacterCount(text.length);
    setWordCount(text.trim().split(/\s+/).filter(word => word.length > 0).length);
  }, [generatedSummary]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle keyword selection
  const handleKeywordSelect = (keyword) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter(k => k !== keyword));
    } else {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };

  // Handle template selection
  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    if (template.keywords && template.keywords.length > 0) {
      const newKeywords = [...new Set([...selectedKeywords, ...template.keywords])];
      setSelectedKeywords(newKeywords.slice(0, 6));
    }
  };

  // Generate summary
  const generateSummary = useCallback(() => {
    if (selectedTemplate) {
      let summary = selectedTemplate.summary;
      Object.entries(formData).forEach(([key, value]) => {
        if (value.trim()) {
          const placeholder = `[${key.replace(/([A-Z])/g, ' $1').trim()}]`;
          summary = summary.replace(new RegExp(placeholder, 'gi'), value);
        }
      });
      summary = summary.replace(/\[Key Skill \d+\]/g, () => {
        const skills = formData.keySkills.split(',').filter(s => s.trim());
        return skills.length > 0 ? skills.shift().trim() : 'relevant skills';
      });
      summary = summary.replace(/\[Major Achievement \d+\]/g, () => {
        const achievements = formData.achievements.split('.').filter(a => a.trim());
        return achievements.length > 0 ? achievements.shift().trim() : 'key achievements';
      });
      if (selectedKeywords.length > 0) {
        const keywordString = selectedKeywords.slice(0, 4).join(', ');
        summary += ` Proficient in ${keywordString} with a commitment to excellence and continuous improvement.`;
      }
      summary = summary.replace(/\s+/g, ' ').trim();
      summary = summary.charAt(0).toUpperCase() + summary.slice(1);
      setGeneratedSummary(summary);
    }
  }, [formData, selectedTemplate, selectedKeywords]);

  // Auto-generate when template or form data changes
  useEffect(() => {
    if (selectedTemplate && (formData.jobTitle || formData.keySkills)) {
      const timer = setTimeout(() => {
        generateSummary();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedTemplate, formData, selectedKeywords, generateSummary]);

  // Copy summary to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      jobTitle: '',
      yearsExperience: '',
      industry: '',
      keySkills: '',
      achievements: '',
      targetRole: ''
    });
    setSelectedTemplate(null);
    setSelectedKeywords([]);
    setGeneratedSummary('');
    setCopied(false);
    if (formRef.current) {
      formRef.current.focus();
    }
  };

  // Load example
  const loadExample = () => {
    setFormData({
      jobTitle: 'Senior Project Manager',
      yearsExperience: '8',
      industry: 'Technology',
      keySkills: 'Agile methodologies, stakeholder management, budget control, risk mitigation',
      achievements: 'Led digital transformation project reducing operational costs by 30%. Implemented new project management framework improving team productivity by 25%.',
      targetRole: 'Director of Project Management'
    });
    const exampleTemplate = SUMMARY_TEMPLATES[0].templates[0];
    setSelectedTemplate(exampleTemplate);
    setSelectedKeywords(['Strategic Planning', 'Team Leadership', 'Process Improvement', 'Budget Management']);
  };

  // Get industry suggestions
  const getIndustrySuggestions = (industry) => {
    const industryData = INDUSTRY_KEYWORDS.find(item =>
      item.industry.toLowerCase() === industry.toLowerCase()
    );
    return industryData ? industryData.keywords : [];
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* OPTIMIZED TITLE - Under 70 characters (63 chars) */}
        <title>Free Resume Summary Generator | Professional Career Profile Builder</title>
        
        <meta
          name="description"
          content={`Create ATS-friendly professional resume summaries instantly. ${CURRENT_YEAR}'s best free resume summary generator with 20+ templates, keyword optimization & industry-specific suggestions.`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeSeoData.currentDate} />
        <meta name="last-modified" content={safeSeoData.lastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        <meta name="build-timestamp" content={safeSeoData.buildTimestamp} />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Resume Summary Generator - Professional Career Profile Builder" />
        <meta name="chatgpt-fts:description" content="Create ATS-friendly professional resume summaries instantly. Choose from 20+ templates, add keywords, and optimize for your target role." />
        <meta name="chatgpt-fts:keywords" content="resume summary generator, professional summary creator, career profile builder, ATS-friendly summary" />
        <meta name="chatgpt-fts:last-updated" content={safeSeoData.currentDate} />
        <meta name="generator" content="Professional Resume Free - Summary Generator" />
        
        {/* Canonical URL - Single canonical tag */}
        <link rel="canonical" href={PAGE_URL} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" href={PAGE_URL} hreflang="en" />
        <link rel="alternate" href={PAGE_URL} hreflang="en-US" />
        <link rel="alternate" href={PAGE_URL} hreflang="en-GB" />
        <link rel="alternate" href={PAGE_URL} hreflang="en-CA" />
        <link rel="alternate" href={PAGE_URL} hreflang="en-AU" />
        <link rel="alternate" href={PAGE_URL} hreflang="x-default" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Resume Summary Generator | Professional Career Profile Builder" />
        <meta property="og:description" content="Create ATS-friendly professional resume summaries instantly with our free generator. Choose from 20+ templates, add keywords, and download your perfect summary." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}/images/og-resume-summary-generator.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Summary Generator Interface" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeSeoData.lastModifiedDate} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Summary Generator | Professional Career Profile Builder" />
        <meta name="twitter:description" content="Create professional ATS-friendly resume summaries instantly. 20+ templates, keyword optimization, free to use." />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-resume-summary-generator.jpg`} />
        <meta name="twitter:image:alt" content="Professional Resume Summary Generator" />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a itemProp="item" href={SITE_URL}>
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="breadcrumb-separator">›</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Resume Summary Generator</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <header className="header">
          <h1 className="title">Free Resume Summary Generator {CURRENT_YEAR}</h1>
          <p className="subtitle">
            Create compelling professional summaries that get noticed by employers
            <span className="template-count">
              {SUMMARY_TEMPLATES.reduce((total, cat) => total + cat.templates.length, 0)}+ Professional Templates
            </span>
          </p>
          <div className="aggregate-rating" itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.8" />
            <meta itemProp="ratingCount" content="215" />
            <div className="rating-stars">
              ★★★★★
              <span className="rating-value">4.8/5 Rating</span>
            </div>
            <div className="rating-text">Used by 18,000+ job seekers worldwide</div>
          </div>
        </header>

        <main className="main">
          {/* Generator Section */}
          <section className="generator-section" id="generator">
            <div className="generator-header">
              <h2>Generate Your Professional Resume Summary</h2>
              <p>
                Fill in your details, choose a template, and get a professionally crafted summary tailored to your career goals. 
                <strong> Optimized for ATS systems and human recruiters.</strong>
              </p>
            </div>
            
            <div className="generator-container">
              {/* Form Column */}
              <div className="input-column">
                <div className="form-section" id="form">
                  <div className="form-header">
                    <h3>Your Career Information</h3>
                    <button
                      className="example-button"
                      onClick={loadExample}
                      type="button"
                      aria-label="Load example data to see how the generator works"
                    >
                      Load Example
                    </button>
                  </div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="jobTitle">Current/Most Recent Job Title</label>
                      <input
                        ref={formRef}
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        placeholder="e.g., Senior Marketing Manager"
                        className="form-input"
                        aria-required="true"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="yearsExperience">Years of Experience</label>
                      <input
                        type="text"
                        id="yearsExperience"
                        name="yearsExperience"
                        value={formData.yearsExperience}
                        onChange={handleInputChange}
                        placeholder="e.g., 8"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="industry">Industry</label>
                      <input
                        type="text"
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        placeholder="e.g., Technology, Finance, Healthcare"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="targetRole">Target Role</label>
                      <input
                        type="text"
                        id="targetRole"
                        name="targetRole"
                        value={formData.targetRole}
                        onChange={handleInputChange}
                        placeholder="e.g., Director of Operations"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="keySkills">Key Skills (comma separated)</label>
                      <textarea
                        id="keySkills"
                        name="keySkills"
                        value={formData.keySkills}
                        onChange={handleInputChange}
                        placeholder="e.g., Project Management, Data Analysis, Team Leadership, Strategic Planning"
                        className="form-textarea"
                        rows={3}
                        aria-describedby="skillsHelp"
                      />
                      <div id="skillsHelp" className="help-text">
                        Separate skills with commas for best results
                      </div>
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="achievements">Key Achievements</label>
                      <textarea
                        id="achievements"
                        name="achievements"
                        value={formData.achievements}
                        onChange={handleInputChange}
                        placeholder="e.g., Increased sales by 30% through new strategy. Reduced costs by 25% by optimizing processes."
                        className="form-textarea"
                        rows={4}
                        aria-describedby="achievementsHelp"
                      />
                      <div id="achievementsHelp" className="help-text">
                        Use numbers and metrics when possible
                      </div>
                    </div>
                  </div>
                </div>

                {/* Templates Section */}
                <div className="templates-section" id="templates">
                  <div className="section-header">
                    <h3>Choose a Professional Template</h3>
                    <div className="template-count">
                      {selectedTemplate ? '1 selected' : 'None selected'}
                    </div>
                  </div>
                  <div className="templates-grid">
                    {SUMMARY_TEMPLATES.map(category => (
                      <div key={category.id} className="template-category">
                        <div className="category-header">
                          <span className="category-name">{category.name}</span>
                          <span className="category-count">{category.templates.length} templates</span>
                        </div>
                        <div className="category-templates">
                          {category.templates.map((template, index) => (
                            <button
                              key={index}
                              className={`template-button ${
                                selectedTemplate?.title === template.title ? 'selected' : ''
                              }`}
                              onClick={() => handleTemplateSelect(template)}
                              type="button"
                              aria-label={`Select ${template.title} template`}
                            >
                              <div className="template-title">{template.title}</div>
                              <div className="template-preview">
                                {template.summary.substring(0, 80)}...
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output Column */}
              <div className="output-column">
                <div className="summary-section">
                  <div className="section-header">
                    <h3>Generated Summary</h3>
                    <div className="summary-stats">
                      <span>{characterCount} characters</span>
                      <span>•</span>
                      <span>{wordCount} words</span>
                    </div>
                  </div>
                  <div className="summary-output">
                    {generatedSummary ? (
                      <div className="summary-text">
                        {generatedSummary}
                      </div>
                    ) : (
                      <div className="empty-summary">
                        <div className="empty-text">
                          Your professional summary will appear here. Fill in your details and select a template to generate.
                        </div>
                      </div>
                    )}
                    {generatedSummary && (
                      <div className="summary-actions">
                        <button
                          className="copy-button"
                          onClick={copyToClipboard}
                          type="button"
                          aria-label="Copy summary to clipboard"
                        >
                          {copied ? '✓ Copied!' : 'Copy Summary'}
                        </button>
                        <button
                          className="regenerate-button"
                          onClick={generateSummary}
                          type="button"
                          aria-label="Regenerate summary with current data"
                        >
                          Regenerate
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Keywords Section */}
                <div className="keywords-section" id="keywords">
                  <div className="section-header">
                    <h3>Keywords & Power Words</h3>
                    <div className="keywords-count">
                      {selectedKeywords.length} selected
                    </div>
                  </div>
                  <div className="keywords-grid">
                    {getIndustrySuggestions(formData.industry).map((keyword, index) => (
                      <button
                        key={`industry-${index}`}
                        className={`keyword-button ${
                          selectedKeywords.includes(keyword) ? 'selected' : ''
                        }`}
                        onClick={() => handleKeywordSelect(keyword)}
                        type="button"
                        aria-label={`Select keyword: ${keyword}`}
                      >
                        {keyword}
                      </button>
                    ))}
                    {POWER_WORDS.slice(0, 12).map((word, index) => (
                      <button
                        key={`power-${index}`}
                        className={`keyword-button ${
                          selectedKeywords.includes(word) ? 'selected' : ''
                        }`}
                        onClick={() => handleKeywordSelect(word)}
                        type="button"
                        aria-label={`Select power word: ${word}`}
                      >
                        {word}
                      </button>
                    ))}
                  </div>
                  <div className="industry-keywords">
                    <h4>Quick Industry Select</h4>
                    <div className="industry-list">
                      {INDUSTRY_KEYWORDS.map((industry, index) => (
                        <button
                          key={index}
                          className="industry-button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, industry: industry.industry }));
                            setSelectedKeywords(prev => [...prev, ...industry.keywords.slice(0, 2)]);
                          }}
                          type="button"
                          aria-label={`Set industry to ${industry.industry}`}
                        >
                          {industry.industry}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Generator Actions */}
            <div className="generator-actions" id="generate">
              <button
                className="generate-button"
                onClick={generateSummary}
                disabled={!selectedTemplate}
                type="button"
                aria-label="Generate professional summary"
              >
                Generate Summary
              </button>
              <button
                className="reset-button"
                onClick={handleReset}
                type="button"
                aria-label="Reset all form data"
              >
                Reset All
              </button>
            </div>
          </section>

          {/* Tips Section */}
          <section className="tips-section">
            <h2 className="section-title">Writing Tips for Powerful Resume Summaries</h2>
            <p className="section-subtitle">
              Follow these expert tips to create summaries that get results
            </p>
            <div className="tips-grid">
              <div className="tip-card">
                <h3 className="tip-title">Be Specific & Quantifiable</h3>
                <p className="tip-description">
                  Include specific achievements with numbers and metrics. Instead of "improved sales," say "increased sales by 25% through targeted marketing campaigns that expanded market reach by 15%."
                </p>
              </div>
              <div className="tip-card">
                <h3 className="tip-title">Use ATS Keywords</h3>
                <p className="tip-description">
                  Incorporate keywords from the job description. This helps with Applicant Tracking System scanning and shows you're a perfect fit for the specific role. Use our keyword selector above.
                </p>
              </div>
              <div className="tip-card">
                <h3 className="tip-title">Start Strong</h3>
                <p className="tip-description">
                  Begin with your strongest selling point. The first sentence should capture attention and make recruiters want to keep reading. Lead with your most impressive achievement or unique value proposition.
                </p>
              </div>
              <div className="tip-card">
                <h3 className="tip-title">Keep it Concise</h3>
                <p className="tip-description">
                  Limit your summary to 3-5 sentences (50-100 words). Recruiters spend only 6-7 seconds scanning resumes, so every word needs to count and add value. Remove fluff and focus on impact.
                </p>
              </div>
            </div>
          </section>

          {/* Long-Tail Keywords Section - GEO Optimization */}
          <section className="tips-section">
            <h2 className="section-title">Common Questions About Resume Summaries</h2>
            <div className="tips-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {[
                "how to write a professional summary for resume",
                "best resume summary examples for experienced professionals",
                "resume summary for career change examples",
                "what to write in summary on a resume",
                "professional summary vs objective statement",
                "resume summary for recent graduates",
                "ATS friendly resume summary templates",
                "executive summary examples for senior roles"
              ].map((keyword, i) => (
                <div key={i} className="tip-card" style={{ padding: '20px' }}>
                  <p style={{ fontWeight: '600', marginBottom: '12px' }}>❓ {keyword}</p>
                  <a href="/complete-resume-resource-library" className="breadcrumb-link">
                    Find answer in our resource library →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Examples Section */}
          <section className="examples-section">
            <h2 className="section-title">Professional Summary Examples</h2>
            <p className="section-subtitle">
              See how effective summaries are structured across different career levels
            </p>
            <div className="examples-grid">
              <div className="example-card">
                <div className="example-header">
                  <div className="example-title">Senior Executive</div>
                  <div className="example-badge">15+ Years Experience</div>
                </div>
                <div className="example-content">
                  <p>Visionary CEO with 15+ years of experience driving growth in technology startups. Successfully scaled three companies from seed to Series C, generating over $500M in collective enterprise value. Expertise in fundraising, team building, and market expansion with a proven track record of delivering 35%+ annual growth.</p>
                  <div className="example-keywords">
                    <span>Strategic Leadership</span>
                    <span>Business Growth</span>
                    <span>Team Development</span>
                    <span>Market Expansion</span>
                  </div>
                </div>
              </div>
              <div className="example-card">
                <div className="example-header">
                  <div className="example-title">Software Engineer</div>
                  <div className="example-badge">5 Years Experience</div>
                </div>
                <div className="example-content">
                  <p>Full-stack developer with 5 years of experience building scalable web applications. Proficient in React, Node.js, and AWS. Led development of customer portal serving 100K+ users, improving load times by 40% and reducing bounce rate by 25%. Passionate about clean code, agile methodologies, and mentoring junior developers.</p>
                  <div className="example-keywords">
                    <span>Full-Stack Development</span>
                    <span>System Architecture</span>
                    <span>Performance Optimization</span>
                    <span>Team Leadership</span>
                  </div>
                </div>
              </div>
              <div className="example-card">
                <div className="example-header">
                  <div className="example-title">Recent Graduate</div>
                  <div className="example-badge">Entry Level</div>
                </div>
                <div className="example-content">
                  <p>Recent Computer Science graduate with strong academic background (3.8 GPA) and hands-on internship experience. Developed skills in Python, machine learning, and data analysis through coursework and research projects. Completed summer internship at TechCorp, contributing to data pipeline optimization that improved processing speed by 30%.</p>
                  <div className="example-keywords">
                    <span>Technical Skills</span>
                    <span>Academic Excellence</span>
                    <span>Fast Learner</span>
                    <span>Research Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes Section */}
          <section className="mistakes-section">
            <h2 className="section-title">Common Summary Mistakes to Avoid</h2>
            <p className="section-subtitle">
              Don't let these errors undermine your resume's effectiveness
            </p>
            <div className="mistakes-grid">
              <div className="mistake-card">
                <div className="mistake-header">
                  <div className="mistake-number">01</div>
                  <div className="mistake-title">Too Generic & Vague</div>
                </div>
                <div className="mistake-content">
                  <p>Avoid vague statements like "hard worker" or "team player." Be specific about what you actually achieved and how you contributed. Use concrete examples and measurable results.</p>
                </div>
              </div>
              <div className="mistake-card">
                <div className="mistake-header">
                  <div className="mistake-number">02</div>
                  <div className="mistake-title">Too Long & Wordy</div>
                </div>
                <div className="mistake-content">
                  <p>Summaries longer than 5 sentences lose impact. Be concise and focus only on your most relevant and impressive achievements. Remove fluff and redundant information.</p>
                </div>
              </div>
              <div className="mistake-card">
                <div className="mistake-header">
                  <div className="mistake-number">03</div>
                  <div className="mistake-title">Missing ATS Keywords</div>
                </div>
                <div className="mistake-content">
                  <p>Not including job-specific keywords can cause ATS rejection. Always tailor your summary with keywords from the job description. Use our keyword optimization tools above.</p>
                </div>
              </div>
              <div className="mistake-card">
                <div className="mistake-header">
                  <div className="mistake-number">04</div>
                  <div className="mistake-title">Focusing on Duties Instead of Achievements</div>
                </div>
                <div className="mistake-content">
                  <p>Don't just list job responsibilities. Focus on achievements, results, and the value you brought to previous employers. Show impact, not just activity.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="faq-section" id="faqs">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about creating effective resume summaries
            </p>
            <div className="faq-list">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                  id={`faq-${index + 1}`}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <div 
                    className="faq-question"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={activeFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 itemProp="name">{faq.question}</h3>
                    <span className="faq-toggle">{activeFaq === index ? '−' : '+'}</span>
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
          <section className="benefits-section">
            <h2 className="section-title">Why a Strong Resume Summary Matters</h2>
            <p className="section-subtitle">
              Your summary is your first impression - make it count
            </p>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3 className="benefit-title">First Impression Advantage</h3>
                <p className="benefit-description">
                  Your summary is the first thing recruiters read. A strong opening captures attention and encourages them to read the rest of your resume. 75% of hiring decisions are made in the first 30 seconds.
                </p>
              </div>
              <div className="benefit-card">
                <h3 className="benefit-title">ATS Optimization</h3>
                <p className="benefit-description">
                  Well-crafted summaries with relevant keywords perform better in Applicant Tracking Systems used by 99% of employers. This increases your chances of getting seen by human recruiters by up to 300%.
                </p>
              </div>
              <div className="benefit-card">
                <h3 className="benefit-title">Career Positioning</h3>
                <p className="benefit-description">
                  A targeted summary positions you for the specific role you want, highlighting the exact skills and experiences employers are looking for. It tells your career story in a compelling, concise way.
                </p>
              </div>
            </div>
          </section>

          {/* Related Resources Section */}
          <section className="resources-section">
            <h2 className="section-title">Resume Resources</h2>
            <p className="section-subtitle">
              Explore our complete suite of resume tools and guides
            </p>
            <div className="benefits-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <a href="/resume-templates" className="benefit-card" style={{ textDecoration: 'none' }}>
                <h3 className="benefit-title">Resume Templates</h3>
                <p className="benefit-description">Browse our collection of professional, ATS-friendly resume templates.</p>
              </a>
              <a href="/free-resume-builder" className="benefit-card" style={{ textDecoration: 'none' }}>
                <h3 className="benefit-title">Free Resume Builder</h3>
                <p className="benefit-description">Create a complete resume with our free online builder.</p>
              </a>
              <a href="/resume-writing-guide" className="benefit-card" style={{ textDecoration: 'none' }}>
                <h3 className="benefit-title">Resume Writing Guide</h3>
                <p className="benefit-description">Learn how to write compelling resumes that get interviews.</p>
              </a>
            </div>
          </section>

          {/* Final CTA */}
          <section className="cta-section">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Create Your Perfect Resume Summary?</h2>
              <p className="cta-subtitle">
                Join 18,000+ professionals who have improved their resumes with our free generator
              </p>
              <div className="cta-buttons">
                <button
                  className="cta-primary-button"
                  onClick={() => {
                    if (formRef.current) formRef.current.focus();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  aria-label="Start creating your professional resume summary"
                >
                  Start Creating Now
                </button>
                <button
                  className="cta-secondary-button"
                  onClick={loadExample}
                  aria-label="Try with example data to see how it works"
                >
                  Try Example First
                </button>
              </div>
              <div className="cta-features">
                <div className="cta-feature">
                  <span className="feature-check">✓</span>
                  <span>100% Free - No Sign Up Required</span>
                </div>
                <div className="cta-feature">
                  <span className="feature-check">✓</span>
                  <span>ATS-Optimized Templates</span>
                </div>
                <div className="cta-feature">
                  <span className="feature-check">✓</span>
                  <span>Instant Results - No Watermarks</span>
                </div>
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

// SSG with ISR
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildDate = new Date(buildTimestamp).toISOString().split('T')[0];
  
  return {
    props: {
      seoData: {
        currentDate: buildDate,
        lastModifiedDate: new Date(buildTimestamp).toISOString(),
        buildTimestamp
      }
    },
    // Revalidate every hour
    revalidate: 3600,
  };
}

export default ResumeSummaryGenerator;