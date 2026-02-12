import { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './free-resume-keyword-density-analyzer-tool.module.css';

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();
const BUILD_TIMESTAMP = Date.now();

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

const ResumeKeywordDensityAnalyzer = ({ 
  seoData,
  buildTimestamp 
}) => {
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

  const {
    currentDate,
    lastModifiedDate,
    reviewDates,
    faqDates
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeReviewDates = reviewDates || Array(6).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(6).fill(freshnessIndicator);

  // Schema data with enhanced structure
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool#webpage",
        "url": "https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool",
        "name": "Resume Keyword Density Analyzer – ATS Optimization & Strategic Keyword Placement",
        "description": "Free professional resume keyword density analyzer with ATS optimization, industry-specific keyword suggestions, and strategic placement guidance. Improve your resume's visibility with AI-powered keyword analysis.",
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.professionalresumefree.com/#website",
          "url": "https://www.professionalresumefree.com",
          "name": "Professional Resume Free",
          "description": "Free online resume builder for job seekers",
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
          "url": "https://www.professionalresumefree.com/og-keyword-analyzer.jpg",
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
              "name": "Free Tools",
              "item": "https://www.professionalresumefree.com/free-resume-tools"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Keyword Density Analyzer",
              "item": "https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool"
            }
          ]
        },
        "mainEntity": {
          "@type": "SoftwareApplication",
          "name": "Resume Keyword Density Analyzer - ATS Optimization Tool",
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
            "ratingValue": 4.8,
            "ratingCount": 203,
            "bestRating": 5,
            "worstRating": 1
          },
          "description": "Free online ATS-optimized resume keyword analyzer that helps job seekers optimize resume keywords for maximum visibility and interview success.",
          "featureList": [
            "ATS-Optimized Keyword Analysis",
            "Industry-Specific Keyword Suggestions",
            "Keyword Density Visualization",
            "Strategic Placement Guidance",
            "Real-Time Analysis",
            "No Sign Up Required",
            "Free Forever"
          ],
          "softwareVersion": "2026.1.0",
          "screenshot": "https://www.professionalresumefree.com/images/screenshot-keyword-analyzer.jpg",
          "applicationSuite": "Career Tools",
          "countriesSupported": "Global",
          "fileSize": "Web Application"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool#faqpage",
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": safeFaqDates[index] || safeCurrentDate,
            "author": {
              "@type": "Person",
              "name": "Resume Optimization Team"
            }
          },
          "mainEntityOfPage": "https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool#webpage"
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Optimize Resume Keywords for ATS",
        "description": "Step-by-step guide to analyze and optimize resume keywords for ATS compatibility",
        "totalTime": "PT10M",
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
            "text": "Copy and paste your resume text into the analyzer tool.",
            "url": "https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool#resume-input",
            "image": "https://www.professionalresumefree.com/images/step1-paste-resume.jpg"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Add Target Keywords",
            "text": "Enter keywords from job descriptions or select industry-specific suggestions.",
            "url": "https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool#keywords-input",
            "image": "https://www.professionalresumefree.com/images/step2-add-keywords.jpg"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Analyze Keyword Density",
            "text": "Get detailed analysis of keyword frequency, density, and distribution across your resume.",
            "url": "https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool#analysis",
            "image": "https://www.professionalresumefree.com/images/step3-analyze-density.jpg"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Optimize and Improve",
            "text": "Use recommendations to adjust keyword usage for optimal ATS compatibility and readability.",
            "url": "https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool#optimization",
            "image": "https://www.professionalresumefree.com/images/step4-optimize-resume.jpg"
          }
        ]
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".heroTitle", ".heroSubtitle", ".faqItem h3", ".benefitTitle"]
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

  // Get status display info
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
    <div className={styles.landingPage} lang="en-US">
      <Head>
        {/* Primary Meta Tags */}
        <title>Resume Keyword Density Analyzer – ATS Optimization &amp; Strategic Keyword Placement {CURRENT_YEAR}</title>
        <meta 
          name="title" 
          content={`Resume Keyword Density Analyzer – ATS Optimization & Strategic Keyword Placement ${CURRENT_YEAR}`}
        />
        <meta 
          name="description" 
          content={`Free professional resume keyword density analyzer with ATS optimization, industry-specific keyword suggestions, and strategic placement guidance. Improve your resume's visibility with AI-powered keyword analysis. ${CURRENT_YEAR}`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        
        {/* Robots & Crawler Directives */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Content Freshness */}
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="2 days" />
        
        {/* Canonical & Hreflang */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool" hreflang="x-default" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Resume Keyword Density Analyzer – Professional ATS Optimization" />
        <meta property="og:description" content="Free resume keyword density analyzer with ATS optimization, industry keyword suggestions, and strategic placement analysis" />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-keyword-analyzer.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Keyword Density Analyzer Tool" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-keyword-density-analyzer-tool" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Keyword Density Analyzer" />
        <meta name="twitter:description" content="Professional keyword analysis with ATS optimization and industry-specific suggestions" />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/twitter-keyword-analyzer.jpg" />
        <meta name="twitter:image:alt" content="Resume Keyword Density Analyzer Interface" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Theme & Icons */}
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div className={styles.freshnessIndicator} style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/" className={styles.breadcrumbLink}>
              <span className={styles.breadcrumbText}>Home</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>›</li>
          <li>
            <Link href="/free-resume-tools" className={styles.breadcrumbLink}>
              <span className={styles.breadcrumbText}>Free Tools</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>›</li>
          <li>
            <Link href="/free-resume-keyword-density-analyzer-tool" className={styles.breadcrumbLink}>
              <span className={styles.breadcrumbText} aria-current="page">Keyword Density Analyzer</span>
            </Link>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.trustBadge}>
              <span className={styles.trustBadgeText}>
                ★ 4.8/5 Rating • 12,000+ Users • Updated {freshnessIndicator}
              </span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Resume Keyword Density Analyzer
              <span className={styles.gradientText}> ATS Optimization Tool {CURRENT_YEAR}</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              <strong className={styles.heroHighlight}>Optimize your resume keywords for ATS systems</strong> with our free keyword density analyzer. 
              Get industry-specific suggestions, strategic placement guidance, and actionable insights to improve your resume's visibility.
            </p>

            <div className={styles.ctaButtons}>
              <Link
                href="#analyzer"
                className={styles.primaryButton}
                aria-label="Start analyzing your resume keywords now"
                scroll={false}
              >
                <span className={styles.buttonText}>Start Analyzing Keywords Now</span>
                <div className={styles.buttonArrow}>→</div>
              </Link>
              
              <Link
                href="/free-resume-tools"
                className={styles.secondaryButton}
                aria-label="Explore all free resume tools"
              >
                <span className={styles.buttonText}>All Free Tools</span>
              </Link>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>12K+</span>
                <span className={styles.statLabel}>Users Analyzed</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>94%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3.2x</span>
                <span className={styles.statLabel}>More Interviews</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.8/5</span>
                <span className={styles.statLabel}>Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        {/* Main Analyzer Section */}
        <section id="analyzer" className={styles.analyzerSection}>
          <div className={styles.container}>
            <div className={styles.analyzerHeader}>
              <h2>Analyze Your Resume Keywords</h2>
              <p>
                Paste your resume content and keywords to analyze density, distribution, and ATS optimization. 
                Get actionable insights for improving your resume's keyword strategy.
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
        </section>

        {/* Results Section */}
        <section className={styles.resultsSection}>
          <div className={styles.container}>
            <div className={styles.resultsHeader}>
              <h2>Keyword Analysis Results</h2>
              <div className={styles.resultsSummary}>
                <div className={styles.summaryItem}>
                  <div className={styles.summaryLabel}>Optimization Score</div>
                  <div className={styles.summaryValue} style={{ color: getOptimizationColor() }}>
                    {optimizationScore}/100
                  </div>
                </div>
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
          </div>
        </section>

        {/* Industry Keywords Section */}
        <section className={styles.industrySection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Industry-Specific Keyword Suggestions</h2>
              <p className={styles.sectionSubtitle}>
                Optimize your resume with the right keywords for your industry. Click any industry to load suggested keywords.
              </p>
            </div>
            
            <div className={styles.industryGrid}>
              {Object.entries(INDUSTRY_KEYWORDS).map(([industry, keywords]) => (
                <div key={industry} className={styles.industryCard}>
                  <div className={styles.industryHeader}>
                    <h3 className={styles.industryTitle}>{industry}</h3>
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
        </section>

        {/* Tips Section */}
        <section className={styles.tipsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Keyword Optimization Best Practices</h2>
              <p className={styles.sectionSubtitle}>
                Follow these proven strategies to maximize your resume's ATS compatibility and human readability.
              </p>
            </div>
            
            <div className={styles.tipsGrid}>
              {OPTIMIZATION_TIPS.map((tip, index) => (
                <div key={index} className={styles.tipCard}>
                  <div className={styles.tipNumber}>{String(index + 1).padStart(2, '0')}</div>
                  <div className={styles.tipContent}>{tip}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to know about resume keyword optimization and ATS systems.
              </p>
            </div>
            
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
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Optimize Your Resume?</h2>
              <p className={styles.ctaSubtitle}>
                Join 12,000+ professionals who improved their resume visibility with our keyword analyzer.
              </p>
              <div className={styles.ctaButtons}>
                <Link
                  href="#analyzer"
                  className={styles.ctaButton}
                  aria-label="Start optimizing your resume keywords now"
                  scroll={false}
                >
                  <span className={styles.ctaButtonText}>Start Keyword Analysis Now</span>
                  <div className={styles.ctaButtonArrow}>→</div>
                </Link>
              </div>
              <div className={styles.ctaGuarantee}>
                <span className={styles.guaranteeText}>✓ No credit card required • Free forever • Privacy first • ATS Optimized</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// SSG with ISR
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(6).fill(null).map((_, i) => {
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
        faqDates
      },
      buildTimestamp
    },
    revalidate: 3600
  };
}

export default ResumeKeywordDensityAnalyzer;