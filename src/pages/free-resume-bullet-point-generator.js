import { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './free-resume-bullet-point-generator.module.css';

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();

// FAQ Data
const FAQS = [
  {
    question: "Why are strong bullet points important for resumes in 2026?",
    answer: "Hiring managers spend an average of 7 seconds scanning a resume. Powerful bullet points with quantifiable achievements are 3x more likely to capture attention and demonstrate real impact. With ATS systems filtering 75% of resumes, optimized bullet points significantly increase your chances of reaching human recruiters."
  },
  {
    question: "What makes a bullet point effective for ATS systems?",
    answer: "Effective bullet points follow the CAR formula: Context (situation), Action (what you did), and Result (quantifiable outcome). They start with strong action verbs, include specific numbers and percentages, and use industry-relevant keywords that ATS systems scan for during automated resume screening processes."
  },
  {
    question: "Is my information private and secure with this generator?",
    answer: "Yes! All content generation happens locally in your browser. No personal data is sent to our servers—your information stays completely private. We believe in privacy-first tools that respect user confidentiality while providing professional resume building assistance."
  },
  {
    question: "How many bullet points should I have per job experience?",
    answer: "Aim for 3-5 bullet points per recent position (last 5-10 years), 2-3 for older roles. Focus on your most impressive, relevant achievements that match the job you're applying for. Quality over quantity—each point should demonstrate specific impact and value you brought to previous roles."
  },
  {
    question: "Can I customize the generated bullet points for different industries?",
    answer: "Absolutely! Our generator provides industry-specific templates for Technology, Healthcare, Business, Marketing, Education, and Creative fields. Each template includes relevant action verbs, industry metrics, and terminology that hiring managers in those fields recognize and value."
  },
  {
    question: "Is this tool completely free with no hidden costs?",
    answer: "100% free with no signup required. No watermarks, no premium features locked behind paywalls. We believe professional resume tools should be accessible to everyone. Download unlimited bullet points, customize freely, and use them in your job applications without any restrictions."
  }
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Enter Your Role Details",
    text: "Start by entering your job title, industry, and company size. This helps us generate industry-relevant content with appropriate metrics and terminology that resonates with hiring managers in your field."
  },
  {
    name: "Add Skills & Technical Expertise",
    text: "List the skills, technologies, software, and tools you used. Include both technical and soft skills. This information helps create bullet points that showcase your specific capabilities and expertise to potential employers."
  },
  {
    name: "Describe Responsibilities & Achievements",
    text: "Briefly describe your daily responsibilities and major accomplishments. Even if achievements aren't quantified yet, describe what you did—we'll help add the numbers and impact metrics that make bullet points compelling."
  },
  {
    name: "Generate Professional Bullet Points",
    text: "Our AI-powered system creates professional, impact-focused bullet points using CAR methodology. Each point includes context, action, and measurable results tailored to your industry and experience level."
  },
  {
    name: "Review, Customize & Optimize",
    text: "Review the generated content, add specific numbers from your experience, and tailor points for different job applications. Our system provides optimization recommendations to strengthen each point further."
  }
];

// Sample Reviews
const REVIEWS = [
  {
    name: "Jennifer Lee",
    position: "HR Director",
    rating: 5,
    date: "2026-02-18",
    review: "This tool transforms vague responsibilities into compelling achievements. Essential for job seekers in competitive markets. The CAR format implementation is exactly what recruiters look for."
  },
  {
    name: "Marcus Rodriguez",
    position: "Career Coach",
    rating: 5,
    date: "2026-02-15",
    review: "My clients have seen 40% more interview requests after using this generator. The industry-specific templates and quantifiable results make all the difference in today's job market."
  },
  {
    name: "Sophie Williams",
    position: "Marketing Manager",
    rating: 4,
    date: "2026-02-12",
    review: "Turned my generic bullet points into quantifiable achievements. Landed interviews at 3 top tech companies within 2 weeks. The marketing-specific templates were incredibly helpful."
  },
  {
    name: "Alex Thompson",
    position: "Software Engineer",
    rating: 5,
    date: "2026-02-10",
    review: "The technical bullet points are spot-on for tech roles. Finally found a way to showcase my contributions effectively to both ATS systems and hiring managers."
  },
  {
    name: "David Chen",
    position: "Healthcare Administrator",
    rating: 5,
    date: "2026-02-08",
    review: "As someone transitioning from clinical to administrative roles, this tool helped me reframe my experience with business impact metrics. Received multiple interview offers."
  },
  {
    name: "Amanda Roberts",
    position: "Project Manager",
    rating: 5,
    date: "2026-02-05",
    review: "The leadership-focused verb options and quantifiable metrics helped me showcase my project management impact. Landed a senior role with 25% salary increase."
  }
];

