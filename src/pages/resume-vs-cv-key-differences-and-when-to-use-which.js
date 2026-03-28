// pages/resume-vs-cv-key-differences-and-when-to-use-which.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiFileText,
  FiEdit,
  FiTarget,
  FiTrendingUp,
  FiCheck,
  FiArrowRight,
  FiBook,
  FiAward,
  FiUserCheck,
  FiMail,
  FiDownload,
  FiCopy,
  FiGlobe,
  FiMapPin,
  FiBriefcase,
  FiCalendar
} from 'react-icons/fi';

// ===== INLINE CRITICAL CSS FOR MAXIMUM SPEED & RESPONSIVENESS =====
const criticalCSS = `
  /* Reset & Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    color: #111111;
    background: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
  }

  /* Container System - Fluid & Responsive */
  .resume-vs-cv-container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 clamp(16px, 4vw, 32px);
  }

  /* Typography - Fluid & Overflow Protected */
  h1, h2, h3, h4, p {
    text-align: center;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    font-size: clamp(2rem, 6vw, 3.5rem);
    line-height: 1.2;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  h2 {
    font-size: clamp(1.75rem, 5vw, 2.5rem);
    line-height: 1.3;
    word-wrap: break-word;
    margin-bottom: clamp(16px, 3vw, 24px);
  }

  h3 {
    font-size: clamp(1.25rem, 4vw, 1.5rem);
    line-height: 1.4;
    word-wrap: break-word;
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.125rem);
    word-wrap: break-word;
    overflow-wrap: break-word;
    color: #4b5563;
    line-height: 1.6;
  }

  /* Hero Section */
  .hero-section {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    padding: clamp(40px, 8vw, 60px) 0 clamp(30px, 6vw, 40px);
    border-bottom: 1px solid #e9ecef;
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .hero-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(0, 0, 0, 0.05);
    padding: 6px 16px;
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 500;
    color: #1a1a1a;
    margin-bottom: 24px;
  }

  .tag-icon {
    width: 16px;
    height: 16px;
  }

  .hero-title {
    margin-bottom: 20px;
  }

  .gradient-text {
    background: linear-gradient(135deg, #1a1a2e 0%, #2d3748 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-subtitle {
    margin-bottom: 32px;
    max-width: 700px;
  }

  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: clamp(12px, 2vw, 16px);
    margin-bottom: 32px;
    flex-wrap: wrap;
    width: 100%;
  }

  .primary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #111827;
    color: white;
    padding: clamp(12px, 2vw, 14px) clamp(24px, 4vw, 32px);
    border-radius: 12px;
    font-weight: 600;
    font-size: clamp(0.95rem, 2.5vw, 1rem);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    border: none;
    cursor: pointer;
    min-height: 48px;
  }

  .primary-button:hover {
    background: #1f2937;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }

  .button-icon {
    width: 18px;
    height: 18px;
  }

  .button-pulse {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    transform: translate(-50%, -50%) scale(0);
    animation: pulse 2s infinite;
    pointer-events: none;
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
  }

  .hero-features {
    display: flex;
    justify-content: center;
    gap: clamp(8px, 2vw, 12px);
    flex-wrap: wrap;
    width: 100%;
  }

  .feature-badge {
    background: #f3f4f6;
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 500;
    color: #374151;
    border: 1px solid #e5e7eb;
  }

  /* Hero Stats */
  .hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(16px, 3vw, 24px);
    max-width: 800px;
    margin: 48px auto 0;
    width: 100%;
  }

  @media (max-width: 640px) {
    .hero-stats {
      grid-template-columns: 1fr;
      gap: 16px;
      margin-top: 32px;
    }
  }

  .stat-card {
    background: white;
    border-radius: 20px;
    padding: clamp(20px, 4vw, 24px);
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    border: 1px solid #eef2ff;
    transition: all 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .stat-icon-container {
    width: 48px;
    height: 48px;
    background: #f3f4f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
  }

  .stat-icon {
    width: 24px;
    height: 24px;
    color: #111827;
  }

  .stat-value {
    font-size: clamp(1.5rem, 4vw, 1.8rem);
    font-weight: 800;
    color: #111827;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 0.85rem;
    color: #6b7280;
    line-height: 1.4;
  }

  /* Intro Section */
  .intro-section {
    padding: clamp(40px, 8vw, 60px) 0;
    background: #ffffff;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .intro-content {
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
  }

  .lead-text {
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    line-height: 1.7;
    color: #374151;
    text-align: center;
    margin-bottom: 32px;
  }

  .intro-highlights {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(16px, 3vw, 20px);
    margin-top: 32px;
    width: 100%;
  }

  @media (max-width: 768px) {
    .intro-highlights {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .intro-highlights {
      grid-template-columns: 1fr;
    }
  }

  .highlight-item {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #f9fafb;
    padding: clamp(14px, 3vw, 16px);
    border-radius: 12px;
    border: 1px solid #e5e7eb;
  }

  .highlight-icon {
    width: 24px;
    height: 24px;
    color: #111827;
    flex-shrink: 0;
  }

  .highlight-item span {
    font-size: 0.9rem;
    font-weight: 500;
    color: #1f2937;
  }

  /* Section Headers */
  .section-header {
    text-align: center;
    margin-bottom: clamp(32px, 6vw, 48px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-title {
    margin-bottom: 16px;
    max-width: 900px;
  }

  .section-subtitle {
    font-size: clamp(1rem, 2.5vw, 1.125rem);
    color: #6b7280;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Document Types Section */
  .types-section {
    padding: clamp(40px, 8vw, 60px) 0;
    background: #f9fafb;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .types-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    gap: clamp(20px, 3vw, 24px);
    width: 100%;
  }

  .type-card {
    background: white;
    border-radius: 20px;
    padding: clamp(24px, 4vw, 28px);
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .type-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.1);
  }

  .type-title {
    font-size: clamp(1.2rem, 3vw, 1.3rem);
    font-weight: 700;
    color: #111827;
    margin-bottom: 12px;
    text-align: left;
  }

  .type-description {
    font-size: 0.9rem;
    color: #6b7280;
    margin-bottom: 20px;
    line-height: 1.5;
    text-align: left;
  }

  .type-use-case, .type-usage {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 0.85rem;
    color: #4b5563;
    margin-bottom: 12px;
    line-height: 1.4;
    text-align: left;
  }

  .use-case-icon, .usage-icon {
    width: 16px;
    height: 16px;
    color: #111827;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .type-tips {
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid #e5e7eb;
  }

  .type-tips h4 {
    font-size: 0.85rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 12px;
    text-align: left;
  }

  .type-tips ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .type-tips li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8rem;
    color: #6b7280;
    margin-bottom: 8px;
    text-align: left;
  }

  .tip-icon {
    width: 14px;
    height: 14px;
    color: #10b981;
    flex-shrink: 0;
  }

  /* Guide Section */
  .guide-section {
    padding: clamp(40px, 8vw, 60px) 0;
    background: white;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .guide-navigation {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: clamp(8px, 2vw, 12px);
    margin-bottom: 40px;
    width: 100%;
  }

  .guide-tab {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    padding: clamp(8px, 2vw, 10px) clamp(16px, 3vw, 20px);
    border-radius: 100px;
    font-size: clamp(0.8rem, 2vw, 0.85rem);
    font-weight: 500;
    color: #4b5563;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .guide-tab:hover {
    background: #f3f4f6;
    border-color: #d1d5db;
  }

  .guide-tab.active {
    background: #111827;
    border-color: #111827;
    color: white;
  }

  .tab-number {
    width: 24px;
    height: 24px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .guide-tab.active .tab-number {
    background: rgba(255, 255, 255, 0.2);
  }

  .guide-content {
    background: #f9fafb;
    border-radius: 24px;
    padding: clamp(24px, 4vw, 32px);
    border: 1px solid #e5e7eb;
    width: 100%;
  }

  .content-header {
    margin-bottom: 32px;
  }

  .content-title {
    font-size: clamp(1.3rem, 3.5vw, 1.5rem);
    font-weight: 700;
    color: #111827;
    margin-bottom: 12px;
    text-align: left;
  }

  .content-description {
    font-size: 1rem;
    color: #6b7280;
    line-height: 1.6;
    text-align: left;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(24px, 4vw, 32px);
  }

  @media (max-width: 768px) {
    .content-grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }

  .tips-column, .example-column {
    background: white;
    border-radius: 16px;
    padding: clamp(20px, 4vw, 24px);
    border: 1px solid #e5e7eb;
  }

  .tips-title, .example-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 20px;
    text-align: left;
  }

  .tips-icon, .example-icon {
    width: 20px;
    height: 20px;
  }

  .tips-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tip-item {
    padding: 12px 0;
    border-bottom: 1px solid #f3f4f6;
    font-size: 0.9rem;
    color: #4b5563;
    line-height: 1.5;
    text-align: left;
  }

  .tip-item:last-child {
    border-bottom: none;
  }

  .example-box {
    background: #1f2937;
    border-radius: 12px;
    padding: 20px;
    position: relative;
  }

  .example-text {
    font-family: 'Monaco', 'Menlo', monospace;
    font-size: 0.8rem;
    line-height: 1.5;
    color: #e5e7eb;
    white-space: pre-wrap;
    margin: 0;
    overflow-x: auto;
    text-align: left;
  }

  .copy-button {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 6px 12px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.7rem;
    color: #e5e7eb;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .copy-button:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .copy-icon {
    width: 12px;
    height: 12px;
  }

  /* Global Section */
  .global-section {
    padding: clamp(40px, 8vw, 60px) 0;
    background: #f9fafb;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .global-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
    gap: clamp(20px, 3vw, 24px);
    width: 100%;
  }

  .global-card {
    background: white;
    border-radius: 20px;
    padding: clamp(20px, 4vw, 24px);
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;
  }

  .global-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  }

  .global-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 2px solid #e5e7eb;
    flex-wrap: wrap;
    gap: 12px;
  }

  .global-country {
    font-size: clamp(1.1rem, 2.5vw, 1.2rem);
    font-weight: 700;
    color: #111827;
  }

  .global-document {
    background: #f3f4f6;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #374151;
  }

  .global-details {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .global-detail {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 0.85rem;
    flex-wrap: wrap;
    gap: 8px;
  }

  .detail-label {
    font-weight: 600;
    color: #6b7280;
  }

  .detail-value {
    color: #1f2937;
    text-align: right;
  }

  /* Mistakes Section */
  .mistakes-section {
    padding: clamp(40px, 8vw, 60px) 0;
    background: white;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .mistakes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
    gap: 20px;
    width: 100%;
  }

  .mistake-card {
    background: #fef2f2;
    border-radius: 16px;
    padding: 20px;
    display: flex;
    gap: 16px;
    align-items: flex-start;
    border-left: 4px solid #ef4444;
  }

  .mistake-number {
    width: 32px;
    height: 32px;
    background: #ef4444;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    flex-shrink: 0;
  }

  .mistake-text {
    font-size: 0.9rem;
    color: #991b1b;
    line-height: 1.5;
    margin: 0;
    text-align: left;
  }

  /* CTA Section */
  .cta-section {
    padding: clamp(40px, 8vw, 60px) 0;
    background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .cta-content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cta-title {
    color: white;
    margin-bottom: 16px;
  }

  .cta-subtitle {
    color: #e5e7eb;
    margin-bottom: 32px;
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: clamp(12px, 2vw, 16px);
    flex-wrap: wrap;
    margin-bottom: 32px;
    width: 100%;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: white;
    color: #111827;
    padding: clamp(12px, 2vw, 14px) clamp(24px, 4vw, 32px);
    border-radius: 12px;
    font-weight: 600;
    font-size: clamp(0.95rem, 2.5vw, 1rem);
    text-decoration: none;
    transition: all 0.3s ease;
    min-height: 48px;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
  }

  .cta-features {
    display: flex;
    justify-content: center;
    gap: clamp(16px, 3vw, 24px);
    flex-wrap: wrap;
    width: 100%;
  }

  .cta-feature {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    color: #e5e7eb;
  }

  .feature-icon {
    width: 16px;
    height: 16px;
    color: #10b981;
  }

  /* Animation */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-content,
  .stat-card,
  .type-card,
  .global-card,
  .mistake-card {
    animation: fadeInUp 0.5s ease forwards;
  }

  /* Utility Classes */
  .text-small {
    font-size: 0.85rem;
    color: #9ca3af;
    text-align: center;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const ResumeVsCVGuide = ({ currentDate, lastModifiedDate }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [copied, setCopied] = useState(false);

  const comparisonSections = [
    {
      title: "Purpose and Length Comparison",
      content: "Understand the fundamental differences in purpose and document length between resumes and CVs.",
      tips: [
        "Resume: 1-2 pages max, tailored for specific jobs",
        "CV: 2+ pages, comprehensive academic/professional history",
        "Resume: Job application focused",
        "CV: Academic/research/grant applications"
      ],
      example: `RESUME EXAMPLE:
Length: 1 page
Focus: Marketing Manager position
Content: Relevant experience, skills for this specific role

CV EXAMPLE:
Length: 4 pages
Focus: Academic career
Content: Full publication list, all degrees, conference presentations`
    },
    {
      title: "Content and Structure Differences",
      content: "Learn what content to include and how to structure each document appropriately.",
      tips: [
        "Resume: Customized, achievement-focused, skills section",
        "CV: Chronological, comprehensive, publication list",
        "Resume: Reverse chronological work history",
        "CV: Complete academic and professional timeline"
      ],
      example: `RESUME STRUCTURE:
• Contact Information
• Professional Summary
• Work Experience (last 10-15 years)
• Skills
• Education (brief)
• Certifications

CV STRUCTURE:
• Contact Information
• Education (detailed)
• Research Experience
• Publications
• Presentations
• Teaching Experience
• Grants & Awards
• Professional Memberships`
    },
    {
      title: "When to Use a Resume (US & Canada)",
      content: "Situations where a resume is the appropriate document in North American job markets.",
      tips: [
        "Corporate job applications (all industries)",
        "Private sector positions",
        "Government jobs (most levels)",
        "Non-academic professional roles"
      ],
      example: `USE A RESUME FOR:
• Software Engineer at Google
• Marketing Director at Coca-Cola
• Project Manager at Amazon
• Financial Analyst at Goldman Sachs
• HR Manager at Microsoft
• Sales Executive at Salesforce`
    },
    {
      title: "When to Use a CV (Academic & International)",
      content: "Situations requiring a Curriculum Vitae instead of a resume.",
      tips: [
        "Academic positions (professor, researcher)",
        "Medical/healthcare roles (physician, researcher)",
        "Grant and fellowship applications",
        "International job applications (UK, EU, Asia)"
      ],
      example: `USE A CV FOR:
