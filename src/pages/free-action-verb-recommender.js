import { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './free-action-verb-recommender.module.css';

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();

// Action Verb Categories
const VERB_CATEGORIES = [
  {
    id: 'leadership',
    name: 'Leadership & Management',
    verbs: [
      'Directed', 'Managed', 'Led', 'Supervised', 'Oversaw', 'Coordinated',
      'Organized', 'Mentored', 'Coached', 'Facilitated', 'Empowered',
      'Delegated', 'Guided', 'Chaired', 'Steered', 'Orchestrated'
    ]
  },
  {
    id: 'achievement',
    name: 'Achievement & Results',
    verbs: [
      'Achieved', 'Accomplished', 'Attained', 'Exceeded', 'Surpassed',
      'Improved', 'Enhanced', 'Increased', 'Reduced', 'Optimized',
      'Maximized', 'Minimized', 'Streamlined', 'Amplified', 'Boosted',
      'Elevated'
    ]
  },
  {
    id: 'technical',
    name: 'Technical & Analytical',
    verbs: [
      'Developed', 'Engineered', 'Programmed', 'Designed', 'Implemented',
      'Analyzed', 'Evaluated', 'Assessed', 'Calculated', 'Measured',
      'Modeled', 'Simulated', 'Automated', 'Debugged', 'Optimized',
      'Integrated'
    ]
  },
  {
    id: 'creative',
    name: 'Creative & Strategic',
    verbs: [
      'Created', 'Designed', 'Innovated', 'Pioneered', 'Transformed',
      'Revolutionized', 'Redesigned', 'Conceptualized', 'Visualized',
      'Branded', 'Marketing', 'Strategized', 'Planned', 'Forecasted',
      'Projected'
    ]
  },
  {
    id: 'communication',
    name: 'Communication & Collaboration',
    verbs: [
      'Presented', 'Communicated', 'Articulated', 'Authored', 'Edited',
      'Translated', 'Negotiated', 'Collaborated', 'Liaised', 'Consulted',
      'Advised', 'Educated', 'Trained', 'Facilitated', 'Moderated',
      'Moderated'
    ]
  },
  {
    id: 'research',
    name: 'Research & Analysis',
    verbs: [
      'Researched', 'Investigated', 'Explored', 'Examined', 'Studied',
      'Analyzed', 'Interpreted', 'Identified', 'Discovered', 'Hypothesized',
      'Validated', 'Verified', 'Tested', 'Experimented', 'Surveyed',
      'Interviewed'
    ]
  },
  {
    id: 'financial',
    name: 'Financial & Business',
    verbs: [
      'Managed', 'Budgeted', 'Forecasted', 'Allocated', 'Invested',
      'Generated', 'Secured', 'Saved', 'Reduced', 'Increased',
      'Negotiated', 'Procured', 'Purchased', 'Traded', 'Audited',
      'Reconciled'
    ]
  }
];

// Common Weak Verbs to Replace
const WEAK_VERBS = [
  { verb: 'Responsible for', suggestion: 'Managed, Oversaw, Led' },
  { verb: 'Did', suggestion: 'Executed, Performed, Implemented' },
  { verb: 'Made', suggestion: 'Created, Produced, Developed' },
  { verb: 'Helped', suggestion: 'Assisted, Supported, Facilitated' },
  { verb: 'Worked on', suggestion: 'Contributed to, Participated in' },
  { verb: 'Used', suggestion: 'Utilized, Leveraged, Applied' },
  { verb: 'Fixed', suggestion: 'Resolved, Repaired, Rectified' },
  { verb: 'Talked to', suggestion: 'Consulted, Advised, Liaised with' },
  { verb: 'Wrote', suggestion: 'Authored, Composed, Drafted' },
  { verb: 'Looked at', suggestion: 'Analyzed, Reviewed, Examined' }
];

// FAQ Data
const FAQS = [
  {
    question: "Why are action verbs so important on a resume?",
    answer: "Action verbs make your accomplishments more impactful and engaging. They transform passive descriptions into dynamic achievements, showing initiative and results. Studies show recruiters spend only 6-7 seconds scanning a resume, and strong action verbs help your achievements stand out immediately."
  },
  {
    question: "How do I choose the right action verbs?",
    answer: "Choose verbs that are specific to your role and industry. Leadership roles need verbs like 'Directed' and 'Managed', while technical roles need 'Developed' and 'Engineered'. Match verbs to your actual responsibilities and use quantifiable achievements. Avoid generic verbs—be specific about what you accomplished."
  },
  {
    question: "Should I avoid using the same verb multiple times?",
    answer: "Yes, avoid repeating the same verb more than 2-3 times in your resume. Use synonyms to keep your writing fresh and engaging. For example, instead of always using 'Managed', alternate with 'Oversaw', 'Directed', 'Led', or 'Supervised'. Variety shows a richer vocabulary and keeps the reader engaged."
  },
  {
    question: "What's wrong with passive language on resumes?",
    answer: "Passive language (e.g., 'was responsible for', 'helped with') makes you seem like a passive participant rather than an active achiever. Action verbs position you as the driver of results. Instead of 'Helped improve sales', use 'Contributed to 25% sales improvement' or 'Played key role in increasing sales by 25%'."
  },
  {
    question: "Can I use present tense for current positions?",
    answer: "Absolutely. Use present tense verbs for current roles (e.g., 'Manage', 'Develop', 'Coordinate') and past tense for previous positions (e.g., 'Managed', 'Developed', 'Coordinated'). This keeps your resume current and shows ongoing contributions. Be consistent within each job description."
  }
];

// Industry-Specific Verb Recommendations
const INDUSTRY_VERBS = [
  {
    industry: 'Technology',
    verbs: ['Developed', 'Engineered', 'Programmed', 'Architected', 'Debugged', 'Integrated', 'Automated', 'Deployed', 'Optimized', 'Scaled']
  },
  {
    industry: 'Marketing',
    verbs: ['Marketing', 'Promoted', 'Branded', 'Campaign', 'Strategized', 'Analyzed', 'Optimized', 'Segmented', 'Targeted', 'Converted']
  },
  {
    industry: 'Finance',
    verbs: ['Analyzed', 'Forecasted', 'Modeled', 'Audited', 'Reconciled', 'Budgeted', 'Invested', 'Traded', 'Secured', 'Allocated']
  },
  {
    industry: 'Healthcare',
    verbs: ['Administered', 'Diagnosed', 'Treated', 'Monitored', 'Evaluated', 'Coordinated', 'Implemented', 'Educated', 'Consulted', 'Documented']
  },
  {
    industry: 'Education',
    verbs: ['Instructed', 'Educated', 'Mentored', 'Developed', 'Designed', 'Evaluated', 'Assessed', 'Facilitated', 'Guided', 'Supervised']
  }
];

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'resume action verbs',
  'power verbs for resumes',
  'resume verb recommendations',
  'action verb generator',
  'professional resume verbs',
  'strong verbs for resumes',
  'resume writing tips',
  'career achievement verbs',
  'resume optimization',
  'ATS-friendly verbs',
  'free resume verb finder',
  'powerful resume words',
  'strong action verbs',
  'resume bullet points',
  'professional vocabulary'
];

