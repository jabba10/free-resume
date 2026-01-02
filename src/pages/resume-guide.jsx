// components/Blog.jsx
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiSearch, 
  FiFileText, 
  FiTrendingUp, 
  FiTarget,
  FiCheck,
  FiX,
  FiAward,
  FiClock,
  FiUsers,
  FiStar,
  FiArrowRight,
  FiDollarSign,
  FiGlobe,
  FiBriefcase,
  FiBarChart2,
  FiCheckCircle,
  FiHelpCircle,
  FiChevronRight,
  FiBookOpen,
  FiTool,
  FiThumbsUp,
  FiAlertTriangle
} from 'react-icons/fi';
import styles from './Blog.module.css';

const ResumeGuide = () => {
  const strategies = [
    {
      number: '01',
      category: 'Keyword Strategy',
      icon: <FiSearch className={styles.strategyIcon} />,
      title: 'Precision Keyword Targeting',
      description: 'Systematically incorporate keywords from job descriptions using natural language processing principles. Balance frequency with readability.',
      tip: 'Use tools like Jobscan to compare your resume against job descriptions',
      stats: 'Resumes with proper keyword matching get 75% more interviews',
      tools: ['Jobscan', 'TextOptimizer', 'Word Frequency Counter']
    },
    {
      number: '02',
      category: 'Formatting',
      icon: <FiFileText className={styles.strategyIcon} />,
      title: 'Machine-Readable Structure',
      description: 'Employ ATS-friendly formatting with standard headings, simple layouts, and optimized file types. Avoid creative elements that confuse parsers.',
      tip: 'Stick to .docx or plain-text PDF formats unless specified otherwise',
      stats: 'Proper formatting increases ATS success rate by 60%',
      tools: ['Microsoft Word', 'Google Docs', 'ATS Resume Checker']
    },
    {
      number: '03',
      category: 'Content',
      icon: <FiTrendingUp className={styles.strategyIcon} />,
      title: 'Quantified Achievements',
      description: 'Replace generic responsibilities with measurable accomplishments using the CAR (Challenge-Action-Result) method. Show impact with metrics.',
      tip: 'Start bullet points with strong action verbs and include %/$ figures',
      stats: 'Resumes with metrics get 40% more recruiter attention',
      tools: ['Resume Metrics Calculator', 'Action Verb List', 'CAR Method Template']
    },
    {
      number: '04',
      category: 'Customization',
      icon: <FiTarget className={styles.strategyIcon} />,
      title: 'Position-Specific Tailoring',
      description: 'Create targeted resume versions for different roles. Adjust content hierarchy and emphasis based on each job\'s requirements and priorities.',
      tip: 'Maintain a master resume with all experience, then create tailored versions',
      stats: 'Customized resumes increase interview rates by 5x',
      tools: ['Resume Tailoring Guide', 'Job Description Analyzer', 'Version Tracker']
    }
  ];

  const stats = [
    {
      value: '75%',
      label: 'Resumes rejected by ATS',
      icon: <FiX className={styles.statIcon} />,
      description: 'before human review'
    },
    {
      value: '6-7s',
      label: 'Recruiter scan time',
      icon: <FiClock className={styles.statIcon} />,
      description: 'for initial screening'
    },
    {
      value: '5×',
      label: 'More interviews',
      icon: <FiUsers className={styles.statIcon} />,
      description: 'with optimized resumes'
    },
    {
      value: '90%',
      label: 'Fortune 500 companies',
      icon: <FiBriefcase className={styles.statIcon} />,
      description: 'use ATS systems'
    }
  ];

  const mustInclude = [
    'Standard headings (Experience, Education, Skills)',
    'Contact information at top',
    'Professional email address',
    'Common fonts (Arial, Calibri, Helvetica)',
    'Proper file naming convention',
    'Appropriate file type (.docx or .pdf)',
    'Industry-standard keywords',
    'Measurable achievements',
    'Reverse chronological order',
    'Optimized for mobile viewing'
  ];

  const mustAvoid = [
    'Graphics, charts, or images',
    'Headers/footers',
    'Text boxes or tables',
    'Columns or complex layouts',
    'Uncommon section headings',
    'Creative fonts or colors',
    'Buzzwords without context',
    'Generic objective statements',
    'Personal pronouns (I, me, my)',
    'Irrelevant personal information'
  ];

  const carExamples = [
    {
      challenge: 'Low customer satisfaction scores affecting retention',
      action: 'Implemented comprehensive training program and real-time feedback system',
      result: 'Increased customer satisfaction from 65% to 92% within 6 months, reducing churn by 30%',
      industry: 'Customer Service',
      metrics: 'Satisfaction +27%, Churn -30%'
    },
    {
      challenge: 'Inefficient project delivery process causing delays',
      action: 'Developed and implemented agile workflow methodology with cross-functional teams',
      result: 'Reduced average project completion time by 40% while improving quality metrics by 25%',
      industry: 'Project Management',
      metrics: 'Time -40%, Quality +25%'
    },
    {
      challenge: 'High employee turnover impacting team productivity',
      action: 'Created structured mentorship program and clear career development paths',
      result: 'Decreased department turnover by 60% within first year, saving $150K in recruitment',
      industry: 'Human Resources',
      metrics: 'Turnover -60%, Savings $150K'
    }
  ];

  const faqItems = [
    {
      question: 'How do I know if my resume is ATS-friendly?',
      answer: 'Use free ATS checker tools, ensure proper keyword density (2-3%), check for proper formatting, and test with different file formats. Most importantly, make sure your resume is easily readable both by machines and humans.'
    },
    {
      question: 'Should I include a summary or objective?',
      answer: 'A professional summary is recommended as it helps ATS identify your key skills and career focus. Avoid generic objective statements and focus on quantifiable achievements and relevant keywords.'
    },
    {
      question: 'How many keywords should I include?',
      answer: 'Aim for keyword density of 2-3% of total content. Include 10-15 industry-specific keywords and 5-8 role-specific keywords. Balance is key - too many keywords can trigger spam filters.'
    },
    {
      question: 'What is the best file format for ATS?',
      answer: '.docx (Microsoft Word) is the most ATS-friendly format. Plain-text PDFs work but avoid scanned PDFs or image-based files. Always test your resume in multiple ATS systems if possible.'
    },
    {
      question: 'How often should I update my resume?',
      answer: 'Update quarterly with new achievements and skills. Major updates should occur before job searches, after promotions, or when acquiring significant new skills or certifications.'
    }
  ];

  const industryTips = [
    {
      industry: 'Technology',
      tips: ['Focus on specific technologies and frameworks', 'Include GitHub contributions and open-source work', 'Highlight project metrics and deployment success rates'],
      keywords: ['Agile', 'DevOps', 'CI/CD', 'Cloud', 'API', 'Full Stack']
    },
    {
      industry: 'Marketing',
      tips: ['Show campaign ROI and conversion rates', 'Include specific platforms and tools expertise', 'Demonstrate audience growth and engagement metrics'],
      keywords: ['ROI', 'Conversion', 'SEO', 'Analytics', 'Campaign', 'Engagement']
    },
    {
      industry: 'Healthcare',
      tips: ['Include specific certifications and licenses', 'Highlight patient outcomes and quality metrics', 'Showcase EHR/EMR system proficiency'],
      keywords: ['HIPAA', 'EHR', 'Patient Care', 'Clinical', 'Compliance', 'Protocols']
    },
    {
      industry: 'Finance',
      tips: ['Quantify cost savings and revenue increases', 'Include specific software and analysis tools', 'Highlight regulatory compliance experience'],
      keywords: ['ROI', 'Risk Management', 'Compliance', 'Analysis', 'Forecasting', 'Reporting']
    }
  ];

  const toolsResources = [
    {
      name: 'Jobscan',
      type: 'ATS Checker',
      cost: 'Freemium',
      description: 'Compares your resume against job descriptions for keyword matching'
    },
    {
      name: 'Grammarly',
      type: 'Writing Assistant',
      cost: 'Free',
      description: 'Improves grammar, spelling, and overall readability'
    },
    {
      name: 'Resume Worded',
      type: 'Optimization Tool',
      cost: 'Freemium',
      description: 'Provides AI-powered feedback on resume content and structure'
    },
    {
      name: 'LinkedIn Resume Assistant',
      type: 'Integration Tool',
      cost: 'Free with Premium',
      description: 'Uses LinkedIn data to suggest improvements and keywords'
    }
  ];

  return (
    <div className={styles.resumeGuide}>
      {/* SEO Meta Tags */}
      <Head>
        <title>How to Beat the ATS & Get More Interviews (2026 Guide) | Professional Resume Optimization</title>
        <meta name="description" content="Master ATS resume optimization with our comprehensive 2024 guide. Learn keyword strategies, formatting rules, CAR method examples, and get more interviews. Includes free checklist and tools." />
        <meta name="keywords" content="ATS resume, beat applicant tracking system, resume optimization 2024, resume keywords, CAR method, ATS checklist, resume tips, job search, career advancement, professional resume" />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/resume-guide/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How to Beat the ATS & Get More Interviews (2024 Guide)" />
        <meta property="og:description" content="Comprehensive guide to ATS resume optimization with proven strategies, real examples, and free tools to land more interviews in 2024." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/resume-ats-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/resume-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Beat the ATS & Get More Interviews (2024 Guide)" />
        <meta name="twitter:description" content="Master ATS optimization with our step-by-step guide. Get the interview callbacks you deserve." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/resume-ats-preview.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Optimize Your Resume for ATS Systems",
          "description": "Complete guide to creating ATS-friendly resumes with keyword optimization, proper formatting, and achievement quantification.",
          "totalTime": "PT60M",
          "supply": ["Computer", "Job descriptions", "Current resume"],
          "tool": ["ATS checker", "Grammar tool", "Keyword analyzer"],
          "step": strategies.map((strategy, i) => ({
            "@type": "HowToStep",
            "position": i + 1,
            "name": strategy.title,
            "text": `${strategy.description} ${strategy.tip}`,
            "url": `https://www.professionalresumefree.com/resume-guide#step-${i + 1}`
          })),
          "image": "https://www.professionalresumefree.com/images/resume-ats-preview.jpg",
          "author": {
            "@type": "Organization",
            "name": "ProfessionalResumeFree",
            "url": "https://www.professionalresumefree.com"
          }
        })}} />
      </Head>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>
              <FiAward className={styles.tagIcon} />
              <span>2026 Career Guide</span>
            </div>
            <h1 className={styles.heroTitle}>
              Beat the ATS & <span className={styles.gradientText}>Get 5× More Interviews</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Master applicant tracking systems with our comprehensive guide. Learn proven strategies, avoid common mistakes, and optimize your resume for both machines and humans.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/resume-templates" className={styles.primaryButton}>
                <span>Create ATS-Optimized Resume</span>
                <FiArrowRight className={styles.buttonIcon} />
              </Link>
              <a href="#strategies" className={styles.secondaryButton}>
                <span>View Strategies</span>
              </a>
            </div>
          </div>
          
          <div className={styles.heroStats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIconContainer}>
                  {stat.icon}
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                  <div className={styles.statDescription}>{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strategies */}
      <section id="strategies" className={styles.strategiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>
              <FiTool className={styles.sectionTagIcon} />
              <span>Proven Framework</span>
            </div>
            <h2 className={styles.sectionTitle}>ATS Optimization Master Strategy</h2>
            <p className={styles.sectionSubtitle}>
              Implement these four evidence-based pillars to create resumes that pass automated screens and impress hiring managers
            </p>
          </div>

          <div className={styles.strategiesGrid}>
            {strategies.map((strategy, index) => (
              <div key={index} className={styles.strategyCard} id={`step-${index + 1}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardPill}>
                    <span>{strategy.category}</span>
                  </div>
                  <div className={styles.cardNumber}>{strategy.number}</div>
                </div>
                <div className={styles.cardIconContainer}>
                  {strategy.icon}
                </div>
                <h3 className={styles.cardTitle}>{strategy.title}</h3>
                <p className={styles.cardDescription}>{strategy.description}</p>
                
                <div className={styles.cardStats}>
                  <FiBarChart2 className={styles.cardStatsIcon} />
                  <span>{strategy.stats}</span>
                </div>
                
                <div className={styles.cardTip}>
                  <div className={styles.tipHeader}>
                    <FiStar className={styles.tipIcon} />
                    <span>Pro Tip</span>
                  </div>
                  <p className={styles.tipText}>{strategy.tip}</p>
                </div>
                
                <div className={styles.cardTools}>
                  <div className={styles.toolsLabel}>Recommended Tools:</div>
                  <div className={styles.toolsList}>
                    {strategy.tools.map((tool, i) => (
                      <span key={i} className={styles.toolTag}>{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAR Method Section */}
      <section className={styles.carSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The CAR Method: Transform Responsibilities into Achievements</h2>
            <p className={styles.sectionSubtitle}>
              Real-world examples showing how to quantify your impact and demonstrate value to employers
            </p>
          </div>
          
          <div className={styles.carExamples}>
            {carExamples.map((example, index) => (
              <div key={index} className={styles.carCard}>
                <div className={styles.industryTag}>
                  <FiBriefcase className={styles.industryIcon} />
                  <span>{example.industry}</span>
                </div>
                
                <div className={styles.carStep}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>C</span>
                    <div>
                      <h4>Challenge</h4>
                      <p className={styles.stepDescription}>The problem you faced</p>
                    </div>
                  </div>
                  <p className={styles.stepContent}>{example.challenge}</p>
                </div>
                
                <div className={styles.carStep}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>A</span>
                    <div>
                      <h4>Action</h4>
                      <p className={styles.stepDescription}>What you did</p>
                    </div>
                  </div>
                  <p className={styles.stepContent}>{example.action}</p>
                </div>
                
                <div className={styles.carStep}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>R</span>
                    <div>
                      <h4>Result</h4>
                      <p className={styles.stepDescription}>Measurable outcomes</p>
                    </div>
                  </div>
                  <p className={styles.stepContent}>{example.result}</p>
                  <div className={styles.metricsTag}>
                    <FiTrendingUp className={styles.metricsIcon} />
                    <span>{example.metrics}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.carExplanation}>
            <div className={styles.explanationCard}>
              <FiHelpCircle className={styles.explanationIcon} />
              <h3>Why CAR Works</h3>
              <p>The CAR method transforms vague responsibilities into compelling stories of impact. It provides concrete evidence of your abilities and shows hiring managers exactly how you can contribute to their organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className={styles.checklistSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Complete ATS Resume Checklist</h2>
            <p className={styles.sectionSubtitle}>
              Ensure your resume meets all technical requirements to pass automated screening systems
            </p>
          </div>
          
          <div className={styles.checklistGrid}>
            <div className={styles.checklistColumn}>
              <div className={styles.columnHeader}>
                <div className={styles.checkmarkIcon}>
                  <FiCheckCircle />
                </div>
                <div>
                  <h3>Must Include</h3>
                  <p className={styles.columnSubtitle}>Essential elements for ATS success</p>
                </div>
              </div>
              <ul className={styles.checklist}>
                {mustInclude.map((item, index) => (
                  <li key={index} className={styles.checklistItem}>
                    <FiCheck className={styles.itemIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.checklistColumn}>
              <div className={styles.columnHeader}>
                <div className={styles.crossIcon}>
                  <FiAlertTriangle />
                </div>
                <div>
                  <h3>Must Avoid</h3>
                  <p className={styles.columnSubtitle}>Common ATS-breaking mistakes</p>
                </div>
              </div>
              <ul className={styles.checklist}>
                {mustAvoid.map((item, index) => (
                  <li key={index} className={styles.checklistItem}>
                    <FiX className={styles.itemIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className={styles.checklistNote}>
            <FiThumbsUp className={styles.noteIcon} />
            <p><strong>Pro Tip:</strong> Run your resume through at least two different ATS checkers before submitting applications. Different systems may parse content differently.</p>
          </div>
        </div>
      </section>

      {/* Industry Specific Tips */}
      <section className={styles.industrySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Industry-Specific Optimization</h2>
            <p className={styles.sectionSubtitle}>
              Tailor your approach based on your target industry and role
            </p>
          </div>
          
          <div className={styles.industryGrid}>
            {industryTips.map((industry, index) => (
              <div key={index} className={styles.industryCard}>
                <h3 className={styles.industryTitle}>{industry.industry}</h3>
                <div className={styles.industryContent}>
                  <div className={styles.tipsSection}>
                    <h4>Key Tips:</h4>
                    <ul>
                      {industry.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.keywordsSection}>
                    <h4>Essential Keywords:</h4>
                    <div className={styles.keywordsList}>
                      {industry.keywords.map((keyword, i) => (
                        <span key={i} className={styles.keywordTag}>{keyword}</span>
                      ))}
                    </div>
                  </div>
                </div>
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
              Get answers to common ATS and resume optimization questions
            </p>
          </div>
          
          <div className={styles.faqGrid}>
            {faqItems.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  <FiHelpCircle className={styles.faqIcon} />
                  <h3>{faq.question}</h3>
                </div>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Resources */}
      <section className={styles.toolsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Essential Tools & Resources</h2>
            <p className={styles.sectionSubtitle}>
              Free and paid tools to help optimize your resume effectively
            </p>
          </div>
          
          <div className={styles.toolsGrid}>
            {toolsResources.map((tool, index) => (
              <div key={index} className={styles.toolCard}>
                <div className={styles.toolHeader}>
                  <h3>{tool.name}</h3>
                  <span className={`${styles.toolType} ${tool.cost === 'Free' ? styles.toolFree : styles.toolPaid}`}>
                    {tool.type}
                  </span>
                </div>
                <div className={styles.toolCost}>
                  <FiDollarSign className={styles.costIcon} />
                  <span>{tool.cost}</span>
                </div>
                <p className={styles.toolDescription}>{tool.description}</p>
                <a href="#" className={styles.toolLink}>
                  <span>Learn More</span>
                  <FiChevronRight className={styles.linkIcon} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Create Your ATS-Optimized Resume?</h2>
              <p className={styles.ctaSubtitle}>
                Use our professional resume builder with built-in ATS optimization, real-time keyword analysis, and expert-approved templates.
              </p>
              
              <div className={styles.ctaFeatures}>
                <div className={styles.feature}>
                  <FiCheckCircle className={styles.featureIcon} />
                  <span>Real-time ATS scoring</span>
                </div>
                <div className={styles.feature}>
                  <FiCheckCircle className={styles.featureIcon} />
                  <span>Keyword optimization</span>
                </div>
                <div className={styles.feature}>
                  <FiCheckCircle className={styles.featureIcon} />
                  <span>Industry-specific templates</span>
                </div>
                <div className={styles.feature}>
                  <FiCheckCircle className={styles.featureIcon} />
                  <span>Export to multiple formats</span>
                </div>
              </div>
              
              <div className={styles.ctaButtons}>
                <Link href="/resume-templates" className={styles.ctaButtonPrimary}>
                  <span>Start Building Free Resume</span>
                  <FiArrowRight className={styles.buttonIcon} />
                </Link>
                <a href="#strategies" className={styles.ctaButtonSecondary}>
                  <span>View More Strategies</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeGuide;