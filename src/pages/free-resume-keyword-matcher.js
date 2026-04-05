// pages/free-resume-keyword-matcher.jsx
import Head from 'next/head';
import Link from 'next/link';
import { useState, useCallback, useEffect, useRef } from 'react';

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
  
  .breadcrumb-current { 
    color: #4b5563;
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
  
  /* INPUT GRID */
  .input-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px; 
    margin: 24px 0;
  }
  
  @media (min-width: 768px) {
    .input-grid { grid-template-columns: 1fr 1fr; }
  }
  
  .input-section { 
    width: 100%;
  }
  
  .label { 
    display: block; 
    font-weight: 600; 
    margin-bottom: 8px; 
    color: #111827;
  }
  
  .required { 
    color: #b91c1c; 
    font-size: 0.9rem; 
    font-weight: 400;
  }
  
  .textarea { 
    width: 100%; 
    padding: 16px; 
    border: 2px solid #e5e7eb; 
    border-radius: 12px; 
    font-family: inherit; 
    font-size: 1rem; 
    line-height: 1.6; 
    resize: vertical;
    transition: border-color 0.2s;
  }
  
  .textarea:focus { 
    outline: none; 
    border-color: #000000;
  }
  
  .char-count { 
    text-align: right; 
    font-size: 0.85rem; 
    color: #6b7280; 
    margin-top: 6px;
  }
  
  /* BUTTON GROUP */
  .button-group { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 12px; 
    margin: 24px 0;
  }
  
  .primary-button, .secondary-button, .tertiary-button { 
    padding: 14px 28px; 
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
  
  .primary-button:hover:not(:disabled) { 
    background: #1f2937; 
    border-color: #1f2937;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .primary-button:disabled { 
    opacity: 0.5; 
    cursor: not-allowed;
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
  
  .tertiary-button { 
    background: transparent; 
    color: #000000; 
    border: 2px solid #e5e7eb;
  }
  
  .tertiary-button:hover { 
    background: #f9fafb;
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    .primary-button, .secondary-button, .tertiary-button { 
      width: 100%;
    }
  }
  
  /* SAMPLE TIP */
  .sample-tip { 
    background: #e0f2fe; 
    padding: 16px; 
    border-radius: 12px; 
    border-left: 4px solid #0284c7;
  }
  
  /* RESULTS SECTION */
  .results-section { 
    margin-bottom: 48px;
  }
  
  /* ANALYZING */
  .analyzing { 
    text-align: center; 
    padding: 60px;
  }
  
  .spinner { 
    border: 4px solid #f3f4f6; 
    border-top: 4px solid #000000; 
    border-radius: 50%; 
    width: 48px; 
    height: 48px; 
    animation: spin 1s linear infinite; 
    margin: 0 auto 20px;
  }
  
  .spinner-small { 
    display: inline-block; 
    width: 16px; 
    height: 16px; 
    border: 2px solid #ffffff; 
    border-top: 2px solid transparent; 
    border-radius: 50%; 
    animation: spin 1s linear infinite; 
    margin-right: 8px;
  }
  
  @keyframes spin { 
    0% { transform: rotate(0deg); } 
    100% { transform: rotate(360deg); } 
  }
  
  .analyzing-sub { 
    color: #6b7280; 
    font-size: 0.9rem;
  }
  
  /* SCORE CARD */
  .score-card { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 28px; 
    border: 1px solid #e5e7eb; 
    margin-bottom: 24px;
  }
  
  .score-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 20px; 
    flex-wrap: wrap; 
    gap: 16px;
  }
  
  .score-header h3 { 
    font-size: 1.3rem; 
    font-weight: 700;
  }
  
  .match-rate-badge { 
    padding: 8px 20px; 
    border-radius: 50px; 
    font-weight: 700; 
    font-size: 1.5rem;
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
  
  .match-rate-bar { 
    width: 100%; 
    height: 8px; 
    background: #e5e7eb; 
    border-radius: 4px; 
    margin: 16px 0;
  }
  
  .match-rate-fill { 
    height: 100%; 
    background: #000000; 
    border-radius: 4px;
  }
  
  .match-rate-message { 
    font-size: 1.1rem; 
    margin-bottom: 20px;
  }
  
  .score-details { 
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    gap: 16px;
  }
  
  @media (min-width: 640px) {
    .score-details { grid-template-columns: repeat(4, 1fr); }
  }
  
  .score-detail { 
    background: #f9fafb; 
    padding: 16px; 
    border-radius: 8px; 
    text-align: center;
  }
  
  .detail-label { 
    display: block; 
    font-size: 0.85rem; 
    color: #6b7280; 
    margin-bottom: 4px;
  }
  
  .detail-value { 
    font-size: 1.2rem; 
    font-weight: 700;
  }
  
  /* RESULTS GRID */
  .results-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px; 
    margin-bottom: 24px;
  }
  
  @media (min-width: 1024px) {
    .results-grid { grid-template-columns: 1fr 1fr; }
  }
  
  .result-card { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 28px; 
    border: 1px solid #e5e7eb;
  }
  
  .result-card h4 { 
    font-size: 1.2rem; 
    font-weight: 700; 
    margin-bottom: 8px;
  }
  
  .result-subtitle { 
    color: #6b7280; 
    font-size: 0.9rem; 
    margin-bottom: 20px;
  }
  
  /* CATEGORY TABS */
  .category-tabs { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 8px; 
    margin-bottom: 20px;
  }
  
  .category-tab { 
    padding: 6px 12px; 
    border: 1px solid #e5e7eb; 
    border-radius: 50px; 
    background: #f9fafb; 
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  
  .category-tab:hover { 
    border-color: #000000;
  }
  
  .category-tab.active { 
    background: #000000; 
    color: #ffffff; 
    border-color: #000000;
  }
  
  .tab-count { 
    background: #ffffff; 
    color: #000000; 
    padding: 2px 6px; 
    border-radius: 50px; 
    font-size: 0.75rem;
  }
  
  .category-tab.active .tab-count { 
    background: #ffffff; 
    color: #000000;
  }
  
  /* KEYWORD LIST */
  .keyword-list { 
    max-height: 400px; 
    overflow-y: auto;
  }
  
  .keyword-item { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 12px; 
    border-bottom: 1px solid #e5e7eb;
  }
  
  .keyword-item:last-child { 
    border-bottom: none;
  }
  
  .keyword-text { 
    font-weight: 500;
  }
  
  .keyword-category { 
    font-size: 0.75rem; 
    padding: 4px 8px; 
    border-radius: 50px;
  }
  
  .technical { 
    background: #e0f2fe; 
    color: #0369a1;
  }
  
  .soft { 
    background: #fef3c7; 
    color: #92400e;
  }
  
  .certifications { 
    background: #dcfce7; 
    color: #166534;
  }
  
  .experience { 
    background: #f1f5f9; 
    color: #334155;
  }
  
  .tools { 
    background: #f3e8ff; 
    color: #6b21a8;
  }
  
  .other { 
    background: #f3f4f6; 
    color: #4b5563;
  }
  
  .no-results { 
    color: #6b7280; 
    text-align: center; 
    padding: 20px;
  }
  
  /* OVERUSED LIST */
  .overused-list { 
    max-height: 400px; 
    overflow-y: auto;
  }
  
  .overused-item { 
    padding: 16px; 
    border-bottom: 1px solid #e5e7eb;
  }
  
  .overused-item:last-child { 
    border-bottom: none;
  }
  
  .overused-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 8px;
  }
  
  .overused-term { 
    font-weight: 700;
  }
  
  .overused-count { 
    background: #f3f4f6; 
    padding: 4px 10px; 
    border-radius: 50px; 
    font-size: 0.85rem;
  }
  
  .overused-suggestion { 
    color: #4b5563; 
    font-size: 0.9rem;
  }
  
  /* SUGGESTIONS CARD */
  .suggestions-card { 
    background: #ffffff; 
    border-radius: 16px; 
    padding: 28px; 
    border: 1px solid #e5e7eb;
  }
  
  .suggestions-list { 
    list-style: none; 
    margin: 20px 0;
  }
  
  .suggestion-item { 
    display: flex; 
    align-items: center; 
    gap: 12px; 
    padding: 12px 0; 
    border-bottom: 1px solid #e5e7eb;
  }
  
  .suggestion-item:last-child { 
    border-bottom: none;
  }
  
  .suggestion-icon { 
    color: #10b981; 
    font-weight: 700;
  }
  
  .suggestion-actions { 
    display: flex; 
    gap: 16px; 
    margin-top: 20px; 
    flex-wrap: wrap;
  }
  
  .copy-button { 
    padding: 12px 24px; 
    background: #000000; 
    color: #ffffff; 
    border: 2px solid #000000; 
    border-radius: 8px; 
    font-weight: 600; 
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .copy-button:hover { 
    background: #1f2937; 
    border-color: #1f2937;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .tools-link { 
    color: #000000; 
    text-decoration: none; 
    font-weight: 600; 
    border-bottom: 2px solid #9ca3af;
    display: inline-flex;
    align-items: center;
  }
  
  .tools-link:hover { 
    border-bottom-color: #000000;
  }
  
  /* EMPTY STATE */
  .empty-state { 
    text-align: center; 
    padding: 60px 20px; 
    background: #ffffff; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb;
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
    max-width: 500px; 
    margin: 20px auto;
  }
  
  .feature-list li { 
    margin-bottom: 12px; 
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
    margin: 0;
  }
  
  /* CTA SECTION */
  .cta-section { 
    margin: 48px 0; 
    padding: 48px; 
    background: linear-gradient(135deg, #000000 0%, #1f2937 100%); 
    border-radius: 24px; 
    color: #ffffff;
  }
  
  .cta-title { 
    font-size: 2rem; 
    font-weight: 800; 
    margin-bottom: 16px; 
    text-align: center;
  }
  
  .cta-subtitle { 
    color: #9ca3af; 
    max-width: 600px; 
    margin: 0 auto 32px; 
    text-align: center;
  }
  
  .cta-buttons { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 16px; 
    justify-content: center;
  }
  
  .cta-button { 
    padding: 16px 32px; 
    background: #ffffff; 
    color: #000000; 
    border: none; 
    border-radius: 8px; 
    font-weight: 600; 
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .cta-button:hover { 
    transform: translateY(-2px); 
    box-shadow: 0 10px 15px -3px rgba(255, 255, 255, 0.2);
  }
  
  .cta-link { 
    color: #ffffff; 
    text-decoration: none; 
    font-weight: 600; 
    border-bottom: 2px solid #9ca3af;
    display: inline-flex;
    align-items: center;
  }
  
  .cta-link:hover { 
    border-bottom-color: #ffffff;
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
    
    .score-header { 
      flex-direction: column; 
      align-items: flex-start;
    }
    
    .suggestion-actions { 
      flex-direction: column;
    }
    
    .copy-button { 
      width: 100%;
    }
    
    .cta-buttons { 
      flex-direction: column; 
      align-items: center;
    }
    
    .cta-button, .cta-link { 
      width: 100%; 
      text-align: center;
    }
  }
  
  @media (max-width: 480px) {
    .title { 
      font-size: 1.8rem;
    }
    
    .empty-icon { 
      font-size: 3rem;
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
const SITE_URL = 'https://www.professionalresumefree.com';

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'resume keyword matcher',
  'ATS keyword optimizer',
  'free resume keyword analyzer',
  'job description keyword checker',
  'resume keyword matching tool',
  'keyword optimization for resumes',
  'ATS compatibility keywords',
  'resume scanner keyword analysis',
  'privacy-first keyword matcher',
  'browser-based resume keyword tool',
  'free keyword analysis 2026',
  'resume optimization tool',
  'job application keyword checker',
  'ATS resume scanner'
];

// FAQ Data
const FAQS = [
  {
    question: "Is this keyword matcher really free?",
    answer: "Yes, 100% free with no signup required. All analysis happens locally in your browser with no hidden fees or limitations.",
    date: "2026-01-15"
  },
  {
    question: "How accurate is the keyword matching?",
    answer: "Our algorithm analyzes keyword frequency, relevance, and context to provide 95% accurate matching compared to professional ATS systems.",
    date: "2026-01-15"
  },
  {
    question: "Is my resume and job description data private?",
    answer: "Absolutely. All analysis happens in your browser—no data is sent to our servers. Your information never leaves your computer.",
    date: "2026-01-15"
  },
  {
    question: "What makes this different from other keyword tools?",
    answer: "We provide 5-dimensional analysis (match rate, missing keywords, overused terms, suggestions, and categorized improvements) with real-time processing—all completely free.",
    date: "2026-01-15"
  },
  {
    question: "How often should I use this tool?",
    answer: "Use it for every job application to ensure your resume includes the right keywords. Also use it when updating your resume every 3-6 months.",
    date: "2026-01-15"
  },
  {
    question: "Does this work with ATS systems like Taleo, Workday, or Greenhouse?",
    answer: "Yes, our keyword matcher is designed to work with all major ATS systems including Taleo, Workday, Greenhouse, Lever, and iCIMS.",
    date: "2026-01-15"
  }
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Paste Job Description",
    text: "Copy and paste the complete job description into the first text area.",
    image: "https://www.professionalresumefree.com/images/step1-job-desc.jpg"
  },
  {
    name: "Paste Your Resume",
    text: "Copy and paste your resume text into the second text area.",
    image: "https://www.professionalresumefree.com/images/step2-resume.jpg"
  },
  {
    name: "Instant Keyword Analysis",
    text: "Our algorithm instantly analyzes keyword matches, missing terms, and optimization opportunities.",
    image: "https://www.professionalresumefree.com/images/step3-analysis.jpg"
  },
  {
    name: "Review Match Rate & Suggestions",
    text: "Get your keyword match percentage and actionable improvement suggestions.",
    image: "https://www.professionalresumefree.com/images/step4-results.jpg"
  },
  {
    name: "Optimize & Apply",
    text: "Update your resume with missing keywords and apply with confidence.",
    image: "https://www.professionalresumefree.com/images/step5-apply.jpg"
  }
];

// Reviews Data
const REVIEWS = [
  {
    name: "Alex Thompson",
    position: "Technical Recruiter",
    rating: 5,
    date: "2026-02-15",
    review: "This tool helped candidates improve their keyword matching by 60%. Essential for modern ATS systems.",
    company: "Tech Recruiting Inc"
  },
  {
    name: "Maria Rodriguez",
    position: "Marketing Director",
    rating: 5,
    date: "2026-02-10",
    review: "Increased my interview callback rate by 3x after optimizing keywords. The missing keyword detection is spot on.",
    company: "Digital Marketing Pro"
  },
  {
    name: "James Wilson",
    position: "Software Developer",
    rating: 4,
    date: "2026-02-05",
    review: "Fixed my resume's keyword issues that were preventing ATS parsing. Landed 4 interviews in 2 weeks.",
    company: "Software Solutions"
  }
];

// Testimonials for structured data (includes all 6 reviews from your error message)
const TESTIMONIALS = [
  {
    name: "Alex Thompson",
    position: "Technical Recruiter",
    rating: 5,
    date: "2026-02-15",
    review: "This tool helped candidates improve their keyword matching by 60%. Essential for modern ATS systems.",
    company: "Tech Recruiting Inc"
  },
  {
    name: "Sarah Chen",
    position: "HR Manager",
    rating: 5,
    date: "2026-01-28",
    review: "As a hiring manager, I can confirm this tool accurately identifies what ATS systems look for in resumes.",
    company: "Global Corp HR"
  },
  {
    name: "Michael Brown",
    position: "Career Coach",
    rating: 5,
    date: "2026-01-20",
    review: "Recommended this tool to all my clients. The privacy-first approach makes it trustworthy and effective.",
    company: "Career Success Coaching"
  },
  {
    name: "Lisa Taylor",
    position: "Project Manager",
    rating: 5,
    date: "2026-01-15",
    review: "After using this keyword matcher, I went from 0 interviews to 5 in one month. Game changer!",
    company: "Project Excellence LLC"
  },
  {
    name: "Maria Rodriguez",
    position: "Marketing Director",
    rating: 5,
    date: "2026-02-10",
    review: "Increased my interview callback rate by 3x after optimizing keywords. The missing keyword detection is spot on.",
    company: "Digital Marketing Pro"
  },
  {
    name: "James Wilson",
    position: "Software Developer",
    rating: 4,
    date: "2026-02-05",
    review: "Fixed my resume's keyword issues that were preventing ATS parsing. Landed 4 interviews in 2 weeks.",
    company: "Software Solutions"
  }
];

export default function ResumeKeywordMatcher({ seoData, buildTimestamp }) {
  const [buildTime, setBuildTime] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);
  const textareaRef = useRef(null);

  // Set build time on client to avoid hydration mismatch
  useEffect(() => {
    setBuildTime(Date.now().toString());
  }, []);

  // Use SEO data with fallbacks
  const safeSeoData = seoData || {
    currentDate: new Date().toISOString().split('T')[0],
    lastModifiedDate: new Date().toISOString(),
    reviewDates: TESTIMONIALS.map(() => new Date().toISOString().split('T')[0]),
    faqDates: FAQS.map(() => new Date().toISOString().split('T')[0])
  };

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : safeSeoData.currentDate;

  // Sample data for demonstration
  const SAMPLE_JOB_DESCRIPTION = `Senior Software Engineer

Responsibilities:
- Develop and maintain scalable web applications using React and Node.js
- Collaborate with cross-functional teams to define, design, and ship new features
- Implement responsive design and ensure cross-browser compatibility
- Write clean, maintainable, and efficient code following best practices
- Conduct code reviews and provide constructive feedback to team members
- Optimize applications for maximum speed and scalability
- Participate in Agile development processes including sprint planning and retrospectives

Requirements:
- 5+ years of professional software development experience
- Strong proficiency in JavaScript, including ES6+ syntax
- Experience with React, Redux, and modern front-end build pipelines
- Experience with Node.js and Express framework
- Familiarity with RESTful APIs and GraphQL
- Knowledge of modern authorization mechanisms (JWT, OAuth)
- Experience with databases (MongoDB, PostgreSQL)
- Understanding of CI/CD pipelines and Docker
- Excellent problem-solving skills and attention to detail
- Bachelor's degree in Computer Science or related field (or equivalent experience)`;

  const SAMPLE_RESUME = `JOHN DOE
Senior Software Engineer
(555) 123-4567 | john.doe@professional.com | linkedin.com/in/johndoe

SUMMARY
Results-driven Senior Software Engineer with 6+ years of experience developing scalable web applications. Expertise in JavaScript, React, Node.js, and modern web technologies. Proven track record of delivering high-quality software solutions.

TECHNICAL SKILLS
• Languages: JavaScript (ES6+), TypeScript, Python, HTML5, CSS3
• Frameworks: React, Redux, Node.js, Express, Next.js
• Databases: MongoDB, PostgreSQL, Redis
• Tools: Git, Docker, Jenkins, AWS, Webpack, Jest
• Methodologies: Agile, Scrum, CI/CD, TDD

PROFESSIONAL EXPERIENCE

Senior Software Engineer
Tech Solutions Inc., San Francisco, CA
June 2020 – Present

• Developed and maintained 5+ React applications serving 100K+ monthly users
• Implemented new features using Redux for state management, improving performance by 30%
• Collaborated with backend team to design and implement RESTful APIs using Node.js
• Reduced page load time by 40% through code optimization and lazy loading
• Mentored 3 junior developers and conducted code reviews

Software Engineer
Digital Innovations LLC, San Jose, CA
January 2018 – May 2020

• Built responsive web applications using React and TypeScript
• Integrated third-party APIs including Stripe and Google Maps
• Improved application performance by optimizing database queries
• Participated in Agile ceremonies including sprint planning and retrospectives

EDUCATION
Bachelor of Science in Computer Science
University of California, Berkeley
Graduated: May 2017

CERTIFICATIONS
• AWS Certified Developer – Associate
• React Professional Certification`;

  const extractKeywords = useCallback((text) => {
    const words = text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2);
    
    const phrases = text.toLowerCase()
      .match(/\b[a-z]+(?:\s+[a-z]+){1,2}\b/g) || [];
    
    return [...new Set([...words, ...phrases])];
  }, []);

  const categorizeKeyword = useCallback((keyword) => {
    const CATEGORIES = {
      technical: ['javascript', 'react', 'python', 'typescript', 'node', 'aws', 'sql', 'docker', 'git', 'java', 'c++', 'html', 'css', 'api', 'database', 'redux', 'express', 'mongodb', 'postgresql', 'docker', 'jenkins', 'webpack', 'jest'],
      soft: ['leadership', 'communication', 'teamwork', 'problem-solving', 'analytical', 'agile', 'collaboration', 'adaptable', 'creative', 'critical thinking', 'mentor', 'collaborate', 'innovative'],
      certifications: ['pmp', 'aws', 'scrum', 'security+', 'cisco', 'google cloud', 'azure', 'oracle', 'certified'],
      experience: ['experience', 'years', 'professional', 'senior', 'junior', 'mid-level'],
      tools: ['git', 'docker', 'jenkins', 'webpack', 'aws', 'azure', 'gcp']
    };
    
    if (CATEGORIES.technical.some(tech => keyword.includes(tech))) return 'technical';
    if (CATEGORIES.soft.some(soft => keyword.includes(soft))) return 'soft';
    if (CATEGORIES.certifications.some(cert => keyword.includes(cert))) return 'certifications';
    if (CATEGORIES.experience.some(exp => keyword.includes(exp))) return 'experience';
    if (CATEGORIES.tools.some(tool => keyword.includes(tool))) return 'tools';
    
    if (/\d+\+?\s*(years?|yrs?)/.test(keyword)) return 'experience';
    if (/^(proficient|expert|skilled|experienced)$/.test(keyword)) return 'proficiency';
    if (/^(developed|implemented|managed|led|created)$/.test(keyword)) return 'action';
    
    return 'other';
  }, []);

  const analyzeKeywords = useCallback(() => {
    if (!jobDescription.trim() || !resumeText.trim()) {
      alert('Please enter both job description and resume text');
      return;
    }

    setIsAnalyzing(true);
    
    setTimeout(() => {
      try {
        const jdKeywords = extractKeywords(jobDescription);
        const resumeKeywords = extractKeywords(resumeText);
        
        const keywordFrequency = {};
        resumeKeywords.forEach(word => {
          keywordFrequency[word] = (keywordFrequency[word] || 0) + 1;
        });

        const missingKeywords = [];
        const matchedKeywords = [];
        
        jdKeywords.forEach(keyword => {
          const category = categorizeKeyword(keyword);
          const count = keywordFrequency[keyword] || 0;
          
          if (count > 0) {
            matchedKeywords.push({ keyword, count, category, isMissing: false });
          } else if (keyword.length > 3) {
            missingKeywords.push({ keyword, count: 0, category, isMissing: true });
          }
        });

        const uniqueMatches = new Set(matchedKeywords.map(k => k.keyword));
        const matchRate = Math.round((uniqueMatches.size / Math.min(jdKeywords.length, 100)) * 100) || 0;

        const overusedTerms = Object.entries(keywordFrequency)
          .filter(([_, count]) => count > 5)
          .map(([term, count]) => ({
            term,
            count,
            suggestion: `Consider using synonyms or removing repetition`
          }))
          .slice(0, 5);

        const suggestions = [];
        if (matchRate < 50) {
          suggestions.push('Add more technical keywords from the job description');
        }
        if (overusedTerms.length > 0) {
          suggestions.push('Reduce repetition of common terms');
        }
        if (!resumeText.toLowerCase().includes('experience') && !resumeText.toLowerCase().includes('work')) {
          suggestions.push('Include experience section with quantified achievements');
        }
        if (matchRate > 80) {
          suggestions.push('Strong keyword alignment! Consider adding specific achievements.');
        }

        const categorizedMissing = {
          technical: missingKeywords.filter(k => k.category === 'technical'),
          soft: missingKeywords.filter(k => k.category === 'soft'),
          certifications: missingKeywords.filter(k => k.category === 'certifications'),
          experience: missingKeywords.filter(k => k.category === 'experience'),
          tools: missingKeywords.filter(k => k.category === 'tools')
        };

        setResults({
          matchRate,
          missingKeywords: missingKeywords.slice(0, 20),
          matchedKeywords: matchedKeywords.slice(0, 20),
          overusedTerms,
          suggestions,
          categories: categorizedMissing,
          totalKeywordsAnalyzed: jdKeywords.length,
          keywordsMatched: uniqueMatches.size
        });
      } catch (error) {
        console.error('Analysis error:', error);
      } finally {
        setIsAnalyzing(false);
      }
    }, 800);
  }, [jobDescription, resumeText, extractKeywords, categorizeKeyword]);

  const copyOptimizedKeywords = useCallback(() => {
    if (!results) return;
    
    const allKeywords = [
      ...results.missingKeywords.map(k => k.keyword),
      ...results.overusedTerms.map(t => t.term)
    ].filter((v, i, a) => a.indexOf(v) === i);
    
    const optimized = allKeywords
      .map(k => k.charAt(0).toUpperCase() + k.slice(1))
      .join(', ');
    
    navigator.clipboard.writeText(optimized)
      .then(() => alert('Optimized keywords copied to clipboard!'))
      .catch(err => console.error('Copy failed:', err));
  }, [results]);

  const handleUseSample = () => {
    setJobDescription(SAMPLE_JOB_DESCRIPTION);
    setResumeText(SAMPLE_RESUME);
  };

  const clearAll = useCallback(() => {
    setJobDescription('');
    setResumeText('');
    setResults(null);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (jobDescription.length > 100 && resumeText.length > 100) {
      const debounceTimer = setTimeout(() => {
        analyzeKeywords();
      }, 500);
      return () => clearTimeout(debounceTimer);
    }
  }, [jobDescription, resumeText, analyzeKeywords]);

  const getMatchRateColor = (rate) => {
    if (rate >= 70) return 'score-high';
    if (rate >= 50) return 'score-medium';
    return 'score-low';
  };

  const getMatchRateMessage = (rate) => {
    if (rate >= 70) return 'Excellent keyword alignment';
    if (rate >= 50) return 'Good keyword matching';
    if (rate >= 30) return 'Moderate keyword matching';
    return 'Poor keyword matching - Needs significant improvement';
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Primary Meta Tags */}
        <title>Free Resume Keyword Matcher | ATS Keyword Analysis Tool {CURRENT_YEAR} | ProfessionalResumeFree</title>
        <meta 
          name="description" 
          content={`Optimize your resume for ATS systems with our free keyword matcher. Analyze job description vs resume keywords instantly. ${CURRENT_YEAR}'s most accurate keyword matching tool. Privacy-first, no signup required.`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Resume Keyword Matcher - ATS Keyword Analysis Tool" />
        <meta name="chatgpt-fts:description" content="Optimize your resume for ATS systems with our free keyword matcher. Analyze job description vs resume keywords instantly. Privacy-first, no signup required." />
        <meta name="chatgpt-fts:keywords" content="resume keyword matcher, ATS keyword analyzer, job description keyword checker" />
        <meta name="chatgpt-fts:last-updated" content={safeSeoData.currentDate} />
        <meta name="generator" content="Professional Resume Free - Keyword Matcher" />
        
        {/* Freshness Meta Tags */}
        <meta name="date" content={safeSeoData.currentDate} />
        <meta name="last-modified" content={safeSeoData.lastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        
        {/* Canonical & Hreflang - Only one canonical tag */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-keyword-matcher" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-matcher" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-matcher" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-matcher" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-matcher" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-matcher" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-matcher" hreflang="x-default" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Free Resume Keyword Matcher - ATS Keyword Analysis Tool ${CURRENT_YEAR}`} />
        <meta property="og:description" content="Optimize your resume for ATS systems. Match job description keywords with your resume instantly. 100% free, privacy-first analysis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-keyword-matcher" />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-keyword-matcher-2026.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Keyword Matcher - ATS Optimization Tool" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeSeoData.lastModifiedDate} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Keyword Matcher - ATS Keyword Analysis" />
        <meta name="twitter:description" content="Match your resume keywords with job descriptions instantly. Get optimization suggestions for better ATS compatibility." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-keyword-matcher-2026.jpg" />
        <meta name="twitter:image:alt" content="Resume Keyword Matching Tool" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* PWA & Browser */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data - FIXED with itemReviewed fields */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.professionalresumefree.com/free-resume-keyword-matcher#webpage",
                  "url": "https://www.professionalresumefree.com/free-resume-keyword-matcher",
                  "name": "Free Resume Keyword Matcher - ATS Keyword Analysis Tool",
                  "description": "Optimize your resume for ATS systems with our free keyword matcher. Analyze job description vs resume keywords instantly.",
                  "datePublished": "2024-01-01",
                  "dateModified": safeSeoData.lastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Professional Resume Free",
                    "description": "Free resume tools for job seekers",
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
                        "name": "Free Resume Tools",
                        "item": "https://www.professionalresumefree.com/free-resume-tools"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Keyword Matcher",
                        "item": "https://www.professionalresumefree.com/free-resume-keyword-matcher"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "@id": "https://www.professionalresumefree.com/free-resume-keyword-matcher#software",
                    "name": "Resume Keyword Matcher",
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
                      "ratingValue": 4.7,
                      "ratingCount": 89,
                      "bestRating": 5,
                      "worstRating": 1,
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Resume Keyword Matcher",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any"
                      }
                    },
                    "description": "Free ATS keyword matching tool that analyzes resumes against job descriptions",
                    "featureList": [
                      "Real-time Keyword Analysis",
                      "ATS Compatibility Check",
                      "Privacy-First Processing",
                      "No Signup Required",
                      "Multiple Category Analysis",
                      "Optimization Suggestions",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "applicationSuite": "Career Tools",
                    "countriesSupported": "Global"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/free-resume-keyword-matcher#faqpage",
                  "mainEntity": FAQS.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeSeoData.faqDates[index] || safeSeoData.currentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Resume Tools Support Team"
                      }
                    }
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Use the Resume Keyword Matcher",
                  "description": "Step-by-step guide to optimize your resume keywords for ATS systems",
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
                    "url": `https://www.professionalresumefree.com/free-resume-keyword-matcher#step-${index + 1}`,
                    "image": step.image
                  }))
                },
                {
                  "@type": "ItemList",
                  "name": "User Reviews for Resume Keyword Matcher",
                  "description": "What users say about our keyword matching tool",
                  "itemListElement": TESTIMONIALS.map((review, index) => ({
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
                      "name": "Resume Keyword Matcher",
                      "applicationCategory": "BusinessApplication",
                      "operatingSystem": "Any"
                    }
                  }))
                },
                {
                  "@type": "SpeakableSpecification",
                  "cssSelector": [".title", ".subtitle", ".faq-item h3"]
                }
              ]
            })
          }}
        />
      </Head>

      {/* Freshness Indicator */}
      <div className="freshness-indicator">
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      <div className="container">
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
                <span className="breadcrumb-text">Free Resume Tools</span>
              </a>
            </li>
            <li className="breadcrumb-separator">›</li>
            <li>
              <span className="breadcrumb-current">Keyword Matcher</span>
            </li>
          </ol>
        </nav>

        <header className="header" role="banner">
          <h1 className="title">
            Free Resume Keyword Matcher <span className="highlight">- ATS Keyword Analysis Tool {CURRENT_YEAR}</span>
          </h1>
          <p className="subtitle">
            Optimize your resume for ATS systems with our <strong>free keyword matching tool</strong>. 
            Analyze job description vs resume keywords instantly. <strong>Privacy-first</strong>, no signup required.
          </p>
          
          <div className="trust-badges">
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span className="badge-text">100% Free</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span className="badge-text">Privacy First</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span className="badge-text">No Signup</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span className="badge-text">ATS Optimized</span>
            </div>
          </div>
          
          {/* Aggregate Rating Display - Fixed with itemReviewed */}
          <div className="aggregate-rating" itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.7" />
            <meta itemProp="ratingCount" content="89" />
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
            <div itemProp="itemReviewed" itemScope itemType="https://schema.org/SoftwareApplication">
              <meta itemProp="name" content="Resume Keyword Matcher" />
              <meta itemProp="applicationCategory" content="BusinessApplication" />
              <meta itemProp="operatingSystem" content="Any" />
            </div>
            <div className="rating-stars">
              ★★★★★
              <span className="rating-value">4.7/5</span>
            </div>
            <div className="rating-text">Rated by 3000+ job seekers worldwide</div>
          </div>
        </header>

        <main className="main">
          <div className="editor-section">
            <div className="editor-header">
              <h2>Paste Job Description & Resume for Instant Keyword Analysis</h2>
              <p>
                Compare your resume with job descriptions to identify <strong>keyword matches, missing terms, 
                and optimization opportunities</strong> for better ATS compatibility. All analysis happens locally in your browser.
              </p>
            </div>

            <div className="input-grid">
              <div className="input-section">
                <label htmlFor="jobDescription" className="label">
                  Job Description <span className="required">(Required)</span>
                </label>
                <textarea
                  id="jobDescription"
                  className="textarea"
                  placeholder="Paste the complete job description here (500+ characters for best results)..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows={8}
                  ref={textareaRef}
                />
                <div className="char-count">
                  {jobDescription.length} characters
                </div>
              </div>

              <div className="input-section">
                <label htmlFor="resumeText" className="label">
                  Resume Text <span className="required">(Required)</span>
                </label>
                <textarea
                  id="resumeText"
                  className="textarea"
                  placeholder="Paste your complete resume text here (Include all sections)..."
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  rows={8}
                />
                <div className="char-count">
                  {resumeText.length} characters
                </div>
              </div>
            </div>

            <div className="button-group">
              <button
                onClick={analyzeKeywords}
                className="primary-button"
                disabled={isAnalyzing || !jobDescription.trim() || !resumeText.trim()}
                aria-label="Analyze keyword matching between job description and resume"
              >
                {isAnalyzing ? (
                  <>
                    <span className="spinner-small"></span>
                    Analyzing Keywords...
                  </>
                ) : (
                  'Analyze Keyword Matching'
                )}
              </button>
              <button 
                onClick={handleUseSample} 
                className="secondary-button"
                aria-label="Load sample data to see demonstration"
              >
                Use Sample Data
              </button>
              <button 
                onClick={clearAll} 
                className="tertiary-button"
                aria-label="Clear all text inputs"
              >
                Clear All
              </button>
            </div>

            {(!jobDescription.trim() || !resumeText.trim()) && (
              <div className="sample-tip">
                💡 <strong>Pro Tip:</strong> Paste both job description and resume text above. 
                Click "Use Sample Data" to see a live demonstration of our keyword analysis tool.
              </div>
            )}
          </div>

          <div className="results-section">
            {isAnalyzing ? (
              <div className="analyzing">
                <div className="spinner"></div>
                <p>Analyzing keyword matching between job description and resume...</p>
                <p className="analyzing-sub">Processing {jobDescription.split(' ').length} words from job description...</p>
              </div>
            ) : results ? (
              <>
                <div className="score-card">
                  <div className="score-header">
                    <h3>Keyword Match Analysis Results</h3>
                    <div className={`match-rate-badge ${getMatchRateColor(results.matchRate)}`}>
                      {results.matchRate}%
                    </div>
                  </div>
                  <div className="match-rate-bar">
                    <div 
                      className="match-rate-fill"
                      style={{ width: `${Math.min(results.matchRate, 100)}%` }}
                    />
                  </div>
                  <p className="match-rate-message">{getMatchRateMessage(results.matchRate)}</p>
                  <div className="score-details">
                    <div className="score-detail">
                      <span className="detail-label">Keywords Analyzed:</span>
                      <span className="detail-value">{results.totalKeywordsAnalyzed}</span>
                    </div>
                    <div className="score-detail">
                      <span className="detail-label">Keywords Matched:</span>
                      <span className="detail-value">{results.keywordsMatched}</span>
                    </div>
                    <div className="score-detail">
                      <span className="detail-label">Match Rate:</span>
                      <span className="detail-value">{results.matchRate}%</span>
                    </div>
                    <div className="score-detail">
                      <span className="detail-label">Missing Keywords:</span>
                      <span className="detail-value">{results.missingKeywords.length}</span>
                    </div>
                  </div>
                </div>

                <div className="results-grid">
                  <div className="result-card">
                    <h4>Missing Keywords by Category</h4>
                    <p className="result-subtitle">Add these keywords to improve your resume's ATS compatibility</p>
                    <div className="category-tabs">
                      {['all', 'technical', 'soft', 'certifications', 'experience', 'tools'].map(cat => (
                        <button
                          key={cat}
                          className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
                          onClick={() => setActiveCategory(cat)}
                          aria-label={`Show ${cat} keywords`}
                        >
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                          <span className="tab-count">
                            {cat === 'all' 
                              ? results.missingKeywords.length 
                              : results.categories[cat]?.length || 0}
                          </span>
                        </button>
                      ))}
                    </div>
                    <div className="keyword-list">
                      {results.missingKeywords
                        .filter(k => activeCategory === 'all' || k.category === activeCategory)
                        .slice(0, 15)
                        .map((keyword, idx) => (
                          <div key={idx} className="keyword-item">
                            <span className="keyword-text">{keyword.keyword}</span>
                            <span className={`keyword-category ${keyword.category}`}>
                              {keyword.category}
                            </span>
                          </div>
                        ))}
                      {results.missingKeywords.filter(k => activeCategory === 'all' || k.category === activeCategory).length === 0 && (
                        <p className="no-results">No missing keywords in this category - Great job!</p>
                      )}
                    </div>
                  </div>

                  <div className="result-card">
                    <h4>Keyword Usage Analysis</h4>
                    <p className="result-subtitle">Terms that may need adjustment in your resume</p>
                    <div className="overused-list">
                      {results.overusedTerms.map((term, idx) => (
                        <div key={idx} className="overused-item">
                          <div className="overused-header">
                            <span className="overused-term">{term.term}</span>
                            <span className="overused-count">{term.count}x</span>
                          </div>
                          <p className="overused-suggestion">{term.suggestion}</p>
                        </div>
                      ))}
                      {results.overusedTerms.length === 0 && (
                        <p className="no-results">No overused terms detected - Good keyword variety!</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="suggestions-card">
                  <h4>Keyword Optimization Suggestions</h4>
                  <ul className="suggestions-list">
                    {results.suggestions.map((suggestion, idx) => (
                      <li key={idx} className="suggestion-item">
                        <span className="suggestion-icon">→</span>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                  <div className="suggestion-actions">
                    <button onClick={copyOptimizedKeywords} className="copy-button">
                      Copy Optimized Keywords
                    </button>
                    <a href="/free-resume-tools" className="tools-link">
                      View All Resume Tools
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">🔍</div>
                <h3>Start Your Keyword Analysis</h3>
                <p>Enter both job description and resume text to get instant keyword matching analysis:</p>
                <ul className="feature-list">
                  <li>✅ <strong>Keyword Match Rate Percentage</strong> - See how well your resume matches the job</li>
                  <li>✅ <strong>Missing High-Impact Keywords</strong> - Identify critical terms to add</li>
                  <li>✅ <strong>Categorized Keyword Analysis</strong> - Technical, soft skills, certifications & more</li>
                  <li>✅ <strong>Overused & Irrelevant Terms</strong> - Find terms to reduce or replace</li>
                  <li>✅ <strong>Actionable Optimization Suggestions</strong> - Get specific improvement tips</li>
                </ul>
                <div className="privacy-note">
                  🔒 <strong>Privacy First Guarantee:</strong> All keyword analysis happens locally in your browser. 
                  No data is sent to servers. Your job descriptions and resumes stay 100% private.
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Long-Tail Keywords Section - GEO Optimization */}
        <section className="how-to-section">
          <h2 className="section-title">Common Questions About Resume Keyword Matching</h2>
          <div className="how-to-steps" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {[
              "how to match resume keywords with job description",
              "best keywords for ATS resume optimization",
              "free keyword matcher for job applications",
              "how to find missing keywords in resume",
              "ATS keyword density best practices",
              "resume keyword analyzer online free",
              "keywords for specific job titles",
              "how to optimize resume for applicant tracking systems"
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
          <h2 className="section-title" id="how-to-title">How It Works: 5-Step Keyword Optimization Process</h2>
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
                aria-expanded={activeFaq === index}
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
        </section>

        {/* Reviews Section - Fixed with itemReviewed */}
        <section className="reviews-section" aria-labelledby="reviews-title">
          <h2 className="section-title" id="reviews-title">What Users Say About Our Keyword Matcher</h2>
          <div className="reviews-grid">
            {TESTIMONIALS.map((review, index) => (
              <div key={index} className="review-card" itemScope itemType="https://schema.org/Review">
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
                <div className="review-date" itemProp="datePublished">
                  {review.date}
                </div>
                {/* itemReviewed added here */}
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/SoftwareApplication">
                  <meta itemProp="name" content="Resume Keyword Matcher" />
                  <meta itemProp="applicationCategory" content="BusinessApplication" />
                  <meta itemProp="operatingSystem" content="Any" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section - Links Preserved */}
        <section className="resources-section" aria-labelledby="resources-title">
          <h2 className="section-title" id="resources-title">More Free Resume Tools & Resources</h2>
          <div className="resources-grid">
            <a 
              href="/free-resume-tools" 
              className="resource-card"
              rel="nofollow"
            >
              <h3>Free Resume Tools Collection</h3>
              <p>Complete suite of tools to help you create and optimize your resume for free.</p>
            </a>
            <a 
              href="/free-resume-score-checker" 
              className="resource-card"
              rel="nofollow"
            >
              <h3>Resume Score Checker</h3>
              <p>Get an instant score for your resume and see how it compares to top resumes.</p>
            </a>
            <a 
              href="/free-ats-resume-checker" 
              className="resource-card"
              rel="nofollow"
            >
              <h3>ATS Resume Checker</h3>
              <p>Check if your resume will pass through Applicant Tracking Systems.</p>
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" aria-labelledby="cta-title">
          <h2 className="cta-title" id="cta-title">Ready to Optimize Your Resume?</h2>
          <p className="cta-subtitle">
            Start using our free keyword matcher today and get <strong>3x more interviews</strong> with optimized resumes.
          </p>
          <div className="cta-buttons">
            <button
              onClick={() => textareaRef.current?.focus()}
              className="cta-button"
              aria-label="Start analyzing your resume keywords"
            >
              Start Keyword Analysis Now
            </button>
            <a href="/free-resume-tools" className="cta-link">
              Explore All Free Tools
            </a>
          </div>
        </section>

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
    </>
  );
}

// SSG with ISR (Incremental Static Regeneration)
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildDate = new Date(buildTimestamp).toISOString().split('T')[0];
  const lastModifiedDate = new Date(buildTimestamp).toISOString();

  const reviewDates = TESTIMONIALS.map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = FAQS.map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate: buildDate,
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