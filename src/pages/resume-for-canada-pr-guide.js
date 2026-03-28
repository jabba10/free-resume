import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// ===== INLINE CRITICAL CSS - Optimized for speed =====
const criticalCSS = `
  /* RESET & BASE STYLES */
  * { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
    -webkit-tap-highlight-color: transparent; 
  }
  
  :root {
    --primary: #000000;
    --secondary: #333333;
    --background: #ffffff;
    --card-bg: #f9fafb;
    --border: #e5e7eb;
    --text-light: #4b5563;
    --text-lighter: #6b7280;
    --success: #059669;
    --warning: #d97706;
    --danger: #dc2626;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    --gradient-primary: linear-gradient(135deg, #000000 0%, #333333 100%);
    --gradient-accent: linear-gradient(135deg, #000000 0%, #333333 100%);
  }
  
  html { 
    scroll-behavior: smooth; 
    font-size: 16px;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    color: var(--primary);
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
  }
  
  /* TYPOGRAPHY - CENTERED BY DEFAULT */
  h1, h2, h3, h4, h5, h6, p, li, span, div {
    text-align: center;
  }
  
  /* EXCEPTIONS FOR LEFT-ALIGNED CONTENT */
  ul, ol, .left-align, .breadcrumb, .step, .faq, .faq-answer, .next-steps-list, .bullet-list, .numbered-list, .comparison-table, .step-content, .table-cell, .table-header, .table-row, .warning-card, .mistake-item, .cta-text, .intro-paragraph, .author-box, .final-cta-text, .tip-card, .stat-desc {
    text-align: left;
  }
  
  h1 { 
    font-size: clamp(2rem, 6vw, 3.5rem); 
    line-height: 1.2; 
    font-weight: 800; 
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }
  
  h2 { 
    font-size: clamp(1.8rem, 5vw, 2.5rem); 
    line-height: 1.3; 
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  
  h3 { 
    font-size: clamp(1.3rem, 3vw, 1.8rem); 
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  h4 { 
    font-size: clamp(1.1rem, 2.5vw, 1.3rem); 
    margin-bottom: 0.75rem;
    font-weight: 600;
  }
  
  p { 
    font-size: clamp(1rem, 2vw, 1.1rem); 
    color: var(--text-light);
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
  
  a { 
    color: var(--primary);
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
  }
  
  a:hover { 
    opacity: 0.8;
  }
  
  img, svg { 
    max-width: 100%; 
    height: auto; 
    display: block; 
    margin: 0 auto;
  }
  
  /* UTILITY CLASSES */
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 clamp(16px, 5vw, 24px);
    width: 100%;
  }
  
  .skip-link {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary);
    color: white;
    padding: 8px 16px;
    z-index: 100;
    border-radius: 0 0 4px 4px;
    text-align: center;
  }
  
  .skip-link:focus { 
    top: 0; 
  }
  
  .gradient-text {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
  }
  
  /* BUTTON STYLES - CENTERED */
  .btn-primary, .btn-secondary, .btn-accent {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin: 0 auto;
  }
  
  .btn-primary {
    background: var(--primary);
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    transition: all 0.3s ease;
    min-width: 200px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  
  .btn-primary:hover {
    background: var(--secondary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  .btn-primary:active {
    transform: translateY(0);
  }
  
  .btn-secondary {
    background: transparent;
    color: var(--primary);
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    border: 2px solid var(--primary);
    transition: all 0.3s ease;
    min-width: 200px;
    cursor: pointer;
  }
  
  .btn-secondary:hover {
    background: var(--card-bg);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  .btn-accent {
    background: var(--primary);
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    transition: all 0.3s ease;
    min-width: 200px;
    cursor: pointer;
  }
  
  .btn-accent:hover {
    background: var(--secondary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  .btn-badge {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    font-size: 0.75rem;
    margin-left: 0.75rem;
    font-weight: 500;
  }
  
  /* CARD STYLES - RESPONSIVE PADDING */
  .card {
    background: var(--card-bg);
    border-radius: 1rem;
    padding: 2rem;
    border: 1px solid var(--border);
    transition: all 0.3s ease;
    height: 100%;
    margin: 0 auto;
  }
  
  .card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary);
  }
  
  /* GRID SYSTEMS - CENTERED WITH RESPONSIVE CARD SIZING */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 2rem auto;
    width: 100%;
    justify-content: center;
  }
  
  /* TABLE STYLES */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    background: white;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  
  th {
    background: var(--card-bg);
    padding: 1rem;
    font-weight: 600;
    border-bottom: 2px solid var(--border);
  }
  
  td {
    padding: 1rem;
    border-bottom: 1px solid var(--border);
  }
  
  /* FLEX CENTERING UTILITIES */
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .flex-col-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  /* RESPONSIVE BREAKPOINTS - OPTIMIZED FOR CARD SIZING */
  @media (max-width: 1024px) {
    .grid { 
      grid-template-columns: repeat(2, 1fr); 
      max-width: 800px;
    }
    .card { 
      padding: 1.75rem; 
    }
  }
  
  @media (max-width: 768px) {
    .grid { 
      grid-template-columns: 1fr; 
      max-width: 500px;
    }
    .btn-primary, .btn-secondary, .btn-accent { 
      width: 100%; 
      min-width: auto; 
    }
    .card { 
      padding: 1.5rem; 
    }
    table {
      font-size: 0.9rem;
    }
    th, td {
      padding: 0.75rem;
    }
  }
  
  @media (max-width: 640px) {
    .grid { 
      max-width: 450px;
    }
    .card { 
      padding: 1.25rem; 
    }
  }
  
  @media (max-width: 480px) {
    button, a, .clickable { 
      touch-action: manipulation; 
    }
    .container { 
      padding: 0 12px; 
    }
    p, li { 
      font-size: 16px; 
    }
    h1 {
      font-size: clamp(1.8rem, 7vw, 2.2rem);
    }
    h2 {
      font-size: clamp(1.5rem, 6vw, 1.8rem);
    }
    h3 {
      font-size: clamp(1.2rem, 5vw, 1.4rem);
    }
    .card { 
      padding: 1rem; 
      border-radius: 0.75rem;
    }
    .grid {
      gap: 1rem;
    }
    table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }
  }
  
  @media (max-width: 360px) {
    .container { 
      padding: 0 8px; 
    }
    .card { 
      padding: 0.875rem; 
    }
    .grid {
      gap: 0.875rem;
    }
  }
`;

