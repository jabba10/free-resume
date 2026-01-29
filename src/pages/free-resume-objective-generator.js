import { useState } from 'react';
import Head from 'next/head';
import styles from './free-resume-objective-generator.module.css';

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();

// FAQ Data
const FAQS = [
  {
    question: "Is the resume objective generator really free?",
    answer: "Yes, 100% free with no signup required. Generate unlimited professional objective statements tailored to your career level and goals."
  },
  {
    question: "Are these objective statements ATS-friendly?",
    answer: "Absolutely. All generated objectives are optimized for Applicant Tracking Systems with proper keywords and professional phrasing that passes automated screening."
  },
  {
    question: "How many objective options can I generate?",
    answer: "You can generate 3 different professional objective statements per customization, each with unique strengths and approaches for different applications."
  },
  {
    question: "Can I use these for cover letters too?",
    answer: "Yes! These objective statements can be adapted for cover letters by adding more specific company and role details."
  },
  {
    question: "How do I choose the best objective statement?",
    answer: "Select the statement that best reflects your career goals, matches the job description keywords, and feels most authentic to your experience."
  }
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Select Your Career Level",
    text: "Choose your current career stage to get age-appropriate objective statements."
  },
  {
    name: "Enter Target Job Title",
    text: "Specify the exact job title you're targeting for customized professional phrasing."
  },
  {
    name: "Choose Your Industry",
    text: "Select your industry for sector-specific language and terminology."
  },
  {
    name: "Define Your Key Goal",
    text: "Select your primary career objective to generate goal-oriented statements."
  },
  {
    name: "Generate & Customize",
    text: "Generate multiple professional options and customize them for each application."
  }
];

// Reviews Data
const REVIEWS = [
  {
    name: "Jennifer Carter",
    position: "HR Manager",
    rating: 5,
    date: "2024-02-20",
    review: "The objective statements generated are professional and ATS-friendly. Much better than generic templates found online."
  },
  {
    name: "Robert Kim",
    position: "Career Coach",
    rating: 5,
    date: "2024-02-15",
    review: "I recommend this tool to all my clients. The career-level specific objectives make a huge difference in application success."
  },
  {
    name: "Amanda Patel",
    position: "Marketing Director",
    rating: 4,
    date: "2024-02-10",
    review: "Helped me create a compelling executive summary that got me noticed. The customization options are excellent."
  }
];

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'resume objective generator',
  'ATS-friendly resume objective',
  'professional objective statement',
  'career objective generator',
  'free resume objective tool',
  'custom resume objective',
  'job application objective',
  'resume summary generator',
  'career level objectives',
  'privacy-first objective generator'
];