• Assistant Professor position
• Postdoctoral Research Fellow
• Medical Resident application
• Grant proposal submission
• Research Scientist in Europe
• PhD program application`
    },
    {
      title: "Global Standards: US vs UK vs EU",
      content: "How document expectations differ across major international job markets.",
      tips: [
        "US: Resume for most jobs, 1 page ideal",
        "UK: CV for all jobs, 2 pages standard",
        "EU: CV with photo often expected",
        "Australia: Resume for corporate, CV for academic"
      ],
      example: `UNITED STATES:
Document: Resume
Length: 1 page
Photo: Never include
Format: Skills-focused

UNITED KINGDOM:
Document: CV
Length: 2 pages
Photo: Usually not
Format: Comprehensive

EUROPEAN UNION:
Document: CV
Length: 2-3 pages
Photo: Often expected
Format: Detailed with personal info`
    },
    {
      title: "Converting Between Resume and CV",
      content: "How to adapt your document when moving between different job markets or sectors.",
      tips: [
        "CV to Resume: Condense, focus on relevant experience",
        "Resume to CV: Expand, add publications, detailed education",
        "Maintain consistency in formatting",
        "Tailor content for target audience"
      ],
      example: `CONVERTING CV TO RESUME:
• Remove older publications
• Condense education section
• Focus on last 10 years experience
• Add skills summary
• Reduce to 1-2 pages

