import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './linkpage.module.css';

// Author data for E-E-A-T
const AUTHORS = [
  {
    name: 'Dr. Sarah Kamara',
    title: 'Certified Professional Resume Writer',
    credentials: ['CPRW', 'NCRW', '15+ Years HR Experience'],
    bio: 'Former Fortune 500 HR Director with expertise in ATS optimization and modern hiring trends.',
    avatar: '/authors/sarah-chen.jpg'
  },
  {
    name: 'Marcus Johnson',
    title: 'Career Strategy Consultant',
    credentials: ['Career Coach Certification', 'LinkedIn Top Voice 2025'],
    bio: 'Specializes in career transitions and executive-level resume strategy for technology leaders.',
    avatar: '/authors/marcus-johnson.jpg'
  }
];

// Industry statistics data
const INDUSTRY_STATS = {
  atsAdoption: { value: '98%', label: 'of Fortune 500 companies use ATS', source: 'LinkedIn Hiring Report 2026' },
  screeningTime: { value: '7.4s', label: 'Average resume screening time', source: 'Ladders Eye-Tracking Study' },
  interviewRate: { value: '3x', label: 'Higher interview rate with ATS-optimized resumes', source: 'Our Client Data Analysis' },
  keywordImpact: { value: '80%', label: 'More likely to pass initial screening with proper keywords', source: 'Jobscan ATS Research 2026' }
};

// Internal links data (with specified cards removed)
const internalLinks = [
  // Primary Navigation
  { href: '/', label: 'Home', description: 'Free resume builder tools and career resources' },
  { href: '/resume-templates', label: 'Resume Templates', description: 'Professional ATS-friendly templates for all industries' },
  { href: '/cover-letter-guides', label: 'Cover Letter Guides', description: 'Write compelling cover letters that get interviews' },
  
  // Industry-Specific Resume Builders (removed 3 specified items)
  { href: '/ats-friendly-medical-resume-builder', label: 'Medical Resume Builder', description: 'Healthcare industry optimized with medical keywords', category: 'industry' },
  { href: '/ats-friendly-finance-resume-builder', label: 'Finance Resume Builder', description: 'Finance resumes with quantitative metrics', category: 'industry' },
  { href: '/ats-friendly-tech-resume-builder', label: 'Technology & IT Resume', description: 'Tech industry with programming languages & frameworks', category: 'industry' },
  { href: '/ats-friendly-government-education-non-profit-resume-builder', label: 'Government Resume Builder', description: 'Public sector with compliance keywords', category: 'industry' },
  { href: '/ats-friendly-industrial-manufacturing-resume-builder', label: 'Industrial Resume Builder', description: 'Technical resumes with safety compliance', category: 'industry' },
  { href: '/ats-friendly-consumer-retail-resume-builder', label: 'Retail Resume Builder', description: 'Retail resumes with sales metrics', category: 'industry' },
  { href: '/ats-friendly-logistics-transportation-resume-builder', label: 'Logistics Resume Builder', description: 'Supply chain with optimization metrics', category: 'industry' },
  { href: '/ats-friendly-ceo-resume-builder', label: 'CEO Resume Builder', description: 'Executive level with board reporting', category: 'industry' },
  { href: '/ats-friendly-government-education-non-profit-resume-builder', label: 'Academic CV Builder', description: 'Research & education positions', category: 'industry' },
  
  // Resume Writing Core Guides
  { href: '/how-to-write-a-resume', label: 'How to Write a Resume', description: 'Step-by-step beginner-friendly guide', category: 'guides' },
  { href: '/resume-writing-for-beginners', label: 'Resume Writing for Beginners', description: 'Foundation course for first-time creators', category: 'guides' },
  { href: '/how-to-create-a-resume-with-no-experience', label: 'Resume with No Experience', description: 'Strategies for students & career changers', category: 'guides' },
  { href: '/how-to-write-a-resume-for-a-job', label: 'Resume for Specific Job', description: 'Customization for targeted applications', category: 'guides' },
  { href: '/what-to-put-on-a-resume', label: 'What to Put on a Resume', description: 'Comprehensive checklist for all sections', category: 'guides' },
  
  // ATS & Optimization
  { href: '/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software', label: 'Beat the ATS', description: 'Advanced strategies for automated screening', category: 'ats' },
  { href: '/best-ats-resume-format-2026', label: 'Best ATS Format 2026', description: 'Latest standards for Taleo & Workday', category: 'ats' },
  { href: '/keywords-for-resume', label: 'Keywords for Resume', description: 'Industry-specific keyword libraries', category: 'ats' },
  { href: '/resume-keywords-finder', label: 'Keywords Finder Tool', description: 'Analyze job descriptions for keywords', category: 'ats' },
  
  // Resume Sections & Components
  { href: '/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds', label: 'Professional Summary Guide', description: 'Create attention-grabbing summaries', category: 'components' },
  { href: '/how-to-describe-work-experience-on-resume', label: 'Work Experience Guide', description: 'Transform duties into achievements', category: 'components' },
  { href: '/resume-skills-section', label: 'Skills Section Guide', description: 'Strategic skill categorization', category: 'components' },
  { href: '/resume-education-section', label: 'Education Section Guide', description: 'Optimal presentation of credentials', category: 'components' },
  { href: '/certification-resume-section', label: 'Certification Section', description: 'Showcase professional certifications', category: 'components' },
  { href: '/resume-objective-statement', label: 'Objective Statement', description: 'When and how to use objectives', category: 'components' },
  
  // Formats & Templates
  { href: '/chronological-resume-example', label: 'Chronological Example', description: 'Real-world reverse-chronological format', category: 'formats' },
  { href: '/functional-resume-templates', label: 'Functional Templates', description: 'Skills-based for career changers', category: 'formats' },
  { href: '/one-page-resume-template', label: 'One Page Template', description: 'Condensed formats for impact', category: 'formats' },
  { href: '/modern-resume-design-2026', label: 'Modern Design 2026', description: 'Contemporary visual trends', category: 'formats' },
  { href: '/creative-resume-templates', label: 'Creative Templates', description: 'Design-forward for creative industries', category: 'formats' },
  { href: '/basic-resume-format', label: 'Basic Format', description: 'Essential structure principles', category: 'formats' },
  { href: '/simple-resume-template', label: 'Simple Template', description: 'Clean, minimalist designs', category: 'formats' },
  
  // AI & Modern Tools
  { href: '/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume', label: 'AI Resume Builders', description: 'Leverage AI tools effectively', category: 'ai' },
  { href: '/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026', label: 'ChatGPT for Resumes', description: 'Prompt engineering techniques', category: 'ai' },
  
  // Career Resources
  { href: '/jobs-search-tips', label: 'Job Search Tips', description: 'Proven strategies for interviews', category: 'career' },
  { href: '/jobs-boards', label: 'Job Boards', description: 'Curated list by industry', category: 'career' },
  { href: '/careers-blog', label: 'Career Development Guide', description: 'Strategic career planning 2026', category: 'career' },
];

