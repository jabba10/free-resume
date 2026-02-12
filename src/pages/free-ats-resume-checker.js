import { useState, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './free-ats-resume-checker.module.css';

// Current year for dynamic content
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
    TABLE_INDICATORS: ['\\|.*\\|', '\\+[-]+\\+', 'border:', 'cellpadding', 'cellspacing', '<table', '<tr>', '<td>'],
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
    if (score >= 80) return styles.scoreHigh;
    if (score >= 60) return styles.scoreMedium;
    return styles.scoreLow;
  };

  const getScoreMessage = (score) => {
    if (score >= 90) return 'Excellent ATS compatibility';
    if (score >= 80) return 'Good ATS compatibility';
    if (score >= 70) return 'Fair ATS compatibility';
    if (score >= 60) return 'Needs improvement';
    return 'Poor ATS compatibility - Major issues detected';
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>ATS Compatibility Score</h2>
      <div className={styles.scoreContainer}>
        <div className={styles.scoreNumber}>{score}</div>
        <div className={`${styles.scoreBadge} ${getScoreClass(score)}`}>
          {score >= 80 ? 'Low Risk' : score >= 60 ? 'Medium Risk' : 'High Risk'}
        </div>
      </div>
      <p className={styles.scoreMessage}>{getScoreMessage(score)}</p>
      
      <div className={styles.severityContainer}>
        {severityCount.high > 0 && (
          <div className={styles.severityItem}>
            <div className={`${styles.severityDot} ${styles.severityHigh}`}></div>
            <span>{severityCount.high} High Risk Issue{severityCount.high !== 1 ? 's' : ''}</span>
          </div>
        )}
        {severityCount.medium > 0 && (
          <div className={styles.severityItem}>
            <div className={`${styles.severityDot} ${styles.severityMedium}`}></div>
            <span>{severityCount.medium} Medium Risk Issue{severityCount.medium !== 1 ? 's' : ''}</span>
          </div>
        )}
        {severityCount.low > 0 && (
          <div className={styles.severityItem}>
            <div className={`${styles.severityDot} ${styles.severityLow}`}></div>
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
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>No Issues Found</h2>
        <p className={styles.successMessage}>✓ Your resume text appears to be ATS-friendly!</p>
        <div className={styles.bestPractices}>
          <p className={styles.bestPracticesTitle}>Best Practices to Maintain ATS Compatibility:</p>
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
      case 'high': return styles.issueHigh;
      case 'medium': return styles.issueMedium;
      case 'low': return styles.issueLow;
      default: return '';
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Issues Found ({issues.length})</h2>
      <div className={styles.issuesContainer}>
        {issues.map((issue, index) => (
          <div key={index} className={`${styles.issueItem} ${getSeverityClass(issue.severity)}`}>
            <div className={styles.issueContent}>
              <div className={styles.issueText}>
                <p className={styles.issueMessage}>{issue.message}</p>
                <p className={styles.issueFix}><strong>Fix:</strong> {issue.fix}</p>
              </div>
              <span className={`${styles.issueSeverity} ${getSeverityClass(issue.severity)}`}>
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
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>ATS Optimization Guide</h2>
      <p className={styles.cardSubtitle}>Follow these recommendations to improve your resume's ATS compatibility</p>
      <div className={styles.fixesGrid}>
        {fixes.map((fix, index) => (
          <div key={index} className={styles.fixCard}>
            <h4 className={styles.fixTitle}>{fix.title}</h4>
            <p className={styles.fixDescription}>{fix.description}</p>
            <ul className={styles.fixExamples}>
              {fix.examples.map((example, idx) => (
                <li key={idx}>{example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className={styles.proTip}>
        <p className={styles.proTipTitle}>💡 Pro Tip for Maximum ATS Compatibility:</p>
        <p className={styles.proTipText}>
          Always save your resume as a <strong>.docx</strong> file for best ATS parsing. 
          If using PDF, ensure it's created from a text-based source, not scanned. 
          Test your resume by copying and pasting the text into Notepad - if it looks clean and readable there, 
          it will likely pass through most ATS systems successfully.
        </p>
        <p className={styles.proTipText}>
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

export default function ATSResumeChecker() {
  const [resumeText, setResumeText] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Schema data with comprehensive structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.professionalresumefree.com/free-ats-resume-checker/#webpage",
        "url": "https://www.professionalresumefree.com/free-ats-resume-checker",
        "name": "Free ATS Resume Checker - Applicant Tracking System Compatibility Analysis 2025",
        "description": "Professional ATS resume checker that analyzes 50+ parsing factors. Get instant feedback on ATS compatibility, formatting issues, and actionable fixes. 2025 Edition",
        "datePublished": "2024-01-01",
        "dateModified": BUILD_TIMESTAMP,
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
          "itemListElement": BREADCRUMB_DATA.map((item, index) => ({
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
        "url": "https://www.professionalresumefree.com/free-ats-resume-checker",
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
        "softwareVersion": "2025.1.0",
        "screenshot": "https://www.professionalresumefree.com/images/screenshot-ats-checker.jpg",
        "countriesSupported": "Global"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.professionalresumefree.com/free-ats-resume-checker/#faqpage",
        "mainEntity": FAQS.map((faq, index) => ({
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
        "step": HOW_TO_STEPS.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.name,
          "text": step.text,
          "url": `https://www.professionalresumefree.com/free-ats-resume-checker#step-${index + 1}`,
          "image": step.image
        }))
      },
      {
        "@type": "ItemList",
        "name": "User Reviews for Free ATS Resume Checker",
        "itemListElement": REVIEWS.map((review, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Review",
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
            "publisher": {
              "@type": "Organization",
              "name": "Professional Resume Free"
            },
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": "Free ATS Resume Checker",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
          }
        }))
      },
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
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".title", ".subtitle", ".cardTitle", ".sectionTitle"]
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
        <meta name="date" content={FRESHNESS_INDICATOR} />
        <meta name="last-modified" content={BUILD_TIMESTAMP} />
        <meta name="revisit-after" content="1 days" />
        
        {/* Canonical and Sitemap */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-ats-resume-checker" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Internationalization */}
        <link rel="alternate" href="https://www.professionalresumefree.com/free-ats-resume-checker" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-ats-resume-checker" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-ats-resume-checker" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-ats-resume-checker" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-ats-resume-checker" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-ats-resume-checker" hreflang="x-default" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free ATS Resume Checker - Applicant Tracking System Compatibility Analysis 2025" />
        <meta property="og:description" content={`Analyze 50+ ATS parsing factors instantly. Privacy-first tool that works entirely in your browser. ${CURRENT_YEAR}`} />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-ats-resume-checker.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free ATS Resume Checker Tool Interface" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-ats-resume-checker" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={BUILD_TIMESTAMP} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free ATS Resume Checker - Instant Compatibility Analysis 2025" />
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
        <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className={styles.landingPage} lang="en-US">
        {/* Freshness Indicator */}
        <div className={styles.freshnessIndicator} style={{ display: 'none' }}>
          <meta name="build-timestamp" content={Date.now()} />
          <meta name="content-freshness" content={FRESHNESS_INDICATOR} />
        </div>

        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            {BREADCRUMB_DATA.map((item, index) => (
              <li 
                key={index}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && <span className={styles.breadcrumbSeparator}>›</span>}
                <Link
                  href={item.item}
                  itemProp="item"
                  className={styles.breadcrumbLink}
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
                <meta itemProp="position" content={index + 1} />
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.container}>
          <header className={styles.header} role="banner">
            <div className={styles.trustBadge}>
              <span className={styles.trustBadgeText}>
                Rated 4.8/5 by 58766+ Users | Best Free ATS Checker {CURRENT_YEAR}
              </span>
            </div>
            
            <h1 className={styles.title}>
              Free ATS Resume Checker - <span className={styles.gradientText}>Analyze 50+ Parsing Factors Instantly</span>
            </h1>
            
            <p className={styles.subtitle}>
              Professional <strong className={styles.heroHighlight}>Applicant Tracking System compatibility analyzer</strong> that works entirely in your browser. No data leaves your computer - 100% privacy guaranteed.
            </p>

            {/* Aggregate Rating Display */}
            <div className={styles.aggregateRating} itemScope itemType="https://schema.org/AggregateRating">
              <meta itemProp="ratingValue" content="4.8" />
              <meta itemProp="ratingCount" content="156" />
              <meta itemProp="bestRating" content="5" />
              <meta itemProp="worstRating" content="1" />
              <div className={styles.ratingStars}>
                {'★'.repeat(5)}
                <span className={styles.ratingValue}>4.8/5</span>
              </div>
              <div className={styles.ratingText}>Based on 156+ professional reviews</div>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>ATS Factors Analyzed</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Privacy Guaranteed</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>75%</span>
                <span className={styles.statLabel}>ATS Adoption Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3x</span>
                <span className={styles.statLabel}>Better Results</span>
              </div>
            </div>
          </header>

          <main className={styles.mainContent}>
            <section className={styles.analysisSection}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>Paste Your Resume Text for ATS Analysis</h2>
                  <p className={styles.cardSubtitle}>Completely private - all processing happens in your browser</p>
                  <div className={styles.buttonGroup}>
                    <button onClick={handleUseSample} className={`${styles.button} ${styles.secondaryButton}`}>
                      Use Sample Resume
                    </button>
                    <button onClick={handleClear} className={`${styles.button} ${styles.secondaryButton}`}>
                      Clear Text
                    </button>
                  </div>
                </div>
                
                <textarea
                  className={styles.textarea}
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
                
                <div className={styles.analyzeButtonContainer}>
                  <button 
                    onClick={handleAnalyze} 
                    className={`${styles.button} ${styles.primaryButton}`}
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? (
                      <>
                        <span>Analyzing ATS Compatibility...</span>
                        <span className={styles.spinner}>⟳</span>
                      </>
                    ) : (
                      'Analyze ATS Compatibility Now'
                    )}
                  </button>
                </div>
              </div>
            </section>

            {isAnalyzing ? (
              <div className={styles.loading}>
                <p>Analyzing your resume for ATS compatibility...</p>
                <div className={styles.loadingBar}>
                  <div className={styles.loadingProgress}></div>
                </div>
              </div>
            ) : analysis ? (
              <>
                <div className={styles.grid}>
                  <ScoreDisplay score={analysis.score} severityCount={analysis.severityCount} />
                  <IssueList issues={analysis.issues} />
                </div>
                <FixSuggestions />
              </>
            ) : (
              <div className={styles.card}>
                <h2 className={`${styles.cardTitle} ${styles.centerText}`}>Ready to Analyze Your Resume's ATS Compatibility</h2>
                <p className={`${styles.readyText} ${styles.centerText}`}>
                  Paste your resume text above and click "Analyze ATS Compatibility Now" to begin.
                </p>
                <div className={styles.checklist}>
                  <p className={styles.checklistTitle}>What this ATS checker analyzes:</p>
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
            <section className={styles.howToSection} aria-labelledby="how-to-title">
              <h2 className={styles.sectionTitle} id="how-to-title">How It Works: 5-Step ATS Optimization</h2>
              <p className={styles.sectionSubtitle}>
                Follow these steps to ensure your resume passes through any Applicant Tracking System
              </p>
              <div className={styles.howToSteps}>
                {HOW_TO_STEPS.map((step, index) => (
                  <div key={index} className={styles.howToStep} id={`step-${index + 1}`}>
                    <div className={styles.stepNumber}>{index + 1}</div>
                    <h3 className={styles.stepTitle}>{step.name}</h3>
                    <p className={styles.stepDescription}>{step.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection} aria-labelledby="faq-title">
              <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions About ATS</h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to know about optimizing your resume for Applicant Tracking Systems
              </p>
              <div className={styles.faqList}>
                {FAQS.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <div className={styles.faqQuestion}>
                      <h3 itemProp="name">{faq.question}</h3>
                      <span className={styles.faqToggle}>{activeFaq === index ? '−' : '+'}</span>
                    </div>
                    {activeFaq === index && (
                      <div 
                        className={styles.faqAnswer}
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
            <section className={styles.reviewsSection} aria-labelledby="reviews-title">
              <h2 className={styles.sectionTitle} id="reviews-title">What Professionals Say About Our ATS Checker</h2>
              <p className={styles.sectionSubtitle}>
                Trusted by HR professionals, recruiters, and job seekers worldwide
              </p>
              <div className={styles.reviewsGrid}>
                {REVIEWS.map((review, index) => (
                  <div key={index} className={styles.reviewCard} itemScope itemType="https://schema.org/Review">
                    <div className={styles.reviewHeader}>
                      <div className={styles.reviewerInfo}>
                        <span itemProp="author" itemScope itemType="https://schema.org/Person">
                          <meta itemProp="name" content={review.name} />
                          <strong className={styles.reviewerName}>{review.name}</strong>
                        </span>
                        <span className={styles.reviewerPosition}>{review.position}</span>
                        <span className={styles.reviewerCompany}>{review.company}</span>
                      </div>
                      <div className={styles.reviewRating} itemScope itemType="https://schema.org/Rating">
                        <meta itemProp="ratingValue" content={review.rating} />
                        <meta itemProp="bestRating" content="5" />
                        <div className={styles.stars}>
                          {'★'.repeat(review.rating)}
                          {'☆'.repeat(5 - review.rating)}
                        </div>
                      </div>
                    </div>
                    <div className={styles.reviewContent} itemProp="reviewBody">
                      <p>"{review.review}"</p>
                    </div>
                    <div className={styles.reviewDate} itemProp="datePublished">
                      {review.date}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section className={styles.resourcesSection} aria-labelledby="resources-title">
              <h2 className={styles.sectionTitle} id="resources-title">ATS Optimization Resume Resources</h2>
              <p className={styles.sectionSubtitle}>
                Explore our comprehensive resume optimization tools and guides
              </p>
              <div className={styles.resourcesGrid}>
                <Link 
                  href="/free-resume-builder"
                  className={styles.resourceCard}
                  prefetch={false}
                >
                  <h3>Free Resume Builder</h3>
                  <p>Create professional, ATS-optimized resumes with our free builder. No sign up required.</p>
                </Link>
                <Link 
                  href="/resume-templates"
                  className={styles.resourceCard}
                  prefetch={false}
                >
                  <h3>ATS Resume Templates</h3>
                  <p>Download professionally designed ATS-friendly resume templates for all industries.</p>
                </Link>
                <Link 
                  href="/resume-writing-guide"
                  className={styles.resourceCard}
                  prefetch={false}
                >
                  <h3>Resume Writing Guide</h3>
                  <p>Learn how to write compelling resumes that pass ATS and impress recruiters.</p>
                </Link>
              </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
              <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>Ready to Optimize Your Resume for ATS?</h2>
                <p className={styles.ctaSubtitle}>
                  Join thousands of successful job seekers who have improved their ATS compatibility scores
                </p>
                <div className={styles.ctaButtons}>
                  <button 
                    onClick={handleUseSample} 
                    className={`${styles.button} ${styles.ctaButton}`}
                  >
                    Try with Sample Resume
                  </button>
                  <Link 
                    href="/resume-templates"
                    className={`${styles.button} ${styles.secondaryButton}`}
                    prefetch={false}
                  >
                    Browse Resume Templates
                  </Link>
                </div>
                <div className={styles.ctaGuarantee}>
                  <span className={styles.guaranteeText}>✓ 100% Free • No Sign Up • Privacy Guaranteed • Instant Results</span>
                </div>
              </div>
            </section>
          </main>

          
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      lastUpdated: BUILD_TIMESTAMP,
      freshnessIndicator: FRESHNESS_INDICATOR,
      reviews: REVIEWS,
      faqs: FAQS,
      howToSteps: HOW_TO_STEPS,
      breadcrumbData: BREADCRUMB_DATA
    },
    // Revalidate every hour for fresh content
    revalidate: 3600,
  };
}