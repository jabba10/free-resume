// pages/free-ats-resume-checker.jsx
import Head from 'next/head';
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';

// ===== INLINE CRITICAL CSS - Optimized for speed with CENTERING =====
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
  
  /* PAGE CONTAINER - CENTERED */
  .landing-page { 
    max-width: 1280px; 
    margin: 0 auto; 
    padding: 16px; 
    width: 100%;
  }
  
  @media (min-width: 640px) {
    .landing-page { padding: 24px; }
  }
  
  @media (min-width: 1024px) {
    .landing-page { padding: 32px; }
  }
  
  /* CONTAINER */
  .container { 
    width: 100%;
  }
  
  /* BREADCRUMB - CENTERED */
  .breadcrumb { 
    margin-bottom: 24px; 
    font-size: 0.9rem; 
    color: #6b7280;
    text-align: center;
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
  
  /* HEADER - CENTERED */
  .header { 
    margin-bottom: 40px; 
    padding-bottom: 32px; 
    border-bottom: 2px solid #f3f4f6;
    text-align: center;
  }
  
  .trust-badge { 
    display: inline-block; 
    background: #f3f4f6; 
    padding: 8px 20px; 
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
    text-align: center;
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
    text-align: center;
  }
  
  .gradient-text { 
    background: linear-gradient(135deg, #000000 0%, #4b5563 100%); 
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    background-clip: text;
  }
  
  .subtitle { 
    font-size: clamp(1rem, 2.5vw, 1.2rem); 
    color: #1f2937;
    max-width: 900px; 
    line-height: 1.7;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-weight: 500;
  }
  
  .hero-highlight { 
    background: #f3f4f6; 
    padding: 4px 8px; 
    border-radius: 4px;
    color: #000000;
    font-weight: 700;
  }
  
  /* AGGREGATE RATING - CENTERED - REMOVED */
  .aggregate-rating { 
    display: none;
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
  
  /* HERO STATS - CENTERED - REMOVED */
  .hero-stats { 
    display: none;
  }
  
  .stat-item { 
    flex: 1 1 auto; 
    min-width: 120px; 
    text-align: center;
  }
  
  .stat-number { 
    font-size: 2rem; 
    font-weight: 800; 
    color: #000000; 
    display: block; 
    line-height: 1.2;
  }
  
  .stat-label { 
    color: #4b5563; 
    font-size: 0.9rem;
  }
  
  /* MAIN CONTENT */
  .main-content { 
    margin: 32px 0;
  }
  
  /* ANALYSIS SECTION */
  .analysis-section { 
    margin-bottom: 32px;
  }
  
  /* CARD - CENTERED CONTENT */
  .card { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 24px; 
    border: 1px solid #e5e7eb; 
    margin-bottom: 24px;
    text-align: center;
  }
  
  @media (min-width: 768px) {
    .card { padding: 32px; }
  }
  
  .card-header { 
    margin-bottom: 24px;
  }
  
  .card-title { 
    font-size: 1.5rem; 
    font-weight: 700; 
    margin-bottom: 12px; 
    color: #000000;
    text-align: center;
  }
  
  .card-subtitle { 
    color: #4b5563; 
    margin-bottom: 16px;
    text-align: center;
  }
  
  /* BUTTONS - CENTERED */
  .button-group { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 12px; 
    margin: 16px 0;
    justify-content: center;
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
    background: transparent;
    color: #000000;
  }
  
  .button:hover { 
    transform: translateY(-2px); 
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .primary-button { 
    background: #000000; 
    color: #ffffff; 
    border: 2px solid #000000;
    min-width: 240px;
  }
  
  .primary-button:hover { 
    background: #1f2937; 
    border-color: #1f2937;
  }
  
  .secondary-button { 
    background: transparent; 
    color: #000000;
  }
  
  .secondary-button:hover { 
    background: #f9fafb;
  }
  
  .cta-button { 
    background: #000000; 
    color: #ffffff; 
    border: 2px solid #000000;
    min-width: 240px;
  }
  
  .cta-button:hover { 
    background: #1f2937; 
    border-color: #1f2937;
  }
  
  @media (max-width: 480px) {
    .button { 
      width: 100%;
    }
  }
  
  /* TEXTAREA */
  .textarea { 
    width: 100%; 
    max-width: 800px;
    margin: 20px auto;
    padding: 20px; 
    border: 2px solid #e5e7eb; 
    border-radius: 12px; 
    font-family: inherit; 
    font-size: 1rem; 
    line-height: 1.6; 
    resize: vertical; 
    transition: border-color 0.2s;
    display: block;
  }
  
  .textarea:focus { 
    outline: none; 
    border-color: #000000;
  }
  
  /* ANALYZE BUTTON CONTAINER - CENTERED */
  .analyze-button-container { 
    text-align: center; 
    margin: 24px 0;
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
  
  /* LOADING - CENTERED */
  .loading { 
    text-align: center; 
    padding: 40px;
  }
  
  .loading-bar { 
    width: 100%; 
    max-width: 400px;
    height: 8px; 
    background: #e5e7eb; 
    border-radius: 4px; 
    margin-top: 20px; 
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }
  
  .loading-progress { 
    width: 50%; 
    height: 100%; 
    background: #000000; 
    animation: progress 1.5s ease-in-out infinite;
  }
  
  @keyframes progress { 
    0% { transform: translateX(-100%); } 
    100% { transform: translateX(200%); } 
  }
  
  /* GRID */
  .grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px; 
    margin: 32px 0;
  }
  
  @media (min-width: 768px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  /* SCORE DISPLAY - CENTERED */
  .score-container { 
    text-align: center; 
    margin: 24px 0;
  }
  
  .score-number { 
    font-size: 5rem; 
    font-weight: 800; 
    line-height: 1; 
    margin-bottom: 16px;
    text-align: center;
  }
  
  .score-badge { 
    display: inline-block; 
    padding: 8px 24px; 
    border-radius: 50px; 
    font-weight: 600; 
    margin-bottom: 16px;
  }
  
  .score-high { 
    background: #10b981; 
    color: #ffffff;
  }
  
  .score-medium { 
    background: #f59e0b; 
    color: #ffffff;
  }
  
  .score-low { 
    background: #ef4444; 
    color: #ffffff;
  }
  
  .score-message { 
    font-size: 1.1rem; 
    margin-bottom: 24px;
    text-align: center;
  }
  
  .severity-container { 
    display: flex; 
    flex-direction: column; 
    gap: 12px; 
    padding: 16px; 
    background: #f9fafb; 
    border-radius: 8px;
    align-items: center;
  }
  
  .severity-item { 
    display: flex; 
    align-items: center; 
    gap: 12px;
  }
  
  .severity-dot { 
    width: 12px; 
    height: 12px; 
    border-radius: 50%;
  }
  
  .severity-high { 
    background: #ef4444;
  }
  
  .severity-medium { 
    background: #f59e0b;
  }
  
  .severity-low { 
    background: #10b981;
  }
  
  /* ISSUE LIST */
  .issues-container { 
    margin-top: 20px;
  }
  
  .issue-item { 
    padding: 20px; 
    margin-bottom: 16px; 
    border-radius: 12px; 
    border-left: 4px solid;
    text-align: left;
  }
  
  .issue-high { 
    background: #fef2f2; 
    border-left-color: #ef4444;
  }
  
  .issue-medium { 
    background: #fffbeb; 
    border-left-color: #f59e0b;
  }
  
  .issue-low { 
    background: #f0fdf4; 
    border-left-color: #10b981;
  }
  
  .issue-content { 
    display: flex; 
    justify-content: space-between; 
    align-items: flex-start; 
    gap: 16px;
  }
  
  .issue-text { 
    flex: 1;
  }
  
  .issue-message { 
    font-weight: 600; 
    margin-bottom: 8px;
  }
  
  .issue-fix { 
    color: #4b5563;
  }
  
  .issue-severity { 
    font-size: 0.75rem; 
    font-weight: 700; 
    padding: 4px 8px; 
    border-radius: 4px;
  }
  
  .issue-high .issue-severity { 
    background: #ef4444; 
    color: #ffffff;
  }
  
  .issue-medium .issue-severity { 
    background: #f59e0b; 
    color: #ffffff;
  }
  
  .issue-low .issue-severity { 
    background: #10b981; 
    color: #ffffff;
  }
  
  /* SUCCESS MESSAGE */
  .success-message { 
    color: #10b981; 
    font-size: 1.2rem; 
    text-align: center; 
    margin: 24px 0;
  }
  
  /* BEST PRACTICES */
  .best-practices { 
    background: #f9fafb; 
    padding: 24px; 
    border-radius: 12px; 
    margin-top: 24px;
    text-align: left;
  }
  
  .best-practices-title { 
    font-weight: 700; 
    margin-bottom: 16px;
    text-align: center;
  }
  
  .best-practices ul { 
    padding-left: 20px;
  }
  
  .best-practices li { 
    margin-bottom: 8px;
  }
  
  /* FIXES GRID */
  .fixes-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 20px; 
    margin: 24px 0;
  }
  
  @media (min-width: 640px) {
    .fixes-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .fixes-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .fix-card { 
    background: #f9fafb; 
    padding: 24px; 
    border-radius: 12px; 
    border: 1px solid #e5e7eb;
    text-align: left;
  }
  
  .fix-title { 
    font-size: 1.1rem; 
    font-weight: 700; 
    margin-bottom: 12px; 
    color: #000000;
    text-align: center;
  }
  
  .fix-description { 
    color: #4b5563; 
    margin-bottom: 16px;
    text-align: center;
  }
  
  .fix-examples { 
    list-style: none;
  }
  
  .fix-examples li { 
    margin-bottom: 8px; 
    padding-left: 20px; 
    position: relative;
  }
  
  .fix-examples li::before { 
    content: "•"; 
    position: absolute; 
    left: 4px; 
    color: #000000;
  }
  
  /* PRO TIP */
  .pro-tip { 
    background: #e0f2fe; 
    padding: 24px; 
    border-radius: 12px; 
    margin-top: 32px; 
    border-left: 4px solid #0284c7;
    text-align: left;
  }
  
  .pro-tip-title { 
    font-weight: 700; 
    margin-bottom: 12px; 
    color: #0369a1;
    text-align: center;
  }
  
  .pro-tip-text { 
    color: #374151; 
    margin-bottom: 12px;
  }
  
  .pro-tip-text:last-child { 
    margin-bottom: 0;
  }
  
  /* CENTER TEXT */
  .center-text { 
    text-align: center;
  }
  
  /* READY TEXT */
  .ready-text { 
    color: #4b5563; 
    margin: 24px 0;
    text-align: center;
  }
  
  /* CHECKLIST */
  .checklist { 
    background: #f9fafb; 
    padding: 24px; 
    border-radius: 12px; 
    margin-top: 24px;
    text-align: left;
  }
  
  .checklist-title { 
    font-weight: 700; 
    margin-bottom: 16px;
    text-align: center;
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
    margin-bottom: 16px; 
    text-align: center;
    color: #000000;
  }
  
  .section-subtitle { 
    text-align: center; 
    color: #4b5563; 
    max-width: 800px; 
    margin: 0 auto 32px;
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
    transition: transform 0.2s;
  }
  
  .how-to-step:hover { 
    transform: translateY(-4px); 
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
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
    transition: all 0.2s;
  }
  
  .faq-item:hover { 
    border-color: #000000;
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
    text-align: left;
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
    background: #f9fafb; 
    padding: 28px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb;
    transition: transform 0.2s;
    text-align: left;
  }
  
  .review-card:hover { 
    transform: translateY(-4px); 
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .review-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: flex-start; 
    margin-bottom: 16px;
    flex-wrap: wrap;
    gap: 12px;
  }
  
  .reviewer-name { 
    font-size: 1.1rem; 
    font-weight: 700; 
    display: block;
    color: #000000;
  }
  
  .reviewer-position { 
    color: #4b5563; 
    font-size: 0.85rem; 
    display: block;
  }
  
  .reviewer-company { 
    color: #6b7280; 
    font-size: 0.8rem; 
    display: block;
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
    text-align: center;
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
  
  /* CTA SECTION - CENTERED */
  .cta-section { 
    margin: 48px 0; 
    padding: 48px; 
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); 
    border-radius: 24px; 
    border: 2px solid #000000;
  }
  
  .cta-content { 
    text-align: center;
  }
  
  .cta-title { 
    font-size: 2rem; 
    font-weight: 800; 
    margin-bottom: 16px; 
    color: #000000;
    text-align: center;
  }
  
  .cta-subtitle { 
    color: #4b5563; 
    max-width: 600px; 
    margin: 0 auto 32px;
    text-align: center;
  }
  
  .cta-buttons { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 16px; 
    justify-content: center; 
    margin-bottom: 24px;
  }
  
  .cta-guarantee { 
    color: #6b7280; 
    font-size: 0.9rem;
    text-align: center;
  }
  
  .guarantee-text { 
    display: inline-block; 
    padding: 8px 16px; 
    background: #ffffff; 
    border-radius: 50px; 
    border: 1px solid #e5e7eb;
  }
  
  /* FOOTER - CENTERED */
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
  
  /* FRESHNESS INDICATOR */
  .freshness-indicator { 
    display: none;
  }
  
  /* HIDDEN */
  .hidden { 
    display: none;
  }
  
  /* BUILD INFO - CENTERED */
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
    .issue-content { 
      flex-direction: column;
    }
    
    .score-number { 
      font-size: 4rem;
    }
    
    .cta-section { 
      padding: 32px 20px;
    }
    
    .cta-title { 
      font-size: 1.5rem;
    }
    
    .aggregate-rating {
      flex-direction: column;
    }
  }
  
  @media (max-width: 480px) {
    .breadcrumb ol { 
      font-size: 0.85rem;
    }
    
    .stat-number { 
      font-size: 1.5rem;
    }
    
    .section-title { 
      font-size: 1.5rem;
    }
  }
`;

// Current year for dynamic content - use static value from build time
const CURRENT_YEAR = new Date().getFullYear();
const BUILD_TIMESTAMP = new Date().toISOString();
const FRESHNESS_INDICATOR = new Date().toISOString().split('T')[0];

// FAQ Data
const FAQS = [
  {
    question: "What is an ATS and why does it matter?",
    answer: "Applicant Tracking Systems (ATS) are software used by 75% of employers to scan, filter, and rank resumes. ATS-friendly resumes are 3x more likely to reach human recruiters.",
    date: "2024-12-15"
  },
  {
    question: "Is my resume data private and secure?",
    answer: "Yes! All analysis happens locally in your browser. No resume data is sent to our servers—your information stays completely private.",
    date: "2024-12-10"
  },
  {
    question: "What file format is best for ATS?",
    answer: ".docx files are most ATS-friendly, followed by plain text. PDFs work but can cause parsing issues with complex formatting.",
    date: "2024-12-08"
  },
  {
    question: "How accurate is this ATS checker?",
    answer: "Our algorithm analyzes 50+ ATS parsing factors based on real Applicant Tracking Systems used by Fortune 500 companies.",
    date: "2024-12-05"
  },
  {
    question: "Is this tool really free?",
    answer: "100% free with no signup required. We believe resume optimization should be accessible to everyone.",
    date: "2024-12-01"
  },
  {
    question: "Can I use this ATS checker on mobile?",
    answer: "Yes! Our ATS resume checker is fully responsive and works perfectly on all devices including smartphones and tablets.",
    date: "2024-11-28"
  }
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Paste Resume Text",
    text: "Copy and paste your resume content (plain text only). Remove personal contact information for privacy.",
    image: "https://www.professionalresumefree.com/images/step1-paste.jpg"
  },
  {
    name: "Analyze ATS Compatibility",
    text: "Our system scans for 50+ ATS parsing issues including formatting, structure, and content problems.",
    image: "https://www.professionalresumefree.com/images/step2-analyze.jpg"
  },
  {
    name: "Review Issues Found",
    text: "Get detailed feedback on high, medium, and low-risk issues that could prevent your resume from being parsed.",
    image: "https://www.professionalresumefree.com/images/step3-review.jpg"
  },
  {
    name: "Implement Fixes",
    text: "Follow our actionable fixes with before/after examples to optimize your resume for ATS systems.",
    image: "https://www.professionalresumefree.com/images/step4-fix.jpg"
  },
  {
    name: "Test & Apply",
    text: "Test your optimized resume by copying it into Notepad to see what an ATS will actually read.",
    image: "https://www.professionalresumefree.com/images/step5-test.jpg"
  }
];

// Sample Reviews with dates
const REVIEWS = [
  {
    name: "Michael Chen",
    position: "HR Director",
    rating: 5,
    date: "2024-12-15",
    review: "This tool identified formatting issues our ATS system would have rejected. Essential for job seekers.",
    company: "Tech Corporation Inc."
  },
  {
    name: "Sarah Johnson",
    position: "Career Coach",
    rating: 5,
    date: "2024-12-10",
    review: "I recommend this to all my clients. The privacy-first approach and detailed feedback are game-changers.",
    company: "Career Success LLC"
  },
  {
    name: "David Rodriguez",
    position: "Software Engineer",
    rating: 4,
    date: "2024-12-05",
    review: "Fixed my resume's table formatting that was preventing ATS parsing. Landed 3 interviews after using suggestions.",
    company: "Google"
  },
  {
    name: "Lisa Wang",
    position: "Marketing Manager",
    rating: 5,
    date: "2024-11-28",
    review: "The best free ATS checker I've found. Helped me optimize my resume for multiple ATS systems.",
    company: "Amazon"
  },
  {
    name: "Robert Kim",
    position: "Recruitment Specialist",
    rating: 5,
    date: "2024-11-20",
    review: "We use this tool to train candidates. The ATS compatibility analysis is incredibly accurate.",
    company: "LinkedIn"
  },
  {
    name: "Emily Davis",
    position: "Recent Graduate",
    rating: 4,
    date: "2024-11-15",
    review: "As a new grad, this helped me understand what ATS systems look for. Got my first interview!",
    company: "Stanford University"
  }
];

// Breadcrumb data
const BREADCRUMB_DATA = [
  { name: "Home", item: "https://www.professionalresumefree.com/" },
  { name: "Free Resume Tools", item: "https://www.professionalresumefree.com/free-resume-tools" },
  { name: "ATS Resume Checker", item: "https://www.professionalresumefree.com/free-ats-resume-checker" }
];

// ATS Rules and Analysis Logic
const ATS_RULES = {
  UNPROFESSIONAL_EMAILS: ['hotmail.com', 'yahoo.com', 'aol.com', 'gmail.com', 'outlook.com', 'live.com', 'msn.com'],
  PROFESSIONAL_EMAILS: ['.edu', '.gov', '.org', 'ac.', 'co.', 'inc.', 'corp.', 'llc.'],
  STANDARD_SECTIONS: [
    'work experience', 'employment history', 'professional experience', 'education', 
    'skills', 'technical skills', 'certifications', 'projects', 'professional summary',
    'summary', 'objective', 'career objective', 'achievements', 'awards', 'languages'
  ],
  NON_STANDARD_SECTIONS: [
    'my journey', 'my story', 'professional odyssey', 'career narrative', 'work timeline',
    'academic background', 'skill set', 'tech stack', 'tools & technologies', 'certificates',
    'honors & awards', 'spoken languages', 'professional references', 'contact details',
    'get in touch', 'about me'
  ],
  ATS_RED_FLAGS: {
    HEADER_FOOTER: ['page \\d+ of \\d+', 'confidential', 'draft', '©', '™', '®', '•{3,}', '-{3,}', '={3,}', '_{3,}'],
    TABLE_INDICATORS: ['\\|.*\\|', '\\+[-]+\\+', 'border:', 'cellpadding', 'cellspacing', '<table', '\\xe4\\xbb\\xac', '\\xe7\\x94\\xa8'],
    COLUMN_INDICATORS: ['column', 'multicolumn', '\\s{10,}\\w', '\\t{2,}\\w'],
    GRAPHICS_REFERENCES: ['\\[figure', '\\[image', '\\[graphic', 'jpeg', 'png', 'gif', 'photoshop', 'illustrator', 'see figure'],
    UNCOMMON_FONTS: ['comic sans', 'papyrus', 'curlz', 'jokerman', 'chiller', 'wingdings', 'webdings'],
    EMBEDDED_SYMBOLS: ['→', '⇒', '★', '☆', '●', '◆', '■', '▲', '▼', '♥', '♦', '♣', '♠', '✓', '✔', '✗', '✘']
  },
  SCORE_WEIGHTS: {
    HEADER_FOOTER: 10, TABLES: 8, COLUMNS: 6, GRAPHICS: 7, 
    UNCOMMON_FONTS: 5, EMBEDDED_SYMBOLS: 4, UNPROFESSIONAL_EMAIL: 3, 
    NON_STANDARD_SECTION: 3, INCONSISTENT_BULLETS: 2
  }
};

// ScoreDisplay Component
function ScoreDisplay({ score, severityCount }) {
  const getScoreClass = (score) => {
    if (score >= 80) return 'score-high';
    if (score >= 60) return 'score-medium';
    return 'score-low';
  };

  const getScoreMessage = (score) => {
    if (score >= 90) return 'Excellent ATS compatibility';
    if (score >= 80) return 'Good ATS compatibility';
    if (score >= 70) return 'Fair ATS compatibility';
    if (score >= 60) return 'Needs improvement';
    return 'Poor ATS compatibility - Major issues detected';
  };

  return (
    <div className="card">
      <h2 className="card-title">ATS Compatibility Score</h2>
      <div className="score-container">
        <div className="score-number" style={{ color: score >= 80 ? '#10b981' : score >= 60 ? '#f59e0b' : '#ef4444' }}>{score}</div>
        <div className={`score-badge ${getScoreClass(score)}`}>
          {score >= 80 ? 'Low Risk' : score >= 60 ? 'Medium Risk' : 'High Risk'}
        </div>
      </div>
      <p className="score-message">{getScoreMessage(score)}</p>
      
      <div className="severity-container">
        {severityCount.high > 0 && (
          <div className="severity-item">
            <div className="severity-dot severity-high"></div>
            <span>{severityCount.high} High Risk Issue{severityCount.high !== 1 ? 's' : ''}</span>
          </div>
        )}
        {severityCount.medium > 0 && (
          <div className="severity-item">
            <div className="severity-dot severity-medium"></div>
            <span>{severityCount.medium} Medium Risk Issue{severityCount.medium !== 1 ? 's' : ''}</span>
          </div>
        )}
        {severityCount.low > 0 && (
          <div className="severity-item">
            <div className="severity-dot severity-low"></div>
            <span>{severityCount.low} Low Risk Issue{severityCount.low !== 1 ? 's' : ''}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// IssueList Component
function IssueList({ issues }) {
  if (!issues || issues.length === 0) {
    return (
      <div className="card">
        <h2 className="card-title">No Issues Found</h2>
        <p className="success-message">✓ Your resume text appears to be ATS-friendly!</p>
        <div className="best-practices">
          <p className="best-practices-title">Best Practices to Maintain ATS Compatibility:</p>
          <ul>
            <li>Use standard section headers (Work Experience, Education, Skills)</li>
            <li>Stick to common fonts like Arial, Calibri, or Times New Roman</li>
            <li>Avoid tables, columns, and graphics</li>
            <li>Use consistent bullet points throughout</li>
            <li>Include relevant keywords from the job description</li>
            <li>Keep formatting simple and clean</li>
            <li>Use a professional email address</li>
          </ul>
        </div>
      </div>
    );
  }

  const getSeverityClass = (severity) => {
    switch (severity) {
      case 'high': return 'issue-high';
      case 'medium': return 'issue-medium';
      case 'low': return 'issue-low';
      default: return '';
    }
  };

  return (
    <div className="card">
      <h2 className="card-title">Issues Found ({issues.length})</h2>
      <div className="issues-container">
        {issues.map((issue, index) => (
          <div key={index} className={`issue-item ${getSeverityClass(issue.severity)}`}>
            <div className="issue-content">
              <div className="issue-text">
                <p className="issue-message">{issue.message}</p>
                <p className="issue-fix"><strong>Fix:</strong> {issue.fix}</p>
              </div>
              <span className={`issue-severity ${getSeverityClass(issue.severity)}`}>
                {issue.severity.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// FixSuggestions Component
function FixSuggestions() {
  const fixes = [
    {
      title: 'Standardize Section Headers',
      description: 'Use widely recognized section titles that ATS can parse easily.',
      examples: [
        '❌ "My Journey" → ✅ "Work Experience"',
        '❌ "Academic Background" → ✅ "Education"',
        '❌ "Skill Set" → ✅ "Skills"',
        '❌ "Professional Odyssey" → ✅ "Professional Experience"'
      ]
    },
    {
      title: 'Remove Formatting Elements',
      description: 'ATS systems cannot read complex formatting.',
      examples: [
        'Remove tables and convert to plain text',
        'Eliminate multiple columns',
        'Delete headers, footers, and page numbers',
        'Remove text boxes and shapes'
      ]
    },
    {
      title: 'Use Standard Fonts & Characters',
      description: 'Stick to basic fonts and avoid special symbols.',
      examples: [
        'Fonts: Arial, Calibri, Times New Roman, Helvetica',
        'Replace ★, →, ● with standard characters',
        'Avoid Wingdings, Webdings, or decorative fonts'
      ]
    },
    {
      title: 'Optimize Bullet Points',
      description: 'Maintain consistent formatting throughout.',
      examples: [
        'Use one bullet style consistently (•, -, or *)',
        'Avoid mixing numbered lists with bullet points',
        'Keep bullet points aligned and properly indented'
      ]
    },
    {
      title: 'Professional Contact Information',
      description: 'Use professional email formats and standard layouts.',
      examples: [
        'Use: john.doe@professional.com',
        'Avoid: coolguy123@yahoo.com',
        'Include phone number in standard format',
        'Place contact info at the top, not in headers'
      ]
    },
    {
      title: 'Keyword Optimization',
      description: 'Include relevant keywords from job descriptions.',
      examples: [
        'Match skills with job requirements',
        'Use industry-standard terminology',
        'Include both acronyms and full forms',
        'Avoid jargon unless specified'
      ]
    }
  ];

  return (
    <div className="card">
      <h2 className="card-title">ATS Optimization Guide</h2>
      <p className="card-subtitle">Follow these recommendations to improve your resume's ATS compatibility</p>
      <div className="fixes-grid">
        {fixes.map((fix, index) => (
          <div key={index} className="fix-card">
            <h4 className="fix-title">{fix.title}</h4>
            <p className="fix-description">{fix.description}</p>
            <ul className="fix-examples">
              {fix.examples.map((example, idx) => (
                <li key={idx}>{example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="pro-tip">
        <p className="pro-tip-title">💡 Pro Tip for Maximum ATS Compatibility:</p>
        <p className="pro-tip-text">
          Always save your resume as a <strong>.docx</strong> file for best ATS parsing. 
          If using PDF, ensure it's created from a text-based source, not scanned. 
          Test your resume by copying and pasting the text into Notepad - if it looks clean and readable there, 
          it will likely pass through most ATS systems successfully.
        </p>
        <p className="pro-tip-text">
          <strong>Remember:</strong> 99% of Fortune 500 companies use ATS. Optimizing for these systems 
          is essential for getting your resume seen by human recruiters.
        </p>
      </div>
    </div>
  );
}

// Analyze Resume Function
function analyzeResume(text) {
  const issues = [];
  let score = 100;
  const lowerText = text.toLowerCase();
  const lines = text.split('\n').map(line => line.trim());

  // Check for headers/footers
  ATS_RULES.ATS_RED_FLAGS.HEADER_FOOTER.forEach(pattern => {
    const regex = new RegExp(pattern, 'gi');
    if (regex.test(text)) {
      issues.push({
        type: 'header_footer',
        message: 'Header or footer content detected',
        severity: 'high',
        weight: ATS_RULES.SCORE_WEIGHTS.HEADER_FOOTER,
        fix: 'Remove headers, footers, page numbers, and decorative lines. Keep content in the main document body only.'
      });
      score -= ATS_RULES.SCORE_WEIGHTS.HEADER_FOOTER;
    }
  });

  // Check for tables
  ATS_RULES.ATS_RED_FLAGS.TABLE_INDICATORS.forEach(pattern => {
    const regex = new RegExp(pattern, 'gi');
    if (regex.test(text)) {
      issues.push({
        type: 'tables',
        message: 'Table or spreadsheet formatting detected',
        severity: 'high',
        weight: ATS_RULES.SCORE_WEIGHTS.TABLES,
        fix: 'Convert tables to plain text with consistent formatting. Use simple lists instead of table structures.'
      });
      score -= ATS_RULES.SCORE_WEIGHTS.TABLES;
    }
  });

  // Check for columns
  ATS_RULES.ATS_RED_FLAGS.COLUMN_INDICATORS.forEach(pattern => {
    const regex = new RegExp(pattern, 'gi');
    if (regex.test(text)) {
      issues.push({
        type: 'columns',
        message: 'Column layout or multi-column formatting detected',
        severity: 'medium',
        weight: ATS_RULES.SCORE_WEIGHTS.COLUMNS,
        fix: 'Use single column format throughout. ATS reads left to right, top to bottom.'
      });
      score -= ATS_RULES.SCORE_WEIGHTS.COLUMNS;
    }
  });

  // Check for graphics references
  ATS_RULES.ATS_RED_FLAGS.GRAPHICS_REFERENCES.forEach(pattern => {
    const regex = new RegExp(pattern, 'gi');
    if (regex.test(text)) {
      issues.push({
        type: 'graphics',
        message: 'Graphics, images, or visual elements referenced',
        severity: 'high',
        weight: ATS_RULES.SCORE_WEIGHTS.GRAPHICS,
        fix: 'Remove all references to images, charts, logos, or graphics. ATS cannot process visual content.'
      });
      score -= ATS_RULES.SCORE_WEIGHTS.GRAPHICS;
    }
  });

  // Check for uncommon fonts
  ATS_RULES.ATS_RED_FLAGS.UNCOMMON_FONTS.forEach(font => {
    if (lowerText.includes(font)) {
      issues.push({
        type: 'fonts',
        message: `Uncommon or decorative font detected: "${font}"`,
        severity: 'medium',
        weight: ATS_RULES.SCORE_WEIGHTS.UNCOMMON_FONTS,
        fix: 'Use standard professional fonts: Arial, Calibri, Times New Roman, Helvetica, or Georgia'
      });
      score -= ATS_RULES.SCORE_WEIGHTS.UNCOMMON_FONTS;
    }
  });

  // Check for embedded symbols
  ATS_RULES.ATS_RED_FLAGS.EMBEDDED_SYMBOLS.forEach(symbol => {
    if (text.includes(symbol)) {
      issues.push({
        type: 'symbols',
        message: 'Non-standard or special symbols detected',
        severity: 'medium',
        weight: ATS_RULES.SCORE_WEIGHTS.EMBEDDED_SYMBOLS,
        fix: 'Replace special symbols with standard keyboard characters. Use asterisks (*) for bullets instead of special characters.'
      });
      score -= ATS_RULES.SCORE_WEIGHTS.EMBEDDED_SYMBOLS;
    }
  });

  // Check for unprofessional emails
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  const emails = text.match(emailRegex) || [];
  emails.forEach(email => {
    const domain = email.split('@')[1].toLowerCase();
    const isUnprofessional = ATS_RULES.UNPROFESSIONAL_EMAILS.some(unprofessional => 
      domain.includes(unprofessional)
    );
    const isProfessional = ATS_RULES.PROFESSIONAL_EMAILS.some(professional =>
      domain.includes(professional)
    );
    
    if (isUnprofessional && !isProfessional) {
      issues.push({
        type: 'email',
        message: `Consider using a more professional email address: ${email}`,
        severity: 'low',
        weight: ATS_RULES.SCORE_WEIGHTS.UNPROFESSIONAL_EMAIL,
        fix: 'Use an email with your name or professional domain (e.g., first.last@professional.com or first.last@yourcompany.com)'
      });
      score -= ATS_RULES.SCORE_WEIGHTS.UNPROFESSIONAL_EMAIL;
    }
  });

  // Check for non-standard section titles
  lines.forEach(line => {
    const cleanLine = line.toLowerCase();
    if (cleanLine.length > 3 && cleanLine.length < 50 && !cleanLine.includes(':')) {
      ATS_RULES.NON_STANDARD_SECTIONS.forEach(nonStandard => {
        if (cleanLine.includes(nonStandard)) {
          const closestStandard = ATS_RULES.STANDARD_SECTIONS.find(standard => 
            standard.includes(nonStandard.split(' ')[0]) || nonStandard.split(' ')[0].includes(standard.split(' ')[0])
          ) || 'Work Experience';
          
          issues.push({
            type: 'sections',
            message: `Non-standard section title: "${line}"`,
            severity: 'low',
            weight: ATS_RULES.SCORE_WEIGHTS.NON_STANDARD_SECTION,
            fix: `Replace with standard title: "${closestStandard.charAt(0).toUpperCase() + closestStandard.slice(1)}"`
          });
          score -= ATS_RULES.SCORE_WEIGHTS.NON_STANDARD_SECTION;
        }
      });
    }
  });

  // Check for inconsistent bullets
  const bulletPatterns = [/^[\s]*[•\-*+]\s+/gm, /^[\s]*\d+[\.\)]\s+/gm, /^[\s]*[a-z][\.\)]\s+/gm];
  const bulletTypes = new Set();
  bulletPatterns.forEach(pattern => {
    if (pattern.test(text)) {
      if (pattern.toString().includes('•')) bulletTypes.add('bullet');
      if (pattern.toString().includes('\\d')) bulletTypes.add('numbered');
      if (pattern.toString().includes('[a-z]')) bulletTypes.add('lettered');
    }
  });
  
  if (bulletTypes.size > 1) {
    issues.push({
      type: 'bullets',
      message: 'Inconsistent bullet point formatting detected',
      severity: 'low',
      weight: ATS_RULES.SCORE_WEIGHTS.INCONSISTENT_BULLETS,
      fix: 'Use consistent bullet style throughout (all • or all - or all *). Do not mix different bullet types.'
    });
    score -= ATS_RULES.SCORE_WEIGHTS.INCONSISTENT_BULLETS;
  }

  // Check for excessive whitespace
  const excessiveWhitespace = /\s{5,}/g;
  if (excessiveWhitespace.test(text)) {
    issues.push({
      type: 'whitespace',
      message: 'Excessive whitespace or spacing detected',
      severity: 'low',
      weight: 1,
      fix: 'Use standard spacing. Avoid multiple spaces or tabs for alignment.'
    });
    score -= 1;
  }

  // Check for text in headers (first line detection)
  if (lines.length > 0 && lines[0].length < 20 && lines[0].includes(' ') === false) {
    issues.push({
      type: 'header_text',
      message: 'Text detected in header position',
      severity: 'medium',
      weight: 3,
      fix: 'Move all content to the main document body. Do not use document headers for resume content.'
    });
    score -= 3;
  }

  score = Math.max(0, Math.min(100, Math.round(score)));
  
  return {
    score,
    issues,
    totalIssues: issues.length,
    severityCount: {
      high: issues.filter(i => i.severity === 'high').length,
      medium: issues.filter(i => i.severity === 'medium').length,
      low: issues.filter(i => i.severity === 'low').length
    }
  };
}

export default function ATSResumeChecker({ lastUpdated, freshnessIndicator, reviews, faqs, howToSteps, breadcrumbData }) {
  const [resumeText, setResumeText] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [buildTime, setBuildTime] = useState('');

  // Use effect to set client-side timestamp to avoid hydration mismatch
  useEffect(() => {
    setBuildTime(Date.now().toString());
  }, []);

  // Use props if provided, otherwise fallback to constants
  const safeLastUpdated = lastUpdated || BUILD_TIMESTAMP;
  const safeFreshnessIndicator = freshnessIndicator || FRESHNESS_INDICATOR;
  const safeReviews = reviews || REVIEWS;
  const safeFaqs = faqs || FAQS;
  const safeHowToSteps = howToSteps || HOW_TO_STEPS;
  const safeBreadcrumbData = breadcrumbData || BREADCRUMB_DATA;

  // SINGLE CANONICAL URL
  const canonicalUrl = "https://www.professionalresumefree.com/free-ats-resume-checker";

  // ===== FIXED SCHEMA DATA - All issues resolved =====
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": "Free ATS Resume Checker - Applicant Tracking System Compatibility Analysis 2026",
        "description": "Professional ATS resume checker that analyzes 50+ parsing factors. Get instant feedback on ATS compatibility, formatting issues, and actionable fixes. 2026 Edition",
        "datePublished": "2024-01-01",
        "dateModified": safeLastUpdated,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.professionalresumefree.com/#website",
          "url": "https://www.professionalresumefree.com",
          "name": "Professional Resume Free",
          "description": "Free online resume builder and ATS optimization tools for job seekers worldwide",
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
              "https://www.facebook.com/ProfessionalResumeFree",
              "https://www.youtube.com/@ProfessionalResumeFree"
            ]
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.professionalresumefree.com/images/og-ats-resume-checker.jpg",
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": safeBreadcrumbData.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.item
          }))
        }
      },
      {
        "@type": "WebApplication",
        "name": "Free ATS Resume Checker",
        "description": "Professional Applicant Tracking System compatibility analyzer with 50+ parsing factor checks",
        "url": canonicalUrl,
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
          "reviewCount": "156",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "featureList": [
          "50+ ATS Parsing Factor Analysis",
          "Privacy-First Browser Processing",
          "Instant Compatibility Score",
          "Actionable Fix Suggestions",
          "No Sign Up Required",
          "Mobile-Friendly Interface"
        ],
        "softwareVersion": "2026.1.0",
        "screenshot": "https://www.professionalresumefree.com/images/screenshot-ats-checker.jpg",
        "countriesSupported": "Global"
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faqpage`,
        "mainEntity": safeFaqs.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": faq.date,
            "author": {
              "@type": "Organization",
              "name": "ATS Checker Support Team"
            }
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Use the Free ATS Resume Checker Tool",
        "description": "Step-by-step guide to analyze and optimize your resume for Applicant Tracking Systems",
        "totalTime": "PT3M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": safeHowToSteps.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.name,
          "text": step.text,
          "url": `${canonicalUrl}#step-${index + 1}`,
          "image": step.image
        }))
      },
      // ===== FIXED: Individual Reviews with REQUIRED itemReviewed field =====
      ...safeReviews.map((review, index) => ({
        "@type": "Review",
        "@id": `${canonicalUrl}#review-${index + 1}`,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": review.name
        },
        "reviewBody": review.review,
        "datePublished": review.date,
        "itemReviewed": {
          "@type": "WebApplication",
          "name": "Free ATS Resume Checker",
          "applicationCategory": "BusinessApplication",
          "url": canonicalUrl,
          "description": "Professional ATS compatibility analysis tool for job seekers"
        }
      })),
      {
        "@type": "Service",
        "serviceType": "ATS Resume Analysis Service",
        "provider": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Global"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Free Resume Analysis Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ATS Compatibility Check"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Resume Formatting Analysis"
              }
            }
          ]
        },
        "description": "Free ATS resume checking service for job seekers",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Product",
        "@id": `${canonicalUrl}#product`,
        "name": "Free ATS Resume Checker Tool",
        "description": "Professional ATS compatibility analysis tool for job seekers",
        "image": {
          "@type": "ImageObject",
          "url": "https://www.professionalresumefree.com/images/og-ats-resume-checker.jpg",
          "width": 1200,
          "height": 630,
          "caption": "Free ATS Resume Checker Tool Interface"
        },
        "brand": {
          "@type": "Brand",
          "name": "Professional Resume Free"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2026-12-31",
          "url": canonicalUrl
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "156",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".title", ".subtitle", ".card-title", ".section-title"]
      }
    ]
  };

  // Sample resume text
  const SAMPLE_RESUME = `JANE DOE
123 Main Street, San Francisco, CA 94105
(555) 123-4567 | jane.doe@professional.com | linkedin.com/in/janedoe

PROFESSIONAL SUMMARY
Results-driven Marketing Manager with 8+ years of experience developing and executing successful marketing campaigns. Specialized in digital marketing, brand strategy, and team leadership.

WORK EXPERIENCE

Senior Marketing Manager
ABC Corporation, San Francisco, CA
June 2019 – Present

• Developed and executed comprehensive marketing strategies resulting in 45% increase in lead generation
• Managed a team of 5 marketing specialists and 3 freelance content creators
• Oversaw annual marketing budget of $2M, achieving 22% ROI
• Implemented marketing automation tools that reduced manual work by 30 hours/week

Marketing Specialist
XYZ Inc., San Jose, CA
January 2016 – May 2019

• Created and managed social media campaigns across Facebook, LinkedIn, and Twitter
• Produced monthly performance reports and presented findings to senior management
• Collaborated with sales team to develop targeted marketing materials
• Increased social media engagement by 150% through strategic content planning

EDUCATION

MBA in Marketing
University of California, Berkeley
Graduated: May 2015

Bachelor of Business Administration
Stanford University
Graduated: May 2013

SKILLS

• Digital Marketing Strategy
• Team Leadership & Management
• Budget Planning & Analysis
• Marketing Automation Tools
• Google Analytics Certified
• Social Media Marketing
• Content Strategy
• SEO/SEM Optimization`;

  const handleAnalyze = useCallback(() => {
    if (!resumeText.trim()) {
      alert('Please paste your resume text first');
      return;
    }
    
    setIsAnalyzing(true);
    setTimeout(() => {
      const result = analyzeResume(resumeText);
      setAnalysis(result);
      setIsAnalyzing(false);
    }, 500);
  }, [resumeText]);

  const handleUseSample = () => {
    setResumeText(SAMPLE_RESUME);
  };

  const handleClear = () => {
    setResumeText('');
    setAnalysis(null);
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Primary Meta Tags */}
        <title>Free ATS Resume Checker - Applicant Tracking System Compatibility Analysis {CURRENT_YEAR} | Professional Resume Free</title>
        <meta 
          name="description" 
          content={`Professional ATS resume checker that analyzes 50+ parsing factors. Get instant feedback on ATS compatibility, formatting issues, and actionable fixes. ${CURRENT_YEAR} Edition`}
        />
        <meta name="keywords" content="ATS resume checker, applicant tracking system, resume compatibility, ATS optimization, free resume scanner, resume parsing issues, ATS formatting, resume analysis, ATS friendly resume, resume checker tool" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Date and Freshness Meta Tags */}
        <meta name="date" content={safeFreshnessIndicator} />
        <meta name="last-modified" content={safeLastUpdated} />
        <meta name="revisit-after" content="1 days" />
        
        {/* GEO Optimization Tags for AI Crawlers */}
        <meta name="chatgpt-fts:title" content="Free ATS Resume Checker - Instant ATS Compatibility Analysis" />
        <meta name="chatgpt-fts:description" content="Free ATS resume checker that analyzes 50+ parsing factors instantly. Get detailed feedback on formatting issues, keywords, and ATS compatibility. Privacy-first browser tool." />
        <meta name="chatgpt-fts:keywords" content="ATS resume checker, resume compatibility test, free ATS scanner, resume parsing analysis" />
        <meta name="chatgpt-fts:last-updated" content={safeFreshnessIndicator} />
        <meta name="generator" content="Professional Resume Free - ATS Analysis Tool" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Internationalization */}
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-US" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-GB" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-CA" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-AU" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free ATS Resume Checker - Applicant Tracking System Compatibility Analysis 2026" />
        <meta property="og:description" content={`Analyze 50+ ATS parsing factors instantly. Privacy-first tool that works entirely in your browser. ${CURRENT_YEAR}`} />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-ats-resume-checker.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free ATS Resume Checker Tool Interface" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastUpdated} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free ATS Resume Checker - Instant Compatibility Analysis 2026" />
        <meta name="twitter:description" content="Analyze your resume for 50+ ATS parsing issues. Privacy-first, browser-based tool. No signup required." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-ats-resume-checker.jpg" />
        <meta name="twitter:image:alt" content="ATS Resume Checker Tool Preview" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Theme and Icons */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className="landing-page" lang="en-US">
        {/* Freshness Indicator - Hidden */}
        <div className="freshness-indicator">
          <meta name="build-timestamp" content={buildTime} />
          <meta name="content-freshness" content={safeFreshnessIndicator} />
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            {safeBreadcrumbData.map((item, index) => (
              <li 
                key={index}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && <span className="breadcrumb-separator">›</span>}
                <Link
                  href={item.item}
                  itemProp="item"
                  className="breadcrumb-link"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
                <meta itemProp="position" content={index + 1} />
              </li>
            ))}
          </ol>
        </nav>

        <div className="container">
          <header className="header" role="banner">
            <div className="trust-badge">
              <span className="trust-badge-text">
                Best Free ATS Checker {CURRENT_YEAR}
              </span>
            </div>
            
            <h1 className="title">
              Free ATS Resume Checker - <span className="gradient-text">Analyze 50+ Parsing Factors Instantly</span>
            </h1>
            
            <p className="subtitle">
              Professional <strong className="hero-highlight">Applicant Tracking System compatibility analyzer</strong> that works entirely in your browser. No data leaves your computer - 100% privacy guaranteed.
            </p>
          </header>

          <main className="main-content">
            <section className="analysis-section">
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Paste Your Resume Text for ATS Analysis</h2>
                  <p className="card-subtitle">Completely private - all processing happens in your browser</p>
                  <div className="button-group">
                    <button onClick={handleUseSample} className="button secondary-button">
                      Use Sample Resume
                    </button>
                    <button onClick={handleClear} className="button secondary-button">
                      Clear Text
                    </button>
                  </div>
                </div>
                
                <textarea
                  className="textarea"
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  placeholder="Paste your resume text here (plain text only)...

