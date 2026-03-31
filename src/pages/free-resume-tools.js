// pages/free-resume-tools.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  FiCheck,
  FiFileText,
  FiSearch,
  FiEdit,
  FiBarChart,
  FiTarget,
  FiTool,
  FiTrendingUp,
  FiStar,
  FiHome,
  FiChevronRight,
  FiArrowRight,
  FiAward,
  FiUsers,
  FiClock,
  FiZap,
  FiShield,
  FiDownload,
  FiCopy,
  FiCpu,
  FiGlobe
} from 'react-icons/fi';

// ===== INLINE CRITICAL CSS FOR MAXIMUM SPEED =====
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
  h1 { 
    font-size: clamp(2rem, 6vw, 3.5rem); 
    line-height: 1.2; 
    word-wrap: break-word; 
    overflow-wrap: break-word; 
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  
  h2 { 
    font-size: clamp(1.75rem, 5vw, 2.5rem); 
    line-height: 1.3; 
    word-wrap: break-word; 
    margin-bottom: clamp(16px, 3vw, 24px);
    font-weight: 600;
  }
  
  h3 { 
    font-size: clamp(1.25rem, 4vw, 1.5rem); 
    line-height: 1.4; 
    word-wrap: break-word; 
    font-weight: 600;
  }
  
  h4 { 
    font-size: clamp(1rem, 3vw, 1.125rem); 
    line-height: 1.5; 
    word-wrap: break-word; 
    font-weight: 600;
  }
  
  p { 
    font-size: clamp(1rem, 2.5vw, 1.125rem); 
    word-wrap: break-word; 
    overflow-wrap: break-word; 
    color: #4b5563;
    line-height: 1.6;
  }
  
  /* Breadcrumb Navigation */
  .breadcrumb {
    background: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
    padding: 12px 0;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .breadcrumb ol {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
  }
  
  .breadcrumb li {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  
  .breadcrumbSeparator {
    color: #9ca3af;
    display: inline-flex;
    align-items: center;
  }
  
  .breadcrumbSeparator svg {
    width: 16px;
    height: 16px;
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
    flex-shrink: 0;
  }
  
  .breadcrumbText {
    white-space: nowrap;
  }
  
  /* Hero Section */
  .heroSection {
    background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
    padding: clamp(40px, 8vw, 60px) 0;
    border-bottom: 1px solid #e5e7eb;
    width: 100%;
  }
  
  .heroContent {
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
  }
  
  .trustBadge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #111111;
    color: #ffffff;
    padding: clamp(8px, 2vw, 8px) clamp(12px, 3vw, 16px);
    border-radius: 50px;
    font-size: 0.9rem;
    margin-bottom: 24px;
    border: 1px solid #111111;
    width: fit-content;
    max-width: 100%;
    flex-wrap: wrap;
  }
  
  .starIcon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: #fbbf24;
  }
  
  .trustBadgeText {
    font-weight: 500;
  }
  
  .trustBadgeText span {
    font-weight: 700;
    color: #ffffff;
  }
  
  .pageTitle {
    margin-bottom: 20px;
    color: #111111;
  }
  
  .highlight {
    color: #111111;
    background: linear-gradient(120deg, #fbbf24 0%, #fbbf24 40%, transparent 80%);
    padding: 0 4px;
    font-weight: 700;
  }
  
  .pageSubtitle {
    font-size: clamp(1.1rem, 3vw, 1.25rem);
    max-width: 800px;
    margin-bottom: 32px;
    color: #4b5563;
  }
  
  .pageSubtitle strong {
    color: #111111;
  }

  /* Hero Image Container - Exactly like homepage */
  .hero-image-container {
    width: 100%;
    max-width: 700px;
    margin: 0 auto 40px;
    padding: 0 16px;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
  
  @media (min-width: 1024px) {
    .hero-image-container {
      max-width: 650px;
    }
  }
  
  @media (min-width: 1280px) {
    .hero-image-container {
      max-width: 600px;
    }
  }
  
  .hero-image-container img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  @media (min-width: 768px) {
    .hero-image-container {
      margin: 0 auto 48px;
    }
  }
  
  @media (max-width: 480px) {
    .hero-image-container {
      margin: 0 auto 32px;
    }
  }
  
  /* Hero Stats - Updated (removed 500K+ card) */
  .heroStats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(16px, 3vw, 24px);
    margin: 0 0 40px 0;
    width: 100%;
  }
  
  @media (max-width: 640px) {
    .heroStats {
      gap: 12px;
    }
  }
  
  @media (max-width: 480px) {
    .heroStats {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
  
  .statItem {
    background: #ffffff;
    padding: clamp(16px, 3vw, 20px);
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  }
  
  .statIcon {
    width: 32px;
    height: 32px;
    color: #111111;
    margin-bottom: 8px;
  }
  
  .statNumber {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 700;
    color: #111111;
    line-height: 1.2;
    margin-bottom: 4px;
  }
  
  .statLabel {
    font-size: 0.85rem;
    color: #6b7280;
    font-weight: 500;
    line-height: 1.4;
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
    color: #6b7280;
    max-width: 700px;
    margin: 0 auto;
  }
  
  /* Tools Section */
  .toolsSection {
    padding: clamp(40px, 8vw, 60px) 0;
    background: #ffffff;
    width: 100%;
  }
  
  .toolsGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
    gap: clamp(20px, 3vw, 24px);
    margin: 40px 0;
    width: 100%;
  }
  
  .toolCard {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    position: relative;
  }
  
  .toolCard:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 30px -10px rgba(0,0,0,0.1);
    border-color: #111111;
  }
  
  .toolCardContent {
    padding: clamp(20px, 4vw, 24px);
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .toolIconContainer {
    width: 56px;
    height: 56px;
    background: #f3f4f6;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    border: 1px solid #e5e7eb;
  }
  
  .toolIcon {
    width: 28px;
    height: 28px;
    color: #111111;
  }
  
  .toolTitle {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: #111111;
    line-height: 1.4;
  }
  
  .toolDescription {
    color: #6b7280;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 20px;
    flex: 1;
  }
  
  .toolButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #111111;
    color: #ffffff;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.2s;
    border: 2px solid #111111;
    margin-top: auto;
    width: 100%;
  }
  
  .toolButton:hover {
    background: #333333;
    border-color: #333333;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .buttonIcon {
    width: 18px;
    height: 18px;
    transition: transform 0.2s;
  }
  
  .toolButton:hover .buttonIcon {
    transform: translateX(4px);
  }
  
  /* Resources Section */
  .resourcesSection {
    margin-top: 60px;
    padding-top: 40px;
    border-top: 1px solid #e5e7eb;
    width: 100%;
  }
  
  .resourcesTitle {
    font-size: 1.3rem;
    margin-bottom: 24px;
    text-align: center;
  }
  
  .resourcesGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    width: 100%;
  }
  
  .resourceLink {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f9fafb;
    padding: 16px 20px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    text-decoration: none;
    color: #111111;
    font-weight: 500;
    transition: all 0.2s;
  }
  
  .resourceLink:hover {
    background: #111111;
    color: #ffffff;
    border-color: #111111;
    transform: translateX(4px);
  }
  
  .resourceLink:hover .resourceIcon {
    color: #ffffff;
  }
  
  .resourceIcon {
    width: 20px;
    height: 20px;
    color: #111111;
    transition: transform 0.2s;
  }
  
  .resourceLink:hover .resourceIcon {
    transform: translateX(4px);
  }
  
  /* FAQ Section */
  .faqSection {
    padding: clamp(40px, 8vw, 60px) 0;
    background: #f9fafb;
    width: 100%;
  }
  
  .faqGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: clamp(20px, 3vw, 24px);
    width: 100%;
  }
  
  @media (max-width: 640px) {
    .faqGrid {
      grid-template-columns: 1fr;
    }
  }
  
  .faqItem {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: clamp(20px, 4vw, 24px);
    height: 100%;
    transition: all 0.2s;
  }
  
  .faqItem:hover {
    border-color: #111111;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  }
  
  .faqQuestion {
    font-size: 1.1rem;
    margin-bottom: 12px;
    color: #111111;
    line-height: 1.4;
    font-weight: 600;
  }
  
  .faqAnswer {
    color: #6b7280;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  /* CTA Section */
  .ctaSection {
    padding: clamp(40px, 8vw, 60px) 0;
    background: #111111;
    color: #ffffff;
    text-align: center;
    width: 100%;
  }
  
  .ctaContent {
    max-width: 700px;
    margin: 0 auto;
    width: 100%;
  }
  
  .ctaTitle {
    color: #ffffff;
    margin-bottom: 16px;
  }
  
  .ctaSubtitle {
    color: #e5e7eb;
    margin-bottom: 32px;
    font-size: 1.1rem;
  }
  
  .ctaButtons {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .ctaButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #ffffff;
    color: #111111;
    padding: 16px 32px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s;
    border: 2px solid #ffffff;
    min-width: 250px;
  }
  
  .ctaButton:hover {
    background: #f3f4f6;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(255,255,255,0.2);
  }
  
  .ctaButtonIcon {
    width: 20px;
    height: 20px;
    transition: transform 0.2s;
  }
  
  .ctaButton:hover .ctaButtonIcon {
    transform: translateX(4px);
  }
  
  .ctaGuarantee {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
    flex-wrap: wrap;
  }
  
  .guaranteeIcon {
    width: 20px;
    height: 20px;
    color: #10b981;
  }
  
  .guaranteeText {
    color: #e5e7eb;
    font-size: 0.9rem;
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
  
  /* Utility Classes */
  .textSmall {
    font-size: 0.85rem;
    color: #9ca3af;
  }
  
  .textCenter {
    text-align: center;
  }
  
  .mt-4 {
    margin-top: 16px;
  }
  
  .mt-8 {
    margin-top: 32px;
  }
  
  hr {
    border: none;
    border-top: 1px solid #e5e7eb;
    margin: 40px 0;
  }
`;

// Main Page Component
const ResumeToolsPage = ({ 
  seoData,
  buildTimestamp
}) => {
  const {
    currentDate,
    lastModifiedDate,
    breadcrumbData
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();

  // Stats data - Removed 500K+ Happy Users
  const stats = [
    { number: '12+', label: 'Free Resume Tools', icon: <FiTool /> },
    { number: '100%', label: 'Free Forever', icon: <FiStar /> },
    { number: '24/7', label: 'Instant Access', icon: <FiClock /> }
  ];

  // Resume tools data
  const resumeTools = [
    { 
      href: '/free-resume-score-checker', 
      label: 'Free Resume Score Checker',
      description: 'Get an instant resume score and detailed feedback on how to improve your resume. Based on analysis of 4M+ successful resumes.',
      icon: <FiStar />
    },
    { 
      href: '/free-ats-resume-checker', 
      label: 'Free ATS Resume Checker',
      description: 'Check if your resume is ATS-friendly and optimized for automated screening systems. Works with Workday, Taleo, iCIMS.',
      icon: <FiCheck />
    },
    { 
      href: '/free-resume-summary-generator', 
      label: 'Free Resume Summary Generator',
      description: 'Create powerful professional summaries that grab recruiters attention in 6 seconds. 25+ industry templates included.',
      icon: <FiEdit />
    },
    { 
      href: '/free-cover-letter-generator', 
      label: 'Free Cover Letter Generator',
      description: 'Generate compelling cover letters that get interviews. Customizable templates for every industry.',
      icon: <FiFileText />
    },
    { 
      href: '/free-resume-keyword-matcher', 
      label: 'Free Resume Keyword Matcher',
      description: 'Match your resume keywords with job descriptions for better ATS compatibility. 94% success rate.',
      icon: <FiTarget />
    },
    { 
      href: '/free-resume-objective-generator', 
      label: 'Free Resume Objective Generator',
      description: 'Generate compelling resume objectives tailored to your career goals. Perfect for entry-level and career changers.',
      icon: <FiTrendingUp />
    },
    { 
      href: '/free-resume-word-and-character-counter', 
      label: 'Free Resume Word and Character Counter',
      description: 'Count words and characters to ensure your resume meets length requirements. Optimize for recruiter scan time.',
      icon: <FiBarChart />
    },
    { 
      href: '/free-resume-readability-checker', 
      label: 'Free Resume Readability Checker',
      description: 'Analyze your resumes readability and improve clarity for recruiters. Target grade level 8-9 for best results.',
      icon: <FiFileText />
    },
    { 
      href: '/free-resume-keyword-density-analyzer-tool', 
      label: 'Free Resume Keyword Density Analyzer',
      description: 'Optimize keyword density for better ATS performance and ranking. Identify missing keywords from job descriptions.',
      icon: <FiSearch />
    },
    { 
      href: '/free-resume-formatting-checker', 
      label: 'Free Resume Formatting Checker',
      description: 'Ensure proper formatting and structure that passes ATS systems. Check fonts, margins, section headers.',
      icon: <FiTool />
    },
    { 
      href: '/free-action-verb-recommender', 
      label: 'Free Action Verb Recommender',
      description: 'Find powerful action verbs to make your bullet points more impactful. Database of 500+ industry-specific verbs.',
      icon: <FiEdit />
    },
    { 
      href: '/free-resume-bullet-point-generator', 
      label: 'Free Resume Bullet Point Generator',
      description: 'Generate compelling bullet points that grab recruiters attention. Quantifiable achievement formulas included.',
      icon: <FiZap />
    }
  ];

  // FAQ Data for structured schema
  const faqItems = [
    {
      question: "Are these resume tools really free to use?",
      answer: "Every part of the resume tools opens without cost - no hidden charges, nothing stamped on your documents. Accessing a feature? No registration needed. No credit information asked either. Each function works straight away if you choose it."
    },
    {
      question: "Do I need to sign up or create an account?",
      answer: "Just open the site - no need to register at all. Every tool waits ready, free to use from the first second. Tap one and go, nothing holding you back."
    },
    {
      question: "How accurate are the resume analysis tools?",
      answer: "Every new try begins clean, using routines borrowed from proven methods in many areas. Refreshed regularly, these match current hiring habits as well as the needs of digital job platforms. Real feedback from actual users shows results land near 94 out of 100 correct."
    },
    {
      question: "Can I use these tools on mobile devices?",
      answer: "Right now, each gadget shifts perfectly between devices - phones glide through it, tablets keep up, laptops manage without a hitch. Change your resume whenever you want, wherever you are."
    },
    {
      question: "Is my resume data secure when using these tools?",
      answer: "Your privacy counts. Inside the browser, just for now, resume data moves carefully - no storage later on. It works right where you see it, confined to one tab only. Afterward, everything vanishes without a trace."
    },
    {
      question: "How often are the tools updated?",
      answer: "A fresh shift arrives each month, guided by user feedback. Moving forward ties closely to modern work setups, evolving hire trends, plus smarter ways people shape resumes beyond 2025."
    }
  ];

  // SEO Keywords array
  const seoKeywords = [
    "free resume tools",
    "ATS resume checker",
    "resume score analyzer",
    "resume keyword matcher",
    "resume summary generator",
    "resume formatting checker",
    "resume optimization tools",
    "professional resume tools",
    "free resume builder tools",
    "ATS friendly checker",
    "resume readability checker",
    "action verb recommender",
    "bullet point generator",
    "cover letter generator",
    "resume objective generator",
    "word counter for resume",
    "keyword density analyzer",
    "resume analysis tools",
    "free career tools 2026",
    "job search tools"
  ];

  // Structured data - FIXED: Removed duplicate FAQPage, now only one FAQPage in @graph
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.professionalresumefree.com/free-resume-tools/#webpage",
        "url": "https://www.professionalresumefree.com/free-resume-tools",
        "name": "Free Resume Tools 2026 | 12+ ATS Checkers & Professional Analyzers",
        "description": "Access our complete suite of free resume tools. Check your resume score, optimize for ATS, generate summaries, match keywords, and more. All tools are completely free.",
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.professionalresumefree.com/#website",
          "url": "https://www.professionalresumefree.com",
          "name": "Professional Resume Free",
          "description": "Free online resume builder for job seekers",
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
              "name": "Resume Tools",
              "item": "https://www.professionalresumefree.com/free-resume-tools"
            }
          ]
        }
      },
      {
        "@type": "ItemList",
        "name": "Free Resume Tools Collection",
        "description": "12+ free professional resume optimization tools",
        "numberOfItems": resumeTools.length,
        "itemListElement": resumeTools.map((tool, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "WebApplication",
            "name": tool.label,
            "url": `https://www.professionalresumefree.com${tool.href}`,
            "applicationCategory": "BusinessApplication",
            "description": tool.description,
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "featureList": [
              "No registration required",
              "Instant results",
              "ATS optimized",
              "Industry specific"
            ]
          }
        }))
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.professionalresumefree.com/free-resume-tools#faq",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".pageTitle", ".pageSubtitle", ".toolCard h3", ".faqQuestion"]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Professional Resume Free Tools Suite",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.9,
          "ratingCount": 50365,
          "bestRating": 5,
          "worstRating": 1
        },
        "featureList": [
          "ATS Resume Checker",
          "Resume Score Analyzer",
          "Keyword Matcher",
          "Summary Generator",
          "Cover Letter Generator",
          "Formatting Checker"
        ],
        "softwareVersion": "2026.2",
        "dateModified": safeLastModifiedDate
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Inline Critical CSS */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Primary SEO Tags */}
        <title>Free Resume Tools 2026 | 12+ ATS Checkers & Professional Analyzers</title>
        <meta name="title" content="Free Resume Tools 2026 | 12+ ATS Checkers & Professional Analyzers" />
        <meta name="description" content="Access 12+ free resume tools: ATS checker, score analyzer, keyword matcher, summary generator, and more. Optimize your resume instantly. 100% free, no signup." />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        
        {/* Technical SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-tools" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Resume Tools 2026 - ATS Checker, Keyword Matcher, Summary Generator" />
        <meta name="chatgpt-fts:description" content="12+ free resume tools to optimize your job application. Check ATS compatibility, analyze keywords, generate summaries, and more. No signup required." />
        <meta name="chatgpt-fts:keywords" content="free resume tools, ATS checker, resume analyzer, keyword matcher, resume generator, job search tools 2026" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Tools 2026" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Resume Tools 2026 | 12+ ATS Checkers & Professional Analyzers" />
        <meta property="og:description" content="Access 12+ free resume tools: ATS checker, score analyzer, keyword matcher, summary generator, and more. Optimize your resume instantly." />
        <meta property="og:image" content="https://www.professionalresumefree.com/free-12-resume-tools.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-tools" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Tools 2026 | 12+ ATS Checkers & Professional Analyzers" />
        <meta name="twitter:description" content="12+ free resume tools to optimize your job application. ATS checker, keyword matcher, summary generator, and more. No signup." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/free-12-resume-tools.jpeg" />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        {/* Theme */}
        <meta name="theme-color" content="#111111" />
        <meta name="msapplication-TileColor" content="#111111" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main>
        {/* Hidden Freshness Indicators */}
        <div className="freshnessIndicator">
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={freshnessIndicator} />
          <meta name="tools-count" content={resumeTools.length} />
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="breadcrumbLink" itemProp="item">
                  <FiHome className="breadcrumbIcon" aria-hidden="true" />
                  <span itemProp="name" className="breadcrumbText">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="breadcrumbSeparator" aria-hidden="true">
                <FiChevronRight />
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="breadcrumbText">Free Resume Tools 2026</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="heroSection" aria-labelledby="hero-title">
          <div className="container">
            <div className="heroContent">
              {/* Page Title */}
              <h1 className="pageTitle" id="hero-title">
                Free Resume Tools <span className="highlight">2026</span>
              </h1>
              
              {/* Page Subtitle */}
              <p className="pageSubtitle">
                Optimize your resume with <strong>12+ professional tools</strong>. 
                Check ATS compatibility, analyze keywords, generate powerful summaries, and improve your chances of landing interviews.
              </p>

              {/* Hero Image - Exactly like homepage layout */}
              <div className="hero-image-container">
                <Image
                  src="/free-12-resume-tools.jpeg"
                  alt="Free Resume Tools Preview - Collection of 12+ professional resume optimization tools including ATS checker, keyword matcher, summary generator, and more"
                  width={1200}
                  height={675}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 700px"
                  quality={90}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>

              {/* Hero Stats - Now with only 3 items */}
              <div className="heroStats">
                {stats.map((stat, index) => (
                  <div key={index} className="statItem">
                    <div className="statIcon" aria-hidden="true">
                      {stat.icon}
                    </div>
                    <span className="statNumber">{stat.number}</span>
                    <span className="statLabel">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid Section */}
        <section className="toolsSection" aria-labelledby="tools-title" itemScope itemType="https://schema.org/ItemList">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="sectionTitle" id="tools-title">Complete Resume Toolkit</h2>
              <p className="sectionSubtitle">
                Click on any tool below to start optimizing your resume for better job search results. All tools are <strong>100% free, no signup required</strong>.
              </p>
            </div>
            
            <div className="toolsGrid">
              {resumeTools.map((tool, index) => (
                <div key={index} className="toolCard" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content={index + 1} />
                  <div className="toolCardContent">
                    <div className="toolIconContainer" aria-hidden="true">
                      {tool.icon}
                    </div>
                    <h3 className="toolTitle" itemProp="name">{tool.label}</h3>
                    <p className="toolDescription" itemProp="description">{tool.description}</p>
                    <Link 
                      href={tool.href} 
                      className="toolButton"
                      aria-label={`Use ${tool.label} - ${tool.description}`}
                      prefetch={false}
                      itemProp="url"
                    >
                      <span className="buttonText">Use Tool</span>
                      <FiArrowRight className="buttonIcon" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Resources */}
            <div className="resourcesSection">
              <h3 className="resourcesTitle">More Free Resources</h3>
              <div className="resourcesGrid">
                <Link href="/resume-templates" className="resourceLink">
                  <span>ATS-Friendly Resume Templates (45+)</span>
                  <FiChevronRight className="resourceIcon" aria-hidden="true" />
                </Link>
                <Link href="/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" className="resourceLink">
                  <span>Professional Summary Writing Guide</span>
                  <FiChevronRight className="resourceIcon" aria-hidden="true" />
                </Link>
                <Link href="/software-engineer-resume-example-and-writing-guide" className="resourceLink">
                  <span>Software Engineer Resume Guide</span>
                  <FiChevronRight className="resourceIcon" aria-hidden="true" />
                </Link>
                <Link href="/free-resume-builder" className="resourceLink">
                  <span>Free Resume Builder</span>
                  <FiChevronRight className="resourceIcon" aria-hidden="true" />
                </Link>
              </div>
            </div>
            
            <p className="textSmall textCenter mt-8">
              Last updated: {safeCurrentDate} • 12+ tools • 100% free • No signup required
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faqSection" aria-labelledby="faq-title" itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="sectionTitle" id="faq-title">Frequently Asked Questions</h2>
              <p className="sectionSubtitle">
                Common questions about our free resume tools and how they can help your job search.
              </p>
            </div>
            
            <div className="faqGrid">
              {faqItems.map((item, index) => (
                <div key={index} className="faqItem" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="faqQuestion" itemProp="name">{item.question}</h3>
                  <div className="faqAnswer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="ctaSection" aria-labelledby="cta-title">
          <div className="container">
            <div className="ctaContent">
              <h2 className="ctaTitle" id="cta-title">Ready to Optimize Your Resume?</h2>
              <p className="ctaSubtitle">
                Start using our free tools today and create a resume that stands out to employers and ATS systems. Join 500,000+ successful job seekers.
              </p>
              <div className="ctaButtons">
                <Link
                  href="/resume-templates"
                  className="ctaButton"
                  aria-label="Browse all free resume templates"
                >
                  <span className="ctaButtonText">Browse 45+ Templates →</span>
                </Link>
              </div>
              <div className="ctaGuarantee">
                <FiCheck className="guaranteeIcon" aria-hidden="true" />
                <span className="guaranteeText">
                  No credit card required • Free forever • Instant results • Privacy focused
                </span>
              </div>
              <p className="textSmall" style={{ color: '#e5e7eb', marginTop: '20px' }}>
                Updated: {safeCurrentDate} • 12+ tools • 100% free
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

// ISR enabled for better SEO freshness
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate
      },
      buildTimestamp
    },
    // Revalidate every hour for fresh content
    revalidate: 3600
  };
}

export default ResumeToolsPage;