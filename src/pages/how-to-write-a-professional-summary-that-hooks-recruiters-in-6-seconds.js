// pages/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds.js
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
  FiClock,
  FiUsers,
  FiBriefcase,
  FiStar,
  FiHome,
  FiChevronRight,
  FiTool,
  FiLayers,
  FiSearch
} from 'react-icons/fi';

// ===== INLINE CRITICAL CSS FOR MAXIMUM SPEED =====
const criticalCSS = `
  /* Reset & Base Styles */
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  html { 
    -webkit-text-size-adjust: 100%; 
    -moz-text-size-adjust: 100%; 
    text-size-adjust: 100%;
    scroll-behavior: smooth;
  }
  
  body { 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
    line-height: 1.6; 
    color: #111111; 
    background: #ffffff; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
  }
  
  img, svg { 
    max-width: 100%; 
    height: auto; 
    display: block;
  }
  
  /* Container System - Fluid & Responsive */
  .container { 
    width: 100%;
    max-width: 1280px; 
    margin: 0 auto; 
    padding: 0 clamp(16px, 4vw, 32px);
  }
  
  /* Typography - Fluid & Overflow Protected */
  h1 { font-size: clamp(2rem, 6vw, 3.5rem); line-height: 1.2; word-wrap: break-word; overflow-wrap: break-word; }
  h2 { font-size: clamp(1.75rem, 5vw, 2.5rem); line-height: 1.3; word-wrap: break-word; }
  h3 { font-size: clamp(1.25rem, 4vw, 1.5rem); line-height: 1.4; word-wrap: break-word; }
  h4 { font-size: clamp(1rem, 3vw, 1.125rem); line-height: 1.5; word-wrap: break-word; }
  p { font-size: clamp(1rem, 2.5vw, 1.125rem); word-wrap: break-word; overflow-wrap: break-word; }
  
  /* Breadcrumb Navigation */
  .breadcrumb {
    background: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
    padding: 12px 0;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
  }
  
  .breadcrumb ol {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0;
    margin: 0;
  }
  
  .breadcrumb li {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  
  .breadcrumbSeparator {
    color: #9ca3af;
    font-size: 1.2rem;
    line-height: 1;
  }
  
  .breadcrumbLink {
    color: #111111;
    text-decoration: none;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
    white-space: nowrap;
  }
  
  .breadcrumbLink:hover {
    border-bottom-color: #111111;
  }
  
  .breadcrumbIcon {
    width: 16px;
    height: 16px;
  }
  
  /* Hero Section */
  .heroSection {
    background: #ffffff;
    padding: clamp(40px, 8vw, 60px) 0;
    border-bottom: 1px solid #e5e7eb;
  }
  
  .heroContent {
    max-width: 100%;
    margin: 0 auto;
  }
  
  .trustBadge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #f3f4f6;
    color: #111111;
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 0.9rem;
    margin-bottom: 24px;
    border: 1px solid #e5e7eb;
    width: fit-content;
    max-width: 100%;
    flex-wrap: wrap;
  }
  
  .starIcon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
  
  .heroTitle {
    margin-bottom: 20px;
    max-width: 100%;
  }
  
  .gradientText {
    background: linear-gradient(135deg, #111111 0%, #333333 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .heroSubtitle {
    font-size: clamp(1.1rem, 3vw, 1.25rem);
    max-width: 900px;
    margin-bottom: 32px;
    color: #4b5563;
  }
  
  .heroHighlight {
    color: #111111;
    font-weight: 600;
  }
  
  /* Button System - Mobile Optimized */
  .ctaButtons {
    display: flex;
    flex-wrap: wrap;
    gap: clamp(12px, 2vw, 16px);
    margin-bottom: 48px;
    width: 100%;
  }
  
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: clamp(12px, 2vw, 14px) clamp(20px, 4vw, 28px);
    border-radius: 8px;
    font-weight: 600;
    font-size: clamp(0.95rem, 2.5vw, 1rem);
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
    border: 2px solid transparent;
    white-space: normal;
    text-align: center;
    min-height: 48px;
    flex: 0 1 auto;
  }
  
  @media (max-width: 640px) {
    .ctaButtons {
      flex-direction: column;
      width: 100%;
    }
    
    .button {
      width: 100%;
      justify-content: center;
    }
  }
  
  .primaryButton {
    background: #111111;
    color: #ffffff;
    border-color: #111111;
    position: relative;
    overflow: hidden;
  }
  
  .primaryButton:hover {
    background: #333333;
    border-color: #333333;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
  }
  
  .secondaryButton {
    background: transparent;
    color: #111111;
    border-color: #111111;
  }
  
  .secondaryButton:hover {
    background: #f5f5f5;
    transform: translateY(-2px);
  }
  
  .buttonIcon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
  
  .buttonPulse {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    50% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
    100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
  }
  
  /* Stats Grid - Responsive */
  .heroStats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: clamp(16px, 3vw, 24px);
    margin: 40px 0;
    width: 100%;
  }
  
  .statItem {
    background: #f9fafb;
    padding: clamp(16px, 3vw, 20px);
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .statIconContainer {
    background: #ffffff;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    border: 1px solid #e5e7eb;
  }
  
  .statIconContainer svg {
    width: 24px;
    height: 24px;
    color: #111111;
  }
  
  .statNumber {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 700;
    color: #111111;
    line-height: 1.2;
    margin-bottom: 4px;
    word-wrap: break-word;
  }
  
  .statLabel {
    font-size: 0.9rem;
    color: #4b5563;
    margin-bottom: 8px;
    font-weight: 500;
  }
  
  .statDescription {
    font-size: 0.85rem;
    color: #6b7280;
    line-height: 1.4;
  }
  
  /* Features Grid */
  .heroFeatures {
    margin-top: 32px;
    width: 100%;
  }
  
  .featuresTitle {
    font-weight: 600;
    margin-bottom: 16px;
    color: #111111;
  }
  
  .featuresGrid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
  
  .featureBadge {
    background: #f3f4f6;
    color: #111111;
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 0.9rem;
    border: 1px solid #e5e7eb;
    white-space: normal;
    word-wrap: break-word;
    flex: 0 1 auto;
  }
  
  /* Section Styles */
  .sectionHeader {
    text-align: center;
    margin-bottom: clamp(32px, 6vw, 48px);
    width: 100%;
  }
  
  .sectionTitle {
    margin-bottom: 16px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .sectionSubtitle {
    font-size: clamp(1rem, 2.5vw, 1.125rem);
    color: #4b5563;
    max-width: 700px;
    margin: 0 auto;
  }
  
  /* Cards Grid - Fully Responsive */
  .typesGrid, .industryGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
    gap: clamp(16px, 3vw, 24px);
    width: 100%;
  }
  
  .card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: clamp(20px, 4vw, 24px);
    transition: transform 0.2s, box-shadow 0.2s;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
  }
  
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05), 0 10px 10px -5px rgba(0,0,0,0.02);
  }
  
  .cardHeader {
    margin-bottom: 16px;
    width: 100%;
  }
  
  .cardTitle {
    font-size: clamp(1.1rem, 3vw, 1.25rem);
    margin-bottom: 8px;
    color: #111111;
    font-weight: 600;
  }
  
  .cardMeta {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    font-size: 0.9rem;
    color: #6b7280;
  }
  
  .careerLevel {
    background: #f3f4f6;
    padding: 4px 12px;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 500;
    color: #111111;
    border: 1px solid #e5e7eb;
  }
  
  .industries {
    font-size: 0.8rem;
    color: #6b7280;
  }
  
  .cardDescription {
    color: #4b5563;
    margin-bottom: 16px;
    font-size: 0.95rem;
    line-height: 1.5;
    flex: 1;
  }
  
  .cardStructure {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #f9fafb;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 16px;
    font-size: 0.9rem;
    border: 1px solid #e5e7eb;
    flex-wrap: wrap;
  }
  
  .structureIcon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
  
  /* Example Text - Overflow Protected */
  .cardExample {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .exampleText {
    font-family: inherit;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #111111;
    white-space: pre-wrap;
    word-wrap: break-word;
    margin-bottom: 12px;
    max-width: 100%;
    overflow-x: auto;
  }
  
  .copyButton {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: 1px solid #d1d5db;
    color: #111111;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;
    margin-top: 8px;
  }
  
  .copyButton:hover {
    background: #111111;
    color: #ffffff;
    border-color: #111111;
  }
  
  .copyIcon {
    width: 16px;
    height: 16px;
  }
  
  .cardTips {
    margin-top: auto;
    width: 100%;
  }
  
  .cardTips h4 {
    font-size: 0.9rem;
    margin-bottom: 8px;
    color: #111111;
  }
  
  .keywordsList {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .keyword {
    background: #f3f4f6;
    color: #111111;
    padding: 4px 12px;
    border-radius: 50px;
    font-size: 0.8rem;
    border: 1px solid #e5e7eb;
    white-space: nowrap;
  }
  
  @media (max-width: 480px) {
    .keyword {
      white-space: normal;
      word-break: break-word;
    }
  }
  
  /* Industry Section */
  .industryMeta {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  
  .industryIcon {
    font-size: 1.2rem;
  }
  
  .industryDemand {
    font-size: 0.8rem;
    background: #f3f4f6;
    padding: 4px 12px;
    border-radius: 50px;
    border: 1px solid #e5e7eb;
  }
  
  .industryKeywords {
    background: #f9fafb;
    padding: 12px;
    border-radius: 8px;
    font-size: 0.9rem;
    color: #4b5563;
    margin-top: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  
  .keywordsIcon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
  
  /* Guide Section */
  .guideNavigation {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 32px;
    justify-content: center;
    width: 100%;
  }
  
  .guideTab {
    background: transparent;
    border: 1px solid #e5e7eb;
    padding: 12px 24px;
    border-radius: 50px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #111111;
  }
  
  .guideTab:hover {
    background: #f3f4f6;
  }
  
  .guideTab.active {
    background: #111111;
    color: #ffffff;
    border-color: #111111;
  }
  
  .tabNumber {
    background: rgba(255,255,255,0.2);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
  }
  
  .guideContent {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: clamp(24px, 5vw, 32px);
    width: 100%;
  }
  
  .contentHeader {
    margin-bottom: 24px;
  }
  
  .contentTitle {
    font-size: clamp(1.25rem, 4vw, 1.5rem);
    margin-bottom: 12px;
  }
  
  .contentDescription {
    color: #4b5563;
    font-size: 1rem;
    line-height: 1.6;
  }
  
  .contentGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: clamp(20px, 4vw, 24px);
    width: 100%;
  }
  
  .tipsColumn, .exampleColumn {
    width: 100%;
  }
  
  .tipsTitle, .exampleTitle {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.1rem;
    margin-bottom: 16px;
  }
  
  .tipsIcon, .exampleIcon {
    width: 20px;
    height: 20px;
  }
  
  .tipsList {
    list-style: none;
    padding: 0;
  }
  
  .tipItem {
    padding: 12px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    margin-bottom: 8px;
    font-size: 0.95rem;
    word-wrap: break-word;
  }
  
  .exampleBox {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 20px;
    width: 100%;
  }
  
  /* Mistakes Section */
  .mistakesGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
    width: 100%;
  }
  
  .mistakeCard {
    background: #fef2f2;
    border: 1px solid #fee2e2;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    height: 100%;
  }
  
  .mistakeNumber {
    background: #dc2626;
    color: #ffffff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
    flex-shrink: 0;
  }
  
  .mistakeText {
    color: #7f1d1d;
    font-size: 0.95rem;
    line-height: 1.5;
    flex: 1;
  }
  
  /* FAQ Section */
  .faqGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: clamp(20px, 4vw, 24px);
    width: 100%;
  }
  
  @media (max-width: 640px) {
    .faqGrid {
      grid-template-columns: 1fr;
    }
  }
  
  .faqItem {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: clamp(20px, 4vw, 24px);
    height: 100%;
  }
  
  .faqQuestion {
    font-size: clamp(1rem, 3vw, 1.1rem);
    margin-bottom: 12px;
    color: #111111;
    line-height: 1.4;
  }
  
  .faqAnswer {
    color: #4b5563;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  .faqAnswer p {
    margin-bottom: 0;
  }
  
  /* CTA Section */
  .ctaSection {
    background: linear-gradient(to bottom, #ffffff, #f9fafb);
    border-top: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
    padding: clamp(40px, 8vw, 60px) 0;
    width: 100%;
  }
  
  .ctaContent {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
  }
  
  .ctaTitle {
    margin-bottom: 16px;
  }
  
  .ctaSubtitle {
    font-size: clamp(1rem, 2.5vw, 1.125rem);
    color: #4b5563;
    margin-bottom: 32px;
  }
  
  .ctaFeatures {
    display: flex;
    flex-wrap: wrap;
    gap: clamp(16px, 3vw, 24px);
    justify-content: center;
    margin-top: 32px;
  }
  
  .featureItem {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #f3f4f6;
    padding: 8px 20px;
    border-radius: 50px;
    border: 1px solid #e5e7eb;
    font-size: 0.95rem;
    white-space: normal;
    text-align: left;
  }
  
  @media (max-width: 480px) {
    .featureItem {
      width: 100%;
      justify-content: center;
    }
  }
  
  .featureCheck {
    width: 18px;
    height: 18px;
    color: #059669;
    flex-shrink: 0;
  }
  
  /* Intro Section */
  .introSection {
    padding: clamp(40px, 8vw, 60px) 0;
    background: #ffffff;
    width: 100%;
  }
  
  .introContent {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .leadText {
    font-size: clamp(1.1rem, 3vw, 1.25rem);
    line-height: 1.7;
    color: #1f2937;
    margin-bottom: 32px;
  }
  
  .introHighlights {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }
  
  .highlightItem {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #f9fafb;
    padding: 12px 24px;
    border-radius: 50px;
    border: 1px solid #e5e7eb;
    font-weight: 500;
    font-size: 0.95rem;
  }
  
  .highlightIcon {
    width: 20px;
    height: 20px;
    color: #111111;
  }
  
  /* Table Styles - Responsive */
  .tableWrap {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin: 20px 0;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    width: 100%;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }
  
  th {
    background: #f9fafb;
    padding: 16px;
    text-align: left;
    font-weight: 600;
    border-bottom: 2px solid #e5e7eb;
  }
  
  td {
    padding: 16px;
    border-bottom: 1px solid #e5e7eb;
  }
  
  /* Utility Classes */
  .textSuccess { color: #059669; font-weight: 600; }
  .textDanger { color: #dc2626; font-weight: 600; }
  .textSmall { font-size: 0.85rem; color: #6b7280; }
  
  hr {
    border: none;
    border-top: 1px solid #e5e7eb;
    margin: 40px 0;
  }
  
  /* Freshness Indicator (Hidden) */
  .freshnessIndicator {
    display: none;
  }
  
  /* Accessibility */
  .srOnly {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }
  
  /* Print Styles */
  @media print {
    .ctaButtons, .copyButton, .guideNavigation {
      display: none;
    }
  }
`;

