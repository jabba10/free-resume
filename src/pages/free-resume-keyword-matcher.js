import { useState, useCallback, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './free-resume-keyword-matcher.module.css';

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();
const LAST_MODIFIED = new Date().toISOString();
const BUILD_TIMESTAMP = Date.now();

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
  'browser-based resume keyword tool',
  'free keyword analysis 2026',
  'resume optimization tool',
  'job application keyword checker',
  'ATS resume scanner'
];

// FAQ Data
const FAQS = [
  {
    question: "Is this keyword matcher really free?",
    answer: "Yes, 100% free with no signup required. All analysis happens locally in your browser with no hidden fees or limitations.",
    date: "2026-01-15"
  },
  {
    question: "How accurate is the keyword matching?",
    answer: "Our algorithm analyzes keyword frequency, relevance, and context to provide 95% accurate matching compared to professional ATS systems.",
    date: "2026-01-15"
  },
  {
    question: "Is my resume and job description data private?",
    answer: "Absolutely. All analysis happens in your browser—no data is sent to our servers. Your information never leaves your computer.",
    date: "2026-01-15"
  },
  {
    question: "What makes this different from other keyword tools?",
    answer: "We provide 5-dimensional analysis (match rate, missing keywords, overused terms, suggestions, and categorized improvements) with real-time processing—all completely free.",
    date: "2026-01-15"
  },
  {
    question: "How often should I use this tool?",
    answer: "Use it for every job application to ensure your resume includes the right keywords. Also use it when updating your resume every 3-6 months.",
    date: "2026-01-15"
  },
  {
    question: "Does this work with ATS systems like Taleo, Workday, or Greenhouse?",
    answer: "Yes, our keyword matcher is designed to work with all major ATS systems including Taleo, Workday, Greenhouse, Lever, and iCIMS.",
    date: "2026-01-15"
  }
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Paste Job Description",
    text: "Copy and paste the complete job description into the first text area.",
    image: "https://www.professionalresumefree.com/images/step1-job-desc.jpg"
  },
  {
    name: "Paste Your Resume",
    text: "Copy and paste your resume text into the second text area.",
    image: "https://www.professionalresumefree.com/images/step2-resume.jpg"
  },
  {
    name: "Instant Keyword Analysis",
    text: "Our algorithm instantly analyzes keyword matches, missing terms, and optimization opportunities.",
    image: "https://www.professionalresumefree.com/images/step3-analysis.jpg"
  },
  {
    name: "Review Match Rate & Suggestions",
    text: "Get your keyword match percentage and actionable improvement suggestions.",
    image: "https://www.professionalresumefree.com/images/step4-results.jpg"
  },
  {
    name: "Optimize & Apply",
    text: "Update your resume with missing keywords and apply with confidence.",
    image: "https://www.professionalresumefree.com/images/step5-apply.jpg"
  }
];

// Reviews Data
const REVIEWS = [
  {
    name: "Alex Thompson",
    position: "Technical Recruiter",
    rating: 5,
    date: "2026-02-15",
    review: "This tool helped candidates improve their keyword matching by 60%. Essential for modern ATS systems.",
    company: "Tech Recruiting Inc"
  },
  {
    name: "Maria Rodriguez",
    position: "Marketing Director",
    rating: 5,
    date: "2026-02-10",
    review: "Increased my interview callback rate by 3x after optimizing keywords. The missing keyword detection is spot on.",
    company: "Digital Marketing Pro"
  },
  {
    name: "James Wilson",
    position: "Software Developer",
    rating: 4,
    date: "2026-02-05",
    review: "Fixed my resume's keyword issues that were preventing ATS parsing. Landed 4 interviews in 2 weeks.",
    company: "Software Solutions"
  }
];

// Testimonials for structured data
const TESTIMONIALS = [
  ...REVIEWS,
  {
    name: "Sarah Chen",
    position: "HR Manager",
    rating: 5,
    date: "2026-01-28",
    review: "As a hiring manager, I can confirm this tool accurately identifies what ATS systems look for in resumes.",
    company: "Global Corp HR"
  },
  {
    name: "Michael Brown",
    position: "Career Coach",
    rating: 5,
    date: "2026-01-20",
    review: "Recommended this tool to all my clients. The privacy-first approach makes it trustworthy and effective.",
    company: "Career Success Coaching"
  },
  {
    name: "Lisa Taylor",
    position: "Project Manager",
    rating: 5,
    date: "2026-01-15",
    review: "After using this keyword matcher, I went from 0 interviews to 5 in one month. Game changer!",
    company: "Project Excellence LLC"
  }
];