const ResumeActionVerbRecommender = ({ seoData, buildTimestamp }) => {
  const {
    currentDate,
    lastModifiedDate,
    reviewDates,
    faqDates,
    breadcrumbData
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeReviewDates = reviewDates || Array(6).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(6).fill(freshnessIndicator);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVerbs, setSelectedVerbs] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);
  const [showExamples, setShowExamples] = useState(false);
  const [copiedVerb, setCopiedVerb] = useState(null);
  const searchRef = useRef(null);

  // Filter verbs based on search and category
  const filteredVerbs = useCallback(() => {
    let allVerbs = [];
    
    if (selectedCategory === 'all') {
      VERB_CATEGORIES.forEach(category => {
        category.verbs.forEach(verb => {
          allVerbs.push({
            verb,
            category: category.name
          });
        });
      });
    } else {
      const category = VERB_CATEGORIES.find(cat => cat.id === selectedCategory);
      if (category) {
        allVerbs = category.verbs.map(verb => ({
          verb,
          category: category.name
        }));
      }
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      return allVerbs.filter(item => 
        item.verb.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    }

    return allVerbs;
  }, [searchQuery, selectedCategory]);

  // Handle verb selection
  const handleVerbSelect = (verb) => {
    if (selectedVerbs.includes(verb)) {
      setSelectedVerbs(selectedVerbs.filter(v => v !== verb));
    } else {
      setSelectedVerbs([...selectedVerbs, verb]);
    }
  };

  // Copy verb to clipboard
  const copyToClipboard = (verb) => {
    navigator.clipboard.writeText(verb);
    setCopiedVerb(verb);
    setTimeout(() => setCopiedVerb(null), 2000);
  };

  // Load example sentence
  const loadExample = (verb) => {
    const examples = {
      'Managed': `Managed a team of 15 developers to deliver projects 20% ahead of schedule`,
      'Developed': `Developed a scalable microservices architecture reducing latency by 40%`,
      'Increased': `Increased customer retention rate by 35% through targeted engagement strategies`,
      'Reduced': `Reduced operational costs by $250K annually through process optimization`,
      'Created': `Created comprehensive marketing campaign that generated 500+ qualified leads`,
      'Analyzed': `Analyzed customer data to identify key trends and improve conversion by 22%`,
      'Implemented': `Implemented new CRM system improving team productivity by 30%`,
      'Led': `Led cross-functional initiative that resulted in 15% revenue growth`,
      'Designed': `Designed user interface that improved customer satisfaction scores by 45%`,
      'Optimized': `Optimized database queries reducing page load times by 60%`
    };

    return examples[verb] || `${verb} [accomplishment with measurable result]`;
  };

  // Clear all selections
  const handleClearAll = () => {
    setSelectedVerbs([]);
    setSearchQuery('');
    setSelectedCategory('all');
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  // Generate sample bullet points
  const generateSampleBullets = () => {
    const samples = [
      `Managed team of 12 to achieve quarterly sales targets`,
      `Developed scalable application serving 50K+ users`,
      `Increased customer satisfaction scores by 35%`,
      `Reduced operational costs by $120K annually`,
      `Created comprehensive training program for 200+ employees`
    ];
    return samples;
  };

  // Schema data with improved structure
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.professionalresumefree.com/free-action-verb-recommender/#webpage",
        "url": "https://www.professionalresumefree.com/free-action-verb-recommender",
        "name": "Free Resume Action Verb Recommender & Generator - Professional Power Verbs List",
        "description": "Completely free resume action verb recommender with 150+ powerful verbs categorized by industry. Find strong action verbs to replace weak words and optimize your resume for ATS systems.",
        "datePublished": safeCurrentDate,
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.professionalresumefree.com/#website",
          "url": "https://www.professionalresumefree.com",
          "name": "Professional Resume Free",
          "description": "Free online resume builder and career tools",
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
              "https://www.facebook.com/ProfessionalResumeFree"
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
              "name": "Resume Tools",
              "item": "https://www.professionalresumefree.com/resume-tools"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Action Verb Recommender",
              "item": "https://www.professionalresumefree.com/free-action-verb-recommender"
            }
          ]
        },
        "mainEntity": {
          "@type": "SoftwareApplication",
          "name": "Resume Action Verb Recommender - Free Professional Tool",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": `${CURRENT_YEAR + 1}-12-31`
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.8,
            "ratingCount": 189,
            "bestRating": 5,
            "worstRating": 1
          },
          "description": "Free online resume action verb recommender that helps job seekers find powerful verbs to strengthen their resume bullet points and pass ATS screenings.",
          "featureList": [
            "150+ Professional Action Verbs",
            "Industry-Specific Recommendations",
            "Weak Verb Replacement Guide",
            "One-Click Copy Function",
            "Mobile-Friendly Interface",
            "No Sign Up Required",
            "Free Forever"
          ],
          "softwareVersion": `${CURRENT_YEAR}.1.0`,
          "countriesSupported": "Global"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.professionalresumefree.com/free-action-verb-recommender/#faqpage",
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": safeFaqDates[index] || safeCurrentDate,
            "author": {
              "@type": "Person",
              "name": "Resume Writing Expert"
            }
          },
          "mainEntityOfPage": "https://www.professionalresumefree.com/free-action-verb-recommender/#webpage"
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Use Action Verbs Effectively in Your Resume",
        "description": "Step-by-step guide to using powerful action verbs to strengthen your resume",
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
            "name": "Identify Weak Verbs",
            "text": "Scan your resume for weak verbs like 'responsible for', 'helped', 'did', and replace them with powerful alternatives.",
            "url": "https://www.professionalresumefree.com/free-action-verb-recommender#weak-verbs"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Choose Industry-Specific Verbs",
            "text": "Select verbs relevant to your field from our categorized lists to make your resume more targeted.",
            "url": "https://www.professionalresumefree.com/free-action-verb-recommender#industry-verbs"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Create Powerful Bullet Points",
            "text": "Start each bullet point with an action verb and follow with quantifiable achievements.",
            "url": "https://www.professionalresumefree.com/free-action-verb-recommender#samples"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Resume Action Verb Categories",
        "itemListElement": VERB_CATEGORIES.map((category, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": category.name,
          "description": `${category.verbs.length} powerful action verbs for ${category.name.toLowerCase()}`
        }))
      }
    ]
  };

  return (
    <div className={styles.landingPage} lang="en-US">
      <Head>
        {/* Primary Meta Tags */}
        <title>Free Resume Action Verb Recommender – 150+ Power Verbs for ATS-Optimized Resumes {CURRENT_YEAR}</title>
        <meta name="title" content="Free Resume Action Verb Recommender – 150+ Power Verbs for ATS-Optimized Resumes" />
        <meta name="description" content={`Generate powerful resume action verbs instantly. Our free verb recommender provides 150+ professional verbs categorized by industry, weak verb replacements, and usage examples. Boost your resume's impact for ${CURRENT_YEAR}.`} />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Content Freshness */}
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical & Internationalization */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-action-verb-recommender" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-action-verb-recommender" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-action-verb-recommender" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-action-verb-recommender" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-action-verb-recommender" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-action-verb-recommender" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-action-verb-recommender" hreflang="x-default" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Resume Action Verb Recommender – 150+ Power Verbs for ATS-Optimized Resumes" />
        <meta property="og:description" content="Generate powerful resume action verbs instantly. Categorized by industry with weak verb replacements and usage examples. Completely free." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-verb-recommender-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Action Verb Recommender - Free Professional Tool" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-action-verb-recommender" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Action Verb Recommender - 150+ Power Verbs" />
        <meta name="twitter:description" content="Generate powerful resume action verbs instantly. Categorized by industry with examples. Completely free." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-verb-recommender-preview.jpg" />
        <meta name="twitter:image:alt" content="Free Resume Action Verb Generator" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* App & Browser */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Performance */}
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
              <span className={styles.breadcrumbText}>Home</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>/</li>
          <li>
            <Link href="/free-action-verb-recommender" className={styles.breadcrumbLink}>
              <span className={styles.breadcrumbText}>Action Verb Recommender</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>/</li>
          <li>
            <span className={styles.breadcrumbCurrent}>Action Verb Recommender</span>
          </li>
        </ol>
      </nav>

      {/* Main Container */}
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.trustBadge}>
            <span className={styles.trustBadgeText}>
              Free Tool • No Sign Up • Professional Grade
            </span>
          </div>
          
          <h1 className={styles.title}>Resume Action Verb Recommender</h1>
          
          <p className={styles.subtitle}>
            Transform your resume with <strong className={styles.highlight}>150+ powerful action verbs</strong> that showcase achievements and pass ATS systems
          </p>

          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>150+</span>
              <span className={styles.statLabel}>Action Verbs</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>7</span>
              <span className={styles.statLabel}>Categories</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Industries</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>4.8/5</span>
              <span className={styles.statLabel}>Rating</span>
            </div>
          </div>
        </header>

        <main className={styles.main}>
          {/* Main Search Section */}
          <div className={styles.searchSection}>
            <div className={styles.searchHeader}>
              <h2>Find Powerful Action Verbs</h2>
              <p>
                Search and filter action verbs by category. Click verbs to select them, then use in your resume bullet points.
              </p>
            </div>
            
            <div className={styles.searchContainer}>
              <div className={styles.searchBox}>
                <div className={styles.searchInputWrapper}>
                  <input
                    ref={searchRef}
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search action verbs (e.g., 'managed', 'developed', 'increased')..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    aria-label="Search action verbs"
                  />
                  {searchQuery && (
                    <button
                      className={styles.clearSearch}
                      onClick={() => setSearchQuery('')}
                      type="button"
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                </div>
                
                <div className={styles.categoryFilters}>
                  <button
                    className={`${styles.categoryButton} ${selectedCategory === 'all' ? styles.active : ''}`}
                    onClick={() => setSelectedCategory('all')}
                    type="button"
                  >
                    All Categories
                  </button>
                  {VERB_CATEGORIES.map(category => (
                    <button
                      key={category.id}
                      className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
                      onClick={() => setSelectedCategory(category.id)}
                      type="button"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className={styles.selectedVerbsPanel}>
                <div className={styles.panelHeader}>
                  <h3>Selected Verbs ({selectedVerbs.length})</h3>
                  {selectedVerbs.length > 0 && (
                    <button
                      className={styles.clearAllButton}
                      onClick={handleClearAll}
                      type="button"
                      aria-label="Clear all selected verbs"
                    >
                      Clear All
                    </button>
                  )}
                </div>
                
                {selectedVerbs.length > 0 ? (
                  <div className={styles.selectedVerbsList}>
                    {selectedVerbs.map((verb, index) => (
                      <div key={index} className={styles.selectedVerb}>
                        <span className={styles.selectedVerbText}>{verb}</span>
                        <div className={styles.selectedVerbActions}>
                          <button
                            className={styles.copyButton}
                            onClick={() => copyToClipboard(verb)}
                            type="button"
                            aria-label={`Copy ${verb} to clipboard`}
                          >
                            {copiedVerb === verb ? 'Copied!' : 'Copy'}
                          </button>
                          <button
                            className={styles.removeButton}
                            onClick={() => handleVerbSelect(verb)}
                            type="button"
                            aria-label={`Remove ${verb}`}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.emptySelection}>
                    <div className={styles.emptyText}>No verbs selected yet. Click verbs to add them here.</div>
                  </div>
                )}
                
                {selectedVerbs.length > 0 && (
                  <div className={styles.copyAllSection}>
                    <button
                      className={styles.copyAllButton}
                      onClick={() => {
                        copyToClipboard(selectedVerbs.join(', '));
                        setCopiedVerb('all');
                      }}
                      type="button"
                      aria-label="Copy all selected verbs to clipboard"
                    >
                      {copiedVerb === 'all' ? 'Copied!' : 'Copy All Verbs'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Verbs Grid Section */}
          <section className={styles.verbsSection} aria-labelledby="verbs-title">
            <div className={styles.sectionHeader}>
              <h2 id="verbs-title">
                {selectedCategory === 'all' ? 'All Action Verbs' : 
                 VERB_CATEGORIES.find(c => c.id === selectedCategory)?.name || 'Action Verbs'}
                <span className={styles.verbsCount}> ({filteredVerbs().length})</span>
              </h2>
              <button
                className={styles.examplesToggle}
                onClick={() => setShowExamples(!showExamples)}
                type="button"
                aria-label={showExamples ? 'Hide examples' : 'Show examples'}
              >
                {showExamples ? 'Hide Examples' : 'Show Examples'}
              </button>
            </div>
            
            {filteredVerbs().length > 0 ? (
              <div className={styles.verbsGrid}>
                {filteredVerbs().map((item, index) => (
                  <div 
                    key={index} 
                    className={`${styles.verbCard} ${selectedVerbs.includes(item.verb) ? styles.selected : ''}`}
                    onClick={() => handleVerbSelect(item.verb)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && handleVerbSelect(item.verb)}
                    aria-label={`Select ${item.verb} from ${item.category} category`}
                  >
                    <div className={styles.verbHeader}>
                      <div className={styles.verbCategory}>
                        <span className={styles.categoryName}>{item.category}</span>
                      </div>
                      <div className={styles.verbSelection}>
                        {selectedVerbs.includes(item.verb) ? 'Selected' : 'Add'}
                      </div>
                    </div>
                    
                    <div className={styles.verbContent}>
                      <div className={styles.verbText}>{item.verb}</div>
                      <div className={styles.verbSynonyms}>
                        {item.verb.endsWith('ed') && (
                          <span className={styles.synonym}>Present: {item.verb.replace('ed', '')}</span>
                        )}
                        {item.verb.endsWith('ing') && (
                          <span className={styles.synonym}>Past: {item.verb.replace('ing', 'ed')}</span>
                        )}
                      </div>
                    </div>
                    
                    {showExamples && (
                      <div className={styles.verbExample}>
                        <div className={styles.exampleLabel}>Example:</div>
                        <div className={styles.exampleText}>{loadExample(item.verb)}</div>
                      </div>
                    )}
                    
                    <div className={styles.verbActions}>
                      <button
                        className={styles.copyVerbButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(item.verb);
                        }}
                        type="button"
                        aria-label={`Copy ${item.verb} to clipboard`}
                      >
                        {copiedVerb === item.verb ? 'Copied!' : 'Copy'}
                      </button>
                      <button
                        className={styles.previewButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowExamples(true);
                        }}
                        type="button"
                        aria-label={`Show example for ${item.verb}`}
                      >
                        Example
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <div className={styles.noResultsText}>
                  No verbs found matching "{searchQuery}". Try a different search term.
                </div>
              </div>
            )}
          </section>

          {/* Weak Verbs Section */}
          <section className={styles.weakVerbsSection} aria-labelledby="weak-verbs-title">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle} id="weak-verbs-title">Replace Weak Verbs</h2>
              <p className={styles.sectionSubtitle}>
                Strengthen your resume by replacing common weak verbs with powerful alternatives
              </p>
            </div>
            
            <div className={styles.weakVerbsGrid}>
              {WEAK_VERBS.map((item, index) => (
                <div key={index} className={styles.weakVerbCard}>
                  <div className={styles.weakVerbBad}>
                    <div className={styles.weakVerbLabel}>Weak:</div>
                    <div className={styles.weakVerbText}>{item.verb}</div>
                  </div>
                  <div className={styles.replacementArrow}>→</div>
                  <div className={styles.strongVerbGood}>
                    <div className={styles.strongVerbLabel}>Strong:</div>
                    <div className={styles.strongVerbText}>{item.suggestion}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industry Verbs Section */}
          <section className={styles.industrySection} aria-labelledby="industry-verbs-title">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle} id="industry-verbs-title">Industry-Specific Verbs</h2>
              <p className={styles.sectionSubtitle}>
                Tailored verb recommendations for different professional fields
              </p>
            </div>
            
            <div className={styles.industryGrid}>
              {INDUSTRY_VERBS.map((industry, index) => (
                <div key={index} className={styles.industryCard}>
                  <div className={styles.industryHeader}>
                    <div className={styles.industryName}>{industry.industry}</div>
                  </div>
                  <div className={styles.industryVerbs}>
                    {industry.verbs.map((verb, verbIndex) => (
                      <button
                        key={verbIndex}
                        className={styles.industryVerb}
                        onClick={() => {
                          handleVerbSelect(verb);
                          copyToClipboard(verb);
                        }}
                        type="button"
                        aria-label={`Select ${verb} for ${industry.industry}`}
                      >
                        {verb}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sample Bullet Points */}
          <section className={styles.samplesSection} aria-labelledby="samples-title">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle} id="samples-title">Sample Bullet Points</h2>
              <p className={styles.sectionSubtitle}>
                See how powerful action verbs transform resume bullet points
              </p>
            </div>
            
            <div className={styles.samplesGrid}>
              {generateSampleBullets().map((bullet, index) => (
                <div key={index} className={styles.sampleCard}>
                  <div className={styles.sampleBullet}>•</div>
                  <div className={styles.sampleContent}>
                    <div className={styles.sampleText}>{bullet}</div>
                    <button
                      className={styles.copySampleButton}
                      onClick={() => copyToClipboard(bullet)}
                      type="button"
                      aria-label={`Copy bullet point: ${bullet}`}
                    >
                      {copiedVerb === bullet ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Verb Usage Tips */}
          <section className={styles.tipsSection} aria-labelledby="tips-title">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle} id="tips-title">Action Verb Usage Tips</h2>
            </div>
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <h3 className={styles.tipTitle}>Be Specific</h3>
                <p className={styles.tipDescription}>
                  Choose verbs that precisely describe your actions. Instead of "Worked on projects," use "Developed," "Managed," or "Implemented."
                </p>
              </div>
              
              <div className={styles.tipCard}>
                <h3 className={styles.tipTitle}>Quantify Results</h3>
                <p className={styles.tipDescription}>
                  Pair action verbs with measurable results. For example: "Increased sales by 25%" or "Reduced costs by $50K annually."
                </p>
              </div>
              
              <div className={styles.tipCard}>
                <h3 className={styles.tipTitle}>Vary Your Verbs</h3>
                <p className={styles.tipDescription}>
                  Avoid repeating the same verb. Use synonyms to keep your resume engaging and demonstrate a rich vocabulary.
                </p>
              </div>
              
              <div className={styles.tipCard}>
                <h3 className={styles.tipTitle}>Use Proper Tense</h3>
                <p className={styles.tipDescription}>
                  Use present tense for current roles and past tense for previous positions. Be consistent within each job description.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className={styles.faqSection} aria-labelledby="faq-title">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions</h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to know about using action verbs effectively
              </p>
            </div>
            <div className={styles.faqList}>
              {FAQS.map((faq, index) => (
                <div 
                  key={index} 
                  className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  role="button"
                  tabIndex={0}
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

          {/* Benefits Section */}
          <section className={styles.benefitsSection} aria-labelledby="benefits-title">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle} id="benefits-title">Why Action Verbs Matter</h2>
            </div>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Showcase Achievements</h3>
                <p className={styles.benefitDescription}>
                  Action verbs transform passive responsibilities into active accomplishments. They highlight your contributions and demonstrate initiative rather than just listing duties.
                </p>
              </div>
              
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Grab Attention Fast</h3>
                <p className={styles.benefitDescription}>
                  With recruiters scanning resumes in seconds, strong action verbs immediately communicate impact and results, making your achievements stand out quickly.
                </p>
              </div>
              
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Demonstrate Impact</h3>
                <p className={styles.benefitDescription}>
                  Action verbs naturally lead to measurable results. They encourage you to quantify achievements, showing clear ROI and business impact to hiring managers.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection} aria-labelledby="cta-title">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle} id="cta-title">Ready to Transform Your Resume?</h2>
              <p className={styles.ctaSubtitle}>
                Start using powerful action verbs today and make your resume stand out
              </p>
              <div className={styles.ctaButtons}>
                <button
                  className={styles.ctaButton}
                  onClick={handleClearAll}
                  type="button"
                  aria-label="Start building your resume with action verbs"
                >
                  <span className={styles.ctaButtonText}>Start Building Your Resume</span>
                </button>
                <Link href="/resume-templates" className={styles.secondaryButton}>
                  <span className={styles.secondaryButtonText}>View Resume Templates</span>
                </Link>
              </div>
              <div className={styles.ctaFeatures}>
                <div className={styles.featureItem}>
                  <span>✓ 150+ Professional Verbs</span>
                </div>
                <div className={styles.featureItem}>
                  <span>✓ Industry-Specific Lists</span>
                </div>
                <div className={styles.featureItem}>
                  <span>✓ Weak Verb Replacements</span>
                </div>
                <div className={styles.featureItem}>
                  <span>✓ One-Click Copy</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
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
    // Revalidate every hour
    revalidate: 3600
  };
}

export default ResumeActionVerbRecommender;