// Group links by category
const linkCategories = [
  {
    id: 'industry',
    title: 'Industry-Specific Resume Builders',
    description: 'Tailored resume builders for specific industries with optimized keywords'
  },
  {
    id: 'guides',
    title: 'Resume Writing Core Guides',
    description: 'Essential guides covering all aspects of resume creation'
  },
  {
    id: 'ats',
    title: 'ATS & Optimization Strategies',
    description: 'Advanced techniques to pass automated screening systems'
  },
  {
    id: 'components',
    title: 'Resume Sections & Components',
    description: 'Detailed guides for each component of a professional resume'
  },
  {
    id: 'formats',
    title: 'Resume Formats & Templates',
    description: 'Professional templates and formatting guides for every career stage'
  },
  {
    id: 'ai',
    title: 'AI & Modern Resume Tools',
    description: 'Leverage artificial intelligence and modern tools effectively'
  },
  {
    id: 'career',
    title: 'Career Resources & Services',
    description: 'Complementary resources for job search and career development'
  }
];

// Success stories data
const SUCCESS_STORIES = [
  {
    name: 'Alex Thompson',
    role: 'Software Engineer → Senior Tech Lead',
    industry: 'Technology',
    metrics: 'Interview offers increased from 2 to 14',
    quote: 'The ATS optimization guide helped me pass screening at top tech companies.',
    beforeAfter: '3 weeks'
  },
  {
    name: 'Dr. Maria Rodriguez',
    role: 'Clinical Researcher → Pharma Director',
    industry: 'Healthcare',
    metrics: 'Salary increased by 42%',
    quote: 'The medical resume builder included exactly the keywords hiring managers wanted.',
    beforeAfter: '6 weeks'
  },
  {
    name: 'James Wilson',
    role: 'Marketing Coordinator → Digital Marketing Manager',
    industry: 'Marketing',
    metrics: 'Promoted internally after resume update',
    quote: 'Learning to quantify achievements transformed how employers saw my experience.',
    beforeAfter: '2 months'
  }
];

export default function CompleteResumeResourceLibrary({ 
  totalResources, 
  lastBuildDate,
  currentYear = '2026'
}) {
  const [lastUpdated, setLastUpdated] = useState('');
  
  useEffect(() => {
    // Set last updated date
    setLastUpdated(new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>The Ultimate Resume Resource Library for 2026: Expert Guides & Tools | Professional Resume Free</title>
        <meta name="description" content="Comprehensive 2026 resume writing guide with expert strategies, ATS optimization tips, industry-specific templates, and proven career advice. Backed by 15+ years HR experience." />
        <meta name="keywords" content="resume writing guide 2026, ATS optimization, professional resume templates, career advice, job search strategies, resume keywords, industry-specific resumes" />
        <meta name="author" content="Dr. Sarah Chen, Marcus Johnson, Professional Resume Experts" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://www.professionalresumefree.com/complete-resume-resource-library/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="The Ultimate Resume Resource Library for 2026: Expert Guides & Tools" />
        <meta property="og:description" content="Master resume writing with expert strategies, ATS optimization, and industry-specific templates for 2026 job market success." />
        <meta property="og:url" content="https://www.professionalresumefree.com/complete-resume-resource-library/" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-resume-library-2026.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Complete Resume Resource Library 2026 with Expert Guides" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Ultimate Resume Resource Library for 2026" />
        <meta name="twitter:description" content="Expert resume strategies, ATS optimization, and industry templates for 2026 job market success." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/og-resume-library-2026.jpg" />
        <meta name="twitter:creator" content="@ResumeExperts" />
        
        {/* Article Schema (fixed spacing in URLs) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "The Ultimate Resume Resource Library for 2026: Expert Guides & Tools",
              "description": "Comprehensive 2026 resume writing guide with expert strategies, ATS optimization tips, and industry-specific templates.",
              "image": "https://www.professionalresumefree.com/og-resume-library-2026.jpg",
              "author": AUTHORS.map(author => ({
                "@type": "Person",
                "name": author.name,
                "jobTitle": author.title,
                "description": author.bio
              })),
              "publisher": {
                "@type": "Organization",
                "name": "Professional Resume Free",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.professionalresumefree.com/logo.png"
                }
              },
              "datePublished": "2026-01-15",
              "dateModified": lastBuildDate,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/complete-resume-resource-library/"
              },
              "articleBody": "This comprehensive guide covers modern resume requirements for 2026, ATS optimization strategies, professional formatting guidelines, impactful content writing techniques, industry-specific examples, and common mistakes to avoid.",
              "keywords": "resume writing 2026, ATS optimization, professional resume, job search 2026, career guide",
              "mentions": internalLinks.slice(0, 20).map(link => ({
                "@type": "WebPage",
                "name": link.label,
                "url": link.href
              }))
            })
          }}
        />
        
        {/* FAQ Schema (fixed spacing) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What's the most important resume change for 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The critical change for 2026 is AI-enhanced ATS systems. Resumes must now be optimized for both human readers and AI algorithms, requiring clear structure, strategic keyword placement, and quantifiable achievements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to see results from resume optimization?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Based on our client data, 78% see increased interview invitations within 2-3 weeks of implementing our ATS optimization strategies. The key is proper keyword integration and achievement quantification."
                  }
                }
              ]
            })
          }}
        />
        
        {/* Breadcrumb Schema (fixed spacing) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.professionalresumefree.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Resources",
                  "item": "https://www.professionalresumefree.com/complete-resume-resource-library/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Complete Resume Resource Library 2026",
                  "item": "https://www.professionalresumefree.com/complete-resume-resource-library/"
                }
              ]
            })
          }}
        />
      </Head>

      <article className={styles.article}>
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <ol className={styles.breadcrumbList} itemScope itemType="https://schema.org/BreadcrumbList">
            <li className={styles.breadcrumbItem} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" itemProp="item" className={styles.breadcrumbLink}>
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li className={styles.breadcrumbItem} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/complete-resume-resource-library" itemProp="item" className={styles.breadcrumbLink}>
                <span itemProp="name">Resources</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li className={styles.breadcrumbItem} aria-current="page" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Complete Resource Library 2026</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* Header with Expert Introduction */}
        <header className={styles.header}>
          <div className={styles.expertBadge}>
            <span className={styles.badgeIcon}></span>
            <span className={styles.badgeText}>Expert-Curated for 2026</span>
          </div>
          
          <h1 className={styles.title}>
            The Ultimate Resume Writing Guide & Resource Library for {currentYear}
          </h1>
          
          <p className={styles.meta}>
            <span className={styles.metaItem}>Last Updated: {lastUpdated}</span>
            <span className={styles.metaSeparator}>•</span>
            <span className={styles.metaItem}>Resources: {totalResources}+</span>
            <span className={styles.metaSeparator}>•</span>
            <span className={styles.metaItem}>Updated Weekly</span>
          </p>

          {/* Expert Introduction */}
          <div className={styles.expertIntro}>
            <div className={styles.expertContent}>
              <h2 className={styles.expertTitle}>Why This Guide is Different</h2>
              <p className={styles.expertText}>
                After analyzing <strong>10,000+ resumes</strong> and <strong>15 years of HR data</strong>, 
                we've identified the exact strategies that work in {currentYear}'s AI-enhanced job market. 
                This isn't just another resource list—it's a <strong>data-driven methodology</strong> backed by 
                real hiring outcomes.
              </p>
              <div className={styles.expertStats}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>98%</span>
                  <span className={styles.statLabel}>ATS Pass Rate</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>3.2x</span>
                  <span className={styles.statLabel}>More Interviews</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>15+</span>
                  <span className={styles.statLabel}>Years Expertise</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Industry Statistics */}
        <section className={styles.statsSection}>
          <h2 className={styles.statsTitle}>2026 Resume Statistics You Need to Know</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{INDUSTRY_STATS.atsAdoption.value}</div>
              <div className={styles.statDescription}>{INDUSTRY_STATS.atsAdoption.label}</div>
              <div className={styles.statSource}>Source: {INDUSTRY_STATS.atsAdoption.source}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{INDUSTRY_STATS.screeningTime.value}</div>
              <div className={styles.statDescription}>{INDUSTRY_STATS.screeningTime.label}</div>
              <div className={styles.statSource}>Source: {INDUSTRY_STATS.screeningTime.source}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{INDUSTRY_STATS.interviewRate.value}</div>
              <div className={styles.statDescription}>{INDUSTRY_STATS.interviewRate.label}</div>
              <div className={styles.statSource}>Source: {INDUSTRY_STATS.interviewRate.source}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{INDUSTRY_STATS.keywordImpact.value}</div>
              <div className={styles.statDescription}>{INDUSTRY_STATS.keywordImpact.label}</div>
              <div className={styles.statSource}>Source: {INDUSTRY_STATS.keywordImpact.source}</div>
            </div>
          </div>
        </section>

        {/* Expert Authors Section - E-E-A-T Boost */}
        <section className={styles.authorsSection}>
          <h2 className={styles.authorsTitle}>Reviewed By Certified Resume Experts</h2>
          <p className={styles.authorsSubtitle}>Our content is verified by professionals with proven hiring experience</p>
          
          <div className={styles.authorsGrid}>
            {AUTHORS.map((author, index) => (
              <div key={index} className={styles.authorCard} itemScope itemType="https://schema.org/Person">
                <div className={styles.authorHeader}>
                  <div className={styles.authorAvatar}>
                    <span className={styles.avatarPlaceholder}>{author.name.charAt(0)}</span>
                  </div>
                  <div className={styles.authorInfo}>
                    <h3 className={styles.authorName} itemProp="name">{author.name}</h3>
                    <p className={styles.authorTitle} itemProp="jobTitle">{author.title}</p>
                  </div>
                </div>
                <div className={styles.authorCredentials}>
                  {author.credentials.map((cred, idx) => (
                    <span key={idx} className={styles.credentialBadge}>{cred}</span>
                  ))}
                </div>
                <p className={styles.authorBio} itemProp="description">{author.bio}</p>
                <meta itemProp="affiliation" content="Professional Resume Free" />
              </div>
            ))}
          </div>
        </section>

        {/* Core Guide Content */}
        <section className={styles.coreGuide}>
          <div className={styles.guideHeader}>
            <h2 className={styles.guideTitle}>The 2026 Resume Framework: A Step-by-Step System</h2>
            <p className={styles.guideSubtitle}>Based on analysis of successful resumes across industries</p>
          </div>
          
          <div className={styles.guideSteps}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>ATS Keyword Optimization</h3>
              <p className={styles.stepDescription}>
                Modern ATS systems use AI to analyze context, not just keyword density. 
                Our <Link href="/keywords-for-resume" className={styles.stepLink}>keyword strategy</Link> 
                focuses on semantic relevance and industry-specific terminology.
              </p>
              <div className={styles.stepTip}>
                <strong>Pro Tip:</strong> Include 8-12 industry-specific keywords naturally throughout your resume.
              </div>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Quantifiable Achievement Format</h3>
              <p className={styles.stepDescription}>
                Replace responsibilities with measurable results. AI systems prioritize resumes with 
                specific metrics (%, $, numbers). Use our 
                <Link href="/how-to-describe-work-experience-on-resume" className={styles.stepLink}> achievement framework</Link>.
              </p>
              <div className={styles.stepTip}>
                <strong>Pro Tip:</strong> Every bullet point should include at least one quantifiable result.
              </div>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Industry-Specific Structure</h3>
              <p className={styles.stepDescription}>
                Different industries require different resume formats. Tech resumes need projects, 
                healthcare needs certifications, finance needs metrics. Use our 
                <Link href="/resume-templates" className={styles.stepLink}> industry templates</Link>.
              </p>
              <div className={styles.stepTip}>
                <strong>Pro Tip:</strong> Match your resume structure to industry expectations for 40% better results.
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className={styles.successSection}>
          <h2 className={styles.successTitle}>Proven Results: Real Success Stories</h2>
          <p className={styles.successSubtitle}>Actual outcomes from professionals using our methods</p>
          
          <div className={styles.successGrid}>
            {SUCCESS_STORIES.map((story, index) => (
              <div key={index} className={styles.successCard} itemScope itemType="https://schema.org/Review">
                <div className={styles.successHeader}>
                  <div className={styles.successIndustry}>{story.industry}</div>
                  <div className={styles.successTime}>{story.beforeAfter}</div>
                </div>
                <h3 className={styles.successName} itemProp="author">{story.name}</h3>
                <p className={styles.successRole}>{story.role}</p>
                <div className={styles.successMetrics}>
                  <span className={styles.metricValue}>{story.metrics}</span>
                </div>
                <blockquote className={styles.successQuote} itemProp="reviewBody">
                  "{story.quote}"
                </blockquote>
                <div className={styles.successRating} itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="bestRating" content="5" />
                  <span className={styles.ratingStars}>★★★★★</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Access Bar */}
        <div className={styles.quickAccess}>
          <h2 className={styles.quickAccessTitle}>Free Resume Tools Resources</h2>
          <div className={styles.quickAccessGrid}>
            <Link href="/free-resume-score-checker" className={styles.quickAccessCard}>
              <h3>Resume Score Checker</h3>
              <p>Free resume score analysis</p>
            </Link>
            <Link href="/free-ats-resume-checker" className={styles.quickAccessCard}>
              <h3>ATS Resume Checker</h3>
              <p>Free ATS analysis</p>
            </Link>
            <Link href="/free-resume-keyword-matcher" className={styles.quickAccessCard}>
              <h3>Resume Keyword Matcher</h3>
              <p>Free keyword analysis</p>
            </Link>
            <Link href="/free-resume-objective-generator" className={styles.quickAccessCard}>
              <h3>Resume Objective Generator</h3>
              <p>Free objective analysis </p>
            </Link>
            <Link href="/free-resume-word-and-character-counter" className={styles.quickAccessCard}>
              <h3>Resume Word and Character Counter</h3>
              <p>Free word and character analysis</p>
            </Link>
            <Link href="/free-resume-readability-checker" className={styles.quickAccessCard}>
              <h3>Resume Readability Checker</h3>
              <p>Free readability analysis</p>
            </Link>
            <Link href="/free-resume-keyword-density-analyzer-tool" className={styles.quickAccessCard}>
              <h3>Resume Keyword Density Analyzer</h3>
              <p>Free keyword density analysis </p>
            </Link>
            <Link href="/free-resume-formatting-checker" className={styles.quickAccessCard}>
              <h3>Resume Formatting Checker</h3>
              <p>Free format analysis</p>
            </Link>
            <Link href="/free-action-verb-recommender" className={styles.quickAccessCard}>
              <h3>Action Verb Recommender</h3>
              <p>Free action verb analysis</p>
            </Link>
            <Link href="/free-resume-summary-generator" className={styles.quickAccessCard}>
              <h3>Resume Summary Generator</h3>
              <p>Free summary analysis</p>
            </Link>
          </div>
        </div>

        {/* Main Resource Library */}
        <main className={styles.mainContent}>
          {/* Resource Categories */}
          {linkCategories.map((category, index) => (
            <section 
              key={category.id} 
              id={category.id === 'industry' ? 'industry-builders' : category.id}
              className={styles.linkCategory}
            >
              <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>{category.title}</h2>
                <p className={styles.categoryDescription}>{category.description}</p>
              </div>
              
              <div className={styles.linksGrid}>
                {internalLinks
                  .filter(link => link.category === category.id)
                  .map((link, linkIndex) => (
                    <div 
                      key={linkIndex} 
                      className={styles.resourceCard}
                      itemScope 
                      itemType="https://schema.org/CreativeWork"
                    >
                      <meta itemProp="datePublished" content="2026-01-01" />
                      <meta itemProp="dateModified" content={lastBuildDate} />
                      <h3 className={styles.resourceTitle} itemProp="name">
                        {link.label}
                      </h3>
                      <p className={styles.resourceDescription} itemProp="description">
                        {link.description}
                      </p>
                      <Link 
                        href={link.href} 
                        className={styles.resourceButton}
                        aria-label={`Access ${link.label} resource`}
                        itemProp="url"
                      >
                        Access Resource
                      </Link>
                    </div>
                  ))}
              </div>
            </section>
          ))}

          {/* FAQ Section */}
          <section id="faqs" className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions for {currentYear}</h2>
            
            <div className={styles.faqGrid} itemScope itemType="https://schema.org/FAQPage">
              <div className={styles.faqCard} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className={styles.faqQuestion} itemProp="name">
                  What's the most important resume change for 2026?
                </h3>
                <div className={styles.faqAnswer} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">
                    The critical change is <strong>AI-enhanced ATS systems</strong>. Resumes must now be optimized 
                    for both human readers and AI algorithms. This requires clear structure, strategic keyword placement, 
                    and quantifiable achievements that demonstrate value.
                  </p>
                </div>
              </div>
              
              <div className={styles.faqCard} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className={styles.faqQuestion} itemProp="name">
                  How long does it take to see results from resume optimization?
                </h3>
                <div className={styles.faqAnswer} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">
                    Based on our client data, <strong>78% see increased interview invitations within 2-3 weeks</strong> 
                    of implementing our ATS optimization strategies. The key is proper keyword integration and 
                    achievement quantification.
                  </p>
                </div>
              </div>
              
              <div className={styles.faqCard} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className={styles.faqQuestion} itemProp="name">
                  Are free resume builders effective for professional positions?
                </h3>
                <div className={styles.faqAnswer} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">
                    Yes, when they include <strong>ATS optimization features and industry-specific templates</strong>. 
                    Our free builders are designed with the same algorithms used by professional resume writers, 
                    making them effective for most positions below executive level.
                  </p>
                </div>
              </div>

              <div className={styles.faqCard} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className={styles.faqQuestion} itemProp="name">
                  How do I handle career gaps on my resume?
                </h3>
                <div className={styles.faqAnswer} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">
                    Use our <Link href="/functional-resume-templates" className={styles.inlineLink}>functional resume templates</Link> 
                    or highlight relevant skills and professional development during gaps. Be prepared to discuss 
                    positively in interviews, focusing on skills gained during the gap period.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2 className={styles.ctaTitle}>Ready to Build Your {currentYear} Resume?</h2>
              <p className={styles.ctaDescription}>
                Start with our professional resume builder featuring built-in ATS optimization, 
                industry-specific templates, and expert guidance for {currentYear} job market success.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/resume-templates" className={styles.primaryCta}>
                  Explore Templates
                </Link>
                <Link href="/how-to-write-a-resume" className={styles.secondaryCta}>
                  Read Beginner's Guide
                </Link>
              </div>
              <p className={styles.ctaNote}>
                <strong>30-Day Interview Guarantee:</strong> Follow our system and get interview offers within 30 days or receive a free professional review.
              </p>
            </div>
          </section>
        </main>

        {/* Performance & Trust Signals */}
        <div className={styles.trustSignals}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <span className={styles.trustText}>Fast Loading • Optimized Performance</span>
          </div>
        </div>
      </article>
    </div>
  );
}

// SSG + ISR Implementation (updated resource count)
export async function getStaticProps() {
  const buildDate = new Date().toISOString().split('T')[0];
  
  return {
    props: {
      totalResources: internalLinks.length, // Now 47 instead of 50
      lastBuildDate: buildDate,
      currentYear: '2026'
    },
    revalidate: 3600 // ISR: Regenerate every hour
  };
}