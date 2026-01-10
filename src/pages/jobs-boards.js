'use client';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiGlobe,
  FiBriefcase,
  FiMapPin,
  FiAward,
  FiTrendingUp,
  FiArrowRight,
  FiExternalLink,
  FiSearch,
  FiHome,
  FiUsers,
  FiTarget
} from 'react-icons/fi';
import styles from './JobsBoardsBlog.module.css';

const JobBoardsBlog = ({ currentDate, lastModifiedDate }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const jobCategories = [
    {
      title: "Remote Job Boards",
      description: "Platforms specializing in fully remote positions across various industries and time zones.",
      icon: <FiGlobe className={styles.categoryIcon} />,
      jobs: [
        {
          name: "We Work Remotely",
          url: "https://weworkremotely.com/",
          description: "The largest remote work community in the world with jobs in development, marketing, customer support and more.",
          icon: "🌍"
        },
        {
          name: "Remote OK",
          url: "https://remoteok.io/",
          description: "Aggregates remote jobs from across the web with filters for different job types and categories.",
          icon: "✅"
        },
        {
          name: "FlexJobs",
          url: "https://www.flexjobs.com/",
          description: "Curated remote and flexible jobs with a focus on scam-free opportunities (subscription required).",
          icon: "💼"
        },
        {
          name: "Remotive",
          url: "https://remotive.io/",
          description: "Remote jobs in tech, sales, marketing and customer support with a helpful remote work blog.",
          icon: "🚀"
        }
      ]
    },
    {
      title: "Hybrid Job Boards",
      description: "Find balanced opportunities that combine office and remote work arrangements.",
      icon: <FiBriefcase className={styles.categoryIcon} />,
      jobs: [
        {
          name: "LinkedIn Jobs",
          url: "https://www.linkedin.com/jobs/",
          description: "Use the 'Remote' and 'Hybrid' filters to find flexible work arrangements.",
          icon: "🔗"
        },
        {
          name: "Indeed Hybrid Jobs",
          url: "https://www.indeed.com/jobs?q=hybrid",
          description: "Search for 'hybrid' roles on the world's largest job board.",
          icon: "🔍"
        },
        {
          name: "Built In",
          url: "https://builtin.com/jobs",
          description: "Tech jobs with hybrid options, focused on startup ecosystems in major US cities.",
          icon: "🏙️"
        }
      ]
    },
    {
      title: "International Job Boards",
      description: "Global platforms offering opportunities with relocation support and international placements.",
      icon: <FiMapPin className={styles.categoryIcon} />,
      jobs: [
        {
          name: "Monster",
          url: "https://www.monster.com/",
          description: "Tech jobs across USA, Europe and U.K with many companies offering relocation packages.",
          icon: "💼"
        },
        {
          name: "Relocate.me",
          url: "https://relocate.me/",
          description: "Tech jobs worldwide with relocation assistance and visa sponsorship.",
          icon: "✈️"
        },
        {
          name: "Jobbatical",
          url: "https://jobbatical.com/",
          description: "Helps professionals find international opportunities with relocation support.",
          icon: "🌐"
        }
      ]
    },
    {
      title: "Visa Sponsorship Job Boards",
      description: "Specialized platforms connecting candidates with companies offering visa support.",
      icon: <FiAward className={styles.categoryIcon} />,
      jobs: [
        {
          name: "USPONSORME",
          url: "https://www.usponsorme.com/",
          description: "US jobs offering H1B visa sponsorship with transparent salary data.",
          icon: "🇺🇸"
        },
        {
          name: "The Intern Group",
          url: "https://www.theinterngroup.com/",
          description: "International internships with visa support for students and graduates.",
          icon: "🎓"
        },
        {
          name: "Landing.jobs",
          url: "https://landing.jobs/",
          description: "European tech jobs with visa sponsorship for non-EU candidates.",
          icon: "💻"
        }
      ]
    },
    {
      title: "Specialized Tech Job Boards",
      description: "Platforms focused specifically on technology roles and developer positions.",
      icon: <FiTrendingUp className={styles.categoryIcon} />,
      jobs: [
        {
          name: "Dice",
          url: "https://www.dice.com/",
          description: "Developer jobs worldwide with many offering remote options or visa support.",
          icon: "👨‍💻"
        },
        {
          name: "AngelList Talent",
          url: "https://angel.co/jobs",
          description: "Startup jobs with remote and international opportunities.",
          icon: "👼"
        },
        {
          name: "OfferZen",
          url: "https://www.offerzen.com/",
          description: "Tech jobs for developers.",
          icon: "🐙"
        }
      ]
    }
  ];

  const stats = [
    {
      value: "85%",
      label: "Companies now offer remote/hybrid options",
      icon: <FiGlobe className={styles.statIcon} />
    },
    {
      value: "60%",
      label: "Higher response rate on specialized boards",
      icon: <FiTrendingUp className={styles.statIcon} />
    },
    {
      value: "3x",
      label: "More international opportunities available",
      icon: <FiMapPin className={styles.statIcon} />
    }
  ];

  const proTips = [
    "Tailor your resume/CV to the country's standards",
    "Highlight language skills and cross-cultural experience",
    "Research visa requirements early in the process",
    "Consider time zone differences for remote roles",
    "Optimize your LinkedIn and professional profiles",
    "Network within your target industries and regions"
  ];

  return (
    <div className={styles.jobBoardsBlog}>
      {/* Enhanced SEO Meta Tags with Competitive Keywords */}
      <Head>
        {/* Primary Meta Tags - Optimized for Job Board Keywords */}
        <title>Best Job Boards 2026: Remote, Hybrid & International Jobs with Visa Sponsorship</title>
        <meta name="title" content="Best Job Boards 2026: Remote, Hybrid & International Jobs with Visa Sponsorship" />
        <meta name="description" content="Discover 50+ best job search sites for remote work, hybrid jobs & international positions with visa sponsorship. Expert reviews of We Work Remotely, Remote OK, FlexJobs, LinkedIn Jobs, and global career platforms." />
        
        {/* Comprehensive Keyword Strategy */}
        <meta name="keywords" content="
          best job boards,
          remote job boards,
          hybrid job boards,
          international job boards,
          visa sponsorship jobs,
          work from home jobs,
          remote work opportunities,
          global job search,
          tech job boards,
          indeed jobs,
          linkedin jobs,
          we work remotely,
          remote ok,
          flexjobs,
          job search sites 2026,
          career websites,
          employment boards,
          online job portals,
          remote career opportunities,
          international employment,
          relocation jobs,
          h1b visa jobs,
          remote work from home,
          digital nomad jobs,
          virtual job fair,
          remote companies hiring,
          work from anywhere jobs,
          overseas jobs,
          foreign employment,
          global career opportunities
        " />
        
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Date and freshness meta tags */}
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/blog/best-job-boards/" />

        {/* Open Graph / Social Media - Enhanced */}
        <meta property="og:title" content="Best Job Boards 2026: Remote, Hybrid & International Jobs with Visa Sponsorship" />
        <meta property="og:description" content="Expert guide to 50+ top job boards for remote work, hybrid positions & international careers with visa sponsorship. Find your dream job worldwide." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/job-boards-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/blog/best-job-boards" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="article:published_time" content={lastModifiedDate} />
        <meta property="article:modified_time" content={lastModifiedDate} />
        <meta property="article:author" content="ProfessionalResumeFree" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="job boards, remote work, career advice, job search" />

        {/* Twitter Card - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Job Boards 2026: Remote, Hybrid & International Jobs" />
        <meta name="twitter:description" content="Expert guide to 50+ top job boards for remote work, hybrid positions & international careers with visa sponsorship." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/job-boards-preview.jpg" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content="12 minutes" />
        <meta name="twitter:label2" content="Job boards featured" />
        <meta name="twitter:data2" content="50+" />

        {/* Enhanced Structured Data - Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Best Job Boards 2026: Remote, Hybrid & International Jobs with Visa Sponsorship",
              "description": "A comprehensive guide to the best job boards for remote, hybrid, and international roles with visa and relocation support. Expert reviews of 50+ career platforms.",
              "image": "https://www.professionalresumefree.com/images/job-boards-preview.jpg",
              "author": {
                "@type": "Organization",
                "name": "ProfessionalResumeFree",
                "url": "https://www.professionalresumefree.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "ProfessionalResumeFree",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.professionalresumefree.com/images/logo.png"
                }
              },
              "datePublished": lastModifiedDate,
              "dateModified": lastModifiedDate,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/blog/best-job-boards"
              },
              "articleSection": "Career Resources",
              "keywords": "job boards, remote jobs, hybrid work, international jobs, visa sponsorship, career websites, employment platforms",
              "speakable": {
                "@type": "SpeakableSpecification",
                "xpath": [
                  "/html/head/title",
                  "/html/head/meta[@name='description']/@content"
                ]
              }
            })
          }}
        />

        {/* Additional FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are the best job boards for remote work in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best remote job boards in 2026 include We Work Remotely, Remote OK, FlexJobs, Remotive, and LinkedIn Jobs with remote filters. These platforms specialize in fully remote positions across various industries and time zones.",
                    "dateCreated": lastModifiedDate,
                    "dateModified": lastModifiedDate
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which job sites offer international positions with visa sponsorship?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Top job boards for international positions with visa sponsorship include Relocate.me, USPONSORME, Landing.jobs, and Jobbatical. These platforms connect candidates with companies offering relocation assistance and visa support.",
                    "dateCreated": lastModifiedDate,
                    "dateModified": lastModifiedDate
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there free job boards for hybrid work arrangements?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, free job boards like LinkedIn Jobs, Indeed, and Built In offer hybrid work opportunities. Use their filter options to find roles that combine office and remote work arrangements.",
                    "dateCreated": lastModifiedDate,
                    "dateModified": lastModifiedDate
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I optimize my resume for international job applications?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Optimize your resume for international applications by tailoring it to the country's standards, highlighting language skills, emphasizing cross-cultural experience, and using ATS-friendly formats that work globally.",
                    "dateCreated": lastModifiedDate,
                    "dateModified": lastModifiedDate
                  }
                }
              ]
            })
          }}
        />

        {/* Breadcrumb Structured Data */}
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
                  "name": "Career Blog",
                  "item": "https://www.professionalresumefree.com/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Best Job Boards 2026",
                  "item": "https://www.professionalresumefree.com/blog/best-job-boards"
                }
              ]
            })
          }}
        />
        
        {/* ItemList Structured Data for job boards */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Best Job Boards for 2026",
              "description": "Comprehensive list of top job boards for remote, hybrid, and international positions",
              "datePublished": lastModifiedDate,
              "dateModified": lastModifiedDate,
              "numberOfItems": jobCategories.reduce((total, category) => total + category.jobs.length, 0),
              "itemListElement": jobCategories.flatMap((category, categoryIndex) => 
                category.jobs.map((job, jobIndex) => ({
                  "@type": "ListItem",
                  "position": categoryIndex * 100 + jobIndex + 1,
                  "item": {
                    "@type": "WebSite",
                    "name": job.name,
                    "url": job.url,
                    "description": job.description,
                    "audience": {
                      "@type": "Audience",
                      "audienceType": category.title.replace(" Job Boards", "")
                    }
                  }
                }))
              )
            })
          }}
        />
      </Head>

      {/* Enhanced Hero Section with SEO-rich Content */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>
              <FiAward className={styles.tagIcon} />
              Ultimate Job Search Guide 2026
            </div>
            <h1 className={styles.heroTitle}>
              Best Job Boards for <span className={styles.gradientText}>Remote, Hybrid & International Careers</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Discover <strong>50+ expert-reviewed job search sites</strong> for remote work, hybrid positions, and global opportunities with visa sponsorship. Find your dream job on platforms like We Work Remotely, LinkedIn Jobs, Remote OK, and specialized career websites.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/resume-templates" className={styles.primaryButton}>
                Build ATS-Optimized Resume
                <div className={styles.buttonPulse}></div>
              </Link>
              <a href="#categories" className={styles.secondaryButton}>
                Explore 50+ Job Boards
              </a>
            </div>
            <div className={styles.heroFeatures}>
              <span className={styles.featureBadge}>✓ Remote Job Boards</span>
              <span className={styles.featureBadge}>✓ Visa Sponsorship Sites</span>
              <span className={styles.featureBadge}>✓ International Career Platforms</span>
              <span className={styles.featureBadge}>✓ Hybrid Work Opportunities</span>
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

      {/* Enhanced Introduction Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <p className={styles.leadText}>
              In today's <strong>globalized job market 2026</strong>, geographical boundaries no longer limit career opportunities. 
              Whether you're seeking <strong>remote work from home</strong>, <strong>hybrid work arrangements</strong>, or <strong>international positions with visa sponsorship</strong>, 
              specialized job boards can connect you with employers worldwide. Our comprehensive guide covers the <strong>best job search sites</strong> 
              for every career path and lifestyle preference.
            </p>
            <div className={styles.introHighlights}>
              <div className={styles.highlightItem}>
                <FiSearch className={styles.highlightIcon} />
                <span>50+ Job Boards Reviewed</span>
              </div>
              <div className={styles.highlightItem}>
                <FiHome className={styles.highlightIcon} />
                <span>Remote & Hybrid Focus</span>
              </div>
              <div className={styles.highlightItem}>
                <FiUsers className={styles.highlightIcon} />
                <span>Global Opportunities</span>
              </div>
              <div className={styles.highlightItem}>
                <FiTarget className={styles.highlightIcon} />
                <span>Visa Sponsorship Listings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pro Tips Section */}
      <section className={styles.tipsSection}>
        <div className={styles.container}>
          <div className={styles.tipsCard}>
            <h3 className={styles.tipsTitle}>
              <FiTrendingUp className={styles.tipsIcon} />
              Pro Job Search Tips for 2026: Remote & International Applications
            </h3>
            <div className={styles.tipsGrid}>
              {proTips.map((tip, index) => (
                <div key={index} className={styles.tipItem}>
                  <div className={styles.tipBullet}>{index + 1}</div>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
            <div className={styles.tipsNote}>
              <strong>Expert Insight:</strong> Optimize your online presence and tailor applications for each job board to maximize response rates.
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Job Categories Section */}
      <section id="categories" className={styles.categoriesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Comprehensive Job Board Categories: Find Your Perfect Platform</h2>
            <p className={styles.sectionSubtitle}>
              Explore <strong>specialized career platforms</strong> for different types of opportunities, from remote work to international placements with visa support
            </p>
          </div>

          {/* Enhanced Category Navigation */}
          <div className={styles.categoryNavigation}>
            {jobCategories.map((category, index) => (
              <button
                key={index}
                className={`${styles.categoryTab} ${index === activeCategory ? styles.active : ''}`}
                onClick={() => setActiveCategory(index)}
              >
                <div className={styles.tabIcon}>
                  {category.icon}
                </div>
                <span>{category.title}</span>
                <div className={styles.jobCount}>{category.jobs.length}+ Sites</div>
              </button>
            ))}
          </div>

          {/* Enhanced Active Category Content */}
          <div className={styles.activeCategory}>
            <div className={styles.categoryHeader}>
              <h3 className={styles.activeCategoryTitle}>
                {jobCategories[activeCategory].title}
              </h3>
              <p className={styles.activeCategoryDescription}>
                {jobCategories[activeCategory].description}
              </p>
            </div>

            <div className={styles.jobCardsGrid}>
              {jobCategories[activeCategory].jobs.map((job, index) => (
                <div key={index} className={styles.jobCard}>
                  <div className={styles.jobCardHeader}>
                    <div className={styles.jobIcon}>{job.icon}</div>
                    <h4 className={styles.jobName}>{job.name}</h4>
                  </div>
                  <p className={styles.jobDescription}>{job.description}</p>
                  <div className={styles.jobCardFooter}>
                    <a 
                      href={job.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.visitButton}
                    >
                      Visit Job Board
                      <FiExternalLink className={styles.buttonIcon} />
                    </a>
                    <span className={styles.jobType}>
                      {activeCategory === 0 && 'Remote Focus'}
                      {activeCategory === 1 && 'Hybrid Work'}
                      {activeCategory === 2 && 'International'}
                      {activeCategory === 3 && 'Visa Support'}
                      {activeCategory === 4 && 'Tech Specialized'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Conclusion Section */}
      <section className={styles.conclusionSection}>
        <div className={styles.container}>
          <div className={styles.conclusionCard}>
            <h2 className={styles.conclusionTitle}>2026 Job Search Strategy: Key Takeaways</h2>
            <p className={styles.conclusionText}>
              The <strong>job market in 2026</strong> offers unprecedented flexibility and global opportunities. By leveraging these specialized platforms, 
              you can access positions that match your preferred work style—whether that's <strong>fully remote work from home</strong>, 
              <strong>hybrid work arrangements</strong>, or an <strong>international relocation with visa sponsorship</strong>.
            </p>
            <p className={styles.conclusionText}>
              Remember to <strong>optimize your professional profiles</strong> (LinkedIn, GitHub, portfolio sites) and actively network within your 
              target industries to maximize your chances of finding the perfect role. Combine multiple job boards for comprehensive coverage 
              and set up job alerts to stay ahead of new opportunities.
            </p>
            <div className={styles.conclusionTips}>
              <h4>Quick Job Search Success Tips:</h4>
              <ul>
                <li>Use multiple job boards for wider coverage</li>
                <li>Set up daily job alerts for new postings</li>
                <li>Tailor your resume for each application</li>
                <li>Research companies before applying</li>
                <li>Leverage LinkedIn for networking and opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Apply to Your Dream Job?</h2>
            <p className={styles.ctaSubtitle}>
              Create a professional, <strong>ATS-optimized resume</strong> that stands out to employers on all major job boards. 
              Our free resume builder helps you craft the perfect application for remote, hybrid, and international positions.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/resume-templates" className={styles.ctaButton}>
                Build Your Free Resume Now
                <FiArrowRight className={styles.buttonIcon} />
              </Link>
            </div>
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <FiAward className={styles.featureIcon} />
                <span>ATS-Friendly Templates</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiGlobe className={styles.featureIcon} />
                <span>Global Resume Formats</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiTrendingUp className={styles.featureIcon} />
                <span>Interview-Winning Designs</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// SSG Implementation
export async function getStaticProps() {
  // Generate dates at build time
  const now = new Date();
  
  // Format for YYYY-MM-DD
  const currentDate = now.toISOString().split('T')[0];
  
  // Full ISO 8601 string for last modified
  const lastModifiedDate = now.toISOString();
  
  return {
    props: {
      currentDate,
      lastModifiedDate,
    },
    // Enable Incremental Static Regeneration (ISR) for freshness
    revalidate: 86400, // Regenerate every 24 hours (86400 seconds)
  };
}

export default JobBoardsBlog;