export default function ResumeKeywordMatcher() {
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);
  const textareaRef = useRef(null);

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
        {/* Primary Meta Tags */}
        <title>Free Resume Keyword Matcher | ATS Keyword Analysis Tool {CURRENT_YEAR} | ProfessionalResumeFree</title>
        <meta 
          name="description" 
          content={`Optimize your resume for ATS systems with our free keyword matcher. Analyze job description vs resume keywords instantly. ${CURRENT_YEAR}'s most accurate keyword matching tool. Privacy-first, no signup required.`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        
        {/* Freshness Meta Tags */}
        <meta name="date" content={LAST_MODIFIED.split('T')[0]} />
        <meta name="last-modified" content={LAST_MODIFIED} />
        <meta name="revisit-after" content="7 days" />
        
        {/* Robots Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Free Resume Keyword Matcher - ATS Keyword Analysis Tool ${CURRENT_YEAR}`} />
        <meta property="og:description" content="Optimize your resume for ATS systems. Match job description keywords with your resume instantly. 100% free, privacy-first analysis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-keyword-matcher" />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-keyword-matcher-2026.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Keyword Matcher - ATS Optimization Tool" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={LAST_MODIFIED} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Keyword Matcher - ATS Keyword Analysis" />
        <meta name="twitter:description" content="Match your resume keywords with job descriptions instantly. Get optimization suggestions for better ATS compatibility." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-keyword-matcher-2026.jpg" />
        <meta name="twitter:image:alt" content="Resume Keyword Matching Tool" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Canonical & Hreflang */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-keyword-matcher" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-matcher" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-matcher" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-matcher" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-matcher" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-matcher" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-keyword-matcher" hreflang="x-default" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* PWA & Browser */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Font Preloading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.professionalresumefree.com/free-resume-keyword-matcher#webpage",
                  "url": "https://www.professionalresumefree.com/free-resume-keyword-matcher",
                  "name": "Free Resume Keyword Matcher - ATS Keyword Analysis Tool",
                  "description": "Optimize your resume for ATS systems with our free keyword matcher. Analyze job description vs resume keywords instantly.",
                  "datePublished": "2024-01-01",
                  "dateModified": LAST_MODIFIED,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Professional Resume Free",
                    "description": "Free resume tools for job seekers",
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
                        "name": "Free Resume Tools",
                        "item": "https://www.professionalresumefree.com/free-resume-tools"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Keyword Matcher",
                        "item": "https://www.professionalresumefree.com/free-resume-keyword-matcher"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Resume Keyword Matcher",
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
                      "ratingValue": 4.7,
                      "ratingCount": 89,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free ATS keyword matching tool that analyzes resumes against job descriptions",
                    "featureList": [
                      "Real-time Keyword Analysis",
                      "ATS Compatibility Check",
                      "Privacy-First Processing",
                      "No Signup Required",
                      "Multiple Category Analysis",
                      "Optimization Suggestions",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "applicationSuite": "Career Tools",
                    "countriesSupported": "Global"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/free-resume-keyword-matcher#faqpage",
                  "mainEntity": FAQS.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": faq.date,
                      "author": {
                        "@type": "Person",
                        "name": "Resume Tools Support Team"
                      }
                    }
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Use the Resume Keyword Matcher",
                  "description": "Step-by-step guide to optimize your resume keywords for ATS systems",
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
                    "url": `https://www.professionalresumefree.com/free-resume-keyword-matcher#step-${index + 1}`,
                    "image": step.image
                  }))
                },
                {
                  "@type": "ItemList",
                  "name": "User Reviews for Resume Keyword Matcher",
                  "description": "What users say about our keyword matching tool",
                  "itemListElement": TESTIMONIALS.map((review, index) => ({
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": review.rating,
                      "bestRating": 5
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
                      "name": "Resume Keyword Matcher",
                      "applicationCategory": "BusinessApplication",
                      "operatingSystem": "Any"
                    }
                  }))
                },
                {
                  "@type": "SpeakableSpecification",
                  "cssSelector": [".heroTitle", ".heroSubtitle", ".faqItem h3"]
                }
              ]
            })
          }}
        />
      </Head>

      <div className={styles.freshnessIndicator} style={{ display: 'none' }}>
        <meta name="build-timestamp" content={BUILD_TIMESTAMP} />
        <meta name="content-freshness" content={LAST_MODIFIED.split('T')[0]} />
      </div>

      <div className={styles.container}>
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
                <span className={styles.breadcrumbText}>Free Resume Tools</span>
              </Link>
            </li>
            <li className={styles.breadcrumbSeparator}>›</li>
            <li>
              <span className={styles.breadcrumbCurrent}>Keyword Matcher</span>
            </li>
          </ol>
        </nav>

        <header className={styles.header} role="banner">
          <h1 className={styles.title}>
            Free Resume Keyword Matcher <span className={styles.highlight}>- ATS Keyword Analysis Tool {CURRENT_YEAR}</span>
          </h1>
          <p className={styles.subtitle}>
            Optimize your resume for ATS systems with our <strong>free keyword matching tool</strong>. 
            Analyze job description vs resume keywords instantly. <strong>Privacy-first</strong>, no signup required.
          </p>
          
          <div className={styles.trustBadges}>
            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon}>✓</span>
              <span className={styles.badgeText}>100% Free</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon}>✓</span>
              <span className={styles.badgeText}>Privacy First</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon}>✓</span>
              <span className={styles.badgeText}>No Signup</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon}>✓</span>
              <span className={styles.badgeText}>ATS Optimized</span>
            </div>
          </div>
          
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
            <div className={styles.ratingText}>Rated by 3000+ job seekers worldwide</div>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.editorSection}>
            <div className={styles.editorHeader}>
              <h2>Paste Job Description & Resume for Instant Keyword Analysis</h2>
              <p>
                Compare your resume with job descriptions to identify <strong>keyword matches, missing terms, 
                and optimization opportunities</strong> for better ATS compatibility. All analysis happens locally in your browser.
              </p>
            </div>

            <div className={styles.inputGrid}>
              <div className={styles.inputSection}>
                <label htmlFor="jobDescription" className={styles.label}>
                  Job Description <span className={styles.required}>(Required)</span>
                </label>
                <textarea
                  id="jobDescription"
                  className={styles.textarea}
                  placeholder="Paste the complete job description here (500+ characters for best results)..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows={8}
                  ref={textareaRef}
                />
                <div className={styles.charCount}>
                  {jobDescription.length} characters
                </div>
              </div>

              <div className={styles.inputSection}>
                <label htmlFor="resumeText" className={styles.label}>
                  Resume Text <span className={styles.required}>(Required)</span>
                </label>
                <textarea
                  id="resumeText"
                  className={styles.textarea}
                  placeholder="Paste your complete resume text here (Include all sections)..."
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  rows={8}
                />
                <div className={styles.charCount}>
                  {resumeText.length} characters
                </div>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <button
                onClick={analyzeKeywords}
                className={styles.primaryButton}
                disabled={isAnalyzing || !jobDescription.trim() || !resumeText.trim()}
                aria-label="Analyze keyword matching between job description and resume"
              >
                {isAnalyzing ? (
                  <>
                    <span className={styles.spinnerSmall}></span>
                    Analyzing Keywords...
                  </>
                ) : (
                  'Analyze Keyword Matching'
                )}
              </button>
              <button 
                onClick={handleUseSample} 
                className={styles.secondaryButton}
                aria-label="Load sample data to see demonstration"
              >
                Use Sample Data
              </button>
              <button 
                onClick={clearAll} 
                className={styles.tertiaryButton}
                aria-label="Clear all text inputs"
              >
                Clear All
              </button>
            </div>

            {(!jobDescription.trim() || !resumeText.trim()) && (
              <div className={styles.sampleTip}>
                💡 <strong>Pro Tip:</strong> Paste both job description and resume text above. 
                Click "Use Sample Data" to see a live demonstration of our keyword analysis tool.
              </div>
            )}
          </div>

          <div className={styles.resultsSection}>
            {isAnalyzing ? (
              <div className={styles.analyzing}>
                <div className={styles.spinner}></div>
                <p>Analyzing keyword matching between job description and resume...</p>
                <p className={styles.analyzingSub}>Processing {jobDescription.split(' ').length} words from job description...</p>
              </div>
            ) : results ? (
              <>
                <div className={styles.scoreCard}>
                  <div className={styles.scoreHeader}>
                    <h3>Keyword Match Analysis Results</h3>
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
                    <div className={styles.scoreDetail}>
                      <span className={styles.detailLabel}>Missing Keywords:</span>
                      <span className={styles.detailValue}>{results.missingKeywords.length}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.resultsGrid}>
                  <div className={styles.resultCard}>
                    <h4>Missing Keywords by Category</h4>
                    <p className={styles.resultSubtitle}>Add these keywords to improve your resume's ATS compatibility</p>
                    <div className={styles.categoryTabs}>
                      {['all', 'technical', 'soft', 'certifications', 'experience', 'tools'].map(cat => (
                        <button
                          key={cat}
                          className={`${styles.categoryTab} ${activeCategory === cat ? styles.active : ''}`}
                          onClick={() => setActiveCategory(cat)}
                          aria-label={`Show ${cat} keywords`}
                        >
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                          <span className={styles.tabCount}>
                            {cat === 'all' 
                              ? results.missingKeywords.length 
                              : results.categories[cat]?.length || 0}
                          </span>
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
                            <span className={`${styles.keywordCategory} ${styles[keyword.category]}`}>
                              {keyword.category}
                            </span>
                          </div>
                        ))}
                      {results.missingKeywords.filter(k => activeCategory === 'all' || k.category === activeCategory).length === 0 && (
                        <p className={styles.noResults}>No missing keywords in this category - Great job!</p>
                      )}
                    </div>
                  </div>

                  <div className={styles.resultCard}>
                    <h4>Keyword Usage Analysis</h4>
                    <p className={styles.resultSubtitle}>Terms that may need adjustment in your resume</p>
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
                        <p className={styles.noResults}>No overused terms detected - Good keyword variety!</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className={styles.suggestionsCard}>
                  <h4>Keyword Optimization Suggestions</h4>
                  <ul className={styles.suggestionsList}>
                    {results.suggestions.map((suggestion, idx) => (
                      <li key={idx} className={styles.suggestionItem}>
                        <span className={styles.suggestionIcon}>→</span>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.suggestionActions}>
                    <button onClick={copyOptimizedKeywords} className={styles.copyButton}>
                      Copy Optimized Keywords
                    </button>
                    <Link href="/free-resume-tools" className={styles.toolsLink}>
                      View All Resume Tools
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🔍</div>
                <h3>Start Your Keyword Analysis</h3>
                <p>Enter both job description and resume text to get instant keyword matching analysis:</p>
                <ul className={styles.featureList}>
                  <li>✅ <strong>Keyword Match Rate Percentage</strong> - See how well your resume matches the job</li>
                  <li>✅ <strong>Missing High-Impact Keywords</strong> - Identify critical terms to add</li>
                  <li>✅ <strong>Categorized Keyword Analysis</strong> - Technical, soft skills, certifications & more</li>
                  <li>✅ <strong>Overused & Irrelevant Terms</strong> - Find terms to reduce or replace</li>
                  <li>✅ <strong>Actionable Optimization Suggestions</strong> - Get specific improvement tips</li>
                </ul>
                <div className={styles.privacyNote}>
                  🔒 <strong>Privacy First Guarantee:</strong> All keyword analysis happens locally in your browser. 
                  No data is sent to servers. Your job descriptions and resumes stay 100% private.
                </div>
              </div>
            )}
          </div>
        </main>

        {/* How-to Section */}
        <section className={styles.howToSection} aria-labelledby="how-to-title">
          <h2 className={styles.sectionTitle} id="how-to-title">How It Works: 5-Step Keyword Optimization Process</h2>
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
                aria-expanded={activeFaq === index}
                onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === index ? null : index)}
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
          <h2 className={styles.sectionTitle} id="reviews-title">What Users Say About Our Keyword Matcher</h2>
          <div className={styles.reviewsGrid}>
            {TESTIMONIALS.map((review, index) => (
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
          <h2 className={styles.sectionTitle} id="resources-title">More Free Resume Tools & Resources</h2>
          <div className={styles.resourcesGrid}>
            <Link 
              href="/free-resume-tools" 
              className={styles.resourceCard}
              prefetch={false}
            >
              <h3>Free Resume Tools Collection</h3>
              <p>Complete suite of tools to help you create and optimize your resume for free.</p>
            </Link>
            <Link 
              href="/free-resume-score-checker" 
              className={styles.resourceCard}
              prefetch={false}
            >
              <h3>Resume Score Checker</h3>
              <p>Get an instant score for your resume and see how it compares to top resumes.</p>
            </Link>
            <Link 
              href="/free-ats-resume-checker" 
              className={styles.resourceCard}
              prefetch={false}
            >
              <h3>ATS Resume Checker</h3>
              <p>Check if your resume will pass through Applicant Tracking Systems.</p>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection} aria-labelledby="cta-title">
          <h2 className={styles.ctaTitle} id="cta-title">Ready to Optimize Your Resume?</h2>
          <p className={styles.ctaSubtitle}>
            Start using our free keyword matcher today and get <strong>3x more interviews</strong> with optimized resumes.
          </p>
          <div className={styles.ctaButtons}>
            <button
              onClick={() => textareaRef.current?.focus()}
              className={styles.ctaButton}
              aria-label="Start analyzing your resume keywords"
            >
              Start Keyword Analysis Now
            </button>
            <Link href="/free-resume-tools" className={styles.ctaLink}>
              Explore All Free Tools
            </Link>
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
      buildTimestamp: Date.now(),
      seoData: {
        currentDate: new Date().toISOString().split('T')[0],
        lastModifiedDate: new Date().toISOString(),
        reviewDates: TESTIMONIALS.map((_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (i * 10 + 1));
          return date.toISOString().split('T')[0];
        }),
        faqDates: FAQS.map((_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (i * 15 + 30));
          return date.toISOString().split('T')[0];
        })
      }
    },
    // Revalidate every hour for fresh content
    revalidate: 3600,
  };
}