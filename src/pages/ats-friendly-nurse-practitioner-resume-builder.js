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
  FiZap,
  FiUsers,
  FiCalendar,
  FiClipboard
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

  // --- Default item factories for Nurse Practitioner ---
  const defaultExperience = () => ({
    employer: '',
    position: '',
    department: '',
    facilityType: '',
    patientPopulation: '',
    startDate: '',
    endDate: '',
    description: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultEducation = () => ({
    institution: '',
    degree: '',
    program: '',
    npSpecialty: '',
    gpa: '',
    startDate: '',
    endDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultCertification = () => ({
    name: '',
    issuingAuthority: '',
    credentialNumber: '',
    issueDate: '',
    expiryDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultClinicalSkill = () => ({
    category: '',
    skills: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultPrescriptiveAuthority = () => ({
    state: '',
    deaNumber: '',
    npiNumber: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultAffiliation = () => ({
    organization: '',
    role: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultProcedure = () => ({
    name: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultLanguage = () => ({
    name: '',
    proficiency: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultSocialLink = () => ({
    platform: '',
    url: '',
    isEditing: false,
    editIndex: null
  });

  // --- State ---
  const [formData, setFormData] = useState({
    fullName: '',
    credentials: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: [],
    education: [],
    certifications: [],
    clinicalSkills: [],
    prescriptiveAuthorities: [],
    affiliations: [],
    procedures: [],
    languages: [],
    socialLinks: []
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
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentClinicalSkill, setCurrentClinicalSkill] = useState(defaultClinicalSkill());
  const [currentPrescriptiveAuthority, setCurrentPrescriptiveAuthority] = useState(defaultPrescriptiveAuthority());
  const [currentAffiliation, setCurrentAffiliation] = useState(defaultAffiliation());
  const [currentProcedure, setCurrentProcedure] = useState(defaultProcedure());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Testimonials for Structured Data - Updated for Nurse Practitioners
  const testimonials = [
    {
      quote: "Created my NP resume in 15 minutes and got 3 interview offers the first week. The NP-specific templates are exactly what recruiters look for!",
      metric: "3 Job Offers in 2 Weeks",
      name: "Sarah M., FNP-C",
      role: "Family Nurse Practitioner",
      company: "Metropolitan Health System"
    },
    {
      quote: "Finally a resume builder that understands advanced practice nursing. The ATS templates helped me pass hospital credentialing systems.",
      metric: "Credentialed in 45 Days",
      name: "James K., AGACNP-BC",
      role: "Acute Care Nurse Practitioner",
      company: "Cardiac Specialty Hospital"
    },
    {
      quote: "As a new NP graduate, the templates helped me showcase my clinical rotations effectively. Landed my first NP position before graduation.",
      metric: "Pre-Graduation Job Offer",
      name: "Alex P., PNP-PC",
      role: "Pediatric Nurse Practitioner",
      company: "Children's Medical Center"
    },
    {
      quote: "The NP resume builder saved me hours. Could update between seeing patients. Professional results that got me a 25% salary increase.",
      metric: "25% Salary Increase",
      name: "Maria L., WHNP-BC",
      role: "Women's Health Nurse Practitioner",
      company: "Women's Health Associates"
    },
    {
      quote: "ATS-friendly NP templates actually work! Got callbacks from major healthcare systems that previously ignored my applications.",
      metric: "5x More Interview Requests",
      name: "David T., PMHNP-BC",
      role: "Psychiatric Mental Health NP",
      company: "Behavioral Health Center"
    },
    {
      quote: "Free PDF download with proper NP formatting? Unbeatable value. Best nurse practitioner resume builder I've found for advanced practice.",
      metric: "Perfect NP Resume in 20min",
      name: "Lisa R., DNP, FNP-C",
      role: "Doctor of Nursing Practice",
      company: "Academic Medical Center"
    }
  ];

  // FAQ Data for Structured Data - Updated for Nurse Practitioners
  const faqs = [
    {
      question: "Is this nurse practitioner resume builder really free with no hidden costs?",
      answer: "Yes, our nurse practitioner resume builder is completely free with no hidden costs or watermarks. Create, edit, and download your professional NP resume in PDF format without any payment required."
    },
    {
      question: "What does ATS-friendly mean for nurse practitioner resumes?",
      answer: "ATS-friendly means our NP resume templates are optimized to pass through Applicant Tracking Systems used by 99% of hospitals and healthcare facilities. This ensures your advanced practice experience, credentials, and certifications are properly scanned and recognized."
    },
    {
      question: "Can I download my NP resume as PDF without creating an account?",
      answer: "Absolutely! Download your professional nurse practitioner resume in PDF format without creating an account. Everything is completely free and accessible immediately for FNPs, AGNPs, PNPs, and all NP specialties."
    },
    {
      question: "How many nurse practitioner resume templates are available for free?",
      answer: "We offer professionally designed ATS-friendly nurse practitioner resume templates for all specialties including FNP, AGACNP, PNP, WHNP, PMHNP, and more. All templates are completely free and optimized for advanced practice nursing hiring."
    },
    {
      question: "How does your NP resume builder work?",
      answer: "Our builder uses ATS-optimized NP templates with proper advanced practice nursing terminology. We guide you to highlight clinical experience, certifications, prescriptive authority, and specialized skills that NP employers and credentialing committees look for."
    },
    {
      question: "Can I include my DEA number and NPI on the resume?",
      answer: "Yes, our NP resume builder includes dedicated sections for prescriptive authority, DEA numbers, NPI, and state licenses. These are essential for advanced practice nurse practitioners in the USA."
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
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      doximity: <FiHeart />,
      portfolio: <FiGlobe />,
      website: <FiGlobe />,
      aanp: <FiUsers />
    };
    return icons[platform.toLowerCase()] || <FiGlobe />;
  };

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
      formData.socialLinks.length > 0 ||
      formData.experience.length > 0 ||
      formData.education.length > 0 ||
      formData.certifications.length > 0 ||
      formData.clinicalSkills.length > 0 ||
      formData.prescriptiveAuthorities.length > 0 ||
      formData.affiliations.length > 0 ||
      formData.procedures.length > 0 ||
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

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, defaultExperience, () => currentExperience.position && currentExperience.employer && currentExperience.startDate);
  
  const editExperience = createEditFunction('experience', setCurrentExperience);
  const deleteExperience = createDeleteFunction('experience');

  const addEducation = createAddFunction('education', currentEducation, setCurrentEducation, defaultEducation, () => currentEducation.institution && currentEducation.degree);
  
  const editEducation = createEditFunction('education', setCurrentEducation);
  const deleteEducation = createDeleteFunction('education');

  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');

  const addClinicalSkill = createAddFunction('clinicalSkills', currentClinicalSkill, setCurrentClinicalSkill, defaultClinicalSkill, () => currentClinicalSkill.category.trim());
  
  const editClinicalSkill = createEditFunction('clinicalSkills', setCurrentClinicalSkill);
  const deleteClinicalSkill = createDeleteFunction('clinicalSkills');

  const addPrescriptiveAuthority = createAddFunction('prescriptiveAuthorities', currentPrescriptiveAuthority, setCurrentPrescriptiveAuthority, defaultPrescriptiveAuthority, () => currentPrescriptiveAuthority.state.trim());
  
  const editPrescriptiveAuthority = createEditFunction('prescriptiveAuthorities', setCurrentPrescriptiveAuthority);
  const deletePrescriptiveAuthority = createDeleteFunction('prescriptiveAuthorities');

  const addAffiliation = createAddFunction('affiliations', currentAffiliation, setCurrentAffiliation, defaultAffiliation, () => currentAffiliation.organization.trim());
  
  const editAffiliation = createEditFunction('affiliations', setCurrentAffiliation);
  const deleteAffiliation = createDeleteFunction('affiliations');

  const addProcedure = createAddFunction('procedures', currentProcedure, setCurrentProcedure, defaultProcedure, () => currentProcedure.name.trim());
  
  const editProcedure = createEditFunction('procedures', setCurrentProcedure);
  const deleteProcedure = createDeleteFunction('procedures');

  const addLanguage = createAddFunction('languages', currentLanguage, setCurrentLanguage, defaultLanguage, () => currentLanguage.name.trim());
  
  const editLanguage = createEditFunction('languages', setCurrentLanguage);
  const deleteLanguage = createDeleteFunction('languages');

  const addSocialLink = () => {
    if (!currentSocialLink.platform || !currentSocialLink.url) return;
    let url = currentSocialLink.url;
    if (!url.match(/^https?:\/\//)) url = `https://${url}`;
    if (currentSocialLink.isEditing) {
      const updated = [...formData.socialLinks];
      updated[currentSocialLink.editIndex] = { platform: currentSocialLink.platform, url };
      setFormData({ ...formData, socialLinks: updated });
    } else {
      setFormData({ ...formData, socialLinks: [...formData.socialLinks, { platform: currentSocialLink.platform, url }] });
    }
    setCurrentSocialLink(defaultSocialLink());
  };

  const editSocialLink = (index) => {
    const link = formData.socialLinks[index];
    setCurrentSocialLink({
      platform: link.platform,
      url: link.url.replace(/^https?:\/\//, '').replace(/\/$/, ''),
      isEditing: true,
      editIndex: index
    });
  };

  const deleteSocialLink = (index) => {
    const updated = [...formData.socialLinks];
    updated.splice(index, 1);
    setFormData({ ...formData, socialLinks: updated });
  };

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

      pdf.save(`${formData.fullName || 'nurse_practitioner_resume'}_resume.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Resume Template for Nurse Practitioner ---
  const NursePractitionerTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasClinicalSkills = formData.clinicalSkills.length > 0;
    const hasPrescriptiveAuthorities = formData.prescriptiveAuthorities.length > 0;
    const hasAffiliations = formData.affiliations.length > 0;
    const hasProcedures = formData.procedures.length > 0;
    const hasLanguages = formData.languages.length > 0;

    return (
      <div className={styles.nursePractitionerTemplate}>
        <header className={styles.resumeHeader}>
          <h1 className={styles.name} style={{ fontSize: `${fontSizes.name}pt` }}>
            {formData.fullName || 'Your Name'}
            {formData.credentials && <span className={styles.credentials}>, {formData.credentials}</span>}
          </h1>
          <div className={styles.contactInfoRow}>
            {formData.email && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.address)) && <div className={styles.contactSeparator}>•</div>}
            {formData.phone && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.address) && <div className={styles.contactSeparator}>•</div>}
            {formData.address && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMapPin /> {formData.address}</div>}
            {formData.socialLinks.map((link, i) => (
              <div key={i} className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}>
                {getSocialIcon(link.platform)} {formatSocialUrl(link.url)}
              </div>
            ))}
          </div>
        </header>

        {hasSummary && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL SUMMARY</h2>
            <p className={styles.summaryText} style={{ fontSize: `${fontSizes.regularText}pt` }}>{formData.summary}</p>
          </section>
        )}

        {hasExperience && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>ADVANCED PRACTICE EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3>
                  <p className={styles.company} style={{ fontSize: `${fontSizes.company}pt` }}>{exp.employer}{exp.department && ` – ${exp.department}`} | {exp.startDate} – {exp.endDate || 'Present'}</p>
                  {exp.facilityType && <p className={styles.facilityInfo}>{exp.facilityType}</p>}
                  {exp.patientPopulation && <p className={styles.patientPopulation}>Patient Population: {exp.patientPopulation}</p>}
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
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EDUCATION & TRAINING</h2>
            {formData.education.map((edu, i) => (
              <div key={i} className={styles.educationItem}>
                <h3 style={{ fontSize: `${fontSizes.degree}pt` }}>
                  {edu.degree}{edu.program && ` – ${edu.program}`}
                  {edu.npSpecialty && ` | ${edu.npSpecialty}`}
                </h3>
                <p className={styles.institution} style={{ fontSize: `${fontSizes.institution}pt` }}>
                  {edu.institution} | 
                  <span className={styles.institutionDate} style={{ fontSize: `${fontSizes.institutionDate}pt` }}>
                    {edu.startDate} – {edu.endDate || 'Present'}
                  </span>
                </p>
                {edu.gpa && <p className={styles.gpa}>GPA: {edu.gpa}</p>}
              </div>
            ))}
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CERTIFICATIONS & LICENSURE</h2>
            {formData.certifications.map((cert, i) => (
              <div key={i} className={styles.certificationItem} style={{ fontSize: `${fontSizes.certificationText}pt` }}>
                <strong>{cert.name}</strong>
                {cert.issuingAuthority && ` – ${cert.issuingAuthority}`}
                {cert.credentialNumber && ` (#${cert.credentialNumber})`}
                {cert.issueDate && ` – Issued: ${cert.issueDate}`}
                {cert.expiryDate && ` – Expires: ${cert.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasPrescriptiveAuthorities && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PRESCRIPTIVE AUTHORITY</h2>
            {formData.prescriptiveAuthorities.map((pa, i) => (
              <div key={i} className={styles.prescriptiveAuthorityItem} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                <strong>{pa.state}</strong>
                {pa.deaNumber && ` – DEA #: ${pa.deaNumber}`}
                {pa.npiNumber && ` – NPI #: ${pa.npiNumber}`}
              </div>
            ))}
          </section>
        )}

        {hasClinicalSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CLINICAL SKILLS & EXPERTISE</h2>
            {formData.clinicalSkills.map((skill, i) => (
              <div key={i} className={styles.clinicalSkillItem}>
                <strong>{skill.category}:</strong> {skill.skills}
              </div>
            ))}
          </section>
        )}

        {hasProcedures && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROCEDURES & CLINICAL COMPETENCIES</h2>
            <ul className={styles.bulletList}>
              {formData.procedures.map((p, i) => <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{p.name}</li>)}
            </ul>
          </section>
        )}

        {hasAffiliations && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL AFFILIATIONS</h2>
            {formData.affiliations.map((a, i) => (
              <div key={i} className={styles.affiliationItem} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                <strong>{a.organization}</strong>
                {a.role && ` – ${a.role}`}
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
      </div>
    );
  };

  return (
    <div className={styles.resumeBuilder} lang="en-US">
      <Head>
        <title>Free Nurse Practitioner Resume Builder: NP CV Templates 2026</title>
        <meta name="title" content="Free Nurse Practitioner Resume Builder: NP CV Templates 2026" />
        <meta name="description" content="Create your ATS-optimized nurse practitioner resume for free in 2026. Professional NP templates trusted by 50,000+ FNPs, AGNPs & PNPs. Download PDF instantly." />
        <meta name="keywords" content="nurse practitioner resume builder, NP resume templates, FNP resume, AGACNP resume, pediatric NP resume, psychiatric NP resume, ATS friendly NP resume, free nurse practitioner resume builder, advanced practice nurse resume, NP CV, nurse practitioner curriculum vitae" />
        <meta name="author" content="Professional Nurse Practitioner Resume Builder" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder" hreflang="x-default" />
        <meta property="og:title" content="Free Nurse Practitioner Resume Builder: NP CV Templates 2026" />
        <meta property="og:description" content="Create your ATS-optimized nurse practitioner resume for free in 2026. Professional NP templates trusted by 50,000+ FNPs, AGNPs & PNPs." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-np-resume-builder-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Nurse Practitioner Resume Builder - Create Professional NP Resumes Online" />
        <meta property="og:url" content="https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nurse Practitioner Resume Builder" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Nurse Practitioner Resume Builder: NP CV Templates 2026" />
        <meta name="twitter:description" content="Create your ATS-optimized nurse practitioner resume for free in 2026. Professional NP templates trusted by 50,000+ FNPs, AGNPs & PNPs." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-np-resume-builder-preview.jpg" />
        <meta name="twitter:image:alt" content="Free Nurse Practitioner Resume Builder with ATS Templates" />
        <meta name="twitter:site" content="@NPResumeBuilder" />
        <meta name="twitter:creator" content="@NPResumeBuilder" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="msapplication-TileColor" content="#1a365d" />
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
                  "@id": "https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder#webpage",
                  "url": "https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder",
                  "name": "Free Nurse Practitioner Resume Builder - ATS Friendly NP Templates 2026",
                  "description": "Create professional ATS-optimized nurse practitioner resumes for free. Land interviews 3x faster with our NP resume builder.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Nurse Practitioner Resume Builder",
                    "description": "Free online resume builder for nurse practitioners and advanced practice nurses",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://www.professionalresumefree.com/#organization",
                      "name": "Nurse Practitioner Resume Builder",
                      "url": "https://www.professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/NPResumeBuilder",
                        "https://www.linkedin.com/company/nurse-practitioner-resume-builder",
                        "https://www.facebook.com/NPResumeBuilder",
                        "https://www.instagram.com/np_resume_builder"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/og-np-resume-builder-preview.jpg",
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
                        "name": "Nurse Practitioner Resume Builder",
                        "item": "https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Nurse Practitioner Resume Builder - ATS Optimized NP Resume Maker",
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
                      "ratingCount": 50365,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online ATS-friendly nurse practitioner resume builder for advanced practice nurses, FNPs, AGACNPs, PNPs, WHNPs, and PMHNPs.",
                    "featureList": [
                      "NP-Specific ATS-Optimized Templates",
                      "Advanced Practice Nursing Content",
                      "Prescriptive Authority Sections",
                      "One-Click PDF Download",
                      "Clinical Experience Formatting",
                      "Mobile-Friendly Editor",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://www.professionalresumefree.com/images/screenshot-np-resume-builder.jpg",
                    "applicationSuite": "Nurse Practitioner Career Tools",
                    "countriesSupported": "USA",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Nurse Practitioner Resume Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional Nurse Practitioner Resume with Our Free Builder",
                  "description": "Step-by-step guide to create an ATS-optimized nurse practitioner resume for free",
                  "totalTime": "PT15M",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "currency": "USD",
                    "value": "0"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "position": 1,
                      "name": "Choose a Nurse Practitioner Template",
                      "text": "Select from our ATS-optimized NP resume templates designed for FNPs, AGACNPs, PNPs, WHNPs, PMHNPs, and all NP specialties.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder#templates",
                      "image": "https://www.professionalresumefree.com/images/step1-np-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Enter Your Advanced Practice Information",
                      "text": "Add your NP clinical experience, education, certifications, prescriptive authority, and specialized skills using our guided forms.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder#editor",
                      "image": "https://www.professionalresumefree.com/images/step2-np-info.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize and Optimize",
                      "text": "Use our NP-specific suggestions to improve advanced practice keywords and formatting for ATS compatibility.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder#optimize",
                      "image": "https://www.professionalresumefree.com/images/step3-optimize.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your NP Resume",
                      "text": "Export your professional nurse practitioner resume as PDF - completely free, no watermarks.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder#download",
                      "image": "https://www.professionalresumefree.com/images/step4-download.jpg"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Online Nurse Practitioner Resume Building Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Nurse Practitioner Resume Builder",
                    "url": "https://www.professionalresumefree.com",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+1-800-555-1234",
                      "contactType": "Customer Support",
                      "availableLanguage": "en"
                    }
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "United States"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Free Nurse Practitioner Resume Building Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "NP ATS Resume Templates"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Nurse Practitioner Resume Editing"
                        }
                      }
                    ]
                  },
                  "description": "Free ATS-friendly nurse practitioner resume builder for advanced practice nurses in the USA",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
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
                        "name": "Nurse Practitioner Resume Builder"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Nurse Practitioner Resume Builder - ATS Optimized NP Resume Maker",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any",
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD"
                        },
                        "description": "Free online ATS-friendly nurse practitioner resume builder that helps advanced practice nurses create professional resumes and land interviews faster.",
                        "url": "https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder"
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
            <Link href="/ats-friendly-nurse-practitioner-resume-builder" className={styles.breadcrumbLink} prefetch={false}>
              <span className={styles.breadcrumbText}>Free NP Templates</span>
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
                Rated 4.9/5 by 50,365+ Nurse Practitioners | Best Free NP Resume Builder 2026
              </span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Create Your NP Resume 2026
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create a <strong className={styles.heroHighlight}>professional, ATS-optimized nurse practitioner resume for free in minutes.</strong> Our NP resume builder ensures your advanced practice experience, credentials, and prescriptive authority get noticed by hospitals and healthcare employers.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free nurse practitioner resume now—no sign-up required"
              >
                <span className={styles.buttonText}>Start Building Your NP Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download nurse practitioner resume as PDF"
                disabled={isGeneratingPDF || !hasContent()}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download NP Resume PDF</span>
              </button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50,000+</span>
                <span className={styles.statLabel}>NP Resumes Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>94%</span>
                <span className={styles.statLabel}>Interview Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>$15K</span>
                <span className={styles.statLabel}>Avg. Salary Increase</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9/5</span>
                <span className={styles.statLabel}>Rating from NPs</span>
              </div>
            </div>

            <div className={styles.npBadges}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem}><FiZap /> FNP Resume Templates</span>
                <span className={styles.badgeItem}><FiHeart /> AGACNP Resumes</span>
                <span className={styles.badgeItem}><FiUsers /> PNP Templates</span>
                <span className={styles.badgeItem}><FiClipboard /> PMHNP CVs</span>
                <span className={styles.badgeItem}><FiActivity /> WHNP Resumes</span>
                <span className={styles.badgeItem}><FiShield /> ENP Templates</span>
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
                  <NursePractitionerTemplate formData={formData} />
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
              { id: 'experience', label: 'NP Experience', icon: <FiHeart /> },
              { id: 'education', label: 'NP Education', icon: <FiBook /> },
              { id: 'certifications', label: 'Certifications', icon: <FiAward /> },
              { id: 'authority', label: 'Prescriptive Auth', icon: <FiShield /> },
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
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Jane Smith, FNP-C" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Credentials*
                      <input type="text" name="credentials" value={formData.credentials} onChange={handleInputChange} placeholder="FNP-C, MSN, RN" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="jane.smith@healthcare.com" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Phone*
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" required className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Location
                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="City, State (License State)" className={styles.formInput} />
                  </label>
                </div>

                <div className={styles.formCard}>
                  <label className={styles.formLabel}>
                    NP Professional Summary*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Board-certified Family Nurse Practitioner with 5+ years of comprehensive experience in primary care and urgent care settings. Skilled in patient assessment, diagnosis, treatment planning, and chronic disease management. Proficient in electronic health records (EHR) and evidence-based practice. Dedicated to providing patient-centered care with a focus on health promotion and disease prevention."
                      required
                      className={styles.formTextarea}
                      rows="6"
                    />
                    <div className={styles.characterCount}>
                      {formData.summary.length}/500 characters
                    </div>
                  </label>
                </div>

                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiGlobe /> Professional Links</h4>
                  <p className={styles.sectionDescription}>Add your professional NP profiles (LinkedIn, Doximity, AANP, portfolio, etc.)</p>
                  <div className={styles.socialInput}>
                    <select 
                      value={currentSocialLink.platform} 
                      onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} 
                      className={styles.formSelect}
                    >
                      <option value="">Select Platform</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Doximity">Doximity</option>
                      <option value="AANP">AANP Profile</option>
                      <option value="Portfolio">Professional Portfolio</option>
                      <option value="Website">Personal Website</option>
                      <option value="NCC">NCC Profile</option>
                      <option value="ANCC">ANCC Profile</option>
                    </select>
                    <input 
                      type="url" 
                      placeholder="https://linkedin.com/in/yourprofile" 
                      value={currentSocialLink.url} 
                      onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, url: e.target.value })} 
                      className={styles.formInput} 
                    />
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addSocialLink} 
                        className={styles.addButton} 
                        disabled={!currentSocialLink.platform || !currentSocialLink.url}
                      >
                        <FiPlus /> {currentSocialLink.isEditing ? 'Update' : 'Add Link'}
                      </button>
                      {currentSocialLink.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentSocialLink(defaultSocialLink())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.socialLinks.length === 0 ? (
                      <p className={styles.emptyMessage}>No professional links added yet</p>
                    ) : (
                      formData.socialLinks.map((link, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemInfo}>
                            <span className={styles.itemPlatform}>{link.platform}</span>
                            <span className={styles.itemUrl}>{formatSocialUrl(link.url)}</span>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editSocialLink(i)} className={styles.editButton} aria-label={`Edit ${link.platform} link`}><FiEdit2 /></button>
                            <button onClick={() => deleteSocialLink(i)} className={styles.deleteButton} aria-label={`Delete ${link.platform} link`}><FiTrash2 /></button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* NP Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiHeart /> Nurse Practitioner Experience</h3>
                <p className={styles.sectionDescription}>List your NP positions in reverse chronological order (most recent first)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      NP Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Family Nurse Practitioner" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Healthcare Facility/Organization*
                      <input 
                        value={currentExperience.employer} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, employer: e.target.value })} 
                        placeholder="City Medical Center" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Department / Specialty Area
                      <input 
                        value={currentExperience.department} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, department: e.target.value })} 
                        placeholder="Primary Care Clinic / Family Medicine" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Facility Type
                      <select 
                        value={currentExperience.facilityType} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, facilityType: e.target.value })} 
                        className={styles.formSelect}
                      >
                        <option value="">Select Facility Type</option>
                        <option value="Hospital">Hospital</option>
                        <option value="Primary Care Clinic">Primary Care Clinic</option>
                        <option value="Urgent Care">Urgent Care</option>
                        <option value="Specialty Clinic">Specialty Clinic</option>
                        <option value="Academic Medical Center">Academic Medical Center</option>
                        <option value="Private Practice">Private Practice</option>
                        <option value="Community Health Center">Community Health Center</option>
                        <option value="Telehealth">Telehealth</option>
                      </select>
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Patient Population
                    <input 
                      value={currentExperience.patientPopulation} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, patientPopulation: e.target.value })} 
                      placeholder="Adult, Geriatric, Pediatric, All Ages" 
                      className={styles.formInput} 
                    />
                  </label>
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
                    Advanced Practice Responsibilities & Achievements*
                    <textarea 
                      value={currentExperience.description} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} 
                      placeholder="• Provide comprehensive primary care to panel of 1500+ patients
