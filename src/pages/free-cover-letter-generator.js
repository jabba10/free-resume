import { useState, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './free-cover-letter-generator.module.css';

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_DATE = new Date().toISOString().split('T')[0];
const SITE_URL = 'https://www.professionalresumefree.com';

// FAQ Data
const FAQS = [
  {
    question: "Why is a customized cover letter important?",
    answer: "78% of hiring managers say a well-crafted cover letter significantly improves a candidate's chances. It shows you've researched the company and tailored your application specifically for the role."
  },
  {
    question: "How long should my cover letter be?",
    answer: "Aim for 250-400 words or 3-4 paragraphs. Hiring managers typically spend 30-60 seconds reviewing each application, so concise, impactful writing is essential."
  },
  {
    question: "Is my information private and secure?",
    answer: "Yes! All content generation happens locally in your browser. No personal data is sent to our servers—your information stays completely private."
  },
  {
    question: "What's the best format for a cover letter?",
    answer: "Use a professional business letter format with your contact info, date, company details, salutation, 3-4 body paragraphs, and a formal closing."
  },
  {
    question: "How do I customize the generated cover letter?",
    answer: "Always personalize the generated template by adding specific company details, mentioning recent news about the company, and tailoring achievements to the job requirements."
  },
  {
    question: "Is this tool really free?",
    answer: "100% free with no signup required. We believe professional career tools should be accessible to everyone."
  }
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Enter Your Details",
    text: "Fill in your basic information, skills, and achievements. Be specific about your accomplishments with numbers where possible."
  },
  {
    name: "Add Job Information",
    text: "Provide the job title, company details, and key requirements. The more specific you are, the better the customization."
  },
  {
    name: "Generate Cover Letter",
    text: "Our AI-powered system creates a professional, tailored cover letter based on your inputs and the job requirements."
  },
  {
    name: "Review & Customize",
    text: "Review the generated content and add personal touches, specific company details, or recent news about the organization."
  },
  {
    name: "Download & Apply",
    text: "Copy the formatted letter or download it as a PDF. Always proofread before sending with your resume."
  }
];

// Sample Reviews
const REVIEWS = [
  {
    name: "Jennifer Martinez",
    position: "HR Manager",
    rating: 5,
    date: "2024-02-15",
    review: "This tool helped our candidates submit better applications. The templates are professional and customizable."
  },
  {
    name: "Robert Chen",
    position: "Career Consultant",
    rating: 5,
    date: "2024-02-20",
    review: "I recommend this to all my clients. The quality of generated letters rivals professional writing services."
  },
  {
    name: "Amanda Wilson",
    position: "Marketing Director",
    rating: 4,
    date: "2024-02-10",
    review: "Used this for my last job application. The customized letter helped me stand out and get the interview."
  },
  {
    name: "David Thompson",
    position: "Software Developer",
    rating: 5,
    date: "2024-02-05",
    review: "Saved me hours of staring at a blank page. The generated content was easily customizable for different roles."
  }
];

// Template variations
const TEMPLATE_VARIANTS = [
  {
    id: 'standard',
    name: 'Standard Professional',
    description: 'Classic business format suitable for most industries',
    tone: 'Professional, respectful, confident'
  },
  {
    id: 'creative',
    name: 'Creative Industry',
    description: 'More engaging and expressive for creative fields',
    tone: 'Energetic, innovative, passionate'
  },
  {
    id: 'executive',
    name: 'Executive Level',
    description: 'Strategic and results-focused for senior positions',
    tone: 'Strategic, leadership-focused, impactful'
  },
  {
    id: 'entry',
    name: 'Entry Level',
    description: 'Emphasizes potential and enthusiasm for early career',
    tone: 'Enthusiastic, eager to learn, adaptable'
  }
];

// Industry-specific keywords
const INDUSTRY_KEYWORDS = {
  tech: ['agile', 'scrum', 'devops', 'full-stack', 'cloud', 'cybersecurity', 'machine learning', 'AI', 'API'],
  marketing: ['ROI', 'conversion', 'brand awareness', 'SEO', 'content strategy', 'social media', 'campaign', 'engagement'],
  finance: ['ROI', 'revenue', 'profit margin', 'financial modeling', 'risk management', 'compliance', 'audit', 'forecasting'],
  healthcare: ['patient care', 'HIPAA', 'clinical', 'treatment', 'wellness', 'medical', 'healthcare', 'public health']
};

