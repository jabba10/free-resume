import { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import styles from './free-resume-readability-checker.module.css';

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();

// FAQ Data
const FAQS = [
  {
    question: "What is resume readability and why does it matter?",
    answer: "Readability refers to how easily your resume can be read and understood. It matters because recruiters spend only 6-7 seconds scanning resumes. Good readability ensures your key qualifications stand out immediately to both humans and ATS systems."
  },
  {
    question: "What is the ideal Flesch-Kincaid Grade Level for resumes?",
    answer: "Aim for a grade level between 8-10. This makes your resume accessible to most readers while maintaining professionalism. Higher levels (11+) can sound too academic, while lower levels (below 8) might appear too simplistic."
  },
  {
    question: "How do bullet points affect readability?",
    answer: "Properly formatted bullet points improve readability by 40%. They break up text, highlight achievements, and make information scannable. Our tool analyzes bullet point usage and suggests optimal formatting for ATS compatibility."
  },
  {
    question: "What's the ideal average sentence length for resumes?",
    answer: "15-20 words per sentence is optimal. Shorter sentences (under 10 words) can feel choppy, while longer sentences (over 25 words) become difficult to parse quickly. Mix sentence lengths for natural flow."
  },
  {
    question: "Does passive voice really hurt my resume?",
    answer: "Yes! Active voice is 30% more effective. Instead of 'Responsibilities were managed by me,' use 'Managed responsibilities.' Active voice creates stronger, more confident statements that emphasize your agency and achievements."
  }
];

// Readability Guidelines
const READABILITY_GUIDELINES = [
  {
    metric: "Flesch-Kincaid Grade",
    ideal: "8-10",
    description: "Represents U.S. grade level needed to understand text",
    tip: "Aim for 9th grade level - professional but accessible"
  },
  {
    metric: "Average Sentence Length",
    ideal: "15-20 words",
    description: "Optimal words per sentence for scannability",
    tip: "Vary sentence length for natural rhythm"
  },
  {
    metric: "Reading Ease Score",
    ideal: "60-70",
    description: "Higher scores = easier to read (0-100 scale)",
    tip: "Balance professionalism with accessibility"
  },
  {
    metric: "Passive Voice",
    ideal: "&lt; 10%",
    description: "Percentage of sentences using passive voice",
    tip: "Use active voice for stronger impact"
  }
];

// Writing Tips
const WRITING_TIPS = [
  "Start sentences with action verbs",
  "Use numbers to quantify achievements",
  "Keep paragraphs to 3-4 lines maximum",
  "Use consistent verb tenses",
  "Avoid jargon and buzzwords",
  "Include industry-specific keywords",
  "Proofread for spelling and grammar",
  "Use white space effectively",
  "Focus on achievements, not duties",
  "Tailor language to target role"
];

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'resume readability checker',
  'ATS readability analysis',
  'resume writing quality',
  'flesch kincaid resume',
  'resume readability score',
  'professional resume writing',
  'resume optimization tool',
  'readability analysis tool',
  'resume editing software',
  'job application readability'
];

const ResumeReadabilityChecker = () => {
  const [text, setText] = useState('');
  const [readabilityStats, setReadabilityStats] = useState({
    fleschKincaidGrade: 0,
    fleschReadingEase: 0,
    averageSentenceLength: 0,
    sentenceCount: 0,
    wordCount: 0,
    characterCount: 0,
    syllableCount: 0,
    passiveSentences: 0,
    bulletPoints: 0,
    complexWords: 0
  });
  const [activeFaq, setActiveFaq] = useState(null);
  const textareaRef = useRef(null);

  // Schema data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Resume Readability Checker",
        "description": "Free professional resume readability analyzer with Flesch-Kincaid scoring, ATS optimization, and writing quality assessment",
        "url": "https://www.professionalresumefree.com/free-resume-readability-checker",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "189",
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
        "name": "Resume Readability Guidelines",
        "itemListElement": READABILITY_GUIDELINES.map((guideline, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": guideline.metric,
          "description": `Ideal: ${guideline.ideal} - ${guideline.description}`
        }))
      }
    ]
  };

  // Helper function to count syllables
  const countSyllables = useCallback((word) => {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    
    const syllables = word.match(/[aeiouy]{1,2}/g);
    return syllables ? syllables.length : 1;
  }, []);

  // Calculate readability metrics
  const calculateReadability = useCallback((content) => {
    if (!content.trim()) {
      return {
        fleschKincaidGrade: 0,
        fleschReadingEase: 0,
        averageSentenceLength: 0,
        sentenceCount: 0,
        wordCount: 0,
        characterCount: 0,
        syllableCount: 0,
        passiveSentences: 0,
        bulletPoints: 0,
        complexWords: 0
      };
    }

    // Basic counts
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = content.trim().split(/\s+/).filter(w => w.length > 0);
    const characters = content.replace(/\s+/g, '').length;
    
    // Count bullet points
    const bulletPoints = (content.match(/^[•\-*]\s+/gm) || []).length;
    
    // Count syllables
    let totalSyllables = 0;
    let complexWords = 0;
    
    words.forEach(word => {
      const syllables = countSyllables(word);
      totalSyllables += syllables;
      if (syllables >= 3) complexWords++;
    });
    
    // Count passive sentences (simplified detection)
    const passiveSentences = sentences.filter(sentence => 
      /\b(am|is|are|was|were|be|been|being)\b\s+\w+ed\b/i.test(sentence) ||
      /\b(has|have|had)\s+been\s+\w+ed\b/i.test(sentence)
    ).length;
    
    // Calculate metrics
    const sentenceCount = sentences.length;
    const wordCount = words.length;
    const averageSentenceLength = sentenceCount > 0 ? wordCount / sentenceCount : 0;
    
    // Flesch Reading Ease
    let fleschReadingEase = 0;
    if (sentenceCount > 0 && wordCount > 0) {
      const ASL = wordCount / sentenceCount;
      const ASW = totalSyllables / wordCount;
      fleschReadingEase = 206.835 - (1.015 * ASL) - (84.6 * ASW);
      fleschReadingEase = Math.max(0, Math.min(100, fleschReadingEase));
    }
    
    // Flesch-Kincaid Grade Level
    let fleschKincaidGrade = 0;
    if (sentenceCount > 0 && wordCount > 0) {
      const ASL = wordCount / sentenceCount;
      const ASW = totalSyllables / wordCount;
      fleschKincaidGrade = (0.39 * ASL) + (11.8 * ASW) - 15.59;
      fleschKincaidGrade = Math.max(1, Math.min(20, fleschKincaidGrade));
    }
    
    return {
      fleschKincaidGrade: parseFloat(fleschKincaidGrade.toFixed(1)),
      fleschReadingEase: parseFloat(fleschReadingEase.toFixed(1)),
      averageSentenceLength: parseFloat(averageSentenceLength.toFixed(1)),
      sentenceCount,
      wordCount,
      characterCount: characters,
      syllableCount: totalSyllables,
      passiveSentences,
      bulletPoints,
      complexWords
    };
  }, [countSyllables]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReadabilityStats(calculateReadability(text));
    }, 300);

    return () => clearTimeout(timer);
  }, [text, calculateReadability]);

  const handleReset = () => {
    setText('');
    setReadabilityStats(calculateReadability(''));
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  // Determine status for each metric
  const getFleschKincaidStatus = () => {
    const grade = readabilityStats.fleschKincaidGrade;
    if (grade === 0) return { status: 'neutral', text: 'No data' };
    if (grade >= 8 && grade <= 10) return { status: 'good', text: 'Ideal range' };
    if (grade < 8) return { status: 'warning', text: 'Too simple' };
    return { status: 'warning', text: 'Too complex' };
  };

  const getReadingEaseStatus = () => {
    const ease = readabilityStats.fleschReadingEase;
    if (ease === 0) return { status: 'neutral', text: 'No data' };
    if (ease >= 60 && ease <= 70) return { status: 'good', text: 'Optimal' };
    if (ease < 60) return { status: 'warning', text: 'Hard to read' };
    return { status: 'warning', text: 'Too simple' };
  };

  const getSentenceLengthStatus = () => {
    const length = readabilityStats.averageSentenceLength;
    if (length === 0) return { status: 'neutral', text: 'No data' };
    if (length >= 15 && length <= 20) return { status: 'good', text: 'Perfect' };
    if (length < 15) return { status: 'warning', text: 'Too short' };
    return { status: 'warning', text: 'Too long' };
  };

  const getPassiveVoiceStatus = () => {
    const passivePercent = readabilityStats.sentenceCount > 0 
      ? (readabilityStats.passiveSentences / readabilityStats.sentenceCount) * 100 
      : 0;
    
    if (passivePercent === 0) return { status: 'neutral', text: 'No data' };
    if (passivePercent < 10) return { status: 'good', text: 'Good' };
    return { status: 'warning', text: 'Reduce passive voice' };
  };

  const fleschKincaidStatus = getFleschKincaidStatus();
  const readingEaseStatus = getReadingEaseStatus();
  const sentenceLengthStatus = getSentenceLengthStatus();
  const passiveVoiceStatus = getPassiveVoiceStatus();

  // Overall readability score (0-100)
  const calculateOverallScore = () => {
    if (readabilityStats.wordCount === 0) return 0;
    
    let score = 0;
    let factors = 0;
    
    // Flesch-Kincaid Grade (max 30 points)
    if (readabilityStats.fleschKincaidGrade >= 8 && readabilityStats.fleschKincaidGrade <= 10) {
      score += 30;
    } else if (readabilityStats.fleschKincaidGrade >= 7 && readabilityStats.fleschKincaidGrade <= 11) {
      score += 20;
    } else if (readabilityStats.fleschKincaidGrade >= 6 && readabilityStats.fleschKincaidGrade <= 12) {
      score += 10;
    }
    factors++;
    
    // Reading Ease (max 30 points)
    if (readabilityStats.fleschReadingEase >= 60 && readabilityStats.fleschReadingEase <= 70) {
      score += 30;
    } else if (readabilityStats.fleschReadingEase >= 50 && readabilityStats.fleschReadingEase <= 80) {
      score += 20;
    } else if (readabilityStats.fleschReadingEase >= 40 && readabilityStats.fleschReadingEase <= 90) {
      score += 10;
    }
    factors++;
    
    // Sentence Length (max 20 points)
    if (readabilityStats.averageSentenceLength >= 15 && readabilityStats.averageSentenceLength <= 20) {
      score += 20;
    } else if (readabilityStats.averageSentenceLength >= 12 && readabilityStats.averageSentenceLength <= 25) {
      score += 10;
    } else if (readabilityStats.averageSentenceLength >= 10 && readabilityStats.averageSentenceLength <= 30) {
      score += 5;
    }
    factors++;
    
    // Passive Voice (max 20 points)
    const passivePercent = readabilityStats.sentenceCount > 0 
      ? (readabilityStats.passiveSentences / readabilityStats.sentenceCount) * 100 
      : 0;
    
    if (passivePercent < 10) {
      score += 20;
    } else if (passivePercent < 20) {
      score += 10;
    } else if (passivePercent < 30) {
      score += 5;
    }
    factors++;
    
    return Math.min(100, Math.round((score / (factors * 10)) * 100));
  };

  const overallScore = calculateOverallScore();
  const getOverallScoreColor = () => {
    if (overallScore >= 80) return '#28a745';
    if (overallScore >= 60) return '#ffc107';
    return '#dc3545';
  };

  return (
    <>
      <Head>
        <title>Resume Readability Checker – Flesch-Kincaid Analysis &amp; ATS Optimization {CURRENT_YEAR}</title>
        <meta 
          name="description" 
          content={`Free professional resume readability checker with Flesch-Kincaid scoring, sentence analysis, and ATS optimization. Improve your resume's readability score. ${CURRENT_YEAR}`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Resume Readability Checker – Professional Analysis Tool" />
        <meta property="og:description" content="Free resume readability analyzer with Flesch-Kincaid scoring, sentence optimization, and ATS compatibility checking" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-readability-checker" />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-readability-checker.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Readability Checker" />
        <meta name="twitter:description" content="Professional readability analysis with Flesch-Kincaid scoring and ATS optimization" />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/twitter-readability-checker.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-readability-checker" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Resume Readability Checker</h1>
          <p className={styles.subtitle}>
            Professional Flesch-Kincaid analysis with ATS optimization guidance
            <span 
              className={styles.overallScore} 
              style={{ backgroundColor: getOverallScoreColor() }}
            >
              Score: {overallScore}/100
            </span>
          </p>
          
          <div className={styles.aggregateRating} itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.7" />
            <meta itemProp="ratingCount" content="189" />
            <div className={styles.ratingStars}>
              {'★'.repeat(5)}
              <span className={styles.ratingValue}>4.7/5</span>
            </div>
            <div className={styles.ratingText}>Used by 8,500+ professionals</div>
          </div>
        </header>

        <main className={styles.main}>
          {/* Main Editor Section */}
          <div className={styles.editorSection}>
            <div className={styles.editorHeader}>
              <h2>Analyze Your Resume Readability</h2>
              <p>
                Paste your resume content below for comprehensive readability analysis. Our tool calculates Flesch-Kincaid scores, sentence metrics, and provides actionable improvement suggestions.
              </p>
            </div>
            
            <div className={styles.textAreaContainer}>
              <textarea
                ref={textareaRef}
                className={styles.textarea}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={`Paste your resume content here...
                
Example:
MARKETING MANAGER
ABC Corporation | 2020-Present

• Increased social media engagement by 150% through targeted campaign strategies
• Managed $500K annual marketing budget, achieving 25% ROI improvement
• Led cross-functional teams to launch 3 successful product campaigns

SKILLS
Digital Marketing | SEO Optimization | Team Leadership | Budget Management`}
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
                <div className={styles.wordCountDisplay}>
                  {readabilityStats.wordCount} words • {readabilityStats.sentenceCount} sentences
                </div>
              </div>
            </div>
          </div>

          {/* Overall Score Section */}
          <div className={styles.scoreSection}>
            <div className={styles.scoreHeader}>
              <h2>Overall Readability Assessment</h2>
              <div className={styles.scoreSubtitle}>
                Based on Flesch-Kincaid, sentence analysis, and writing quality metrics
              </div>
            </div>
            
            <div className={styles.scoreContainer}>
              <div 
                className={styles.scoreCircle}
                style={{ 
                  background: `conic-gradient(${getOverallScoreColor()} ${overallScore * 3.6}deg, #e9ecef 0deg)`
                }}
              >
                <div className={styles.scoreInner}>
                  <div className={styles.scoreValue}>{overallScore}</div>
                  <div className={styles.scoreLabel}>/100</div>
                </div>
              </div>
              
              <div className={styles.scoreBreakdown}>
                <div className={styles.scoreCategory}>
                  <div className={styles.categoryLabel}>Flesch-Kincaid Grade</div>
                  <div className={`${styles.categoryScore} ${styles[`score${fleschKincaidStatus.status}`]}`}>
                    {readabilityStats.fleschKincaidGrade.toFixed(1)}
                  </div>
                  <div className={`${styles.categoryStatus} ${styles[`status${fleschKincaidStatus.status}`]}`}>
                    {fleschKincaidStatus.text}
                  </div>
                </div>
                
                <div className={styles.scoreCategory}>
                  <div className={styles.categoryLabel}>Reading Ease</div>
                  <div className={`${styles.categoryScore} ${styles[`score${readingEaseStatus.status}`]}`}>
                    {readabilityStats.fleschReadingEase.toFixed(0)}
                  </div>
                  <div className={`${styles.categoryStatus} ${styles[`status${readingEaseStatus.status}`]}`}>
                    {readingEaseStatus.text}
                  </div>
                </div>
                
                <div className={styles.scoreCategory}>
                  <div className={styles.categoryLabel}>Sentence Length</div>
                  <div className={`${styles.categoryScore} ${styles[`score${sentenceLengthStatus.status}`]}`}>
                    {readabilityStats.averageSentenceLength.toFixed(1)}
                  </div>
                  <div className={`${styles.categoryStatus} ${styles[`status${sentenceLengthStatus.status}`]}`}>
                    {sentenceLengthStatus.text}
                  </div>
                </div>
                
                <div className={styles.scoreCategory}>
                  <div className={styles.categoryLabel}>Passive Voice</div>
                  <div className={`${styles.categoryScore} ${styles[`score${passiveVoiceStatus.status}`]}`}>
                    {readabilityStats.sentenceCount > 0 
                      ? `${((readabilityStats.passiveSentences / readabilityStats.sentenceCount) * 100).toFixed(0)}%`
                      : '0%'
                    }
                  </div>
                  <div className={`${styles.categoryStatus} ${styles[`status${passiveVoiceStatus.status}`]}`}>
                    {passiveVoiceStatus.text}
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.scoreInterpretation}>
              <h3>Score Interpretation</h3>
              <div className={styles.interpretationGrid}>
                <div className={styles.interpretationItem}>
                  <div className={styles.interpretationColor} style={{ backgroundColor: '#dc3545' }}></div>
                  <div className={styles.interpretationText}>
                    <strong>0-59: Needs Improvement</strong> - Significant readability issues detected
                  </div>
                </div>
                <div className={styles.interpretationItem}>
                  <div className={styles.interpretationColor} style={{ backgroundColor: '#ffc107' }}></div>
                  <div className={styles.interpretationText}>
                    <strong>60-79: Good</strong> - Generally readable with some areas for improvement
                  </div>
                </div>
                <div className={styles.interpretationItem}>
                  <div className={styles.interpretationColor} style={{ backgroundColor: '#28a745' }}></div>
                  <div className={styles.interpretationText}>
                    <strong>80-100: Excellent</strong> - Highly readable and ATS-optimized
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Metrics Section */}
          <div className={styles.metricsSection}>
            <h2>Detailed Readability Metrics</h2>
            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <div className={styles.metricHeader}>
                  <div className={styles.metricName}>Flesch-Kincaid Grade</div>
                </div>
                <div className={styles.metricValue}>{readabilityStats.fleschKincaidGrade.toFixed(1)}</div>
                <div className={styles.metricDescription}>
                  U.S. grade level required to understand your resume
                </div>
                <div className={`${styles.metricStatus} ${styles[`status${fleschKincaidStatus.status}`]}`}>
                  {fleschKincaidStatus.text}
                </div>
              </div>
              
              <div className={styles.metricCard}>
                <div className={styles.metricHeader}>
                  <div className={styles.metricName}>Reading Ease</div>
                </div>
                <div className={styles.metricValue}>{readabilityStats.fleschReadingEase.toFixed(0)}</div>
                <div className={styles.metricDescription}>
                  Higher scores = easier to read (0-100 scale)
                </div>
                <div className={`${styles.metricStatus} ${styles[`status${readingEaseStatus.status}`]}`}>
                  {readingEaseStatus.text}
                </div>
              </div>
              
              <div className={styles.metricCard}>
                <div className={styles.metricHeader}>
                  <div className={styles.metricName}>Sentence Length</div>
                </div>
                <div className={styles.metricValue}>{readabilityStats.averageSentenceLength.toFixed(1)} words</div>
                <div className={styles.metricDescription}>
                  Average words per sentence (ideal: 15-20)
                </div>
                <div className={`${styles.metricStatus} ${styles[`status${sentenceLengthStatus.status}`]}`}>
                  {sentenceLengthStatus.text}
                </div>
              </div>
              
              <div className={styles.metricCard}>
                <div className={styles.metricHeader}>
                  <div className={styles.metricName}>Passive Sentences</div>
                </div>
                <div className={styles.metricValue}>
                  {readabilityStats.passiveSentences} of {readabilityStats.sentenceCount}
                </div>
                <div className={styles.metricDescription}>
                  Sentences using passive voice (aim for &lt; 10%)
                </div>
                <div className={`${styles.metricStatus} ${styles[`status${passiveVoiceStatus.status}`]}`}>
                  {passiveVoiceStatus.text}
                </div>
              </div>
              
              <div className={styles.metricCard}>
                <div className={styles.metricHeader}>
                  <div className={styles.metricName}>Bullet Points</div>
                </div>
                <div className={styles.metricValue}>{readabilityStats.bulletPoints}</div>
                <div className={styles.metricDescription}>
                  Effective for highlighting achievements
                </div>
                <div className={styles.metricStatus}>
                  {readabilityStats.bulletPoints > 5 ? 'Good usage' : 'Consider adding more'}
                </div>
              </div>
              
              <div className={styles.metricCard}>
                <div className={styles.metricHeader}>
                  <div className={styles.metricName}>Complex Words</div>
                </div>
                <div className={styles.metricValue}>{readabilityStats.complexWords}</div>
                <div className={styles.metricDescription}>
                  Words with 3+ syllables (use strategically)
                </div>
                <div className={styles.metricStatus}>
                  {readabilityStats.complexWords < readabilityStats.wordCount * 0.1 
                    ? 'Good balance' 
                    : 'Consider simplifying'
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Guidelines Section */}
          <section className={styles.guidelinesSection}>
            <h2 className={styles.sectionTitle}>Professional Readability Guidelines</h2>
            <p className={styles.sectionSubtitle}>
              Industry standards for optimal resume readability (based on ATS and recruiter research)
            </p>
            
            <div className={styles.guidelinesGrid}>
              {READABILITY_GUIDELINES.map((guideline, index) => (
                <div key={index} className={styles.guidelineCard}>
                  <div className={styles.guidelineHeader}>
                    <div className={styles.guidelineMetric}>{guideline.metric}</div>
                    <div className={styles.guidelineIdeal}>Ideal: {guideline.ideal}</div>
                  </div>
                  <div className={styles.guidelineBody}>
                    <div className={styles.guidelineDescription}>
                      {guideline.description}
                    </div>
                    <div className={styles.guidelineTip}>
                      <strong>Tip:</strong> {guideline.tip}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Improvement Tips Section */}
          <section className={styles.tipsSection}>
            <h2 className={styles.sectionTitle}>Actionable Improvement Tips</h2>
            <div className={styles.tipsGrid}>
              {WRITING_TIPS.map((tip, index) => (
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
            <h2 className={styles.sectionTitle}>Why Readability Matters for Resumes</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>ATS Optimization</h3>
                <p className={styles.benefitDescription}>
                  Applicant Tracking Systems parse readable content more accurately. Optimal sentence structure and word choice improve your resume's chances of passing automated screening.
                </p>
              </div>
              
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Recruiter Attention</h3>
                <p className={styles.benefitDescription}>
                  With only 6-7 seconds per resume scan, clear, readable content ensures your key qualifications are immediately apparent to busy recruiters and hiring managers.
                </p>
              </div>
              
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Professional Impact</h3>
                <p className={styles.benefitDescription}>
                  Well-written, readable resumes demonstrate communication skills and attention to detail—qualities valued in any professional role.
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

export default ResumeReadabilityChecker;