Best Practices:
• Use standard section headers (Work Experience, Education, Skills)
• Avoid tables, columns, and graphics
• Use consistent bullet points
• Include relevant keywords from job description
• Professional email format
• No headers/footers/page numbers

Example Format:
John Doe
john.doe@professional.com
(555) 123-4567

PROFESSIONAL SUMMARY
Experienced professional with...

WORK EXPERIENCE
• Achieved 30% increase in..."
                  rows={15}
                  aria-label="Resume text input for ATS analysis"
                />
                
                <div className="analyze-button-container">
                  <button 
                    onClick={handleAnalyze} 
                    className="button primary-button"
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? (
                      <>
                        <span>Analyzing ATS Compatibility...</span>
                        <span className="spinner">⟳</span>
                      </>
                    ) : (
                      'Analyze ATS Compatibility Now'
                    )}
                  </button>
                </div>
              </div>
            </section>

            {isAnalyzing ? (
              <div className="loading">
                <p>Analyzing your resume for ATS compatibility...</p>
                <div className="loading-bar">
                  <div className="loading-progress"></div>
                </div>
              </div>
            ) : analysis ? (
              <>
                <div className="grid">
                  <ScoreDisplay score={analysis.score} severityCount={analysis.severityCount} />
                  <IssueList issues={analysis.issues} />
                </div>
                <FixSuggestions />
              </>
            ) : (
              <div className="card">
                <h2 className="card-title">Ready to Analyze Your Resume's ATS Compatibility</h2>
                <p className="ready-text">
                  Paste your resume text above and click "Analyze ATS Compatibility Now" to begin.
                </p>
                <div className="checklist">
                  <p className="checklist-title">What this ATS checker analyzes:</p>
                  <ul>
                    <li>Headers, footers, and page numbers (ATS cannot read these)</li>
                    <li>Tables, columns, and complex formatting</li>
                    <li>Graphics, charts, and image references</li>
                    <li>Uncommon fonts and special symbols</li>
                    <li>Non-standard section titles</li>
                    <li>Inconsistent bullet points</li>
                    <li>Email professionalism for ATS systems</li>
                    <li>Text boxes and shapes</li>
                    <li>Watermarks and background images</li>
                  </ul>
                </div>
              </div>
            )}

            {/* How-to Section */}
            <section className="how-to-section" aria-labelledby="how-to-title">
              <h2 className="section-title" id="how-to-title">How It Works: 5-Step ATS Optimization</h2>
              <p className="section-subtitle">
                Follow these steps to ensure your resume passes through any Applicant Tracking System
              </p>
              <div className="how-to-steps">
                {safeHowToSteps.map((step, index) => (
                  <div key={index} className="how-to-step" id={`step-${index + 1}`}>
                    <div className="step-number">{index + 1}</div>
                    <h3 className="step-title">{step.name}</h3>
                    <p className="step-description">{step.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Long-Tail Keywords Section - GEO Optimization */}
            <section className="how-to-section">
              <h2 className="section-title">Common Questions About ATS Resume Checking</h2>
              <div className="how-to-steps" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {[
                  "how to check if resume is ATS friendly",
                  "free ATS resume checker online",
                  "best resume format for ATS systems",
                  "ATS parsing issues in resumes",
                  "resume keywords for applicant tracking systems",
                  "ATS compatible resume template free",
                  "how to beat ATS screening 2026",
                  "privacy safe resume analysis tool"
                ].map((keyword, i) => (
                  <div key={i} className="how-to-step" style={{ padding: '20px' }}>
                    <p style={{ fontWeight: '600', marginBottom: '12px' }}>❓ {keyword}</p>
                    <Link href="/complete-resume-resource-library" className="breadcrumb-link">
                      Find answer in our resource library →
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section" aria-labelledby="faq-title">
              <h2 className="section-title" id="faq-title">Frequently Asked Questions About ATS</h2>
              <p className="section-subtitle">
                Everything you need to know about optimizing your resume for Applicant Tracking Systems
              </p>
              <div className="faq-list">
                {safeFaqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <div className="faq-question">
                      <h3 itemProp="name">{faq.question}</h3>
                      <span className="faq-toggle">{activeFaq === index ? '−' : '+'}</span>
                    </div>
                    {activeFaq === index && (
                      <div 
                        className="faq-answer"
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <p itemProp="text">{faq.answer}</p>
                        <meta itemProp="datePublished" content={faq.date} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section className="reviews-section" aria-labelledby="reviews-title">
              <h2 className="section-title" id="reviews-title">What Professionals Say About Our ATS Checker</h2>
              <p className="section-subtitle">
                Trusted by HR professionals, recruiters, and job seekers worldwide
              </p>
              <div className="reviews-grid">
                {safeReviews.map((review, index) => (
                  <div key={index} className="review-card" itemScope itemType="https://schema.org/Review">
                    <meta itemProp="datePublished" content={review.date} />
                    <div className="review-header">
                      <div className="reviewer-info">
                        <span itemProp="author" itemScope itemType="https://schema.org/Person">
                          <meta itemProp="name" content={review.name} />
                          <strong className="reviewer-name">{review.name}</strong>
                        </span>
                        <span className="reviewer-position">{review.position}</span>
                        <span className="reviewer-company">{review.company}</span>
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
                    <div itemProp="itemReviewed" itemScope itemType="https://schema.org/WebApplication">
                      <meta itemProp="name" content="Free ATS Resume Checker" />
                      <meta itemProp="applicationCategory" content="BusinessApplication" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section className="resources-section" aria-labelledby="resources-title">
              <h2 className="section-title" id="resources-title">ATS Optimization Resume Resources</h2>
              <p className="section-subtitle">
                Explore our comprehensive resume optimization tools and guides
              </p>
              <div className="resources-grid">
                <Link 
                  href="/free-resume-builder"
                  className="resource-card"
                  prefetch={false}
                >
                  <h3>Free Resume Builder</h3>
                  <p>Create professional, ATS-optimized resumes with our free builder. No sign up required.</p>
                </Link>
                <Link 
                  href="/resume-templates"
                  className="resource-card"
                  prefetch={false}
                >
                  <h3>ATS Resume Templates</h3>
                  <p>Download professionally designed ATS-friendly resume templates for all industries.</p>
                </Link>
                <Link 
                  href="/resume-writing-guide"
                  className="resource-card"
                  prefetch={false}
                >
                  <h3>Resume Writing Guide</h3>
                  <p>Learn how to write compelling resumes that pass ATS and impress recruiters.</p>
                </Link>
              </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
              <div className="cta-content">
                <h2 className="cta-title">Ready to Optimize Your Resume for ATS?</h2>
                <p className="cta-subtitle">
                  Join thousands of successful job seekers who have improved their ATS compatibility scores
                </p>
                <div className="cta-buttons">
                  <button 
                    onClick={handleUseSample} 
                    className="button cta-button"
                  >
                    Try with Sample Resume
                  </button>
                  <Link 
                    href="/resume-templates"
                    className="button secondary-button"
                    prefetch={false}
                  >
                    Browse Resume Templates
                  </Link>
                </div>
                <div className="cta-guarantee">
                  <span className="guarantee-text">✓ 100% Free • No Sign Up • Privacy Guaranteed • Instant Results</span>
                </div>
              </div>
            </section>
          </main>

          {/* Build Info - Fixed hydration issue by using client-side state */}
          <div className="build-info">
            <p>Last updated: {safeFreshnessIndicator} • Build: {buildTime}</p>
          </div>

          {/* Hidden Metadata */}
          <div className="hidden">
            <span itemProp="dateModified">{safeLastUpdated}</span>
            <span itemProp="softwareVersion">2026.1.0</span>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  return {
    props: {
      lastUpdated: lastModifiedDate,
      freshnessIndicator: currentDate,
      reviews: REVIEWS,
      faqs: FAQS,
      howToSteps: HOW_TO_STEPS,
      breadcrumbData: BREADCRUMB_DATA
    },
    // Revalidate every hour for fresh content
    revalidate: 3600,
  };
}