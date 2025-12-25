import Head from 'next/head';
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
  FiUsers
} from 'react-icons/fi';
import styles from './ResumeTemplates.module.css';

const ResumeTemplates = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Template categories data
  const templateCategories = [
    {
      title: 'ATS-Friendly Universal Resume',
      description: 'Universal ATS-friendly resume optimized for any industries',
      icon: <FiUsers className={styles.templateIcon} />,
      link: '/free-resume-builder',
      features: ['Logistics', 'Legal', 'Human Resources', 'Operations Management', 'And More...'],
    },
    {
      title: 'ATS-Friendly Medical Resume',
      description: 'Professional medical resume optimized for healthcare ATS systems',
      icon: <FiHeart className={styles.templateIcon} />,
      link: '/ats-friendly-medical-resume-builder',
      features: ['Nursing', 'Doctors', 'Healthcare Admin', 'Pharmacy'],
      color: ''
    },
    {
      title: 'ATS-Friendly Tech Resume',
      description: 'Professional tech resume optimized for technology ATS systems',
      icon: <FiUser className={styles.templateIcon} />,
      link: '/ats-friendly-tech-resume-builder',
      features: ['Software Engineer', 'UI/UX Designer', 'Ethical Hacker', 'Database Administrator'],
      color: ''
    },
    {
      title: 'ATS-Friendly Finance Resume',
      description: 'Finance and accounting resumes that pass financial industry ATS',
      icon: <FiBriefcase className={styles.templateIcon} />,
      link: '/ats-friendly-finance-resume-builder',
      features: ['Accounting', 'Banking', 'Financial Analysis', 'Investment'],
      color: ''
    },
    {
      title: 'ATS-Friendly Government, Education, & Non-Profit Resume',
      description: 'Resumes optimized for public sector and non-profit ATS requirements',
      icon: <FiUsers className={styles.templateIcon} />,
      link: '/ats-friendly-government-education-non-profit-resume-builder',
      features: ['Government', 'Teaching', 'Non-Profit', 'Public Service'],
      color: ''
    },
    {
      title: 'ATS-Friendly Industrial, Manufacturing Resume',
      description: 'Industry-specific resumes for manufacturing and industrial sectors',
      icon: <FiPackage className={styles.templateIcon} />,
      link: '/ats-friendly-industrial-manufacturing-resume-builder',
      features: ['Manufacturing', 'Engineering', 'Production', 'Quality Control'],
      color: ''
    },
    {
      title: 'ATS-Friendly Consumer, Retail Resume',
      description: 'Retail and consumer-facing job resumes with ATS optimization',
      icon: <FiShoppingCart className={styles.templateIcon} />,
      link: '/ats-friendly-consumer-retail-resume-builder',
      features: ['Retail', 'Customer Service', 'Sales', 'Merchandising'],
      color: ''
    },
    {
      title: 'ATS-Friendly Transportation, Logistics Resume',
      description: 'Logistics and transportation industry ATS-compliant resumes',
      icon: <FiTruck className={styles.templateIcon} />,
      link: '/ats-friendly-logistics-transportation-resume-builder',
      features: ['Logistics', 'Supply Chain', 'Transportation', 'Warehouse'],
      color: ''
    },
    {
      title: 'ATS-Friendly CEO Resume',
      description: 'Executive-level resumes designed for top-tier ATS systems',
      icon: <FiUser className={styles.templateIcon} />,
      link: '/ats-friendly-ceo-resume-builder',
      features: ['Executive', 'Leadership', 'C-Suite', 'Board Level'],
      color: ''
    }
  ];

  // Features for the page
  const pageFeatures = [
    {
      icon: <FiCheck className={styles.featureIcon} />,
      title: '100% ATS Optimized',
      description: 'Every template is tested to pass major Applicant Tracking Systems'
    },
    {
      icon: <FiDownload className={styles.featureIcon} />,
      title: 'Instant Download',
      description: 'Download in PDF or Word format immediately after customization'
    },
    {
      icon: <FiStar className={styles.featureIcon} />,
      title: 'Professional Designs',
      description: 'Industry-specific designs created by career experts'
    },
    {
      icon: <FiFileText className={styles.featureIcon} />,
      title: 'Easy Customization',
      description: 'Simple fill-in-the-blank format with smart suggestions'
    }
  ];

  

  return (
    <div className={styles.templatesPage} itemScope itemType="https://schema.org/ItemList">
      {/* SEO Meta Tags */}
      <Head>
        <title itemProp="name">ATS-Friendly Resume Templates for Every Industry | Professional Resume Templates 2026</title>
        <meta name="title" content="ATS-Friendly Resume Templates for Every Industry | Professional Resume Templates 2026" />
        <meta name="description" content="Browse our collection of ATS-optimized resume templates for medical, finance, government, manufacturing, retail, logistics, and executive roles. Free downloads available." />
        
        <meta name="keywords" content="ATS resume templates, free resume templates, medical resume template, finance resume, government resume, manufacturing resume, retail resume template, logistics resume, CEO resume, professional resume templates, ATS friendly templates, industry specific resumes" />
        
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="ATS-Friendly Resume Templates for Every Industry | Professional Resume Templates 2026" />
        <meta property="og:description" content="Browse our collection of ATS-optimized resume templates for medical, finance, government, manufacturing, retail, logistics, and executive roles." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com/resume-templates" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "ATS-Friendly Resume Templates",
              "description": "Collection of professionally designed ATS-optimized resume templates for various industries",
              "numberOfItems": templateCategories.length,
              "itemListElement": templateCategories.map((template, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": template.title,
                  "description": template.description,
                  "url": `https://www.professionalresumefree.com${template.link}`
                }
              }))
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className={styles.heroSection} itemScope itemType="https://schema.org/WPHeader">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.trustBadge}>
              <FiStar className={styles.starIcon} />
              <span>Professional ATS-Optimized Templates | Trusted by 4M+ Job Seekers</span>
            </div>
            
            <h1 className={styles.heroTitle} itemProp="headline">
              ATS-Friendly Resume Templates for <span className={styles.gradientText}>Every Industry</span>
            </h1>
            
            <p className={styles.heroSubtitle} itemProp="description">
              Choose from our collection of professionally designed resume templates specifically optimized to pass Applicant Tracking Systems (ATS). Each template is tailored to industry standards and designed to help you land more interviews.
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
            </div>
          </div>
        </div>
      </section>

      {/* Template Categories Grid */}
      <section className={styles.templatesSection} aria-labelledby="templates-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="templates-title">Browse ATS-Friendly Resume Templates by Industry</h2>
            <p className={styles.sectionSubtitle}>
              Each template is professionally designed and optimized to pass Applicant Tracking Systems used in your specific industry.
            </p>
          </div>
          
          <div className={styles.templatesGrid}>
            {templateCategories.map((template, index) => (
              <TemplateCard key={index} {...template} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection} aria-labelledby="features-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="features-title">Why Choose Our ATS Resume Templates</h2>
            <p className={styles.sectionSubtitle}>
              Our templates are designed with both aesthetics and functionality in mind, ensuring you make the best impression with both ATS systems and human recruiters.
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

      {/* How It Works */}
      <section className={styles.howItWorksSection} aria-labelledby="how-it-works-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="how-it-works-title">How to Use Our Resume Templates</h2>
            <p className={styles.sectionSubtitle}>
              Create a professional, ATS-optimized resume in just a few simple steps
            </p>
          </div>
          
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Choose Your Template</h3>
              <p className={styles.stepDescription}>Select the template that best matches your industry and career level</p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Customize Your Content</h3>
              <p className={styles.stepDescription}>Fill in your information using our easy-to-edit format</p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Optimize for ATS</h3>
              <p className={styles.stepDescription}>Use our built-in suggestions to improve keyword optimization</p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Download & Apply</h3>
              <p className={styles.stepDescription}>Download in your preferred format and start applying to jobs</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// Template Card Component
const TemplateCard = ({ title, description, icon, link, features, color, index }) => {
  return (
    <div 
      className={styles.templateCard}
      style={{ '--accent-color': color }}
      itemScope
      itemType="https://schema.org/CreativeWork"
      role="article"
      aria-label={title}
    >
      <div className={styles.templateHeader}>
        <div className={styles.templateIconContainer} style={{ backgroundColor: `${color}15` }}>
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
        aria-label={`View ${title} templates`}
        itemProp="url"
      >
        View Template
        <FiArrowRight className={styles.linkIcon} />
      </Link>
      
      <div className={styles.cardDecoration} style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default ResumeTemplates;