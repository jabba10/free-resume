import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiFileText,
  FiEdit,
  FiTarget,
  FiTrendingUp,
  FiCheck,
  FiArrowRight,
  FiBook,
  FiAward,
  FiUserCheck,
  FiMail,
  FiDownload,
  FiCopy,
  FiClock,
  FiUsers,
  FiBriefcase,
  FiStar,
  FiHome,
  FiChevronRight,
  FiTool,
  FiLayers,
  FiSearch
} from 'react-icons/fi';
import styles from './ProfessionalSummary.module.css';

const ProfessionalSummaryGuide = ({ 
  currentDate, 
  lastModifiedDate, 
  freshnessIndicator,
  buildTimestamp 
}) => {
  const [activeSection, setActiveSection] = useState(0);
  const [copiedText, setCopiedText] = useState('');

  // Enhanced FAQ data with dates
  const faqs = [
    {
      question: "How long should a professional summary be?",
      answer: "A professional summary should be 3-4 lines or 50-100 words. This is approximately the amount of text recruiters can scan in 6 seconds. It should be concise enough to read quickly but comprehensive enough to showcase your value proposition and key qualifications for the target role.",
      date: currentDate
    },
    {
      question: "What's the difference between a professional summary and career objective?",
      answer: "A professional summary focuses on what you offer employers (experience, achievements, value), while a career objective focuses on what you want from employers (your career goals). For most professionals beyond entry-level, a professional summary is more effective as it demonstrates immediate value to hiring managers.",
      date: currentDate
    },
    {
      question: "Should I customize my professional summary for each job application?",
      answer: "Yes, absolutely. You should customize your professional summary for each job application by incorporating keywords from the job description, emphasizing relevant achievements, and aligning your value proposition with the specific role's requirements. This increases both ATS compatibility and human reviewer engagement.",
      date: currentDate
    },
    {
      question: "What are the most important elements to include in a professional summary?",
      answer: "The most important elements are: 1) Years of experience and specialization, 2) 2-3 key achievements with quantifiable results, 3) Target role/industry focus, 4) Relevant skills and certifications, and 5) Value proposition for the employer. These elements should be presented in a compelling, concise format that can be understood in 6 seconds.",
      date: currentDate
    },
    {
      question: "Can I use the same summary for different industries?",
      answer: "While you can use a base template, you should customize your summary for different industries by emphasizing relevant industry-specific skills, terminology, and achievements. Each industry values different competencies and metrics of success.",
      date: currentDate
    },
    {
      question: "How many keywords should I include in my professional summary?",
      answer: "Include 5-7 relevant keywords from the job description. Focus on key skills, tools, and industry terminology. Balance keyword inclusion with natural, compelling language to ensure both ATS compatibility and human readability.",
      date: currentDate
    }
  ];

  // Enhanced summary sections with images
  const summarySections = [
    {
      title: "The 6-Second Hook Formula",
      content: "Learn the exact structure that captures attention in the first 6 seconds of review. This formula is proven to increase interview callbacks by 300%.",
      tips: [
        "Start with years of experience + specialization",
        "Include 2-3 key achievements with metrics",
        "Mention target role and industry",
        "End with value proposition for employer",
        "Use power verbs and quantifiable results",
        "Keep it to 3-4 lines maximum"
      ],
      example: `Results-driven Digital Marketing Manager with 8+ years of experience specializing in SaaS B2B marketing. Increased lead generation by 150% and reduced CAC by 35% through data-driven campaign optimization. Seeking to leverage expertise in growth marketing to drive revenue at a scaling tech company.`,
      image: "https://www.professionalresumefree.com/images/summary-hook-formula.jpg"
    },
    {
      title: "Quantifiable Achievement Integration",
      content: "How to incorporate measurable results that prove your value immediately and stand out to both ATS systems and human recruiters.",
      tips: [
        "Use specific numbers (%, $, #) for all achievements",
        "Focus on business impact (revenue, efficiency, growth)",
        "Choose achievements relevant to target role",
        "Prioritize recent and significant results",
        "Use industry-standard metrics",
        "Include both hard and soft skills"
      ],
      example: `Senior Software Engineer with 10+ years in full-stack development, leading teams that delivered 15+ enterprise applications. Improved system performance by 300% and reduced deployment time by 60%. Expertise in microservices architecture and cloud migration for Fortune 500 clients.`,
      image: "https://www.professionalresumefree.com/images/quantifiable-achievements.jpg"
    },
    {
      title: "Keyword Optimization for ATS",
      content: "Strategically place keywords while maintaining natural, compelling language that passes through Applicant Tracking Systems.",
      tips: [
        "Include 5-7 keywords from job description",
        "Use industry-standard terminology",
        "Balance keywords with human-readable content",
        "Avoid keyword stuffing",
        "Include both acronyms and full terms",
        "Place keywords in context naturally"
      ],
      example: `Data Scientist specializing in machine learning and predictive analytics with 6+ years in fintech. Built risk assessment models with 95% accuracy, preventing $50M+ in potential losses. Proficient in Python, TensorFlow, and big data technologies for scalable AI solutions.`,
      image: "https://www.professionalresumefree.com/images/keyword-optimization.jpg"
    },
    {
      title: "Tailoring for Different Industries",
      content: "How to adjust your summary statement for various professional fields to match industry expectations and terminology.",
      tips: [
        "Tech: Emphasize specific technologies and methodologies",
        "Sales: Focus on revenue numbers and client acquisition",
        "Healthcare: Highlight patient outcomes and compliance",
        "Finance: Emphasize risk management and ROI",
        "Education: Focus on student outcomes and curriculum",
        "Manufacturing: Highlight efficiency and quality metrics"
      ],
      example: `Healthcare: Registered Nurse with 7+ years in critical care, reducing patient readmission rates by 40% through improved discharge planning. Certified in ACLS and specializing in cardiac care with 99% patient satisfaction scores.`,
      image: "https://www.professionalresumefree.com/images/industry-tailoring.jpg"
    },
    {
      title: "Career Level Adjustments",
      content: "How your summary should evolve as you progress through different career stages to match expectations at each level.",
      tips: [
        "Entry-level: Focus on education, skills, and potential",
        "Mid-career: Emphasize achievements and specialization",
        "Senior: Highlight leadership, strategy, and business impact",
        "Executive: Focus on vision, growth, and organizational leadership",
        "Career change: Emphasize transferable skills and passion",
        "Returning workforce: Focus on updated skills and commitment"
      ],
      example: `Executive: Chief Operations Officer with 15+ years driving operational excellence in manufacturing. Led $500M division achieving 25% YOY growth while reducing operational costs by 18%. Expert in supply chain optimization and digital transformation for global enterprises.`,
      image: "https://www.professionalresumefree.com/images/career-level.jpg"
    },
    {
      title: "Avoiding Common Pitfalls",
      content: "Mistakes that immediately turn off recruiters and ATS systems. Learn what to avoid to maximize your chances.",
      tips: [
        "Avoid clichés ('hard worker', 'team player')",
        "Don't use first-person pronouns excessively",
        "Never include personal information or photos",
        "Keep it to 3-4 lines maximum",
        "Always customize for each application",
        "Avoid outdated terminology and formats"
      ],
      example: `❌ DON'T: "Hard-working professional seeking challenging position where I can utilize my skills."
      
✅ DO: "Strategic Product Manager with 5+ years launching successful SaaS products, increasing user adoption by 200% and driving $10M+ in annual revenue."`,
      image: "https://www.professionalresumefree.com/images/common-pitfalls.jpg"
    }
  ];

  // Enhanced summary examples with more data
  const summaryExamples = [
    {
      title: "Entry-Level (0-3 years experience)",
      description: "Focus on education, skills, and potential rather than extensive work history. Ideal for recent graduates and career starters.",
      structure: "Degree + Skills + Career Objective",
      example: `Recent Computer Science graduate with Bachelor's degree specializing in data structures and algorithms. Developed 5+ full-stack applications using React and Node.js during coursework. Seeking Junior Developer position to contribute to innovative software solutions while expanding technical expertise.`,
      keywords: ["Recent graduate", "Bachelor's degree", "Full-stack development", "React", "Node.js", "Software solutions", "Programming", "Problem-solving"],
      careerLevel: "Entry",
      industries: ["Technology", "Software Development", "IT"]
    },
    {
      title: "Mid-Career (3-7 years experience)",
      description: "Balance skills with specific achievements and growing specialization. Demonstrates proven track record.",
      structure: "Experience + Achievements + Target Role",
      example: `Marketing Manager with 5+ years developing integrated campaigns for tech startups. Increased brand awareness by 300% and generated $2M+ in qualified leads through strategic content marketing. Seeking to leverage growth marketing expertise in a Series B+ technology company.`,
      keywords: ["Marketing Manager", "Integrated campaigns", "Brand awareness", "Content marketing", "Qualified leads", "Growth marketing", "Strategy", "Analytics"],
      careerLevel: "Mid",
      industries: ["Marketing", "Technology", "Business Development"]
    },
    {
      title: "Senior Professional (7-15 years experience)",
      description: "Emphasize leadership, strategic impact, and measurable business results. Shows industry authority.",
      structure: "Leadership + Business Impact + Specialization",
      example: `Senior Product Director with 12+ years leading cross-functional teams in enterprise software. Drove product strategy resulting in 400% market share growth and $50M+ annual revenue. Expert in Agile methodology, user-centered design, and go-to-market strategy for B2B SaaS products.`,
      keywords: ["Senior Product Director", "Cross-functional teams", "Product strategy", "Market share growth", "Agile methodology", "B2B SaaS", "Leadership", "Revenue growth"],
      careerLevel: "Senior",
      industries: ["Product Management", "Technology", "SaaS"]
    },
    {
      title: "Executive Level (15+ years experience)",
      description: "Focus on vision, organizational leadership, and transformative business impact. Demonstrates industry leadership.",
      structure: "Leadership Vision + Transformational Results + Industry Authority",
      example: `Chief Technology Officer with 20+ years driving digital transformation and technical innovation. Led 500+ engineer organization through successful IPO, scaling infrastructure to support 10M+ users. Recognized industry speaker on AI implementation and cloud architecture strategy.`,
      keywords: ["Chief Technology Officer", "Digital transformation", "Technical innovation", "IPO", "Infrastructure scaling", "AI implementation", "Cloud architecture", "Leadership"],
      careerLevel: "Executive",
      industries: ["Technology", "Executive Leadership", "Digital Transformation"]
    }
  ];

  // Enhanced industry examples
  const industryExamples = [
    {
      industry: "Technology & Software",
      example: `Senior DevOps Engineer with 8+ years optimizing cloud infrastructure for high-traffic applications. Reduced system downtime by 99.9% and cut hosting costs by 40% through AWS optimization. Certified AWS Solutions Architect specializing in containerization and CI/CD pipelines.`,
      keywords: "AWS, Kubernetes, CI/CD, infrastructure, scalability, automation, cloud migration, DevOps",
      icon: "🖥️",
      demand: "High"
    },
    {
      industry: "Healthcare & Medical",
      example: `Board-Certified Physician Assistant with 6+ years in emergency medicine and urgent care. Managed 50+ patients daily with 98% satisfaction scores, reducing wait times by 35%. Specializing in acute care management and emergency response protocols.`,
      keywords: "Board-certified, patient care, emergency medicine, satisfaction scores, healthcare, medical, ACLS, PALS",
      icon: "🏥",
      demand: "Very High"
    },
    {
      industry: "Finance & Banking",
      example: `CFA Charterholder with 10+ years in investment banking and portfolio management. Generated average annual returns of 15% across $500M+ asset portfolio. Expert in risk assessment, financial modeling, and regulatory compliance for institutional clients.`,
      keywords: "CFA, investment banking, portfolio management, risk assessment, financial modeling, compliance, finance",
      icon: "💰",
      demand: "High"
    },
    {
      industry: "Sales & Business Development",
      example: `Enterprise Sales Director with 12+ years exceeding quotas in SaaS and technology sales. Closed $100M+ in enterprise deals, including 5 Fortune 500 accounts. Specializing in complex sales cycles, strategic partnerships, and team leadership for high-growth markets.`,
      keywords: "Enterprise sales, SaaS, quota achievement, strategic partnerships, team leadership, business development",
      icon: "📈",
      demand: "High"
    },
    {
      industry: "Education & Academia",
      example: `Education Director with 8+ years in curriculum development and instructional leadership. Improved student achievement scores by 25% district-wide through data-driven teaching strategies. Expert in educational technology integration and teacher professional development.`,
      keywords: "Education, curriculum development, instructional leadership, student achievement, edtech, professional development",
      icon: "🎓",
      demand: "Medium"
    },
    {
      industry: "Engineering & Manufacturing",
      example: `Mechanical Engineering Manager with 10+ years in automotive manufacturing. Led teams reducing production costs by 30% while improving quality metrics by 25%. Specializing in lean manufacturing, process optimization, and quality assurance systems.`,
      keywords: "Engineering, manufacturing, process optimization, lean manufacturing, quality assurance, automotive",
      icon: "⚙️",
      demand: "Medium-High"
    }
  ];

  const stats = [
    {
      value: "6 sec",
      label: "Average time recruiters spend on initial resume review",
      icon: <FiClock className={styles.statIcon} />,
      description: "Your summary must capture attention immediately"
    },
    {
      value: "80%",
      label: "Resumes rejected before summary is fully read",
      icon: <FiTarget className={styles.statIcon} />,
      description: "Poor summaries lead to instant rejection"
    },
    {
      value: "3x",
      label: "More interviews with strong professional summaries",
      icon: <FiTrendingUp className={styles.statIcon} />,
      description: "Effective summaries triple interview chances"
    },
    {
      value: "94%",
      label: "ATS systems that scan summaries first",
      icon: <FiSearch className={styles.statIcon} />,
      description: "Keywords in summary are critical for ATS"
    }
  ];

  const commonMistakes = [
    "Using generic phrases like 'hard worker' or 'team player'",
    "Writing in first person instead of professional third person",
    "Including irrelevant personal information or hobbies",
    "Making it too long (ideal: 3-4 lines, 50-100 words)",
    "Not customizing for specific job applications",
    "Focusing on responsibilities instead of achievements",
    "Forgetting to include quantifiable results",
    "Using clichés and overused business jargon",
    "Not including industry-specific keywords",
    "Making it too generic without specific targeting"
  ];

  // Breadcrumb data
  const breadcrumbData = [
    { name: "Home", item: "https://www.professionalresumefree.com/" },
    { name: "Resume Writing Guides", item: "https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" },
    { name: "Professional Summary Guide", item: "https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" }
  ];

  // Copy to clipboard function
  const handleCopyExample = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText('Copied!');
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Enhanced structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds/#webpage",
        "url": "https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds",
        "name": "How to Write a Professional Summary That Hooks Recruiters in 6 Seconds - 2026 Guide",
        "description": "Comprehensive guide to writing professional summaries that capture attention in 6 seconds. Get examples for every career level, industry templates, ATS optimization tips, and proven formulas that work. 2026 Edition",
        "datePublished": "2024-01-01",
        "dateModified": lastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.professionalresumefree.com/#website",
          "url": "https://www.professionalresumefree.com",
          "name": "Professional Resume Free",
          "description": "Free professional resume builder and career resources for job seekers worldwide",
          "publisher": {
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
              "https://www.facebook.com/ProfessionalResumeFree",
              "https://www.youtube.com/@ProfessionalResumeFree"
            ]
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.professionalresumefree.com/images/og-professional-summary-guide.jpg",
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbData.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.item
          }))
        }
      },
      {
        "@type": "Article",
        "headline": "How to Write a Professional Summary That Hooks Recruiters in 6 Seconds",
        "description": "A comprehensive guide to writing effective professional summaries for resumes that capture recruiter attention within 6 seconds, including examples for different career levels and industries.",
        "image": "https://www.professionalresumefree.com/images/og-professional-summary-guide.jpg",
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "url": "https://www.professionalresumefree.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.professionalresumefree.com/logo.png",
            "width": 512,
            "height": 512
          }
        },
        "datePublished": currentDate,
        "dateModified": lastModifiedDate.split('T')[0],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds/#webpage"
        },
        "articleSection": "Career Resources",
        "keywords": "professional summary, resume writing, career advice, job search, resume tips, ATS optimization, summary examples, career level summaries, industry templates",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".heroTitle", ".heroSubtitle", ".sectionTitle", ".contentTitle"]
        },
        "wordCount": 3500,
        "timeRequired": "PT8M"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.professionalresumefree.com/how-to-write-a-professional-summary/#faqpage",
        "mainEntity": faqs.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": faq.date,
            "author": {
              "@type": "Organization",
              "name": "Professional Resume Free"
            }
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Write a Professional Summary That Hooks Recruiters in 6 Seconds",
        "description": "Step-by-step guide to writing effective professional summaries for resumes",
        "totalTime": "PT8M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": summarySections.map((section, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": section.title,
          "text": section.content,
          "url": `https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds#step-${index + 1}`,
          "image": section.image
        }))
      },
      {
        "@type": "ItemList",
        "name": "Professional Summary Examples by Career Level",
        "itemListElement": summaryExamples.map((example, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "CreativeWork",
            "name": example.title,
            "description": example.description,
            "text": example.example,
            "keywords": example.keywords.join(", ")
          }
        }))
      },
      {
        "@type": "Service",
        "serviceType": "Professional Summary Writing Service",
        "provider": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Global"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Free Resume Writing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Summary Writing Guide"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Career Level Summary Templates"
              }
            }
          ]
        },
        "description": "Free professional summary writing guide and templates for job seekers",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".heroTitle", ".heroSubtitle", ".faqItem h3", ".sectionTitle"]
      }
    ]
  };

  return (
    <div className={styles.landingPage} lang="en-US">
      <Head>
        {/* Primary Meta Tags */}
        <title>How to Write a Professional Summary That Hooks Recruiters in 6 Seconds - 2026 Guide | Professional Resume Free</title>
        <meta 
          name="description" 
          content="Learn to write professional summaries that capture attention in 6 seconds. Get examples for every career level and industry with proven formulas that work. 2026 Edition"
        />
        <meta name="keywords" content="
          professional summary examples,
          how to write a professional summary,
          resume summary statement,
          career summary examples,
          professional summary for resume,
          resume summary 2026,
          summary statement examples,
          professional profile examples,
          resume introduction examples,
          career objective vs summary,
          executive summary resume,
          entry level summary examples,
          senior level summary examples,
          ATS friendly summary,
          resume summary tips,
          professional summary format,
          summary for job application,
          resume headline examples,
          professional summary writing,
          summary statement for resume,
          career summary template,
          professional summary guide,
          resume summary best practices,
          summary examples for jobs,
          professional profile summary,
          resume summary statement examples,
          how to write summary for resume,
          professional summary samples,
          resume summary 2026 examples,
          career level summary examples,
          6 second resume summary,
          hook recruiters with summary,
          professional summary that gets interviews,
          ATS optimized summary examples,
          career change summary examples
        " />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Date and Freshness Meta Tags */}
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical and Sitemap */}
        <link rel="canonical" href="https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Internationalization */}
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" hreflang="x-default" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How to Write a Professional Summary That Hooks Recruiters in 6 Seconds - 2026 Guide" />
        <meta property="og:description" content="Learn to write professional summaries that capture attention in 6 seconds. Get examples for every career level and industry with proven formulas that work." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-professional-summary-guide.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Professional Summary Writing Guide - Examples and Templates" />
        <meta property="og:url" content="https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={lastModifiedDate} />
        <meta property="article:published_time" content={`${currentDate}T00:00:00+00:00`} />
        <meta property="article:modified_time" content={lastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="professional summary, resume writing, career advice, job search" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Summary Guide: Hook Recruiters in 6 Seconds - 2026" />
        <meta name="twitter:description" content="Learn to write professional summaries that capture attention in 6 seconds. Get examples for every career level and industry with proven formulas." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-professional-summary-guide.jpg" />
        <meta name="twitter:image:alt" content="Professional Summary Writing Guide with Examples" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content="8 minutes" />
        <meta name="twitter:label2" content="Examples included" />
        <meta name="twitter:data2" content="25+" />
        
        {/* Theme and Icons */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Performance Optimization */}
        <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Freshness Indicator */}
      <div className={styles.freshnessIndicator} style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbData.map((item, index) => (
            <li 
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && <span className={styles.breadcrumbSeparator}>›</span>}
              <Link
                href={item.item}
                itemProp="item"
                className={styles.breadcrumbLink}
              >
                {index === 0 && <FiHome className={styles.breadcrumbIcon} />}
                <span itemProp="name">{item.name}</span>
              </Link>
              <meta itemProp="position" content={index + 1} />
            </li>
          ))}
        </ol>
      </nav>

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.trustBadge}>
              <FiStar className={styles.starIcon} />
              <span className={styles.trustBadgeText}>
                Resume Writing Guide 2026 | Proven Results
              </span>
            </div>
            
            <h1 className={styles.heroTitle}>
              How to Write a <span className={styles.gradientText}>Professional Summary</span> That Hooks Recruiters in 6 Seconds
            </h1>
            
            <p className={styles.heroSubtitle}>
              <strong className={styles.heroHighlight}>Get 3x more interviews</strong> with our proven 6-second formula. 
              Comprehensive guide with <strong>examples for every career level and industry</strong>. 
              ATS-optimized templates included.
            </p>

            <div className={styles.ctaButtons}>
              <Link
                href="/resume-templates"
                className={`${styles.button} ${styles.primaryButton}`}
                aria-label="Start building your resume with professional summary templates"
                prefetch={false}
              >
                <span className={styles.buttonText}>Build Your Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </Link>
              
              <Link
                href="/free-resume-tools"
                className={`${styles.button} ${styles.secondaryButton}`}
                aria-label="Explore free resume tools including ATS checker and resume builder"
                prefetch={false}
              >
                <FiTool className={styles.buttonIcon} />
                <span className={styles.buttonText}>Free Resume Tools</span>
              </Link>
              
              <Link
                href="/resume-writing-guide"
                className={`${styles.button} ${styles.secondaryButton}`}
                aria-label="Browse complete resume writing guide"
                prefetch={false}
              >
                <FiLayers className={styles.buttonIcon} />
                <span className={styles.buttonText}>Resume Guides</span>
              </Link>
            </div>

            <div className={styles.heroStats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statIconContainer}>
                    {stat.icon}
                  </div>
                  <span className={styles.statNumber}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                  <span className={styles.statDescription}>{stat.description}</span>
                </div>
              ))}
            </div>

            <div className={styles.heroFeatures}>
              <p className={styles.featuresTitle}>What You'll Learn:</p>
              <div className={styles.featuresGrid}>
                <span className={styles.featureBadge}>✓ 6-Second Hook Formula</span>
                <span className={styles.featureBadge}>✓ Career Level Examples</span>
                <span className={styles.featureBadge}>✓ Industry-Specific Templates</span>
                <span className={styles.featureBadge}>✓ ATS Optimization Tips</span>
                <span className={styles.featureBadge}>✓ Common Mistakes to Avoid</span>
                <span className={styles.featureBadge}>✓ 2026 Best Practices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <p className={styles.leadText}>
              Your professional summary is the <strong>most critical 6 seconds of your resume</strong>. 
              Recruiters spend an average of 6 seconds on initial resume screening, and 
              <strong> 80% of resumes are rejected before the summary is fully read</strong>. 
              This comprehensive 2026 guide provides proven formulas and real examples to ensure your summary 
              <strong> captures attention, communicates value, and gets you interviews</strong>.
            </p>
            <div className={styles.introHighlights}>
              <div className={styles.highlightItem}>
                <FiClock className={styles.highlightIcon} />
                <span>6-Second Capture Formula</span>
              </div>
              <div className={styles.highlightItem}>
                <FiUsers className={styles.highlightIcon} />
                <span>4 Career Level Examples</span>
              </div>
              <div className={styles.highlightItem}>
                <FiBriefcase className={styles.highlightIcon} />
                <span>6 Industry Templates</span>
              </div>
              <div className={styles.highlightItem}>
                <FiCheck className={styles.highlightIcon} />
                <span>10 Common Mistakes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.typesSection} aria-labelledby="career-levels-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="career-levels-title">Professional Summary Examples for Every Career Level</h2>
            <p className={styles.sectionSubtitle}>
              Customized examples that work for <strong>entry-level to executive positions</strong>
            </p>
          </div>
          <div className={styles.typesGrid}>
            {summaryExamples.map((type, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{type.title}</h3>
                  <div className={styles.cardMeta}>
                    <span className={styles.careerLevel}>{type.careerLevel} Level</span>
                    <span className={styles.industries}>{type.industries.join(", ")}</span>
                  </div>
                </div>
                <p className={styles.cardDescription}>{type.description}</p>
                <div className={styles.cardStructure}>
                  <FiFileText className={styles.structureIcon} />
                  <strong>Structure:</strong> {type.structure}
                </div>
                <div className={styles.cardExample}>
                  <pre className={styles.exampleText}>
                    {type.example}
                  </pre>
                  <button 
                    className={styles.copyButton}
                    onClick={() => handleCopyExample(type.example)}
                    aria-label="Copy example text"
                  >
                    <FiCopy className={styles.copyIcon} />
                    {copiedText === type.example ? 'Copied!' : 'Copy Example'}
                  </button>
                </div>
                <div className={styles.cardTips}>
                  <h4>Key Keywords for ATS:</h4>
                  <div className={styles.keywordsList}>
                    {type.keywords.map((keyword, tipIndex) => (
                      <span key={tipIndex} className={styles.keyword}>
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="guide" className={styles.guideSection} aria-labelledby="guide-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="guide-title">Step-by-Step Professional Summary Writing Guide</h2>
            <p className={styles.sectionSubtitle}>
              Follow this <strong>proven 6-second formula</strong> to create compelling summaries that work
            </p>
          </div>

          <div className={styles.guideNavigation}>
            {summarySections.map((section, index) => (
              <button
                key={index}
                className={`${styles.guideTab} ${index === activeSection ? styles.active : ''}`}
                onClick={() => setActiveSection(index)}
                aria-label={`View ${section.title}`}
                id={`step-${index + 1}`}
              >
                <div className={styles.tabNumber}>{index + 1}</div>
                <span>{section.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.guideContent}>
            <div className={styles.contentHeader}>
              <h3 className={styles.contentTitle}>
                {summarySections[activeSection].title}
              </h3>
              <p className={styles.contentDescription}>
                {summarySections[activeSection].content}
              </p>
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.tipsColumn}>
                <h4 className={styles.tipsTitle}>
                  <FiCheck className={styles.tipsIcon} />
                  Key Guidelines
                </h4>
                <ul className={styles.tipsList}>
                  {summarySections[activeSection].tips.map((tip, index) => (
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
                    {summarySections[activeSection].example}
                  </pre>
                  <button 
                    className={styles.copyButton}
                    onClick={() => handleCopyExample(summarySections[activeSection].example)}
                    aria-label="Copy example text"
                  >
                    <FiCopy className={styles.copyIcon} />
                    {copiedText === summarySections[activeSection].example ? 'Copied!' : 'Copy Example'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.industrySection} aria-labelledby="industry-templates-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="industry-templates-title">Industry-Specific Professional Summary Examples</h2>
            <p className={styles.sectionSubtitle}>
              Tailored examples for <strong>different professional fields and industries</strong>
            </p>
          </div>
          <div className={styles.industryGrid}>
            {industryExamples.map((industry, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{industry.industry}</h3>
                  <div className={styles.industryMeta}>
                    <span className={styles.industryIcon}>{industry.icon}</span>
                    <span className={styles.industryDemand}>Demand: {industry.demand}</span>
                  </div>
                </div>
                <div className={styles.cardExample}>
                  <pre className={styles.exampleText}>
                    {industry.example}
                  </pre>
                  <button 
                    className={styles.copyButton}
                    onClick={() => handleCopyExample(industry.example)}
                    aria-label={`Copy ${industry.industry} example`}
                  >
                    <FiCopy className={styles.copyIcon} />
                    Copy Example
                  </button>
                </div>
                <div className={styles.industryKeywords}>
                  <FiSearch className={styles.keywordsIcon} />
                  <strong>Key Terms for ATS:</strong> {industry.keywords}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.mistakesSection} aria-labelledby="mistakes-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="mistakes-title">Common Professional Summary Mistakes to Avoid</h2>
            <p className={styles.sectionSubtitle}>
              Steer clear of these <strong>costly errors</strong> that immediately turn off recruiters and ATS systems
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
            <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions About Professional Summaries</h2>
            <p className={styles.sectionSubtitle}>
              Expert answers to common questions about writing effective professional summaries
            </p>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className={styles.faqQuestion} itemProp="name">{faq.question}</h3>
                <div className={styles.faqAnswer} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">{faq.answer}</p>
                  <meta itemProp="datePublished" content={faq.date} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle} id="cta-title">
              Create Your 6-Second Professional Summary Today
            </h2>
            <p className={styles.ctaSubtitle}>
              Use our free tools to create customized professional summaries 
              that capture attention and get results for your specific career level and industry.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link
                href="/free-resume-summary-generator"
                className={`${styles.button} ${styles.primaryButton}`}
                aria-label="Start building your resume with professional summary templates"
                prefetch={false}
              >
                <span className={styles.buttonText}>Free Resume Summary Generator</span>
                <FiArrowRight className={styles.buttonIcon} />
              </Link>
              
              <Link
                href="/free-resume-tools"
                className={`${styles.button} ${styles.secondaryButton}`}
                aria-label="Explore free resume writing tools"
                prefetch={false}
              >
                <FiTool className={styles.buttonIcon} />
                <span className={styles.buttonText}>Free Resume Tools</span>
              </Link>
            </div>
            
            <div className={styles.ctaGuarantee}>
              
              
            </div>
            
            <div className={styles.ctaFeatures}>
              <div className={styles.featureItem}>
                <FiCheck className={styles.featureCheck} />
                <span>6-Second Hook Formula</span>
              </div>
              <div className={styles.featureItem}>
                <FiCheck className={styles.featureCheck} />
                <span>Career Level Customization</span>
              </div>
              <div className={styles.featureItem}>
                <FiCheck className={styles.featureCheck} />
                <span>Industry-Specific Templates</span>
              </div>
              <div className={styles.featureItem}>
                <FiCheck className={styles.featureCheck} />
                <span>ATS Keyword Optimization</span>
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
  
  // Format: YYYY-MM-DD
  const currentDate = buildTime.toISOString().split('T')[0];
  
  // Full ISO 8601 string
  const lastModifiedDate = buildTime.toISOString();
  
  // Freshness indicator
  const freshnessIndicator = currentDate;

  return {
    props: {
      currentDate,
      lastModifiedDate,
      freshnessIndicator,
      buildTimestamp
    },
    // Revalidate every 12 hours for fresh content
    revalidate: 3600,
  };
}

export default ProfessionalSummaryGuide;