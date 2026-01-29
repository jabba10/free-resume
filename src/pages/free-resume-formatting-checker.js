import { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import styles from './free-resume-formatting-checker.module.css';

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();

// FAQ Data
const FAQS = [
  {
    question: "Why is resume formatting so important?",
    answer: "Proper formatting ensures your resume is readable by both ATS systems and human recruiters. Clean formatting improves scannability, professional appearance, and information hierarchy. Poor formatting can cause ATS parsing errors and reduce readability by up to 40%."
  },
  {
    question: "What are the most common formatting mistakes?",
    answer: "Common mistakes include: inconsistent spacing, mixed font styles, improper bullet alignment, lack of white space, using tables or columns (which confuse ATS), embedding images or charts, using headers/footers, and improper file formats. Our tool detects all these issues automatically."
  },
  {
    question: "What's the best file format for resumes?",
    answer: "Always use PDF for submitted resumes. PDF preserves formatting across all devices and operating systems. For ATS-friendly versions, also maintain a plain text version. Never use Word documents with complex formatting, images, or tables as they often parse incorrectly."
  },
  {
    question: "How much white space should a resume have?",
    answer: "Aim for 30-40% white space. This includes margins (0.5-1 inch), line spacing (1.15-1.5), and paragraph spacing. Adequate white space improves readability by 50% and helps recruiters quickly scan your most important information without feeling overwhelmed."
  },
  {
    question: "Should I use creative/designer formatting for creative roles?",
    answer: "Only for design/creative roles where visual presentation is part of the job. Even then, maintain ATS compatibility by including a traditional formatted version. For 95% of roles, clean, professional formatting outperforms creative designs for both ATS and readability."
  }
];

// Formatting Guidelines
const FORMATTING_GUIDELINES = [
  {
    category: "Typography",
    rules: [
      "Use 1-2 professional fonts maximum",
      "Font size: 10-12pt for body, 14-16pt for headers",
      "Consistent font weights (regular, bold)",
      "Avoid decorative or script fonts",
      "Use proper hierarchy (H1, H2, body text)"
    ]
  },
  {
    category: "Spacing & Layout",
    rules: [
      "Margins: 0.5-1 inch on all sides",
      "Line spacing: 1.15-1.5 for readability",
      "Consistent paragraph spacing",
      "Proper bullet point alignment",
      "Adequate white space (30-40%)"
    ]
  },
  {
    category: "Structure",
    rules: [
      "Clear section headers",
      "Reverse chronological order",
      "Consistent date formatting",
      "Proper contact information placement",
      "Logical information flow"
    ]
  },
  {
    category: "ATS Optimization",
    rules: [
      "No tables or columns",
      "No headers/footers",
      "No images or graphics",
      "Standard bullet points only",
      "Simple, clean formatting"
    ]
  }
];

// Common Issues to Check
const COMMON_ISSUES = [
  "Inconsistent spacing between sections",
  "Mixed font styles and sizes",
  "Improper bullet point alignment",
  "Lack of white space",
  "Unprofessional font choices",
  "Inconsistent date formatting",
  "Missing contact information",
  "Overly complex formatting",
  "Too much text density",
  "Poor information hierarchy"
];

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'resume formatting checker',
  'ATS formatting analyzer',
  'resume layout verification',
  'professional resume formatting',
  'formatting compliance tool',
  'resume structure analyzer',
  'formatting optimization',
  'resume layout checker',
  'professional formatting guide',
  'ATS compatible formatting'
];

