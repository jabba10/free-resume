'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiFileText, 
  FiUser, 
  FiMail, 
  FiEdit3,
  FiCheck,
  FiX,
  FiArrowLeft,
  FiArrowRight,
  FiAward,
  FiBook,
  FiTarget,
  FiStar
} from 'react-icons/fi';
import styles from './Guides.module.css';

const CoverLetterGuide = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Understand the Purpose",
      content: "A cover letter introduces you to the employer, highlights your most relevant qualifications, and explains why you're the best fit for the position. It should complement, not duplicate, your resume.",
      tips: [
        "Tailor each cover letter to the specific job",
        "Address the hiring manager by name if possible",
        "Keep it concise (3-4 paragraphs)"
      ]
    },
    {
      title: "Header & Contact Information",
      content: "Include your name, address, phone number, email, and date at the top. Then add the employer's contact information.",
      example: (
        <div className={styles.exampleCard}>
          <p><strong>Your Name</strong></p>
          <p>Your Address</p>
          <p>City, State ZIP Code</p>
          <p>Phone | Email</p>
          <p>Date</p>
          <br />
          <p><strong>Hiring Manager's Name</strong></p>
          <p>Company Name</p>
          <p>Company Address</p>
          <p>City, State ZIP Code</p>
        </div>
      )
    },
    {
      title: "Salutation",
      content: "Address the hiring manager directly if possible. If you don't know the name, use 'Dear Hiring Manager'.",
      tips: [
        "Avoid 'To Whom It May Concern'",
        "Research on LinkedIn or company website for names",
        "Use 'Dear [Department] Team' as an alternative"
      ]
    },
    {
      title: "Opening Paragraph",
      content: "Start strong by mentioning the position you're applying for and how you learned about it. Include a compelling hook that makes the reader want to continue.",
      example: (
        <div className={styles.exampleCard}>
          <p>"I'm excited to apply for the Marketing Manager position at XYZ Company. With 5 years of experience developing successful digital marketing campaigns that increased engagement by up to 300%, I'm confident I can contribute significantly to your team's goals."</p>
        </div>
      )
    },
    {
      title: "Body Paragraph(s)",
      content: "Highlight 2-3 relevant achievements or experiences that demonstrate your qualifications. Use metrics when possible.",
      tips: [
        "Match your skills to the job requirements",
        "Show how you solved similar problems",
        "Use the STAR method (Situation, Task, Action, Result)"
      ],
      example: (
        <div className={styles.exampleCard}>
          <p>"At ABC Corp, I led a team that redesigned the company website, resulting in a 40% increase in user engagement and 25% more lead generation. My expertise in SEO and content strategy aligns perfectly with your need to improve organic traffic."</p>
        </div>
      )
    },
    {
      title: "Closing Paragraph",
      content: "Reiterate your enthusiasm, mention any attachments, and include a call to action.",
      example: (
        <div className={styles.exampleCard}>
          <p>"I'm eager to bring my marketing expertise to XYZ Company and would welcome the opportunity to discuss how my skills can contribute to your team's success. I've attached my resume for your review and look forward to the possibility of an interview. Thank you for your time and consideration."</p>
        </div>
      )
    },
    {
      title: "Professional Closing",
      content: "End with a professional closing and your name.",
      example: (
        <div className={styles.exampleCard}>
          <p>"Sincerely,"</p>
          <p><strong>[Your Name]</strong></p>
        </div>
      )
    },
    {
      title: "Final Tips",
      content: "Before sending your cover letter:",
      tips: [
        "Keep it to one page",
        "Use a professional font (11-12pt)",
        "Proofread multiple times",
        "Save as PDF unless otherwise specified",
        "Follow any application instructions precisely"
      ]
    }
  ];

  const stats = [
    {
      value: "53%",
      label: "Employers prefer candidates with cover letters",
      icon: <FiUser className={styles.statIcon} />
    },
    {
      value: "45%",
      label: "Higher interview rate with tailored cover letters",
      icon: <FiTarget className={styles.statIcon} />
    },
    {
      value: "78%",
      label: "Recruiters read cover letters before resumes",
      icon: <FiBook className={styles.statIcon} />
    }
  ];

  const dos = [
    "Customize for each job application",
    "Show enthusiasm for the company",
    "Use keywords from the job description",
    "Quantify achievements when possible",
    "Keep the tone professional but personable"
  ];

  const donts = [
    "Use a generic template without customization",
    "Repeat your resume verbatim",
    "Include irrelevant personal information",
    "Make it longer than one page",
    "Use unprofessional email addresses"
  ];

  return (
    <div className={styles.coverLetterGuide}>
      {/* SEO Meta Tags */}
      <Head>
        <title>How to Write a Cover Letter: Step-by-Step Guide (with Examples) 2024</title>
        <meta name="description" content="Learn how to write a winning cover letter with our step-by-step guide. Includes real examples, expert tips, and proven templates to get more interviews." />
        <meta name="keywords" content="cover letter guide, how to write a cover letter, cover letter examples, professional cover letter, job application tips, write a cover letter, cover letter template" />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/cover-letter" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="How to Write a Cover Letter: Step-by-Step Guide (with Examples) 2024" />
        <meta property="og:description" content="Write a job-winning cover letter with our proven guide. Includes examples, templates, and expert tips to help you stand out." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/cover-letter-guide-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/cover-letter" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Write a Cover Letter: Step-by-Step Guide (with Examples) 2024" />
        <meta name="twitter:description" content="Write a job-winning cover letter with our proven guide. Includes examples, templates, and expert tips to help you stand out." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/cover-letter-guide-preview.jpg" />
        <meta name="twitter:site" content="@ProfessionalResumeFree" />

        {/* Structured Data: Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "How to Write a Cover Letter: Step-by-Step Guide (with Examples) 2024",
              "description": "A comprehensive guide to writing a professional cover letter that gets you noticed by employers and hiring managers.",
              "image": "https://www.professionalresumefree.com/images/cover-letter-guide-preview.jpg",
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
              "datePublished": "2024-01-25",
              "dateModified": "2024-05-07",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/cover-letter"
              },
              "articleSection": "Job Application Tips",
              "wordCount": "1020",
              "keywords": "cover letter, job application, resume tips, career advice"
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
              "name": "How to Write a Professional Cover Letter",
              "description": "Step-by-step guide to writing a job-winning cover letter.",
              "totalTime": "PT30M",
              "step": steps.map((step, index) => ({
                "@type": "HowToStep",
                "name": step.title,
                "text": step.content,
                "url": `https://www.professionalresumefree.com/cover-letter#step-${index + 1}`
              }))
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
                  "name": "Cover Letter Guide",
                  "item": "https://www.professionalresumefree.com/cover-letter"
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
              Career Success Guide
            </div>
            <h1 className={styles.heroTitle}>
              Professional <span className={styles.gradientText}>Cover Letter</span> Guide
            </h1>
            <p className={styles.heroSubtitle}>
              Step-by-step instructions to create a job-winning cover letter that gets you noticed
            </p>
            <div className={styles.heroButtons}>
              <Link href="/free-resume-builder" className={styles.primaryButton}>
                Create Your Resume Now
                <div className={styles.buttonPulse}></div>
              </Link>
              <a href="#guide" className={styles.secondaryButton}>
                Start Learning
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

      {/* Progress Navigation */}
      <section id="guide" className={styles.progressSection}>
        <div className={styles.container}>
          <div className={styles.progressContainer}>
            <h2 className={styles.progressTitle}>Step-by-Step Guide</h2>
            <div className={styles.progressSteps}>
              {steps.map((step, index) => (
                <button
                  key={index}
                  className={`${styles.stepIndicator} ${index === activeStep ? styles.active : ''}`}
                  onClick={() => setActiveStep(index)}
                  aria-label={`Go to step ${index + 1}: ${step.title}`}
                >
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepTitle}>{step.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <div className={styles.stepBadge}>
                Step {activeStep + 1} of {steps.length}
              </div>
              <h2 className={styles.stepTitle}>{steps[activeStep].title}</h2>
            </div>
            
            <div className={styles.stepContent}>
              <p className={styles.stepDescription}>{steps[activeStep].content}</p>

              {steps[activeStep].tips && (
                <div className={styles.tipsSection}>
                  <h3 className={styles.tipsTitle}>
                    <FiStar className={styles.tipsIcon} />
                    Key Tips
                  </h3>
                  <ul className={styles.tipsList}>
                    {steps[activeStep].tips.map((tip, i) => (
                      <li key={i} className={styles.tipItem}>
                        <FiCheck className={styles.tipIcon} />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {steps[activeStep].example && (
                <div className={styles.exampleSection}>
                  <h3 className={styles.exampleTitle}>
                    <FiEdit3 className={styles.exampleIcon} />
                    Example
                  </h3>
                  {steps[activeStep].example}
                </div>
              )}
            </div>

            <div className={styles.navigationButtons}>
              <button
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className={styles.prevButton}
              >
                <FiArrowLeft className={styles.navIcon} />
                Previous
              </button>
              
              <div className={styles.stepProgress}>
                Step {activeStep + 1} of {steps.length}
              </div>
              
              <button
                onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                disabled={activeStep === steps.length - 1}
                className={styles.nextButton}
              >
                Next
                <FiArrowRight className={styles.navIcon} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Tips Section */}
      <section className={styles.bonusSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Cover Letter Do's and Don'ts</h2>
            <p className={styles.sectionSubtitle}>
              Essential guidelines to ensure your cover letter makes the right impression
            </p>
          </div>
          
          <div className={styles.tipsGrid}>
            <div className={styles.doCard}>
              <div className={styles.cardHeader}>
                <div className={styles.doIcon}>
                  <FiCheck />
                </div>
                <h3>Do</h3>
              </div>
              <ul className={styles.tipsList}>
                {dos.map((item, index) => (
                  <li key={index} className={styles.doItem}>
                    <FiCheck className={styles.itemIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.dontCard}>
              <div className={styles.cardHeader}>
                <div className={styles.dontIcon}>
                  <FiX />
                </div>
                <h3>Don't</h3>
              </div>
              <ul className={styles.tipsList}>
                {donts.map((item, index) => (
                  <li key={index} className={styles.dontItem}>
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
            <h2 className={styles.ctaTitle}>Ready to Create Your Perfect Resume?</h2>
            <p className={styles.ctaSubtitle}>
              Build a standout resume in minutes with our free resume builder.
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

export default CoverLetterGuide;