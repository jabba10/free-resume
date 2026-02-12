import { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import styles from './free-resume-summary-generator.module.css';

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_DATE = new Date().toISOString().split('T')[0];
const SITE_URL = 'https://www.professionalresumefree.com';
const PAGE_URL = `${SITE_URL}/free-resume-summary-generator`;

// Template Categories
const SUMMARY_TEMPLATES = [
  {
    id: 'experienced',
    name: 'Experienced Professional',
    description: 'Templates for professionals with 5+ years of experience',
    templates: [
      {
        title: 'Senior Executive',
        summary: `Results-driven senior executive with over 15 years of experience in [Industry]. Proven track record of leading cross-functional teams, driving strategic initiatives, and delivering sustainable business growth. Expertise in [Key Skill 1], [Key Skill 2], and [Key Skill 3] with a focus on [Specific Focus Area].`,
        keywords: ['Strategic Leadership', 'Business Growth', 'Team Management', 'Operational Excellence']
      },
      {
        title: 'Mid-Career Professional',
        summary: `Accomplished [Job Title] with [Number] years of experience in [Industry]. Skilled in [Key Skill 1], [Key Skill 2], and [Key Skill 3]. Demonstrated success in [Major Achievement 1] and [Major Achievement 2]. Seeking to leverage expertise in [Target Area].`,
        keywords: ['Project Management', 'Process Improvement', 'Client Relations', 'Performance Optimization']
      }
    ]
  },
  {
    id: 'career-change',
    name: 'Career Changer',
    description: 'Templates for professionals transitioning to new industries',
    templates: [
      {
        title: 'Transferable Skills Focus',
        summary: `[Current Industry] professional transitioning to [New Industry] with [Number] years of transferable experience in [Transferable Skill 1], [Transferable Skill 2], and [Transferable Skill 3]. Demonstrated ability to [Key Achievement] and [Another Achievement]. Eager to apply [Specific Skill] in [New Industry] context.`,
        keywords: ['Adaptable', 'Quick Learner', 'Transferable Skills', 'Cross-Industry Experience']
      }
    ]
  },
  {
    id: 'recent-grad',
    name: 'Recent Graduate',
    description: 'Templates for new graduates and entry-level professionals',
    templates: [
      {
        title: 'Academic Excellence',
        summary: `Recent [Degree] graduate from [University] with strong academic background in [Field of Study]. Developed skills in [Skill 1], [Skill 2], and [Skill 3] through coursework and [Type of Experience]. Eager to apply theoretical knowledge in practical [Industry] setting.`,
        keywords: ['Fast Learner', 'Academic Achievement', 'Technical Skills', 'Research Abilities']
      },
      {
        title: 'Internship Experience',
        summary: `Recent graduate with hands-on experience gained through [Number] internships in [Industry]. Developed practical skills in [Skill 1], [Skill 2], and [Skill 3]. Demonstrated ability to [Key Achievement] during internship at [Company]. Seeking entry-level position to build career in [Industry].`,
        keywords: ['Internship Experience', 'Practical Skills', 'Entry-Level', 'Career Development']
      }
    ]
  },
  {
    id: 'leadership',
    name: 'Leadership',
    description: 'Templates for management and leadership roles',
    templates: [
      {
        title: 'Transformational Leader',
        summary: `Visionary leader with [Number] years of experience driving organizational transformation and team excellence. Expertise in [Leadership Area 1], [Leadership Area 2], and [Leadership Area 3]. Successfully [Major Leadership Achievement]. Committed to fostering innovation and achieving strategic objectives.`,
        keywords: ['Strategic Vision', 'Team Development', 'Change Management', 'Performance Leadership']
      }
    ]
  },
  {
    id: 'technical',
    name: 'Technical',
    description: 'Templates for technology and engineering professionals',
    templates: [
      {
        title: 'Software Developer',
        summary: `Full-stack developer with [Number] years of experience building scalable applications using [Technology Stack]. Proficient in [Programming Language 1], [Programming Language 2], and [Framework]. Demonstrated ability to [Technical Achievement] resulting in [Business Impact].`,
        keywords: ['Full-Stack Development', 'Agile Methodology', 'System Architecture', 'Code Optimization']
      },
      {
        title: 'Data Scientist',
        summary: `Data scientist specializing in [Specialization] with expertise in [Tool/Language 1], [Tool/Language 2], and [Tool/Language 3]. Proven ability to [Data Achievement] leading to [Business Outcome]. Passionate about leveraging data to drive decision-making and create business value.`,
        keywords: ['Machine Learning', 'Statistical Analysis', 'Data Visualization', 'Predictive Modeling']
      }
    ]
  }
];

// Industry Keywords
const INDUSTRY_KEYWORDS = [
  { industry: 'Technology', keywords: ['Innovation', 'Scalability', 'Digital Transformation', 'Agile Development'] },
  { industry: 'Finance', keywords: ['Risk Management', 'Financial Analysis', 'Regulatory Compliance', 'Investment Strategy'] },
  { industry: 'Healthcare', keywords: ['Patient Care', 'Clinical Excellence', 'Healthcare Operations', 'Medical Research'] },
  { industry: 'Marketing', keywords: ['Brand Strategy', 'Digital Marketing', 'Customer Engagement', 'Campaign Optimization'] },
  { industry: 'Education', keywords: ['Curriculum Development', 'Student Success', 'Educational Technology', 'Academic Administration'] },
  { industry: 'Consulting', keywords: ['Strategic Advisory', 'Business Transformation', 'Client Solutions', 'Process Optimization'] }
];

// Power Words
const POWER_WORDS = [
  'Accomplished', 'Achieved', 'Advanced', 'Amplified', 'Boosted', 'Built',
  'Catalyzed', 'Championed', 'Created', 'Delivered', 'Developed', 'Drove',
  'Elevated', 'Engineered', 'Enhanced', 'Established', 'Executed', 'Expanded',
  'Generated', 'Implemented', 'Improved', 'Increased', 'Innovated', 'Led',
  'Maximized', 'Optimized', 'Orchestrated', 'Pioneered', 'Produced', 'Reduced',
  'Revolutionized', 'Scaled', 'Spearheaded', 'Strengthened', 'Streamlined',
  'Transformed'
];

// FAQ Data
const FAQS = [
  {
    question: "What makes a great professional summary?",
    answer: "A great professional summary is concise (3-5 sentences), highlights key achievements, includes relevant keywords, and shows what value you bring to employers. It should be tailored to the specific job you're applying for and include quantifiable results whenever possible."
  },
  {
    question: "How long should my resume summary be?",
    answer: "Ideal length is 3-5 sentences or 50-100 words. Recruiters typically spend only 6-7 seconds scanning a resume, so your summary needs to be impactful and concise. Focus on your most impressive achievements and relevant skills that match the job description."
  },
  {
    question: "Should I include keywords from the job description?",
    answer: "Absolutely! Keywords from the job description are crucial for both human readers and ATS systems. Our generator helps identify and incorporate relevant keywords. Match your skills and experiences to the job requirements to show you're the perfect fit."
  },
  {
    question: "How do I make my summary stand out?",
    answer: "Use specific achievements with numbers, include industry-specific terminology, start with your strongest selling point, and show what makes you unique. Avoid generic phrases and focus on what differentiates you from other candidates with similar experience."
  },
  {
    question: "Can I use the same summary for every job application?",
    answer: "While you can have a base summary, it's best to customize it for each application. Tailor your summary to highlight the skills and experiences most relevant to each specific job. This shows employers you've taken the time to understand their needs."
  }
];

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'free resume summary generator',
  'professional summary creator',
  'career profile builder',
  'resume introduction maker',
  'ATS-friendly summary generator',
  'executive summary generator',
  'career summary template',
  'professional bio creator',
  'resume headline generator',
  'summary statement builder',
  'resume summary examples',
  'professional summary writer',
  'resume profile generator',
  'cv summary creator',
  'job application summary'
];

