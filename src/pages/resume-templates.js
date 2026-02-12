import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { 
  FiFileText, 
  FiHeart, 
  FiBriefcase, 
  FiPackage, 
  FiShoppingCart, 
  FiTruck, 
  FiUser,
  FiArrowRight,
  FiStar,
  FiCheck,
  FiDownload,
  FiUsers,
  FiHome,
  FiChevronRight,
  FiAward,
  FiSettings,
  FiTool,
  FiTrendingUp,
  FiClock,
  FiSearch,
  FiEdit,
  FiBarChart,
  FiTarget,
  FiLayers,
  FiCode,
  FiCpu,
  FiDollarSign,
  FiBook,
  FiShield,
  FiZap,
  FiGlobe,
  FiCoffee,
  FiActivity
} from 'react-icons/fi';
import { 
  FaBuilding, 
  FaClipboard, 
  FaServer, 
  FaCloud, 
  FaLeaf, 
  FaIndustry,
  FaHospitalAlt
} from 'react-icons/fa';
import styles from './ResumeTemplates.module.css';

const ResumeTemplates = ({ 
  seoData,
  buildTimestamp 
}) => {
  const {
    currentDate,
    lastModifiedDate,
    reviewDates,
    faqDates,
    breadcrumbData
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeReviewDates = reviewDates || Array(6).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(6).fill(freshnessIndicator);

  // Template categories data with ALL industry-specific links from JSON
  const templateCategories = [
    // Healthcare Industry Templates (11 links)
    {
      title: 'ATS-Friendly Medical Resume Templates',
      description: 'Healthcare-specific resume templates optimized for medical ATS systems. Designed for doctors, medical assistants, and healthcare administrators.',
      icon: <FiHeart className={styles.templateIcon} />,
      link: '/ats-friendly-medical-resume-builder',
      features: ['Doctor Resume', 'Medical Assistant', 'Healthcare Admin'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Nursing Resume Templates',
      description: 'Nursing resume templates specifically designed for RNs, LPNs, nurse practitioners, and nursing students.',
      icon: <FiHeart className={styles.templateIcon} />,
      link: '/ats-friendly-nurse-resume-builder',
      features: ['Registered Nurse', 'Nurse Practitioner', 'Nursing Student'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Nurse Practitioner Resume Templates',
      description: 'Advanced practice nursing resume templates for NPs, PAs, and specialized nursing roles.',
      icon: <FiAward className={styles.templateIcon} />,
      link: '/ats-friendly-nurse-practitioner-resume-builder',
      features: ['Nurse Practitioner', 'Physician Assistant', 'Specialized Nursing'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Veterinary Resume Templates',
      description: 'Veterinary and animal healthcare resume templates for veterinarians, vet techs, and animal care professionals.',
      icon: <FiHeart className={styles.templateIcon} />,
      link: '/ats-friendly-veterinary-and-specialized-healthcare-roles-resume-builder',
      features: ['Veterinarian', 'Vet Tech', 'Animal Care'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Care Assistant Resume Templates',
      description: 'Care assistant and support worker resume templates for home health aides and personal care attendants.',
      icon: <FiUsers className={styles.templateIcon} />,
      link: '/ats-friendly-care-assistant-resume-builder',
      features: ['Home Health Aide', 'Personal Care', 'Support Worker'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Support Worker Resume Templates',
      description: 'Support worker and healthcare aide resume templates for patient support roles.',
      icon: <FiUsers className={styles.templateIcon} />,
      link: '/ats-friendly-support-worker-resume-builder',
      features: ['Support Worker', 'Patient Care', 'Healthcare Aide'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Healthcare Assistant Resume Templates',
      description: 'Healthcare support staff resume templates for medical assistants, patient care technicians, and healthcare aides.',
      icon: <FiUsers className={styles.templateIcon} />,
      link: '/ats-friendly-healthcare-assistant-resume-builder',
      features: ['Patient Care Tech', 'Medical Assistant', 'Healthcare Aide'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Aged Care Resume Templates',
      description: 'Aged care and geriatric care resume templates for nursing home staff and senior care professionals.',
      icon: <FiUsers className={styles.templateIcon} />,
      link: '/ats-friendly-aged-care-worker-resume-builder',
      features: ['Geriatric Care', 'Nursing Home', 'Senior Care'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Medical Assistant Resume Templates',
      description: 'Medical assistant and clinical support resume templates for MA certification holders.',
      icon: <FiHeart className={styles.templateIcon} />,
      link: '/ats-friendly-medical-assistant-resume-builder',
      features: ['Clinical Assistant', 'Medical Office', 'Certified MA'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Registered Practical Nurse Resume Templates',
      description: 'RPN and practical nursing resume templates for licensed practical nurses.',
      icon: <FiHeart className={styles.templateIcon} />,
      link: '/ats-friendly-registered-practical-nurse-resume-builder',
      features: ['LPN Resume', 'Practical Nurse', 'Licensed Nurse'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Disability Support Resume Templates',
      description: 'Disability support and special needs care resume templates for support workers.',
      icon: <FiUsers className={styles.templateIcon} />,
      link: '/ats-friendly-disability-support-worker-resume-builder',
      features: ['Disability Care', 'Special Needs', 'Support Worker'],
      color: '#000000'
    },

    // Technology Industry Templates (6 links)
    {
      title: 'ATS-Friendly Technology Resume Templates',
      description: 'Tech industry resume templates engineered to pass technical ATS screening.',
      icon: <FiCpu className={styles.templateIcon} />,
      link: '/ats-friendly-tech-resume-builder',
      features: ['Software Engineer', 'IT Professional', 'Tech Specialist'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Machine Learning Resume Templates',
      description: 'AI and machine learning resume templates for data scientists and ML engineers.',
      icon: <FiActivity className={styles.templateIcon} />,
      link: '/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder',
      features: ['Data Scientist', 'ML Engineer', 'AI Specialist'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Data Science & Cybersecurity Resume Templates',
      description: 'Data science and cybersecurity resume templates for analysts and security professionals.',
      icon: <FiShield className={styles.templateIcon} />,
      link: '/ats-friendly-data-and-cybersecurity-resume-builder',
      features: ['Cybersecurity', 'Data Analyst', 'Security Analyst'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly AI Adjacent Creative Technical Resume Templates',
      description: 'Creative technical roles resume templates for AI-adjacent positions.',
      icon: <FiZap className={styles.templateIcon} />,
      link: '/ats-ai-adjacent-creative-technical-roles-resume-builder',
      features: ['Creative Tech', 'AI Roles', 'Technical Creative'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Software Developer Resume Templates',
      description: 'Software development and engineering resume templates for developers.',
      icon: <FiCode className={styles.templateIcon} />,
      link: '/ats-friendly-software-developer-and-software-engineer-resume-builder',
      features: ['Developer Resume', 'Software Engineer', 'Programmer'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Data Analyst Resume Templates',
      description: 'Data analysis and business intelligence resume templates for analysts.',
      icon: <FiBarChart className={styles.templateIcon} />,
      link: '/ats-friendly-data-analyst-resume-builder',
      features: ['Business Analyst', 'Data Analysis', 'BI Specialist'],
      color: '#000000'
    },

    // Business & Finance Templates (10 links)
    {
      title: 'ATS-Friendly Finance Resume Templates',
      description: 'Finance sector resume templates optimized for financial ATS systems.',
      icon: <FiBriefcase className={styles.templateIcon} />,
      link: '/ats-friendly-finance-resume-builder',
      features: ['Accountant', 'Financial Analyst', 'Banking'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly CEO Resume Templates',
      description: 'Executive-level resume templates designed for C-suite ATS screening.',
      icon: <FiUser className={styles.templateIcon} />,
      link: '/ats-friendly-ceo-resume-builder',
      features: ['Executive Resume', 'Leadership', 'C-Suite'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Project Manager Resume Templates',
      description: 'Project management resume templates for PMP and agile professionals.',
      icon: <FiTarget className={styles.templateIcon} />,
      link: '/ats-friendly-project-manager-resume-builder',
      features: ['PMP Certified', 'Agile PM', 'Project Lead'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Accountant Resume Templates',
      description: 'Accounting and auditing resume templates for CPAs and accountants.',
      icon: <FiDollarSign className={styles.templateIcon} />,
      link: '/ats-friendly-accountant-resume-builder',
      features: ['CPA Resume', 'Auditor', 'Financial Accountant'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Sales Associate Resume Templates',
      description: 'Sales and business development resume templates for sales professionals.',
      icon: <FiTrendingUp className={styles.templateIcon} />,
      link: '/ats-friendly-sales-associate-resume-builder',
      features: ['Sales Rep', 'Business Dev', 'Account Executive'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Marketing Executive Resume Templates',
      description: 'Marketing and advertising resume templates for executives and managers.',
      icon: <FiGlobe className={styles.templateIcon} />,
      link: '/ats-friendly-marketing-executive-manager-resume-builder',
      features: ['Marketing Manager', 'Advertising', 'Brand Manager'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Business Analyst Resume Templates',
      description: 'Business analysis and consulting resume templates for analysts.',
      icon: <FiBarChart className={styles.templateIcon} />,
      link: '/ats-friendly-business-analyst-resume-builder',
      features: ['Business Consultant', 'Analysis', 'Strategy'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Customer Service Resume Templates',
      description: 'Customer service and support resume templates for service professionals.',
      icon: <FiUsers className={styles.templateIcon} />,
      link: '/ats-friendly-customer-service-resume-builder',
      features: ['Customer Support', 'Service Rep', 'Help Desk'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Administrative Assistant Resume Templates',
      description: 'Administrative and office support resume templates for assistants.',
      icon: <FaClipboard className={styles.templateIcon} />,
      link: '/ats-friendly-administrative-assistant-resume-builder',
      features: ['Office Admin', 'Executive Assistant', 'Administrative'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly HR Assistant Resume Templates',
      description: 'Human resources and recruitment resume templates for HR professionals.',
      icon: <FiUsers className={styles.templateIcon} />,
      link: '/ats-friendly-hr-assistant-coordinator-resume-builder',
      features: ['HR Generalist', 'Recruiter', 'Talent Acquisition'],
      color: '#000000'
    },

    // Engineering & Manufacturing Templates (7 links)
    {
      title: 'ATS-Friendly Engineering Resume Templates',
      description: 'Engineering resume templates for civil, mechanical, and electrical engineers.',
      icon: <FiTool className={styles.templateIcon} />,
      link: '/ats-friendly-engineering-resume-builder',
      features: ['Civil Engineer', 'Mechanical', 'Electrical'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Industrial & Manufacturing Resume Templates',
      description: 'Manufacturing industry resume templates for production and quality control.',
      icon: <FiPackage className={styles.templateIcon} />,
      link: '/ats-friendly-industrial-manufacturing-resume-builder',
      features: ['Production', 'Quality Control', 'Manufacturing'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Automation Resume Templates',
      description: 'Automation and robotics resume templates for manufacturing professionals.',
      icon: <FiSettings className={styles.templateIcon} />,
      link: '/ats-friendly-advanced-manufacturing-and-automation-resume-builder',
      features: ['Robotics', 'Automation', 'Process Control'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Biotechnology Resume Templates',
      description: 'Biotech and pharmaceutical resume templates for lab and research roles.',
      icon: <FiActivity className={styles.templateIcon} />,
      link: '/ats-friendly-biotechnology-resume-builder',
      features: ['Pharma', 'Lab Tech', 'Research'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Electrician Resume Templates',
      description: 'Electrical and wiring resume templates for licensed electricians.',
      icon: <FiZap className={styles.templateIcon} />,
      link: '/ats-friendly-electrician-resume-builder',
      features: ['Licensed Electrician', 'Electrical', 'Wiring'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Plumber Resume Templates',
      description: 'Plumbing and pipefitting resume templates for certified plumbers.',
      icon: <FiTool className={styles.templateIcon} />,
      link: '/ats-friendly-plumber-resume-builder',
      features: ['Certified Plumber', 'Pipefitting', 'Plumbing'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Construction Resume Templates',
      description: 'Construction and trade resume templates for skilled workers.',
      icon: <FiTool className={styles.templateIcon} />,
      link: '/ats-friendly-construction-worker-resume-builder',
      features: ['Construction', 'Trade Worker', 'Skilled Labor'],
      color: '#000000'
    },

    // Education & Public Service Templates (4 links)
    {
      title: 'ATS-Friendly Government & Non-Profit Resume Templates',
      description: 'Public sector resume templates compliant with government and non-profit requirements.',
      icon: <FaBuilding className={styles.templateIcon} />,
      link: '/ats-friendly-government-education-non-profit-resume-builder',
      features: ['Government', 'Non-Profit', 'Public Service'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Teacher Resume Templates',
      description: 'Education and teaching resume templates for educators at all levels.',
      icon: <FiBook className={styles.templateIcon} />,
      link: '/ats-friendly-teacher-resume-builder',
      features: ['Teacher', 'Educator', 'Instruction'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Legal Resume Templates',
      description: 'Legal industry resume templates for lawyers, paralegals, and legal staff.',
      icon: <FiShield className={styles.templateIcon} />,
      link: '/ats-friendly-legal-resume-builder',
      features: ['Lawyer', 'Paralegal', 'Legal Assistant'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Security Guard Resume Templates',
      description: 'Security and protection resume templates for guards and officers.',
      icon: <FiShield className={styles.templateIcon} />,
      link: '/ats-friendly-security-guard-resume-builder',
      features: ['Security Officer', 'Protection', 'Guard'],
      color: '#000000'
    },

    // Retail, Logistics & Services Templates (6 links)
    {
      title: 'ATS-Friendly Retail Resume Templates',
      description: 'Retail industry resume templates for customer-facing and sales roles.',
      icon: <FiShoppingCart className={styles.templateIcon} />,
      link: '/ats-friendly-consumer-retail-resume-builder',
      features: ['Retail Sales', 'Store Manager', 'Customer Service'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Retail Associate Resume Templates',
      description: 'Retail associate and store staff resume templates for entry-level positions.',
      icon: <FiShoppingCart className={styles.templateIcon} />,
      link: '/ats-friendly-retail-associate-resume-builder',
      features: ['Store Associate', 'Sales Clerk', 'Retail Staff'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Logistics Resume Templates',
      description: 'Logistics and supply chain resume templates for transportation professionals.',
      icon: <FiTruck className={styles.templateIcon} />,
      link: '/ats-friendly-logistics-transportation-resume-builder',
      features: ['Supply Chain', 'Logistics', 'Transportation'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Driver Resume Templates',
      description: 'Driving and transportation resume templates for CDL holders.',
      icon: <FiTruck className={styles.templateIcon} />,
      link: '/ats-friendly-driver-resume-builder',
      features: ['CDL Driver', 'Delivery', 'Transportation'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Warehouse Resume Templates',
      description: 'Warehouse and distribution resume templates for logistics workers.',
      icon: <FiPackage className={styles.templateIcon} />,
      link: '/ats-friendly-warehouse-worker-resume-builder',
      features: ['Warehouse', 'Distribution', 'Logistics'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Chef & Cook Resume Templates',
      description: 'Culinary and food service resume templates for chefs and cooks.',
      icon: <FiCoffee className={styles.templateIcon} />,
      link: '/ats-friendly-chef-cook-resume-builder',
      features: ['Chef', 'Cook', 'Food Service'],
      color: '#000000'
    },

    // Emerging Industries Templates (2 links)
    {
      title: 'ATS-Friendly Sustainability Resume Templates',
      description: 'Sustainability and green industries resume templates for environmental roles.',
      icon: <FaLeaf className={styles.templateIcon} />,
      link: '/ats-friendly-sustainability-and-green-industries-resume-builder',
      features: ['Sustainability', 'Green Energy', 'Environmental'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Free Resume Templates',
      description: 'Universal free resume templates suitable for all industries and career levels.',
      icon: <FiFileText className={styles.templateIcon} />,
      link: '/free-resume-builder',
      features: ['All Industries', 'Free Templates', 'Universal Design'],
      color: '#000000'
    }
  ];

  // Features for the page
  const pageFeatures = [
    {
      icon: <FiCheck className={styles.featureIcon} />,
      title: '100% ATS Optimized Templates',
      description: 'Every resume template is rigorously tested to pass major Applicant Tracking Systems'
    },
    {
      icon: <FiDownload className={styles.featureIcon} />,
      title: 'Instant Free Download',
      description: 'Download your customized resume immediately - no signup required'
    },
    {
      icon: <FiStar className={styles.featureIcon} />,
      title: 'Industry-Specific Designs',
      description: 'Professionally designed templates tailored to industry standards'
    },
    {
      icon: <FiFileText className={styles.featureIcon} />,
      title: 'Easy Customization',
      description: 'Simple fill-in-the-blank format with smart content suggestions'
    },
    {
      icon: <FiAward className={styles.featureIcon} />,
      title: 'Proven Interview Results',
      description: 'Users report 3x more interview callbacks with our templates'
    },
    {
      icon: <FiSettings className={styles.featureIcon} />,
      title: 'Mobile-Friendly Editor',
      description: 'Create and edit your resume from any device'
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What makes a resume template ATS-friendly?",
      answer: "ATS-friendly resume templates use clean formatting, standard sections, proper keyword placement, and avoid graphics/tables that confuse Applicant Tracking Systems."
    },
    {
      question: "Are these resume templates really free to download?",
      answer: "Yes, all our resume templates are completely free with no hidden costs. You can customize and download them in multiple formats without any watermarks."
    },
    {
      question: "Which industries are covered by your ATS resume templates?",
      answer: "We offer ATS-optimized resume templates for medical/healthcare, technology, finance, government, manufacturing, retail, logistics, and all major industries."
    },
    {
      question: "How do I customize the resume templates?",
      answer: "Simply select your template, fill in your information using our easy editor, and download. No design skills needed - everything is pre-formatted."
    },
    {
      question: "Can I use these templates for executive-level positions?",
      answer: "Yes, we offer specialized CEO and executive resume templates designed specifically for C-suite applications and senior leadership roles."
    },
    {
      question: "Do you offer templates for career changers?",
      answer: "Yes, our universal templates are perfect for career changers, with formats that highlight transferable skills and optimize for ATS keyword matching."
    }
  ];

  return (
    <div className={styles.templatesPage} lang="en-US">
      {/* SEO Head Section */}
      <Head>
        <title>ATS-Friendly Resume Templates 2026 | Industry-Specific Professional Templates</title>
        <meta name="title" content="ATS-Friendly Resume Templates 2026 | Industry-Specific Professional Templates" />
        <meta name="description" content="Browse 45+ ATS-optimized resume templates for medical, tech, finance, government, manufacturing, retail, logistics & executive roles. Free downloads, no registration required." />
        <meta name="keywords" content="ATS resume templates, free resume templates 2026, medical resume template, tech resume template, finance resume template, government resume template, manufacturing resume, retail resume template, logistics resume, CEO resume template" />
        
        {/* Technical SEO Meta Tags */}
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.professionalresumefree.com/resume-templates" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ATS-Friendly Resume Templates 2026 | Industry-Specific Professional Templates" />
        <meta property="og:description" content="Browse 45+ ATS-optimized resume templates for medical, tech, finance, government, manufacturing, retail, logistics & executive roles." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/resume-templates" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ATS-Friendly Resume Templates 2026 | Free Downloads" />
        <meta name="twitter:description" content="Browse 45+ ATS-optimized resume templates for medical, tech, finance, government, manufacturing, retail, logistics & executive roles." />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data-main"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "ATS-Friendly Resume Templates 2026",
              "description": "Collection of 45+ ATS-optimized resume templates for various industries",
              "url": "https://www.professionalresumefree.com/resume-templates",
              "numberOfItems": templateCategories.length,
              "datePublished": safeCurrentDate,
              "dateModified": safeLastModifiedDate
            })
          }}
        />
      </Head>

      {/* Additional Scripts */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `
        }}
      />

      {/* Hidden Freshness Indicators */}
      <div className={styles.freshnessIndicator} style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="template-count" content={templateCategories.length} />
        <meta name="last-reviewed" content={safeCurrentDate} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.container}>
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className={styles.breadcrumbLink} itemProp="item">
                <FiHome className={styles.breadcrumbIcon} />
                <span className={styles.breadcrumbText} itemProp="name">Home</span>
                <meta itemProp="position" content="1" />
              </Link>
            </li>
            <li className={styles.breadcrumbSeparator}>
              <FiChevronRight />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/resume-templates" className={styles.breadcrumbLink} itemProp="item">
                <span className={styles.breadcrumbText} itemProp="name">ATS Resume Templates 2026</span>
                <meta itemProp="position" content="2" />
              </Link>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className={styles.heroSection} role="banner">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.trustBadge}>
              <FiStar className={styles.starIcon} />
              <span className={styles.trustBadgeText}>Trusted by 4M+ Job Seekers | Rated 4.9/5 | Free Forever</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Professional ATS-Friendly Resume Templates <span className={styles.highlightText}>for Every Industry</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Download <strong>100% ATS-optimized resume templates</strong> designed specifically for your industry. Each template is tested to pass Applicant Tracking Systems.
            </p>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{templateCategories.length}+</span>
                <span className={styles.statLabel}>Specialized Templates</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>ATS Optimized</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9/5</span>
                <span className={styles.statLabel}>User Rating</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>0$</span>
                <span className={styles.statLabel}>Free Forever</span>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <Link
                href="#templates-grid"
                className={styles.sectionButton}
                aria-label="Browse all ATS-friendly resume templates"
              >
                <span className={styles.buttonText}>Browse All Templates</span>
                <FiArrowRight className={styles.buttonIcon} />
              </Link>
              
              <Link
                href="/free-resume-tools"
                className={styles.sectionButton}
                aria-label="Try our free resume tools with ATS optimization"
              >
                <FiTool className={styles.buttonIcon} />
                <span className={styles.buttonText}>Try Free Resume Tools</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Template Categories Grid */}
      <section 
        id="templates-grid" 
        className={styles.templatesSection} 
        aria-labelledby="templates-title"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="templates-title">Browse ATS-Optimized Resume Templates by Industry</h2>
            <p className={styles.sectionSubtitle}>
              Each professionally designed template is specifically optimized to pass Applicant Tracking Systems in your industry.
            </p>
          </div>
          
          <div className={styles.templatesGrid} itemScope itemProp="itemListElement">
            {templateCategories.map((template, index) => (
              <TemplateCard 
                key={index} 
                {...template} 
                index={index} 
                currentDate={safeCurrentDate}
                position={index + 1}
              />
            ))}
          </div>
          
          <div className={styles.sectionCta}>
            <Link href="/free-resume-builder" className={styles.sectionButton}>
              <span>Start Building Your Resume Now</span>
              <FiArrowRight className={styles.sectionButtonIcon} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection} aria-labelledby="features-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="features-title">Why Our ATS Resume Templates Get Results</h2>
            <p className={styles.sectionSubtitle}>
              Professional design combined with technical ATS optimization ensures your resume reaches human recruiters.
            </p>
          </div>
          
          <div className={styles.featuresGrid}>
            {pageFeatures.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIconContainer}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorksSection} aria-labelledby="how-it-works-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="how-it-works-title">Create Your ATS-Optimized Resume in 3 Steps</h2>
            <p className={styles.sectionSubtitle}>
              Get a professional, interview-winning resume in minutes with our easy process
            </p>
          </div>
          
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Choose Your Industry Template</h3>
              <p className={styles.stepDescription}>Select from our ATS-optimized templates designed for your specific industry</p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Customize with Smart Suggestions</h3>
              <p className={styles.stepDescription}>Fill in your information using our guided forms with ATS keyword optimization</p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Download & Start Applying</h3>
              <p className={styles.stepDescription}>Download your professional resume in PDF or Word format - completely free</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection} aria-labelledby="faq-title" itemScope itemType="https://schema.org/FAQPage">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to know about our ATS-friendly resume templates
            </p>
          </div>
          
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className={styles.faqQuestion} itemProp="name">{faq.question}</h3>
                <div className={styles.faqAnswer} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Transform Your Job Search?</h2>
            <p className={styles.ctaSubtitle}>
              Join 4 million+ job seekers who landed interviews faster with our ATS-optimized resume templates.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link
                href="/free-resume-builder"
                className={styles.sectionButton}
                aria-label="Create your free ATS-optimized resume now"
              >
                <span className={styles.ctaButtonText}>Create Free Resume Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </Link>
            </div>
            
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>No credit card required • Free forever • No watermarks • ATS Optimized</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Template Card Component
const TemplateCard = ({ title, description, icon, link, features, color, index, currentDate, position }) => {
  return (
    <div 
      className={styles.templateCard}
      itemScope
      itemType="https://schema.org/ListItem"
      itemProp="itemListElement"
      role="article"
      aria-label={title}
    >
      <meta itemProp="position" content={position} />
      
      <div className={styles.templateHeader}>
        <div className={styles.templateIconContainer} style={{ backgroundColor: color ? `${color}15` : '#f8f9fa' }}>
          {icon}
        </div>
        <h3 className={styles.templateTitle} itemProp="name">{title}</h3>
      </div>
      
      <p className={styles.templateDescription} itemProp="description">{description}</p>
      
      <div className={styles.templateFeatures}>
        {features.map((feature, idx) => (
          <span key={idx} className={styles.featureTag}>{feature}</span>
        ))}
      </div>
      
      <Link 
        href={link}
        className={styles.templateLink}
        aria-label={`View ${title} template details`}
        itemProp="url"
      >
        View Template Details
        <FiArrowRight className={styles.linkIcon} />
      </Link>
      
      <div className={styles.cardDecoration} style={{ backgroundColor: color || '#212529' }}></div>
      
      {/* Hidden structured data */}
      <div style={{ display: 'none' }}>
        <meta itemProp="dateCreated" content={currentDate} />
        <span itemProp="item">{title} - ATS Resume Template</span>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  
  // Generate dates for SEO freshness
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();
  
  // Generate review dates for structured data
  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  // Generate FAQ dates for structured data
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
        faqDates,
        breadcrumbData: [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.professionalresumefree.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "ATS Resume Templates 2026",
            "item": "https://www.professionalresumefree.com/resume-templates"
          }
        ]
      },
      buildTimestamp
    },
    revalidate: 3600
  };
}

export default ResumeTemplates;