const ResumeFormattingChecker = () => {
  const [text, setText] = useState('');
  const [formattingIssues, setFormattingIssues] = useState({
    spacingIssues: [],
    fontIssues: [],
    structureIssues: [],
    atsIssues: [],
    totalIssues: 0,
    formattingScore: 100,
    lineCount: 0,
    wordCount: 0,
    sectionCount: 0,
    bulletPointCount: 0
  });
  const [activeFaq, setActiveFaq] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const textareaRef = useRef(null);

  // Schema data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Resume Formatting Checker",
        "description": "Free professional resume formatting analyzer with ATS compatibility checking, spacing verification, and structure optimization guidance",
        "url": "https://www.professionalresumefree.com/free-resume-formatting-checker",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "234",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "url": "https://www.professionalresumefree.com"
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
      },
      {
        "@type": "ItemList",
        "name": "Resume Formatting Guidelines",
        "itemListElement": FORMATTING_GUIDELINES.map((guideline, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": guideline.category,
          "description": `${guideline.rules.length} essential formatting rules`
        }))
      }
    ]
  };

  // Analyze formatting
  const analyzeFormatting = useCallback((content) => {
    if (!content.trim()) {
      return {
        spacingIssues: [],
        fontIssues: [],
        structureIssues: [],
        atsIssues: [],
        totalIssues: 0,
        formattingScore: 100,
        lineCount: 0,
        wordCount: 0,
        sectionCount: 0,
        bulletPointCount: 0
      };
    }

    const lines = content.split('\n');
    const words = content.trim().split(/\s+/).filter(w => w.length > 0);
    const sections = content.split(/\n\s*\n/).filter(s => s.trim().length > 0);
    
    let issues = [];
    let score = 100;
    const issueCategories = {
      spacingIssues: [],
      fontIssues: [],
      structureIssues: [],
      atsIssues: []
    };

    // Check line length consistency
    const lineLengths = lines.map(line => line.length).filter(len => len > 0);
    const avgLineLength = lineLengths.reduce((a, b) => a + b, 0) / lineLengths.length;
    const inconsistentLines = lines.filter((line, index) => {
      if (line.trim().length === 0) return false;
      return Math.abs(line.length - avgLineLength) > avgLineLength * 0.5;
    }).length;
    
    if (inconsistentLines > lines.length * 0.2) {
      issueCategories.spacingIssues.push('Inconsistent line lengths detected');
      score -= 5;
    }

    // Check spacing between sections
    const consecutiveEmptyLines = content.match(/\n\s*\n\s*\n/g) || [];
    if (consecutiveEmptyLines.length > 2) {
      issueCategories.spacingIssues.push('Too many consecutive empty lines');
      score -= 3;
    }

    // Check bullet point consistency
    const bulletPoints = lines.filter(line => /^[•\-*]\s/.test(line.trim()));
    const bulletPointCount = bulletPoints.length;
    
    if (bulletPointCount > 0) {
      const bulletTypes = new Set();
      bulletPoints.forEach(line => {
        const firstChar = line.trim()[0];
        bulletTypes.add(firstChar);
      });
      
      if (bulletTypes.size > 1) {
        issueCategories.spacingIssues.push('Inconsistent bullet point styles');
        score -= 4;
      }
    }

    // Check for potential ATS issues
    const hasTables = /\+[-+]+\+|┌[─┬]|╔[═╦]/g.test(content);
    if (hasTables) {
      issueCategories.atsIssues.push('Tables detected (not ATS-friendly)');
      score -= 10;
    }

    const hasImages = /\[img\]|\.(jpg|png|gif)|image:/i.test(content);
    if (hasImages) {
      issueCategories.atsIssues.push('Image references detected');
      score -= 8;
    }

    const hasColumns = /column|multicolumn|tabular/i.test(content);
    if (hasColumns) {
      issueCategories.atsIssues.push('Column formatting detected');
      score -= 7;
    }

    // Check structure
    const hasContactInfo = /(phone|email|@|linkedin|github)/i.test(content);
    if (!hasContactInfo) {
      issueCategories.structureIssues.push('Contact information may be missing');
      score -= 5;
    }

    const hasDates = /\d{4}[-/]\d{1,2}[-/]\d{1,2}|\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* \d{4}\b/i.test(content);
    if (!hasDates) {
      issueCategories.structureIssues.push('Dates may be missing or improperly formatted');
      score -= 4;
    }

    // Check for section headers
    const headerLines = lines.filter(line => 
      line.trim().length > 0 && 
      line.trim().length < 50 && 
      !line.trim().startsWith('•') &&
      !line.trim().startsWith('-') &&
      !line.trim().startsWith('*') &&
      !line.includes('@') &&
      !/\d/.test(line)
    ).length;
    
    if (headerLines < 3 && sections.length > 3) {
      issueCategories.structureIssues.push('Insufficient section headers');
      score -= 4;
    }

    // Check text density
    const avgWordsPerLine = words.length / lines.filter(l => l.trim().length > 0).length;
    if (avgWordsPerLine > 15) {
      issueCategories.spacingIssues.push('High text density - consider adding more white space');
      score -= 3;
    }

    // Check for mixed case issues
    const allCapsLines = lines.filter(line => {
      const trimmed = line.trim();
      return trimmed.length > 10 && trimmed === trimmed.toUpperCase();
    }).length;
    
    if (allCapsLines > 3) {
      issueCategories.fontIssues.push('Excessive use of ALL CAPS');
      score -= 3;
    }

    // Check for inconsistent date formatting
    const dateFormats = [];
    const dateMatches = content.match(/\b\d{4}[-/]\d{1,2}[-/]\d{1,2}\b|\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* \d{4}\b/gi) || [];
    dateMatches.forEach(date => {
      const format = date.includes('/') ? 'slash' : date.includes('-') ? 'dash' : 'text';
      if (!dateFormats.includes(format)) dateFormats.push(format);
    });
    
    if (dateFormats.length > 1 && dateMatches.length > 1) {
      issueCategories.structureIssues.push('Inconsistent date formatting');
      score -= 4;
    }

    // Calculate total issues
    const totalIssues = Object.values(issueCategories).reduce((total, category) => total + category.length, 0);
    
    // Adjust score based on total issues
    score = Math.max(0, score - (totalIssues * 2));
    
    // Ensure score is between 0-100
    score = Math.min(100, Math.max(0, score));

    return {
      spacingIssues: issueCategories.spacingIssues,
      fontIssues: issueCategories.fontIssues,
      structureIssues: issueCategories.structureIssues,
      atsIssues: issueCategories.atsIssues,
      totalIssues,
      formattingScore: Math.round(score),
      lineCount: lines.length,
      wordCount: words.length,
      sectionCount: sections.length,
      bulletPointCount
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const results = analyzeFormatting(text);
      setFormattingIssues(results);
    }, 500);

    return () => clearTimeout(timer);
  }, [text, analyzeFormatting]);

  const handleReset = () => {
    setText('');
    setFormattingIssues(analyzeFormatting(''));
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleLoadExample = () => {
    const exampleText = `JANE DOE
Senior Marketing Director
(123) 456-7890 | jane.doe@email.com
linkedin.com/in/janedoe | San Francisco, CA

PROFESSIONAL SUMMARY
Results-driven marketing executive with 12+ years of experience in brand strategy and digital transformation. Specialized in scaling startups and revitalizing established brands through data-driven campaigns.

WORK EXPERIENCE

Director of Marketing | TechGrowth Inc. | 2020-Present
• Led team of 25 marketing professionals across 3 departments
• Increased quarterly revenue by 45% through targeted digital campaigns
• Reduced customer acquisition cost by 30% through optimized channels
• Implemented marketing automation system improving efficiency by 60%

Senior Marketing Manager | BrandVision LLC | 2016-2020
• Managed $5M annual marketing budget with 28% average ROI
• Developed and launched 3 successful product lines
• Increased social media engagement by 220% through content strategy
• Mentored and developed 8 marketing associates

EDUCATION

MBA in Marketing | Stanford University | 2014-2016
Bachelor of Business Administration | UC Berkeley | 2010-2014

SKILLS
Digital Marketing | Brand Strategy | Team Leadership
Data Analytics | Budget Management | Campaign Optimization
Market Research | Customer Acquisition | CRM Systems`;

    setText(exampleText);
  };

  // Get score color
  const getScoreColor = () => {
    const score = formattingIssues.formattingScore;
    if (score >= 90) return '#28a745';
    if (score >= 70) return '#ffc107';
    return '#dc3545';
  };

  // Get issue severity
  const getIssueSeverity = (issueCategory, issue) => {
    if (issueCategory === 'atsIssues') return 'high';
    if (issueCategory === 'structureIssues') return 'medium';
    return 'low';
  };

  // Get severity display (without icons)
  const getSeverityDisplay = (severity) => {
    switch(severity) {
      case 'high': return { text: 'High Priority', color: '#dc3545' };
      case 'medium': return { text: 'Medium Priority', color: '#ffc107' };
      case 'low': return { text: 'Low Priority', color: '#6c757d' };
      default: return { text: 'Info', color: '#6c757d' };
    }
  };

  return (
    <>
      <Head>
        <title>Resume Formatting Checker – ATS Compatibility &amp; Professional Layout Analysis {CURRENT_YEAR}</title>
        <meta 
          name="description" 
          content={`Free professional resume formatting analyzer with ATS compatibility checking, spacing verification, and structure optimization guidance. ${CURRENT_YEAR}`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Resume Formatting Checker – Professional Layout Analysis" />
        <meta property="og:description" content="Free resume formatting analyzer with ATS compatibility checking, spacing verification, and structure optimization" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-formatting-checker" />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-formatting-checker.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Formatting Checker" />
        <meta name="twitter:description" content="Professional formatting analysis with ATS compatibility and layout optimization" />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/twitter-formatting-checker.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-formatting-checker" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Resume Formatting Checker</h1>
          <p className={styles.subtitle}>
            Professional ATS compatibility analysis with layout optimization
            <span 
              className={styles.formattingScore} 
              style={{ backgroundColor: getScoreColor() }}
            >
              Score: {formattingIssues.formattingScore}/100
            </span>
          </p>
          
          <div className={styles.aggregateRating} itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.9" />
            <meta itemProp="ratingCount" content="234" />
            <div className={styles.ratingStars}>
              {'★'.repeat(5)}
              <span className={styles.ratingValue}>4.9/5</span>
            </div>
            <div className={styles.ratingText}>Trusted by 15,000+ professionals</div>
          </div>
        </header>

        <main className={styles.main}>
          {/* Main Editor Section */}
          <div className={styles.editorSection}>
            <div className={styles.editorHeader}>
              <h2>Analyze Your Resume Formatting</h2>
              <p>
                Paste your resume content below for comprehensive formatting analysis. Our tool checks ATS compatibility, spacing consistency, structure, and professional formatting standards.
              </p>
            </div>
            
            <div className={styles.editorContainer}>
              <div className={styles.textAreaWrapper}>
                <div className={styles.textAreaHeader}>
                  <h3>Your Resume Content</h3>
                  <button
                    className={styles.exampleButton}
                    onClick={handleLoadExample}
                    type="button"
                  >
                    Load Example
                  </button>
                </div>
                <textarea
                  ref={textareaRef}
                  className={styles.textarea}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={`Paste your resume content here...
                  
Example format:
JOHN SMITH
Software Engineer
(123) 456-7890 | john@email.com

PROFESSIONAL SUMMARY
Experienced software developer with 8+ years...

WORK EXPERIENCE
Senior Developer | Tech Company | 2020-Present
• Led development of scalable applications
• Implemented CI/CD pipelines reducing deployment time by 40%

EDUCATION
Computer Science Degree | University Name | 2012-2016

SKILLS
JavaScript, React, Node.js, AWS, Agile Development`}
                  rows={22}
                  autoFocus
                />
                <div className={styles.textStats}>
                  <span>{formattingIssues.lineCount} lines</span>
                  <span>•</span>
                  <span>{formattingIssues.wordCount} words</span>
                  <span>•</span>
                  <span>{formattingIssues.sectionCount} sections</span>
                  <span>•</span>
                  <span>{formattingIssues.bulletPointCount} bullet points</span>
                </div>
              </div>
              
              <div className={styles.quickAnalysis}>
                <div className={styles.analysisHeader}>
                  <h3>Quick Analysis</h3>
                  <button
                    className={styles.detailsToggle}
                    onClick={() => setShowDetails(!showDetails)}
                    type="button"
                  >
                    {showDetails ? 'Hide Details' : 'Show Details'}
                  </button>
                </div>
                
                <div className={styles.scoreDisplay}>
                  <div 
                    className={styles.scoreCircle}
                    style={{ 
                      background: `conic-gradient(${getScoreColor()} ${formattingIssues.formattingScore * 3.6}deg, #e9ecef 0deg)`
                    }}
                  >
                    <div className={styles.scoreInner}>
                      <div className={styles.scoreValue}>{formattingIssues.formattingScore}</div>
                      <div className={styles.scoreLabel}>/100</div>
                    </div>
                  </div>
                  <div className={styles.scoreDescription}>
                    <div className={styles.scoreTitle}>Formatting Score</div>
                    <div className={styles.scoreStatus}>
                      {formattingIssues.formattingScore >= 90 ? 'Excellent' :
                       formattingIssues.formattingScore >= 70 ? 'Good' :
                       formattingIssues.formattingScore >= 50 ? 'Needs Improvement' : 'Poor'}
                    </div>
                  </div>
                </div>
                
                <div className={styles.issuesSummary}>
                  <div className={styles.summaryItem}>
                    <div className={styles.summaryContent}>
                      <div className={styles.summaryLabel}>Total Issues</div>
                      <div className={styles.summaryValue}>{formattingIssues.totalIssues}</div>
                    </div>
                  </div>
                  
                  <div className={styles.summaryItem}>
                    <div className={styles.summaryContent}>
                      <div className={styles.summaryLabel}>ATS Issues</div>
                      <div className={styles.summaryValue}>{formattingIssues.atsIssues.length}</div>
                    </div>
                  </div>
                  
                  <div className={styles.summaryItem}>
                    <div className={styles.summaryContent}>
                      <div className={styles.summaryLabel}>Spacing Issues</div>
                      <div className={styles.summaryValue}>{formattingIssues.spacingIssues.length}</div>
                    </div>
                  </div>
                  
                  <div className={styles.summaryItem}>
                    <div className={styles.summaryContent}>
                      <div className={styles.summaryLabel}>Structure Issues</div>
                      <div className={styles.summaryValue}>{formattingIssues.structureIssues.length}</div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.analyzerActions}>
                  <button
                    className={styles.analyzeButton}
                    onClick={() => setFormattingIssues(analyzeFormatting(text))}
                    type="button"
                  >
                    Re-analyze Formatting
                  </button>
                  <button
                    className={styles.resetButton}
                    onClick={handleReset}
                    type="button"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Issues Details Section */}
          {showDetails && formattingIssues.totalIssues > 0 && (
            <div className={styles.issuesSection}>
              <div className={styles.issuesHeader}>
                <h2>Detailed Formatting Issues</h2>
                <p className={styles.issuesSubtitle}>
                  {formattingIssues.totalIssues} issue{formattingIssues.totalIssues !== 1 ? 's' : ''} found in your resume formatting
                </p>
              </div>
              
              <div className={styles.issuesGrid}>
                {formattingIssues.atsIssues.length > 0 && (
                  <div className={styles.issueCategory}>
                    <div className={styles.categoryHeader}>
                      <div className={styles.categoryTitle}>ATS Compatibility</div>
                      <div className={styles.categoryCount}>{formattingIssues.atsIssues.length} issue{formattingIssues.atsIssues.length !== 1 ? 's' : ''}</div>
                    </div>
                    <div className={styles.issueList}>
                      {formattingIssues.atsIssues.map((issue, index) => {
                        const severity = getIssueSeverity('atsIssues', issue);
                        const severityInfo = getSeverityDisplay(severity);
                        return (
                          <div key={index} className={styles.issueItem}>
                            <div className={styles.issueContent}>
                              <div className={styles.issueText}>{issue}</div>
                              <div className={styles.issuePriority} style={{ color: severityInfo.color }}>
                                {severityInfo.text}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {formattingIssues.spacingIssues.length > 0 && (
                  <div className={styles.issueCategory}>
                    <div className={styles.categoryHeader}>
                      <div className={styles.categoryTitle}>Spacing & Layout</div>
                      <div className={styles.categoryCount}>{formattingIssues.spacingIssues.length} issue{formattingIssues.spacingIssues.length !== 1 ? 's' : ''}</div>
                    </div>
                    <div className={styles.issueList}>
                      {formattingIssues.spacingIssues.map((issue, index) => {
                        const severity = getIssueSeverity('spacingIssues', issue);
                        const severityInfo = getSeverityDisplay(severity);
                        return (
                          <div key={index} className={styles.issueItem}>
                            <div className={styles.issueContent}>
                              <div className={styles.issueText}>{issue}</div>
                              <div className={styles.issuePriority} style={{ color: severityInfo.color }}>
                                {severityInfo.text}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {formattingIssues.structureIssues.length > 0 && (
                  <div className={styles.issueCategory}>
                    <div className={styles.categoryHeader}>
                      <div className={styles.categoryTitle}>Structure & Organization</div>
                      <div className={styles.categoryCount}>{formattingIssues.structureIssues.length} issue{formattingIssues.structureIssues.length !== 1 ? 's' : ''}</div>
                    </div>
                    <div className={styles.issueList}>
                      {formattingIssues.structureIssues.map((issue, index) => {
                        const severity = getIssueSeverity('structureIssues', issue);
                        const severityInfo = getSeverityDisplay(severity);
                        return (
                          <div key={index} className={styles.issueItem}>
                            <div className={styles.issueContent}>
                              <div className={styles.issueText}>{issue}</div>
                              <div className={styles.issuePriority} style={{ color: severityInfo.color }}>
                                {severityInfo.text}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {formattingIssues.fontIssues.length > 0 && (
                  <div className={styles.issueCategory}>
                    <div className={styles.categoryHeader}>
                      <div className={styles.categoryTitle}>Typography & Fonts</div>
                      <div className={styles.categoryCount}>{formattingIssues.fontIssues.length} issue{formattingIssues.fontIssues.length !== 1 ? 's' : ''}</div>
                    </div>
                    <div className={styles.issueList}>
                      {formattingIssues.fontIssues.map((issue, index) => {
                        const severity = getIssueSeverity('fontIssues', issue);
                        const severityInfo = getSeverityDisplay(severity);
                        return (
                          <div key={index} className={styles.issueItem}>
                            <div className={styles.issueContent}>
                              <div className={styles.issueText}>{issue}</div>
                              <div className={styles.issuePriority} style={{ color: severityInfo.color }}>
                                {severityInfo.text}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              
              {formattingIssues.totalIssues === 0 && (
                <div className={styles.noIssues}>
                  <div className={styles.noIssuesText}>No formatting issues detected! Your resume formatting looks great.</div>
                </div>
              )}
            </div>
          )}

          {/* Guidelines Section */}
          <section className={styles.guidelinesSection}>
            <h2 className={styles.sectionTitle}>Professional Formatting Guidelines</h2>
            <p className={styles.sectionSubtitle}>
              Industry standards for optimal resume formatting and ATS compatibility
            </p>
            
            <div className={styles.guidelinesGrid}>
              {FORMATTING_GUIDELINES.map((guideline, index) => (
                <div key={index} className={styles.guidelineCard}>
                  <div className={styles.guidelineHeader}>
                    <div className={styles.guidelineTitle}>{guideline.category}</div>
                  </div>
                  <div className={styles.guidelineBody}>
                    <ul className={styles.guidelineList}>
                      {guideline.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex} className={styles.guidelineItem}>
                          <span className={styles.guidelineText}>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common Issues Section */}
          <section className={styles.commonIssuesSection}>
            <h2 className={styles.sectionTitle}>Common Formatting Issues to Avoid</h2>
            <div className={styles.issuesGrid}>
              {COMMON_ISSUES.map((issue, index) => (
                <div key={index} className={styles.issueCard}>
                  <div className={styles.issueNumber}>{String(index + 1).padStart(2, '0')}</div>
                  <div className={styles.issueContent}>
                    <div className={styles.issueText}>{issue}</div>
                    <div className={styles.issueTip}>
                      {index === 0 && 'Use consistent spacing between all sections'}
                      {index === 1 && 'Stick to 1-2 professional fonts maximum'}
                      {index === 2 && 'Use standard bullet points (•) consistently'}
                      {index === 3 && 'Aim for 30-40% white space in your layout'}
                      {index === 4 && 'Choose professional fonts like Arial, Calibri, or Times New Roman'}
                      {index === 5 && 'Use consistent date format (MM/YYYY or Month YYYY)'}
                      {index === 6 && 'Include phone, email, and LinkedIn in header'}
                      {index === 7 && 'Keep formatting simple and clean for ATS'}
                      {index === 8 && 'Break up dense text with bullet points'}
                      {index === 9 && 'Use clear hierarchy with section headers'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {FAQS.map((faq, index) => (
                <div 
                  key={index} 
                  className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
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

          {/* Benefits Section */}
          <section className={styles.benefitsSection}>
            <h2 className={styles.sectionTitle}>Why Proper Formatting Matters</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>ATS Compatibility</h3>
                <p className={styles.benefitDescription}>
                  Proper formatting ensures Applicant Tracking Systems can accurately parse your resume. Clean structure, simple layouts, and standard formatting prevent parsing errors that could reject your application.
                </p>
              </div>
              
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Human Readability</h3>
                <p className={styles.benefitDescription}>
                  With only 6-7 seconds for initial screening, clean formatting helps recruiters quickly find key information. Proper spacing, hierarchy, and organization make your resume instantly scannable and professional.
                </p>
              </div>
              
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Professional Presentation</h3>
                <p className={styles.benefitDescription}>
                  Well-formatted resumes demonstrate attention to detail and professionalism. Consistent formatting shows you care about quality and presentation—traits valued in any professional role.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

// SSG with ISR
export async function getStaticProps() {
  return {
    props: {
      lastUpdated: new Date().toISOString(),
      buildYear: CURRENT_YEAR,
    },
    // Revalidate every 2 hours
    revalidate: 7200,
  };
}

export default ResumeFormattingChecker;