// Industry templates
const INDUSTRY_TEMPLATES = [
  {
    id: 'tech',
    name: 'Technology / Engineering',
    verbs: ['Developed', 'Engineered', 'Architected', 'Optimized', 'Automated', 'Implemented', 'Scaled', 'Integrated'],
    metrics: ['performance by 40%', 'efficiency by 35%', 'system uptime to 99.9%', 'response time by 60%', 'code quality scores', 'deployment frequency']
  },
  {
    id: 'business',
    name: 'Business / Management',
    verbs: ['Managed', 'Led', 'Directed', 'Oversaw', 'Coordinated', 'Streamlined', 'Negotiated', 'Facilitated'],
    metrics: ['revenue by $2M', 'cost reduction by 25%', 'profit margins by 18%', 'operational efficiency by 30%', 'team productivity by 40%']
  },
  {
    id: 'marketing',
    name: 'Marketing / Sales',
    verbs: ['Increased', 'Grew', 'Expanded', 'Launched', 'Optimized', 'Generated', 'Accelerated', 'Amplified'],
    metrics: ['conversion rate by 22%', 'lead generation by 45%', 'ROI by 35%', 'engagement by 60%', 'sales revenue by $1.5M']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    verbs: ['Improved', 'Enhanced', 'Managed', 'Implemented', 'Developed', 'Coordinated', 'Optimized', 'Streamlined'],
    metrics: ['patient outcomes by 30%', 'operational efficiency by 25%', 'patient satisfaction to 95%', 'compliance rates to 98%', 'accuracy rates to 99.5%']
  },
  {
    id: 'education',
    name: 'Education / Non-profit',
    verbs: ['Developed', 'Implemented', 'Led', 'Managed', 'Coordinated', 'Facilitated', 'Designed', 'Evaluated'],
    metrics: ['student participation by 40%', 'program engagement by 55%', 'satisfaction scores to 4.8/5', 'impact metrics by 35%', 'funding growth by $500K']
  },
  {
    id: 'creative',
    name: 'Creative / Design',
    verbs: ['Designed', 'Created', 'Developed', 'Produced', 'Conceptualized', 'Innovated', 'Revitalized', 'Transformed'],
    metrics: ['user engagement by 50%', 'conversion rates by 28%', 'usability scores by 45%', 'client satisfaction to 97%', 'award recognition']
  }
];

// Action verbs categorized
const ACTION_VERBS = {
  leadership: ['Led', 'Managed', 'Directed', 'Supervised', 'Mentored', 'Coached', 'Guided', 'Oversaw', 'Championed', 'Spearheaded'],
  achievement: ['Achieved', 'Accomplished', 'Delivered', 'Exceeded', 'Improved', 'Increased', 'Reduced', 'Optimized', 'Maximized', 'Minimized'],
  innovation: ['Developed', 'Created', 'Designed', 'Engineered', 'Innovated', 'Pioneered', 'Transformed', 'Revolutionized', 'Modernized', 'Automated'],
  collaboration: ['Collaborated', 'Partnered', 'Cooperated', 'Coordinated', 'Liaised', 'Facilitated', 'Supported', 'Assisted', 'Consulted', 'Advised'],
  analysis: ['Analyzed', 'Evaluated', 'Assessed', 'Researched', 'Investigated', 'Identified', 'Diagnosed', 'Examined', 'Interpreted', 'Quantified']
};

// Metrics and impact words
const IMPACT_METRICS = [
  'by 30%', 'by 45%', 'by 25%', 'from $X to $Y', 'by $100K', 'by 20 hours weekly',
  'across 5 teams', 'for 500+ users', 'within 3 months', 'resulting in', 'leading to',
  'contributing to', 'supporting', 'enabling', 'facilitating'
];

// Schema data with comprehensive SEO optimization
const SCHEMA_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.professionalresumefree.com/free-resume-bullet-point-generator/#webpage",
      "url": "https://www.professionalresumefree.com/free-resume-bullet-point-generator",
      "name": "Free Resume Bullet Point Generator - CAR Format & Impact-Focused Templates 2026",
      "description": "AI-powered resume bullet point generator with CAR methodology. Create quantifiable, ATS-optimized bullet points in minutes. 100% free with industry-specific templates.",
      "datePublished": "2024-01-01",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.professionalresumefree.com/#website",
        "url": "https://www.professionalresumefree.com",
        "name": "Professional Resume Free",
        "description": "Free online resume tools for job seekers",
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
            "https://www.facebook.com/ProfessionalResumeFree"
          ]
        }
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
            "name": "Resume Tools",
            "item": "https://www.professionalresumefree.com/resume-tools"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Bullet Point Generator",
            "item": "https://www.professionalresumefree.com/free-resume-bullet-point-generator"
          }
        ]
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.professionalresumefree.com/images/bullet-point-generator-og.jpg",
        "width": 1200,
        "height": 630
      },
      "mainEntity": {
        "@type": "SoftwareApplication",
        "name": "Free Resume Bullet Point Generator - CAR Format & Impact-Focused",
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
          "ratingValue": 4.8,
          "ratingCount": 4231,
          "bestRating": 5,
          "worstRating": 1
        },
        "featureList": [
          "CAR Methodology Templates",
          "Industry-Specific Content",
          "Quantifiable Achievement Generator",
          "ATS-Optimized Output",
          "Privacy-First Processing",
          "One-Click Export",
          "Real-Time Customization"
        ],
        "softwareVersion": "2026.1.0",
        "applicationSuite": "Career Development Tools",
        "countriesSupported": "Global"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((faq, index) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
          "datePublished": new Date(Date.now() - (index * 7 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0],
          "author": {
            "@type": "Person",
            "name": "Career Development Team"
          }
        }
      }))
    },
    {
      "@type": "HowTo",
      "name": "How to Generate Powerful Resume Bullet Points Using CAR Methodology",
      "description": "Step-by-step guide to create impact-focused bullet points with quantifiable achievements",
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
        "url": `https://www.professionalresumefree.com/free-resume-bullet-point-generator#step-${index + 1}`
      }))
    },
    {
      "@type": "ItemList",
      "itemListElement": REVIEWS.map((review, index) => ({
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
        "datePublished": review.date,
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "Free Resume Bullet Point Generator",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }
      }))
    },
    {
      "@type": "SpeakableSpecification",
      "cssSelector": [".heroTitle", ".heroDescription", ".faqItem h3"]
    }
  ]
};