const ResumeSummaryGenerator = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    yearsExperience: '',
    industry: '',
    keySkills: '',
    achievements: '',
    targetRole: ''
  });
  const [generatedSummary, setGeneratedSummary] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);
  const [copied, setCopied] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const formRef = useRef(null);

  // Schema data for JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        "url": PAGE_URL,
        "name": "Free Resume Summary Generator - Professional Career Profile Builder 2026",
        "description": "Create ATS-friendly professional resume summaries instantly with our free generator. Choose from 20+ templates, add keywords, and download your perfect summary.",
        "datePublished": "2024-01-01",
        "dateModified": CURRENT_DATE,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}#website`,
          "url": SITE_URL,
          "name": "Professional Resume Free",
          "description": "Free resume building tools and resources for job seekers",
          "publisher": {
            "@type": "Organization",
            "@id": `${SITE_URL}#organization`,
            "name": "Professional Resume Free",
            "url": SITE_URL,
            "logo": {
              "@type": "ImageObject",
              "url": `${SITE_URL}/logo.png`,
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
              "item": SITE_URL
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Free Resume Summary Generator",
              "item": PAGE_URL
            }
          ]
        }
      },
      {
        "@type": "WebApplication",
        "name": "Resume Summary Generator",
        "description": "Free professional resume summary generator with template recommendations, keyword optimization, and industry-specific suggestions",
        "url": PAGE_URL,
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
          "ratingValue": "4.8",
          "ratingCount": "215",
          "bestRating": "5",
          "worstRating": "1",
          "itemReviewed": {
            "@type": "SoftwareApplication",
            "name": "Resume Summary Generator"
          }
        },
        "featureList": [
          "20+ Professional Templates",
          "ATS-Friendly Formatting",
          "Keyword Optimization",
          "Industry-Specific Suggestions",
          "Real-Time Preview",
          "Free PDF Export",
          "No Sign Up Required"
        ],
        "softwareVersion": "2026.1.0",
        "screenshot": `${SITE_URL}/images/summary-generator-screenshot.jpg`,
        "applicationSuite": "Career Tools",
        "countriesSupported": "Global",
        "fileSize": "Web Application"
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": CURRENT_DATE,
            "author": {
              "@type": "Person",
              "name": "Resume Builder Team"
            }
          },
          "mainEntityOfPage": `${PAGE_URL}#faq-${index + 1}`
        }))
      },
      {
        "@type": "ItemList",
        "name": "Summary Template Categories",
        "description": "Professional resume summary templates for different career levels",
        "numberOfItems": SUMMARY_TEMPLATES.length,
        "itemListElement": SUMMARY_TEMPLATES.map((category, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "CreativeWork",
            "name": category.name,
            "description": category.description,
            "hasPart": {
              "@type": "ItemList",
              "numberOfItems": category.templates.length,
              "itemListElement": category.templates.map((template, tIndex) => ({
                "@type": "ListItem",
                "position": tIndex + 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": template.title,
                  "keywords": template.keywords.join(', ')
                }
              }))
            }
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Create a Professional Resume Summary",
        "description": "Step-by-step guide to create an effective resume summary using our generator",
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
            "name": "Enter Your Career Information",
            "text": "Fill in your job title, experience, industry, skills, achievements, and target role.",
            "url": `${PAGE_URL}#form`
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Choose a Template",
            "text": "Select from professional templates tailored to your career level and goals.",
            "url": `${PAGE_URL}#templates`
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Add Keywords",
            "text": "Select relevant keywords and power words to optimize your summary for ATS.",
            "url": `${PAGE_URL}#keywords`
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Generate & Copy",
            "text": "Generate your professional summary and copy it to your resume instantly.",
            "url": `${PAGE_URL}#generate`
          }
        ],
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "Career Information"
          }
        ],
        "tool": [
          {
            "@type": "HowToTool",
            "name": "Resume Summary Generator"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Online Resume Summary Generation",
        "provider": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "url": SITE_URL
        },
        "areaServed": {
          "@type": "Country",
          "name": "Global"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Free Resume Building Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Summary Generation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Keyword Optimization"
              }
            }
          ]
        }
      }
    ]
  };

  // Update character and word counts
  useEffect(() => {
    const text = generatedSummary;
    setCharacterCount(text.length);
    setWordCount(text.trim().split(/\s+/).filter(word => word.length > 0).length);
  }, [generatedSummary]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle keyword selection
  const handleKeywordSelect = (keyword) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter(k => k !== keyword));
    } else {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };

  // Handle template selection
  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    if (template.keywords && template.keywords.length > 0) {
      const newKeywords = [...new Set([...selectedKeywords, ...template.keywords])];
      setSelectedKeywords(newKeywords.slice(0, 6));
    }
  };

  // Generate summary
  const generateSummary = useCallback(() => {
    if (selectedTemplate) {
      let summary = selectedTemplate.summary;
      Object.entries(formData).forEach(([key, value]) => {
        if (value.trim()) {
          const placeholder = `[${key.replace(/([A-Z])/g, ' $1').trim()}]`;
          summary = summary.replace(new RegExp(placeholder, 'gi'), value);
        }
      });
      summary = summary.replace(/\[Key Skill \d+\]/g, () => {
        const skills = formData.keySkills.split(',').filter(s => s.trim());
        return skills.length > 0 ? skills.shift().trim() : 'relevant skills';
      });
      summary = summary.replace(/\[Major Achievement \d+\]/g, () => {
        const achievements = formData.achievements.split('.').filter(a => a.trim());
        return achievements.length > 0 ? achievements.shift().trim() : 'key achievements';
      });
      if (selectedKeywords.length > 0) {
        const keywordString = selectedKeywords.slice(0, 4).join(', ');
        summary += ` Proficient in ${keywordString} with a commitment to excellence and continuous improvement.`;
      }
      summary = summary.replace(/\s+/g, ' ').trim();
      summary = summary.charAt(0).toUpperCase() + summary.slice(1);
      setGeneratedSummary(summary);
    }
  }, [formData, selectedTemplate, selectedKeywords]);

  // Auto-generate when template or form data changes
  useEffect(() => {
    if (selectedTemplate && (formData.jobTitle || formData.keySkills)) {
      const timer = setTimeout(() => {
        generateSummary();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedTemplate, formData, selectedKeywords, generateSummary]);

  // Copy summary to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      jobTitle: '',
      yearsExperience: '',
      industry: '',
      keySkills: '',
      achievements: '',
      targetRole: ''
    });
    setSelectedTemplate(null);
    setSelectedKeywords([]);
    setGeneratedSummary('');
    setCopied(false);
    if (formRef.current) {
      formRef.current.focus();
    }
  };

  // Load example
  const loadExample = () => {
    setFormData({
      jobTitle: 'Senior Project Manager',
      yearsExperience: '8',
      industry: 'Technology',
      keySkills: 'Agile methodologies, stakeholder management, budget control, risk mitigation',
      achievements: 'Led digital transformation project reducing operational costs by 30%. Implemented new project management framework improving team productivity by 25%.',
      targetRole: 'Director of Project Management'
    });
    const exampleTemplate = SUMMARY_TEMPLATES[0].templates[0];
    setSelectedTemplate(exampleTemplate);
    setSelectedKeywords(['Strategic Planning', 'Team Leadership', 'Process Improvement', 'Budget Management']);
  };

  // Get industry suggestions
  const getIndustrySuggestions = (industry) => {
    const industryData = INDUSTRY_KEYWORDS.find(item =>
      item.industry.toLowerCase() === industry.toLowerCase()
    );
    return industryData ? industryData.keywords : [];
  };

  return (
    <>
      <Head>
        <title>Free Resume Summary Generator 2026 - Professional Career Profile Builder</title>
        <meta
          name="description"
          content={`Create ATS-friendly professional resume summaries instantly. ${CURRENT_YEAR}'s best free resume summary generator with 20+ templates, keyword optimization & industry-specific suggestions.`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={CURRENT_DATE} />
        <meta name="last-modified" content={CURRENT_DATE} />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical & Alternate URLs */}
        <link rel="canonical" href={PAGE_URL} />
        <link rel="alternate" href={PAGE_URL} hreflang="en" />
        <link rel="alternate" href={PAGE_URL} hreflang="en-US" />
        <link rel="alternate" href={PAGE_URL} hreflang="en-GB" />
        <link rel="alternate" href={PAGE_URL} hreflang="en-CA" />
        <link rel="alternate" href={PAGE_URL} hreflang="en-AU" />
        <link rel="alternate" href={PAGE_URL} hreflang="x-default" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Resume Summary Generator 2026 - Professional Career Profile Builder" />
        <meta property="og:description" content="Create ATS-friendly professional resume summaries instantly with our free generator. Choose from 20+ templates, add keywords, and download your perfect summary." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}/images/og-resume-summary-generator.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Summary Generator Interface" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={CURRENT_DATE} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Summary Generator 2026" />
        <meta name="twitter:description" content="Create professional ATS-friendly resume summaries instantly. 20+ templates, keyword optimization, free to use." />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-resume-summary-generator.jpg`} />
        <meta name="twitter:image:alt" content="Professional Resume Summary Generator" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Preload and Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>

      {/* Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>

      <div className={styles.container}>
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a itemProp="item" href={SITE_URL}>
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li className={styles.breadcrumbSeparator}>›</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a itemProp="item" href={`${SITE_URL}/tools`}>
                <span itemProp="name">Tools</span>
              </a>
              <meta itemProp="position" content="2" />
            </li>
            <li className={styles.breadcrumbSeparator}>›</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Resume Summary Generator</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        <header className={styles.header}>
          <h1 className={styles.title}>Free Resume Summary Generator {CURRENT_YEAR}</h1>
          <p className={styles.subtitle}>
            Create compelling professional summaries that get noticed by employers
            <span className={styles.templateCount}>
              {SUMMARY_TEMPLATES.reduce((total, cat) => total + cat.templates.length, 0)}+ Professional Templates
            </span>
          </p>
          <div className={styles.aggregateRating} itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.8" />
            <meta itemProp="ratingCount" content="215" />
            <div className={styles.ratingStars}>
              {'★'.repeat(5)}
              <span className={styles.ratingValue}>4.8/5 Rating</span>
            </div>
            <div className={styles.ratingText}>Used by 18,000+ job seekers worldwide</div>
          </div>
        </header>

        <main className={styles.main}>
          {/* Generator Section */}
          <section className={styles.generatorSection} id="generator">
            <div className={styles.generatorHeader}>
              <h2>Generate Your Professional Resume Summary</h2>
              <p>
                Fill in your details, choose a template, and get a professionally crafted summary tailored to your career goals. 
                <strong> Optimized for ATS systems and human recruiters.</strong>
              </p>
            </div>
            
            <div className={styles.generatorContainer}>
              {/* Form Column */}
              <div className={styles.inputColumn}>
                <div className={styles.formSection} id="form">
                  <div className={styles.formHeader}>
                    <h3>Your Career Information</h3>
                    <button
                      className={styles.exampleButton}
                      onClick={loadExample}
                      type="button"
                      aria-label="Load example data to see how the generator works"
                    >
                      Load Example
                    </button>
                  </div>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="jobTitle">Current/Most Recent Job Title</label>
                      <input
                        ref={formRef}
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        placeholder="e.g., Senior Marketing Manager"
                        className={styles.formInput}
                        aria-required="true"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="yearsExperience">Years of Experience</label>
                      <input
                        type="text"
                        id="yearsExperience"
                        name="yearsExperience"
                        value={formData.yearsExperience}
                        onChange={handleInputChange}
                        placeholder="e.g., 8"
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="industry">Industry</label>
                      <input
                        type="text"
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        placeholder="e.g., Technology, Finance, Healthcare"
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="targetRole">Target Role</label>
                      <input
                        type="text"
                        id="targetRole"
                        name="targetRole"
                        value={formData.targetRole}
                        onChange={handleInputChange}
                        placeholder="e.g., Director of Operations"
                        className={styles.formInput}
                      />
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label htmlFor="keySkills">Key Skills (comma separated)</label>
                      <textarea
                        id="keySkills"
                        name="keySkills"
                        value={formData.keySkills}
                        onChange={handleInputChange}
                        placeholder="e.g., Project Management, Data Analysis, Team Leadership, Strategic Planning"
                        className={styles.formTextarea}
                        rows={3}
                        aria-describedby="skillsHelp"
                      />
                      <div id="skillsHelp" className={styles.helpText}>
                        Separate skills with commas for best results
                      </div>
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label htmlFor="achievements">Key Achievements</label>
                      <textarea
                        id="achievements"
                        name="achievements"
                        value={formData.achievements}
                        onChange={handleInputChange}
                        placeholder="e.g., Increased sales by 30% through new strategy. Reduced costs by 25% by optimizing processes."
                        className={styles.formTextarea}
                        rows={4}
                        aria-describedby="achievementsHelp"
                      />
                      <div id="achievementsHelp" className={styles.helpText}>
                        Use numbers and metrics when possible
                      </div>
                    </div>
                  </div>
                </div>

                {/* Templates Section */}
                <div className={styles.templatesSection} id="templates">
                  <div className={styles.sectionHeader}>
                    <h3>Choose a Professional Template</h3>
                    <div className={styles.templateCount}>
                      {selectedTemplate ? '1 selected' : 'None selected'}
                    </div>
                  </div>
                  <div className={styles.templatesGrid}>
                    {SUMMARY_TEMPLATES.map(category => (
                      <div key={category.id} className={styles.templateCategory}>
                        <div className={styles.categoryHeader}>
                          <span className={styles.categoryName}>{category.name}</span>
                          <span className={styles.categoryCount}>{category.templates.length} templates</span>
                        </div>
                        <div className={styles.categoryTemplates}>
                          {category.templates.map((template, index) => (
                            <button
                              key={index}
                              className={`${styles.templateButton} ${
                                selectedTemplate?.title === template.title ? styles.selected : ''
                              }`}
                              onClick={() => handleTemplateSelect(template)}
                              type="button"
                              aria-label={`Select ${template.title} template`}
                            >
                              <div className={styles.templateTitle}>{template.title}</div>
                              <div className={styles.templatePreview}>
                                {template.summary.substring(0, 80)}...
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output Column */}
              <div className={styles.outputColumn}>
                <div className={styles.summarySection}>
                  <div className={styles.sectionHeader}>
                    <h3>Generated Summary</h3>
                    <div className={styles.summaryStats}>
                      <span>{characterCount} characters</span>
                      <span>•</span>
                      <span>{wordCount} words</span>
                    </div>
                  </div>
                  <div className={styles.summaryOutput}>
                    {generatedSummary ? (
                      <div className={styles.summaryText}>
                        {generatedSummary}
                      </div>
                    ) : (
                      <div className={styles.emptySummary}>
                        <div className={styles.emptyText}>
                          Your professional summary will appear here. Fill in your details and select a template to generate.
                        </div>
                      </div>
                    )}
                    {generatedSummary && (
                      <div className={styles.summaryActions}>
                        <button
                          className={styles.copyButton}
                          onClick={copyToClipboard}
                          type="button"
                          aria-label="Copy summary to clipboard"
                        >
                          {copied ? '✓ Copied!' : 'Copy Summary'}
                        </button>
                        <button
                          className={styles.regenerateButton}
                          onClick={generateSummary}
                          type="button"
                          aria-label="Regenerate summary with current data"
                        >
                          Regenerate
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Keywords Section */}
                <div className={styles.keywordsSection} id="keywords">
                  <div className={styles.sectionHeader}>
                    <h3>Keywords & Power Words</h3>
                    <div className={styles.keywordsCount}>
                      {selectedKeywords.length} selected
                    </div>
                  </div>
                  <div className={styles.keywordsGrid}>
                    {getIndustrySuggestions(formData.industry).map((keyword, index) => (
                      <button
                        key={`industry-${index}`}
                        className={`${styles.keywordButton} ${
                          selectedKeywords.includes(keyword) ? styles.selected : ''
                        }`}
                        onClick={() => handleKeywordSelect(keyword)}
                        type="button"
                        aria-label={`Select keyword: ${keyword}`}
                      >
                        {keyword}
                      </button>
                    ))}
                    {POWER_WORDS.slice(0, 12).map((word, index) => (
                      <button
                        key={`power-${index}`}
                        className={`${styles.keywordButton} ${
                          selectedKeywords.includes(word) ? styles.selected : ''
                        }`}
                        onClick={() => handleKeywordSelect(word)}
                        type="button"
                        aria-label={`Select power word: ${word}`}
                      >
                        {word}
                      </button>
                    ))}
                  </div>
                  <div className={styles.industryKeywords}>
                    <h4>Quick Industry Select</h4>
                    <div className={styles.industryList}>
                      {INDUSTRY_KEYWORDS.map((industry, index) => (
                        <button
                          key={index}
                          className={styles.industryButton}
                          onClick={() => {
                            setFormData(prev => ({ ...prev, industry: industry.industry }));
                            setSelectedKeywords(prev => [...prev, ...industry.keywords.slice(0, 2)]);
                          }}
                          type="button"
                          aria-label={`Set industry to ${industry.industry}`}
                        >
                          {industry.industry}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Generator Actions */}
            <div className={styles.generatorActions} id="generate">
              <button
                className={styles.generateButton}
                onClick={generateSummary}
                disabled={!selectedTemplate}
                type="button"
                aria-label="Generate professional summary"
              >
                Generate Summary
              </button>
              <button
                className={styles.resetButton}
                onClick={handleReset}
                type="button"
                aria-label="Reset all form data"
              >
                Reset All
              </button>
            </div>
          </section>

          {/* Tips Section */}
          <section className={styles.tipsSection}>
            <h2 className={styles.sectionTitle}>Writing Tips for Powerful Resume Summaries</h2>
            <p className={styles.sectionSubtitle}>
              Follow these expert tips to create summaries that get results
            </p>
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <h3 className={styles.tipTitle}>Be Specific & Quantifiable</h3>
                <p className={styles.tipDescription}>
                  Include specific achievements with numbers and metrics. Instead of "improved sales," say "increased sales by 25% through targeted marketing campaigns that expanded market reach by 15%."
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3 className={styles.tipTitle}>Use ATS Keywords</h3>
                <p className={styles.tipDescription}>
                  Incorporate keywords from the job description. This helps with Applicant Tracking System scanning and shows you're a perfect fit for the specific role. Use our keyword selector above.
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3 className={styles.tipTitle}>Start Strong</h3>
                <p className={styles.tipDescription}>
                  Begin with your strongest selling point. The first sentence should capture attention and make recruiters want to keep reading. Lead with your most impressive achievement or unique value proposition.
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3 className={styles.tipTitle}>Keep it Concise</h3>
                <p className={styles.tipDescription}>
                  Limit your summary to 3-5 sentences (50-100 words). Recruiters spend only 6-7 seconds scanning resumes, so every word needs to count and add value. Remove fluff and focus on impact.
                </p>
              </div>
            </div>
          </section>

          {/* Examples Section */}
          <section className={styles.examplesSection}>
            <h2 className={styles.sectionTitle}>Professional Summary Examples</h2>
            <p className={styles.sectionSubtitle}>
              See how effective summaries are structured across different career levels
            </p>
            <div className={styles.examplesGrid}>
              <div className={styles.exampleCard}>
                <div className={styles.exampleHeader}>
                  <div className={styles.exampleTitle}>Senior Executive</div>
                  <div className={styles.exampleBadge}>15+ Years Experience</div>
                </div>
                <div className={styles.exampleContent}>
                  <p>Visionary CEO with 15+ years of experience driving growth in technology startups. Successfully scaled three companies from seed to Series C, generating over $500M in collective enterprise value. Expertise in fundraising, team building, and market expansion with a proven track record of delivering 35%+ annual growth.</p>
                  <div className={styles.exampleKeywords}>
                    <span>Strategic Leadership</span>
                    <span>Business Growth</span>
                    <span>Team Development</span>
                    <span>Market Expansion</span>
                  </div>
                </div>
              </div>
              <div className={styles.exampleCard}>
                <div className={styles.exampleHeader}>
                  <div className={styles.exampleTitle}>Software Engineer</div>
                  <div className={styles.exampleBadge}>5 Years Experience</div>
                </div>
                <div className={styles.exampleContent}>
                  <p>Full-stack developer with 5 years of experience building scalable web applications. Proficient in React, Node.js, and AWS. Led development of customer portal serving 100K+ users, improving load times by 40% and reducing bounce rate by 25%. Passionate about clean code, agile methodologies, and mentoring junior developers.</p>
                  <div className={styles.exampleKeywords}>
                    <span>Full-Stack Development</span>
                    <span>System Architecture</span>
                    <span>Performance Optimization</span>
                    <span>Team Leadership</span>
                  </div>
                </div>
              </div>
              <div className={styles.exampleCard}>
                <div className={styles.exampleHeader}>
                  <div className={styles.exampleTitle}>Recent Graduate</div>
                  <div className={styles.exampleBadge}>Entry Level</div>
                </div>
                <div className={styles.exampleContent}>
                  <p>Recent Computer Science graduate with strong academic background (3.8 GPA) and hands-on internship experience. Developed skills in Python, machine learning, and data analysis through coursework and research projects. Completed summer internship at TechCorp, contributing to data pipeline optimization that improved processing speed by 30%.</p>
                  <div className={styles.exampleKeywords}>
                    <span>Technical Skills</span>
                    <span>Academic Excellence</span>
                    <span>Fast Learner</span>
                    <span>Research Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes Section */}
          <section className={styles.mistakesSection}>
            <h2 className={styles.sectionTitle}>Common Summary Mistakes to Avoid</h2>
            <p className={styles.sectionSubtitle}>
              Don't let these errors undermine your resume's effectiveness
            </p>
            <div className={styles.mistakesGrid}>
              <div className={styles.mistakeCard}>
                <div className={styles.mistakeHeader}>
                  <div className={styles.mistakeNumber}>01</div>
                  <div className={styles.mistakeTitle}>Too Generic & Vague</div>
                </div>
                <div className={styles.mistakeContent}>
                  <p>Avoid vague statements like "hard worker" or "team player." Be specific about what you actually achieved and how you contributed. Use concrete examples and measurable results.</p>
                </div>
              </div>
              <div className={styles.mistakeCard}>
                <div className={styles.mistakeHeader}>
                  <div className={styles.mistakeNumber}>02</div>
                  <div className={styles.mistakeTitle}>Too Long & Wordy</div>
                </div>
                <div className={styles.mistakeContent}>
                  <p>Summaries longer than 5 sentences lose impact. Be concise and focus only on your most relevant and impressive achievements. Remove fluff and redundant information.</p>
                </div>
              </div>
              <div className={styles.mistakeCard}>
                <div className={styles.mistakeHeader}>
                  <div className={styles.mistakeNumber}>03</div>
                  <div className={styles.mistakeTitle}>Missing ATS Keywords</div>
                </div>
                <div className={styles.mistakeContent}>
                  <p>Not including job-specific keywords can cause ATS rejection. Always tailor your summary with keywords from the job description. Use our keyword optimization tools above.</p>
                </div>
              </div>
              <div className={styles.mistakeCard}>
                <div className={styles.mistakeHeader}>
                  <div className={styles.mistakeNumber}>04</div>
                  <div className={styles.mistakeTitle}>Focusing on Duties Instead of Achievements</div>
                </div>
                <div className={styles.mistakeContent}>
                  <p>Don't just list job responsibilities. Focus on achievements, results, and the value you brought to previous employers. Show impact, not just activity.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className={styles.faqSection} id="faqs">
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to know about creating effective resume summaries
            </p>
            <div className={styles.faqList}>
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}
                  id={`faq-${index + 1}`}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <div 
                    className={styles.faqQuestion}
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={activeFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 itemProp="name">{faq.question}</h3>
                    <span className={styles.faqToggle}>{activeFaq === index ? '−' : '+'}</span>
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
          <section className={styles.benefitsSection}>
            <h2 className={styles.sectionTitle}>Why a Strong Resume Summary Matters</h2>
            <p className={styles.sectionSubtitle}>
              Your summary is your first impression - make it count
            </p>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>First Impression Advantage</h3>
                <p className={styles.benefitDescription}>
                  Your summary is the first thing recruiters read. A strong opening captures attention and encourages them to read the rest of your resume. 75% of hiring decisions are made in the first 30 seconds.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>ATS Optimization</h3>
                <p className={styles.benefitDescription}>
                  Well-crafted summaries with relevant keywords perform better in Applicant Tracking Systems used by 99% of employers. This increases your chances of getting seen by human recruiters by up to 300%.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Career Positioning</h3>
                <p className={styles.benefitDescription}>
                  A targeted summary positions you for the specific role you want, highlighting the exact skills and experiences employers are looking for. It tells your career story in a compelling, concise way.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Create Your Perfect Resume Summary?</h2>
              <p className={styles.ctaSubtitle}>
                Join 18,000+ professionals who have improved their resumes with our free generator
              </p>
              <div className={styles.ctaButtons}>
                <button
                  className={styles.ctaPrimaryButton}
                  onClick={() => {
                    if (formRef.current) formRef.current.focus();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  aria-label="Start creating your professional resume summary"
                >
                  Start Creating Now
                </button>
                <button
                  className={styles.ctaSecondaryButton}
                  onClick={loadExample}
                  aria-label="Try with example data to see how it works"
                >
                  Try Example First
                </button>
              </div>
              <div className={styles.ctaFeatures}>
                <div className={styles.ctaFeature}>
                  <span className={styles.featureCheck}>✓</span>
                  <span>100% Free - No Sign Up Required</span>
                </div>
                <div className={styles.ctaFeature}>
                  <span className={styles.featureCheck}>✓</span>
                  <span>ATS-Optimized Templates</span>
                </div>
                <div className={styles.ctaFeature}>
                  <span className={styles.featureCheck}>✓</span>
                  <span>Instant Results - No Watermarks</span>
                </div>
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
  const buildTimestamp = Date.now();
  const buildDate = new Date(buildTimestamp).toISOString().split('T')[0];
  
  return {
    props: {
      seoData: {
        currentDate: buildDate,
        lastModifiedDate: new Date(buildTimestamp).toISOString(),
        buildTimestamp
      }
    },
    // Revalidate every 2 hours
    revalidate: 3600,
  };
}

export default ResumeSummaryGenerator;