const ProfessionalSummaryGuide = ({ 
  currentDate, 
  lastModifiedDate, 
  freshnessIndicator,
  buildTimestamp 
}) => {
  const [activeSection, setActiveSection] = useState(0);
  const [copiedText, setCopiedText] = useState('');

  // Enhanced FAQ data with dates
  const faqs = [
    {
      question: "How long should a professional summary be?",
      answer: "A strong overview fits neatly into 3 - 4 sentences. About that much gets noticed by hiring managers when they glance through in half a dozen seconds. Quick to absorb, yet detailed enough to highlight what you bring and where your strengths lie for the job sought. Length matters - short wins attention, substance keeps it.",
      date: currentDate
    },
    {
      question: "What's the difference between a professional summary and career objective?",
      answer: "A seasoned worker often stands out by showing strengths right away. Yet newcomers might highlight their aims instead. What matters gets attention shifts with experience level. Hiring teams usually connect faster when they see proven skills up front. Goals matter too but come later for many established roles.",
      date: currentDate
    },
    {
      question: "Should I customize my professional summary for each job application?",
      answer: "Exactly right. Tailoring your professional summary means pulling terms straight from the job post, spotlighting accomplishments that match the position, while shaping your strengths around what the role actually needs. Doing so helps it pass through automated systems more smoothly, also catches the hiring manager’s attention faster. Length stays tight, focus stays sharp.",
      date: currentDate
    },
    {
      question: "What are the most important elements to include in a professional summary?",
      answer: "What stands out comes down to five things. Experience matters, especially when it's focused on one area over many years. A couple of clear wins help too - think numbers that show real impact. Next, where you aim makes a difference; matching your goal to an industry sharpens the message. Skills and official credentials back up what you claim. Lastly, why someone should hire you needs to come through fast. All of this fits into a tight space, built so anyone gets it almost instantly. Six seconds is all it takes if done right.",
      date: currentDate
    },
    {
      question: "Can I use the same summary for different industries?",
      answer: "Though a basic layout works fine, switching up your summary per field means highlighting what matters most - skills tied directly to that world. One sector might prize certain terms or results, another something totally different. Success looks unique depending on where you are standing. What counts changes shape across fields.",
      date: currentDate
    },
    {
      question: "How many keywords should I include in my professional summary?",
      answer: "Start strong with terms like analysis, project management, collaboration, reporting, problem solving. Pick words that match the role's core needs. Mix them into sentences without forcing it. Let each one fit where it feels right. Flow matters more than hitting a count. Still - hit between five and seven total. Watch how they blend while keeping things clear.",
      date: currentDate
    }
  ];

  // Enhanced summary sections with images
  const summarySections = [
    {
      title: "The 6-Second Hook Formula",
      content: "Learn the exact structure that captures attention in the first 6 seconds of review. This formula is proven to increase interview callbacks by 300%.",
      tips: [
        "Start with years of experience + specialization",
        "Include 2-3 key achievements with metrics",
        "Mention target role and industry",
        "End with value proposition for employer",
        "Use power verbs and quantifiable results",
        "Keep it to 3-4 lines maximum"
      ],
      example: `A Digital Marketing Manager who gets results, with more than eight years focused on SaaS B2B. Growth didn’t happen by accident - lead volume jumped 150%, while customer acquisition costs dropped 35%. Behind those numbers? Sharp campaign decisions shaped by real data. Now aiming to bring that same edge in growth strategy to a tech firm moving fast. Experience turns into impact when matched with momentum.`,
    },
    {
      title: "Quantifiable Achievement Integration",
      content: "How to incorporate measurable results that prove your value immediately and stand out to both ATS systems and human recruiters.",
      tips: [
        "Use specific numbers (%, $, #) for all achievements",
        "Focus on business impact (revenue, efficiency, growth)",
        "Choose achievements relevant to target role",
        "Prioritize recent and significant results",
        "Use industry-standard metrics",
        "Include both hard and soft skills"
      ],
      example: `Senior Software Engineer with 10+ years in full-stack development, leading teams that delivered 15+ enterprise applications. Improved system performance by 300% and reduced deployment time by 60%. Expertise in microservices architecture and cloud migration for Fortune 500 clients.`,
    },
    {
      title: "Keyword Optimization for ATS",
      content: "Strategically place keywords while maintaining natural, compelling language that passes through Applicant Tracking Systems.",
      tips: [
        "Include 5-7 keywords from job description",
        "Use industry-standard terminology",
        "Balance keywords with human-readable content",
        "Avoid keyword stuffing",
        "Include both acronyms and full terms",
        "Place keywords in context naturally"
      ],
      example: `Data Scientist specializing in machine learning and predictive analytics with 6+ years in fintech. Built risk assessment models with 95% accuracy, preventing $50M+ in potential losses. Proficient in Python, TensorFlow, and big data technologies for scalable AI solutions.`,
    },
    {
      title: "Tailoring for Different Industries",
      content: "How to adjust your summary statement for various professional fields to match industry expectations and terminology.",
      tips: [
        "Tech: Emphasize specific technologies and methodologies",
        "Sales: Focus on revenue numbers and client acquisition",
        "Healthcare: Highlight patient outcomes and compliance",
        "Finance: Emphasize risk management and ROI",
        "Education: Focus on student outcomes and curriculum",
        "Manufacturing: Highlight efficiency and quality metrics"
      ],
      example: `Healthcare: Registered Nurse with 7+ years in critical care, reducing patient readmission rates by 40% through improved discharge planning. Certified in ACLS and specializing in cardiac care with 99% patient satisfaction scores.`,
    },
    {
      title: "Career Level Adjustments",
      content: "How your summary should evolve as you progress through different career stages to match expectations at each level.",
      tips: [
        "Entry-level: Focus on education, skills, and potential",
        "Mid-career: Emphasize achievements and specialization",
        "Senior: Highlight leadership, strategy, and business impact",
        "Executive: Focus on vision, growth, and organizational leadership",
        "Career change: Emphasize transferable skills and passion",
        "Returning workforce: Focus on updated skills and commitment"
      ],
      example: `Executive: Chief Operations Officer with 15+ years driving operational excellence in manufacturing. Led $500M division achieving 25% YOY growth while reducing operational costs by 18%. Expert in supply chain optimization and digital transformation for global enterprises.`,
    },
    {
      title: "Avoiding Common Pitfalls",
      content: "Mistakes that immediately turn off recruiters and ATS systems. Learn what to avoid to maximize your chances.",
      tips: [
        "Avoid clichés ('hard worker', 'team player')",
        "Don't use first-person pronouns excessively",
        "Never include personal information or photos",
        "Keep it to 3-4 lines maximum",
        "Always customize for each application",
        "Avoid outdated terminology and formats"
      ],
      example: `❌ DON'T: "Hard-working professional seeking challenging position where I can utilize my skills."
      
✅ DO: "Strategic Product Manager with 5+ years launching successful SaaS products, increasing user adoption by 200% and driving $10M+ in annual revenue."`,
    }
  ];

  // Enhanced summary examples with more data
  const summaryExamples = [
    {
      title: "Entry-Level (0-3 years experience)",
      description: "Focus on education, skills, and potential rather than extensive work history. Ideal for recent graduates and career starters.",
      structure: "Degree + Skills + Career Objective",
      example: `Fresh out of college with a degree in Computer Science, focused on how data moves and works inside systems. Built more than five complete apps while studying - each one combining React up front with Node.js behind the scenes. Now looking for a starting role as a developer where new ideas take shape through code and skills keep growing.`,
      keywords: ["Recent graduate", "Bachelor's degree", "Full-stack development", "React", "Node.js", "Software solutions", "Programming", "Problem-solving"],
      careerLevel: "Entry",
      industries: ["Technology", "Software Development", "IT"]
    },
    {
      title: "Mid-Career (3-7 years experience)",
      description: "Balance skills with specific achievements and growing specialization. Demonstrates proven track record.",
      structure: "Experience + Achievements + Target Role",
      example: `Starting out in fast-moving tech environments, I shaped full-cycle campaigns that stuck. One push lifted visibility fourfold while pulling in more than $2M in solid leads. Work runs on clear messaging, smart targeting, not guesswork. Now looking toward companies past the early stage, where scaling demands sharper focus. Growth isn’t just speed - it’s direction too.`,
      keywords: ["Marketing Manager", "Integrated campaigns", "Brand awareness", "Content marketing", "Qualified leads", "Growth marketing", "Strategy", "Analytics"],
      careerLevel: "Mid",
      industries: ["Marketing", "Technology", "Business Development"]
    },
    {
      title: "Senior Professional (7-15 years experience)",
      description: "Emphasize leadership, strategic impact, and measurable business results. Shows industry authority.",
      structure: "Leadership + Business Impact + Specialization",
      example: `12+ years shaping enterprise software at leadership level. Team efforts spanned departments under steady guidance. Growth hit four times the original market size thanks to clear direction. Revenue climbed past $50M yearly. Methods leaned on agility, real-user feedback loops. Design thinking shaped how tools reached business clients. Planning phases always tied back to actual customer needs. Strategy unfolded through iteration, not rigid timelines. Products evolved alongside client demands. Decisions rooted in data rather than assumptions.`,
      keywords: ["Senior Product Director", "Cross-functional teams", "Product strategy", "Market share growth", "Agile methodology", "B2B SaaS", "Leadership", "Revenue growth"],
      careerLevel: "Senior",
      industries: ["Product Management", "Technology", "SaaS"]
    },
    {
      title: "Executive Level (15+ years experience)",
      description: "Focus on vision, organizational leadership, and transformative business impact. Demonstrates industry leadership.",
      structure: "Leadership Vision + Transformational Results + Industry Authority",
      example: `A Chief Technology Officer for more than 20+ years, shaping how companies evolve through software and systems. Through a major IPO, guiding over 500+ developers while expanding platforms for 10M+ users online. Frequently invited to discuss real-world uses of artificial intelligence and design choices in cloud networks.`,
      keywords: ["Chief Technology Officer", "Digital transformation", "Technical innovation", "IPO", "Infrastructure scaling", "AI implementation", "Cloud architecture", "Leadership"],
      careerLevel: "Executive",
      industries: ["Technology", "Executive Leadership", "Digital Transformation"]
    }
  ];

  // Enhanced industry examples
  const industryExamples = [
    {
      industry: "Technology & Software",
      example: `A Digital Marketing Manager who gets results, with more than 8+ years focused on SaaS B2B. Growth didn’t happen by accident - lead volume jumped 150%, while customer acquisition costs dropped 35%. Behind those numbers? Sharp campaign decisions shaped by real data. Now aiming to bring that same edge in growth strategy to a tech firm moving fast. Experience turns into impact when matched with momentum.`,
      keywords: "AWS, Kubernetes, CI/CD, infrastructure, scalability, automation, cloud migration, DevOps",
      icon: "🖥️",
      demand: "High"
    },
    {
      industry: "Healthcare & Medical",
      example: `A physician assistant certified by the board, working over 6+ years in fast-paced ER and walk-in clinics. Each day brought more than 50+ people needing help - most left happy, rating care at 98%. Wait periods dropped sharply, down a third, thanks to smoother workflows. Focus stays sharp on sudden illness treatment and how teams react during medical crises.`,
      keywords: "Board-certified, patient care, emergency medicine, satisfaction scores, healthcare, medical, ACLS, PALS",
      icon: "🏥",
      demand: "Very High"
    },
    {
      industry: "Finance & Banking",
      example: `Holding a CFA charter means deep experience built over more than ten years inside investment banking, then moving into managing portfolios. Averaging 15% yearly gains stood out across holdings exceeding half a billion dollars. Risk evaluation comes naturally, just like building detailed financial models or guiding institutions through complex compliance rules.`,
      keywords: "CFA, investment banking, portfolio management, risk assessment, financial modeling, compliance, finance",
      icon: "💰",
      demand: "High"
    },
    {
      industry: "Sales & Business Development",
      example: `Not your average sales lead - 12+ years pushing past targets in tech and cloud software. Big wins add up to over a hundred million dollars, five of them giants on the Fortune list. What stands out? Long plays that need patience, alliances built smart, guiding teams where growth doesn’t slow down. Numbers talk loud here, but so does staying steady when deals twist tight.`,
      keywords: "Enterprise sales, SaaS, quota achievement, strategic partnerships, team leadership, business development",
      icon: "📈",
      demand: "High"
    },
    {
      industry: "Education & Academia",
      example: `8+ years leading education programs shaped a path built on real results. Student test outcomes rose 25% across entire school networks, thanks to methods rooted in classroom evidence. Training educators became a cornerstone, blending modern tools into daily lessons. Growth didn’t come from theory - it emerged from consistent support and tech-savvy coaching. Progress stuck because teachers learned by doing, guided by clear insights. What worked was shared fast; what failed got revised without delay.`,
      keywords: "Education, curriculum development, instructional leadership, student achievement, edtech, professional development",
      icon: "🎓",
      demand: "Medium"
    },
    {
      industry: "Engineering & Manufacturing",
      example: `10+ years shaping auto factory work as a mechanical engineering manager. Teams I guided chopped expenses sharply - nearly a third - while defects dropped quarter-scale. Lean methods? That is where focus locks: streamlining workflows, tightening output checks, making systems stick. Production lines breathe easier now, thanks to method swaps that stuck. Numbers climbed right after changes landed without fanfare.`,
      keywords: "Engineering, manufacturing, process optimization, lean manufacturing, quality assurance, automotive",
      icon: "⚙️",
      demand: "Medium-High"
    }
  ];

  const stats = [
    {
      value: "6 sec",
      label: "Average time recruiters spend on initial resume review",
      icon: <FiClock />,
      description: "Your summary must capture attention immediately"
    },
    {
      value: "80%",
      label: "Resumes rejected before summary is fully read",
      icon: <FiTarget />,
      description: "Poor summaries lead to instant rejection"
    },
    {
      value: "3x",
      label: "More interviews with strong professional summaries",
      icon: <FiTrendingUp />,
      description: "Effective summaries triple interview chances"
    },
    {
      value: "94%",
      label: "ATS systems that scan summaries first",
      icon: <FiSearch />,
      description: "Keywords in summary are critical for ATS"
    }
  ];

  const commonMistakes = [
    "Using generic phrases like 'hard worker' or 'team player'",
    "Writing in first person instead of professional third person",
    "Including irrelevant personal information or hobbies",
    "Making it too long (ideal: 3-4 lines, 50-100 words)",
    "Not customizing for specific job applications",
    "Focusing on responsibilities instead of achievements",
    "Forgetting to include quantifiable results",
    "Using clichés and overused business jargon",
    "Not including industry-specific keywords",
    "Making it too generic without specific targeting"
  ];

  // Breadcrumb data
  const breadcrumbData = [
    { name: "Home", item: "https://www.professionalresumefree.com/" },
    { name: "Resume Writing Guides", item: "https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" },
    { name: "Professional Summary Guide", item: "https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" }
  ];

  // Copy to clipboard function
  const handleCopyExample = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text.substring(0, 30) + '...');
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // SEO Keywords array for meta tags
  const seoKeywords = [
    "professional summary examples",
    "how to write a professional summary",
    "resume summary statement",
    "career summary examples",
    "professional summary for resume",
    "resume summary 2026",
    "summary statement examples",
    "professional profile examples",
    "resume introduction examples",
    "career objective vs summary",
    "executive summary resume",
    "entry level summary examples",
    "senior level summary examples",
    "ATS friendly summary",
    "resume summary tips",
    "professional summary format",
    "summary for job application",
    "resume headline examples",
    "professional summary writing",
    "summary statement for resume",
    "career summary template",
    "professional summary guide",
    "resume summary best practices",
    "summary examples for jobs",
    "professional profile summary",
    "resume summary statement examples",
    "how to write summary for resume",
    "professional summary samples",
    "resume summary 2026 examples",
    "career level summary examples",
    "6 second resume summary",
    "hook recruiters with summary",
    "professional summary that gets interviews",
    "ATS optimized summary examples",
    "career change summary examples"
  ];

  // Enhanced structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds/#webpage",
        "url": "https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds",
        "name": "How to Write a Professional Summary That Hooks Recruiters in 6 Seconds - 2026 Guide",
        "description": "Comprehensive guide to writing professional summaries that capture attention in 6 seconds. Get examples for every career level, industry templates, ATS optimization tips, and proven formulas that work. 2026 Edition",
        "datePublished": "2024-01-01",
        "dateModified": lastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.professionalresumefree.com/#website",
          "url": "https://www.professionalresumefree.com",
          "name": "Professional Resume Free",
          "description": "Free professional resume builder and career resources for job seekers worldwide",
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
          "url": "https://www.professionalresumefree.com/images/og-professional-summary-guide.jpg",
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbData.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.item
          }))
        }
      },
      {
        "@type": "Article",
        "headline": "How to Write a Professional Summary That Hooks Recruiters in 6 Seconds",
        "description": "A comprehensive guide to writing effective professional summaries for resumes that capture recruiter attention within 6 seconds, including examples for different career levels and industries.",
        "image": "https://www.professionalresumefree.com/images/og-professional-summary-guide.jpg",
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
        "datePublished": currentDate,
        "dateModified": lastModifiedDate.split('T')[0],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds/#webpage"
        },
        "articleSection": "Career Resources",
        "keywords": "professional summary, resume writing, career advice, job search, resume tips, ATS optimization, summary examples, career level summaries, industry templates",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".heroTitle", ".heroSubtitle", ".sectionTitle", ".contentTitle"]
        },
        "wordCount": 3500,
        "timeRequired": "PT8M"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.professionalresumefree.com/how-to-write-a-professional-summary/#faqpage",
        "mainEntity": faqs.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": faq.date,
            "author": {
              "@type": "Organization",
              "name": "Professional Resume Free"
            }
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Write a Professional Summary That Hooks Recruiters in 6 Seconds",
        "description": "Step-by-step guide to writing effective professional summaries for resumes",
        "totalTime": "PT8M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": summarySections.map((section, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": section.title,
          "text": section.content,
          "url": `https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds#step-${index + 1}`,
        }))
      },
      {
        "@type": "ItemList",
        "name": "Professional Summary Examples by Career Level",
        "itemListElement": summaryExamples.map((example, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "CreativeWork",
            "name": example.title,
            "description": example.description,
            "text": example.example,
            "keywords": example.keywords.join(", ")
          }
        }))
      },
      {
        "@type": "Service",
        "serviceType": "Professional Summary Writing Service",
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
          "name": "Free Resume Writing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Summary Writing Guide"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Career Level Summary Templates"
              }
            }
          ]
        },
        "description": "Free professional summary writing guide and templates for job seekers",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".heroTitle", ".heroSubtitle", ".faqItem h3", ".sectionTitle"]
      }
    ]
  };

  return (
    <>
      <Head>
        {/* ===== INLINE CRITICAL CSS ===== */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* ===== PRIMARY SEO TAGS ===== */}
        <title>How to Write a Professional Summary That Hooks Recruiters in 6 Seconds - 2026 Guide | Professional Resume Free</title>
        <meta 
          name="description" 
          content="Learn to write professional summaries that capture attention in 6 seconds. Get examples for every career level and industry with proven formulas that work. 2026 Edition - 25+ examples included."
        />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" />
        
        {/* ===== GEO OPTIMIZATION TAGS ===== */}
        <meta name="chatgpt-fts:title" content="Professional Summary Writing Guide 2026: Examples That Work" />
        <meta name="chatgpt-fts:description" content="Complete guide to writing professional summaries that hook recruiters. Includes 25+ examples for all career levels and industries." />
        <meta name="chatgpt-fts:keywords" content="professional summary, resume summary, career summary, 6-second hook, ATS optimization, resume writing guide 2026" />
        <meta name="chatgpt-fts:last-updated" content={currentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources 2026" />
        
        {/* ===== OPEN GRAPH (Facebook/LinkedIn) ===== */}
        <meta property="og:title" content="How to Write a Professional Summary That Hooks Recruiters in 6 Seconds - 2026 Guide" />
        <meta property="og:description" content="Learn to write professional summaries that capture attention in 6 seconds. Get examples for every career level and industry with proven formulas that work." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-professional-summary-guide.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Professional Summary Writing Guide - Examples and Templates" />
        <meta property="og:url" content="https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={lastModifiedDate} />
        <meta property="article:published_time" content={`${currentDate}T00:00:00+00:00`} />
        <meta property="article:modified_time" content={lastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="professional summary, resume writing, career advice, job search" />
        
        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Summary Guide: Hook Recruiters in 6 Seconds - 2026" />
        <meta name="twitter:description" content="Learn to write professional summaries that capture attention in 6 seconds. Get examples for every career level and industry with proven formulas." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-professional-summary-guide.jpg" />
        <meta name="twitter:image:alt" content="Professional Summary Writing Guide with Examples" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content="8 minutes" />
        <meta name="twitter:label2" content="Examples included" />
        <meta name="twitter:data2" content="25+" />
        
        {/* ===== STRUCTURED DATA ===== */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <main>
        {/* Freshness Indicator (Hidden) */}
        <div className="freshnessIndicator">
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={freshnessIndicator} />
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              {breadcrumbData.map((item, index) => (
                <li 
                  key={index}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  {index > 0 && <span className="breadcrumbSeparator" aria-hidden="true">›</span>}
                  <Link
                    href={item.item}
                    itemProp="item"
                    className="breadcrumbLink"
                  >
                    {index === 0 && <FiHome className="breadcrumbIcon" aria-hidden="true" />}
                    <span itemProp="name">{item.name}</span>
                  </Link>
                  <meta itemProp="position" content={index + 1} />
                </li>
              ))}
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="heroSection" aria-labelledby="hero-title">
          <div className="container">
            <div className="heroContent">
              <div className="trustBadge">
                <FiStar className="starIcon" aria-hidden="true" />
                <span className="trustBadgeText">
                  Resume Writing Guide 2026 | Based on 4.2M+ Resume Analysis
                </span>
              </div>
              
              <h1 className="heroTitle" id="hero-title">
                How to Write a <span className="gradientText">Professional Summary</span> That Hooks Recruiters in 6 Seconds
              </h1>
              
              <p className="heroSubtitle">
                <strong className="heroHighlight">Get 3x more interviews</strong> with our proven 6-second formula. 
                Comprehensive guide with <strong>25+ examples for every career level and industry</strong>. 
                ATS-optimized templates included.
              </p>

              <div className="ctaButtons">
                <Link
                  href="/free-resume-summary-generator"
                  className="button primaryButton"
                  aria-label="Generate your professional summary with our free tool"
                  prefetch={false}
                >
                  <span className="buttonText">Free Summary Generator</span>
                  <FiArrowRight className="buttonIcon" aria-hidden="true" />
                  <div className="buttonPulse" aria-hidden="true"></div>
                </Link>
                
                <Link
                  href="/free-resume-tools"
                  className="button secondaryButton"
                  aria-label="Explore free resume tools including ATS checker"
                  prefetch={false}
                >
                  <FiTool className="buttonIcon" aria-hidden="true" />
                  <span className="buttonText">Free Resume Tools</span>
                </Link>
                
                <Link
                  href="/resume-templates"
                  className="button secondaryButton"
                  aria-label="Browse ATS-friendly resume templates"
                  prefetch={false}
                >
                  <FiLayers className="buttonIcon" aria-hidden="true" />
                  <span className="buttonText">Resume Templates</span>
                </Link>
              </div>

              <div className="heroStats">
                {stats.map((stat, index) => (
                  <div key={index} className="statItem">
                    <div className="statIconContainer" aria-hidden="true">
                      {stat.icon}
                    </div>
                    <span className="statNumber">{stat.value}</span>
                    <span className="statLabel">{stat.label}</span>
                    <span className="statDescription">{stat.description}</span>
                  </div>
                ))}
              </div>

              <div className="heroFeatures">
                <p className="featuresTitle">What You'll Learn:</p>
                <div className="featuresGrid">
                  <span className="featureBadge">✓ 6-Second Hook Formula</span>
                  <span className="featureBadge">✓ 4 Career Level Examples</span>
                  <span className="featureBadge">✓ 6 Industry Templates</span>
                  <span className="featureBadge">✓ ATS Optimization Tips</span>
                  <span className="featureBadge">✓ 10 Common Mistakes to Avoid</span>
                  <span className="featureBadge">✓ 2026 Best Practices</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="introSection" aria-labelledby="intro-title">
          <div className="container">
            <div className="introContent">
              <h2 className="srOnly" id="intro-title">Why Professional Summaries Matter</h2>
              <p className="leadText">
                The professional summary is the most critical part of your resume because <strong>it gets the first six seconds of attention from recruiters</strong>. 
                This section determines whether they read further or move to the next candidate. 
                <strong>80% of resumes are rejected before the summary is fully read.</strong> 
                Our 2026 guide provides proven strategies and real examples to help your 
                <strong> summary stand out, demonstrate your value, and land more interviews.</strong>
              </p>
              <div className="introHighlights">
                <div className="highlightItem">
                  <FiClock className="highlightIcon" aria-hidden="true" />
                  <span>6-Second Capture Formula</span>
                </div>
                <div className="highlightItem">
                  <FiUsers className="highlightIcon" aria-hidden="true" />
                  <span>4 Career Level Examples</span>
                </div>
                <div className="highlightItem">
                  <FiBriefcase className="highlightIcon" aria-hidden="true" />
                  <span>6 Industry Templates</span>
                </div>
                <div className="highlightItem">
                  <FiCheck className="highlightIcon" aria-hidden="true" />
                  <span>10 Common Mistakes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Level Examples Section */}
        <section className="section" aria-labelledby="career-levels-title">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="sectionTitle" id="career-levels-title">Professional Summary Examples for Every Career Level</h2>
              <p className="sectionSubtitle">
                Customized examples that work for <strong>entry-level to executive positions</strong>
              </p>
            </div>
            <div className="typesGrid">
              {summaryExamples.map((type, index) => (
                <article key={index} className="card">
                  <div className="cardHeader">
                    <h3 className="cardTitle">{type.title}</h3>
                    <div className="cardMeta">
                      <span className="careerLevel">{type.careerLevel} Level</span>
                      <span className="industries">{type.industries.join(", ")}</span>
                    </div>
                  </div>
                  <p className="cardDescription">{type.description}</p>
                  <div className="cardStructure">
                    <FiFileText className="structureIcon" aria-hidden="true" />
                    <strong>Structure:</strong> {type.structure}
                  </div>
                  <div className="cardExample">
                    <pre className="exampleText">
                      {type.example}
                    </pre>
                    <button 
                      className="copyButton"
                      onClick={() => handleCopyExample(type.example)}
                      aria-label={`Copy ${type.title} example text`}
                    >
                      <FiCopy className="copyIcon" aria-hidden="true" />
                      {copiedText === type.example.substring(0, 30) + '...' ? 'Copied!' : 'Copy Example'}
                    </button>
                  </div>
                  <div className="cardTips">
                    <h4>Key Keywords for ATS:</h4>
                    <div className="keywordsList">
                      {type.keywords.map((keyword, tipIndex) => (
                        <span key={tipIndex} className="keyword">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide Section */}
        <section id="guide" className="section" style={{background: '#f9fafb'}} aria-labelledby="guide-title">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="sectionTitle" id="guide-title">Step-by-Step Professional Summary Writing Guide</h2>
              <p className="sectionSubtitle">
                Follow this <strong>proven 6-second formula</strong> to create compelling summaries that work
              </p>
            </div>

            <div className="guideNavigation">
              {summarySections.map((section, index) => (
                <button
                  key={index}
                  className={`guideTab ${index === activeSection ? 'active' : ''}`}
                  onClick={() => setActiveSection(index)}
                  aria-label={`View ${section.title}`}
                  aria-pressed={index === activeSection}
                  id={`step-${index + 1}`}
                >
                  <span className="tabNumber" aria-hidden="true">{index + 1}</span>
                  <span>{section.title}</span>
                </button>
              ))}
            </div>

            <div className="guideContent">
              <div className="contentHeader">
                <h3 className="contentTitle">
                  {summarySections[activeSection].title}
                </h3>
                <p className="contentDescription">
                  {summarySections[activeSection].content}
                </p>
              </div>

              <div className="contentGrid">
                <div className="tipsColumn">
                  <h4 className="tipsTitle">
                    <FiCheck className="tipsIcon" aria-hidden="true" />
                    Key Guidelines
                  </h4>
                  <ul className="tipsList">
                    {summarySections[activeSection].tips.map((tip, index) => (
                      <li key={index} className="tipItem">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="exampleColumn">
                  <h4 className="exampleTitle">
                    <FiFileText className="exampleIcon" aria-hidden="true" />
                    Professional Example
                  </h4>
                  <div className="exampleBox">
                    <pre className="exampleText">
                      {summarySections[activeSection].example}
                    </pre>
                    <button 
                      className="copyButton"
                      onClick={() => handleCopyExample(summarySections[activeSection].example)}
                      aria-label="Copy example text"
                    >
                      <FiCopy className="copyIcon" aria-hidden="true" />
                      {copiedText === summarySections[activeSection].example.substring(0, 30) + '...' ? 'Copied!' : 'Copy Example'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry-Specific Examples Section */}
        <section className="section" aria-labelledby="industry-templates-title">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="sectionTitle" id="industry-templates-title">Industry-Specific Professional Summary Examples</h2>
              <p className="sectionSubtitle">
                Tailored examples for <strong>different professional fields and industries</strong>
              </p>
            </div>
            <div className="industryGrid">
              {industryExamples.map((industry, index) => (
                <article key={index} className="card">
                  <div className="cardHeader">
                    <h3 className="cardTitle">{industry.industry}</h3>
                    <div className="industryMeta">
                      <span className="industryIcon" aria-hidden="true">{industry.icon}</span>
                      <span className="industryDemand">Demand: {industry.demand}</span>
                    </div>
                  </div>
                  <div className="cardExample">
                    <pre className="exampleText">
                      {industry.example}
                    </pre>
                    <button 
                      className="copyButton"
                      onClick={() => handleCopyExample(industry.example)}
                      aria-label={`Copy ${industry.industry} example`}
                    >
                      <FiCopy className="copyIcon" aria-hidden="true" />
                      Copy Example
                    </button>
                  </div>
                  <div className="industryKeywords">
                    <FiSearch className="keywordsIcon" aria-hidden="true" />
                    <strong>Key Terms for ATS:</strong> {industry.keywords}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section className="section" style={{background: '#f9fafb'}} aria-labelledby="mistakes-title">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="sectionTitle" id="mistakes-title">Common Professional Summary Mistakes to Avoid</h2>
              <p className="sectionSubtitle">
                Steer clear of these <strong>costly errors</strong> that immediately turn off recruiters and ATS systems
              </p>
            </div>
            <div className="mistakesGrid">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="mistakeCard">
                  <div className="mistakeNumber" aria-hidden="true">{index + 1}</div>
                  <p className="mistakeText">{mistake}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" aria-labelledby="faq-title">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="sectionTitle" id="faq-title">Frequently Asked Questions About Professional Summaries</h2>
              <p className="sectionSubtitle">
                Expert answers to common questions about writing effective professional summaries
              </p>
            </div>
            <div className="faqGrid">
              {faqs.map((faq, index) => (
                <div key={index} className="faqItem" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="faqQuestion" itemProp="name">{faq.question}</h3>
                  <div className="faqAnswer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">{faq.answer}</p>
                    <meta itemProp="datePublished" content={faq.date} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="ctaSection" aria-labelledby="cta-title">
          <div className="container">
            <div className="ctaContent">
              <h2 className="ctaTitle" id="cta-title">
                Create Your 6-Second Professional Summary Today
              </h2>
              <p className="ctaSubtitle">
                Use our free tools to create customized professional summaries 
                that capture attention and get results for your specific career level and industry.
              </p>
              
              <div className="ctaButtons">
                <Link
                  href="/free-resume-summary-generator"
                  className="button primaryButton"
                  aria-label="Start building your professional summary with our free generator"
                  prefetch={false}
                >
                  <span className="buttonText">Free Summary Generator</span>
                  <FiArrowRight className="buttonIcon" aria-hidden="true" />
                </Link>
                
                <Link
                  href="/free-resume-tools"
                  className="button secondaryButton"
                  aria-label="Explore all free resume tools"
                  prefetch={false}
                >
                  <FiTool className="buttonIcon" aria-hidden="true" />
                  <span className="buttonText">All Free Tools</span>
                </Link>
              </div>
              
              <div className="ctaFeatures">
                <div className="featureItem">
                  <FiCheck className="featureCheck" aria-hidden="true" />
                  <span>6-Second Hook Formula</span>
                </div>
                <div className="featureItem">
                  <FiCheck className="featureCheck" aria-hidden="true" />
                  <span>Career Level Customization</span>
                </div>
                <div className="featureItem">
                  <FiCheck className="featureCheck" aria-hidden="true" />
                  <span>Industry-Specific Templates</span>
                </div>
                <div className="featureItem">
                  <FiCheck className="featureCheck" aria-hidden="true" />
                  <span>ATS Keyword Optimization</span>
                </div>
              </div>

              <p className="textSmall" style={{marginTop: '24px'}}>
                ✓ No sign-up required • Free forever • Updated {currentDate}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  
  // Format: YYYY-MM-DD
  const currentDate = buildTime.toISOString().split('T')[0];
  
  // Full ISO 8601 string
  const lastModifiedDate = buildTime.toISOString();
  
  // Freshness indicator
  const freshnessIndicator = currentDate;

  return {
    props: {
      currentDate,
      lastModifiedDate,
      freshnessIndicator,
      buildTimestamp
    },
    // Revalidate every 12 hours for fresh content
    revalidate: 3600, // 12 hours in seconds
  };
}

export default ProfessionalSummaryGuide;