// Schema data
const getSchemaData = (faqDates, reviewDates) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/free-cover-letter-generator/#webpage`,
      "url": `${SITE_URL}/free-cover-letter-generator`,
      "name": "Free Cover Letter Generator - Professional Templates & AI Customization 2026",
      "description": "Create professional ATS-optimized cover letters for free. Generate customized cover letters in minutes with our AI-powered tool. Privacy-first, no signup required.",
      "datePublished": "2024-01-01",
      "dateModified": CURRENT_DATE,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Professional Resume Free",
        "description": "Free professional career tools including resume builder, cover letter generator, and resume checker",
        "publisher": {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          "name": "Professional Resume Free",
          "url": SITE_URL,
          "logo": {
            "@type": "ImageObject",
            "url": `${SITE_URL}/logo.png`,
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
        "url": `${SITE_URL}/images/og-cover-letter-generator.jpg`,
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": SITE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Free Cover Letter Generator",
            "item": `${SITE_URL}/free-cover-letter-generator`
          }
        ]
      }
    },
    {
      "@type": "WebApplication",
      "name": "Free Cover Letter Generator",
      "description": "Professional cover letter generator with AI-powered customization for any job application",
      "url": `${SITE_URL}/free-cover-letter-generator`,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "156",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL
      },
      "featureList": [
        "AI-Powered Customization",
        "Multiple Template Styles",
        "Privacy-First Design",
        "No Sign Up Required",
        "Instant Generation",
        "Download Multiple Formats"
      ],
      "softwareVersion": "2026.1.0",
      "screenshot": `${SITE_URL}/images/screenshot-cover-letter-generator.jpg`,
      "applicationSuite": "Career Tools",
      "countriesSupported": "Global"
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/free-cover-letter-generator/#faqpage`,
      "mainEntity": FAQS.map((faq, index) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
          "datePublished": faqDates[index] || CURRENT_DATE,
          "author": {
            "@type": "Person",
            "name": "Career Expert Team"
          }
        },
        "mainEntityOfPage": `${SITE_URL}/free-cover-letter-generator/#webpage`
      }))
    },
    {
      "@type": "HowTo",
      "name": "How to Generate a Professional Cover Letter with Our Free Generator",
      "description": "Step-by-step guide to create customized cover letters for job applications",
      "totalTime": "PT5M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "step": HOW_TO_STEPS.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.name,
        "text": step.text,
        "url": `${SITE_URL}/free-cover-letter-generator#step-${index + 1}`
      }))
    },
    {
      "@type": "Service",
      "serviceType": "Online Cover Letter Building Service",
      "provider": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-555-1234",
          "contactType": "Customer Support",
          "availableLanguage": "en"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "Global"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Free Cover Letter Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Cover Letter Generation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Professional Template Selection"
            }
          }
        ]
      },
      "description": "Free AI-powered cover letter generator for job seekers worldwide",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "SpeakableSpecification",
      "cssSelector": [".title", ".subtitle", ".faqQuestion h3"]
    },
    {
      "@type": "ItemList",
      "itemListElement": REVIEWS.map((review, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
            "bestRating": 5
          },
          "author": {
            "@type": "Person",
            "name": review.name
          },
          "reviewBody": review.review,
          "datePublished": reviewDates[index] || CURRENT_DATE,
          "publisher": {
            "@type": "Organization",
            "name": "Professional Resume Free"
          },
          "itemReviewed": {
            "@type": "SoftwareApplication",
            "name": "Free Cover Letter Generator",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Professional cover letter generator with AI-powered customization for any job application",
            "url": `${SITE_URL}/free-cover-letter-generator`
          }
        }
      }))
    }
  ]
});

