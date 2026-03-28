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
  FiActivity as FiProcedure,
  FiMonitor,
  FiDroplet,
  FiThermometer,
  FiPackage
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
    facilityType: '',
    startDate: '',
    endDate: '',
    responsibilities: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultEducation = () => ({
    institution: '',
    degree: '',
    certificationType: '',
    completionDate: '',
    gpa: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultClinicalSkill = () => ({
    name: '',
    proficiency: 'Intermediate',
    isEditing: false,
    editIndex: null
  });
  
  const defaultCertification = () => ({
    name: '',
    issuingAuthority: '',
    certificationNumber: '',
    expiryDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultProcedure = () => ({
    name: '',
    frequency: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultEhrSoftware = () => ({
    name: '',
    proficiency: 'Proficient',
    isEditing: false,
    editIndex: null
  });
  
  const defaultLanguage = () => ({
    name: '',
    proficiency: '',
    isEditing: false,
    editIndex: null
  });

  // --- State ---
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    credential: '',
    summary: '',
    experience: [],
    education: [],
    clinicalSkills: [],
    certifications: [],
    procedures: [],
    ehrSoftware: [],
    languages: []
  });

  // Font size state
  const [fontSizes, setFontSizes] = useState({
    name: 14,
    sectionTitle: 10,
    contactInfo: 7,
    jobTitle: 9,
    company: 7,
    degree: 9,
    institution: 7,
    institutionDate: 6,
    regularText: 8,
    bulletText: 8,
    skillText: 7,
    certificationText: 8
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentClinicalSkill, setCurrentClinicalSkill] = useState(defaultClinicalSkill());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentProcedure, setCurrentProcedure] = useState(defaultProcedure());
  const [currentEhrSoftware, setCurrentEhrSoftware] = useState(defaultEhrSoftware());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Testimonials for Medical Assistants
  const testimonials = [
    {
      quote: "This Medical Assistant resume builder helped me land a job at a top clinic in just 2 weeks! The templates are perfectly tailored for CMA/RMA positions.",
      metric: "Hired in 2 Weeks",
      name: "Maria G.",
      role: "Certified Medical Assistant",
      company: "Family Medical Clinic"
    },
    {
      quote: "As a recent graduate, the entry-level MA templates were exactly what I needed. I got 3 interviews in my first week of applying!",
      metric: "3 Interviews in 1 Week",
      name: "James R.",
      role: "Medical Assistant Graduate",
      company: "Healthcare System"
    },
    {
      quote: "The ATS optimization for Medical Assistant positions is incredible. My resume actually got through hospital screening systems!",
      metric: "Passed ATS Screening",
      name: "Sarah L.",
      role: "Clinical Medical Assistant",
      company: "Hospital Network"
    },
    {
      quote: "Transitioning from administrative to clinical MA was easy with their templates. Highlighted all my transferable skills perfectly.",
      metric: "Career Transition Success",
      name: "David K.",
      role: "Medical Assistant",
      company: "Specialty Clinic"
    },
    {
      quote: "The EHR software section was a game-changer. My new employer specifically mentioned how impressed they were with my technical skills list.",
      metric: "EHR Skills Highlighted",
      name: "Lisa M.",
      role: "Medical Assistant",
      company: "Multi-Specialty Practice"
    },
    {
      quote: "Free CMA resume template that actually looks professional? This saved me hundreds in resume writing services.",
      metric: "Professional Resume in 10min",
      name: "Robert T.",
      role: "CMA, AAMA Certified",
      company: "Urgent Care Center"
    }
  ];

  // FAQ Data for Medical Assistants
  const faqs = [
    {
      question: "Is this Medical Assistant resume builder completely free with no watermarks?",
      answer: "Yes, our Medical Assistant resume builder is 100% free with no hidden costs, watermarks, or sign-up required. Create, edit, and download your professional CMA/RMA resume in PDF format without any payment."
    },
    {
      question: "What does ATS-friendly mean for Medical Assistant resumes?",
      answer: "ATS-friendly means our Medical Assistant templates are optimized for Applicant Tracking Systems used by 95% of clinics, hospitals, and healthcare facilities. We include industry-specific keywords and formatting that healthcare employers look for in CMA/RMA candidates."
    },
    {
      question: "Can I include my CMA, RMA, or CCMA certification on the resume?",
      answer: "Absolutely! Our builder has dedicated sections for certifications including CMA (AAMA), RMA (AMT), CCMA (NHA), NCMA (NCCT), and other state-specific credentials. We'll format them correctly for maximum visibility."
    },
    {
      question: "How many Medical Assistant resume templates are available?",
      answer: "We offer multiple ATS-friendly templates specifically designed for Certified Medical Assistants, Registered Medical Assistants, Clinical Medical Assistants, and entry-level Medical Assistant positions. All templates are free and optimized for healthcare hiring."
    },
    {
      question: "Can I list my EHR/EMR software experience?",
      answer: "Yes! We have a dedicated section for EHR/EMR software proficiency including Epic, Cerner, Allscripts, eClinicalWorks, and others. This is crucial for modern Medical Assistant positions."
    },
    {
      question: "Is this resume builder suitable for both clinical and administrative Medical Assistants?",
      answer: "Yes, our templates accommodate both clinical and administrative Medical Assistant roles. You can highlight phlebotomy, EKG, vitals, injections, patient education, scheduling, billing, and front office skills as needed."
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
      degree: 9,
      institution: 7,
      institutionDate: 6,
      regularText: 8,
      bulletText: 8,
      skillText: 7,
      certificationText: 8
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
      formData.clinicalSkills.length > 0 ||
      formData.certifications.length > 0 ||
      formData.procedures.length > 0 ||
      formData.ehrSoftware.length > 0 ||
      formData.languages.length > 0
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

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, defaultExperience, 
    () => currentExperience.position && currentExperience.employer && currentExperience.startDate);
  
  const editExperience = createEditFunction('experience', setCurrentExperience);
  const deleteExperience = createDeleteFunction('experience');

  const addEducation = createAddFunction('education', currentEducation, setCurrentEducation, defaultEducation, 
    () => currentEducation.institution && currentEducation.degree && currentEducation.completionDate);
  
  const editEducation = createEditFunction('education', setCurrentEducation);
  const deleteEducation = createDeleteFunction('education');

  const addClinicalSkill = createAddFunction('clinicalSkills', currentClinicalSkill, setCurrentClinicalSkill, defaultClinicalSkill, 
    () => currentClinicalSkill.name.trim());
  
  const editClinicalSkill = createEditFunction('clinicalSkills', setCurrentClinicalSkill);
  const deleteClinicalSkill = createDeleteFunction('clinicalSkills');

  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, 
    () => currentCertification.name.trim());
  
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');

  const addProcedure = createAddFunction('procedures', currentProcedure, setCurrentProcedure, defaultProcedure, 
    () => currentProcedure.name.trim());
  
  const editProcedure = createEditFunction('procedures', setCurrentProcedure);
  const deleteProcedure = createDeleteFunction('procedures');

  const addEhrSoftware = createAddFunction('ehrSoftware', currentEhrSoftware, setCurrentEhrSoftware, defaultEhrSoftware, 
    () => currentEhrSoftware.name.trim());
  
  const editEhrSoftware = createEditFunction('ehrSoftware', setCurrentEhrSoftware);
  const deleteEhrSoftware = createDeleteFunction('ehrSoftware');

  const addLanguage = createAddFunction('languages', currentLanguage, setCurrentLanguage, defaultLanguage, 
    () => currentLanguage.name.trim());
  
  const editLanguage = createEditFunction('languages', setCurrentLanguage);
  const deleteLanguage = createDeleteFunction('languages');

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
            
            const degrees = clone.querySelectorAll(`.${styles.educationItem} h3`);
            degrees.forEach(degree => {
              degree.style.fontSize = `${fontSizes.degree}pt`;
            });
            
            const institutions = clone.querySelectorAll(`.${styles.institution}`);
            institutions.forEach(institution => {
              institution.style.fontSize = `${fontSizes.institution}pt`;
            });
            
            const institutionDates = clone.querySelectorAll(`.${styles.institutionDate}`);
            institutionDates.forEach(date => {
              date.style.fontSize = `${fontSizes.institutionDate}pt`;
            });
            
            const regularTexts = clone.querySelectorAll(`.${styles.summaryText}, .${styles.certificationItem}`);
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
            
            const certificationTexts = clone.querySelectorAll(`.${styles.certificationItem}`);
            certificationTexts.forEach(cert => {
              cert.style.fontSize = `${fontSizes.certificationText}pt`;
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

      pdf.save(`${formData.fullName || 'medical_assistant_resume'}_resume.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Medical Assistant Resume Template ---
  const MedicalAssistantTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasClinicalSkills = formData.clinicalSkills.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasProcedures = formData.procedures.length > 0;
    const hasEhrSoftware = formData.ehrSoftware.length > 0;
    const hasLanguages = formData.languages.length > 0;

    return (
      <div className={styles.medicalAssistantTemplate}>
        <header className={styles.resumeHeader}>
          <h1 className={styles.name} style={{ fontSize: `${fontSizes.name}pt` }}>
            {formData.fullName || 'Your Name'}
            {formData.credential && <span className={styles.credential}> {formData.credential}</span>}
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
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL SUMMARY</h2>
            <p className={styles.summaryText} style={{ fontSize: `${fontSizes.regularText}pt` }}>{formData.summary}</p>
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CERTIFICATIONS & LICENSES</h2>
            {formData.certifications.map((cert, i) => (
              <div key={i} className={styles.certificationItem} style={{ fontSize: `${fontSizes.certificationText}pt` }}>
                <strong>{cert.name}</strong>
                {cert.issuingAuthority && ` – ${cert.issuingAuthority}`}
                {cert.certificationNumber && ` (#${cert.certificationNumber})`}
                {cert.expiryDate && ` – Expires: ${cert.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasExperience && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CLINICAL EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3>
                  <p className={styles.company} style={{ fontSize: `${fontSizes.company}pt` }}>{exp.employer}{exp.facilityType && ` – ${exp.facilityType}`} | {exp.startDate} – {exp.endDate || 'Present'}</p>
                </div>
                <ul className={styles.bulletList}>
                  {exp.responsibilities.split('\n').filter(line => line.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{line}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasEducation && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EDUCATION & TRAINING</h2>
            {formData.education.map((edu, i) => (
              <div key={i} className={styles.educationItem}>
                <h3 style={{ fontSize: `${fontSizes.degree}pt` }}>
                  {edu.degree}{edu.certificationType && ` – ${edu.certificationType}`}
                </h3>
                <p className={styles.institution} style={{ fontSize: `${fontSizes.institution}pt` }}>
                  {edu.institution} | 
                  <span className={styles.institutionDate} style={{ fontSize: `${fontSizes.institutionDate}pt` }}>
                    {edu.completionDate} {edu.gpa && ` | GPA: ${edu.gpa}`}
                  </span>
                </p>
              </div>
            ))}
          </section>
        )}

        {hasClinicalSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CLINICAL SKILLS</h2>
            <ul className={styles.skillsList}>
              {formData.clinicalSkills.map((skill, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>
                  {skill.name}{skill.proficiency && ` (${skill.proficiency})`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {hasProcedures && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>MEDICAL PROCEDURES</h2>
            <ul className={styles.bulletList}>
              {formData.procedures.map((p, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt` }}>
                  {p.name}{p.frequency && ` (${p.frequency})`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {hasEhrSoftware && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EHR/EMR SOFTWARE PROFICIENCY</h2>
            <ul className={styles.skillsList}>
              {formData.ehrSoftware.map((software, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>
                  {software.name}{software.proficiency && ` (${software.proficiency})`}
                </li>
              ))}
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
      </div>
    );
  };

  return (
    <div className={styles.resumeBuilder} lang="en-US">
      <Head>
        <title>Free Medical Assistant Resume Builder 2026: CMA & RMA Templates</title>
        <meta name="title" content="Free Medical Assistant Resume Builder 2026: CMA & RMA Templates" />
        <meta name="description" content="Create your professional Medical Assistant resume for free in 2026. ATS-optimized CMA/RMA templates help you land healthcare interviews faster. Start now—no sign-up." />
        <meta name="keywords" content="medical assistant resume builder, CMA resume, RMA resume, medical assistant resume templates, clinical medical assistant resume, certified medical assistant resume, free resume builder for medical assistants, ATS friendly medical assistant resume, entry level medical assistant resume, healthcare resume USA" />
        <meta name="author" content="Professional Medical Assistant Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://www.professionalresumefree.com/ats-friendly-medical-assistant-resume-builder" />
        <meta property="og:title" content="Free Medical Assistant Resume Builder 2026: CMA & RMA Templates" />
        <meta property="og:description" content="Create your professional Medical Assistant resume for free in 2026. ATS-optimized CMA/RMA templates help you land healthcare interviews faster. Start now—no sign-up." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-medical-assistant-resume-builder.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Medical Assistant Resume Builder - Create Professional CMA/RMA Resumes Online" />
        <meta property="og:url" content="https://www.professionalresumefree.com/ats-friendly-medical-assistant-resume-builder" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Medical Assistant Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Medical Assistant Resume Builder 2026: CMA & RMA Templates" />
        <meta name="twitter:description" content="Create your professional Medical Assistant resume for free in 2026. ATS-optimized CMA/RMA templates help you land healthcare interviews faster. Start now—no sign-up." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-medical-assistant-resume-builder.jpg" />
        <meta name="twitter:image:alt" content="Free Medical Assistant Resume Builder with ATS Templates" />
        <meta name="twitter:site" content="@MA_ResumeFree" />
        <meta name="twitter:creator" content="@MA_ResumeFree" />
        <meta name="theme-color" content="#1a4a8d" />
        <meta name="msapplication-TileColor" content="#1a4a8d" />
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
                  "@id": "https://www.professionalresumefree.com/ats-friendly-medical-assistant-resume-builder/#webpage",
                  "url": "https://www.professionalresumefree.com/ats-friendly-medical-assistant-resume-builder",
                  "name": "Free Medical Assistant Resume Builder 2026 - CMA & RMA Templates",
                  "description": "Create professional ATS-optimized Medical Assistant resumes for free. Land interviews 3x faster with our CMA/RMA resume builder.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Professional Medical Assistant Resume Free",
                    "description": "Free online resume builder for Medical Assistants in the USA",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://www.professionalresumefree.com/#organization",
                      "name": "Professional Medical Assistant Resume Free",
                      "url": "https://www.professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/MA_ResumeFree",
                        "https://www.linkedin.com/company/medical-assistant-resume-free"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/og-medical-assistant-resume-builder.jpg",
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
                        "name": "Medical Assistant Resume Builder",
                        "item": "https://www.professionalresumefree.com/ats-friendly-medical-assistant-resume-builder"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Medical Assistant Resume Builder - ATS Optimized CMA/RMA Resume Maker",
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
                      "ratingValue": 4.9,
                      "ratingCount": 25678,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online ATS-friendly Medical Assistant resume builder for CMA, RMA, CCMA, and Clinical Medical Assistants in the USA.",
                    "featureList": [
                      "Medical Assistant ATS-Optimized Templates",
                      "CMA/RMA Certification Sections",
                      "Clinical Skills Database",
                      "EHR/EMR Software Tracking",
                      "One-Click PDF Download",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://www.professionalresumefree.com/images/screenshot-medical-assistant-resume-builder.jpg",
                    "applicationSuite": "Medical Assistant Career Tools",
                    "countriesSupported": "USA",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-medical-assistant-resume-builder#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Medical Assistant Resume Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://www.professionalresumefree.com/ats-friendly-medical-assistant-resume-builder#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional Medical Assistant Resume with Our Free Builder",
                  "description": "Step-by-step guide to create an ATS-optimized Medical Assistant resume for free",
                  "totalTime": "PT10M",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "currency": "USD",
                    "value": "0"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "position": 1,
                      "name": "Choose a Medical Assistant Template",
                      "text": "Select from our ATS-optimized Medical Assistant resume templates designed for CMA, RMA, CCMA, and Clinical Medical Assistants.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-medical-assistant-resume-builder#templates",
                      "image": "https://www.medicalassistantresume.com/images/step1-ma-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Enter Your Medical Assistant Information",
                      "text": "Add your clinical experience, education, certifications, clinical skills, and EHR/EMR software proficiency.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-medical-assistant-resume-builder#editor",
                      "image": "https://www.professionalresumefree.com/images/step2-ma-info.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize and Optimize",
                      "text": "Use our Medical Assistant-specific suggestions to highlight clinical skills, certifications, and healthcare keywords for ATS compatibility.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-medical-assistant-resume-builder#optimize",
                      "image": "https://www.professionalresumefree.com/images/step3-optimize-ma.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your Medical Assistant Resume",
                      "text": "Export your professional Medical Assistant resume as PDF - completely free, no watermarks, optimized for USA healthcare employers.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-medical-assistant-resume-builder#download",
                      "image": "https://www.professionalresumefree.com/images/step4-download-ma.jpg"
                    }
                  ]
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
            <span className={styles.breadcrumbText}>Free CMA/RMA Template</span>
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
                Rated 4.9/5 by 25,678+ Medical Assistants | Best Free Medical Assistant Resume Builder 2026
              </span>
            </div>
            
            {/* ONLY ONE H1 TAG ON THE ENTIRE PAGE */}
            <h1 className={styles.heroTitle}>
              Free Medical Assistant Resume Builder 2026
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create a <strong className={styles.heroHighlight}>professional, ATS-optimized Medical Assistant resume for free in minutes.</strong> Our CMA/RMA resume builder ensures your clinical skills and certifications get noticed by clinics, hospitals, and healthcare employers.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free Medical Assistant resume now—no sign-up required"
              >
                <span className={styles.buttonText}>Start Building Your Medical Assistant Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download Medical Assistant resume as PDF"
                disabled={isGeneratingPDF || !hasContent()}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download Medical Assistant Resume PDF</span>
              </button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>500K+</span>
                <span className={styles.statLabel}>Medical Assistant Resumes Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>92%</span>
                <span className={styles.statLabel}>Interview Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>Faster Job Placement</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9/5</span>
                <span className={styles.statLabel}>Rating from Medical Assistants</span>
              </div>
            </div>

            <div className={styles.maBadges}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem}><FiActivity /> CMA (AAMA)</span>
                <span className={styles.badgeItem}><FiShield /> RMA (AMT)</span>
                <span className={styles.badgeItem}><FiAward /> CCMA (NHA)</span>
                <span className={styles.badgeItem}><FiFileText /> NCMA (NCCT)</span>
                <span className={styles.badgeItem}><FiDroplet /> Phlebotomy</span>
                <span className={styles.badgeItem}><FiMonitor /> EHR/EMR</span>
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
                  <MedicalAssistantTemplate formData={formData} />
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
              { id: 'experience', label: 'Clinical Experience', icon: <FiHeart /> },
              { id: 'education', label: 'Education', icon: <FiBook /> },
              { id: 'skills', label: 'Clinical Skills', icon: <FiActivity /> },
              { id: 'certifications', label: 'Certifications', icon: <FiShield /> },
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
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Jane Smith, CMA (AAMA)" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Credential/Acronym
                      <input type="text" name="credential" value={formData.credential} onChange={handleInputChange} placeholder="CMA, RMA, CCMA, NCMA" className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="jane.smith@email.com" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Phone*
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" required className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Location (City, State)
                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Los Angeles, CA" className={styles.formInput} />
                  </label>
                </div>

                <div className={styles.formCard}>
                  <label className={styles.formLabel}>
                    Professional Medical Assistant Summary*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Dedicated and certified Medical Assistant with 3+ years of experience in fast-paced clinical settings. Proficient in patient intake, vital signs measurement, phlebotomy, EKG administration, and EHR documentation. Skilled in both clinical procedures and administrative tasks with a strong commitment to patient care and clinical excellence. Seeking to leverage clinical expertise in a progressive healthcare facility."
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

            {/* Clinical Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiHeart /> Clinical Experience</h2>
                <p className={styles.sectionDescription}>List your Medical Assistant positions in reverse chronological order</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Medical Assistant, Clinical Medical Assistant" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Healthcare Facility/Clinic*
                      <input 
                        value={currentExperience.employer} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, employer: e.target.value })} 
                        placeholder="City Medical Clinic" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Facility Type / Specialty
                    <input 
                      value={currentExperience.facilityType} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, facilityType: e.target.value })} 
                      placeholder="Family Practice, Urgent Care, Multi-Specialty Clinic" 
                      className={styles.formInput} 
                    />
                  </label>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Start Date*
                      <input 
                        type="text" 
                        placeholder="Month Year (e.g., January 2023)" 
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
                    Clinical Responsibilities & Achievements*
                    <textarea 
                      value={currentExperience.responsibilities} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, responsibilities: e.target.value })} 
                      placeholder="• Performed patient intake including vital signs, medical history, and chief complaint documentation
• Assisted physicians with examinations, procedures, and minor surgeries
• Administered medications and injections as directed by healthcare providers
• Collected and processed laboratory specimens including blood, urine, and cultures
• Performed EKGs, phlebotomy, and point-of-care testing with 99% accuracy
• Managed patient scheduling, insurance verification, and front desk operations
• Maintained electronic health records (EHR) ensuring 100% accuracy and compliance
• Educated patients on treatment plans, medications, and preventive care measures"
                      required 
                      className={styles.formTextarea} 
                      rows="8" 
                    />
                    <div className={styles.characterCount}>
                      {currentExperience.responsibilities.length}/2000 characters
                    </div>
                  </label>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addExperience} 
                      className={styles.addButton} 
                      disabled={!currentExperience.position || !currentExperience.employer || !currentExperience.startDate}
                    >
                      <FiPlus /> {currentExperience.isEditing ? 'Update Clinical Experience' : 'Add Clinical Experience'}
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
                  <h3 className={styles.subSectionTitle}>Your Clinical Experience</h3>
                  {formData.experience.length === 0 ? (
                    <p className={styles.emptyMessage}>No clinical experience added yet</p>
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
                              {exp.facilityType && <span>{exp.facilityType}</span>}
                            </div>
                            <div className={styles.itemDescription}>
                              {exp.responsibilities.split('\n').filter(l => l.trim()).map((line, j) => (
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
              </div>
            )}

            {/* Education Section */}
            {activeSection === 'education' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiBook /> Education & Training</h2>
                <p className={styles.sectionDescription}>List your Medical Assistant education, training programs, and certifications</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Institution/Program Name*
                      <input 
                        value={currentEducation.institution} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                        placeholder="City College Medical Assistant Program" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Degree/Certificate Earned*
                      <input 
                        value={currentEducation.degree} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} 
                        placeholder="Medical Assistant Certificate, Associate Degree" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Certification Type / Specialization
                    <input 
                      value={currentEducation.certificationType} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, certificationType: e.target.value })} 
                      placeholder="Clinical Medical Assistant, CMA Exam Eligible" 
                      className={styles.formInput} 
                    />
                  </label>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Completion Date*
                      <input 
                        type="text" 
                        placeholder="Month Year" 
                        value={currentEducation.completionDate} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, completionDate: e.target.value })} 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      GPA / Honors
                      <input 
                        type="text" 
                        placeholder="3.8, Magna Cum Laude" 
                        value={currentEducation.gpa} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, gpa: e.target.value })} 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addEducation} 
                      className={styles.addButton} 
                      disabled={!currentEducation.institution || !currentEducation.degree || !currentEducation.completionDate}
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
                </div>
                
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}>Your Education & Training</h3>
                  {formData.education.length === 0 ? (
                    <p className={styles.emptyMessage}>No education added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.education.map((edu, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{edu.degree}</strong>
                              {edu.certificationType && <span className={styles.itemSubtitle}> – {edu.certificationType}</span>}
                            </div>
                            <div className={styles.itemMeta}>
                              <span>{edu.institution}</span>
                              <span>Completed: {edu.completionDate} {edu.gpa && ` | GPA: ${edu.gpa}`}</span>
                            </div>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editEducation(i)} className={styles.editButton} aria-label={`Edit ${edu.degree}`}><FiEdit2 /></button>
                            <button onClick={() => deleteEducation(i)} className={styles.deleteButton} aria-label={`Delete ${edu.degree}`}><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiActivity /> Clinical Skills & Procedures</h2>
                
                {/* Clinical Skills */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}><FiActivity /> Clinical Skills</h3>
                  <p className={styles.sectionDescription}>List your clinical skills and proficiency level</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Skill Name*
                        <input 
                          value={currentClinicalSkill.name} 
                          onChange={(e) => setCurrentClinicalSkill({ ...currentClinicalSkill, name: e.target.value })} 
                          placeholder="Phlebotomy, EKG Administration, Vital Signs" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Proficiency Level
                        <select 
                          value={currentClinicalSkill.proficiency} 
                          onChange={(e) => setCurrentClinicalSkill({ ...currentClinicalSkill, proficiency: e.target.value })} 
                          className={styles.formSelect}
                        >
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Expert">Expert</option>
                        </select>
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addClinicalSkill} 
                        className={styles.addButton} 
                        disabled={!currentClinicalSkill.name.trim()}
                      >
                        <FiPlus /> {currentClinicalSkill.isEditing ? 'Update Skill' : 'Add Skill'}
                      </button>
                      {currentClinicalSkill.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentClinicalSkill(defaultClinicalSkill())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.clinicalSkills.map((skill, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          {skill.name} {skill.proficiency && `(${skill.proficiency})`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editClinicalSkill(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteClinicalSkill(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.clinicalSkills.length === 0 && <p className={styles.emptyMessage}>No clinical skills added yet</p>}
                  </div>
                </div>

                {/* Medical Procedures */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}><FiProcedure /> Medical Procedures</h3>
                  <p className={styles.sectionDescription}>List specific medical procedures you perform</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Procedure Name*
                        <input 
                          value={currentProcedure.name} 
                          onChange={(e) => setCurrentProcedure({ ...currentProcedure, name: e.target.value })} 
                          placeholder="Venipuncture, Wound Care, Suture Removal" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Frequency / Experience
                        <input 
                          value={currentProcedure.frequency} 
                          onChange={(e) => setCurrentProcedure({ ...currentProcedure, frequency: e.target.value })} 
                          placeholder="Daily, 100+ procedures" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addProcedure} 
                        className={styles.addButton} 
                        disabled={!currentProcedure.name.trim()}
                      >
                        <FiPlus /> {currentProcedure.isEditing ? 'Update Procedure' : 'Add Procedure'}
                      </button>
                      {currentProcedure.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentProcedure(defaultProcedure())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.procedures.map((proc, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          {proc.name} {proc.frequency && `(${proc.frequency})`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editProcedure(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteProcedure(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.procedures.length === 0 && <p className={styles.emptyMessage}>No procedures added yet</p>}
                  </div>
                </div>

                {/* EHR/EMR Software */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}><FiMonitor /> EHR/EMR Software Proficiency</h3>
                  <p className={styles.sectionDescription}>List electronic health record systems you're familiar with</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Software Name*
                        <input 
                          value={currentEhrSoftware.name} 
                          onChange={(e) => setCurrentEhrSoftware({ ...currentEhrSoftware, name: e.target.value })} 
                          placeholder="Epic, Cerner, Allscripts, eClinicalWorks" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Proficiency Level
                        <select 
                          value={currentEhrSoftware.proficiency} 
                          onChange={(e) => setCurrentEhrSoftware({ ...currentEhrSoftware, proficiency: e.target.value })} 
                          className={styles.formSelect}
                        >
                          <option value="Basic">Basic</option>
                          <option value="Proficient">Proficient</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Expert">Expert</option>
                        </select>
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addEhrSoftware} 
                        className={styles.addButton} 
                        disabled={!currentEhrSoftware.name.trim()}
                      >
                        <FiPlus /> {currentEhrSoftware.isEditing ? 'Update Software' : 'Add Software'}
                      </button>
                      {currentEhrSoftware.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentEhrSoftware(defaultEhrSoftware())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.ehrSoftware.map((software, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          {software.name} {software.proficiency && `(${software.proficiency})`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editEhrSoftware(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteEhrSoftware(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.ehrSoftware.length === 0 && <p className={styles.emptyMessage}>No EHR software added yet</p>}
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
                          placeholder="Spanish" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Proficiency Level
                        <input 
                          value={currentLanguage.proficiency} 
                          onChange={(e) => setCurrentLanguage({ ...currentLanguage, proficiency: e.target.value })} 
                          placeholder="Fluent, Conversational, Medical Terminology" 
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
                    {formData.languages.map((lang, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          {lang.name}{lang.proficiency && ` (${lang.proficiency})`}
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

            {/* Certifications Section */}
            {activeSection === 'certifications' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiShield /> Certifications & Licenses</h2>
                <p className={styles.sectionDescription}>Add your Medical Assistant certifications and professional licenses</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Certification/License Name*
                      <input 
                        value={currentCertification.name} 
                        onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                        placeholder="Certified Medical Assistant (CMA)" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Issuing Authority
                      <input 
                        value={currentCertification.issuingAuthority} 
                        onChange={(e) => setCurrentCertification({ ...currentCertification, issuingAuthority: e.target.value })} 
                        placeholder="American Association of Medical Assistants (AAMA)" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Certification/License Number
                      <input 
                        value={currentCertification.certificationNumber} 
                        onChange={(e) => setCurrentCertification({ ...currentCertification, certificationNumber: e.target.value })} 
                        placeholder="CMA1234567" 
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
                
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}>Your Certifications & Licenses</h3>
                  {formData.certifications.length === 0 ? (
                    <p className={styles.emptyMessage}>No certifications added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.certifications.map((cert, i) => (
                        <div key={i} className={styles.listItem}>
                          <div>
                            <strong>{cert.name}</strong>
                            {cert.issuingAuthority && ` – ${cert.issuingAuthority}`}
                            {cert.certificationNumber && ` (#${cert.certificationNumber})`}
                            {cert.expiryDate && ` – Expires: ${cert.expiryDate}`}
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editCertification(i)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deleteCertification(i)} className={styles.deleteButton}><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}>Common Medical Assistant Certifications</h3>
                  <ul className={styles.suggestedList}>
                    <li><strong>CMA (AAMA)</strong> - Certified Medical Assistant from American Association of Medical Assistants</li>
                    <li><strong>RMA (AMT)</strong> - Registered Medical Assistant from American Medical Technologists</li>
                    <li><strong>CCMA (NHA)</strong> - Certified Clinical Medical Assistant from National Healthcareer Association</li>
                    <li><strong>NCMA (NCCT)</strong> - National Certified Medical Assistant from National Center for Competency Testing</li>
                    <li><strong>CPT</strong> - Certified Phlebotomy Technician</li>
                    <li><strong>BLS/CPR</strong> - Basic Life Support/CPR Certification</li>
                    <li><strong>State-specific licenses</strong> - Check your state requirements</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Font Settings Section */}
            {activeSection === 'settings' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiSettings /> Font Size Settings</h2>
                <p className={styles.sectionDescription}>Customize font sizes for your Medical Assistant resume PDF. All sizes are in points (pt).</p>
                
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
                        <span>Degrees</span>
                        <span className={styles.fontSizeValue}>{fontSizes.degree}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="16" 
                        value={fontSizes.degree}
                        onChange={(e) => handleFontSizeChange('degree', e.target.value)}
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
                        <span>Certification Text</span>
                        <span className={styles.fontSizeValue}>{fontSizes.certificationText}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="14" 
                        value={fontSizes.certificationText}
                        onChange={(e) => handleFontSizeChange('certificationText', e.target.value)}
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
              Everything you need to know about creating professional Medical Assistant resumes with our tool.
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
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Start Your Medical Assistant Career?</h2>
            <p className={styles.ctaSubtitle}>
              Join 500,000+ Medical Assistants who landed their dream jobs with our free ATS-friendly Medical Assistant resume builder.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free Medical Assistant resume now—no sign-up required"
              >
                <span className={styles.ctaButtonText}>Create Your Free Medical Assistant Resume Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>No credit card required • Free forever • Download in minutes • ATS Optimized for Healthcare • USA Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h2>Full Medical Assistant Resume Preview</h2>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <MedicalAssistantTemplate formData={formData} />
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
    { name: 'Medical Assistant Resume Builder', item: 'https://www.professionalresumefree.com/ats-friendly-medical-assistant-resume-builder' }
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