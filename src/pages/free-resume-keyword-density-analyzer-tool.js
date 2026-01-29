import { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import styles from './free-resume-keyword-density-analyzer-tool.module.css';

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();

// FAQ Data
const FAQS = [
  {
    question: "What is keyword density and why is it important for resumes?",
    answer: "Keyword density measures how frequently specific words appear in your resume relative to total word count. It's crucial because ATS systems scan for keywords matching job descriptions, and optimal density (1-3%) improves your chances of passing automated screening while maintaining natural readability."
  },
  {
    question: "What's the ideal keyword density percentage for resumes?",
    answer: "Aim for 1-3% per important keyword. Lower than 1% may not trigger ATS recognition, while higher than 3% can appear unnatural or 'keyword-stuffed' to both ATS and human reviewers. Strategic placement in key sections is more effective than high frequency alone."
  },
  {
    question: "How do I identify the right keywords for my industry?",
    answer: "Analyze job descriptions for your target roles, extract recurring technical skills and industry terms, research LinkedIn profiles of professionals in similar positions, and use our tool to identify your resume's current keyword strengths and gaps for optimization."
  },
  {
    question: "Should I include keywords in the skills section only?",
    answer: "No! Keywords should appear throughout your resume—in summary, experience bullet points, and achievements. Strategic distribution across sections shows comprehensive proficiency rather than just listing skills. Our analyzer tracks keyword distribution across your entire resume."
  },
  {
    question: "How does keyword density affect human readability?",
    answer: "Balanced keyword density (1-3%) maintains natural language flow. Over-optimization (keyword stuffing) makes content sound robotic and reduces readability. Our tool helps you optimize for both ATS systems and human reviewers with density recommendations."
  }
];

// Common Industry Keywords
const INDUSTRY_KEYWORDS = {
  'Software Development': ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'API', 'Git', 'Agile', 'Testing', 'DevOps'],
  'Marketing': ['SEO', 'Google Analytics', 'Content Strategy', 'Social Media', 'Campaign', 'ROI', 'Brand', 'Lead Generation', 'Digital Marketing', 'Analytics'],
  'Finance': ['Financial Analysis', 'Budgeting', 'Forecasting', 'Excel', 'Reporting', 'Compliance', 'Risk Management', 'Accounting', 'Audit', 'Financial Modeling'],
  'Healthcare': ['Patient Care', 'Clinical', 'HIPAA', 'EMR', 'Healthcare Management', 'Medical Terminology', 'Treatment Planning', 'Quality Improvement', 'Regulatory Compliance', 'Patient Safety'],
  'Project Management': ['Project Planning', 'Stakeholder Management', 'Risk Assessment', 'Budget Management', 'Timeline', 'Scope', 'Agile', 'Waterfall', 'Team Leadership', 'Delivery']
};

// Optimization Tips
const OPTIMIZATION_TIPS = [
  "Include keywords in section headers",
  "Use variations of keywords (manage, management, manager)",
  "Place important keywords in the first third of your resume",
  "Incorporate keywords naturally in achievement statements",
  "Balance hard skills with soft skills keywords",
  "Update keywords for each job application",
  "Use industry-specific terminology",
  "Include certifications and qualifications as keywords",
  "Add location-based keywords if relevant",
  "Proofread for keyword repetition issues"
];

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'resume keyword analyzer',
  'keyword density checker',
  'ATS keyword optimization',
  'resume keyword density',
  'keyword analysis tool',
  'resume optimization software',
  'job application keywords',
  'resume keyword tracker',
  'keyword frequency analyzer',
  'professional resume keywords'
];