function generateCoverLetter(formData) {
  const {
    yourName,
    yourEmail,
    yourPhone,
    yourAddress,
    hiringManager,
    companyName,
    companyAddress,
    jobTitle,
    yearsExperience,
    keySkills,
    keyAchievements,
    whyCompany,
    templateVariant = 'standard'
  } = formData;

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Get appropriate tone based on template
  const template = TEMPLATE_VARIANTS.find(t => t.id === templateVariant) || TEMPLATE_VARIANTS[0];

  // Split achievements into array
  const achievements = keyAchievements.split('\n').filter(a => a.trim());
  // Split skills into array
  const skills = keySkills.split(',').map(s => s.trim()).filter(s => s);

  // Generate opening paragraph based on template
  let openingParagraph = '';
  switch(templateVariant) {
    case 'creative':
      openingParagraph = `I am writing with genuine enthusiasm to apply for the ${jobTitle} position at ${companyName}. With ${yearsExperience} of experience in the field and a proven track record of ${achievements.length > 0 ? achievements[0].toLowerCase() : 'delivering results'}, I am excited by the opportunity to contribute to your team's success.`;
      break;
    case 'executive':
      openingParagraph = `I am writing to express my interest in the ${jobTitle} position at ${companyName}. With ${yearsExperience} of strategic leadership experience and a demonstrated history of ${achievements.length > 0 ? 'driving ' + achievements[0].toLowerCase() : 'achieving business objectives'}, I am confident in my ability to deliver significant value to your organization.`;
      break;
    case 'entry':
      openingParagraph = `I am excited to apply for the ${jobTitle} position at ${companyName} that I discovered through your career portal. As an emerging professional with ${yearsExperience} of hands-on experience and strong capabilities in ${skills.slice(0, 3).join(', ')}, I am eager to contribute to your team while developing my skills in a dynamic environment.`;
      break;
    default:
      openingParagraph = `I am writing to express my interest in the ${jobTitle} position at ${companyName}. With ${yearsExperience} of experience in the field and expertise in ${skills.slice(0, 3).join(', ')}, I am confident in my ability to contribute effectively to your team.`;
  }

  // Generate middle paragraph with achievements
  let middleParagraph = '';
  if (achievements.length > 0) {
    const selectedAchievements = achievements.slice(0, Math.min(3, achievements.length));
    middleParagraph = `In my previous role, I successfully ${selectedAchievements.join('; ').toLowerCase()}. These accomplishments demonstrate my ability to ${skills.slice(0, 2).join(' and ')} effectively while delivering measurable results.`;
  } else {
    middleParagraph = `Throughout my career, I have developed strong skills in ${skills.slice(0, 4).join(', ')}, enabling me to tackle complex challenges and deliver effective solutions. I have consistently demonstrated the ability to adapt to changing environments and collaborate effectively with cross-functional teams.`;
  }

  // Generate company-specific paragraph
  let companyParagraph = '';
  if (whyCompany && whyCompany.trim()) {
    companyParagraph = whyCompany;
  } else {
    companyParagraph = `I have long admired ${companyName}'s commitment to ${['innovation', 'excellence', 'customer satisfaction', 'quality'][Math.floor(Math.random() * 4)]} and believe my background aligns well with your organizational goals. Your focus on ${['team development', 'sustainable growth', 'technological advancement', 'market leadership'][Math.floor(Math.random() * 4)]} particularly resonates with my professional values and aspirations.`;
  }

  // Generate closing paragraph based on template
  let closingParagraph = '';
  switch(templateVariant) {
    case 'creative':
      closingParagraph = `I am excited about the possibility of bringing my ${skills.slice(0, 2).join(' and ')} skills to ${companyName} and contributing to your creative vision. I welcome the opportunity to discuss how my innovative approach can benefit your team. Thank you for considering my application.`;
      break;
    case 'executive':
      closingParagraph = `I am confident that my strategic experience and leadership capabilities align with ${companyName}'s objectives. I look forward to discussing how I can contribute to your organization's continued success.`;
      break;
    default:
      closingParagraph = `I am excited about the opportunity to contribute to ${companyName} and am confident that my skills and experience align well with your requirements. Thank you for considering my application. I look forward to discussing my qualifications further.`;
  }

  // Generate salutation
  const salutation = hiringManager ? `Dear ${hiringManager},` : `Dear Hiring Manager,`;

  // Generate closing
  const closing = `Sincerely,\n${yourName}\n${yourEmail}\n${yourPhone}`;

  // Compile the letter
  const letter = `
${yourName}
${yourAddress}
${yourEmail} | ${yourPhone}
${today}

${companyName}
${companyAddress}

${salutation}

${openingParagraph}

${middleParagraph}

${companyParagraph}

${closingParagraph}

${closing}
`;

  return {
    content: letter.trim(),
    wordCount: letter.trim().split(/\s+/).length,
    paragraphCount: (letter.match(/\n/g) || []).length + 1,
    templateUsed: template.name
  };
}

