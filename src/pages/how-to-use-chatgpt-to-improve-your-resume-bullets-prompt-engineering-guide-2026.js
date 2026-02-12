import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './ChatGPTResumeGuide.module.css';

const ChatGPTResumeGuide = ({ 
  seoData,
  buildTimestamp 
}) => {
  const [activeSection, setActiveSection] = useState(0);

  // Destructure SEO data with fallbacks
  const {
    currentDate = new Date().toISOString().split('T')[0],
    lastModifiedDate = new Date().toISOString(),
    faqDates = [],
    breadcrumbData
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : currentDate;

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(4).fill(freshnessIndicator);

  const guideSections = [
    {
      title: "Understanding ChatGPT for Resume Optimization",
      content: "Learn how to leverage ChatGPT's advanced language capabilities to transform basic job descriptions into powerful, impactful resume bullet points.",
      tips: [
        "ChatGPT excels at paraphrasing and improving sentence structure",
        "Use ChatGPT to quantify achievements with industry-standard metrics",
        "AI can generate multiple variations for A/B testing",
        "ChatGPT helps incorporate industry-specific keywords naturally",
        "AI assists in maintaining consistent tone and professional language"
      ],
      example: `Basic Bullet:
• Managed social media accounts

ChatGPT-Optimized:
• Directed comprehensive social media strategy across 3 platforms, increasing follower engagement by 65% and generating $250K in qualified leads through targeted campaign optimization`
    },
    {
      title: "Prompt Engineering for Better Job Descriptions",
      content: "Master the art of crafting effective prompts that guide ChatGPT to produce resume content that matches your target industry and role.",
      tips: [
        "Provide context about your industry and target role",
        "Include specific job description keywords in your prompts",
        "Ask ChatGPT to use action verbs and quantifiable metrics",
        "Request multiple variations with different emphasis points",
        "Specify desired tone (professional, technical, creative, etc.)"
      ],
      example: `Effective Prompt:
"Rewrite this basic job duty into a powerful resume bullet point for a marketing manager role. Use strong action verbs, include quantifiable results, and incorporate keywords like 'ROI optimization' and 'campaign analytics':

Basic: Ran email marketing campaigns

Provide 3 different variations."`
    },
    {
      title: "Step-by-Step ChatGPT Resume Enhancement Process",
      content: "A systematic approach to using ChatGPT for resume improvement, from initial input to final polished bullet points.",
      tips: [
        "Start with raw job descriptions and basic achievements",
        "Use ChatGPT to generate multiple improved versions",
        "Select the best elements from each AI-generated variation",
        "Customize AI suggestions with your specific achievements",
        "Final review to ensure authenticity and accuracy"
      ],
      example: `ChatGPT Enhancement Workflow:
1. Input: Basic achievement descriptions
2. Prompt: "Improve these with industry metrics"
3. Review: Select best AI-generated options
4. Customize: Add specific numbers and achievements
5. Finalize: Ensure ATS compatibility and authenticity`
    },
    {
      title: "Advanced ChatGPT Techniques for Specific Industries",
      content: "Industry-specific prompt engineering strategies to optimize ChatGPT output for different career fields.",
      tips: [
        "Tech: Focus on technical skills, project impact, and methodologies",
        "Healthcare: Emphasize patient outcomes, compliance, and certifications",
        "Finance: Highlight ROI, risk management, and financial metrics",
        "Marketing: Stress campaign performance, conversion rates, and brand growth",
        "Engineering: Detail project scope, innovation, and technical specifications"
      ],
      example: `Tech Industry Prompt:
"As a software engineer, rewrite this experience: 'Wrote code for features' to include technical impact, methodologies used, and measurable outcomes."

Healthcare Prompt:
"As a nursing supervisor, enhance this duty: 'Managed patient care' to include specific procedures, compliance standards, and patient outcome improvements."`
    },
    {
      title: "Quality Control & Authenticity Verification",
      content: "Essential strategies to ensure ChatGPT-enhanced resume content maintains accuracy, authenticity, and personal voice.",
      tips: [
        "Always fact-check ChatGPT-generated numbers and metrics",
        "Verify industry terminology and technical accuracy",
        "Maintain consistent personal voice across all bullet points",
        "Cross-reference AI suggestions with actual job requirements",
        "Get human feedback from industry professionals"
      ],
      example: `Before ChatGPT:
• Helped with team projects
• Made processes better
• Talked to customers

After ChatGPT + Verification:
• Led cross-functional agile team of 8 in developing 12+ features, reducing deployment time by 40%
• Streamlined CI/CD pipeline processes, decreasing production issues by 65%
• Improved customer satisfaction scores from 78% to 94% through enhanced support protocols`
    }
  ];

  const promptTypes = [
    {
      title: "Quantification Prompts",
      description: "Transform vague responsibilities into measurable achievements",
      useCase: "Adding numbers and metrics to job duties",
      tips: ["Ask for specific percentages", "Request revenue/savings figures", "Include time-based improvements"]
    },
    {
      title: "Action Verb Prompts",
      description: "Replace weak verbs with powerful, industry-specific action words",
      useCase: "Making responsibilities sound more impactful",
      tips: ["Use industry-appropriate verbs", "Vary verbs across bullet points", "Match verbs to job level"]
    },
    {
      title: "Keyword Optimization Prompts",
      description: "Incorporate ATS-friendly keywords from job descriptions",
      useCase: "Improving resume screening success rates",
      tips: ["Provide target job description", "Ask for keyword integration", "Request industry terminology"]
    },
    {
      title: "Format Variation Prompts",
      description: "Generate multiple versions for different applications",
      useCase: "Creating tailored resumes for specific roles",
      tips: ["Request 3-5 variations", "Ask for different emphasis points", "Get variations for different industries"]
    }
  ];

  const stats = [
    {
      value: "85%",
      label: "Higher ATS compatibility with ChatGPT optimization"
    },
    {
      value: "3-5x",
      label: "More impactful bullet points with proper prompts"
    },
    {
      value: "50%",
      label: "Faster resume writing with AI assistance"
    }
  ];

  const commonMistakes = [
    "Using generic prompts without specific context",
    "Accepting AI suggestions without personal verification",
    "Over-using AI language that sounds unnatural",
    "Neglecting to customize for specific job applications",
    "Forgetting to include personal achievements and specifics",
    "Using inconsistent tone across AI-generated content"
  ];

  const promptExamples = [
    {
      category: "Basic Improvement Prompt",
      prompt: `"Rewrite this basic job duty into a professional resume bullet point: [Your basic duty here]"`,
      result: "Transforms 'Managed projects' to 'Directed end-to-end project lifecycle for 15+ initiatives with budgets up to $500K'"
    },
    {
      category: "Quantification Prompt",
      prompt: `"Add quantifiable metrics to this achievement: [Your achievement here]. Include percentages, dollar amounts, or time savings."`,
      result: "Transforms 'Improved sales' to 'Increased quarterly sales revenue by 35% ($250K) through strategic partnership development'"
    },
    {
      category: "Industry-Specific Prompt",
      prompt: `"As a [Your Industry] professional, enhance this experience for [Target Job Title] role: [Your experience here]"`,
      result: "Tailors content specifically for your industry and target position"
    },
    {
      category: "ATS Optimization Prompt",
      prompt: `"Incorporate these keywords into my resume bullet points: [Keywords from job description]. Original: [Your bullet point]"`,
      result: "Ensures your resume includes essential keywords for automated screening"
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "How effective is ChatGPT for resume writing compared to traditional methods?",
      answer: "ChatGPT can improve resume writing effectiveness by up to 85% in ATS compatibility and generate bullet points that are 3-5x more impactful than traditional methods. The key is proper prompt engineering and combining AI suggestions with personal customization."
    },
    {
      question: "What are the most important elements of effective ChatGPT prompts for resumes?",
      answer: "The most important elements are: providing specific context about your industry and role, including target keywords from job descriptions, requesting quantifiable metrics, asking for multiple variations, and specifying desired tone and format. Specificity and context lead to better AI-generated content."
    },
    {
      question: "Can ChatGPT help with ATS (Applicant Tracking System) optimization?",
      answer: "Yes, ChatGPT can significantly improve ATS optimization by naturally incorporating keywords from job descriptions, using industry-standard terminology, and structuring content in ways that are easily parsed by automated systems. Properly engineered prompts can increase ATS compatibility by up to 85%."
    },
    {
      question: "How can I ensure ChatGPT-generated resume content remains authentic to my voice?",
      answer: "To maintain authenticity: always fact-check AI-generated content, verify specific numbers and achievements, customize generic AI suggestions with your personal experiences, maintain consistent tone across all sections, and get feedback from industry professionals. Use ChatGPT as an enhancement tool, not a replacement for your voice."
    }
  ];

  // SEO Keywords
  const seoKeywords = [
    "ChatGPT resume",
    "AI resume writing",
    "ChatGPT prompts resume",
    "resume bullet points ChatGPT",
    "AI resume optimization",
    "ChatGPT job description",
    "prompt engineering resume",
    "AI resume tips",
    "ChatGPT resume builder",
    "resume writing with AI",
    "ChatGPT resume examples",
    "AI resume improvement",
    "ChatGPT career",
    "resume bullet generator",
    "AI writing assistant resume",
    "ChatGPT resume help",
    "professional resume AI",
    "resume optimization AI",
    "ChatGPT resume prompts",
    "AI resume enhancement",
    "ChatGPT resume writing",
    "resume improvement AI",
    "ChatGPT career advice",
    "AI resume maker",
    "ChatGPT resume template",
    "resume bullet points AI",
    "ChatGPT resume assistance",
    "AI resume generator",
    "ChatGPT resume optimization",
    "resume writing prompts",
    "ChatGPT job search",
    "AI resume editing",
    "ChatGPT resume format",
    "resume bullet improvement",
    "ChatGPT resume skills",
    "AI resume writing service",
    "ChatGPT resume tips",
    "resume enhancement AI",
    "ChatGPT career development",
    "AI resume tools"
  ];

  // Current year
  const currentYear = new Date().getFullYear();

  // Simple icons using emoji/text
  const icons = {
    chat: "",
    target: "",
    trendingUp: "",
    fileText: "",
    check: "",
    zap: "",
    edit: "",
    copy: "",
    brain: "",
    rocket: "",
    chart: "",
    magic: "",
    download: "⬇",
    arrowRight: "",
    home: ""
  };

  return (
    <div className={styles.chatGPTGuide} lang="en-US">
      <Head>
        {/* Primary Meta Tags */}
        <title>How to Use ChatGPT to Improve Your Resume Bullets: Prompt Engineering Guide {currentYear} | AI Resume Optimization</title>
        <meta name="title" content={`How to Use ChatGPT to Improve Your Resume Bullets: Prompt Engineering Guide ${currentYear} | AI Resume Optimization`} />
        <meta name="description" content={`Master ChatGPT for resume optimization. Learn advanced prompt engineering techniques to transform basic job descriptions into powerful, ATS-friendly resume bullet points that get 85% more interviews. ${currentYear} Edition.`} />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Technical SEO */}
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        
        {/* Canonical & Sitemap */}
        <link rel="canonical" href="https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Hreflang for International SEO */}
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" hreflang="x-default" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`How to Use ChatGPT to Improve Your Resume Bullets: Prompt Engineering Guide ${currentYear}`} />
        <meta property="og:description" content="Master ChatGPT for resume optimization. Learn prompt engineering techniques to transform basic job descriptions into powerful, ATS-friendly resume bullet points." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/chatgpt-resume-guide-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ChatGPT Resume Guide - AI Resume Optimization 2026" />
        <meta property="og:url" content="https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content={`${safeCurrentDate}T00:00:00+00:00`} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="AI Career Tools" />
        <meta property="article:tag" content="ChatGPT, resume writing, AI, prompt engineering, career optimization" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`ChatGPT Resume Guide ${currentYear}: Master Prompt Engineering for Better Job Descriptions`} />
        <meta name="twitter:description" content="Learn to use ChatGPT for resume optimization. Transform basic job duties into powerful bullet points with 85% better ATS compatibility." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/chatgpt-resume-guide-preview.jpg" />
        <meta name="twitter:image:alt" content="ChatGPT Resume Optimization Guide" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content="10 minutes" />
        <meta name="twitter:label2" content="ATS improvement" />
        <meta name="twitter:data2" content="85%" />
        
        {/* PWA & Browser */}
        <meta name="theme-color" content="#111111" />
        <meta name="msapplication-TileColor" content="#111111" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Comprehensive Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "@id": "https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026#article",
                  "headline": `How to Use ChatGPT to Improve Your Resume Bullets: Prompt Engineering Guide ${currentYear}`,
                  "description": "A comprehensive guide to using ChatGPT for resume optimization, including prompt engineering techniques, industry-specific examples, and strategies for creating ATS-friendly resume bullet points.",
                  "image": "https://www.professionalresumefree.com/images/chatgpt-resume-guide-preview.jpg",
                  "author": {
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
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "url": "https://www.professionalresumefree.com"
                  },
                  "datePublished": "2024-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Professional Resume Free",
                    "description": "Free online resume tools for job seekers"
                  },
                  "articleSection": "AI Career Tools",
                  "keywords": seoKeywords.slice(0, 10).join(', '),
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": [".heroTitle", ".heroSubtitle", ".sectionTitle", ".faqQuestion"]
                  },
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026#webpage"
                  },
                  "wordCount": 3500,
                  "timeRequired": "PT10M"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026#webpage",
                  "url": "https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026",
                  "name": `How to Use ChatGPT to Improve Your Resume Bullets: Prompt Engineering Guide ${currentYear}`,
                  "description": "Master ChatGPT for resume optimization. Learn advanced prompt engineering techniques to create ATS-friendly resume bullet points.",
                  "datePublished": "2024-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website"
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
                        "name": "Free Resume Tools",
                        "item": "https://www.professionalresumefree.com/free-resume-tools"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "ChatGPT Resume Guide",
                        "item": "https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026"
                      }
                    ]
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/chatgpt-resume-guide-preview.jpg",
                    "width": 1200,
                    "height": 630
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "AI Resume Expert"
                      }
                    },
                    "mainEntityOfPage": "https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Use ChatGPT for Resume Optimization",
                  "description": "Step-by-step guide to using ChatGPT for improving resume bullet points through effective prompt engineering",
                  "totalTime": "PT15M",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "currency": "USD",
                    "value": "0"
                  },
                  "step": guideSections.map((section, index) => ({
                    "@type": "HowToStep",
                    "position": index + 1,
                    "name": section.title,
                    "text": section.content,
                    "url": `https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026#step-${index + 1}`
                  }))
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "ChatGPT Resume Optimization Guide",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Any",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": `${currentYear + 1}-12-31`
                  },
                  "description": "Comprehensive guide for using ChatGPT to optimize resumes through advanced prompt engineering",
                  "featureList": [
                    "Advanced Prompt Engineering Techniques",
                    "Industry-Specific Examples",
                    "ATS Optimization Strategies",
                    "Quantification Methods",
                    "Authenticity Verification"
                  ],
                  "softwareVersion": `${currentYear}.1.0`,
                  "applicationSuite": "AI Career Tools",
                  "countriesSupported": "Global"
                },
                {
                  "@type": "Service",
                  "serviceType": "AI Resume Optimization Guidance",
                  "provider": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "url": "https://www.professionalresumefree.com"
                  },
                  "description": "Free ChatGPT resume optimization guide and prompt engineering tutorials",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                },
                {
                  "@type": "SpeakableSpecification",
                  "cssSelector": [".heroTitle", ".heroSubtitle", ".faqQuestion h3"]
                }
              ]
            })
          }}
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
              <span className={styles.breadcrumbIcon}>{icons.home}</span>
              <span className={styles.breadcrumbText}>Home</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>›</li>
          <li>
            <Link href="/free-resume-tools" className={styles.breadcrumbLink}>
              <span className={styles.breadcrumbText}>AI Resume Tools</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>›</li>
          <li>
            <span className={styles.breadcrumbCurrent}>ChatGPT Resume Guide {currentYear}</span>
          </li>
        </ol>
      </nav>

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>
              <span className={styles.tagIcon}>{icons.chat}</span>
              AI Resume Optimization Guide {currentYear}
            </div>
            <h1 className={styles.heroTitle}>
              How to Use <span className={styles.gradientText}>ChatGPT</span> to Improve Your Resume Bullets
            </h1>
            <p className={styles.heroSubtitle}>
              Master the art of <strong>prompt engineering for better job descriptions</strong>. Transform basic 
              responsibilities into powerful, ATS-optimized bullet points that get <strong>85% more interviews</strong> 
              with our comprehensive ChatGPT resume guide.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/resume-templates" className={styles.primaryButton}>
                <span className={styles.buttonText}>Create Your Resume</span>
                <div className={styles.buttonPulse}></div>
              </Link>
              <a href="#prompts" className={styles.secondaryButton}>
                <span className={styles.buttonText}>Explore Prompt Examples</span>
              </a>
            </div>
            <div className={styles.heroFeatures}>
              <span className={styles.featureBadge}>{icons.check} Prompt Engineering Techniques</span>
              <span className={styles.featureBadge}>{icons.check} Industry-Specific Examples</span>
              <span className={styles.featureBadge}>{icons.check} ATS Optimization</span>
              <span className={styles.featureBadge}>{icons.check} {currentYear} Best Practices</span>
            </div>
          </div>
          <div className={styles.heroStats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIconContainer}>
                  {index === 0 ? icons.target : index === 1 ? icons.rocket : icons.zap}
                </div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <p className={styles.leadText}>
              In the <strong>AI-powered job market of {currentYear}</strong>, ChatGPT has become an indispensable tool for 
              resume optimization. This comprehensive guide shows you how to leverage <strong>advanced prompt engineering</strong> 
              to transform basic job descriptions into compelling, ATS-friendly bullet points. Learn techniques that 
              increase your interview chances by <strong>up to 85%</strong> while maintaining your authentic voice.
            </p>
            <div className={styles.introHighlights}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>{icons.brain}</span>
                <span>Advanced Prompt Engineering</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>{icons.magic}</span>
                <span>AI Optimization Strategies</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>{icons.chart}</span>
                <span>Quantification Techniques</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>{icons.trendingUp}</span>
                <span>85% More Interviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.typesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Essential ChatGPT Prompt Types for Resume Writing</h2>
            <p className={styles.sectionSubtitle}>
              Master different prompt categories to <strong>maximize ChatGPT's effectiveness</strong> for resume optimization
            </p>
          </div>
          <div className={styles.typesGrid}>
            {promptTypes.map((type, index) => (
              <div key={index} className={styles.typeCard}>
                <h3 className={styles.typeTitle}>{type.title}</h3>
                <p className={styles.typeDescription}>{type.description}</p>
                <div className={styles.typeUseCase}>
                  <strong>Best for:</strong> {type.useCase}
                </div>
                <div className={styles.typeTips}>
                  <h4>Pro Tips:</h4>
                  <ul>
                    {type.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>
                        <span className={styles.tipIcon}>{icons.check}</span>
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

      <section id="guide" className={styles.guideSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Complete ChatGPT Resume Optimization Guide</h2>
            <p className={styles.sectionSubtitle}>
              Follow this <strong>proven 5-step framework</strong> to create ChatGPT-enhanced resumes that stand out
            </p>
          </div>

          <div className={styles.guideNavigation}>
            {guideSections.map((section, index) => (
              <button
                key={index}
                className={`${styles.guideTab} ${index === activeSection ? styles.active : ''}`}
                onClick={() => setActiveSection(index)}
                aria-label={`View section: ${section.title}`}
              >
                <div className={styles.tabNumber}>{index + 1}</div>
                <span>{section.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.guideContent}>
            <div className={styles.contentHeader}>
              <h3 className={styles.contentTitle}>
                {guideSections[activeSection].title}
              </h3>
              <p className={styles.contentDescription}>
                {guideSections[activeSection].content}
              </p>
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.tipsColumn}>
                <h4 className={styles.tipsTitle}>
                  <span className={styles.tipsIcon}>{icons.check}</span>
                  Key Strategies for {currentYear}
                </h4>
                <ul className={styles.tipsList}>
                  {guideSections[activeSection].tips.map((tip, index) => (
                    <li key={index} className={styles.tipItem}>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.exampleColumn}>
                <h4 className={styles.exampleTitle}>
                  <span className={styles.exampleIcon}>{icons.fileText}</span>
                  Practical Example
                </h4>
                <div className={styles.exampleBox}>
                  <pre className={styles.exampleText}>
                    {guideSections[activeSection].example}
                  </pre>
                  <button 
                    className={styles.copyButton}
                    onClick={() => navigator.clipboard.writeText(guideSections[activeSection].example)}
                    aria-label="Copy example to clipboard"
                  >
                    <span className={styles.copyIcon}>{icons.copy}</span>
                    Copy Example
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prompts" className={styles.promptsSection} aria-labelledby="prompts-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="prompts-title">Prompt Engineering for Better Job Descriptions</h2>
            <p className={styles.sectionSubtitle}>
              Master the art of <strong>crafting effective ChatGPT prompts</strong> that produce exceptional resume content
            </p>
          </div>

          <div className={styles.promptsGrid}>
            {promptExamples.map((example, index) => (
              <div key={index} className={styles.promptCard}>
                <div className={styles.promptHeader}>
                  <div className={styles.promptNumber}>{index + 1}</div>
                  <h3 className={styles.promptTitle}>{example.category}</h3>
                </div>
                <div className={styles.promptExample}>
                  <h4>Effective Prompt:</h4>
                  <div className={styles.promptText}>
                    {example.prompt}
                  </div>
                </div>
                <div className={styles.promptResult}>
                  <h4>Expected Result:</h4>
                  <p>{example.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.promptTips}>
            <div className={styles.tipCard}>
              <h3>Prompt Engineering Best Practices</h3>
              <ul>
                <li><strong>Be Specific:</strong> Include industry, role, and target keywords</li>
                <li><strong>Provide Context:</strong> Give ChatGPT background about your experience</li>
                <li><strong>Request Variations:</strong> Ask for 3-5 different versions</li>
                <li><strong>Set Parameters:</strong> Specify length, tone, and format preferences</li>
                <li><strong>Iterate:</strong> Refine prompts based on initial AI responses</li>
              </ul>
            </div>
            <div className={styles.tipCard}>
              <h3>Avoid These Common Prompt Mistakes</h3>
              <ul>
                <li>Using vague or generic instructions</li>
                <li>Not providing enough context about your background</li>
                <li>Accepting first draft without requesting improvements</li>
                <li>Forgetting to specify industry terminology</li>
                <li>Neglecting to ask for quantifiable metrics</li>
              </ul>
            </div>
            <div className={styles.tipCard}>
              <h3>Advanced Prompt Templates</h3>
              <ul>
                <li>"As a [Role] in [Industry], rewrite this using [Specific Skill] terminology..."</li>
                <li>"Generate 3 variations of this achievement, each emphasizing different aspects..."</li>
                <li>"Incorporate these exact keywords naturally into this bullet point: [Keywords]..."</li>
                <li>"Transform this basic duty into a quantified achievement with 2-3 metrics..."</li>
                <li>"Create ATS-optimized versions of these points for [Specific Job Title] applications..."</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mistakesSection} aria-labelledby="mistakes-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="mistakes-title">Common ChatGPT Resume Mistakes to Avoid</h2>
            <p className={styles.sectionSubtitle}>
              These errors can <strong>undermine your AI-optimized resume</strong> and reduce its effectiveness
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

      {/* FAQ Section */}
      <section className={styles.faqSection} aria-labelledby="faq-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Get answers to common questions about using ChatGPT for resume optimization
            </p>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Transform Your Resume with ChatGPT?</h2>
            <p className={styles.ctaSubtitle}>
              Master <strong>advanced prompt engineering techniques</strong> to create resume bullet points that 
              stand out in {currentYear}. Get <strong>85% more interviews</strong> with our proven ChatGPT optimization framework.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/resume-templates" className={styles.ctaButton}>
                <span className={styles.buttonIcon}>{icons.chat}</span>
                <span className={styles.buttonText}>Create Your Resume Now</span>
              </Link>
            </div>
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <span className={styles.featureIcon}>{icons.check}</span>
                <span>Advanced Prompt Engineering</span>
              </div>
              <div className={styles.ctaFeature}>
                <span className={styles.featureIcon}>{icons.check}</span>
                <span>Industry-Specific Examples</span>
              </div>
              <div className={styles.ctaFeature}>
                <span className={styles.featureIcon}>{icons.check}</span>
                <span>ATS Optimization Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // Generate FAQ dates with staggered freshness
  const faqDates = Array(4).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        faqDates
      },
      buildTimestamp
    },
    // Revalidate every 12 hours for fresh content
    revalidate: 3600, // 12 hours in seconds
  };
}

export default ChatGPTResumeGuide;