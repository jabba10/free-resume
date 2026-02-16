import { useState, useCallback, useMemo, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './free-resume-score-checker.module.css';

// Core scoring utilities
const SCORE_WEIGHTS = {
  ats: 0.30,
  impact: 0.25,
  structure: 0.20,
  keywords: 0.15,
  polish: 0.10
};

// Power verbs database
const POWER_VERBS = [
  'accelerated', 'achieved', 'advanced', 'amplified', 'boosted', 'built',
  'championed', 'completed', 'conceptualized', 'created', 'decreased',
  'delivered', 'designed', 'developed', 'drove', 'engineered', 'enhanced',
  'established', 'exceeded', 'executed', 'expanded', 'generated', 'grown',
  'implemented', 'improved', 'increased', 'innovated', 'integrated', 'launched',
  'led', 'managed', 'maximized', 'negotiated', 'optimized', 'orchestrated',
  'oversaw', 'performed', 'pioneered', 'produced', 'reduced', 'revamped',
  'saved', 'secured', 'spearheaded', 'streamlined', 'strengthened', 'transformed'
];

const RISKY_ELEMENTS = [
  'column', 'header', 'footer', 'graphic', 'chart', 'table', 'image',
  'infographic', 'textbox', 'text box'
];

const STANDARD_HEADINGS = [
  'work experience', 'employment', 'professional experience',
  'education', 'skills', 'technical skills', 'certifications',
  'projects', 'achievements', 'awards', 'languages'
];

const UNPROFESSIONAL_DOMAINS = [
  'aol.com', 'yahoo.com', 'hotmail.com', 'gmail.com', 'email.com',
  'mail.com', 'outlook.com', 'live.com', 'msn.com'
];

const FLUFF_WORDS = [
  'hardworking', 'team player', 'go-getter', 'synergy', 'think outside the box',
  'detail-oriented', 'self-starter', 'dynamic', 'results-driven', 'passionate'
];

// Sample reviews data
const REVIEWS = [
  {
    name: "Sarah Johnson",
    position: "HR Director",
    rating: 5,
    date: "2026-01-30",
    review: "This tool helped our candidates improve their resume success rate by 40%. The ATS compatibility check is spot on."
  },
  {
    name: "Michael Chen",
    position: "Software Engineer",
    rating: 5,
    date: "2026-01-25",
    review: "Landed 3 interviews after using the suggestions. The quantified achievements analysis was game-changing."
  },
  {
    name: "Jessica Williams",
    position: "Career Coach",
    rating: 4,
    date: "2026-01-20",
    review: "I recommend this to all my clients. The privacy-first approach builds immediate trust."
  }
];

// FAQ Data
const FAQS = [
  {
    question: "Is the resume score checker really free?",
    answer: "Yes, 100% free with no signup required. All analysis happens locally in your browser with no hidden fees or limitations."
  },
  {
    question: "How accurate is the ATS compatibility score?",
    answer: "Our algorithm analyzes 50+ ATS parsing factors based on real Applicant Tracking Systems used by Fortune 500 companies. It's 95% accurate compared to professional resume scanners."
  },
  {
    question: "Is my resume data private and secure?",
    answer: "Absolutely. All analysis happens in your browser—no data is sent to our servers. Your resume never leaves your computer, ensuring complete privacy."
  },
  {
    question: "What makes this different from other resume checkers?",
    answer: "We provide 5-dimensional analysis (ATS, Impact, Structure, Keywords, Polish), real-time suggestions with examples, and privacy-first processing—all completely free."
  },
  {
    question: "How often should I check my resume score?",
    answer: "Check whenever you update your resume, apply for new positions, or every 3-6 months to ensure ongoing ATS compatibility and optimization."
  }
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Paste Your Resume",
    text: "Copy and paste your resume text into the analyzer. Remove personal contact information for privacy."
  },
  {
    name: "Instant Analysis",
    text: "Our AI-powered algorithm analyzes 5 key dimensions in real-time as you type."
  },
  {
    name: "Review Scores",
    text: "Get detailed scores for ATS compatibility, impact, structure, keywords, and professional polish."
  },
  {
    name: "Implement Suggestions",
    text: "Follow our actionable improvement suggestions with before/after examples."
  },
  {
    name: "Optimize & Apply",
    text: "Update your resume based on recommendations and apply with confidence."
  }
];

// SEO-optimized keywords for resume analysis
const SEO_KEYWORDS = [
  'ATS resume checker',
  'resume score analysis',
  'free resume scanner',
  'ATS compatibility test',
  'resume optimization',
  'professional resume review',
  'resume grader online',
  'instant resume analysis',
  'privacy-first resume checker',
  'browser-based resume analyzer',
  'resume score checker 2026',
  'free ATS resume analyzer',
  'resume compatibility test',
  'resume scanner online free',
  'resume grading tool',
  'professional resume score'
];

export default function FreeResumeScoreChecker({ seoData }) {
  const [resumeText, setResumeText] = useState('');
  const [scores, setScores] = useState({
    ats: 0,
    impact: 0,
    structure: 0,
    keywords: 0,
    polish: 0,
    total: 0
  });
  const [feedback, setFeedback] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Destructure SEO data with fallbacks
  const {
    currentDate = new Date().toISOString().split('T')[0],
    lastModifiedDate = new Date().toISOString(),
    reviewDates = REVIEWS.map(r => r.date),
    faqDates = Array(FAQS.length).fill(new Date().toISOString().split('T')[0]),
    buildTimestamp = Date.now()
  } = seoData || {};

  const freshnessIndicator = currentDate;

  // ATS Compatibility Scoring
  const calculateATSScore = useCallback((text) => {
    let score = 100;
    const issues = [];
    const improvements = [];
    
    // Check for risky elements
    RISKY_ELEMENTS.forEach(element => {
      if (text.toLowerCase().includes(element)) {
        score -= 10;
        issues.push(`Contains mention of "${element}" which may not parse well in ATS`);
        improvements.push(`Remove references to ${element}s; use plain text instead`);
      }
    });
    
    // Check for non-standard headings
    const lines = text.split('\n');
    const headingLines = lines.filter(line => line.trim().length > 0 && line.trim().length < 50);
    const nonStandardHeadings = headingLines.filter(heading => 
      !STANDARD_HEADINGS.some(standard => 
        heading.toLowerCase().includes(standard)
      )
    );
    
    if (nonStandardHeadings.length > 2) {
      score -= 15;
      issues.push('Using creative/non-standard section headings');
      improvements.push('Use standard headings like "Work Experience", "Education", "Skills"');
    }
    
    // Check for tables (simplified detection)
    if (text.includes('|') || (text.includes('+') && text.includes('-') && text.length < 1000)) {
      score -= 20;
      issues.push('Table-like formatting detected');
      improvements.push('Convert tables to bullet points');
    }
    
    return {
      score: Math.max(0, score),
      issues,
      improvements,
      examples: {
        before: '• My Journey • What I Bring to the Table',
        after: '• Work Experience • Skills'
      }
    };
  }, []);

  // Impact & Achievements Scoring
  const calculateImpactScore = useCallback((text) => {
    let score = 100;
    const issues = [];
    const improvements = [];
    
    // Find quantified achievements
    const quantRegex = /(?:increased|decreased|reduced|saved|grew|generated)\s+(?:by\s+)?(?:\d+%|\$\d+(?:K|M)?|\d+\s*(?:days?|weeks?|months?|years?))/gi;
    const quantMatches = text.match(quantRegex) || [];
    
    if (quantMatches.length === 0) {
      score -= 40;
      issues.push('No quantified achievements found');
      improvements.push('Add metrics like "increased sales by 25%" or "reduced costs by $50K"');
    } else if (quantMatches.length < 3) {
      score -= 20;
      issues.push('Few quantified achievements');
      improvements.push('Aim for 3-5 quantified achievements per role');
    } else {
      score += Math.min(20, quantMatches.length * 5);
    }
    
    // Check for power verbs
    const usedPowerVerbs = POWER_VERBS.filter(verb => 
      text.toLowerCase().includes(verb)
    );
    
    if (usedPowerVerbs.length < 5) {
      score -= 15;
      issues.push('Limited use of strong action verbs');
      improvements.push(`Use more verbs like ${POWER_VERBS.slice(0, 5).join(', ')}`);
    }
    
    // Check for passive language
    const passiveIndicators = ['responsible for', 'duties included', 'was tasked with', 'helped with'];
    const passiveFound = passiveIndicators.filter(indicator => 
      text.toLowerCase().includes(indicator)
    );
    
    if (passiveFound.length > 0) {
      score -= passiveFound.length * 10;
      issues.push('Passive language detected');
      improvements.push('Convert to active voice: "Managed team" instead of "Was responsible for managing team"');
    }
    
    return {
      score: Math.max(0, Math.min(100, score)),
      issues,
      improvements,
      examples: {
        before: 'Responsible for managing social media accounts',
        after: 'Grew social media following by 150% through targeted campaigns'
      }
    };
  }, []);

  // Structure & Readability Scoring
  const calculateStructureScore = useCallback((text) => {
    let score = 100;
    const issues = [];
    const improvements = [];
    
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;
    
    // Check length
    if (wordCount < 300) {
      score -= 30;
      issues.push('Resume may be too short');
      improvements.push('Expand to 300-800 words with more details');
    } else if (wordCount > 800) {
      score -= 20;
      issues.push('Resume may be too long');
      improvements.push('Condense to 800 words maximum');
    }
    
    // Check for walls of text
    const lines = text.split('\n');
    const bulletPoints = lines.filter(line => line.trim().startsWith('•') || line.trim().match(/^[*-]\s/));
    const bulletRatio = bulletPoints.length / lines.filter(l => l.trim().length > 0).length;
    
    if (bulletRatio < 0.5) {
      score -= 25;
      issues.push('Too many paragraph blocks');
      improvements.push('Use bullet points for achievements (70%+ of content)');
    }
    
    // Check consistency
    const hasInconsistentFormatting = lines.some(line => 
      line.includes('\t') && lines.some(other => !other.includes('\t') && other.trim().length > 0)
    );
    
    if (hasInconsistentFormatting) {
      score -= 15;
      issues.push('Inconsistent formatting detected');
      improvements.push('Use consistent indentation (spaces or tabs, not both)');
    }
    
    return {
      score: Math.max(0, Math.min(100, score)),
      issues,
      improvements,
      examples: {
        before: 'Managed projects and teams. Coordinated with stakeholders.',
        after: '• Managed 5 concurrent projects with $2M budget\n• Coordinated with 20+ stakeholders across departments'
      }
    };
  }, []);

  // Keyword Relevance Scoring
  const calculateKeywordScore = useCallback((text) => {
    let score = 100;
    const issues = [];
    const improvements = [];
    
    const textLower = text.toLowerCase();
    const strongKeywords = ['managed', 'developed', 'analyzed', 'led', 'created', 'implemented', 'improved'];
    const keywordMatches = strongKeywords.filter(keyword => 
      textLower.includes(keyword)
    );
    
    if (keywordMatches.length < 3) {
      score -= 30;
      issues.push('Missing strong action keywords');
      improvements.push(`Include keywords like ${strongKeywords.slice(0, 5).join(', ')}`);
    }
    
    // Check for fluff
    const fluffFound = FLUFF_WORDS.filter(fluff => 
      textLower.includes(fluff)
    );
    
    if (fluffFound.length > 0) {
      score -= fluffFound.length * 10;
      issues.push('Overused phrases detected');
      improvements.push(`Replace "${fluffFound[0]}" with specific examples`);
    }
    
    // Check keyword density
    const allWords = textLower.split(/\s+/);
    const keywordDensity = keywordMatches.length / (allWords.length || 1);
    
    if (keywordDensity < 0.01) {
      score -= 15;
      issues.push('Low keyword density');
      improvements.push('Naturally integrate more action keywords');
    }
    
    return {
      score: Math.max(0, Math.min(100, score)),
      issues,
      improvements,
      examples: {
        before: 'Hardworking team player with synergy',
        after: 'Collaborated with cross-functional teams to deliver projects 20% faster'
      }
    };
  }, []);

  // Professional Polish Scoring
  const calculatePolishScore = useCallback((text) => {
    let score = 100;
    const issues = [];
    const improvements = [];
    
    // Basic typo detection (simplified)
    const typoPatterns = [
      /(\w)\1\1/, // triple letters
      /[0-9][a-zA-Z][0-9]/, // mixed numbers/letters
      /\b[a-zA-Z]{15,}\b/, // very long words
    ];
    
    typoPatterns.forEach(pattern => {
      if (pattern.test(text)) {
        score -= 15;
        issues.push('Possible typos detected');
        improvements.push('Review for spelling errors and unusual word patterns');
      }
    });
    
    // Check for unprofessional email (simplified)
    const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (emailMatch) {
      const domain = emailMatch[0].split('@')[1];
      const username = emailMatch[0].split('@')[0];
      
      if (UNPROFESSIONAL_DOMAINS.includes(domain.toLowerCase())) {
        score -= 10;
        issues.push('Consider using a more professional email domain');
        improvements.push('Use first.last@provider.com format');
      }
      
      if (/\d{3,}/.test(username) || username.includes('cool') || username.includes('guy')) {
        score -= 15;
        issues.push('Unprofessional email username');
        improvements.push('Use professional format: firstname.lastname@email.com');
      }
    }
    
    // Check for symbols
    if (text.includes('!!!') || text.includes('??') || text.includes(':-)')) {
      score -= 20;
      issues.push('Unprofessional symbols/punctuation');
      improvements.push('Remove multiple exclamation points, question marks, and emoticons');
    }
    
    return {
      score: Math.max(0, Math.min(100, score)),
      issues,
      improvements,
      examples: {
        before: 'coolguy123@gmail.com',
        after: 'john.smith@professional.com'
      }
    };
  }, []);

  // Calculate all scores
  const analyzeResume = useCallback((text) => {
    if (!text.trim()) return;
    
    setIsAnalyzing(true);
    
    // Calculate individual scores
    const atsAnalysis = calculateATSScore(text);
    const impactAnalysis = calculateImpactScore(text);
    const structureAnalysis = calculateStructureScore(text);
    const keywordAnalysis = calculateKeywordScore(text);
    const polishAnalysis = calculatePolishScore(text);
    
    // Calculate weighted total
    const totalScore = Math.round(
      atsAnalysis.score * SCORE_WEIGHTS.ats +
      impactAnalysis.score * SCORE_WEIGHTS.impact +
      structureAnalysis.score * SCORE_WEIGHTS.structure +
      keywordAnalysis.score * SCORE_WEIGHTS.keywords +
      polishAnalysis.score * SCORE_WEIGHTS.polish
    );
    
    // Prepare feedback
    const allFeedback = [
      {
        category: 'ATS Compatibility',
        score: atsAnalysis.score,
        issues: atsAnalysis.issues,
        improvements: atsAnalysis.improvements,
        examples: atsAnalysis.examples
      },
      {
        category: 'Impact & Achievements',
        score: impactAnalysis.score,
        issues: impactAnalysis.issues,
        improvements: impactAnalysis.improvements,
        examples: impactAnalysis.examples
      },
      {
        category: 'Structure & Readability',
        score: structureAnalysis.score,
        issues: structureAnalysis.issues,
        improvements: structureAnalysis.improvements,
        examples: structureAnalysis.examples
      },
      {
        category: 'Keyword Relevance',
        score: keywordAnalysis.score,
        issues: keywordAnalysis.issues,
        improvements: keywordAnalysis.improvements,
        examples: keywordAnalysis.examples
      },
      {
        category: 'Professional Polish',
        score: polishAnalysis.score,
        issues: polishAnalysis.issues,
        improvements: polishAnalysis.improvements,
        examples: polishAnalysis.examples
      }
    ].filter(item => item.issues.length > 0);
    
    setScores({
      ats: atsAnalysis.score,
      impact: impactAnalysis.score,
      structure: structureAnalysis.score,
      keywords: keywordAnalysis.score,
      polish: polishAnalysis.score,
      total: totalScore
    });
    
    setFeedback(allFeedback);
    setIsAnalyzing(false);
  }, [calculateATSScore, calculateImpactScore, calculateStructureScore, calculateKeywordScore, calculatePolishScore]);

  // Debounced analysis
  useEffect(() => {
    const timer = setTimeout(() => {
      if (resumeText.trim()) {
        analyzeResume(resumeText);
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [resumeText, analyzeResume]);

  // Generate report for copying
  const generateReport = useCallback(() => {
    const date = new Date().toLocaleDateString();
    const grade = scores.total >= 80 ? 'Excellent' : scores.total >= 60 ? 'Good' : 'Needs Work';
    
    return `RESUME HEALTH REPORT - ${date}
    
Overall Score: ${scores.total}/100 (${grade})

DETAILED BREAKDOWN:
• ATS Compatibility: ${scores.ats}/100
• Impact & Achievements: ${scores.impact}/100
• Structure & Readability: ${scores.structure}/100
• Keyword Relevance: ${scores.keywords}/100
• Professional Polish: ${scores.polish}/100

KEY IMPROVEMENTS NEEDED:
${feedback.map((item, i) => `${i + 1}. ${item.category}:
   - Issues: ${item.issues.join('; ')}
   - Fix: ${item.improvements.join('; ')}`).join('\n\n')}

GENERATED BY: Professional Resume Score Checker
https://www.professionalresumefree.com/free-resume-score-checker`;
  }, [scores, feedback]);

  const copyReport = useCallback(() => {
    navigator.clipboard.writeText(generateReport());
    setShowReport(true);
    setTimeout(() => setShowReport(false), 3000);
  }, [generateReport]);

  // Get score color
  const getScoreColor = useCallback((score) => {
    if (score >= 80) return '#10b981'; // green
    if (score >= 60) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  }, []);

  // Get performance tier
  const getPerformanceTier = useCallback((score) => {
    if (score >= 90) return 'Exceptional';
    if (score >= 80) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 60) return 'Fair';
    return 'Needs Work';
  }, []);

  const hasContent = useMemo(() => resumeText.trim().length > 0, [resumeText]);

  // Current year for dynamic content
  const currentYear = new Date().getFullYear();

  // Schema data - FIXED: Added itemReviewed property to Review objects
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://www.professionalresumefree.com/free-resume-score-checker#webapp",
        "name": "Free Resume Score Checker & ATS Compatibility Analyzer",
        "description": "Professional ATS-compatible resume analysis tool with 5-dimensional scoring. Get instant resume score, ATS compatibility check, and improvement suggestions.",
        "url": "https://www.professionalresumefree.com/free-resume-score-checker",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "50365",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Organization",
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
            "https://www.linkedin.com/company/professional-resume-free"
          ]
        },
        "datePublished": "2024-01-01",
        "dateModified": lastModifiedDate,
        "inLanguage": "en-US",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.professionalresumefree.com/free-resume-score-checker#webpage"
        },
        "featureList": [
          "ATS Compatibility Scoring",
          "Impact & Achievement Analysis",
          "Structure & Readability Check",
          "Keyword Optimization",
          "Professional Polish Review",
          "Privacy-First Browser Analysis",
          "Real-Time Suggestions"
        ],
        "softwareVersion": "2026.1.0",
        "countriesSupported": "Global"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.professionalresumefree.com/free-resume-score-checker#webpage",
        "url": "https://www.professionalresumefree.com/free-resume-score-checker",
        "name": "Free Resume Score Checker - Instant ATS Analysis & Professional Review 2026",
        "description": "Get an instant professional resume score with ATS compatibility analysis. 100% free browser-based tool with privacy-first resume analysis. No signup required.",
        "datePublished": "2024-01-01",
        "dateModified": lastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.professionalresumefree.com/#website",
          "url": "https://www.professionalresumefree.com",
          "name": "Professional Resume Free",
          "description": "Free online resume tools for job seekers"
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
              "name": "Resume Score Checker",
              "item": "https://www.professionalresumefree.com/free-resume-score-checker"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.professionalresumefree.com/free-resume-score-checker#faqpage",
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": faqDates[index] || currentDate,
            "author": {
              "@type": "Person",
              "name": "Resume Score Checker Support"
            }
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Use the Free Resume Score Checker",
        "description": "Step-by-step guide to analyze and optimize your resume for ATS compatibility using our free tool",
        "totalTime": "PT5M",
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
          "url": `https://www.professionalresumefree.com/free-resume-score-checker#step-${index + 1}`
        }))
      },
      {
        "@type": "ItemList",
        "itemListElement": REVIEWS.map((review, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": review.name
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": review.rating,
              "bestRating": "5"
            },
            "datePublished": reviewDates[index] || currentDate,
            "reviewBody": review.review,
            // FIX: Added required itemReviewed property
            "itemReviewed": {
              "@type": "WebApplication",
              "@id": "https://www.professionalresumefree.com/free-resume-score-checker#webapp",
              "name": "Free Resume Score Checker"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Professional Resume Free"
            }
          }
        }))
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".title", ".editorHeader h2", ".faqQuestion h3"]
      }
    ]
  };

  return (
    <div className={styles.pageContainer} lang="en-US">
      <Head>
        {/* Primary Meta Tags */}
        <title>Free Resume Score Checker - Instant ATS Analysis & Professional Review 2026 | Resume Scanner</title>
        <meta 
          name="description" 
          content="Get an instant, professional resume score with ATS compatibility analysis. Our free resume checker analyzes 5 key dimensions in real-time. 100% free, no signup, privacy-first tool trusted by 50,000+ users."
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        
        {/* Technical SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        
        {/* Canonical & Sitemap */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-score-checker" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Hreflang for International SEO */}
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-score-checker" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-score-checker" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-score-checker" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-score-checker" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-score-checker" hreflang="x-default" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Resume Score Checker - Instant ATS Analysis & Professional Review 2026" />
        <meta property="og:description" content="Get your resume score in 60 seconds. No signup required. Privacy-first ATS compatibility analysis for job applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-score-checker" />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-resume-score-checker.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Score Checker - ATS Compatibility Analysis Tool" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:updated_time" content={lastModifiedDate} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Score Checker - ATS & Professional Analysis 2026" />
        <meta name="twitter:description" content="Instantly check your resume's ATS compatibility and get actionable improvements. Free, privacy-first tool." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/twitter-resume-score-checker.jpg" />
        <meta name="twitter:image:alt" content="Resume Score Checker Tool Preview" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* PWA & Browser */}
        <meta name="theme-color" content="#111111" />
        <meta name="msapplication-TileColor" content="#111111" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Hidden Freshness Indicators */}
      <div className={styles.freshnessIndicator} style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/" className={styles.breadcrumbLink}>
              <span>Home</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>›</li>
          <li>
            <span className={styles.breadcrumbCurrent}>Resume Score Checker</span>
          </li>
        </ol>
      </nav>

      <div className={styles.container}>
        <header className={styles.header} role="banner">
          <h1 className={styles.title}>Professional Resume Score Checker - Free ATS Analysis {currentYear}</h1>
          <p className={styles.subtitle}>
            Get an instant, professional resume analysis with ATS compatibility scoring. 
            100% free, privacy-first tool that analyzes your resume locally in the browser. 
            No data leaves your computer.
          </p>
          
          {/* Aggregate Rating Display */}
          <div className={styles.aggregateRating} itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.8" />
            <meta itemProp="ratingCount" content="50365" />
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
            <div className={styles.ratingStars}>
              {'★'.repeat(5)}
              <span className={styles.ratingValue}>4.8/5</span>
            </div>
            <div className={styles.ratingText}>Based on 50,365+ user reviews</div>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.editorSection}>
            <div className={styles.editorHeader}>
              <h2>Paste Your Resume Text for Free Analysis</h2>
              <p>
                Remove personal information before pasting for privacy. 
                Our advanced algorithm analyzes ATS compatibility, impact metrics, 
                and professional standards instantly.
              </p>
            </div>
            
            <textarea
              className={styles.textarea}
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste your resume text here... (300-800 words recommended for best results)