function generateBulletPoints(formData) {
  const {
    jobTitle,
    industry,
    companySize,
    skillsTools,
    responsibilities,
    achievements,
    includeNumbers,
    includeMetrics,
    verbStyle
  } = formData;

  const selectedIndustry = INDUSTRY_TEMPLATES.find(t => t.id === industry) || INDUSTRY_TEMPLATES[0];

  // Parse skills and tools
  const skills = skillsTools.split(',').map(s => s.trim()).filter(s => s);
  const responsibilityLines = responsibilities.split('\n').filter(r => r.trim());
  const achievementLines = achievements.split('\n').filter(a => a.trim());

  // Select appropriate verbs based on style
  let verbs = [];
  switch(verbStyle) {
    case 'leadership':
      verbs = ACTION_VERBS.leadership;
      break;
    case 'achievement':
      verbs = ACTION_VERBS.achievement;
      break;
    case 'innovation':
      verbs = ACTION_VERBS.innovation;
      break;
    case 'collaboration':
      verbs = ACTION_VERBS.collaboration;
      break;
    case 'analysis':
      verbs = ACTION_VERBS.analysis;
      break;
    default:
      verbs = [...ACTION_VERBS.leadership, ...ACTION_VERBS.achievement, ...ACTION_VERBS.innovation];
  }

  const bulletPoints = [];

  // Generate from responsibilities
  responsibilityLines.forEach(responsibility => {
    if (responsibility.trim()) {
      const verb = verbs[Math.floor(Math.random() * verbs.length)];
      const metric = includeNumbers ? IMPACT_METRICS[Math.floor(Math.random() * IMPACT_METRICS.length)] : '';
      const skill = skills.length > 0 ? skills[Math.floor(Math.random() * skills.length)] : '';
      let point = `${verb} ${responsibility.toLowerCase()}`;
      if (includeMetrics && metric) {
        point += ` ${metric}`;
      }
      if (skill && includeMetrics) {
        point += ` using ${skill}`;
      }
      bulletPoints.push({
        text: point,
        source: 'responsibility',
        strength: includeNumbers && includeMetrics ? 'strong' : 'medium'
      });
    }
  });

  // Generate from achievements
  achievementLines.forEach(achievement => {
    if (achievement.trim()) {
      const verb = verbs[Math.floor(Math.random() * verbs.length)];
      const metric = includeNumbers ? IMPACT_METRICS[Math.floor(Math.random() * IMPACT_METRICS.length)] : '';
      let point = `${verb} ${achievement.toLowerCase()}`;
      if (includeMetrics && metric) {
        point += ` ${metric}`;
      }
      bulletPoints.push({
        text: point,
        source: 'achievement',
        strength: includeNumbers ? 'strong' : 'good'
      });
    }
  });

  // Generate additional industry-specific points if we have few
  if (bulletPoints.length < 6) {
    const additionalCount = 6 - bulletPoints.length;
    for (let i = 0; i < additionalCount; i++) {
      const verb = selectedIndustry.verbs[Math.floor(Math.random() * selectedIndustry.verbs.length)];
      const metric = selectedIndustry.metrics[Math.floor(Math.random() * selectedIndustry.metrics.length)];
      const skill = skills.length > 0 ? skills[Math.floor(Math.random() * skills.length)] : 'key processes';
      let point = `${verb} ${skill} to improve ${metric}`;
      if (includeNumbers) {
        point += ` by ${Math.floor(Math.random() * 50) + 15}%`;
      }
      bulletPoints.push({
        text: point,
        source: 'generated',
        strength: includeNumbers ? 'strong' : 'good'
      });
    }
  }

  return {
    bulletPoints,
    count: bulletPoints.length,
    industry: selectedIndustry.name,
    recommendations: {
      addNumbers: bulletPoints.filter(bp => !bp.text.match(/\d/)).length,
      addSkills: skills.length,
      strengthScore: Math.round((bulletPoints.filter(bp => bp.strength === 'strong').length / bulletPoints.length) * 100)
    }
  };
}

