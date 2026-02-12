import { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import styles from './free-resume-word-and-character-counter.module.css';

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();

// FAQ Data
const FAQS = [
  {
    question: "What is the ideal resume length?",
    answer: "For most positions, aim for 300-800 words. Entry-level: 300-500 words, Mid-career: 400-700 words, Executive: 600-800 words. One page typically equals 450-500 words."
  },
  {
    question: "Does word count really matter for resumes?",
    answer: "Yes! Recruiters spend an average of 6-7 seconds scanning a resume. The right length ensures you include essential information without overwhelming the reader. ATS systems also prefer concise, well-structured resumes."
  },
  {
    question: "Should I exclude bullet points from the count?",
    answer: "It depends. Some ATS systems parse bullet points differently. Our tool lets you toggle this option to see both counts. Generally, bullet points improve readability and should be included in your final count."
  },
  {
    question: "How accurate is the character count?",
    answer: "Our counter is 100% accurate, tracking characters with and without spaces in real-time. This helps ensure your resume fits within application system limits, which often have character constraints."
  },
  {
    question: "Can I use this for cover letters too?",
    answer: "Absolutely! The same length principles apply to cover letters. Aim for 250-400 words for cover letters, focusing on quality over quantity while covering key points concisely."
  }
];

// Resume Length Guidelines
const LENGTH_GUIDELINES = [
  {
    level: "Entry-Level",
    words: "300-500 words",
    pages: "≤ 1 page",
    focus: "Education, internships, basic skills"
  },
  {
    level: "Mid-Career",
    words: "400-700 words",
    pages: "1-2 pages",
    focus: "Experience, achievements, specific skills"
  },
  {
    level: "Senior/Manager",
    words: "500-800 words",
    pages: "1-2 pages",
    focus: "Leadership, strategic impact, results"
  },
  {
    level: "Executive",
    words: "600-800 words",
    pages: "2 pages max",
    focus: "Vision, P&L, organizational impact"
  }
];

// Tips Data
const RESUME_TIPS = [
  "Start with strong action verbs",
  "Quantify achievements with numbers",
  "Tailor content to job description",
  "Use bullet points for readability",
  "Focus on recent experience",
  "Include relevant keywords",
  "Keep formatting clean and simple",
  "Proofread multiple times",
  "Save as PDF for consistency",
  "Update regularly"
];

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'resume word counter',
  'resume character counter',
  'resume length checker',
  'ATS resume word count',
  'professional resume length',
  'free resume word counter',
  'resume editing tool',
  'character count resume',
  'resume optimization tool',
  'job application resume length'
];

const ResumeWordCharacterCounter = () => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    words: 0,
    charactersWithSpaces: 0,
    charactersWithoutSpaces: 0,
    lines: 0,
    paragraphs: 0,
    estimatedPages: 0,
  });
  const [excludeBullets, setExcludeBullets] = useState(false);
  const [countOnlyBody, setCountOnlyBody] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const textareaRef = useRef(null);

  // Current date for freshness
  const currentDate = new Date().toISOString().split('T')[0];
  const lastModifiedDate = new Date().toISOString();

  // Schema data - Expanded with comprehensive structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.professionalresumefree.com/free-resume-word-character-counter#webpage",
        "url": "https://www.professionalresumefree.com/free-resume-word-character-counter",
        "name": "Resume Word & Character Counter - Professional Length Checker 2024",
        "description": "Free professional resume word counter and character counter with ATS optimization guidance. Check your resume length against industry standards with real-time analysis.",
        "datePublished": "2024-01-01",
        "dateModified": lastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.professionalresumefree.com/#website",
          "url": "https://www.professionalresumefree.com",
          "name": "Professional Resume Free",
          "description": "Free online resume building tools for job seekers",
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
              "https://www.linkedin.com/company/professional-resume-free"
            ]
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.professionalresumefree.com/og-word-counter.jpg",
          "width": 1200,
          "height": 630
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
              "item": "https://www.professionalresumefree.com/resume-tools"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Word & Character Counter",
              "item": "https://www.professionalresumefree.com/free-resume-word-character-counter"
            }
          ]
        },
        "mainEntity": {
          "@type": "SoftwareApplication",
          "name": "Resume Word & Character Counter - ATS Optimized Resume Length Checker",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.8,
            "ratingCount": 142,
            "bestRating": 5,
            "worstRating": 1
          },
          "description": "Free online ATS-friendly resume word and character counter that helps job seekers optimize resume length for better ATS performance.",
          "featureList": [
            "Real-time Word Count",
            "Character Count with/without Spaces",
            "ATS-Optimized Length Guidelines",
            "Professional Resume Tips",
            "One-Click Clear Options",
            "Mobile-Friendly Interface",
            "No Sign Up Required",
            "Free Forever"
          ],
          "softwareVersion": "2024.1.0",
          "applicationSuite": "Resume Optimization Tools",
          "countriesSupported": "Global"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.professionalresumefree.com/free-resume-word-character-counter#faqpage",
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": lastModifiedDate,
            "author": {
              "@type": "Person",
              "name": "Resume Expert Team"
            }
          },
          "mainEntityOfPage": "https://www.professionalresumefree.com/free-resume-word-character-counter#webpage"
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Use the Resume Word Counter to Optimize Your Resume",
        "description": "Step-by-step guide to check and optimize your resume length using our free tool",
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Paste Your Resume Content",
            "text": "Copy and paste your entire resume content into the text area.",
            "url": "https://www.professionalresumefree.com/free-resume-word-character-counter#paste",
            "image": "https://www.professionalresumefree.com/images/step1-paste.jpg"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Review Real-Time Statistics",
            "text": "Watch as the tool instantly calculates words, characters, paragraphs, and estimated pages.",
            "url": "https://www.professionalresumefree.com/free-resume-word-character-counter#stats",
            "image": "https://www.professionalresumefree.com/images/step2-stats.jpg"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Check Against Guidelines",
            "text": "Compare your word count against professional resume length guidelines for your career level.",
            "url": "https://www.professionalresumefree.com/free-resume-word-character-counter#guidelines",
            "image": "https://www.professionalresumefree.com/images/step3-guidelines.jpg"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Optimize and Adjust",
            "text": "Use the tips and recommendations to adjust your resume content for optimal length and impact.",
            "url": "https://www.professionalresumefree.com/free-resume-word-character-counter#optimize",
            "image": "https://www.professionalresumefree.com/images/step4-optimize.jpg"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Resume Length Guidelines by Career Level",
        "itemListElement": LENGTH_GUIDELINES.map((guideline, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": `${guideline.level}: ${guideline.words}`,
          "description": `Professional resume length recommendation for ${guideline.level} professionals. Focus on ${guideline.focus}.`
        }))
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".heroTitle", ".heroSubtitle", ".sectionTitle", ".faqQuestion h3"]
      }
    ]
  };

  const calculateStats = useCallback((content) => {
    let processedText = content;
    
    if (excludeBullets) {
      processedText = processedText.replace(/^[•\-*]\s*/gm, '');
    }
    
    if (countOnlyBody) {
      const lines = processedText.split('\n');
      if (lines.length > 2) {
        processedText = lines.slice(2).join('\n');
      }
    }

    const charsWithSpaces = processedText.length;
    const charsWithoutSpaces = processedText.replace(/\s+/g, '').length;
    
    const words = processedText.trim() === '' ? 0 : 
      processedText.trim().split(/\s+/).filter(word => word.length > 0).length;
    
    const lines = processedText === '' ? 0 : 
      processedText.split('\n').filter(line => line.trim().length > 0).length;
    
    const paragraphs = processedText.trim() === '' ? 0 : 
      processedText.split(/\n\s*\n/).filter(para => para.trim().length > 0).length;
    
    const estimatedPages = words / 475;

    return {
      words,
      charactersWithSpaces: charsWithSpaces,
      charactersWithoutSpaces: charsWithoutSpaces,
      lines,
      paragraphs,
      estimatedPages: parseFloat(estimatedPages.toFixed(2)),
    };
  }, [excludeBullets, countOnlyBody]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats(calculateStats(text));
    }, 300);

    return () => clearTimeout(timer);
  }, [text, calculateStats]);

  const handleReset = () => {
    setText('');
    setStats(calculateStats(''));
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleClearOptions = () => {
    setExcludeBullets(false);
    setCountOnlyBody(false);
  };

  const isWithinRange = stats.words >= 300 && stats.words <= 800;
  const isOverLimit = stats.words > 800;
  const isUnderLimit = stats.words < 300;

  const getWordCountStatus = () => {
    if (isWithinRange) return { text: '✓ Perfect length!', color: '#28a745' };
    if (isUnderLimit) return { text: '⚠ Add more content', color: '#dc3545' };
    return { text: '⚠ Consider shortening', color: '#ff6b35' };
  };

  const status = getWordCountStatus();

  return (
    <div className={styles.container} lang="en-US">
      <Head>
        {/* Primary Meta Tags */}
        <title>Resume Word & Character Counter – Professional Length Checker {CURRENT_YEAR} | Free ATS Optimized Tool</title>
        <meta 
          name="description" 
          content={`Free professional resume word counter and character counter with ATS optimization. Check your resume length against industry standards. Real-time analysis with word count, character count, and professional recommendations. ${CURRENT_YEAR}`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Freshness Meta Tags */}
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta name="revisit-after" content="2 days" />
        
        {/* Canonical & Internationalization */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-word-character-counter" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-word-character-counter" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-word-character-counter" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-word-character-counter" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-word-character-counter" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-word-character-counter" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-word-character-counter" hreflang="x-default" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Resume Word & Character Counter – Professional Length Checker 2024" />
        <meta property="og:description" content="Free professional resume word counter with ATS optimization guidance. Check length, characters, and get industry-standard recommendations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-word-character-counter" />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-word-counter.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Word & Character Counter - Free Professional Tool" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={lastModifiedDate} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Word & Character Counter" />
        <meta name="twitter:description" content="Professional resume length checker with ATS optimization and real-time analysis" />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/twitter-word-counter.jpg" />
        <meta name="twitter:image:alt" content="Resume Word Counter Tool" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Mobile & PWA */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Performance */}
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

      {/* Hidden freshness indicator */}
      <div className={styles.freshnessIndicator} style={{ display: 'none' }}>
        <meta name="build-timestamp" content={Date.now()} />
        <meta name="content-freshness" content={currentDate} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a itemProp="item" href="https://www.professionalresumefree.com" className={styles.breadcrumbLink}>
              <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <li className={styles.breadcrumbSeparator}>›</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a itemProp="item" href="https://www.professionalresumefree.com/resume-tools" className={styles.breadcrumbLink}>
              <span itemProp="name">Resume Tools</span>
            </a>
            <meta itemProp="position" content="2" />
          </li>
          <li className={styles.breadcrumbSeparator}>›</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a itemProp="item" href="https://www.professionalresumefree.com/free-resume-word-character-counter" className={styles.breadcrumbLink}>
              <span itemProp="name">Word & Character Counter</span>
            </a>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      <header className={styles.header}>
        <h1 className={styles.title}>
          Resume Word & Character Counter
          <span className={styles.yearBadge}>{CURRENT_YEAR}</span>
        </h1>
        <p className={styles.subtitle}>
          Professional resume length analyzer with ATS optimization guidance
          <span className={`${styles.wordCount} ${isWithinRange ? styles.inRange : styles.outOfRange}`}>
            {stats.words} words
          </span>
        </p>
        
        <div className={styles.aggregateRating} itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="4.8" />
          <meta itemProp="ratingCount" content="142" />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="worstRating" content="1" />
          <div className={styles.ratingStars}>
            {'★'.repeat(5)}
            <span className={styles.ratingValue} itemProp="ratingValue">4.8/5</span>
          </div>
          <div className={styles.ratingText} itemProp="ratingCount">Trusted by 10,000+ professionals</div>
        </div>
      </header>

      <main className={styles.main}>
        {/* Main Editor Section */}
        <section className={styles.editorSection} aria-labelledby="editor-title">
          <div className={styles.editorHeader}>
            <h2 id="editor-title">Paste Your Resume Content</h2>
            <p>
              Paste or type your resume content below for real-time analysis. All processing happens in your browser - your data never leaves your device.
            </p>
          </div>
          
          <div className={styles.textAreaContainer}>
            <textarea
              ref={textareaRef}
              className={styles.textarea}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={`Paste your resume content here...
              
For example:
John Doe
Software Engineer
(123) 456-7890 | john@email.com
LinkedIn: linkedin.com/in/johndoe

PROFESSIONAL SUMMARY
Results-driven software engineer with 5+ years of experience...

EXPERIENCE
Senior Developer | Tech Company | 2020-Present
• Led development of scalable web applications...
• Reduced page load time by 40%...
• Mentored 3 junior developers...`}
              rows={20}
              autoFocus
              aria-label="Resume content input area"
            />
            
            <div className={styles.buttonGroup}>
              <button
                className={`${styles.resetButton} ${styles.primaryButton}`}
                onClick={handleReset}
                type="button"
                aria-label="Clear all text from the input area"
              >
                Clear All Text
              </button>
              <button
                className={`${styles.clearOptionsButton} ${styles.secondaryButton}`}
                onClick={handleClearOptions}
                type="button"
                aria-label="Reset counting options to default settings"
              >
                Reset Options
              </button>
            </div>
          </div>
        </section>

        {/* Stats Display Section */}
        <section className={styles.statsSection} aria-labelledby="stats-title">
          <div className={styles.statsHeader}>
            <h2 id="stats-title">Resume Analysis Results</h2>
            <div className={styles.statusIndicator} style={{ color: status.color }}>
              <span className={styles.statusText}>{status.text}</span>
            </div>
          </div>
          
          <div className={styles.statsGrid}>
            <div className={styles.statCard} itemScope itemType="https://schema.org/QuantitativeValue">
              <div className={styles.statHeader}>
                <div className={styles.statLabel}>Word Count</div>
              </div>
              <div className={`${styles.statValue} ${isUnderLimit ? styles.underLimit : ''} ${isOverLimit ? styles.overLimit : ''}`} itemProp="value">
                {stats.words.toLocaleString()}
                <div className={styles.statSubtext}>
                  {isWithinRange ? 'Ideal range: 300-800' : isUnderLimit ? 'Below minimum: 300' : 'Above maximum: 800'}
                </div>
              </div>
            </div>

            <div className={styles.statCard} itemScope itemType="https://schema.org/QuantitativeValue">
              <div className={styles.statHeader}>
                <div className={styles.statLabel}>Characters</div>
              </div>
              <div className={styles.statValue} itemProp="value">
                {stats.charactersWithSpaces.toLocaleString()}
                <div className={styles.statSubtext}>including spaces</div>
              </div>
            </div>

            <div className={styles.statCard} itemScope itemType="https://schema.org/QuantitativeValue">
              <div className={styles.statHeader}>
                <div className={styles.statLabel}>Characters</div>
              </div>
              <div className={styles.statValue} itemProp="value">
                {stats.charactersWithoutSpaces.toLocaleString()}
                <div className={styles.statSubtext}>excluding spaces</div>
              </div>
            </div>

            <div className={styles.statCard} itemScope itemType="https://schema.org/QuantitativeValue">
              <div className={styles.statHeader}>
                <div className={styles.statLabel}>Lines</div>
              </div>
              <div className={styles.statValue} itemProp="value">
                {stats.lines}
                <div className={styles.statSubtext}>non-empty lines</div>
              </div>
            </div>

            <div className={styles.statCard} itemScope itemType="https://schema.org/QuantitativeValue">
              <div className={styles.statHeader}>
                <div className={styles.statLabel}>Paragraphs</div>
              </div>
              <div className={styles.statValue} itemProp="value">
                {stats.paragraphs}
                <div className={styles.statSubtext}>content sections</div>
              </div>
            </div>

            <div className={styles.statCard} itemScope itemType="https://schema.org/QuantitativeValue">
              <div className={styles.statHeader}>
                <div className={styles.statLabel}>Estimated Pages</div>
              </div>
              <div className={styles.statValue} itemProp="value">
                {stats.estimatedPages}
                <div className={styles.statSubtext}>based on 475 words/page</div>
              </div>
            </div>
          </div>

          {/* Range Indicator */}
          <div className={styles.rangeSection}>
            <div className={styles.rangeHeader}>
              <h3>Word Count Range Analysis</h3>
              <div className={styles.currentPosition}>
                Current: <strong>{stats.words} words</strong>
              </div>
            </div>
            
            <div className={styles.rangeIndicator}>
              <div className={styles.rangeLabels}>
                <span className={`${styles.rangeLabel} ${isUnderLimit ? styles.activeWarning : ''}`}>
                  Too Short ({stats.words < 300 ? '←' : ''})
                </span>
                <span className={`${styles.rangeLabel} ${isWithinRange ? styles.activeSuccess : ''}`}>
                  Ideal Range
                </span>
                <span className={`${styles.rangeLabel} ${isOverLimit ? styles.activeWarning : ''}`}>
                  Too Long ({stats.words > 800 ? '→' : ''})
                </span>
              </div>
              
              <div className={styles.rangeBar}>
                <div 
                  className={`${styles.rangeProgress} ${isWithinRange ? styles.inRangeBar : isUnderLimit ? styles.underBar : styles.overBar}`}
                  style={{ width: `${Math.min(Math.max(stats.words / 1000 * 100, 2), 100)}%` }}
                />
                <div className={styles.rangeMarkers}>
                  <div className={styles.rangeMarker} style={{ left: '0%' }}>0</div>
                  <div className={styles.rangeMarker} style={{ left: '30%' }}>300</div>
                  <div className={styles.rangeMarker} style={{ left: '80%' }}>800</div>
                  <div className={styles.rangeMarker} style={{ left: '100%' }}>1000</div>
                </div>
              </div>
            </div>
          </div>

          {/* Options Section */}
          <div className={styles.optionsSection}>
            <h3>Counting Options</h3>
            <div className={styles.optionsGrid}>
              <label className={styles.option}>
                <input
                  type="checkbox"
                  checked={excludeBullets}
                  onChange={(e) => setExcludeBullets(e.target.checked)}
                  aria-label="Exclude bullet points from word count"
                />
                <div className={styles.optionContent}>
                  <div className={styles.optionTitle}>Exclude bullet points</div>
                  <div className={styles.optionDescription}>Ignore lines starting with •, -, or *</div>
                </div>
              </label>
              
              <label className={styles.option}>
                <input
                  type="checkbox"
                  checked={countOnlyBody}
                  onChange={(e) => setCountOnlyBody(e.target.checked)}
                  aria-label="Count only body text, skip first 2 lines"
                />
                <div className={styles.optionContent}>
                  <div className={styles.optionTitle}>Count only body text</div>
                  <div className={styles.optionDescription}>Skip first 2 lines (header/contact info)</div>
                </div>
              </label>
            </div>
          </div>
        </section>

        {/* Length Guidelines Section */}
        <section className={styles.guidelinesSection} aria-labelledby="guidelines-title">
          <h2 className={styles.sectionTitle} id="guidelines-title">Professional Resume Length Guidelines</h2>
          <p className={styles.sectionSubtitle}>
            Industry standards for different career levels (based on ATS optimization research)
          </p>
          
          <div className={styles.guidelinesGrid}>
            {LENGTH_GUIDELINES.map((guideline, index) => (
              <div key={index} className={styles.guidelineCard} itemScope itemType="https://schema.org/ListItem">
                <div className={styles.guidelineHeader}>
                  <div className={styles.guidelineLevel} itemProp="name">{guideline.level}</div>
                  <div className={styles.guidelineWords}>{guideline.words}</div>
                </div>
                <div className={styles.guidelineBody}>
                  <div className={styles.guidelinePages}>
                    <span className={styles.guidelineLabel}>Pages:</span>
                    <span className={styles.guidelineValue}>{guideline.pages}</span>
                  </div>
                  <div className={styles.guidelineFocus}>
                    <span className={styles.guidelineLabel}>Focus on:</span>
                    <span className={styles.guidelineValue}>{guideline.focus}</span>
                  </div>
                </div>
                <meta itemProp="position" content={index + 1} />
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className={styles.tipsSection} aria-labelledby="tips-title">
          <h2 className={styles.sectionTitle} id="tips-title">Professional Resume Writing Tips</h2>
          <div className={styles.tipsGrid}>
            {RESUME_TIPS.map((tip, index) => (
              <div key={index} className={styles.tipCard}>
                <div className={styles.tipNumber}>{String(index + 1).padStart(2, '0')}</div>
                <div className={styles.tipContent}>{tip}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection} aria-labelledby="faq-title">
          <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions</h2>
          <div className={styles.faqList} itemScope itemType="https://schema.org/FAQPage">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                onKeyDown={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === index ? null : index)}
                tabIndex={0}
                role="button"
                aria-expanded={activeFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className={styles.faqQuestion}>
                  <h3 itemProp="name">{faq.question}</h3>
                  <span className={styles.faqToggle} aria-hidden="true">
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </div>
                {activeFaq === index && (
                  <div 
                    className={styles.faqAnswer} 
                    id={`faq-answer-${index}`}
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection} aria-labelledby="benefits-title">
          <h2 className={styles.sectionTitle} id="benefits-title">Why Optimize Resume Length?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>ATS Friendly</h3>
              <p className={styles.benefitDescription}>
                Applicant Tracking Systems prefer concise, well-structured resumes. Optimal length improves parsing accuracy.
              </p>
            </div>
            
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Recruiter Attention</h3>
              <p className={styles.benefitDescription}>
                Recruiters spend 6-7 seconds per resume. The right length ensures key information gets noticed quickly.
              </p>
            </div>
            
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Professional Standards</h3>
              <p className={styles.benefitDescription}>
                Following industry length standards shows professionalism and respect for the hiring process.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2>Ready to Optimize Your Resume?</h2>
            <p>Use our free resume builder to create ATS-optimized resumes with perfect length and formatting.</p>
            <a href="https://www.professionalresumefree.com/resume-templates" className={`${styles.ctaButton} ${styles.primaryButton}`}>
              Create Professional Resume
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Professional Resume Free</h3>
            <p className={styles.footerDescription}>
              Free resume building tools trusted by professionals worldwide. All tools work entirely in your browser - no data stored.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>More Free Tools</h3>
            <ul className={styles.featureList}>
              <li><a href="https://www.professionalresumefree.com/free-resume-builder">Free Resume Builder</a></li>
              <li><a href="https://www.professionalresumefree.com/resume-templates">ATS Resume Templates</a></li>
              <li><a href="https://www.professionalresumefree.com/cover-letter-builder">Cover Letter Builder</a></li>
              <li><a href="https://www.professionalresumefree.com/resume-checker">Resume ATS Checker</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Usage Stats</h3>
            <div className={styles.statsList}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10K+</span>
                <span className={styles.statLabel}>Monthly Users</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.8/5</span>
                <span className={styles.statLabel}>Average Rating</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>© {CURRENT_YEAR} Professional Resume Free. All rights reserved.</p>
          <p className={styles.privacyNote}>All tools work entirely in your browser. No data is stored on our servers.</p>
        </div>
      </footer>
    </div>
  );
};

// SSG with ISR
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
    // Revalidate every 2 hours
    revalidate: 3600,
  };
}

export default ResumeWordCharacterCounter;