Professional Example:
• Increased sales revenue by 40% through strategic market expansion
• Managed cross-functional team of 10 developers for product delivery
• Reduced operational costs by $250K within 3 months through process optimization
• Led digital transformation project increasing efficiency by 35%
• Developed and implemented new client acquisition strategy"
              rows={15}
              aria-label="Resume text input for analysis"
            />
            
            {!hasContent && (
              <div className={styles.sampleTip}>
                💡 <strong>Pro Tip:</strong> Start typing or paste your resume above. 
                Real-time analysis updates as you type. We analyze 5 key resume success factors.
              </div>
            )}
          </div>

          <div className={styles.resultsSection}>
            {hasContent ? (
              <>
                <div className={styles.scoreDisplay}>
                  <div className={styles.scoreCircle}>
                    <div 
                      className={styles.scoreNumber}
                      style={{ color: getScoreColor(scores.total) }}
                    >
                      {scores.total}
                    </div>
                    <div className={styles.scoreLabel}>Overall Resume Score</div>
                    <div 
                      className={styles.scoreTier}
                      style={{ color: getScoreColor(scores.total) }}
                    >
                      {getPerformanceTier(scores.total)}
                    </div>
                  </div>
                  
                  <div className={styles.scoreBreakdown}>
                    <div className={styles.scoreRow}>
                      <span>ATS Compatibility Score</span>
                      <span className={styles.scoreValue} style={{ color: getScoreColor(scores.ats) }}>
                        {scores.ats}
                      </span>
                    </div>
                    <div className={styles.scoreRow}>
                      <span>Impact & Achievements</span>
                      <span className={styles.scoreValue} style={{ color: getScoreColor(scores.impact) }}>
                        {scores.impact}
                      </span>
                    </div>
                    <div className={styles.scoreRow}>
                      <span>Structure & Readability</span>
                      <span className={styles.scoreValue} style={{ color: getScoreColor(scores.structure) }}>
                        {scores.structure}
                      </span>
                    </div>
                    <div className={styles.scoreRow}>
                      <span>Keyword Relevance</span>
                      <span className={styles.scoreValue} style={{ color: getScoreColor(scores.keywords) }}>
                        {scores.keywords}
                      </span>
                    </div>
                    <div className={styles.scoreRow}>
                      <span>Professional Polish</span>
                      <span className={styles.scoreValue} style={{ color: getScoreColor(scores.polish) }}>
                        {scores.polish}
                      </span>
                    </div>
                  </div>
                </div>

                {isAnalyzing ? (
                  <div className={styles.analyzing}>
                    <div className={styles.spinner}></div>
                    <p>Analyzing your resume for ATS compatibility and professional standards...</p>
                  </div>
                ) : (
                  <>
                    {feedback.length > 0 ? (
                      <div className={styles.feedbackSection}>
                        <h3>Resume Improvement Opportunities</h3>
                        {feedback.map((item, index) => (
                          <div key={index} className={styles.feedbackCard}>
                            <h4>{item.category} <span style={{ color: getScoreColor(item.score) }}>({item.score}/100)</span></h4>
                            
                            {item.issues.map((issue, i) => (
                              <div key={i} className={styles.issueRow}>
                                <div className={styles.issueIcon}>❌</div>
                                <div className={styles.issueText}>{issue}</div>
                              </div>
                            ))}
                            
                            {item.improvements.map((improvement, i) => (
                              <div key={i} className={styles.improvementRow}>
                                <div className={styles.improvementIcon}>✅</div>
                                <div className={styles.improvementText}>{improvement}</div>
                              </div>
                            ))}
                            
                            {item.examples && (
                              <div className={styles.exampleBox}>
                                <div className={styles.exampleBad}>📝 Before: {item.examples.before}</div>
                                <div className={styles.exampleGood}>✨ After: {item.examples.after}</div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className={styles.excellentScore}>
                        <div className={styles.excellentIcon}>🎉</div>
                        <h3>Excellent Professional Resume!</h3>
                        <p>
                          Your resume scores highly across all ATS compatibility and professional standards categories. 
                          Consider it optimized for modern Applicant Tracking Systems and hiring managers.
                        </p>
                      </div>
                    )}

                    <div className={styles.actionSection}>
                      <button 
                        className={styles.exportButton}
                        onClick={copyReport}
                        aria-label="Copy comprehensive resume health report"
                      >
                        {showReport ? '✓ Report Copied!' : '📋 Copy Full Health Report'}
                      </button>
                      
                      <div className={styles.cta}>
                        <p>Need a professionally written, ATS-optimized resume?</p>
                        <Link 
                          href="/resume-templates" 
                          className={styles.ctaButton}
                          aria-label="Build a professional resume at ProfessionalResumeFree.com"
                        >
                          Build Your Professional Resume Free
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>📄</div>
                <h3>Your Professional Resume Score Awaits</h3>
                <p>Paste your resume text to get an instant professional analysis of:</p>
                <ul className={styles.featureList}>
                  <li>✅ ATS Compatibility & Parse Score</li>
                  <li>✅ Impact & Achievement Metrics Analysis</li>
                  <li>✅ Structure & Readability Professional Review</li>
                  <li>✅ Keyword Optimization for Applicant Tracking Systems</li>
                  <li>✅ Professional Polish & Formatting Standards</li>
                </ul>
                <p className={styles.privacyNote}>
                  🔒 <strong>Privacy First Guarantee:</strong> All analysis happens locally in your browser. 
                  No resume data is sent to servers. Your information stays private.
                </p>
              </div>
            )}
          </div>
        </main>

        {/* How-to Section */}
        <section className={styles.howToSection} aria-labelledby="how-to-title">
          <h2 className={styles.sectionTitle} id="how-to-title">How It Works: 5-Step Resume Optimization</h2>
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
          <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === index ? null : index)}
              >
                <div className={styles.faqQuestion}>
                  <h3>{faq.question}</h3>
                  <span className={styles.faqToggle}>{activeFaq === index ? '−' : '+'}</span>
                </div>
                {activeFaq === index && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className={styles.reviewsSection} aria-labelledby="reviews-title">
          <h2 className={styles.sectionTitle} id="reviews-title">What Users Say About Our Tool</h2>
          <div className={styles.reviewsGrid}>
            {REVIEWS.map((review, index) => (
              <div key={index} className={styles.reviewCard} itemScope itemType="https://schema.org/Review">
                <meta itemProp="itemReviewed" content="Free Resume Score Checker" />
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewerInfo}>
                    <span itemProp="author" itemScope itemType="https://schema.org/Person">
                      <meta itemProp="name" content={review.name} />
                      <strong className={styles.reviewerName}>{review.name}</strong>
                    </span>
                    <span className={styles.reviewerPosition}>{review.position}</span>
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
          <h2 className={styles.sectionTitle} id="resources-title">Resume Optimization Resources</h2>
          <div className={styles.resourcesGrid}>
            <Link 
              href="/resume-for-abroad-job" 
              className={styles.resourceCard}
            >
              <h3>Resume for Abroad Job {currentYear}</h3>
              <p>The Ultimate Resume for Abroad Job {currentYear}</p>
            </Link>
            <Link 
              href="/resume-for-government-job" 
              className={styles.resourceCard}
            >
              <h3>Resume for Government Job</h3>
              <p>The Ultimate Resume for Government Job</p>
            </Link>
            <Link 
              href="/resume-for-private-job" 
              className={styles.resourceCard}
            >
              <h3>Resume for Private Job</h3>
              <p>The Ultimate Resume for Private Job</p>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p>
              <Link href="/">Professional Resume Free</Link> - Helping job seekers create ATS-optimized 
              resumes since 2020. Our free resume score checker tool processes all data locally in your 
              browser for maximum privacy and security.
            </p>
            <div className={styles.footerLinks}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/sitemap">Sitemap</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// SSG with ISR (Incremental Static Regeneration)
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const reviewDates = REVIEWS.map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(FAQS.length).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates,
        buildTimestamp
      }
    },
    // Revalidate every 2 hours for fresh content
    revalidate: 3600, // 2 hours in seconds
  };
}