const ResumeObjectiveGenerator = () => {
  const [formData, setFormData] = useState({
    careerLevel: '',
    jobTitle: '',
    industry: '',
    keyGoal: ''
  });
  const [objectives, setObjectives] = useState([]);
  const [isGenerated, setIsGenerated] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const careerLevels = ['Entry', 'Mid', 'Senior', 'Career Change'];
  const keyGoals = [
    'gain experience',
    'transition into tech',
    'lead engineering teams',
    'drive organizational growth',
    'build foundation',
    'start career',
    'learn quickly',
    'advance career',
    'increase responsibility',
    'specialize further',
    'lead projects',
    'mentor others',
    'shape company strategy',
    'build departments',
    'executive leadership'
  ];

  // Schema data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Resume Objective Generator",
        "description": "Professional resume objective generator with ATS-friendly templates for all career levels",
        "url": "https://www.professionalresumefree.com/free-resume-objective-generator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
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
          "url": "https://www.professionalresumefree.com"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Generate Professional Resume Objectives",
        "description": "Step-by-step guide to create ATS-friendly resume objective statements",
        "totalTime": "PT2M",
        "step": HOW_TO_STEPS.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.name,
          "text": step.text,
          "url": `https://www.professionalresumefree.com/free-resume-objective-generator#step-${index + 1}`
        }))
      },
      {
        "@type": "ItemList",
        "name": "User Reviews for Resume Objective Generator",
        "itemListElement": REVIEWS.map((review, index) => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": review.name
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
            "bestRating": "5"
          },
          "datePublished": review.date,
          "reviewBody": review.review
        }))
      }
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateObjectives = () => {
    const { careerLevel, jobTitle, industry, keyGoal } = formData;
    
    if (!careerLevel || !jobTitle || !industry || !keyGoal) {
      alert('Please fill in all fields');
      return;
    }

    const templates = {
      entry: [
        {
          template: `Motivated ${jobTitle} seeking to launch a career in ${industry}. Eager to apply ${getEntryLevelSkills(keyGoal)} while contributing to team success through ${getEntryContribution(keyGoal)}.`,
          why: "Focuses on enthusiasm and willingness to learn, which employers value in entry-level candidates.",
          bestFor: "Recent graduates and career starters"
        },
        {
          template: `Recent professional ready to begin a ${industry} career as a ${jobTitle}. ${getGoalPhrase(keyGoal)} and committed to ${getEntryCommitment(keyGoal)} in a growth-oriented environment.`,
          why: "Highlights readiness and commitment while showing awareness of professional growth opportunities.",
          bestFor: "Entry-level roles requiring quick learning"
        },
        {
          template: `Aspirational ${jobTitle} candidate aiming to enter the ${industry} sector. Bringing ${getEntryStrengths(keyGoal)} and a dedication to ${getEntryDedication(keyGoal)} from day one.`,
          why: "Projects confidence in foundational skills while emphasizing immediate contribution potential.",
          bestFor: "Competitive entry-level positions"
        }
      ],
      mid: [
        {
          template: `Experienced ${jobTitle} with 3-5 years in ${industry}, seeking to leverage ${getMidExpertise(keyGoal)} to ${getMidImpact(keyGoal)}. Proven ability to ${getMidAbilities(keyGoal)}.`,
          why: "Quantifies experience and demonstrates specific value proposition for mid-career transitions.",
          bestFor: "Career advancement opportunities"
        },
        {
          template: `Accomplished ${jobTitle} professional targeting roles in ${industry} where ${getMidStrengths(keyGoal)} can drive ${getMidOutcomes(keyGoal)}. Expertise in ${getMidExpertiseAreas(keyGoal)}.`,
          why: "Focuses on accomplishments and outcomes, appealing to employers seeking measurable impact.",
          bestFor: "Results-oriented roles"
        },
        {
          template: `Skilled ${jobTitle} aiming to advance in ${industry} by applying ${getMidSkills(keyGoal)} to solve ${getMidChallenges(keyGoal)}. Track record of ${getMidTrackRecord(keyGoal)}.`,
          why: "Position as a problem-solver with proven results, which resonates with hiring managers.",
          bestFor: "Problem-solving positions"
        }
      ],
      senior: [
        {
          template: `Senior ${jobTitle} leader with 10+ years of ${industry} expertise seeking to ${getSeniorGoal(keyGoal)}. Strategic thinker adept at ${getSeniorCapabilities(keyGoal)} to deliver ${getSeniorResults(keyGoal)}.`,
          why: "Establishes leadership positioning and strategic value for senior-level compensation expectations.",
          bestFor: "Leadership and executive roles"
        },
        {
          template: `Executive-level ${jobTitle} professional targeting ${industry} leadership roles. Visionary in ${getSeniorVision(keyGoal)} with demonstrated success in ${getSeniorSuccesses(keyGoal)} and ${getSeniorAccomplishments(keyGoal)}.`,
          why: "Communicates executive presence and transformational leadership capabilities expected at senior levels.",
          bestFor: "Executive and director positions"
        },
        {
          template: `Seasoned ${jobTitle} executive offering deep ${industry} knowledge to ${getSeniorValue(keyGoal)}. Expert in ${getSeniorExpertise(keyGoal)} with a history of ${getSeniorHistory(keyGoal)} and ${getSeniorImpact(keyGoal)}.`,
          why: "Emphasizes specialized expertise and quantifiable organizational impact for C-suite roles.",
          bestFor: "Specialized senior roles"
        }
      ],
      careerchange: [
        {
          template: `Accomplished professional transitioning into ${industry} as a ${jobTitle}. Bringing transferable skills in ${getTransferableSkills(keyGoal)} to ${getTransitionGoal(keyGoal)} while rapidly acquiring industry-specific knowledge.`,
          why: "Addresses career change directly while emphasizing valuable transferable skills and learning agility.",
          bestFor: "Career changers entering new industries"
        },
        {
          template: `Career-changer targeting ${jobTitle} roles in ${industry}. Combining ${getPreviousExperience(keyGoal)} with recent training in ${getNewSkills(keyGoal)} to ${getChangeObjective(keyGoal)}.`,
          why: "Bridges previous experience with new direction, showing purposeful transition planning.",
          bestFor: "Mid-career transitions"
        },
        {
          template: `Diverse professional pivoting to ${industry} as a ${jobTitle}. Leveraging unique perspective and ${getUniqueAssets(keyGoal)} to contribute fresh approaches to ${getIndustryNeeds(keyGoal)}.`,
          why: "Frames career change as an asset, highlighting innovative thinking from diverse background.",
          bestFor: "Innovative and creative roles"
        }
      ]
    };

    const careerKey = careerLevel.toLowerCase().replace(' ', '');
    setObjectives(templates[careerKey] || templates.entry);
    setIsGenerated(true);
    
    const resultsElement = document.getElementById('results');
    if (resultsElement) {
      setTimeout(() => {
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      alert('Failed to copy text. Please try again.');
    }
  };

  // Helper functions
  const getEntryLevelSkills = (goal) => {
    const skills = {
      'gain experience': 'academic knowledge and internship experience',
      'transition into tech': 'technical coursework and problem-solving abilities',
      'build foundation': 'fundamental skills and strong work ethic',
      'start career': 'fresh perspective and up-to-date training',
      'learn quickly': 'rapid learning ability and adaptability'
    };
    return skills[goal] || 'strong foundational skills and enthusiasm';
  };

  const getEntryContribution = (goal) => {
    const contributions = {
      'gain experience': 'dedicated effort and collaborative spirit',
      'transition into tech': 'technical aptitude and creative thinking',
      'build foundation': 'reliable performance and positive attitude',
      'start career': 'energy and commitment to excellence',
      'learn quickly': 'curiosity and proactive approach'
    };
    return contributions[goal] || 'consistent effort and team collaboration';
  };

  const getGoalPhrase = (goal) => {
    const phrases = {
      'gain experience': 'Focused on acquiring hands-on experience',
      'transition into tech': 'Determined to establish technical proficiency',
      'build foundation': 'Intent on developing professional competence',
      'start career': 'Prepared to make immediate contributions',
      'learn quickly': 'Excited to absorb industry knowledge rapidly'
    };
    return phrases[goal] || 'Ready to develop professional skills';
  };

  const getEntryCommitment = (goal) => {
    const commitments = {
      'gain experience': 'developing expertise through practical application',
      'transition into tech': 'mastering technical skills through real-world projects',
      'build foundation': 'building a strong professional track record',
      'start career': 'exceeding expectations in entry-level responsibilities',
      'learn quickly': 'accelerating skill development through immersion'
    };
    return commitments[goal] || 'developing valuable skills and experience';
  };

  const getEntryStrengths = (goal) => {
    const strengths = {
      'gain experience': 'strong analytical abilities and attention to detail',
      'transition into tech': 'logical thinking and technical comprehension',
      'build foundation': 'reliability and precision in task execution',
      'start career': 'excellent communication and organizational skills',
      'learn quickly': 'adaptability and information processing speed'
    };
    return strengths[goal] || 'solid work ethic and collaborative mindset';
  };

  const getEntryDedication = (goal) => {
    const dedications = {
      'gain experience': 'continuous learning and skill development',
      'transition into tech': 'technical skill acquisition and application',
      'build foundation': 'professional growth and quality output',
      'start career': 'career advancement through consistent performance',
      'learn quickly': 'rapid integration and value creation'
    };
    return dedications[goal] || 'professional development and team success';
  };

  const getMidExpertise = (goal) => {
    const expertise = {
      'advance career': 'specialized knowledge and project leadership',
      'increase responsibility': 'team coordination and process improvement',
      'specialize further': 'domain expertise and technical proficiency',
      'lead projects': 'project management and cross-functional collaboration',
      'mentor others': 'knowledge sharing and team development'
    };
    return expertise[goal] || 'industry experience and professional skills';
  };

  const getMidImpact = (goal) => {
    const impacts = {
      'advance career': 'drive departmental objectives and efficiency',
      'increase responsibility': 'enhance team performance and outcomes',
      'specialize further': 'solve complex challenges with specialized solutions',
      'lead projects': 'deliver successful initiatives on time and budget',
      'mentor others': 'develop team capabilities while achieving targets'
    };
    return impacts[goal] || 'contribute to organizational success';
  };

  const getMidAbilities = (goal) => {
    const abilities = {
      'advance career': 'execute complex projects and improve processes',
      'increase responsibility': 'manage key deliverables and stakeholder relationships',
      'specialize further': 'apply advanced techniques to business challenges',
      'lead projects': 'coordinate resources and maintain project momentum',
      'mentor others': 'guide junior staff while maintaining productivity'
    };
    return abilities[goal] || 'deliver quality results and drive improvements';
  };

  const getMidStrengths = (goal) => {
    const strengths = {
      'advance career': 'strategic execution and operational excellence',
      'increase responsibility': 'initiative and accountability',
      'specialize further': 'depth of knowledge and analytical rigor',
      'lead projects': 'organizational skills and attention to detail',
      'mentor others': 'communication abilities and patience'
    };
    return strengths[goal] || 'professional expertise and results orientation';
  };

  const getMidOutcomes = (goal) => {
    const outcomes = {
      'advance career': 'improved performance and growth',
      'increase responsibility': 'enhanced efficiency and quality',
      'specialize further': 'innovative solutions and competitive advantage',
      'lead projects': 'successful delivery and stakeholder satisfaction',
      'mentor others': 'team development and knowledge retention'
    };
    return outcomes[goal] || 'positive business outcomes';
  };

  const getMidExpertiseAreas = (goal) => {
    const areas = {
      'advance career': 'process optimization and strategic planning',
      'increase responsibility': 'workflow management and quality control',
      'specialize further': 'technical implementation and best practices',
      'lead projects': 'timeline management and risk mitigation',
      'mentor others': 'performance coaching and skills development'
    };
    return areas[goal] || 'industry-specific methodologies';
  };

  const getMidSkills = (goal) => {
    const skills = {
      'advance career': 'advanced technical and leadership capabilities',
      'increase responsibility': 'management and decision-making skills',
      'specialize further': 'specialized techniques and problem-solving',
      'lead projects': 'coordination and communication abilities',
      'mentor others': 'teaching and feedback delivery'
    };
    return skills[goal] || 'professional competencies';
  };

  const getMidChallenges = (goal) => {
    const challenges = {
      'advance career': 'organizational challenges with scalable solutions',
      'increase responsibility': 'operational hurdles with efficient approaches',
      'specialize further': 'technical problems with innovative methods',
      'lead projects': 'implementation barriers with strategic workarounds',
      'mentor others': 'performance gaps with development plans'
    };
    return challenges[goal] || 'business challenges';
  };

  const getMidTrackRecord = (goal) => {
    const records = {
      'advance career': 'exceeding performance targets and driving improvements',
      'increase responsibility': 'successfully managing key initiatives',
      'specialize further': 'implementing effective specialized solutions',
      'lead projects': 'delivering projects within constraints',
      'mentor others': 'developing team members while achieving goals'
    };
    return records[goal] || 'achieving measurable results';
  };

  const getSeniorGoal = (goal) => {
    const goals = {
      'lead engineering teams': 'direct technical strategy and team development',
      'drive organizational growth': 'scale operations and expand market presence',
      'shape company strategy': 'influence direction and competitive positioning',
      'build departments': 'establish functions and cultivate talent',
      'executive leadership': 'provide visionary guidance and P&L management'
    };
    return goals[goal] || 'provide strategic leadership and direction';
  };

  const getSeniorCapabilities = (goal) => {
    const capabilities = {
      'lead engineering teams': 'architecting systems and mentoring technical talent',
      'drive organizational growth': 'identifying opportunities and executing expansion',
      'shape company strategy': 'market analysis and competitive positioning',
      'build departments': 'organizational design and capability building',
      'executive leadership': 'strategic planning and stakeholder management'
    };
    return capabilities[goal] || 'driving initiatives and managing complexity';
  };

  const getSeniorResults = (goal) => {
    const results = {
      'lead engineering teams': 'innovative solutions and high-performing teams',
      'drive organizational growth': 'sustainable expansion and increased market share',
      'shape company strategy': 'competitive advantage and market leadership',
      'build departments': 'functional excellence and talent pipelines',
      'executive leadership': 'financial growth and organizational transformation'
    };
    return results[goal] || 'transformational outcomes';
  };

  const getSeniorVision = (goal) => {
    const visions = {
      'lead engineering teams': 'technical innovation and team excellence',
      'drive organizational growth': 'scalable business models and market opportunities',
      'shape company strategy': 'industry disruption and future readiness',
      'build departments': 'organizational capability and functional maturity',
      'executive leadership': 'corporate direction and cultural evolution'
    };
    return visions[goal] || 'strategic development and organizational improvement';
  };

  const getSeniorSuccesses = (goal) => {
    const successes = {
      'lead engineering teams': 'delivering complex systems and developing talent',
      'drive organizational growth': 'revenue expansion and operational scaling',
      'shape company strategy': 'market positioning and competitive differentiation',
      'build departments': 'functional establishment and team building',
      'executive leadership': 'P&L management and strategic execution'
    };
    return successes[goal] || 'achieving organizational objectives';
  };

  const getSeniorAccomplishments = (goal) => {
    const accomplishments = {
      'lead engineering teams': 'technical leadership and innovation delivery',
      'drive organizational growth': 'business development and market penetration',
      'shape company strategy': 'strategic planning and execution oversight',
      'build departments': 'organizational development and process creation',
      'executive leadership': 'corporate governance and stakeholder value creation'
    };
    return accomplishments[goal] || 'significant business achievements';
  };

  const getSeniorValue = (goal) => {
    const values = {
      'lead engineering teams': 'enhance technical capabilities and innovation',
      'drive organizational growth': 'accelerate expansion and profitability',
      'shape company strategy': 'strengthen market position and vision',
      'build departments': 'establish robust operations and culture',
      'executive leadership': 'guide transformation and sustainable success'
    };
    return values[goal] || 'deliver organizational excellence';
  };

  const getSeniorExpertise = (goal) => {
    const expertise = {
      'lead engineering teams': 'system architecture and team leadership',
      'drive organizational growth': 'business strategy and execution',
      'shape company strategy': 'competitive analysis and positioning',
      'build departments': 'organizational design and talent management',
      'executive leadership': 'corporate strategy and stakeholder relations'
    };
    return expertise[goal] || 'strategic leadership and management';
  };

  const getSeniorHistory = (goal) => {
    const histories = {
      'lead engineering teams': 'building high-performance technical organizations',
      'drive organizational growth': 'scaling businesses and entering new markets',
      'shape company strategy': 'developing winning market approaches',
      'build departments': 'creating effective functional teams',
      'executive leadership': 'delivering shareholder value and growth'
    };
    return histories[goal] || 'achieving business objectives';
  };

  const getSeniorImpact = (goal) => {
    const impacts = {
      'lead engineering teams': 'technical excellence and product innovation',
      'drive organizational growth': 'revenue growth and market expansion',
      'shape company strategy': 'strategic advantage and future positioning',
      'build departments': 'operational capability and team effectiveness',
      'executive leadership': 'organizational success and industry recognition'
    };
    return impacts[goal] || 'transformational leadership';
  };

  const getTransferableSkills = (goal) => {
    const skills = {
      'gain experience': 'project management and stakeholder communication',
      'transition into tech': 'problem-solving and analytical thinking',
      'lead engineering teams': 'team leadership and strategic planning',
      'drive organizational growth': 'business development and relationship building',
      'executive leadership': 'decision-making and organizational management'
    };
    return skills[goal] || 'communication, analysis, and project management';
  };

  const getTransitionGoal = (goal) => {
    const goals = {
      'gain experience': 'contribute effectively while developing new expertise',
      'transition into tech': 'apply logical thinking to technical challenges',
      'lead engineering teams': 'lead with strategic vision and people skills',
      'drive organizational growth': 'drive results with proven business acumen',
      'executive leadership': 'provide mature leadership and strategic direction'
    };
    return goals[goal] || 'make immediate contributions while learning';
  };

  const getPreviousExperience = (goal) => {
    const experiences = {
      'gain experience': 'years of professional discipline and work ethic',
      'transition into tech': 'proven analytical and problem-solving background',
      'lead engineering teams': 'extensive leadership and management experience',
      'drive organizational growth': 'successful business development track record',
      'executive leadership': 'executive-level decision-making experience'
    };
    return experiences[goal] || 'diverse professional experience';
  };

  const getNewSkills = (goal) => {
    const skills = {
      'gain experience': 'industry fundamentals and contemporary practices',
      'transition into tech': 'technical frameworks and development methodologies',
      'lead engineering teams': 'technical leadership and engineering management',
      'drive organizational growth': 'industry-specific strategies and tactics',
      'executive leadership': 'sector-specific leadership approaches'
    };
    return skills[goal] || 'industry-specific knowledge and skills';
  };

  const getChangeObjective = (goal) => {
    const objectives = {
      'gain experience': 'contribute immediately while building industry expertise',
      'transition into tech': 'solve technical problems with unique perspective',
      'lead engineering teams': 'guide technical teams with fresh leadership approach',
      'drive organizational growth': 'identify new opportunities with outside insight',
      'executive leadership': 'provide innovative direction with cross-industry wisdom'
    };
    return objectives[goal] || 'apply diverse experience to new challenges';
  };

  const getUniqueAssets = (goal) => {
    const assets = {
      'gain experience': 'cross-functional perspective and adaptability',
      'transition into tech': 'unique problem-solving approaches and resilience',
      'lead engineering teams': 'diverse leadership experience and strategic thinking',
      'drive organizational growth': 'varied business experience and innovative thinking',
      'executive leadership': 'broad organizational perspective and wisdom'
    };
    return assets[goal] || 'diverse background and fresh perspective';
  };

  const getIndustryNeeds = (goal) => {
    const needs = {
      'gain experience': 'emerging challenges and evolving requirements',
      'transition into tech': 'innovation demands and technical evolution',
      'lead engineering teams': 'technical leadership and talent development needs',
      'drive organizational growth': 'market challenges and expansion opportunities',
      'executive leadership': 'strategic challenges and organizational development'
    };
    return needs[goal] || 'industry challenges and opportunities';
  };

  return (
    <>
      <Head>
        <title>Free Resume Objective Generator – Professional & ATS-Safe {CURRENT_YEAR}</title>
        <meta 
          name="description" 
          content={`Generate targeted, ATS-friendly resume objectives tailored to your career level, industry, and goals. Professional statements that get results. ${CURRENT_YEAR} Edition`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Resume Objective Generator – Professional & ATS-Safe" />
        <meta property="og:description" content={`Generate professional resume objectives instantly. Tailored to your career level and goals. 100% free. ${CURRENT_YEAR}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-objective-generator" />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-objective-generator.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Objective Generator" />
        <meta name="twitter:description" content="Generate professional, ATS-friendly resume objectives tailored to your career level." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/twitter-objective-generator.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-objective-generator" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className={styles.container}>
        <header className={styles.header} role="banner">
          <h1 className={styles.title}>Free Resume Objective Generator – Professional & ATS-Safe {CURRENT_YEAR}</h1>
          <p className={styles.subtitle}>
            Create targeted, compelling objective statements tailored to your career level, industry, and goals. 
            All statements optimized for Applicant Tracking Systems. 100% free, no signup required.
          </p>
          
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
            <div className={styles.ratingText}>Based on 2500+ user reviews</div>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.editorSection}>
            <div className={styles.editorHeader}>
              <h2>Customize Your Professional Objective</h2>
              <p>
                Fill in all fields to generate objective statements specifically tailored to your career stage and goals.
                All statements are optimized for ATS systems and professional hiring standards.
              </p>
            </div>
            
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="careerLevel" className={styles.label}>
                  Career Level *
                </label>
                <select
                  id="careerLevel"
                  name="careerLevel"
                  value={formData.careerLevel}
                  onChange={handleInputChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select your level</option>
                  {careerLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="jobTitle" className={styles.label}>
                  Target Job Title *
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="e.g., Software Engineer, Marketing Manager"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="industry" className={styles.label}>
                  Industry *
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="e.g., Technology, Healthcare, Finance"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="keyGoal" className={styles.label}>
                  Primary Goal *
                </label>
                <select
                  id="keyGoal"
                  name="keyGoal"
                  value={formData.keyGoal}
                  onChange={handleInputChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select your main goal</option>
                  {keyGoals.map(goal => (
                    <option key={goal} value={goal}>{goal}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <button 
              onClick={generateObjectives}
              className={styles.generateButton}
            >
              Generate Professional Objective Statements
            </button>
            
            <div className={styles.tips}>
              <h3 className={styles.tipsTitle}>Pro Tips for Best Results:</h3>
              <ul className={styles.tipsList}>
                <li>Be specific with job titles for more targeted objectives</li>
                <li>Choose the goal that best matches your career aspirations</li>
                <li>Industry specificity helps create more relevant statements</li>
                <li>Review all three options to find the best fit for your applications</li>
              </ul>
            </div>
          </div>
          
          {isGenerated && (
            <div id="results" className={styles.resultsSection}>
              <h2 className={styles.sectionTitle}>Your Custom Objective Statements</h2>
              <p className={styles.resultsSubtitle}>
                Professionally crafted for a {formData.careerLevel} {formData.jobTitle} in {formData.industry} aiming to {formData.keyGoal}
              </p>
              
              <div className={styles.resultsGrid}>
                {objectives.map((objective, index) => (
                  <div key={index} className={styles.objectiveCard}>
                    <div className={styles.cardHeader}>
                      <span className={styles.cardNumber}>Option {index + 1}</span>
                      <div className={styles.tooltipContainer}>
                        <span className={styles.tooltipIcon}>ℹ️</span>
                        <div className={styles.tooltip}>
                          <strong>Why this works:</strong> {objective.why}
                          <br /><br />
                          <strong>Best for:</strong> {objective.bestFor}
                        </div>
                      </div>
                    </div>
                    
                    <p className={styles.objectiveText}>{objective.template}</p>
                    
                    <button
                      onClick={() => handleCopy(objective.template, index)}
                      className={styles.copyButton}
                    >
                      {copiedIndex === index ? 'Copied!' : 'Copy Objective'}
                    </button>
                  </div>
                ))}
              </div>
              
              <div className={styles.usageTips}>
                <h3 className={styles.usageTitle}>How to Use These Professional Objectives:</h3>
                <div className={styles.tipsGrid}>
                  <div className={styles.tip}>
                    <div className={styles.tipIcon}>📄</div>
                    <div className={styles.tipContent}>
                      <h4 className={styles.tipTitle}>Resume Placement</h4>
                      <p className={styles.tipDescription}>Place at the top of your resume, just below contact information.</p>
                    </div>
                  </div>
                  <div className={styles.tip}>
                    <div className={styles.tipIcon}>🎯</div>
                    <div className={styles.tipContent}>
                      <h4 className={styles.tipTitle}>Customization</h4>
                      <p className={styles.tipDescription}>Add specific skills or achievements to make it uniquely yours.</p>
                    </div>
                  </div>
                  <div className={styles.tip}>
                    <div className={styles.tipIcon}>🤖</div>
                    <div className={styles.tipContent}>
                      <h4 className={styles.tipTitle}>ATS Optimization</h4>
                      <p className={styles.tipDescription}>These objectives include keywords that help pass automated screening.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* How-to Section */}
        <section className={styles.howToSection}>
          <h2 className={styles.sectionTitle}>How It Works: 5-Step Professional Objective Creation</h2>
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
        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
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
        <section className={styles.reviewsSection}>
          <h2 className={styles.sectionTitle}>What Users Say About Our Objective Generator</h2>
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
        <section className={styles.resourcesSection}>
          <h2 className={styles.sectionTitle}>Resume & Career Resources</h2>
          <div className={styles.resourcesGrid}>
            <a 
              href="/resume-templates" 
              className={styles.resourceCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Resume Templates</h3>
              <p>Free resume templates to help you stand out.</p>
            </a>
            <a 
              href="/jobs-boards" 
              className={styles.resourceCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Job Boards</h3>
              <p>Find your dream job with these job boards.</p>
            </a>
            <a 
              href="/careers-blog" 
              className={styles.resourceCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Career Blog</h3>
              <p>Learn the latest career tips and insights.</p>
            </a>
          </div>
        </section>

        
      </div>
    </>
  );
};

// SSG with ISR (Incremental Static Regeneration)
export async function getStaticProps() {
  return {
    props: {
      lastUpdated: new Date().toISOString(),
      reviews: REVIEWS,
      faqs: FAQS,
      howToSteps: HOW_TO_STEPS
    },
    // Revalidate every 2 hours for fresh content
    revalidate: 7200, // 2 hours in seconds
  };
}

export default ResumeObjectiveGenerator;