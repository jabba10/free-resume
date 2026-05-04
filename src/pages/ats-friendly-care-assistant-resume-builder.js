'use client';
import { useState, useRef } from 'react';
import Head from 'next/head';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiHeart,
  FiBook,
  FiActivity,
  FiShield,
  FiGlobe,
  FiDownload,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiX,
  FiEye,
  FiCheck,
  FiAward,
  FiFileText,
  FiSettings,
  FiStar,
  FiArrowRight,
  FiClock,
  FiHome,
  FiChevronRight as FiChevronRightIcon,
  FiBriefcase,
  FiTool,
  FiTrendingUp,
  FiSearch,
  FiBarChart,
  FiTarget,
  FiLayers,
  FiUsers,
  FiHome as FiHomeIcon,
  FiCalendar,
  FiClipboard,
  FiWatch
} from 'react-icons/fi';
import Link from 'next/link';
import styles from './Resume.module.css';

const Resume = ({ 
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

  // --- Default item factories ---
  const defaultExperience = () => ({
    employer: '',
    position: '',
    clientType: '',
    startDate: '',
    endDate: '',
    description: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultEducation = () => ({
    institution: '',
    qualification: '',
    certificateNumber: '',
    startDate: '',
    endDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultSpecialty = () => ({
    name: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultCertification = () => ({
    name: '',
    issuingAuthority: '',
    certificateNumber: '',
    expiryDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultAffiliation = () => ({
    organization: '',
    membershipType: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultSkill = () => ({
    name: '',
    proficiency: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultLanguage = () => ({
    name: '',
    proficiency: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultReference = () => ({
    name: '',
    relationship: '',
    phone: '',
    email: '',
    isEditing: false,
    editIndex: null
  });

  // --- State ---
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: [],
    education: [],
    specialties: [],
    certifications: [],
    affiliations: [],
    skills: [],
    languages: [],
    references: []
  });

  // Font size state
  const [fontSizes, setFontSizes] = useState({
    name: 14,
    sectionTitle: 10,
    contactInfo: 7,
    jobTitle: 9,
    company: 7,
    qualification: 9,
    institution: 7,
    institutionDate: 6,
    regularText: 8,
    bulletText: 8,
    skillText: 7,
    certificateText: 8
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSpecialty, setCurrentSpecialty] = useState(defaultSpecialty());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentAffiliation, setCurrentAffiliation] = useState(defaultAffiliation());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentReference, setCurrentReference] = useState(defaultReference());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Testimonials for Structured Data
  const testimonials = [
    {
      quote: "As a recent care graduate, this builder helped me create a professional CV that landed me my first job in a care home. The UK-specific templates are perfect!",
      metric: "First Care Job in 3 Weeks",
      name: "Sophie M.",
      role: "Care Assistant",
      company: "Sunrise Care Home"
    },
    {
      quote: "The DBS-check friendly format and CQC-ready templates made all the difference. Got 4 interviews within a week of updating my CV.",
      metric: "4 Interviews in 1 Week",
      name: "James K.",
      role: "Senior Care Assistant",
      company: "NHS Trust"
    },
    {
      quote: "Finally a care assistant CV builder that understands UK care standards and terminology. Landed a promotion to Team Leader using this tool.",
      metric: "Promoted to Team Leader",
      name: "Priya S.",
      role: "Care Team Leader",
      company: "Community Care Service"
    },
    {
      quote: "Being able to highlight my NVQ qualifications properly made my CV stand out. Received three job offers within two weeks.",
      metric: "3 Job Offers in 2 Weeks",
      name: "Michael B.",
      role: "Healthcare Assistant",
      company: "Royal Hospital"
    },
    {
      quote: "The UK care-specific templates actually work! Got callbacks from agencies that previously ignored my applications.",
      metric: "5x More Responses",
      name: "Sarah T.",
      role: "Domiciliary Care Assistant",
      company: "Bluebird Care"
    },
    {
      quote: "Free with proper UK care formatting? Unbeatable value. Best care assistant CV builder I've found for the UK market.",
      metric: "Perfect CV in 15min",
      name: "David R.",
      role: "Mental Health Care Assistant",
      company: "Priory Group"
    }
  ];

  // FAQ Data for Structured Data
  const faqs = [
    {
      question: "Is this care assistant CV builder completely free for UK job seekers?",
      answer: "Yes, our care assistant CV builder is 100% free with no hidden costs. Create, edit, and download your professional care CV in PDF format without any payment required. Designed specifically for UK care industry standards."
    },
    {
      question: "What UK-specific care features does your builder include?",
      answer: "Our builder includes UK care industry features: DBS check section, CQC compliance formatting, NVQ/SVQ qualification templates, UK care standards terminology, NHS-ready formatting, and proper UK address/certification formats."
    },
    {
      question: "Can I download my care assistant CV as PDF without creating an account?",
      answer: "Absolutely! Download your professional care assistant CV in UK-standard PDF format without creating an account. Everything is completely free and accessible immediately for care workers in the UK."
    },
    {
      question: "Are the templates optimised for UK care agencies and NHS applications?",
      answer: "Yes, all templates are specifically designed for UK care industry standards. They're optimised for NHS applications, private care homes, domiciliary care agencies, and UK healthcare recruitment systems."
    },
    {
      question: "How does your care assistant CV builder work for UK job seekers?",
      answer: "Our builder uses UK care industry templates with proper terminology, qualification formatting, and compliance sections. We guide you to highlight care experience, NVQ certifications, and skills that UK care employers look for."
    },
    {
      question: "Can I add my DBS certificate details and care certifications?",
      answer: "Yes, we have dedicated sections for DBS certificate details, NVQ/SVQ qualifications, Care Certificate, First Aid certifications, and all UK-specific care training and compliance documentation."
    }
  ];

  // --- Font Size Handler ---
  const handleFontSizeChange = (key, value) => {
    setFontSizes(prev => ({
      ...prev,
      [key]: Math.max(4, Math.min(24, parseInt(value) || prev[key]))
    }));
  };

  const resetFontSizes = () => {
    setFontSizes({
      name: 14,
      sectionTitle: 10,
      contactInfo: 7,
      jobTitle: 9,
      company: 7,
      qualification: 9,
      institution: 7,
      institutionDate: 6,
      regularText: 8,
      bulletText: 8,
      skillText: 7,
      certificateText: 8
    });
  };

  // --- Utility Functions ---
  const formatSocialUrl = (url) => {
    if (!url) return '';
    return url.replace(/(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const hasContent = () => {
    return (
      formData.fullName ||
      formData.email ||
      formData.summary ||
      formData.experience.length > 0 ||
      formData.education.length > 0 ||
      formData.specialties.length > 0 ||
      formData.certifications.length > 0 ||
      formData.affiliations.length > 0 ||
      formData.skills.length > 0 ||
      formData.languages.length > 0 ||
      formData.references.length > 0
    );
  };

  // --- Item CRUD Functions ---
  const createAddFunction = (key, current, setter, defaultFunc, isValid) => () => {
    if (!isValid()) return;
    const item = { ...current };
    if (item.isEditing) {
      const updated = [...formData[key]];
      updated[item.editIndex] = { ...item, isEditing: false, editIndex: null };
      setFormData({ ...formData, [key]: updated });
    } else {
      setFormData({ ...formData, [key]: [...formData[key], { ...item, isEditing: false, editIndex: null }] });
    }
    setter(defaultFunc());
  };

  const createEditFunction = (key, setter) => (index) => {
    const item = formData[key][index];
    setter({ ...item, isEditing: true, editIndex: index });
  };

  const createDeleteFunction = (key) => (index) => {
    const updated = [...formData[key]];
    updated.splice(index, 1);
    setFormData({ ...formData, [key]: updated });
  };

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, defaultExperience, () => currentExperience.position && currentExperience.employer && currentExperience.startDate);
  
  const editExperience = createEditFunction('experience', setCurrentExperience);
  const deleteExperience = createDeleteFunction('experience');

  const addEducation = createAddFunction('education', currentEducation, setCurrentEducation, defaultEducation, () => currentEducation.institution && currentEducation.qualification);
  
  const editEducation = createEditFunction('education', setCurrentEducation);
  const deleteEducation = createDeleteFunction('education');

  const addSpecialty = createAddFunction('specialties', currentSpecialty, setCurrentSpecialty, defaultSpecialty, () => currentSpecialty.name.trim());
  
  const editSpecialty = createEditFunction('specialties', setCurrentSpecialty);
  const deleteSpecialty = createDeleteFunction('specialties');

  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');

  const addAffiliation = createAddFunction('affiliations', currentAffiliation, setCurrentAffiliation, defaultAffiliation, () => currentAffiliation.organization.trim());
  
  const editAffiliation = createEditFunction('affiliations', setCurrentAffiliation);
  const deleteAffiliation = createDeleteFunction('affiliations');

  const addSkill = createAddFunction('skills', currentSkill, setCurrentSkill, defaultSkill, () => currentSkill.name.trim());
  
  const editSkill = createEditFunction('skills', setCurrentSkill);
  const deleteSkill = createDeleteFunction('skills');

  const addLanguage = createAddFunction('languages', currentLanguage, setCurrentLanguage, defaultLanguage, () => currentLanguage.name.trim());
  
  const editLanguage = createEditFunction('languages', setCurrentLanguage);
  const deleteLanguage = createDeleteFunction('languages');

  const addReference = createAddFunction('references', currentReference, setCurrentReference, defaultReference, () => currentReference.name.trim() && currentReference.relationship.trim());
  
  const editReference = createEditFunction('references', setCurrentReference);
  const deleteReference = createDeleteFunction('references');

  // --- PDF Generation ---
  const generatePDF = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    try {
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      
      if (!hasContent()) {
        alert("Please add content before generating PDF.");
        return;
      }

      const el = resumeRef.current;
      if (!el) return;

      const originalStates = {
        display: el.style.display,
        position: el.style.position,
        width: el.style.width,
        height: el.style.height
      };

      Object.assign(el.style, {
        display: 'block',
        position: 'fixed',
        left: '0',
        top: '0',
        width: '210mm',
        height: '297mm',
        transform: 'none',
        zIndex: '9999',
        visibility: 'visible',
        opacity: '1',
        background: '#ffffff',
        color: '#000000'
      });

      await new Promise(r => setTimeout(r, 300));

      const canvas = await html2canvas(el, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#ffffff',
        width: 210 * 3.7795275591,
        height: 297 * 3.7795275591,
        onclone: (doc) => {
          const clone = doc.querySelector(`.${styles.resumePreview}`);
          if (clone) {
            clone.style.display = 'block';
            clone.style.visibility = 'visible';
            clone.style.opacity = '1';
            clone.style.width = '210mm';
            clone.style.height = '297mm';
            clone.style.background = '#ffffff';
            clone.style.color = '#000000';
            
            // Apply custom font sizes
            const name = clone.querySelector(`.${styles.name}`);
            if (name) name.style.fontSize = `${fontSizes.name}pt`;
            
            const sectionTitles = clone.querySelectorAll(`.${styles.sectionTitle}`);
            sectionTitles.forEach(title => {
              title.style.fontSize = `${fontSizes.sectionTitle}pt`;
            });
            
            const contactItems = clone.querySelectorAll(`.${styles.contactInfoItem}`);
            contactItems.forEach(item => {
              item.style.fontSize = `${fontSizes.contactInfo}pt`;
            });
            
            const jobTitles = clone.querySelectorAll(`.${styles.experienceItem} h3`);
            jobTitles.forEach(title => {
              title.style.fontSize = `${fontSizes.jobTitle}pt`;
            });
            
            const companies = clone.querySelectorAll(`.${styles.company}`);
            companies.forEach(company => {
              company.style.fontSize = `${fontSizes.company}pt`;
            });
            
            const qualifications = clone.querySelectorAll(`.${styles.educationItem} h3`);
            qualifications.forEach(qual => {
              qual.style.fontSize = `${fontSizes.qualification}pt`;
            });
            
            const institutions = clone.querySelectorAll(`.${styles.institution}`);
            institutions.forEach(institution => {
              institution.style.fontSize = `${fontSizes.institution}pt`;
            });
            
            const institutionDates = clone.querySelectorAll(`.${styles.institutionDate}`);
            institutionDates.forEach(date => {
              date.style.fontSize = `${fontSizes.institutionDate}pt`;
            });
            
            const regularTexts = clone.querySelectorAll(`.${styles.summaryText}, .${styles.certificationItem}, .${styles.affiliationItem}`);
            regularTexts.forEach(text => {
              text.style.fontSize = `${fontSizes.regularText}pt`;
            });
            
            const bulletPoints = clone.querySelectorAll(`.${styles.bulletList} li`);
            bulletPoints.forEach(bullet => {
              bullet.style.fontSize = `${fontSizes.bulletText}pt`;
            });
            
            const skills = clone.querySelectorAll(`.${styles.skillsList} li`);
            skills.forEach(skill => {
              skill.style.fontSize = `${fontSizes.skillText}pt`;
            });
            
            const certificateTexts = clone.querySelectorAll(`.${styles.certificationItem}`);
            certificateTexts.forEach(cert => {
              cert.style.fontSize = `${fontSizes.certificateText}pt`;
            });
            
            clone.querySelectorAll('*').forEach(n => {
              n.style.color = '#000000';
              n.style.fontFamily = "'Helvetica Neue', 'Arial', sans-serif";
            });
          }
        }
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

      Object.assign(el.style, originalStates);

      pdf.save(`${formData.fullName || 'care_assistant_cv'}_resume.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Resume Template ---
  const CareAssistantTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasSpecialties = formData.specialties.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasAffiliations = formData.affiliations.length > 0;
    const hasSkills = formData.skills.length > 0;
    const hasLanguages = formData.languages.length > 0;
    const hasReferences = formData.references.length > 0;

    return (
      <div className={styles.careAssistantTemplate}>
        <header className={styles.resumeHeader}>
          <h1 className={styles.name} style={{ fontSize: `${fontSizes.name}pt` }}>
            {formData.fullName || 'Your Name'}
          </h1>
          <div className={styles.contactInfoRow}>
            {formData.email && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.address)) && <div className={styles.contactSeparator}>•</div>}
            {formData.phone && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.address) && <div className={styles.contactSeparator}>•</div>}
            {formData.address && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMapPin /> {formData.address}</div>}
          </div>
        </header>

        {hasSummary && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CARE PROFILE</h2>
            <p className={styles.summaryText} style={{ fontSize: `${fontSizes.regularText}pt` }}>{formData.summary}</p>
          </section>
        )}

        {hasExperience && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CARE EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3>
                  <p className={styles.company} style={{ fontSize: `${fontSizes.company}pt` }}>{exp.employer}{exp.clientType && ` – ${exp.clientType}`} | {exp.startDate} – {exp.endDate || 'Present'}</p>
                </div>
                <ul className={styles.bulletList}>
                  {exp.description.split('\n').filter(line => line.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{line}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasEducation && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EDUCATION & QUALIFICATIONS</h2>
            {formData.education.map((edu, i) => (
              <div key={i} className={styles.educationItem}>
                <h3 style={{ fontSize: `${fontSizes.qualification}pt` }}>
                  {edu.qualification}{edu.certificateNumber && ` (${edu.certificateNumber})`}
                </h3>
                <p className={styles.institution} style={{ fontSize: `${fontSizes.institution}pt` }}>
                  {edu.institution} | 
                  <span className={styles.institutionDate} style={{ fontSize: `${fontSizes.institutionDate}pt` }}>
                    {edu.startDate} – {edu.endDate || 'Ongoing'}
                  </span>
                </p>
              </div>
            ))}
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CERTIFICATIONS & TRAINING</h2>
            {formData.certifications.map((cert, i) => (
              <div key={i} className={styles.certificationItem} style={{ fontSize: `${fontSizes.certificateText}pt` }}>
                <strong>{cert.name}</strong>
                {cert.issuingAuthority && ` – ${cert.issuingAuthority}`}
                {cert.certificateNumber && ` (Certificate #: ${cert.certificateNumber})`}
                {cert.expiryDate && ` – Expires: ${cert.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CARE SKILLS & COMPETENCIES</h2>
            <ul className={styles.skillsList}>
              {formData.skills.map((s, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>
                  {s.name}{s.proficiency && ` (${s.proficiency})`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {hasSpecialties && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>AREAS OF SPECIALISM</h2>
            <ul className={styles.bulletList}>
              {formData.specialties.map((s, i) => <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{s.name}</li>)}
            </ul>
          </section>
        )}

        {hasAffiliations && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL AFFILIATIONS</h2>
            {formData.affiliations.map((a, i) => (
              <div key={i} className={styles.affiliationItem} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                <strong>{a.organization}</strong>
                {a.membershipType && ` – ${a.membershipType}`}
              </div>
            ))}
          </section>
        )}

        {hasLanguages && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>LANGUAGES</h2>
            <ul className={styles.bulletList}>
              {formData.languages.map((l, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt` }}>
                  {l.name}{l.proficiency && ` (${l.proficiency})`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {hasReferences && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>REFERENCES</h2>
            {formData.references.map((ref, i) => (
              <div key={i} className={styles.referenceItem} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                <strong>{ref.name}</strong> – {ref.relationship}
                {ref.phone && <div>{ref.phone}</div>}
                {ref.email && <div>{ref.email}</div>}
              </div>
            ))}
          </section>
        )}
      </div>
    );
  };

  // SINGLE CANONICAL URL - WITHOUT www
  const canonicalUrl = "https://professionalresumefree.com/ats-friendly-care-assistant-resume-builder";

  return (
    <div className={styles.resumeBuilder} lang="en-GB">
      <Head>
        <title>Free Care Assistant CV Builder 2026 | UK-Specific Templates</title>
        <meta name="title" content="Free Care Assistant CV Builder 2026 | UK-Specific Templates" />
        <meta name="description" content="Create a professional care assistant CV for free in 2026. UK-specific templates for care workers. DBS-check ready. Download PDF instantly." />
        <meta name="keywords" content="care assistant CV builder, UK care CV templates, healthcare assistant CV builder, care worker CV, DBS-check CV, CQC-compliant CV, free CV builder for care workers UK, NHS care CV, domiciliary care CV, elderly care CV" />
        <meta name="author" content="Professional Care Assistant CV Free UK" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* SINGLE CANONICAL URL - WITHOUT www */}
        <link rel="canonical" href={canonicalUrl} />
        
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-GB" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-IE" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        <meta property="og:title" content="Free Care Assistant CV Builder 2026 | UK-Specific Templates" />
        <meta property="og:description" content="Create a professional care assistant CV for free in 2026. UK-specific templates for care workers. DBS-check ready. Download PDF instantly." />
        <meta property="og:image" content="https://professionalresumefree.com/images/og-care-assistant-cv-builder-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Care Assistant CV Builder - Create Professional UK Care CVs Online" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Care Assistant CV Free UK" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Care Assistant CV Builder 2026 | UK-Specific Templates" />
        <meta name="twitter:description" content="Create a professional care assistant CV for free in 2026. UK-specific templates for care workers. DBS-check ready. Download PDF instantly." />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-care-assistant-cv-builder-preview.jpg" />
        <meta name="twitter:image:alt" content="Free Care Assistant CV Builder with UK Templates" />
        <meta name="twitter:site" content="@CareCVFreeUK" />
        <meta name="twitter:creator" content="@CareCVFreeUK" />
        <meta name="theme-color" content="#005EB8" />
        <meta name="msapplication-TileColor" content="#005EB8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": `${canonicalUrl}#webpage`,
                  "url": canonicalUrl,
                  "name": "Free Care Assistant CV Builder 2026 | UK-Specific Templates",
                  "description": "Create a professional care assistant CV for free in 2026. UK-specific templates for care workers. DBS-check ready. Download PDF instantly.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-GB",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://professionalresumefree.com/#website",
                    "url": "https://professionalresumefree.com",
                    "name": "Professional Care Assistant CV Free UK",
                    "description": "Free online CV builder for care assistants and healthcare workers in the UK",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://professionalresumefree.com/#organization",
                      "name": "Professional Care Assistant CV Free UK",
                      "url": "https://professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/CareCVFreeUK",
                        "https://linkedin.com/company/care-assistant-cv-free-uk",
                        "https://facebook.com/CareAssistantCVFreeUK",
                        "https://youtube.com/@CareAssistantCVFreeUK"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/images/og-care-assistant-cv-builder-preview.jpg",
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
                        "item": "https://professionalresumefree.com"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Care Assistant CV Builder UK",
                        "item": canonicalUrl
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Care Assistant CV Builder - UK Optimized Care CV Maker",
                    "applicationCategory": "BusinessApplication",
                    "operatingSystem": "Any",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "GBP",
                      "availability": "https://schema.org/InStock",
                      "priceValidUntil": "2026-12-31"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": 4.8,
                      "ratingCount": 32465,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online ATS-friendly care assistant CV builder for UK care professionals, healthcare assistants, and support workers.",
                    "featureList": [
                      "UK Care ATS-Optimized Templates",
                      "DBS-Check Ready Formatting",
                      "CQC Compliance Sections",
                      "One-Click PDF Download",
                      "UK Care Standards Formatting",
                      "Mobile-Friendly Editor",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://professionalresumefree.com/images/screenshot-care-assistant-cv-builder.jpg",
                    "applicationSuite": "UK Care Career Tools",
                    "countriesSupported": "United Kingdom",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faqpage`,
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Care Assistant CV Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": `${canonicalUrl}#webpage`
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional Care Assistant CV with Our Free Builder",
                  "description": "Step-by-step guide to create an ATS-optimized care assistant CV for UK job applications",
                  "totalTime": "PT15M",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "currency": "GBP",
                    "value": "0"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "position": 1,
                      "name": "Choose a UK Care Template",
                      "text": "Select from our UK-specific care assistant CV templates designed for NHS applications, care homes, domiciliary care, and UK healthcare agencies.",
                      "url": `${canonicalUrl}#templates`,
                      "image": "https://professionalresumefree.com/images/step1-uk-care-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Enter Your Care Experience",
                      "text": "Add your UK care experience, NVQ/SVQ qualifications, DBS status, Care Certificate, and UK-specific training using our guided forms.",
                      "url": `${canonicalUrl}#editor`,
                      "image": "https://professionalresumefree.com/images/step2-care-info.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize for UK Standards",
                      "text": "Use our UK care-specific suggestions to improve care terminology and formatting for CQC compliance and NHS applications.",
                      "url": `${canonicalUrl}#optimize`,
                      "image": "https://professionalresumefree.com/images/step3-optimize-uk.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your Care CV",
                      "text": "Export your professional care assistant CV as PDF - completely free, no watermarks, ready for UK job applications.",
                      "url": `${canonicalUrl}#download`,
                      "image": "https://professionalresumefree.com/images/step4-download-uk.jpg"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Online Care Assistant CV Building Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Professional Care Assistant CV Free UK",
                    "url": "https://professionalresumefree.com",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+44-800-555-1234",
                      "contactType": "Customer Support",
                      "availableLanguage": "en-GB"
                    }
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "United Kingdom"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Free Care Assistant CV Building Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "UK Care ATS CV Templates"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Care CV Editing for UK Standards"
                        }
                      }
                    ]
                  },
                  "description": "Free ATS-friendly care assistant CV builder for UK care professionals",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "GBP"
                  }
                },
                {
                  "@type": "SpeakableSpecification",
                  "cssSelector": [".heroTitle", ".heroSubtitle", ".faqItem h3"]
                },
                {
                  "@type": "ItemList",
                  "itemListElement": testimonials.map((testimonial, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                      "@type": "Review",
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": 5,
                        "bestRating": 5
                      },
                      "author": {
                        "@type": "Person",
                        "name": testimonial.name
                      },
                      "reviewBody": testimonial.quote,
                      "datePublished": safeReviewDates[index] || safeCurrentDate,
                      "publisher": {
                        "@type": "Organization",
                        "name": "Professional Care Assistant CV Free UK"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Care Assistant CV Builder - UK Optimized Care CV Maker",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any",
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "GBP"
                        },
                        "description": "Free online ATS-friendly care assistant CV builder that helps UK care professionals create professional CVs and land interviews faster.",
                        "url": canonicalUrl
                      }
                    }
                  }))
                }
              ]
            })
          }}
        />
      </Head>

      {/* Freshness Indicator */}
      <div className={styles.freshnessIndicator} style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/" className={styles.breadcrumbLink} prefetch={false}>
              <FiHome className={styles.breadcrumbIcon} />
              <span className={styles.breadcrumbText}>Home</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>
            <FiChevronRightIcon />
          </li>
          <li>
            <Link href="/ats-friendly-care-assistant-resume-builder" className={styles.breadcrumbLink} prefetch={false}>
              <span className={styles.breadcrumbText}>Free Care Assistant Resume Builder</span>
            </Link>
          </li>
        </ol>
      </nav>

      {/* Hero Section - Contains the ONLY H1 tag */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.trustBadge}>
              <FiStar className={styles.starIcon} />
              <span className={styles.trustBadgeText}>
                Rated 4.8/5 by 32,465+ UK Care Professionals | Best Free Care Assistant CV Builder 2026
              </span>
            </div>
            
            {/* ONLY ONE H1 TAG ON THE ENTIRE PAGE */}
            <h1 className={styles.heroTitle}>
              Free Care Assistant CV Builder 2026: Start Now
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create a <strong className={styles.heroHighlight}>professional, ATS-optimized care assistant CV for free in minutes.</strong> Our UK-specific CV builder ensures your care experience and qualifications get noticed by UK care homes, NHS trusts, and healthcare agencies.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free care assistant CV now—no sign-up required"
              >
                <span className={styles.buttonText}>Start Building Your Care CV Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download care assistant CV as PDF"
                disabled={isGeneratingPDF || !hasContent()}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download Care CV PDF</span>
              </button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>250K+</span>
                <span className={styles.statLabel}>UK Care CVs Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>92%</span>
                <span className={styles.statLabel}>Interview Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>28%</span>
                <span className={styles.statLabel}>Faster UK Care Hires</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.8/5</span>
                <span className={styles.statLabel}>UK Care Worker Rating</span>
              </div>
            </div>

            <div className={styles.careBadges}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem}><FiUsers /> Care Assistant</span>
                <span className={styles.badgeItem}><FiHomeIcon /> Domiciliary Care</span>
                <span className={styles.badgeItem}><FiClipboard /> NHS HCA</span>
                <span className={styles.badgeItem}><FiHeart /> Elderly Care</span>
                <span className={styles.badgeItem}><FiShield /> Mental Health</span>
                <span className={styles.badgeItem}><FiWatch /> Dementia Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.singleColumnLayout}>
        {/* Preview Section */}
        <div className={styles.previewSection}>
          <div className={styles.previewHeader}>
            <div className={styles.previewActions}>
              <button onClick={() => setShowFullPreview(!showFullPreview)} className={styles.previewButton}>
                <FiEye /> {showFullPreview ? 'Hide Full Preview' : 'Show Full Preview'}
              </button>
              <button
                onClick={generatePDF}
                className={styles.downloadButton}
                disabled={isGeneratingPDF || !hasContent()}
              >
                <FiDownload />
                {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
              </button>
            </div>
          </div>

          <div className={`${styles.previewContainer} ${showFullPreview ? styles.fullPreview : ''}`}>
            <div className={styles.resumePreviewCard}>
              <div className={styles.previewContent}>
                <div
                  className={styles.resumePreview}
                  ref={resumeRef}
                >
                  <CareAssistantTemplate formData={formData} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className={styles.formSection}>
          <div className={styles.formNavigation}>
            {[
              { id: 'personal', label: 'Personal', icon: <FiUser /> },
              { id: 'experience', label: 'Care Experience', icon: <FiHeart /> },
              { id: 'education', label: 'Qualifications', icon: <FiBook /> },
              { id: 'certifications', label: 'Certifications', icon: <FiShield /> },
              { id: 'skills', label: 'Skills', icon: <FiActivity /> },
              { id: 'settings', label: 'Font Settings', icon: <FiSettings /> },
            ].map((item) => (
              <button
                key={item.id}
                className={`${styles.navButton} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.icon} <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.formContent}>
            {/* Personal Section */}
            {activeSection === 'personal' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiUser /> Personal Information</h2>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Full Name*
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Sarah Johnson" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="sarah.johnson@email.co.uk" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone*
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="07700 900123" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      UK Address
                      <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="London, UK" className={styles.formInput} />
                    </label>
                  </div>
                </div>

                <div className={styles.formCard}>
                  <label className={styles.formLabel}>
                    Care Profile Summary*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Compassionate and dedicated Care Assistant with 5+ years of experience in elderly care and dementia support. NVQ Level 3 qualified with proven track record in providing person-centered care, medication administration, and supporting daily living activities. Committed to maintaining dignity, respect, and independence for all clients while working collaboratively within multidisciplinary teams."
                      required
                      className={styles.formTextarea}
                      rows="6"
                    />
                    <div className={styles.characterCount}>
                      {formData.summary.length}/500 characters
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Care Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiHeart /> Care Experience</h2>
                <p className={styles.sectionDescription}>List your care positions in reverse chronological order (most recent first)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Care Assistant" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Care Provider/Employer*
                      <input 
                        value={currentExperience.employer} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, employer: e.target.value })} 
                        placeholder="Sunrise Care Home" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Client Type / Specialism
                    <input 
                      value={currentExperience.clientType} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, clientType: e.target.value })} 
                      placeholder="Elderly & Dementia Care" 
                      className={styles.formInput} 
                    />
                  </label>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Start Date*
                      <input 
                        type="text" 
                        placeholder="Month Year (e.g., March 2020)" 
                        value={currentExperience.startDate} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, startDate: e.target.value })} 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      End Date
                      <input 
                        type="text" 
                        placeholder="Month Year or Present" 
                        value={currentExperience.endDate} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, endDate: e.target.value })} 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Key Care Responsibilities & Achievements*
                    <textarea 
                      value={currentExperience.description} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} 
                      placeholder="• Provided person-centered care for 8 residents in dementia unit
• Assisted with personal care, medication administration, and mobility support
• Developed and implemented individual care plans in collaboration with senior staff
• Maintained accurate care records in compliance with CQC standards
• Trained 2 new care assistants in safeguarding procedures and care protocols
• Received 'Carer of the Month' award for outstanding dedication to resident welfare"
                      required 
                      className={styles.formTextarea} 
                      rows="8" 
                    />
                    <div className={styles.characterCount}>
                      {currentExperience.description.length}/2000 characters
                    </div>
                  </label>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addExperience} 
                      className={styles.addButton} 
                      disabled={!currentExperience.position || !currentExperience.employer || !currentExperience.startDate}
                    >
                      <FiPlus /> {currentExperience.isEditing ? 'Update Care Experience' : 'Add Care Experience'}
                    </button>
                    {currentExperience.isEditing && (
                      <button 
                        type="button" 
                        onClick={() => setCurrentExperience(defaultExperience())} 
                        className={styles.cancelButton}
                      >
                        <FiX /> Cancel
                      </button>
                    )}
                  </div>
                </div>
                
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}>Your Care Experience</h3>
                  {formData.experience.length === 0 ? (
                    <p className={styles.emptyMessage}>No care experience added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.experience.map((exp, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{exp.position}</strong>
                              <span className={styles.itemSubtitle}>at {exp.employer}</span>
                            </div>
                            <div className={styles.itemMeta}>
                              <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
                              {exp.clientType && <span>{exp.clientType}</span>}
                            </div>
                            <div className={styles.itemDescription}>
                              {exp.description.split('\n').filter(l => l.trim()).map((line, j) => (
                                <p key={j} className={styles.bulletPoint}>• {line}</p>
                              ))}
                            </div>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editExperience(i)} className={styles.editButton} aria-label={`Edit ${exp.position} experience`}><FiEdit2 /></button>
                            <button onClick={() => deleteExperience(i)} className={styles.deleteButton} aria-label={`Delete ${exp.position} experience`}><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Areas of Specialism */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}>Areas of Specialism</h3>
                  <p className={styles.sectionDescription}>List your care specialisms and areas of expertise</p>
                  <div className={styles.skillsInput}>
                    <input 
                      value={currentSpecialty.name} 
                      onChange={(e) => setCurrentSpecialty({ ...currentSpecialty, name: e.target.value })} 
                      placeholder="Dementia Care, Palliative Care, Mental Health Support" 
                      className={styles.formInput} 
                    />
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addSpecialty} 
                        className={styles.addButton} 
                        disabled={!currentSpecialty.name.trim()}
                      >
                        <FiPlus /> {currentSpecialty.isEditing ? 'Update Specialism' : 'Add Specialism'}
                      </button>
                      {currentSpecialty.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentSpecialty(defaultSpecialty())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.specialties.map((s, i) => (
                      <div key={i} className={styles.listItem}>
                        <span>{s.name}</span>
                        <div className={styles.itemActions}>
                          <button onClick={() => editSpecialty(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteSpecialty(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.specialties.length === 0 && <p className={styles.emptyMessage}>No specialisms added yet</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Education Section */}
            {activeSection === 'education' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiBook /> Qualifications & Training</h2>
                <p className={styles.sectionDescription}>List your care qualifications, NVQ/SVQ certifications, and relevant training</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Institution/Training Provider*
                      <input 
                        value={currentEducation.institution} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                        placeholder="City College / NHS Trust" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Qualification/Certificate*
                      <input 
                        value={currentEducation.qualification} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, qualification: e.target.value })} 
                        placeholder="NVQ Level 3 in Health and Social Care" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Certificate/Registration Number
                    <input 
                      value={currentEducation.certificateNumber} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, certificateNumber: e.target.value })} 
                      placeholder="CERT1234567" 
                      className={styles.formInput} 
                    />
                  </label>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Start Date
                      <input 
                        type="text" 
                        placeholder="Month Year" 
                        value={currentEducation.startDate} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, startDate: e.target.value })} 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Completion Date
                      <input 
                        type="text" 
                        placeholder="Month Year" 
                        value={currentEducation.endDate} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, endDate: e.target.value })} 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addEducation} 
                      className={styles.addButton} 
                      disabled={!currentEducation.institution || !currentEducation.qualification}
                    >
                      <FiPlus /> {currentEducation.isEditing ? 'Update Qualification' : 'Add Qualification'}
                    </button>
                    {currentEducation.isEditing && (
                      <button 
                        type="button" 
                        onClick={() => setCurrentEducation(defaultEducation())} 
                        className={styles.cancelButton}
                      >
                        <FiX /> Cancel
                      </button>
                    )}
                  </div>
                </div>
                
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}>Your Qualifications</h3>
                  {formData.education.length === 0 ? (
                    <p className={styles.emptyMessage}>No qualifications added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.education.map((edu, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{edu.qualification}</strong>
                              {edu.certificateNumber && <span className={styles.itemSubtitle}> – #{edu.certificateNumber}</span>}
                            </div>
                            <div className={styles.itemMeta}>
                              <span>{edu.institution}</span>
                              <span>{edu.startDate} – {edu.endDate || 'In Progress'}</span>
                            </div>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editEducation(i)} className={styles.editButton} aria-label={`Edit ${edu.qualification}`}><FiEdit2 /></button>
                            <button onClick={() => deleteEducation(i)} className={styles.deleteButton} aria-label={`Delete ${edu.qualification}`}><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Certifications Section */}
            {activeSection === 'certifications' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiShield /> Certifications & Compliance</h2>
                
                {/* Certifications */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}>Certifications & Training</h3>
                  <p className={styles.sectionDescription}>Add your care certifications, DBS status, and mandatory training</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Certification Name*
                        <input 
                          value={currentCertification.name} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                          placeholder="Care Certificate" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Issuing Authority
                        <input 
                          value={currentCertification.issuingAuthority} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, issuingAuthority: e.target.value })} 
                          placeholder="Skills for Care" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Certificate Number
                        <input 
                          value={currentCertification.certificateNumber} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, certificateNumber: e.target.value })} 
                          placeholder="CERT1234567" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Expiry Date
                        <input 
                          value={currentCertification.expiryDate} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, expiryDate: e.target.value })} 
                          placeholder="Month Year" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addCertification} 
                        className={styles.addButton} 
                        disabled={!currentCertification.name.trim()}
                      >
                        <FiPlus /> {currentCertification.isEditing ? 'Update Certification' : 'Add Certification'}
                      </button>
                      {currentCertification.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentCertification(defaultCertification())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.certifications.map((c, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{c.name}</strong>
                          {c.issuingAuthority && ` – ${c.issuingAuthority}`}
                          {c.certificateNumber && ` (#${c.certificateNumber})`}
                          {c.expiryDate && ` – Expires: ${c.expiryDate}`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editCertification(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteCertification(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.certifications.length === 0 && <p className={styles.emptyMessage}>No certifications added yet</p>}
                  </div>
                </div>

                {/* Professional Affiliations */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}>Professional Affiliations</h3>
                  <p className={styles.sectionDescription}>Add your professional care organization memberships</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Organization*
                        <input 
                          value={currentAffiliation.organization} 
                          onChange={(e) => setCurrentAffiliation({ ...currentAffiliation, organization: e.target.value })} 
                          placeholder="Skills for Care" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Membership Type
                        <input 
                          value={currentAffiliation.membershipType} 
                          onChange={(e) => setCurrentAffiliation({ ...currentAffiliation, membershipType: e.target.value })} 
                          placeholder="Registered Member" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addAffiliation} 
                        className={styles.addButton} 
                        disabled={!currentAffiliation.organization.trim()}
                      >
                        <FiPlus /> {currentAffiliation.isEditing ? 'Update Affiliation' : 'Add Affiliation'}
                      </button>
                      {currentAffiliation.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentAffiliation(defaultAffiliation())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.affiliations.map((a, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{a.organization}</strong>
                          {a.membershipType && ` – ${a.membershipType}`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editAffiliation(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteAffiliation(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.affiliations.length === 0 && <p className={styles.emptyMessage}>No affiliations added yet</p>}
                  </div>
                </div>

                {/* References */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}>Professional References</h3>
                  <p className={styles.sectionDescription}>Add your professional references (usually 2 required for care positions)</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Reference Name*
                        <input 
                          value={currentReference.name} 
                          onChange={(e) => setCurrentReference({ ...currentReference, name: e.target.value })} 
                          placeholder="Jane Smith" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Relationship*
                        <input 
                          value={currentReference.relationship} 
                          onChange={(e) => setCurrentReference({ ...currentReference, relationship: e.target.value })} 
                          placeholder="Care Home Manager" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Phone Number
                        <input 
                          value={currentReference.phone} 
                          onChange={(e) => setCurrentReference({ ...currentReference, phone: e.target.value })} 
                          placeholder="07700 900123" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Email
                        <input 
                          value={currentReference.email} 
                          onChange={(e) => setCurrentReference({ ...currentReference, email: e.target.value })} 
                          placeholder="jane.smith@carehome.co.uk" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addReference} 
                        className={styles.addButton} 
                        disabled={!currentReference.name.trim() || !currentReference.relationship.trim()}
                      >
                        <FiPlus /> {currentReference.isEditing ? 'Update Reference' : 'Add Reference'}
                      </button>
                      {currentReference.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentReference(defaultReference())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.references.map((r, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{r.name}</strong> – {r.relationship}
                          {r.phone && <div className={styles.referenceDetail}>Phone: {r.phone}</div>}
                          {r.email && <div className={styles.referenceDetail}>Email: {r.email}</div>}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editReference(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteReference(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.references.length === 0 && <p className={styles.emptyMessage}>No references added yet</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiActivity /> Care Skills & Competencies</h2>
                
                {/* Skills */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}>Care Skills & Competencies</h3>
                  <p className={styles.sectionDescription}>List your care skills, competencies, and areas of expertise</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Skill*
                        <input 
                          value={currentSkill.name} 
                          onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })} 
                          placeholder="Personal Care Assistance" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Proficiency Level
                        <input 
                          value={currentSkill.proficiency} 
                          onChange={(e) => setCurrentSkill({ ...currentSkill, proficiency: e.target.value })} 
                          placeholder="Advanced / Experienced" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addSkill} 
                        className={styles.addButton} 
                        disabled={!currentSkill.name.trim()}
                      >
                        <FiPlus /> {currentSkill.isEditing ? 'Update Skill' : 'Add Skill'}
                      </button>
                      {currentSkill.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentSkill(defaultSkill())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.skills.map((s, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          {s.name}{s.proficiency && ` (${s.proficiency})`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editSkill(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteSkill(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.skills.length === 0 && <p className={styles.emptyMessage}>No skills added yet</p>}
                  </div>
                </div>

                {/* Languages */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}>Languages</h3>
                  <p className={styles.sectionDescription}>List languages you speak and your proficiency level</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Language*
                        <input 
                          value={currentLanguage.name} 
                          onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })} 
                          placeholder="Punjabi" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Proficiency Level
                        <input 
                          value={currentLanguage.proficiency} 
                          onChange={(e) => setCurrentLanguage({ ...currentLanguage, proficiency: e.target.value })} 
                          placeholder="Fluent, Basic, Intermediate" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addLanguage} 
                        className={styles.addButton} 
                        disabled={!currentLanguage.name.trim()}
                      >
                        <FiPlus /> {currentLanguage.isEditing ? 'Update Language' : 'Add Language'}
                      </button>
                      {currentLanguage.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentLanguage(defaultLanguage())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.languages.map((l, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          {l.name}{l.proficiency && ` (${l.proficiency})`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editLanguage(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteLanguage(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.languages.length === 0 && <p className={styles.emptyMessage}>No languages added yet</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Font Settings Section */}
            {activeSection === 'settings' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiSettings /> Font Size Settings</h2>
                <p className={styles.sectionDescription}>Customize font sizes for your CV PDF. All sizes are in points (pt).</p>
                
                <div className={styles.formCard}>
                  <div className={styles.fontSizeGrid}>
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Name</span>
                        <span className={styles.fontSizeValue}>{fontSizes.name}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="8" 
                        max="24" 
                        value={fontSizes.name}
                        onChange={(e) => handleFontSizeChange('name', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                    
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Section Titles</span>
                        <span className={styles.fontSizeValue}>{fontSizes.sectionTitle}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="18" 
                        value={fontSizes.sectionTitle}
                        onChange={(e) => handleFontSizeChange('sectionTitle', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                    
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Job Titles</span>
                        <span className={styles.fontSizeValue}>{fontSizes.jobTitle}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="16" 
                        value={fontSizes.jobTitle}
                        onChange={(e) => handleFontSizeChange('jobTitle', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                    
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Qualifications</span>
                        <span className={styles.fontSizeValue}>{fontSizes.qualification}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="16" 
                        value={fontSizes.qualification}
                        onChange={(e) => handleFontSizeChange('qualification', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                    
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Company/Institution Names</span>
                        <span className={styles.fontSizeValue}>{fontSizes.institution}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="14" 
                        value={fontSizes.institution}
                        onChange={(e) => handleFontSizeChange('institution', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                    
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Institution Dates</span>
                        <span className={styles.fontSizeValue}>{fontSizes.institutionDate}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="4" 
                        max="12" 
                        value={fontSizes.institutionDate}
                        onChange={(e) => handleFontSizeChange('institutionDate', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                    
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Regular Text</span>
                        <span className={styles.fontSizeValue}>{fontSizes.regularText}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="14" 
                        value={fontSizes.regularText}
                        onChange={(e) => handleFontSizeChange('regularText', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                    
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Bullet Points</span>
                        <span className={styles.fontSizeValue}>{fontSizes.bulletText}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="14" 
                        value={fontSizes.bulletText}
                        onChange={(e) => handleFontSizeChange('bulletText', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                    
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Contact Info</span>
                        <span className={styles.fontSizeValue}>{fontSizes.contactInfo}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="12" 
                        value={fontSizes.contactInfo}
                        onChange={(e) => handleFontSizeChange('contactInfo', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>

                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Skills Text</span>
                        <span className={styles.fontSizeValue}>{fontSizes.skillText}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="12" 
                        value={fontSizes.skillText}
                        onChange={(e) => handleFontSizeChange('skillText', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>

                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Certificate Text</span>
                        <span className={styles.fontSizeValue}>{fontSizes.certificateText}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="14" 
                        value={fontSizes.certificateText}
                        onChange={(e) => handleFontSizeChange('certificateText', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                  </div>
                  
                  <button 
                    type="button" 
                    onClick={resetFontSizes}
                    className={styles.resetButton}
                  >
                    Reset to Default Font Sizes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className={styles.faqSection} aria-labelledby="faq-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to know about creating professional care assistant CVs with our tool.
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

      {/* CTA Section */}
      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Advance Your Care Career in the UK?</h2>
            <p className={styles.ctaSubtitle}>
              Join 250,000+ UK care professionals who landed their dream jobs with our free ATS-friendly care assistant CV builder.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free care assistant CV now—no sign-up required"
              >
                <span className={styles.ctaButtonText}>Create Your Free Care CV Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>No credit card required • Free forever • UK-specific templates • DBS-check ready • CQC-compliant formatting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h2>Full Care Assistant CV Preview</h2>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <CareAssistantTemplate formData={formData} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// SSG + ISR Implementation
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
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

  // Breadcrumb data for structured data - WITHOUT www
  const breadcrumbData = [
    { name: 'Home', item: 'https://professionalresumefree.com/' },
    { name: 'Care Assistant CV Builder UK', item: 'https://professionalresumefree.com/ats-friendly-care-assistant-resume-builder' }
  ];

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates,
        breadcrumbData
      },
      buildTimestamp
    },
    // ISR: Revalidate every 24 hours (86400 seconds)
    revalidate: 3600
  };
}

export default Resume;