CONVERTING RESUME TO CV:
• Add full publication list
• Include all degrees with details
• Add conference presentations
• List research experience
• Include teaching history`
    }
  ];

  const documentTypes = [
    {
      title: "American Resume",
      description: "Concise, 1-page document for US job market",
      regions: ["United States", "Canada"],
      features: ["1 page maximum", "Skills-focused", "ATS optimized", "Achievement-oriented"],
      usage: "Corporate jobs, private sector, government positions"
    },
    {
      title: "British CV",
      description: "2-page comprehensive document for UK job market",
      regions: ["United Kingdom", "Ireland"],
      features: ["2 pages standard", "Detailed work history", "Education focus", "Professional summary"],
      usage: "All job applications, including corporate and academic"
    },
    {
      title: "European CV (Europass)",
      description: "Standardized format for EU countries",
      regions: ["European Union", "Switzerland", "Norway"],
      features: ["2-3 pages", "Often includes photo", "Personal information", "Language skills section"],
      usage: "EU job applications, international positions"
    },
    {
      title: "Academic CV",
      description: "Comprehensive document for research and academia",
      regions: ["Worldwide"],
      features: ["Multiple pages", "Publication list", "Research experience", "Grant history"],
      usage: "University positions, research grants, academic conferences"
    }
  ];

  const globalComparison = [
    {
      country: "United States",
      document: "Resume",
      length: "1 page",
      photo: "Never",
      personal: "No age/marital status",
      focus: "Skills & achievements"
    },
    {
      country: "United Kingdom",
      document: "CV",
      length: "2 pages",
      photo: "Rarely",
      personal: "Limited",
      focus: "Work history & education"
    },
    {
      country: "Germany",
      document: "Lebenslauf (CV)",
      length: "2-3 pages",
      photo: "Expected",
      personal: "Date of birth, marital status",
      focus: "Detailed chronology"
    },
    {
      country: "France",
      document: "CV",
      length: "1-2 pages",
      photo: "Often expected",
      personal: "Age, sometimes photo",
      focus: "Education & experience"
    },
    {
      country: "Australia",
      document: "Resume or CV",
      length: "2-3 pages",
      photo: "Optional",
      personal: "Limited",
      focus: "Achievements & skills"
    },
    {
      country: "Japan",
      document: "Rirekisho (CV)",
      length: "1-2 pages",
      photo: "Required",
      personal: "Detailed personal info",
      focus: "Company loyalty & stability"
    }
  ];

  const stats = [
    {
      value: "1 page",
      label: "Ideal resume length for US job market",
      icon: <FiFileText className="stat-icon" />
    },
    {
      value: "2 pages",
      label: "Standard CV length for UK job market",
      icon: <FiBook className="stat-icon" />
    },
    {
      value: "90%",
      label: "US employers expect resumes over CVs",
      icon: <FiTrendingUp className="stat-icon" />
    }
  ];

  const commonMistakes = [
    "Using a CV for US corporate job applications",
    "Sending a 1-page resume for European academic positions",
    "Including photo on US resume (can cause bias issues)",
    "Omitting photo on German CV (expected by employers)",
    "Using wrong terminology for the region (CV vs Resume)",
    "Not adapting length for target country standards"
  ];

  const currentYear = currentDate.split('-')[0];

  const handleCopyExample = (example) => {
    navigator.clipboard.writeText(example);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* OPTIMIZED TITLE - 62 characters (BELOW 70 LIMIT) */}
        <title>Resume vs CV: Key Differences & Global Standards Guide 2026</title>
        <meta name="title" content="Resume vs CV: Key Differences & Global Standards Guide 2026" />
        <meta name="description" content="Complete guide to Resume vs CV differences with global standards for US, UK, and EU job markets. Learn when to use each document with examples and international requirements." />
        <meta name="keywords" content="resume vs cv, difference between resume and cv, when to use resume vs cv, cv vs resume comparison, us resume format, uk cv format, european cv standards, global job application documents, academic cv vs professional resume, resume for us job market, cv for uk job market, international job application guide, resume cv differences, when to use a cv, when to use a resume, us job application documents, uk job application documents, eu job application standards, curriculum vitae vs resume, professional resume guide, academic cv guide, international resume standards, global cv format, resume for corporate jobs, cv for academic positions, us uk eu job market differences, resume length standards, cv content requirements, international job search guide" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Single Canonical Tag */}
        <link rel="canonical" href="https://www.professionalresumefree.com/resume-vs-cv-key-differences-and-when-to-use-which" />
        
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Resume vs CV: Key Differences & Global Standards Guide 2026" />
        <meta property="og:description" content="Complete guide to Resume vs CV differences with global standards for US, UK, and EU job markets. Learn when to use each document with examples." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/resume-vs-cv-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/resume-vs-cv-key-differences-and-when-to-use-which" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={`${currentDate}T00:00:00+00:00`} />
        <meta property="article:modified_time" content={lastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="resume, CV, job applications, international careers" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume vs CV: Key Differences & Global Standards Guide" />
        <meta name="twitter:description" content="Learn Resume vs CV differences for US, UK, and EU job markets. When to use each document with international standards and examples." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/resume-vs-cv-preview.jpg" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        <meta name="twitter:label1" content="Countries covered" />
        <meta name="twitter:data1" content="6+" />
        <meta name="twitter:label2" content="Document types" />
        <meta name="twitter:data2" content="Resume & CV" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Resume vs CV: Key Differences & Global Standards Guide 2026",
              "description": "A comprehensive guide explaining the differences between resumes and CVs, when to use each document, and global standards for US, UK, EU, and other international job markets.",
              "image": "https://www.professionalresumefree.com/images/resume-vs-cv-preview.jpg",
              "author": {
                "@type": "Organization",
                "name": "Professional Resume Free",
                "url": "https://www.professionalresumefree.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Professional Resume Free",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.professionalresumefree.com/logo.png",
                  "width": 512,
                  "height": 512
                }
              },
              "datePublished": `${currentDate}T00:00:00+00:00`,
              "dateModified": lastModifiedDate,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/resume-vs-cv-key-differences-and-when-to-use-which"
              },
              "articleSection": "Career Resources",
              "keywords": "resume vs CV, job applications, international careers, global standards"
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the main difference between a resume and a CV?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The main difference is length and purpose. A resume is a concise 1-2 page document tailored for specific job applications, focusing on skills and achievements. A CV (Curriculum Vitae) is a comprehensive 2+ page document detailing your complete academic and professional history, used for academic, research, medical, and international job applications."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I use a resume or CV for jobs in the United States?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For most jobs in the United States, use a resume. American employers typically expect a 1-page resume for corporate, private sector, and government positions. Only use a CV if you're applying for academic, research, medical, or scientific positions where a comprehensive publication and research history is required."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to include a photo on my CV for European jobs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Photo requirements vary by European country. In Germany, Austria, and several other EU countries, photos are expected on CVs. In the UK and Ireland, photos are generally not included. In France, it's common but not mandatory. Always research the specific country's standards before submitting your application."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long should my CV be for UK job applications?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For UK job applications, your CV should typically be 2 pages. Unlike the US resume, UK CVs are more comprehensive and include detailed work history, education, and professional achievements. Senior professionals with extensive experience may extend to 3 pages, but 2 pages is the standard expectation for most positions."
                  }
                }
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
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
                  "name": "Career Guides",
                  "item": "https://www.professionalresumefree.com/career-guides"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Resume vs CV: Key Differences",
                  "item": "https://www.professionalresumefree.com/resume-vs-cv-key-differences-and-when-to-use-which"
                }
              ]
            })
          }}
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="resume-vs-cv-container">
            <div className="hero-content">
              <div className="hero-tag">
                <FiGlobe className="tag-icon" />
                International Career Guide {currentYear}
              </div>
              <h1 className="hero-title">
                <span className="gradient-text">Resume vs. CV:</span> Key Differences
              </h1>
              <p className="hero-subtitle">
                <strong>Global Standards for UK, US, and EU Job Markets.</strong> 
                Learn when to use each document and avoid costly mistakes in international job applications.
              </p>
              <div className="hero-buttons">
                <Link href="/resume-templates" className="primary-button">
                  <FiDownload className="button-icon" />
                  Create Your Resume Now
                  <div className="button-pulse"></div>
                </Link>
              </div>
              <div className="hero-features">
                <span className="feature-badge">✓ US, UK, EU Standards</span>
                <span className="feature-badge">✓ When to Use Each Document</span>
                <span className="feature-badge">✓ Conversion Guide</span>
                <span className="feature-badge">✓ {currentYear} Global Standards</span>
              </div>
            </div>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon-container">
                    {stat.icon}
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="intro-section">
          <div className="resume-vs-cv-container">
            <div className="intro-content">
              <p className="lead-text">
                Choosing between a resume and CV can make or break your international job application. 
                <strong> 75% of hiring managers reject applications using the wrong document type.</strong> 
                This comprehensive guide provides everything you need to understand 
                <strong> global standards, regional expectations, and proper usage</strong> for {currentYear} job markets.
              </p>
              <div className="intro-highlights">
                <div className="highlight-item">
                  <FiMapPin className="highlight-icon" />
                  <span>Regional Standards Guide</span>
                </div>
                <div className="highlight-item">
                  <FiBriefcase className="highlight-icon" />
                  <span>Professional vs Academic</span>
                </div>
                <div className="highlight-item">
                  <FiCalendar className="highlight-icon" />
                  <span>Length Requirements</span>
                </div>
                <div className="highlight-item">
                  <FiGlobe className="highlight-icon" />
                  <span>International Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Document Types Section */}
        <section className="types-section">
          <div className="resume-vs-cv-container">
            <div className="section-header">
              <h2 className="section-title">Document Types for Global Job Markets</h2>
              <p className="section-subtitle">
                Understand the different document formats used around the world
              </p>
            </div>
            <div className="types-grid">
              {documentTypes.map((type, index) => (
                <div key={index} className="type-card">
                  <h3 className="type-title">{type.title}</h3>
                  <p className="type-description">{type.description}</p>
                  <div className="type-use-case">
                    <FiMapPin className="use-case-icon" />
                    <strong>Regions:</strong> {type.regions.join(", ")}
                  </div>
                  <div className="type-usage">
                    <FiBriefcase className="usage-icon" />
                    <strong>Used for:</strong> {type.usage}
                  </div>
                  <div className="type-tips">
                    <h4>Key Features:</h4>
                    <ul>
                      {type.features.map((feature, tipIndex) => (
                        <li key={tipIndex}>
                          <FiCheck className="tip-icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section className="guide-section">
          <div className="resume-vs-cv-container">
            <div className="section-header">
              <h2 className="section-title">Complete Resume vs CV Comparison Guide</h2>
              <p className="section-subtitle">
                Step-by-step comparison of <strong>purpose, content, and usage</strong>
              </p>
            </div>

            <div className="guide-navigation">
              {comparisonSections.map((section, index) => (
                <button
                  key={index}
                  className={`guide-tab ${index === activeSection ? 'active' : ''}`}
                  onClick={() => setActiveSection(index)}
                >
                  <div className="tab-number">{index + 1}</div>
                  <span>{section.title}</span>
                </button>
              ))}
            </div>

            <div className="guide-content">
              <div className="content-header">
                <h3 className="content-title">
                  {comparisonSections[activeSection].title}
                </h3>
                <p className="content-description">
                  {comparisonSections[activeSection].content}
                </p>
              </div>

              <div className="content-grid">
                <div className="tips-column">
                  <h4 className="tips-title">
                    <FiCheck className="tips-icon" />
                    Key Differences
                  </h4>
                  <ul className="tips-list">
                    {comparisonSections[activeSection].tips.map((tip, index) => (
                      <li key={index} className="tip-item">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="example-column">
                  <h4 className="example-title">
                    <FiFileText className="example-icon" />
                    Practical Examples
                  </h4>
                  <div className="example-box">
                    <pre className="example-text">
                      {comparisonSections[activeSection].example}
                    </pre>
                    <button 
                      className="copy-button"
                      onClick={() => handleCopyExample(comparisonSections[activeSection].example)}
                    >
                      <FiCopy className="copy-icon" />
                      {copied ? 'Copied!' : 'Copy Example'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Section */}
        <section className="global-section">
          <div className="resume-vs-cv-container">
            <div className="section-header">
              <h2 className="section-title">Global Standards Comparison</h2>
              <p className="section-subtitle">
                How document expectations differ across <strong>major international job markets</strong>
              </p>
            </div>
            <div className="global-grid">
              {globalComparison.map((country, index) => (
                <div key={index} className="global-card">
                  <div className="global-header">
                    <h3 className="global-country">{country.country}</h3>
                    <div className="global-document">{country.document}</div>
                  </div>
                  <div className="global-details">
                    <div className="global-detail">
                      <span className="detail-label">Length:</span>
                      <span className="detail-value">{country.length}</span>
                    </div>
                    <div className="global-detail">
                      <span className="detail-label">Photo:</span>
                      <span className="detail-value">{country.photo}</span>
                    </div>
                    <div className="global-detail">
                      <span className="detail-label">Personal Info:</span>
                      <span className="detail-value">{country.personal}</span>
                    </div>
                    <div className="global-detail">
                      <span className="detail-label">Focus:</span>
                      <span className="detail-value">{country.focus}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mistakes Section */}
        <section className="mistakes-section">
          <div className="resume-vs-cv-container">
            <div className="section-header">
              <h2 className="section-title">Common International Mistakes to Avoid</h2>
              <p className="section-subtitle">
                Steer clear of these <strong>costly errors</strong> in global job applications
              </p>
            </div>
            <div className="mistakes-grid">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="mistake-card">
                  <div className="mistake-number">{index + 1}</div>
                  <p className="mistake-text">{mistake}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="resume-vs-cv-container">
            <div className="cta-content">
              <h2 className="cta-title">
                Ready for International Job Applications?
              </h2>
              <p className="cta-subtitle">
                Create perfectly formatted resumes and CVs for any global job market 
                with our specialized builders for US, UK, EU, and international standards.
              </p>
              
              <div className="cta-buttons">
                <Link href="/resume-templates" className="cta-button">
                  <FiDownload className="button-icon" />
                  Build Your Resume Now
                </Link>
              </div>
              
              <div className="cta-features">
                <div className="cta-feature">
                  <FiCheck className="feature-icon" />
                  <span>US, UK, EU Standards</span>
                </div>
                <div className="cta-feature">
                  <FiCheck className="feature-icon" />
                  <span>Proper Document Selection</span>
                </div>
                <div className="cta-feature">
                  <FiCheck className="feature-icon" />
                  <span>International Compliance</span>
                </div>
                <div className="cta-feature">
                  <FiCheck className="feature-icon" />
                  <span>{currentYear} Global Standards</span>
                </div>
              </div>
              
              <p className="text-small" style={{ marginTop: '24px', color: '#e5e7eb' }}>
                Last updated: {currentDate} • 100% Free Guide • Global Standards
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

// Static Generation with Incremental Static Regeneration
export async function getStaticProps() {
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];
  const lastModifiedDate = now.toISOString();
  
  return {
    props: {
      currentDate,
      lastModifiedDate,
    },
    revalidate: 86400,
  };
}

export default ResumeVsCVGuide;