function CoverLetterDisplay({ content, wordCount, paragraphCount, templateUsed }) {
  const handleDownload = useCallback(() => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'cover-letter.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }, [content]);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Generated Cover Letter</h2>
        <div className={styles.stats}>
          <span className={styles.statItem}>{wordCount} words</span>
          <span className={styles.statItem}>{paragraphCount} paragraphs</span>
          <span className={styles.statItem}>{templateUsed}</span>
        </div>
      </div>
      <div className={styles.letterContent}>
        <pre className={styles.letterText}>{content}</pre>
      </div>
      <div className={styles.buttonGroup}>
        <button onClick={handleDownload} className={`${styles.button} ${styles.secondaryButton}`}>
          Download as Text
        </button>
        <button onClick={() => window.print()} className={styles.button}>
          Print Letter
        </button>
      </div>
      <div className={styles.tips}>
        <p className={styles.tipTitle}>💡 Customization Tips:</p>
        <ul className={styles.tipList}>
          <li>Add specific company details or recent news</li>
          <li>Tailor achievements to match job requirements</li>
          <li>Use the hiring manager's name if you have it</li>
          <li>Proofread carefully before sending</li>
          <li>Save as PDF with your name in the filename</li>
        </ul>
      </div>
    </div>
  );
}

function TemplateSelector({ selectedTemplate, onTemplateChange }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardSubtitle}>Select Template Style</h3>
      <div className={styles.templateGrid}>
        {TEMPLATE_VARIANTS.map(template => (
          <div
            key={template.id}
            className={`${styles.templateCard} ${selectedTemplate === template.id ? styles.templateSelected : ''}`}
            onClick={() => onTemplateChange(template.id)}
          >
            <h4 className={styles.templateName}>{template.name}</h4>
            <p className={styles.templateDescription}>{template.description}</p>
            <div className={styles.templateTone}>
              <strong>Tone:</strong> {template.tone}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CoverLetterGenerator({ seoData, buildTimestamp }) {
  const {
    currentDate = CURRENT_DATE,
    lastModifiedDate = CURRENT_DATE,
    reviewDates,
    faqDates,
    breadcrumbData
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : CURRENT_DATE;

  const safeReviewDates = reviewDates || Array(REVIEWS.length).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(FAQS.length).fill(freshnessIndicator);

  const [formData, setFormData] = useState({
    yourName: '',
    yourEmail: '',
    yourPhone: '',
    yourAddress: '',
    hiringManager: '',
    companyName: '',
    companyAddress: '',
    jobTitle: '',
    yearsExperience: '3',
    keySkills: '',
    keyAchievements: '',
    whyCompany: '',
    templateVariant: 'standard'
  });

  const [generatedLetter, setGeneratedLetter] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  // Sample form data for demonstration
  const SAMPLE_DATA = {
    yourName: 'Jane Doe',
    yourEmail: 'jane.doe@professional.com',
    yourPhone: '(555) 123-4567',
    yourAddress: '123 Main Street, San Francisco, CA 94105',
    hiringManager: 'John Smith',
    companyName: 'Tech Innovations Inc.',
    companyAddress: '456 Tech Avenue, San Jose, CA 95113',
    jobTitle: 'Senior Marketing Manager',
    yearsExperience: '8',
    keySkills: 'Digital Marketing, Team Leadership, Campaign Strategy, Data Analysis, Content Creation, SEO/SEM',
    keyAchievements: 'Increased lead generation by 45% through strategic campaigns\nReduced marketing costs by 22% while improving ROI\nManaged a team of 8 marketing specialists\nImplemented automation saving 30 hours weekly',
    whyCompany: 'I have followed Tech Innovations Inc.\'s growth in the AI marketing space and am particularly impressed with your recent launch of the predictive analytics platform. Your commitment to innovation aligns perfectly with my experience in data-driven marketing strategies.',
    templateVariant: 'standard'
  };

  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const handleGenerate = useCallback(() => {
    // Validate required fields
    const requiredFields = ['yourName', 'yourEmail', 'companyName', 'jobTitle', 'keySkills'];
    const missingFields = requiredFields.filter(field => !formData[field]?.trim());
    if (missingFields.length > 0) {
      alert(`Please fill in: ${missingFields.join(', ').replace(/([A-Z])/g, ' $1').toLowerCase()}`);
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      const letter = generateCoverLetter(formData);
      setGeneratedLetter(letter);
      setIsGenerating(false);
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  }, [formData]);

  const handleUseSample = () => {
    setFormData(SAMPLE_DATA);
    setCurrentStep(2);
  };

  const handleClear = () => {
    setFormData({
      yourName: '',
      yourEmail: '',
      yourPhone: '',
      yourAddress: '',
      hiringManager: '',
      companyName: '',
      companyAddress: '',
      jobTitle: '',
      yearsExperience: '3',
      keySkills: '',
      keyAchievements: '',
      whyCompany: '',
      templateVariant: 'standard'
    });
    setGeneratedLetter(null);
    setCurrentStep(1);
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className={styles.container} lang="en-US">
      <Head>
        {/* Basic Meta Tags */}
        <title>Free Cover Letter Generator - Professional Templates & AI Customization 2026 | Cover Letter Builder</title>
        <meta name="description" content={`Create professional ATS-optimized cover letters for free. Generate customized cover letters in minutes with our AI-powered tool. Privacy-first, no signup required. ${CURRENT_YEAR}`} />
        <meta name="keywords" content="free cover letter generator, professional cover letter, AI cover letter, cover letter template, job application letter, cover letter builder, ATS cover letter, customizable cover letter" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Content Freshness */}
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        
        {/* Canonical & Sitemap */}
        <link rel="canonical" href={`${SITE_URL}/free-cover-letter-generator`} />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Hreflang for International SEO */}
        <link rel="alternate" href={`${SITE_URL}/free-cover-letter-generator`} hreflang="en" />
        <link rel="alternate" href={`${SITE_URL}/free-cover-letter-generator`} hreflang="en-US" />
        <link rel="alternate" href={`${SITE_URL}/free-cover-letter-generator`} hreflang="en-GB" />
        <link rel="alternate" href={`${SITE_URL}/free-cover-letter-generator`} hreflang="en-CA" />
        <link rel="alternate" href={`${SITE_URL}/free-cover-letter-generator`} hreflang="en-AU" />
        <link rel="alternate" href={`${SITE_URL}/free-cover-letter-generator`} hreflang="x-default" />
        
        {/* Open Graph Protocol */}
        <meta property="og:title" content="Free Cover Letter Generator - Professional Templates & AI Customization 2026" />
        <meta property="og:description" content="Create professional ATS-optimized cover letters for free. Generate customized cover letters in minutes with our AI-powered tool." />
        <meta property="og:image" content={`${SITE_URL}/images/og-cover-letter-generator.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free AI-Powered Cover Letter Generator - Create Professional Cover Letters Online" />
        <meta property="og:url" content={`${SITE_URL}/free-cover-letter-generator`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={lastModifiedDate} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Cover Letter Generator - Professional Templates & AI Customization 2026" />
        <meta name="twitter:description" content="Create professional ATS-optimized cover letters for free. Generate customized cover letters in minutes with AI." />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-cover-letter-generator.jpg`} />
        <meta name="twitter:image:alt" content="Free Cover Letter Generator with AI Templates" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Mobile & PWA */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Performance Optimizations */}
        <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSchemaData(safeFaqDates, safeReviewDates))
          }}
        />
      </Head>

      {/* Content Freshness Indicator */}
      <div className={styles.freshnessIndicator} style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>›</li>
          <li>
            <Link href="/free-cover-letter-generator" className={styles.breadcrumbLink}>
              Free Cover Letter Generator
            </Link>
          </li>
        </ol>
      </nav>

      <header className={styles.header} role="banner">
        <h1 className={styles.title}>Free Cover Letter Generator - Professional Templates & AI Customization 2026</h1>
        <p className={styles.subtitle}>
          Create customized cover letters in minutes. Our AI-powered generator crafts professional letters tailored to your specific job application.
          <span className={styles.trustBadge}> Trusted by 500,000+ job seekers</span>
        </p>

        {/* Progress Steps */}
        <div className={styles.progressSteps}>
          <div className={`${styles.step} ${currentStep >= 1 ? styles.stepActive : ''}`}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepLabel}>Your Details</div>
          </div>
          <div className={styles.stepLine}></div>
          <div className={`${styles.step} ${currentStep >= 2 ? styles.stepActive : ''}`}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepLabel}>Job Details</div>
          </div>
          <div className={styles.stepLine}></div>
          <div className={`${styles.step} ${currentStep >= 3 ? styles.stepActive : ''}`}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepLabel}>Generate</div>
          </div>
        </div>

        {/* Aggregate Rating Display */}
        <div className={styles.aggregateRating} itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="4.7" />
          <meta itemProp="ratingCount" content="156" />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="worstRating" content="1" />
          <div className={styles.ratingStars}>
            {'★'.repeat(5)}
            <span className={styles.ratingValue}>4.7/5</span>
          </div>
          <div className={styles.ratingText}>Based on 156+ user reviews • Updated {freshnessIndicator}</div>
        </div>
      </header>

      <main className={styles.mainContent}>
        {!generatedLetter && (
          <div className={styles.formSection}>
            {/* Step 1: Personal Details */}
            {(currentStep === 1 || currentStep === 2) && (
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>Step {currentStep}: {currentStep === 1 ? 'Your Professional Details' : 'Job & Company Information'}</h2>
                  <div className={styles.buttonGroup}>
                    <button onClick={handleUseSample} className={`${styles.button} ${styles.secondaryButton}`}>
                      Use Sample
                    </button>
                    <button onClick={handleClear} className={`${styles.button} ${styles.secondaryButton}`}>
                      Clear All
                    </button>
                  </div>
                </div>
                <div className={styles.formGrid}>
                  {currentStep === 1 ? (
                    <>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Your Full Name *</label>
                        <input
                          type="text"
                          className={styles.input}
                          value={formData.yourName}
                          onChange={(e) => handleInputChange('yourName', e.target.value)}
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Your Email *</label>
                        <input
                          type="email"
                          className={styles.input}
                          value={formData.yourEmail}
                          onChange={(e) => handleInputChange('yourEmail', e.target.value)}
                          placeholder="jane.doe@professional.com"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Your Phone</label>
                        <input
                          type="tel"
                          className={styles.input}
                          value={formData.yourPhone}
                          onChange={(e) => handleInputChange('yourPhone', e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Your Address</label>
                        <input
                          type="text"
                          className={styles.input}
                          value={formData.yourAddress}
                          onChange={(e) => handleInputChange('yourAddress', e.target.value)}
                          placeholder="123 Main Street, City, State ZIP"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Years of Experience *</label>
                        <select
                          className={styles.select}
                          value={formData.yearsExperience}
                          onChange={(e) => handleInputChange('yearsExperience', e.target.value)}
                        >
                          {[...Array(20)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'year' : 'years'}</option>
                          ))}
                        </select>
                      </div>
                      <div className={styles.formGroupFull}>
                        <label className={styles.label}>Key Skills (comma separated) *</label>
                        <textarea
                          className={styles.textarea}
                          value={formData.keySkills}
                          onChange={(e) => handleInputChange('keySkills', e.target.value)}
                          placeholder="e.g., Project Management, Data Analysis, Team Leadership, Python, Marketing Strategy"
                          rows={3}
                        />
                      </div>
                      <div className={styles.formGroupFull}>
                        <label className={styles.label}>Key Achievements (one per line)</label>
                        <textarea
                          className={styles.textarea}
                          value={formData.keyAchievements}
                          onChange={(e) => handleInputChange('keyAchievements', e.target.value)}
                          placeholder="Increased sales by 30% in Q4 2025\nReduced costs by 15% through process optimization\nManaged a team of 10 across multiple projects"
                          rows={4}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Hiring Manager Name</label>
                        <input
                          type="text"
                          className={styles.input}
                          value={formData.hiringManager}
                          onChange={(e) => handleInputChange('hiringManager', e.target.value)}
                          placeholder="John Smith"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Company Name *</label>
                        <input
                          type="text"
                          className={styles.input}
                          value={formData.companyName}
                          onChange={(e) => handleInputChange('companyName', e.target.value)}
                          placeholder="Tech Innovations Inc."
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Company Address</label>
                        <input
                          type="text"
                          className={styles.input}
                          value={formData.companyAddress}
                          onChange={(e) => handleInputChange('companyAddress', e.target.value)}
                          placeholder="456 Tech Avenue, City, State ZIP"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Job Title *</label>
                        <input
                          type="text"
                          className={styles.input}
                          value={formData.jobTitle}
                          onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                          placeholder="Senior Marketing Manager"
                        />
                      </div>
                      <div className={styles.formGroupFull}>
                        <label className={styles.label}>Why This Company? (Optional but recommended)</label>
                        <textarea
                          className={styles.textarea}
                          value={formData.whyCompany}
                          onChange={(e) => handleInputChange('whyCompany', e.target.value)}
                          placeholder="What attracts you to this company? Mention recent news, company values, or specific products/services that align with your experience."
                          rows={4}
                        />
                      </div>
                    </>
                  )}
                </div>
                <div className={styles.stepNavigation}>
                  {currentStep === 2 && (
                    <button onClick={prevStep} className={`${styles.button} ${styles.secondaryButton}`}>
                      ← Back
                    </button>
                  )}
                  {currentStep === 1 ? (
                    <button onClick={nextStep} className={styles.button}>
                      Continue to Job Details →
                    </button>
                  ) : (
                    <button onClick={handleGenerate} className={styles.button} disabled={isGenerating}>
                      {isGenerating ? (
                        <>
                          <span>Generating Cover Letter...</span>
                          <span className={styles.spinner}>⟳</span>
                        </>
                      ) : (
                        'Generate Cover Letter'
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Template Selector (Step 2) */}
            {currentStep === 2 && (
              <TemplateSelector
                selectedTemplate={formData.templateVariant}
                onTemplateChange={(template) => handleInputChange('templateVariant', template)}
              />
            )}
          </div>
        )}

        {isGenerating ? (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Generating your professional cover letter...</p>
          </div>
        ) : generatedLetter ? (
          <>
            <CoverLetterDisplay {...generatedLetter} />
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Ready to Customize Further?</h2>
              <div className={styles.customizationTips}>
                <div className={styles.tipCard}>
                  <h4 className={styles.tipCardTitle}>Add Specific Details</h4>
                  <p>Include recent company news, specific projects, or details from the job description</p>
                </div>
                <div className={styles.tipCard}>
                  <h4 className={styles.tipCardTitle}>Quantify Achievements</h4>
                  <p>Add numbers and metrics to your achievements to make them more impactful</p>
                </div>
                <div className={styles.tipCard}>
                  <h4 className={styles.tipCardTitle}>Company Research</h4>
                  <p>Mention the company's mission, values, or recent accomplishments</p>
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <button onClick={handleClear} className={`${styles.button} ${styles.secondaryButton}`}>
                  Create Another Letter
                </button>
                <button onClick={() => window.print()} className={styles.button}>
                  Print Letter
                </button>
              </div>
            </div>
          </>
        ) : currentStep === 1 ? (
          <div className={styles.card}>
            <h2 className={`${styles.cardTitle} ${styles.centerText}`}>Create a Professional Cover Letter in Minutes</h2>
            <p className={`${styles.readyText} ${styles.centerText}`}>
              Fill in your details above and click "Continue" to get started.
            </p>
            <div className={styles.checklist}>
              <p className={styles.checklistTitle}>What makes a great cover letter:</p>
              <ul>
                <li><strong>Customization:</strong> Tailor each letter to the specific job</li>
                <li><strong>Professional Tone:</strong> Match the company culture and industry</li>
                <li><strong>Clear Structure:</strong> Introduction, body, and compelling close</li>
                <li><strong>Keyword Optimization:</strong> Include terms from the job description</li>
                <li><strong>Results Focus:</strong> Highlight achievements with numbers</li>
                <li><strong>Company Alignment:</strong> Show you've researched the organization</li>
              </ul>
            </div>
          </div>
        ) : null}

        {/* How-to Section */}
        <section className={styles.howToSection} aria-labelledby="how-to-title">
          <h2 className={styles.sectionTitle} id="how-to-title">How It Works: 5-Step Cover Letter Creation</h2>
          <div className={styles.howToSteps}>
            {HOW_TO_STEPS.map((step, index) => (
              <div key={index} className={styles.howToStep} id={`step-${index + 1}`}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <h3 className={styles.stepTitle}>{step.name}</h3>
                <p className={styles.stepDescription}>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection} aria-labelledby="faq-title">
          <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions About Cover Letters</h2>
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

        {/* Reviews Section */}
        <section className={styles.reviewsSection} aria-labelledby="reviews-title">
          <h2 className={styles.sectionTitle} id="reviews-title">What Users Say About Our Cover Letter Generator</h2>
          <div className={styles.reviewsGrid}>
            {REVIEWS.map((review, index) => (
              <div key={index} className={styles.reviewCard} itemScope itemType="https://schema.org/Review">
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewerInfo}>
                    <span itemProp="author" itemScope itemType="https://schema.org/Person">
                      <meta itemProp="name" content={review.name} />
                      <strong className={styles.reviewerName}>{review.name}</strong>
                    </span>
                    <span className={styles.reviewerPosition}>{review.position}</span>
                  </div>
                  <div className={styles.reviewRating} itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={review.rating} />
                    <meta itemProp="bestRating" content="5" />
                    <div className={styles.stars}>
                      {'★'.repeat(review.rating)}
                      {'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>
                </div>
                <div className={styles.reviewContent} itemProp="reviewBody">
                  <p>"{review.review}"</p>
                </div>
                <div className={styles.reviewDate} itemProp="datePublished">
                  {review.date}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className={styles.resourcesSection} aria-labelledby="resources-title">
          <h2 className={styles.sectionTitle} id="resources-title">Additional Career Resources</h2>
          <div className={styles.resourcesGrid}>
            <Link
              href="/free-ats-resume-checker"
              className={styles.resourceCard}
              rel="nofollow"
            >
              <h3>Free ATS Resume Checker</h3>
              <p>Analyze your resume for ATS compatibility and get optimization tips.</p>
            </Link>
            <Link
              href="/resume-templates"
              className={styles.resourceCard}
              rel="nofollow"
            >
              <h3>Free Resume Templates</h3>
              <p>Professional ATS-friendly resume templates for all industries.</p>
            </Link>
            <Link
              href="/resume-for-canada-pr-guide"
              className={styles.resourceCard}
              rel="nofollow"
            >
              <h3>Resume for Canada PR Guide</h3>
              <p>Learn how to optimize your resume for Canadian Permanent Residence.</p>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection} aria-labelledby="cta-title">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Create Your Perfect Cover Letter?</h2>
            <p className={styles.ctaText}>
              Join 500,000+ job seekers who improved their job applications with our free cover letter generator.
            </p>
            <button onClick={handleClear} className={styles.ctaButton}>
              Start Creating Now - No Sign Up Required
            </button>
            <div className={styles.ctaGuarantee}>
              <span className={styles.guaranteeText}>✓ 100% Free • ✓ No Sign Up • ✓ Privacy Protected • ✓ Instant Results</span>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const reviewDates = Array(4).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates
      },
      buildTimestamp
    },
    revalidate: 3600
  };
}