• Conduct physical examinations, diagnose acute and chronic conditions
• Develop and implement evidence-based treatment plans
• Prescribe medications and order diagnostic tests
• Manage chronic diseases including diabetes, hypertension, and COPD
• Collaborate with interdisciplinary healthcare team
• Precept NP students and mentor new NPs
• Implement quality improvement initiatives"
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
                      <FiPlus /> {currentExperience.isEditing ? 'Update NP Experience' : 'Add NP Experience'}
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
                  <h4 className={styles.subSectionTitle}>Your NP Experience</h4>
                  {formData.experience.length === 0 ? (
                    <p className={styles.emptyMessage}>No NP experience added yet</p>
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
                              {exp.department && <span>{exp.department}</span>}
                              {exp.facilityType && <span>{exp.facilityType}</span>}
                            </div>
                            {exp.patientPopulation && (
                              <div className={styles.itemMeta}>
                                <span>Population: {exp.patientPopulation}</span>
                              </div>
                            )}
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

                {/* Clinical Skills Section */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiActivity /> Clinical Skills & Expertise</h4>
                  <p className={styles.sectionDescription}>Add your clinical skills by category</p>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Category*
                      <select 
                        value={currentClinicalSkill.category} 
                        onChange={(e) => setCurrentClinicalSkill({ ...currentClinicalSkill, category: e.target.value })} 
                        className={styles.formSelect}
                      >
                        <option value="">Select Category</option>
                        <option value="Assessment & Diagnosis">Assessment & Diagnosis</option>
                        <option value="Chronic Disease Management">Chronic Disease Management</option>
                        <option value="Acute Care">Acute Care Management</option>
                        <option value="Preventive Care">Preventive Care</option>
                        <option value="Procedural Skills">Procedural Skills</option>
                        <option value="Diagnostic Interpretation">Diagnostic Interpretation</option>
                        <option value="Patient Education">Patient Education</option>
                        <option value="Technology">Technology & EHR</option>
                      </select>
                    </label>
                    <label className={styles.formLabel}>
                      Skills*
                      <input 
                        value={currentClinicalSkill.skills} 
                        onChange={(e) => setCurrentClinicalSkill({ ...currentClinicalSkill, skills: e.target.value })} 
                        placeholder="Physical exams, diagnostic reasoning, differential diagnosis" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addClinicalSkill} 
                      className={styles.addButton} 
                      disabled={!currentClinicalSkill.category.trim() || !currentClinicalSkill.skills.trim()}
                    >
                      <FiPlus /> {currentClinicalSkill.isEditing ? 'Update Skills' : 'Add Clinical Skills'}
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
                  <div className={styles.itemsList}>
                    {formData.clinicalSkills.map((skill, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{skill.category}:</strong> {skill.skills}
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

                {/* Procedures Section */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Procedures & Clinical Competencies</h4>
                  <p className={styles.sectionDescription}>List procedures you're competent to perform</p>
                  <div className={styles.skillsInput}>
                    <input 
                      value={currentProcedure.name} 
                      onChange={(e) => setCurrentProcedure({ ...currentProcedure, name: e.target.value })} 
                      placeholder="Skin biopsy, suturing, IUD insertion, joint injection" 
                      className={styles.formInput} 
                    />
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
                    {formData.procedures.map((p, i) => (
                      <div key={i} className={styles.listItem}>
                        <span>{p.name}</span>
                        <div className={styles.itemActions}>
                          <button onClick={() => editProcedure(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteProcedure(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.procedures.length === 0 && <p className={styles.emptyMessage}>No procedures added yet</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Education Section */}
            {activeSection === 'education' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBook /> NP Education & Training</h3>
                <p className={styles.sectionDescription}>List your NP education, degrees, and relevant training</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Institution*
                      <input 
                        value={currentEducation.institution} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                        placeholder="University of California, San Francisco" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Degree*
                      <select 
                        value={currentEducation.degree} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} 
                        className={styles.formSelect}
                        required
                      >
                        <option value="">Select Degree</option>
                        <option value="Doctor of Nursing Practice (DNP)">Doctor of Nursing Practice (DNP)</option>
                        <option value="Master of Science in Nursing (MSN)">Master of Science in Nursing (MSN)</option>
                        <option value="Post-Master's Certificate">Post-Master's Certificate</option>
                        <option value="Bachelor of Science in Nursing (BSN)">Bachelor of Science in Nursing (BSN)</option>
                        <option value="Associate Degree in Nursing (ADN)">Associate Degree in Nursing (ADN)</option>
                      </select>
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      NP Program / Specialty*
                      <select 
                        value={currentEducation.npSpecialty} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, npSpecialty: e.target.value })} 
                        className={styles.formSelect}
                        required
                      >
                        <option value="">Select NP Specialty</option>
                        <option value="Family Nurse Practitioner (FNP)">Family Nurse Practitioner (FNP)</option>
                        <option value="Adult-Gerontology Acute Care NP (AGACNP)">Adult-Gerontology Acute Care NP (AGACNP)</option>
                        <option value="Adult-Gerontology Primary Care NP (AGPCNP)">Adult-Gerontology Primary Care NP (AGPCNP)</option>
                        <option value="Pediatric Nurse Practitioner (PNP)">Pediatric Nurse Practitioner (PNP)</option>
                        <option value="Psychiatric Mental Health NP (PMHNP)">Psychiatric Mental Health NP (PMHNP)</option>
                        <option value="Women's Health NP (WHNP)">Women's Health NP (WHNP)</option>
                        <option value="Emergency NP (ENP)">Emergency NP (ENP)</option>
                        <option value="Neonatal NP (NNP)">Neonatal NP (NNP)</option>
                      </select>
                    </label>
                    <label className={styles.formLabel}>
                      GPA
                      <input 
                        value={currentEducation.gpa} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, gpa: e.target.value })} 
                        placeholder="3.8" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Concentration / Focus Area
                    <input 
                      value={currentEducation.program} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, program: e.target.value })} 
                      placeholder="Primary Care, Acute Care, Behavioral Health" 
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
                      Graduation Date*
                      <input 
                        type="text" 
                        placeholder="Month Year" 
                        value={currentEducation.endDate} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, endDate: e.target.value })} 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addEducation} 
                      className={styles.addButton} 
                      disabled={!currentEducation.institution || !currentEducation.degree || !currentEducation.npSpecialty || !currentEducation.endDate}
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
                  <h4 className={styles.subSectionTitle}>Your NP Education</h4>
                  {formData.education.length === 0 ? (
                    <p className={styles.emptyMessage}>No education added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.education.map((edu, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{edu.degree}</strong>
                              {edu.npSpecialty && <span className={styles.itemSubtitle}> – {edu.npSpecialty}</span>}
                            </div>
                            <div className={styles.itemMeta}>
                              <span>{edu.institution}</span>
                              <span>{edu.startDate} – {edu.endDate}</span>
                            </div>
                            {edu.program && <div className={styles.itemMeta}><span>Focus: {edu.program}</span></div>}
                            {edu.gpa && <div className={styles.itemMeta}><span>GPA: {edu.gpa}</span></div>}
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

            {/* Certifications Section */}
            {activeSection === 'certifications' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiAward /> NP Certifications & Licensure</h3>
                
                {/* Board Certifications */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Board Certifications</h4>
                  <p className={styles.sectionDescription}>Add your NP board certifications</p>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Certification Name*
                      <select 
                        value={currentCertification.name} 
                        onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                        className={styles.formSelect}
                      >
                        <option value="">Select Certification</option>
                        <option value="FNP-C (Family Nurse Practitioner)">FNP-C (Family Nurse Practitioner)</option>
                        <option value="FNP-BC (Family NP - Board Certified)">FNP-BC (Family NP - Board Certified)</option>
                        <option value="AGACNP-BC (Adult-Gerontology Acute Care)">AGACNP-BC (Adult-Gerontology Acute Care)</option>
                        <option value="AGPCNP-BC (Adult-Gerontology Primary Care)">AGPCNP-BC (Adult-Gerontology Primary Care)</option>
                        <option value="PNP-BC (Pediatric NP)">PNP-BC (Pediatric NP)</option>
                        <option value="PMHNP-BC (Psychiatric Mental Health)">PMHNP-BC (Psychiatric Mental Health)</option>
                        <option value="WHNP-BC (Women's Health NP)">WHNP-BC (Women's Health NP)</option>
                        <option value="ENP-BC (Emergency NP)">ENP-BC (Emergency NP)</option>
                        <option value="NNP-BC (Neonatal NP)">NNP-BC (Neonatal NP)</option>
                        <option value="ACNPC-AG (Acute Care NP)">ACNPC-AG (Acute Care NP)</option>
                      </select>
                    </label>
                    <label className={styles.formLabel}>
                      Issuing Authority*
                      <select 
                        value={currentCertification.issuingAuthority} 
                        onChange={(e) => setCurrentCertification({ ...currentCertification, issuingAuthority: e.target.value })} 
                        className={styles.formSelect}
                      >
                        <option value="">Select Authority</option>
                        <option value="American Academy of Nurse Practitioners (AANP)">American Academy of Nurse Practitioners (AANP)</option>
                        <option value="American Nurses Credentialing Center (ANCC)">American Nurses Credentialing Center (ANCC)</option>
                        <option value="Pediatric Nursing Certification Board (PNCB)">Pediatric Nursing Certification Board (PNCB)</option>
                        <option value="National Certification Corporation (NCC)">National Certification Corporation (NCC)</option>
                      </select>
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Credential Number
                      <input 
                        value={currentCertification.credentialNumber} 
                        onChange={(e) => setCurrentCertification({ ...currentCertification, credentialNumber: e.target.value })} 
                        placeholder="123456" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Issue Date
                      <input 
                        value={currentCertification.issueDate} 
                        onChange={(e) => setCurrentCertification({ ...currentCertification, issueDate: e.target.value })} 
                        placeholder="Month Year" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
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
                      disabled={!currentCertification.name.trim() || !currentCertification.issuingAuthority.trim()}
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
                  <div className={styles.itemsList}>
                    {formData.certifications.map((cert, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{cert.name}</strong>
                          {cert.issuingAuthority && ` – ${cert.issuingAuthority}`}
                          {cert.credentialNumber && ` (#${cert.credentialNumber})`}
                          {cert.issueDate && ` – Issued: ${cert.issueDate}`}
                          {cert.expiryDate && ` – Expires: ${cert.expiryDate}`}
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

                {/* State Licenses */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>State Licenses</h4>
                  <p className={styles.sectionDescription}>Add your state NP licenses</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        State*
                        <select 
                          value={currentCertification.name} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                          className={styles.formSelect}
                        >
                          <option value="">Select State</option>
                          <option value="California NP License">California NP License</option>
                          <option value="Texas NP License">Texas NP License</option>
                          <option value="New York NP License">New York NP License</option>
                          <option value="Florida NP License">Florida NP License</option>
                          <option value="Illinois NP License">Illinois NP License</option>
                          <option value="Pennsylvania NP License">Pennsylvania NP License</option>
                          <option value="Ohio NP License">Ohio NP License</option>
                          <option value="Georgia NP License">Georgia NP License</option>
                          <option value="North Carolina NP License">North Carolina NP License</option>
                          <option value="Michigan NP License">Michigan NP License</option>
                        </select>
                      </label>
                      <label className={styles.formLabel}>
                        License Number
                        <input 
                          value={currentCertification.credentialNumber} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, credentialNumber: e.target.value })} 
                          placeholder="RN1234567" 
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
                        <FiPlus /> {currentCertification.isEditing ? 'Update License' : 'Add License'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Professional Affiliations */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Professional Affiliations</h4>
                  <p className={styles.sectionDescription}>Add your professional NP organization memberships</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Organization*
                        <input 
                          value={currentAffiliation.organization} 
                          onChange={(e) => setCurrentAffiliation({ ...currentAffiliation, organization: e.target.value })} 
                          placeholder="American Association of Nurse Practitioners (AANP)" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Role / Membership Type
                        <input 
                          value={currentAffiliation.role} 
                          onChange={(e) => setCurrentAffiliation({ ...currentAffiliation, role: e.target.value })} 
                          placeholder="Active Member, Committee Member" 
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
                          {a.role && ` – ${a.role}`}
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

                {/* Languages */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Languages</h4>
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
                        <select 
                          value={currentLanguage.proficiency} 
                          onChange={(e) => setCurrentLanguage({ ...currentLanguage, proficiency: e.target.value })} 
                          className={styles.formSelect}
                        >
                          <option value="">Select Proficiency</option>
                          <option value="Native">Native</option>
                          <option value="Fluent">Fluent</option>
                          <option value="Professional Working">Professional Working</option>
                          <option value="Limited Working">Limited Working</option>
                          <option value="Elementary">Elementary</option>
                        </select>
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

            {/* Prescriptive Authority Section */}
            {activeSection === 'authority' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiShield /> Prescriptive Authority</h3>
                <p className={styles.sectionDescription}>Add your prescriptive authority information (required for most NP positions)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      State*
                      <select 
                        value={currentPrescriptiveAuthority.state} 
                        onChange={(e) => setCurrentPrescriptiveAuthority({ ...currentPrescriptiveAuthority, state: e.target.value })} 
                        className={styles.formSelect}
                      >
                        <option value="">Select State</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                      </select>
                    </label>
                    <label className={styles.formLabel}>
                      DEA Number
                      <input 
                        value={currentPrescriptiveAuthority.deaNumber} 
                        onChange={(e) => setCurrentPrescriptiveAuthority({ ...currentPrescriptiveAuthority, deaNumber: e.target.value })} 
                        placeholder="AB1234567" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    NPI Number
                    <input 
                      value={currentPrescriptiveAuthority.npiNumber} 
                      onChange={(e) => setCurrentPrescriptiveAuthority({ ...currentPrescriptiveAuthority, npiNumber: e.target.value })} 
                      placeholder="1234567890" 
                      className={styles.formInput} 
                    />
                  </label>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addPrescriptiveAuthority} 
                      className={styles.addButton} 
                      disabled={!currentPrescriptiveAuthority.state.trim()}
                    >
                      <FiPlus /> {currentPrescriptiveAuthority.isEditing ? 'Update Authority' : 'Add Prescriptive Authority'}
                    </button>
                    {currentPrescriptiveAuthority.isEditing && (
                      <button 
                        type="button" 
                        onClick={() => setCurrentPrescriptiveAuthority(defaultPrescriptiveAuthority())} 
                        className={styles.cancelButton}
                      >
                        <FiX /> Cancel
                      </button>
                    )}
                  </div>
                </div>
                
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Your Prescriptive Authority</h4>
                  {formData.prescriptiveAuthorities.length === 0 ? (
                    <p className={styles.emptyMessage}>No prescriptive authority added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.prescriptiveAuthorities.map((pa, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{pa.state}</strong>
                            </div>
                            <div className={styles.itemMeta}>
                              {pa.deaNumber && <span>DEA #: {pa.deaNumber}</span>}
                              {pa.npiNumber && <span>NPI #: {pa.npiNumber}</span>}
                            </div>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editPrescriptiveAuthority(i)} className={styles.editButton} aria-label={`Edit ${pa.state} authority`}><FiEdit2 /></button>
                            <button onClick={() => deletePrescriptiveAuthority(i)} className={styles.deleteButton} aria-label={`Delete ${pa.state} authority`}><FiTrash2 /></button>
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
                <p className={styles.sectionDescription}>Customize font sizes for your NP resume PDF. All sizes are in points (pt).</p>
                
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
              Everything you need to know about creating professional nurse practitioner resumes with our tool.
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
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Advance Your NP Career?</h2>
            <p className={styles.ctaSubtitle}>
              Join 50,000+ nurse practitioners who landed their dream jobs with our free ATS-friendly NP resume builder.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free nurse practitioner resume now—no sign-up required"
              >
                <span className={styles.ctaButtonText}>Create Your Free NP Resume Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>No credit card required • Free forever • Download in minutes • ATS Optimized for NPs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h3>Full Nurse Practitioner Resume Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <NursePractitionerTemplate formData={formData} />
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
    { name: 'Nurse Practitioner Resume Builder', item: 'https://www.professionalresumefree.com/ats-friendly-nurse-practitioner-resume-builder' }
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
    revalidate: 86400
  };
}

export default Resume;