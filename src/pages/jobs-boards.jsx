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
  FiExternalLink
} from 'react-icons/fi';
import styles from './JobsBoardsBlog.module.css';

const JobBoardsBlog = () => {
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
      {/* SEO Meta Tags */}
      <Head>
        <title>Best Job Boards: Remote, Hybrid & International Opportunities 2024</title>
        <meta name="description" content="Discover the top job boards for remote, hybrid, and international roles with visa sponsorship. Find legitimate opportunities on We Work Remotely, Remote OK, FlexJobs, Relocate.me, and more." />
        <meta name="keywords" content="best job boards, remote job sites, hybrid jobs, international jobs, visa sponsorship jobs, jobs with relocation, work from home, global job search, tech job boards" />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/blog/best-job-boards" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Best Job Boards 2024: Remote, Hybrid & International Opportunities" />
        <meta property="og:description" content="The ultimate guide to finding remote, hybrid, and international jobs with visa sponsorship. Trusted platforms reviewed." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/job-boards-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/blog/best-job-boards" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Job Boards 2024: Remote, Hybrid & International Opportunities" />
        <meta name="twitter:description" content="The ultimate guide to finding remote, hybrid, and international jobs with visa sponsorship. Trusted platforms reviewed." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/job-boards-preview.jpg" />
        <meta name="twitter:site" content="@ProfessionalResumeFree" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Best Job Boards 2024: Remote, Hybrid & International Opportunities",
              "description": "A comprehensive guide to the best job boards for remote, hybrid, and international roles with visa and relocation support.",
              "image": "https://www.professionalresumefree.com/images/job-boards-preview.jpg",
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
              "datePublished": "2024-01-10",
              "dateModified": "2024-05-05",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/blog/best-job-boards"
              },
              "articleSection": "Career Resources"
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
              Career Resources Guide
            </div>
            <h1 className={styles.heroTitle}>
              Global <span className={styles.gradientText}>Job Boards</span> Guide
            </h1>
            <p className={styles.heroSubtitle}>
              Discover the best platforms for remote, hybrid, and international opportunities with visa sponsorship
            </p>
            <div className={styles.heroButtons}>
              <Link href="/free-resume-builder" className={styles.primaryButton}>
                Build Your Resume
                <div className={styles.buttonPulse}></div>
              </Link>
              <a href="#categories" className={styles.secondaryButton}>
                Explore Job Boards
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

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <p className={styles.leadText}>
              In today's interconnected world, geographical boundaries no longer limit career opportunities. 
              Whether you're seeking remote work, hybrid arrangements, or international positions with visa sponsorship, 
              specialized job boards can connect you with global employers.
            </p>
          </div>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className={styles.tipsSection}>
        <div className={styles.container}>
          <div className={styles.tipsCard}>
            <h3 className={styles.tipsTitle}>
              <FiTrendingUp className={styles.tipsIcon} />
              Pro Tips for International Job Seekers
            </h3>
            <div className={styles.tipsGrid}>
              {proTips.map((tip, index) => (
                <div key={index} className={styles.tipItem}>
                  <div className={styles.tipBullet}>{index + 1}</div>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories Section */}
      <section id="categories" className={styles.categoriesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Job Board Categories</h2>
            <p className={styles.sectionSubtitle}>
              Explore specialized platforms for different types of opportunities
            </p>
          </div>

          {/* Category Navigation */}
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
              </button>
            ))}
          </div>

          {/* Active Category Content */}
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
                  <a 
                    href={job.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.visitButton}
                  >
                    Visit Site
                    <FiExternalLink className={styles.buttonIcon} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className={styles.conclusionSection}>
        <div className={styles.container}>
          <div className={styles.conclusionCard}>
            <h2 className={styles.conclusionTitle}>Final Thoughts</h2>
            <p className={styles.conclusionText}>
              The job market is more global than ever before. By leveraging these specialized platforms, 
              you can access opportunities that match your preferred work style—whether that's fully remote, 
              hybrid, or an international relocation.
            </p>
            <p className={styles.conclusionText}>
              Remember to optimize your online profiles (LinkedIn, GitHub, etc.) and network within your 
              target industries to maximize your chances of finding the perfect role.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Land Your Dream Job?</h2>
            <p className={styles.ctaSubtitle}>
              Create a professional resume that stands out to employers worldwide.
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

export default JobBoardsBlog;