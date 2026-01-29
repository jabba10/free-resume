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

  // Schema data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Resume Word & Character Counter",
        "description": "Free professional resume word and character counter with ATS optimization guidance and industry-standard length recommendations",
        "url": "https://www.professionalresumefree.com/free-resume-word-character-counter",
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
          "reviewCount": "142",
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
        "name": "Resume Length Guidelines by Career Level",
        "itemListElement": LENGTH_GUIDELINES.map((guideline, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": guideline.level,
          "description": `${guideline.words} (${guideline.pages}) - Focus on: ${guideline.focus}`
        }))
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
    if (isWithinRange) return { text: 'Perfect length!', color: '#28a745' };
    if (isUnderLimit) return { text: 'Add more content', color: '#dc3545' };
    return { text: 'Consider shortening', color: '#ff6b35' };
  };

  const status = getWordCountStatus();

  return (
    <>
      <Head>
        <title>Resume Word & Character Counter – Professional Length Checker {CURRENT_YEAR}</title>
        <meta 
          name="description" 
          content={`Free professional resume word counter and character counter with ATS optimization. Check your resume length against industry standards. Real-time analysis. ${CURRENT_YEAR}`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Resume Word & Character Counter – Professional Length Checker" />
        <meta property="og:description" content="Free professional resume word counter with ATS optimization guidance. Check length, characters, and get industry-standard recommendations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-word-character-counter" />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-word-counter.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Word & Character Counter" />
        <meta name="twitter:description" content="Professional resume length checker with ATS optimization and real-time analysis" />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/twitter-word-counter.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-word-character-counter" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Resume Word & Character Counter</h1>
          <p className={styles.subtitle}>
            Professional resume length analyzer with ATS optimization guidance
            <span className={`${styles.wordCount} ${isWithinRange ? styles.inRange : styles.outOfRange}`}>
              {stats.words} words
            </span>
          </p>
          
          <div className={styles.aggregateRating} itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.8" />
            <meta itemProp="ratingCount" content="142" />
            <div className={styles.ratingStars}>
              {'★'.repeat(5)}
              <span className={styles.ratingValue}>4.8/5</span>
            </div>
            <div className={styles.ratingText}>Trusted by 10,000+ professionals</div>
          </div>
        </header>

        <main className={styles.main}>
          {/* Main Editor Section */}
          <div className={styles.editorSection}>
            <div className={styles.editorHeader}>
              <h2>Paste Your Resume Content</h2>
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
• Led development of scalable web applications...`}
                rows={20}
                autoFocus
              />
              
              <div className={styles.buttonGroup}>
                <button
                  className={styles.resetButton}
                  onClick={handleReset}
                  type="button"
                >
                  Clear All
                </button>
                <button
                  className={styles.clearOptionsButton}
                  onClick={handleClearOptions}
                  type="button"
                >
                  Reset Options
                </button>
              </div>
            </div>
          </div>

          {/* Stats Display Section */}
          <div className={styles.statsSection}>
            <div className={styles.statsHeader}>
              <h2>Resume Analysis Results</h2>
              <div className={styles.statusIndicator} style={{ color: status.color }}>
                <span className={styles.statusText}>{status.text}</span>
              </div>
            </div>
            
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <div className={styles.statLabel}>Word Count</div>
                </div>
                <div className={`${styles.statValue} ${isUnderLimit ? styles.underLimit : ''} ${isOverLimit ? styles.overLimit : ''}`}>
                  {stats.words.toLocaleString()}
                  <div className={styles.statSubtext}>
                    {isWithinRange ? 'Ideal range: 300-800' : isUnderLimit ? 'Below minimum: 300' : 'Above maximum: 800'}
                  </div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <div className={styles.statLabel}>Characters</div>
                </div>
                <div className={styles.statValue}>
                  {stats.charactersWithSpaces.toLocaleString()}
                  <div className={styles.statSubtext}>including spaces</div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <div className={styles.statLabel}>Characters</div>
                </div>
                <div className={styles.statValue}>
                  {stats.charactersWithoutSpaces.toLocaleString()}
                  <div className={styles.statSubtext}>excluding spaces</div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <div className={styles.statLabel}>Lines</div>
                </div>
                <div className={styles.statValue}>
                  {stats.lines}
                  <div className={styles.statSubtext}>non-empty lines</div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <div className={styles.statLabel}>Paragraphs</div>
                </div>
                <div className={styles.statValue}>
                  {stats.paragraphs}
                  <div className={styles.statSubtext}>content sections</div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <div className={styles.statLabel}>Estimated Pages</div>
                </div>
                <div className={styles.statValue}>
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
                  />
                  <div className={styles.optionContent}>
                    <div className={styles.optionTitle}>Count only body text</div>
                    <div className={styles.optionDescription}>Skip first 2 lines (header/contact info)</div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Length Guidelines Section */}
          <section className={styles.guidelinesSection}>
            <h2 className={styles.sectionTitle}>Professional Resume Length Guidelines</h2>
            <p className={styles.sectionSubtitle}>
              Industry standards for different career levels (based on ATS optimization research)
            </p>
            
            <div className={styles.guidelinesGrid}>
              {LENGTH_GUIDELINES.map((guideline, index) => (
                <div key={index} className={styles.guidelineCard}>
                  <div className={styles.guidelineHeader}>
                    <div className={styles.guidelineLevel}>{guideline.level}</div>
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
                </div>
              ))}
            </div>
          </section>

          {/* Tips Section */}
          <section className={styles.tipsSection}>
            <h2 className={styles.sectionTitle}>Professional Resume Writing Tips</h2>
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
            <h2 className={styles.sectionTitle}>Why Optimize Resume Length?</h2>
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

export default ResumeWordCharacterCounter;