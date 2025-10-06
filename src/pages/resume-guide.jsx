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
  FiArrowRight
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
      tip: 'Use tools like Jobscan to compare your resume against job descriptions'
    },
    {
      number: '02',
      category: 'Formatting',
      icon: <FiFileText className={styles.strategyIcon} />,
      title: 'Machine-Readable Structure',
      description: 'Employ ATS-friendly formatting with standard headings, simple layouts, and optimized file types. Avoid creative elements that confuse parsers.',
      tip: 'Stick to .docx or plain-text PDF formats unless specified otherwise'
    },
    {
      number: '03',
      category: 'Content',
      icon: <FiTrendingUp className={styles.strategyIcon} />,
      title: 'Quantified Achievements',
      description: 'Replace generic responsibilities with measurable accomplishments using the CAR (Challenge-Action-Result) method. Show impact with metrics.',
      tip: 'Start bullet points with strong action verbs and include %/$ figures'
    },
    {
      number: '04',
      category: 'Customization',
      icon: <FiTarget className={styles.strategyIcon} />,
      title: 'Position-Specific Tailoring',
      description: 'Create targeted resume versions for different roles. Adjust content hierarchy and emphasis based on each job\'s requirements and priorities.',
      tip: 'Maintain a master resume with all experience, then create tailored versions'
    }
  ];

  const stats = [
    {
      value: '75%',
      label: 'Resumes rejected by ATS',
      icon: <FiX className={styles.statIcon} />
    },
    {
      value: '6-7s',
      label: 'Recruiter scan time',
      icon: <FiClock className={styles.statIcon} />
    },
    {
      value: '5×',
      label: 'More interviews',
      icon: <FiUsers className={styles.statIcon} />
    }
  ];

  const mustInclude = [
    'Standard headings (Experience, Education, Skills)',
    'Contact information at top',
    'Professional email address',
    'Common fonts (Arial, Calibri, Helvetica)',
    'Proper file naming convention',
    'Appropriate file type (.docx or .pdf)'
  ];

  const mustAvoid = [
    'Graphics, charts, or images',
    'Headers/footers',
    'Text boxes or tables',
    'Columns or complex layouts',
    'Uncommon section headings',
    'Creative fonts or colors'
  ];

  const carExamples = [
    {
      challenge: 'Low customer satisfaction scores',
      action: 'Implemented new training program and feedback system',
      result: 'Increased satisfaction from 65% to 92% in 6 months'
    },
    {
      challenge: 'Inefficient project delivery process',
      action: 'Developed and implemented agile workflow methodology',
      result: 'Reduced project completion time by 40%'
    },
    {
      challenge: 'High employee turnover in department',
      action: 'Created mentorship program and career development paths',
      result: 'Decreased turnover by 60% within first year'
    }
  ];

  return (
    <div className={styles.resumeGuide}>
      {/* SEO Meta Tags */}
      <Head>
        <title>How to Beat the ATS & Get More Interviews (2024 Guide)</title>
        <meta name="description" content="Learn how to optimize your resume to pass Applicant Tracking Systems (ATS) and get noticed by recruiters. Step-by-step strategies, checklist, and pro tips included." />
        <meta name="keywords" content="ATS resume, beat applicant tracking system, resume optimization, resume tips, get more interviews, job search 2024, professional resume, CAR method, resume keywords" />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/resume-guide" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="How to Beat the ATS & Get More Interviews (2024 Guide)" />
        <meta property="og:description" content="Pass Applicant Tracking Systems and land more interviews with our proven resume optimization strategies. Includes checklist and real examples." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/resume-ats-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/resume-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Beat the ATS & Get More Interviews (2024 Guide)" />
        <meta name="twitter:description" content="Pass Applicant Tracking Systems and land more interviews with our proven resume optimization strategies. Includes checklist and real examples." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/resume-ats-preview.jpg" />
        <meta name="twitter:site" content="@ProfessionalResumeFree" />

        {/* Structured Data: Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "How to Beat the ATS & Get More Interviews (2024 Guide)",
              "description": "A comprehensive guide to creating ATS-friendly resumes that pass automated filters and impress hiring managers.",
              "image": "https://www.professionalresumefree.com/images/resume-ats-preview.jpg",
              "author": {
                "@type": "Organization",
                "name": "ProfessionalResumeFree"
              },
              "publisher": {
                "@type": "Organization",
                "name": "ProfessionalResumeFree",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.professionalresumefree.com/images/logo.png"
                }
              },
              "datePublished": "2024-02-10",
              "dateModified": "2024-05-08",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/resume-guide"
              },
              "articleSection": "Job Search Tips",
              "wordCount": "980",
              "keywords": "ATS, resume optimization, job search, applicant tracking system"
            })
          }}
        />

        {/* Structured Data: HowTo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Optimize Your Resume for ATS",
              "description": "Step-by-step guide to creating a resume that passes Applicant Tracking Systems and gets you more interviews.",
              "totalTime": "PT45M",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Keyword Strategy",
                  "text": "Incorporate keywords from job descriptions naturally into your resume."
                },
                {
                  "@type": "HowToStep",
                  "name": "Formatting",
                  "text": "Use ATS-friendly formats like .docx or plain-text PDF with standard headings."
                },
                {
                  "@type": "HowToStep",
                  "name": "Quantified Achievements",
                  "text": "Replace responsibilities with measurable results using the CAR method."
                },
                {
                  "@type": "HowToStep",
                  "name": "Tailoring",
                  "text": "Customize each resume for the specific job by adjusting emphasis and content."
                }
              ]
            })
          }}
        />

        {/* Structured Data: BreadcrumbList */}
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
                  "item": "https://www.professionalresumefree.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Resume Guide",
                  "item": "https://www.professionalresumefree.com/resume-guide"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>
              <FiAward className={styles.tagIcon} />
              Career Advancement
            </div>
            <h1 className={styles.heroTitle}>
              Beat the ATS & <span className={styles.gradientText}>Land Interviews</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Professional strategies to optimize your resume for applicant tracking systems and human recruiters
            </p>
            <div className={styles.heroButtons}>
              <Link href="/free-resume-builder" className={styles.primaryButton}>
                Create Your Resume Now
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </Link>
              <a href="#strategies" className={styles.secondaryButton}>
                Learn Strategies
              </a>
            </div>
          </div>
          <div className={styles.heroStats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIconContainer}>
                  {stat.icon}
                </div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strategies */}
      <section id="strategies" className={styles.strategiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>Professional Resume Writing</div>
            <h2 className={styles.sectionTitle}>ATS Optimization Framework</h2>
            <p className={styles.sectionSubtitle}>
              Implement these four pillars to create resumes that pass automated screens and impress hiring managers
            </p>
          </div>

          <div className={styles.strategiesGrid}>
            {strategies.map((strategy, index) => (
              <div key={index} className={styles.strategyCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardPill}>{strategy.category}</div>
                  <div className={styles.cardNumber}>{strategy.number}</div>
                </div>
                <div className={styles.cardIconContainer}>
                  {strategy.icon}
                </div>
                <h3 className={styles.cardTitle}>{strategy.title}</h3>
                <p className={styles.cardDescription}>{strategy.description}</p>
                <div className={styles.cardTip}>
                  <div className={styles.tipBadge}>
                    <FiStar className={styles.tipIcon} />
                    Pro Tip
                  </div>
                  <p className={styles.tipText}>{strategy.tip}</p>
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
            <h2 className={styles.sectionTitle}>The CAR Method in Action</h2>
            <p className={styles.sectionSubtitle}>
              Transform generic responsibilities into compelling achievements that showcase your impact
            </p>
          </div>
          <div className={styles.carExamples}>
            {carExamples.map((example, index) => (
              <div key={index} className={styles.carCard}>
                <div className={styles.carStep}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>C</span>
                    <h4>Challenge</h4>
                  </div>
                  <p className={styles.stepContent}>{example.challenge}</p>
                </div>
                <div className={styles.carStep}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>A</span>
                    <h4>Action</h4>
                  </div>
                  <p className={styles.stepContent}>{example.action}</p>
                </div>
                <div className={styles.carStep}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>R</span>
                    <h4>Result</h4>
                  </div>
                  <p className={styles.stepContent}>{example.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className={styles.checklistSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>ATS Resume Checklist</h2>
            <p className={styles.sectionSubtitle}>
              Ensure your resume meets all technical requirements to pass automated screening
            </p>
          </div>
          <div className={styles.checklistGrid}>
            <div className={styles.checklistColumn}>
              <div className={styles.columnHeader}>
                <div className={styles.checkmarkIcon}>
                  <FiCheck />
                </div>
                <h3>Must Include</h3>
              </div>
              <ul className={styles.checklist}>
                {mustInclude.map((item, index) => (
                  <li key={index} className={styles.checklistItem}>
                    <FiCheck className={styles.itemIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.checklistColumn}>
              <div className={styles.columnHeader}>
                <div className={styles.crossIcon}>
                  <FiX />
                </div>
                <h3>Must Avoid</h3>
              </div>
              <ul className={styles.checklist}>
                {mustAvoid.map((item, index) => (
                  <li key={index} className={styles.checklistItem}>
                    <FiX className={styles.itemIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Create Your ATS-Optimized Resume?</h2>
            <p className={styles.ctaSubtitle}>
              Use our professional resume builder with built-in ATS optimization and expert templates
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/free-resume-builder" className={styles.ctaButton}>
                Build Your Resume Now
                <FiArrowRight className={styles.buttonIcon} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeGuide;