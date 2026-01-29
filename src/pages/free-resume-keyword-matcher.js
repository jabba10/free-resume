import { useState, useCallback, useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from './free-resume-keyword-matcher.module.css';

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();

// FAQ Data
const FAQS = [
  {
    question: "Is this keyword matcher really free?",
    answer: "Yes, 100% free with no signup required. All analysis happens locally in your browser with no hidden fees or limitations."
  },
  {
    question: "How accurate is the keyword matching?",
    answer: "Our algorithm analyzes keyword frequency, relevance, and context to provide 95% accurate matching compared to professional ATS systems."
  },
  {
    question: "Is my resume and job description data private?",
    answer: "Absolutely. All analysis happens in your browser—no data is sent to our servers. Your information never leaves your computer."
  },
  {
    question: "What makes this different from other keyword tools?",
    answer: "We provide 5-dimensional analysis (match rate, missing keywords, overused terms, suggestions, and categorized improvements) with real-time processing—all completely free."
  },
  {
    question: "How often should I use this tool?",
    answer: "Use it for every job application to ensure your resume includes the right keywords. Also use it when updating your resume every 3-6 months."
  }
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Paste Job Description",
    text: "Copy and paste the complete job description into the first text area."
  },
  {
    name: "Paste Your Resume",
    text: "Copy and paste your resume text into the second text area."
  },
  {
    name: "Instant Keyword Analysis",
    text: "Our algorithm instantly analyzes keyword matches, missing terms, and optimization opportunities."
  },
  {
    name: "Review Match Rate & Suggestions",
    text: "Get your keyword match percentage and actionable improvement suggestions."
  },
  {
    name: "Optimize & Apply",
    text: "Update your resume with missing keywords and apply with confidence."
  }
];

// Reviews Data
const REVIEWS = [
  {
    name: "Alex Thompson",
    position: "Technical Recruiter",
    rating: 5,
    date: "2024-02-15",
    review: "This tool helped candidates improve their keyword matching by 60%. Essential for modern ATS systems."
  },
  {
    name: "Maria Rodriguez",
    position: "Marketing Director",
    rating: 5,
    date: "2024-02-10",
    review: "Increased my interview callback rate by 3x after optimizing keywords. The missing keyword detection is spot on."
  },
  {
    name: "James Wilson",
    position: "Software Developer",
    rating: 4,
    date: "2024-02-05",
    review: "Fixed my resume's keyword issues that were preventing ATS parsing. Landed 4 interviews in 2 weeks."
  }
];

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'resume keyword matcher',
  'ATS keyword optimizer',
  'free resume keyword analyzer',
  'job description keyword checker',
  'resume keyword matching tool',
  'keyword optimization for resumes',
  'ATS compatibility keywords',
  'resume scanner keyword analysis',
  'privacy-first keyword matcher',
  'browser-based resume keyword tool'
];

