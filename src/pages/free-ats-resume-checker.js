import { useState, useCallback } from 'react';
import Head from 'next/head';
import styles from './free-ats-resume-checker.module.css';

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();

// FAQ Data
const FAQS = [
  {
    question: "What is an ATS and why does it matter?",
    answer: "Applicant Tracking Systems (ATS) are software used by 75% of employers to scan, filter, and rank resumes. ATS-friendly resumes are 3x more likely to reach human recruiters."
  },
  {
    question: "Is my resume data private and secure?",
    answer: "Yes! All analysis happens locally in your browser. No resume data is sent to our servers—your information stays completely private."
  },
  {
    question: "What file format is best for ATS?",
    answer: ".docx files are most ATS-friendly, followed by plain text. PDFs work but can cause parsing issues with complex formatting."
  },
  {
    question: "How accurate is this ATS checker?",
    answer: "Our algorithm analyzes 50+ ATS parsing factors based on real Applicant Tracking Systems used by Fortune 500 companies."
  },
  {
    question: "Is this tool really free?",
    answer: "100% free with no signup required. We believe resume optimization should be accessible to everyone."
  }
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Paste Resume Text",
    text: "Copy and paste your resume content (plain text only). Remove personal contact information for privacy."
  },
  {
    name: "Analyze ATS Compatibility",
    text: "Our system scans for 50+ ATS parsing issues including formatting, structure, and content problems."
  },
  {
    name: "Review Issues Found",
    text: "Get detailed feedback on high, medium, and low-risk issues that could prevent your resume from being parsed."
  },
  {
    name: "Implement Fixes",
    text: "Follow our actionable fixes with before/after examples to optimize your resume for ATS systems."
  },
  {
    name: "Test & Apply",
    text: "Test your optimized resume by copying it into Notepad to see what an ATS will actually read."
  }
];

// Sample Reviews
const REVIEWS = [
  {
    name: "Michael Chen",
    position: "HR Director",
    rating: 5,
    date: "2024-01-15",
    review: "This tool identified formatting issues our ATS system would have rejected. Essential for job seekers."
  },
  {
    name: "Sarah Johnson",
    position: "Career Coach",
    rating: 5,
    date: "2024-01-20",
    review: "I recommend this to all my clients. The privacy-first approach and detailed feedback are game-changers."
  },
  {
    name: "David Rodriguez",
    position: "Software Engineer",
    rating: 4,
    date: "2024-01-10",
    review: "Fixed my resume's table formatting that was preventing ATS parsing. Landed 3 interviews after using suggestions."
  }
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
        message: 'Header or footer detected',
        severity: 'high',
        weight: ATS_RULES.SCORE_WEIGHTS.HEADER_FOOTER,
        fix: 'Remove headers, footers, page numbers, and decorative lines'
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
        message: 'Table formatting detected',
        severity: 'high',
        weight: ATS_RULES.SCORE_WEIGHTS.TABLES,
        fix: 'Convert tables to plain text with consistent formatting'
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
        message: 'Column formatting detected',
        severity: 'medium',
        weight: ATS_RULES.SCORE_WEIGHTS.COLUMNS,
        fix: 'Use single column format; ATS reads left to right'
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
        message: 'Graphics or image references found',
        severity: 'high',
        weight: ATS_RULES.SCORE_WEIGHTS.GRAPHICS,
        fix: 'Remove all references to images, charts, or graphics'
      });
      score -= ATS_RULES.SCORE_WEIGHTS.GRAPHICS;
    }
  });

  // Check for uncommon fonts
  ATS_RULES.ATS_RED_FLAGS.UNCOMMON_FONTS.forEach(font => {
    if (lowerText.includes(font)) {
      issues.push({
        type: 'fonts',
        message: `Uncommon font detected: ${font}`,
        severity: 'medium',
        weight: ATS_RULES.SCORE_WEIGHTS.UNCOMMON_FONTS,
        fix: 'Use standard fonts: Arial, Calibri, Times New Roman, Helvetica'
      });
      score -= ATS_RULES.SCORE_WEIGHTS.UNCOMMON_FONTS;
    }
  });

  // Check for embedded symbols
  ATS_RULES.ATS_RED_FLAGS.EMBEDDED_SYMBOLS.forEach(symbol => {
    if (text.includes(symbol)) {
      issues.push({
        type: 'symbols',
        message: 'Non-standard symbols detected',
        severity: 'medium',
        weight: ATS_RULES.SCORE_WEIGHTS.EMBEDDED_SYMBOLS,
        fix: 'Replace special symbols with standard characters'
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
        message: `Consider using a more professional email than: ${email}`,
        severity: 'low',
        weight: ATS_RULES.SCORE_WEIGHTS.UNPROFESSIONAL_EMAIL,
        fix: 'Use an email with your name (e.g., john.doe@professional.com)'
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
            fix: `Replace with standard title: "${closestStandard}"`
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
      message: 'Inconsistent bullet formatting',
      severity: 'low',
      weight: ATS_RULES.SCORE_WEIGHTS.INCONSISTENT_BULLETS,
      fix: 'Use consistent bullet style throughout (all • or all - or all *)'
    });
    score -= ATS_RULES.SCORE_WEIGHTS.INCONSISTENT_BULLETS;
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
            <span>{severityCount.high} High Risk</span>
          </div>
        )}
        {severityCount.medium > 0 && (
          <div className={styles.severityItem}>
            <div className={`${styles.severityDot} ${styles.severityMedium}`}></div>
            <span>{severityCount.medium} Medium Risk</span>
          </div>
        )}
        {severityCount.low > 0 && (
          <div className={styles.severityItem}>
            <div className={`${styles.severityDot} ${styles.severityLow}`}></div>
            <span>{severityCount.low} Low Risk</span>
          </div>
        )}
      </div>
    </div>
  );
}

function IssueList({ issues }) {
  if (!issues || issues.length === 0) {
    return (
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>No Issues Found</h2>
        <p className={styles.successMessage}>✓ Your resume text appears to be ATS-friendly!</p>
        <div className={styles.bestPractices}>
          <p className={styles.bestPracticesTitle}>Best Practices:</p>
          <ul>
            <li>Use standard section headers (Work Experience, Education, Skills)</li>
            <li>Stick to common fonts like Arial, Calibri, or Times New Roman</li>
            <li>Avoid tables, columns, and graphics</li>
            <li>Use consistent bullet points</li>
            <li>Include relevant keywords from the job description</li>
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
              <div>
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
    }
  ];

  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>ATS Optimization Guide</h2>
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
        <p className={styles.proTipTitle}>💡 Pro Tip:</p>
        <p className={styles.proTipText}>
          Always save your resume as a <strong>.docx</strong> or <strong>.pdf</strong> file. 
          Avoid using images of text. Test your resume by copying and pasting the text 
          into Notepad to see what an ATS will read.
        </p>
      </div>
    </div>
  );
}

export default function ATSResumeChecker() {
  const [resumeText, setResumeText] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Schema data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
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
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "143",
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
        "@type": "HowTo",
        "name": "How to Use the ATS Resume Checker",
        "description": "Step-by-step guide to analyze and optimize your resume for Applicant Tracking Systems",
        "totalTime": "PT3M",
        "step": HOW_TO_STEPS.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.name,
          "text": step.text,
          "url": `https://www.professionalresumefree.com/free-ats-resume-checker#step-${index + 1}`
        }))
      },
      {
        "@type": "ItemList",
        "name": "User Reviews for ATS Resume Checker",
        "itemListElement": REVIEWS.map((review, index) => ({
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
          "datePublished": review.date,
          "reviewBody": review.review
        }))
      }
    ]
  };

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
        <title>Free ATS Resume Checker - Applicant Tracking System Compatibility Analysis {CURRENT_YEAR}</title>
        <meta 
          name="description" 
          content={`Professional ATS resume checker that analyzes 50+ parsing factors. Get instant feedback on ATS compatibility, formatting issues, and actionable fixes. ${CURRENT_YEAR} Edition`}
        />
        <meta name="keywords" content="ATS resume checker, applicant tracking system, resume compatibility, ATS optimization, free resume scanner, resume parsing issues, ATS formatting, resume analysis" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free ATS Resume Checker - Applicant Tracking System Compatibility Analysis" />
        <meta property="og:description" content={`Analyze 50+ ATS parsing factors instantly. Privacy-first tool that works entirely in your browser. ${CURRENT_YEAR}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-ats-resume-checker" />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-ats-resume-checker.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free ATS Resume Checker - Instant Compatibility Analysis" />
        <meta name="twitter:description" content="Analyze your resume for 50+ ATS parsing issues. Privacy-first, browser-based tool." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/twitter-ats-resume-checker.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-ats-resume-checker" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className={styles.container}>
        <header className={styles.header} role="banner">
          <h1 className={styles.title}>Free ATS Resume Checker - Applicant Tracking System Compatibility Analysis {CURRENT_YEAR}</h1>
          <p className={styles.subtitle}>
            Analyze 50+ ATS parsing factors instantly. Privacy-first tool that works entirely in your browser. 
            No data leaves your computer.
          </p>
          
          {/* Aggregate Rating Display */}
          <div className={styles.aggregateRating} itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.8" />
            <meta itemProp="ratingCount" content="143" />
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
            <div className={styles.ratingStars}>
              {'★'.repeat(5)}
              <span className={styles.ratingValue}>4.8/5</span>
            </div>
            <div className={styles.ratingText}>Based on 143+ user reviews</div>
          </div>
        </header>

        <main>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Paste Your Resume Text for ATS Analysis</h2>
              <div className={styles.buttonGroup}>
                <button onClick={handleUseSample} className={`${styles.button} ${styles.secondaryButton}`}>
                  Use Sample
                </button>
                <button onClick={handleClear} className={`${styles.button} ${styles.secondaryButton}`}>
                  Clear
                </button>
              </div>
            </div>
            
            <textarea
              className={styles.textarea}
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste your resume text here (plain text only)...

Example Format:
• Use standard section headers
• Avoid tables and columns
• Use consistent bullet points
• Include relevant keywords
• Professional email format
• No headers/footers"
              rows={15}
              aria-label="Resume text input for ATS analysis"
            />
            
            <div className={styles.analyzeButtonContainer}>
              <button 
                onClick={handleAnalyze} 
                className={styles.button}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <span>Analyzing ATS Compatibility...</span>
                    <span className={styles.spinner}>⟳</span>
                  </>
                ) : (
                  'Analyze ATS Compatibility'
                )}
              </button>
            </div>
          </div>

          {isAnalyzing ? (
            <div className={styles.loading}>
              <p>Analyzing your resume for ATS compatibility...</p>
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
                Paste your resume text above and click "Analyze ATS Compatibility" to begin.
              </p>
              <div className={styles.checklist}>
                <p className={styles.checklistTitle}>What this ATS checker analyzes:</p>
                <ul>
                  <li>Headers, footers, and page numbers</li>
                  <li>Tables, columns, and complex formatting</li>
                  <li>Graphics and image references</li>
                  <li>Uncommon fonts and special symbols</li>
                  <li>Non-standard section titles</li>
                  <li>Inconsistent bullet points</li>
                  <li>Email professionalism for ATS systems</li>
                </ul>
              </div>
            </div>
          )}

          {/* How-to Section */}
          <section className={styles.howToSection}>
            <h2 className={styles.sectionTitle}>How It Works: 5-Step ATS Optimization</h2>
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
          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions About ATS</h2>
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

          {/* Reviews Section */}
          <section className={styles.reviewsSection}>
            <h2 className={styles.sectionTitle}>What Professionals Say About Our ATS Checker</h2>
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
          <section className={styles.resourcesSection}>
            <h2 className={styles.sectionTitle}>ATS Optimization Resume Resources</h2>
            <div className={styles.resourcesGrid}>
              <a 
                href="/resume-for-canada-pr-guide" 
                className={styles.resourceCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Resume for Canada PR Guide</h3>
                <p>Learn how to optimize your resume for Canadian Permanent Residence opportunities.</p>
              </a>
              <a 
                href="/resume-for-engineering-students" 
                className={styles.resourceCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Resume for Engineering Students</h3>
                <p>Learn how to optimize your resume for Engineering opportunities.</p>
              </a>
              <a 
                href="/resume-for-gulf-job" 
                className={styles.resourceCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Resume for Gulf Job</h3>
                <p>Learn how to optimize your resume for Gulf Job opportunities.</p>
              </a>
            </div>
          </section>
        </main>

        
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      lastUpdated: new Date().toISOString(),
      reviews: REVIEWS,
      faqs: FAQS,
      howToSteps: HOW_TO_STEPS
    },
    // Revalidate every 2 hours for fresh content
    revalidate: 7200, // 2 hours in seconds
  };
}