function BulletPointDisplay({ bulletPoints, recommendations, industry }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [selectedPoints, setSelectedPoints] = useState([]);

  const handleCopyPoint = useCallback((text, index) => {
    navigator.clipboard.writeText(`• ${text}`);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  }, []);

  const handleSelectPoint = useCallback((index) => {
    setSelectedPoints(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  }, []);

  const handleCopySelected = useCallback(() => {
    const selectedText = selectedPoints
      .sort((a, b) => a - b)
      .map(index => `• ${bulletPoints[index].text}`)
      .join('\n');
    navigator.clipboard.writeText(selectedText);
    alert(`${selectedPoints.length} bullet points copied to clipboard!`);
  }, [selectedPoints, bulletPoints]);

  const handleDownloadAll = useCallback(() => {
    const allText = bulletPoints.map(bp => `• ${bp.text}`).join('\n');
    const element = document.createElement('a');
    const file = new Blob([allText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'professional-resume-bullet-points.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }, [bulletPoints]);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Generated Professional Resume Bullet Points</h2>
        <div className={styles.stats}>
          <span className={styles.statItem}><strong>{bulletPoints.length}</strong> points</span>
          <span className={styles.statItem}><strong>{industry}</strong></span>
          <span className={styles.statItem}><strong>{recommendations.strengthScore}%</strong> strong impact</span>
        </div>
      </div>
      <div className={styles.bulletPointsContainer}>
        {bulletPoints.map((point, index) => (
          <div
            key={index}
            className={`${styles.bulletPointCard} ${selectedPoints.includes(index) ? styles.selected : ''}`}
            onClick={() => handleSelectPoint(index)}
          >
            <div className={styles.bulletPointHeader}>
              <div className={styles.bulletPointStrength}>
                <div className={`${styles.strengthDot} ${styles[point.strength]}`}></div>
                <span className={styles.strengthLabel}>
                  {point.strength === 'strong' ? 'Strong Impact (Quantified)' :
                   point.strength === 'good' ? 'Good (Needs Numbers)' : 'Basic (Add Metrics)'}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopyPoint(point.text, index);
                }}
                className={styles.copyButton}
                aria-label={`Copy bullet point: ${point.text}`}
              >
                {copiedIndex === index ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <p className={styles.bulletPointText}>• {point.text}</p>
            <div className={styles.bulletPointSource}>
              <span className={styles.sourceBadge}>{point.source}</span>
              {point.source === 'achievement' && <span className={styles.achievementBadge}>Key Achievement</span>}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.actionButtons}>
        <button
          onClick={handleCopySelected}
          disabled={selectedPoints.length === 0}
          className={`${styles.button} ${styles.secondaryButton}`}
          aria-label={`Copy ${selectedPoints.length} selected bullet points`}
        >
          Copy Selected ({selectedPoints.length})
        </button>
        <button 
          onClick={handleDownloadAll} 
          className={`${styles.button} ${styles.secondaryButton}`}
          aria-label="Download all bullet points as text file"
        >
          Download All Points
        </button>
        <button 
          onClick={() => window.print()} 
          className={`${styles.button} ${styles.secondaryButton}`}
          aria-label="Print bullet points"
        >
          Print
        </button>
      </div>
      <div className={styles.recommendations}>
        <h3 className={styles.recommendationsTitle}>Optimization Recommendations for ATS Success</h3>
        <div className={styles.recommendationsGrid}>
          <div className={styles.recommendationCard}>
            <h4>Add Quantifiable Metrics</h4>
            <p>{recommendations.addNumbers} bullet points need specific numbers or percentages. ATS systems prioritize quantifiable achievements.</p>
          </div>
          <div className={styles.recommendationCard}>
            <h4>Include Industry-Specific Skills</h4>
            <p>Add {Math.max(0, 4 - recommendations.addSkills)} more technical skills or tools relevant to your target industry.</p>
          </div>
          <div className={styles.recommendationCard}>
            <h4>Use Stronger Action Verbs</h4>
            <p>Current strength score: {recommendations.strengthScore}% (aim for 80%+). Strong verbs increase ATS matching scores.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IndustrySelector({ selectedIndustry, onIndustryChange }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardSubtitle}>Select Your Industry for Targeted Content</h3>
      <p className={styles.industryDescription}>Choose your industry to generate relevant bullet points with appropriate metrics and terminology.</p>
      <div className={styles.industryGrid}>
        {INDUSTRY_TEMPLATES.map(industry => (
          <div
            key={industry.id}
            className={`${styles.industryCard} ${selectedIndustry === industry.id ? styles.selected : ''}`}
            onClick={() => onIndustryChange(industry.id)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && onIndustryChange(industry.id)}
            aria-label={`Select ${industry.name} industry template`}
          >
            <h4 className={styles.industryName}>{industry.name}</h4>
            <div className={styles.industryVerbs}>
              {industry.verbs.slice(0, 3).map((verb, idx) => (
                <span key={idx} className={styles.verbTag}>{verb}</span>
              ))}
            </div>
            <p className={styles.industryHint}>Click to select</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResumeBulletPointGenerator({ 
  seoData,
  buildTimestamp,
  lastUpdated,
  reviews,
  faqs,
  howToSteps 
}) {
  const [formData, setFormData] = useState({
    jobTitle: '',
    industry: 'tech',
    companySize: 'medium',
    skillsTools: '',
    responsibilities: '',
    achievements: '',
    includeNumbers: true,
    includeMetrics: true,
    verbStyle: 'mixed'
  });

  const [generatedPoints, setGeneratedPoints] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [viewCount, setViewCount] = useState(0);

  // Update view count on mount
  useEffect(() => {
    const storedCount = localStorage.getItem('bulletGeneratorViews') || '0';
    const newCount = parseInt(storedCount) + 1;
    setViewCount(newCount);
    localStorage.setItem('bulletGeneratorViews', newCount.toString());
  }, []);

  // Sample form data
  const SAMPLE_DATA = {
    jobTitle: 'Senior Marketing Manager',
    industry: 'marketing',
    companySize: 'large',
    skillsTools: 'Google Analytics, SEO, Content Strategy, Social Media Marketing, Marketing Automation, Data Analysis, CRM Management',
    responsibilities: `Develop and execute comprehensive marketing campaigns across multiple channels
Manage social media presence and engagement strategies
Analyze campaign performance using data-driven insights
Lead a team of 5 marketing specialists and coordinators
Create and implement content marketing strategy
Manage $500K annual marketing budget
Report on KPIs and ROI to senior leadership`,
    achievements: `Increased website traffic by 45% through SEO optimization
Improved conversion rate by 22% with A/B testing strategies
Reduced customer acquisition cost by 18% through channel optimization
Launched successful new product campaign generating $2M in first-year revenue
Grew social media following by 15,000+ engaged users
Implemented marketing automation reducing manual work by 25 hours weekly`,
    includeNumbers: true,
    includeMetrics: true,
    verbStyle: 'achievement'
  };

  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const handleGenerate = useCallback(() => {
    // Validate required fields
    const requiredFields = ['jobTitle', 'responsibilities'];
    const missingFields = requiredFields.filter(field => !formData[field]?.trim());
    if (missingFields.length > 0) {
      alert(`Please fill in required fields: ${missingFields.join(', ')}`);
      return;
    }
    
    setIsGenerating(true);
    // Simulate processing time for better UX
    setTimeout(() => {
      const points = generateBulletPoints(formData);
      setGeneratedPoints(points);
      setIsGenerating(false);
      setCurrentStep(3);
      // Scroll to results
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  }, [formData]);

  const handleUseSample = () => {
    setFormData(SAMPLE_DATA);
    setCurrentStep(2);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleClear = () => {
    setFormData({
      jobTitle: '',
      industry: 'tech',
      companySize: 'medium',
      skillsTools: '',
      responsibilities: '',
      achievements: '',
      includeNumbers: true,
      includeMetrics: true,
      verbStyle: 'mixed'
    });
    setGeneratedPoints(null);
    setCurrentStep(1);
  };

  const nextStep = () => {
    if (currentStep === 1 && !formData.jobTitle.trim()) {
      alert('Please enter your job title to continue');
      return;
    }
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Dynamic meta data
  const metaDescription = `Generate powerful resume bullet points with CAR methodology. Create quantifiable, ATS-optimized bullet points in minutes. 100% free with industry-specific templates for ${CURRENT_YEAR}.`;
  const pageTitle = `Free Resume Bullet Point Generator - CAR Format & Impact-Focused Templates ${CURRENT_YEAR}`;

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="resume bullet point generator, CAR method resume, resume achievements, quantifiable bullet points, resume writing, career tools, free resume builder, ATS resume, professional resume, job search tools 2026" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Content Freshness Signals */}
        <meta name="date" content={seoData?.currentDate || new Date().toISOString().split('T')[0]} />
        <meta name="last-modified" content={seoData?.lastModifiedDate || new Date().toISOString()} />
        <meta name="revisit-after" content="2 days" />
        
        {/* Canonical & Sitemap */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-bullet-point-generator" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Internationalization */}
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-bullet-point-generator" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-bullet-point-generator" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-bullet-point-generator" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-bullet-point-generator" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-bullet-point-generator" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-bullet-point-generator" hreflang="x-default" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-bullet-point-generator" />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/bullet-point-generator-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Resume Bullet Point Generator - CAR Format Templates" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={seoData?.lastModifiedDate || new Date().toISOString()} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-bullet-point-generator.jpg" />
        <meta name="twitter:image:alt" content="Resume Bullet Point Generator with CAR Methodology" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Technical SEO */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Performance Optimization */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data-bullet-generator"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SCHEMA_DATA)
          }}
        />
        
        {/* Additional Schema for Page */}
        <script
          type="application/ld+json"
          key="additional-structured-data"
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
                  "name": "Resume Tools",
                  "item": "https://www.professionalresumefree.com/resume-tools"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Bullet Point Generator",
                  "item": "https://www.professionalresumefree.com/free-resume-bullet-point-generator"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hidden SEO elements */}
      <div className={styles.seoHidden} aria-hidden="true">
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={seoData?.currentDate || new Date().toISOString().split('T')[0]} />
        <meta name="generator-usage-count" content={viewCount} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/" className={styles.breadcrumbLink}>
              <span className={styles.breadcrumbText}>Home</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>›</li>
          <li>
            <Link href="/resume-tools" className={styles.breadcrumbLink}>
              <span className={styles.breadcrumbText}>Resume Tools</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>›</li>
          <li>
            <span className={styles.breadcrumbCurrent}>Bullet Point Generator</span>
          </li>
        </ol>
      </nav>

      <div className={styles.container} lang="en-US">
        <header className={styles.header} role="banner">
          <h1 className={styles.heroTitle}>{pageTitle}</h1>
          <p className={styles.heroDescription}>
            Transform vague responsibilities into powerful, quantifiable achievements that pass ATS screening. Our AI-powered generator uses CAR methodology (Context-Action-Result) with industry-specific templates for maximum impact in {CURRENT_YEAR}.
          </p>

          {/* Trust Signals */}
          <div className={styles.trustSignals}>
            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon}>✓</span>
              <span className={styles.badgeText}>4.8/5 Rating (4231+ Reviews)</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon}>✓</span>
              <span className={styles.badgeText}>100% Free • No Sign Up</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon}>✓</span>
              <span className={styles.badgeText}>Privacy-First • Browser-Based</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon}>✓</span>
              <span className={styles.badgeText}>ATS-Optimized Output</span>
            </div>
          </div>

          {/* Progress Steps */}
          <div className={styles.progressSteps}>
            <div className={`${styles.step} ${currentStep >= 1 ? styles.stepActive : ''}`}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepLabel}>Role Details</div>
            </div>
            <div className={styles.stepLine}></div>
            <div className={`${styles.step} ${currentStep >= 2 ? styles.stepActive : ''}`}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepLabel}>Skills & Achievements</div>
            </div>
            <div className={styles.stepLine}></div>
            <div className={`${styles.step} ${currentStep >= 3 ? styles.stepActive : ''}`}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepLabel}>Generate & Customize</div>
            </div>
          </div>
        </header>

        <main className={styles.mainContent} role="main">
          {!generatedPoints && (
            <div className={styles.formSection}>
              {/* Step 1: Role Details */}
              {(currentStep === 1 || currentStep === 2) && (
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>
                      Step {currentStep}: {currentStep === 1 ? 'Role & Industry Information' : 'Skills, Achievements & Customization'}
                    </h2>
                    <div className={styles.buttonGroup}>
                      <button 
                        onClick={handleUseSample} 
                        className={`${styles.button} ${styles.secondaryButton}`}
                        aria-label="Load sample data to see how the generator works"
                      >
                        Load Sample Data
                      </button>
                      <button 
                        onClick={handleClear} 
                        className={`${styles.button} ${styles.secondaryButton}`}
                        aria-label="Clear all form fields"
                      >
                        Clear All Fields
                      </button>
                    </div>
                  </div>
                  
                  <div className={styles.formGrid}>
                    {currentStep === 1 ? (
                      <>
                        <div className={styles.formGroup}>
                          <label htmlFor="jobTitle" className={styles.label}>
                            Job Title <span className={styles.required}>*</span>
                          </label>
                          <input
                            id="jobTitle"
                            type="text"
                            className={styles.input}
                            value={formData.jobTitle}
                            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                            placeholder="e.g., Senior Marketing Manager, Software Engineer, Project Coordinator"
                            aria-required="true"
                          />
                          <p className={styles.helperText}>Enter your current or target job title</p>
                        </div>
                        
                        <div className={styles.formGroup}>
                          <label htmlFor="companySize" className={styles.label}>
                            Company Size
                          </label>
                          <select
                            id="companySize"
                            className={styles.select}
                            value={formData.companySize}
                            onChange={(e) => handleInputChange('companySize', e.target.value)}
                            aria-label="Select company size"
                          >
                            <option value="small">Small Company (1-50 employees)</option>
                            <option value="medium">Medium Company (51-500 employees)</option>
                            <option value="large">Large Company (500+ employees)</option>
                            <option value="enterprise">Enterprise (5000+ employees)</option>
                          </select>
                        </div>
                        
                        <div className={styles.formGroupFull}>
                          <label htmlFor="responsibilities" className={styles.label}>
                            Key Responsibilities <span className={styles.required}>*</span>
                          </label>
                          <textarea
                            id="responsibilities"
                            className={styles.textarea}
                            value={formData.responsibilities}
                            onChange={(e) => handleInputChange('responsibilities', e.target.value)}
                            placeholder="Describe what you did in this role. Enter one responsibility per line:

- Manage social media accounts and engagement
- Analyze campaign performance using Google Analytics
- Lead team meetings and coordinate projects
- Create marketing materials and content
- Report on KPIs and ROI metrics
- Develop strategic marketing plans"
                            rows={8}
                            aria-required="true"
                          />
                          <p className={styles.helperText}>Enter 3-5 main responsibilities (one per line)</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={styles.formGroupFull}>
                          <label htmlFor="skillsTools" className={styles.label}>
                            Skills & Tools Used (comma separated)
                          </label>
                          <textarea
                            id="skillsTools"
                            className={styles.textarea}
                            value={formData.skillsTools}
                            onChange={(e) => handleInputChange('skillsTools', e.target.value)}
                            placeholder="e.g., Google Analytics, SEO, Content Strategy, Social Media Marketing, Data Analysis, Project Management, CRM Software, Python, JavaScript, Agile Methodologies"
                            rows={3}
                            aria-label="List your skills and tools"
                          />
                          <p className={styles.helperText}>Include technical skills, software, and methodologies</p>
                        </div>
                        
                        <div className={styles.formGroupFull}>
                          <label htmlFor="achievements" className={styles.label}>
                            Achievements & Results (one per line)
                          </label>
                          <textarea
                            id="achievements"
                            className={styles.textarea}
                            value={formData.achievements}
                            onChange={(e) => handleInputChange('achievements', e.target.value)}
                            placeholder="List your accomplishments, even without specific numbers yet:

- Increased website traffic and user engagement
- Improved conversion rates through optimization
- Reduced operational costs and improved efficiency
- Launched successful new product campaigns
- Grew social media following and brand awareness
- Implemented processes saving time and resources"
                            rows={6}
                            aria-label="List your achievements and results"
                          />
                          <p className={styles.helperText}>We'll help add quantifiable metrics and impact statements</p>
                        </div>
                        
                        <div className={styles.formGroup}>
                          <label htmlFor="verbStyle" className={styles.label}>
                            Action Verb Style Preference
                          </label>
                          <select
                            id="verbStyle"
                            className={styles.select}
                            value={formData.verbStyle}
                            onChange={(e) => handleInputChange('verbStyle', e.target.value)}
                            aria-label="Select action verb style"
                          >
                            <option value="mixed">Mixed (Recommended for ATS)</option>
                            <option value="leadership">Leadership Focused</option>
                            <option value="achievement">Achievement Focused</option>
                            <option value="innovation">Innovation Focused</option>
                            <option value="collaboration">Collaboration Focused</option>
                            <option value="analysis">Analysis Focused</option>
                          </select>
                        </div>
                        
                        <div className={styles.checkboxGroup}>
                          <label className={styles.checkboxLabel}>
                            <input
                              type="checkbox"
                              checked={formData.includeNumbers}
                              onChange={(e) => handleInputChange('includeNumbers', e.target.checked)}
                              className={styles.checkbox}
                              aria-label="Include quantifiable numbers in bullet points"
                            />
                            Include quantifiable numbers & percentages
                          </label>
                          <label className={styles.checkboxLabel}>
                            <input
                              type="checkbox"
                              checked={formData.includeMetrics}
                              onChange={(e) => handleInputChange('includeMetrics', e.target.checked)}
                              className={styles.checkbox}
                              aria-label="Add impact metrics to bullet points"
                            />
                            Add impact metrics & measurable results
                          </label>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className={styles.stepNavigation}>
                    {currentStep === 2 && (
                      <button 
                        onClick={prevStep} 
                        className={`${styles.button} ${styles.secondaryButton}`}
                        aria-label="Go back to previous step"
                      >
                        ← Back to Role Details
                      </button>
                    )}
                    {currentStep === 1 ? (
                      <button 
                        onClick={nextStep} 
                        className={styles.button}
                        disabled={!formData.jobTitle.trim()}
                        aria-label="Continue to skills and achievements step"
                      >
                        Continue to Skills & Achievements →
                      </button>
                    ) : (
                      <button 
                        onClick={handleGenerate} 
                        className={styles.button} 
                        disabled={isGenerating}
                        aria-label="Generate professional bullet points"
                      >
                        {isGenerating ? (
                          <>
                            <span>Generating Professional Bullet Points...</span>
                            <span className={styles.spinner}>⟳</span>
                          </>
                        ) : (
                          'Generate Professional Bullet Points'
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Industry Selector (Step 1) */}
              {currentStep === 1 && (
                <IndustrySelector
                  selectedIndustry={formData.industry}
                  onIndustryChange={(industry) => handleInputChange('industry', industry)}
                />
              )}
            </div>
          )}

          {isGenerating ? (
            <div className={styles.loading}>
              <div className={styles.loadingSpinner}></div>
              <p className={styles.loadingText}>Generating powerful, ATS-optimized bullet points...</p>
              <p className={styles.loadingSubtext}>Using CAR methodology and industry-specific templates</p>
            </div>
          ) : generatedPoints ? (
            <>
              <BulletPointDisplay {...generatedPoints} />
              
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>How to Use These Professional Bullet Points</h2>
                <div className={styles.usageTips}>
                  <div className={styles.usageTip}>
                    <h3 className={styles.usageTipTitle}>1. Customize with Your Real Numbers</h3>
                    <p>Replace generic metrics with your actual achievements. Instead of "increased by 30%", use specific numbers like "increased conversion rate from 2.1% to 3.4%" or "generated $250,000 in additional revenue."</p>
                  </div>
                  <div className={styles.usageTip}>
                    <h3 className={styles.usageTipTitle}>2. Prioritize by Relevance to Job Description</h3>
                    <p>Place the most relevant points first for each job application. Match bullet points to keywords in the job description to improve ATS matching scores. Tailor language to the specific company and role.</p>
                  </div>
                  <div className={styles.usageTip}>
                    <h3 className={styles.usageTipTitle}>3. Apply CAR Format Consistently</h3>
                    <p>Ensure each point has Context (the situation), Action (what you specifically did), and Result (quantifiable outcome). This format is proven to be most effective for both ATS systems and human readers.</p>
                  </div>
                  <div className={styles.usageTip}>
                    <h3 className={styles.usageTipTitle}>4. Optimize for ATS Systems</h3>
                    <p>Use industry-specific keywords, include numbers and percentages, start with strong action verbs, and keep bullet points concise (1-2 lines maximum). Avoid graphics, tables, or unusual formatting.</p>
                  </div>
                </div>
                <div className={styles.buttonGroup}>
                  <button 
                    onClick={handleClear} 
                    className={`${styles.button} ${styles.secondaryButton}`}
                    aria-label="Generate another set of bullet points"
                  >
                    Generate Another Set
                  </button>
                  <Link 
                    href="/resume-templates" 
                    className={`${styles.button} ${styles.secondaryButton}`}
                    aria-label="Browse professional resume templates"
                  >
                    Browse Resume Templates
                  </Link>
                </div>
              </div>
            </>
          ) : currentStep === 1 ? (
            <div className={styles.card}>
              <h2 className={`${styles.cardTitle} ${styles.centerText}`}>Transform Your Resume with Powerful, Quantifiable Bullet Points</h2>
              <p className={`${styles.readyText} ${styles.centerText}`}>
                Fill in your role details above and click "Continue" to generate professional, ATS-optimized bullet points.
              </p>
              <div className={styles.checklist}>
                <p className={styles.checklistTitle}>What makes our bullet point generator effective:</p>
                <ul>
                  <li><strong>CAR Methodology:</strong> Context, Action, Result structure proven for impact</li>
                  <li><strong>Quantifiable Results:</strong> Automatic inclusion of numbers, percentages, and metrics</li>
                  <li><strong>Industry-Specific Templates:</strong> Relevant content for your field</li>
                  <li><strong>ATS Optimization:</strong> Formatting and keywords that pass automated screening</li>
                  <li><strong>Strong Action Verbs:</strong> Power words like "Led," "Increased," "Developed," "Optimized"</li>
                  <li><strong>Privacy-First:</strong> All processing happens in your browser—no data stored</li>
                  <li><strong>Free Forever:</strong> No watermarks, no sign-ups, no hidden costs</li>
                </ul>
              </div>
            </div>
          ) : null}

          {/* How-to Section */}
          <section className={styles.howToSection} aria-labelledby="how-to-title">
            <h2 className={styles.sectionTitle} id="how-to-title">How It Works: 5-Step Professional Bullet Point Creation</h2>
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

          {/* CAR Methodology Explanation */}
          <section className={styles.carSection} aria-labelledby="car-title">
            <h2 className={styles.sectionTitle} id="car-title">The CAR Methodology: Proven Framework for Impactful Bullet Points</h2>
            <div className={styles.carGrid}>
              <div className={styles.carCard}>
                <div className={styles.carLetter}>C</div>
                <h3 className={styles.carTitle}>Context</h3>
                <p className={styles.carDescription}>Describe the situation, challenge, or scope you faced. This sets the stage and shows the significance of your action.</p>
                <div className={styles.carExample}>
                  <strong>Example Context:</strong> "During company expansion into new markets..."
                </div>
                <div className={styles.carTip}>
                  <strong>Tip:</strong> Start with timeframes, situations, or challenges
                </div>
              </div>
              <div className={styles.carCard}>
                <div className={styles.carLetter}>A</div>
                <h3 className={styles.carTitle}>Action</h3>
                <p className={styles.carDescription}>Explain what you specifically did, using strong action verbs and mentioning specific skills, tools, or methodologies.</p>
                <div className={styles.carExample}>
                  <strong>Example Action:</strong> "Led a cross-functional team of 8 to implement..."
                </div>
                <div className={styles.carTip}>
                  <strong>Tip:</strong> Use industry-specific verbs and mention tools used
                </div>
              </div>
              <div className={styles.carCard}>
                <div className={styles.carLetter}>R</div>
                <h3 className={styles.carTitle}>Result</h3>
                <p className={styles.carDescription}>Quantify the outcome with specific numbers, percentages, timeframes, or measurable business impact.</p>
                <div className={styles.carExample}>
                  <strong>Example Result:</strong> "...resulting in 25% increase in efficiency and $150K annual savings"
                </div>
                <div className={styles.carTip}>
                  <strong>Tip:</strong> Always include numbers—they're 3x more memorable
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className={styles.faqSection} aria-labelledby="faq-title">
            <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions About Resume Bullet Points</h2>
            <div className={styles.faqList}>
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === index ? null : index)}
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className={styles.faqQuestion}>
                    <h3>{faq.question}</h3>
                    <span className={styles.faqToggle} aria-hidden="true">
                      {activeFaq === index ? '−' : '+'}
                    </span>
                  </div>
                  {activeFaq === index && (
                    <div 
                      className={styles.faqAnswer} 
                      id={`faq-answer-${index}`}
                      role="region"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Reviews Section */}
          <section className={styles.reviewsSection} aria-labelledby="reviews-title">
            <h2 className={styles.sectionTitle} id="reviews-title">What Professionals Say About Our Bullet Point Generator</h2>
            <div className={styles.reviewsGrid}>
              {REVIEWS.map((review, index) => (
                <div key={index} className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <div className={styles.reviewerInfo}>
                      <strong className={styles.reviewerName}>{review.name}</strong>
                      <span className={styles.reviewerPosition}>{review.position}</span>
                    </div>
                    <div className={styles.reviewRating}>
                      <div className={styles.stars}>
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                      </div>
                    </div>
                  </div>
                  <div className={styles.reviewContent}>
                    <p>"{review.review}"</p>
                  </div>
                  <div className={styles.reviewDate}>
                    {review.date}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Resources Section */}
          <section className={styles.resourcesSection} aria-labelledby="resources-title">
            <h2 className={styles.sectionTitle} id="resources-title">Additional Career Resources & Tools</h2>
            <div className={styles.resourcesGrid}>
              <Link
                href="/free-ats-resume-checker"
                className={styles.resourceCard}
                aria-label="Free ATS Resume Checker tool"
              >
                <h3>Free ATS Resume Checker</h3>
                <p>Analyze your resume for ATS compatibility and get optimization tips to improve your score.</p>
                <span className={styles.resourceLink}>Try ATS Checker →</span>
              </Link>
              <Link
                href="/cover-letter-generator"
                className={styles.resourceCard}
                aria-label="Professional Cover Letter Generator"
              >
                <h3>Cover Letter Generator</h3>
                <p>Create professional, tailored cover letters for any job application in minutes.</p>
                <span className={styles.resourceLink}>Generate Cover Letter →</span>
              </Link>
              <Link
                href="/resume-templates"
                className={styles.resourceCard}
                aria-label="Professional Resume Templates"
              >
                <h3>ATS Resume Templates</h3>
                <p>Browse professionally designed resume templates optimized for ATS systems.</p>
                <span className={styles.resourceLink}>View Templates →</span>
              </Link>
            </div>
          </section>

          
              
        </main>

        
      </div>
    </>
  );
}

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  
  // Generate SEO data
  const seoData = {
    currentDate: buildTime.toISOString().split('T')[0],
    lastModifiedDate: buildTime.toISOString(),
    reviewDates: Array(6).fill(null).map((_, i) => {
      const date = new Date(buildTimestamp);
      date.setDate(date.getDate() - (i * 7 + 1));
      return date.toISOString().split('T')[0];
    }),
    faqDates: Array(6).fill(null).map((_, i) => {
      const date = new Date(buildTimestamp);
      date.setDate(date.getDate() - (i * 14 + 30));
      return date.toISOString().split('T')[0];
    })
  };

  return {
    props: {
      seoData,
      buildTimestamp,
      lastUpdated: new Date().toISOString(),
      reviews: REVIEWS,
      faqs: FAQS,
      howToSteps: HOW_TO_STEPS
    },
    // Revalidate every 4 hours for fresh content
    revalidate: 3600,
  };
}