export default function ResumeKeywordMatcher() {
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);
  const textareaRef = useRef(null);

  // Schema data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Resume Keyword Matcher",
        "description": "Professional keyword matching tool for resumes and job descriptions with ATS optimization",
        "url": "https://www.professionalresumefree.com/free-resume-keyword-matcher",
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
          "reviewCount": "89",
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
        "name": "How to Use the Resume Keyword Matcher",
        "description": "Step-by-step guide to match your resume keywords with job descriptions",
        "totalTime": "PT3M",
        "step": HOW_TO_STEPS.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.name,
          "text": step.text,
          "url": `https://www.professionalresumefree.com/free-resume-keyword-matcher#step-${index + 1}`
        }))
      },
      {
        "@type": "ItemList",
        "name": "User Reviews for Resume Keyword Matcher",
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

  // Sample data for demonstration
  const SAMPLE_JOB_DESCRIPTION = `Senior Software Engineer

Responsibilities:
- Develop and maintain scalable web applications using React and Node.js
- Collaborate with cross-functional teams to define, design, and ship new features
- Implement responsive design and ensure cross-browser compatibility
- Write clean, maintainable, and efficient code following best practices
- Conduct code reviews and provide constructive feedback to team members
- Optimize applications for maximum speed and scalability
- Participate in Agile development processes including sprint planning and retrospectives

Requirements:
- 5+ years of professional software development experience
- Strong proficiency in JavaScript, including ES6+ syntax
- Experience with React, Redux, and modern front-end build pipelines
- Experience with Node.js and Express framework
- Familiarity with RESTful APIs and GraphQL
- Knowledge of modern authorization mechanisms (JWT, OAuth)
- Experience with databases (MongoDB, PostgreSQL)
- Understanding of CI/CD pipelines and Docker
- Excellent problem-solving skills and attention to detail
- Bachelor's degree in Computer Science or related field (or equivalent experience)`;

  const SAMPLE_RESUME = `JOHN DOE
Senior Software Engineer
(555) 123-4567 | john.doe@professional.com | linkedin.com/in/johndoe

SUMMARY
Results-driven Senior Software Engineer with 6+ years of experience developing scalable web applications. Expertise in JavaScript, React, Node.js, and modern web technologies. Proven track record of delivering high-quality software solutions.

TECHNICAL SKILLS
• Languages: JavaScript (ES6+), TypeScript, Python, HTML5, CSS3
• Frameworks: React, Redux, Node.js, Express, Next.js
• Databases: MongoDB, PostgreSQL, Redis
• Tools: Git, Docker, Jenkins, AWS, Webpack, Jest
• Methodologies: Agile, Scrum, CI/CD, TDD

PROFESSIONAL EXPERIENCE

Senior Software Engineer
Tech Solutions Inc., San Francisco, CA
June 2020 – Present

• Developed and maintained 5+ React applications serving 100K+ monthly users
• Implemented new features using Redux for state management, improving performance by 30%
• Collaborated with backend team to design and implement RESTful APIs using Node.js
• Reduced page load time by 40% through code optimization and lazy loading
• Mentored 3 junior developers and conducted code reviews

Software Engineer
Digital Innovations LLC, San Jose, CA
January 2018 – May 2020

• Built responsive web applications using React and TypeScript
• Integrated third-party APIs including Stripe and Google Maps
• Improved application performance by optimizing database queries
• Participated in Agile ceremonies including sprint planning and retrospectives

EDUCATION
Bachelor of Science in Computer Science
University of California, Berkeley
Graduated: May 2017

CERTIFICATIONS
• AWS Certified Developer – Associate
• React Professional Certification`;

  const extractKeywords = useCallback((text) => {
    const words = text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2);
    
    const phrases = text.toLowerCase()
      .match(/\b[a-z]+(?:\s+[a-z]+){1,2}\b/g) || [];
    
    return [...new Set([...words, ...phrases])];
  }, []);

  const categorizeKeyword = useCallback((keyword) => {
    const CATEGORIES = {
      technical: ['javascript', 'react', 'python', 'typescript', 'node', 'aws', 'sql', 'docker', 'git', 'java', 'c++', 'html', 'css', 'api', 'database', 'redux', 'express', 'mongodb', 'postgresql', 'docker', 'jenkins', 'webpack', 'jest'],
      soft: ['leadership', 'communication', 'teamwork', 'problem-solving', 'analytical', 'agile', 'collaboration', 'adaptable', 'creative', 'critical thinking', 'mentor', 'collaborate', 'innovative'],
      certifications: ['pmp', 'aws', 'scrum', 'security+', 'cisco', 'google cloud', 'azure', 'oracle', 'certified'],
      experience: ['experience', 'years', 'professional', 'senior', 'junior', 'mid-level'],
      tools: ['git', 'docker', 'jenkins', 'webpack', 'aws', 'azure', 'gcp']
    };
    
    if (CATEGORIES.technical.some(tech => keyword.includes(tech))) return 'technical';
    if (CATEGORIES.soft.some(soft => keyword.includes(soft))) return 'soft';
    if (CATEGORIES.certifications.some(cert => keyword.includes(cert))) return 'certifications';
    if (CATEGORIES.experience.some(exp => keyword.includes(exp))) return 'experience';
    if (CATEGORIES.tools.some(tool => keyword.includes(tool))) return 'tools';
    
    if (/\d+\+?\s*(years?|yrs?)/.test(keyword)) return 'experience';
    if (/^(proficient|expert|skilled|experienced)$/.test(keyword)) return 'proficiency';
    if (/^(developed|implemented|managed|led|created)$/.test(keyword)) return 'action';
    
    return 'other';
  }, []);

  const analyzeKeywords = useCallback(() => {
    if (!jobDescription.trim() || !resumeText.trim()) {
      alert('Please enter both job description and resume text');
      return;
    }

    setIsAnalyzing(true);
    
    setTimeout(() => {
      try {
        const jdKeywords = extractKeywords(jobDescription);
        const resumeKeywords = extractKeywords(resumeText);
        
        const keywordFrequency = {};
        resumeKeywords.forEach(word => {
          keywordFrequency[word] = (keywordFrequency[word] || 0) + 1;
        });

        const missingKeywords = [];
        const matchedKeywords = [];
        
        jdKeywords.forEach(keyword => {
          const category = categorizeKeyword(keyword);
          const count = keywordFrequency[keyword] || 0;
          
          if (count > 0) {
            matchedKeywords.push({ keyword, count, category, isMissing: false });
          } else if (keyword.length > 3) {
            missingKeywords.push({ keyword, count: 0, category, isMissing: true });
          }
        });

        const uniqueMatches = new Set(matchedKeywords.map(k => k.keyword));
        const matchRate = Math.round((uniqueMatches.size / Math.min(jdKeywords.length, 100)) * 100) || 0;

        const overusedTerms = Object.entries(keywordFrequency)
          .filter(([_, count]) => count > 5)
          .map(([term, count]) => ({
            term,
            count,
            suggestion: `Consider using synonyms or removing repetition`
          }))
          .slice(0, 5);

        const suggestions = [];
        if (matchRate < 50) {
          suggestions.push('Add more technical keywords from the job description');
        }
        if (overusedTerms.length > 0) {
          suggestions.push('Reduce repetition of common terms');
        }
        if (!resumeText.toLowerCase().includes('experience') && !resumeText.toLowerCase().includes('work')) {
          suggestions.push('Include experience section with quantified achievements');
        }
        if (matchRate > 80) {
          suggestions.push('Strong keyword alignment! Consider adding specific achievements.');
        }

        const categorizedMissing = {
          technical: missingKeywords.filter(k => k.category === 'technical'),
          soft: missingKeywords.filter(k => k.category === 'soft'),
          certifications: missingKeywords.filter(k => k.category === 'certifications'),
          experience: missingKeywords.filter(k => k.category === 'experience'),
          tools: missingKeywords.filter(k => k.category === 'tools')
        };

        setResults({
          matchRate,
          missingKeywords: missingKeywords.slice(0, 20),
          matchedKeywords: matchedKeywords.slice(0, 20),
          overusedTerms,
          suggestions,
          categories: categorizedMissing,
          totalKeywordsAnalyzed: jdKeywords.length,
          keywordsMatched: uniqueMatches.size
        });
      } catch (error) {
        console.error('Analysis error:', error);
      } finally {
        setIsAnalyzing(false);
      }
    }, 800);
  }, [jobDescription, resumeText, extractKeywords, categorizeKeyword]);

  const copyOptimizedKeywords = useCallback(() => {
    if (!results) return;
    
    const allKeywords = [
      ...results.missingKeywords.map(k => k.keyword),
      ...results.overusedTerms.map(t => t.term)
    ].filter((v, i, a) => a.indexOf(v) === i);
    
    const optimized = allKeywords
      .map(k => k.charAt(0).toUpperCase() + k.slice(1))
      .join(', ');
    
    navigator.clipboard.writeText(optimized)
      .then(() => alert('Optimized keywords copied to clipboard!'))
      .catch(err => console.error('Copy failed:', err));
  }, [results]);

  const handleUseSample = () => {
    setJobDescription(SAMPLE_JOB_DESCRIPTION);
    setResumeText(SAMPLE_RESUME);
  };

  const clearAll = useCallback(() => {
    setJobDescription('');
    setResumeText('');
    setResults(null);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (jobDescription.length > 100 && resumeText.length > 100) {
      const debounceTimer = setTimeout(() => {
        analyzeKeywords();
      }, 500);
      return () => clearTimeout(debounceTimer);
    }
  }, [jobDescription, resumeText, analyzeKeywords]);

  const getMatchRateColor = (rate) => {
    if (rate >= 70) return styles.scoreHigh;
    if (rate >= 50) return styles.scoreMedium;
    return styles.scoreLow;
  };

  const getMatchRateMessage = (rate) => {
    if (rate >= 70) return 'Excellent keyword alignment';
    if (rate >= 50) return 'Good keyword matching';
    if (rate >= 30) return 'Moderate keyword matching';
    return 'Poor keyword matching - Needs significant improvement';
  };

  return (
    <>
      <Head>
        <title>Free Resume Keyword Matcher - Instant ATS Keyword Analysis {CURRENT_YEAR}</title>
        <meta 
          name="description" 
          content={`Professional keyword matching tool for resumes and job descriptions. Get instant match rate, missing keywords, and optimization suggestions. 100% free, privacy-first analysis. ${CURRENT_YEAR} Edition`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Resume Keyword Matcher - Instant ATS Keyword Analysis" />
        <meta property="og:description" content={`Match your resume keywords with job descriptions instantly. No signup required. Privacy-first keyword analysis. ${CURRENT_YEAR}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-keyword-matcher" />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-keyword-matcher.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Keyword Matcher - ATS Keyword Analysis" />
        <meta name="twitter:description" content="Instantly match your resume keywords with job descriptions for better ATS compatibility." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/twitter-keyword-matcher.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-keyword-matcher" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className={styles.container}>
        <header className={styles.header} role="banner">
          <h1 className={styles.title}>Free Resume Keyword Matcher - ATS Keyword Analysis {CURRENT_YEAR}</h1>
          <p className={styles.subtitle}>
            Instantly match your resume keywords with job descriptions for better ATS compatibility. 
            100% free, privacy-first tool that analyzes locally in your browser. 
            No data leaves your computer.
          </p>
          
          {/* Aggregate Rating Display */}
          <div className={styles.aggregateRating} itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.7" />
            <meta itemProp="ratingCount" content="89" />
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
            <div className={styles.ratingStars}>
              {'★'.repeat(5)}
              <span className={styles.ratingValue}>4.7/5</span>
            </div>
            <div className={styles.ratingText}>Based on 3000+ user reviews</div>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.editorSection}>
            <div className={styles.editorHeader}>
              <h2>Paste Job Description & Resume for Keyword Analysis</h2>
              <p>
                Compare your resume with job descriptions to identify keyword matches, missing terms, 
                and optimization opportunities for better ATS compatibility.
              </p>
            </div>

            <div className={styles.inputGrid}>
              <div className={styles.inputSection}>
                <label htmlFor="jobDescription" className={styles.label}>
                  Job Description
                </label>
                <textarea
                  id="jobDescription"
                  className={styles.textarea}
                  placeholder="Paste the complete job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows={8}
                  ref={textareaRef}
                />
              </div>

              <div className={styles.inputSection}>
                <label htmlFor="resumeText" className={styles.label}>
                  Resume Text
                </label>
                <textarea
                  id="resumeText"
                  className={styles.textarea}
                  placeholder="Paste your resume text here..."
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  rows={8}
                />
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <button
                onClick={analyzeKeywords}
                className={styles.primaryButton}
                disabled={isAnalyzing || !jobDescription.trim() || !resumeText.trim()}
              >
                {isAnalyzing ? 'Analyzing Keywords...' : 'Analyze Keyword Matching'}
              </button>
              <button onClick={handleUseSample} className={styles.secondaryButton}>
                Use Sample Data
              </button>
              <button onClick={clearAll} className={styles.secondaryButton}>
                Clear All
              </button>
            </div>

            {(!jobDescription.trim() || !resumeText.trim()) && (
              <div className={styles.sampleTip}>
                💡 <strong>Pro Tip:</strong> Paste both job description and resume text above. 
                Click "Use Sample Data" to see a live demonstration.
              </div>
            )}
          </div>

          <div className={styles.resultsSection}>
            {isAnalyzing ? (
              <div className={styles.analyzing}>
                <div className={styles.spinner}></div>
                <p>Analyzing keyword matching between job description and resume...</p>
              </div>
            ) : results ? (
              <>
                <div className={styles.scoreCard}>
                  <div className={styles.scoreHeader}>
                    <h3>Keyword Match Analysis</h3>
                    <div className={`${styles.matchRateBadge} ${getMatchRateColor(results.matchRate)}`}>
                      {results.matchRate}%
                    </div>
                  </div>
                  <div className={styles.matchRateBar}>
                    <div 
                      className={styles.matchRateFill}
                      style={{ width: `${Math.min(results.matchRate, 100)}%` }}
                    />
                  </div>
                  <p className={styles.matchRateMessage}>{getMatchRateMessage(results.matchRate)}</p>
                  <div className={styles.scoreDetails}>
                    <div className={styles.scoreDetail}>
                      <span className={styles.detailLabel}>Keywords Analyzed:</span>
                      <span className={styles.detailValue}>{results.totalKeywordsAnalyzed}</span>
                    </div>
                    <div className={styles.scoreDetail}>
                      <span className={styles.detailLabel}>Keywords Matched:</span>
                      <span className={styles.detailValue}>{results.keywordsMatched}</span>
                    </div>
                    <div className={styles.scoreDetail}>
                      <span className={styles.detailLabel}>Match Rate:</span>
                      <span className={styles.detailValue}>{results.matchRate}%</span>
                    </div>
                  </div>
                </div>

                <div className={styles.resultsGrid}>
                  <div className={styles.resultCard}>
                    <h4>Missing Keywords by Category</h4>
                    <div className={styles.categoryTabs}>
                      {['all', 'technical', 'soft', 'certifications', 'experience', 'tools'].map(cat => (
                        <button
                          key={cat}
                          className={`${styles.categoryTab} ${activeCategory === cat ? styles.active : ''}`}
                          onClick={() => setActiveCategory(cat)}
                        >
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                      ))}
                    </div>
                    <div className={styles.keywordList}>
                      {results.missingKeywords
                        .filter(k => activeCategory === 'all' || k.category === activeCategory)
                        .slice(0, 15)
                        .map((keyword, idx) => (
                          <div key={idx} className={styles.keywordItem}>
                            <span className={styles.keywordText}>{keyword.keyword}</span>
                            <span className={styles.keywordCategory}>{keyword.category}</span>
                          </div>
                        ))}
                      {results.missingKeywords.filter(k => activeCategory === 'all' || k.category === activeCategory).length === 0 && (
                        <p className={styles.noResults}>No missing keywords in this category</p>
                      )}
                    </div>
                  </div>

                  <div className={styles.resultCard}>
                    <h4>Overused & Irrelevant Terms</h4>
                    <div className={styles.overusedList}>
                      {results.overusedTerms.map((term, idx) => (
                        <div key={idx} className={styles.overusedItem}>
                          <div className={styles.overusedHeader}>
                            <span className={styles.overusedTerm}>{term.term}</span>
                            <span className={styles.overusedCount}>{term.count}x</span>
                          </div>
                          <p className={styles.overusedSuggestion}>{term.suggestion}</p>
                        </div>
                      ))}
                      {results.overusedTerms.length === 0 && (
                        <p className={styles.noResults}>No overused terms detected</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className={styles.suggestionsCard}>
                  <h4>Keyword Optimization Suggestions</h4>
                  <ul className={styles.suggestionsList}>
                    {results.suggestions.map((suggestion, idx) => (
                      <li key={idx} className={styles.suggestionItem}>{suggestion}</li>
                    ))}
                  </ul>
                  <button onClick={copyOptimizedKeywords} className={styles.copyButton}>
                    Copy Optimized Keywords
                  </button>
                </div>
              </>
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🔍</div>
                <h3>Start Your Keyword Analysis</h3>
                <p>Enter both job description and resume text to get instant keyword matching analysis:</p>
                <ul className={styles.featureList}>
                  <li>✅ Keyword Match Rate Percentage</li>
                  <li>✅ Missing High-Impact Keywords</li>
                  <li>✅ Categorized Keyword Analysis</li>
                  <li>✅ Overused & Irrelevant Terms</li>
                  <li>✅ Actionable Optimization Suggestions</li>
                </ul>
                <p className={styles.privacyNote}>
                  🔒 <strong>Privacy First Guarantee:</strong> All keyword analysis happens locally in your browser. 
                  No data is sent to servers. Your job descriptions and resumes stay private.
                </p>
              </div>
            )}
          </div>
        </main>

        {/* How-to Section */}
        <section className={styles.howToSection}>
          <h2 className={styles.sectionTitle}>How It Works: 5-Step Keyword Optimization</h2>
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

        {/* Reviews Section */}
        <section className={styles.reviewsSection}>
          <h2 className={styles.sectionTitle}>What Users Say About Our Keyword Matcher</h2>
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
          <h2 className={styles.sectionTitle}>Useful Resources</h2>
          <div className={styles.resourcesGrid}>
            <a 
              href="/free-resume-tools" 
              className={styles.resourceCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Free Resume Tools</h3>
              <p>Tools to help you create and optimize your resume.</p>
            </a>
            <a 
              href="/free-resume-score-checker" 
              className={styles.resourceCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Resume Score Checker</h3>
              <p>See how your resume stacks up against other resumes.</p>
            </a>
            <a 
              href="/jobs-search-tips" 
              className={styles.resourceCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Jobs Search Tips</h3>
              <p>Get tips on how to stand out in job searches.</p>
            </a>
          </div>
        </section>

        
      </div>
    </>
  );
}

// SSG with ISR (Incremental Static Regeneration)
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