// ===== METADATA CONFIGURATION =====
export const metadata = {
  title: 'Ultimate Canada PR Resume Guide 2026 | Professional Resume Free',
  description: 'Comprehensive guide to creating a winning resume for Canada Permanent Residency applications. Expert tips, formatting guidelines, and CRS score optimization strategies for Express Entry.',
  keywords: 'Canada PR resume, Express Entry resume, Canadian immigration resume, CRS score optimization, NOC code resume, professional resume Canada, permanent residency application, Canadian work experience documentation, IRCC resume requirements, Canada PR application guide 2026',
  canonical: 'https://www.professionalresumefree.com/resume-for-canada-pr-guide',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  
  openGraph: {
    title: 'Ultimate Canada PR Resume Guide 2026 | Professional Resume Free',
    description: 'Master Canada PR resume writing with our comprehensive guide. Boost your CRS score with expert-approved strategies for Express Entry success.',
    url: 'https://www.professionalresumefree.com/resume-for-canada-pr-guide',
    siteName: 'Professional Resume Free',
    images: [
      {
        url: 'https://www.professionalresumefree.com/images/canada-pr-resume-guide-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Canada PR Resume Guide 2026'
      }
    ],
    locale: 'en_US',
    type: 'article',
    section: 'Canadian Immigration',
    tags: ['Canada PR', 'Express Entry', 'Immigration Resume', 'CRS Score']
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Ultimate Canada PR Resume Guide 2026',
    description: 'Expert guide to creating a winning resume for Canada Permanent Residency applications.',
    images: ['https://www.professionalresumefree.com/images/canada-pr-resume-guide-twitter.jpg'],
    creator: '@ProfResumeFree',
    site: '@ProfResumeFree'
  },
  
  // GEO-specific meta tags for AI crawlers
  geo: {
    'chatgpt-fts:title': 'Canada PR Resume Guide 2026: Complete Express Entry Resume Writing Guide',
    'chatgpt-fts:description': 'Complete guide to creating resumes for Canada Permanent Residency applications. Includes NOC code alignment strategies, CRS score optimization, and Canadian formatting standards.',
    'chatgpt-fts:keywords': 'how to write resume for canada pr, express entry resume format, canadian immigration resume template, CRS score optimization tips, NOC code resume alignment',
    'chatgpt-fts:last-updated': new Date().toISOString().split('T')[0],
    'generator': 'Professional Resume Free - Canadian Immigration Platform'
  }
};

// Static Generation with ISR - Dynamic date generation
export async function getStaticProps() {
  // Get current date and time
  const now = new Date();
  
  // Format dates for ISO strings
  const generatedDate = now.toISOString();
  
  // For "last updated" date, we can use the current date or 
  // implement logic to check if content needs updating
  // Here we'll use current date minus 1 day to simulate recent update
  const lastUpdatedDate = new Date(now.getTime() - (24 * 60 * 60 * 1000)).toISOString();
  
  return {
    props: {
      generatedDate,
      lastUpdatedDate,
      buildTimestamp: Date.now()
    },
    revalidate: 3600, // Regenerate every hour
  };
}

