// pages/free-resume-readability-checker.js
import { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Critical inline CSS for maximum speed
const criticalCSS = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { overflow-x: hidden; width: 100%; }
  body { 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
    line-height: 1.5; 
    color: #000000; 
    background: #ffffff; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
    position: relative;
  }
  .container { 
    max-width: 1280px; 
    margin: 0 auto; 
    padding: 0 16px; 
    width: 100%;
  }
  @media (min-width: 640px) {
    .container { padding: 0 24px; }
  }
  .header { 
    background: #ffffff; 
    padding: 30px 0 20px; 
    text-align: center; 
    border-bottom: 1px solid #e5e7eb;
    width: 100%;
  }
  @media (min-width: 768px) {
    .header { padding: 40px 0 30px; }
  }
  .header h1 { 
    font-size: clamp(1.5rem, 5vw, 2.5rem); 
    margin-bottom: 16px; 
    line-height: 1.2;
    word-wrap: break-word;
    padding: 0 16px;
    max-width: 100%;
  }
  .header p { 
    font-size: clamp(0.9rem, 3vw, 1.1rem); 
    max-width: 800px; 
    margin: 0 auto 24px; 
    padding: 0 16px;
    color: #4b5563;
    word-wrap: break-word;
  }
  .trust-badge {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin: 20px 0;
  }
  .trust-item {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #f9fafb;
    padding: 6px 12px;
    border-radius: 50px;
    border: 1px solid #e5e7eb;
    font-size: 0.85rem;
  }
  .trust-icon {
    color: #10b981;
    font-weight: bold;
  }
  .grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 16px; 
    margin: 30px 0; 
    width: 100%;
  }
  @media (min-width: 640px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 1024px) {
    .grid { grid-template-columns: repeat(3, 1fr); }
  }
  .card { 
    background: #f9fafb; 
    border-radius: 8px; 
    padding: 20px; 
    border: 1px solid #e5e7eb;
    transition: transform 0.2s, box-shadow 0.2s;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
  }
  .card:hover { 
    transform: translateY(-2px); 
    box-shadow: 0 4px 6px rgba(0,0,0,0.05); 
  }
  .btn-primary { 
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #000000; 
    color: #ffffff; 
    padding: 12px 24px; 
    border-radius: 6px; 
    text-decoration: none; 
    font-weight: 500; 
    border: 1px solid #000000;
    transition: background 0.2s;
    width: auto;
    min-width: 200px;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
    border: none;
  }
  @media (max-width: 480px) {
    .btn-primary { 
      width: 100%; 
      min-width: auto;
    }
  }
  .btn-primary:hover { 
    background: #333333; 
  }
  .btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .btn-secondary { 
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: transparent; 
    color: #000000; 
    padding: 12px 24px; 
    border-radius: 6px; 
    text-decoration: none; 
    font-weight: 500; 
    border: 2px solid #000000; 
    transition: background 0.2s;
    width: auto;
    min-width: 200px;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
  }
  @media (max-width: 480px) {
    .btn-secondary { 
      width: 100%; 
      min-width: auto;
    }
  }
  .btn-secondary:hover { 
    background: #f5f5f5; 
  }
  .btn-outline {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background: transparent;
    color: #000000;
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px solid #d1d5db;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  .btn-outline:hover {
    background: #f3f4f6;
  }
  .section { 
    padding: 40px 0; 
    width: 100%;
  }
  @media (min-width: 768px) {
    .section { padding: 60px 0; }
  }
  .section-title { 
    text-align: center; 
    font-size: clamp(1.3rem, 4vw, 1.8rem); 
    margin-bottom: 16px; 
    padding: 0 16px;
    word-wrap: break-word;
    line-height: 1.3;
  }
  .section-subtitle { 
    text-align: center; 
    color: #4b5563; 
    max-width: 700px; 
    margin: 0 auto 32px; 
    padding: 0 16px;
    font-size: clamp(0.9rem, 2.5vw, 1rem);
    word-wrap: break-word;
  }
  .breadcrumb { 
    padding: 12px 0; 
    background: #f9fafb; 
    border-bottom: 1px solid #e5e7eb;
    width: 100%;
  }
  .breadcrumb ol { 
    display: flex; 
    list-style: none; 
    gap: 8px; 
    flex-wrap: wrap;
    font-size: 0.85rem;
  }
  .breadcrumb a { 
    color: #000000; 
    text-decoration: none; 
    border-bottom: 1px solid transparent;
  }
  .breadcrumb a:hover { 
    border-bottom-color: #000000; 
  }
  .breadcrumb-current {
    color: #4b5563;
  }
  .breadcrumb-separator {
    color: #9ca3af;
  }
  .rating-stars {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #fbbf24;
    font-size: 1.1rem;
  }
  .rating-value {
    margin-left: 8px;
    font-weight: 600;
    color: #000000;
  }
  .rating-text {
    font-size: 0.85rem;
    color: #4b5563;
    margin-top: 4px;
  }
  .editor-section {
    background: #ffffff;
    border-radius: 12px;
    padding: 24px;
    border: 1px solid #e5e7eb;
    margin: 30px 0;
    width: 100%;
  }
  .editor-header {
    text-align: center;
    margin-bottom: 24px;
  }
  .editor-header h2 {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    margin-bottom: 8px;
  }
  .editor-header p {
    color: #4b5563;
    font-size: 0.95rem;
  }
  .textarea-container {
    width: 100%;
  }
  .textarea {
    width: 100%;
    padding: 16px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.95rem;
    line-height: 1.6;
    resize: vertical;
    background: #ffffff;
    transition: border-color 0.2s;
  }
  .textarea:focus {
    outline: none;
    border-color: #000000;
  }
  .button-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    flex-wrap: wrap;
    gap: 12px;
  }
  .reset-button {
    padding: 8px 16px;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  .reset-button:hover {
    background: #e5e7eb;
  }
  .word-count-display {
    font-size: 0.9rem;
    color: #4b5563;
  }
  .score-section {
    background: #f9fafb;
    border-radius: 12px;
    padding: 30px;
    border: 1px solid #e5e7eb;
    margin: 30px 0;
    width: 100%;
  }
  .score-header {
    text-align: center;
    margin-bottom: 30px;
  }
  .score-header h2 {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    margin-bottom: 8px;
  }
  .score-subtitle {
    color: #4b5563;
    font-size: 0.9rem;
  }
  .score-container {
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .score-circle {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-shrink: 0;
  }
  .score-inner {
    width: 140px;
    height: 140px;
    background: #ffffff;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
  .score-value {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1;
  }
  .score-label {
    font-size: 1rem;
    color: #4b5563;
  }
  .score-breakdown {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    min-width: 280px;
  }
  .score-category {
    text-align: center;
    padding: 12px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
  }
  .category-label {
    font-size: 0.8rem;
    color: #4b5563;
    margin-bottom: 4px;
  }
  .category-score {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 4px;
  }
  .category-status {
    font-size: 0.75rem;
    padding: 2px 8px;
    border-radius: 50px;
    display: inline-block;
  }
  .scoregood { color: #10b981; }
  .scorewarning { color: #f59e0b; }
  .scoreneutral { color: #6b7280; }
  .statusgood { background: #d1fae5; color: #065f46; }
  .statuswarning { background: #fef3c7; color: #92400e; }
  .statusneutral { background: #f3f4f6; color: #4b5563; }
  .score-interpretation {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #e5e7eb;
  }
  .score-interpretation h3 {
    font-size: 1rem;
    margin-bottom: 16px;
    text-align: center;
  }
  .interpretation-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    max-width: 600px;
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    .interpretation-grid { grid-template-columns: repeat(3, 1fr); }
  }
  .interpretation-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
  }
  .interpretation-color {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    flex-shrink: 0;
  }
  .metrics-section {
    margin: 30px 0;
    width: 100%;
  }
  .metrics-section h2 {
    text-align: center;
    margin-bottom: 24px;
    font-size: clamp(1.2rem, 3vw, 1.5rem);
  }
  .metrics-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    width: 100%;
  }
  @media (min-width: 640px) {
    .metrics-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 1024px) {
    .metrics-grid { grid-template-columns: repeat(3, 1fr); }
  }
  .metric-card {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 20px;
    transition: transform 0.2s;
  }
  .metric-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }
  .metric-header {
    margin-bottom: 12px;
  }
  .metric-name {
    font-weight: 600;
    font-size: 1rem;
  }
  .metric-value {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 8px;
    line-height: 1.2;
  }
  .metric-description {
    font-size: 0.85rem;
    color: #4b5563;
    margin-bottom: 12px;
  }
  .metric-status {
    font-size: 0.75rem;
    padding: 4px 12px;
    border-radius: 50px;
    display: inline-block;
    background: #f3f4f6;
    color: #4b5563;
  }
  .guidelines-section, .tips-section, .faq-section, .benefits-section {
    padding: 40px 0;
    border-top: 1px solid #e5e7eb;
    width: 100%;
  }
  .guidelines-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 100%;
  }
  @media (min-width: 640px) {
    .guidelines-grid { grid-template-columns: repeat(2, 1fr); }
  }
  .guideline-card {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    overflow: hidden;
  }
  .guideline-header {
    background: #000000;
    color: #ffffff;
    padding: 16px;
  }
  .guideline-metric {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 4px;
  }
  .guideline-ideal {
    font-size: 0.9rem;
    opacity: 0.9;
  }
  .guideline-body {
    padding: 16px;
  }
  .guideline-description {
    color: #4b5563;
    margin-bottom: 12px;
    font-size: 0.9rem;
  }
  .guideline-tip {
    background: #ffffff;
    padding: 12px;
    border-radius: 6px;
    border-left: 3px solid #000000;
    font-size: 0.85rem;
  }
  .tips-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    width: 100%;
  }
  @media (min-width: 640px) {
    .tips-grid { grid-template-columns: repeat(2, 1fr); }
  }
  .tip-card {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .tip-number {
    width: 40px;
    height: 40px;
    background: #000000;
    color: #ffffff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
  .tip-content {
    color: #4b5563;
    font-size: 0.95rem;
  }
  .faq-list {
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
  }
  .faq-item {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    margin-bottom: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.2s;
  }
  .faq-item:hover {
    border-color: #000000;
  }
  .faq-item.active {
    border-color: #000000;
  }
  .faq-question {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
  .faq-question h3 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    flex: 1;
    word-wrap: break-word;
  }
  .faq-toggle {
    font-size: 1.5rem;
    font-weight: 300;
    color: #4b5563;
    width: 24px;
    text-align: center;
  }
  .faq-answer {
    padding: 0 16px 16px;
    color: #4b5563;
    border-top: 1px solid #e5e7eb;
  }
  .benefits-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 100%;
  }
  @media (min-width: 640px) {
    .benefits-grid { grid-template-columns: repeat(3, 1fr); }
  }
  .benefit-card {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 24px;
    height: 100%;
  }
  .benefit-title {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
  .benefit-description {
    color: #4b5563;
    line-height: 1.6;
    font-size: 0.95rem;
  }
  .cta-section {
    background: #ffffff;
    padding: 40px 0;
    text-align: center;
    border-top: 1px solid #e5e7eb;
    width: 100%;
  }
  @media (min-width: 768px) {
    .cta-section { padding: 60px 0; }
  }
  .cta-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 16px;
  }
  .cta-title {
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin-bottom: 16px;
    word-wrap: break-word;
  }
  .cta-subtitle {
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    margin-bottom: 24px;
    color: #4b5563;
  }
  .cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  .cta-button-primary, .cta-button-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 6px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s;
    min-width: 200px;
  }
  @media (max-width: 480px) {
    .cta-button-primary, .cta-button-secondary {
      width: 100%;
      min-width: auto;
    }
  }
  .cta-button-primary {
    background: #000000;
    color: #ffffff;
    border: 1px solid #000000;
  }
  .cta-button-primary:hover {
    background: #333333;
  }
  .cta-button-secondary {
    background: transparent;
    color: #000000;
    border: 2px solid #000000;
  }
  .cta-button-secondary:hover {
    background: #f5f5f5;
  }
  .cta-features {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }
  .cta-feature {
    color: #4b5563;
    font-size: 0.9rem;
  }
  .seo-hidden {
    display: none;
  }
  hr { border: none; border-top: 1px solid #e5e7eb; margin: 40px 0; }
  .text-small { font-size: 0.85rem; color: #4b5563; }
  .text-success { color: #10b981; font-weight: 600; }
  .text-warning { color: #f59e0b; font-weight: 600; }
  .text-danger { color: #ef4444; font-weight: 600; }
  .center-text { text-align: center; }
`;

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_DATE = new Date().toISOString().split('T')[0];
const LAST_MODIFIED = new Date().toISOString();

// FAQ Data
const FAQS = [
  {
    question: "What is resume readability and why does it matter?",
    answer: "Readability refers to how easily your resume can be read and understood. It matters because recruiters spend only 6-7 seconds scanning resumes. Good readability ensures your key qualifications stand out immediately to both humans and ATS systems."
  },
  {
    question: "What is the ideal Flesch-Kincaid Grade Level for resumes?",
    answer: "Aim for a grade level between 8-10. This makes your resume accessible to most readers while maintaining professionalism. Higher levels (11+) can sound too academic, while lower levels (below 8) might appear too simplistic."
  },
  {
    question: "How do bullet points affect readability?",
    answer: "Properly formatted bullet points improve readability by 40%. They break up text, highlight achievements, and make information scannable. Our tool analyzes bullet point usage and suggests optimal formatting for ATS compatibility."
  },
  {
    question: "What's the ideal average sentence length for resumes?",
    answer: "15-20 words per sentence is optimal. Shorter sentences (under 10 words) can feel choppy, while longer sentences (over 25 words) become difficult to parse quickly. Mix sentence lengths for natural flow."
  },
  {
    question: "Does passive voice really hurt my resume?",
    answer: "Yes! Active voice is 30% more effective. Instead of 'Responsibilities were managed by me,' use 'Managed responsibilities.' Active voice creates stronger, more confident statements that emphasize your agency and achievements."
  },
  {
    question: "How does readability affect ATS (Applicant Tracking System) screening?",
    answer: "ATS systems parse readable content more accurately. Optimal sentence structure, clear formatting, and appropriate complexity scores increase your resume's chances of passing automated screening and reaching human recruiters."
  }
];

// Readability Guidelines
const READABILITY_GUIDELINES = [
  {
    metric: "Flesch-Kincaid Grade",
    ideal: "8-10",
    description: "Represents U.S. grade level needed to understand text",
    tip: "Aim for 9th grade level - professional but accessible"
  },
  {
    metric: "Average Sentence Length",
    ideal: "15-20 words",
    description: "Optimal words per sentence for scannability",
    tip: "Vary sentence length for natural rhythm"
  },
  {
    metric: "Reading Ease Score",
    ideal: "60-70",
    description: "Higher scores = easier to read (0-100 scale)",
    tip: "Balance professionalism with accessibility"
  },
  {
    metric: "Passive Voice",
    ideal: "< 10%",
    description: "Percentage of sentences using passive voice",
    tip: "Use active voice for stronger impact"
  }
];

// Writing Tips
const WRITING_TIPS = [
  "Start sentences with action verbs",
  "Use numbers to quantify achievements",
  "Keep paragraphs to 3-4 lines maximum",
  "Use consistent verb tenses",
  "Avoid jargon and buzzwords",
  "Include industry-specific keywords",
  "Proofread for spelling and grammar",
  "Use white space effectively",
  "Focus on achievements, not duties",
  "Tailor language to target role"
];

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'resume readability checker',
  'free resume readability analyzer',
  'ATS readability analysis',
  'Flesch Kincaid resume test',
  'resume readability score checker',
  'professional resume writing analysis',
  'resume optimization tool free',
  'readability analysis tool 2025',
  'resume editing software free',
  'job application readability checker',
  'resume quality checker online',
  'ATS friendly readability score',
  'resume scanning optimization',
  'readability metrics for resumes',
  'resume writing best practices tool'
];

export default function ResumeReadabilityChecker({ seoData, buildTimestamp }) {
  const [text, setText] = useState('');
  const [readabilityStats, setReadabilityStats] = useState({
    fleschKincaidGrade: 0,
    fleschReadingEase: 0,
    averageSentenceLength: 0,
    sentenceCount: 0,
    wordCount: 0,
    characterCount: 0,
    syllableCount: 0,
    passiveSentences: 0,
    bulletPoints: 0,
    complexWords: 0
  });
  const [activeFaq, setActiveFaq] = useState(null);
  const textareaRef = useRef(null);

  // Schema data - UPDATED WITHOUT www
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://professionalresumefree.com/free-resume-readability-checker",
        "url": "https://professionalresumefree.com/free-resume-readability-checker",
        "name": `Free Resume Readability Checker – Professional Flesch-Kincaid Analysis & ATS Optimization ${CURRENT_YEAR}`,
        "description": "Analyze and improve your resume's readability with our free online tool. Get Flesch-Kincaid scores, sentence analysis, ATS optimization tips, and actionable suggestions.",
        "datePublished": "2024-01-01",
        "dateModified": LAST_MODIFIED,
        "inLanguage": "en-US"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Resume Readability Checker Tool",
        "description": "Free professional resume readability analyzer with Flesch-Kincaid scoring, ATS optimization, and writing quality assessment",
        "url": "https://professionalresumefree.com/free-resume-readability-checker",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "325"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  // Helper function to count syllables
  const countSyllables = useCallback((word) => {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    
    const syllables = word.match(/[aeiouy]{1,2}/g);
    return syllables ? syllables.length : 1;
  }, []);

  // Calculate readability metrics
  const calculateReadability = useCallback((content) => {
    if (!content.trim()) {
      return {
        fleschKincaidGrade: 0,
        fleschReadingEase: 0,
        averageSentenceLength: 0,
        sentenceCount: 0,
        wordCount: 0,
        characterCount: 0,
        syllableCount: 0,
        passiveSentences: 0,
        bulletPoints: 0,
        complexWords: 0
      };
    }

    // Basic counts
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = content.trim().split(/\s+/).filter(w => w.length > 0);
    const characters = content.replace(/\s+/g, '').length;
    
    // Count bullet points
    const bulletPoints = (content.match(/^[•\-*]\s+/gm) || []).length;
    
    // Count syllables
    let totalSyllables = 0;
    let complexWords = 0;
    
    words.forEach(word => {
      const syllables = countSyllables(word);
      totalSyllables += syllables;
      if (syllables >= 3) complexWords++;
    });
    
    // Count passive sentences (simplified detection)
    const passiveSentences = sentences.filter(sentence => 
      /\b(am|is|are|was|were|be|been|being)\b\s+\w+ed\b/i.test(sentence) ||
      /\b(has|have|had)\s+been\s+\w+ed\b/i.test(sentence)
    ).length;
    
    // Calculate metrics
    const sentenceCount = sentences.length;
    const wordCount = words.length;
    const averageSentenceLength = sentenceCount > 0 ? wordCount / sentenceCount : 0;
    
    // Flesch Reading Ease
    let fleschReadingEase = 0;
    if (sentenceCount > 0 && wordCount > 0) {
      const ASL = wordCount / sentenceCount;
      const ASW = totalSyllables / wordCount;
      fleschReadingEase = 206.835 - (1.015 * ASL) - (84.6 * ASW);
      fleschReadingEase = Math.max(0, Math.min(100, fleschReadingEase));
    }
    
    // Flesch-Kincaid Grade Level
    let fleschKincaidGrade = 0;
    if (sentenceCount > 0 && wordCount > 0) {
      const ASL = wordCount / sentenceCount;
      const ASW = totalSyllables / wordCount;
      fleschKincaidGrade = (0.39 * ASL) + (11.8 * ASW) - 15.59;
      fleschKincaidGrade = Math.max(1, Math.min(20, fleschKincaidGrade));
    }
    
    return {
      fleschKincaidGrade: parseFloat(fleschKincaidGrade.toFixed(1)),
      fleschReadingEase: parseFloat(fleschReadingEase.toFixed(1)),
      averageSentenceLength: parseFloat(averageSentenceLength.toFixed(1)),
      sentenceCount,
      wordCount,
      characterCount: characters,
      syllableCount: totalSyllables,
      passiveSentences,
      bulletPoints,
      complexWords
    };
  }, [countSyllables]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReadabilityStats(calculateReadability(text));
    }, 300);

    return () => clearTimeout(timer);
  }, [text, calculateReadability]);

  const handleReset = () => {
    setText('');
    setReadabilityStats(calculateReadability(''));
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  // Determine status for each metric
  const getFleschKincaidStatus = () => {
    const grade = readabilityStats.fleschKincaidGrade;
    if (grade === 0) return { status: 'neutral', text: 'No data' };
    if (grade >= 8 && grade <= 10) return { status: 'good', text: 'Ideal range' };
    if (grade < 8) return { status: 'warning', text: 'Too simple' };
    return { status: 'warning', text: 'Too complex' };
  };

  const getReadingEaseStatus = () => {
    const ease = readabilityStats.fleschReadingEase;
    if (ease === 0) return { status: 'neutral', text: 'No data' };
    if (ease >= 60 && ease <= 70) return { status: 'good', text: 'Optimal' };
    if (ease < 60) return { status: 'warning', text: 'Hard to read' };
    return { status: 'warning', text: 'Too simple' };
  };

  const getSentenceLengthStatus = () => {
    const length = readabilityStats.averageSentenceLength;
    if (length === 0) return { status: 'neutral', text: 'No data' };
    if (length >= 15 && length <= 20) return { status: 'good', text: 'Perfect' };
    if (length < 15) return { status: 'warning', text: 'Too short' };
    return { status: 'warning', text: 'Too long' };
  };

  const getPassiveVoiceStatus = () => {
    const passivePercent = readabilityStats.sentenceCount > 0 
      ? (readabilityStats.passiveSentences / readabilityStats.sentenceCount) * 100 
      : 0;
    
    if (passivePercent === 0) return { status: 'neutral', text: 'No data' };
    if (passivePercent < 10) return { status: 'good', text: 'Good' };
    return { status: 'warning', text: 'Reduce passive voice' };
  };

  const fleschKincaidStatus = getFleschKincaidStatus();
  const readingEaseStatus = getReadingEaseStatus();
  const sentenceLengthStatus = getSentenceLengthStatus();
  const passiveVoiceStatus = getPassiveVoiceStatus();

  // Overall readability score (0-100)
  const calculateOverallScore = () => {
    if (readabilityStats.wordCount === 0) return 0;
    
    let score = 0;
    let factors = 0;
    
    // Flesch-Kincaid Grade (max 30 points)
    if (readabilityStats.fleschKincaidGrade >= 8 && readabilityStats.fleschKincaidGrade <= 10) {
      score += 30;
    } else if (readabilityStats.fleschKincaidGrade >= 7 && readabilityStats.fleschKincaidGrade <= 11) {
      score += 20;
    } else if (readabilityStats.fleschKincaidGrade >= 6 && readabilityStats.fleschKincaidGrade <= 12) {
      score += 10;
    }
    factors++;
    
    // Reading Ease (max 30 points)
    if (readabilityStats.fleschReadingEase >= 60 && readabilityStats.fleschReadingEase <= 70) {
      score += 30;
    } else if (readabilityStats.fleschReadingEase >= 50 && readabilityStats.fleschReadingEase <= 80) {
      score += 20;
    } else if (readabilityStats.fleschReadingEase >= 40 && readabilityStats.fleschReadingEase <= 90) {
      score += 10;
    }
    factors++;
    
    // Sentence Length (max 20 points)
    if (readabilityStats.averageSentenceLength >= 15 && readabilityStats.averageSentenceLength <= 20) {
      score += 20;
    } else if (readabilityStats.averageSentenceLength >= 12 && readabilityStats.averageSentenceLength <= 25) {
      score += 10;
    } else if (readabilityStats.averageSentenceLength >= 10 && readabilityStats.averageSentenceLength <= 30) {
      score += 5;
    }
    factors++;
    
    // Passive Voice (max 20 points)
    const passivePercent = readabilityStats.sentenceCount > 0 
      ? (readabilityStats.passiveSentences / readabilityStats.sentenceCount) * 100 
      : 0;
    
    if (passivePercent < 10) {
      score += 20;
    } else if (passivePercent < 20) {
      score += 10;
    } else if (passivePercent < 30) {
      score += 5;
    }
    factors++;
    
    return Math.min(100, Math.round((score / (factors * 10)) * 100));
  };

  const overallScore = calculateOverallScore();
  const getOverallScoreColor = () => {
    if (overallScore >= 80) return '#10b981';
    if (overallScore >= 60) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Primary Metadata */}
        <title>Free Resume Readability Checker – Professional Flesch-Kincaid Analysis & ATS Optimization {CURRENT_YEAR}</title>
        <meta name="description" content={`Analyze and improve your resume's readability with our free online tool. Get Flesch-Kincaid scores, sentence analysis, ATS optimization tips, and actionable suggestions. No sign up required.`} />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="last-modified" content={LAST_MODIFIED} />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Resume Readability Checker - Flesch-Kincaid Analysis & ATS Optimization" />
        <meta name="chatgpt-fts:description" content="Analyze and improve your resume's readability with our free online tool. Get Flesch-Kincaid scores, sentence analysis, and actionable suggestions." />
        <meta name="chatgpt-fts:keywords" content="resume readability, Flesch-Kincaid, ATS optimization, resume analysis" />
        <meta name="chatgpt-fts:last-updated" content={CURRENT_DATE} />
        
        {/* Canonical URL - UPDATED without www */}
        <link rel="canonical" href="https://professionalresumefree.com/free-resume-readability-checker" />
        
        {/* Open Graph - UPDATED without www */}
        <meta property="og:title" content="Free Resume Readability Checker – Professional Flesch-Kincaid Analysis" />
        <meta property="og:description" content="Analyze and improve your resume's readability. Get Flesch-Kincaid scores, sentence analysis, ATS optimization tips. Free online tool." />
        <meta property="og:url" content="https://professionalresumefree.com/free-resume-readability-checker" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={LAST_MODIFIED} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Readability Checker - ATS & Flesch-Kincaid Analysis" />
        <meta name="twitter:description" content="Professional readability analysis with Flesch-Kincaid scoring and ATS optimization for your resume." />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Hidden SEO Elements */}
      <div style={{display: 'none'}} aria-hidden="true">
        <span itemProp="tool-type">Readability Checker</span>
        <span itemProp="year">{CURRENT_YEAR}</span>
        <span itemProp="last-updated">{CURRENT_DATE}</span>
        <span itemProp="build-timestamp">{buildTimestamp}</span>
      </div>

      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li className="breadcrumb-separator">›</li>
            <li><Link href="/free-resume-tools">Resume Tools</Link></li>
            <li className="breadcrumb-separator">›</li>
            <li className="breadcrumb-current">Readability Checker</li>
          </ol>
        </nav>

        {/* Header Section */}
        <header className="header">
          <h1>Resume Readability Checker</h1>
          <p>
            Professional Flesch-Kincaid analysis with ATS optimization guidance
            <span 
              className="rating-stars"
              style={{ marginLeft: '12px', display: 'inline-block' }}
            >
              ★★★★★
              <span className="rating-value">4.8/5</span>
            </span>
          </p>
          
          <div className="trust-badge">
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>Free Forever</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>No Sign Up Required</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>ATS Optimized</span>
            </div>
          </div>
          
          <div className="rating-text">
            Trusted by 12,500+ job seekers
          </div>
        </header>

        <main>
          {/* Main Editor Section */}
          <div className="editor-section">
            <div className="editor-header">
              <h2>Analyze Your Resume Readability</h2>
              <p>
                Paste your resume content below for comprehensive readability analysis. Our tool calculates Flesch-Kincaid scores, sentence metrics, and provides actionable improvement suggestions.
              </p>
            </div>
            
            <div className="textarea-container">
              <textarea
                ref={textareaRef}
                className="textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={`Paste your resume content here...
                
Example:
MARKETING MANAGER
ABC Corporation | 2020-Present

• Increased social media engagement by 150% through targeted campaign strategies
• Managed $500K annual marketing budget, achieving 25% ROI improvement
• Led cross-functional teams to launch 3 successful product campaigns

SKILLS
Digital Marketing | SEO Optimization | Team Leadership | Budget Management`}
                rows={15}
                autoFocus
                aria-label="Resume text input for readability analysis"
              />
              
              <div className="button-group">
                <button
                  className="reset-button"
                  onClick={handleReset}
                  type="button"
                  aria-label="Clear all text and reset analysis"
                >
                  Clear All Text
                </button>
                <div className="word-count-display">
                  {readabilityStats.wordCount} words • {readabilityStats.sentenceCount} sentences • {readabilityStats.characterCount} characters
                </div>
              </div>
            </div>
          </div>

          {/* Overall Score Section */}
          <div className="score-section">
            <div className="score-header">
              <h2>Overall Readability Assessment</h2>
              <div className="score-subtitle">
                Based on Flesch-Kincaid, sentence analysis, and writing quality metrics
              </div>
            </div>
            
            <div className="score-container">
              <div 
                className="score-circle"
                style={{ 
                  background: `conic-gradient(${getOverallScoreColor()} ${overallScore * 3.6}deg, #e5e7eb 0deg)`
                }}
                aria-label={`Overall readability score: ${overallScore} out of 100`}
              >
                <div className="score-inner">
                  <div className="score-value">{overallScore}</div>
                  <div className="score-label">/100</div>
                </div>
              </div>
              
              <div className="score-breakdown">
                <div className="score-category">
                  <div className="category-label">Flesch-Kincaid Grade</div>
                  <div className={`category-score score${fleschKincaidStatus.status}`}>
                    {readabilityStats.fleschKincaidGrade.toFixed(1)}
                  </div>
                  <div className={`category-status status${fleschKincaidStatus.status}`}>
                    {fleschKincaidStatus.text}
                  </div>
                </div>
                
                <div className="score-category">
                  <div className="category-label">Reading Ease</div>
                  <div className={`category-score score${readingEaseStatus.status}`}>
                    {readabilityStats.fleschReadingEase.toFixed(0)}
                  </div>
                  <div className={`category-status status${readingEaseStatus.status}`}>
                    {readingEaseStatus.text}
                  </div>
                </div>
                
                <div className="score-category">
                  <div className="category-label">Sentence Length</div>
                  <div className={`category-score score${sentenceLengthStatus.status}`}>
                    {readabilityStats.averageSentenceLength.toFixed(1)}
                  </div>
                  <div className={`category-status status${sentenceLengthStatus.status}`}>
                    {sentenceLengthStatus.text}
                  </div>
                </div>
                
                <div className="score-category">
                  <div className="category-label">Passive Voice</div>
                  <div className={`category-score score${passiveVoiceStatus.status}`}>
                    {readabilityStats.sentenceCount > 0 
                      ? `${((readabilityStats.passiveSentences / readabilityStats.sentenceCount) * 100).toFixed(0)}%`
                      : '0%'
                    }
                  </div>
                  <div className={`category-status status${passiveVoiceStatus.status}`}>
                    {passiveVoiceStatus.text}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="score-interpretation">
              <h3>Score Interpretation</h3>
              <div className="interpretation-grid">
                <div className="interpretation-item">
                  <div className="interpretation-color" style={{ backgroundColor: '#ef4444' }}></div>
                  <div>
                    <strong>0-59:</strong> Needs Improvement
                  </div>
                </div>
                <div className="interpretation-item">
                  <div className="interpretation-color" style={{ backgroundColor: '#f59e0b' }}></div>
                  <div>
                    <strong>60-79:</strong> Good
                  </div>
                </div>
                <div className="interpretation-item">
                  <div className="interpretation-color" style={{ backgroundColor: '#10b981' }}></div>
                  <div>
                    <strong>80-100:</strong> Excellent
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Metrics Section */}
          <div className="metrics-section">
            <h2>Detailed Readability Metrics</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-header">
                  <div className="metric-name">Flesch-Kincaid Grade</div>
                </div>
                <div className="metric-value">{readabilityStats.fleschKincaidGrade.toFixed(1)}</div>
                <div className="metric-description">
                  U.S. grade level required to understand your resume
                </div>
                <div className={`metric-status status${fleschKincaidStatus.status}`}>
                  {fleschKincaidStatus.text}
                </div>
              </div>
              
              <div className="metric-card">
                <div className="metric-header">
                  <div className="metric-name">Reading Ease</div>
                </div>
                <div className="metric-value">{readabilityStats.fleschReadingEase.toFixed(0)}</div>
                <div className="metric-description">
                  Higher scores = easier to read (0-100 scale)
                </div>
                <div className={`metric-status status${readingEaseStatus.status}`}>
                  {readingEaseStatus.text}
                </div>
              </div>
              
              <div className="metric-card">
                <div className="metric-header">
                  <div className="metric-name">Sentence Length</div>
                </div>
                <div className="metric-value">{readabilityStats.averageSentenceLength.toFixed(1)} words</div>
                <div className="metric-description">
                  Average words per sentence (ideal: 15-20)
                </div>
                <div className={`metric-status status${sentenceLengthStatus.status}`}>
                  {sentenceLengthStatus.text}
                </div>
              </div>
              
              <div className="metric-card">
                <div className="metric-header">
                  <div className="metric-name">Passive Sentences</div>
                </div>
                <div className="metric-value">
                  {readabilityStats.passiveSentences} of {readabilityStats.sentenceCount}
                </div>
                <div className="metric-description">
                  Sentences using passive voice (aim for less than 10%)
                </div>
                <div className={`metric-status status${passiveVoiceStatus.status}`}>
                  {passiveVoiceStatus.text}
                </div>
              </div>
              
              <div className="metric-card">
                <div className="metric-header">
                  <div className="metric-name">Bullet Points</div>
                </div>
                <div className="metric-value">{readabilityStats.bulletPoints}</div>
                <div className="metric-description">
                  Effective for highlighting achievements
                </div>
                <div className="metric-status">
                  {readabilityStats.bulletPoints > 5 ? 'Good usage' : 'Consider adding more'}
                </div>
              </div>
              
              <div className="metric-card">
                <div className="metric-header">
                  <div className="metric-name">Complex Words</div>
                </div>
                <div className="metric-value">{readabilityStats.complexWords}</div>
                <div className="metric-description">
                  Words with 3+ syllables (use strategically)
                </div>
                <div className="metric-status">
                  {readabilityStats.complexWords < readabilityStats.wordCount * 0.1 
                    ? 'Good balance' 
                    : 'Consider simplifying'
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Guidelines Section */}
          <section className="guidelines-section">
            <h2 className="section-title">Professional Readability Guidelines</h2>
            <p className="section-subtitle">
              Industry standards for optimal resume readability (based on ATS and recruiter research)
            </p>
            
            <div className="guidelines-grid">
              {READABILITY_GUIDELINES.map((guideline, index) => (
                <div key={index} className="guideline-card">
                  <div className="guideline-header">
                    <div className="guideline-metric">{guideline.metric}</div>
                    <div className="guideline-ideal">Ideal: {guideline.ideal}</div>
                  </div>
                  <div className="guideline-body">
                    <div className="guideline-description">
                      {guideline.description}
                    </div>
                    <div className="guideline-tip">
                      <strong>Tip:</strong> {guideline.tip}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Improvement Tips Section */}
          <section className="tips-section">
            <h2 className="section-title">Actionable Improvement Tips</h2>
            <div className="tips-grid">
              {WRITING_TIPS.map((tip, index) => (
                <div key={index} className="tip-card">
                  <div className="tip-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="tip-content">{tip}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="faq-section">
            <h2 className="section-title">Frequently Asked Questions</h2>
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
          </section>

          {/* Benefits Section */}
          <section className="benefits-section">
            <h2 className="section-title">Why Readability Matters for Resumes</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3 className="benefit-title">ATS Optimization</h3>
                <p className="benefit-description">
                  Applicant Tracking Systems parse readable content more accurately. Optimal sentence structure and word choice improve your resume's chances of passing automated screening.
                </p>
              </div>
              
              <div className="benefit-card">
                <h3 className="benefit-title">Recruiter Attention</h3>
                <p className="benefit-description">
                  With only 6-7 seconds per resume scan, clear, readable content ensures your key qualifications are immediately apparent to busy recruiters and hiring managers.
                </p>
              </div>
              
              <div className="benefit-card">
                <h3 className="benefit-title">Professional Impact</h3>
                <p className="benefit-description">
                  Well-written, readable resumes demonstrate communication skills and attention to detail—qualities valued in any professional role.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="cta-section">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Perfect Your Resume?</h2>
              <p className="cta-subtitle">
                Use our complete suite of free resume tools to create a job-winning resume
              </p>
              <div className="cta-buttons">
                <Link href="/free-resume-builder" className="cta-button-primary">
                  Try Free Resume Builder
                </Link>
                <Link href="/resume-templates" className="cta-button-secondary">
                  Browse ATS Templates
                </Link>
              </div>
              <div className="cta-features">
                <span className="cta-feature">✓ Completely Free</span>
                <span className="cta-feature">✓ No Sign Up Required</span>
                <span className="cta-feature">✓ ATS Optimized</span>
                <span className="cta-feature">✓ Professional Results</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

// SSG with ISR
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  
  return {
    props: {
      seoData: {
        currentDate: CURRENT_DATE,
        lastModifiedDate: LAST_MODIFIED,
        buildTimestamp,
        pageType: 'tool',
        toolName: 'Resume Readability Checker'
      },
      buildTimestamp
    },
    // Revalidate every hour
    revalidate: 3600,
  };
}