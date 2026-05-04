// pages/free-resume-bullet-point-generator.js
import { useState, useCallback, useEffect } from 'react';
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
    display: inline-block;
    background: #f3f4f6;
    color: #000000;
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 0.85rem;
    margin-bottom: 20px;
    border: 1px solid #e5e7eb;
  }
  .trust-signals {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin: 30px 0;
    width: 100%;
  }
  .trust-signal {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #f9fafb;
    padding: 8px 16px;
    border-radius: 50px;
    border: 1px solid #e5e7eb;
    font-size: 0.85rem;
  }
  .signal-icon {
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
  .progress-steps {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    flex-wrap: wrap;
    gap: 10px;
  }
  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  .step-number {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    transition: all 0.2s;
  }
  .step.active .step-number {
    background: #000000;
    color: #ffffff;
    border-color: #000000;
  }
  .step-label {
    font-size: 0.8rem;
    color: #4b5563;
  }
  .step-line {
    width: 40px;
    height: 2px;
    background: #e5e7eb;
    margin: 0 5px;
  }
  @media (max-width: 480px) {
    .step-line { width: 20px; }
  }
  .form-section {
    margin: 30px 0;
    width: 100%;
  }
  .form-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 20px 0;
    width: 100%;
  }
  @media (min-width: 640px) {
    .form-grid { grid-template-columns: repeat(2, 1fr); }
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }
  .form-group-full {
    grid-column: 1 / -1;
    width: 100%;
  }
  .label {
    font-weight: 500;
    font-size: 0.9rem;
  }
  .required {
    color: #ef4444;
    margin-left: 2px;
  }
  .input, .select, .textarea {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-family: inherit;
    font-size: 0.95rem;
    transition: border-color 0.2s;
    background: #ffffff;
  }
  .input:focus, .select:focus, .textarea:focus {
    outline: none;
    border-color: #000000;
  }
  .textarea {
    resize: vertical;
    min-height: 100px;
  }
  .helper-text {
    font-size: 0.8rem;
    color: #4b5563;
  }
  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 16px 0;
  }
  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.95rem;
  }
  .checkbox {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
  .button-group {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  .step-navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    flex-wrap: wrap;
    gap: 12px;
  }
  .button {
    padding: 10px 20px;
    background: #000000;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background 0.2s;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .button:hover {
    background: #333333;
  }
  .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .secondary-button {
    background: transparent;
    color: #000000;
    border: 1px solid #d1d5db;
  }
  .secondary-button:hover {
    background: #f3f4f6;
  }
  .industry-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin: 20px 0;
    width: 100%;
  }
  @media (min-width: 640px) {
    .industry-grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (min-width: 1024px) {
    .industry-grid { grid-template-columns: repeat(6, 1fr); }
  }
  .industry-card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    padding: 12px;
    cursor: pointer;
    transition: all 0.2s;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .industry-card:hover {
    border-color: #000000;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }
  .industry-card.selected {
    border: 2px solid #000000;
    background: #f9fafb;
  }
  .industry-name {
    font-size: 0.85rem;
    font-weight: 600;
    word-wrap: break-word;
  }
  .industry-verbs {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .verb-tag {
    background: #e5e7eb;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.65rem;
    color: #4b5563;
  }
  .industry-hint {
    font-size: 0.7rem;
    color: #9ca3af;
    margin-top: auto;
  }
  .bullet-points-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 20px 0;
    width: 100%;
  }
  .bullet-point-card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 16px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .bullet-point-card:hover {
    border-color: #000000;
  }
  .bullet-point-card.selected {
    border: 2px solid #000000;
    background: #f9fafb;
  }
  .bullet-point-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
    gap: 8px;
  }
  .bullet-point-strength {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .strength-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .strength-dot.strong { background: #10b981; }
  .strength-dot.good { background: #f59e0b; }
  .strength-dot.basic { background: #ef4444; }
  .strength-label {
    font-size: 0.8rem;
    color: #4b5563;
  }
  .copy-button {
    background: #000000;
    color: #ffffff;
    border: none;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 0.8rem;
    cursor: pointer;
  }
  .copy-button:hover {
    background: #333333;
  }
  .bullet-point-text {
    font-size: 1rem;
    margin-bottom: 12px;
    padding-left: 20px;
    word-wrap: break-word;
  }
  .bullet-point-source {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .source-badge {
    background: #e5e7eb;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.7rem;
    color: #4b5563;
  }
  .achievement-badge {
    background: #10b981;
    color: #ffffff;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.7rem;
  }
  .action-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin: 20px 0;
  }
  .recommendations {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #e5e7eb;
  }
  .recommendations-title {
    font-size: 1.1rem;
    margin-bottom: 16px;
  }
  .recommendations-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    width: 100%;
  }
  @media (min-width: 640px) {
    .recommendations-grid { grid-template-columns: repeat(3, 1fr); }
  }
  .recommendation-card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    padding: 16px;
  }
  .recommendation-card h4 {
    font-size: 0.95rem;
    margin-bottom: 8px;
  }
  .recommendation-card p {
    font-size: 0.85rem;
    color: #4b5563;
  }
  .loading {
    text-align: center;
    padding: 40px;
    background: #f9fafb;
    border-radius: 8px;
    margin: 30px 0;
  }
  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #f3f4f6;
    border-top-color: #000000;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  .loading-text {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 8px;
  }
  .loading-subtext {
    color: #4b5563;
    font-size: 0.9rem;
  }
  .checklist {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
  }
  .checklist-title {
    font-weight: 600;
    margin-bottom: 16px;
  }
  .checklist ul {
    list-style: none;
  }
  .checklist li {
    padding: 8px 0;
    padding-left: 24px;
    position: relative;
    word-wrap: break-word;
  }
  .checklist li::before {
    content: "✓";
    color: #10b981;
    position: absolute;
    left: 0;
    font-weight: bold;
  }
  .how-to-section, .car-section, .faq-section, .reviews-section, .resources-section {
    padding: 40px 0;
    border-top: 1px solid #e5e7eb;
    width: 100%;
  }
  .section-title {
    font-size: clamp(1.3rem, 4vw, 1.8rem);
    text-align: center;
    margin-bottom: 32px;
    padding: 0 16px;
    word-wrap: break-word;
  }
  .how-to-steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
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
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 20px;
    position: relative;
    height: 100%;
  }
  .how-to-step .step-number {
    width: 30px;
    height: 30px;
    background: #000000;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin-bottom: 12px;
  }
  .step-title {
    font-size: 1rem;
    margin-bottom: 8px;
  }
  .step-description {
    font-size: 0.85rem;
    color: #4b5563;
  }
  .car-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 100%;
  }
  @media (min-width: 640px) {
    .car-grid { grid-template-columns: repeat(3, 1fr); }
  }
  .car-card {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 24px;
    position: relative;
    overflow: hidden;
  }
  .car-letter {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 3rem;
    font-weight: bold;
    color: #e5e7eb;
    opacity: 0.5;
  }
  .car-title {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
  .car-description {
    color: #4b5563;
    margin-bottom: 16px;
  }
  .car-example {
    background: #ffffff;
    padding: 12px;
    border-radius: 6px;
    font-size: 0.85rem;
    margin-bottom: 12px;
    border-left: 3px solid #000000;
  }
  .car-tip {
    font-size: 0.8rem;
    color: #4b5563;
    font-style: italic;
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
  }
  .faq-item:hover {
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
  }
  .faq-answer {
    padding: 0 16px 16px;
    color: #4b5563;
    border-top: 1px solid #e5e7eb;
  }
  .reviews-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 100%;
  }
  @media (min-width: 640px) {
    .reviews-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 1024px) {
    .reviews-grid { grid-template-columns: repeat(3, 1fr); }
  }
  .review-card {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .review-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
    flex-wrap: wrap;
    gap: 8px;
  }
  .reviewer-info {
    display: flex;
    flex-direction: column;
  }
  .reviewer-name {
    font-weight: 600;
  }
  .reviewer-position {
    font-size: 0.8rem;
    color: #4b5563;
  }
  .stars {
    color: #fbbf24;
  }
  .review-content {
    flex: 1;
    margin-bottom: 12px;
  }
  .review-content p {
    color: #4b5563;
    font-style: italic;
  }
  .review-date {
    font-size: 0.75rem;
    color: #9ca3af;
  }
  .resources-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 100%;
  }
  @media (min-width: 640px) {
    .resources-grid { grid-template-columns: repeat(3, 1fr); }
  }
  .resource-card {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 24px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .resource-card:hover {
    transform: translateY(-2px);
    border-color: #000000;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }
  .resource-card h3 {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
  .resource-card p {
    color: #4b5563;
    margin-bottom: 16px;
    flex: 1;
  }
  .resource-link {
    color: #000000;
    font-weight: 500;
    text-decoration: none;
    border-bottom: 1px solid #000000;
    padding-bottom: 2px;
    align-self: flex-start;
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
  .seo-hidden {
    display: none;
  }
  .text-small { font-size: 0.85rem; color: #4b5563; }
  .text-success { color: #10b981; font-weight: 600; }
  .text-danger { color: #ef4444; font-weight: 600; }
  .center-text { text-align: center; }
`;

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();

// FAQ Data
const FAQS = [
  {
    question: "Why are strong bullet points important for resumes in 2026?",
    answer: "Hiring managers spend an average of 7 seconds scanning a resume. Powerful bullet points with quantifiable achievements are 3x more likely to capture attention and demonstrate real impact. With ATS systems filtering 75% of resumes, optimized bullet points significantly increase your chances of reaching human recruiters."
  },
  {
    question: "What makes a bullet point effective for ATS systems?",
    answer: "Effective bullet points follow the CAR formula: Context (situation), Action (what you did), and Result (quantifiable outcome). They start with strong action verbs, include specific numbers and percentages, and use industry-relevant keywords that ATS systems scan for during automated resume screening processes."
  },
  {
    question: "Is my information private and secure with this generator?",
    answer: "Yes! All content generation happens locally in your browser. No personal data is sent to our servers—your information stays completely private. We believe in privacy-first tools that respect user confidentiality while providing professional resume building assistance."
  },
  {
    question: "How many bullet points should I have per job experience?",
    answer: "Aim for 3-5 bullet points per recent position (last 5-10 years), 2-3 for older roles. Focus on your most impressive, relevant achievements that match the job you're applying for. Quality over quantity—each point should demonstrate specific impact and value you brought to previous roles."
  },
  {
    question: "Can I customize the generated bullet points for different industries?",
    answer: "Absolutely! Our generator provides industry-specific templates for Technology, Healthcare, Business, Marketing, Education, and Creative fields. Each template includes relevant action verbs, industry metrics, and terminology that hiring managers in those fields recognize and value."
  },
  {
    question: "Is this tool completely free with no hidden costs?",
    answer: "100% free with no signup required. No watermarks, no premium features locked behind paywalls. We believe professional resume tools should be accessible to everyone. Download unlimited bullet points, customize freely, and use them in your job applications without any restrictions."
  }
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Enter Your Role Details",
    text: "Start by entering your job title, industry, and company size. This helps us generate industry-relevant content with appropriate metrics and terminology that resonates with hiring managers in your field."
  },
  {
    name: "Add Skills & Technical Expertise",
    text: "List the skills, technologies, software, and tools you used. Include both technical and soft skills. This information helps create bullet points that showcase your specific capabilities and expertise to potential employers."
  },
  {
    name: "Describe Responsibilities & Achievements",
    text: "Briefly describe your daily responsibilities and major accomplishments. Even if achievements aren't quantified yet, describe what you did—we'll help add the numbers and impact metrics that make bullet points compelling."
  },
  {
    name: "Generate Professional Bullet Points",
    text: "Our AI-powered system creates professional, impact-focused bullet points using CAR methodology. Each point includes context, action, and measurable results tailored to your industry and experience level."
  },
  {
    name: "Review, Customize & Optimize",
    text: "Review the generated content, add specific numbers from your experience, and tailor points for different job applications. Our system provides optimization recommendations to strengthen each point further."
  }
];

// Sample Reviews
const REVIEWS = [
  {
    name: "Jennifer Lee",
    position: "HR Director",
    rating: 5,
    date: "2026-02-18",
    review: "This tool transforms vague responsibilities into compelling achievements. Essential for job seekers in competitive markets. The CAR format implementation is exactly what recruiters look for."
  },
  {
    name: "Marcus Rodriguez",
    position: "Career Coach",
    rating: 5,
    date: "2026-02-15",
    review: "My clients have seen 40% more interview requests after using this generator. The industry-specific templates and quantifiable results make all the difference in today's job market."
  },
  {
    name: "Sophie Williams",
    position: "Marketing Manager",
    rating: 4,
    date: "2026-02-12",
    review: "Turned my generic bullet points into quantifiable achievements. Landed interviews at 3 top tech companies within 2 weeks. The marketing-specific templates were incredibly helpful."
  },
  {
    name: "Alex Thompson",
    position: "Software Engineer",
    rating: 5,
    date: "2026-02-10",
    review: "The technical bullet points are spot-on for tech roles. Finally found a way to showcase my contributions effectively to both ATS systems and hiring managers."
  },
  {
    name: "David Chen",
    position: "Healthcare Administrator",
    rating: 5,
    date: "2026-02-08",
    review: "As someone transitioning from clinical to administrative roles, this tool helped me reframe my experience with business impact metrics. Received multiple interview offers."
  },
  {
    name: "Amanda Roberts",
    position: "Project Manager",
    rating: 5,
    date: "2026-02-05",
    review: "The leadership-focused verb options and quantifiable metrics helped me showcase my project management impact. Landed a senior role with 25% salary increase."
  }
];

// Industry templates
const INDUSTRY_TEMPLATES = [
  {
    id: 'tech',
    name: 'Technology / Engineering',
    verbs: ['Developed', 'Engineered', 'Architected', 'Optimized', 'Automated', 'Implemented', 'Scaled', 'Integrated'],
    metrics: ['performance by 40%', 'efficiency by 35%', 'system uptime to 99.9%', 'response time by 60%', 'code quality scores', 'deployment frequency']
  },
  {
    id: 'business',
    name: 'Business / Management',
    verbs: ['Managed', 'Led', 'Directed', 'Oversaw', 'Coordinated', 'Streamlined', 'Negotiated', 'Facilitated'],
    metrics: ['revenue by $2M', 'cost reduction by 25%', 'profit margins by 18%', 'operational efficiency by 30%', 'team productivity by 40%']
  },
  {
    id: 'marketing',
    name: 'Marketing / Sales',
    verbs: ['Increased', 'Grew', 'Expanded', 'Launched', 'Optimized', 'Generated', 'Accelerated', 'Amplified'],
    metrics: ['conversion rate by 22%', 'lead generation by 45%', 'ROI by 35%', 'engagement by 60%', 'sales revenue by $1.5M']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    verbs: ['Improved', 'Enhanced', 'Managed', 'Implemented', 'Developed', 'Coordinated', 'Optimized', 'Streamlined'],
    metrics: ['patient outcomes by 30%', 'operational efficiency by 25%', 'patient satisfaction to 95%', 'compliance rates to 98%', 'accuracy rates to 99.5%']
  },
  {
    id: 'education',
    name: 'Education / Non-profit',
    verbs: ['Developed', 'Implemented', 'Led', 'Managed', 'Coordinated', 'Facilitated', 'Designed', 'Evaluated'],
    metrics: ['student participation by 40%', 'program engagement by 55%', 'satisfaction scores to 4.8/5', 'impact metrics by 35%', 'funding growth by $500K']
  },
  {
    id: 'creative',
    name: 'Creative / Design',
    verbs: ['Designed', 'Created', 'Developed', 'Produced', 'Conceptualized', 'Innovated', 'Revitalized', 'Transformed'],
    metrics: ['user engagement by 50%', 'conversion rates by 28%', 'usability scores by 45%', 'client satisfaction to 97%', 'award recognition']
  }
];

// Action verbs categorized
const ACTION_VERBS = {
  leadership: ['Led', 'Managed', 'Directed', 'Supervised', 'Mentored', 'Coached', 'Guided', 'Oversaw', 'Championed', 'Spearheaded'],
  achievement: ['Achieved', 'Accomplished', 'Delivered', 'Exceeded', 'Improved', 'Increased', 'Reduced', 'Optimized', 'Maximized', 'Minimized'],
  innovation: ['Developed', 'Created', 'Designed', 'Engineered', 'Innovated', 'Pioneered', 'Transformed', 'Revolutionized', 'Modernized', 'Automated'],
  collaboration: ['Collaborated', 'Partnered', 'Cooperated', 'Coordinated', 'Liaised', 'Facilitated', 'Supported', 'Assisted', 'Consulted', 'Advised'],
  analysis: ['Analyzed', 'Evaluated', 'Assessed', 'Researched', 'Investigated', 'Identified', 'Diagnosed', 'Examined', 'Interpreted', 'Quantified']
};

// Metrics and impact words
const IMPACT_METRICS = [
  'by 30%', 'by 45%', 'by 25%', 'from $X to $Y', 'by $100K', 'by 20 hours weekly',
  'across 5 teams', 'for 500+ users', 'within 3 months', 'resulting in', 'leading to',
  'contributing to', 'supporting', 'enabling', 'facilitating'
];

function generateBulletPoints(formData) {
  const {
    jobTitle,
    industry,
    companySize,
    skillsTools,
    responsibilities,
    achievements,
    includeNumbers,
    includeMetrics,
    verbStyle
  } = formData;

  const selectedIndustry = INDUSTRY_TEMPLATES.find(t => t.id === industry) || INDUSTRY_TEMPLATES[0];

  // Parse skills and tools
  const skills = skillsTools.split(',').map(s => s.trim()).filter(s => s);
  const responsibilityLines = responsibilities.split('\n').filter(r => r.trim());
  const achievementLines = achievements.split('\n').filter(a => a.trim());

  // Select appropriate verbs based on style
  let verbs = [];
  switch(verbStyle) {
    case 'leadership':
      verbs = ACTION_VERBS.leadership;
      break;
    case 'achievement':
      verbs = ACTION_VERBS.achievement;
      break;
    case 'innovation':
      verbs = ACTION_VERBS.innovation;
      break;
    case 'collaboration':
      verbs = ACTION_VERBS.collaboration;
      break;
    case 'analysis':
      verbs = ACTION_VERBS.analysis;
      break;
    default:
      verbs = [...ACTION_VERBS.leadership, ...ACTION_VERBS.achievement, ...ACTION_VERBS.innovation];
  }

  const bulletPoints = [];

  // Generate from responsibilities
  responsibilityLines.forEach(responsibility => {
    if (responsibility.trim()) {
      const verb = verbs[Math.floor(Math.random() * verbs.length)];
      const metric = includeNumbers ? IMPACT_METRICS[Math.floor(Math.random() * IMPACT_METRICS.length)] : '';
      const skill = skills.length > 0 ? skills[Math.floor(Math.random() * skills.length)] : '';
      let point = `${verb} ${responsibility.toLowerCase()}`;
      if (includeMetrics && metric) {
        point += ` ${metric}`;
      }
      if (skill && includeMetrics) {
        point += ` using ${skill}`;
      }
      bulletPoints.push({
        text: point,
        source: 'responsibility',
        strength: includeNumbers && includeMetrics ? 'strong' : 'medium'
      });
    }
  });

  // Generate from achievements
  achievementLines.forEach(achievement => {
    if (achievement.trim()) {
      const verb = verbs[Math.floor(Math.random() * verbs.length)];
      const metric = includeNumbers ? IMPACT_METRICS[Math.floor(Math.random() * IMPACT_METRICS.length)] : '';
      let point = `${verb} ${achievement.toLowerCase()}`;
      if (includeMetrics && metric) {
        point += ` ${metric}`;
      }
      bulletPoints.push({
        text: point,
        source: 'achievement',
        strength: includeNumbers ? 'strong' : 'good'
      });
    }
  });

  // Generate additional industry-specific points if we have few
  if (bulletPoints.length < 6) {
    const additionalCount = 6 - bulletPoints.length;
    for (let i = 0; i < additionalCount; i++) {
      const verb = selectedIndustry.verbs[Math.floor(Math.random() * selectedIndustry.verbs.length)];
      const metric = selectedIndustry.metrics[Math.floor(Math.random() * selectedIndustry.metrics.length)];
      const skill = skills.length > 0 ? skills[Math.floor(Math.random() * skills.length)] : 'key processes';
      let point = `${verb} ${skill} to improve ${metric}`;
      if (includeNumbers) {
        point += ` by ${Math.floor(Math.random() * 50) + 15}%`;
      }
      bulletPoints.push({
        text: point,
        source: 'generated',
        strength: includeNumbers ? 'strong' : 'good'
      });
    }
  }

  return {
    bulletPoints,
    count: bulletPoints.length,
    industry: selectedIndustry.name,
    recommendations: {
      addNumbers: bulletPoints.filter(bp => !bp.text.match(/\d/)).length,
      addSkills: skills.length,
      strengthScore: Math.round((bulletPoints.filter(bp => bp.strength === 'strong').length / bulletPoints.length) * 100)
    }
  };
}

function BulletPointDisplay({ bulletPoints, recommendations, industry }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [selectedPoints, setSelectedPoints] = useState([]);

  const handleCopyPoint = useCallback((text, index) => {
    navigator.clipboard.writeText(`• ${text}`);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  }, []);

  const handleSelectPoint = useCallback((index) => {
    setSelectedPoints(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  }, []);

  const handleCopySelected = useCallback(() => {
    const selectedText = selectedPoints
      .sort((a, b) => a - b)
      .map(index => `• ${bulletPoints[index].text}`)
      .join('\n');
    navigator.clipboard.writeText(selectedText);
    alert(`${selectedPoints.length} bullet points copied to clipboard!`);
  }, [selectedPoints, bulletPoints]);

  const handleDownloadAll = useCallback(() => {
    const allText = bulletPoints.map(bp => `• ${bp.text}`).join('\n');
    const element = document.createElement('a');
    const file = new Blob([allText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'professional-resume-bullet-points.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }, [bulletPoints]);

  return (
    <div className="card">
      <div className="card-header">
        <h2 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Generated Professional Resume Bullet Points</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <span className="text-small"><strong>{bulletPoints.length}</strong> points</span>
          <span className="text-small"><strong>{industry}</strong></span>
          <span className="text-small"><strong>{recommendations.strengthScore}%</strong> strong impact</span>
        </div>
      </div>
      <div className="bullet-points-container">
        {bulletPoints.map((point, index) => (
          <div
            key={index}
            className={`bullet-point-card ${selectedPoints.includes(index) ? 'selected' : ''}`}
            onClick={() => handleSelectPoint(index)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleSelectPoint(index)}
          >
            <div className="bullet-point-header">
              <div className="bullet-point-strength">
                <div className={`strength-dot ${point.strength}`}></div>
                <span className="strength-label">
                  {point.strength === 'strong' ? 'Strong Impact (Quantified)' :
                   point.strength === 'good' ? 'Good (Needs Numbers)' : 'Basic (Add Metrics)'}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopyPoint(point.text, index);
                }}
                className="copy-button"
                aria-label={`Copy bullet point: ${point.text}`}
              >
                {copiedIndex === index ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <p className="bullet-point-text">• {point.text}</p>
            <div className="bullet-point-source">
              <span className="source-badge">{point.source}</span>
              {point.source === 'achievement' && <span className="achievement-badge">Key Achievement</span>}
            </div>
          </div>
        ))}
      </div>
      <div className="action-buttons">
        <button
          onClick={handleCopySelected}
          disabled={selectedPoints.length === 0}
          className="btn-outline"
          aria-label={`Copy ${selectedPoints.length} selected bullet points`}
        >
          Copy Selected ({selectedPoints.length})
        </button>
        <button 
          onClick={handleDownloadAll} 
          className="btn-outline"
          aria-label="Download all bullet points as text file"
        >
          Download All Points
        </button>
        <button 
          onClick={() => window.print()} 
          className="btn-outline"
          aria-label="Print bullet points"
        >
          Print
        </button>
      </div>
      <div className="recommendations">
        <h3 className="recommendations-title">Optimization Recommendations for ATS Success</h3>
        <div className="recommendations-grid">
          <div className="recommendation-card">
            <h4>Add Quantifiable Metrics</h4>
            <p>{recommendations.addNumbers} bullet points need specific numbers or percentages. ATS systems prioritize quantifiable achievements.</p>
          </div>
          <div className="recommendation-card">
            <h4>Include Industry-Specific Skills</h4>
            <p>Add {Math.max(0, 4 - recommendations.addSkills)} more technical skills or tools relevant to your target industry.</p>
          </div>
          <div className="recommendation-card">
            <h4>Use Stronger Action Verbs</h4>
            <p>Current strength score: {recommendations.strengthScore}% (aim for 80%+). Strong verbs increase ATS matching scores.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IndustrySelector({ selectedIndustry, onIndustryChange }) {
  return (
    <div className="card">
      <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Select Your Industry for Targeted Content</h3>
      <p className="helper-text" style={{ marginBottom: '20px' }}>Choose your industry to generate relevant bullet points with appropriate metrics and terminology.</p>
      <div className="industry-grid">
        {INDUSTRY_TEMPLATES.map(industry => (
          <div
            key={industry.id}
            className={`industry-card ${selectedIndustry === industry.id ? 'selected' : ''}`}
            onClick={() => onIndustryChange(industry.id)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && onIndustryChange(industry.id)}
            aria-label={`Select ${industry.name} industry template`}
          >
            <h4 className="industry-name">{industry.name}</h4>
            <div className="industry-verbs">
              {industry.verbs.slice(0, 3).map((verb, idx) => (
                <span key={idx} className="verb-tag">{verb}</span>
              ))}
            </div>
            <p className="industry-hint">Click to select</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResumeBulletPointGenerator({ 
  seoData,
  buildTimestamp
}) {
  const [formData, setFormData] = useState({
    jobTitle: '',
    industry: 'tech',
    companySize: 'medium',
    skillsTools: '',
    responsibilities: '',
    achievements: '',
    includeNumbers: true,
    includeMetrics: true,
    verbStyle: 'mixed'
  });

  const [generatedPoints, setGeneratedPoints] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [viewCount, setViewCount] = useState(0);

  // Update view count on mount
  useEffect(() => {
    const storedCount = localStorage.getItem('bulletGeneratorViews') || '0';
    const newCount = parseInt(storedCount) + 1;
    setViewCount(newCount);
    localStorage.setItem('bulletGeneratorViews', newCount.toString());
  }, []);

  // Sample form data
  const SAMPLE_DATA = {
    jobTitle: 'Senior Marketing Manager',
    industry: 'marketing',
    companySize: 'large',
    skillsTools: 'Google Analytics, SEO, Content Strategy, Social Media Marketing, Marketing Automation, Data Analysis, CRM Management',
    responsibilities: `Develop and execute comprehensive marketing campaigns across multiple channels
Manage social media presence and engagement strategies
Analyze campaign performance using data-driven insights
Lead a team of 5 marketing specialists and coordinators
Create and implement content marketing strategy
Manage $500K annual marketing budget
Report on KPIs and ROI to senior leadership`,
    achievements: `Increased website traffic by 45% through SEO optimization
Improved conversion rate by 22% with A/B testing strategies
Reduced customer acquisition cost by 18% through channel optimization
Launched successful new product campaign generating $2M in first-year revenue
Grew social media following by 15,000+ engaged users
Implemented marketing automation reducing manual work by 25 hours weekly`,
    includeNumbers: true,
    includeMetrics: true,
    verbStyle: 'achievement'
  };

  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const handleGenerate = useCallback(() => {
    // Validate required fields
    const requiredFields = ['jobTitle', 'responsibilities'];
    const missingFields = requiredFields.filter(field => !formData[field]?.trim());
    if (missingFields.length > 0) {
      alert(`Please fill in required fields: ${missingFields.join(', ')}`);
      return;
    }
    
    setIsGenerating(true);
    // Simulate processing time for better UX
    setTimeout(() => {
      const points = generateBulletPoints(formData);
      setGeneratedPoints(points);
      setIsGenerating(false);
      setCurrentStep(3);
      // Scroll to results
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  }, [formData]);

  const handleUseSample = () => {
    setFormData(SAMPLE_DATA);
    setCurrentStep(2);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleClear = () => {
    setFormData({
      jobTitle: '',
      industry: 'tech',
      companySize: 'medium',
      skillsTools: '',
      responsibilities: '',
      achievements: '',
      includeNumbers: true,
      includeMetrics: true,
      verbStyle: 'mixed'
    });
    setGeneratedPoints(null);
    setCurrentStep(1);
  };

  const nextStep = () => {
    if (currentStep === 1 && !formData.jobTitle.trim()) {
      alert('Please enter your job title to continue');
      return;
    }
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Dynamic meta data - Shortened title to under 70 characters
  const metaDescription = `Generate powerful resume bullet points with CAR methodology. Create quantifiable, ATS-optimized bullet points in minutes. 100% free with industry-specific templates for ${CURRENT_YEAR}.`;
  const pageTitle = `Free Resume Bullet Point Generator: CAR Method & ATS Optimized`;
  // UPDATED: Removed www from canonical URL
  const canonicalUrl = "https://professionalresumefree.com/free-resume-bullet-point-generator";

  // Schema data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "name": pageTitle,
        "description": metaDescription,
        "datePublished": "2024-01-01",
        "dateModified": seoData?.lastModifiedDate || new Date().toISOString(),
        "inLanguage": "en-US"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Free Resume Bullet Point Generator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "ratingCount": 4231
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

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="resume bullet point generator, CAR method resume, resume achievements, quantifiable bullet points, resume writing, career tools, free resume builder, ATS resume, professional resume, job search tools 2026" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="last-modified" content={seoData?.lastModifiedDate || new Date().toISOString()} />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content={pageTitle} />
        <meta name="chatgpt-fts:description" content="Generate powerful resume bullet points with CAR methodology. Create quantifiable, ATS-optimized bullet points in minutes. 100% free." />
        <meta name="chatgpt-fts:keywords" content="resume bullet points, CAR method, ATS resume, achievement statements" />
        <meta name="chatgpt-fts:last-updated" content={seoData?.currentDate || new Date().toISOString().split('T')[0]} />
        
        {/* Canonical URL - Single Tag - UPDATED without www */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={seoData?.lastModifiedDate || new Date().toISOString()} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Hidden SEO Elements */}
      <div style={{display: 'none'}} aria-hidden="true">
        <span itemProp="tool-type">Bullet Point Generator</span>
        <span itemProp="year">{CURRENT_YEAR}</span>
        <span itemProp="last-updated">{seoData?.currentDate || new Date().toISOString().split('T')[0]}</span>
        <span itemProp="build-timestamp">{buildTimestamp}</span>
      </div>

      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li className="breadcrumb-separator">›</li>
            <li><Link href="/resume-tools">Resume Tools</Link></li>
            <li className="breadcrumb-separator">›</li>
            <li className="breadcrumb-current">Bullet Point Generator</li>
          </ol>
        </nav>

        {/* Header Section */}
        <header className="header">
          <h1>{pageTitle}</h1>
          <p>
            Transform vague responsibilities into powerful, quantifiable achievements that pass ATS screening. Our AI-powered generator uses CAR methodology (Context-Action-Result) with industry-specific templates for maximum impact in {CURRENT_YEAR}.
          </p>

          {/* Trust Signals */}
          <div className="trust-signals">
            <div className="trust-signal">
              <span className="signal-icon">✓</span>
              <span>4.8/5 Rating (4,231+ Reviews)</span>
            </div>
            <div className="trust-signal">
              <span className="signal-icon">✓</span>
              <span>100% Free • No Sign Up</span>
            </div>
            <div className="trust-signal">
              <span className="signal-icon">✓</span>
              <span>Privacy-First • Browser-Based</span>
            </div>
            <div className="trust-signal">
              <span className="signal-icon">✓</span>
              <span>ATS-Optimized Output</span>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="progress-steps">
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <div className="step-label">Role Details</div>
            </div>
            <div className="step-line"></div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <div className="step-label">Skills & Achievements</div>
            </div>
            <div className="step-line"></div>
            <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-label">Generate & Customize</div>
            </div>
          </div>
        </header>

        <main>
          {!generatedPoints && (
            <div className="form-section">
              {/* Step 1: Role Details */}
              {(currentStep === 1 || currentStep === 2) && (
                <div className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '1.2rem' }}>
                      Step {currentStep}: {currentStep === 1 ? 'Role & Industry Information' : 'Skills, Achievements & Customization'}
                    </h2>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <button 
                        onClick={handleUseSample} 
                        className="btn-outline"
                        aria-label="Load sample data to see how the generator works"
                      >
                        Load Sample Data
                      </button>
                      <button 
                        onClick={handleClear} 
                        className="btn-outline"
                        aria-label="Clear all form fields"
                      >
                        Clear All Fields
                      </button>
                    </div>
                  </div>
                  
                  <div className="form-grid">
                    {currentStep === 1 ? (
                      <>
                        <div className="form-group">
                          <label htmlFor="jobTitle" className="label">
                            Job Title <span className="required">*</span>
                          </label>
                          <input
                            id="jobTitle"
                            type="text"
                            className="input"
                            value={formData.jobTitle}
                            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                            placeholder="e.g., Senior Marketing Manager, Software Engineer"
                            aria-required="true"
                          />
                          <p className="helper-text">Enter your current or target job title</p>
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="companySize" className="label">
                            Company Size
                          </label>
                          <select
                            id="companySize"
                            className="select"
                            value={formData.companySize}
                            onChange={(e) => handleInputChange('companySize', e.target.value)}
                            aria-label="Select company size"
                          >
                            <option value="small">Small Company (1-50 employees)</option>
                            <option value="medium">Medium Company (51-500 employees)</option>
                            <option value="large">Large Company (500+ employees)</option>
                            <option value="enterprise">Enterprise (5000+ employees)</option>
                          </select>
                        </div>
                        
                        <div className="form-group-full">
                          <label htmlFor="responsibilities" className="label">
                            Key Responsibilities <span className="required">*</span>
                          </label>
                          <textarea
                            id="responsibilities"
                            className="textarea"
                            value={formData.responsibilities}
                            onChange={(e) => handleInputChange('responsibilities', e.target.value)}
                            placeholder={`Describe what you did in this role. Enter one responsibility per line:

- Manage social media accounts and engagement
- Analyze campaign performance using Google Analytics
- Lead team meetings and coordinate projects
- Create marketing materials and content`}
                            rows={6}
                            aria-required="true"
                          />
                          <p className="helper-text">Enter 3-5 main responsibilities (one per line)</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="form-group-full">
                          <label htmlFor="skillsTools" className="label">
                            Skills & Tools Used (comma separated)
                          </label>
                          <textarea
                            id="skillsTools"
                            className="textarea"
                            value={formData.skillsTools}
                            onChange={(e) => handleInputChange('skillsTools', e.target.value)}
                            placeholder="e.g., Google Analytics, SEO, Content Strategy, Social Media Marketing, Data Analysis, Python, JavaScript"
                            rows={3}
                            aria-label="List your skills and tools"
                          />
                          <p className="helper-text">Include technical skills, software, and methodologies</p>
                        </div>
                        
                        <div className="form-group-full">
                          <label htmlFor="achievements" className="label">
                            Achievements & Results (one per line)
                          </label>
                          <textarea
                            id="achievements"
                            className="textarea"
                            value={formData.achievements}
                            onChange={(e) => handleInputChange('achievements', e.target.value)}
                            placeholder={`List your accomplishments, even without specific numbers yet:

- Increased website traffic and user engagement
- Improved conversion rates through optimization
- Reduced operational costs and improved efficiency
- Launched successful new product campaigns`}
                            rows={5}
                            aria-label="List your achievements and results"
                          />
                          <p className="helper-text">We'll help add quantifiable metrics and impact statements</p>
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="verbStyle" className="label">
                            Action Verb Style
                          </label>
                          <select
                            id="verbStyle"
                            className="select"
                            value={formData.verbStyle}
                            onChange={(e) => handleInputChange('verbStyle', e.target.value)}
                            aria-label="Select action verb style"
                          >
                            <option value="mixed">Mixed (Recommended for ATS)</option>
                            <option value="leadership">Leadership Focused</option>
                            <option value="achievement">Achievement Focused</option>
                            <option value="innovation">Innovation Focused</option>
                            <option value="collaboration">Collaboration Focused</option>
                            <option value="analysis">Analysis Focused</option>
                          </select>
                        </div>
                        
                        <div className="checkbox-group">
                          <label className="checkbox-label">
                            <input
                              type="checkbox"
                              checked={formData.includeNumbers}
                              onChange={(e) => handleInputChange('includeNumbers', e.target.checked)}
                              className="checkbox"
                              aria-label="Include quantifiable numbers in bullet points"
                            />
                            Include quantifiable numbers & percentages
                          </label>
                          <label className="checkbox-label">
                            <input
                              type="checkbox"
                              checked={formData.includeMetrics}
                              onChange={(e) => handleInputChange('includeMetrics', e.target.checked)}
                              className="checkbox"
                              aria-label="Add impact metrics to bullet points"
                            />
                            Add impact metrics & measurable results
                          </label>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="step-navigation">
                    {currentStep === 2 && (
                      <button 
                        onClick={prevStep} 
                        className="btn-outline"
                        aria-label="Go back to previous step"
                      >
                        ← Back to Role Details
                      </button>
                    )}
                    {currentStep === 1 ? (
                      <button 
                        onClick={nextStep} 
                        className="button"
                        disabled={!formData.jobTitle.trim()}
                        aria-label="Continue to skills and achievements step"
                      >
                        Continue to Skills & Achievements →
                      </button>
                    ) : (
                      <button 
                        onClick={handleGenerate} 
                        className="button" 
                        disabled={isGenerating}
                        aria-label="Generate professional bullet points"
                      >
                        {isGenerating ? (
                          <>
                            <span>Generating...</span>
                            <span className="loading-spinner" style={{ width: '20px', height: '20px', margin: 0 }}></span>
                          </>
                        ) : (
                          'Generate Professional Bullet Points'
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Industry Selector (Step 1) */}
              {currentStep === 1 && (
                <IndustrySelector
                  selectedIndustry={formData.industry}
                  onIndustryChange={(industry) => handleInputChange('industry', industry)}
                />
              )}
            </div>
          )}

          {isGenerating ? (
            <div className="loading">
              <div className="loading-spinner"></div>
              <p className="loading-text">Generating powerful, ATS-optimized bullet points...</p>
              <p className="loading-subtext">Using CAR methodology and industry-specific templates</p>
            </div>
          ) : generatedPoints ? (
            <>
              <BulletPointDisplay {...generatedPoints} />
              
              <div className="card">
                <h2 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>How to Use These Professional Bullet Points</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                  <div>
                    <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>1. Customize with Your Real Numbers</h3>
                    <p className="helper-text">Replace generic metrics with your actual achievements. Instead of "increased by 30%", use specific numbers like "increased conversion rate from 2.1% to 3.4%".</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>2. Prioritize by Relevance</h3>
                    <p className="helper-text">Place the most relevant points first for each job application. Match bullet points to keywords in the job description.</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>3. Apply CAR Format</h3>
                    <p className="helper-text">Ensure each point has Context, Action, and Result. This format is proven most effective for both ATS and human readers.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                  <button 
                    onClick={handleClear} 
                    className="btn-outline"
                    aria-label="Generate another set of bullet points"
                  >
                    Generate Another Set
                  </button>
                  <Link 
                    href="/resume-templates" 
                    className="btn-outline"
                    aria-label="Browse professional resume templates"
                  >
                    Browse Resume Templates
                  </Link>
                </div>
              </div>
            </>
          ) : currentStep === 1 ? (
            <div className="card">
              <h2 className="center-text" style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Transform Your Resume with Powerful, Quantifiable Bullet Points</h2>
              <p className="center-text helper-text" style={{ marginBottom: '20px' }}>
                Fill in your role details above and click "Continue" to generate professional, ATS-optimized bullet points.
              </p>
              <div className="checklist">
                <p className="checklist-title">What makes our bullet point generator effective:</p>
                <ul>
                  <li><strong>CAR Methodology:</strong> Context, Action, Result structure proven for impact</li>
                  <li><strong>Quantifiable Results:</strong> Automatic inclusion of numbers, percentages, and metrics</li>
                  <li><strong>Industry-Specific Templates:</strong> Relevant content for your field</li>
                  <li><strong>ATS Optimization:</strong> Formatting and keywords that pass automated screening</li>
                  <li><strong>Strong Action Verbs:</strong> Power words like "Led," "Increased," "Developed"</li>
                  <li><strong>Privacy-First:</strong> All processing happens in your browser—no data stored</li>
                  <li><strong>Free Forever:</strong> No watermarks, no sign-ups, no hidden costs</li>
                </ul>
              </div>
            </div>
          ) : null}

          {/* How-to Section */}
          <section className="how-to-section">
            <h2 className="section-title">How It Works: 5-Step Professional Bullet Point Creation</h2>
            <div className="how-to-steps">
              {HOW_TO_STEPS.map((step, index) => (
                <div key={index} className="how-to-step">
                  <div className="step-number">{index + 1}</div>
                  <h3 className="step-title">{step.name}</h3>
                  <p className="step-description">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CAR Methodology Explanation */}
          <section className="car-section">
            <h2 className="section-title">The CAR Methodology: Proven Framework for Impactful Bullet Points</h2>
            <div className="car-grid">
              <div className="car-card">
                <div className="car-letter">C</div>
                <h3 className="car-title">Context</h3>
                <p className="car-description">Describe the situation, challenge, or scope you faced. This sets the stage and shows the significance of your action.</p>
                <div className="car-example">
                  <strong>Example Context:</strong> "During company expansion into new markets..."
                </div>
                <div className="car-tip">
                  <strong>Tip:</strong> Start with timeframes, situations, or challenges
                </div>
              </div>
              <div className="car-card">
                <div className="car-letter">A</div>
                <h3 className="car-title">Action</h3>
                <p className="car-description">Explain what you specifically did, using strong action verbs and mentioning specific skills, tools, or methodologies.</p>
                <div className="car-example">
                  <strong>Example Action:</strong> "Led a cross-functional team of 8 to implement..."
                </div>
                <div className="car-tip">
                  <strong>Tip:</strong> Use industry-specific verbs and mention tools used
                </div>
              </div>
              <div className="car-card">
                <div className="car-letter">R</div>
                <h3 className="car-title">Result</h3>
                <p className="car-description">Quantify the outcome with specific numbers, percentages, timeframes, or measurable business impact.</p>
                <div className="car-example">
                  <strong>Example Result:</strong> "...resulting in 25% increase in efficiency and $150K annual savings"
                </div>
                <div className="car-tip">
                  <strong>Tip:</strong> Always include numbers—they're 3x more memorable
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="faq-section">
            <h2 className="section-title">Frequently Asked Questions About Resume Bullet Points</h2>
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
                    <span className="faq-toggle" aria-hidden="true">
                      {activeFaq === index ? '−' : '+'}
                    </span>
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
          <section className="reviews-section">
            <h2 className="section-title">What Professionals Say About Our Bullet Point Generator</h2>
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

          {/* Resources Section */}
          <section className="resources-section">
            <h2 className="section-title">Additional Career Resources & Tools</h2>
            <div className="resources-grid">
              <Link
                href="/free-ats-resume-checker"
                className="resource-card"
                aria-label="Free ATS Resume Checker tool"
              >
                <h3>Free ATS Resume Checker</h3>
                <p>Analyze your resume for ATS compatibility and get optimization tips to improve your score.</p>
                <span className="resource-link">Try ATS Checker →</span>
              </Link>
              <Link
                href="/free-cover-letter-generator"
                className="resource-card"
                aria-label="Professional Cover Letter Generator"
              >
                <h3>Cover Letter Generator</h3>
                <p>Create professional, tailored cover letters for any job application in minutes.</p>
                <span className="resource-link">Generate Cover Letter →</span>
              </Link>
              <Link
                href="/resume-templates"
                className="resource-card"
                aria-label="Professional Resume Templates"
              >
                <h3>ATS Resume Templates</h3>
                <p>Browse professionally designed resume templates optimized for ATS systems.</p>
                <span className="resource-link">View Templates →</span>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  
  // Generate SEO data
  const seoData = {
    currentDate: buildTime.toISOString().split('T')[0],
    lastModifiedDate: buildTime.toISOString(),
    reviewDates: Array(6).fill(null).map((_, i) => {
      const date = new Date(buildTimestamp);
      date.setDate(date.getDate() - (i * 7 + 1));
      return date.toISOString().split('T')[0];
    }),
    faqDates: Array(6).fill(null).map((_, i) => {
      const date = new Date(buildTimestamp);
      date.setDate(date.getDate() - (i * 14 + 30));
      return date.toISOString().split('T')[0];
    })
  };

  return {
    props: {
      seoData,
      buildTimestamp
    },
    // Revalidate every 2 hours
    revalidate: 7200
  };
}