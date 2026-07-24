// pages/resume-templates.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
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
  FiActivity,
  FiPenTool,
  FiLayout
} from 'react-icons/fi';
import { 
  FaBuilding, 
  FaClipboard, 
  FaLeaf,
  FaHospitalAlt
} from 'react-icons/fa';

// ===== INLINE CRITICAL CSS FOR MAXIMUM SPEED & CENTERED LAYOUT =====
const criticalCSS = `
  /* Reset & Base Styles */
  * { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
  }
  
  html { 
    -webkit-text-size-adjust: 100%; 
    -moz-text-size-adjust: 100%; 
    text-size-adjust: 100%;
    scroll-behavior: smooth;
  }
  
  body { 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
    line-height: 1.5; 
    color: #111111; 
    background: #ffffff; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  #__next, main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  img, svg { 
    max-width: 100%; 
    height: auto; 
    display: block;
  }
  
  /* Container System - Fluid & Responsive - CENTERED */
  .container { 
    width: 100%;
    max-width: 1280px; 
    margin: 0 auto; 
    padding: 0 clamp(16px, 4vw, 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Typography - Fluid & Overflow Protected - CENTERED */
  h1, h2, h3, h4, p {
    text-align: center;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  
  h1 { 
    font-size: clamp(2rem, 6vw, 3.5rem); 
    line-height: 1.2; 
    word-wrap: break-word; 
    overflow-wrap: break-word; 
  }
  
  h2 { 
    font-size: clamp(1.75rem, 5vw, 2.5rem); 
    line-height: 1.3; 
    word-wrap: break-word; 
    margin-bottom: clamp(16px, 3vw, 24px);
  }
  
  h3 { 
    font-size: clamp(1.25rem, 4vw, 1.5rem); 
    line-height: 1.4; 
    word-wrap: break-word; 
  }
  
  h4 { 
    font-size: clamp(1rem, 3vw, 1.125rem); 
    line-height: 1.5; 
    word-wrap: break-word; 
  }
  
  p { 
    font-size: clamp(1rem, 2.5vw, 1.125rem); 
    word-wrap: break-word; 
    overflow-wrap: break-word; 
    color: #4b5563;
    line-height: 1.6;
  }
  
  /* Breadcrumb Navigation - CENTERED */
  .breadcrumb {
    background: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
    padding: 12px 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  .breadcrumb .container {
    align-items: flex-start;
  }
  
  .breadcrumb ol {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
  }
  
  .breadcrumb li {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  
  .breadcrumbSeparator {
    color: #9ca3af;
    display: inline-flex;
    align-items: center;
  }
  
  .breadcrumbSeparator svg {
    width: 16px;
    height: 16px;
  }
  
  .breadcrumbLink {
    color: #111111;
    text-decoration: none;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
    white-space: nowrap;
  }
  
  .breadcrumbLink:hover {
    border-bottom-color: #111111;
  }
  
  .breadcrumbIcon {
    width: 16px;
    height: 16px;
  }
  
  /* Hero Section - CENTERED */
  .heroSection {
    background: #ffffff;
    padding: clamp(40px, 8vw, 60px) 0;
    border-bottom: 1px solid #e5e7eb;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  .heroContent {
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .heroTitle {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .highlightText {
    color: #111111;
    font-weight: 700;
    position: relative;
    display: inline-block;
  }
  
  .highlightText::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 8px;
    background: #f3f4f6;
    z-index: -1;
  }
  
  .heroSubtitle {
    font-size: clamp(1.1rem, 3vw, 1.25rem);
    max-width: 800px;
    margin-bottom: 32px;
    color: #4b5563;
    text-align: center;
  }
  
  .heroSubtitle strong {
    color: #111111;
  }

  /* Hero Image Container - CENTERED */
  .hero-image-container {
    width: 100%;
    max-width: 700px;
    margin: 0 auto 40px;
    padding: 0 16px;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
  }
  
  @media (min-width: 1024px) {
    .hero-image-container {
      max-width: 650px;
    }
  }
  
  @media (min-width: 1280px) {
    .hero-image-container {
      max-width: 600px;
    }
  }
  
  .hero-image-container img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  /* Hero Stats - CENTERED */
  .heroStats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(16px, 3vw, 24px);
    margin: 0 0 40px 0;
    width: 100%;
    max-width: 800px;
  }
  
  @media (max-width: 640px) {
    .heroStats {
      gap: 12px;
    }
  }
  
  @media (max-width: 480px) {
    .heroStats {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
  
  .statItem {
    background: #f9fafb;
    padding: clamp(16px, 3vw, 20px);
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .statNumber {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 700;
    color: #111111;
    line-height: 1.2;
    margin-bottom: 4px;
  }
  
  .statLabel {
    font-size: 0.9rem;
    color: #6b7280;
    font-weight: 500;
  }
  
  /* Button System - CENTERED */
  .ctaButtons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: clamp(12px, 2vw, 16px);
    margin: 32px 0;
    width: 100%;
  }
  
  .sectionButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: clamp(12px, 2vw, 14px) clamp(20px, 4vw, 28px);
    border-radius: 8px;
    font-weight: 600;
    font-size: clamp(0.95rem, 2.5vw, 1rem);
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
    border: 2px solid transparent;
    white-space: normal;
    text-align: center;
    min-height: 48px;
    background: #111111;
    color: #ffffff;
    border-color: #111111;
  }
  
  .sectionButton:hover {
    background: #333333;
    border-color: #333333;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
  }
  
  .sectionButton svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
  
  @media (max-width: 640px) {
    .ctaButtons {
      flex-direction: column;
      align-items: center;
    }
    
    .sectionButton {
      width: 100%;
      max-width: 350px;
    }
  }
  
  /* Section Styles - CENTERED */
  .templatesSection, .featuresSection, .howItWorksSection, .faqSection {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: clamp(40px, 8vw, 60px) 0;
  }
  
  .sectionHeader {
    text-align: center;
    margin-bottom: clamp(32px, 6vw, 48px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .sectionTitle {
    margin-bottom: 16px;
    max-width: 900px;
    text-align: center;
  }
  
  .sectionSubtitle {
    font-size: clamp(1rem, 2.5vw, 1.125rem);
    color: #6b7280;
    max-width: 700px;
    text-align: center;
  }
  
  /* Templates Grid - CENTERED */
  .templatesSection {
    background: #ffffff;
  }
  
  .templatesGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
    gap: clamp(20px, 3vw, 24px);
    margin: 40px 0;
    width: 100%;
  }
  
  .templateCard {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: clamp(20px, 4vw, 24px);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    width: 100%;
    text-align: left;
  }
  
  .templateCard:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 30px -10px rgba(0,0,0,0.1);
  }
  
  .cardDecoration {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
  
  .templateCard:hover .cardDecoration {
    opacity: 1;
  }
  
  .templateHeader {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }
  
  .templateIconContainer {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9fafb;
    flex-shrink: 0;
  }
  
  .templateIconContainer svg {
    width: 24px;
    height: 24px;
    color: #111111;
  }
  
  .templateTitle {
    font-size: 1.1rem;
    font-weight: 600;
    color: #111111;
    flex: 1;
    line-height: 1.4;
    text-align: left;
  }
  
  .templateDescription {
    color: #6b7280;
    margin-bottom: 16px;
    font-size: 0.95rem;
    line-height: 1.5;
    flex: 1;
    text-align: left;
  }
  
  .templateFeatures {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
    justify-content: flex-start;
  }
  
  .featureTag {
    background: #f3f4f6;
    color: #111111;
    padding: 4px 12px;
    border-radius: 50px;
    font-size: 0.8rem;
    border: 1px solid #e5e7eb;
    white-space: nowrap;
  }
  
  @media (max-width: 480px) {
    .featureTag {
      white-space: normal;
      word-break: break-word;
    }
  }
  
  .templateLink {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #111111;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    margin-top: auto;
    padding: 8px 0;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
    align-self: flex-start;
  }
  
  .templateLink:hover {
    border-bottom-color: #111111;
  }
  
  .linkIcon {
    width: 16px;
    height: 16px;
    transition: transform 0.2s;
  }
  
  .templateLink:hover .linkIcon {
    transform: translateX(4px);
  }
  
  /* Features Section - CENTERED */
  .featuresSection {
    background: #f9fafb;
  }
  
  .featuresGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: clamp(20px, 3vw, 24px);
    width: 100%;
  }
  
  .featureCard {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: clamp(20px, 4vw, 24px);
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .featureIconContainer {
    width: 64px;
    height: 64px;
    background: #f3f4f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
  }
  
  .featureIconContainer svg {
    width: 32px;
    height: 32px;
    color: #111111;
  }
  
  .featureTitle {
    font-size: 1.1rem;
    margin-bottom: 12px;
    color: #111111;
    text-align: center;
  }
  
  .featureDescription {
    color: #6b7280;
    font-size: 0.95rem;
    line-height: 1.5;
    text-align: center;
  }
  
  /* How It Works Section - CENTERED */
  .howItWorksSection {
    background: #ffffff;
  }
  
  .stepsGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: clamp(20px, 3vw, 24px);
    width: 100%;
  }
  
  .stepCard {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: clamp(24px, 5vw, 32px);
    text-align: center;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .stepNumber {
    width: 48px;
    height: 48px;
    background: #111111;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 auto 20px;
  }
  
  .stepTitle {
    font-size: 1.2rem;
    margin-bottom: 12px;
    color: #111111;
    text-align: center;
  }
  
  .stepDescription {
    color: #6b7280;
    font-size: 0.95rem;
    line-height: 1.5;
    text-align: center;
  }
  
  /* FAQ Section - CENTERED */
  .faqSection {
    background: #f9fafb;
  }
  
  .faqGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: clamp(20px, 3vw, 24px);
    width: 100%;
  }
  
  @media (max-width: 640px) {
    .faqGrid {
      grid-template-columns: 1fr;
    }
  }
  
  .faqItem {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: clamp(20px, 4vw, 24px);
    height: 100%;
  }
  
  .faqQuestion {
    font-size: 1.1rem;
    margin-bottom: 12px;
    color: #111111;
    line-height: 1.4;
    text-align: left;
  }
  
  .faqAnswer {
    color: #6b7280;
    font-size: 0.95rem;
    line-height: 1.6;
    text-align: left;
  }
  
  /* CTA Section - CENTERED */
  .ctaSection {
    padding: clamp(40px, 8vw, 60px) 0;
    background: #111111;
    color: #ffffff;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  .ctaContent {
    max-width: 700px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .ctaTitle {
    color: #ffffff;
    margin-bottom: 16px;
    text-align: center;
  }
  
  .ctaSubtitle {
    color: #e5e7eb;
    margin-bottom: 32px;
    text-align: center;
  }
  
  .ctaSection .sectionButton {
    background: #ffffff;
    color: #111111;
    border-color: #ffffff;
  }
  
  .ctaSection .sectionButton:hover {
    background: #f3f4f6;
    border-color: #f3f4f6;
  }
  
  .ctaGuarantee {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
    flex-wrap: wrap;
  }
  
  .guaranteeIcon {
    width: 20px;
    height: 20px;
    color: #10b981;
  }
  
  .guaranteeText {
    color: #e5e7eb;
    font-size: 0.9rem;
    text-align: center;
  }
  
  /* Section CTA - CENTERED */
  .sectionCta {
    text-align: center;
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  /* Freshness Indicator (Hidden) */
  .freshnessIndicator {
    display: none;
  }
  
  /* Accessibility */
  .srOnly {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }
  
  /* Utility Classes - CENTERED */
  .textSmall {
    font-size: 0.85rem;
    color: #9ca3af;
    text-align: center;
  }
  
  hr {
    border: none;
    border-top: 1px solid #e5e7eb;
    margin: 40px auto;
    width: 100%;
    max-width: 1280px;
  }

  /* New styles for the bottom link section */
  .related-links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  .related-link-card {
    background: var(--background);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 20px;
    text-decoration: none;
    color: var(--primary);
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .related-link-card:hover {
    border-color: var(--primary);
    background: #f9fafb;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
  .related-link-title {
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 8px;
    display: block;
  }
  .related-link-desc {
    font-size: 0.9rem;
    color: var(--text-light);
    line-height: 1.4;
  }
`;

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

  // Selected Links for Internal Linking (SEO/GEO Boost)
  // Randomly selected from JSON but curated for relevance to Design/Entry Level/Specific Roles
  // Distinct from the top 4 requested links
  const relatedLinks = [
    {
      href: "/modern-resume-design-2026",
      title: "Modern Resume Design Trends 2026",
      desc: "Explore contemporary layouts that balance visual appeal with ATS compatibility for creative and tech roles."
    },
    {
      href: "/how-to-create-a-resume-with-no-experience",
      title: "Resume Guide for No Experience",
      desc: "Step-by-step instructions for students and career changers to build a strong resume without work history."
    },
    {
      href: "/ats-friendly-data-analyst-resume-builder",
      title: "Data Analyst Resume Builder",
      desc: "Specialized templates highlighting SQL, Python, and visualization skills for data professionals."
    },
    {
      href: "/ats-friendly-project-manager-resume-builder",
      title: "Project Manager Resume Templates",
      desc: "Showcase your PMP certification and leadership achievements with these targeted layouts."
    },
    {
      href: "/functional-resume-templates",
      title: "Functional Resume Templates",
      desc: "Skill-based formats ideal for career pivots or hiding employment gaps while highlighting capabilities."
    }
  ];

  // Template categories data with ALL industry-specific links
  // REORDERED: The 4 requested templates are now at the top (indices 0-3)
  const templateCategories = [
    // 1. REQUESTED FIRST
    {
      title: 'ATS-Friendly Free Resume Template',
      description: 'Universal free resume templates suitable for all industries and career levels.',
      icon: <FiFileText />,
      link: '/free-resume-builder',
      features: ['All Industries', 'Free Templates', 'Universal Design'],
      color: '#000000'
    },
    // 2. REQUESTED SECOND
    {
      title: 'ATS-Friendly Medical Resume Template',
      description: 'Healthcare-specific resume templates optimized for medical ATS systems. Designed for doctors, medical assistants, and healthcare administrators.',
      icon: <FiHeart />,
      link: '/ats-friendly-medical-resume-builder',
      features: ['Doctor Resume', 'Medical Assistant', 'Healthcare Admin'],
      color: '#000000'
    },
    // 3. REQUESTED THIRD
    {
      title: 'ATS-Friendly Nursing Resume Template',
      description: 'Nursing resume templates specifically designed for RNs, LPNs, nurse practitioners, and nursing students.',
      icon: <FiHeart />,
      link: '/ats-friendly-nurse-resume-builder',
      features: ['Registered Nurse', 'Nurse Practitioner', 'Nursing Student'],
      color: '#000000'
    },
    // 4. REQUESTED LAST
    {
      title: 'ATS-Friendly Nurse Practitioner Resume Template',
      description: 'Advanced practice nursing resume templates for NPs, PAs, and specialized nursing roles.',
      icon: <FiAward />,
      link: '/ats-friendly-nurse-practitioner-resume-builder',
      features: ['Nurse Practitioner', 'Physician Assistant', 'Specialized Nursing'],
      color: '#000000'
    },

    // Remaining Templates (Original Order Preserved below)
    {
      title: 'ATS-Friendly Veterinary Resume Template',
      description: 'Veterinary and animal healthcare resume templates for veterinarians, vet techs, and animal care professionals.',
      icon: <FiHeart />,
      link: '/ats-friendly-veterinary-and-specialized-healthcare-roles-resume-builder',
      features: ['Veterinarian', 'Vet Tech', 'Animal Care'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Care Assistant Resume Template',
      description: 'Care assistant and support worker resume templates for home health aides and personal care attendants.',
      icon: <FiUsers />,
      link: '/ats-friendly-care-assistant-resume-builder',
      features: ['Home Health Aide', 'Personal Care', 'Support Worker'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Support Worker Resume Template',
      description: 'Support worker and healthcare aide resume templates for patient support roles.',
      icon: <FiUsers />,
      link: '/ats-friendly-support-worker-resume-builder',
      features: ['Support Worker', 'Patient Care', 'Healthcare Aide'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Healthcare Assistant Resume Template',
      description: 'Healthcare support staff resume templates for medical assistants, patient care technicians, and healthcare aides.',
      icon: <FiUsers />,
      link: '/ats-friendly-healthcare-assistant-resume-builder',
      features: ['Patient Care Tech', 'Medical Assistant', 'Healthcare Aide'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Aged Care Resume Template',
      description: 'Aged care and geriatric care resume templates for nursing home staff and senior care professionals.',
      icon: <FiUsers />,
      link: '/ats-friendly-aged-care-worker-resume-builder',
      features: ['Geriatric Care', 'Nursing Home', 'Senior Care'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Medical Assistant Resume Template',
      description: 'Medical assistant and clinical support resume templates for MA certification holders.',
      icon: <FiHeart />,
      link: '/ats-friendly-medical-assistant-resume-builder',
      features: ['Clinical Assistant', 'Medical Office', 'Certified MA'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Registered Practical Nurse Resume Template',
      description: 'RPN and practical nursing resume templates for licensed practical nurses.',
      icon: <FiHeart />,
      link: '/ats-friendly-registered-practical-nurse-resume-builder',
      features: ['LPN Resume', 'Practical Nurse', 'Licensed Nurse'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Disability Support Resume Template',
      description: 'Disability support and special needs care resume templates for support workers.',
      icon: <FiUsers />,
      link: '/ats-friendly-disability-support-worker-resume-builder',
      features: ['Disability Care', 'Special Needs', 'Support Worker'],
      color: '#000000'
    },

    // Technology Industry Templates (6 links)
    {
      title: 'ATS-Friendly Technology Resume Template',
      description: 'Tech industry resume templates engineered to pass technical ATS screening.',
      icon: <FiCpu />,
      link: '/ats-friendly-tech-resume-builder',
      features: ['Software Engineer', 'IT Professional', 'Tech Specialist'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Machine Learning Resume Template',
      description: 'AI and machine learning resume templates for data scientists and ML engineers.',
      icon: <FiActivity />,
      link: '/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder',
      features: ['Data Scientist', 'ML Engineer', 'AI Specialist'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Data Science & Cybersecurity Resume Template',
      description: 'Data science and cybersecurity resume templates for analysts and security professionals.',
      icon: <FiShield />,
      link: '/ats-friendly-data-and-cybersecurity-resume-builder',
      features: ['Cybersecurity', 'Data Analyst', 'Security Analyst'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly AI Adjacent Creative Technical Resume Template',
      description: 'Creative technical roles resume templates for AI-adjacent positions.',
      icon: <FiZap />,
      link: '/ats-ai-adjacent-creative-technical-roles-resume-builder',
      features: ['Creative Tech', 'AI Roles', 'Technical Creative'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Software Developer Resume Template',
      description: 'Software development and engineering resume templates for developers.',
      icon: <FiCode />,
      link: '/ats-friendly-software-developer-and-software-engineer-resume-builder',
      features: ['Developer Resume', 'Software Engineer', 'Programmer'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Data Analyst Resume Template',
      description: 'Data analysis and business intelligence resume templates for analysts.',
      icon: <FiBarChart />,
      link: '/ats-friendly-data-analyst-resume-builder',
      features: ['Business Analyst', 'Data Analysis', 'BI Specialist'],
      color: '#000000'
    },

    // Business & Finance Templates (10 links)
    {
      title: 'ATS-Friendly Finance Resume Template',
      description: 'Finance sector resume templates optimized for financial ATS systems.',
      icon: <FiBriefcase />,
      link: '/ats-friendly-finance-resume-builder',
      features: ['Accountant', 'Financial Analyst', 'Banking'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly CEO Resume Template',
      description: 'Executive-level resume templates designed for C-suite ATS screening.',
      icon: <FiUser />,
      link: '/ats-friendly-ceo-resume-builder',
      features: ['Executive Resume', 'Leadership', 'C-Suite'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Project Manager Resume Template',
      description: 'Project management resume templates for PMP and agile professionals.',
      icon: <FiTarget />,
      link: '/ats-friendly-project-manager-resume-builder',
      features: ['PMP Certified', 'Agile PM', 'Project Lead'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Accountant Resume Template',
      description: 'Accounting and auditing resume templates for CPAs and accountants.',
      icon: <FiDollarSign />,
      link: '/ats-friendly-accountant-resume-builder',
      features: ['CPA Resume', 'Auditor', 'Financial Accountant'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Sales Associate Resume Template',
      description: 'Sales and business development resume templates for sales professionals.',
      icon: <FiTrendingUp />,
      link: '/ats-friendly-sales-associate-resume-builder',
      features: ['Sales Rep', 'Business Dev', 'Account Executive'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Marketing Executive Resume Template',
      description: 'Marketing and advertising resume templates for executives and managers.',
      icon: <FiGlobe />,
      link: '/ats-friendly-marketing-executive-manager-resume-builder',
      features: ['Marketing Manager', 'Advertising', 'Brand Manager'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Business Analyst Resume Template',
      description: 'Business analysis and consulting resume templates for analysts.',
      icon: <FiBarChart />,
      link: '/ats-friendly-business-analyst-resume-builder',
      features: ['Business Consultant', 'Analysis', 'Strategy'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Customer Service Resume Template',
      description: 'Customer service and support resume templates for service professionals.',
      icon: <FiUsers />,
      link: '/ats-friendly-customer-service-resume-builder',
      features: ['Customer Support', 'Service Rep', 'Help Desk'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Administrative Assistant Resume Template',
      description: 'Administrative and office support resume templates for assistants.',
      icon: <FaClipboard />,
      link: '/ats-friendly-administrative-assistant-resume-builder',
      features: ['Office Admin', 'Executive Assistant', 'Administrative'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly HR Assistant Resume Template',
      description: 'Human resources and recruitment resume templates for HR professionals.',
      icon: <FiUsers />,
      link: '/ats-friendly-hr-assistant-coordinator-resume-builder',
      features: ['HR Generalist', 'Recruiter', 'Talent Acquisition'],
      color: '#000000'
    },

    // Engineering & Manufacturing Templates (7 links)
    {
      title: 'ATS-Friendly Engineering Resume Template',
      description: 'Engineering resume templates for civil, mechanical, and electrical engineers.',
      icon: <FiTool />,
      link: '/ats-friendly-engineering-resume-builder',
      features: ['Civil Engineer', 'Mechanical', 'Electrical'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Industrial & Manufacturing Resume Template',
      description: 'Manufacturing industry resume templates for production and quality control.',
      icon: <FiPackage />,
      link: '/ats-friendly-industrial-manufacturing-resume-builder',
      features: ['Production', 'Quality Control', 'Manufacturing'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Automation Resume Template',
      description: 'Automation and robotics resume templates for manufacturing professionals.',
      icon: <FiSettings />,
      link: '/ats-friendly-advanced-manufacturing-and-automation-resume-builder',
      features: ['Robotics', 'Automation', 'Process Control'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Biotechnology Resume Template',
      description: 'Biotech and pharmaceutical resume templates for lab and research roles.',
      icon: <FiActivity />,
      link: '/ats-friendly-biotechnology-resume-builder',
      features: ['Pharma', 'Lab Tech', 'Research'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Electrician Resume Template',
      description: 'Electrical and wiring resume templates for licensed electricians.',
      icon: <FiZap />,
      link: '/ats-friendly-electrician-resume-builder',
      features: ['Licensed Electrician', 'Electrical', 'Wiring'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Plumber Resume Template',
      description: 'Plumbing and pipefitting resume templates for certified plumbers.',
      icon: <FiTool />,
      link: '/ats-friendly-plumber-resume-builder',
      features: ['Certified Plumber', 'Pipefitting', 'Plumbing'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Construction Resume Template',
      description: 'Construction and trade resume templates for skilled workers.',
      icon: <FiTool />,
      link: '/ats-friendly-construction-worker-resume-builder',
      features: ['Construction', 'Trade Worker', 'Skilled Labor'],
      color: '#000000'
    },

    // Education & Public Service Templates (4 links)
    {
      title: 'ATS-Friendly Government & Non-Profit Resume Template',
      description: 'Public sector resume templates compliant with government and non-profit requirements.',
      icon: <FaBuilding />,
      link: '/ats-friendly-government-education-non-profit-resume-builder',
      features: ['Government', 'Non-Profit', 'Public Service'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Teacher Resume Template',
      description: 'Education and teaching resume templates for educators at all levels.',
      icon: <FiBook />,
      link: '/ats-friendly-teacher-resume-builder',
      features: ['Teacher', 'Educator', 'Instruction'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Legal Resume Template',
      description: 'Legal industry resume templates for lawyers, paralegals, and legal staff.',
      icon: <FiShield />,
      link: '/ats-friendly-legal-resume-builder',
      features: ['Lawyer', 'Paralegal', 'Legal Assistant'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Security Guard Resume Template',
      description: 'Security and protection resume templates for guards and officers.',
      icon: <FiShield />,
      link: '/ats-friendly-security-guard-resume-builder',
      features: ['Security Officer', 'Protection', 'Guard'],
      color: '#000000'
    },

    // Retail, Logistics & Services Templates (6 links)
    {
      title: 'ATS-Friendly Retail Resume Template',
      description: 'Retail industry resume templates for customer-facing and sales roles.',
      icon: <FiShoppingCart />,
      link: '/ats-friendly-consumer-retail-resume-builder',
      features: ['Retail Sales', 'Store Manager', 'Customer Service'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Retail Associate Resume Template',
      description: 'Retail associate and store staff resume templates for entry-level positions.',
      icon: <FiShoppingCart />,
      link: '/ats-friendly-retail-associate-resume-builder',
      features: ['Store Associate', 'Sales Clerk', 'Retail Staff'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Logistics Resume Template',
      description: 'Logistics and supply chain resume templates for transportation professionals.',
      icon: <FiTruck />,
      link: '/ats-friendly-logistics-transportation-resume-builder',
      features: ['Supply Chain', 'Logistics', 'Transportation'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Driver Resume Template',
      description: 'Driving and transportation resume templates for CDL holders.',
      icon: <FiTruck />,
      link: '/ats-friendly-driver-resume-builder',
      features: ['CDL Driver', 'Delivery', 'Transportation'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Warehouse Resume Template',
      description: 'Warehouse and distribution resume templates for logistics workers.',
      icon: <FiPackage />,
      link: '/ats-friendly-warehouse-worker-resume-builder',
      features: ['Warehouse', 'Distribution', 'Logistics'],
      color: '#000000'
    },
    {
      title: 'ATS-Friendly Chef & Cook Resume Template',
      description: 'Culinary and food service resume templates for chefs and cooks.',
      icon: <FiCoffee />,
      link: '/ats-friendly-chef-cook-resume-builder',
      features: ['Chef', 'Cook', 'Food Service'],
      color: '#000000'
    },

    // Emerging Industries Templates (2 links)
    {
      title: 'ATS-Friendly Sustainability Resume Template',
      description: 'Sustainability and green industries resume templates for environmental roles.',
      icon: <FaLeaf />,
      link: '/ats-friendly-sustainability-and-green-industries-resume-builder',
      features: ['Sustainability', 'Green Energy', 'Environmental'],
      color: '#000000'
    }
  ];

  // Features for the page
  const pageFeatures = [
    {
      icon: <FiCheck />,
      title: '100% ATS Optimized Templates',
      description: 'Every resume template is rigorously tested to pass major Applicant Tracking Systems'
    },
    {
      icon: <FiDownload />,
      title: 'Instant Free Download',
      description: 'Download your customized resume immediately - no signup required'
    },
    {
      icon: <FiStar />,
      title: 'Industry-Specific Designs',
      description: 'Professionally designed templates tailored to industry standards'
    },
    {
      icon: <FiFileText />,
      title: 'Easy Customization',
      description: 'Simple fill-in-the-blank format with smart content suggestions'
    },
    {
      icon: <FiAward />,
      title: 'Proven Interview Results',
      description: 'Users report 3x more interview callbacks with our templates'
    },
    {
      icon: <FiSettings />,
      title: 'Mobile-Friendly Editor',
      description: 'Create and edit your resume from any device'
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What makes a resume template ATS-friendly?",
      answer: "A fresh layout helps your resume move smoothly through hiring software. Each design skips flashy extras like images or complex charts - simple wins every time. We built them using common headings so machines recognize each part fast. Words matter too - they sit where scanners expect without tricks or clutter. Every version gets tested against real systems such as Workday, Taleo, iCIMS, and Greenhouse. Smooth passage means fewer hiccups on its way to human eyes."
    },
    {
      question: "Are these resume templates really free to download?",
      answer: "Fresh start every time - that's how we built our resume templates, totally free, nothing tucked away. Pick one, tweak it your way, then grab a copy in PDF format. No marks spoiling the page, no sign-up hoop to jump through. Built clean because fairness matters - landing a solid job begins with tools that actually work for you."
    },
    {
      question: "Which industries are covered by your ATS resume templates?",
      answer: "Picking the right look matters when machines scan your job application. Different fields need different wording - healthcare uses terms tech jobs do not. 46+ industries are areas covered, from shipping goods to fixing them, plus office roles too. One size never fits all, especially if software reads first. These layouts match what hiring systems search for in each line of work. Words matter, placement counts, timing changes nothing about being seen."
    },
    {
      question: "How do I customize the resume templates?",
      answer: "Pick a layout you like. Put your details into the tool, step by step. Out comes a clean version ready to save - under quarter of an hour. Skip the guesswork; each field adjusts itself based on what fits your job type. Design know-how? Not required here."
    },
    {
      question: "Can I use these templates for executive-level positions?",
      answer: "Sure thing - our resume designs for CEOs and top executives fit high-level career moves. Built for C-suite jobs, they spotlight big-picture decisions that shaped company growth. Formatting follows smart patterns hiring systems expect at this level. Leadership presence stands clear without clutter. Each layout guides eyes toward influence on profit, scale, and governance. Templates reflect how seasoned leaders communicate value - quietly confident, precisely framed."
    },
    {
      question: "Do you offer templates for career changers?",
      answer: "Fine if you're switching careers - our templates fit just right, built to show off skills that move across jobs while slipping smoothly through resume scanners. Helpful guides come along too, walking step by step on how to frame what you've done so it lands well in a new field."
    }
  ];

  // SEO Keywords array
  const seoKeywords = [
    "ATS resume templates",
    "free resume templates 2026",
    "ATS friendly resume templates",
    "professional resume templates",
    "medical resume template",
    "tech resume template",
    "finance resume template",
    "government resume template",
    "manufacturing resume",
    "retail resume template",
    "logistics resume template",
    "CEO resume template",
    "executive resume templates",
    "ATS optimized resume",
    "applicant tracking system resume",
    "Workday resume template",
    "Taleo compatible resume",
    "iCIMS resume format",
    "nursing resume template",
    "software engineer resume",
    "data analyst resume",
    "project manager resume",
    "HR resume template",
    "marketing resume template",
    "sales resume template",
    "engineering resume template",
    "construction resume",
    "teacher resume template",
    "legal resume template",
    "warehouse resume",
    "driver resume template",
    "chef resume template",
    "sustainability resume",
    "free resume builder 2026",
    "ATS compliant resume",
    "professional resume download"
  ];

  // Structured data - REMOVED duplicate FAQPage (only one FAQPage in @graph)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://professionalresumefree.com/resume-templates",
        "url": "https://professionalresumefree.com/resume-templates",
        "name": "ATS-Friendly Resume Templates 2026 | Professional Templates",
        "description": "Browse ATS-optimized resume templates for medical, tech, finance, government, manufacturing, retail, logistics & executive roles. Free downloads, no registration required.",
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "numberOfItems": templateCategories.length,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://professionalresumefree.com/#website",
          "name": "Professional Resume Free",
          "url": "https://professionalresumefree.com"
        },
        "about": {
          "@type": "Thing",
          "name": "ATS Resume Templates",
          "description": "Applicant Tracking System optimized resume templates for job seekers"
        },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": templateCategories.map((template, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": template.title,
            "description": template.description,
            "url": `https://professionalresumefree.com${template.link}`
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://professionalresumefree.com/resume-templates#faq",
        "mainEntity": faqs.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "WebSite",
        "@id": "https://professionalresumefree.com/#website",
        "url": "https://professionalresumefree.com",
        "name": "Professional Resume Free",
        "description": "Free ATS-optimized resume templates and builder",
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "logo": {
            "@type": "ImageObject",
            "url": "https://professionalresumefree.com/logo.png",
            "width": 512,
            "height": 512
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://professionalresumefree.com/resume-templates#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://professionalresumefree.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "ATS Resume Templates 2026",
            "item": "https://professionalresumefree.com/resume-templates"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "ATS Resume Template Service",
        "provider": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Global"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Job Seekers"
        }
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Inline Critical CSS */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Primary SEO Tags */}
        <title>ATS-Friendly Resume Templates 2026: Professional Templates</title>
        <meta name="title" content="ATS-Friendly Resume Templates 2026: Professional Templates" />
        <meta name="description" content="Browse ATS-optimized resume templates for medical, tech, finance, government, manufacturing, retail, logistics & executive roles. Free downloads, no registration required." />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        
        {/* Technical SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://professionalresumefree.com/resume-templates" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="ATS-Friendly Resume Templates 2026 - Professional Templates" />
        <meta name="chatgpt-fts:description" content="Free ATS-optimized resume templates for medical, tech, finance, and more. No signup required. Download instantly." />
        <meta name="chatgpt-fts:keywords" content="ATS resume templates, free resume templates 2026, industry-specific resume templates, ATS optimized" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - ATS Resume Templates" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ATS-Friendly Resume Templates 2026: Professional Templates" />
        <meta property="og:description" content="Browse ATS-optimized resume templates for medical, tech, finance, government, manufacturing, retail, logistics & executive roles." />
        <meta property="og:image" content="https://professionalresumefree.com/46-free-resume-templates.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://professionalresumefree.com/resume-templates" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ATS-Friendly Resume Templates 2026 | Free Downloads" />
        <meta name="twitter:description" content="Browse ATS-optimized resume templates for medical, tech, finance, government, manufacturing, retail, logistics & executive roles." />
        <meta name="twitter:image" content="https://professionalresumefree.com/46-free-resume-templates.jpeg" />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main>
        {/* Hidden Freshness Indicators */}
        <div className="freshnessIndicator">
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="template-count" content={templateCategories.length} />
          <meta name="last-reviewed" content={safeCurrentDate} />
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="breadcrumbLink" itemProp="item">
                  <FiHome className="breadcrumbIcon" aria-hidden="true" />
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="breadcrumbSeparator" aria-hidden="true">
                <FiChevronRight />
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="breadcrumbText" itemProp="name">ATS Resume Templates 2026</span>
                <meta itemProp="position" content="2" />
                <meta itemProp="item" content="https://professionalresumefree.com/resume-templates" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="heroSection" role="banner">
          <div className="container">
            <div className="heroContent">
              <h1 className="heroTitle">
                Professional ATS-Friendly Resume Templates{' '}
                <span className="highlightText">for Every Industry</span>
              </h1>
              
              <p className="heroSubtitle">
                Download <strong>100% ATS-optimized resume templates</strong> designed specifically for your industry. 
                Each template is tested to pass Applicant Tracking Systems including Workday, Taleo, and iCIMS.
              </p>

              {/* Hero Image - Exactly like homepage layout */}
              <div className="hero-image-container">
                <Image
                  src="/46-free-resume-templates.jpeg"
                  alt="ATS-Friendly Resume Templates Preview - Collection of professional resume templates optimized for applicant tracking systems across healthcare, technology, finance, and more industries"
                  width={1200}
                  height={675}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 700px"
                  quality={90}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>

              {/* Hero Stats - Now with only 3 items */}
              <div className="heroStats">
                <div className="statItem">
                  <span className="statNumber">{templateCategories.length}+</span>
                  <span className="statLabel">Specialized Templates</span>
                </div>
                <div className="statItem">
                  <span className="statNumber">100%</span>
                  <span className="statLabel">ATS Optimized</span>
                </div>
                <div className="statItem">
                  <span className="statNumber">$0</span>
                  <span className="statLabel">Free Forever</span>
                </div>
              </div>

              <div className="ctaButtons">
                <Link
                  href="#templates-grid"
                  className="sectionButton"
                  aria-label="Browse all ATS-friendly resume templates"
                >
                  <span>Browse All Templates</span>
                  <FiArrowRight aria-hidden="true" />
                </Link>
                
                <Link
                  href="/free-resume-tools"
                  className="sectionButton"
                  aria-label="Try our free resume tools with ATS optimization"
                >
                  <FiTool aria-hidden="true" />
                  <span>Try Free Resume Tools</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Template Categories Grid */}
        <section 
          id="templates-grid" 
          className="templatesSection" 
          aria-labelledby="templates-title"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <div className="container">
            <div className="sectionHeader">
              <h2 className="sectionTitle" id="templates-title">
                Browse {templateCategories.length} ATS-Optimized Resume Templates by Industry
              </h2>
              <p className="sectionSubtitle">
                Each professionally designed template is specifically optimized to pass Applicant Tracking Systems in your industry.
              </p>
            </div>
            
            <div className="templatesGrid">
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
            
            <div className="sectionCta">
              <Link href="/free-resume-builder" className="sectionButton">
                <span>Start Building Your Resume Now</span>
                <FiArrowRight className="sectionButtonIcon" aria-hidden="true" />
              </Link>
            </div>
            
            <p className="textSmall" style={{ marginTop: '20px' }}>
              Last updated: {safeCurrentDate} • All templates ATS-validated
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="featuresSection" aria-labelledby="features-title">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="sectionTitle" id="features-title">Why Our ATS Resume Templates Get Results</h2>
              <p className="sectionSubtitle">
                Professional design combined with technical ATS optimization ensures your resume reaches human recruiters.
              </p>
            </div>
            
            <div className="featuresGrid">
              {pageFeatures.map((feature, index) => (
                <div key={index} className="featureCard">
                  <div className="featureIconContainer">
                    {feature.icon}
                  </div>
                  <h3 className="featureTitle">{feature.title}</h3>
                  <p className="featureDescription">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="howItWorksSection" aria-labelledby="how-it-works-title">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="sectionTitle" id="how-it-works-title">Create Your ATS-Optimized Resume in 3 Steps</h2>
              <p className="sectionSubtitle">
                Get a professional, interview-winning resume in minutes with our easy process
              </p>
            </div>
            
            <div className="stepsGrid">
              <div className="stepCard">
                <div className="stepNumber">1</div>
                <h3 className="stepTitle">Choose Your Industry Template</h3>
                <p className="stepDescription">Select from our ATS-optimized templates designed for your specific industry</p>
              </div>
              
              <div className="stepCard">
                <div className="stepNumber">2</div>
                <h3 className="stepTitle">Customize with Smart Suggestions</h3>
                <p className="stepDescription">Fill in your information using our guided forms with ATS keyword optimization</p>
              </div>
              
              <div className="stepCard">
                <div className="stepNumber">3</div>
                <h3 className="stepTitle">Download & Start Applying</h3>
                <p className="stepDescription">Download your professional resume in PDF or Word format - completely free</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - REMOVED duplicate FAQPage itemScope */}
        <section className="faqSection" aria-labelledby="faq-title">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="sectionTitle" id="faq-title">Frequently Asked Questions</h2>
              <p className="sectionSubtitle">
                Everything you need to know about our ATS-friendly resume templates
              </p>
            </div>
            
            <div className="faqGrid">
              {faqs.map((faq, index) => (
                <div key={index} className="faqItem">
                  <h3 className="faqQuestion">{faq.question}</h3>
                  <div className="faqAnswer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED INTERNAL LINKS SECTION - SEO & GEO BOOST */}
        <section className="section" style={{ paddingTop: '20px', background: '#f9fafb' }}>
          <div className="container">
            <div className="card" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
              <h2 className="section-title">More Specialized Resume Resources</h2>
              <p className="section-subtitle">
                Explore additional guides and templates tailored to specific career needs and modern design trends.
              </p>
              
              <div className="related-links-grid">
                {relatedLinks.map((link, index) => (
                  <Link href={link.href} key={index} className="related-link-card">
                    <span className="related-link-title">{link.title}</span>
                    <span className="related-link-desc">{link.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="ctaSection" aria-labelledby="cta-title">
          <div className="container">
            <div className="ctaContent">
              <h2 className="ctaTitle" id="cta-title">Ready to Transform Your Job Search?</h2>
              <p className="ctaSubtitle">
                Join 4 million+ job seekers who landed interviews faster with our ATS-optimized resume templates.
              </p>
              
              <div className="ctaButtons">
                <Link
                  href="/free-resume-builder"
                  className="sectionButton"
                  aria-label="Create your free ATS-optimized resume now"
                >
                  <span>Create Free Resume Now</span>
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
              
              <div className="ctaGuarantee">
                <FiCheck className="guaranteeIcon" aria-hidden="true" />
                <span className="guaranteeText">No credit card required • Free forever • No watermarks • ATS Optimized</span>
              </div>
              
              <p className="textSmall" style={{ marginTop: '20px', color: '#e5e7eb' }}>
                Updated: {safeCurrentDate} • 100% Free • {templateCategories.length}+ Templates
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

// Template Card Component
const TemplateCard = ({ title, description, icon, link, features, color, index, currentDate, position }) => {
  return (
    <div 
      className="templateCard"
      itemScope
      itemType="https://schema.org/ListItem"
      itemProp="itemListElement"
      role="article"
      aria-label={title}
    >
      <meta itemProp="position" content={position} />
      
      <div className="cardDecoration" style={{ backgroundColor: color || '#000000' }} aria-hidden="true"></div>
      
      <div className="templateHeader">
        <div className="templateIconContainer">
          {icon}
        </div>
        <h3 className="templateTitle" itemProp="name">{title}</h3>
      </div>
      
      <p className="templateDescription" itemProp="description">{description}</p>
      
      <div className="templateFeatures">
        {features.map((feature, idx) => (
          <span key={idx} className="featureTag">{feature}</span>
        ))}
      </div>
      
      <Link 
        href={link}
        className="templateLink"
        aria-label={`View ${title} template details`}
        itemProp="url"
      >
        View Template Details
        <FiArrowRight className="linkIcon" aria-hidden="true" />
      </Link>
      
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

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates: Array(6).fill(currentDate),
        faqDates: Array(6).fill(currentDate),
        breadcrumbData: [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://professionalresumefree.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "ATS Resume Templates 2026",
            "item": "https://professionalresumefree.com/resume-templates"
          }
        ]
      },
      buildTimestamp
    },
    revalidate: 3600 // Revalidate every hour
  };
}

export default ResumeTemplates;