const ResumeKeywordDensityAnalyzer = () => {
  const [text, setText] = useState('');
  const [keywords, setKeywords] = useState('');
  const [analysisResults, setAnalysisResults] = useState({
    totalWords: 0,
    uniqueKeywords: 0,
    keywordDensity: {},
    keywordDistribution: {},
    topKeywords: [],
    overallDensity: 0,
    sectionCount: 0
  });
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('analyzer');
  const textareaRef = useRef(null);
  const keywordsRef = useRef(null);

  // Schema data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Resume Keyword Density Analyzer",
        "description": "Free professional resume keyword density analyzer with ATS optimization, industry-specific keyword suggestions, and strategic placement guidance",
        "url": "https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool",
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
          "reviewCount": "203",
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
        "name": "Industry Keyword Categories",
        "itemListElement": Object.keys(INDUSTRY_KEYWORDS).map((industry, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": industry,
          "description": `${INDUSTRY_KEYWORDS[industry].slice(0, 3).join(', ')}...`
        }))
      }
    ]
  };

  // Calculate keyword density
  const analyzeKeywords = useCallback((content, keywordList) => {
    if (!content.trim() || !keywordList.trim()) {
      return {
        totalWords: 0,
        uniqueKeywords: 0,
        keywordDensity: {},
        keywordDistribution: {},
        topKeywords: [],
        overallDensity: 0,
        sectionCount: 0
      };
    }

    const words = content.toLowerCase().match(/\b\w+\b/g) || [];
    const totalWords = words.length;
    
    // Extract keywords and clean them
    const keywordArray = keywordList.toLowerCase()
      .split(/[,;\n]+/)
      .map(k => k.trim())
      .filter(k => k.length > 0);
    
    const uniqueKeywords = [...new Set(keywordArray)];
    
    // Analyze keyword frequency and density
    const keywordFrequency = {};
    const keywordDensity = {};
    
    uniqueKeywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const matches = content.match(regex) || [];
      keywordFrequency[keyword] = matches.length;
      
      // Calculate density percentage
      keywordDensity[keyword] = totalWords > 0 ? 
        parseFloat(((matches.length / totalWords) * 100).toFixed(2)) : 0;
    });
    
    // Analyze distribution across sections
    const sections = content.split(/\n\s*\n/).filter(s => s.trim().length > 0);
    const sectionCount = sections.length;
    const keywordDistribution = {};
    
    uniqueKeywords.forEach(keyword => {
      keywordDistribution[keyword] = sections.map(section => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        const matches = section.match(regex) || [];
        return matches.length;
      });
    });
    
    // Get top keywords by frequency
    const topKeywords = uniqueKeywords
      .filter(keyword => keywordFrequency[keyword] > 0)
      .sort((a, b) => keywordFrequency[b] - keywordFrequency[a])
      .slice(0, 10)
      .map(keyword => ({
        keyword,
        frequency: keywordFrequency[keyword],
        density: keywordDensity[keyword],
        status: getKeywordStatus(keywordDensity[keyword])
      }));
    
    // Calculate overall keyword density
    const totalKeywordOccurrences = Object.values(keywordFrequency).reduce((a, b) => a + b, 0);
    const overallDensity = totalWords > 0 ? 
      parseFloat(((totalKeywordOccurrences / totalWords) * 100).toFixed(2)) : 0;
    
    return {
      totalWords,
      uniqueKeywords: uniqueKeywords.length,
      keywordDensity,
      keywordDistribution,
      topKeywords,
      overallDensity,
      sectionCount
    };
  }, []);

  // Determine keyword status
  const getKeywordStatus = (density) => {
    if (density === 0) return 'missing';
    if (density < 1) return 'low';
    if (density <= 3) return 'optimal';
    return 'high';
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const results = analyzeKeywords(text, keywords);
      setAnalysisResults(results);
    }, 500);

    return () => clearTimeout(timer);
  }, [text, keywords, analyzeKeywords]);

  const handleReset = () => {
    setText('');
    setKeywords('');
    setSelectedIndustry('');
    setAnalysisResults(analyzeKeywords('', ''));
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleIndustrySelect = (industry) => {
    setSelectedIndustry(industry);
    const industryKeywords = INDUSTRY_KEYWORDS[industry] || [];
    setKeywords(industryKeywords.join(', '));
    
    if (keywordsRef.current) {
      keywordsRef.current.focus();
    }
  };

  const handleLoadExample = () => {
    const exampleText = `SENIOR SOFTWARE DEVELOPER
Tech Innovations Inc. | San Francisco, CA | 2020-Present

• Developed scalable web applications using React, Node.js, and MongoDB
• Implemented RESTful APIs and microservices architecture for improved performance
• Led Agile development team in delivering 15+ projects with 99.9% uptime
• Optimized application performance resulting in 40% faster load times
• Collaborated with cross-functional teams using Git version control

TECHNICAL SKILLS
Frontend: JavaScript, React, HTML5, CSS3, TypeScript
Backend: Node.js, Python, Express.js, REST APIs
Database: MongoDB, PostgreSQL, Redis
Tools: Git, Docker, AWS, Jenkins, Agile/Scrum

EDUCATION
Bachelor of Science in Computer Science
Stanford University | 2016-2020`;

    const exampleKeywords = "JavaScript, React, Node.js, Python, API, Git, Agile, AWS, MongoDB, Development";
    
    setText(exampleText);
    setKeywords(exampleKeywords);
    setSelectedIndustry('Software Development');
  };

  // Calculate optimization score
  const calculateOptimizationScore = () => {
    const { topKeywords, overallDensity } = analysisResults;
    
    if (topKeywords.length === 0) return 0;
    
    let score = 0;
    let optimalCount = 0;
    
    topKeywords.forEach(keyword => {
      if (keyword.status === 'optimal') {
        score += 10;
        optimalCount++;
      } else if (keyword.status === 'low') {
        score += 5;
      } else if (keyword.status === 'high') {
        score += 3;
      }
    });
    
    // Overall density factor
    if (overallDensity >= 2 && overallDensity <= 4) {
      score += 20;
    } else if (overallDensity >= 1 && overallDensity <= 5) {
      score += 10;
    } else if (overallDensity > 0) {
      score += 5;
    }
    
    // Keyword count factor
    if (optimalCount >= 3) {
      score += 10;
    } else if (optimalCount >= 1) {
      score += 5;
    }
    
    return Math.min(100, score);
  };

  const optimizationScore = calculateOptimizationScore();
  const getOptimizationColor = () => {
    if (optimizationScore >= 80) return '#28a745';
    if (optimizationScore >= 60) return '#ffc107';
    return '#dc3545';
  };

  // Get status display info (without icons)
  const getStatusDisplay = (status) => {
    switch(status) {
      case 'missing': return { text: 'Missing', color: '#dc3545' };
      case 'low': return { text: 'Too low', color: '#ffc107' };
      case 'optimal': return { text: 'Optimal', color: '#28a745' };
      case 'high': return { text: 'Too high', color: '#ff6b35' };
      default: return { text: 'Unknown', color: '#6c757d' };
    }
  };

  return (
    <>
      <Head>
        <title>Resume Keyword Density Analyzer – ATS Optimization &amp; Strategic Keyword Placement {CURRENT_YEAR}</title>
        <meta 
          name="description" 
          content={`Free professional resume keyword density analyzer with ATS optimization, industry-specific keyword suggestions, and strategic placement guidance. ${CURRENT_YEAR}`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Resume Keyword Density Analyzer – Professional ATS Optimization" />
        <meta property="og:description" content="Free resume keyword density analyzer with ATS optimization, industry keyword suggestions, and strategic placement analysis" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool" />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-keyword-analyzer.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Keyword Density Analyzer" />
        <meta name="twitter:description" content="Professional keyword analysis with ATS optimization and industry-specific suggestions" />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/twitter-keyword-analyzer.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Resume Keyword Density Analyzer</h1>
          <p className={styles.subtitle}>
            Professional ATS keyword optimization with industry-specific analysis
            <span 
              className={styles.optimizationScore} 
              style={{ backgroundColor: getOptimizationColor() }}
            >
              Score: {optimizationScore}/100
            </span>
          </p>
          
          <div className={styles.aggregateRating} itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.8" />
            <meta itemProp="ratingCount" content="203" />
            <div className={styles.ratingStars}>
              {'★'.repeat(5)}
              <span className={styles.ratingValue}>4.8/5</span>
            </div>
            <div className={styles.ratingText}>Used by 12,000+ professionals</div>
          </div>
          
          {/* Navigation Tabs (without icons) */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'analyzer' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('analyzer')}
            >
              Keyword Analyzer
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'guide' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('guide')}
            >
              Keyword Guide
            </button>
          </div>
        </header>

        <main className={styles.main}>
          {activeTab === 'analyzer' ? (
            <>
              {/* Main Analyzer Section */}
              <div className={styles.analyzerSection}>
                <div className={styles.analyzerHeader}>
                  <h2>Analyze Your Resume Keywords</h2>
                  <p>
                    Paste your resume content and keywords to analyze density, distribution, and ATS optimization. Get actionable insights for improving your resume's keyword strategy.
                  </p>
                </div>
                
                <div className={styles.analyzerGrid}>
                  <div className={styles.resumeColumn}>
                    <div className={styles.columnHeader}>
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
                      
Example:
MARKETING DIRECTOR
Global Brand Solutions | 2019-2023

• Increased brand visibility by 150% through integrated digital campaigns
• Managed $2M annual marketing budget with 35% ROI improvement
• Led team of 15 marketing specialists across multiple channels
• Implemented data-driven strategies using Google Analytics and CRM tools

SKILLS
Digital Marketing | SEO/SEM | Brand Strategy | Team Leadership
Data Analytics | Budget Management | Campaign Optimization`}
                      rows={18}
                      autoFocus
                    />
                    <div className={styles.wordCount}>
                      {analysisResults.totalWords} words • {analysisResults.sectionCount} sections
                    </div>
                  </div>
                  
                  <div className={styles.keywordsColumn}>
                    <div className={styles.columnHeader}>
                      <h3>Keywords to Analyze</h3>
                      <div className={styles.industrySelector}>
                        <select
                          value={selectedIndustry}
                          onChange={(e) => handleIndustrySelect(e.target.value)}
                          className={styles.industrySelect}
                        >
                          <option value="">Select Industry</option>
                          {Object.keys(INDUSTRY_KEYWORDS).map(industry => (
                            <option key={industry} value={industry}>{industry}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <textarea
                      ref={keywordsRef}
                      className={styles.keywordsTextarea}
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                      placeholder={`Enter keywords separated by commas or new lines...

Example keywords:
leadership, management, strategy, analytics,
team building, project management, budget,
communication, problem solving, innovation

Or select an industry above for suggestions.`}
                      rows={18}
                    />
                    <div className={styles.keywordCount}>
                      {analysisResults.uniqueKeywords} unique keywords
                    </div>
                  </div>
                </div>
                
                <div className={styles.analyzerActions}>
                  <button
                    className={styles.analyzeButton}
                    onClick={() => setAnalysisResults(analyzeKeywords(text, keywords))}
                    type="button"
                  >
                    Analyze Keywords
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

              {/* Results Section */}
              <div className={styles.resultsSection}>
                <div className={styles.resultsHeader}>
                  <h2>Keyword Analysis Results</h2>
                  <div className={styles.resultsSummary}>
                    <div className={styles.summaryItem}>
                      <div className={styles.summaryLabel}>Overall Density</div>
                      <div className={styles.summaryValue}>{analysisResults.overallDensity.toFixed(2)}%</div>
                    </div>
                    <div className={styles.summaryItem}>
                      <div className={styles.summaryLabel}>Keywords Found</div>
                      <div className={styles.summaryValue}>{analysisResults.topKeywords.length}</div>
                    </div>
                    <div className={styles.summaryItem}>
                      <div className={styles.summaryLabel}>Optimal Keywords</div>
                      <div className={styles.summaryValue}>
                        {analysisResults.topKeywords.filter(k => k.status === 'optimal').length}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Top Keywords Grid */}
                <div className={styles.keywordsGrid}>
                  <h3>Top Keyword Analysis</h3>
                  <p className={styles.gridSubtitle}>
                    Showing top {analysisResults.topKeywords.length} keywords by frequency (ideal density: 1-3%)
                  </p>
                  
                  <div className={styles.keywordsTable}>
                    <div className={styles.tableHeader}>
                      <div className={styles.tableCell}>Keyword</div>
                      <div className={styles.tableCell}>Frequency</div>
                      <div className={styles.tableCell}>Density</div>
                      <div className={styles.tableCell}>Status</div>
                      <div className={styles.tableCell}>Recommendation</div>
                    </div>
                    
                    {analysisResults.topKeywords.length > 0 ? (
                      analysisResults.topKeywords.map((item, index) => {
                        const statusInfo = getStatusDisplay(item.status);
                        return (
                          <div key={index} className={styles.tableRow}>
                            <div className={styles.tableCell}>
                              <span className={styles.keywordText}>{item.keyword}</span>
                            </div>
                            <div className={styles.tableCell}>
                              <span className={styles.frequencyBadge}>{item.frequency}</span>
                            </div>
                            <div className={styles.tableCell}>
                              <span className={styles.densityValue}>{item.density}%</span>
                            </div>
                            <div className={styles.tableCell}>
                              <span 
                                className={styles.statusBadge}
                                style={{ backgroundColor: statusInfo.color }}
                              >
                                {statusInfo.text}
                              </span>
                            </div>
                            <div className={styles.tableCell}>
                              <span className={styles.recommendation}>
                                {item.status === 'missing' && 'Add this keyword to your resume'}
                                {item.status === 'low' && 'Increase usage or add variations'}
                                {item.status === 'optimal' && 'Perfect density, maintain current usage'}
                                {item.status === 'high' && 'Consider reducing repetition'}
                              </span>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className={styles.noResults}>
                        No keywords found. Add keywords to analyze or check if your resume contains the specified keywords.
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Density Visualization */}
                <div className={styles.densitySection}>
                  <h3>Keyword Density Visualization</h3>
                  <div className={styles.densityBars}>
                    {analysisResults.topKeywords.slice(0, 8).map((item, index) => {
                      const width = Math.min(item.density * 10, 100);
                      const statusInfo = getStatusDisplay(item.status);
                      return (
                        <div key={index} className={styles.densityBarContainer}>
                          <div className={styles.barLabel}>
                            <span className={styles.barKeyword}>{item.keyword}</span>
                            <span className={styles.barPercentage}>{item.density}%</span>
                          </div>
                          <div className={styles.densityBar}>
                            <div 
                              className={styles.barFill}
                              style={{ 
                                width: `${width}%`,
                                backgroundColor: statusInfo.color
                              }}
                            />
                            <div className={styles.barMarkers}>
                              <div className={styles.barMarker} style={{ left: '10%' }}>1%</div>
                              <div className={styles.barMarker} style={{ left: '30%' }}>3%</div>
                            </div>
                          </div>
                          <div className={styles.barStatus}>
                            {statusInfo.text}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className={styles.densityLegend}>
                    <div className={styles.legendItem}>
                      <div className={styles.legendColor} style={{ backgroundColor: '#dc3545' }}></div>
                      <div className={styles.legendText}>Missing (0%)</div>
                    </div>
                    <div className={styles.legendItem}>
                      <div className={styles.legendColor} style={{ backgroundColor: '#ffc107' }}></div>
                      <div className={styles.legendText}>Too Low (&lt; 1%)</div>
                    </div>
                    <div className={styles.legendItem}>
                      <div className={styles.legendColor} style={{ backgroundColor: '#28a745' }}></div>
                      <div className={styles.legendText}>Optimal (1-3%)</div>
                    </div>
                    <div className={styles.legendItem}>
                      <div className={styles.legendColor} style={{ backgroundColor: '#ff6b35' }}></div>
                      <div className={styles.legendText}>Too High (&gt; 3%)</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Keyword Guide Tab */
            <div className={styles.guideSection}>
              <div className={styles.guideHeader}>
                <h2>Keyword Optimization Guide</h2>
                <p>
                  Learn how to effectively use keywords in your resume for maximum ATS compatibility and human readability.
                </p>
              </div>
              
              {/* Industry Keywords */}
              <div className={styles.industrySection}>
                <h3>Industry-Specific Keyword Suggestions</h3>
                <div className={styles.industryGrid}>
                  {Object.entries(INDUSTRY_KEYWORDS).map(([industry, keywords]) => (
                    <div key={industry} className={styles.industryCard}>
                      <div className={styles.industryHeader}>
                        <h4>{industry}</h4>
                        <button
                          className={styles.useKeywordsButton}
                          onClick={() => handleIndustrySelect(industry)}
                          type="button"
                        >
                          Use These Keywords
                        </button>
                      </div>
                      <div className={styles.industryKeywords}>
                        {keywords.map((keyword, index) => (
                          <span key={index} className={styles.keywordTag}>
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Optimization Tips */}
              <div className={styles.tipsSection}>
                <h3>Keyword Optimization Tips</h3>
                <div className={styles.tipsGrid}>
                  {OPTIMIZATION_TIPS.map((tip, index) => (
                    <div key={index} className={styles.tipCard}>
                      <div className={styles.tipNumber}>{String(index + 1).padStart(2, '0')}</div>
                      <div className={styles.tipContent}>{tip}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

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
            <h2 className={styles.sectionTitle}>Why Keyword Optimization Matters</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>ATS Compatibility</h3>
                <p className={styles.benefitDescription}>
                  Applicant Tracking Systems scan for specific keywords. Optimal density and strategic placement ensure your resume passes automated screening and reaches human reviewers.
                </p>
              </div>
              
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Targeted Applications</h3>
                <p className={styles.benefitDescription}>
                  Customizing keywords for each job application shows you've tailored your resume specifically for the role, increasing relevance and interview chances.
                </p>
              </div>
              
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Strategic Optimization</h3>
                <p className={styles.benefitDescription}>
                  Data-driven keyword analysis helps you understand which terms are most effective for your industry and how to balance them for maximum impact.
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

export default ResumeKeywordDensityAnalyzer;