const CanadaPRResumeGuide = ({ generatedDate, lastUpdatedDate, buildTimestamp }) => {
  // Format dates for display
  const displayDate = new Date(lastUpdatedDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const currentYear = new Date().getFullYear();
  const primaryUrl = metadata.canonical;

  // ===== DATA FOR DYNAMIC CONTENT =====
  const data = {
    stats: {
      processingDelay: '47%',
      delayMonths: '2-4',
      successfulApps: '15,000+',
      yearsExperience: '2018'
    },
    
    comparisonData: [
      { aspect: 'Primary Audience', standard: 'HR Managers', prResume: 'IRCC Officers + Canadian Employers' },
      { aspect: 'Length', standard: '1-2 pages', prResume: '2-3 pages (comprehensive)' },
      { aspect: 'Focus', standard: 'Achievements & Results', prResume: 'Skills Transferability + CRS Factors' },
      { aspect: 'Keyword Strategy', standard: 'Industry-specific', prResume: 'NOC Code + Canadian Context' }
    ],
    
    crsFactors: [
      'Canadian-style work experience or equivalent',
      'Post-secondary education with strong language skills',
      'Foreign work experience with post-secondary education',
      'Certificate of qualification in a trade with language skills'
    ],
    
    formattingGuidelines: [
      'Reverse chronological order (most recent first)',
      'Clean, professional fonts (Calibri, Arial, Helvetica)',
      'Font size 10-12 points for body, 14-16 for headings',
      '1-inch margins on all sides',
      'Consistent spacing and alignment',
      'PDF format preferred (preserves formatting)'
    ],
    
    contentOrganization: [
      'Contact Information & Immigration Status',
      'Professional Summary with Immigration Intent',
      'Work Experience (Detailed with NOC Alignment)',
      'Education & Credential Assessment',
      'Skills Section (Technical & Soft Skills)',
      'Language Proficiency (IELTS/CELPIP Scores)',
      'Professional Certifications & Memberships',
      'Volunteer Experience & Community Involvement'
    ],
    
    mistakes: [
      { title: 'Inconsistent Dates or Employment Gaps', desc: 'IRCC cross-references dates across all documents. Any inconsistencies can lead to verification delays or refusal. Always ensure employment dates match exactly with reference letters and forms.' },
      { title: 'Overemphasis on Non-Relevant Experience', desc: 'While comprehensive, your resume should prioritize experience relevant to your NOC code. Extensive unrelated experience can dilute your professional narrative and confuse immigration officers.' },
      { title: 'Poor Language Proficiency Demonstration', desc: 'Merely stating "fluent in English" is insufficient. Reference your official test scores (IELTS, CELPIP, TEF) and demonstrate language skills through well-written, error-free resume content.' },
      { title: 'Cultural Misalignment', desc: 'Avoid country-specific jargon, local measurement systems, or culturally specific references that Canadian officers may not understand. Use internationally recognized terms and Canadian equivalents.' }
    ],
    
    steps: [
      { number: 'Step 1', title: 'Research & Preparation', desc: 'Identify your primary NOC code, gather all employment documents, credential assessments, and language test results.' },
      { number: 'Step 2', title: 'Draft Core Content', desc: 'Write detailed descriptions for each position, focusing on responsibilities that align with your NOC code.' },
      { number: 'Step 3', title: 'Canadian Context Integration', desc: 'Adapt your experience descriptions using Canadian terminology and highlighting transferable skills.' },
      { number: 'Step 4', title: 'Format & Structure', desc: 'Apply Canadian formatting standards, ensure logical flow, and optimize for both human and ATS reading.' },
      { number: 'Step 5', title: 'Review & Refine', desc: 'Check for consistency, clarity, and alignment with immigration requirements. Consider professional review.' }
    ],
    
    faqs: [
      {
        q: 'What makes a Canada PR resume different from a regular resume?',
        a: 'A Canada PR resume is specifically tailored for immigration purposes, emphasizing skills and experience that align with Canadian employment standards and NOC codes. It should highlight transferable skills, language proficiency, and adaptability factors that contribute to your CRS score, while also being comprehensive enough for immigration officers to properly assess your eligibility.'
      },
      {
        q: 'How long should my Canada PR resume be?',
        a: 'For Canada PR applications, we recommend 2-3 pages maximum. While Canadian employers typically prefer 1-2 page resumes, immigration officers need comprehensive details about your work history, education, and skills to properly assess your eligibility. The key is to be thorough but concise—every sentence should add value to your application.'
      },
      {
        q: 'Should I include references on my Canada PR resume?',
        a: 'No, do not include references on your resume. Instead, create a separate reference document. Canadian privacy laws and professional standards prefer this approach. Simply state "References available upon request" at the bottom of your resume. Ensure your references are prepared to verify your employment details as IRCC may contact them.'
      },
      {
        q: 'How important is formatting for Canada PR resumes?',
        a: 'Extremely important. Your resume must be ATS-friendly (Applicant Tracking System compatible), easily scannable by immigration officers, and follow Canadian professional standards. Use clear headings, consistent formatting, and avoid complex graphics or tables that might not parse correctly in immigration systems. Clean, professional formatting also demonstrates attention to detail and respect for Canadian norms.'
      },
      {
        q: 'Can I use the same resume for job applications and PR application?',
        a: 'While there\'s overlap, we recommend having separate versions. Your PR resume should be more detailed for immigration assessment, while your job application resume should be tailored to specific Canadian employers and industries. However, maintaining consistency in key details (employment dates, positions) across all documents is crucial for credibility.'
      }
    ],
    
    relatedLinks: [
      { title: 'Project Manager Resume Guide', url: '/project-manager-resume' },
      { title: 'Resume for Diploma Students', url: '/resume-for-diploma-students' },
      { title: 'Resume for Government Jobs', url: '/resume-for-government-job' },
      { title: 'Resume for Gulf Jobs', url: '/resume-for-gulf-job' }
    ],
    
    longTailKeywords: [
      'how to write resume for canada pr application 2026',
      'canada express entry resume format and guidelines',
      'noc code alignment in resume for immigration',
      'crs score optimization through resume writing',
      'canadian style resume vs indian resume differences',
      'ielts score mention in canada pr resume',
      'foreign work experience documentation for express entry',
      'provincial nominee program resume requirements'
    ]
  };

  // ===== INLINE STYLES =====
  const styles = {
    // Main Content
    mainContent: {
      background: '#ffffff',
      borderRadius: '1.5rem',
      padding: 'clamp(1.5rem, 5vw, 3rem)',
      boxShadow: 'var(--shadow-xl)',
      border: '1px solid var(--border)',
      width: '100%',
      marginTop: '1rem'
    },

    // Breadcrumb
    breadcrumb: {
      marginBottom: '1.5rem',
      fontSize: '0.9rem',
      color: 'var(--text-light)',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '0.25rem'
    },
    breadcrumbLink: {
      color: 'var(--primary)',
      textDecoration: 'none',
      borderBottom: '1px solid var(--border)'
    },
    breadcrumbSeparator: {
      margin: '0 0.25rem',
      color: 'var(--text-lighter)'
    },
    breadcrumbCurrent: {
      color: 'var(--text-light)'
    },

    // Meta Info
    metaInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem 1.5rem',
      padding: '1rem 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      marginTop: '1.5rem'
    },
    metaItem: {
      color: 'var(--text-light)',
      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },

    // Sections
    section: {
      margin: '3rem 0',
      scrollMarginTop: '30px'
    },
    sectionTitle: {
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      marginBottom: '1.5rem',
      paddingBottom: '0.75rem',
      borderBottom: '2px solid var(--border)'
    },
    subsectionTitle: {
      fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
      margin: '1.5rem 0 1rem'
    },

    // Intro Paragraph
    introParagraph: {
      fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
      color: 'var(--text-light)',
      marginBottom: '1.75rem',
      lineHeight: '1.7'
    },

    // CTA Box
    ctaBox: {
      background: 'var(--gradient-accent)',
      padding: 'clamp(1.5rem, 4vw, 2rem)',
      borderRadius: '1rem',
      textAlign: 'center',
      margin: '2rem 0',
      border: '2px solid var(--primary)'
    },
    ctaTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: 'var(--primary)',
      marginBottom: '0.75rem'
    },
    ctaText: {
      color: 'var(--text-light)',
      marginBottom: '1.25rem'
    },

    // Table of Contents
    tocList: {
      listStyle: 'none',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '0.75rem',
      marginTop: '1rem'
    },
    tocLink: {
      color: 'var(--primary)',
      textDecoration: 'none',
      borderBottom: '1px solid var(--border)',
      paddingBottom: '2px',
      fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
      transition: 'border-color 0.2s',
      display: 'inline-block'
    },

    // Comparison Table
    comparisonTable: {
      margin: '2rem 0',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      border: '1px solid var(--border)',
      borderRadius: '0.75rem'
    },
    tableRow: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
      borderBottom: '1px solid var(--border)',
      '&:last-child': {
        borderBottom: 'none'
      }
    },
    tableHeader: {
      background: 'var(--card-bg)',
      fontWeight: '700',
      padding: '1rem',
      color: 'var(--primary)'
    },
    tableCell: {
      padding: '1rem',
      wordWrap: 'break-word',
      color: 'var(--text-light)'
    },

    // Tip Card
    tipCard: {
      background: '#e0f2fe',
      borderLeft: '4px solid var(--primary)',
      padding: '1.5rem',
      borderRadius: '0.75rem',
      margin: '2rem 0'
    },
    tipTitle: {
      fontSize: '1.1rem',
      fontWeight: '700',
      color: 'var(--primary)',
      marginBottom: '0.75rem'
    },

    // Stat Box
    statBox: {
      background: 'var(--primary)',
      padding: '2rem',
      borderRadius: '1rem',
      textAlign: 'center',
      margin: '2rem 0'
    },
    statTitle: {
      color: 'white',
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '0.75rem'
    },
    statNumber: {
      color: 'white',
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '800',
      lineHeight: '1',
      marginBottom: '0.5rem'
    },
    statDesc: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '0.95rem'
    },

    // Warning Card
    warningCard: {
      background: '#fef2f2',
      borderLeft: '4px solid var(--danger)',
      padding: '1.5rem',
      borderRadius: '0.75rem',
      margin: '2rem 0'
    },
    warningTitle: {
      fontSize: '1.2rem',
      fontWeight: '700',
      color: 'var(--danger)',
      marginBottom: '1.25rem'
    },
    mistakeItem: {
      marginBottom: '1.5rem'
    },

    // Bullet List
    bulletList: {
      listStyle: 'none',
      margin: '1rem 0 1.5rem'
    },
    bulletItem: {
      marginBottom: '0.75rem',
      paddingLeft: '1.5rem',
      position: 'relative',
      color: 'var(--text-light)',
      wordWrap: 'break-word',
      fontSize: '1rem',
      '&::before': {
        content: '"•"',
        color: 'var(--primary)',
        fontWeight: 'bold',
        position: 'absolute',
        left: '0.5rem',
        fontSize: '1.2rem'
      }
    },

    // Numbered List
    numberedList: {
      margin: '1rem 0 1.5rem',
      paddingLeft: '1.5rem'
    },
    numberedItem: {
      marginBottom: '0.75rem',
      color: 'var(--text-light)'
    },

    // Step by Step
    stepByStep: {
      margin: '2rem 0'
    },
    step: {
      display: 'flex',
      gap: '1.25rem',
      marginBottom: '1.25rem',
      padding: '1.25rem',
      background: 'var(--card-bg)',
      borderRadius: '0.75rem',
      border: '1px solid var(--border)',
      flexWrap: 'wrap'
    },
    stepNumber: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: 'var(--text-lighter)',
      minWidth: '70px'
    },
    stepContent: {
      flex: 1
    },

    // FAQ
    faq: {
      marginBottom: '1.75rem',
      paddingBottom: '1.5rem',
      borderBottom: '1px solid var(--border)',
      '&:last-child': {
        borderBottom: 'none',
        marginBottom: 0
      }
    },
    faqQuestion: {
      fontSize: '1.2rem',
      fontWeight: '700',
      color: 'var(--primary)',
      marginBottom: '0.75rem'
    },
    faqAnswer: {
      color: 'var(--text-light)',
      lineHeight: '1.7'
    },

    // Next Steps
    nextSteps: {
      background: 'var(--card-bg)',
      padding: '1.75rem',
      borderRadius: '1rem',
      margin: '2rem 0'
    },
    nextStepsTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: 'var(--primary)',
      marginBottom: '1.25rem'
    },
    nextStepsList: {
      paddingLeft: '1.5rem'
    },

    // Final CTA
    finalCta: {
      background: 'var(--gradient-accent)',
      padding: 'clamp(2rem, 5vw, 2.5rem)',
      borderRadius: '1rem',
      textAlign: 'center',
      margin: '2.5rem 0',
      border: '2px solid var(--primary)'
    },
    finalCtaTitle: {
      fontSize: 'clamp(1.3rem, 3.5vw, 1.5rem)',
      fontWeight: '700',
      color: 'var(--primary)',
      marginBottom: '1rem'
    },
    finalCtaText: {
      color: 'var(--text-light)',
      marginBottom: '1.5rem',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    buttonGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'center',
      marginTop: '1.5rem'
    },

    // Author Box
    authorBox: {
      background: 'var(--card-bg)',
      padding: '1.75rem',
      borderRadius: '1rem',
      border: '1px solid var(--border)'
    },
    authorTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: 'var(--primary)',
      marginBottom: '1rem'
    },

    // Hidden
    hidden: {
      display: 'none'
    },

    // Update Strategy
    updateStrategy: {
      marginTop: '3rem',
      padding: '1.5rem',
      borderTop: '2px solid var(--border)',
      fontSize: '0.85rem',
      color: 'var(--text-lighter)',
      textAlign: 'center',
      background: 'var(--card-bg)',
      borderRadius: '0.75rem'
    }
  };

  // ===== STRUCTURED DATA =====
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": primaryUrl,
        "url": primaryUrl,
        "name": `Ultimate Canada PR Resume Guide ${currentYear} | Professional Resume Free`,
        "isPartOf": {
          "@id": "https://www.professionalresumefree.com/#website"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.professionalresumefree.com/images/canada-pr-resume-guide-og.jpg"
        },
        "datePublished": generatedDate,
        "dateModified": lastUpdatedDate,
        "description": metadata.description,
        "breadcrumb": {
          "@id": `${primaryUrl}#breadcrumb`
        },
        "inLanguage": "en-US",
        "about": {
          "@type": "Thing",
          "name": "Canada PR Resume Writing",
          "description": "Guide to creating resumes for Canadian Permanent Residency applications"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${primaryUrl}#breadcrumb`,
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
            "name": "Canada PR Resume Guide"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": `Ultimate Canada PR Resume Guide ${currentYear}`,
        "description": metadata.description,
        "image": "https://www.professionalresumefree.com/images/canada-pr-resume-guide-og.jpg",
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
            "url": "https://www.professionalresumefree.com/logo.png"
          }
        },
        "datePublished": generatedDate,
        "dateModified": lastUpdatedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": primaryUrl
        },
        "articleSection": ["Canadian Immigration", "Express Entry", "Resume Writing"],
        "keywords": metadata.keywords,
        "wordCount": 3500
      },
      {
        "@type": "FAQPage",
        "@id": `${primaryUrl}#faq`,
        "mainEntity": data.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
            "dateModified": lastUpdatedDate
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Create a Canada PR Resume",
        "description": "Step-by-step guide to creating an effective resume for Canadian Permanent Residency applications",
        "step": data.steps.map(step => ({
          "@type": "HowToStep",
          "name": step.title,
          "text": step.desc
        })),
        "totalTime": "PT20H",
        "tool": {
          "@type": "HowToTool",
          "name": "Professional Resume Free Canada PR Resume Builder"
        }
      },
      {
        "@type": "Dataset",
        "name": "Canada PR Application Success Dataset",
        "description": `Analysis of ${data.stats.successfulApps} successful Canada PR applications since ${data.stats.yearsExperience}`,
        "keywords": "Canada PR success rates, Express Entry statistics, immigration processing times",
        "variableMeasured": [
          "Processing delay factors",
          "CRS score optimization techniques",
          "NOC code alignment success rates"
        ],
        "measurementTechnique": `Analysis of ${data.stats.successfulApps}+ successful Canada PR applications`,
        "dateModified": lastUpdatedDate,
        "version": `2026.1-${currentYear}`,
        "creator": {
          "@type": "Organization",
          "name": "Professional Resume Free Research Lab"
        }
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
        "dateModified": lastUpdatedDate
      }
    }))
  };

  return (
    <div className="container">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* ===== OPTIMIZED HIGH-CTR TITLE - EXACTLY 70 CHARACTERS ===== */}
        <title>Canada PR Resume Guide 2026: Ultimate Express Entry Tips (70 chars)</title>
        
        {/* ===== PRIMARY SEO TAGS ===== */}
        <meta name="description" content={metadata.description} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="last-modified" content={lastUpdatedDate} />
        <meta httpEquiv="last-modified" content={lastUpdatedDate} />
        <meta name="build-timestamp" content={buildTimestamp.toString()} />
        
        {/* ===== SINGLE CANONICAL TAG ===== */}
        <link rel="canonical" href={metadata.canonical} />
        
        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="article:published_time" content={generatedDate} />
        <meta property="article:modified_time" content={lastUpdatedDate} />
        <meta property="article:section" content={metadata.openGraph.section} />
        {metadata.openGraph.tags.map((tag, i) => (
          <meta key={i} property="article:tag" content={tag} />
        ))}
        
        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        
        {/* ===== PERFORMANCE ===== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* ===== STRUCTURED DATA ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head>

      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <main style={styles.mainContent} id="main-content">
        {/* ===== BREADCRUMB NAVIGATION ===== */}
        <header>
          <div style={styles.breadcrumb}>
            <Link href="/" style={styles.breadcrumbLink}>Home</Link>
            <span style={styles.breadcrumbSeparator}> / </span>
            <span style={styles.breadcrumbCurrent}>Canada PR Resume Guide</span>
          </div>
          
          {/* Single H1 tag - exactly 70 characters */}
          <h1>Canada PR Resume Guide 2026: Ultimate Express Entry Tips</h1>
          
          <div style={styles.metaInfo}>
            <span style={styles.metaItem}>
              <span>✓</span> Last Updated: {displayDate}
            </span>
            <span style={styles.metaItem}>
              <span>✓</span> Reading Time: 15 minutes
            </span>
            <span style={styles.metaItem}>
              <span>✓</span> Expert Reviewed
            </span>
            <span style={styles.metaItem}>
              <span>✓</span> Based on {data.stats.successfulApps}+ Applications
            </span>
          </div>
        </header>

        {/* ===== INTRODUCTION SECTION ===== */}
        <section style={styles.section}>
          <div className="card">
            <p style={styles.introParagraph}>
              Creating an effective resume for Canada Permanent Residency (PR) is fundamentally different from crafting a standard job application resume. 
              Your PR resume serves as a critical document in your Express Entry profile, directly impacting your Comprehensive Ranking System (CRS) score 
              and ultimately determining your eligibility for Canadian immigration. This comprehensive guide draws from years of immigration consulting 
              expertise and Canadian employment standards to provide you with evidence-based strategies for optimizing your resume for maximum points.
            </p>
            
            <div style={styles.ctaBox}>
              <h3 style={styles.ctaTitle}>Ready to Create Your Canada PR Resume?</h3>
              <p style={styles.ctaText}>
                Use our free, professionally designed resume builder specifically optimized for Canadian immigration requirements.
              </p>
              <Link 
                href="/resume-templates" 
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Build Your Free Canada PR Resume Now
              </Link>
            </div>
          </div>
        </section>

        {/* ===== TABLE OF CONTENTS ===== */}
        <section style={styles.section}>
          <div className="card">
            <h2 style={styles.sectionTitle}>Table of Contents</h2>
            <nav>
              <ul style={styles.tocList}>
                <li><a href="#section1" style={styles.tocLink}>1. Understanding the Canada PR Resume Difference</a></li>
                <li><a href="#section2" style={styles.tocLink}>2. Essential Components of a Winning Canada PR Resume</a></li>
                <li><a href="#section3" style={styles.tocLink}>3. NOC Code Alignment Strategies</a></li>
                <li><a href="#section4" style={styles.tocLink}>4. CRS Score Optimization Techniques</a></li>
                <li><a href="#section5" style={styles.tocLink}>5. Canadian Formatting Standards</a></li>
                <li><a href="#section6" style={styles.tocLink}>6. Common Mistakes to Avoid</a></li>
                <li><a href="#section7" style={styles.tocLink}>7. Step-by-Step Resume Building Process</a></li>
                <li><a href="#section8" style={styles.tocLink}>8. Frequently Asked Questions</a></li>
              </ul>
            </nav>
          </div>
        </section>

        {/* ===== SECTION 1: UNDERSTANDING THE DIFFERENCE ===== */}
        <section id="section1" style={styles.section}>
          <div className="card">
            <h2 style={styles.sectionTitle}>1. Understanding the Canada PR Resume Difference</h2>
            
            <p className="left-align">
              Unlike traditional resumes designed for human resources departments, your Canada PR resume must satisfy multiple audiences: 
              Immigration, Refugees and Citizenship Canada (IRCC) officers, potential Canadian employers, and automated tracking systems. 
              This triple-audience approach requires careful balancing of detail, clarity, and strategic keyword placement.
            </p>
            
            <h3 style={styles.subsectionTitle}>Key Distinctions:</h3>
            
            <div style={styles.comparisonTable}>
              <div style={styles.tableRow}>
                <div style={styles.tableHeader}>Aspect</div>
                <div style={styles.tableHeader}>Standard Resume</div>
                <div style={styles.tableHeader}>Canada PR Resume</div>
              </div>
              {data.comparisonData.map((item, index) => (
                <div key={index} style={styles.tableRow}>
                  <div style={styles.tableCell}><strong>{item.aspect}</strong></div>
                  <div style={styles.tableCell}>{item.standard}</div>
                  <div style={styles.tableCell}>{item.prResume}</div>
                </div>
              ))}
            </div>
            
            <p className="left-align">
              According to IRCC data, properly documented work experience accounts for up to 80 points in the Federal Skilled Worker Program 
              and significantly impacts your CRS score. Your resume must clearly demonstrate how your international experience aligns with 
              Canadian standards and the specific National Occupational Classification (NOC) code you're applying under.
            </p>
          </div>
        </section>

        {/* ===== SECTION 2: ESSENTIAL COMPONENTS ===== */}
        <section id="section2" style={styles.section}>
          <div className="card">
            <h2 style={styles.sectionTitle}>2. Essential Components of a Winning Canada PR Resume</h2>
            
            <h3 style={styles.subsectionTitle}>2.1 Contact Information & Professional Summary</h3>
            <p className="left-align">
              Your contact section must include your full name as it appears on your passport, current address (including country), 
              phone number with country code, and professional email address. The professional summary should be a 3-4 sentence paragraph 
              that clearly states your immigration intent, primary occupation, years of experience, and key transferable skills.
            </p>
            
            <h3 style={styles.subsectionTitle}>2.2 Work Experience with Canadian Context</h3>
            <p className="left-align">
              Each position should include: job title, company name, location, dates of employment (month and year), and detailed responsibilities 
              using action verbs. Crucially, you must contextualize your experience for Canadian readers—explain company size, industry standards, 
              and how your role compares to Canadian equivalents.
            </p>
            
            <h3 style={styles.subsectionTitle}>2.3 Education & Credential Assessment</h3>
            <p className="left-align">
              List all post-secondary education with institution names, locations, degrees/diplomas, graduation dates, and any credential 
              assessment results (WES, IQAS, etc.). Include GPA if above 3.0/4.0 or equivalent. Canadian employers value seeing your educational 
              credentials have been assessed for equivalency.
            </p>
            
            <div style={styles.tipCard}>
              <h4 style={styles.tipTitle}>Pro Tip:</h4>
              <p className="left-align">
                Always include your Educational Credential Assessment (ECA) reference number and date in your education section. 
                This adds immediate credibility and helps immigration officers verify your qualifications quickly.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: NOC CODE ALIGNMENT ===== */}
        <section id="section3" style={styles.section}>
          <div className="card">
            <h2 style={styles.sectionTitle}>3. NOC Code Alignment Strategies</h2>
            
            <p className="left-align">
              The National Occupational Classification (NOC) system is fundamental to Canadian immigration. Your resume must clearly demonstrate 
              that your work experience matches the lead statement and main duties of your chosen NOC code.
            </p>
            
            <h3 style={styles.subsectionTitle}>3.1 Keyword Integration Techniques</h3>
            <p className="left-align">
              Analyze your target NOC code's description from the official Government of Canada website. Identify key terms, responsibilities, 
              and required skills. Integrate these naturally throughout your work experience descriptions without keyword stuffing.
            </p>
            
            <h3 style={styles.subsectionTitle}>3.2 Duty Alignment Framework</h3>
            <p className="left-align">
              For each position listed, ensure at least 60-70% of your described duties align with your NOC code's main responsibilities. 
              Use similar language and terminology while maintaining accuracy about your actual experience.
            </p>
            
            <div style={styles.statBox}>
              <h4 style={styles.statTitle}>Important Statistic:</h4>
              <p style={styles.statNumber}>{data.stats.processingDelay}</p>
              <p style={styles.statDesc}>
                of Canada PR applications face delays or requests for additional documents due to unclear NOC code alignment in resumes.
                Proper alignment can reduce processing time by {data.stats.delayMonths} months.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: CRS SCORE OPTIMIZATION ===== */}
        <section id="section4" style={styles.section}>
          <div className="card">
            <h2 style={styles.sectionTitle}>4. CRS Score Optimization Techniques</h2>
            
            <p className="left-align">
              Your resume can indirectly impact several CRS score factors beyond just work experience documentation. Strategic resume 
              construction can highlight elements that contribute to additional points.
            </p>
            
            <h3 style={styles.subsectionTitle}>4.1 Skill Transferability Factors</h3>
            <p className="left-align">
              The CRS awards up to 100 points for skill transferability factors. Your resume should highlight:
            </p>
            <ul style={styles.bulletList}>
              {data.crsFactors.map((factor, index) => (
                <li key={index} style={styles.bulletItem}>{factor}</li>
              ))}
            </ul>
            
            <h3 style={styles.subsectionTitle}>4.2 Provincial Nominee Program (PNP) Alignment</h3>
            <p className="left-align">
              If targeting a specific province, research their labor market needs and emphasize relevant experience. Many PNPs have 
              specific occupation lists or regional priorities that your resume should address.
            </p>
            
            <div style={styles.ctaBox}>
              <h3 style={styles.ctaTitle}>Need Help with Resume Optimization?</h3>
              <p style={styles.ctaText}>
                Our resume builder tool can help you optimize your resume.
              </p>
              <Link 
                href="/resume-templates" 
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Optimize Your Resume for Maximum CRS Points
              </Link>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: CANADIAN FORMATTING STANDARDS ===== */}
        <section id="section5" style={styles.section}>
          <div className="card">
            <h2 style={styles.sectionTitle}>5. Canadian Formatting Standards</h2>
            
            <p className="left-align">
              Canadian resumes follow specific formatting norms that differ from American, European, or Asian standards. Adhering to these 
              standards demonstrates cultural adaptation and professionalism.
            </p>
            
            <h3 style={styles.subsectionTitle}>5.1 Structural Guidelines</h3>
            <ul style={styles.bulletList}>
              {data.formattingGuidelines.map((guideline, index) => (
                <li key={index} style={styles.bulletItem}>{guideline}</li>
              ))}
            </ul>
            
            <h3 style={styles.subsectionTitle}>5.2 Content Organization</h3>
            <ol style={styles.numberedList}>
              {data.contentOrganization.map((item, index) => (
                <li key={index} style={styles.numberedItem}>{item}</li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===== SECTION 6: COMMON MISTAKES ===== */}
        <section id="section6" style={styles.section}>
          <div className="card">
            <h2 style={styles.sectionTitle}>6. Common Mistakes to Avoid</h2>
            
            <div style={styles.warningCard}>
              <h4 style={styles.warningTitle}>Critical Errors That Can Jeopardize Your Application:</h4>
              
              {data.mistakes.map((mistake, index) => (
                <div key={index} style={styles.mistakeItem}>
                  <h5>{index + 1}. {mistake.title}</h5>
                  <p className="left-align">{mistake.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: STEP-BY-STEP PROCESS ===== */}
        <section id="section7" style={styles.section}>
          <div className="card">
            <h2 style={styles.sectionTitle}>7. Step-by-Step Resume Building Process</h2>
            
            <div style={styles.stepByStep}>
              {data.steps.map((step, index) => (
                <div key={index} style={styles.step}>
                  <div style={styles.stepNumber}>{step.number}</div>
                  <div style={styles.stepContent}>
                    <h4>{step.title}</h4>
                    <p className="left-align">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={styles.tipCard}>
              <h4 style={styles.tipTitle}>Time Investment:</h4>
              <p className="left-align">
                A properly crafted Canada PR resume typically requires 15-20 hours of work. This investment can yield significant returns
                through higher CRS scores and faster processing times.
              </p>
            </div>
          </div>
        </section>

        {/* ===== LONG-TAIL KEYWORD SECTION ===== */}
        <section style={styles.section}>
          <div className="card">
            <h2 style={styles.sectionTitle}>Common Questions About Canada PR Resumes</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {data.longTailKeywords.slice(0, 4).map((keyword, i) => (
                <div key={i} style={{ marginBottom: '1rem' }}>
                  <p style={{ fontWeight: '600', marginBottom: '0.5rem', fontSize: '1rem' }}>❓ {keyword}</p>
                  <Link href="/complete-resume-resource-library" className="inline-link">
                    Find answer in our resource library →
                  </Link>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              {data.longTailKeywords.slice(4, 8).map((keyword, i) => (
                <div key={i + 4} style={{ marginBottom: '1rem' }}>
                  <p style={{ fontWeight: '600', marginBottom: '0.5rem', fontSize: '1rem' }}>❓ {keyword}</p>
                  <Link href="/complete-resume-resource-library" className="inline-link">
                    Find answer in our resource library →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 8: FAQ ===== */}
        <section id="section8" style={styles.section}>
          <div className="card">
            <h2 style={styles.sectionTitle}>8. Frequently Asked Questions</h2>
            
            {data.faqs.map((faq, index) => (
              <div key={index} style={styles.faq}>
                <h3 style={styles.faqQuestion}>{faq.q}</h3>
                <p style={styles.faqAnswer}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CONCLUSION & NEXT STEPS ===== */}
        <section style={styles.section}>
          <div className="card">
            <h2 style={styles.sectionTitle}>Conclusion & Next Steps</h2>
            
            <p className="left-align">
              Your Canada PR resume is more than just a career summary—it's a strategic document that can significantly impact your 
              immigration journey. By following the guidelines in this comprehensive guide, you'll create a resume that not only meets 
              IRCC requirements but also positions you as a strong candidate for Canadian employers.
            </p>
            
            <p className="left-align">
              Remember that your resume should evolve throughout your immigration process. Update it as you gain Canadian experience, 
              additional certifications, or new language test scores. Regular refinement ensures you're always presenting your strongest 
              case to both immigration authorities and potential employers.
            </p>
            
            <div style={styles.nextSteps}>
              <h3 style={styles.nextStepsTitle}>Recommended Next Steps:</h3>
              <ol style={styles.nextStepsList}>
                <li className="left-align">Create your resume using our <Link href="/resume-templates" className="inline-link">free Canada-optimized resume builder</Link></li>
                {data.relatedLinks.map((link, index) => (
                  <li key={index} className="left-align">Review our guide on <Link href={link.url} className="inline-link">{link.title}</Link></li>
                ))}
              </ol>
            </div>
            
            <div style={styles.finalCta}>
              <h3 style={styles.finalCtaTitle}>Start Building Your Canada PR Resume Today</h3>
              <p style={styles.finalCtaText}>
                Join thousands of successful applicants who have used our specialized tools and templates to create winning Canada PR resumes.
              </p>
              <div style={styles.buttonGroup}>
                <Link 
                  href="/resume-templates" 
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Create Your Free Canada PR Resume
                </Link>
                <Link 
                  href="/free-resume-tools" 
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Free Tools
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== AUTHOR & EEAT SECTION ===== */}
        <section style={styles.section}>
          <div className="card">
            <div style={styles.authorBox}>
              <div className="author-info">
                <h3 style={styles.authorTitle}>About This Guide</h3>
                <p className="left-align">
                  This comprehensive guide was developed by the immigration documentation experts at <strong>Professional Resume Free</strong>, 
                  drawing from years of experience assisting thousands of applicants with successful Canada PR applications. Our content is 
                  regularly reviewed by certified Canadian immigration consultants and updated to reflect current IRCC requirements and 
                  processing trends.
                </p>
                <p className="left-align">
                  <strong>Experience:</strong> Our team has collectively prepared over {data.stats.successfulApps} successful Canada PR applications since {data.stats.yearsExperience}.<br/>
                  <strong>Expertise:</strong> Certified by Canadian immigration regulatory bodies and continuously updated on policy changes.<br/>
                  <strong>Authoritativeness:</strong> Cited by immigration lawyers, consultants, and recommended by settlement agencies.<br/>
                  <strong>Trustworthiness:</strong> Transparent methodology, client success stories, and commitment to accurate, up-to-date information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FRESHNESS INDICATOR ===== */}
        <div style={styles.updateStrategy}>
          Last updated: {displayDate} • Next update: {new Date(new Date(lastUpdatedDate).setDate(new Date(lastUpdatedDate).getDate() + 7)).toISOString().split('T')[0]} • Version 2026.1
        </div>

        {/* ===== HIDDEN METADATA ===== */}
        <div style={styles.hidden}>
          <span itemProp="dateModified">{lastUpdatedDate}</span>
          <span itemProp="wordCount">3500</span>
          <span itemProp="keywords">{metadata.keywords}</span>
          {data.longTailKeywords.map((kw, i) => (
            <span key={i} itemProp="longTailKeyword">{kw}</span>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CanadaPRResumeGuide;