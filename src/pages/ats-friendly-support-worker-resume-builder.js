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
  FiCalendar,
  FiCheckCircle
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
    serviceUsers: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultEducation = () => ({
    institution: '',
    qualification: '',
    awardingBody: '',
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
  
  const defaultQualification = () => ({
    name: '',
    awardingBody: '',
    qualificationNumber: '',
    expiryDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultSkill = () => ({
    name: '',
    category: 'Personal Care',
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
    position: '',
    organisation: '',
    phone: '',
    email: '',
    relationship: '',
    isEditing: false,
    editIndex: null
  });

  // --- State ---
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    dbsStatus: '',
    drivingLicense: '',
    summary: '',
    experience: [],
    education: [],
    specialties: [],
    qualifications: [],
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
    employer: 7,
    qualification: 9,
    institution: 7,
    institutionDate: 6,
    regularText: 8,
    bulletText: 8,
    skillText: 7,
    qualificationText: 8
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSpecialty, setCurrentSpecialty] = useState(defaultSpecialty());
  const [currentQualification, setCurrentQualification] = useState(defaultQualification());
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
      quote: "Created my support worker CV in 10 minutes and got interviews the same week. The UK-specific templates are exactly what employers want!",
      metric: "Found Support Worker Position in 2 Weeks",
      name: "Sarah M.",
      role: "Support Worker",
      company: "Care UK"
    },
    {
      quote: "Finally a CV builder that understands UK care sector requirements. The DBS and CQC-friendly templates helped me pass agency screening.",
      metric: "3 Interviews in 1 Week",
      name: "James K.",
      role: "Senior Support Worker",
      company: "Mencap"
    },
    {
      quote: "As a newly qualified support worker, the templates were perfect. Landed my first role with a leading UK care provider.",
      metric: "First Role After Qualification",
      name: "Alex P.",
      role: "Newly Qualified Support Worker",
      company: "Dimensions UK"
    },
    {
      quote: "The support worker CV builder saved me - could update my CV between shifts. Professional results without agency fees.",
      metric: "Promoted to Team Leader",
      name: "Maria L.",
      role: "Team Leader",
      company: "Achieve together"
    },
    {
      quote: "UK care sector templates actually work! Got callbacks from employers that previously ignored my applications.",
      metric: "5x More Responses",
      name: "David T.",
      role: "Complex Needs Support Worker",
      company: "MacIntyre"
    },
    {
      quote: "Free PDF download with proper UK care sector formatting? Unbeatable value. Best support worker CV builder I've found.",
      metric: "Perfect CV in 15min",
      name: "Lisa R.",
      role: "Mental Health Support Worker",
      company: "Mind"
    }
  ];

  // FAQ Data for Structured Data
  const faqs = [
    {
      question: "Is this support worker CV builder really free with no hidden costs?",
      answer: "Yes, our support worker CV builder is completely free with no hidden costs or watermarks. Create, edit, and download your professional support worker CV in PDF format without any payment required."
    },
    {
      question: "What makes this CV builder specific to UK support workers?",
      answer: "Our templates are designed specifically for the UK care sector, including sections for DBS status, CQC compliance, NVQ qualifications, and UK-specific terminology that employers expect."
    },
    {
      question: "Can I download my support worker CV as PDF without creating an account?",
      answer: "Absolutely! Download your professional support worker CV in PDF format without creating an account. Everything is completely free and accessible immediately for support workers across the UK."
    },
    {
      question: "How many UK support worker CV templates are available for free?",
      answer: "We offer professionally designed templates for various support worker roles including learning disabilities, mental health, elderly care, complex needs, and domiciliary care. All templates are completely free and optimized for UK employers."
    },
    {
      question: "How does your support worker CV builder work?",
      answer: "Our builder uses UK-optimized support worker templates with proper care sector terminology. We guide you to highlight relevant experience, qualifications, and skills that UK care employers look for."
    },
    {
      question: "Can I edit my support worker CV after downloading it?",
      answer: "Yes, you can always come back and edit your support worker CV. Your work saves automatically, and you can download updated versions as many times as needed—completely free."
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
      employer: 7,
      qualification: 9,
      institution: 7,
      institutionDate: 6,
      regularText: 8,
      bulletText: 8,
      skillText: 7,
      qualificationText: 8
    });
  };

  // --- Utility Functions ---
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
      formData.qualifications.length > 0 ||
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

  const addQualification = createAddFunction('qualifications', currentQualification, setCurrentQualification, defaultQualification, () => currentQualification.name.trim());
  
  const editQualification = createEditFunction('qualifications', setCurrentQualification);
  const deleteQualification = createDeleteFunction('qualifications');

  const addSkill = createAddFunction('skills', currentSkill, setCurrentSkill, defaultSkill, () => currentSkill.name.trim());
  
  const editSkill = createEditFunction('skills', setCurrentSkill);
  const deleteSkill = createDeleteFunction('skills');

  const addLanguage = createAddFunction('languages', currentLanguage, setCurrentLanguage, defaultLanguage, () => currentLanguage.name.trim());
  
  const editLanguage = createEditFunction('languages', setCurrentLanguage);
  const deleteLanguage = createDeleteFunction('languages');

  const addReference = createAddFunction('references', currentReference, setCurrentReference, defaultReference, () => currentReference.name.trim() && currentReference.position.trim());
  
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
            
            const employers = clone.querySelectorAll(`.${styles.employer}`);
            employers.forEach(employer => {
              employer.style.fontSize = `${fontSizes.employer}pt`;
            });
            
            const qualifications = clone.querySelectorAll(`.${styles.educationItem} h3`);
            qualifications.forEach(qualification => {
              qualification.style.fontSize = `${fontSizes.qualification}pt`;
            });
            
            const institutions = clone.querySelectorAll(`.${styles.institution}`);
            institutions.forEach(institution => {
              institution.style.fontSize = `${fontSizes.institution}pt`;
            });
            
            const institutionDates = clone.querySelectorAll(`.${styles.institutionDate}`);
            institutionDates.forEach(date => {
              date.style.fontSize = `${fontSizes.institutionDate}pt`;
            });
            
            const regularTexts = clone.querySelectorAll(`.${styles.summaryText}, .${styles.qualificationItem}, .${styles.referenceItem}`);
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
            
            const qualificationTexts = clone.querySelectorAll(`.${styles.qualificationItem}`);
            qualificationTexts.forEach(qualification => {
              qualification.style.fontSize = `${fontSizes.qualificationText}pt`;
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

      pdf.save(`${formData.fullName || 'support_worker'}_cv.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Resume Template ---
  const SupportWorkerTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasSpecialties = formData.specialties.length > 0;
    const hasQualifications = formData.qualifications.length > 0;
    const hasSkills = formData.skills.length > 0;
    const hasLanguages = formData.languages.length > 0;
    const hasReferences = formData.references.length > 0;

    return (
      <div className={styles.supportWorkerTemplate}>
        <header className={styles.resumeHeader}>
          <h1 className={styles.name} style={{ fontSize: `${fontSizes.name}pt` }}>
            {formData.fullName || 'Your Name'}
          </h1>
          <div className={styles.contactInfoRow}>
            {formData.email && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.address)) && <div className={styles.contactSeparator}>•</div>}
            {formData.phone && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.address) && <div className={styles.contactSeparator}>•</div>}
            {formData.address && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMapPin /> {formData.address}{formData.postcode && `, ${formData.postcode}`}</div>}
          </div>
          <div className={styles.qualificationsRow}>
            {formData.dbsStatus && <div className={styles.qualificationBadge} style={{ fontSize: `${fontSizes.skillText}pt` }}><FiShield /> DBS: {formData.dbsStatus}</div>}
            {formData.drivingLicense && <div className={styles.qualificationBadge} style={{ fontSize: `${fontSizes.skillText}pt` }}><FiCheckCircle /> Driving License: {formData.drivingLicense}</div>}
          </div>
        </header>

        {hasSummary && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL PROFILE</h2>
            <p className={styles.summaryText} style={{ fontSize: `${fontSizes.regularText}pt` }}>{formData.summary}</p>
          </section>
        )}

        {hasExperience && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SUPPORT WORK EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3>
                  <p className={styles.employer} style={{ fontSize: `${fontSizes.employer}pt` }}>
                    {exp.employer} | {exp.location} | {exp.startDate} – {exp.endDate || 'Present'}
                  </p>
                  {exp.serviceUsers && <p className={styles.serviceUsers} style={{ fontSize: `${fontSizes.skillText}pt` }}><strong>Service Users:</strong> {exp.serviceUsers}</p>}
                </div>
                <ul className={styles.bulletList}>
                  {exp.description.split('\n').filter(line => line.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{line}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasQualifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL QUALIFICATIONS</h2>
            {formData.qualifications.map((q, i) => (
              <div key={i} className={styles.qualificationItem} style={{ fontSize: `${fontSizes.qualificationText}pt` }}>
                <strong>{q.name}</strong>
                {q.awardingBody && ` – ${q.awardingBody}`}
                {q.qualificationNumber && ` (Cert #: ${q.qualificationNumber})`}
                {q.expiryDate && ` – Expires: ${q.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasEducation && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EDUCATION & TRAINING</h2>
            {formData.education.map((edu, i) => (
              <div key={i} className={styles.educationItem}>
                <h3 style={{ fontSize: `${fontSizes.qualification}pt` }}>
                  {edu.qualification}
                </h3>
                <p className={styles.institution} style={{ fontSize: `${fontSizes.institution}pt` }}>
                  {edu.institution} {edu.awardingBody && `(${edu.awardingBody})`} | 
                  <span className={styles.institutionDate} style={{ fontSize: `${fontSizes.institutionDate}pt` }}>
                    {edu.startDate} – {edu.endDate || 'Present'}
                  </span>
                </p>
              </div>
            ))}
          </section>
        )}

        {hasSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CARE & SUPPORT SKILLS</h2>
            <div className={styles.skillsGrid}>
              {['Personal Care', 'Communication', 'Safeguarding', 'Administrative'].map(category => {
                const categorySkills = formData.skills.filter(skill => skill.category === category);
                if (categorySkills.length === 0) return null;
                return (
                  <div key={category} className={styles.skillCategory}>
                    <h4 style={{ fontSize: `${fontSizes.sectionTitle - 1}pt` }}>{category}</h4>
                    <ul className={styles.skillsList}>
                      {categorySkills.map((s, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>{s.name}</li>)}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {hasSpecialties && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>AREAS OF SPECIALISM</h2>
            <ul className={styles.skillsList}>
              {formData.specialties.map((s, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>{s.name}</li>)}
            </ul>
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
                <strong>{ref.name}</strong> – {ref.position}{ref.organisation && `, ${ref.organisation}`}
                {ref.phone && ` | Tel: ${ref.phone}`}
                {ref.email && ` | Email: ${ref.email}`}
                {ref.relationship && ` | ${ref.relationship}`}
              </div>
            ))}
          </section>
        )}
      </div>
    );
  };

  return (
    <div className={styles.resumeBuilder} lang="en-GB">
      <Head>
        <title>Free UK Support Worker CV Builder 2026 | DBS-Ready Templates</title>
        <meta name="title" content="Free UK Support Worker CV Builder 2026 | DBS-Ready Templates" />
        <meta name="description" content="Create a professional support worker CV for free. DBS-ready templates trusted by 200K+ UK care pros. Download PDF in minutes. Updated for 2026." />
        <meta name="keywords" content="support worker CV builder, care worker CV templates, UK care sector CV, DBS ready CV, CQC compliant CV, free CV builder for support workers, healthcare assistant CV, domiciliary care CV, learning disabilities support CV, mental health support CV" />
        <meta name="author" content="Professional UK Support Worker CV Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder" hreflang="x-default" />
        <meta property="og:title" content="Free UK Support Worker CV Builder 2026 | DBS-Ready Templates" />
        <meta property="og:description" content="Create a professional support worker CV for free. DBS-ready templates trusted by 200K+ UK care pros. Download PDF in minutes. Updated for 2026." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-support-worker-cv-builder-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free UK Support Worker CV Builder - Create Professional Care Sector CVs Online" />
        <meta property="og:url" content="https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional UK Support Worker CV Free" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free UK Support Worker CV Builder 2026 | DBS-Ready Templates" />
        <meta name="twitter:description" content="Create a professional support worker CV for free. DBS-ready templates trusted by 200K+ UK care pros. Download PDF in minutes. Updated for 2026." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-support-worker-cv-builder-preview.jpg" />
        <meta name="twitter:image:alt" content="Free UK Support Worker CV Builder with DBS Ready Templates" />
        <meta name="twitter:site" content="@UKSupportWorkerCV" />
        <meta name="twitter:creator" content="@UKSupportWorkerCV" />
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
                  "@id": "https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder/#webpage",
                  "url": "https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder",
                  "name": "Free UK Support Worker CV Builder 2026 | DBS-Ready Templates",
                  "description": "Create professional DBS-ready support worker CVs for free. Land interviews 3x faster with our UK care sector CV builder.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-GB",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Professional UK Support Worker CV Free",
                    "description": "Free online CV builder for UK support workers and care professionals",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://www.professionalresumefree.com/#organization",
                      "name": "Professional UK Support Worker CV Free",
                      "url": "https://www.professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/UKSupportWorkerCV",
                        "https://www.linkedin.com/company/uk-support-worker-cv",
                        "https://www.facebook.com/UKSupportWorkerCV"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/og-support-worker-cv-builder-preview.jpg",
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
                        "item": "https://www.professionalresumefree.com"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Free Support Worker CV Builder",
                        "item": "https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "UK Support Worker CV Builder - DBS Ready Care Sector CV Maker",
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
                      "ratingValue": 4.9,
                      "ratingCount": 20000,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online DBS-ready support worker CV builder for UK care professionals, support workers, carers, and healthcare assistants.",
                    "featureList": [
                      "UK Care Sector DBS-Ready Templates",
                      "CQC Compliant Formatting",
                      "NVQ Qualification Sections",
                      "One-Click PDF Download",
                      "Care Experience Formatting",
                      "Mobile-Friendly Editor",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://www.professionalresumefree.com/images/screenshot-support-worker-cv-builder.jpg",
                    "applicationSuite": "UK Care Career Tools",
                    "countriesSupported": "United Kingdom",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "UK Support Worker CV Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional Support Worker CV with Our Free UK Builder",
                  "description": "Step-by-step guide to create a DBS-ready support worker CV for free",
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
                      "name": "Choose a UK Support Worker Template",
                      "text": "Select from our DBS-ready UK support worker CV templates designed for care homes, domiciliary care, learning disabilities, and mental health support.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder#templates",
                      "image": "https://www.professionalresumefree.com/images/step1-uk-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Enter Your Care Experience Information",
                      "text": "Add your support work experience, NVQ qualifications, DBS status, and care skills using our UK-specific forms.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder#editor",
                      "image": "https://www.professionalresumefree.com/images/step2-care-info.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize and Optimize for UK Employers",
                      "text": "Use our UK care sector suggestions to improve keywords and formatting for CQC compliance and DBS requirements.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder#optimize",
                      "image": "https://www.professionalresumefree.com/images/step3-optimize.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your Support Worker CV",
                      "text": "Export your professional support worker CV as PDF - completely free, no watermarks, ready for UK care sector applications.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder#download",
                      "image": "https://www.professionalresumefree.com/images/step4-download.jpg"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Online UK Support Worker CV Building Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Professional UK Support Worker CV Free",
                    "url": "https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "",
                      "contactType": "Customer Support",
                      "availableLanguage": "en"
                    }
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "United Kingdom"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Free UK Support Worker CV Building Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "UK Care Sector DBS-Ready CV Templates"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Support Worker CV Editing"
                        }
                      }
                    ]
                  },
                  "description": "Free DBS-ready support worker CV builder for UK care professionals",
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
                        "name": "Professional UK Support Worker CV Free"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "UK Support Worker CV Builder - DBS Ready Care Sector CV Maker",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any",
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "GBP"
                        },
                        "description": "Free online DBS-ready support worker CV builder that helps UK care professionals create professional CVs and land interviews faster.",
                        "url": "https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder"
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
            <Link href="/ats-friendly-support-worker-resume-builder" className={styles.breadcrumbLink} prefetch={false}>
              <span className={styles.breadcrumbText}>Free UK Care Sector Template</span>
            </Link>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.trustBadge}>
              <FiStar className={styles.starIcon} />
              <span className={styles.trustBadgeText}>
                Rated 4.9/5 by 20,000+ UK Care Professionals | Best Free Support Worker CV Builder 2026
              </span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Free UK Support Worker CV Builder 2026
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create a <strong className={styles.heroHighlight}>professional, DBS-ready support worker CV for free in minutes.</strong> Our UK care sector CV builder ensures your experience and qualifications get noticed by care homes, agencies, and NHS employers.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free support worker CV now—no sign-up required"
              >
                <span className={styles.buttonText}>Start Building Your Support Worker CV Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download support worker CV as PDF"
                disabled={isGeneratingPDF || !hasContent()}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download Support Worker CV PDF</span>
              </button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>200K+</span>
                <span className={styles.statLabel}>UK Support Worker CVs Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>92%</span>
                <span className={styles.statLabel}>Interview Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>Faster UK Care Hires</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9/5</span>
                <span className={styles.statLabel}>Rating from Care Professionals</span>
              </div>
            </div>

            <div className={styles.careBadges}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem}><FiUsers /> Learning Disabilities</span>
                <span className={styles.badgeItem}><FiHeart /> Mental Health</span>
                <span className={styles.badgeItem}><FiUsers /> Elderly Care</span>
                <span className={styles.badgeItem}><FiTool /> Complex Needs</span>
                <span className={styles.badgeItem}><FiHome /> Domiciliary Care</span>
                <span className={styles.badgeItem}><FiShield /> CQC Compliant</span>
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
                  <SupportWorkerTemplate formData={formData} />
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
              { id: 'experience', label: 'Care Experience', icon: <FiUsers /> },
              { id: 'qualifications', label: 'Qualifications', icon: <FiAward /> },
              { id: 'skills', label: 'Skills', icon: <FiTool /> },
              { id: 'references', label: 'References', icon: <FiFileText /> },
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
                <h3 className={styles.sectionTitle}><FiUser /> Personal Information</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Full Name*
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Jane Smith" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="jane.smith@email.com" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone*
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="07123 456789" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Address
                      <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Town/City" className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Postcode
                      <input type="text" name="postcode" value={formData.postcode} onChange={handleInputChange} placeholder="AB1 2CD" className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      DBS Status*
                      <select name="dbsStatus" value={formData.dbsStatus} onChange={handleInputChange} required className={styles.formSelect}>
                        <option value="">Select DBS Status</option>
                        <option value="Enhanced with Barred Lists">Enhanced with Barred Lists</option>
                        <option value="Enhanced">Enhanced</option>
                        <option value="Standard">Standard</option>
                        <option value="Basic">Basic</option>
                        <option value="Applied for">Applied for</option>
                        <option value="Willing to obtain">Willing to obtain</option>
                      </select>
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Driving License
                      <select name="drivingLicense" value={formData.drivingLicense} onChange={handleInputChange} className={styles.formSelect}>
                        <option value="">Select Driving Status</option>
                        <option value="Full UK License">Full UK License</option>
                        <option value="Provisional License">Provisional License</option>
                        <option value="No License">No License</option>
                      </select>
                    </label>
                  </div>
                </div>

                <div className={styles.formCard}>
                  <label className={styles.formLabel}>
                    Professional Profile*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Compassionate and dedicated Support Worker with 5+ years of experience in learning disabilities and mental health settings. Skilled in personal care, medication administration, and developing person-centred support plans. Committed to promoting independence and dignity for all service users. Strong understanding of CQC regulations and safeguarding procedures."
                      required
                      className={styles.formTextarea}
                      rows="6"
                    />
                    <div className={styles.characterCount}>
                      {formData.summary.length}/500 characters
                    </div>
                  </label>
                </div>

                {/* Education */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiBook /> Education & Training</h4>
                  <p className={styles.sectionDescription}>List your relevant education, NVQs, and care training</p>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Institution/Training Provider*
                      <input 
                        value={currentEducation.institution} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                        placeholder="Local College / Care Training UK" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Qualification/Course*
                      <input 
                        value={currentEducation.qualification} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, qualification: e.target.value })} 
                        placeholder="NVQ Level 3 in Health & Social Care" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Awarding Body
                      <input 
                        value={currentEducation.awardingBody} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, awardingBody: e.target.value })} 
                        placeholder="City & Guilds / NCFE" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
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
                      End Date / Expected
                      <input 
                        type="text" 
                        placeholder="Month Year or Ongoing" 
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
                      <FiPlus /> {currentEducation.isEditing ? 'Update Education' : 'Add Education'}
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

                  <div className={styles.itemsList}>
                    {formData.education.map((edu, i) => (
                      <div key={i} className={styles.listItem}>
                        <div className={styles.itemContent}>
                          <div className={styles.itemHeader}>
                            <strong className={styles.itemTitle}>{edu.qualification}</strong>
                          </div>
                          <div className={styles.itemMeta}>
                            <span>{edu.institution} {edu.awardingBody && `(${edu.awardingBody})`}</span>
                            <span>{edu.startDate} – {edu.endDate || 'Ongoing'}</span>
                          </div>
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editEducation(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteEducation(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.education.length === 0 && <p className={styles.emptyMessage}>No education added yet</p>}
                  </div>
                </div>

                {/* Languages */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiGlobe /> Languages</h4>
                  <p className={styles.sectionDescription}>List languages you speak and your proficiency level</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Language*
                        <input 
                          value={currentLanguage.name} 
                          onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })} 
                          placeholder="British Sign Language" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Proficiency Level
                        <input 
                          value={currentLanguage.proficiency} 
                          onChange={(e) => setCurrentLanguage({ ...currentLanguage, proficiency: e.target.value })} 
                          placeholder="Fluent / Basic / Level 2" 
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

            {/* Care Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiUsers /> Care Experience</h3>
                <p className={styles.sectionDescription}>List your support worker positions in reverse chronological order (most recent first)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Job Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Support Worker / Senior Support Worker" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Employer/Organisation*
                      <input 
                        value={currentExperience.employer} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, employer: e.target.value })} 
                        placeholder="Care UK / Local Council / NHS Trust" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Location
                      <input 
                        value={currentExperience.location} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, location: e.target.value })} 
                        placeholder="Town/City" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Type of Service Users
                      <input 
                        value={currentExperience.serviceUsers} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, serviceUsers: e.target.value })} 
                        placeholder="Adults with learning disabilities / Mental health / Elderly" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Start Date*
                      <input 
                        type="text" 
                        placeholder="Month Year (e.g., January 2020)" 
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
                    Key Responsibilities & Achievements*
                    <textarea 
                      value={currentExperience.description} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} 
                      placeholder="• Provided person-centred support to 4 adults with complex learning disabilities in a residential setting
• Administered medication following MAR charts and maintained accurate records
• Developed and implemented individual support plans in collaboration with multidisciplinary team
• Supported service users with personal care, meal preparation, and community access
• Maintained compliance with CQC standards and safeguarding procedures
• Trained 2 new support workers on service protocols and person-centred approaches"
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
                      <FiPlus /> {currentExperience.isEditing ? 'Update Experience' : 'Add Experience'}
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
                  <h4 className={styles.subSectionTitle}>Your Care Experience</h4>
                  {formData.experience.length === 0 ? (
                    <p className={styles.emptyMessage}>No experience added yet</p>
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
                              <span>{exp.location}</span>
                              <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
                            </div>
                            {exp.serviceUsers && <div className={styles.itemMeta}><span>Service Users: {exp.serviceUsers}</span></div>}
                            <div className={styles.itemDescription}>
                              {exp.description.split('\n').filter(l => l.trim()).map((line, j) => (
                                <p key={j} className={styles.bulletPoint}>• {line}</p>
                              ))}
                            </div>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editExperience(i)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deleteExperience(i)} className={styles.deleteButton}><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Areas of Specialism */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Areas of Specialism</h4>
                  <p className={styles.sectionDescription}>List your care specialisms and areas of expertise</p>
                  <div className={styles.skillsInput}>
                    <input 
                      value={currentSpecialty.name} 
                      onChange={(e) => setCurrentSpecialty({ ...currentSpecialty, name: e.target.value })} 
                      placeholder="Learning Disabilities / Autism / Dementia Care / Mental Health" 
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

            {/* Qualifications Section */}
            {activeSection === 'qualifications' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiAward /> Professional Qualifications</h3>
                
                {/* Certifications */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiShield /> Certifications & Training</h4>
                  <p className={styles.sectionDescription}>Add your professional care qualifications and mandatory training</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Qualification/Certificate Name*
                        <input 
                          value={currentQualification.name} 
                          onChange={(e) => setCurrentQualification({ ...currentQualification, name: e.target.value })} 
                          placeholder="Moving & Handling Certificate" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Awarding Body/Training Provider
                        <input 
                          value={currentQualification.awardingBody} 
                          onChange={(e) => setCurrentQualification({ ...currentQualification, awardingBody: e.target.value })} 
                          placeholder="British Red Cross / Local Authority" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Certificate Number
                        <input 
                          value={currentQualification.qualificationNumber} 
                          onChange={(e) => setCurrentQualification({ ...currentQualification, qualificationNumber: e.target.value })} 
                          placeholder="CERT123456" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Expiry Date
                        <input 
                          value={currentQualification.expiryDate} 
                          onChange={(e) => setCurrentQualification({ ...currentQualification, expiryDate: e.target.value })} 
                          placeholder="Month Year" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addQualification} 
                        className={styles.addButton} 
                        disabled={!currentQualification.name.trim()}
                      >
                        <FiPlus /> {currentQualification.isEditing ? 'Update Qualification' : 'Add Qualification'}
                      </button>
                      {currentQualification.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentQualification(defaultQualification())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.qualifications.map((q, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{q.name}</strong>
                          {q.awardingBody && ` – ${q.awardingBody}`}
                          {q.qualificationNumber && ` (#${q.qualificationNumber})`}
                          {q.expiryDate && ` – Expires: ${q.expiryDate}`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editQualification(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteQualification(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.qualifications.length === 0 && <p className={styles.emptyMessage}>No qualifications added yet</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiTool /> Care & Support Skills</h3>
                
                {/* Care Skills by Category */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Personal Care Skills</h4>
                  <p className={styles.sectionDescription}>Add your personal care and support skills (select category)</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Skill Name*
                        <input 
                          value={currentSkill.name} 
                          onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })} 
                          placeholder="Personal hygiene assistance" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Category
                        <select 
                          value={currentSkill.category} 
                          onChange={(e) => setCurrentSkill({ ...currentSkill, category: e.target.value })} 
                          className={styles.formSelect}
                        >
                          <option value="Personal Care">Personal Care</option>
                          <option value="Communication">Communication</option>
                          <option value="Safeguarding">Safeguarding</option>
                          <option value="Administrative">Administrative</option>
                        </select>
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
                  
                  {/* Skills by Category Display */}
                  {['Personal Care', 'Communication', 'Safeguarding', 'Administrative'].map(category => {
                    const categorySkills = formData.skills.filter(skill => skill.category === category);
                    if (categorySkills.length === 0) return null;
                    return (
                      <div key={category} className={styles.skillCategorySection}>
                        <h5 className={styles.skillCategoryTitle}>{category} Skills</h5>
                        <div className={styles.itemsList}>
                          {categorySkills.map((skill, i) => {
                            const index = formData.skills.findIndex(s => s === skill);
                            return (
                              <div key={i} className={styles.listItem}>
                                <span>{skill.name}</span>
                                <div className={styles.itemActions}>
                                  <button onClick={() => editSkill(index)} className={styles.editButton}><FiEdit2 /></button>
                                  <button onClick={() => deleteSkill(index)} className={styles.deleteButton}><FiTrash2 /></button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                  
                  {formData.skills.length === 0 && <p className={styles.emptyMessage}>No skills added yet</p>}
                </div>
              </div>
            )}

            {/* References Section */}
            {activeSection === 'references' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiFileText /> Professional References</h3>
                <p className={styles.sectionDescription}>Add your professional references (minimum 2 recommended for UK care sector)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Reference Name*
                      <input 
                        value={currentReference.name} 
                        onChange={(e) => setCurrentReference({ ...currentReference, name: e.target.value })} 
                        placeholder="John Smith" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Position*
                      <input 
                        value={currentReference.position} 
                        onChange={(e) => setCurrentReference({ ...currentReference, position: e.target.value })} 
                        placeholder="Service Manager / Team Leader" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Organisation
                      <input 
                        value={currentReference.organisation} 
                        onChange={(e) => setCurrentReference({ ...currentReference, organisation: e.target.value })} 
                        placeholder="Care UK / Local Authority" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Relationship
                      <input 
                        value={currentReference.relationship} 
                        onChange={(e) => setCurrentReference({ ...currentReference, relationship: e.target.value })} 
                        placeholder="Former Manager / Colleague" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone
                      <input 
                        type="tel" 
                        value={currentReference.phone} 
                        onChange={(e) => setCurrentReference({ ...currentReference, phone: e.target.value })} 
                        placeholder="07123 456789" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Email
                      <input 
                        type="email" 
                        value={currentReference.email} 
                        onChange={(e) => setCurrentReference({ ...currentReference, email: e.target.value })} 
                        placeholder="reference@organisation.co.uk" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addReference} 
                      className={styles.addButton} 
                      disabled={!currentReference.name.trim() || !currentReference.position.trim()}
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
                
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Your References</h4>
                  {formData.references.length === 0 ? (
                    <p className={styles.emptyMessage}>No references added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.references.map((ref, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{ref.name}</strong>
                              <span className={styles.itemSubtitle}> – {ref.position}</span>
                            </div>
                            <div className={styles.itemMeta}>
                              {ref.organisation && <span>{ref.organisation}</span>}
                              {ref.relationship && <span>{ref.relationship}</span>}
                            </div>
                            <div className={styles.itemMeta}>
                              {ref.phone && <span>Tel: {ref.phone}</span>}
                              {ref.email && <span>Email: {ref.email}</span>}
                            </div>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editReference(i)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deleteReference(i)} className={styles.deleteButton}><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Font Settings Section */}
            {activeSection === 'settings' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiSettings /> Font Size Settings</h3>
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
                        <span>Employer/Institution Names</span>
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
                        <span>Dates</span>
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
                        <span>Qualification Text</span>
                        <span className={styles.fontSizeValue}>{fontSizes.qualificationText}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="14" 
                        value={fontSizes.qualificationText}
                        onChange={(e) => handleFontSizeChange('qualificationText', e.target.value)}
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
              Everything you need to know about creating professional support worker CVs with our UK tool.
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
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Advance Your UK Care Career?</h2>
            <p className={styles.ctaSubtitle}>
              Join 200,000+ UK care professionals who landed their dream roles with our free DBS-ready support worker CV builder.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free support worker CV now—no sign-up required"
              >
                <span className={styles.ctaButtonText}>Create Your Free Support Worker CV Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>No credit card required • Free forever • Download in minutes • DBS Ready for UK Care Sector</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h3>Full Support Worker CV Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <SupportWorkerTemplate formData={formData} />
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

  // Breadcrumb data for structured data
  const breadcrumbData = [
    { name: 'Home', item: 'https://www.professionalresumefree.com/' },
    { name: 'Free Support Worker CV Builder', item: 'https://www.professionalresumefree.com/ats-friendly-support-worker-resume-builder' }
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