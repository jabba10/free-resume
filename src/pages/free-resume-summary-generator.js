import { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import styles from './free-resume-summary-generator.module.css';

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();

// Template Categories (icons removed)
const SUMMARY_TEMPLATES = [
  {
    id: 'experienced',
    name: 'Experienced Professional',
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
  'resume summary generator',
  'professional summary creator',
  'career profile builder',
  'resume introduction maker',
  'ATS-friendly summary',
  'executive summary generator',
  'career summary template',
  'professional bio creator',
  'resume headline generator',
  'summary statement builder'
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
    // Auto-populate form based on template keywords
    if (template.keywords && template.keywords.length > 0) {
      const newKeywords = [...new Set([...selectedKeywords, ...template.keywords])];
      setSelectedKeywords(newKeywords.slice(0, 6)); // Limit to 6 keywords
    }
  };

  // Generate summary
  const generateSummary = useCallback(() => {
    if (selectedTemplate) {
      let summary = selectedTemplate.summary;
      // Replace placeholders with form data
      Object.entries(formData).forEach(([key, value]) => {
        if (value.trim()) {
          const placeholder = `[${key.replace(/([A-Z])/g, ' $1').trim()}]`;
          summary = summary.replace(new RegExp(placeholder, 'gi'), value);
        }
      });
      // Replace generic placeholders
      summary = summary.replace(/\[Key Skill \d+\]/g, () => {
        const skills = formData.keySkills.split(',').filter(s => s.trim());
        return skills.length > 0 ? skills.shift().trim() : 'relevant skills';
      });
      summary = summary.replace(/\[Major Achievement \d+\]/g, () => {
        const achievements = formData.achievements.split('.').filter(a => a.trim());
        return achievements.length > 0 ? achievements.shift().trim() : 'key achievements';
      });
      // Add selected keywords
      if (selectedKeywords.length > 0) {
        const keywordString = selectedKeywords.slice(0, 4).join(', ');
        summary += ` Proficient in ${keywordString} with a commitment to excellence and continuous improvement.`;
      }
      // Ensure proper formatting
      summary = summary.replace(/\s+/g, ' ').trim();
      // Capitalize first letter
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

  // Schema data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Resume Summary Generator",
        "description": "Free professional resume summary generator with template recommendations, keyword optimization, and industry-specific suggestions",
        "url": "https://www.professionalresumefree.com/free-resume-summary-generator",
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
          "reviewCount": "215",
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
        "name": "Summary Template Categories",
        "itemListElement": SUMMARY_TEMPLATES.map((category, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": category.name,
          "description": `${category.templates.length} professional templates`
        }))
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Resume Summary Generator – Professional Career Profile Builder {CURRENT_YEAR}</title>
        <meta
          name="description"
          content={`Free professional resume summary generator with template recommendations, keyword optimization, and industry-specific suggestions. ${CURRENT_YEAR}`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Resume Summary Generator – Professional Career Profile Builder" />
        <meta property="og:description" content="Free resume summary generator with template recommendations and keyword optimization" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-summary-generator" />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-summary-generator.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Summary Generator" />
        <meta name="twitter:description" content="Professional summary generator with template recommendations and keyword optimization" />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/twitter-summary-generator.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-summary-generator" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Resume Summary Generator</h1>
          <p className={styles.subtitle}>
            Create compelling professional summaries that get noticed by employers
            <span className={styles.templateCount}>
              {SUMMARY_TEMPLATES.reduce((total, cat) => total + cat.templates.length, 0)}+ Templates
            </span>
          </p>
          <div className={styles.aggregateRating} itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.8" />
            <meta itemProp="ratingCount" content="215" />
            <div className={styles.ratingStars}>
              {'★'.repeat(5)}
              <span className={styles.ratingValue}>4.8/5</span>
            </div>
            <div className={styles.ratingText}>Used by 18,000+ job seekers</div>
          </div>
        </header>

        <main className={styles.main}>
          {/* Main Generator Section */}
          <div className={styles.generatorSection}>
            <div className={styles.generatorHeader}>
              <h2>Generate Your Professional Summary</h2>
              <p>
                Fill in your details, choose a template, and get a professionally crafted summary tailored to your career goals.
              </p>
            </div>
            <div className={styles.generatorContainer}>
              {/* Left Column: Form and Templates */}
              <div className={styles.inputColumn}>
                <div className={styles.formSection}>
                  <div className={styles.formHeader}>
                    <h3>Your Career Information</h3>
                    <button
                      className={styles.exampleButton}
                      onClick={loadExample}
                      type="button"
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
                      />
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
                      />
                    </div>
                  </div>
                </div>
                {/* Template Selection */}
                <div className={styles.templatesSection}>
                  <div className={styles.sectionHeader}>
                    <h3>Choose a Template</h3>
                    <div className={styles.templateCount}>
                      {selectedTemplate ? '1 selected' : 'None selected'}
                    </div>
                  </div>
                  <div className={styles.templatesGrid}>
                    {SUMMARY_TEMPLATES.map(category => (
                      <div key={category.id} className={styles.templateCategory}>
                        <div className={styles.categoryHeader}>
                          <span className={styles.categoryName}>{category.name}</span>
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
              {/* Right Column: Generated Summary */}
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
                        >
                          {copied ? 'Copied!' : 'Copy Summary'}
                        </button>
                        <button
                          className={styles.regenerateButton}
                          onClick={generateSummary}
                          type="button"
                        >
                          Regenerate
                        </button>
                      </div>
                    )}
                  </div>
                  {/* Keywords Section */}
                  <div className={styles.keywordsSection}>
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
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                    <div className={styles.industryKeywords}>
                      <h4>Industry Keywords</h4>
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
                          >
                            {industry.industry}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.generatorActions}>
            <button
              className={styles.generateButton}
              onClick={generateSummary}
              disabled={!selectedTemplate}
              type="button"
            >
              Generate Summary
            </button>
            <button
              className={styles.resetButton}
              onClick={handleReset}
              type="button"
            >
              Reset All
            </button>
          </div>

          {/* Tips Section */}
          <section className={styles.tipsSection}>
            <h2 className={styles.sectionTitle}>Writing Tips for Powerful Summaries</h2>
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <h3 className={styles.tipTitle}>Be Specific</h3>
                <p className={styles.tipDescription}>
                  Include specific achievements with numbers and metrics. Instead of "improved sales," say "increased sales by 25% through targeted marketing campaigns."
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3 className={styles.tipTitle}>Use Keywords</h3>
                <p className={styles.tipDescription}>
                  Incorporate keywords from the job description. This helps with ATS scanning and shows you're a perfect fit for the specific role.
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3 className={styles.tipTitle}>Start Strong</h3>
                <p className={styles.tipDescription}>
                  Begin with your strongest selling point. The first sentence should capture attention and make recruiters want to keep reading.
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3 className={styles.tipTitle}>Keep it Concise</h3>
                <p className={styles.tipDescription}>
                  Limit your summary to 3-5 sentences. Recruiters spend seconds scanning, so every word needs to count and add value.
                </p>
              </div>
            </div>
          </section>

          {/* Examples Section */}
          <section className={styles.examplesSection}>
            <h2 className={styles.sectionTitle}>Example Summaries</h2>
            <p className={styles.sectionSubtitle}>
              See how effective summaries are structured across different career levels
            </p>
            <div className={styles.examplesGrid}>
              <div className={styles.exampleCard}>
                <div className={styles.exampleHeader}>
                  <div className={styles.exampleTitle}>Senior Executive</div>
                </div>
                <div className={styles.exampleContent}>
                  <p>Visionary CEO with 15+ years of experience driving growth in technology startups. Successfully scaled three companies from seed to Series C, generating over $500M in collective enterprise value. Expertise in fundraising, team building, and market expansion.</p>
                  <div className={styles.exampleKeywords}>
                    <span>Strategic Leadership</span>
                    <span>Business Growth</span>
                    <span>Team Development</span>
                  </div>
                </div>
              </div>
              <div className={styles.exampleCard}>
                <div className={styles.exampleHeader}>
                  <div className={styles.exampleTitle}>Software Engineer</div>
                </div>
                <div className={styles.exampleContent}>
                  <p>Full-stack developer with 5 years of experience building scalable web applications. Proficient in React, Node.js, and AWS. Led development of customer portal serving 100K+ users, improving load times by 40%. Passionate about clean code and agile methodologies.</p>
                  <div className={styles.exampleKeywords}>
                    <span>Full-Stack Development</span>
                    <span>System Architecture</span>
                    <span>Performance Optimization</span>
                  </div>
                </div>
              </div>
              <div className={styles.exampleCard}>
                <div className={styles.exampleHeader}>
                  <div className={styles.exampleTitle}>Recent Graduate</div>
                </div>
                <div className={styles.exampleContent}>
                  <p>Recent Computer Science graduate with strong academic background and hands-on internship experience. Developed skills in Python, machine learning, and data analysis through coursework and research projects. Eager to apply theoretical knowledge in practical data science role.</p>
                  <div className={styles.exampleKeywords}>
                    <span>Technical Skills</span>
                    <span>Academic Excellence</span>
                    <span>Fast Learner</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes Section */}
          <section className={styles.mistakesSection}>
            <h2 className={styles.sectionTitle}>Common Summary Mistakes to Avoid</h2>
            <div className={styles.mistakesGrid}>
              <div className={styles.mistakeCard}>
                <div className={styles.mistakeHeader}>
                  <div className={styles.mistakeNumber}>01</div>
                  <div className={styles.mistakeTitle}>Too Generic</div>
                </div>
                <div className={styles.mistakeContent}>
                  <p>Avoid vague statements like "hard worker" or "team player." Be specific about what you actually achieved and how you contributed.</p>
                </div>
              </div>
              <div className={styles.mistakeCard}>
                <div className={styles.mistakeHeader}>
                  <div className={styles.mistakeNumber}>02</div>
                  <div className={styles.mistakeTitle}>Too Long</div>
                </div>
                <div className={styles.mistakeContent}>
                  <p>Summaries longer than 5 sentences lose impact. Be concise and focus only on your most relevant and impressive achievements.</p>
                </div>
              </div>
              <div className={styles.mistakeCard}>
                <div className={styles.mistakeHeader}>
                  <div className={styles.mistakeNumber}>03</div>
                  <div className={styles.mistakeTitle}>Missing Keywords</div>
                </div>
                <div className={styles.mistakeContent}>
                  <p>Not including job-specific keywords can cause ATS rejection. Always tailor your summary with keywords from the job description.</p>
                </div>
              </div>
              <div className={styles.mistakeCard}>
                <div className={styles.mistakeHeader}>
                  <div className={styles.mistakeNumber}>04</div>
                  <div className={styles.mistakeTitle}>Focusing on Duties</div>
                </div>
                <div className={styles.mistakeContent}>
                  <p>Don't just list job responsibilities. Focus on achievements, results, and the value you brought to previous employers.</p>
                </div>
              </div>
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
            <h2 className={styles.sectionTitle}>Why a Strong Summary Matters</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>First Impression</h3>
                <p className={styles.benefitDescription}>
                  Your summary is the first thing recruiters read. A strong opening captures attention and encourages them to read the rest of your resume.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>ATS Optimization</h3>
                <p className={styles.benefitDescription}>
                  Well-crafted summaries with relevant keywords perform better in Applicant Tracking Systems, increasing your chances of getting seen by humans.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Career Positioning</h3>
                <p className={styles.benefitDescription}>
                  A targeted summary positions you for the specific role you want, highlighting the exact skills and experiences employers are looking for.
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

export default ResumeSummaryGenerator;