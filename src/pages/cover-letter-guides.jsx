'use client';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiFileText,
  FiEdit,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiCheck,
  FiArrowRight,
  FiBook,
  FiAward,
  FiUserCheck,
  FiMail,
  FiDownload,
  FiCopy
} from 'react-icons/fi';
import styles from './Guides.module.css';

const CoverLetterGuide = () => {
  const [activeSection, setActiveSection] = useState(0);

  const coverLetterSections = [
    {
      title: "Professional Header & Contact Information",
      content: "Start with your contact details and the employer's information in a clean, professional format.",
      tips: [
        "Include your full name, phone, email, and LinkedIn profile",
        "Add the hiring manager's name and company address",
        "Use a professional email address",
        "Keep formatting consistent and clean"
      ],
      example: `Sarah Johnson\n(123) 456-7890 | sarah.johnson@email.com | linkedin.com/in/sarahjohnson\n\nMarch 15, 2026\n\nMs. Jennifer Wilson\nHiring Manager\nTech Innovations Inc.\n123 Business Avenue\nNew York, NY 10001`
    },
    {
      title: "Opening Paragraph - Grab Attention",
      content: "Start strong with a compelling opening that shows your enthusiasm and mentions the specific position.",
      tips: [
        "Mention the specific job title you're applying for",
        "Express genuine enthusiasm for the role and company",
        "Include a key achievement or relevant experience",
        "Keep it concise - 2-3 sentences maximum"
      ],
      example: `Dear Ms. Wilson,\n\nI am writing to express my enthusiastic interest in the Senior Marketing Manager position at Tech Innovations Inc., as advertised on LinkedIn. With over 8 years of experience driving successful marketing campaigns and increasing brand engagement by up to 150%, I am confident in my ability to contribute significantly to your team's goals for 2026.`
    },
    {
      title: "Body Paragraph - Showcase Your Value",
      content: "Highlight your most relevant skills, experiences, and achievements that match the job requirements.",
      tips: [
        "Focus on 2-3 key qualifications from the job description",
        "Use specific examples and quantifiable achievements",
        "Explain how you can solve the company's challenges",
        "Connect your experience to their needs"
      ],
      example: `At my previous role with Digital Solutions Co., I successfully led a team that increased social media engagement by 150% and generated over $2M in revenue through targeted digital campaigns. My expertise in data-driven marketing strategies and cross-functional team leadership aligns perfectly with Tech Innovations' focus on measurable results and innovative approaches for 2026.`
    },
    {
      title: "Second Body Paragraph - Cultural Fit",
      content: "Demonstrate your understanding of the company culture and how you would be a great fit.",
      tips: [
        "Research the company's values and mission",
        "Mention specific aspects that attract you to the company",
        "Show how your work style matches their culture",
        "Reference recent company achievements or news"
      ],
      example: `I have been following Tech Innovations' recent expansion into European markets and admire your commitment to sustainable business practices. My experience in international campaign management and passion for environmentally conscious marketing initiatives would allow me to immediately contribute to your 2026 sustainability goals while driving revenue growth.`
    },
    {
      title: "Closing Paragraph - Call to Action",
      content: "End with a strong closing that reiterates your interest and includes a call to action.",
      tips: [
        "Reiterate your enthusiasm for the position",
        "Clearly state your desire for an interview",
        "Mention your availability for follow-up",
        "Thank the reader for their time and consideration"
      ],
      example: `I am excited about the opportunity to bring my expertise in digital marketing and team leadership to Tech Innovations Inc. and am confident I can help achieve your ambitious goals for 2026. I would welcome the chance to discuss how my skills and experience can benefit your team. Thank you for your time and consideration.\n\nSincerely,\nSarah Johnson`
    }
  ];

  const coverLetterTypes = [
    {
      title: "Application Cover Letter",
      description: "Traditional cover letter for specific job applications",
      useCase: "Responding to job postings",
      tips: ["Tailor to specific job description", "Address hiring manager by name", "Reference the job title specifically"]
    },
    {
      title: "Networking Cover Letter",
      description: "Used when reaching out to contacts for opportunities",
      useCase: "Informational interviews and referrals",
      tips: ["Mention mutual connection", "Focus on relationship building", "Be clear about your request"]
    },
    {
      title: "Prospecting Cover Letter",
      description: "Sent to companies without specific openings",
      useCase: "Cold outreach for hidden opportunities",
      tips: ["Research company thoroughly", "Show how you can add value", "Be persistent but professional"]
    },
    {
      title: "Career Change Cover Letter",
      description: "Highlights transferable skills for new industries",
      useCase: "Transitioning to different field",
      tips: ["Emphasize transferable skills", "Explain motivation for change", "Show relevant training/education"]
    }
  ];

  const stats = [
    {
      value: "53%",
      label: "Employers prefer candidates with tailored cover letters",
      icon: <FiFileText className={styles.statIcon} />
    },
    {
      value: "3x",
      label: "More interviews with personalized cover letters",
      icon: <FiTrendingUp className={styles.statIcon} />
    },
    {
      value: "45sec",
      label: "Average time recruiters spend on each cover letter",
      icon: <FiTarget className={styles.statIcon} />
    }
  ];

  const commonMistakes = [
    "Using generic templates without customization",
    "Focusing too much on what you want rather than what you offer",
    "Including irrelevant personal information",
    "Making spelling and grammar errors",
    "Being too long (ideal length: 250-400 words)",
    "Not addressing the specific hiring manager"
  ];

  return (
    <div className={styles.coverLetterGuide}>
      {/* Enhanced SEO Meta Tags with Competitive Keywords */}
      <Head>
        {/* Primary Meta Tags - Optimized for Cover Letter Keywords */}
        <title>Professional Cover Letter Guide 2026: Examples & Templates for Job Applications</title>
        <meta name="title" content="Professional Cover Letter Guide 2026: Examples & Templates for Job Applications" />
        <meta name="description" content="Learn how to write a winning cover letter for 2026 job market. Get professional templates, examples, and step-by-step guide to land more interviews. Free cover letter builder included." />
        
        {/* Comprehensive Keyword Strategy */}
        <meta name="keywords" content="
          cover letter guide,
          how to write a cover letter 2026,
          professional cover letter examples,
          cover letter templates,
          job application cover letter,
          cover letter writing tips,
          cover letter format 2026,
          cover letter examples for jobs,
          cover letter builder free,
          what to include in cover letter,
          cover letter best practices,
          cover letter for job application,
          cover letter samples,
          cover letter structure,
          cover letter introduction,
          cover letter closing,
          cover letter mistakes to avoid,
          ATS friendly cover letter,
          modern cover letter 2026,
          cover letter for resume,
          free cover letter templates,
          cover letter writing service,
          career change cover letter,
          entry level cover letter,
          experienced professional cover letter,
          cover letter tips and tricks,
          cover letter format template,
          how to address cover letter,
          cover letter examples 2026,
          professional cover letter format
        " />
        
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/cover-letter-guide/" />

        {/* Open Graph / Social Media - Enhanced */}
        <meta property="og:title" content="Professional Cover Letter Guide 2026: Examples & Templates for Job Applications" />
        <meta property="og:description" content="Master cover letter writing for 2026 job market. Get step-by-step guide, professional templates, and examples to land 3x more interviews. Free cover letter builder." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/cover-letter-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/cover-letter-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="article:published_time" content="2026-01-25T00:00:00+00:00" />
        <meta property="article:modified_time" content="2026-05-10T00:00:00+00:00" />
        <meta property="article:author" content="ProfessionalResumeFree" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="cover letter, job application, career advice, resume writing" />

        {/* Twitter Card - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Cover Letter Guide 2026: Examples & Templates" />
        <meta name="twitter:description" content="Master cover letter writing for 2026 job market. Get step-by-step guide, templates, and examples to land 3x more interviews." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/cover-letter-preview.jpg" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content="12 minutes" />
        <meta name="twitter:label2" content="Templates included" />
        <meta name="twitter:data2" content="15+" />

        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Professional Cover Letter Guide 2026: Examples & Templates for Job Applications",
              "description": "A comprehensive guide to writing effective cover letters for the 2026 job market, including step-by-step instructions, professional templates, examples, and best practices to increase interview chances.",
              "image": "https://www.professionalresumefree.com/images/cover-letter-preview.jpg",
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
              "datePublished": "2026-01-25",
              "dateModified": "2026-05-10",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/cover-letter-guide"
              },
              "articleSection": "Career Resources",
              "keywords": "cover letter, job application, career advice, resume writing, cover letter examples, cover letter templates, professional cover letter",
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
                  "name": "How long should a cover letter be in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In 2026, the ideal cover letter length is 250-400 words or 3-4 paragraphs. Recruiters spend an average of 45 seconds reviewing each cover letter, so conciseness while maintaining impact is crucial for success in today's competitive job market."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the best cover letter format for 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best cover letter format for 2026 includes: professional header with contact information, personalized salutation, compelling opening paragraph, 1-2 body paragraphs highlighting relevant achievements, strong closing with call to action, and professional sign-off. Our free templates are optimized for 2026 hiring trends."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do employers still read cover letters in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, 53% of employers prefer candidates who submit tailored cover letters. A well-written cover letter can increase your interview chances by 3x by demonstrating your communication skills, enthusiasm for the role, and understanding of the company's needs in the 2026 job market."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I make my cover letter stand out in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To make your cover letter stand out in 2026: personalize it for each application, quantify your achievements, show knowledge of the company, use keywords from the job description, maintain clean formatting, and focus on how you can solve the employer's specific challenges."
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
                  "name": "Career Resources",
                  "item": "https://www.professionalresumefree.com/career-resources"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Cover Letter Guide 2026",
                  "item": "https://www.professionalresumefree.com/cover-letter-guide"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Enhanced Hero Section with SEO-rich Content */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>
              <FiFileText className={styles.tagIcon} />
              Ultimate Career Writing Guide 2026
            </div>
            <h1 className={styles.heroTitle}>
              Professional <span className={styles.gradientText}>Cover Letter Guide</span> 2026
            </h1>
            <p className={styles.heroSubtitle}>
              Master the art of writing <strong>winning cover letters for the 2026 job market</strong>. 
              Get step-by-step instructions, professional templates, and real examples that help you 
              land <strong>3x more interviews</strong> and stand out from other applicants.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/free-cover-letter-builder" className={styles.primaryButton}>
                Create Free Cover Letter
                <div className={styles.buttonPulse}></div>
              </Link>
              <a href="#sections" className={styles.secondaryButton}>
                Explore Writing Guide
              </a>
            </div>
            <div className={styles.heroFeatures}>
              <span className={styles.featureBadge}>✓ 15+ Professional Templates</span>
              <span className={styles.featureBadge}>✓ ATS-Optimized Formats</span>
              <span className={styles.featureBadge}>✓ Industry-Specific Examples</span>
              <span className={styles.featureBadge}>✓ 2026 Best Practices</span>
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
              In the <strong>competitive job market of 2026</strong>, a well-crafted cover letter can be the difference between 
              landing an interview and being overlooked. This comprehensive guide provides everything you need to create 
              <strong> professional, attention-grabbing cover letters</strong> that showcase your value and increase your chances 
              of success by up to <strong>300%</strong>.
            </p>
            <div className={styles.introHighlights}>
              <div className={styles.highlightItem}>
                <FiEdit className={styles.highlightIcon} />
                <span>Step-by-Step Writing Guide</span>
              </div>
              <div className={styles.highlightItem}>
                <FiBook className={styles.highlightIcon} />
                <span>Real Examples & Templates</span>
              </div>
              <div className={styles.highlightItem}>
                <FiUserCheck className={styles.highlightIcon} />
                <span>Industry Best Practices</span>
              </div>
              <div className={styles.highlightItem}>
                <FiAward className={styles.highlightIcon} />
                <span>3x More Interviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Letter Types Section */}
      <section className={styles.typesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Cover Letter Types for 2026 Job Market</h2>
            <p className={styles.sectionSubtitle}>
              Choose the right cover letter format for your specific situation and <strong>maximize your impact</strong>
            </p>
          </div>
          <div className={styles.typesGrid}>
            {coverLetterTypes.map((type, index) => (
              <div key={index} className={styles.typeCard}>
                <h3 className={styles.typeTitle}>{type.title}</h3>
                <p className={styles.typeDescription}>{type.description}</p>
                <div className={styles.typeUseCase}>
                  <strong>Best for:</strong> {type.useCase}
                </div>
                <div className={styles.typeTips}>
                  <h4>Key Tips:</h4>
                  <ul>
                    {type.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>
                        <FiCheck className={styles.tipIcon} />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide Section */}
      <section id="sections" className={styles.guideSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Step-by-Step Cover Letter Writing Guide for 2026</h2>
            <p className={styles.sectionSubtitle}>
              Follow this <strong>proven structure</strong> to create compelling cover letters that get results
            </p>
          </div>

          <div className={styles.guideNavigation}>
            {coverLetterSections.map((section, index) => (
              <button
                key={index}
                className={`${styles.guideTab} ${index === activeSection ? styles.active : ''}`}
                onClick={() => setActiveSection(index)}
              >
                <div className={styles.tabNumber}>{index + 1}</div>
                <span>{section.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.guideContent}>
            <div className={styles.contentHeader}>
              <h3 className={styles.contentTitle}>
                {coverLetterSections[activeSection].title}
              </h3>
              <p className={styles.contentDescription}>
                {coverLetterSections[activeSection].content}
              </p>
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.tipsColumn}>
                <h4 className={styles.tipsTitle}>
                  <FiCheck className={styles.tipsIcon} />
                  Best Practices for 2026
                </h4>
                <ul className={styles.tipsList}>
                  {coverLetterSections[activeSection].tips.map((tip, index) => (
                    <li key={index} className={styles.tipItem}>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.exampleColumn}>
                <h4 className={styles.exampleTitle}>
                  <FiFileText className={styles.exampleIcon} />
                  Professional Example
                </h4>
                <div className={styles.exampleBox}>
                  <pre className={styles.exampleText}>
                    {coverLetterSections[activeSection].example}
                  </pre>
                  <button className={styles.copyButton}>
                    <FiCopy className={styles.copyIcon} />
                    Copy Example
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className={styles.mistakesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Common Cover Letter Mistakes to Avoid in 2026</h2>
            <p className={styles.sectionSubtitle}>
              Steer clear of these <strong>costly errors</strong> that can undermine your job application
            </p>
          </div>
          <div className={styles.mistakesGrid}>
            {commonMistakes.map((mistake, index) => (
              <div key={index} className={styles.mistakeCard}>
                <div className={styles.mistakeNumber}>{index + 1}</div>
                <p className={styles.mistakeText}>{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Create Your Winning Cover Letter for 2026?</h2>
            <p className={styles.ctaSubtitle}>
              Use our <strong>free cover letter builder</strong> to create professional, tailored cover letters in minutes. 
              Choose from <strong>15+ ATS-optimized templates</strong> and get expert tips for your specific industry and experience level.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/free-cover-letter-builder" className={styles.ctaButton}>
                Build Your Cover Letter Now
                <FiArrowRight className={styles.buttonIcon} />
              </Link>
            </div>
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <FiDownload className={styles.featureIcon} />
                <span>Instant PDF Download</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiEdit className={styles.featureIcon} />
                <span>Easy Customization</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiTarget className={styles.featureIcon} />
                <span>Industry-Specific Templates</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiMail className={styles.featureIcon} />
                <span>Professional Formatting</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoverLetterGuide;